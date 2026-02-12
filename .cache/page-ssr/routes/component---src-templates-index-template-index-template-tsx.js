"use strict";
exports.id = 411;
exports.ids = [411];
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

/***/ 4099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* reexport */ Page_Page)
});

// EXTERNAL MODULE: external "/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(6013);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// ./src/components/Page/Page.module.scss
// Exports
var page = "Page-module--page--24e03";
var inner = "Page-module--inner--4b31d";
var Page_module_title = "Page-module--title--90338";
var body = "Page-module--body--561c4";

;// ./src/components/Page/Page.tsx
const Page=({title,children})=>{const pageRef=(0,index_js_.useRef)(null);(0,index_js_.useEffect)(()=>{if(pageRef.current){pageRef.current.scrollIntoView();}},[]);return/*#__PURE__*/index_js_default().createElement("div",{ref:pageRef,className:page},/*#__PURE__*/index_js_default().createElement("div",{className:inner},title&&/*#__PURE__*/index_js_default().createElement("h1",{className:Page_module_title},title),/*#__PURE__*/index_js_default().createElement("div",{className:body},children)));};/* harmony default export */ const Page_Page = (Page);
;// ./src/components/Page/index.ts


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

/***/ 5514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* reexport */ Sidebar_Sidebar)
});

// EXTERNAL MODULE: external "/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(6013);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/hooks/index.ts + 6 modules
var hooks = __webpack_require__(7767);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(4722);
;// ./src/components/Image/Image.tsx
const Image=({path,...rest})=>/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.StaticQuery,{query:"63107425",render:data=>{const{images:{edges=[]}={}}=data;const image=edges.find(({node})=>node.absolutePath.includes(path));if(!image){return null;}const{node:{childImageSharp}}=image;return/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* GatsbyImage */.mV,Object.assign({},rest,{image:childImageSharp.gatsbyImageData}));}});/* harmony default export */ const Image_Image = (Image);
;// ./src/components/Image/index.ts

// EXTERNAL MODULE: ./src/components/ThemeSwitcher/index.ts + 2 modules
var ThemeSwitcher = __webpack_require__(1397);
;// ./src/components/Sidebar/Author/Author.module.scss
// Exports
var Author_module_author = "Author-module--author--cbd31";
var photo = "Author-module--photo--9787b";
var title = "Author-module--title--cf7e5";
var Author_module_link = "Author-module--link--09c17";
var subtitle = "Author-module--subtitle--86ec5";
var titleContainer = "Author-module--titleContainer--4f576";

;// ./src/components/Sidebar/Author/Author.tsx
const Author=({author,isIndex})=>/*#__PURE__*/index_js_default().createElement("div",{className:Author_module_author},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/index_js_default().createElement(Image_Image,{alt:author.name,path:author.photo,className:photo})),/*#__PURE__*/index_js_default().createElement("div",{className:titleContainer},isIndex?/*#__PURE__*/index_js_default().createElement("h1",{className:title},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:Author_module_link,to:"/"},author.name)):/*#__PURE__*/index_js_default().createElement("h2",{className:title},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:Author_module_link,to:"/"},author.name)),/*#__PURE__*/index_js_default().createElement(ThemeSwitcher/* ThemeSwitcher */.H,null)),/*#__PURE__*/index_js_default().createElement("p",{className:subtitle},author.bio));/* harmony default export */ const Author_Author = (Author);
;// ./src/components/Sidebar/Author/index.ts

// EXTERNAL MODULE: ./src/components/Sidebar/Contacts/Contacts.tsx + 4 modules
var Contacts = __webpack_require__(7699);
;// ./src/components/Sidebar/Contacts/index.ts

;// ./src/components/Sidebar/Copyright/Copyright.module.scss
// Exports
var Copyright_module_copyright = "Copyright-module--copyright--2c602";

;// ./src/components/Sidebar/Copyright/Copyright.tsx
const Copyright=({copyright})=>/*#__PURE__*/index_js_default().createElement("div",{className:Copyright_module_copyright},copyright);/* harmony default export */ const Copyright_Copyright = (Copyright);
;// ./src/components/Sidebar/Copyright/index.ts

;// ./src/components/Sidebar/Menu/Menu.module.scss
// Exports
var Menu_module_menu = "Menu-module--menu--113a9";
var list = "Menu-module--list--e1ae3";
var Menu_module_item = "Menu-module--item--8b679";
var Menu_module_link = "Menu-module--link--a6f02";
var active = "Menu-module--active--6cb74";

;// ./src/components/Sidebar/Menu/Menu.tsx
const Menu=({menu})=>/*#__PURE__*/index_js_default().createElement("nav",{className:Menu_module_menu},/*#__PURE__*/index_js_default().createElement("ul",{className:list},menu.map(item=>/*#__PURE__*/index_js_default().createElement("li",{className:Menu_module_item,key:item.path},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:item.path,className:Menu_module_link,activeClassName:active},item.label)))));/* harmony default export */ const Menu_Menu = (Menu);
;// ./src/components/Sidebar/Menu/index.ts

;// ./src/components/Sidebar/Sidebar.module.scss
// Exports
var sidebar = "Sidebar-module--sidebar--1bfa1";
var inner = "Sidebar-module--inner--344d0";

;// ./src/components/Sidebar/Sidebar.tsx
const Sidebar=({isIndex})=>{const{author,copyright,menu}=(0,hooks/* useSiteMetadata */.Q6)();return/*#__PURE__*/index_js_default().createElement("div",{className:sidebar},/*#__PURE__*/index_js_default().createElement("div",{className:inner},/*#__PURE__*/index_js_default().createElement(Author_Author,{author:author,isIndex:isIndex}),/*#__PURE__*/index_js_default().createElement(Menu_Menu,{menu:menu}),/*#__PURE__*/index_js_default().createElement(Contacts/* default */.A,{contacts:author.contacts}),/*#__PURE__*/index_js_default().createElement(Copyright_Copyright,{copyright:copyright})));};/* harmony default export */ const Sidebar_Sidebar = (Sidebar);
;// ./src/components/Sidebar/index.ts


/***/ }),

/***/ 7571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6013);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9377);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2798);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4476);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4099);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7755);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5514);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7767);








const IndexTemplate = ({
  data,
  pageContext
}) => {
  const {
    pagination
  } = pageContext;
  const {
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pagination;
  const {
    edges
  } = data.allMarkdownRemark;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .P, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__/* .Sidebar */ .B, {
    isIndex: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Page__WEBPACK_IMPORTED_MODULE_4__/* .Page */ .Y, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Feed__WEBPACK_IMPORTED_MODULE_1__/* .Feed */ .J, {
    edges: edges
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__/* .Pagination */ .d, {
    prevPagePath: prevPagePath,
    nextPagePath: nextPagePath,
    hasPrevPage: hasPrevPage,
    hasNextPage: hasNextPage
  })));
};
const query = "43129790";
const Head = ({
  pageContext
}) => {
  const {
    title,
    subtitle
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useSiteMetadata */ .Q6)();
  const {
    pagination: {
      currentPage: page
    }
  } = pageContext;
  const pageTitle = page > 0 ? `Posts - Page ${page} - ${title}` : title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W, {
    title: pageTitle,
    description: subtitle
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexTemplate);

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

/***/ }),

/***/ 7755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* reexport */ Pagination_Pagination)
});

// EXTERNAL MODULE: external "/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(6013);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./src/constants/index.ts + 2 modules
var constants = __webpack_require__(9506);
;// ./src/components/Pagination/Pagination.module.scss
// Exports
var pagination = "Pagination-module--pagination--d61cb";
var previous = "Pagination-module--previous--4a76b";
var previousLink = "Pagination-module--previousLink--5590d";
var disable = "Pagination-module--disable--7e105";
var next = "Pagination-module--next--1cab8";
var nextLink = "Pagination-module--nextLink--532ff";

;// ./src/components/Pagination/Pagination.tsx
const Pagination=({prevPagePath,nextPagePath,hasNextPage,hasPrevPage})=>{const prevClassName=classnames_default()(previousLink,{[disable]:!hasPrevPage});const nextClassName=classnames_default()(nextLink,{[disable]:!hasNextPage});return/*#__PURE__*/index_js_default().createElement("div",{className:pagination},/*#__PURE__*/index_js_default().createElement("div",{className:previous},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{rel:"prev",to:hasPrevPage?prevPagePath:"/",className:prevClassName},constants/* PAGINATION */.B.PREV_PAGE)),/*#__PURE__*/index_js_default().createElement("div",{className:next},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{rel:"next",to:hasNextPage?nextPagePath:"/",className:nextClassName},constants/* PAGINATION */.B.NEXT_PAGE)));};/* harmony default export */ const Pagination_Pagination = (Pagination);
;// ./src/components/Pagination/index.ts


/***/ }),

/***/ 9377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* reexport */ Feed_Feed)
});

// EXTERNAL MODULE: external "/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(6013);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// ./src/components/Feed/Feed.module.scss
// Exports
var feed = "Feed-module--feed--a6204";
var item = "Feed-module--item--c7a63";
var title = "Feed-module--title--f252f";
var Feed_module_link = "Feed-module--link--6123b";
var description = "Feed-module--description--57348";
var meta = "Feed-module--meta--250c2";
var time = "Feed-module--time--72864";
var divider = "Feed-module--divider--81a18";
var category = "Feed-module--category--59f58";
var more = "Feed-module--more--51a4e";

;// ./src/components/Feed/Feed.tsx
const Feed=({edges})=>/*#__PURE__*/index_js_default().createElement("div",{className:feed},edges.map(edge=>{var _edge$node$frontmatte,_edge$node$frontmatte2;return/*#__PURE__*/index_js_default().createElement("div",{className:item,key:edge.node.fields.slug},/*#__PURE__*/index_js_default().createElement("div",{className:meta},/*#__PURE__*/index_js_default().createElement("time",{className:time,dateTime:new Date(edge.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(edge.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),/*#__PURE__*/index_js_default().createElement("span",{className:divider}),/*#__PURE__*/index_js_default().createElement("span",{className:category},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:edge.node.fields.categorySlug,className:Feed_module_link},edge.node.frontmatter.category))),/*#__PURE__*/index_js_default().createElement("h2",{className:title},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:Feed_module_link,to:((_edge$node$frontmatte=edge.node.frontmatter)===null||_edge$node$frontmatte===void 0?void 0:_edge$node$frontmatte.slug)||edge.node.fields.slug},edge.node.frontmatter.title)),/*#__PURE__*/index_js_default().createElement("p",{className:description},edge.node.frontmatter.description),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:more,to:((_edge$node$frontmatte2=edge.node.frontmatter)===null||_edge$node$frontmatte2===void 0?void 0:_edge$node$frontmatte2.slug)||edge.node.fields.slug},"More"));}));/* harmony default export */ const Feed_Feed = (Feed);
;// ./src/components/Feed/index.ts


/***/ })

};
;
//# sourceMappingURL=component---src-templates-index-template-index-template-tsx.js.map