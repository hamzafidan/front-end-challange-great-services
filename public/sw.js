if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/T2x_83k1Gi7M_cV0N1oJ3/_buildManifest.js",revision:"T2x_83k1Gi7M_cV0N1oJ3"},{url:"/_next/static/T2x_83k1Gi7M_cV0N1oJ3/_ssgManifest.js",revision:"T2x_83k1Gi7M_cV0N1oJ3"},{url:"/_next/static/chunks/668-272a9ff2f5aaf6ccc24e.js",revision:"T2x_83k1Gi7M_cV0N1oJ3"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"T2x_83k1Gi7M_cV0N1oJ3"},{url:"/_next/static/chunks/main-62a3e12e79ce59795999.js",revision:"T2x_83k1Gi7M_cV0N1oJ3"},{url:"/_next/static/chunks/pages/_app-fbd73e11aeeb1b6f4014.js",revision:"T2x_83k1Gi7M_cV0N1oJ3"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"T2x_83k1Gi7M_cV0N1oJ3"},{url:"/_next/static/chunks/pages/index-74d1a66b7e964e5920ce.js",revision:"T2x_83k1Gi7M_cV0N1oJ3"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"T2x_83k1Gi7M_cV0N1oJ3"},{url:"/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",revision:"T2x_83k1Gi7M_cV0N1oJ3"},{url:"/_next/static/css/6cb3e0598ff07feae09c.css",revision:"T2x_83k1Gi7M_cV0N1oJ3"},{url:"/_next/static/css/a27950f9b410b9983e36.css",revision:"T2x_83k1Gi7M_cV0N1oJ3"},{url:"/android-chrome-192x192.png",revision:"87c0c73144d385b9a74f249d7aec0834"},{url:"/android-chrome-512x512.png",revision:"73b9ce6a703bc6722d1f0427b203b351"},{url:"/apple-touch-icon.png",revision:"f8482200f6f8e7485dccd7487a59d634"},{url:"/browserconfig.xml",revision:"b0df1d8364886483f481bc261ea8db4b"},{url:"/favicon-16x16.png",revision:"16e0adef09813898629485a255b33779"},{url:"/favicon-32x32.png",revision:"4a68e63a10187a51a638ebe9a4137b0a"},{url:"/favicon.ico",revision:"356b571045ccae49aff27faa674bb8cf"},{url:"/fonts/CircularStd/CircularStd-Black.otf",revision:"7f42d8488652eb250af2f484d377dbee"},{url:"/fonts/CircularStd/CircularStd-BlackItalic.otf",revision:"0cda47fe41243fb61f2ffd71f3a811b8"},{url:"/fonts/CircularStd/CircularStd-Bold.otf",revision:"6baed2bf580964bec9559ad83caee43d"},{url:"/fonts/CircularStd/CircularStd-BoldItalic.otf",revision:"8bbbf07a96f614a3849b681885be45bf"},{url:"/fonts/CircularStd/CircularStd-Book.otf",revision:"6365c40aa59d462f1cc52ccce9635cb4"},{url:"/fonts/CircularStd/CircularStd-BookItalic.otf",revision:"f1e69e389c1b9f463541c6e2f978d2a3"},{url:"/fonts/CircularStd/CircularStd-Light Italic.otf",revision:"e0e0aee6e0b17f6da833f1c3b95422d1"},{url:"/fonts/CircularStd/CircularStd-Light.otf",revision:"0d87e6913e64a11189278400b4e0ed46"},{url:"/fonts/CircularStd/CircularStd-Medium.otf",revision:"4fcdd97fadc3a1d9887f816f2aa67f1d"},{url:"/fonts/CircularStd/CircularStd-MediumItalic.otf",revision:"dcb304fd3cf40dbdd46bd67ccc43d6fd"},{url:"/fonts/CircularStd/CircularStd.css",revision:"75a78bb10dd2f68f3629020a37eb8276"},{url:"/manifest.json",revision:"d4f2681d4c8052c016029600d5bebaf8"},{url:"/maskable_icon_x512.png",revision:"cd38846c37e5711d7c3e9212a3126b47"},{url:"/mstile-144x144.png",revision:"7cdfc594323953c8aa2bb49beef632f1"},{url:"/mstile-150x150.png",revision:"c179792ad398a3efd265751af9115981"},{url:"/mstile-310x150.png",revision:"cab161470c872dd69b14c3b55bbfae56"},{url:"/mstile-310x310.png",revision:"4ce078a480528146945b51bcd1aee186"},{url:"/mstile-70x70.png",revision:"1bc89ae810c4368dbc787f774066b3d4"},{url:"/safari-pinned-tab.svg",revision:"4777837f4f203a71380de818bb736c72"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
