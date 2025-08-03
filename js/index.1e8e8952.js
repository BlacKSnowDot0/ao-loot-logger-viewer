(function (e) {
  function t(t) {
    for (var s, i, n = t[0], l = t[1], d = t[2], c = 0, m = []; c < n.length; c++) i = n[c], Object.prototype.hasOwnProperty.call(a, i) && a[i] && m.push(a[i][0]), a[i] = 0;
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
    u && u(t);
    while (m.length) m.shift()();
    return r.push.apply(r, d || []), o();
  }
  function o() {
    for (var e, t = 0; t < r.length; t++) {
      for (var o = r[t], s = true, i = 1; i < o.length; i++) {
        var l = o[i];
        0 !== a[l] && (s = false);
      }
      s && (r.splice(t--, 1), e = n(n.s = o[0]));
    }
    return e;
  }
  var s = {}, a = {index: 0}, r = [];
  function n(t) {
    if (s[t]) return s[t].exports;
    var o = s[t] = {i: t, l: false, exports: {}};
    return e[t].call(o.exports, o, o.exports, n), o.l = true, o.exports;
  }
  n.e = function (e) {
    var t = [], o = a[e];
    if (0 !== o) if (o) t.push(o[2]); else {
      var s = new Promise(function (t, s) {
        o = a[e] = [t, s];
      });
      t.push(o[2] = s);
      var r, l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, n.nc && l.setAttribute("nonce", n.nc), l.src = n.p + "js/" + ({}[e] || e) + "." + {"chunk-2d0b1f6a": "3b752c53"}[e] + ".js";
      var d = new Error;
      r = function (t) {
        l.onerror = l.onload = null, clearTimeout(c);
        var o = a[e];
        if (0 !== o) {
          if (o) {
            var s = t && ("load" === t.type ? "missing" : t.type), r = t && t.target && t.target.src;
            d.message = "Loading chunk " + e + " failed.\n(" + s + ": " + r + ")", d.name = "ChunkLoadError", d.type = s, d.request = r, o[1](d);
          }
          a[e] = undefined;
        }
      };
      var c = setTimeout(function () {
        r({type: "timeout", target: l});
      }, 12e4);
      l.onerror = l.onload = r, document.head.appendChild(l);
    }
    return Promise.all(t);
  }, n.m = e, n.c = s, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {enumerable: true, get: o});
  }, n.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: true});
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {enumerable: true, value: e}), 2 & t && "string" != typeof e) for (var s in e) n.d(o, s, function (t) {
      return e[t];
    }.bind(null, s));
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "/ao-loot-logger-viewer/", n.oe = function (e) {
    throw console.error(e), e;
  };
  var l = window.webpackJsonp = window.webpackJsonp || [], d = l.push.bind(l);
  l.push = t, l = l.slice();
  for (var c = 0; c < l.length; c++) t(l[c]);
  var u = d;
  r.push([0, "chunk-vendors"]), o();
}({0: function (e, t, o) {
  e.exports = o("56d7");
}, "01e7": function (e, t, o) {
  "use strict";
  o("f2b3");
}, "0c1d": function (e, t, o) {
  "use strict";
  o("3eee");
}, 1: function (e, t) {}, 10: function (e, t) {}, 11: function (e, t) {}, 12: function (e, t) {}, 13: function (e, t) {}, "13b5": function (e, t, o) {}, 14: function (e, t) {}, "1ab4": function (e, t, o) {
  "use strict";
  o("fc8b");
}, 2: function (e, t) {}, 3: function (e, t) {}, "3eee": function (e, t, o) {}, 4: function (e, t) {}, 4678: function (e, t, o) {
  var s = {"./af": "2bfb", "./af.js": "2bfb", "./ar": "8e73", "./ar-dz": "a356", "./ar-dz.js": "a356", "./ar-kw": "423e", "./ar-kw.js": "423e", "./ar-ly": "1cfd", "./ar-ly.js": "1cfd", "./ar-ma": "0a84", "./ar-ma.js": "0a84", "./ar-sa": "8230", "./ar-sa.js": "8230", "./ar-tn": "6d83", "./ar-tn.js": "6d83", "./ar.js": "8e73", "./az": "485c", "./az.js": "485c", "./be": "1fc1", "./be.js": "1fc1", "./bg": "84aa", "./bg.js": "84aa", "./bm": "a7fa", "./bm.js": "a7fa", "./bn": "9043", "./bn-bd": "9686", "./bn-bd.js": "9686", "./bn.js": "9043", "./bo": "d26a", "./bo.js": "d26a", "./br": "6887", "./br.js": "6887", "./bs": "2554", "./bs.js": "2554", "./ca": "d716", "./ca.js": "d716", "./cs": "3c0d", "./cs.js": "3c0d", "./cv": "03ec", "./cv.js": "03ec", "./cy": "9797", "./cy.js": "9797", "./da": "0f14", "./da.js": "0f14", "./de": "b469", "./de-at": "b3eb", "./de-at.js": "b3eb", "./de-ch": "bb71", "./de-ch.js": "bb71", "./de.js": "b469", "./dv": "598a", "./dv.js": "598a", "./el": "8d47", "./el.js": "8d47", "./en-au": "0e6b", "./en-au.js": "0e6b", "./en-ca": "3886", "./en-ca.js": "3886", "./en-gb": "39a6", "./en-gb.js": "39a6", "./en-ie": "e1d3", "./en-ie.js": "e1d3", "./en-il": "7333", "./en-il.js": "7333", "./en-in": "ec2e", "./en-in.js": "ec2e", "./en-nz": "6f50", "./en-nz.js": "6f50", "./en-sg": "b7e9", "./en-sg.js": "b7e9", "./eo": "65db", "./eo.js": "65db", "./es": "898b", "./es-do": "0a3c", "./es-do.js": "0a3c", "./es-mx": "b5b7", "./es-mx.js": "b5b7", "./es-us": "55c9", "./es-us.js": "55c9", "./es.js": "898b", "./et": "ec18", "./et.js": "ec18", "./eu": "0ff2", "./eu.js": "0ff2", "./fa": "8df4", "./fa.js": "8df4", "./fi": "81e9", "./fi.js": "81e9", "./fil": "d69a", "./fil.js": "d69a", "./fo": "0721", "./fo.js": "0721", "./fr": "9f26", "./fr-ca": "d9f8", "./fr-ca.js": "d9f8", "./fr-ch": "0e49", "./fr-ch.js": "0e49", "./fr.js": "9f26", "./fy": "7118", "./fy.js": "7118", "./ga": "5120", "./ga.js": "5120", "./gd": "f6b4", "./gd.js": "f6b4", "./gl": "8840", "./gl.js": "8840", "./gom-deva": "aaf2", "./gom-deva.js": "aaf2", "./gom-latn": "0caa", "./gom-latn.js": "0caa", "./gu": "e0c5", "./gu.js": "e0c5", "./he": "c7aa", "./he.js": "c7aa", "./hi": "dc4d", "./hi.js": "dc4d", "./hr": "4ba9", "./hr.js": "4ba9", "./hu": "5b14", "./hu.js": "5b14", "./hy-am": "d6b6", "./hy-am.js": "d6b6", "./id": "5038", "./id.js": "5038", "./is": "0558", "./is.js": "0558", "./it": "6e98", "./it-ch": "6f12", "./it-ch.js": "6f12", "./it.js": "6e98", "./ja": "079e", "./ja.js": "079e", "./jv": "b540", "./jv.js": "b540", "./ka": "201b", "./ka.js": "201b", "./kk": "6d79", "./kk.js": "6d79", "./km": "e81d", "./km.js": "e81d", "./kn": "3e92", "./kn.js": "3e92", "./ko": "22f8", "./ko.js": "22f8", "./ku": "2421", "./ku.js": "2421", "./ky": "9609", "./ky.js": "9609", "./lb": "440c", "./lb.js": "440c", "./lo": "b29d", "./lo.js": "b29d", "./lt": "26f9", "./lt.js": "26f9", "./lv": "b97c", "./lv.js": "b97c", "./me": "293c", "./me.js": "293c", "./mi": "688b", "./mi.js": "688b", "./mk": "6909", "./mk.js": "6909", "./ml": "02fb", "./ml.js": "02fb", "./mn": "958b", "./mn.js": "958b", "./mr": "39bd", "./mr.js": "39bd", "./ms": "ebe4", "./ms-my": "6403", "./ms-my.js": "6403", "./ms.js": "ebe4", "./mt": "1b45", "./mt.js": "1b45", "./my": "8689", "./my.js": "8689", "./nb": "6ce3", "./nb.js": "6ce3", "./ne": "3a39", "./ne.js": "3a39", "./nl": "facd", "./nl-be": "db29", "./nl-be.js": "db29", "./nl.js": "facd", "./nn": "b84c", "./nn.js": "b84c", "./oc-lnc": "167b", "./oc-lnc.js": "167b", "./pa-in": "f3ff", "./pa-in.js": "f3ff", "./pl": "8d57", "./pl.js": "8d57", "./pt": "f260", "./pt-br": "d2d4", "./pt-br.js": "d2d4", "./pt.js": "f260", "./ro": "972c", "./ro.js": "972c", "./ru": "957c", "./ru.js": "957c", "./sd": "6784", "./sd.js": "6784", "./se": "ffff", "./se.js": "ffff", "./si": "eda5", "./si.js": "eda5", "./sk": "7be6", "./sk.js": "7be6", "./sl": "8155", "./sl.js": "8155", "./sq": "c8f3", "./sq.js": "c8f3", "./sr": "cf1e", "./sr-cyrl": "13e9", "./sr-cyrl.js": "13e9", "./sr.js": "cf1e", "./ss": "52bd", "./ss.js": "52bd", "./sv": "5fbd", "./sv.js": "5fbd", "./sw": "74dc", "./sw.js": "74dc", "./ta": "3de5", "./ta.js": "3de5", "./te": "5cbb", "./te.js": "5cbb", "./tet": "576c", "./tet.js": "576c", "./tg": "3b1b", "./tg.js": "3b1b", "./th": "10e8", "./th.js": "10e8", "./tk": "5aff", "./tk.js": "5aff", "./tl-ph": "0f38", "./tl-ph.js": "0f38", "./tlh": "cf75", "./tlh.js": "cf75", "./tr": "0e81", "./tr.js": "0e81", "./tzl": "cf51", "./tzl.js": "cf51", "./tzm": "c109", "./tzm-latn": "b53d", "./tzm-latn.js": "b53d", "./tzm.js": "c109", "./ug-cn": "6117", "./ug-cn.js": "6117", "./uk": "ada2", "./uk.js": "ada2", "./ur": "5294", "./ur.js": "5294", "./uz": "2e8c", "./uz-latn": "010e", "./uz-latn.js": "010e", "./uz.js": "2e8c", "./vi": "2921", "./vi.js": "2921", "./x-pseudo": "fd7e", "./x-pseudo.js": "fd7e", "./yo": "7f33", "./yo.js": "7f33", "./zh-cn": "5c3a", "./zh-cn.js": "5c3a", "./zh-hk": "49ab", "./zh-hk.js": "49ab", "./zh-mo": "3a6c", "./zh-mo.js": "3a6c", "./zh-tw": "90ea", "./zh-tw.js": "90ea"};
  function a(e) {
    var t = r(e);
    return o(t);
  }
  function r(e) {
    if (!o.o(s, e)) {
      var t = new Error("Cannot find module '" + e + "'");
      throw t.code = "MODULE_NOT_FOUND", t;
    }
    return s[e];
  }
  a.keys = function () {
    return Object.keys(s);
  }, a.resolve = r, e.exports = a, a.id = "4678";
}, "4d3b": function (e, t, o) {
  "use strict";
  o("a412");
}, 5: function (e, t) {}, "52b4": function (e, t, o) {
  "use strict";
  o("e76b");
}, "56d7": function (e, t, o) {
  "use strict";
  o.r(t);
  o("14d9");
  var s = o("2b0e"), a = o("2685"), r = o.n(a), i = o("8c4f"), n = function () {
    var e = this, t = e._self._c;
    return t("div", {staticClass: "home", class: {loading: e.loadingItems || e.loadingBin || e.sharing || e.exporting}, on: {drop: function (t) {
      return t.preventDefault(), e.upload.apply(null, arguments);
    }, dragover: function (t) {
      return t.preventDefault(), e.dragover.apply(null, arguments);
    }, dragleave: function (t) {
      return t.preventDefault(), e.dragleave.apply(null, arguments);
    }}}, [e.showProgressBar ? t("div", {staticClass: "progress"}, [t("div", {staticClass: "progress-bar progress-bar-striped progress-bar-animated", staticStyle: {width: "100%"}, attrs: {role: "progressbar"}})]) : e._e(), t("Logo", {attrs: {small: e.hasFiles || e.loadingBin}}), t("router-view"), t("Footer")], 1);
  }, l = [], d = o("2f62"), c = function () {
    var e = this, t = e._self._c;
    return t("footer", [e.showBuyMeCoffee ? t("div", {staticClass: "donation"}, [t("a", {attrs: {href: "https://github.com/BlacKSnowDot0", target: "_blank", rel: "noopener"}}, [e._v(" WHITELIST IGNORED | BlackSnowDot <3 "), t("svg", {attrs: {xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", focusable: "false", viewBox: "0 0 24 24"}}, [t("path", {attrs: {d: "M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379c-.197-.069-.42-.098-.57-.241c-.152-.143-.196-.366-.231-.572c-.065-.378-.125-.756-.192-1.133c-.057-.325-.102-.69-.25-.987c-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5c-.318.116-.646.256-.888.501c-.297.302-.393.77-.177 1.146c.154.267.415.456.692.58c.36.162.737.284 1.123.366c1.075.238 2.189.331 3.287.37c1.218.05 2.437.01 3.65-.118c.299-.033.598-.073.896-.119c.352-.054.578-.513.474-.834c-.124-.383-.457-.531-.834-.473c-.466.074-.96.108-1.382.146c-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036c-.243-.036-.484-.08-.724-.13c-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145c.392.085.895.113 1.07.542c.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295a37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06c-.326-.048-.649-.108-.973-.161c-.393-.065-.768-.032-1.123.161c-.29.16-.527.404-.675.701c-.154.316-.199.66-.267 1c-.069.34-.176.707-.135 1.056c.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376a.483.483 0 0 1 .535.53l-.071.697l-1.018 9.907c-.041.41-.047.832-.125 1.237c-.122.637-.553 1.028-1.182 1.171c-.577.131-1.165.2-1.756.205c-.656.004-1.31-.025-1.966-.022c-.699.004-1.556-.06-2.095-.58c-.475-.458-.54-1.174-.605-1.793l-.731-7.013l-.322-3.094c-.037-.351-.286-.695-.678-.678c-.336.015-.718.3-.678.679l.228 2.185l.949 9.112c.147 1.344 1.174 2.068 2.446 2.272c.742.12 1.503.144 2.257.156c.966.016 1.942.053 2.892-.122c1.408-.258 2.465-1.198 2.616-2.657c.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518c.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233c-2.416.359-4.866.54-7.308.46c-1.748-.06-3.477-.254-5.207-.498c-.17-.024-.353-.055-.47-.18c-.22-.236-.111-.71-.054-.995c.052-.26.152-.609.463-.646c.484-.057 1.046.148 1.526.22c.577.088 1.156.159 1.737.212c2.48.226 5.002.19 7.472-.14c.45-.06.899-.13 1.345-.21c.399-.072.84-.206 1.08.206c.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38c0 0 1.243.065 1.658.065c.447 0 1.786-.065 1.786-.065c.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613z"}})])])]) : t("div", {staticClass: "donation sponsor"}, [t("a", {attrs: {href: "https://github.com/BlacKSnowDot0", target: "_blank", rel: "noopener"}}, [e._v("WHITELIST IGNORED | BlackSnowDot <3 "), t("svg", {attrs: {"aria-hidden": "true", focusable: "false", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512"}}, [t("path", {attrs: {d: "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"}})])])]), t("p", [t("small", [e._v("© " + e._s(e.year) + " Matheus Sampaio")])])]);
  }, u = [], m = {name: "Footer", data() {
    return {year: (new Date).getFullYear(), showBuyMeCoffee: Math.random() > 0.5};
  }}, f = m, h = (o("d3d9"), o("2877")), g = Object(h.a)(f, c, u, false, null, null, null), p = g.exports, y = function () {
    var e = this, t = e._self._c;
    return t("div", [e.small ? t("router-link", {attrs: {to: "/"}}, [t("img", {staticClass: "small", attrs: {src: "assets/logo.png", alt: "Loot Logger Logo"}, on: {click: e.onClick}})]) : t("img", {attrs: {src: "assets/logo.png", alt: "Loot Logger Logo"}})], 1);
  }, b = [], v = o("bc3a"), I = o.n(v);
  class w {
    constructor() {
      this.items = {}, this.isInitialized = false;
    }
    getLocalizedNamesFromId(e) {
      var t, o;
      return (null === (t = this.items[e]) || undefined === t ? undefined : t.localizedNames) || (null === (o = this.items["@ITEMS_" + e]) || undefined === o ? undefined : o.localizedNames);
    }
    getNameFromId(e) {
      var t, o, s;
      const a = null !== (t = this.items[e]) && undefined !== t ? t : this.items["@ITEMS_" + e];
      return null !== (o = null === a || undefined === a || null === (s = a.localizedNames) || undefined === s ? undefined : s["EN-US"]) && undefined !== o ? o : e;
    }
    getLocalizedNamesFromIndex(e) {
      return this.items[e].localizedNames;
    }
    getNameFromIndex(e) {
      return this.items[e].localizedNames["EN-US"];
    }
    getIdFromName(e) {
      return this.items[e].id;
    }
    getInfoFromName(e) {
      return this.items[e];
    }
    getInfoFromId(e) {
      return this.items[e];
    }
    getInfoFromIndex(e) {
      return this.items[e];
    }
    async loadSHA() {
      console.info("loading latest SHA from ao-bin-dumps");
      const e = await I.a.get("https://api.github.com/repos/ao-data/ao-bin-dumps/commits/master");
      console.log("latest SHA from ao-bin-dumps", e.data.sha), this.sha = e.data.sha;
    }
    async init(e = "master") {
      if (e === this.sha && this.isInitialized) return;
      console.info("loading items from ao-bin-dumps. SHA=" + e), this.isInitialized = true, this.sha = e;
      let t = await I.a.get(`https://raw.githubusercontent.com/ao-data/ao-bin-dumps/${this.sha}/formatted/items.json`);
      for (const s of t.data) {
        const e = {localizedNames: s.LocalizedNames, locNameVar: s.LocalizationNameVariable, id: s.UniqueName, index: s.Index};
        if (this.items[s.UniqueName] = e, this.items[s.LocalizationNameVariable] = e, this.items[s.Index] = e, s.LocalizedNames) for (const t in s.LocalizedNames) {
          const o = s.LocalizedNames[t], a = o || s.UniqueName;
          null != this.items[a] && -1 !== s.UniqueName.indexOf("@") || (this.items[a] = e);
        }
      }
      t = await I.a.get(`https://raw.githubusercontent.com/ao-data/ao-bin-dumps/${this.sha}/items.json`);
      for (const s of t.data.items.mountskin) {
        const e = s["@uniquename"], t = this.getLocalizedNamesFromId(e);
        for (const o in t) {
          const e = t[o];
          this.items[e].category = "skin", this.items[e].subcategory = "mountskin";
        }
      }
      const o = {"@xmlns:xsi": true, "@xsi:noNamespaceSchemaLocation": true, shopcategories: true, mountskin: true};
      for (const s in t.data.items) {
        if (o[s]) continue;
        const e = t.data.items[s];
        if (null != e.length) for (const t of e) for (let e = 0; e <= 3; e++) {
          const o = e ? `${t["@uniquename"]}@${e}` : t["@uniquename"];
          if (null != this.items[o] && (this.items[o].tier = parseInt(t["@tier"], 10), this.items[o].category = t["@shopcategory"], this.items[o].subcategory = t["@shopsubcategory1"], t["@slottype"] && (this.items[o].slotType = t["@slottype"]), null == this.items[o].tier && console.warn("Item without Tier", s, t), null == this.items[o].category && console.warn("Item without Category", s, t), null == this.items[o].subcategory && console.warn("Item without SubCategory", s, t), "products" === this.items[o].category && "journal" === this.items[o].subcategory)) {
            const e = this.getLocalizedNamesFromId(o + "_FULL");
            for (const o in e) {
              const s = e[o];
              this.items[s].tier = parseInt(t["@tier"], 10), this.items[s].category = t["@shopcategory"], this.items[s].subcategory = t["@shopsubcategory1"];
            }
            const s = this.getLocalizedNamesFromId(o + "_EMPTY");
            for (const o in s) {
              const e = s[o];
              this.items[e].tier = parseInt(t["@tier"], 10), this.items[e].category = t["@shopcategory"], this.items[e].subcategory = t["@shopsubcategory1"];
            }
          }
        }
      }
    }
  }
  var j = new w, k = {name: "Logo", props: {small: {type: Boolean, default: false}}, computed: {...Object(d.e)(["initialized"]), ...Object(d.c)(["hasFiles"]), isClickable() {
    return console.log(this.$route.path), this.hasFiles || "/" !== this.$route.path;
  }}, methods: {...Object(d.d)(["reset", "setInitialized", "setLoadingItems"]), async onClick() {
    this.reset(), this.setInitialized(false), setTimeout(() => {
      this.initialized || this.setLoadingItems(true);
    }, 2e3), await j.init(), this.setInitialized(true), this.setLoadingItems(false);
  }}}, L = k, _ = (o("f7c5"), Object(h.a)(L, y, b, false, null, "e37d8c38", null)), B = _.exports;
  o("b7ef");
  class C {
    constructor(e = "", t = "") {
      this.valid = !(!e || !t), this.axios = I.a.create({baseURL: "https://api.jsonbin.io/v3", headers: {"Content-Type": "application/json", "X-Master-Key": atob(e), "X-Collection-Id": t, "X-Bin-Private": true}});
    }
    async create(e) {
      const t = await this.axios.post("/b", e);
      return t.data.metadata.id;
    }
    async read(e) {
      const t = await this.axios.get(`/b/${e}/latest`);
      return t.data;
    }
  }
  const x = new C("JDJiJDEwJDdYM1pVMjhpSHFLR0g1S2pyRTNxSk9idkdkTEpvbFNVZHVpVHJDbnBBNGwxYTI1UXpzc3BD", "60ca92d38ea8ec25bd0e9116");
  var O = x, P = o("1c46"), z = o.n(P);
  class F {
    constructor() {
      this.configs = {};
    }
    has(e) {
      return this.configs[this.hash(e)];
    }
    hash(e) {
      const t = z.a.createHash("sha256");
      return t.update(e), t.digest("hex");
    }
  }
  var S = new F, A = o("c1df"), U = o.n(A);
  function N(e) {
    const t = document.createElement("textarea");
    t.style.position = "fixed", t.style.opacity = "0", t.textContent = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
  }
  function $(e) {
    const t = {version: 4, blockSharing: !!e.blockSharing, blockUpload: !!e.blockUpload, sha: j.sha, filters: Object.keys(e.filters).filter(t => e.filters[t]).join(";"), files: Object.keys(e.files).join(";"), showPlayers: {}, hidePlayers: Object.keys(e.hidePlayers).join(";"), chestLogs: [], lootLogs: []};
    for (const o in e.showPlayers) {
      const s = e.showPlayers[o];
      null == t.showPlayers[s] && (t.showPlayers[s] = []), t.showPlayers[s].push(o);
    }
    for (const o in t.showPlayers) t.showPlayers[o] = t.showPlayers[o].join(";");
    for (const o of e.lootLogs) {
      if (-1 !== o.itemId.indexOf("TRASH")) continue;
      if (Object.keys(e.showPlayers).length && !e.showPlayers[o.lootedBy.toLowerCase()] && !e.showPlayers[o.lootedFrom.toLowerCase()]) continue;
      if (e.hidePlayers[o.lootedBy.toLowerCase()] && e.hidePlayers[o.lootedFrom.toLowerCase()]) continue;
      const s = j.getInfoFromId(o.itemId);
      t.lootLogs.push([o.filename, o.lootedAt.unix(), o.lootedByAlliance, o.lootedByGuild, o.lootedBy, s.index, o.amount, o.lootedFromAlliance, o.lootedFromGuild, o.lootedFrom].join(";"));
    }
    for (const o of e.chestLogs) {
      if (Object.keys(e.showPlayers).length && !e.showPlayers[o.donatedBy.toLowerCase()]) continue;
      if (e.hidePlayers[o.donatedBy.toLowerCase()]) continue;
      const s = j.getInfoFromId(o.itemId);
      t.chestLogs.push([o.filename, o.donatedAt.unix(), o.donatedBy, s.index, o.amount].join(";"));
    }
    return t;
  }
  function T(e) {
    e.version || (e.version = 0);
    const t = {blockSharing: true, blockUpload: true, files: {}, showPlayers: {}, hidePlayers: {}, chestLogs: [], lootLogs: []};
    if (null != e.blockSharing && (t.blockSharing = e.blockSharing), null != e.blockUpload && (t.blockUpload = e.blockUpload), null != e.filters) {
      t.filters = {};
      for (const o of e.filters.split(";")) t.filters[o] = true;
    }
    if (e.version <= 1) {
      for (const o in e.lootLogs) t.files[o] = true;
      for (const o in e.chestLogs) t.files[o] = true;
    } else for (const o of e.files.split(";")) t.files[o] = true;
    if (e.showPlayers) if (e.version <= 0) t.showPlayers = {...e.showPlayers}; else if (e.version <= 2) for (const o of e.showPlayers.split(";")) t.showPlayers[o] = true; else for (const o in e.showPlayers) for (const s of e.showPlayers[o].split(";")) t.showPlayers[s] = o;
    if (e.hidePlayers) if (e.version <= 0) t.hidePlayers = {...e.hidePlayers}; else for (const o of e.hidePlayers.split(";")) t.hidePlayers[o] = true;
    if (e.version <= 0) for (const o in e.lootLogs) for (const s of e.lootLogs[o]) t.lootLogs.push({...s, filename: o, lootedAt: U()(s.lootedAt)}); else e.version <= 1 ? t.lootLogs = M(e.lootLogs) : e.version <= 2 ? t.lootLogs = E(e.lootLogs) : e.version <= 3 ? t.lootLogs = R(e.lootLogs) : t.lootLogs = q(e.lootLogs);
    if (e.version <= 0) for (const o in e.chestLogs) for (const s of e.chestLogs[o]) t.chestLogs.push({...s, filename: o, donatedAt: U()(s.donatedAt)}); else e.version <= 1 ? t.chestLogs = D(e.chestLogs) : e.version <= 2 ? t.chestLogs = Y(e.chestLogs) : t.chestLogs = H(e.chestLogs);
    return t;
  }
  function M(e) {
    const t = [];
    for (const o in e) for (const s of e[o]) {
      const [e, o, a, r, i] = s.split(";"), n = j.getInfoFromIndex(a);
      t.push({lootedAt: U.a.unix(e), lootedBy: o, itemId: n.id, amount: parseInt(r, 10), lootedFrom: i, category: n.category, subcategory: n.subcategory, tier: n.tier});
    }
    return t;
  }
  function E(e) {
    const t = [];
    for (const o of e) {
      const [e, s, a, r, i] = o.split(";"), n = j.getInfoFromIndex(a);
      t.push({lootedAt: U.a.unix(e), lootedBy: s, itemId: n.id, amount: parseInt(r, 10), lootedFrom: i, category: n.category, subcategory: n.subcategory, tier: n.tier});
    }
    return t;
  }
  function R(e) {
    const t = [];
    for (const o of e) {
      const [e, s, a, r, i, n] = o.split(";"), l = j.getInfoFromIndex(r);
      t.push({filename: e, lootedAt: U.a.unix(s), lootedBy: a, itemId: l.id, amount: parseInt(i, 10), lootedFrom: n, category: l.category, subcategory: l.subcategory, tier: l.tier});
    }
    return t;
  }
  function q(e) {
    const t = [];
    for (const o of e) {
      const [e, s, a, r, i, n, l, d, c, u] = o.split(";"), m = j.getInfoFromIndex(n);
      t.push({filename: e, lootedAt: U.a.unix(s), lootedByAlliance: a, lootedByGuild: r, lootedBy: i, itemId: m.id, amount: parseInt(l, 10), lootedFromAlliance: d, lootedFromGuild: c, lootedFrom: u, category: m.category, subcategory: m.subcategory, tier: m.tier});
    }
    return t;
  }
  function D(e) {
    const t = [];
    for (const o in e) for (const s of e[o]) {
      const [e, o, a, r] = s.split(";"), i = j.getInfoFromIndex(a);
      t.push({donatedAt: U.a.unix(e), donatedBy: o, itemId: i.id, amount: parseInt(r, 10), category: i.category, subcategory: i.subcategory, tier: i.tier});
    }
    return t;
  }
  function Y(e) {
    const t = [];
    for (const o of e) {
      const [e, s, a, r] = o.split(";"), i = j.getInfoFromIndex(a);
      t.push({donatedAt: U.a.unix(e), donatedBy: s, itemId: i.id, amount: parseInt(r, 10), category: i.category, subcategory: i.subcategory, tier: i.tier});
    }
    return t;
  }
  function H(e) {
    const t = [];
    for (const o of e) {
      const [e, s, a, r, i] = o.split(";"), n = j.getInfoFromIndex(r);
      t.push({filename: e, donatedAt: U.a.unix(s), donatedBy: a, itemId: n.id, amount: parseInt(i, 10), category: n.category, subcategory: n.subcategory, tier: n.tier});
    }
    return t;
  }
  var V = function () {
    var e = this, t = e._self._c;
    return t("div", {staticClass: "content-root"}, [e.hasFiles || e.loadingBin ? t("div", {staticClass: "content"}, [t("Filters"), e.sortedFilteredPlayers.length ? t("table", {staticClass: "table table-bordered", attrs: {id: "loot-table"}}, [e._m(0), t("tbody", e._l(e.sortedFilteredPlayers, function (o) {
      return t("PlayerLoot", {key: o, attrs: {name: e.filteredPlayers[o].name, alliance: e.filteredPlayers[o].alliance, guild: e.filteredPlayers[o].guild, died: e.filteredPlayers[o].died, "picked-up-items": e.filteredPlayers[o].pickedUpItems, "resolved-items": e.filters.resolved ? e.filteredPlayers[o].resolvedItems : {}, "lost-items": e.filters.lost ? e.filteredPlayers[o].lostItems : {}, "donated-items": e.filters.donated ? e.filteredPlayers[o].donatedItems : {}}});
    }), 1)]) : e.loadingBin ? t("div", {staticClass: "loading-bin"}, [t("p", [e._v("Loading...")])]) : t("div", {staticClass: "no-players"}, [t("p", [e._v("This item list is empty.")]), t("p", [e._v("Update the filters or upload more files.")])]), t("Upload", {attrs: {popup: "", disabled: !e.initialized || e.loadingBin || e.blockUpload}, on: {change: e.upload}})], 1) : e._e(), e.hasFiles || e.loadingBin ? e._e() : t("div", {staticClass: "content file-upload"}, [t("Upload", {attrs: {disabled: !e.initialized || e.loadingBin || e.blockUpload}, on: {change: e.upload}}), t("a", {attrs: {href: "https://discord.gg/fvNMF2abXr", target: "_blank", rel: "noopener noreferrer"}}, [e._v("Discord")]), t("hr"), t("a", {attrs: {href: "#faq"}}, [e._v("Read the FAQ")]), t("FAQ")], 1)]);
  }, G = [function () {
    var e = this, t = e._self._c;
    return t("thead", [t("tr", [t("th", [e._v("Name")]), t("th", [e._v("Items")])])]);
  }], X = function () {
    var e = this;
    e._self._c;
    return e._m(0);
  }, J = [function () {
    var e = this, t = e._self._c;
    return t("article", [t("h1", {staticClass: "text-center", attrs: {id: "faq"}}, [t("a", {attrs: {href: "#faq"}}, [e._v("Frequent Asked Questions")])]), t("section", [t("h2", {attrs: {id: "files"}}, [t("a", {attrs: {href: "#files"}}, [e._v("Which files can I upload?")])]), t("p", [e._v(" There a few types of files that you can upload: "), t("ul", [t("li", [e._v("Loot log files exported from external tools (contact me if you if know of any other tool available): "), t("ul", [t("li", [t("a", {attrs: {href: "https://github.com/matheussampaio/ao-loot-logger", target: "_blank"}}, [e._v("matheussampaio's AO Loot Logger")])])])]), t("li", [e._v("Chest logs exported from Albion Online. The logs will be used to mark some items as resolved. Check "), t("a", {attrs: {href: "#how-to-chest-logs"}}, [e._v("here")]), e._v(" and "), t("a", {attrs: {href: "#how-to-guilds-chest-logs"}}, [e._v("here")]), e._v(" for instructions.")]), t("li", [e._v("A file containing the players that you want to filter from the list. Check "), t("a", {attrs: {href: "#filter-players"}}, [e._v("here")]), e._v(" for instructions.")])])])]), t("section", [t("h2", {attrs: {id: "upload-files"}}, [t("a", {attrs: {href: "#upload-files"}}, [e._v("How can I upload the files?")])]), t("p", [e._v(" Use the input on the home page to upload all your files or "), t("b", [e._v("quickly drag the files from your file system and drop them into the site")]), e._v(". ")]), t("p", [t("small", [t("b", [e._v("NOTE:")]), e._v(" The order in which you upload the files is not important.")])])]), t("section", [t("h2", {attrs: {id: "items-colors"}}, [t("a", {attrs: {href: "#items-colors"}}, [e._v("What the item's colors mean?")])]), t("p", [e._v("Items can be displayed in red when the item was lost, green when the item was deposited, gray when the item is marked as resolved, and normal colors otherwise.")]), t("p", [e._v("See below for details and some examples.")]), t("p", [e._v(" Items in red signal items looted from that player's corpse. This is helpful to understand when the player picked up something but lost right after. ")]), t("img", {staticClass: "rounded", attrs: {loading: "lazy", src: "assets/lost-items.png", alt: "Lost items in red"}}), t("p", [e._v("Items in green signal items deposited in a chest.")]), t("img", {staticClass: "rounded", attrs: {loading: "lazy", src: "assets/donated-items.png", alt: "Donated items in green"}}), t("p", [e._v("Items in grayscale signal resolved items. This means the items were either lost or already deposited in a chest.")]), t("img", {staticClass: "rounded", attrs: {loading: "lazy", src: "assets/resolved-items.png", alt: "Resolved items in gray"}}), t("p", [t("b", [e._v("TIP:")]), e._v(" You can always hover over the item to see more details.")]), t("img", {staticClass: "rounded", attrs: {loading: "lazy", src: "assets/items-details.png", alt: "Hover the item to see the details"}})]), t("section", [t("h2", {attrs: {id: "filter-players"}}, [t("a", {attrs: {href: "#filter-players"}}, [e._v("How do I filter the players?")])]), t("p", [t("a", {attrs: {href: "#upload-files"}}, [e._v("Upload")]), e._v(" to AO Loot Logger Viewer a file with the list of players that you want to see. The file should contain one username per line. ")]), t("p", [e._v(" To quickly create a list with all members in your guild follow "), t("a", {attrs: {href: "#export-guilds-members-list"}}, [e._v("those steps")]), e._v(". ")])]), t("section", [t("h2", {attrs: {id: "players-in-red"}}, [t("a", {attrs: {href: "#players-in-red"}}, [e._v("Why some player's names are in red?")])]), t("p", [e._v(" Because those players died while you're collecting the logs. We know that because the logs contain people grabbing loot from their corpses. ")])]), t("section", [t("h2", {attrs: {id: "how-to-chest-logs"}}, [t("a", {attrs: {href: "#how-to-chest-logs"}}, [e._v("How do I get the chest logs?")])]), t("p", [e._v(" In the chest that you want to collect the logs from, click on "), t("b", [e._v("Actions")]), e._v(", then "), t("b", [e._v("Chest Log")]), e._v(", and click on "), t("b", [e._v("Copy to clipboard")]), e._v(" button. ")]), t("p", [e._v(" After copying the logs, create a new file on your computer and paste the content of the logs there. Save it and "), t("a", {attrs: {href: "#upload-files"}}, [e._v("upload")]), e._v(" it to the AO Loot Logger Viewer whenever you want. ")]), t("img", {staticClass: "rounded", attrs: {loading: "lazy", src: "assets/logs-from-normal-chest.png", alt: "How to collect logs from normal chest"}})]), t("section", [t("h2", {attrs: {id: "how-to-guilds-chest-logs"}}, [t("a", {attrs: {href: "#how-to-guilds-chest-logs"}}, [e._v("How do I get the guild's chest logs?")])]), t("p", [e._v(" In the chest that you want to collect the logs from, click on "), t("b", [e._v("Actions")]), e._v(", then "), t("b", [e._v("Manage")]), e._v(", and open the chest logs of the tab that you want to collect logs from. In the Chest Logs window, click on "), t("b", [e._v("Copy to clipboard")]), e._v(" button. ")]), t("p", [e._v(" After copying the logs, create a new file on your computer and paste the content of the logs there. Save it and "), t("a", {attrs: {href: "#upload-files"}}, [e._v("upload")]), e._v(" it to the AO Loot Logger Viewer whenever you want. ")]), t("img", {staticClass: "rounded", attrs: {loading: "lazy", src: "assets/logs-from-guild-chest.png", alt: "How to collect logs from the guild's chest"}})]), t("section", [t("h2", {attrs: {id: "export-guilds-members-list"}}, [t("a", {attrs: {href: "#export-guilds-members-list"}}, [e._v(" How do I collect the guild's members list?")])]), t("p", [e._v(" Press "), t("kbd", [e._v("G")]), e._v(" to open the Guild UI, select the "), t("b", [e._v("Members")]), e._v(" tab, open the "), t("b", [e._v("Guild Logs")]), e._v(", and click on "), t("b", [e._v("Copy to clipboard")]), e._v(" button. ")]), t("p", [e._v(" After copying the list members, create a new file on your computer and paste the content there. Save it and "), t("a", {attrs: {href: "#upload-files"}}, [e._v("upload")]), e._v(" it to the AO Loot Logger Viewer whenever you want. ")]), t("img", {staticClass: "rounded", attrs: {loading: "lazy", src: "assets/guilds-members-list.png", alt: "How to collect the guild's member list"}})]), t("section", [t("h2", {attrs: {id: "bug"}}, [t("a", {attrs: {href: "#bug"}}, [e._v(" I found a bug, where should I report?")])]), t("p", [e._v(" Talk to us in our Discord server: "), t("a", {attrs: {href: "https://discord.gg/fvNMF2abXr", target: "_blank", rel: "noopener noreferrer"}}, [e._v("https://discord.gg/fvNMF2abXr")]), e._v(". ")])]), t("section", [t("h2", {attrs: {id: "suggestion-or-fq"}}, [t("a", {attrs: {href: "#suggestion-or-fq"}}, [e._v(" I have a suggestion/feature request, where should I send?")])]), t("p", [e._v(" Talk to us in our Discord server: "), t("a", {attrs: {href: "https://discord.gg/fvNMF2abXr", target: "_blank", rel: "noopener noreferrer"}}, [e._v("https://discord.gg/fvNMF2abXr")]), e._v(". ")])]), t("section", [t("h2", {attrs: {id: "donations"}}, [t("a", {attrs: {href: "#donations"}}, [e._v(" Where can I donate to the project?")])]), t("p", [e._v(" Go to "), t("a", {attrs: {href: "https://github.com/sponsors/matheussampaio", target: "_blank", rel: "noopener"}}, [e._v("Github Sponsor")]), e._v(" or "), t("a", {attrs: {href: "https://github.com/BlacKSnowDot0", target: "_blank", rel: "noopener"}}, [e._v("WHITELIST IGNORED | BlackSnowDot <3")]), e._v(". ")])])]);
  }], Q = {name: "FAQ"}, W = Q, K = (o("1ab4"), Object(h.a)(W, X, J, false, null, "11fa855c", null)), Z = K.exports, ee = function () {
    var e = this, t = e._self._c;
    return t("div", {staticClass: "filters-container"}, [t("div", {staticClass: "filters"}, [e._l(e.filters, function (o, s) {
      return t("div", {key: s, staticClass: "filter"}, [t("button", {attrs: {id: s}, on: {click: () => e.toggleFilter(s)}}, [e.filters[s] ? t("svg", {staticClass: "eye", attrs: {"aria-hidden": "true", focusable: "false", "data-prefix": "far", "data-icon": "eye", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512"}}, [t("path", {attrs: {fill: "currentColor", d: "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"}})]) : t("svg", {staticClass: "eye-slash", attrs: {"aria-hidden": "true", focusable: "false", "data-prefix": "far", "data-icon": "eye-slash", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512"}}, [t("path", {attrs: {fill: "currentColor", d: "M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"}})])]), t("div", {staticClass: "filter-name"}, [e._v(e._s(s))])]);
    }), t("ExportButton", {staticClass: "control"}), t("ShareButton", {staticClass: "control"}), t("ShareReadOnlyButton", {staticClass: "control"})], 2)]);
  }, te = [], oe = function () {
    var e = this, t = e._self._c;
    return t("div", {attrs: {title: "Export missing items as CSV"}}, [t("button", {attrs: {disabled: e.exporting || !e.hasFiles || !e.fileSaverSupport, title: "This feature no longer freely available."}, on: {click: e.exportItems}}, [t("svg", {attrs: {"aria-hidden": "true", focusable: "false", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512"}}, [t("path", {attrs: {fill: "currentColor", d: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}})])]), t("div", {staticClass: "control-name"}, [e._v("Export")])]);
  }, se = [];
  let ae = null;
  function re(e) {
    return `${e.lootedAt.toISOString()},${e.lootedBy},${j.getNameFromId(e.itemId)},${e.itemId},${e.amount},${e.lootedFrom}`;
  }
  var ie = {name: "ExportButton", computed: {...Object(d.e)(["exporting"]), ...Object(d.c)(["filteredPlayers", "hasFiles"]), fileSaverSupport() {
    try {
      return !!new Blob;
    } catch (e) {
      return false;
    }
  }}, methods: {...Object(d.d)(["setExporting"]), async exportItems() {
    if (this.exporting) return;
    if (this.setExporting(true), null == ae) {
      const e = await o.e("chunk-2d0b1f6a").then(o.t.bind(null, "21a6", 7));
      ae = e.saveAs;
    }
    let e = ["Pickup Time,Looted By,Item name,Item ID,Quantity,Looted From"];
    for (const o in this.filteredPlayers) {
      const t = this.filteredPlayers[o];
      for (const o in t.pickedUpItems) {
        const s = t.pickedUpItems[o];
        for (const t of s.history) e.push(re(t));
      }
    }
    const t = new Blob([e.join("\n")], {type: "text/plain;charset=utf-8"});
    ae(t, `ao-loot-viewer-${(new Date).getTime()}.csv`), this.setExporting(false);
  }}}, ne = ie, le = Object(h.a)(ne, oe, se, false, null, null, null), de = le.exports, ce = function () {
    var e = this, t = e._self._c;
    return t("div", {staticClass: "control", attrs: {title: "Create a sharable link"}}, [t("button", {attrs: {disabled: true, title: "This feature is no longer freely available"}, on: {click: () => e.share(false)}}, [t("svg", {attrs: {"aria-hidden": "true", focusable: "false", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512"}}, [t("path", {attrs: {fill: "currentColor", d: "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}})])]), t("div", {staticClass: "control-name"}, [e._v("Share")])]);
  }, ue = [], me = {name: "ShareButton", computed: {...Object(d.c)(["disabledShare"])}, methods: {...Object(d.b)(["share"])}}, fe = me, he = Object(h.a)(fe, ce, ue, false, null, null, null), ge = he.exports, pe = function () {
    var e = this, t = e._self._c;
    return t("div", {staticClass: "control", attrs: {title: "Create a sharable link"}}, [t("button", {attrs: {disabled: true, title: "This feature is no longer freely available."}, on: {click: e.share}}, [t("svg", {attrs: {"aria-hidden": "true", focusable: "false", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512"}}, [t("path", {attrs: {fill: "currentColor", d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}})])]), t("div", {staticClass: "control-name control-read-only"}, [e._v("Share Read-Only")])]);
  }, ye = [], be = {name: "ShareButton", computed: {...Object(d.c)(["disabledShare"])}, methods: {...Object(d.b)(["share"])}}, ve = be, Ie = (o("0c1d"), Object(h.a)(ve, pe, ye, false, null, "127dca46", null)), we = Ie.exports, je = {name: "Filters", components: {ExportButton: de, ShareButton: ge, ShareReadOnlyButton: we}, computed: {...Object(d.e)(["filters"])}, methods: {...Object(d.d)(["toggleFilter"])}}, ke = je, Le = (o("01e7"), Object(h.a)(ke, ee, te, false, null, null, null)), _e = Le.exports, Be = function () {
    var e = this, t = e._self._c;
    return t("div", [t("input", {staticClass: "form-control upload-input", attrs: {type: "file", id: "upload-input", name: "file-upload", accept: ".txt,.csv", multiple: "", hidden: e.popup, disabled: e.disabled}, on: {change: t => e.$emit("change", t)}}), e.popup && !e.disabled ? t("label", {attrs: {for: "upload-input"}}, [t("svg", {attrs: {"aria-hidden": "true", focusable: "false", "data-icon": "upload", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512"}}, [t("path", {attrs: {fill: "currentColor", d: "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}})])]) : e._e()]);
  }, Ce = [], xe = {name: "Upload", props: {popup: {type: Boolean, default: false}, disabled: {type: Boolean, default: false}}}, Oe = xe, Pe = (o("ef63"), Object(h.a)(Oe, Be, Ce, false, null, "2e47eef0", null)), ze = Pe.exports, Fe = function () {
    var e = this, t = e._self._c;
    return t("tr", [t("td", {staticClass: "player-name", class: {died: e.died}}, [t("div", {attrs: {title: e.died ? e.name + " died." : ""}}, [t("div", [t("a", {attrs: {href: `https://murderledger.com/players/${e.name}/ledger?show_kills=0&show_assists=0`, target: "_blank", rel: "noopener noreferrer"}}, [e._v(e._s(e.name))]), e._v(" (" + e._s(e.totalItemsPickedUp) + ") ")]), e.guild ? t("div", {staticClass: "guild-info"}, [e._v(" " + e._s(e.alliance ? `[${e.alliance}]` : "") + " " + e._s(e.guild || "") + " ")]) : e._e(), t("svg", {attrs: {"aria-hidden": "true", focusable: "false", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512"}, on: {click: () => e.hidePlayer(e.name)}}, [t("path", {attrs: {fill: "currentColor", d: "M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"}})])])]), t("transition-group", {staticClass: "items", attrs: {name: "list", tag: "td"}}, e._l(e.items, function (e) {
      return t("Item", {key: e.key, attrs: {id: e.itemId, type: e.type, amount: e.amount, history: e.history, subcategory: e.history[0].subcategory, category: e.history[0].category}});
    }), 1)], 1);
  }, Se = [], Ae = function () {
    var e = this, t = e._self._c;
    return t("figure", {staticClass: "item", class: {donated: "donation" === e.type, lost: "lost" === e.type, resolved: "resolved" === e.type, loaded: e.loaded, gold: e.isGold}}, [t("img", {attrs: {src: e.url, title: e.title, loading: "lazy"}, on: {load: e.onLoad}}), t("code", {staticClass: "amount"}, [e._v(e._s(e.amount))])]);
  }, Ue = [];
  o("33d1"), o("ea98");
  function Ne(e) {
    const t = U.a.utc(e, ["D/M/YYYY k:mm:ss", "M/D/YYYY k:mm:ss", "D.M.YYYY k:mm:ss", "M.D.YYYY k:mm:ss", "D.M.YYYY k.mm.ss", "M.D.YYYY k.mm.ss", "M.D.YYYY k:mm", U.a.ISO_8601]);
    if (t.isValid()) return t;
    const o = U.a.utc(e);
    return o.isValid() ? o : (console.error("Date format not recognized", e), U.a.utc());
  }
  function $e(e) {
    return Object.isFrozen(e) ? e.clone().utc().format("LLLL") : e.utc().format("LLLL");
  }
  var Te = {name: "Item", data() {
    return {loaded: false};
  }, props: {id: {type: String, required: true}, history: {type: Array, required: true}, type: {type: String, default: () => "pickedup"}, amount: {type: Number, default: () => 1}, category: {type: String, default: () => ""}, subcategory: {type: String, default: () => ""}}, computed: {isGold() {
    const e = -1 !== this.id.indexOf("T8") && -1 !== this.id.indexOf("@3"), t = "mounts" === this.category && "battle_mount" === this.subcategory;
    return e || t;
  }, url() {
    return `https://render.albiononline.com/v1/item/${this.id}.png?count=1&quality=1&size=217`;
  }, title() {
    let e = [];
    e = "donation" === this.type ? this.history.map(e => `${e.amount}x donated on ${$e(e.donatedAt)}`) : "lost" === this.type ? this.history.map(e => `${e.amount}x lost to ${e.lootedBy} at ${$e(e.lootedAt)}`) : "resolved" === this.type ? this.history.map(e => `${e.amount}x ${e.str} on ${$e(e.at)}`) : this.history.map(e => `${e.amount}x looted from ${e.lootedFrom} on ${$e(e.lootedAt)}`);
    const t = j.getNameFromId(this.id);
    return [t !== this.id ? `${t} - ${this.id}` : this.id, "", ...e].join("\n");
  }}, methods: {onLoad(e) {
    e.target.parentElement.classList.add("loaded"), this.loaded = true;
  }}}, Me = Te, Ee = (o("4d3b"), Object(h.a)(Me, Ae, Ue, false, null, "5733b287", null)), Re = Ee.exports, qe = {name: "PlayerLoot", components: {Item: Re}, props: {name: {type: String, required: true}, guild: {type: String}, alliance: {type: String}, pickedUpItems: {type: Object, required: true}, resolvedItems: {type: Object, required: true}, lostItems: {type: Object, required: true}, donatedItems: {type: Object, required: true}, died: {type: Boolean, default: () => false}}, computed: {totalItemsPickedUp() {
    let e = 0;
    for (let t in this.pickedUpItems) e += this.pickedUpItems[t].amount;
    for (let t in this.resolvedItems) e += this.resolvedItems[t].amount;
    return e;
  }, items() {
    const e = [];
    for (const t in this.pickedUpItems) {
      const o = this.pickedUpItems[t];
      e.push({itemId: t, key: "pickedup-" + t, type: "pickedup", ...o});
    }
    for (const t in this.resolvedItems) {
      const o = this.resolvedItems[t];
      e.push({itemId: t, key: "resolved-" + t, type: "resolved", ...o});
    }
    for (const t in this.lostItems) {
      const o = this.lostItems[t];
      e.push({itemId: t, key: "lost-" + t, type: "lost", ...o});
    }
    for (const t in this.donatedItems) {
      const o = this.donatedItems[t];
      e.push({itemId: t, key: "donation-" + t, type: "donation", ...o});
    }
    return e; 
  }}, methods: {...Object(d.d)(["hidePlayer"])}}, De = qe, Ye = (o("52b4"), Object(h.a)(De, Fe, Se, false, null, "631059e4", null)), He = Ye.exports, Ve = {name: "Home", components: {FAQ: Z, PlayerLoot: He, Filters: _e, Upload: ze}, computed: {...Object(d.e)(["filters", "initialized", "loadingBin", "blockUpload"]), ...Object(d.c)(["sortedFilteredPlayers", "filteredPlayers", "hasFiles"])}, methods: {...Object(d.b)(["upload"])}}, Ge = Ve, Xe = (o("7c42"), Object(h.a)(Ge, V, G, false, null, null, null)), Je = Xe.exports;
  const Qe = new i.a({base: "/ao-loot-logger-viewer/", mode: "history", routes: [{path: "/:bin?", component: Je}, {path: "*", redirect: "/ao-loot-logger-viewer/"}]});
  var We = Qe, Ke = {name: "App", components: {Footer: p, Logo: B}, computed: {...Object(d.e)(["blockSharing", "blockUpload", "chestLogs", "exporting", "files", "filters", "hidePlayers", "initialized", "loadingBin", "loadingItems", "lootLogs", "sharing", "showPlayers"]), ...Object(d.c)(["filteredPlayers", "hasFiles"]), showProgressBar() {
    return !!this.sharing || (!!this.loadingBin || !this.initialized && this.loadingItems);
  }}, methods: {...Object(d.d)(["reset", "setBin", "setBlockSharing", "setBlockUpload", "setInitialized", "setLoadingBin", "setLoadingItems"]), ...Object(d.b)(["upload"]), dragover() {
    !this.initialized || this.loadingBin || this.blockUpload || document.body.classList.add("dragover");
  }, dragleave() {
    document.body.classList.remove("dragover");
  }, async loadItems(e) {
    this.setInitialized(false), setTimeout(() => {
      this.initialized || this.setLoadingItems(true);
    }, 2e3), await j.init(e), this.setInitialized(true), this.setLoadingItems(false);
  }, async loadBin(e) {
    console.info("loading bin", e), this.setLoadingBin(true);
    try {
      console.info("fetching bin", e);
      const {record: t} = await O.read(e);
      console.log("record", t), console.info("fetching items from sha", t.sha), await this.loadItems(t.sha), console.info("decompressing record");
      const o = T(t);
      console.info("setting data", o), this.setBin(o), this.setLoadingBin(false), this.setBlockSharing(o.blockSharing), this.setBlockUpload(o.blockUpload);
    } catch (l) {
      var t, o, s, a, i, n;
      console.error(l), await this.loadItems(), this.setLoadingBin(false), 403 === (null === l || undefined === l || null === (t = l.response) || undefined === t ? undefined : t.status) && -1 !== (null === l || undefined === l || null === (o = l.response) || undefined === o || null === (o = o.message) || undefined === o ? undefined : o.indexOf("Requests exhausted")) ? r.a.error({title: "Error", message: "Sorry. The free database is exausted. :(", progressBarColor: "red", titleColor: "red"}) : 422 === (null === l || undefined === l || null === (s = l.response) || undefined === s ? undefined : s.status) && -1 !== (null === l || undefined === l || null === (a = l.response) || undefined === a || null === (a = a.message) || undefined === a ? undefined : a.indexOf("Invalid Record ID")) || 404 === (null === l || undefined === l || null === (i = l.response) || undefined === i ? undefined : i.status) && -1 !== (null === l || undefined === l || null === (n = l.response) || undefined === n || null === (n = n.message) || undefined === n ? undefined : n.indexOf("Bin not found")) ? r.a.error({title: "Error", message: "List of items not found.", progressBarColor: "red", titleColor: "red"}) : r.a.error({title: "Error", message: l.message || "Something went wrong. :(", progressBarColor: "red", titleColor: "red"}), We.push("/");
    }
  }}, async mounted() {
    return this.$route.query.b ? We.replace("/" + this.$route.query.b) : this.$route.params.bin ? this.loadBin(this.$route.params.bin) : void this.loadItems();
  }, watch: {$route(e, t) {
    return console.log("watch $route", {to: e, from: t}), "/" === e.path ? (this.reset(), this.loadItems()) : (this.$route.query.b && We.replace("/" + this.$route.query.b), t.query.b && t.query.b === e.params.bin ? this.loadBin(e.params.bin) : undefined);
  }}}, Ze = Ke, et = (o("b43b"), Object(h.a)(Ze, n, l, false, null, null, null)), tt = et.exports, ot = (o("a1f0"), o("bfa9")), st = o("efde"), at = o.n(st);
  function rt(e) {
    const t = Object.keys(e);
    for (const o of t) "object" !== typeof e[o] || Object.isFrozen(e[o]) || rt(e[o]);
    return Object.freeze(e);
  }
  function it(e, t) {
    if (e.tier) {
      if (1 === e.tier && !t.others) return false;
      if (2 === e.tier && !t.others) return false;
      if (3 === e.tier && !t.others) return false;
      if (4 === e.tier && !t.t4) return false;
      if (5 === e.tier && !t.t5) return false;
      if (6 === e.tier && !t.t6) return false;
      if (7 === e.tier && !t.t7) return false;
      if (8 === e.tier && !t.t8) return false;
    }
    if (!t.bag && "bag" === e.subcategory) return false;
    if (!t.cape && "cape" === e.subcategory) return false;
    if (!t.food && "consumables" === e.category && ("cooked" === e.subcategory || "fish" === e.subcategory)) return false;
    if (!t.potion && "consumables" === e.category && "potion" === e.subcategory) return false;
    if (!t.mount && "mounts" === e.category && "battle_mount" !== e.subcategory) return false;
    if (!t.trash && "other" === e.category && "trash" === e.subcategory) return false;
    if (!t.others) {
      if ("other" === e.category && "trash" !== e.subcategory) return false;
      if ("skillbooks" === e.category) return false;
      if ("furniture" === e.category) return false;
      if ("artefacts" === e.category) return false;
      if ("materials" === e.category) return false;
      if ("consumables" === e.category && "potion" !== e.subcategory && "cooked" !== e.subcategory && "fish" !== e.subcategory) return false;
      if ("farmables" === e.category) return false;
      if ("products" === e.category) return false;
      if ("tools" === e.category) return false;
      if ("luxurygoods" === e.category) return false;
      if ("resources" === e.category) return false;
      if (e.itemId.match(/_VANITY_/)) return false;
      if ("token" === e.category) return false;
    }
    return true;
  }
  const nt = /^(("\d*"\t"(?<userName1>.*)"\t".*"\t"-?\d*")|(?<userName2>\w+)|(\d*,(?<userName3>.*),.*,-?\d*))$/gm, lt = /^(?<lootedAt>[^;]*);(?<lootedBy>\w+);(?<itemId>[\w@]+);(?<amount>\d*);(?<lootedFrom>[\w@]+?);(?<itemName>.*)$/gm, dt = /^(?<lootedAt>[^;]*);(?<lootedByAlliance>.*);(?<lootedByGuild>.*);(?<lootedBy>\w+);(?<itemId>[\w@]+);(?<itemName>.*);(?<amount>\d*);(?<lootedFromAlliance>.*);(?<lootedFromGuild>.*);(?<lootedFrom>.+)$/gm, ct = /^"(?<lootedAt>[^,]*)","(?<lootedBy>\w+?)","(?<guildName>.*)","(?<item>.*)","(?<itemName>.*) \((?<itemId>[\w@]+)\)","(?<amount>\d*)x .+","(?<lootedFrom>[\w@]+?)"/gm, ut = /^(?<lootedAt>[^;]*);(?<lootedBy>\w+);(?<itemId>[\w@]+);(?<amount>\d*);(?<lootedFrom>[\w@]+)$/gm, mt = /^"(?<donatedAt>.*?)"\s"(?<donatedBy>[\w\d]*)"\s"(?<itemName>.*)"\s"(?<itemEnchant>\d*)"\s"\d*"\s"(?<amount>-?\d*)"$/gm, ft = /^(?<donatedAt>.*),(?<donatedBy>.*),(?<itemName>.*),(?<itemEnchant>\d),\d,(?<amount>-?\d*)$/gm, ht = /^(?<donatedAt>.*);(?<donatedBy>.*);(?<itemName>.*);(?<itemEnchant>\d);\d;(?<amount>-?\d*)$/gm;
  var gt = {guildMemberLogRe: nt, lootLogRe: lt, aoLootLogRe: ct, albionAnalysisLootLogRe: ut, chestLogRe: mt, chestLogCsvRe: ft, chestLogSsvRe: ht, v2LootLogRe: dt};
  s.a.use(d.a);
  const pt = {t4: true, t5: true, t6: true, t7: true, t8: true, bag: false, cape: false, lost: true, donated: false, food: false, mount: false, others: false, resolved: true, potion: false, trash: false}, yt = new ot.a({key: "ao-loot-logger-viewer", storage: window.localStorage, reducer: e => {
    const t = {...pt};
    for (const o in pt) t[o] = !!e.filters[o];
    return {filters: t};
  }, restoreState: (e, t) => {
    let o;
    try {
      o = JSON.parse(t[e]);
    } catch {
      return null;
    }
    const s = {...pt};
    for (const a in pt) s[a] = !!o.filters[a];
    return {filters: s};
  }, filter: e => e.type = "toggleFilter"});
  var bt = new d.a.Store({strict: true, plugins: [yt.plugin], state: {blockSharing: false, blockUpload: false, exporting: false, initialized: false, loadingBin: false, loadingItems: false, sharing: false, files: {}, hidePlayers: {}, showPlayers: {}, chestLogs: [], lootLogs: [], filters: {...pt}}, mutations: {RESTORE_MUTATION: yt.RESTORE_MUTATION, reset(e) {
    e.blockSharing = false, e.blockUpload = false, e.exporting = false, e.loadingBin = false, e.loadingItems = false, e.sharing = false, e.files = {}, e.hidePlayers = {}, e.showPlayers = {}, e.chestLogs = [], e.lootLogs = [];
  }, setInitialized(e, t) {
    e.initialized = t;
  }, setLoadingBin(e, t) {
    e.loadingBin = t;
  }, setLoadingItems(e, t) {
    e.loadingItems = t;
  }, setBlockUpload(e, t) {
    e.blockUpload = t;
  }, setBlockSharing(e, t) {
    e.blockSharing = t;
  }, setSharing(e, t) {
    e.sharing = t;
  }, setExporting(e, t) {
    e.exporting = t;
  }, uploadedFiles(e, t) {
    const o = {...e.files}, s = {...e.showPlayers};
    for (const i of t.filter(e => "show-players" === e.type)) {
      const {filename: e} = i;
      if (o[e]) for (let t in s) s[t] === e && delete s[t];
      o[e] = true;
      for (const t of i.matches) {
        const o = (t.groups.userName1 || t.groups.userName2 || t.groups.userName3).toLowerCase();
        s[o] = e;
      }
    }
    let a = [...e.lootLogs];
    for (const i of t.filter(e => "loot-logs" === e.type)) {
      const {filename: e} = i;
      o[e] && (a = a.filter(t => t.filename != e)), o[e] = true;
      for (const t of i.matches) {
        const o = Ne(t.groups.lootedAt), s = t.groups.lootedByAlliance, r = t.groups.lootedByGuild, i = t.groups.lootedBy, n = parseInt(t.groups.amount, 10), l = t.groups.lootedFromAlliance, d = t.groups.lootedFromGuild, c = t.groups.lootedFrom, u = j.getInfoFromId(t.groups.itemId), m = u.id, f = u.localizedNames && u.localizedNames["EN-US"] ? u.localizedNames["EN-US"] : u.id, h = u.tier, g = u.category, p = u.subcategory, y = {filename: e, lootedAt: o, lootedByAlliance: s, lootedByGuild: r, lootedBy: i, lootedFromAlliance: l, lootedFromGuild: d, lootedFrom: c, itemId: m, itemName: f, amount: n, tier: h, category: g, subcategory: p};
        a.push(y);
      }
    }
    a.sort((e, t) => e.lootedAt - t.lootedAt);
    let r = [...e.chestLogs];
    for (const i of t.filter(e => "chest-logs" === e.type)) {
      const {filename: e} = i;
      o[e] && (r = r.filter(t => t.filename != e)), o[e] = true;
      for (const t of i.matches) {
        const o = parseInt(t.groups.amount, 10);
        if (o < 0) {
          console.info("Skipping item since it has a negative amount (removed from the chest):", t.groups);
          continue;
        }
        const s = Ne(t.groups.donatedAt), a = t.groups.donatedBy, i = t.groups.itemName, n = parseInt(t.groups.itemEnchant, 10), l = j.getInfoFromName(i);
        if (null == l) {
          console.warn(`item not found: "${i}"`);
          continue;
        }
        let d = l.id;
        n > 0 && -1 === d.indexOf("@") && (d = `${d}@${n}`);
        const c = l.tier, u = l.category, m = l.subcategory, f = {filename: e, donatedAt: s, donatedBy: a, itemId: d, itemName: i, amount: o, tier: c, category: u, subcategory: m};
        r.push(f);
      }
    }
    r.sort((e, t) => e.donatedAt - t.donatedAt), e.showPlayers = rt(s), e.files = rt(o), e.lootLogs = rt(a), e.chestLogs = rt(r);
  }, toggleFilter(e, t) {
    null != e.filters[t] && s.a.set(e.filters, t, !e.filters[t]);
  }, setBin(e, t) {
    if (t.selectedPlayersLogs) for (const o in t.selectedPlayersLogs) for (const a in t.selectedPlayersLogs[o]) s.a.set(e.showPlayers, a.toLowerCase(), true);
    if (t.filters) for (const o in e.filters) s.a.set(e.filters, o, !!t.filters[o]);
    t.files && s.a.set(e, "files", t.files), t.showPlayers && s.a.set(e, "showPlayers", t.showPlayers), t.hidePlayers && s.a.set(e, "hidePlayers", t.hidePlayers), s.a.set(e, "lootLogs", rt(t.lootLogs)), s.a.set(e, "chestLogs", rt(t.chestLogs));
  }, hidePlayer(e, t) {
    s.a.set(e.hidePlayers, t.toLowerCase(), true);
  }}, getters: {disabledShare(e, t) {
    return e.sharing || !t.hasFiles || e.blockSharing || !O.valid;
  }, hasFiles(e) {
    return Object.keys(e.files).length > 0;
  }, allPlayers(e, t) {
    const o = {};
    for (const a of t.filteredLoot) null == o[a.lootedBy.toLowerCase()] && (o[a.lootedBy.toLowerCase()] = {name: a.lootedBy, alliance: null, guild: null, amountOfPickedUpItems: 0, pickedUpItems: {}, resolvedItems: {}, lostItems: {}, donatedItems: {}}), a.lootedByAlliance && o[a.lootedBy.toLowerCase()].alliance !== a.lootedByAlliance && (o[a.lootedBy.toLowerCase()].alliance = a.lootedByAlliance), a.lootedByGuild && o[a.lootedBy.toLowerCase()].guild !== a.lootedByGuild && (o[a.lootedBy.toLowerCase()].guild = a.lootedByGuild), null == o[a.lootedBy.toLowerCase()].pickedUpItems[a.itemId] && (o[a.lootedBy.toLowerCase()].pickedUpItems[a.itemId] = {id: a.itemId, amount: 0, history: []}), o[a.lootedBy.toLowerCase()].amountOfPickedUpItems += 1, o[a.lootedBy.toLowerCase()].pickedUpItems[a.itemId].amount += a.amount, o[a.lootedBy.toLowerCase()].pickedUpItems[a.itemId].history.push(a);
    for (const a of t.filteredLoot) {
      null == o[a.lootedFrom.toLowerCase()] && (o[a.lootedFrom.toLowerCase()] = {name: a.lootedFrom, amountOfPickedUpItems: 0, pickedUpItems: {}, resolvedItems: {}, lostItems: {}, donatedItems: {}});
      const e = o[a.lootedFrom.toLowerCase()];
      e.died = true, null == e.lostItems[a.itemId] && (e.lostItems[a.itemId] = {id: a.itemId, amount: 0, history: []}), e.lostItems[a.itemId].amount += a.amount, e.lostItems[a.itemId].history.push(a), null != e.pickedUpItems[a.itemId] && (null == e.resolvedItems[a.itemId] && (e.resolvedItems[a.itemId] = {id: a.itemId, amount: 0, history: []}), e.resolvedItems[a.itemId].amount += a.amount, e.resolvedItems[a.itemId].history.push({amount: a.amount, at: a.lootedAt, str: "picked up but lost to " + a.lootedBy}), a.amount >= e.pickedUpItems[a.itemId].amount ? delete e.pickedUpItems[a.itemId] : e.pickedUpItems[a.itemId].amount -= a.amount);
    }
    for (const a of t.filteredDonations) {
      null == o[a.donatedBy.toLowerCase()] && (o[a.donatedBy.toLowerCase()] = {name: a.donatedBy, amountOfPickedUpItems: 0, pickedUpItems: {}, resolvedItems: {}, lostItems: {}, donatedItems: {}});
      const e = o[a.donatedBy.toLowerCase()];
      let t = a.amount;
      if (null != e.pickedUpItems[a.itemId]) {
        null == e.resolvedItems[a.itemId] && (e.resolvedItems[a.itemId] = {id: a.itemId, amount: 0, history: [], category: a.category, subcategory: a.subcategory});
        const o = e.pickedUpItems[a.itemId], s = e.resolvedItems[a.itemId];
        t -= o.amount, s.amount += a.amount, s.history.push({amount: a.amount, at: a.donatedAt, str: "picked up and donated"}), a.amount >= o.amount ? delete e.pickedUpItems[a.itemId] : o.amount -= a.amount;
      }
      t && (null == e.donatedItems[a.itemId] && (e.donatedItems[a.itemId] = {id: a.itemId, amount: 0, history: [], category: a.category, subcategory: a.subcategory}), e.donatedItems[a.itemId].amount += a.amount, e.donatedItems[a.itemId].history.push(a));
    }
    for (const a in o) {
      const e = o[a.toLowerCase()];
      e.amountOfPickedUpItems = 0;
      for (const t in e.pickedUpItems) e.amountOfPickedUpItems += e.pickedUpItems[t].amount;
      e.amountOfResolvedItems = 0;
      for (const t in e.resolvedItems) e.amountOfResolvedItems += e.resolvedItems[t].amount;
      e.amountOfLostItems = 0;
      for (const t in e.lostItems) e.amountOfLostItems += e.lostItems[t].amount;
      e.amountOfDonatedItems = 0;
      for (const t in e.donatedItems) e.amountOfDonatedItems += e.donatedItems[t].amount;
    }
    for (const a in o) {
      const t = o[a.toLowerCase()];
      t.amountOfPickedUpItems || (e.filters.resolved && t.amountOfResolvedItems || e.filters.donated && t.amountOfDonatedItems || delete o[a]);
    }
    const s = rt(o);
    return s;
  }, filteredPlayers(e, t) {
    const o = {}, s = Object.keys(e.showPlayers).length > 0;
    for (const a in t.allPlayers) {
      const r = a.toLowerCase();
      e.hidePlayers[r] || (s && !e.showPlayers[r] || S.has(r) || (o[r] = t.allPlayers[a]));
    }
    return o;
  }, sortedFilteredPlayers(e, t) {
    return Object.values(t.filteredPlayers).sort((t, o) => t.amountOfPickedUpItems !== o.amountOfPickedUpItems ? o.amountOfPickedUpItems - t.amountOfPickedUpItems : e.filters.resolved && t.amountOfResolvedItems !== o.amountOfResolvedItems ? o.amountOfResolvedItems - t.amountOfResolvedItems : e.filters.donated && t.amountOfDonatedItems !== o.amountOfDonatedItems ? o.amountOfDonatedItems - t.amountOfDonatedItems : 0).map(e => e.name.toLowerCase());
  }, uniqueLootLogs(e) {
    const t = [], o = {};
    for (const a of e.lootLogs) {
      null == o[a.lootedBy] && (o[a.lootedBy] = {}), null == o[a.lootedBy][a.lootedFrom] && (o[a.lootedBy][a.lootedFrom] = {}), null == o[a.lootedBy][a.lootedFrom][a.itemId] && (o[a.lootedBy][a.lootedFrom][a.itemId] = {}), null == o[a.lootedBy][a.lootedFrom][a.itemId][a.amount] && (o[a.lootedBy][a.lootedFrom][a.itemId][a.amount] = []);
      const e = o[a.lootedBy][a.lootedFrom][a.itemId][a.amount].some(e => Math.abs(e.diff(a.lootedAt)) <= 12e4);
      e || (o[a.lootedBy][a.lootedFrom][a.itemId][a.amount].push(a.lootedAt), t.push(a));
    }
    const s = rt(t);
    return s;
  }, filteredLoot(e, t) {
    const o = t.uniqueLootLogs.filter(t => it(t, e.filters)), s = rt(o);
    return s;
  }, filteredDonations(e) {
    const t = e.chestLogs.filter(t => it(t, e.filters)), o = rt(t);
    return o;
  }}, actions: {async upload({commit: e, state: t}, o) {
    if (document.body.classList.remove("dragover"), !t.initialized) return r.a.error({title: "Error", message: "The app is still loading. Try again in a few seconds.", progressBarColor: "red", titleColor: "red"});
    if (t.loadingBin || t.blockUpload) return r.a.error({title: "Error", message: "Upload is blocked.", progressBarColor: "red", titleColor: "red"});
    const s = Array.from(o.dataTransfer ? o.dataTransfer.files : o.target.files), a = s.map(e => new Promise(t => {
      const o = new FileReader, s = new FileReader;
      o.onload = t => {
        const o = t.target.result.split(/\r|\n|\r\n/), a = at.a.detect(o.toString()), r = a.confidence >= 0.2 ? a.encoding : "UTF-8";
        console.info(`Charset detected for ${e.name}:`, a), console.info(`Charset used for ${e.name}:`, r), s.readAsText(e, r);
      }, s.onload = o => {
        const s = o.target.result;
        return console.log({content: s}), t({filename: e.name, content: s});
      }, o.readAsBinaryString(e);
    })), i = await Promise.all(a), n = i.map(e => vt(e)).filter(e => null != e);
    e("uploadedFiles", n);
  }, async share({commit: e, state: t}, o = true) {
    if (t.sharing) return;
    if (e("setSharing", true), "master" === j.sha) try {
      await j.loadSHA();
    } catch (d) {
      return console.error(d), e("setSharing", false), r.a.error({title: "Error", message: "Sorry. You can only share 60 bins a hour. Come back later.", progressBarColor: "red", titleColor: "red"});
    }
    const s = $({blockSharing: o, blockUpload: o, filters: t.filters, files: t.files, showPlayers: t.showPlayers, hidePlayers: t.hidePlayers, lootLogs: t.lootLogs, chestLogs: t.chestLogs});
    try {
      const e = await O.create(s);
      We.replace("/" + e), r.a.success({title: "Success", message: "URL copied to clipboard.", progressBarColor: "green", titleColor: "green"}), N(location.toString());
    } catch (d) {
      var a, i, n, l;
      console.error(d), 403 === (null === d || undefined === d || null === (a = d.response) || undefined === a ? undefined : a.status) && -1 !== (null === d || undefined === d || null === (i = d.response) || undefined === i || null === (i = i.message) || undefined === i ? undefined : i.indexOf("500kb")) ? r.a.error({title: "Error", message: "The payload exceeds the database limit. :(", progressBarColor: "red", titleColor: "red"}) : 403 === (null === d || undefined === d || null === (n = d.response) || undefined === n ? undefined : n.status) && -1 !== (null === d || undefined === d || null === (l = d.response) || undefined === l || null === (l = l.message) || undefined === l ? undefined : l.indexOf("Requests exhausted")) ? r.a.error({title: "Error", message: "The free database is exausted. :(", progressBarColor: "red", titleColor: "red"}) : r.a.error({title: "Error", message: d.message || "Something went wrong. :(", progressBarColor: "red", titleColor: "red"});
    }
    e("setSharing", false), e("setBlockSharing", o);
  }}});
  function vt(e) {
    const t = [{re: gt.chestLogSsvRe, type: "chest-logs"}, {re: gt.v2LootLogRe, type: "loot-logs"}, {re: gt.aoLootLogRe, type: "loot-logs"}, {re: gt.albionAnalysisLootLogRe, type: "loot-logs"}, {re: gt.lootLogRe, type: "loot-logs"}, {re: gt.chestLogRe, type: "chest-logs"}, {re: gt.chestLogCsvRe, type: "chest-logs"}, {re: gt.guildMemberLogRe, type: "show-players"}], o = e.content.trim(), s = o.split("\n").length;
    for (const a of t) {
      const t = [...o.matchAll(a.re)];
      if (t.length) {
        if (console.info(`Found ${t.length} ${a.type} matches out of ${s} lines in ${e.filename}`), t.length < s) {
          const e = o.split("\n").map(e => e.trim()).filter(e => !e.match(a.re));
          console.info("Skipped lines:", e);
        }
        return {matches: t, filename: e.filename, type: a.type};
      }
    }
    return r.a.error({title: "Error", message: "No matches for " + e.filename, progressBarColor: "red", titleColor: "red"});
  }
  s.a.use(i.a), s.a.config.productionTip = true, window.iziToast = r.a, r.a.settings({timeout: 1e4, progressBar: true, transitionIn: "fadeInUp", transitionOut: "fadeOut", theme: "dark", position: "bottomLeft", progressBarColor: "#ffaa00", backgroundColor: "rgba(0, 0, 0, 0.8)", pauseOnHover: false, titleColor: "#ffaa00"}), new s.a({store: bt, router: We, render: e => e(tt), created() {
    if (sessionStorage.redirect) {
      const e = sessionStorage.redirect;
      delete sessionStorage.redirect, console.log(e), this.$router.push(e);
    }
  }}).$mount("#app");
}, 6: function (e, t) {}, "608c": function (e, t, o) {}, "66f2": function (e, t, o) {}, 7: function (e, t) {}, "7c42": function (e, t, o) {
  "use strict";
  o("66f2");
}, 8: function (e, t) {}, 9: function (e, t) {}, a412: function (e, t, o) {}, b43b: function (e, t, o) {
  "use strict";
  o("b53d9");
}, b53d9: function (e, t, o) {}, d3d9: function (e, t, o) {
  "use strict";
  o("608c");
}, e76b: function (e, t, o) {}, ef63: function (e, t, o) {
  "use strict";
  o("13b5");
}, f2b3: function (e, t, o) {}, f7c5: function (e, t, o) {
  "use strict";
  o("fe13");
}, fc8b: function (e, t, o) {}, fe13: function (e, t, o) {}}));
