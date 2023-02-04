// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jC2qd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _constants = require("./modules/constants");
var _eventHandlersJs = require("./modules/eventHandlers.js");
// -- Buttons --
const initButtons = ()=>{
    (0, _constants.playButton).addEventListener("click", ()=>(0, _eventHandlersJs.togglePlay)());
    (0, _constants.clearButton).addEventListener("click", ()=>(0, _eventHandlersJs.clearBoard)());
    (0, _constants.soundButton).addEventListener("click", ()=>(0, _eventHandlersJs.toggleSound)());
};
const initAudio = ()=>{
    (0, _constants.audioNature).volume = 0.3;
    (0, _constants.audioFire).volume = 0;
};
// -- Initital Board Set-Up --
const createAndShowBoard = ()=>{
    const board = document.createElement("tbody");
    (0, _constants.main).appendChild(board);
    for(let i = 0; i < (0, _constants.boardState).width; i++){
        let row = document.createElement("tr");
        board.appendChild(row);
        for(let j = 0; j < (0, _constants.boardState).height; j++){
            (0, _constants.boardState).cells[`${i}-${j}`] = "dormant";
            let cell = document.createElement("td");
            let img = document.createElement("img");
            cell.id = `${i}-${j}`;
            cell.className = "dormant";
            cell.appendChild(img);
            row.appendChild(cell);
        }
    }
};
initButtons();
initAudio();
createAndShowBoard();

},{"./modules/constants":"e0Zqh","./modules/eventHandlers.js":"cw0Bk"}],"e0Zqh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "intervalMs", ()=>intervalMs);
parcelHelpers.export(exports, "blooms", ()=>blooms);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "canvas", ()=>canvas);
parcelHelpers.export(exports, "audioNature", ()=>audioNature);
parcelHelpers.export(exports, "audioFire", ()=>audioFire);
parcelHelpers.export(exports, "playButton", ()=>playButton);
parcelHelpers.export(exports, "clearButton", ()=>clearButton);
parcelHelpers.export(exports, "soundButton", ()=>soundButton);
parcelHelpers.export(exports, "boardState", ()=>boardState);
var _bloom11XGif = require("../images/bloom-1-1x.gif");
var _bloom11XGifDefault = parcelHelpers.interopDefault(_bloom11XGif);
var _bloom21XGif = require("../images/bloom-2-1x.gif");
var _bloom21XGifDefault = parcelHelpers.interopDefault(_bloom21XGif);
var _bloom31XGif = require("../images/bloom-3-1x.gif");
var _bloom31XGifDefault = parcelHelpers.interopDefault(_bloom31XGif);
var _bloom41XGif = require("../images/bloom-4-1x.gif");
var _bloom41XGifDefault = parcelHelpers.interopDefault(_bloom41XGif);
var _bloom572PxGif = require("../images/bloom-5-72px.gif");
var _bloom572PxGifDefault = parcelHelpers.interopDefault(_bloom572PxGif);
const intervalMs = 4000;
const blooms = [
    (0, _bloom11XGifDefault.default),
    (0, _bloom21XGifDefault.default),
    (0, _bloom31XGifDefault.default),
    (0, _bloom41XGifDefault.default),
    (0, _bloom572PxGifDefault.default)
];
const main = document.getElementById("main");
const canvas = document.getElementById("canvas");
const audioNature = document.getElementById("audioPlayer");
const audioFire = document.getElementById("fireAudioPlayer");
const playButton = document.getElementById("play");
const clearButton = document.getElementById("clear");
const soundButton = document.getElementById("sound");
const boardState = {
    width: 18,
    height: 18,
    interval: null,
    cells: {},
    playing: false,
    firstPlay: false
};

},{"../images/bloom-1-1x.gif":"9F8ZI","../images/bloom-2-1x.gif":"8ugN4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../images/bloom-3-1x.gif":"7oCXt","../images/bloom-4-1x.gif":"fMaee","../images/bloom-5-72px.gif":"5P0hS"}],"9F8ZI":[function(require,module,exports) {
module.exports = require("4988ff20c5d160e4").getBundleURL("bLxZJ") + "bloom-1-1x.0b776264.gif" + "?" + Date.now();

},{"4988ff20c5d160e4":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"8ugN4":[function(require,module,exports) {
module.exports = require("253371f0b61631ec").getBundleURL("bLxZJ") + "bloom-2-1x.89ff1566.gif" + "?" + Date.now();

},{"253371f0b61631ec":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7oCXt":[function(require,module,exports) {
module.exports = require("d7c3ebed3289fef9").getBundleURL("bLxZJ") + "bloom-3-1x.4e6f08a7.gif" + "?" + Date.now();

},{"d7c3ebed3289fef9":"lgJ39"}],"fMaee":[function(require,module,exports) {
module.exports = require("5321a321f2186079").getBundleURL("bLxZJ") + "bloom-4-1x.9d956b3a.gif" + "?" + Date.now();

},{"5321a321f2186079":"lgJ39"}],"5P0hS":[function(require,module,exports) {
module.exports = require("3e74793eb9ae202c").getBundleURL("bLxZJ") + "bloom-5-72px.2597b025.gif" + "?" + Date.now();

},{"3e74793eb9ae202c":"lgJ39"}],"cw0Bk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "togglePlay", ()=>togglePlay);
parcelHelpers.export(exports, "clearBoard", ()=>clearBoard);
parcelHelpers.export(exports, "toggleSound", ()=>toggleSound);
var _constants = require("./constants");
var _game = require("./game");
const togglePlay = ()=>{
    if (!(0, _constants.boardState).playing) {
        let nextBoardState = Object.assign({}, (0, _constants.boardState).cells);
        (0, _game.forEachCell)((cell, row, col)=>{
            if (Math.floor((row + col) * Math.random()) % 5 === 0) nextBoardState[`${col}-${row}`] = "alive";
        });
        (0, _game.setNextState)(nextBoardState);
        (0, _constants.playButton).innerHTML = "Pause";
        (0, _constants.boardState).playing = true;
        (0, _constants.boardState).interval = setInterval((0, _game.step), (0, _constants.intervalMs));
    } else {
        clearInterval((0, _constants.boardState).interval);
        (0, _constants.boardState).interval = null;
        (0, _constants.playButton).innerHTML = "Play";
        (0, _constants.boardState).playing = false;
    }
};
const clearBoard = ()=>{
    let nextBoardState = Object.assign({}, (0, _constants.boardState).cells);
    (0, _game.forEachCell)((cell, row, col)=>{
        nextBoardState[`${col}-${row}`] = "dormant";
    });
    (0, _game.setNextState)(nextBoardState);
    clearInterval((0, _constants.boardState).interval);
    (0, _constants.boardState).interval = null;
    (0, _constants.boardState).playing = false;
    (0, _constants.playButton).innerHTML = "Play";
    (0, _constants.audioNature).volume = 0.3;
    (0, _constants.boardState).firstPlay = false;
};
// Toggle Audio
let soundOn = false;
const toggleSound = (evt)=>{
    if (soundOn) {
        (0, _constants.audioNature).pause();
        (0, _constants.audioFire).pause();
        (0, _constants.soundButton).classList.add("off");
        soundOn = false;
    } else {
        (0, _constants.audioNature).play();
        (0, _constants.audioFire).play();
        (0, _constants.soundButton).classList.remove("off");
        soundOn = true;
    }
};

},{"./constants":"e0Zqh","./game":"cyx8j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cyx8j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forEachCell", ()=>forEachCell);
parcelHelpers.export(exports, "setNextState", ()=>setNextState);
parcelHelpers.export(exports, "step", ()=>step);
var _constants = require("./constants");
var _soundUtils = require("./soundUtils");
// Get individual cell from document
const getCell = (row, col)=>{
    let theCell = document.getElementById(`${col}-${row}`);
    if (!theCell) return null;
    theCell.xCoord = col;
    theCell.yCoord = row;
    return theCell;
};
const forEachCell = (iteratorFunc)=>{
    for(let col = 0; col < (0, _constants.boardState).width; col++)for(let row = 0; row < (0, _constants.boardState).height; row++){
        let theCell = getCell(row, col);
        iteratorFunc(theCell, row, col);
    }
};
// Get neighboring cells for a single cell
const getNeighborhood = (cell, row, col)=>{
    let neighborIds = [];
    for(let i = col - 1; i <= col + 1; i++)for(let j = row - 1; j <= row + 1; j++){
        if (i !== col || j !== row) {
            if (i > -1 && j > -1) {
                let neighborId = i + "-" + j;
                if (neighborId) neighborIds.push(neighborId);
            }
        }
    }
    return neighborIds;
};
// Get number of living neighbors for a single cell
const countLiveNeighbors = (neighborIds)=>{
    let liveNeighbors = 0;
    neighborIds.map((id)=>{
        return document.getElementById(id);
    }).forEach((neighbor)=>{
        if (neighbor && neighbor.classList.contains("alive")) liveNeighbors++;
    });
    return liveNeighbors;
};
// Determine next state for a single cell, based on numbr of live neighbors
const getNextState = (cell, row, col)=>{
    let neighborhood = getNeighborhood(cell, row, col);
    let liveNeighbors = countLiveNeighbors(neighborhood);
    let status = cell.classList;
    if (status.contains("alive")) {
        if (liveNeighbors < 2 || liveNeighbors > 3) return "dead";
        else return status;
    } else {
        if (liveNeighbors === 3) return "alive";
        else return "dormant";
    }
};
// Set new bloom gif for each live cell
const getBloom = ()=>{
    let idx = Math.floor(Math.random() * 5);
    return (0, _constants.blooms)[idx];
};
const setNextState = (nextBoardState)=>{
    for(let cellId in nextBoardState)if (nextBoardState.hasOwnProperty(cellId)) {
        let nextCellState = nextBoardState[cellId];
        (0, _constants.boardState).cells[cellId] = nextCellState;
        let cell = document.getElementById(cellId);
        cell.className = nextCellState;
        if (cell.className === "alive") cell.querySelector("img").src = getBloom();
    }
    (0, _soundUtils.setVolume)();
};
const step = ()=>{
    let nextBoardState = Object.assign({}, (0, _constants.boardState).cells);
    forEachCell((cell, row, col)=>{
        nextBoardState[`${col}-${row}`] = getNextState(cell, row, col);
    });
    setNextState(nextBoardState);
};

},{"./constants":"e0Zqh","./soundUtils":"7lXCJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7lXCJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setVolume", ()=>setVolume);
var _constants = require("./constants");
/* SCROLL TO BOTTOM */ const getVolumeNature = (volumeFire)=>{
    let volumeNature;
    if ((0, _constants.boardState).hasPlayed) {
        (0, _constants.boardState).hasPlayed = !!(0, _constants.boardState).hasPlayed;
        volumeNature = 0.5;
    } else volumeNature = 1 - volumeFire;
    return volumeNature;
};
const getVolumeFire = ()=>{
    let volumeFire;
    const numTotalCells = Object.keys((0, _constants.boardState).cells).length;
    const numDeadCells = Object.values((0, _constants.boardState).cells).filter((cell)=>cell === "dead").length;
    console.log(numDeadCells);
    volumeFire === 0 || numDeadCells;
    return volumeFire / numTotalCells;
};
const setVolume = ()=>{
    const volumeFire = getVolumeFire();
    console.log(volumeFire);
    const volumeNature = getVolumeNature(volumeFire);
    (0, _constants.audioFire).volume = volumeFire;
    (0, _constants.audioNature).volume = volumeNature;
};

},{"./constants":"e0Zqh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequiref626")

//# sourceMappingURL=index.975ef6c8.js.map
