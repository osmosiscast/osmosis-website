"""Build output tests for the Eleventy site.

Validates the contents of _site/ after a build. Run with:
    npm test
    # or directly:
    poetry run pytest tests/

Requires a prior build: npm run build
"""

import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

import pytest

ITUNES_NS = "http://www.itunes.com/dtds/podcast-1.0.dtd"
PODCAST_NS = "https://podcastindex.org/namespace/1.0"
ATOM_NS = "http://www.w3.org/2005/Atom"


# ---------------------------------------------------------------------------
# RSS feed structure
# ---------------------------------------------------------------------------


class TestRssChannel:
    def test_channel_title(self, rss_channel: ET.Element) -> None:
        title = rss_channel.find("title")
        assert title is not None and title.text

    def test_channel_link(self, rss_channel: ET.Element) -> None:
        link = rss_channel.find("link")
        assert link is not None
        assert link.text is not None and link.text.startswith("https://")

    def test_channel_description(self, rss_channel: ET.Element) -> None:
        desc = rss_channel.find("description")
        assert desc is not None and desc.text

    def test_itunes_author(self, rss_channel: ET.Element) -> None:
        author = rss_channel.find(f"{{{ITUNES_NS}}}author")
        assert author is not None and author.text

    def test_itunes_image(self, rss_channel: ET.Element) -> None:
        image = rss_channel.find(f"{{{ITUNES_NS}}}image")
        assert image is not None
        assert image.get("href", "").startswith("https://")

    def test_podcast_guid(self, rss_channel: ET.Element) -> None:
        guid = rss_channel.find(f"{{{PODCAST_NS}}}guid")
        assert guid is not None and guid.text

    def test_atom_self_link(self, rss_channel: ET.Element) -> None:
        link = rss_channel.find(f"{{{ATOM_NS}}}link")
        assert link is not None
        assert link.get("rel") == "self"
        assert link.get("href", "").endswith("/rss.xml")

    def test_itunes_explicit(self, rss_channel: ET.Element) -> None:
        explicit = rss_channel.find(f"{{{ITUNES_NS}}}explicit")
        assert explicit is not None
        assert explicit.text == "false"


class TestRssItems:
    def test_item_count(
        self, rss_items: list[ET.Element], published_post_count: int
    ) -> None:
        assert len(rss_items) == published_post_count

    def test_items_have_title(self, rss_items: list[ET.Element]) -> None:
        for item in rss_items:
            title = item.find("title")
            assert title is not None and title.text, "RSS item missing title"

    def test_items_have_enclosure(self, rss_items: list[ET.Element]) -> None:
        for item in rss_items:
            enc = item.find("enclosure")
            assert enc is not None, "RSS item missing enclosure"
            assert enc.get("url"), "Enclosure missing url"
            assert enc.get("length"), "Enclosure missing length"
            assert enc.get("type") == "audio/mpeg"

    def test_enclosure_urls_use_op3(self, rss_items: list[ET.Element]) -> None:
        for item in rss_items:
            enc = item.find("enclosure")
            assert enc is not None
            url = enc.get("url", "")
            assert url.startswith(
                "https://op3.dev/e/"
            ), f"Enclosure URL not using OP3 prefix: {url}"

    def test_items_have_guid(self, rss_items: list[ET.Element]) -> None:
        for item in rss_items:
            guid = item.find("guid")
            assert guid is not None and guid.text

    def test_items_have_pubdate(self, rss_items: list[ET.Element]) -> None:
        for item in rss_items:
            pubdate = item.find("pubDate")
            assert pubdate is not None and pubdate.text

    def test_items_have_description(self, rss_items: list[ET.Element]) -> None:
        for item in rss_items:
            desc = item.find("description")
            assert desc is not None and desc.text

    def test_items_have_itunes_duration(self, rss_items: list[ET.Element]) -> None:
        for item in rss_items:
            duration = item.find(f"{{{ITUNES_NS}}}duration")
            assert (
                duration is not None and duration.text
            ), "Item missing itunes:duration"

    def test_items_have_itunes_season(self, rss_items: list[ET.Element]) -> None:
        for item in rss_items:
            season = item.find(f"{{{ITUNES_NS}}}season")
            assert season is not None and season.text

    def test_items_have_itunes_episode(self, rss_items: list[ET.Element]) -> None:
        for item in rss_items:
            episode = item.find(f"{{{ITUNES_NS}}}episode")
            assert episode is not None and episode.text

    def test_no_duplicate_guids(self, rss_items: list[ET.Element]) -> None:
        guids = []
        for item in rss_items:
            guid = item.find("guid")
            assert guid is not None and guid.text
            guids.append(guid.text)
        assert len(guids) == len(set(guids)), "Duplicate GUIDs in RSS feed"


# ---------------------------------------------------------------------------
# URL inventory
# ---------------------------------------------------------------------------


class TestUrlInventory:
    def test_homepage(self, site_dir: Path) -> None:
        assert (site_dir / "index.html").exists()

    def test_404_page(self, site_dir: Path) -> None:
        assert (site_dir / "404.html").exists()

    def test_about_page(self, site_dir: Path) -> None:
        assert (site_dir / "pages" / "about" / "index.html").exists()

    def test_contacts_page(self, site_dir: Path) -> None:
        assert (site_dir / "pages" / "contacts" / "index.html").exists()

    def test_categories_listing(self, site_dir: Path) -> None:
        assert (site_dir / "categories" / "index.html").exists()

    def test_tags_listing(self, site_dir: Path) -> None:
        assert (site_dir / "tags" / "index.html").exists()

    def test_rss_feed(self, site_dir: Path) -> None:
        assert (site_dir / "rss.xml").exists()

    def test_sitemap(self, site_dir: Path) -> None:
        assert (site_dir / "sitemap.xml").exists()

    def test_manifest(self, site_dir: Path) -> None:
        assert (site_dir / "manifest.json").exists()

    def test_css_exists_and_nonempty(self, site_dir: Path) -> None:
        css = site_dir / "assets" / "scss" / "main.css"
        assert css.exists(), "Compiled CSS not found"
        assert css.stat().st_size > 0, "Compiled CSS is empty"

    def test_all_posts_have_pages(
        self, site_dir: Path, published_post_count: int
    ) -> None:
        posts_dir = site_dir / "posts"
        assert posts_dir.is_dir(), "No posts/ directory in build output"
        post_dirs = [d for d in posts_dir.iterdir() if d.is_dir()]
        assert len(post_dirs) == published_post_count, (
            f"Expected {published_post_count} post pages, " f"found {len(post_dirs)}"
        )
        for post_dir in post_dirs:
            assert (
                post_dir / "index.html"
            ).exists(), f"Post {post_dir.name} has no index.html"


# ---------------------------------------------------------------------------
# Build output sanity
# ---------------------------------------------------------------------------


class TestBuildSanity:
    def test_no_template_syntax_in_html(self, html_files: list[Path]) -> None:
        leaked: list[str] = []
        for html_file in html_files:
            content = html_file.read_text(encoding="utf-8")
            if "{{ " in content or "{%" in content:
                rel = html_file.relative_to(html_file.parents[len(html_file.parts) - 2])
                leaked.append(str(rel))
        assert not leaked, f"Template syntax found in: {', '.join(leaked)}"

    def test_no_undefined_in_html(self, html_files: list[Path]) -> None:
        leaked: list[str] = []
        for html_file in html_files:
            content = html_file.read_text(encoding="utf-8")
            if "undefined" in content or "[object Object]" in content:
                rel = html_file.relative_to(html_file.parents[len(html_file.parts) - 2])
                leaked.append(str(rel))
        assert (
            not leaked
        ), f"'undefined' or '[object Object]' found in: {', '.join(leaked)}"

    def test_all_html_have_title(self, html_files: list[Path]) -> None:
        missing: list[str] = []
        for html_file in html_files:
            content = html_file.read_text(encoding="utf-8")
            if "<title>" not in content.lower():
                missing.append(html_file.name)
        assert not missing, f"Missing <title> in: {', '.join(missing)}"

    def test_all_html_are_complete(self, html_files: list[Path]) -> None:
        incomplete: list[str] = []
        for html_file in html_files:
            content = html_file.read_text(encoding="utf-8")
            if "</html>" not in content.lower():
                incomplete.append(html_file.name)
        assert not incomplete, f"Missing </html> in: {', '.join(incomplete)}"

    def test_rss_is_wellformed_xml(self, site_dir: Path) -> None:
        ET.parse(site_dir / "rss.xml")

    def test_sitemap_is_wellformed_xml(self, site_dir: Path) -> None:
        ET.parse(site_dir / "sitemap.xml")


# ---------------------------------------------------------------------------
# Internal links
# ---------------------------------------------------------------------------


class _LinkExtractor(HTMLParser):
    """Extracts href values from <a> tags."""

    def __init__(self) -> None:
        super().__init__()
        self.links: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag == "a":
            for name, value in attrs:
                if name == "href" and value:
                    self.links.append(value)


def _resolve_internal_link(site_dir: Path, href: str) -> bool:
    """Check whether an internal link resolves to a file in _site/."""
    parsed = urlparse(href)
    path = parsed.path

    if not path or not path.startswith("/"):
        return True

    clean = path.lstrip("/")

    if not clean:
        return (site_dir / "index.html").exists()

    target = site_dir / clean
    if target.is_file():
        return True
    if target.is_dir() and (target / "index.html").exists():
        return True
    if (site_dir / f"{clean}.html").exists():
        return True

    return False


class TestInternalLinks:
    def test_no_broken_internal_links(
        self, site_dir: Path, html_files: list[Path]
    ) -> None:
        broken: list[str] = []
        for html_file in html_files:
            content = html_file.read_text(encoding="utf-8")
            extractor = _LinkExtractor()
            extractor.feed(content)

            for href in extractor.links:
                parsed = urlparse(href)
                if parsed.scheme or parsed.netloc:
                    continue
                if href.startswith("#") or href.startswith("mailto:"):
                    continue

                if not _resolve_internal_link(site_dir, href):
                    rel = html_file.relative_to(site_dir)
                    broken.append(f"{rel} → {href}")

        assert not broken, f"Broken internal links:\n" + "\n".join(broken)
