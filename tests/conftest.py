"""Shared fixtures for build output tests."""

import json
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Any

import pytest
import yaml

SITE_DIR = Path(__file__).resolve().parent.parent / "_site"
CONTENT_DIR = Path(__file__).resolve().parent.parent / "content"
POSTS_DIR = Path(__file__).resolve().parent.parent / "src" / "posts"


@pytest.fixture(scope="session")
def site_dir() -> Path:
    if not SITE_DIR.is_dir():
        pytest.fail(f"{SITE_DIR} does not exist — run `npm run build` first")
    return SITE_DIR


def _parse_frontmatter(text: str) -> dict[str, Any]:
    """Extract YAML frontmatter from a markdown file."""
    if not text.startswith("---"):
        return {}
    end = text.index("---", 3)
    return yaml.safe_load(text[3:end]) or {}


@pytest.fixture(scope="session")
def published_post_count() -> int:
    """Count published posts from source markdown frontmatter."""
    count = 0
    for post_dir in POSTS_DIR.iterdir():
        index_md = post_dir / "index.md"
        if not index_md.is_file():
            continue
        frontmatter = _parse_frontmatter(index_md.read_text(encoding="utf-8"))
        if frontmatter.get("draft"):
            continue
        if frontmatter.get("template") != "post":
            continue
        count += 1
    return count


@pytest.fixture(scope="session")
def site_config() -> dict:
    config_path = CONTENT_DIR / "config.json"
    return json.loads(config_path.read_text(encoding="utf-8"))


@pytest.fixture(scope="session")
def rss_tree(site_dir: Path) -> ET.ElementTree:
    rss_path = site_dir / "rss.xml"
    if not rss_path.exists():
        pytest.fail("rss.xml not found in build output")
    return ET.parse(rss_path)


@pytest.fixture(scope="session")
def rss_channel(rss_tree: ET.ElementTree) -> ET.Element:
    channel = rss_tree.getroot().find("channel")
    assert channel is not None
    return channel


@pytest.fixture(scope="session")
def rss_items(rss_channel: ET.Element) -> list[ET.Element]:
    return rss_channel.findall("item")


@pytest.fixture(scope="session")
def html_files(site_dir: Path) -> list[Path]:
    return list(site_dir.rglob("*.html"))
