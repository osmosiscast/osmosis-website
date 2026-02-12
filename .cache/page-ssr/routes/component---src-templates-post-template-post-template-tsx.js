"use strict";
exports.id = 359;
exports.ids = [359];
exports.modules = {

/***/ 1397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* reexport */ ThemeSwitcher_ThemeSwitcher)
});

// EXTERNAL MODULE: external "/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(6013);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/hooks/index.ts + 6 modules
var hooks = __webpack_require__(7767);
;// ./src/components/ThemeSwitcher/ThemeSwitcher.module.scss
// Exports
var themeSwitcher = "ThemeSwitcher-module--themeSwitcher--8a77f";
var ThemeSwitcher_module_button = "ThemeSwitcher-module--button--7cb7b";
var moon = "ThemeSwitcher-module--moon--10537";
var sun = "ThemeSwitcher-module--sun--2163a";
var dark = "ThemeSwitcher-module--dark--6db0c";

;// ./src/components/ThemeSwitcher/ThemeSwitcher.tsx
const ThemeSwitcher=()=>{const[{mode},toggleTheme]=(0,hooks/* useTheme */.DP)();const{0:isClient,1:setIsClient}=(0,index_js_.useState)(false);(0,index_js_.useEffect)(()=>{setIsClient(typeof window!=="undefined");},[]);if(!isClient){return null;}return/*#__PURE__*/index_js_default().createElement("div",{className:classnames_default()(themeSwitcher,{[dark]:mode==="dark"})},/*#__PURE__*/index_js_default().createElement("button",{className:ThemeSwitcher_module_button,onClick:toggleTheme},/*#__PURE__*/index_js_default().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},/*#__PURE__*/index_js_default().createElement("title",null,mode),/*#__PURE__*/index_js_default().createElement("path",{pathLength:"1",className:moon,d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}),/*#__PURE__*/index_js_default().createElement("circle",{pathLength:"1",className:sun,cx:"12",cy:"12",r:"5"}),/*#__PURE__*/index_js_default().createElement("line",{pathLength:"1",className:sun,x1:"12",y1:"1",x2:"12",y2:"3"}),/*#__PURE__*/index_js_default().createElement("line",{pathLength:"1",className:sun,x1:"12",y1:"21",x2:"12",y2:"23"}),/*#__PURE__*/index_js_default().createElement("line",{pathLength:"1",className:sun,x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),/*#__PURE__*/index_js_default().createElement("line",{pathLength:"1",className:sun,x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),/*#__PURE__*/index_js_default().createElement("line",{pathLength:"1",className:sun,x1:"1",y1:"12",x2:"3",y2:"12"}),/*#__PURE__*/index_js_default().createElement("line",{pathLength:"1",className:sun,x1:"21",y1:"12",x2:"23",y2:"12"}),/*#__PURE__*/index_js_default().createElement("line",{pathLength:"1",className:sun,x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),/*#__PURE__*/index_js_default().createElement("line",{pathLength:"1",className:sun,x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}))));};/* harmony default export */ const ThemeSwitcher_ThemeSwitcher = (ThemeSwitcher);
;// ./src/components/ThemeSwitcher/index.ts


/***/ }),

/***/ 2798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* reexport */ Layout_Layout)
});

// EXTERNAL MODULE: external "/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(6013);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/hooks/index.ts + 6 modules
var hooks = __webpack_require__(7767);
;// ./src/components/Layout/Layout.module.scss
// Exports
var layout = "Layout-module--layout--2c933";

;// ./src/components/Layout/Layout.tsx
const Layout=({children})=>{const[{mode}]=(0,hooks/* useTheme */.DP)();(0,index_js_.useEffect)(()=>{document.documentElement.className=mode;},[mode]);return/*#__PURE__*/index_js_default().createElement("div",{className:layout},children);};/* harmony default export */ const Layout_Layout = (Layout);
;// ./src/components/Layout/index.ts


/***/ }),

/***/ 2954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ PostTemplate_PostTemplate)
});

// EXTERNAL MODULE: external "/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(6013);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Layout/index.ts + 2 modules
var Layout = __webpack_require__(2798);
// EXTERNAL MODULE: ./src/components/Meta/index.ts + 1 modules
var Meta = __webpack_require__(4476);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// ./src/components/Button/Button.module.scss
// Exports
var Button_module_button = "Button-module--button--b1113";

;// ./src/components/Button/Button.tsx
const Button=({className,title,to})=>/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:classnames_default()(Button_module_button,className),to:to},title);/* harmony default export */ const Button_Button = (Button);
;// ./src/components/Button/index.ts

// EXTERNAL MODULE: ./src/components/ThemeSwitcher/index.ts + 2 modules
var ThemeSwitcher = __webpack_require__(1397);
// EXTERNAL MODULE: ./src/components/Sidebar/Contacts/Contacts.tsx + 4 modules
var Contacts = __webpack_require__(7699);
// EXTERNAL MODULE: ./src/hooks/index.ts + 6 modules
var hooks = __webpack_require__(7767);
;// ./src/components/Post/Author/Author.module.scss
// Exports
var Author_module_author = "Author-module--author--1c58d";
var bio = "Author-module--bio--08950";
var twitter = "Author-module--twitter--90647";

;// ./src/components/Post/Author/Author.tsx
const Author=()=>{const{author}=(0,hooks/* useSiteMetadata */.Q6)();return/*#__PURE__*/index_js_default().createElement("div",{className:Author_module_author},/*#__PURE__*/index_js_default().createElement("p",{className:bio}," ",author.bio," "),/*#__PURE__*/index_js_default().createElement(Contacts/* default */.A,{contacts:author.contacts}));};/* harmony default export */ const Author_Author = (Author);
;// ./src/components/Post/Author/index.ts

// EXTERNAL MODULE: ./node_modules/disqus-react/lib/index.js
var lib = __webpack_require__(1392);
;// ./src/components/Post/Comments/Comments.tsx
const Comments=({postTitle,postSlug})=>{const{url,disqusShortname}=(0,hooks/* useSiteMetadata */.Q6)();if(!disqusShortname){return null;}return/*#__PURE__*/index_js_default().createElement(lib/* DiscussionEmbed */.Mq,{shortname:disqusShortname,config:{url:url+postSlug,identifier:postTitle,title:postTitle}});};/* harmony default export */ const Comments_Comments = (Comments);
;// ./src/components/Post/Comments/index.ts

;// ./src/components/Post/Content/Content.module.scss
// Exports
var content = "Content-module--content--80d58";
var Content_module_title = "Content-module--title--09504";
var Content_module_body = "Content-module--body--726c2";

;// ./src/components/Post/Content/Content.tsx
const Content=({body,title})=>/*#__PURE__*/index_js_default().createElement("div",{className:content},/*#__PURE__*/index_js_default().createElement("h1",{className:Content_module_title},title),/*#__PURE__*/index_js_default().createElement("div",{className:Content_module_body,dangerouslySetInnerHTML:{__html:body}}));/* harmony default export */ const Content_Content = (Content);
;// ./src/components/Post/Content/index.ts

;// ./src/components/Post/Meta/Meta.module.scss
// Exports
var meta = "Meta-module--meta--dae0a";
var Meta_module_date = "Meta-module--date--4d30d";

;// ./src/components/Post/Meta/Meta.tsx
const Meta_Meta=({date})=>/*#__PURE__*/index_js_default().createElement("div",{className:meta},/*#__PURE__*/index_js_default().createElement("p",{className:Meta_module_date},"Published"," ",new Date(date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})));/* harmony default export */ const Post_Meta_Meta = (Meta_Meta);
;// ./src/components/Post/Meta/index.ts

;// ./src/components/Post/Tags/Tags.module.scss
// Exports
var Tags_module_tags = "Tags-module--tags--18589";
var list = "Tags-module--list--82ae6";
var item = "Tags-module--item--52015";

;// ./src/components/Post/Tags/Tags.tsx
const Tags=({tags,tagSlugs})=>/*#__PURE__*/index_js_default().createElement("div",{className:Tags_module_tags},/*#__PURE__*/index_js_default().createElement("ul",{className:list},tagSlugs?tagSlugs.map((slug,i)=>/*#__PURE__*/index_js_default().createElement("li",{className:item,key:slug},/*#__PURE__*/index_js_default().createElement(Button_Button,{title:tags[i],key:slug,to:slug}))):null));/* harmony default export */ const Tags_Tags = (Tags);
;// ./src/components/Post/Tags/index.ts

;// ./src/components/Post/Post.module.scss
// Exports
var Post_module_post = "Post-module--post--3a994";
var Post_module_content = "Post-module--content--3c6e5";
var footer = "Post-module--footer--f8705";
var comments = "Post-module--comments--d3b99";
var buttons = "Post-module--buttons--2972d";
var buttonArticles = "Post-module--buttonArticles--d793a";

;// ./src/components/Post/Post.tsx
const Post=({post})=>{const{html}=post;const{tagSlugs,slug}=post.fields;const{tags,title,date}=post.frontmatter;return/*#__PURE__*/index_js_default().createElement("div",{className:Post_module_post},/*#__PURE__*/index_js_default().createElement("div",{className:buttons},/*#__PURE__*/index_js_default().createElement(Button_Button,{className:buttonArticles,title:"All Episodes",to:"/"}),/*#__PURE__*/index_js_default().createElement(ThemeSwitcher/* ThemeSwitcher */.H,null)),/*#__PURE__*/index_js_default().createElement("div",{className:Post_module_content},/*#__PURE__*/index_js_default().createElement(Content_Content,{body:html,title:title})),/*#__PURE__*/index_js_default().createElement("div",{className:footer},/*#__PURE__*/index_js_default().createElement(Post_Meta_Meta,{date:date}),tags&&tagSlugs&&/*#__PURE__*/index_js_default().createElement(Tags_Tags,{tags:tags,tagSlugs:tagSlugs}),/*#__PURE__*/index_js_default().createElement(Author_Author,null)),/*#__PURE__*/index_js_default().createElement("div",{className:comments},/*#__PURE__*/index_js_default().createElement(Comments_Comments,{postSlug:slug,postTitle:post.frontmatter.title})));};/* harmony default export */ const Post_Post = (Post);
;// ./src/components/Post/index.ts

;// ./src/templates/PostTemplate/PostTemplate.tsx





const PostTemplate = ({
  data: {
    markdownRemark
  }
}) => /*#__PURE__*/index_js_default().createElement(Layout/* Layout */.P, null, /*#__PURE__*/index_js_default().createElement(Post_Post, {
  post: markdownRemark
}));
const query = "1907406254";
const Head = ({
  data
}) => {
  const {
    title,
    subtitle,
    url
  } = (0,hooks/* useSiteMetadata */.Q6)();
  const {
    frontmatter: {
      title: postTitle,
      description: postDescription = "",
      socialImage
    }
  } = data.markdownRemark;
  const description = postDescription || subtitle;
  const image = (socialImage === null || socialImage === void 0 ? void 0 : socialImage.publicURL) && url.concat(socialImage === null || socialImage === void 0 ? void 0 : socialImage.publicURL);
  return /*#__PURE__*/index_js_default().createElement(Meta/* Meta */.W, {
    title: `${postTitle} - ${title}`,
    description: description,
    image: image
  });
};
/* harmony default export */ const PostTemplate_PostTemplate = (PostTemplate);

/***/ }),

/***/ 4476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* reexport */ Meta_Meta)
});

// EXTERNAL MODULE: external "/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(6013);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// ./src/components/Meta/Meta.tsx
const Meta=({description,title,image})=>/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("title",null,title),/*#__PURE__*/index_js_default().createElement("meta",{name:"description",content:description}),/*#__PURE__*/index_js_default().createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/index_js_default().createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/index_js_default().createElement("meta",{name:"twitter:description",content:description}),/*#__PURE__*/index_js_default().createElement("meta",{name:"og:title",content:title}),/*#__PURE__*/index_js_default().createElement("meta",{name:"og:type",content:"website"}),/*#__PURE__*/index_js_default().createElement("meta",{name:"og:description",content:description}),image?/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("meta",{name:"image",content:image}),/*#__PURE__*/index_js_default().createElement("meta",{name:"og:image",content:image}),/*#__PURE__*/index_js_default().createElement("meta",{name:"twitter:image",content:image})):null);/* harmony default export */ const Meta_Meta = (Meta);
;// ./src/components/Meta/index.ts


/***/ }),

/***/ 7699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Contacts_Contacts)
});

// EXTERNAL MODULE: external "/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(6013);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// ./src/components/Icon/Icon.module.scss
// Exports
var Icon_module_icon = "Icon-module--icon--1d7da";

;// ./src/components/Icon/Icon.tsx
const Icon=({name,icon})=>/*#__PURE__*/index_js_default().createElement("svg",{className:Icon_module_icon,viewBox:icon.viewBox},/*#__PURE__*/index_js_default().createElement("title",null,name),/*#__PURE__*/index_js_default().createElement("path",{d:icon.path}));/* harmony default export */ const Icon_Icon = (Icon);
;// ./src/components/Icon/index.ts

// EXTERNAL MODULE: ./src/utils/index.ts + 9 modules
var utils = __webpack_require__(42);
;// ./src/components/Sidebar/Contacts/Contacts.module.scss
// Exports
var Contacts_module_contacts = "Contacts-module--contacts--09178";
var list = "Contacts-module--list--9670b";
var item = "Contacts-module--item--f9cb0";
var Contacts_module_link = "Contacts-module--link--de1e0";

;// ./src/components/Sidebar/Contacts/Contacts.tsx
const Contacts=({contacts})=>{const contactsEntered=Object.keys(contacts).reduce((acc,key)=>contacts[key]&&contacts[key]!==""&&contacts[key]!=="#"?{...acc,[key]:contacts[key]}:acc,{});return Object.keys(contactsEntered).length>0&&/*#__PURE__*/index_js_default().createElement("div",{className:Contacts_module_contacts},/*#__PURE__*/index_js_default().createElement("ul",{className:list},Object.keys(contactsEntered).map(name=>/*#__PURE__*/index_js_default().createElement("li",{className:item,key:name},name==="email"?/*#__PURE__*/index_js_default().createElement("span",{className:Contacts_module_link,onClick:()=>{window.location.href="mailto:"+atob((0,utils/* getContactHref */.ee)(name,contactsEntered[name]));}},/*#__PURE__*/index_js_default().createElement(Icon_Icon,{name:name,icon:(0,utils/* getIcon */.sW)(name)})):/*#__PURE__*/index_js_default().createElement("a",{className:Contacts_module_link,href:(0,utils/* getContactHref */.ee)(name,contactsEntered[name]),target:"_blank",rel:`noopener noreferrer${name==="mastodon"?" me":""}`},/*#__PURE__*/index_js_default().createElement(Icon_Icon,{name:name,icon:(0,utils/* getIcon */.sW)(name)}))))));};/* harmony default export */ const Contacts_Contacts = (Contacts);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-post-template-post-template-tsx.js.map