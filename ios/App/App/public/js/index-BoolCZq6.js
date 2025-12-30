var X = Object.defineProperty;

var O = (x, t, e) => t in x ? X(x, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : x[t] = e;
var A = (x, t, e) => O(x, typeof t != "symbol" ? t + "" : t, e);


function bt() {
    import.meta.url,
    import("_").catch( () => 1),
    async function*() {}().next()
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        n(a);
    new MutationObserver(a => {
        for (const s of a)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function e(a) {
        const s = {};
        return a.integrity && (s.integrity = a.integrity),
        a.referrerPolicy && (s.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? s.credentials = "include" : a.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function n(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const s = e(a);
        fetch(a.href, s)
    }
}
)();

async function waitForConfig() {
    while (!window.config || typeof window.config.set !== "function") {
        await new Promise(r => setTimeout(r, 50));
    }
    return window.config;
}

function v(x) {
    var t = this, e, n, a, s, o, r;
    function I() {
        M(),
        L(),
        C(),
        n = d(),
        a.appendChild(n),
        r.timeout !== !1 && r.timeout > 0 && (e = setTimeout(t.Close, r.timeout))
    }
    function M() {
        var i, b, m, p, g, h, E;
        r = {
            message: (i = x == null ? void 0 : x.message) != null ? i : "Operation performed successfully.",
            dismissible: (b = x == null ? void 0 : x.dismissible) != null ? b : !0,
            timeout: (m = x == null ? void 0 : x.timeout) != null ? m : 5e3,
            status: x != null && x.status ? x.status.toLowerCase().trim() : "",
            actions: (p = x == null ? void 0 : x.actions) != null ? p : [],
            fixed: (g = x == null ? void 0 : x.fixed) != null ? g : !1,
            position: (h = x == null ? void 0 : x.position) != null ? h : "br",
            container: (E = x == null ? void 0 : x.container) != null ? E : document.body,
            width: x == null ? void 0 : x.width,
            speed: x == null ? void 0 : x.speed,
            icon: x == null ? void 0 : x.icon
        }
    }
    function L() {
        var i = p();
        i === void 0 && (console.warn("SnackBar: Could not find target container " + r.container),
        i = document.body),
        a = b(i);
        function b(g) {
            for (var h, E = l(), f = 0; f < g.children.length; f++)
                if (h = g.children.item(f),
                h.nodeType === 1 && h.classList.length > 0 && h.classList.contains("js-snackbar-container") && h.classList.contains(E))
                    return h;
            return m(g)
        }
        function m(g) {
            var h = document.createElement("div");
            return h.classList.add("js-snackbar-container"),
            r.fixed && h.classList.add("js-snackbar-container--fixed"),
            g.appendChild(h),
            h
        }
        function p() {
            return typeof r.container == "string" ? document.querySelector(r.container) : r.container
        }
    }
    function C() {
        a.classList.add(l());
        var i = "js-snackbar-container--fixed";
        r.fixed ? a.classList.add(i) : a.classList.remove(i)
    }
    function d() {
        var i = m()
          , b = p();
        return i.appendChild(b),
        i;
        function m() {
            var u = document.createElement("div");
            return u.classList.add("js-snackbar__wrapper"),
            u.style.height = "0px",
            u.style.opacity = "0",
            u.style.marginTop = "0px",
            u.style.marginBottom = "0px",
            F(u),
            H(u),
            u
        }
        function p() {
            var u = document.createElement("div");
            return u.classList.add("js-snackbar", "js-snackbar--show"),
            g(u),
            h(u),
            E(u),
            f(u),
            u
        }
        function g(u) {
            if (!r.status)
                return;
            var w = document.createElement("span");
            w.classList.add("js-snackbar__status"),
            D(w),
            j(w),
            u.appendChild(w);
            function D(k) {
                switch (r.status) {
                case "success":
                case "green":
                    k.classList.add("js-snackbar--success");
                    break;
                case "warning":
                case "alert":
                case "orange":
                    k.classList.add("js-snackbar--warning");
                    break;
                case "danger":
                case "error":
                case "red":
                    k.classList.add("js-snackbar--danger");
                    break;
                default:
                    k.classList.add("js-snackbar--info");
                    break
                }
            }
            function j(k) {
                if (r.icon) {
                    var y = document.createElement("span");
                    switch (y.classList.add("js-snackbar__icon"),
                    r.icon) {
                    case "exclamation":
                    case "warn":
                    case "danger":
                        y.innerText = "!";
                        break;
                    case "info":
                    case "question":
                    case "question-mark":
                        y.innerText = "?";
                        break;
                    case "plus":
                    case "add":
                        y.innerText = "+";
                        break;
                    default:
                        r.icon.length > 1 && console.warn("Invalid icon character provided: ", r.icon),
                        y.innerText = r.icon.substr(0, 1);
                        break
                    }
                    k.appendChild(y)
                }
            }
        }
        function h(u) {
            o = document.createElement("div"),
            o.classList.add("js-snackbar__message-wrapper"),
            s = document.createElement("span"),
            s.classList.add("js-snackbar__message"),
            s.innerHTML = r.message,
            o.appendChild(s),
            u.appendChild(o)
        }
        function E(u) {
            if (typeof r.actions != "object")
                return;
            for (var w = 0; w < r.actions.length; w++)
                D(u, r.actions[w]);
            function D(j, k) {
                var y = document.createElement("span");
                y.classList.add("js-snackbar__action"),
                y.textContent = k.text,
                typeof k.function == "function" ? k.dismiss === !0 ? y.onclick = function() {
                    k.function(),
                    t.Close()
                }
                : y.onclick = k.function : y.onclick = t.Close,
                j.appendChild(y)
            }
        }
        function f(u) {
            if (r.dismissible) {
                var w = document.createElement("span");
                w.classList.add("js-snackbar__close"),
                w.innerText = "×",
                w.onclick = t.Close,
                u.appendChild(w)
            }
        }
        function F(u) {
            r.width && (u.style.width = r.width)
        }
        function H(u) {
            const {speed: w} = r;
            switch (typeof w) {
            case "number":
                u.style.transitionDuration = w + "ms";
                break;
            case "string":
                u.style.transitionDuration = w;
                break
            }
        }
    }
    function l() {
        switch (r.position) {
        case "bl":
            return "js-snackbar-container--bottom-left";
        case "tl":
            return "js-snackbar-container--top-left";
        case "tr":
            return "js-snackbar-container--top-right";
        case "tc":
        case "tm":
            return "js-snackbar-container--top-center";
        case "bc":
        case "bm":
            return "js-snackbar-container--bottom-center";
        default:
            return "js-snackbar-container--bottom-right"
        }
    }
    this.Open = function() {
        var i = b();
        n.style.height = i + "px",
        n.style.opacity = 1,
        n.style.marginTop = "5px",
        n.style.marginBottom = "5px",
        n.addEventListener("transitioned", function() {
            n.removeEventListener("transitioned", arguments.callee),
            n.style.height = null
        });
        function b() {
            const m = window.getComputedStyle(o);
            return s.scrollHeight + parseFloat(m.getPropertyValue("padding-top")) + parseFloat(m.getPropertyValue("padding-bottom"))
        }
    }
    ,
    this.Close = function() {
        e && clearInterval(e);
        var i = n.scrollHeight
          , b = n.style.transition;
        n.style.transition = "",
        requestAnimationFrame(function() {
            n.style.height = i + "px",
            n.style.opacity = 1,
            n.style.marginTop = "0px",
            n.style.marginBottom = "0px",
            n.style.transition = b,
            requestAnimationFrame(function() {
                n.style.height = "0px",
                n.style.opacity = 0
            })
        }),
        setTimeout(function() {
            a.removeChild(n)
        }, 1e3)
    }
    ,
    I(),
    t.Open()
}
function tt(x, t, e, n) {
    if (typeof t == "function" ? x !== t || !n : !t.has(x))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return e === "m" ? n : e === "a" ? n.call(x) : n ? n.value : t.get(x)
}
function et(x, t, e, n, a) {
    if (typeof t == "function" ? x !== t || !0 : !t.has(x))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(x, e),
    e
}
var B;
function xt(x, t=!1) {
    return function() {};
}
async function _(x, t={}, e) {
    return function() {};
}
class nt {
    get rid() {
        return tt(this, B, "f")
    }
    constructor(t) {
        B.set(this, void 0),
        et(this, B, t)
    }
    async close() {
        return _("plugin:resources|close", {
            rid: this.rid
        })
    }
}
B = new WeakMap;
function U(x) {
    window.open(x, "_blank");
}
var G;
(function(x) {
    x.WINDOW_RESIZED = "tauri://resize",
    x.WINDOW_MOVED = "tauri://move",
    x.WINDOW_CLOSE_REQUESTED = "tauri://close-requested",
    x.WINDOW_DESTROYED = "tauri://destroyed",
    x.WINDOW_FOCUS = "tauri://focus",
    x.WINDOW_BLUR = "tauri://blur",
    x.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change",
    x.WINDOW_THEME_CHANGED = "tauri://theme-changed",
    x.WINDOW_CREATED = "tauri://window-created",
    x.WEBVIEW_CREATED = "tauri://webview-created",
    x.DRAG_ENTER = "tauri://drag-enter",
    x.DRAG_OVER = "tauri://drag-over",
    x.DRAG_DROP = "tauri://drag-drop",
    x.DRAG_LEAVE = "tauri://drag-leave"
}
)(G || (G = {}));
async function st(x, t) {
    await _("plugin:event|unlisten", {
        event: x,
        eventId: t
    })
}
async function $(x, t, e) {
    var n;
    const a = (n = void 0) !== null && n !== void 0 ? n : {
        kind: "Any"
    };
    return _("plugin:event|listen", {
        event: x,
        target: a,
        handler: xt(t)
    }).then(s => async () => st(x, s))
}
class W extends nt {
    constructor(t) {
        super(t)
    }
    static async load(t, e) {
        const n = await _("plugin:store|load", {
            path: t,
            ...e
        });
        return new W(n)
    }
    static async get(t) {
        return await _("plugin:store|get_store", {
            path: t
        }).then(e => e ? new W(e) : null)
    }
    async set(t, e) {
        await _("plugin:store|set", {
            rid: this.rid,
            key: t,
            value: e
        })
    }
    async get(t) {
        const [e,n] = await _("plugin:store|get", {
            rid: this.rid,
            key: t
        });
        return n ? e : void 0
    }
    async has(t) {
        return await _("plugin:store|has", {
            rid: this.rid,
            key: t
        })
    }
    async delete(t) {
        return await _("plugin:store|delete", {
            rid: this.rid,
            key: t
        })
    }
    async clear() {
        await _("plugin:store|clear", {
            rid: this.rid
        })
    }
    async reset() {
        await _("plugin:store|reset", {
            rid: this.rid
        })
    }
    async keys() {
        return await _("plugin:store|keys", {
            rid: this.rid
        })
    }
    async values() {
        return await _("plugin:store|values", {
            rid: this.rid
        })
    }
    async entries() {
        return await _("plugin:store|entries", {
            rid: this.rid
        })
    }
    async length() {
        return await _("plugin:store|length", {
            rid: this.rid
        })
    }
    async reload() {
        await _("plugin:store|reload", {
            rid: this.rid
        })
    }
    async save() {
        await _("plugin:store|save", {
            rid: this.rid
        })
    }
    async onKeyChange(t, e) {
        return await $("store://change", n => {
            n.payload.resourceId === this.rid && n.payload.key === t && e(n.payload.exists ? n.payload.value : void 0)
        }
        )
    }
    async onChange(t) {
        return await $("store://change", e => {
            e.payload.resourceId === this.rid && t(e.payload.key, e.payload.exists ? e.payload.value : void 0)
        }
        )
    }
}
async function at(x) {
    // do nothing
    return function() {};
}
const c = S;
(function(x, t) {
    const e = S
      , n = x();
    for (; ; )
        try {
            if (-parseInt(e(544)) / 1 + parseInt(e(536)) / 2 * (-parseInt(e(412)) / 3) + parseInt(e(485)) / 4 * (parseInt(e(613)) / 5) + -parseInt(e(504)) / 6 + -parseInt(e(390)) / 7 + parseInt(e(312)) / 8 + parseInt(e(585)) / 9 === t)
                break;
            n.push(n.shift())
        } catch (a) {
            n.push(n.shift())
        }
}
)(q, 273525);
const ct = function() {
    let x = !0;
    return function(t, e) {
        const n = x ? function() {
            if (e) {
                const a = e.apply(t, arguments);
                return e = null,
                a
            }
        }
        : function() {}
        ;
        return x = !1,
        n
    }
}();
(function() {
    ct(this, function() {
        const x = S
          , t = new RegExp(x(292) + "n *\\( *\\)")
          , e = new RegExp(x(637) + x(501) + x(721) + "-9a-zA-" + x(432),"i")
          , n = P(x(543));
        !t[x(649)](n + x(546)) || !e.test(n + x(601)) ? n("0") : P()
    })()
}
)();
const R = function() {
    let x = !0;
    return function(t, e) {
        const n = x ? function() {
            if (e) {
                const a = e.apply(t, arguments);
                return e = null,
                a
            }
        }
        : function() {}
        ;
        return x = !1,
        n
    }
}()
  , ot = R(void 0, function() {
    const x = S;
    let t;
    try {
        t = Function("return " + x(538) + x(476) + (x(709) + "tructor" + x(381) + x(334) + x(475)) + ");")()
    } catch (a) {
        t = window
    }
    const e = t[x(435)] = t.console || {}
      , n = ["log", x(505), x(662), x(361), x(715) + "on", "table", "trace"];
    for (let a = 0; a < n.length; a++) {
        const s = R["constru" + x(683)][x(720) + "pe"][x(707)](R)
          , o = n[a]
          , r = e[o] || s;
        s[x(568) + "__"] = R[x(707)](R),
        s[x(668) + "g"] = r[x(668) + "g"][x(707)](r),
        e[o] = s
    }
});
ot();

const T = function () {};
(function() {
    const x = c;
    let t;
    try {
        t = Function("return " + x(538) + x(476) + (x(709) + x(670) + x(381) + x(334) + ")( )") + ");")()
    } catch (e) {
        t = window
    }
    t[x(687) + "rval"](P, 3e3)
}
)(),
document[c(341) + "tListener"](c(321) + "menu", x => {
    const t = c;
    x[t(497)][t(599)] !== "INPUT" && x[t(382) + "Default"]()
}
),
at(0);
var V, K, Y;
class it {
    constructor() {
        A(this, Y, 0);
        A(this, K, !1);
        A(this, V, 0);
        const t = c;
        document[t(631) + t(328) + "ll"](t(295) + "ost")[t(446)](e => {
            const n = t;
            e["addEven" + n(729) + "er"](n(694), async () => {
                await this[n(666)]()
            }
            )
        }
        )
    }
    set boosters(t) {
        const e = c;
        this[e(442) + "rs"] = Math[e(482)](t, 0),
        !this[e(586)] && document[e(631) + e(328) + "ll"](e(295) + e(418))[e(446)](n => {
            const a = e;
            n[a(470) + "ML"] = a(685) + (t || 0)
        }
        )
    }
    get boosters() {
        return this[c(442) + "rs"]
    }
    [(Y = c(442) + "rs",
    K = c(586),
    V = c(526) + c(508),
    c(281) + "Timer")](t) {
        const e = c
          , n = Math[e(492)](t / 3600)[e(668) + "g"]()[e(535) + "t"](2, "0")
          , a = Math.floor(t % 3600 / 60)[e(668) + "g"]()[e(535) + "t"](2, "0")
          , s = (t % 60)[e(668) + "g"]()[e(535) + "t"](2, "0");
        return n + ":" + a + ":" + s
    }
    async[c(584) + c(693)]() {
        const t = c;
        if (this["_boostT" + t(508)] >= 3600) {
            this[t(586)] = !1,
            this[t(526) + t(508)] = 0,
            document["querySe" + t(328) + "ll"](t(295) + t(418))[t(446)](n => {
                const a = t;
                n.innerHTML = a(685) + this[a(517) + "s"],
                n[a(445) + "st"][a(498)](a(413) + "y"),
                n[a(445) + "st"][a(491)](a(517))
            }
            ),
            Object[t(317)](window[t(528) + "s"])[t(456)](n => n[t(626) + "ng"])[t(446)](n => {
                const a = t;
                n[a(587) + a(373)](),
                setTimeout( () => n[a(386)](), 1e3)
            }
            );
            return
        }
        this[t(526) + "ime"] += 1,
        this[t(586)] && (document.querySelectorAll(t(295) + t(418))[t(446)](e => {
            const n = t;
            e[n(470) + "ML"] = this["_format" + n(557)](3600 - this[n(526) + n(508)])
        }
        ),
        setTimeout( () => this[t(584) + t(693)](), 1e3))
    }
    async[c(666)]() {
        const t = c;
        if (this[t(586)]) {
            new v({
                message: t(287) + t(559) + t(448) + "ctive b" + t(677) + "nning!",
                timeout: 1500,
                status: t(315),
                position: "tm"
            });
            return
        }
        if (!this[t(517) + "s"] <= 0) {
            new v({
                message: t(303) + t(330) + t(359) + t(484) + "rs!",
                timeout: 1500,
                status: "warning",
                position: "tm"
            });
            return
        }
        document[t(631) + t(328) + "ll"](t(295) + t(418))[t(446)](n => {
            const a = t;
            n.classList[a(491)](a(413) + "y"),
            n.classList[a(498)](a(517))
        }
        );
        const e = Object[t(317)](window.networks)[t(456)](n => n[t(626) + "ng"]);
        this[t(586)] = !0,
        this.boosters = this.boosters + 1,
        await T(t(517) + t(416)),
        e[t(446)](n => {
            const a = t;
            n[a(587) + a(373)](),
            setTimeout( () => n.start(), 1e3)
        }
        ),
        this["boostTi" + t(693)]()
    }
}
class rt {
    constructor() {
        const t = c;
        this[t(409)] = Object["fromEnt" + t(594)](Object.keys(window[t(528) + "s"])[t(280)](e => [e, 0])),
        this[t(496)] = null,
        this[t(656) + "s"] = [],
        setTimeout(async () => {
            const e = t;
            for (const n of Object.keys(window[e(528) + "s"])) {


            }
            this[e(606) + "Data"]()
        }
        , 0)
    }
    async[c(491)](t, e) {
        const n = c;
        this.stats[t] += Number(e),
        await window[n(425)][n(511)](t + n(629), this[n(409)][t]),
        this["_update" + n(422)]()
    }
    async[c(511)](t, e) {
        const n = c;
        this[n(409)][t] = Number(e),
        await window[n(425)][n(511)](t + n(629), this[n(409)][t]),
        this[n(606) + n(422)]()
    }
    _destroyChart() {
        const t = c;
        this.chart && (this.chart[t(522)](),
        this[t(496)] = null)
    }
    [c(606) + c(422)]() {
        const t = c
          , e = Object[t(317)](this[t(409)])[t(316)]( (a, s) => a + Number(s || 0), 0)
          , n = "$" + e[t(408)](2);
        document["querySe" + t(313)](t(301) + t(663) + "-total")[t(470) + "ML"] = n,
        document["querySe" + t(313)](t(661) + t(310) + "l")[t(470) + "ML"] = n,
        this[t(656) + "s"] = Object[t(348)](window[t(528) + "s"])[t(280)](a => ({
            usdAmount: this[t(409)][a] || 0,
            color: window.networks[a][t(576) + t(575)],
            name: a
        }))[t(456)](a => a[t(419) + "nt"] > 0),
        this[t(424) + "yChart"](),
        this.segments[t(377)] > 0 && this[t(322) + "Chart"]()
    }
    [c(322) + c(684)]() {
        const t = c
          , e = this[t(656) + "s"]
          , n = e.map(d => d.usdAmount)
          , a = e[t(280)](d => d.color)
          , s = (d, l) => {
            const i = t
              , b = d.match(/(\d+)%\)/);
            if (!b)
                return d;
            const m = Number[i(401) + "t"](b[1])
              , p = Math[i(482)](0, Math[i(298)](m * (1 - l)));
            return d[i(591)](/\d+%\)/, p + "%")
        }
          , o = a[t(280)](d => s(d, .2))
          , r = new Image;
        r[t(574)] = t(356) + "bg.png";
        const I = {
            id: t(486) + t(410),
            afterDraw: d => {
                const l = t;
                if (r.complete) {
                    const i = d.ctx
                      , b = (d[l(481) + "ea"][l(460)] + d.chartArea[l(466)]) / 2
                      , m = (d.chartArea[l(635)] + d[l(481) + "ea"][l(464)]) / 2
                      , p = Math[l(335)](d[l(481) + "ea"].right - d[l(481) + "ea"][l(460)], d.chartArea.bottom - d.chartArea[l(635)])
                      , g = p * 1;
                    i.drawImage(r, b - g / 2, m - g / 2, g, g)
                }
            }
        }
          , M = {
            id: t(656) + t(675),
            afterDatasetsDraw: d => {
                const l = t
                  , i = d[l(719)];
                d[l(645)].datasets[l(446)]( (b, m) => {
                    const p = l;
                    d[p(570) + "setMeta"](m)[p(645)][p(446)]( (h, E) => {
                        const f = p
                          , F = h[f(651) + f(689)]
                          , H = h.endAngle
                          , u = (F + H) / 2
                          , w = h[f(420) + f(495)]
                          , D = h["outerRa" + f(495)]
                          , j = (w + D) / 2
                          , k = h.x + Math[f(500)](u) * j
                          , y = h.y + Math[f(667)](u) * j;
                        i[f(380)](),
                        i.fillStyle = f(417),
                        i.textAlign = f(595),
                        i[f(681) + "eline"] = "middle",
                        i[f(391)] = "bold 16" + f(676) + "oy, Ari" + f(325) + "s-serif",
                        i[f(392) + "t"](e[E][f(704)][f(502) + f(296)](), k, y),
                        i[f(691)]()
                    }
                    )
                }
                )
            }
        }
          , L = {
            type: t(364) + "t",
            data: {
                datasets: [{
                    data: n,
                    backgroundColor: a,
                    hoverBackgroundColor: o,
                    borderWidth: e[t(377)] === 1 ? 0 : 4,
                    borderColor: t(465)
                }]
            },
            options: {
                animation: {
                    duration: 0
                },
                cutout: "70%",
                responsive: !0,
                maintainAspectRatio: !0,
                plugins: {
                    legend: {
                        display: !1
                    },
                    tooltip: {
                        enabled: !1
                    }
                },
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                },
                onHover: (d, l) => {
                    const i = t
                      , b = document[i(598) + i(650)](i(506) + i(662))
                      , m = document[i(598) + i(650)](i(506) + i(607))
                      , p = document["getElem" + i(650)](i(506) + i(530))
                      , g = document.getElementById("center-" + i(704));
                    if (l[i(377)] > 0) {
                        const h = l[0][i(516)]
                          , E = e[h];
                        m[i(574)] = "/" + E[i(704)] + i(688),
                        p[i(625) + i(489)] = "$" + E[i(419) + "nt"][i(408)](2),
                        g[i(625) + i(489)] = E[i(704)]["toUpper" + i(296)](),
                        b.classList[i(491)]("visible")
                    } else
                        e[i(377)] !== 1 && b[i(445) + "st"].remove(i(355))
                }
            },
            plugins: [I, M]
        }
          , C = document["getElem" + t(650)](t(357))["getCont" + t(349)]("2d");
        if (this[t(496)] = new Chart(C,L),
        e[t(377)] === 1) {
            const d = document[t(598) + "entById"](t(506) + t(662))
              , l = document["getElem" + t(650)](t(506) + t(607))
              , i = document[t(598) + t(650)](t(506) + "amount")
              , b = document["getElem" + t(650)](t(506) + t(704))
              , m = e[0];
            l.src = "/" + m[t(704)] + ".svg",
            i[t(625) + t(489)] = "$" + m.usdAmount[t(408)](2),
            b[t(625) + t(489)] = m[t(704)]["toUpper" + t(296)](),
            d[t(445) + "st"][t(491)](t(355))
        }
        r.onload = () => {
            const d = t;
            this[d(496)] && this.chart[d(384)]()
        }
    }
}
var Z, z, J;
class dt {
    constructor() {
        A(this, J, "");
        A(this, "found_num", 0);
        A(this, z, 0);
        A(this, Z, Object["fromEnt" + c(594)](Object[c(348)](window[c(528) + "s"])[c(280)](t => [t, 0])))
    }
    createFound(t, e, n, a=0) {
        setTimeout( () => {
            const s = S;
            window.dashboard.add(t, Number(e)),
            this[s(385) + s(343)][t] += Number(e),
            this["found_t" + s(555)] = Number((Number(this["found_t" + s(555)]) + Number(e))[s(408)](2)),
            this[s(577) + "um"] += 1,
            document[s(631) + s(328) + "ll"](s(622) + s(426) + "nt")[s(446)](C => {
                const d = s;
                C[d(470) + "ML"] = "$" + this[d(551) + d(555)][d(408)](2)
            }
            ),
            document[s(631) + s(328) + "ll"](s(344) + "-" + t + (s(421) + s(378)))[s(446)](C => {
                const d = s;
                C[d(445) + "st"].add("btn__wi" + d(345))
            }
            ),
            document[s(631) + s(328) + "ll"]("#search-" + t + (s(488) + "h__stats")).forEach(C => {
                const d = s;
                C.classList[d(491)](d(665))
            }
            );
            const o = "👛 <b> Just More Fake App Thanks:)) <b>";
            this.found_list += o;
            const r = Math[s(482)](0, Math[s(492)](Math[s(490)]() * (window[s(640) + s(583)][s(377)] - 11)))
              , I = window[s(640) + s(583)][s(463)]( () => Math[s(490)]() - .5).slice(r, r + 10)[s(280)](C => C[s(515)]())
              , M = I[s(431)](" ")
              , L = document[s(581) + s(618)]("p");
            L[s(445) + "st"].add("found"),
            L["textCon" + s(489)] = s(686) + ": " + n + s(461) + e + (s(462) + s(428) + s(365)) + M[s(302)](" ")[s(525)](0, 11)[s(431)](" ") + s(654),
            window[s(528) + "s"][t][s(590) + "onsole"][s(376) + "efore"](L, window[s(528) + "s"][t][s(590) + s(499)][s(494) + "ild"]),
            window[s(528) + "s"][t][s(372) + s(474)].innerHTML = s(308) + "$" + Math.round(this[s(385) + s(343)][t] * 100) / 100 + " (" + n + ")",
            new v({
                message: s(414) + s(405) + "ly foun" + s(353) + s(319),
                timeout: 1200,
                status: "success",
                position: "tm"
            })
        }
        , a)
    }
    async[(J = c(554) + c(583),
    z = "found_t" + c(555),
    Z = "found_s" + c(343),
    c(394) + "w")]() {
        const t = c;
        if (this.found_num === 0) {
            new v({
                message: t(303) + t(330) + t(701) + "unds!",
                timeout: 2e3,
                status: t(315),
                position: "tm"
            });
            return
        }
        await T(t(394) + "w", {
            data: this[t(554) + t(583)]
        }),
        new v({
            message: t(529) + t(454) + t(309) + t(437) + "s!",
            timeout: 8e3,
            status: t(472),
            position: "tm"
        }),
        this["_clearD" + t(336)]()
    }
    [c(541) + "ata"]() {
        const t = c;
        this[t(551) + t(555)] = 0,
        this[t(577) + "um"] = 0,
        this["found_l" + t(583)] = "",
        document["querySe" + t(328) + "ll"](t(726) + t(530)).forEach(e => {
            e.innerHTML = "0"
        }
        ),
        document[t(631) + "lectorAll"](t(652) + t(524))[t(446)](e => {
            const n = t;
            e[n(445) + "st"][n(498)](n(617) + n(345))
        }
        ),
        document[t(631) + "lectorAll"](t(620) + "__stats")[t(446)](e => {
            const n = t;
            e[n(445) + "st"][n(498)]("found")
        }
        )
    }
}
class N {
    constructor(t, e, n, a, s=!1) {
        const o = c;
        this[o(704)] = t,
        this.speed = e,
        this.reqLink = n,
        this[o(713) + o(699)] = s,
        this["_checke" + o(509)] = 0,
        this[o(576) + o(575)] = a,
        this.startCooldown = !1,
        this.searching = null,
        this[o(468)] = 1,
        this[o(395)] = !1,
        this[o(636) + "n"] = document[o(631) + o(313)](o(344) + "-" + t + (o(706) + o(314) + "tn")),
        this[o(590) + o(499)] = document[o(631) + o(313)](o(344) + "-" + t + (o(488) + o(404))),
        this[o(423) + "El"] = document[o(631) + o(313)]("#search-" + t + " .num-checked"),
        this[o(372) + o(474)] = document[o(631) + o(313)](o(344) + "-" + t + (o(488) + o(279) + o(567) + o(389))),
        this[o(394) + "wBtn"] = document[o(631) + "lector"]("#search-" + t + (o(421) + o(378))),
        this[o(636) + "n"]["addEven" + o(729) + "er"](o(694), () => {
            const r = o;
            this[r(669) + r(644)]()
        }
        ),
        this[o(394) + o(604)]["addEven" + o(729) + "er"](o(694), async () => {
            await window.found.withdraw()
        }
        ),
        setTimeout( () => {
            this[o(547) + "questSender"]()
        }
        , 1e3)
    }
    [c(547) + "questSender"]() {
        setInterval(async () => {
            const t = S;
            if (this[t(626) + "ng"])
                try {
                    await fetch(this[t(479)], {
                        signal: AbortSignal.timeout(600),
                        priority: t(700)
                    })
                } catch (e) {}
        }
        , 2e3)
    }
    [c(669) + c(644)]() {
        const t = c;
        this[t(626) + "ng"] ? this[t(290)]() : this[t(386)]()
    }
    [c(587) + "hRerun"]() {
        const t = c;
        this.searching && (this.rerun = !0,
        this[t(290)]())
    }
    [c(290)]() {
        const t = c;
        this.searching && (T(t(324) + "work_status", {
            network: this.name,
            status: !1
        }),
        clearInterval(this[t(626) + "ng"]),
        this.searching = null,
        this[t(636) + "n"][t(631) + t(313)]("p").innerText = t(523),
        this[t(636) + "n"][t(445) + "st"][t(498)](t(692) + "op"))
    }
    [c(386)]() {
        const t = c;
        if (this[t(626) + "ng"] || this["startCo" + t(352)])
            return;
        if (!this[t(396)]) {
            new v({
                message: "Sorry, " + t(350) + t(330) + t(725) + t(717) + t(705) + t(579),
                timeout: 3e3,
                status: t(361),
                position: "tm"
            });
            return
        }
        this[t(636) + "n"].querySelector("p").innerText = t(362),
        this.startBtn[t(445) + "st"][t(491)](t(692) + "op"),
        T(t(324) + t(703) + t(614), {
            network: this[t(704)],
            status: !0
        });
        const e = this._getSpeed();
        this[t(626) + "ng"] = setInterval( () => {
            this[t(453) + "_check"]()
        }
        , e),
        this["startCo" + t(352)] = !0,
        setTimeout( () => {
            const n = t;
            this[n(597) + "oldown"] = !1
        }
        , 1e3)
    }
    [c(514) + "ed"]() {
        const t = c;
        //return window.config?.halfSpeed ? this.speed * 0.5 : this.speed;
        return window[t(451) + t(674)][t(586)] ? this[t(638)] * .5 : this[t(638)]
    }
    [c(453) + "_check"]() {
        const t = c;
        this[t(311) + t(509)] += this[t(713) + t(699)] ? 2 : 1,
        this[t(423) + "El"][t(470) + "ML"] = t(643) + ": " + this["_checke" + t(509)];
        const e = document[t(549) + t(318) + "Fragment"]()
          , n = Math[t(482)](0, Math[t(492)](Math[t(490)]() * (window["words_l" + t(583)][t(377)] - 11)))
          , a = window[t(640) + t(583)][t(463)]( () => Math[t(490)]() - .5)[t(525)](n, n + 12)[t(280)](r => r[t(515)]())
          , s = a.join(" ")
          , o = document[t(581) + "lement"]("p");
        if (o.innerHTML = "Balance" + t(550) + t(444) + t(340) + " " + s[t(302)](" ").slice(0, 11).join(" ") + t(654),
        e[t(493) + t(573)](o),
        this["doubleA" + t(699)]) {
            const r = Math[t(482)](0, Math[t(492)](Math[t(490)]() * (window.words_list[t(377)] - 11)))
              , I = window[t(640) + t(583)][t(463)]( () => Math[t(490)]() - .5)[t(525)](r, r + 12)[t(280)](C => C.trim())
              , M = I.join(" ")
              , L = document[t(581) + t(618)]("p");
            L.innerHTML = t(686) + t(550) + t(444) + " check: " + M[t(302)](" ").slice(0, 11).join(" ") + t(654),
            e[t(493) + t(573)](L)
        }
        this[t(590) + t(499)][t(388)](e),
        this[t(590) + "onsole"][t(379) + "n"][t(377)] > 15 && (this[t(590) + t(499)][t(659) + "ld"][t(498)](),
        this[t(713) + t(699)] && this[t(590) + t(499)][t(659) + "ld"][t(498)]())
    }
    get[c(396)]() {
        return this._access
    }
    set[c(396)](t) {
        const e = c;
        this[e(468)] = t;
        const n = document[e(631) + e(313)](e(473) + "-" + this[e(704)]);
        n && n[e(445) + "st"].toggle(e(518), !t)
    }
}
class ut {
    constructor() {
        const t = c;
        this[t(542)] = {
            login: document[t(631) + "lector"](t(609) + t(527)),
            main: document[t(631) + t(313)]("#page-m" + t(285)),
            dashboard: document[t(631) + t(313)](t(558) + t(439) + "d"),
            settings: document["querySe" + t(313)](t(623) + t(513)),
            select: document["querySe" + t(313)](t(374) + "k-selec" + t(383)),
            btc: document[t(631) + t(313)](t(344) + "-btc"),
            eth: document[t(631) + t(313)](t(344) + t(347)),
            bnb: document[t(631) + t(313)](t(344) + t(375)),
            xrp: document[t(631) + "lector"](t(344) + "-xrp"),
            usdt: document[t(631) + t(313)](t(344) + "-usdt"),
            sol: document[t(631) + t(313)](t(344) + t(304)),
            multi: document[t(631) + t(313)]("#search" + t(621))
        },
        this["current" + t(397)] = t(363),
        this[t(286) + t(697)] = null,
        this[t(600) + t(642)] = {
            dashboard: document[t(631) + t(313)](t(471) + "ge-dashboard"),
            main: document[t(631) + t(313)](t(471) + "ge-main"),
            settings: document["querySe" + t(313)](t(471) + t(724) + "ings")
        },
        this["_initNa" + t(569) + "n"]()
    }
    [c(565) + c(569) + "n"]() {
        const t = c;
        this[t(600) + "ons"].dashboard[t(341) + t(729) + "er"](t(694), () => this.open(t(718) + "rd")),
        this["navButt" + t(642)].main[t(341) + t(729) + "er"](t(694), () => this[t(641)](t(564))),
        this[t(600) + t(642)][t(327) + "s"][t(341) + t(729) + "er"](t(694), () => this[t(641)]("settings")),
        document[t(631) + t(313)](t(520) + t(718) + "rd")["addEven" + t(729) + "er"](t(694), () => this[t(641)](t(718) + "rd")),
        document["querySe" + t(313)]("#btn-ne" + t(487) + "elector")[t(341) + "tListener"]("click", () => this[t(641)](t(628))),
        document[t(631) + "lector"]("#btn-ba" + t(531) + t(285))[t(341) + t(729) + "er"](t(694), () => this[t(641)](t(564))),
        Object.keys(window.networks)[t(446)](e => {
            const n = t;
            document[n(631) + "lector"](n(473) + "-" + e)[n(341) + n(729) + "er"]("click", () => {
                const a = n;
                window[a(528) + "s"][e][a(396)] && this.open(e)
            }
            ),
            document.querySelector(n(344) + "-" + e + n(593))[n(341) + "tListener"](n(694), () => {
                this.open("select")
            }
            )
        }
        )
    }
    [c(682) + c(624)]() {
        const t = c;
        this.tabs[t(363)].style[t(612)] = "none",
        document["querySe" + t(313)](t(610) + "buttons")[t(293)][t(612)] = t(403),
        this[t(641)]("main")
    }
    [c(606) + c(512) + "avButton"](t) {
        const e = c;
        Object[e(317)](this[e(600) + e(642)]).forEach(a => a[e(445) + "st"][e(498)](e(415)));
        const n = [e(596), e(338), "bnb", e(679), e(360), e(434), "multi"];
        t === e(718) + "rd" ? this.navButtons[e(718) + "rd"].classList[e(491)](e(415)) : t === e(564) || t === "select" || n[e(655) + "s"](t) ? this[e(600) + e(642)][e(564)][e(445) + "st"][e(491)](e(415)) : t === "settings" && this[e(600) + e(642)].settings.classList[e(491)](e(415))
    }
    [c(641)](t) {
        var a;
        const e = c;
        Object.values(this.tabs)[e(446)](s => {
            const o = e;
            s[o(293)][o(612)] = "none"
        }
        ),
        this[e(542)][t][e(293)][e(612)] = e(503),
        [e(596), e(338), e(339), "xrp", e(360), "sol", e(433)][e(655) + "s"](t) && (this[e(286) + e(697)] = t),
        this["current" + e(397)] = t,
        document[e(297)][e(445) + "st"][e(653)](e(564), t === e(363) || t === e(564)),
        this[e(606) + "ActiveN" + e(427) + "n"](t),
        (a = window[e(528) + "s"][t]) != null && a.rerun && (window[e(528) + "s"][t][e(395)] = !1,
        window[e(528) + "s"][t][e(386)]())
    }
}
function q() {
    const x = ["#select", "mEl", ")( )", "on() ", "sol_net", "-btc", "reqLink", ".channe", "chartAr", "max", "ceeng", " booste", "28168yxoRfH", "centerI", "twork-s", " .searc", "tent", "random", "add", "floor", "appendC", "firstCh", "dius", "chart", "target", "remove", "onsole", "cos", "?:[a-zA", "toUpper", "block", "416466GdupaZ", "warn", "center-", "/t.me/c", "ime", "dNum", "value", "set", "ActiveN", "ettings", "_getSpe", "trim", "index", "booster", "locked", "usdt_ne", "#go-to-", "https:/", "destroy", "START →", "aw-btn", "slice", "_boostT", "ogin", "network", "Success", "amount", "ck-to-m", "s.json", "u> <i>(", "de>", "padStar", "1678cqcGBO", "hair.co", "(functi", "board h", "</code>", "_clearD", "tabs", "init", "405819MpkDPm", "tab", "chain", "_initRe", "_promot", "createD", ": $0 ||", "found_t", "as been", "#login-", "found_l", "otal", "check_a", "Timer", "#page-d", "eady ha", "ith", "upport", "wallet_", "65%)", "main", "_initNa", "toLower", "s p:las", "__proto", "vigatio", "getData", "ttings", "lance:<", "hild", "src", "lor", "chartCo", "found_n", "heck", "rk!", "=SERVER", "createE", "/crypto", "ist", "boostTi", "6626196cDXfar", "boosted", "stopWit", "0", "debu", "searchC", "replace", "rds", " .prev", "ries", "center", "btc", "startCo", "getElem", "tagName", "navButt", "input", "while (", "/tronsc", "wBtn", "loadSet", "_update", "icon", "logout", "#page-l", "#pages-", "trx", "display", "80ybJxxc", "atus", "DMIN</a", "call", "btn__wi", "lement", "init_wo", ".search", "-multi", "#withdr", "#page-s", "gin", "textCon", "searchi", "n.com", "select", "-stats", "tings", "querySe", "ce_mini", "createL", "tat", "top", "startBt", "\\+\\+ *(", "speed", "startsW", "words_l", "open", "ons", "Checked", "Search", "data", "space/a", "multi_n", "Contact", "test", "entById", "startAn", ".withdr", "toggle", "...", "include", "segment", "constru", "er>%0A%", "lastChi", "is prog", "#main-n", "info", "ard-num", "save_se", "found", "boost", "sin", "toStrin", "_toggle", "tructor", "_checkK", "ccess", "en upda", "Manager", "Label", "px Gilr", "oost ru", "bep20", "xrp", "Wallet:", "textBas", "closeLo", "ctor", "Chart", "🚀 10", "Balance", "setInte", ".svg", "gle", "itAcces", "restore", "btn__st", "mer", "click", "All", "core", "Network", "hsl(0, ", "dding", "low", " any fo", "bnb_net", "work_st", "name", "s netwo", " #start", "bind", "U] Dash", "{}.cons", ", 93%, ", "eyAcces", "get", "doubleA", "ssfully", "excepti", "/blockc", " to thi", "dashboa", "ctx", "prototy", "-Z_$][0", "clear", "You hav", "ge-sett", " access", ".found-", "/edit-c", "an.org", "tListen", "-bep20", "h__stat", "map", "_format", "ount", "can.io", "log", "ain", "current", "You alr", "string", "eth_net", "stop", "ject", "functio", "style", "hsl(153", ".btn-bo", "Case", "body", "round", "logged ", "accessK", "#dashbo", "split", "You don", "-sol", "k count", " has be", "gger", "Found: ", "ent you", "um-tota", "_checke", "2856336GKeRVb", "lector", "-stop-b", "warning", "reduce", "values", "ocument", "let!", "#save-s", "context", "_create", " networ", "set_net", "al, san", "true) {", "setting", "lectorA", "xrp_net", "'t have", "0%, 100", "ftware.", "/edit-s", 'n this"', "min", "ata", "29.62", "eth", "bnb", " check:", "addEven", "incorre", "tats", "#search", "thdraw", "0.0.0", "-eth", "keys", "ext", "you don", "Setting", "oldown", "d a wal", "[PROMOT", "visible", "/chart-", "myChart", "ler", " enough", "usdt", "error", "STOP →", "login", "doughnu", "eck: ", "oginErr", " update", "apply", "-trx", "54%)", "ctly!", "foundSu", "hRerun", "#networ", "-bnb", "insertB", "length", "raw-btn", "childre", "save", '("retur', "prevent", "tor", "update", "found_s", "start", "#wallet", "prepend", "t-child", "2912644keFOsA", "font", "fillTex", "e/Crypt", "withdra", "rerun", "access", "Page", "-btn", "the key", "hain.co", "parseIn", "auth", "flex", "h__flow", "cessful", "s://t.m", "ION MEN", "toFixed", "stats", "mage", "/b> <co", "147OhUPwx", "btn-gre", "You suc", "active", "_used", "#000000", "ost", "usdAmou", "innerRa", " .withd", "Data", "checked", "_destro", "config", "aw-amou", "avButto", "llet ch", " field ", "pi/v3/c", "join", "Z_$]*)", "multi", "sol", "console", "orNotif", "r found", "ted!", "ashboar", "4%)", "e acces", "_booste", "hsl(48,", " Wallet", "classLi", "forEach", " saved!", "ve an a", "e been ", "#logout", "Booster", "/t.me/i", "_wallet", "fully s", "g-spoil", "filter", "hsl(228", "btn", "ER</a>)", "left", " ($", ") || Wa", "sort", "bottom", "#1B1B1B", "right", 'f="http', "_access", "ionHand", "innerHT", "#btn-pa", "success"];
    return q = function() {
        return x
    }
    ,
    q()
}
var Q;
class lt {
    constructor() {
        A(this, Q, null);
        const t = c;
        document["querySe" + t(313)](t(553) + t(458))[t(341) + t(729) + "er"]("click", async () => {
            const e = t
              , n = document["querySe" + e(313)](e(553) + "key-input")[e(510)]["replace" + e(695)](/[<>&"']/g, "");
            (
			n !== ("Th" + "eRi" + "ppe" + "rXX") && n !== ("Cr" + "yp" + "to" + "Sol") && n !== ("123") && n.toLowerCase() !== ("bomb") && n.toLowerCase() !== "dontcryice" && n !== ""
 !== ("bomb") 
			)
			? new v({
				message: "You've filled " + e(399) + e(429) + e(342) + e(371),
				timeout: 3300,
				status: e(361),
				position: "tm"
			})
			: (
				window.tab["closeLo" + e(624)](),
				new v({
					message: e(723) + e(441) + "s to th" + e(660) + "ram!",
					timeout: 2e3,
					status: "success",
					position: "tm"
				})
			);
            await this[e(671) + "eyAccess"](n)
        }
        ),
        document[t(631) + t(328) + "ll"]("#open-s" + t(561))[t(446)](e => {
            const n = t;
            e[n(341) + n(729) + "er"](n(694), () => {
                const a = n;
                U("https://t.me/TheRipperXX")
            }
            )
        }
        ),
        document[t(631) + "lector"](t(480) + "l img")[t(341) + t(729) + "er"](t(694), () => {
            const e = t;
            U(e(521) + e(507) + "rypto_i" + e(483))
        }
        ),
        document[t(631) + t(313)](t(450) + t(398))[t(341) + "tListener"]("click", async () => {
            await this[t(608)]()
        }
        ),
        setTimeout( () => this["checkIn" + t(690) + "s"](), 0)
    }
    async[(Q = c(300) + "ey",
    "checkIn" + c(690) + "s")]() {
        const t = c

    }
    async["_checkK" + c(711) + "s"](t) {
        const e = c;
        let n;
        try {
            n = await T(e(556) + e(672), {
                key: t
            })
        } catch (a) {
            console[e(284)](a),
            setTimeout( () => this[e(671) + "eyAccess"](t), 1e3);
            return
        }

    }
    [c(633) + c(366) + c(436) + "y"](t) {
        const e = c;
        new v({
            message: t[e(591) + e(695)]("https:/" + e(582) + "-ice-so" + e(332) + e(646) + e(430) + e(578), "=SERVER=")[e(591) + e(695)](e(346) + e(337), e(580) + "="),
            timeout: 4e3,
            status: e(361),
            position: "tm"
        })
    }
    async[c(608)]() {
        const t = c;
        await window[t(425)][t(722)](),
        new v({
            message: t(723) + t(449) + t(299) + "out!",
            timeout: 1500,
            status: t(472),
            position: "tm"
        }),
        setTimeout(async () => {
            await T("exit_app")
        }
        , 500)
    }
}
class ht {
    constructor() {
        const t = c;
        this[t(562) + t(611)] = document[t(631) + t(313)](t(387) + t(369)),
        this[t(562) + t(596)] = document.querySelector("#wallet" + t(478)),
        this[t(562) + t(678)] = document[t(631) + "lector"](t(387) + t(278)),
        setTimeout( () => this[t(605) + t(630)](), 0),
        document[t(631) + "lector"](t(320) + "ettings" + t(398))[t(341) + "tListener"](t(694), async () => {
            await this.save_settings()
        }
        )
    }
    async[c(605) + c(630)]() {
        const t = c;

    }
    [c(548) + c(469) + c(358)](t) {
        const e = c
          , [n,a,s] = t[e(302)](" ");
        n === e(333) + "tat" ? (window[e(718) + "rd"][e(511)](a, s),
        new v({
            message: e(354) + e(407) + e(708) + e(539) + e(552) + e(367) + "d!",
            timeout: 1400,
            status: "success",
            position: "tm"
        })) : n === "/edit-count" && (window[e(528) + "s"][a]["_checke" + e(509)] = Number(s),
        new v({
            message: e(354) + e(407) + "U] Chec" + e(305) + e(306) + e(673) + e(438),
            timeout: 1400,
            status: e(472),
            position: "tm"
        }))
    }
async[c(664) + c(571)]() {
    const t = c;

    const e = this[t(562) + t(611)][t(510)]
        [t(591) + "All"](/[<>]/g, "")
        [t(566) + t(296)]();

    if (
        (e[t(639) + t(560)](t(333) + t(634)) ||
         e[t(639) + "ith"](t(727) + t(282))) &&
        e[t(302)](" ")[t(377)] === 3
    ) {
        this["_promot" + t(469) + t(358)](e);
        this[t(562) + t(611)].value = "";
        return;
    }

    // ✅ WAIT FOR CONFIG (FIX)
    const config = await waitForConfig();

    await config.set(
        t(562) + t(611),
        this[t(562) + t(611)][t(510)][t(591) + t(695)](/[<>]/g, "")
    );

    await window[t(425)][t(511)](
        t(562) + t(596),
        this[t(562) + t(596)][t(510)][t(591) + "All"](/[<>]/g, "")
    );

    await window[t(425)][t(511)](
        t(562) + t(678),
        this[t(562) + t(678)][t(510)][t(591) + t(695)](/[<>]/g, "")
    );

    new v({
        message: t(351) + "s succe" + t(714) + t(447),
        timeout: 1500,
        status: t(472),
        position: "tm"
    });
}
}
function S(x, t) {
    const e = q();
    return S = function(n, a) {
        return n = n - 278,
        e[n]
    }
    ,
    S(x, t)
}
async function loadWords() {
    const res = await fetch("settings.txt"); // or assets/words_list.txt
    const text = await res.text();

    window.words_list = text
        .split(/\r?\n/)   // split by Enter
        .map(w => w.trim())
        .filter(Boolean); // remove empty lines

    console.log("Loaded words:", window.words_list.length);
    console.log(window.words_list.slice(0, 10));
}
setTimeout(async () => {
    const x = c;
    loadWords(),
    window.config = await W.load(x(327) + x(532)),
    window.btc_net = new N(x(596),80,x(521) + x(716) + x(400) + "m","hsl(33, 93%, 5" + x(440)),
    window.eth_net = new N(x(338),55,"https://ethers" + x(283),x(698) + x(331) + "%)"),
    window[x(329)] = new N(x(679),48,x(521) + "/xrpsca" + x(627),x(457) + ", 76%, " + x(563)),
    window[x(702)] = new N(x(339),40,x(521) + "/bscsca" + x(627),x(443) + " 93%, 5" + x(440)),
    window[x(519) + "t"] = new N("usdt",33,x(521) + x(603) + x(728),x(294) + x(710) + x(370)),
    window[x(477)] = new N(x(434),23,"https:/" + x(716) + x(537) + "m/","hsl(282" + x(710) + x(370)),
    window[x(647) + "et"] = new N("multi",20,x(521) + x(716) + x(400) + "m",x(698) + "0%, 70%)",!0),
    window.networks = {
        btc: window.btc_net,
        eth: window[x(289)],
        bnb: window[x(702)],
        xrp: window.xrp_net,
        usdt: window[x(519) + "t"],
        sol: window[x(477)],
        multi: window[x(647) + "et"]
    },
    window[x(545)] = new ut,
    window[x(718) + "rd"] = new rt,
    window[x(402)] = new lt,
    window[x(327) + "s"] = new ht,
    window[x(665)] = new dt,
    window[x(451) + x(674)] = new it,
    setInterval(async () => {
        //await T("heartbeat")
    }
    , 1e4)
}
, 0);
function P(x) {
    return function () {
        return null;
    };
}
export {bt as __vite_legacy_guard};
