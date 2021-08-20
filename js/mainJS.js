if (! function(a, n) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? n(a, !0) : function(t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return n(t)
	} : n(a)
}("undefined" == typeof window ? this : window, function(A, I) {
	function ee(n) {
		var e = !!n && "length" in n && n.length,
			t = qe.type(n);
		return !("function" === t || qe.isWindow(n)) && ("array" === t || 0 === e || "number" == typeof e && 0 < e && e - 1 in n)
	}

	function a(e, a, o) {
		if (qe.isFunction(a)) return qe.grep(e, function(n, e) {
			return !!a.call(n, e, n) !== o
		});
		if (a.nodeType) return qe.grep(e, function(t) {
			return t === a !== o
		});
		if ("string" == typeof a) {
			if (u.test(a)) return qe.filter(a, e, o);
			a = qe.filter(a, e)
		}
		return qe.grep(e, function(e) {
			return -1 < Le.call(a, e) !== o
		})
	}

	function s(a, n) {
		for (;
			(a = a[n]) && 1 !== a.nodeType;);
		return a
	}

	function b(a) {
		var n = {};
		return qe.each(a.match(jt) || [], function(t, e) {
			n[e] = !0
		}), n
	}

	function m() {
		He.removeEventListener("DOMContentLoaded", m), A.removeEventListener("load", m), qe.ready()
	}

	function H() {
		this.expando = qe.expando + H.uid++
	}

	function z(n, e, t) {
		var o;
		if (void 0 === t && 1 === n.nodeType)
			if (o = "data-" + e.replace(O, "-$&").toLowerCase(), t = n.getAttribute(o), "string" == typeof t) {
				try {
					t = "true" === t || "false" !== t && ("null" === t ? null : +t + "" === t ? +t : N.test(t) ? qe.parseJSON(t) : t)
				} catch (e) { }
				L.set(n, e, t)
			} else t = void 0;
		return t
	}

	function M(e, t, a, c) {
		var o = 1,
			m = 20,
			h = c ? function() {
				return c.cur()
			} : function() {
				return qe.css(e, t, "")
			},
			l = h(),
			d = a && a[3] || (qe.cssNumber[t] ? "" : "px"),
			g = (qe.cssNumber[t] || "px" !== d && +l) && q.exec(qe.css(e, t)),
			f;
		if (g && g[3] !== d) {
			d = d || g[3], a = a || [], g = +l || 1;
			do o = o || ".5", g /= o, qe.style(e, t, g + d); while (o !== (o = h() / l) && 1 !== o && --m)
		}
		return a && (g = +g || +l || 0, f = a[1] ? g + (a[1] + 1) * a[2] : +a[2], c && (c.unit = d, c.start = g, c.end = f)), f
	}

	function R(n, e) {
		var t = "undefined" == typeof n.getElementsByTagName ? "undefined" == typeof n.querySelectorAll ? [] : n.querySelectorAll(e || "*") : n.getElementsByTagName(e || "*");
		return void 0 === e || e && qe.nodeName(n, e) ? qe.merge([n], t) : t
	}

	function W(n, e) {
		for (var t = 0, o = n.length; o > t; t++) E.set(n[t], "globalEval", !e || E.get(e[t], "globalEval"))
	}

	function _(i, t, a, n, o) {
		for (var s = t.createDocumentFragment(), e = [], r = 0, l = i.length, c, h, g, f, _, w; l > r; r++)
			if (c = i[r], c || 0 === c)
				if ("object" === qe.type(c)) qe.merge(e, c.nodeType ? [c] : c);
				else if (V.test(c)) {
					for (h = h || s.appendChild(t.createElement("div")), g = (Bt.exec(c) || ["", ""])[1].toLowerCase(), f = Y[g] || Y._default, h.innerHTML = f[1] + qe.htmlPrefilter(c) + f[2], w = f[0]; w--;) h = h.lastChild;
					qe.merge(e, h.childNodes), h = s.firstChild, h.textContent = ""
				} else e.push(t.createTextNode(c));
		for (s.textContent = "", r = 0; c = e[r++];)
			if (n && -1 < qe.inArray(c, n)) o && o.push(c);
			else if (_ = qe.contains(c.ownerDocument, c), h = R(s.appendChild(c), "script"), _ && W(h), a)
				for (w = 0; c = h[w++];) U.test(c.type || "") && a.push(c);
		return s
	}

	function F() {
		return !0
	}

	function J() {
		return !1
	}

	function te() {
		try {
			return He.activeElement
		} catch (t) { }
	}

	function ae(e, t, a, d, c, p) {
		var s, u;
		if ("object" == typeof t) {
			for (u in "string" != typeof a && (d = d || a, a = void 0), t) ae(e, u, a, d, t[u], p);
			return e
		}
		if (null == d && null == c ? (c = a, d = a = void 0) : null == c && ("string" == typeof a ? (c = d, d = void 0) : (c = d, d = a, a = void 0)), !1 === c) c = J;
		else if (!c) return e;
		return 1 === p && (s = c, c = function(t) {
			return qe().off(t), s.apply(this, arguments)
		}, c.guid = s.guid || (s.guid = qe.guid++)), e.each(function() {
			qe.event.add(this, t, c, d, a)
		})
	}

	function ne(a, e) {
		return qe.nodeName(a, "table") && qe.nodeName(11 === e.nodeType ? e.firstChild : e, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function ie(t) {
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function oe(a) {
		var e = $e.exec(a.type);
		return e ? a.type = e[1] : a.removeAttribute("type"), a
	}

	function se(e, t) {
		var a, i, d, c, h, g, f, v;
		if (1 === t.nodeType) {
			if (E.hasData(e) && (c = E.access(e), h = E.set(t, c), v = c.events))
				for (d in delete h.handle, h.events = {}, v)
					for (a = 0, i = v[d].length; i > a; a++) qe.event.add(t, d, v[d][a]);
			L.hasData(e) && (g = L.access(e), f = qe.extend({}, g), L.set(t, f))
		}
	}

	function re(n, e) {
		var t = e.nodeName.toLowerCase();
		"input" === t && B.test(n.type) ? e.checked = n.checked : "input" !== t && "textarea" !== t || (e.defaultValue = n.defaultValue)
	}

	function le(m, t, h, n) {
		t = ze.apply([], t);
		var e = 0,
			i = m.length,
			s = t[0],
			o = qe.isFunction(s),
			d, p, g, b, w, x;
		if (o || 1 < i && "string" == typeof s && !Fe.checkClone && Be.test(s)) return m.each(function(a) {
			var i = m.eq(a);
			o && (t[0] = s.call(this, a, i.html())), le(i, t, h, n)
		});
		if (i && (d = _(t, m[0].ownerDocument, !1, m, n), p = d.firstChild, 1 === d.childNodes.length && (d = p), p || n)) {
			for (g = qe.map(R(d, "script"), ie), b = g.length; i > e; e++) w = d, e != i - 1 && (w = qe.clone(w, !0, !0), b && qe.merge(g, R(w, "script"))), h.call(m[e], w, e);
			if (b)
				for (x = g[g.length - 1].ownerDocument, qe.map(g, oe), e = 0; b > e; e++) w = g[e], U.test(w.type || "") && !E.access(w, "globalEval") && qe.contains(x, w) && (w.src ? qe._evalUrl && qe._evalUrl(w.src) : qe.globalEval(w.textContent.replace(Ue, "")))
		}
		return m
	}

	function de(s, t, a) {
		for (var i = t ? qe.filter(t, s) : s, n = 0, r; null != (r = i[n]); n++) a || 1 !== r.nodeType || qe.cleanData(R(r)), r.parentNode && (a && qe.contains(r.ownerDocument, r) && W(R(r, "script")), r.parentNode.removeChild(r));
		return s
	}

	function ce(n, e) {
		var t = qe(e.createElement(n)).appendTo(e.body),
			a = qe.css(t[0], "display");
		return t.detach(), a
	}

	function pe(n) {
		var e = He,
			i = Ve[n];
		return i || (i = ce(n, e), "none" !== i && i || (Je = (Je || qe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Je[0].contentDocument, e.write(), e.close(), i = ce(n, e), Je.detach()), Ve[n] = i), i
	}

	function ue(e, t, a) {
		var d = e.style,
			n, c, p, u;
		return a = a || Xe(e), u = a ? a.getPropertyValue(t) || a[t] : void 0, "" !== u && void 0 !== u || qe.contains(e.ownerDocument, e) || (u = qe.style(e, t)), a && !Fe.pixelMarginRight() && Ke.test(u) && Ge.test(t) && (n = d.width, c = d.minWidth, p = d.maxWidth, d.minWidth = d.maxWidth = d.width = u, u = a.width, d.width = n, d.minWidth = c, d.maxWidth = p), void 0 === u ? u : u + ""
	}

	function me(a, e) {
		return {
			get: function() {
				return a() ? void delete this.get : (this.get = e).apply(this, arguments)
			}
		}
	}

	function he(a) {
		if (a in nt) return a;
		for (var n = a[0].toUpperCase() + a.slice(1), t = it.length; t--;)
			if (a = it[t] + n, a in nt) return a
	}

	function ge(n, e, t) {
		var a = q.exec(e);
		return a ? Math.max(0, a[2] - (t || 0)) + (a[3] || "px") : e
	}

	function fe(r, t, a, i, n) {
		for (var o = a === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, l = 0; 4 > o; o += 2) "margin" === a && (l += qe.css(r, a + S[o], !0, n)), i ? ("content" === a && (l -= qe.css(r, "padding" + S[o], !0, n)), "margin" !== a && (l -= qe.css(r, "border" + S[o] + "Width", !0, n))) : (l += qe.css(r, "padding" + S[o], !0, n), "padding" !== a && (l += qe.css(r, "border" + S[o] + "Width", !0, n)));
		return l
	}

	function ve(i, t, a) {
		var n = !0,
			l = "width" === t ? i.offsetWidth : i.offsetHeight,
			d = Xe(i),
			s = "border-box" === qe.css(i, "boxSizing", !1, d);
		if (He.msFullscreenElement && A.top !== A && i.getClientRects().length && (l = Math.round(100 * i.getBoundingClientRect()[t])), 0 >= l || null == l) {
			if (l = ue(i, t, d), (0 > l || null == l) && (l = i.style[t]), Ke.test(l)) return l;
			n = s && (Fe.boxSizingReliable() || l === i.style[t]), l = parseFloat(l) || 0
		}
		return l + fe(i, t, a || (s ? "border" : "content"), n, d) + "px"
	}

	function ye(e, t) {
		for (var a = [], i = 0, d = e.length, o, c, p; d > i; i++) c = e[i], c.style && (a[i] = E.get(c, "olddisplay"), o = c.style.display, t ? (a[i] || "none" !== o || (c.style.display = ""), "" === c.style.display && T(c) && (a[i] = E.access(c, "olddisplay", pe(c.nodeName)))) : (p = T(c), "none" === o && p || E.set(c, "olddisplay", p ? o : qe.css(c, "display"))));
		for (i = 0; d > i; i++) c = e[i], c.style && (t && "none" !== c.style.display && "" !== c.style.display || (c.style.display = t ? a[i] || "" : "none"));
		return e
	}

	function be(e, t, a, i, n) {
		return new be.prototype.init(e, t, a, i, n)
	}

	function _e() {
		return A.setTimeout(function() {
			rt = void 0
		}), rt = qe.now()
	}

	function we(o, t) {
		var s = 0,
			r = {
				height: o
			},
			n;
		for (t = t ? 1 : 0; 4 > s; s += 2 - t) n = S[s], r["margin" + n] = r["padding" + n] = o;
		return t && (r.opacity = r.width = o), r
	}

	function xe(r, t, a) {
		for (var i = (De.tweeners[t] || []).concat(De.tweeners["*"]), n = 0, l = i.length, o; l > n; n++)
			if (o = i[n].call(a, t, r)) return o
	}

	function Ce(i, e, t) {
		var a = this,
			n = {},
			s = i.style,
			r = i.nodeType && T(i),
			l = E.get(i, "fxshow"),
			d, p, h, g, f, C, k, D;
		for (d in t.queue || (f = qe._queueHooks(i, "fx"), null == f.unqueued && (f.unqueued = 0, C = f.empty.fire, f.empty.fire = function() {
			f.unqueued || C()
		}), f.unqueued++, a.always(function() {
			a.always(function() {
				f.unqueued--, qe.queue(i, "fx").length || f.empty.fire()
			})
		})), 1 === i.nodeType && ("height" in e || "width" in e) && (t.overflow = [s.overflow, s.overflowX, s.overflowY], k = qe.css(i, "display"), D = "none" === k ? E.get(i, "olddisplay") || pe(i.nodeName) : k, "inline" === D && "none" === qe.css(i, "float") && (s.display = "inline-block")), t.overflow && (s.overflow = "hidden", a.always(function() {
			s.overflow = t.overflow[0], s.overflowX = t.overflow[1], s.overflowY = t.overflow[2]
		})), e)
			if (p = e[d], ot.exec(p)) {
				if (delete e[d], h = h || "toggle" === p, p === (r ? "hide" : "show")) {
					if ("show" !== p || !l || void 0 === l[d]) continue;
					r = !0
				}
				n[d] = l && l[d] || qe.style(i, d)
			} else k = void 0;
		if (qe.isEmptyObject(n)) "inline" === ("none" === k ? pe(i.nodeName) : k) && (s.display = k);
		else
			for (d in l ? "hidden" in l && (r = l.hidden) : l = E.access(i, "fxshow", {}), h && (l.hidden = !r), r ? qe(i).show() : a.done(function() {
				qe(i).hide()
			}), a.done(function() {
				for (var t in E.remove(i, "fxshow"), n) qe.style(i, t, n[t])
			}), n) g = xe(r ? l[d] : 0, d, a), d in l || (l[d] = g.start, r && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
	}

	function ke(e, t) {
		var a, l, d, c, p;
		for (a in e)
			if (l = qe.camelCase(a), d = t[l], c = e[a], qe.isArray(c) && (d = c[1], c = e[a] = c[0]), a !== l && (e[l] = c, delete e[a]), p = qe.cssHooks[l], p && "expand" in p)
				for (a in c = p.expand(c), delete e[l], c) a in e || (e[a] = c[a], t[a] = d);
			else t[l] = d
	}

	function De(d, e, t) {
		var a = 0,
			n = De.prefilters.length,
			m = qe.Deferred().always(function() {
				delete s.elem
			}),
			s = function() {
				if (p) return !1;
				for (var t = rt || _e(), e = Math.max(0, r.startTime + r.duration - t), a = e / r.duration || 0, n = 1 - a, i = 0, o = r.tweens.length; o > i; i++) r.tweens[i].run(n);
				return m.notifyWith(d, [r, n, e]), 1 > n && o ? e : (m.resolveWith(d, [r]), !1)
			},
			r = m.promise({
				elem: d,
				props: qe.extend({}, e),
				opts: qe.extend(!0, {
					specialEasing: {},
					easing: qe.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: rt || _e(),
				duration: t.duration,
				tweens: [],
				createTween: function(t, e) {
					var a = qe.Tween(d, r.opts, t, e, r.opts.specialEasing[t] || r.opts.easing);
					return r.tweens.push(a), a
				},
				stop: function(t) {
					var e = 0,
						n = t ? r.tweens.length : 0;
					if (p) return this;
					for (p = !0; n > e; e++) r.tweens[e].run(1);
					return t ? (m.notifyWith(d, [r, 1, 0]), m.resolveWith(d, [r, t])) : m.rejectWith(d, [r, t]), this
				}
			}),
			l = r.props,
			i, p;
		for (ke(l, r.opts.specialEasing); n > a; a++)
			if (i = De.prefilters[a].call(r, d, l, r.opts)) return qe.isFunction(i.stop) && (qe._queueHooks(r.elem, r.opts.queue).stop = qe.proxy(i.stop, i)), i;
		return qe.map(l, xe, r), qe.isFunction(r.opts.start) && r.opts.start.call(d, r), qe.fx.timer(qe.extend(s, {
			elem: d,
			anim: r,
			queue: r.opts.queue
		})), r.progress(r.opts.progress).done(r.opts.done, r.opts.complete).fail(r.opts.fail).always(r.opts.always)
	}

	function Te(t) {
		return t.getAttribute && t.getAttribute("class") || ""
	}

	function Se(e) {
		return function(t, r) {
			"string" != typeof t && (r = t, t = "*");
			var l = 0,
				d = t.toLowerCase().match(jt) || [],
				o;
			if (qe.isFunction(r))
				for (; o = d[l++];) "+" === o[0] ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(r)) : (e[o] = e[o] || []).push(r)
		}
	}

	function Pe(d, l, i, n) {
		function o(e) {
			var c;
			return s[e] = !0, qe.each(d[e] || [], function(e, t) {
				var a = t(l, i, n);
				return "string" != typeof a || r || s[a] ? r ? !(c = a) : void 0 : (l.dataTypes.unshift(a), o(a), !1)
			}), c
		}
		var s = {},
			r = d === St;
		return o(l.dataTypes[0]) || !s["*"] && o("*")
	}

	function Me(o, t) {
		var a = qe.ajaxSettings.flatOptions || {},
			i, s;
		for (i in t) void 0 !== t[i] && ((a[i] ? o : s || (s = {}))[i] = t[i]);
		return s && qe.extend(!0, o, s), o
	}

	function Oe(e, t, a) {
		for (var n = e.contents, o = e.dataTypes, s, d, c, u;
			"*" === o[0];) o.shift(), void 0 === s && (s = e.mimeType || t.getResponseHeader("Content-Type"));
		if (s)
			for (d in n)
				if (n[d] && n[d].test(s)) {
					o.unshift(d);
					break
				} if (o[0] in a) c = o[0];
		else {
			for (d in a) {
				if (!o[0] || e.converters[d + " " + o[0]]) {
					c = d;
					break
				}
				u || (u = d)
			}
			c = c || u
		}
		return c ? (c !== o[0] && o.unshift(c), a[c]) : void 0
	}

	function Ie(e, t, i, n) {
		var o = {},
			s = e.dataTypes.slice(),
			r, m, h, g, f;
		if (s[1])
			for (h in e.converters) o[h.toLowerCase()] = e.converters[h];
		for (m = s.shift(); m;)
			if (e.responseFields[m] && (i[e.responseFields[m]] = t), !f && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), f = m, m = s.shift())
				if ("*" === m) m = f;
				else if ("*" !== f && f !== m) {
					if (h = o[f + " " + m] || o["* " + m], !h)
						for (r in o)
							if (g = r.split(" "), g[1] === m && (h = o[f + " " + g[0]] || o["* " + g[0]])) {
								!0 === h ? h = o[r] : !0 !== o[r] && (m = g[0], s.unshift(g[1]));
								break
							} if (!0 !== h)
						if (h && e.throws) t = h(t);
						else try {
							t = h(t)
						} catch (t) {
							return {
								state: "parsererror",
								error: h ? t : "No conversion from " + f + " to " + m
							}
						}
				}
		return {
			state: "success",
			data: t
		}
	}

	function Ee(e, t, s, i) {
		if (qe.isArray(t)) qe.each(t, function(t, a) {
			s || It.test(e) ? i(e, a) : Ee(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, s, i)
		});
		else if (s || "object" !== qe.type(t)) i(e, t);
		else
			for (var a in t) Ee(e + "[" + a + "]", t[a], s, i)
	}

	function Ae(t) {
		return qe.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
	}
	var Ne = [],
		He = A.document,
		We = Ne.slice,
		ze = Ne.concat,
		Re = Ne.push,
		Le = Ne.indexOf,
		Ye = {},
		d = Ye.toString,
		i = Ye.hasOwnProperty,
		Fe = {},
		qe = function(a, e) {
			return new qe.fn.init(a, e)
		},
		je = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		n = /^-ms-/,
		o = /-([\da-z])/gi,
		l = function(a, e) {
			return e.toUpperCase()
		};
	qe.fn = qe.prototype = {
		jquery: "2.2.3",
		constructor: qe,
		selector: "",
		length: 0,
		toArray: function() {
			return We.call(this)
		},
		get: function(t) {
			return null == t ? We.call(this) : 0 > t ? this[t + this.length] : this[t]
		},
		pushStack: function(a) {
			var e = qe.merge(this.constructor(), a);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function(t) {
			return qe.each(this, t)
		},
		map: function(n) {
			return this.pushStack(qe.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(We.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(n) {
			var e = this.length,
				t = +n + (0 > n ? e : 0);
			return this.pushStack(0 <= t && e > t ? [this[t]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: Re,
		sort: Ne.sort,
		splice: Ne.splice
	}, qe.extend = qe.fn.extend = function() {
		var e = arguments[0] || {},
			a = 1,
			d = arguments.length,
			o = !1,
			c, h, g, f, v, y;
		for ("boolean" == typeof e && (o = e, e = arguments[a] || {}, a++), "object" == typeof e || qe.isFunction(e) || (e = {}), a === d && (e = this, a--); d > a; a++)
			if (null != (c = arguments[a]))
				for (h in c) g = e[h], f = c[h], e !== f && (o && f && (qe.isPlainObject(f) || (v = qe.isArray(f))) ? (v ? (v = !1, y = g && qe.isArray(g) ? g : []) : y = g && qe.isPlainObject(g) ? g : {}, e[h] = qe.extend(o, y, f)) : void 0 !== f && (e[h] = f));
		return e
	}, qe.extend({
		expando: "jQuery" + ("2.2.3" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() { },
		isFunction: function(t) {
			return "function" === qe.type(t)
		},
		isArray: Array.isArray,
		isWindow: function(t) {
			return null != t && t === t.window
		},
		isNumeric: function(a) {
			var e = a && a.toString();
			return !qe.isArray(a) && 0 <= e - parseFloat(e) + 1
		},
		isPlainObject: function(a) {
			if ("object" !== qe.type(a) || a.nodeType || qe.isWindow(a)) return !1;
			if (a.constructor && !i.call(a, "constructor") && !i.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
			for (var e in a);
			return void 0 === e || i.call(a, e)
		},
		isEmptyObject: function(a) {
			for (var e in a) return !1;
			return !0
		},
		type: function(t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Ye[d.call(t)] || "object" : typeof t
		},
		globalEval: function(a) {
			var n = eval,
				t;
			a = qe.trim(a), a && (1 === a.indexOf("use strict") ? (t = He.createElement("script"), t.text = a, He.head.appendChild(t).parentNode.removeChild(t)) : n(a))
		},
		camelCase: function(t) {
			return t.replace(n, "ms-").replace(o, l)
		},
		nodeName: function(a, e) {
			return a.nodeName && a.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(n, e) {
			var t = 0,
				o;
			if (ee(n))
				for (o = n.length; o > t && !1 !== e.call(n[t], t, n[t]); t++);
			else
				for (t in n)
					if (!1 === e.call(n[t], t, n[t])) break;
			return n
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(je, "")
		},
		makeArray: function(n, e) {
			var t = e || [];
			return null != n && (ee(Object(n)) ? qe.merge(t, "string" == typeof n ? [n] : n) : Re.call(t, n)), t
		},
		inArray: function(e, t, a) {
			return null == t ? -1 : Le.call(t, e, a)
		},
		merge: function(e, t) {
			for (var a = +t.length, i = 0, s = e.length; a > i; i++) e[s++] = t[i];
			return e.length = s, e
		},
		grep: function(r, t, a) {
			for (var i = [], n = 0, l = r.length, o; l > n; n++) o = !t(r[n], n), o !== !a && i.push(r[n]);
			return i
		},
		map: function(e, t, a) {
			var i = 0,
				l = [],
				o, d;
			if (ee(e))
				for (o = e.length; o > i; i++) d = t(e[i], i, a), null != d && l.push(d);
			else
				for (i in e) d = t(e[i], i, a), null != d && l.push(d);
			return ze.apply([], l)
		},
		guid: 1,
		proxy: function(a, s) {
			var r, l, d;
			return "string" == typeof s && (r = a[s], s = a, a = r), qe.isFunction(a) ? (l = We.call(arguments, 2), d = function() {
				return a.apply(s || this, l.concat(We.call(arguments)))
			}, d.guid = a.guid = a.guid || qe.guid++, d) : void 0
		},
		now: Date.now,
		support: Fe
	}), "function" == typeof Symbol && (qe.fn[Symbol.iterator] = Ne[Symbol.iterator]), qe.each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"], function(a, e) {
		Ye["[object " + e + "]"] = e.toLowerCase()
	});
	var e = function(n) {
		function h(o, t, s, r) {
			var n = t && t.ownerDocument,
				l = t ? t.nodeType : 9,
				d, u, h, b, _, w, S, P;
			if (s = s || [], "string" != typeof o || !o || 1 !== l && 9 !== l && 11 !== l) return s;
			if (!r && ((t ? t.ownerDocument || t : M) !== ve && fe(t), t = t || ve, be)) {
				if (11 !== l && (w = Y.exec(o)))
					if (!(d = w[1])) {
						if (w[2]) return F.apply(s, t.getElementsByTagName(o)), s;
						if ((d = w[3]) && oe.getElementsByClassName && t.getElementsByClassName) return F.apply(s, t.getElementsByClassName(d)), s
					} else if (9 === l) {
						if (!(h = t.getElementById(d))) return s;
						if (h.id === d) return s.push(h), s
					} else if (n && (h = n.getElementById(d)) && je(t, h) && h.id === d) return s.push(h), s;
				if (oe.qsa && !H[o + " "] && (!_e || !_e.test(o))) {
					if (1 !== l) n = t, P = o;
					else if ("object" !== t.nodeName.toLowerCase()) {
						for ((b = t.getAttribute("id")) ? b = b.replace(te, "\\$&") : t.setAttribute("id", b = k), S = de(o), u = S.length, _ = T.test(b) ? "#" + b : "[id='" + b + "']"; u--;) S[u] = _ + " " + p(S[u]);
						P = S.join(","), n = Z.test(o) && f(t.parentNode) || t
					}
					if (P) try {
						return F.apply(s, n.querySelectorAll(P)), s
					} catch (t) { } finally {
							b === k && t.removeAttribute("id")
						}
				}
			}
			return pe(o.replace(J, "$1"), t, s, r)
		}

		function e() {
			function e(i, a) {
				return t.push(i + " ") > se.cacheLength && delete e[t.shift()], e[i + " "] = a
			}
			var t = [];
			return e
		}

		function o(t) {
			return t[k] = !0, t
		}

		function s(a) {
			var e = ve.createElement("div");
			try {
				return !!a(e)
			} catch (t) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function t(e, t) {
			for (var a = e.split("|"), i = a.length; i--;) se.attrHandle[a[i]] = t
		}

		function l(n, e) {
			var t = e && n,
				o = t && 1 === n.nodeType && 1 === e.nodeType && (~e.sourceIndex || -2147483648) - (~n.sourceIndex || -2147483648);
			if (o) return o;
			if (t)
				for (; t = t.nextSibling;)
					if (t === e) return -1;
			return n ? 1 : -1
		}

		function a(n) {
			return function(e) {
				var t = e.nodeName.toLowerCase();
				return "input" === t && e.type === n
			}
		}

		function i(n) {
			return function(e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}

		function r(e) {
			return o(function(t) {
				return t = +t, o(function(a, i) {
					for (var n = e([], a.length, t), o = n.length, l; o--;) a[l = n[o]] && (a[l] = !(i[l] = a[l]))
				})
			})
		}

		function f(t) {
			return t && "undefined" != typeof t.getElementsByTagName && t
		}

		function d() { }

		function p(n) {
			for (var e = 0, o = n.length, a = ""; o > e; e++) a += n[e].value;
			return a
		}

		function c(m, t, a) {
			var h = t.dir,
				n = a && "parentNode" === h,
				i = u++;
			return t.first ? function(t, o, a) {
				for (; t = t[h];)
					if (1 === t.nodeType || n) return m(t, o, a)
			} : function(e, t, o) {
				var s = [O, i],
					r, l, u;
				if (o) {
					for (; e = e[h];)
						if ((1 === e.nodeType || n) && m(e, t, o)) return !0;
				} else
					for (; e = e[h];)
						if (1 === e.nodeType || n) {
							if (u = e[k] || (e[k] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (r = l[h]) && r[0] === O && r[1] === i) return s[2] = r[2];
							if (l[h] = s, s[2] = m(e, t, o)) return !0
						}
			}
		}

		function m(e) {
			return 1 < e.length ? function(t, a, i) {
				for (var n = e.length; n--;)
					if (!e[n](t, a, i)) return !1;
				return !0
			} : e[0]
		}

		function w(e, t, a) {
			for (var i = 0, s = t.length; s > i; i++) h(e, t[i], a);
			return a
		}

		function x(d, t, a, n, o) {
			for (var s = [], e = 0, c = d.length, l; c > e; e++)(l = d[e]) && (a && !a(l, n, o) || (s.push(l), null != t && t.push(e)));
			return s
		}

		function b(r, t, a, s, l, e) {
			return s && !s[k] && (s = b(s)), l && !l[k] && (l = b(l, e)), o(function(c, e, d, u) {
				var h = [],
					i = [],
					m = e.length,
					n = c || w(t || "*", d.nodeType ? [d] : d, []),
					o = r && (c || !t) ? x(n, h, r, d, u) : n,
					p = a ? l || (c ? r : m || s) ? [] : e : o,
					g, _, C;
				if (a && a(o, p, d, u), s)
					for (g = x(p, i), s(g, [], d, u), _ = g.length; _--;)(C = g[_]) && (p[i[_]] = !(o[i[_]] = C));
				if (!c) p = x(p === e ? p.splice(m, p.length) : p), l ? l(null, e, p, u) : F.apply(e, p);
				else if (l || r) {
					if (l) {
						for (g = [], _ = p.length; _--;)(C = p[_]) && g.push(o[_] = C);
						l(null, p = [], g, u)
					}
					for (_ = p.length; _--;)(C = p[_]) && -1 < (g = l ? ee(c, C) : h[_]) && (c[g] = !(e[g] = C))
				}
			})
		}

		function C(e) {
			for (var a = e.length, f = se.relative[e[0].type], n = f || se.relative[" "], i = f ? 1 : 0, o = c(function(t) {
				return t === v
			}, n, !0), s = c(function(t) {
				return -1 < ee(v, t)
			}, n, !0), u = [function(e, t, a) {
				var i = !f && (a || t !== ue) || ((v = t).nodeType ? o(e, t, a) : s(e, t, a));
				return v = null, i
			}], v, y, _; a > i; i++)
				if (y = se.relative[e[i].type]) u = [c(m(u), y)];
				else {
					if (y = se.filter[e[i].type].apply(null, e[i].matches), y[k]) {
						for (_ = ++i; a > _ && !se.relative[e[_].type]; _++);
						return b(1 < i && m(u), 1 < i && p(e.slice(0, i - 1).concat({
							value: " " === e[i - 2].type ? "*" : ""
						})).replace(J, "$1"), y, _ > i && C(e.slice(i, _)), a > _ && C(e = e.slice(_)), a > _ && p(e))
					}
					u.push(y)
				} return m(u)
		}

		function g(i, t) {
			var a = 0 < t.length,
				n = 0 < i.length,
				s = function(o, e, s, r, l) {
					var d = 0,
						p = "0",
						u = o && [],
						m = [],
						b = ue,
						w = o || n && se.find.TAG("*", l),
						v = O += null == b ? 1 : Math.random() || .1,
						T = w.length,
						y, S, P;
					for (l && (ue = e === ve || e || l); p !== T && null != (y = w[p]); p++) {
						if (n && y) {
							for (S = 0, e || y.ownerDocument === ve || (fe(y), s = !be); P = i[S++];)
								if (P(y, e || ve, s)) {
									r.push(y);
									break
								} l && (O = v)
						}
						a && ((y = !P && y) && d--, o && u.push(y))
					}
					if (d += p, a && p !== d) {
						for (S = 0; P = t[S++];) P(u, m, e, s);
						if (o) {
							if (0 < d)
								for (; p--;) u[p] || m[p] || (m[p] = q.call(r));
							m = x(m)
						}
						F.apply(r, m), l && !o && 0 < m.length && 1 < d + t.length && h.uniqueSort(r)
					}
					return l && (O = v, ue = b), u
				};
			return a ? o(s) : s
		}
		var k = "sizzle" + 1 * new Date,
			M = n.document,
			O = 0,
			u = 0,
			E = e(),
			N = e(),
			H = e(),
			y = function(a, e) {
				return a === e && (ge = !0), 0
			},
			z = {}.hasOwnProperty,
			L = [],
			q = L.pop,
			B = L.push,
			F = L.push,
			K = L.slice,
			ee = function(n, e) {
				for (var t = 0, o = n.length; o > t; t++)
					if (n[t] === e) return t;
				return -1
			},
			I = /[\x20\t\r\n\f]+/g,
			J = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
			P = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
			Q = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
			R = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
			S = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
			T = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
			U = {
				ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
				CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
				TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
				ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
				PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
				CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
				bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
				needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
			},
			V = /^(?:input|select|textarea|button)$/i,
			W = /^h\d$/i,
			X = /^[^{]+\{\s*\[native \w/,
			Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			Z = /[+~]/,
			te = /'|\\/g,
			_ = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
			ae = function(n, e, t) {
				var a = "0x" + e - 65536;
				return a != a || t ? e : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
			},
			ne = function() {
				fe()
			},
			ie, oe, se, re, le, de, ce, pe, ue, me, ge, fe, ve, ye, be, _e, we, xe, je;
		try {
			F.apply(L = K.call(M.childNodes), M.childNodes), L[M.childNodes.length].nodeType
		} catch (t) {
			F = {
				apply: L.length ? function(a, e) {
					B.apply(a, K.call(e))
				} : function(n, e) {
					for (var t = n.length, o = 0; n[t++] = e[o++];);
					n.length = t - 1
				}
			}
		}
		for (ie in oe = h.support = {}, le = h.isXML = function(a) {
			var e = a && (a.ownerDocument || a).documentElement;
			return !!e && "HTML" !== e.nodeName
		}, fe = h.setDocument = function(e) {
			var t = e ? e.ownerDocument || e : M,
				a, o;
			return t !== ve && 9 === t.nodeType && t.documentElement ? (ve = t, ye = ve.documentElement, be = !le(ve), (o = ve.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ne, !1) : o.attachEvent && o.attachEvent("onunload", ne)), oe.attributes = s(function(t) {
				return t.className = "i", !t.getAttribute("className")
			}), oe.getElementsByTagName = s(function(t) {
				return t.appendChild(ve.createComment("")), !t.getElementsByTagName("*").length
			}), oe.getElementsByClassName = X.test(ve.getElementsByClassName), oe.getById = s(function(t) {
				return ye.appendChild(t).id = k, !ve.getElementsByName || !ve.getElementsByName(k).length
			}), oe.getById ? (se.find.ID = function(n, e) {
				if ("undefined" != typeof e.getElementById && be) {
					var t = e.getElementById(n);
					return t ? [t] : []
				}
			}, se.filter.ID = function(a) {
				var n = a.replace(_, ae);
				return function(t) {
					return t.getAttribute("id") === n
				}
			}) : (delete se.find.ID, se.filter.ID = function(a) {
				var n = a.replace(_, ae);
				return function(t) {
					var e = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
					return e && e.value === n
				}
			}), se.find.TAG = oe.getElementsByTagName ? function(a, e) {
				return "undefined" == typeof e.getElementsByTagName ? oe.qsa ? e.querySelectorAll(a) : void 0 : e.getElementsByTagName(a)
			} : function(e, t) {
				var a = [],
					i = 0,
					r = t.getElementsByTagName(e),
					o;
				if ("*" === e) {
					for (; o = r[i++];) 1 === o.nodeType && a.push(o);
					return a
				}
				return r
			}, se.find.CLASS = oe.getElementsByClassName && function(a, e) {
				return "undefined" != typeof e.getElementsByClassName && be ? e.getElementsByClassName(a) : void 0
			}, we = [], _e = [], (oe.qsa = X.test(ve.querySelectorAll)) && (s(function(t) {
				ye.appendChild(t).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && _e.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll("[selected]").length || _e.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"), t.querySelectorAll("[id~=" + k + "-]").length || _e.push("~="), t.querySelectorAll(":checked").length || _e.push(":checked"), t.querySelectorAll("a#" + k + "+*").length || _e.push(".#.+[+~]")
			}), s(function(a) {
				var e = ve.createElement("input");
				e.setAttribute("type", "hidden"), a.appendChild(e).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && _e.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), a.querySelectorAll(":enabled").length || _e.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), _e.push(",.*:")
			})), (oe.matchesSelector = X.test(xe = ye.matches || ye.webkitMatchesSelector || ye.mozMatchesSelector || ye.oMatchesSelector || ye.msMatchesSelector)) && s(function(t) {
				oe.disconnectedMatch = xe.call(t, "div"), xe.call(t, "[s!='']:x"), we.push("!=", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
			}), _e = _e.length && new RegExp(_e.join("|")), we = we.length && new RegExp(we.join("|")), a = X.test(ye.compareDocumentPosition), je = a || X.test(ye.contains) ? function(n, e) {
				var t = 9 === n.nodeType ? n.documentElement : n,
					a = e && e.parentNode;
				return n === a || a && 1 === a.nodeType && (t.contains ? t.contains(a) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(a))
			} : function(a, e) {
				if (e)
					for (; e = e.parentNode;)
						if (e === a) return !0;
				return !1
			}, y = a ? function(n, e) {
				if (n === e) return ge = !0, 0;
				var t = !n.compareDocumentPosition - !e.compareDocumentPosition;
				return t ? t : (t = (n.ownerDocument || n) === (e.ownerDocument || e) ? n.compareDocumentPosition(e) : 1, 1 & t || !oe.sortDetached && e.compareDocumentPosition(n) === t ? n === ve || n.ownerDocument === M && je(M, n) ? -1 : e === ve || e.ownerDocument === M && je(M, e) ? 1 : me ? ee(me, n) - ee(me, e) : 0 : 4 & t ? -1 : 1)
			} : function(d, t) {
				if (d === t) return ge = !0, 0;
				var a = 0,
					c = d.parentNode,
					n = t.parentNode,
					e = [d],
					o = [t],
					s;
				if (!c || !n) return d === ve ? -1 : t === ve ? 1 : c ? -1 : n ? 1 : me ? ee(me, d) - ee(me, t) : 0;
				if (c === n) return l(d, t);
				for (s = d; s = s.parentNode;) e.unshift(s);
				for (s = t; s = s.parentNode;) o.unshift(s);
				for (; e[a] === o[a];) a++;
				return a ? l(e[a], o[a]) : e[a] === M ? -1 : o[a] === M ? 1 : 0
			}, ve) : ve
		}, h.matches = function(a, e) {
			return h(a, null, null, e)
		}, h.matchesSelector = function(n, e) {
			if ((n.ownerDocument || n) !== ve && fe(n), e = e.replace(R, "='$1']"), oe.matchesSelector && be && !H[e + " "] && (!we || !we.test(e)) && (!_e || !_e.test(e))) try {
				var i = xe.call(n, e);
				if (i || oe.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
			} catch (e) { }
			return 0 < h(e, ve, null, [n]).length
		}, h.contains = function(a, e) {
			return (a.ownerDocument || a) !== ve && fe(a), je(a, e)
		}, h.attr = function(n, t) {
			(n.ownerDocument || n) !== ve && fe(n);
			var a = se.attrHandle[t.toLowerCase()],
				i = a && z.call(se.attrHandle, t.toLowerCase()) ? a(n, t, !be) : void 0;
			return void 0 === i ? oe.attributes || !be ? n.getAttribute(t) : (i = n.getAttributeNode(t)) && i.specified ? i.value : null : i
		}, h.error = function(t) {
			throw new Error("Syntax error, unrecognized expression: " + t)
		}, h.uniqueSort = function(e) {
			var t = [],
				a = 0,
				s = 0,
				r;
			if (ge = !oe.detectDuplicates, me = !oe.sortStable && e.slice(0), e.sort(y), ge) {
				for (; r = e[s++];) r === e[s] && (a = t.push(s));
				for (; a--;) e.splice(t[a], 1)
			}
			return me = null, e
		}, re = h.getText = function(a) {
			var s = "",
				r = 0,
				l = a.nodeType,
				n;
			if (!l)
				for (; n = a[r++];) s += re(n);
			else if (1 === l || 9 === l || 11 === l) {
				if ("string" == typeof a.textContent) return a.textContent;
				for (a = a.firstChild; a; a = a.nextSibling) s += re(a)
			} else if (3 === l || 4 === l) return a.nodeValue;
			return s
		}, se = h.selectors = {
			cacheLength: 50,
			createPseudo: o,
			match: U,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(t) {
					return t[1] = t[1].replace(_, ae), t[3] = (t[3] || t[4] || t[5] || "").replace(_, ae), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
				},
				CHILD: function(t) {
					return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || h.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && h.error(t[0]), t
				},
				PSEUDO: function(n) {
					var e = !n[6] && n[2],
						t;
					return U.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : e && S.test(e) && (t = de(e, !0)) && (t = e.indexOf(")", e.length - t) - e.length) && (n[0] = n[0].slice(0, t), n[2] = e.slice(0, t)), n.slice(0, 3))
				}
			},
			filter: {
				TAG: function(a) {
					var n = a.replace(_, ae).toLowerCase();
					return "*" === a ? function() {
						return !0
					} : function(t) {
						return t.nodeName && t.nodeName.toLowerCase() === n
					}
				},
				CLASS: function(a) {
					var n = E[a + " "];
					return n || (n = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && E(a, function(t) {
						return n.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, a) {
					return function(i) {
						var n = h.attr(i, e);
						return null == n ? "!=" === t : !t || (n += "", "=" === t ? n === a : "!=" === t ? n !== a : "^=" === t ? a && 0 === n.indexOf(a) : "*=" === t ? a && -1 < n.indexOf(a) : "$=" === t ? a && n.slice(-a.length) === a : "~=" === t ? -1 < (" " + n.replace(I, " ") + " ").indexOf(a) : "|=" == t && (n === a || n.slice(0, a.length + 1) === a + "-"))
					}
				},
				CHILD: function(n, i, t, o, l) {
					var d = "nth" !== n.slice(0, 3),
						e = "last" !== n.slice(-4),
						c = "of-type" === i;
					return 1 === o && 0 === l ? function(t) {
						return !!t.parentNode
					} : function(t, a, i) {
						var p = d == e ? "previousSibling" : "nextSibling",
							u = t.parentNode,
							m = c && t.nodeName.toLowerCase(),
							h = !i && !c,
							r = !1,
							g, f, y, b, S, P;
						if (u) {
							if (d) {
								for (; p;) {
									for (b = t; b = b[p];)
										if (c ? b.nodeName.toLowerCase() === m : 1 === b.nodeType) return !1;
									P = p = "only" === n && !P && "nextSibling"
								}
								return !0
							}
							if (P = [e ? u.firstChild : u.lastChild], e && h) {
								for (b = u, y = b[k] || (b[k] = {}), f = y[b.uniqueID] || (y[b.uniqueID] = {}), g = f[n] || [], S = g[0] === O && g[1], r = S && g[2], b = S && u.childNodes[S]; b = ++S && b && b[p] || (r = S = 0) || P.pop();)
									if (1 === b.nodeType && ++r && b === t) {
										f[n] = [O, S, r];
										break
									}
							} else if (h && (b = t, y = b[k] || (b[k] = {}), f = y[b.uniqueID] || (y[b.uniqueID] = {}), g = f[n] || [], S = g[0] === O && g[1], r = S), !1 === r)
								for (;
									(b = ++S && b && b[p] || (r = S = 0) || P.pop()) && !((c ? b.nodeName.toLowerCase() === m : 1 === b.nodeType) && ++r && (h && (y = b[k] || (b[k] = {}), f = y[b.uniqueID] || (y[b.uniqueID] = {}), f[n] = [O, r]), b === t)););
							return r -= l, r === o || 0 == r % o && 0 <= r / o
						}
					}
				},
				PSEUDO: function(a, r) {
					var i = se.pseudos[a] || se.setFilters[a.toLowerCase()] || h.error("unsupported pseudo: " + a),
						n;
					return i[k] ? i(r) : 1 < i.length ? (n = [a, a, "", r], se.setFilters.hasOwnProperty(a.toLowerCase()) ? o(function(n, e) {
						for (var t = i(n, r), a = t.length, l; a--;) l = ee(n, t[a]), n[l] = !(e[l] = t[a])
					}) : function(e) {
						return i(e, 0, n)
					}) : i
				}
			},
			pseudos: {
				not: o(function(a) {
					var s = [],
						t = [],
						i = ce(a.replace(J, "$1"));
					return i[k] ? o(function(n, t, a, l) {
						for (var o = i(n, null, l, []), e = n.length, d; e--;)(d = o[e]) && (n[e] = !(t[e] = d))
					}) : function(n, o, a) {
						return s[0] = n, i(s, null, a, t), s[0] = null, !t.pop()
					}
				}),
				has: o(function(a) {
					return function(e) {
						return 0 < h(a, e).length
					}
				}),
				contains: o(function(a) {
					return a = a.replace(_, ae),
						function(e) {
							return -1 < (e.textContent || e.innerText || re(e)).indexOf(a)
						}
				}),
				lang: o(function(n) {
					return T.test(n || "") || h.error("unsupported lang: " + n), n = n.replace(_, ae).toLowerCase(),
						function(e) {
							var i;
							do
								if (i = be ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
							return !1
						}
				}),
				target: function(a) {
					var e = n.location && n.location.hash;
					return e && e.slice(1) === a.id
				},
				root: function(t) {
					return t === ye
				},
				focus: function(t) {
					return t === ve.activeElement && (!ve.hasFocus || ve.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
				},
				enabled: function(t) {
					return !1 === t.disabled
				},
				disabled: function(t) {
					return !0 === t.disabled
				},
				checked: function(a) {
					var e = a.nodeName.toLowerCase();
					return "input" === e && !!a.checked || "option" === e && !!a.selected
				},
				selected: function(t) {
					return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
				},
				empty: function(t) {
					for (t = t.firstChild; t; t = t.nextSibling)
						if (6 > t.nodeType) return !1;
					return !0
				},
				parent: function(t) {
					return !se.pseudos.empty(t)
				},
				header: function(t) {
					return W.test(t.nodeName)
				},
				input: function(t) {
					return V.test(t.nodeName)
				},
				button: function(a) {
					var e = a.nodeName.toLowerCase();
					return "input" === e && "button" === a.type || "button" === e
				},
				text: function(a) {
					var e;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (e = a.getAttribute("type")) || "text" === e.toLowerCase())
				},
				first: r(function() {
					return [0]
				}),
				last: r(function(a, e) {
					return [e - 1]
				}),
				eq: r(function(n, e, t) {
					return [0 > t ? t + e : t]
				}),
				even: r(function(n, e) {
					for (var t = 0; e > t; t += 2) n.push(t);
					return n
				}),
				odd: r(function(n, e) {
					for (var t = 1; e > t; t += 2) n.push(t);
					return n
				}),
				lt: r(function(n, e, t) {
					for (var a = 0 > t ? t + e : t; 0 <= --a;) n.push(a);
					return n
				}),
				gt: r(function(n, e, t) {
					for (var a = 0 > t ? t + e : t; ++a < e;) n.push(a);
					return n
				})
			}
		}, se.pseudos.nth = se.pseudos.eq, {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) se.pseudos[ie] = a(ie);
		for (ie in {
			submit: !0,
			reset: !0
		}) se.pseudos[ie] = i(ie);
		return d.prototype = se.filters = se.pseudos, se.setFilters = new d, de = h.tokenize = function(e, t) {
			var a = N[e + " "],
				n, i, c, m, g, f, v;
			if (a) return t ? 0 : a.slice(0);
			for (g = e, f = [], v = se.preFilter; g;) {
				for (m in n && !(i = P.exec(g)) || (i && (g = g.slice(i[0].length) || g), f.push(c = [])), n = !1, (i = Q.exec(g)) && (n = i.shift(), c.push({
					value: n,
					type: i[0].replace(J, " ")
				}), g = g.slice(n.length)), se.filter) (i = U[m].exec(g)) && (!v[m] || (i = v[m](i))) && (n = i.shift(), c.push({
					value: n,
					type: m,
					matches: i
				}), g = g.slice(n.length));
				if (!n) break
			}
			return t ? g.length : g ? h.error(e) : N(e, f).slice(0)
		}, ce = h.compile = function(s, t) {
			var r = [],
				i = [],
				n = H[s + " "],
				l;
			if (!n) {
				for (t || (t = de(s)), l = t.length; l--;) n = C(t[l]), n[k] ? r.push(n) : i.push(n);
				n = H(s, g(i, r)), n.selector = s
			}
			return n
		}, pe = h.select = function(e, a, i, l) {
			var m = "function" == typeof e && e,
				v = !l && de(e = m.selector || e),
				n, y, b, w, x;
			if (i = i || [], 1 === v.length) {
				if (y = v[0] = v[0].slice(0), 2 < y.length && "ID" === (b = y[0]).type && oe.getById && 9 === a.nodeType && be && se.relative[y[1].type]) {
					if (a = (se.find.ID(b.matches[0].replace(_, ae), a) || [])[0], !a) return i;
					m && (a = a.parentNode), e = e.slice(y.shift().value.length)
				}
				for (n = U.needsContext.test(e) ? 0 : y.length; n-- && (b = y[n], !se.relative[w = b.type]);)
					if ((x = se.find[w]) && (l = x(b.matches[0].replace(_, ae), Z.test(y[0].type) && f(a.parentNode) || a))) {
						if (y.splice(n, 1), e = l.length && p(y), !e) return F.apply(i, l), i;
						break
					}
			}
			return (m || ce(e, v))(l, a, !be, i, !a || Z.test(e) && f(a.parentNode) || a), i
		}, oe.sortStable = k.split("").sort(y).join("") === k, oe.detectDuplicates = !!ge, fe(), oe.sortDetached = s(function(t) {
			return 1 & t.compareDocumentPosition(ve.createElement("div"))
		}), s(function(t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || t("type|href|height|width", function(n, e, t) {
			return t ? void 0 : n.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), oe.attributes && s(function(t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || t("value", function(n, e, t) {
			return t || "input" !== n.nodeName.toLowerCase() ? void 0 : n.defaultValue
		}), s(function(t) {
			return null == t.getAttribute("disabled")
		}) || t("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(n, e, t) {
			var a;
			return t ? void 0 : !0 === n[e] ? e.toLowerCase() : (a = n.getAttributeNode(e)) && a.specified ? a.value : null
		}), h
	}(A);
	qe.find = e, qe.expr = e.selectors, qe.expr[":"] = qe.expr.pseudos, qe.uniqueSort = qe.unique = e.uniqueSort, qe.text = e.getText, qe.isXMLDoc = e.isXML, qe.contains = e.contains;
	var r = function(a, o, t) {
		for (var i = [];
			(a = a[o]) && 9 !== a.nodeType;)
			if (1 === a.nodeType) {
				if (void 0 !== t && qe(a).is(t)) break;
				i.push(a)
			} return i
	},
		t = function(a, n) {
			for (var t = []; a; a = a.nextSibling) 1 === a.nodeType && a !== n && t.push(a);
			return t
		},
		c = qe.expr.match.needsContext,
		p = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		u = /^.[^:#\[\.,]*$/;
	qe.filter = function(a, o, t) {
		var i = o[0];
		return t && (a = ":not(" + a + ")"), 1 === o.length && 1 === i.nodeType ? qe.find.matchesSelector(i, a) ? [i] : [] : qe.find.matches(a, qe.grep(o, function(t) {
			return 1 === t.nodeType
		}))
	}, qe.fn.extend({
		find: function(o) {
			var t = this.length,
				a = [],
				s = this,
				n;
			if ("string" != typeof o) return this.pushStack(qe(o).filter(function() {
				for (n = 0; t > n; n++)
					if (qe.contains(s[n], this)) return !0
			}));
			for (n = 0; t > n; n++) qe.find(o, s[n], a);
			return a = this.pushStack(1 < t ? qe.unique(a) : a), a.selector = this.selector ? this.selector + " " + o : o, a
		},
		filter: function(t) {
			return this.pushStack(a(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(a(this, t || [], !0))
		},
		is: function(t) {
			return !!a(this, "string" == typeof t && c.test(t) ? qe(t) : t || [], !1).length
		}
	});
	var h = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		g = qe.fn.init = function(e, t, s) {
			var r, l;
			if (!e) return this;
			if (s = s || f, "string" == typeof e) {
				if (r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : h.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || s).find(e) : this.constructor(t).find(e);
				if (r[1]) {
					if (t = t instanceof qe ? t[0] : t, qe.merge(this, qe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : He, !0)), p.test(r[1]) && qe.isPlainObject(t))
						for (r in t) qe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
					return this
				}
				return l = He.getElementById(r[2]), l && l.parentNode && (this.length = 1, this[0] = l), this.context = He, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : qe.isFunction(e) ? void 0 === s.ready ? e(qe) : s.ready(e) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), qe.makeArray(e, this))
		},
		f;
	g.prototype = qe.fn, f = qe(He);
	var v = /^(?:parents|prev(?:Until|All))/,
		w = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	qe.fn.extend({
		has: function(a) {
			var n = qe(a, this),
				t = n.length;
			return this.filter(function() {
				for (var a = 0; t > a; a++)
					if (qe.contains(this, n[a])) return !0
			})
		},
		closest: function(r, t) {
			for (var a = 0, l = this.length, n = [], e = c.test(r) || "string" != typeof r ? qe(r, t || this.context) : 0, o; l > a; a++)
				for (o = this[a]; o && o !== t; o = o.parentNode)
					if (11 > o.nodeType && (e ? -1 < e.index(o) : 1 === o.nodeType && qe.find.matchesSelector(o, r))) {
						n.push(o);
						break
					} return this.pushStack(1 < n.length ? qe.uniqueSort(n) : n)
		},
		index: function(e) {
			return e ? "string" == typeof e ? Le.call(qe(e), this[0]) : Le.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(a, e) {
			return this.pushStack(qe.uniqueSort(qe.merge(this.get(), qe(a, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), qe.each({
		parent: function(a) {
			var e = a.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t) {
			return r(t, "parentNode")
		},
		parentsUntil: function(t, e, a) {
			return r(t, "parentNode", a)
		},
		next: function(t) {
			return s(t, "nextSibling")
		},
		prev: function(t) {
			return s(t, "previousSibling")
		},
		nextAll: function(t) {
			return r(t, "nextSibling")
		},
		prevAll: function(t) {
			return r(t, "previousSibling")
		},
		nextUntil: function(t, e, a) {
			return r(t, "nextSibling", a)
		},
		prevUntil: function(t, e, a) {
			return r(t, "previousSibling", a)
		},
		siblings: function(a) {
			return t((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return t(a.firstChild)
		},
		contents: function(t) {
			return t.contentDocument || qe.merge([], t.childNodes)
		}
	}, function(e, t) {
		qe.fn[e] = function(a, i) {
			var s = qe.map(this, t, a);
			return "Until" !== e.slice(-5) && (i = a), i && "string" == typeof i && (s = qe.filter(i, s)), 1 < this.length && (w[e] || qe.uniqueSort(s), v.test(e) && s.reverse()), this.pushStack(s)
		}
	});
	var jt = /\S+/g;
	qe.Callbacks = function(d) {
		d = "string" == typeof d ? b(d) : qe.extend({}, d);
		var c = [],
			a = [],
			e = -1,
			h = function() {
				for (v = d.once, f = i = !0; a.length; e = -1)
					for (g = a.shift(); ++e < c.length;) !1 === c[e].apply(g[0], g[1]) && d.stopOnFalse && (e = c.length, g = !1);
				d.memory || (g = !1), i = !1, v && (c = g ? [] : "")
			},
			r = {
				add: function() {
					return c && (g && !i && (e = c.length - 1, a.push(g)), function t(e) {
						qe.each(e, function(e, a) {
							qe.isFunction(a) ? d.unique && r.has(a) || c.push(a) : a && a.length && "string" !== qe.type(a) && t(a)
						})
					}(arguments), g && !i && h()), this
				},
				remove: function() {
					return qe.each(arguments, function(n, i) {
						for (var t; - 1 < (t = qe.inArray(i, c, t));) c.splice(t, 1), e >= t && e--
					}), this
				},
				has: function(t) {
					return t ? -1 < qe.inArray(t, c) : 0 < c.length
				},
				empty: function() {
					return c && (c = []), this
				},
				disable: function() {
					return v = a = [], c = g = "", this
				},
				disabled: function() {
					return !c
				},
				lock: function() {
					return v = a = [], g || (c = g = ""), this
				},
				locked: function() {
					return !!v
				},
				fireWith: function(n, e) {
					return v || (e = e || [], e = [n, e.slice ? e.slice() : e], a.push(e), i || h()), this
				},
				fire: function() {
					return r.fireWith(this, arguments), this
				},
				fired: function() {
					return !!f
				}
			},
			i, g, f, v;
		return r
	}, qe.extend({
		Deferred: function(e) {
			var l = [
				["resolve", "done", qe.Callbacks("once memory"), "resolved"],
				["reject", "fail", qe.Callbacks("once memory"), "rejected"],
				["notify", "progress", qe.Callbacks("memory")]
			],
				t = "pending",
				d = {
					state: function() {
						return t
					},
					always: function() {
						return n.done(arguments).fail(arguments), this
					},
					then: function() {
						var o = arguments;
						return qe.Deferred(function(a) {
							qe.each(l, function(e, t) {
								var i = qe.isFunction(o[e]) && o[e];
								n[t[1]](function() {
									var n = i && i.apply(this, arguments);
									n && qe.isFunction(n.promise) ? n.promise().progress(a.notify).done(a.resolve).fail(a.reject) : a[t[0] + "With"](this === d ? a.promise() : this, i ? [n] : arguments)
								})
							}), o = null
						}).promise()
					},
					promise: function(t) {
						return null == t ? d : qe.extend(t, d)
					}
				},
				n = {};
			return d.pipe = d.then, qe.each(l, function(a, e) {
				var i = e[2],
					o = e[3];
				d[e[1]] = i.add, o && i.add(function() {
					t = o
				}, l[1 ^ a][2].disable, l[2][2].lock), n[e[0]] = function() {
					return n[e[0] + "With"](this === n ? d : this, arguments), this
				}, n[e[0] + "With"] = i.fireWith
			}), d.promise(n), e && e.call(n, n), n
		},
		when: function(i) {
			var e = 0,
				c = We.call(arguments),
				a = c.length,
				n = 1 !== a || i && qe.isFunction(i.promise) ? a : 0,
				u = 1 === n ? i : qe.Deferred(),
				s = function(o, e, t) {
					return function(a) {
						e[o] = this, t[o] = 1 < arguments.length ? We.call(arguments) : a, t === r ? u.notifyWith(e, t) : --n || u.resolveWith(e, t)
					}
				},
				r, m, h;
			if (1 < a)
				for (r = Array(a), m = Array(a), h = Array(a); a > e; e++) c[e] && qe.isFunction(c[e].promise) ? c[e].promise().progress(s(e, m, r)).done(s(e, h, c)).fail(u.reject) : --n;
			return n || u.resolveWith(h, c), u.promise()
		}
	});
	var x;
	qe.fn.ready = function(t) {
		return qe.ready.promise().done(t), this
	}, qe.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(t) {
			t ? qe.readyWait++ : qe.ready(!0)
		},
		ready: function(t) {
			(!0 === t ? --qe.readyWait : qe.isReady) || (qe.isReady = !0, !0 !== t && 0 < --qe.readyWait || (x.resolveWith(He, [qe]), qe.fn.triggerHandler && (qe(He).triggerHandler("ready"), qe(He).off("ready"))))
		}
	}), qe.ready.promise = function(t) {
		return x || (x = qe.Deferred(), "complete" !== He.readyState && ("loading" === He.readyState || He.documentElement.doScroll) ? (He.addEventListener("DOMContentLoaded", m), A.addEventListener("load", m)) : A.setTimeout(qe.ready)), x.promise(t)
	}, qe.ready.promise();
	var C = function(e, t, c, n, o, u, r) {
		var m = 0,
			h = e.length,
			p = null == c;
		if ("object" === qe.type(c))
			for (m in o = !0, c) C(e, t, m, c[m], !0, u, r);
		else if (void 0 !== n && (o = !0, qe.isFunction(n) || (r = !0), p && (r ? (t.call(e, n), t = null) : (p = t, t = function(n, e, t) {
			return p.call(qe(n), t)
		})), t))
			for (; h > m; m++) t(e[m], c, r ? n : n.call(e[m], m, t(e[m], c)));
		return o ? e : p ? t.call(e) : h ? t(e[0], c) : u
	},
		D = function(t) {
			return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
		};
	H.uid = 1, H.prototype = {
		register: function(n, e) {
			var t = e || {};
			return n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
				value: t,
				writable: !0,
				configurable: !0
			}), n[this.expando]
		},
		cache: function(a) {
			if (!D(a)) return {};
			var e = a[this.expando];
			return e || (e = {}, D(a) && (a.nodeType ? a[this.expando] = e : Object.defineProperty(a, this.expando, {
				value: e,
				configurable: !0
			}))), e
		},
		set: function(o, t, a) {
			var i = this.cache(o),
				n;
			if ("string" == typeof t) i[t] = a;
			else
				for (n in t) i[n] = t[n];
			return i
		},
		get: function(a, e) {
			return void 0 === e ? this.cache(a) : a[this.expando] && a[this.expando][e]
		},
		access: function(n, e, t) {
			var a;
			return void 0 === e || e && "string" == typeof e && void 0 === t ? (a = this.get(n, e), void 0 === a ? this.get(n, qe.camelCase(e)) : a) : (this.set(n, e, t), void 0 === t ? e : t)
		},
		remove: function(e, t) {
			var a = e[this.expando],
				i, r, l;
			if (void 0 !== a) {
				if (void 0 === t) this.register(e);
				else
					for (qe.isArray(t) ? r = t.concat(t.map(qe.camelCase)) : (l = qe.camelCase(t), (t in a) ? r = [t, l] : (r = l, r = (r in a) ? [r] : r.match(jt) || [])), i = r.length; i--;) delete a[r[i]];
				(void 0 === t || qe.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(a) {
			var e = a[this.expando];
			return void 0 !== e && !qe.isEmptyObject(e)
		}
	};
	var E = new H,
		L = new H,
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		O = /[A-Z]/g;
	qe.extend({
		hasData: function(t) {
			return L.hasData(t) || E.hasData(t)
		},
		data: function(n, e, t) {
			return L.access(n, e, t)
		},
		removeData: function(a, e) {
			L.remove(a, e)
		},
		_data: function(n, e, t) {
			return E.access(n, e, t)
		},
		_removeData: function(a, e) {
			E.remove(a, e)
		}
	}), qe.fn.extend({
		data: function(l, e) {
			var t = this[0],
				a = t && t.attributes,
				n, i, d;
			if (void 0 === l) {
				if (this.length && (d = L.get(t), 1 === t.nodeType && !E.get(t, "hasDataAttrs"))) {
					for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = qe.camelCase(i.slice(5)), z(t, i, d[i])));
					E.set(t, "hasDataAttrs", !0)
				}
				return d
			}
			return "object" == typeof l ? this.each(function() {
				L.set(this, l)
			}) : C(this, function(i) {
				var e, o;
				if (t && void 0 === i) {
					if (e = L.get(t, l) || L.get(t, l.replace(O, "-$&").toLowerCase()), void 0 !== e) return e;
					if (o = qe.camelCase(l), e = L.get(t, o), void 0 !== e) return e;
					if (e = z(t, o, void 0), void 0 !== e) return e
				} else o = qe.camelCase(l), this.each(function() {
					var e = L.get(this, o);
					L.set(this, o, i), -1 < l.indexOf("-") && void 0 !== e && L.set(this, l, i)
				})
			}, null, e, 1 < arguments.length, null, !0)
		},
		removeData: function(t) {
			return this.each(function() {
				L.remove(this, t)
			})
		}
	}), qe.extend({
		queue: function(n, e, o) {
			var a;
			return n ? (e = (e || "fx") + "queue", a = E.get(n, e), o && (!a || qe.isArray(o) ? a = E.access(n, e, qe.makeArray(o)) : a.push(o)), a || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var l = qe.queue(e, t),
				i = l.length,
				d = l.shift(),
				c = qe._queueHooks(e, t),
				s = function() {
					qe.dequeue(e, t)
				};
			"inprogress" === d && (d = l.shift(), i--), d && ("fx" === t && l.unshift("inprogress"), delete c.stop, d.call(e, s, c)), !i && c && c.empty.fire()
		},
		_queueHooks: function(n, e) {
			var t = e + "queueHooks";
			return E.get(n, t) || E.access(n, t, {
				empty: qe.Callbacks("once memory").add(function() {
					E.remove(n, [e + "queue", t])
				})
			})
		}
	}), qe.fn.extend({
		queue: function(n, o) {
			var a = 2;
			return "string" != typeof n && (o = n, n = "fx", a--), arguments.length < a ? qe.queue(this[0], n) : void 0 === o ? this : this.each(function() {
				var e = qe.queue(this, n, o);
				qe._queueHooks(this, n), "fx" === n && "inprogress" !== e[0] && qe.dequeue(this, n)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				qe.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(a, d) {
			var c = 1,
				p = qe.Deferred(),
				o = this,
				e = this.length,
				u = function() {
					--c || p.resolveWith(o, [o])
				},
				r;
			for ("string" != typeof a && (d = a, a = void 0), a = a || "fx"; e--;) r = E.get(o[e], a + "queueHooks"), r && r.empty && (c++, r.empty.add(u));
			return u(), p.promise(d)
		}
	});
	var P = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		q = new RegExp("^(?:([+-])=|)(" + P + ")([a-z%]*)$", "i"),
		S = ["Top", "Right", "Bottom", "Left"],
		T = function(a, n) {
			return a = n || a, "none" === qe.css(a, "display") || !qe.contains(a.ownerDocument, a)
		},
		B = /^(?:checkbox|radio)$/i,
		Bt = /<([\w:-]+)/,
		U = /^$|\/(?:java|ecma)script/i,
		Y = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Y.optgroup = Y.option, Y.tbody = Y.tfoot = Y.colgroup = Y.caption = Y.thead, Y.th = Y.td;
	var V = /<|&#?\w+;/;
	! function() {
		var n = He.createDocumentFragment(),
			e = n.appendChild(He.createElement("div")),
			t = He.createElement("input");
		t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), Fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
	}();
	var G = /^key/,
		K = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		X = /^([^.]*)(?:\.(.+)|)/;
	qe.event = {
		global: {},
		add: function(i, e, t, o, s) {
			var l = E.get(i),
				c, p, u, m, h, g, f, b, C, k, O;
			if (l)
				for (t.handler && (c = t, t = c.handler, s = c.selector), t.guid || (t.guid = qe.guid++), (m = l.events) || (m = l.events = {}), (p = l.handle) || (p = l.handle = function(t) {
					return "undefined" != typeof qe && qe.event.triggered !== t.type ? qe.event.dispatch.apply(i, arguments) : void 0
				}), e = (e || "").match(jt) || [""], h = e.length; h--;) u = X.exec(e[h]) || [], C = O = u[1], k = (u[2] || "").split(".").sort(), C && (f = qe.event.special[C] || {}, C = (s ? f.delegateType : f.bindType) || C, f = qe.event.special[C] || {}, g = qe.extend({
					type: C,
					origType: O,
					data: o,
					handler: t,
					guid: t.guid,
					selector: s,
					needsContext: s && qe.expr.match.needsContext.test(s),
					namespace: k.join(".")
				}, c), (b = m[C]) || (b = m[C] = [], b.delegateCount = 0, f.setup && !1 !== f.setup.call(i, o, k, p) || i.addEventListener && i.addEventListener(C, p)), f.add && (f.add.call(i, g), g.handler.guid || (g.handler.guid = t.guid)), s ? b.splice(b.delegateCount++, 0, g) : b.push(g), qe.event.global[C] = !0)
		},
		remove: function(i, t, o, n, s) {
			var l = E.hasData(i) && E.get(i),
				e, d, p, m, h, g, f, b, C, k, P;
			if (l && (m = l.events)) {
				for (t = (t || "").match(jt) || [""], h = t.length; h--;)
					if (p = X.exec(t[h]) || [], C = P = p[1], k = (p[2] || "").split(".").sort(), C) {
						for (f = qe.event.special[C] || {}, C = (n ? f.delegateType : f.bindType) || C, b = m[C] || [], p = p[2] && new RegExp("(^|\\.)" + k.join("\\.(?:.*\\.|)") + "(\\.|$)"), d = e = b.length; e--;) g = b[e], !s && P !== g.origType || o && o.guid !== g.guid || p && !p.test(g.namespace) || n && n !== g.selector && ("**" !== n || !g.selector) || (b.splice(e, 1), g.selector && b.delegateCount--, f.remove && f.remove.call(i, g));
						d && !b.length && (f.teardown && !1 !== f.teardown.call(i, k, l.handle) || qe.removeEvent(i, C, l.handle), delete m[C])
					} else
						for (C in m) qe.event.remove(i, C + t[h], o, n, !0);
				qe.isEmptyObject(m) && E.remove(i, "handle events")
			}
		},
		dispatch: function(a) {
			a = qe.event.fix(a);
			var d = [],
				c = We.call(arguments),
				n = (E.get(this, "events") || {})[a.type] || [],
				i = qe.event.special[a.type] || {},
				o, m, h, g, f;
			if (c[0] = a, a.delegateTarget = this, !i.preDispatch || !1 !== i.preDispatch.call(this, a)) {
				for (d = qe.event.handlers.call(this, a, n), o = 0;
					(g = d[o++]) && !a.isPropagationStopped();)
					for (a.currentTarget = g.elem, m = 0;
						(f = g.handlers[m++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f, a.data = f.data, h = ((qe.event.special[f.origType] || {}).handle || f.handler).apply(g.elem, c), void 0 !== h && !1 === (a.result = h) && (a.preventDefault(), a.stopPropagation()));
				return i.postDispatch && i.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(e, t) {
			var a = [],
				n = t.delegateCount,
				i = e.target,
				o, d, c, m;
			if (n && i.nodeType && ("click" !== e.type || isNaN(e.button) || 1 > e.button))
				for (; i !== this; i = i.parentNode || this)
					if (1 === i.nodeType && (!0 !== i.disabled || "click" !== e.type)) {
						for (d = [], o = 0; n > o; o++) m = t[o], c = m.selector + " ", void 0 === d[c] && (d[c] = m.needsContext ? -1 < qe(c, this).index(i) : qe.find(c, this, null, [i]).length), d[c] && d.push(m);
						d.length && a.push({
							elem: i,
							handlers: d
						})
					} return n < t.length && a.push({
						elem: this,
						handlers: t.slice(n)
					}), a
		},
		props: ["altKey", "bubbles", "cancelable", "ctrlKey", "currentTarget", "detail", "eventPhase", "metaKey", "relatedTarget", "shiftKey", "target", "timeStamp", "view", "which"],
		fixHooks: {},
		keyHooks: {
			props: ["char", "charCode", "key", "keyCode"],
			filter: function(a, e) {
				return null == a.which && (a.which = null == e.charCode ? e.keyCode : e.charCode), a
			}
		},
		mouseHooks: {
			props: ["button", "buttons", "clientX", "clientY", "offsetX", "offsetY", "pageX", "pageY", "screenX", "screenY", "toElement"],
			filter: function(e, t) {
				var a = t.button,
					i, r, l;
				return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || He, r = i.documentElement, l = i.body, e.pageX = t.clientX + (r && r.scrollLeft || l && l.scrollLeft || 0) - (r && r.clientLeft || l && l.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || l && l.scrollTop || 0) - (r && r.clientTop || l && l.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[qe.expando]) return e;
			var a = e.type,
				i = e,
				n = this.fixHooks[a],
				d, c, p;
			for (n || (this.fixHooks[a] = n = K.test(a) ? this.mouseHooks : G.test(a) ? this.keyHooks : {}), p = n.props ? this.props.concat(n.props) : this.props, e = new qe.Event(i), d = p.length; d--;) c = p[d], e[c] = i[c];
			return e.target || (e.target = He), 3 === e.target.nodeType && (e.target = e.target.parentNode), n.filter ? n.filter(e, i) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== te() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === te() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && qe.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(t) {
					return qe.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		}
	}, qe.removeEvent = function(n, e, t) {
		n.removeEventListener && n.removeEventListener(e, t)
	}, qe.Event = function(a, e) {
		return this instanceof qe.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? F : J) : this.type = a, e && qe.extend(this, e), this.timeStamp = a && a.timeStamp || qe.now(), void (this[qe.expando] = !0)) : new qe.Event(a, e)
	}, qe.Event.prototype = {
		constructor: qe.Event,
		isDefaultPrevented: J,
		isPropagationStopped: J,
		isImmediatePropagationStopped: J,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = F, t && t.preventDefault()
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = F, t && t.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = F, t && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, qe.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(a, s) {
		qe.event.special[a] = {
			delegateType: s,
			bindType: s,
			handle: function(t) {
				var i = this,
					a = t.relatedTarget,
					n = t.handleObj,
					e;
				return a && (a === i || qe.contains(i, a)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = s), e
			}
		}
	}), qe.fn.extend({
		on: function(n, e, t, a) {
			return ae(this, n, e, t, a)
		},
		one: function(n, e, t, a) {
			return ae(this, n, e, t, a, 1)
		},
		off: function(e, t, s) {
			var r, l;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, qe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (l in e) this.off(l, t, e[l]);
				return this
			}
			return !1 !== t && "function" != typeof t || (s = t, t = void 0), !1 === s && (s = J), this.each(function() {
				qe.event.remove(this, e, s, t)
			})
		}
	});
	var Q = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		Z = /<script|<style|<link/i,
		Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
		$e = /^true\/(.*)/,
		Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	qe.extend({
		htmlPrefilter: function(t) {
			return t.replace(Q, "<$1></$2>")
		},
		clone: function(e, t, a) {
			var n = e.cloneNode(!0),
				o = qe.contains(e.ownerDocument, e),
				s, d, c, u;
			if (!(Fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || qe.isXMLDoc(e)))
				for (u = R(n), c = R(e), s = 0, d = c.length; d > s; s++) re(c[s], u[s]);
			if (t)
				if (a)
					for (c = c || R(e), u = u || R(n), s = 0, d = c.length; d > s; s++) se(c[s], u[s]);
				else se(e, n);
			return u = R(n, "script"), 0 < u.length && W(u, !o && R(e, "script")), n
		},
		cleanData: function(s) {
			for (var t = qe.event.special, a = 0, r, l, d; void 0 !== (l = s[a]); a++)
				if (D(l)) {
					if (r = l[E.expando]) {
						if (r.events)
							for (d in r.events) t[d] ? qe.event.remove(l, d) : qe.removeEvent(l, d, r.handle);
						l[E.expando] = void 0
					}
					l[L.expando] && (l[L.expando] = void 0)
				}
		}
	}), qe.fn.extend({
		domManip: le,
		detach: function(t) {
			return de(this, t, !0)
		},
		remove: function(t) {
			return de(this, t)
		},
		text: function(t) {
			return C(this, function(t) {
				return void 0 === t ? qe.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
				})
			}, null, t, arguments.length)
		},
		append: function() {
			return le(this, arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = ne(this, a);
					e.appendChild(a)
				}
			})
		},
		prepend: function() {
			return le(this, arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = ne(this, a);
					e.insertBefore(a, e.firstChild)
				}
			})
		},
		before: function() {
			return le(this, arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return le(this, arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		empty: function() {
			for (var a = 0, n; null != (n = this[a]); a++) 1 === n.nodeType && (qe.cleanData(R(n, !1)), n.textContent = "");
			return this
		},
		clone: function(a, n) {
			return a = null != a && a, n = null == n ? a : n, this.map(function() {
				return qe.clone(this, a, n)
			})
		},
		html: function(t) {
			return C(this, function(a) {
				var o = this[0] || {},
					s = 0,
					r = this.length;
				if (void 0 === a && 1 === o.nodeType) return o.innerHTML;
				if ("string" == typeof a && !Z.test(a) && !Y[(Bt.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = qe.htmlPrefilter(a);
					try {
						for (; r > s; s++) o = this[s] || {}, 1 === o.nodeType && (qe.cleanData(R(o, !1)), o.innerHTML = a);
						o = 0
					} catch (e) { }
				}
				o && this.empty().append(a)
			}, null, t, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return le(this, arguments, function(e) {
				var t = this.parentNode;
				0 > qe.inArray(this, n) && (qe.cleanData(R(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), qe.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, r) {
		qe.fn[a] = function(t) {
			for (var i = [], a = qe(t), n = a.length - 1, e = 0, l; n >= e; e++) l = e == n ? this : this.clone(!0), qe(a[e])[r](l), Re.apply(i, l.get());
			return this.pushStack(i)
		}
	});
	var Ve = {
		HTML: "block",
		BODY: "block"
	},
		Ge = /^margin/,
		Ke = new RegExp("^(" + P + ")(?!px)[a-z%]+$", "i"),
		Xe = function(a) {
			var e = a.ownerDocument.defaultView;
			return e && e.opener || (e = A), e.getComputedStyle(a)
		},
		Qe = function(e, t, a, i) {
			var n = {},
				o, l;
			for (l in t) n[l] = e.style[l], e.style[l] = t[l];
			for (l in o = a.apply(e, i || []), t) e.style[l] = n[l];
			return o
		},
		Ze = He.documentElement,
		Je;
	! function() {
		var l = He.createElement("div"),
			t = He.createElement("div"),
			a, i, d, c;
		if (t.style) {
			function n() {
				t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t.innerHTML = "", Ze.appendChild(l);
				var n = A.getComputedStyle(t);
				a = "1%" !== n.top, c = "2px" === n.marginLeft, i = "4px" === n.width, t.style.marginRight = "50%", d = "4px" === n.marginRight, Ze.removeChild(l)
			}
			t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", Fe.clearCloneStyle = "content-box" === t.style.backgroundClip, l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.appendChild(t), qe.extend(Fe, {
				pixelPosition: function() {
					return n(), a
				},
				boxSizingReliable: function() {
					return null == i && n(), i
				},
				pixelMarginRight: function() {
					return null == i && n(), d
				},
				reliableMarginLeft: function() {
					return null == i && n(), c
				},
				reliableMarginRight: function() {
					var a = t.appendChild(He.createElement("div")),
						e;
					return a.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", a.style.marginRight = a.style.width = "0", t.style.width = "1px", Ze.appendChild(l), e = !parseFloat(A.getComputedStyle(a).marginRight), Ze.removeChild(l), t.removeChild(a), e
				}
			})
		}
	}();
	var $t = /^(none|table(?!-c[ea]).+)/,
		tt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		at = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		it = ["Webkit", "O", "Moz", "ms"],
		nt = He.createElement("div").style;
	qe.extend({
		cssHooks: {
			opacity: {
				get: function(n, e) {
					if (e) {
						var t = ue(n, "opacity");
						return "" === t ? "1" : t
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: "cssFloat"
		},
		style: function(e, t, c, p) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o = qe.camelCase(t),
					s = e.style,
					r, u, m;
				return t = qe.cssProps[o] || (qe.cssProps[o] = he(o) || o), m = qe.cssHooks[t] || qe.cssHooks[o], void 0 === c ? m && "get" in m && void 0 !== (r = m.get(e, !1, p)) ? r : s[t] : (u = typeof c, "string" === u && (r = q.exec(c)) && r[1] && (c = M(e, t, r), u = "number"), null != c && c === c && ("number" === u && (c += r && r[3] || (qe.cssNumber[o] ? "" : "px")), Fe.clearCloneStyle || "" !== c || 0 !== t.indexOf("background") || (s[t] = "inherit"), m && "set" in m && void 0 === (c = m.set(e, c, p)) || (s[t] = c)), void 0)
			}
		},
		css: function(e, t, d, i) {
			var n = qe.camelCase(t),
				o, c, p;
			return t = qe.cssProps[n] || (qe.cssProps[n] = he(n) || n), p = qe.cssHooks[t] || qe.cssHooks[n], p && "get" in p && (o = p.get(e, !0, d)), void 0 === o && (o = ue(e, t, i)), "normal" === o && t in at && (o = at[t]), "" === d || d ? (c = parseFloat(o), !0 === d || isFinite(c) ? c || 0 : o) : o
		}
	}), qe.each(["height", "width"], function(a, l) {
		qe.cssHooks[l] = {
			get: function(t, e, a) {
				return e ? $t.test(qe.css(t, "display")) && 0 === t.offsetWidth ? Qe(t, tt, function() {
					return ve(t, l, a)
				}) : ve(t, l, a) : void 0
			},
			set: function(e, t, i) {
				var n = i && Xe(e),
					o = i && fe(e, l, i, "border-box" === qe.css(e, "boxSizing", !1, n), n),
					s;
				return o && (s = q.exec(t)) && "px" !== (s[3] || "px") && (e.style[l] = t, t = qe.css(e, l)), ge(e, t, o)
			}
		}
	}), qe.cssHooks.marginLeft = me(Fe.reliableMarginLeft, function(a, e) {
		return e ? (parseFloat(ue(a, "marginLeft")) || a.getBoundingClientRect().left - Qe(a, {
			marginLeft: 0
		}, function() {
			return a.getBoundingClientRect().left
		})) + "px" : void 0
	}), qe.cssHooks.marginRight = me(Fe.reliableMarginRight, function(a, e) {
		return e ? Qe(a, {
			display: "inline-block"
		}, ue, [a, "marginRight"]) : void 0
	}), qe.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(s, t) {
		qe.cssHooks[s + t] = {
			expand: function(a) {
				for (var i = 0, r = {}, o = "string" == typeof a ? a.split(" ") : [a]; 4 > i; i++) r[s + S[i] + t] = o[i] || o[i - 2] || o[0];
				return r
			}
		}, Ge.test(s) || (qe.cssHooks[s + t].set = ge)
	}), qe.fn.extend({
		css: function(a, e) {
			return C(this, function(e, t, a) {
				var i = {},
					n = 0,
					l, d;
				if (qe.isArray(t)) {
					for (l = Xe(e), d = t.length; d > n; n++) i[t[n]] = qe.css(e, t[n], !1, l);
					return i
				}
				return void 0 === a ? qe.css(e, t) : qe.style(e, t, a)
			}, a, e, 1 < arguments.length)
		},
		show: function() {
			return ye(this, !0)
		},
		hide: function() {
			return ye(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				T(this) ? qe(this).show() : qe(this).hide()
			})
		}
	}), qe.Tween = be, be.prototype = {
		constructor: be,
		init: function(s, t, a, i, n, o) {
			this.elem = s, this.prop = a, this.easing = n || qe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (qe.cssNumber[a] ? "" : "px")
		},
		cur: function() {
			var t = be.propHooks[this.prop];
			return t && t.get ? t.get(this) : be.propHooks._default.get(this)
		},
		run: function(n) {
			var e = be.propHooks[this.prop],
				t;
			return this.pos = this.options.duration ? t = qe.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), e && e.set ? e.set(this) : be.propHooks._default.set(this), this
		}
	}, be.prototype.init.prototype = be.prototype, be.propHooks = {
		_default: {
			get: function(a) {
				var e;
				return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (e = qe.css(a.elem, a.prop, ""), e && "auto" !== e ? e : 0)
			},
			set: function(t) {
				qe.fx.step[t.prop] ? qe.fx.step[t.prop](t) : 1 === t.elem.nodeType && (null != t.elem.style[qe.cssProps[t.prop]] || qe.cssHooks[t.prop]) ? qe.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}, be.propHooks.scrollTop = be.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, qe.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		},
		_default: "swing"
	}, qe.fx = be.prototype.init, qe.fx.step = {};
	var ot = /^(?:toggle|show|hide)$/,
		st = /queueHooks$/,
		rt, Ut;
	qe.Animation = qe.extend(De, {
		tweeners: {
			"*": [function(n, e) {
				var t = this.createTween(n, e);
				return M(t.elem, n, q.exec(e), t), t
			}]
		},
		tweener: function(a, s) {
			qe.isFunction(a) ? (s = a, a = ["*"]) : a = a.match(jt);
			for (var r = 0, l = a.length, o; l > r; r++) o = a[r], De.tweeners[o] = De.tweeners[o] || [], De.tweeners[o].unshift(s)
		},
		prefilters: [Ce],
		prefilter: function(a, e) {
			e ? De.prefilters.unshift(a) : De.prefilters.push(a)
		}
	}), qe.speed = function(n, e, t) {
		var a = n && "object" == typeof n ? qe.extend({}, n) : {
			complete: t || !t && e || qe.isFunction(n) && n,
			duration: n,
			easing: t && e || e && !qe.isFunction(e) && e
		};
		return a.duration = qe.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in qe.fx.speeds ? qe.fx.speeds[a.duration] : qe.fx.speeds._default, null != a.queue && !0 !== a.queue || (a.queue = "fx"), a.old = a.complete, a.complete = function() {
			qe.isFunction(a.old) && a.old.call(this), a.queue && qe.dequeue(this, a.queue)
		}, a
	}, qe.fn.extend({
		fadeTo: function(n, e, t, a) {
			return this.filter(T).css("opacity", 0).show().end().animate({
				opacity: e
			}, n, t, a)
		},
		animate: function(r, t, a, i) {
			var n = qe.isEmptyObject(r),
				o = qe.speed(t, a, i),
				e = function() {
					var e = De(this, qe.extend({}, r), o);
					(n || E.get(this, "finish")) && e.stop(!0)
				};
			return e.finish = e, n || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
		},
		stop: function(l, a, d) {
			var c = function(a) {
				var e = a.stop;
				delete a.stop, e(d)
			};
			return "string" != typeof l && (d = a, a = l, l = void 0), a && !1 !== l && this.queue(l || "fx", []), this.each(function() {
				var e = !0,
					t = null != l && l + "queueHooks",
					n = qe.timers,
					i = E.get(this);
				if (t) i[t] && i[t].stop && c(i[t]);
				else
					for (t in i) i[t] && i[t].stop && st.test(t) && c(i[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != l && n[t].queue !== l || (n[t].anim.stop(d), e = !1, n.splice(t, 1));
				!e && d || qe.dequeue(this, l)
			})
		},
		finish: function(r) {
			return !1 !== r && (r = r || "fx"), this.each(function() {
				var t = E.get(this),
					a = t[r + "queue"],
					i = t[r + "queueHooks"],
					n = qe.timers,
					e = a ? a.length : 0,
					o;
				for (t.finish = !0, qe.queue(this, r, []), i && i.stop && i.stop.call(this, !0), o = n.length; o--;) n[o].elem === this && n[o].queue === r && (n[o].anim.stop(!0), n.splice(o, 1));
				for (o = 0; e > o; o++) a[o] && a[o].finish && a[o].finish.call(this);
				delete t.finish
			})
		}
	}), qe.each(["toggle", "show", "hide"], function(a, e) {
		var t = qe.fn[e];
		qe.fn[e] = function(i, n, a) {
			return null == i || "boolean" == typeof i ? t.apply(this, arguments) : this.animate(we(e, !0), i, n, a)
		}
	}), qe.each({
		slideDown: we("show"),
		slideUp: we("hide"),
		slideToggle: we("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, n) {
		qe.fn[a] = function(t, e, a) {
			return this.animate(n, t, e, a)
		}
	}), qe.timers = [], qe.fx.tick = function() {
		var a = 0,
			n = qe.timers,
			t;
		for (rt = qe.now(); a < n.length; a++) t = n[a], t() || n[a] !== t || n.splice(a--, 1);
		n.length || qe.fx.stop(), rt = void 0
	}, qe.fx.timer = function(t) {
		qe.timers.push(t), t() ? qe.fx.start() : qe.timers.pop()
	}, qe.fx.interval = 13, qe.fx.start = function() {
		Ut || (Ut = A.setInterval(qe.fx.tick, qe.fx.interval))
	}, qe.fx.stop = function() {
		A.clearInterval(Ut), Ut = null
	}, qe.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, qe.fn.delay = function(o, a) {
		return o = qe.fx ? qe.fx.speeds[o] || o : o, a = a || "fx", this.queue(a, function(e, t) {
			var a = A.setTimeout(e, o);
			t.stop = function() {
				A.clearTimeout(a)
			}
		})
	},
		function() {
			var a = He.createElement("input"),
				n = He.createElement("select"),
				t = n.appendChild(He.createElement("option"));
			a.type = "checkbox", Fe.checkOn = "" !== a.value, Fe.optSelected = t.selected, n.disabled = !0, Fe.optDisabled = !t.disabled, a = He.createElement("input"), a.value = "t", a.type = "radio", Fe.radioValue = "t" === a.value
		}();
	var Vt = qe.expr.attrHandle,
		pt;
	qe.fn.extend({
		attr: function(a, e) {
			return C(this, qe.attr, a, e, 1 < arguments.length)
		},
		removeAttr: function(t) {
			return this.each(function() {
				qe.removeAttr(this, t)
			})
		}
	}), qe.extend({
		attr: function(e, t, r) {
			var i = e.nodeType,
				n, l;
			if (3 !== i && 8 !== i && 2 !== i) return "undefined" == typeof e.getAttribute ? qe.prop(e, t, r) : (1 === i && qe.isXMLDoc(e) || (t = t.toLowerCase(), l = qe.attrHooks[t] || (qe.expr.match.bool.test(t) ? pt : void 0)), void 0 === r ? l && "get" in l && null !== (n = l.get(e, t)) ? n : (n = qe.find.attr(e, t), null == n ? void 0 : n) : null === r ? void qe.removeAttr(e, t) : l && "set" in l && void 0 !== (n = l.set(e, r, t)) ? n : (e.setAttribute(t, r + ""), r))
		},
		attrHooks: {
			type: {
				set: function(n, e) {
					if (!Fe.radioValue && "radio" === e && qe.nodeName(n, "input")) {
						var t = n.value;
						return n.setAttribute("type", e), t && (n.value = t), e
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var a = 0,
				r = t && t.match(jt),
				n, l;
			if (r && 1 === e.nodeType)
				for (; n = r[a++];) l = qe.propFix[n] || n, qe.expr.match.bool.test(n) && (e[l] = !1), e.removeAttribute(n)
		}
	}), pt = {
		set: function(n, e, t) {
			return !1 === e ? qe.removeAttr(n, t) : n.setAttribute(t, t), t
		}
	}, qe.each(qe.expr.match.bool.source.match(/\w+/g), function(a, e) {
		var r = Vt[e] || qe.find.attr;
		Vt[e] = function(e, t, a) {
			var n, i;
			return a || (i = Vt[t], Vt[t] = n, n = null == r(e, t, a) ? null : t.toLowerCase(), Vt[t] = i), n
		}
	});
	var Gt = /^(?:input|select|textarea|button)$/i,
		ut = /^(?:a|area)$/i;
	qe.fn.extend({
		prop: function(a, e) {
			return C(this, qe.prop, a, e, 1 < arguments.length)
		},
		removeProp: function(t) {
			return this.each(function() {
				delete this[qe.propFix[t] || t]
			})
		}
	}), qe.extend({
		prop: function(e, t, r) {
			var i = e.nodeType,
				n, l;
			if (3 !== i && 8 !== i && 2 !== i) return 1 === i && qe.isXMLDoc(e) || (t = qe.propFix[t] || t, l = qe.propHooks[t]), void 0 === r ? l && "get" in l && null !== (n = l.get(e, t)) ? n : e[t] : l && "set" in l && void 0 !== (n = l.set(e, r, t)) ? n : e[t] = r
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var e = qe.find.attr(a, "tabindex");
					return e ? parseInt(e, 10) : Gt.test(a.nodeName) || ut.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), Fe.optSelected || (qe.propHooks.selected = {
		get: function(a) {
			var e = a.parentNode;
			return e && e.parentNode && e.parentNode.selectedIndex, null
		},
		set: function(a) {
			var e = a.parentNode;
			e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
		}
	}), qe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		qe.propFix[this.toLowerCase()] = this
	});
	var mt = /[\t\r\n\f]/g;
	qe.fn.extend({
		addClass: function(i) {
			var e = 0,
				t, d, c, m, h, g, f;
			if (qe.isFunction(i)) return this.each(function(t) {
				qe(this).addClass(i.call(this, t, Te(this)))
			});
			if ("string" == typeof i && i)
				for (t = i.match(jt) || []; d = this[e++];)
					if (m = Te(d), c = 1 === d.nodeType && (" " + m + " ").replace(mt, " ")) {
						for (g = 0; h = t[g++];) 0 > c.indexOf(" " + h + " ") && (c += h + " ");
						f = qe.trim(c), m !== f && d.setAttribute("class", f)
					} return this
		},
		removeClass: function(i) {
			var e = 0,
				t, d, c, m, h, g, f;
			if (qe.isFunction(i)) return this.each(function(t) {
				qe(this).removeClass(i.call(this, t, Te(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof i && i)
				for (t = i.match(jt) || []; d = this[e++];)
					if (m = Te(d), c = 1 === d.nodeType && (" " + m + " ").replace(mt, " ")) {
						for (g = 0; h = t[g++];)
							for (; - 1 < c.indexOf(" " + h + " ");) c = c.replace(" " + h + " ", " ");
						f = qe.trim(c), m !== f && d.setAttribute("class", f)
					} return this
		},
		toggleClass: function(r, t) {
			var e = typeof r;
			return "boolean" == typeof t && "string" == e ? t ? this.addClass(r) : this.removeClass(r) : qe.isFunction(r) ? this.each(function(e) {
				qe(this).toggleClass(r.call(this, e, Te(this), t), t)
			}) : this.each(function() {
				var t, a, l, d;
				if ("string" == e)
					for (a = 0, l = qe(this), d = r.match(jt) || []; t = d[a++];) l.hasClass(t) ? l.removeClass(t) : l.addClass(t);
				else void 0 !== r && "boolean" != e || (t = Te(this), t && E.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : E.get(this, "__className__") || ""))
			})
		},
		hasClass: function(n) {
			var e = 0,
				o, s;
			for (o = " " + n + " "; s = this[e++];)
				if (1 === s.nodeType && -1 < (" " + Te(s) + " ").replace(mt, " ").indexOf(o)) return !0;
			return !1
		}
	});
	var ht = /\r/g,
		gt = /[\x20\t\r\n\f]+/g;
	qe.fn.extend({
		val: function(s) {
			var t = this[0],
				r, a, l; {
				if (arguments.length) return l = qe.isFunction(s), this.each(function(e) {
					var t;
					1 === this.nodeType && (t = l ? s.call(this, e, qe(this).val()) : s, null == t ? t = "" : "number" == typeof t ? t += "" : qe.isArray(t) && (t = qe.map(t, function(t) {
						return null == t ? "" : t + ""
					})), r = qe.valHooks[this.type] || qe.valHooks[this.nodeName.toLowerCase()], r && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
				});
				if (t) return r = qe.valHooks[t.type] || qe.valHooks[t.nodeName.toLowerCase()], r && "get" in r && void 0 !== (a = r.get(t, "value")) ? a : (a = t.value, "string" == typeof a ? a.replace(ht, "") : null == a ? "" : a)
			}
		}
	}), qe.extend({
		valHooks: {
			option: {
				get: function(a) {
					var e = qe.find.attr(a, "value");
					return null == e ? qe.trim(qe.text(a)).replace(gt, " ") : e
				}
			},
			select: {
				get: function(i) {
					for (var t = i.options, a = i.selectedIndex, n = "select-one" === i.type || 0 > a, e = n ? null : [], o = n ? a + 1 : t.length, s = 0 > a ? o : n ? a : 0, c, p; o > s; s++)
						if (p = t[s], (p.selected || s === a) && (Fe.optDisabled ? !p.disabled : null === p.getAttribute("disabled")) && (!p.parentNode.disabled || !qe.nodeName(p.parentNode, "optgroup"))) {
							if (c = qe(p).val(), n) return c;
							e.push(c)
						} return e
				},
				set: function(r, t) {
					for (var a = r.options, i = qe.makeArray(t), e = a.length, l, d; e--;) d = a[e], (d.selected = -1 < qe.inArray(qe.valHooks.option.get(d), i)) && (l = !0);
					return l, i
				}
			}
		}
	}), qe.each(["radio", "checkbox"], function() {
		qe.valHooks[this] = {
			set: function(a, e) {
				return qe.isArray(e) ? a.checked = -1 < qe.inArray(qe(a).val(), e) : void 0
			}
		}, Fe.checkOn || (qe.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	});
	var ft = /^(?:focusinfocus|focusoutblur)$/;
	qe.extend(qe.event, {
		trigger: function(e, o, r, l) {
			var s = [r || He],
				d = i.call(e, "type") ? e.type : e,
				c = i.call(e, "namespace") ? e.namespace.split(".") : [],
				m, h, g, b, k, T, S;
			if (h = g = r = r || He, 3 !== r.nodeType && 8 !== r.nodeType && !ft.test(d + qe.event.triggered) && (-1 < d.indexOf(".") && (c = d.split("."), d = c.shift(), c.sort()), k = 0 > d.indexOf(":") && "on" + d, e = e[qe.expando] ? e : new qe.Event(d, "object" == typeof e && e), e.isTrigger = l ? 2 : 3, e.namespace = c.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + c.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), o = null == o ? [e] : qe.makeArray(o, [e]), S = qe.event.special[d] || {}, l || !S.trigger || !1 !== S.trigger.apply(r, o))) {
				if (!l && !S.noBubble && !qe.isWindow(r)) {
					for (b = S.delegateType || d, ft.test(b + d) || (h = h.parentNode); h; h = h.parentNode) s.push(h), g = h;
					g === (r.ownerDocument || He) && s.push(g.defaultView || g.parentWindow || A)
				}
				for (m = 0;
					(h = s[m++]) && !e.isPropagationStopped();) e.type = 1 < m ? b : S.bindType || d, T = (E.get(h, "events") || {})[e.type] && E.get(h, "handle"), T && T.apply(h, o), T = k && h[k], T && T.apply && D(h) && (e.result = T.apply(h, o), !1 === e.result && e.preventDefault());
				return e.type = d, l || e.isDefaultPrevented() || S._default && !1 !== S._default.apply(s.pop(), o) || !D(r) || k && qe.isFunction(r[d]) && !qe.isWindow(r) && (g = r[k], g && (r[k] = null), qe.event.triggered = d, r[d](), qe.event.triggered = void 0, g && (r[k] = g)), e.result
			}
		},
		simulate: function(n, e, t) {
			var a = qe.extend(new qe.Event, t, {
				type: n,
				isSimulated: !0
			});
			qe.event.trigger(a, null, e), a.isDefaultPrevented() && t.preventDefault()
		}
	}), qe.fn.extend({
		trigger: function(a, e) {
			return this.each(function() {
				qe.event.trigger(a, e, this)
			})
		},
		triggerHandler: function(n, e) {
			var t = this[0];
			return t ? qe.event.trigger(n, e, t, !0) : void 0
		}
	}), qe.each(["blur", "focus", "focusin", "focusout", "load", "resize", "scroll", "unload", "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "change", "select", "submit", "keydown", "keypress", "keyup", "error", "contextmenu"], function(a, n) {
		qe.fn[n] = function(t, e) {
			return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
		}
	}), qe.fn.extend({
		hover: function(a, e) {
			return this.mouseenter(a).mouseleave(e || a)
		}
	}), Fe.focusin = "onfocusin" in A, Fe.focusin || qe.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var i = function(a) {
			qe.event.simulate(t, a.target, qe.event.fix(a))
		};
		qe.event.special[t] = {
			setup: function() {
				var a = this.ownerDocument || this,
					n = E.access(a, t);
				n || a.addEventListener(e, i, !0), E.access(a, t, (n || 0) + 1)
			},
			teardown: function() {
				var a = this.ownerDocument || this,
					n = E.access(a, t) - 1;
				n ? E.access(a, t, n) : (a.removeEventListener(e, i, !0), E.remove(a, t))
			}
		}
	});
	var vt = A.location,
		bt = qe.now(),
		Kt = /\?/;
	qe.parseJSON = function(t) {
		return JSON.parse(t + "")
	}, qe.parseXML = function(a) {
		var n;
		if (!a || "string" != typeof a) return null;
		try {
			n = new A.DOMParser().parseFromString(a, "text/xml")
		} catch (t) {
			n = void 0
		}
		return n && !n.getElementsByTagName("parsererror").length || qe.error("Invalid XML: " + a), n
	};
	var _t = /#.*$/,
		wt = /([?&])_=[^&]*/,
		xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		kt = /^(?:GET|HEAD)$/,
		Dt = /^\/\//,
		Tt = {},
		St = {},
		Pt = "*/".concat("*"),
		Mt = He.createElement("a");
	Mt.href = vt.href, qe.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: vt.href,
			type: "GET",
			isLocal: Ct.test(vt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": "*/*",
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": qe.parseJSON,
				"text xml": qe.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(a, e) {
			return e ? Me(Me(a, qe.ajaxSettings), e) : Me(qe.ajaxSettings, a)
		},
		ajaxPrefilter: Se(Tt),
		ajaxTransport: Se(St),
		ajax: function(e, i) {
			function s(r, u, a, i) {
				var n = u,
					x, T, S, P, M;
				2 !== y && (y = 2, k && A.clearTimeout(k), w = void 0, C = i || "", _.readyState = 0 < r ? 4 : 0, x = 200 <= r && 300 > r || 304 === r, a && (P = Oe(l, _, a)), P = Ie(l, P, _, x), x ? (l.ifModified && (M = _.getResponseHeader("Last-Modified"), M && (qe.lastModified[t] = M), M = _.getResponseHeader("etag"), M && (qe.etag[t] = M)), 204 === r || "HEAD" === l.type ? n = "nocontent" : 304 === r ? n = "notmodified" : (n = P.state, T = P.data, S = P.error, x = !S)) : (S = n, !r && n || (n = "error", 0 > r && (r = 0))), _.status = r, _.statusText = (u || n) + "", x ? o.resolveWith(v, [T, n, _]) : o.rejectWith(v, [_, n, S]), _.statusCode(b), b = void 0, D && m.trigger(x ? "ajaxSuccess" : "ajaxError", [_, l, x ? T : S]), p.fireWith(v, [_, n]), D && (m.trigger("ajaxComplete", [_, l]), --qe.active || qe.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (i = e, e = void 0), i = i || {};
			var l = qe.ajaxSetup({}, i),
				v = l.context || l,
				m = l.context && (v.nodeType || v.jquery) ? qe(v) : qe.event,
				o = qe.Deferred(),
				p = qe.Callbacks("once memory"),
				b = l.statusCode || {},
				d = {},
				c = {},
				y = 0,
				h = "canceled",
				_ = {
					readyState: 0,
					getResponseHeader: function(a) {
						var e;
						if (2 == y) {
							if (!g)
								for (g = {}; e = xt.exec(C);) g[e[1].toLowerCase()] = e[2];
							e = g[a.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 == y ? C : null
					},
					setRequestHeader: function(t, a) {
						var i = t.toLowerCase();
						return y || (t = c[i] = c[i] || t, d[t] = a), this
					},
					overrideMimeType: function(t) {
						return y || (l.mimeType = t), this
					},
					statusCode: function(a) {
						if (a)
							if (2 > y)
								for (var e in a) b[e] = [b[e], a[e]];
							else _.always(a[_.status]);
						return this
					},
					abort: function(a) {
						var e = a || h;
						return w && w.abort(e), s(0, e), this
					}
				},
				w, t, C, g, k, f, D, S;
			if (o.promise(_).complete = p.add, _.success = _.done, _.error = _.fail, l.url = ((e || l.url || vt.href) + "").replace(_t, "").replace(Dt, vt.protocol + "//"), l.type = i.method || i.type || l.method || l.type, l.dataTypes = qe.trim(l.dataType || "*").toLowerCase().match(jt) || [""], null == l.crossDomain) {
				f = He.createElement("a");
				try {
					f.href = l.url, f.href = f.href, l.crossDomain = Mt.protocol + "//" + Mt.host != f.protocol + "//" + f.host
				} catch (t) {
					l.crossDomain = !0
				}
			}
			if (l.data && l.processData && "string" != typeof l.data && (l.data = qe.param(l.data, l.traditional)), Pe(Tt, l, i, _), 2 == y) return _;
			for (S in D = qe.event && l.global, D && 0 == qe.active++ && qe.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !kt.test(l.type), t = l.url, l.hasContent || (l.data && (t = l.url += (Kt.test(t) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = wt.test(t) ? t.replace(wt, "$1_=" + bt++) : t + (Kt.test(t) ? "&" : "?") + "_=" + bt++)), l.ifModified && (qe.lastModified[t] && _.setRequestHeader("If-Modified-Since", qe.lastModified[t]), qe.etag[t] && _.setRequestHeader("If-None-Match", qe.etag[t])), (l.data && l.hasContent && !1 !== l.contentType || i.contentType) && _.setRequestHeader("Content-Type", l.contentType), _.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" === l.dataTypes[0] ? "" : ", */*; q=0.01") : l.accepts["*"]), l.headers) _.setRequestHeader(S, l.headers[S]);
			if (l.beforeSend && (!1 === l.beforeSend.call(v, _, l) || 2 == y)) return _.abort();
			for (S in h = "abort", {
				success: 1,
				error: 1,
				complete: 1
			}) _[S](l[S]);
			if (w = Pe(St, l, i, _)) {
				if (_.readyState = 1, D && m.trigger("ajaxSend", [_, l]), 2 == y) return _;
				l.async && 0 < l.timeout && (k = A.setTimeout(function() {
					_.abort("timeout")
				}, l.timeout));
				try {
					y = 1, w.send(d, s)
				} catch (t) {
					if (!(2 > y)) throw t;
					s(-1, t)
				}
			} else s(-1, "No Transport");
			return _
		},
		getJSON: function(n, e, t) {
			return qe.get(n, e, t, "json")
		},
		getScript: function(a, e) {
			return qe.get(a, void 0, e, "script")
		}
	}), qe.each(["get", "post"], function(a, e) {
		qe[e] = function(t, i, s, r) {
			return qe.isFunction(i) && (r = r || s, s = i, i = void 0), qe.ajax(qe.extend({
				url: t,
				type: e,
				dataType: r,
				data: i,
				success: s
			}, qe.isPlainObject(t) && t))
		}
	}), qe._evalUrl = function(t) {
		return qe.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			throws: !0
		})
	}, qe.fn.extend({
		wrapAll: function(a) {
			var e;
			return qe.isFunction(a) ? this.each(function(e) {
				qe(this).wrapAll(a.call(this, e))
			}) : (this[0] && (e = qe(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
				for (var t = this; t.firstElementChild;) t = t.firstElementChild;
				return t
			}).append(this)), this)
		},
		wrapInner: function(n) {
			return qe.isFunction(n) ? this.each(function(e) {
				qe(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = qe(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(n) {
			var e = qe.isFunction(n);
			return this.each(function(t) {
				qe(this).wrapAll(e ? n.call(this, t) : n)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				qe.nodeName(this, "body") || qe(this).replaceWith(this.childNodes)
			}).end()
		}
	}), qe.expr.filters.hidden = function(t) {
		return !qe.expr.filters.visible(t)
	}, qe.expr.filters.visible = function(t) {
		return 0 < t.offsetWidth || 0 < t.offsetHeight || 0 < t.getClientRects().length
	};
	var Ot = /%20/g,
		It = /\[\]$/,
		At = /\r?\n/g,
		Et = /^(?:submit|button|image|reset|file)$/i,
		Nt = /^(?:input|select|textarea|keygen)/i;
	qe.param = function(o, t) {
		var s = [],
			i = function(a, e) {
				e = qe.isFunction(e) ? e() : null == e ? "" : e, s[s.length] = encodeURIComponent(a) + "=" + encodeURIComponent(e)
			},
			n;
		if (void 0 === t && (t = qe.ajaxSettings && qe.ajaxSettings.traditional), qe.isArray(o) || o.jquery && !qe.isPlainObject(o)) qe.each(o, function() {
			i(this.name, this.value)
		});
		else
			for (n in o) Ee(n, o[n], t, i);
		return s.join("&").replace(Ot, "+")
	}, qe.fn.extend({
		serialize: function() {
			return qe.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = qe.prop(this, "elements");
				return t ? qe.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !qe(this).is(":disabled") && Nt.test(this.nodeName) && !Et.test(t) && (this.checked || !B.test(t))
			}).map(function(n, i) {
				var e = qe(this).val();
				return null == e ? null : qe.isArray(e) ? qe.map(e, function(t) {
					return {
						name: i.name,
						value: t.replace(At, "\r\n")
					}
				}) : {
						name: i.name,
						value: e.replace(At, "\r\n")
					}
			}).get()
		}
	}), qe.ajaxSettings.xhr = function() {
		try {
			return new A.XMLHttpRequest
		} catch (t) { }
	};
	var Ht = {
		0: 200,
		1223: 204
	},
		Wt = qe.ajaxSettings.xhr();
	Fe.cors = !!Wt && "withCredentials" in Wt, Fe.ajax = Wt = !!Wt, qe.ajaxTransport(function(r) {
		var l, d;
		return Fe.cors || Wt && !r.crossDomain ? {
			send: function(t, a) {
				var e = r.xhr(),
					n;
				if (e.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
					for (n in r.xhrFields) e[n] = r.xhrFields[n];
				for (n in r.mimeType && e.overrideMimeType && e.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) e.setRequestHeader(n, t[n]);
				l = function(n) {
					return function() {
						l && (l = d = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" == typeof e.status ? a(e.status, e.statusText) : a(0, "error") : a(Ht[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
							binary: e.response
						} : {
								text: e.responseText
							}, e.getAllResponseHeaders()))
					}
				}, e.onload = l(), d = e.onerror = l("error"), void 0 === e.onabort ? e.onreadystatechange = function() {
					4 === e.readyState && A.setTimeout(function() {
						l && d()
					})
				} : e.onabort = d, l = l("abort");
				try {
					e.send(r.hasContent && r.data || null)
				} catch (t) {
					if (l) throw t
				}
			},
			abort: function() {
				l && l()
			}
		} : void 0
	}), qe.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(t) {
				return qe.globalEval(t), t
			}
		}
	}), qe.ajaxPrefilter("script", function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), qe.ajaxTransport("script", function(o) {
		if (o.crossDomain) {
			var s, r;
			return {
				send: function(t, a) {
					s = qe("<script>").prop({
						charset: o.scriptCharset,
						src: o.url
					}).on("load error", r = function(e) {
						s.remove(), r = null, e && a("error" === e.type ? 404 : 200, e.type)
					}), He.head.appendChild(s[0])
				},
				abort: function() {
					r && r()
				}
			}
		}
	});
	var Xt = [],
		Lt = /(=)\?(?=&|$)|\?\?/;
	qe.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = Xt.pop() || qe.expando + "_" + bt++;
			return this[t] = !0, t
		}
	}), qe.ajaxPrefilter("json jsonp", function(e, t, a) {
		var i = !1 !== e.jsonp && (Lt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(e.data) && "data"),
			n, l, d;
		return i || "jsonp" === e.dataTypes[0] ? (n = e.jsonpCallback = qe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, i ? e[i] = e[i].replace(Lt, "$1" + n) : !1 !== e.jsonp && (e.url += (Kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
			return d || qe.error(n + " was not called"), d[0]
		}, e.dataTypes[0] = "json", l = A[n], A[n] = function() {
			d = arguments
		}, a.always(function() {
			void 0 === l ? qe(A).removeProp(n) : A[n] = l, e[n] && (e.jsonpCallback = t.jsonpCallback, Xt.push(n)), d && qe.isFunction(l) && l(d[0]), d = l = void 0
		}), "script") : void 0
	}), qe.parseHTML = function(e, t, s) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (s = t, t = !1), t = t || He;
		var r = p.exec(e),
			l = !s && [];
		return r ? [t.createElement(r[1])] : (r = _([e], t, l), l && l.length && qe(l).remove(), qe.merge([], r.childNodes))
	};
	var Rt = qe.fn.load;
	qe.fn.load = function(e, a, d) {
		if ("string" != typeof e && Rt) return Rt.apply(this, arguments);
		var c = this,
			o = e.indexOf(" "),
			s, u, m;
		return -1 < o && (s = qe.trim(e.slice(o)), e = e.slice(0, o)), qe.isFunction(a) ? (d = a, a = void 0) : a && "object" == typeof a && (u = "POST"), 0 < c.length && qe.ajax({
			url: e,
			type: u || "GET",
			dataType: "html",
			data: a
		}).done(function(t) {
			m = arguments, c.html(s ? qe("<div>").append(qe.parseHTML(t)).find(s) : t)
		}).always(d && function(a, e) {
			c.each(function() {
				d.apply(this, m || [a.responseText, e, a])
			})
		}), this
	}, qe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, n) {
		qe.fn[n] = function(t) {
			return this.on(n, t)
		}
	}), qe.expr.filters.animated = function(a) {
		return qe.grep(qe.timers, function(e) {
			return a === e.elem
		}).length
	}, qe.offset = {
		setOffset: function(e, t, i) {
			var n = qe.css(e, "position"),
				o = qe(e),
				s = {},
				r, d, h, g, f, b, _;
			"static" === n && (e.style.position = "relative"), f = o.offset(), h = qe.css(e, "top"), b = qe.css(e, "left"), _ = ("absolute" === n || "fixed" === n) && -1 < (h + b).indexOf("auto"), _ ? (r = o.position(), g = r.top, d = r.left) : (g = parseFloat(h) || 0, d = parseFloat(b) || 0), qe.isFunction(t) && (t = t.call(e, i, qe.extend({}, f))), null != t.top && (s.top = t.top - f.top + g), null != t.left && (s.left = t.left - f.left + d), "using" in t ? t.using.call(e, s) : o.css(s)
		}
	}, qe.fn.extend({
		offset: function(r) {
			if (arguments.length) return void 0 === r ? this : this.each(function(t) {
				qe.offset.setOffset(this, r, t)
			});
			var e = this[0],
				t = {
					top: 0,
					left: 0
				},
				a = e && e.ownerDocument,
				n, l;
			if (a) return n = a.documentElement, qe.contains(n, e) ? (t = e.getBoundingClientRect(), l = Ae(a), {
				top: t.top + l.pageYOffset - n.clientTop,
				left: t.left + l.pageXOffset - n.clientLeft
			}) : t
		},
		position: function() {
			if (this[0]) {
				var a = this[0],
					e = {
						top: 0,
						left: 0
					},
					o, s;
				return "fixed" === qe.css(a, "position") ? s = a.getBoundingClientRect() : (o = this.offsetParent(), s = this.offset(), qe.nodeName(o[0], "html") || (e = o.offset()), e.top += qe.css(o[0], "borderTopWidth", !0), e.left += qe.css(o[0], "borderLeftWidth", !0)), {
					top: s.top - e.top - qe.css(a, "marginTop", !0),
					left: s.left - e.left - qe.css(a, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent; t && "static" === qe.css(t, "position");) t = t.offsetParent;
				return t || Ze
			})
		}
	}), qe.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(n, s) {
		var t = "pageYOffset" === s;
		qe.fn[n] = function(e) {
			return C(this, function(i, n, a) {
				var o = Ae(i);
				return void 0 === a ? o ? o[s] : i[n] : void (o ? o.scrollTo(t ? o.pageXOffset : a, t ? a : o.pageYOffset) : i[n] = a)
			}, n, e, arguments.length)
		}
	}), qe.each(["top", "left"], function(a, n) {
		qe.cssHooks[n] = me(Fe.pixelPosition, function(t, e) {
			return e ? (e = ue(t, n), Ke.test(e) ? qe(t).position()[n] + "px" : e) : void 0
		})
	}), qe.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		qe.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(a, n) {
			qe.fn[n] = function(i, n) {
				var o = arguments.length && (a || "boolean" != typeof i),
					r = a || (!0 === i || !0 === n ? "margin" : "border");
				return C(this, function(t, a, i) {
					var n;
					return qe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + e], n["scroll" + e], t.body["offset" + e], n["offset" + e], n["client" + e])) : void 0 === i ? qe.css(t, a, r) : qe.style(t, a, i, r)
				}, t, o ? i : void 0, o, null)
			}
		})
	}), qe.fn.extend({
		bind: function(n, e, t) {
			return this.on(n, null, e, t)
		},
		unbind: function(a, e) {
			return this.off(a, null, e)
		},
		delegate: function(n, e, t, a) {
			return this.on(e, n, t, a)
		},
		undelegate: function(n, e, t) {
			return 1 === arguments.length ? this.off(n, "**") : this.off(e, n || "**", t)
		},
		size: function() {
			return this.length
		}
	}), qe.fn.andSelf = qe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return qe
	});
	var Yt = A.jQuery,
		Ft = A.$;
	return qe.noConflict = function(t) {
		return A.$ === qe && (A.$ = Ft), t && A.jQuery === qe && (A.jQuery = Yt), qe
	}, I || (A.jQuery = A.$ = qe), qe
}), (function(a, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : a.moment = e()
}(this, function() {
	"use strict";

	function Ce() {
		return St.apply(null, arguments)
	}

	function en(t) {
		return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
	}

	function tn(t) {
		return null != t && "[object Object]" === Object.prototype.toString.call(t)
	}

	function t(a) {
		if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(a).length;
		for (var e in a)
			if (a.hasOwnProperty(e)) return !1;
		return !0
	}

	function an(t) {
		return void 0 === t
	}

	function nn(t) {
		return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
	}

	function o(t) {
		return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
	}

	function a(i, e) {
		var t = [],
			a;
		for (a = 0; a < i.length; ++a) t.push(e(i[a], a));
		return t
	}

	function on(a, e) {
		return Object.prototype.hasOwnProperty.call(a, e)
	}

	function r(n, e) {
		for (var t in e) on(e, t) && (n[t] = e[t]);
		return on(e, "toString") && (n.toString = e.toString), on(e, "valueOf") && (n.valueOf = e.valueOf), n
	}

	function sn(n, e, t, a) {
		return Re(n, e, t, a, !0).utc()
	}

	function n() {
		return {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1,
			parsedDateParts: [],
			meridiem: null,
			rfc2822: !1,
			weekdayMismatch: !1
		}
	}

	function c(t) {
		return null == t._pf && (t._pf = n()), t._pf
	}

	function l(n) {
		if (null == n._isValid) {
			var e = c(n),
				t = Pt.call(e.parsedDateParts, function(t) {
					return null != t
				}),
				a = !isNaN(n._d.getTime()) && 0 > e.overflow && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && t);
			if (n._strict && (a = a && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null == Object.isFrozen || !Object.isFrozen(n)) n._isValid = a;
			else return a
		}
		return n._isValid
	}

	function s(a) {
		var e = sn(NaN);
		return null == a ? c(e).userInvalidated = !0 : r(c(e), a), e
	}

	function i(n, e) {
		var t, i, r;
		if (an(e._isAMomentObject) || (n._isAMomentObject = e._isAMomentObject), an(e._i) || (n._i = e._i), an(e._f) || (n._f = e._f), an(e._l) || (n._l = e._l), an(e._strict) || (n._strict = e._strict), an(e._tzm) || (n._tzm = e._tzm), an(e._isUTC) || (n._isUTC = e._isUTC), an(e._offset) || (n._offset = e._offset), an(e._pf) || (n._pf = c(e)), an(e._locale) || (n._locale = e._locale), 0 < Mt.length)
			for (t = 0; t < Mt.length; t++) i = Mt[t], r = e[i], an(r) || (n[i] = r);
		return n
	}

	function d(e) {
		i(this, e), this._d = new Date(null == e._d ? NaN : e._d.getTime()), this.isValid() || (this._d = new Date(NaN)), !1 === Ot && (Ot = !0, Ce.updateOffset(this), Ot = !1)
	}

	function p(t) {
		return t instanceof d || null != t && null != t._isAMomentObject
	}

	function v(t) {
		return 0 > t ? Math.ceil(t) || 0 : Math.floor(t)
	}

	function u(n) {
		var e = +n,
			t = 0;
		return 0 != e && isFinite(e) && (t = v(e)), t
	}

	function m(i, e, t) {
		var a = Math.min(i.length, e.length),
			n = Math.abs(i.length - e.length),
			o = 0,
			l;
		for (l = 0; l < a; l++)(t && i[l] !== e[l] || !t && u(i[l]) !== u(e[l])) && o++;
		return o + n
	}

	function e(e) {
		!1 === Ce.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
	}

	function h(i, t) {
		var a = !0;
		return r(function() {
			if (null != Ce.deprecationHandler && Ce.deprecationHandler(null, i), a) {
				for (var n = [], o = 0, d; o < arguments.length; o++) {
					if (d = "", "object" == typeof arguments[o]) {
						for (var c in d += "\n[" + o + "] ", arguments[0]) d += c + ": " + arguments[0][c] + ", ";
						d = d.slice(0, -2)
					} else d = arguments[o];
					n.push(d)
				}
				e(i + "\nArguments: " + Array.prototype.slice.call(n).join("") + "\n" + new Error().stack), a = !1
			}
			return t.apply(this, arguments)
		}, t)
	}

	function g(n, t) {
		null != Ce.deprecationHandler && Ce.deprecationHandler(n, t), It[n] || (e(t), It[n] = !0)
	}

	function f(t) {
		return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
	}

	function y(a, e) {
		var t = r({}, a),
			i;
		for (i in e) on(e, i) && (tn(a[i]) && tn(e[i]) ? (t[i] = {}, r(t[i], a[i]), r(t[i], e[i])) : null == e[i] ? delete t[i] : t[i] = e[i]);
		for (i in a) on(a, i) && !on(e, i) && tn(a[i]) && (t[i] = r({}, t[i]));
		return t
	}

	function b(t) {
		null != t && this.set(t)
	}

	function _(n, e) {
		var t = n.toLowerCase();
		zt[t] = zt[t + "s"] = zt[e] = n
	}

	function w(t) {
		return "string" == typeof t ? zt[t] || zt[t.toLowerCase()] : void 0
	}

	function x(n) {
		var e = {},
			t, o;
		for (o in n) on(n, o) && (t = w(o), t && (e[t] = n[o]));
		return e
	}

	function C(a, e) {
		Rt[a] = e
	}

	function k(n) {
		var e = [];
		for (var t in n) e.push({
			unit: t,
			priority: Rt[t]
		});
		return e.sort(function(a, e) {
			return a.priority - e.priority
		}), e
	}

	function D(o, e, t) {
		var a = "" + Math.abs(o),
			i = e - a.length;
		return (0 <= o ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + a
	}

	function T(o, e, t, a) {
		var i = a;
		"string" == typeof a && (i = function() {
			return this[a]()
		}), o && (jt[o] = i), e && (jt[e[0]] = function() {
			return D(i.apply(this, arguments), e[1], e[2])
		}), t && (jt[t] = function() {
			return this.localeData().ordinal(i.apply(this, arguments), o)
		})
	}

	function S(t) {
		return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
	}

	function P(i) {
		var e = i.match(Ft),
			t, o;
		for (t = 0, o = e.length; t < o; t++) e[t] = jt[e[t]] ? jt[e[t]] : S(e[t]);
		return function(t) {
			var a = "",
				n;
			for (n = 0; n < o; n++) a += f(e[n]) ? e[n].call(t, i) : e[n];
			return a
		}
	}

	function M(a, e) {
		return a.isValid() ? (e = O(e, a.localeData()), Yt[e] = Yt[e] || P(e), Yt[e](a)) : a.localeData().invalidDate()
	}

	function O(i, o) {
		function t(t) {
			return o.longDateFormat(t) || t
		}
		var a = 5;
		for (Lt.lastIndex = 0; 0 <= a && Lt.test(i);) i = i.replace(Lt, t), Lt.lastIndex = 0, a -= 1;
		return i
	}

	function I(n, i, t) {
		sa[n] = f(i) ? i : function(a) {
			return a && t ? t : i
		}
	}

	function E(a, e) {
		return on(sa, a) ? sa[a](e._strict, e._locale) : new RegExp(A(a))
	}

	function A(t) {
		return N(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(o, e, t, a, i) {
			return e || t || a || i
		}))
	}

	function N(t) {
		return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function H(i, o) {
		var t = o,
			s;
		for ("string" == typeof i && (i = [i]), nn(o) && (t = function(t, e) {
			e[o] = u(t)
		}), s = 0; s < i.length; s++) ra[i[s]] = t
	}

	function W(a, o) {
		H(a, function(t, e, a, i) {
			a._w = a._w || {}, o(t, a._w, a, i)
		})
	}

	function z(n, e, t) {
		null != e && on(ra, n) && ra[n](e, t._a, t, n)
	}

	function R(t) {
		return F(t) ? 366 : 365
	}

	function F(t) {
		return 0 == t % 4 && 0 != t % 100 || 0 == t % 400
	}

	function L(e, t) {
		return function(a) {
			return null == a ? Y(this, e) : (q(this, e, a), Ce.updateOffset(this, t), this)
		}
	}

	function Y(a, e) {
		return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + e]() : NaN
	}

	function q(n, e, t) {
		n.isValid() && !isNaN(t) && ("FullYear" === e && F(n.year()) && 1 === n.month() && 29 === n.date() ? n._d["set" + (n._isUTC ? "UTC" : "") + e](t, n.month(), U(t, n.month())) : n._d["set" + (n._isUTC ? "UTC" : "") + e](t))
	}

	function B(a, e) {
		return (a % e + e) % e
	}

	function U(n, i) {
		if (isNaN(n) || isNaN(i)) return NaN;
		var t = B(i, 12);
		return n += (i - t) / 12, 1 === t ? F(n) ? 29 : 28 : 31 - t % 7 % 2
	}

	function V(i, e, t) {
		var a = i.toLocaleLowerCase(),
			n, l, d;
		if (!this._monthsParse)
			for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; 12 > n; ++n) d = sn([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(d, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(d, "").toLocaleLowerCase();
		return t ? "MMM" === e ? (l = ga.call(this._shortMonthsParse, a), -1 === l ? null : l) : (l = ga.call(this._longMonthsParse, a), -1 === l ? null : l) : "MMM" === e ? (l = ga.call(this._shortMonthsParse, a), -1 !== l) ? l : (l = ga.call(this._longMonthsParse, a), -1 === l ? null : l) : (l = ga.call(this._longMonthsParse, a), -1 !== l) ? l : (l = ga.call(this._shortMonthsParse, a), -1 === l ? null : l)
	}

	function G(n, e) {
		var i;
		if (!n.isValid()) return n;
		if ("string" == typeof e)
			if (/^\d+$/.test(e)) e = u(e);
			else if (e = n.localeData().monthsParse(e), !nn(e)) return n;
		return i = Math.min(n.date(), U(n.year(), e)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](e, i), n
	}

	function K(e) {
		return null == e ? Y(this, "Month") : (G(this, e), Ce.updateOffset(this, !0), this)
	}

	function X() {
		function i(a, e) {
			return e.length - a.length
		}
		var e = [],
			t = [],
			a = [],
			n, r;
		for (n = 0; 12 > n; n++) r = sn([2e3, n]), e.push(this.monthsShort(r, "")), t.push(this.months(r, "")), a.push(this.months(r, "")), a.push(this.monthsShort(r, ""));
		for (e.sort(i), t.sort(i), a.sort(i), n = 0; 12 > n; n++) e[n] = N(e[n]), t[n] = N(t[n]);
		for (n = 0; 24 > n; n++) a[n] = N(a[n]);
		this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + e.join("|") + ")", "i")
	}

	function Q(l, e, t, a, i, n, o) {
		var s;
		return 100 > l && 0 <= l ? (s = new Date(l + 400, e, t, a, i, n, o), isFinite(s.getFullYear()) && s.setFullYear(l)) : s = new Date(l, e, t, a, i, n, o), s
	}

	function Z(n) {
		var e;
		if (100 > n && 0 <= n) {
			var i = Array.prototype.slice.call(arguments);
			i[0] = n + 400, e = new Date(Date.UTC.apply(null, i)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(n)
		} else e = new Date(Date.UTC.apply(null, arguments));
		return e
	}

	function J(o, e, t) {
		var a = 7 + e - t,
			i = (7 + Z(o, 0, a).getUTCDay() - e) % 7;
		return -i + a - 1
	}

	function ee(d, e, t, a, i) {
		var n = J(d, a, i),
			o = 1 + 7 * (e - 1) + (7 + t - a) % 7 + n,
			s, c;
		return 0 >= o ? (s = d - 1, c = R(s) + o) : o > R(d) ? (s = d + 1, c = o - R(d)) : (s = d, c = o), {
			year: s,
			dayOfYear: c
		}
	}

	function te(r, e, t) {
		var a = J(r.year(), e, t),
			i = Math.floor((r.dayOfYear() - a - 1) / 7) + 1,
			n, l;
		return 1 > i ? (l = r.year() - 1, n = i + ae(l, e, t)) : i > ae(r.year(), e, t) ? (n = i - ae(r.year(), e, t), l = r.year() + 1) : (l = r.year(), n = i), {
			week: n,
			year: l
		}
	}

	function ae(o, e, t) {
		var a = J(o, e, t),
			i = J(o + 1, e, t);
		return (R(o) - a + i) / 7
	}

	function ne(a, n) {
		return "string" == typeof a ? isNaN(a) ? (a = n.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10) : a
	}

	function ie(a, e) {
		return "string" == typeof a ? e.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
	}

	function oe(a, e) {
		return a.slice(e, 7).concat(a.slice(0, e))
	}

	function se(i, e, t) {
		var a = i.toLocaleLowerCase(),
			n, l, d;
		if (!this._weekdaysParse)
			for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; 7 > n; ++n) d = sn([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(d, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(d, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(d, "").toLocaleLowerCase();
		return t ? "dddd" === e ? (l = ga.call(this._weekdaysParse, a), -1 === l ? null : l) : "ddd" === e ? (l = ga.call(this._shortWeekdaysParse, a), -1 === l ? null : l) : (l = ga.call(this._minWeekdaysParse, a), -1 === l ? null : l) : "dddd" === e ? (l = ga.call(this._weekdaysParse, a), -1 !== l) ? l : (l = ga.call(this._shortWeekdaysParse, a), -1 !== l) ? l : (l = ga.call(this._minWeekdaysParse, a), -1 === l ? null : l) : "ddd" === e ? (l = ga.call(this._shortWeekdaysParse, a), -1 !== l) ? l : (l = ga.call(this._weekdaysParse, a), -1 !== l) ? l : (l = ga.call(this._minWeekdaysParse, a), -1 === l ? null : l) : (l = ga.call(this._minWeekdaysParse, a), -1 !== l) ? l : (l = ga.call(this._weekdaysParse, a), -1 !== l) ? l : (l = ga.call(this._shortWeekdaysParse, a), -1 === l ? null : l)
	}

	function re() {
		function i(a, e) {
			return e.length - a.length
		}
		var e = [],
			t = [],
			a = [],
			n = [],
			o, p, u, m, h;
		for (o = 0; 7 > o; o++) p = sn([2e3, 1]).day(o), u = this.weekdaysMin(p, ""), m = this.weekdaysShort(p, ""), h = this.weekdays(p, ""), e.push(u), t.push(m), a.push(h), n.push(u), n.push(m), n.push(h);
		for (e.sort(i), t.sort(i), a.sort(i), n.sort(i), o = 0; 7 > o; o++) t[o] = N(t[o]), a[o] = N(a[o]), n[o] = N(n[o]);
		this._weekdaysRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + e.join("|") + ")", "i")
	}

	function le() {
		return this.hours() % 12 || 12
	}

	function de(a, e) {
		T(a, 0, 0, function() {
			return this.localeData().meridiem(this.hours(), this.minutes(), e)
		})
	}

	function ce(a, e) {
		return e._meridiemParse
	}

	function pe(t) {
		return t ? t.toLowerCase().replace("_", "-") : t
	}

	function ue(i) {
		for (var e = 0, r, l, d, c; e < i.length;) {
			for (c = pe(i[e]).split("-"), r = c.length, l = pe(i[e + 1]), l = l ? l.split("-") : null; 0 < r;) {
				if (d = me(c.slice(0, r).join("-")), d) return d;
				if (l && l.length >= r && m(c, l, !0) >= r - 1) break;
				r--
			}
			e++
		}
		return Aa
	}

	function me(n) {
		var e = null;
		if (!Ca[n] && "undefined" != typeof module && module && module.exports) try {
			e = Aa._abbr;
			var i = require;
			i("./locale/" + n), he(e)
		} catch (e) { }
		return Ca[n]
	}

	function he(n, e) {
		var t;
		return n && (t = an(e) ? fe(n) : ge(n, e), t ? Aa = t : "undefined" != typeof console && console.warn && console.warn("Locale " + n + " not found. Did you forget to load it?")), Aa._abbr
	}

	function ge(n, e) {
		if (null !== e) {
			var t = xa,
				o;
			if (e.abbr = n, null != Ca[n]) g("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), t = Ca[n]._config;
			else if (null != e.parentLocale)
				if (null != Ca[e.parentLocale]) t = Ca[e.parentLocale]._config;
				else if (o = me(e.parentLocale), null != o) t = o._config;
				else return ka[e.parentLocale] || (ka[e.parentLocale] = []), ka[e.parentLocale].push({
					name: n,
					config: e
				}), null;
			return Ca[n] = new b(y(t, e)), ka[n] && ka[n].forEach(function(t) {
				ge(t.name, t.config)
			}), he(n), Ca[n]
		}
		return delete Ca[n], null
	}

	function fe(t) {
		var n;
		if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Aa;
		if (!en(t)) {
			if (n = me(t), n) return n;
			t = [t]
		}
		return ue(t)
	}

	function ve(n) {
		var e = n._a,
			t;
		return e && -2 === c(n).overflow && (t = 0 > e[1] || 11 < e[1] ? 1 : 1 > e[2] || e[2] > U(e[0], e[1]) ? 2 : 0 > e[3] || 24 < e[3] || 24 === e[3] && (0 !== e[4] || 0 !== e[5] || 0 !== e[6]) ? 3 : 0 > e[4] || 59 < e[4] ? 4 : 0 > e[5] || 59 < e[5] ? 5 : 0 > e[6] || 999 < e[6] ? 6 : -1, c(n)._overflowDayOfYear && (0 > t || 2 < t) && (t = 2), c(n)._overflowWeeks && -1 === t && (t = 7), c(n)._overflowWeekday && -1 === t && (t = 8), c(n).overflow = t), n
	}

	function ye(n, e, t) {
		return null == n ? null == e ? t : e : n
	}

	function be(e) {
		var t = new Date(Ce.now());
		return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
	}

	function _e(i) {
		var e = [],
			t, l, d, p, u;
		if (!i._d) {
			for (d = be(i), i._w && null == i._a[2] && null == i._a[1] && we(i), null != i._dayOfYear && (u = ye(i._a[0], d[0]), (i._dayOfYear > R(u) || 0 === i._dayOfYear) && (c(i)._overflowDayOfYear = !0), l = Z(u, 0, i._dayOfYear), i._a[1] = l.getUTCMonth(), i._a[2] = l.getUTCDate()), t = 0; 3 > t && null == i._a[t]; ++t) i._a[t] = e[t] = d[t];
			for (; 7 > t; t++) i._a[t] = e[t] = null == i._a[t] ? 2 === t ? 1 : 0 : i._a[t];
			24 === i._a[3] && 0 === i._a[4] && 0 === i._a[5] && 0 === i._a[6] && (i._nextDay = !0, i._a[3] = 0), i._d = (i._useUTC ? Z : Q).apply(null, e), p = i._useUTC ? i._d.getUTCDay() : i._d.getDay(), null != i._tzm && i._d.setUTCMinutes(i._d.getUTCMinutes() - i._tzm), i._nextDay && (i._a[3] = 24), i._w && "undefined" != typeof i._w.d && i._w.d !== p && (c(i).weekdayMismatch = !0)
		}
	}

	function we(p) {
		var e, u, m, h, g, f, v, y;
		if (e = p._w, null != e.GG || null != e.W || null != e.E) g = 1, f = 4, u = ye(e.GG, p._a[0], te(Fe(), 1, 4).year), m = ye(e.W, 1), h = ye(e.E, 1), (1 > h || 7 < h) && (y = !0);
		else {
			g = p._locale._week.dow, f = p._locale._week.doy;
			var b = te(Fe(), g, f);
			u = ye(e.gg, p._a[0], b.year), m = ye(e.w, b.week), null == e.d ? null == e.e ? h = g : (h = e.e + g, (0 > e.e || 6 < e.e) && (y = !0)) : (h = e.d, (0 > h || 6 < h) && (y = !0))
		}
		1 > m || m > ae(u, g, f) ? c(p)._overflowWeeks = !0 : null == y ? (v = ee(u, m, h, g, f), p._a[0] = v.year, p._dayOfYear = v.dayOfYear) : c(p)._overflowWeekday = !0
	}

	function xe(i) {
		var e = i._i,
			t = Da.exec(e) || Ta.exec(e),
			a, l, u, m, h, g;
		if (t) {
			for (c(i).iso = !0, a = 0, l = Pa.length; a < l; a++)
				if (Pa[a][1].exec(t[1])) {
					m = Pa[a][0], u = !1 !== Pa[a][2];
					break
				} if (null == m) return void (i._isValid = !1);
			if (t[3]) {
				for (a = 0, l = Ma.length; a < l; a++)
					if (Ma[a][1].exec(t[3])) {
						h = (t[2] || " ") + Ma[a][0];
						break
					} if (null == h) return void (i._isValid = !1)
			}
			if (!u && null != h) return void (i._isValid = !1);
			if (t[4])
				if (Sa.exec(t[4])) g = "Z";
				else return void (i._isValid = !1);
			i._f = m + (h || "") + (g || ""), Ie(i)
		} else i._isValid = !1
	}

	function ke(r, e, t, a, i, n) {
		var o = [De(r), va.indexOf(e), parseInt(t, 10), parseInt(a, 10), parseInt(i, 10)];
		return n && o.push(parseInt(n, 10)), o
	}

	function De(a) {
		var e = parseInt(a, 10);
		return 49 >= e ? 2e3 + e : 999 >= e ? 1900 + e : e
	}

	function Te(t) {
		return t.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
	}

	function Se(o, e, t) {
		if (o) {
			var a = ya.indexOf(o),
				i = new Date(e[0], e[1], e[2]).getDay();
			if (a !== i) return c(t).weekdayMismatch = !0, t._isValid = !1, !1
		}
		return !0
	}

	function Pe(o, e, t) {
		if (o) return Ea[o];
		if (e) return 0;
		var a = parseInt(t, 10),
			i = a % 100;
		return 60 * ((a - i) / 100) + i
	}

	function Me(n) {
		var e = Ia.exec(Te(n._i));
		if (e) {
			var t = ke(e[4], e[3], e[2], e[5], e[6], e[7]);
			if (!Se(e[1], t, n)) return;
			n._a = t, n._tzm = Pe(e[8], e[9], e[10]), n._d = Z.apply(null, n._a), n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm), c(n).rfc2822 = !0
		} else n._isValid = !1
	}

	function Oe(e) {
		var t = Oa.exec(e._i);
		if (null !== t) return void (e._d = new Date(+t[1]));
		if (xe(e), !1 === e._isValid) delete e._isValid;
		else return;
		if (Me(e), !1 === e._isValid) delete e._isValid;
		else return;
		Ce.createFromInputFallback(e)
	}

	function Ie(e) {
		if (e._f === Ce.ISO_8601) return void xe(e);
		if (e._f === Ce.RFC_2822) return void Me(e);
		e._a = [], c(e).empty = !0;
		var t = "" + e._i,
			i = t.length,
			n = 0,
			u, m, h, g, f;
		for (h = O(e._f, e._locale).match(Ft) || [], u = 0; u < h.length; u++) g = h[u], m = (t.match(E(g, e)) || [])[0], m && (f = t.substr(0, t.indexOf(m)), 0 < f.length && c(e).unusedInput.push(f), t = t.slice(t.indexOf(m) + m.length), n += m.length), jt[g] ? (m ? c(e).empty = !1 : c(e).unusedTokens.push(g), z(g, m, e)) : e._strict && !m && c(e).unusedTokens.push(g);
		c(e).charsLeftOver = i - n, 0 < t.length && c(e).unusedInput.push(t), 12 >= e._a[3] && !0 === c(e).bigHour && 0 < e._a[3] && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[3] = Ee(e._locale, e._a[3], e._meridiem), _e(e), ve(e)
	}

	function Ee(n, e, o) {
		var a;
		return null == o ? e : null == n.meridiemHour ? null == n.isPM ? e : (a = n.isPM(o), a && 12 > e && (e += 12), a || 12 !== e || (e = 0), e) : n.meridiemHour(e, o)
	}

	function Ae(d) {
		var e, p, u, m, h;
		if (0 === d._f.length) return c(d).invalidFormat = !0, void (d._d = new Date(NaN));
		for (m = 0; m < d._f.length; m++)(h = 0, e = i({}, d), null != d._useUTC && (e._useUTC = d._useUTC), e._f = d._f[m], Ie(e), !!l(e)) && (h += c(e).charsLeftOver, h += 10 * c(e).unusedTokens.length, c(e).score = h, (null == u || h < u) && (u = h, p = e));
		r(d, p || e)
	}

	function Ne(n) {
		if (!n._d) {
			var e = x(n._i);
			n._a = a([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
				return t && parseInt(t, 10)
			}), _e(n)
		}
	}

	function He(a) {
		var e = new d(ve(We(a)));
		return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
	}

	function We(t) {
		var e = t._i,
			n = t._f;
		return (t._locale = t._locale || fe(t._l), null === e || void 0 === n && "" === e) ? s({
			nullInput: !0
		}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), p(e)) ? new d(ve(e)) : (o(e) ? t._d = e : en(n) ? Ae(t) : n ? Ie(t) : ze(t), l(t) || (t._d = null), t)
	}

	function ze(e) {
		var t = e._i;
		an(t) ? e._d = new Date(Ce.now()) : o(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? Oe(e) : en(t) ? (e._a = a(t.slice(0), function(t) {
			return parseInt(t, 10)
		}), _e(e)) : tn(t) ? Ne(e) : nn(t) ? e._d = new Date(t) : Ce.createFromInputFallback(e)
	}

	function Re(a, i, n, d, c) {
		var r = {};
		return (!0 === n || !1 === n) && (d = n, n = void 0), (tn(a) && t(a) || en(a) && 0 === a.length) && (a = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = c, r._l = n, r._i = a, r._f = i, r._strict = d, He(r)
	}

	function Fe(n, e, t, a) {
		return Re(n, e, t, a, !1)
	}

	function Le(t, e) {
		var i, s;
		if (1 === e.length && en(e[0]) && (e = e[0]), !e.length) return Fe();
		for (i = e[0], s = 1; s < e.length; ++s)(!e[s].isValid() || e[s][t](i)) && (i = e[s]);
		return i
	}

	function Ye(i) {
		for (var e in i)
			if (-1 === ga.call(za, e) || null != i[e] && isNaN(i[e])) return !1;
		for (var t = !1, o = 0; o < za.length; ++o)
			if (i[za[o]]) {
				if (t) return !1;
				parseFloat(i[za[o]]) !== u(i[za[o]]) && (t = !0)
			} return !0
	}

	function je(c) {
		var e = x(c),
			t = e.year || 0,
			a = e.quarter || 0,
			i = e.month || 0,
			n = e.week || e.isoWeek || 0,
			o = e.day || 0,
			s = e.hour || 0,
			r = e.minute || 0,
			l = e.second || 0,
			d = e.millisecond || 0;
		this._isValid = Ye(e), this._milliseconds = +d + 1e3 * l + 6e4 * r + 60 * (60 * (1e3 * s)), this._days = +o + 7 * n, this._months = +i + 3 * a + 12 * t, this._data = {}, this._locale = fe(), this._bubble()
	}

	function qe(t) {
		return t instanceof je
	}

	function Be(t) {
		return 0 > t ? -1 * Math.round(-1 * t) : Math.round(t)
	}

	function $e(a, n) {
		T(a, 0, 0, function() {
			var t = this.utcOffset(),
				i = "+";
			return 0 > t && (t = -t, i = "-"), i + D(~~(t / 60), 2) + n + D(~~t % 60, 2)
		})
	}

	function Ue(s, e) {
		var t = (e || "").match(s);
		if (null === t) return null;
		var a = t[t.length - 1] || [],
			i = (a + "").match(La) || ["-", 0, 0],
			n = +(60 * i[1]) + u(i[2]);
		return 0 === n ? 0 : "+" === i[0] ? n : -n
	}

	function Ve(e, t) {
		var a, s;
		return t._isUTC ? (a = t.clone(), s = (p(e) || o(e) ? e.valueOf() : Fe(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + s), Ce.updateOffset(a, !1), a) : Fe(e).local()
	}

	function Ge(t) {
		return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
	}

	function Ke() {
		return !!this.isValid() && this._isUTC && 0 === this._offset
	}

	function Xe(o, e) {
		var t = o,
			l = null,
			d, c, p;
		return qe(o) ? t = {
			ms: o._milliseconds,
			d: o._days,
			M: o._months
		} : nn(o) ? (t = {}, e ? t[e] = o : t.milliseconds = o) : (l = Ra.exec(o)) ? (d = "-" === l[1] ? -1 : 1, t = {
			y: 0,
			d: u(l[2]) * d,
			h: u(l[3]) * d,
			m: u(l[4]) * d,
			s: u(l[5]) * d,
			ms: u(Be(1e3 * l[6])) * d
		}) : (l = Ya.exec(o)) ? (d = "-" === l[1] ? -1 : 1, t = {
			y: Qe(l[2], d),
			M: Qe(l[3], d),
			w: Qe(l[4], d),
			d: Qe(l[5], d),
			h: Qe(l[6], d),
			m: Qe(l[7], d),
			s: Qe(l[8], d)
		}) : null == t ? t = {} : "object" == typeof t && ("from" in t || "to" in t) && (p = Je(Fe(t.from), Fe(t.to)), t = {}, t.ms = p.milliseconds, t.M = p.months), c = new je(t), qe(o) && on(o, "_locale") && (c._locale = o._locale), c
	}

	function Qe(n, e) {
		var t = n && parseFloat(n.replace(",", "."));
		return (isNaN(t) ? 0 : t) * e
	}

	function Ze(n, e) {
		var t = {};
		return t.months = e.month() - n.month() + 12 * (e.year() - n.year()), n.clone().add(t.months, "M").isAfter(e) && --t.months, t.milliseconds = +e - +n.clone().add(t.months, "M"), t
	}

	function Je(n, e) {
		var i;
		return n.isValid() && e.isValid() ? (e = Ve(e, n), n.isBefore(e) ? i = Ze(n, e) : (i = Ze(e, n), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : {
			milliseconds: 0,
			months: 0
		}
	}

	function et(s, e) {
		return function(t, r) {
			var l, d;
			return null === r || isNaN(+r) || (g(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), d = t, t = r, r = d), t = "string" == typeof t ? +t : t, l = Xe(t, r), tt(this, l, s), this
		}
	}

	function tt(e, t, a, i) {
		var l = t._milliseconds,
			o = Be(t._days),
			s = Be(t._months);
		e.isValid() && (i = null == i || i, s && G(e, Y(e, "Month") + s * a), o && q(e, "Date", Y(e, "Date") + o * a), l && e._d.setTime(e._d.valueOf() + l * a), i && Ce.updateOffset(e, o || s))
	}

	function at(s, e) {
		var t = 12 * (e.year() - s.year()) + (e.month() - s.month()),
			a = s.clone().add(t, "months"),
			i, r;
		return 0 > e - a ? (i = s.clone().add(t - 1, "months"), r = (e - a) / (a - i)) : (i = s.clone().add(t + 1, "months"), r = (e - a) / (i - a)), -(t + r) || 0
	}

	function nt(a) {
		var e;
		return void 0 === a ? this._locale._abbr : (e = fe(a), null != e && (this._locale = e), this)
	}

	function it() {
		return this._locale
	}

	function ot(a, e) {
		return (a % e + e) % e
	}

	function st(n, e, t) {
		return 100 > n && 0 <= n ? new Date(n + 400, e, t) - 126227808e5 : new Date(n, e, t).valueOf()
	}

	function rt(n, e, t) {
		return 100 > n && 0 <= n ? Date.UTC(n + 400, e, t) - 126227808e5 : Date.UTC(n, e, t)
	}

	function lt(a, e) {
		T(0, [a, a.length], 0, e)
	}

	function dt(s, e, r, a, i) {
		var n;
		return null == s ? te(this, a, i).year : (n = ae(s, a, i), e > n && (e = n), ct.call(this, s, e, r, a, i))
	}

	function ct(r, e, t, a, i) {
		var n = ee(r, e, t, a, i),
			o = Z(n.year, 0, n.dayOfYear);
		return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
	}

	function pt(a, e) {
		e[6] = u(1e3 * ("0." + a))
	}

	function ut(t) {
		return t
	}

	function mt(s, e, t, a) {
		var i = fe(),
			n = sn().set(a, e);
		return i[t](n, s)
	}

	function ht(i, o, r) {
		if (nn(i) && (o = i, i = void 0), i = i || "", null != o) return mt(i, o, r, "month");
		var a = [],
			n;
		for (n = 0; 12 > n; n++) a[n] = mt(i, n, r, "month");
		return a
	}

	function gt(i, o, c, p) {
		"boolean" == typeof i ? (nn(o) && (c = o, o = void 0), o = o || "") : (o = i, c = o, i = !1, nn(o) && (c = o, o = void 0), o = o || "");
		var n = fe(),
			s = i ? n._week.dow : 0;
		if (null != c) return mt(o, (c + s) % 7, p, "day");
		var r = [],
			l;
		for (l = 0; 7 > l; l++) r[l] = mt(o, (l + s) % 7, p, "day");
		return r
	}

	function ft(o, e, t, a) {
		var i = Xe(e, t);
		return o._milliseconds += a * i._milliseconds, o._days += a * i._days, o._months += a * i._months, o._bubble()
	}

	function vt(t) {
		return 0 > t ? Math.floor(t) : Math.ceil(t)
	}

	function yt(t) {
		return 4800 * t / 146097
	}

	function bt(t) {
		return 146097 * t / 4800
	}

	function _t(t) {
		return function() {
			return this.as(t)
		}
	}

	function wt(t) {
		return function() {
			return this.isValid() ? this._data[t] : NaN
		}
	}

	function xt(o, e, t, a, i) {
		return i.relativeTime(e || 1, !!t, o, a)
	}

	function Ct(a, e, t) {
		var i = Xe(a).abs(),
			n = xn(i.as("s")),
			o = xn(i.as("m")),
			s = xn(i.as("h")),
			r = xn(i.as("d")),
			l = xn(i.as("M")),
			d = xn(i.as("y")),
			p = n <= Cn.ss && ["s", n] || n < Cn.s && ["ss", n] || 1 >= o && ["m"] || o < Cn.m && ["mm", o] || 1 >= s && ["h"] || s < Cn.h && ["hh", s] || 1 >= r && ["d"] || r < Cn.d && ["dd", r] || 1 >= l && ["M"] || l < Cn.M && ["MM", l] || 1 >= d && ["y"] || ["yy", d];
		return p[2] = e, p[3] = 0 < +a, p[4] = t, xt.apply(null, p)
	}

	function kt(t) {
		return void 0 === t ? xn : "function" == typeof t && (xn = t, !0)
	}

	function Dt(t) {
		return (0 < t) - (0 > t) || +t
	}

	function Tt() {
		if (!this.isValid()) return this.localeData().invalidDate();
		var y = kn(this._milliseconds) / 1e3,
			b = kn(this._days),
			t = kn(this._months),
			_, w, x;
		_ = v(y / 60), w = v(_ / 60), y %= 60, _ %= 60, x = v(t / 12), t %= 12;
		var C = x,
			r = t,
			l = b,
			d = w,
			p = _,
			c = y ? y.toFixed(3).replace(/\.?0+$/, "") : "",
			u = this.asSeconds();
		if (!u) return "P0D";
		var s = 0 > u ? "-" : "",
			m = Dt(this._months) === Dt(u) ? "" : "-",
			h = Dt(this._days) === Dt(u) ? "" : "-",
			g = Dt(this._milliseconds) === Dt(u) ? "" : "-";
		return s + "P" + (C ? m + C + "Y" : "") + (r ? m + r + "M" : "") + (l ? h + l + "D" : "") + (d || p || c ? "T" : "") + (d ? g + d + "H" : "") + (p ? g + p + "M" : "") + (c ? g + c + "S" : "")
	}
	var St, Pt;
	Pt = Array.prototype.some ? Array.prototype.some : function(i) {
		for (var e = Object(this), a = e.length >>> 0, t = 0; t < a; t++)
			if (t in e && i.call(this, e[t], t, e)) return !0;
		return !1
	};
	var Mt = Ce.momentProperties = [],
		Ot = !1,
		It = {};
	Ce.suppressDeprecationWarnings = !1, Ce.deprecationHandler = null;
	var At = Object.keys ? Object.keys : function(n) {
		var e = [],
			t;
		for (t in n) on(n, t) && e.push(t);
		return e
	},
		Ht = /\d{1,2}/,
		zt = {},
		Rt = {},
		Ft = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		Lt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		Yt = {},
		jt = {},
		qt = /\d/,
		Bt = /\d\d/,
		$t = /\d{3}/,
		Ut = /\d{4}/,
		Vt = /[+-]?\d{6}/,
		Gt = /\d\d?/,
		Kt = /\d\d\d\d?/,
		Xt = /\d\d\d\d\d\d?/,
		Qt = /\d{1,3}/,
		Zt = /\d{1,4}/,
		Jt = /[+-]?\d{1,6}/,
		ea = /\d+/,
		ta = /[+-]?\d+/,
		aa = /Z|[+-]\d\d:?\d\d/gi,
		na = /Z|[+-]\d\d(?::?\d\d)?/gi,
		ia = /[+-]?\d+(\.\d{1,3})?/,
		oa = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
		sa = {},
		ra = {},
		la = 0,
		da = 1,
		ca = 2,
		pa = 3,
		ua = 4,
		ma = 5;
	T("Y", 0, 0, function() {
		var t = this.year();
		return 9999 >= t ? "" + t : "+" + t
	}), T(0, ["YY", 2], 0, function() {
		return this.year() % 100
	}), T(0, ["YYYY", 4], 0, "year"), T(0, ["YYYYY", 5], 0, "year"), T(0, ["YYYYYY", 6, !0], 0, "year"), _("year", "y"), C("year", 1), I("Y", ta), I("YY", Gt, Bt), I("YYYY", Zt, Ut), I("YYYYY", Jt, Vt), I("YYYYYY", Jt, Vt), H(["YYYYY", "YYYYYY"], la), H("YYYY", function(e, t) {
		t[la] = 2 === e.length ? Ce.parseTwoDigitYear(e) : u(e)
	}), H("YY", function(e, t) {
		t[la] = Ce.parseTwoDigitYear(e)
	}), H("Y", function(a, e) {
		e[la] = parseInt(a, 10)
	}), Ce.parseTwoDigitYear = function(t) {
		return u(t) + (68 < u(t) ? 1900 : 2e3)
	};
	var ha = L("FullYear", !0),
		ga;
	ga = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
		var e;
		for (e = 0; e < this.length; ++e)
			if (this[e] === a) return e;
		return -1
	}, T("M", ["MM", 2], "Mo", function() {
		return this.month() + 1
	}), T("MMM", 0, 0, function(t) {
		return this.localeData().monthsShort(this, t)
	}), T("MMMM", 0, 0, function(t) {
		return this.localeData().months(this, t)
	}), _("month", "M"), C("month", 8), I("M", Gt), I("MM", Gt, Bt), I("MMM", function(a, e) {
		return e.monthsShortRegex(a)
	}), I("MMMM", function(a, e) {
		return e.monthsRegex(a)
	}), H(["M", "MM"], function(a, e) {
		e[da] = u(a) - 1
	}), H(["MMM", "MMMM"], function(o, e, t, a) {
		var i = t._locale.monthsParse(o, a, t._strict);
		null == i ? c(t).invalidMonth = o : e[da] = i
	});
	var fa = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
		va = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	T("w", ["ww", 2], "wo", "week"), T("W", ["WW", 2], "Wo", "isoWeek"), _("week", "w"), _("isoWeek", "W"), C("week", 5), C("isoWeek", 5), I("w", Gt), I("ww", Gt, Bt), I("W", Gt), I("WW", Gt, Bt), W(["w", "ww", "W", "WW"], function(n, e, t, a) {
		e[a.substr(0, 1)] = u(n)
	}), T("d", 0, "do", "day"), T("dd", 0, 0, function(t) {
		return this.localeData().weekdaysMin(this, t)
	}), T("ddd", 0, 0, function(t) {
		return this.localeData().weekdaysShort(this, t)
	}), T("dddd", 0, 0, function(t) {
		return this.localeData().weekdays(this, t)
	}), T("e", 0, 0, "weekday"), T("E", 0, 0, "isoWeekday"), _("day", "d"), _("weekday", "e"), _("isoWeekday", "E"), C("day", 11), C("weekday", 11), C("isoWeekday", 11), I("d", Gt), I("e", Gt), I("E", Gt), I("dd", function(a, e) {
		return e.weekdaysMinRegex(a)
	}), I("ddd", function(a, e) {
		return e.weekdaysShortRegex(a)
	}), I("dddd", function(a, e) {
		return e.weekdaysRegex(a)
	}), W(["dd", "ddd", "dddd"], function(o, e, t, a) {
		var i = t._locale.weekdaysParse(o, a, t._strict);
		null == i ? c(t).invalidWeekday = o : e.d = i
	}), W(["d", "e", "E"], function(n, e, t, a) {
		e[a] = u(n)
	});
	var ya = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	T("H", ["HH", 2], 0, "hour"), T("h", ["hh", 2], 0, le), T("k", ["kk", 2], 0, function() {
		return this.hours() || 24
	}), T("hmm", 0, 0, function() {
		return "" + le.apply(this) + D(this.minutes(), 2)
	}), T("hmmss", 0, 0, function() {
		return "" + le.apply(this) + D(this.minutes(), 2) + D(this.seconds(), 2)
	}), T("Hmm", 0, 0, function() {
		return "" + this.hours() + D(this.minutes(), 2)
	}), T("Hmmss", 0, 0, function() {
		return "" + this.hours() + D(this.minutes(), 2) + D(this.seconds(), 2)
	}), de("a", !0), de("A", !1), _("hour", "h"), C("hour", 13), I("a", ce), I("A", ce), I("H", Gt), I("h", Gt), I("k", Gt), I("HH", Gt, Bt), I("hh", Gt, Bt), I("kk", Gt, Bt), I("hmm", Kt), I("hmmss", Xt), I("Hmm", Kt), I("Hmmss", Xt), H(["H", "HH"], pa), H(["k", "kk"], function(n, e) {
		var t = u(n);
		e[pa] = 24 === t ? 0 : t
	}), H(["a", "A"], function(n, e, t) {
		t._isPm = t._locale.isPM(n), t._meridiem = n
	}), H(["h", "hh"], function(n, e, t) {
		e[pa] = u(n), c(t).bigHour = !0
	}), H("hmm", function(n, e, t) {
		var a = n.length - 2;
		e[pa] = u(n.substr(0, a)), e[ua] = u(n.substr(a)), c(t).bigHour = !0
	}), H("hmmss", function(o, e, t) {
		var a = o.length - 4,
			i = o.length - 2;
		e[pa] = u(o.substr(0, a)), e[ua] = u(o.substr(a, 2)), e[ma] = u(o.substr(i)), c(t).bigHour = !0
	}), H("Hmm", function(n, e) {
		var t = n.length - 2;
		e[pa] = u(n.substr(0, t)), e[ua] = u(n.substr(t))
	}), H("Hmmss", function(n, e) {
		var t = n.length - 4,
			a = n.length - 2;
		e[pa] = u(n.substr(0, t)), e[ua] = u(n.substr(t, 2)), e[ma] = u(n.substr(a))
	});
	var _a = /[ap]\.?m?\.?/i,
		wa = L("Hours", !0),
		xa = {
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			longDateFormat: {
				LTS: "h:mm:ss A",
				LT: "h:mm A",
				L: "MM/DD/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY h:mm A",
				LLLL: "dddd, MMMM D, YYYY h:mm A"
			},
			invalidDate: "Invalid date",
			ordinal: "%d",
			dayOfMonthOrdinalParse: Ht,
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: va,
			week: {
				dow: 0,
				doy: 6
			},
			weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekdaysShort: ya,
			meridiemParse: _a
		},
		Ca = {},
		ka = {},
		Da = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		Ta = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		Sa = /Z|[+-]\d\d(?::?\d\d)?/,
		Pa = [
			["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
			["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
			["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
			["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
			["YYYY-DDD", /\d{4}-\d{3}/],
			["YYYY-MM", /\d{4}-\d\d/, !1],
			["YYYYYYMMDD", /[+-]\d{10}/],
			["YYYYMMDD", /\d{8}/],
			["GGGG[W]WWE", /\d{4}W\d{3}/],
			["GGGG[W]WW", /\d{4}W\d{2}/, !1],
			["YYYYDDD", /\d{7}/]
		],
		Ma = [
			["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
			["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
			["HH:mm:ss", /\d\d:\d\d:\d\d/],
			["HH:mm", /\d\d:\d\d/],
			["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
			["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
			["HHmmss", /\d\d\d\d\d\d/],
			["HHmm", /\d\d\d\d/],
			["HH", /\d\d/]
		],
		Oa = /^\/?Date\((\-?\d+)/i,
		Ia = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
		Ea = {
			UT: 0,
			GMT: 0,
			EDT: -240,
			EST: -300,
			CDT: -300,
			CST: -360,
			MDT: -360,
			MST: -420,
			PDT: -420,
			PST: -480
		},
		Aa;
	Ce.createFromInputFallback = h("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
		t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
	}), Ce.ISO_8601 = function() { }, Ce.RFC_2822 = function() { };
	var Na = h("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
		var t = Fe.apply(null, arguments);
		return this.isValid() && t.isValid() ? t < this ? this : t : s()
	}),
		Wa = h("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
			var t = Fe.apply(null, arguments);
			return this.isValid() && t.isValid() ? t > this ? this : t : s()
		}),
		za = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
	$e("Z", ":"), $e("ZZ", ""), I("Z", na), I("ZZ", na), H(["Z", "ZZ"], function(n, e, t) {
		t._useUTC = !0, t._tzm = Ue(na, n)
	});
	var La = /([\+\-]|\d\d)/gi;
	Ce.updateOffset = function() { };
	var Ra = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
		Ya = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
	Xe.fn = je.prototype, Xe.invalid = function() {
		return Xe(NaN)
	};
	var Fa = et(1, "add"),
		qa = et(-1, "subtract");
	Ce.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", Ce.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
	var ja = h("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
		return void 0 === t ? this.localeData() : this.locale(t)
	});
	T(0, ["gg", 2], 0, function() {
		return this.weekYear() % 100
	}), T(0, ["GG", 2], 0, function() {
		return this.isoWeekYear() % 100
	}), lt("gggg", "weekYear"), lt("ggggg", "weekYear"), lt("GGGG", "isoWeekYear"), lt("GGGGG", "isoWeekYear"), _("weekYear", "gg"), _("isoWeekYear", "GG"), C("weekYear", 1), C("isoWeekYear", 1), I("G", ta), I("g", ta), I("GG", Gt, Bt), I("gg", Gt, Bt), I("GGGG", Zt, Ut), I("gggg", Zt, Ut), I("GGGGG", Jt, Vt), I("ggggg", Jt, Vt), W(["gggg", "ggggg", "GGGG", "GGGGG"], function(n, e, t, a) {
		e[a.substr(0, 2)] = u(n)
	}), W(["gg", "GG"], function(e, t, a, i) {
		t[i] = Ce.parseTwoDigitYear(e)
	}), T("Q", 0, "Qo", "quarter"), _("quarter", "Q"), C("quarter", 7), I("Q", qt), H("Q", function(a, e) {
		e[da] = 3 * (u(a) - 1)
	}), T("D", ["DD", 2], "Do", "date"), _("date", "D"), C("date", 9), I("D", Gt), I("DD", Gt, Bt), I("Do", function(a, e) {
		return a ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
	}), H(["D", "DD"], ca), H("Do", function(a, e) {
		e[ca] = u(a.match(Gt)[0])
	});
	var Ba = L("Date", !0);
	T("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), _("dayOfYear", "DDD"), C("dayOfYear", 4), I("DDD", Qt), I("DDDD", $t), H(["DDD", "DDDD"], function(n, e, t) {
		t._dayOfYear = u(n)
	}), T("m", ["mm", 2], 0, "minute"), _("minute", "m"), C("minute", 14), I("m", Gt), I("mm", Gt, Bt), H(["m", "mm"], ua);
	var $a = L("Minutes", !1);
	T("s", ["ss", 2], 0, "second"), _("second", "s"), C("second", 15), I("s", Gt), I("ss", Gt, Bt), H(["s", "ss"], ma);
	var Ua = L("Seconds", !1);
	T("S", 0, 0, function() {
		return ~~(this.millisecond() / 100)
	}), T(0, ["SS", 2], 0, function() {
		return ~~(this.millisecond() / 10)
	}), T(0, ["SSS", 3], 0, "millisecond"), T(0, ["SSSS", 4], 0, function() {
		return 10 * this.millisecond()
	}), T(0, ["SSSSS", 5], 0, function() {
		return 100 * this.millisecond()
	}), T(0, ["SSSSSS", 6], 0, function() {
		return 1e3 * this.millisecond()
	}), T(0, ["SSSSSSS", 7], 0, function() {
		return 1e4 * this.millisecond()
	}), T(0, ["SSSSSSSS", 8], 0, function() {
		return 1e5 * this.millisecond()
	}), T(0, ["SSSSSSSSS", 9], 0, function() {
		return 1e6 * this.millisecond()
	}), _("millisecond", "ms"), C("millisecond", 16), I("S", Qt, qt), I("SS", Qt, Bt), I("SSS", Qt, $t);
	var Va;
	for (Va = "SSSS"; 9 >= Va.length; Va += "S") I(Va, ea);
	for (Va = "S"; 9 >= Va.length; Va += "S") H(Va, pt);
	var rn = L("Milliseconds", !1);
	T("z", 0, 0, "zoneAbbr"), T("zz", 0, 0, "zoneName");
	var Ka = d.prototype;
	Ka.add = Fa, Ka.calendar = function(e, t) {
		var a = e || Fe(),
			i = Ve(a, this).startOf("day"),
			n = Ce.calendarFormat(this, i) || "sameElse",
			o = t && (f(t[n]) ? t[n].call(this, a) : t[n]);
		return this.format(o || this.localeData().calendar(n, this, Fe(a)))
	}, Ka.clone = function() {
		return new d(this)
	}, Ka.diff = function(s, e, r) {
		var a, l, d;
		return this.isValid() ? (a = Ve(s, this), !a.isValid()) ? NaN : (l = 6e4 * (a.utcOffset() - this.utcOffset()), e = w(e), d = "year" === e ? at(this, a) / 12 : "month" === e ? at(this, a) : "quarter" === e ? at(this, a) / 3 : "second" === e ? (this - a) / 1e3 : "minute" === e ? (this - a) / 6e4 : "hour" === e ? (this - a) / 36e5 : "day" === e ? (this - a - l) / 864e5 : "week" === e ? (this - a - l) / 6048e5 : this - a, r ? d : v(d)) : NaN
	}, Ka.endOf = function(e) {
		var n;
		if (e = w(e), void 0 === e || "millisecond" === e || !this.isValid()) return this;
		var o = this._isUTC ? rt : st;
		return "year" === e ? n = o(this.year() + 1, 0, 1) - 1 : "quarter" === e ? n = o(this.year(), this.month() - this.month() % 3 + 3, 1) - 1 : "month" === e ? n = o(this.year(), this.month() + 1, 1) - 1 : "week" === e ? n = o(this.year(), this.month(), this.date() - this.weekday() + 7) - 1 : "isoWeek" === e ? n = o(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1 : "day" === e || "date" === e ? n = o(this.year(), this.month(), this.date() + 1) - 1 : "hour" === e ? (n = this._d.valueOf(), n += 36e5 - ot(n + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1) : "minute" === e ? (n = this._d.valueOf(), n += 6e4 - ot(n, 6e4) - 1) : "second" === e ? (n = this._d.valueOf(), n += 1e3 - ot(n, 1e3) - 1) : void 0, this._d.setTime(n), Ce.updateOffset(this, !0), this
	}, Ka.format = function(e) {
		e || (e = this.isUtc() ? Ce.defaultFormatUtc : Ce.defaultFormat);
		var n = M(this, e);
		return this.localeData().postformat(n)
	}, Ka.from = function(a, e) {
		return this.isValid() && (p(a) && a.isValid() || Fe(a).isValid()) ? Xe({
			to: this,
			from: a
		}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
	}, Ka.fromNow = function(t) {
		return this.from(Fe(), t)
	}, Ka.to = function(a, e) {
		return this.isValid() && (p(a) && a.isValid() || Fe(a).isValid()) ? Xe({
			from: this,
			to: a
		}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
	}, Ka.toNow = function(t) {
		return this.to(Fe(), t)
	}, Ka.get = function(t) {
		return t = w(t), f(this[t]) ? this[t]() : this
	}, Ka.invalidAt = function() {
		return c(this).overflow
	}, Ka.isAfter = function(n, e) {
		var i = p(n) ? n : Fe(n);
		return !!(this.isValid() && i.isValid()) && (e = w(e) || "millisecond", "millisecond" === e ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
	}, Ka.isBefore = function(n, e) {
		var i = p(n) ? n : Fe(n);
		return !!(this.isValid() && i.isValid()) && (e = w(e) || "millisecond", "millisecond" === e ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
	}, Ka.isBetween = function(s, e, t, a) {
		var r = p(s) ? s : Fe(s),
			n = p(e) ? e : Fe(e);
		return !!(this.isValid() && r.isValid() && n.isValid()) && (a = a || "()", ("(" === a[0] ? this.isAfter(r, t) : !this.isBefore(r, t)) && (")" === a[1] ? this.isBefore(n, t) : !this.isAfter(n, t)))
	}, Ka.isSame = function(n, e) {
		var o = p(n) ? n : Fe(n),
			a;
		return !!(this.isValid() && o.isValid()) && (e = w(e) || "millisecond", "millisecond" === e ? this.valueOf() === o.valueOf() : (a = o.valueOf(), this.clone().startOf(e).valueOf() <= a && a <= this.clone().endOf(e).valueOf()))
	}, Ka.isSameOrAfter = function(a, e) {
		return this.isSame(a, e) || this.isAfter(a, e)
	}, Ka.isSameOrBefore = function(a, e) {
		return this.isSame(a, e) || this.isBefore(a, e)
	}, Ka.isValid = function() {
		return l(this)
	}, Ka.lang = ja, Ka.locale = nt, Ka.localeData = it, Ka.max = Wa, Ka.min = Na, Ka.parsingFlags = function() {
		return r({}, c(this))
	}, Ka.set = function(i, o) {
		if ("object" == typeof i) {
			i = x(i);
			for (var t = k(i), a = 0; a < t.length; a++) this[t[a].unit](i[t[a].unit])
		} else if (i = w(i), f(this[i])) return this[i](o);
		return this
	}, Ka.startOf = function(e) {
		var n;
		if (e = w(e), void 0 === e || "millisecond" === e || !this.isValid()) return this;
		var o = this._isUTC ? rt : st;
		return "year" === e ? n = o(this.year(), 0, 1) : "quarter" === e ? n = o(this.year(), this.month() - this.month() % 3, 1) : "month" === e ? n = o(this.year(), this.month(), 1) : "week" === e ? n = o(this.year(), this.month(), this.date() - this.weekday()) : "isoWeek" === e ? n = o(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)) : "day" === e || "date" === e ? n = o(this.year(), this.month(), this.date()) : "hour" === e ? (n = this._d.valueOf(), n -= ot(n + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5)) : "minute" === e ? (n = this._d.valueOf(), n -= ot(n, 6e4)) : "second" === e ? (n = this._d.valueOf(), n -= ot(n, 1e3)) : void 0, this._d.setTime(n), Ce.updateOffset(this, !0), this
	}, Ka.subtract = qa, Ka.toArray = function() {
		var t = this;
		return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
	}, Ka.toObject = function() {
		var t = this;
		return {
			years: t.year(),
			months: t.month(),
			date: t.date(),
			hours: t.hours(),
			minutes: t.minutes(),
			seconds: t.seconds(),
			milliseconds: t.milliseconds()
		}
	}, Ka.toDate = function() {
		return new Date(this.valueOf())
	}, Ka.toISOString = function(n) {
		if (!this.isValid()) return null;
		var e = !0 !== n,
			t = e ? this.clone().utc() : this;
		return 0 > t.year() || 9999 < t.year() ? M(t, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : f(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 1e3 * (60 * this.utcOffset())).toISOString().replace("Z", M(t, "Z")) : M(t, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
	}, Ka.inspect = function() {
		if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
		var o = "moment",
			s = "";
		this.isLocal() || (o = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", s = "Z");
		var r = "[" + o + "(\"]",
			a = 0 <= this.year() && 9999 >= this.year() ? "YYYY" : "YYYYYY",
			i = s + "[\")]";
		return this.format(r + a + "-MM-DD[T]HH:mm:ss.SSS" + i)
	}, Ka.toJSON = function() {
		return this.isValid() ? this.toISOString() : null
	}, Ka.toString = function() {
		return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	}, Ka.unix = function() {
		return Math.floor(this.valueOf() / 1e3)
	}, Ka.valueOf = function() {
		return this._d.valueOf() - 6e4 * (this._offset || 0)
	}, Ka.creationData = function() {
		return {
			input: this._i,
			format: this._f,
			locale: this._locale,
			isUTC: this._isUTC,
			strict: this._strict
		}
	}, Ka.year = ha, Ka.isLeapYear = function() {
		return F(this.year())
	}, Ka.weekYear = function(t) {
		return dt.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
	}, Ka.isoWeekYear = function(t) {
		return dt.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
	}, Ka.quarter = Ka.quarters = function(t) {
		return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
	}, Ka.month = K, Ka.daysInMonth = function() {
		return U(this.year(), this.month())
	}, Ka.week = Ka.weeks = function(a) {
		var e = this.localeData().week(this);
		return null == a ? e : this.add(7 * (a - e), "d")
	}, Ka.isoWeek = Ka.isoWeeks = function(a) {
		var e = te(this, 1, 4).week;
		return null == a ? e : this.add(7 * (a - e), "d")
	}, Ka.weeksInYear = function() {
		var t = this.localeData()._week;
		return ae(this.year(), t.dow, t.doy)
	}, Ka.isoWeeksInYear = function() {
		return ae(this.year(), 1, 4)
	}, Ka.date = Ba, Ka.day = Ka.days = function(a) {
		if (!this.isValid()) return null == a ? NaN : this;
		var n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null == a ? n : (a = ne(a, this.localeData()), this.add(a - n, "d"))
	}, Ka.weekday = function(a) {
		if (!this.isValid()) return null == a ? NaN : this;
		var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == a ? e : this.add(a - e, "d")
	}, Ka.isoWeekday = function(a) {
		if (!this.isValid()) return null == a ? NaN : this;
		if (null != a) {
			var e = ie(a, this.localeData());
			return this.day(this.day() % 7 ? e : e - 7)
		}
		return this.day() || 7
	}, Ka.dayOfYear = function(a) {
		var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
		return null == a ? e : this.add(a - e, "d")
	}, Ka.hour = Ka.hours = wa, Ka.minute = Ka.minutes = $a, Ka.second = Ka.seconds = Ua, Ka.millisecond = Ka.milliseconds = rn, Ka.utcOffset = function(e, s, a) {
		var i = this._offset || 0,
			n;
		if (!this.isValid()) return null == e ? NaN : this;
		if (null != e) {
			if ("string" != typeof e) 16 > Math.abs(e) && !a && (e *= 60);
			else if (e = Ue(na, e), null === e) return this;
			return !this._isUTC && s && (n = Ge(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), i !== e && (!s || this._changeInProgress ? tt(this, Xe(e - i, "m"), 1, !1) : !this._changeInProgress && (this._changeInProgress = !0, Ce.updateOffset(this, !0), this._changeInProgress = null)), this
		}
		return this._isUTC ? i : Ge(this)
	}, Ka.utc = function(t) {
		return this.utcOffset(0, t)
	}, Ka.local = function(t) {
		return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ge(this), "m")), this
	}, Ka.parseZone = function() {
		if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
		else if ("string" == typeof this._i) {
			var t = Ue(aa, this._i);
			null == t ? this.utcOffset(0, !0) : this.utcOffset(t)
		}
		return this
	}, Ka.hasAlignedHourOffset = function(t) {
		return !!this.isValid() && (t = t ? Fe(t).utcOffset() : 0, 0 == (this.utcOffset() - t) % 60)
	}, Ka.isDST = function() {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	}, Ka.isLocal = function() {
		return !!this.isValid() && !this._isUTC
	}, Ka.isUtcOffset = function() {
		return !!this.isValid() && this._isUTC
	}, Ka.isUtc = Ke, Ka.isUTC = Ke, Ka.zoneAbbr = function() {
		return this._isUTC ? "UTC" : ""
	}, Ka.zoneName = function() {
		return this._isUTC ? "Coordinated Universal Time" : ""
	}, Ka.dates = h("dates accessor is deprecated. Use date instead.", Ba), Ka.months = h("months accessor is deprecated. Use month instead", K), Ka.years = h("years accessor is deprecated. Use year instead", ha), Ka.zone = h("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(a, n) {
		return null == a ? -this.utcOffset() : ("string" != typeof a && (a = -a), this.utcOffset(a, n), this)
	}), Ka.isDSTShifted = h("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
		if (!an(this._isDSTShifted)) return this._isDSTShifted;
		var a = {};
		if (i(a, this), a = We(a), a._a) {
			var n = a._isUTC ? sn(a._a) : Fe(a._a);
			this._isDSTShifted = this.isValid() && 0 < m(a._a, n.toArray())
		} else this._isDSTShifted = !1;
		return this._isDSTShifted
	});
	var Xa = b.prototype;
	Xa.calendar = function(n, e, t) {
		var a = this._calendar[n] || this._calendar.sameElse;
		return f(a) ? a.call(e, t) : a
	}, Xa.longDateFormat = function(n) {
		var e = this._longDateFormat[n],
			t = this._longDateFormat[n.toUpperCase()];
		return e || !t ? e : (this._longDateFormat[n] = t.replace(/MMMM|MM|DD|dddd/g, function(t) {
			return t.slice(1)
		}), this._longDateFormat[n])
	}, Xa.invalidDate = function() {
		return this._invalidDate
	}, Xa.ordinal = function(t) {
		return this._ordinal.replace("%d", t)
	}, Xa.preparse = ut, Xa.postformat = ut, Xa.relativeTime = function(o, e, t, a) {
		var i = this._relativeTime[t];
		return f(i) ? i(o, e, t, a) : i.replace(/%d/i, o)
	}, Xa.pastFuture = function(n, e) {
		var t = this._relativeTime[0 < n ? "future" : "past"];
		return f(t) ? t(e) : t.replace(/%s/i, e)
	}, Xa.set = function(n) {
		var e, i;
		for (i in n) e = n[i], f(e) ? this[i] = e : this["_" + i] = e;
		this._config = n, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
	}, Xa.months = function(t, e) {
		return t ? en(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || fa).test(e) ? "format" : "standalone"][t.month()] : en(this._months) ? this._months : this._months.standalone
	}, Xa.monthsShort = function(t, e) {
		return t ? en(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[fa.test(e) ? "format" : "standalone"][t.month()] : en(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
	}, Xa.monthsParse = function(i, e, t) {
		var a, r, l;
		if (this._monthsParseExact) return V.call(this, i, e, t);
		for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; 12 > a; a++) {
			if (r = sn([2e3, a]), t && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), t || this._monthsParse[a] || (l = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(l.replace(".", ""), "i")), t && "MMMM" === e && this._longMonthsParse[a].test(i)) return a;
			if (t && "MMM" === e && this._shortMonthsParse[a].test(i)) return a;
			if (!t && this._monthsParse[a].test(i)) return a
		}
	}, Xa.monthsRegex = function(t) {
		return this._monthsParseExact ? (on(this, "_monthsRegex") || X.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (on(this, "_monthsRegex") || (this._monthsRegex = oa), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
	}, Xa.monthsShortRegex = function(t) {
		return this._monthsParseExact ? (on(this, "_monthsRegex") || X.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (on(this, "_monthsShortRegex") || (this._monthsShortRegex = oa), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
	}, Xa.week = function(t) {
		return te(t, this._week.dow, this._week.doy).week
	}, Xa.firstDayOfYear = function() {
		return this._week.doy
	}, Xa.firstDayOfWeek = function() {
		return this._week.dow
	}, Xa.weekdays = function(t, e) {
		var a = en(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
		return !0 === t ? oe(a, this._week.dow) : t ? a[t.day()] : a
	}, Xa.weekdaysMin = function(t) {
		return !0 === t ? oe(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
	}, Xa.weekdaysShort = function(t) {
		return !0 === t ? oe(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
	}, Xa.weekdaysParse = function(i, e, t) {
		var a, r, l;
		if (this._weekdaysParseExact) return se.call(this, i, e, t);
		for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; 7 > a; a++) {
			if (r = sn([2e3, 1]).day(a), t && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[a] || (l = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(l.replace(".", ""), "i")), t && "dddd" === e && this._fullWeekdaysParse[a].test(i)) return a;
			if (t && "ddd" === e && this._shortWeekdaysParse[a].test(i)) return a;
			if (t && "dd" === e && this._minWeekdaysParse[a].test(i)) return a;
			if (!t && this._weekdaysParse[a].test(i)) return a
		}
	}, Xa.weekdaysRegex = function(t) {
		return this._weekdaysParseExact ? (on(this, "_weekdaysRegex") || re.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (on(this, "_weekdaysRegex") || (this._weekdaysRegex = oa), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
	}, Xa.weekdaysShortRegex = function(t) {
		return this._weekdaysParseExact ? (on(this, "_weekdaysRegex") || re.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (on(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = oa), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
	}, Xa.weekdaysMinRegex = function(t) {
		return this._weekdaysParseExact ? (on(this, "_weekdaysRegex") || re.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (on(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = oa), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
	}, Xa.isPM = function(t) {
		return "p" === (t + "").toLowerCase().charAt(0)
	}, Xa.meridiem = function(n, e, t) {
		return 11 < n ? t ? "pm" : "PM" : t ? "am" : "AM"
	}, he("en", {
		dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal: function(n) {
			var e = n % 10,
				t = 1 === u(n % 100 / 10) ? "th" : 1 == e ? "st" : 2 == e ? "nd" : 3 == e ? "rd" : "th";
			return n + t
		}
	}), Ce.lang = h("moment.lang is deprecated. Use moment.locale instead.", he), Ce.langData = h("moment.langData is deprecated. Use moment.localeData instead.", fe);
	var Qa = Math.abs,
		Za = _t("ms"),
		Ja = _t("s"),
		ln = _t("m"),
		dn = _t("h"),
		cn = _t("d"),
		pn = _t("w"),
		un = _t("M"),
		mn = _t("Q"),
		hn = _t("y"),
		gn = wt("milliseconds"),
		fn = wt("seconds"),
		vn = wt("minutes"),
		yn = wt("hours"),
		bn = wt("days"),
		_n = wt("months"),
		wn = wt("years"),
		xn = Math.round,
		Cn = {
			ss: 44,
			s: 45,
			m: 45,
			h: 22,
			d: 26,
			M: 11
		},
		kn = Math.abs,
		Dn = je.prototype;
	return Dn.isValid = function() {
		return this._isValid
	}, Dn.abs = function() {
		var t = this._data;
		return this._milliseconds = Qa(this._milliseconds), this._days = Qa(this._days), this._months = Qa(this._months), t.milliseconds = Qa(t.milliseconds), t.seconds = Qa(t.seconds), t.minutes = Qa(t.minutes), t.hours = Qa(t.hours), t.months = Qa(t.months), t.years = Qa(t.years), this
	}, Dn.add = function(a, e) {
		return ft(this, a, e, 1)
	}, Dn.subtract = function(a, e) {
		return ft(this, a, e, -1)
	}, Dn.as = function(n) {
		if (!this.isValid()) return NaN;
		var o = this._milliseconds,
			t, s;
		if (n = w(n), "month" === n || "quarter" === n || "year" === n) switch (t = this._days + o / 864e5, s = this._months + yt(t), n) {
			case "month":
				return s;
			case "quarter":
				return s / 3;
			case "year":
				return s / 12;
		} else switch (t = this._days + Math.round(bt(this._months)), n) {
			case "week":
				return t / 7 + o / 6048e5;
			case "day":
				return t + o / 864e5;
			case "hour":
				return 24 * t + o / 36e5;
			case "minute":
				return 1440 * t + o / 6e4;
			case "second":
				return 86400 * t + o / 1e3;
			case "millisecond":
				return Math.floor(864e5 * t) + o;
			default:
				throw new Error("Unknown unit " + n);
		}
	}, Dn.asMilliseconds = Za, Dn.asSeconds = Ja, Dn.asMinutes = ln, Dn.asHours = dn, Dn.asDays = cn, Dn.asWeeks = pn, Dn.asMonths = un, Dn.asQuarters = mn, Dn.asYears = hn, Dn.valueOf = function() {
		return this.isValid() ? this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * u(this._months / 12) : NaN
	}, Dn._bubble = function() {
		var d = this._milliseconds,
			c = this._days,
			p = this._months,
			u = this._data,
			i, m, h, g, f;
		return 0 <= d && 0 <= c && 0 <= p || 0 >= d && 0 >= c && 0 >= p || (d += 864e5 * vt(bt(p) + c), c = 0, p = 0), u.milliseconds = d % 1e3, i = v(d / 1e3), u.seconds = i % 60, m = v(i / 60), u.minutes = m % 60, h = v(m / 60), u.hours = h % 24, c += v(h / 24), f = v(yt(c)), p += f, c -= vt(bt(f)), g = v(p / 12), p %= 12, u.days = c, u.months = p, u.years = g, this
	}, Dn.clone = function() {
		return Xe(this)
	}, Dn.get = function(t) {
		return t = w(t), this.isValid() ? this[t + "s"]() : NaN
	}, Dn.milliseconds = gn, Dn.seconds = fn, Dn.minutes = vn, Dn.hours = yn, Dn.days = bn, Dn.weeks = function() {
		return v(this.days() / 7)
	}, Dn.months = _n, Dn.years = wn, Dn.humanize = function(n) {
		if (!this.isValid()) return this.localeData().invalidDate();
		var e = this.localeData(),
			t = Ct(this, !n, e);
		return n && (t = e.pastFuture(+this, t)), e.postformat(t)
	}, Dn.toISOString = Tt, Dn.toString = Tt, Dn.toJSON = Tt, Dn.locale = nt, Dn.localeData = it, Dn.toIsoString = h("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Tt), Dn.lang = ja, T("X", 0, 0, "unix"), T("x", 0, 0, "valueOf"), I("x", ta), I("X", ia), H("X", function(n, e, t) {
		t._d = new Date(1e3 * parseFloat(n, 10))
	}), H("x", function(n, e, t) {
		t._d = new Date(u(n))
	}), Ce.version = "2.24.0",
		function(t) {
			St = t
		}(Fe), Ce.fn = Ka, Ce.min = function() {
			var t = [].slice.call(arguments, 0);
			return Le("isBefore", t)
		}, Ce.max = function() {
			var t = [].slice.call(arguments, 0);
			return Le("isAfter", t)
		}, Ce.now = function() {
			return Date.now ? Date.now() : +new Date
		}, Ce.utc = sn, Ce.unix = function(t) {
			return Fe(1e3 * t)
		}, Ce.months = function(a, e) {
			return ht(a, e, "months")
		}, Ce.isDate = o, Ce.locale = he, Ce.invalid = s, Ce.duration = Xe, Ce.isMoment = p, Ce.weekdays = function(n, e, t) {
			return gt(n, e, t, "weekdays")
		}, Ce.parseZone = function() {
			return Fe.apply(null, arguments).parseZone()
		}, Ce.localeData = fe, Ce.isDuration = qe, Ce.monthsShort = function(a, e) {
			return ht(a, e, "monthsShort")
		}, Ce.weekdaysMin = function(n, e, t) {
			return gt(n, e, t, "weekdaysMin")
		}, Ce.defineLocale = ge, Ce.updateLocale = function(o, e) {
			if (null != e) {
				var s = xa,
					r, l;
				l = me(o), null != l && (s = l._config), e = y(s, e), r = new b(e), r.parentLocale = Ca[o], Ca[o] = r, he(o)
			} else null != Ca[o] && (null == Ca[o].parentLocale ? null != Ca[o] && delete Ca[o] : Ca[o] = Ca[o].parentLocale);
			return Ca[o]
		}, Ce.locales = function() {
			return At(Ca)
		}, Ce.weekdaysShort = function(n, e, t) {
			return gt(n, e, t, "weekdaysShort")
		}, Ce.normalizeUnits = w, Ce.relativeTimeRounding = kt, Ce.relativeTimeThreshold = function(a, e) {
			return void 0 !== Cn[a] && (void 0 === e ? Cn[a] : (Cn[a] = e, "s" === a && (Cn.ss = e - 1), !0))
		}, Ce.calendarFormat = function(n, e) {
			var t = n.diff(e, "days", !0);
			return -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse"
		}, Ce.prototype = Ka, Ce.HTML5_FMT = {
			DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
			DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
			DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
			DATE: "YYYY-MM-DD",
			TIME: "HH:mm",
			TIME_SECONDS: "HH:mm:ss",
			TIME_MS: "HH:mm:ss.SSS",
			WEEK: "GGGG-[W]WW",
			MONTH: "YYYY-MM"
		}, Ce
}), "undefined" == typeof jQuery)) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
	"use strict";
	var e = a.fn.jquery.split(" ")[0].split(".");
	if (2 > e[0] && 9 > e[1] || 1 == e[0] && 9 == e[1] && 1 > e[2] || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(o) {
	"use strict";

	function t() {
		var n = document.createElement("bootstrap"),
			e = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var t in e)
			if (void 0 !== n.style[t]) return {
				end: e[t]
			};
		return !1
	}
	o.fn.emulateTransitionEnd = function(t) {
		var e = !1,
			s = this;
		o(this).one("bsTransitionEnd", function() {
			e = !0
		});
		var i = function() {
			e || o(s).trigger(o.support.transition.end)
		};
		return setTimeout(i, t), this
	}, o(function() {
		o.support.transition = t(), o.support.transition && (o.event.special.bsTransitionEnd = {
			bindType: o.support.transition.end,
			delegateType: o.support.transition.end,
			handle: function(e) {
				if (o(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
			}
		})
	})
}(jQuery), + function(l) {
	"use strict";
	var t = function(t) {
		l(t).on("click", "[data-dismiss=\"alert\"]", this.close)
	};
	t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.prototype.close = function(e) {
		function a() {
			d.detach().trigger("closed.bs.alert").remove()
		}
		var n = l(this),
			o = n.attr("data-target");
		o || (o = n.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
		var d = l("#" === o ? [] : o);
		e && e.preventDefault(), d.length || (d = n.closest(".alert")), d.trigger(e = l.Event("close.bs.alert")), e.isDefaultPrevented() || (d.removeClass("in"), l.support.transition && d.hasClass("fade") ? d.one("bsTransitionEnd", a).emulateTransitionEnd(t.TRANSITION_DURATION) : a())
	};
	var e = l.fn.alert;
	l.fn.alert = function(a) {
		return this.each(function() {
			var e = l(this),
				i = e.data("bs.alert");
			i || e.data("bs.alert", i = new t(this)), "string" == typeof a && i[a].call(e)
		})
	}, l.fn.alert.Constructor = t, l.fn.alert.noConflict = function() {
		return l.fn.alert = e, this
	}, l(document).on("click.bs.alert.data-api", "[data-dismiss=\"alert\"]", t.prototype.close)
}(jQuery), + function(o) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var e = o(this),
				a = e.data("bs.button");
			a || e.data("bs.button", a = new s(this, "object" == typeof t && t)), "toggle" == t ? a.toggle() : t && a.setState(t)
		})
	}
	var s = function(t, e) {
		this.$element = o(t), this.options = o.extend({}, s.DEFAULTS, e), this.isLoading = !1
	};
	s.VERSION = "3.3.7", s.DEFAULTS = {
		loadingText: "loading..."
	}, s.prototype.setState = function(t) {
		var s = this.$element,
			a = s.is("input") ? "val" : "html",
			i = s.data();
		t += "Text", null == i.resetText && s.data("resetText", s[a]()), setTimeout(o.proxy(function() {
			s[a](null == i[t] ? this.options[t] : i[t]), "loadingText" == t ? (this.isLoading = !0, s.addClass("disabled").attr("disabled", "disabled").prop("disabled", !0)) : this.isLoading && (this.isLoading = !1, s.removeClass("disabled").removeAttr("disabled").prop("disabled", !1))
		}, this), 0)
	}, s.prototype.toggle = function() {
		var n = !0,
			i = this.$element.closest("[data-toggle=\"buttons\"]");
		if (i.length) {
			var t = this.$element.find("input");
			"radio" == t.prop("type") ? (t.prop("checked") && (n = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == t.prop("type") && (t.prop("checked") !== this.$element.hasClass("active") && (n = !1), this.$element.toggleClass("active")), t.prop("checked", this.$element.hasClass("active")), n && t.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var e = o.fn.button;
	o.fn.button = t, o.fn.button.Constructor = s, o.fn.button.noConflict = function() {
		return o.fn.button = e, this
	}, o(document).on("click.bs.button.data-api", "[data-toggle^=\"button\"]", function(a) {
		var n = o(a.target).closest(".btn");
		t.call(n, "toggle"), o(a.target).is("input[type=\"radio\"], input[type=\"checkbox\"]") || (a.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
	}).on("focus.bs.button.data-api blur.bs.button.data-api", "[data-toggle^=\"button\"]", function(e) {
		o(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
	})
}(jQuery), + function(m) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var e = m(this),
				a = e.data("bs.carousel"),
				i = m.extend({}, p.DEFAULTS, e.data(), "object" == typeof t && t),
				o = "string" == typeof t ? t : i.slide;
			a || e.data("bs.carousel", a = new p(this, i)), "number" == typeof t ? a.to(t) : o ? a[o]() : i.interval && a.pause().cycle()
		})
	}
	var p = function(t, e) {
		this.$element = m(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", m.proxy(this.keydown, this)), "hover" != this.options.pause || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", m.proxy(this.pause, this)).on("mouseleave.bs.carousel", m.proxy(this.cycle, this))
	};
	p.VERSION = "3.3.7", p.TRANSITION_DURATION = 600, p.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, p.prototype.keydown = function(e) {
		if (!/input|textarea/i.test(e.target.tagName)) {
			switch (e.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return;
			}
			e.preventDefault()
		}
	}, p.prototype.cycle = function(e) {
		return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(m.proxy(this.next, this), this.options.interval)), this
	}, p.prototype.getItemIndex = function(t) {
		return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
	}, p.prototype.getItemForDirection = function(s, e) {
		var t = this.getItemIndex(e),
			a = "prev" == s && 0 === t || "next" == s && t == this.$items.length - 1;
		if (a && !this.options.wrap) return e;
		var i = "prev" == s ? -1 : 1,
			n = (t + i) % this.$items.length;
		return this.$items.eq(n)
	}, p.prototype.to = function(n) {
		var e = this,
			t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return n > this.$items.length - 1 || 0 > n ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
			e.to(n)
		}) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
	}, p.prototype.pause = function(e) {
		return e || (this.paused = !0), this.$element.find(".next, .prev").length && m.support.transition && (this.$element.trigger(m.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, p.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, p.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, p.prototype.slide = function(t, e) {
		var a = this.$element.find(".item.active"),
			n = e || this.getItemForDirection(t, a),
			i = this.interval,
			o = "next" == t ? "left" : "right",
			s = this;
		if (n.hasClass("active")) return this.sliding = !1;
		var r = n[0],
			l = m.Event("slide.bs.carousel", {
				relatedTarget: r,
				direction: o
			});
		if (this.$element.trigger(l), !l.isDefaultPrevented()) {
			if (this.sliding = !0, i && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var d = m(this.$indicators.children()[this.getItemIndex(n)]);
				d && d.addClass("active")
			}
			var c = m.Event("slid.bs.carousel", {
				relatedTarget: r,
				direction: o
			});
			return m.support.transition && this.$element.hasClass("slide") ? (n.addClass(t), n[0].offsetWidth, a.addClass(o), n.addClass(o), a.one("bsTransitionEnd", function() {
				n.removeClass([t, o].join(" ")).addClass("active"), a.removeClass(["active", o].join(" ")), s.sliding = !1, setTimeout(function() {
					s.$element.trigger(c)
				}, 0)
			}).emulateTransitionEnd(p.TRANSITION_DURATION)) : (a.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(c)), i && this.cycle(), this
		}
	};
	var e = m.fn.carousel;
	m.fn.carousel = t, m.fn.carousel.Constructor = p, m.fn.carousel.noConflict = function() {
		return m.fn.carousel = e, this
	};
	var a = function(a) {
		var i = m(this),
			e = m(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
			n;
		if (e.hasClass("carousel")) {
			var l = m.extend({}, e.data(), i.data()),
				s = i.attr("data-slide-to");
			s && (l.interval = !1), t.call(e, l), s && e.data("bs.carousel").to(s), a.preventDefault()
		}
	};
	m(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), m(window).on("load", function() {
		m("[data-ride=\"carousel\"]").each(function() {
			var a = m(this);
			t.call(a, a.data())
		})
	})
}(jQuery), + function(d) {
	"use strict";

	function t(t) {
		var e = t.attr("data-target") || (a = t.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, ""),
			a;
		return d(e)
	}

	function c(t) {
		return this.each(function() {
			var e = d(this),
				a = e.data("bs.collapse"),
				n = d.extend({}, p.DEFAULTS, e.data(), "object" == typeof t && t);
			!a && n.toggle && /show|hide/.test(t) && (n.toggle = !1), a || e.data("bs.collapse", a = new p(this, n)), "string" == typeof t && a[t]()
		})
	}
	var p = function(t, e) {
		this.$element = d(t), this.options = d.extend({}, p.DEFAULTS, e), this.$trigger = d("[data-toggle=\"collapse\"][href=\"#" + t.id + "\"],[data-toggle=\"collapse\"][data-target=\"#" + t.id + "\"]"), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	p.VERSION = "3.3.7", p.TRANSITION_DURATION = 350, p.DEFAULTS = {
		toggle: !0
	}, p.prototype.dimension = function() {
		var t = this.$element.hasClass("width");
		return t ? "width" : "height"
	}, p.prototype.show = function() {
		if (!(this.transitioning || this.$element.hasClass("in"))) {
			var t = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"),
				e;
			if (!(t && t.length && (e = t.data("bs.collapse"), e && e.transitioning))) {
				var n = d.Event("show.bs.collapse");
				if (this.$element.trigger(n), !n.isDefaultPrevented()) {
					t && t.length && (c.call(t, "hide"), e || t.data("bs.collapse", null));
					var i = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var o = function() {
						this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!d.support.transition) return o.call(this);
					var s = d.camelCase(["scroll", i].join("-"));
					this.$element.one("bsTransitionEnd", d.proxy(o, this)).emulateTransitionEnd(p.TRANSITION_DURATION)[i](this.$element[0][s])
				}
			}
		}
	}, p.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var t = d.Event("hide.bs.collapse");
			if (this.$element.trigger(t), !t.isDefaultPrevented()) {
				var e = this.dimension();
				this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var a = function() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return d.support.transition ? void this.$element[e](0).one("bsTransitionEnd", d.proxy(a, this)).emulateTransitionEnd(p.TRANSITION_DURATION) : a.call(this)
			}
		}
	}, p.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, p.prototype.getParent = function() {
		return d(this.options.parent).find("[data-toggle=\"collapse\"][data-parent=\"" + this.options.parent + "\"]").each(d.proxy(function(a, e) {
			var i = d(e);
			this.addAriaAndCollapsedClass(t(i), i)
		}, this)).end()
	}, p.prototype.addAriaAndCollapsedClass = function(n, e) {
		var t = n.hasClass("in");
		n.attr("aria-expanded", t), e.toggleClass("collapsed", !t).attr("aria-expanded", t)
	};
	var e = d.fn.collapse;
	d.fn.collapse = c, d.fn.collapse.Constructor = p, d.fn.collapse.noConflict = function() {
		return d.fn.collapse = e, this
	}, d(document).on("click.bs.collapse.data-api", "[data-toggle=\"collapse\"]", function(a) {
		var n = d(this);
		n.attr("data-target") || a.preventDefault();
		var e = t(n),
			i = e.data("bs.collapse"),
			o = i ? "toggle" : n.data();
		c.call(e, o)
	})
}(jQuery), + function(d) {
	"use strict";

	function t(t) {
		var e = t.attr("data-target");
		e || (e = t.attr("href"), e = e && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
		var n = e && d(e);
		return n && n.length ? n : t.parent()
	}

	function e(a) {
		a && 3 === a.which || (d(".dropdown-backdrop").remove(), d("[data-toggle=\"dropdown\"]").each(function() {
			var i = d(this),
				e = t(i),
				n = {
					relatedTarget: this
				};
			e.hasClass("open") && (a && "click" == a.type && /input|textarea/i.test(a.target.tagName) && d.contains(e[0], a.target) || (e.trigger(a = d.Event("hide.bs.dropdown", n)), a.isDefaultPrevented() || (i.attr("aria-expanded", "false"), e.removeClass("open").trigger(d.Event("hidden.bs.dropdown", n)))))
		}))
	}
	var n = function(t) {
		d(t).on("click.bs.dropdown", this.toggle)
	};
	n.VERSION = "3.3.7", n.prototype.toggle = function(a) {
		var i = d(this);
		if (!i.is(".disabled, :disabled")) {
			var o = t(i),
				s = o.hasClass("open");
			if (e(), !s) {
				"ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && d(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(d(this)).on("click", e);
				var r = {
					relatedTarget: this
				};
				if (o.trigger(a = d.Event("show.bs.dropdown", r)), a.isDefaultPrevented()) return;
				i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(d.Event("shown.bs.dropdown", r))
			}
			return !1
		}
	}, n.prototype.keydown = function(a) {
		if (/(38|40|27|32)/.test(a.which) && !/input|textarea/i.test(a.target.tagName)) {
			var n = d(this);
			if (a.preventDefault(), a.stopPropagation(), !n.is(".disabled, :disabled")) {
				var e = t(n),
					i = e.hasClass("open");
				if (!i && 27 != a.which || i && 27 == a.which) return 27 == a.which && e.find("[data-toggle=\"dropdown\"]").trigger("focus"), n.trigger("click");
				var o = e.find(".dropdown-menu li:not(.disabled):visible a");
				if (o.length) {
					var s = o.index(a.target);
					38 == a.which && 0 < s && s--, 40 == a.which && s < o.length - 1 && s++, ~s || (s = 0), o.eq(s).trigger("focus")
				}
			}
		}
	};
	var a = d.fn.dropdown;
	d.fn.dropdown = function(t) {
		return this.each(function() {
			var e = d(this),
				a = e.data("bs.dropdown");
			a || e.data("bs.dropdown", a = new n(this)), "string" == typeof t && a[t].call(e)
		})
	}, d.fn.dropdown.Constructor = n, d.fn.dropdown.noConflict = function() {
		return d.fn.dropdown = a, this
	}, d(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
		e.stopPropagation()
	}).on("click.bs.dropdown.data-api", "[data-toggle=\"dropdown\"]", n.prototype.toggle).on("keydown.bs.dropdown.data-api", "[data-toggle=\"dropdown\"]", n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
}(jQuery), + function(r) {
	"use strict";

	function t(t, e) {
		return this.each(function() {
			var a = r(this),
				n = a.data("bs.modal"),
				i = r.extend({}, l.DEFAULTS, a.data(), "object" == typeof t && t);
			n || a.data("bs.modal", n = new l(this, i)), "string" == typeof t ? n[t](e) : i.show && n.show(e)
		})
	}
	var l = function(t, e) {
		this.options = e, this.$body = r(document.body), this.$element = r(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, r.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	l.VERSION = "3.3.7", l.TRANSITION_DURATION = 300, l.BACKDROP_TRANSITION_DURATION = 150, l.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, l.prototype.toggle = function(t) {
		return this.isShown ? this.hide() : this.show(t)
	}, l.prototype.show = function(e) {
		var t = this,
			a = r.Event("show.bs.modal", {
				relatedTarget: e
			});
		this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", "[data-dismiss=\"modal\"]", r.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
			t.$element.one("mouseup.dismiss.bs.modal", function(e) {
				r(e.target).is(t.$element) && (t.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function() {
			var a = r.support.transition && t.$element.hasClass("fade");
			t.$element.parent().length || t.$element.appendTo(t.$body), t.$element.show().scrollTop(0), t.adjustDialog(), a && t.$element[0].offsetWidth, t.$element.addClass("in"), t.enforceFocus();
			var n = r.Event("shown.bs.modal", {
				relatedTarget: e
			});
			a ? t.$dialog.one("bsTransitionEnd", function() {
				t.$element.trigger("focus").trigger(n)
			}).emulateTransitionEnd(l.TRANSITION_DURATION) : t.$element.trigger("focus").trigger(n)
		}))
	}, l.prototype.hide = function(e) {
		e && e.preventDefault(), e = r.Event("hide.bs.modal"), this.$element.trigger(e), !this.isShown || e.isDefaultPrevented() || (this.isShown = !1, this.escape(), this.resize(), r(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), r.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", r.proxy(this.hideModal, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : this.hideModal())
	}, l.prototype.enforceFocus = function() {
		r(document).off("focusin.bs.modal").on("focusin.bs.modal", r.proxy(function(e) {
			document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
		}, this))
	}, l.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", r.proxy(function(e) {
			27 == e.which && this.hide()
		}, this)) : !this.isShown && this.$element.off("keydown.dismiss.bs.modal")
	}, l.prototype.resize = function() {
		this.isShown ? r(window).on("resize.bs.modal", r.proxy(this.handleUpdate, this)) : r(window).off("resize.bs.modal")
	}, l.prototype.hideModal = function() {
		var t = this;
		this.$element.hide(), this.backdrop(function() {
			t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
		})
	}, l.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, l.prototype.backdrop = function(t) {
		var e = this,
			a = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var n = r.support.transition && a;
			if (this.$backdrop = r(document.createElement("div")).addClass("modal-backdrop " + a).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", r.proxy(function(e) {
				return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (e.target !== e.currentTarget || ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
			}, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
			n ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(l.BACKDROP_TRANSITION_DURATION) : t()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var i = function() {
				e.removeBackdrop(), t && t()
			};
			r.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(l.BACKDROP_TRANSITION_DURATION) : i()
		} else t && t()
	}, l.prototype.handleUpdate = function() {
		this.adjustDialog()
	}, l.prototype.adjustDialog = function() {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
		})
	}, l.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, l.prototype.checkScrollbar = function() {
		var a = window.innerWidth;
		if (!a) {
			var n = document.documentElement.getBoundingClientRect();
			a = n.right - Math.abs(n.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
	}, l.prototype.setScrollbar = function() {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
	}, l.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	}, l.prototype.measureScrollbar = function() {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var e = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), e
	};
	var e = r.fn.modal;
	r.fn.modal = t, r.fn.modal.Constructor = l, r.fn.modal.noConflict = function() {
		return r.fn.modal = e, this
	}, r(document).on("click.bs.modal.data-api", "[data-toggle=\"modal\"]", function(a) {
		var i = r(this),
			e = i.attr("href"),
			n = r(i.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			o = n.data("bs.modal") ? "toggle" : r.extend({
				remote: !/#/.test(e) && e
			}, n.data(), i.data());
		i.is("a") && a.preventDefault(), n.one("show.bs.modal", function(e) {
			e.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
				i.is(":visible") && i.trigger("focus")
			})
		}), t.call(n, o, this)
	})
}(jQuery), + function(v) {
	"use strict";
	var t = function(a, e) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, e)
	};
	t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, t.prototype.init = function(t, e, a) {
		if (this.enabled = !0, this.type = t, this.$element = v(e), this.options = this.getOptions(a), this.$viewport = this.options.viewport && v(v.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
			click: !1,
			hover: !1,
			focus: !1
		}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var n = this.options.trigger.split(" "), i = n.length, o; i--;)
			if (o = n[i], "click" == o) this.$element.on("click." + this.type, this.options.selector, v.proxy(this.toggle, this));
			else if ("manual" != o) {
				var c = "hover" == o ? "mouseenter" : "focusin",
					l = "hover" == o ? "mouseleave" : "focusout";
				this.$element.on(c + "." + this.type, this.options.selector, v.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, v.proxy(this.leave, this))
			}
		this.options.selector ? this._options = v.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, t.prototype.getDefaults = function() {
		return t.DEFAULTS
	}, t.prototype.getOptions = function(t) {
		return t = v.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
			show: t.delay,
			hide: t.delay
		}), t
	}, t.prototype.getDelegateOptions = function() {
		var n = {},
			e = this.getDefaults();
		return this._options && v.each(this._options, function(a, t) {
			e[a] != t && (n[a] = t)
		}), n
	}, t.prototype.enter = function(t) {
		var e = t instanceof this.constructor ? t : v(t.currentTarget).data("bs." + this.type);
		return (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), v(t.currentTarget).data("bs." + this.type, e)), t instanceof v.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState) ? void (e.hoverState = "in") : (clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void (e.timeout = setTimeout(function() {
			"in" == e.hoverState && e.show()
		}, e.options.delay.show)) : e.show())
	}, t.prototype.isInStateTrue = function() {
		for (var t in this.inState)
			if (this.inState[t]) return !0;
		return !1
	}, t.prototype.leave = function(t) {
		var e = t instanceof this.constructor ? t : v(t.currentTarget).data("bs." + this.type);
		if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), v(t.currentTarget).data("bs." + this.type, e)), t instanceof v.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) return clearTimeout(e.timeout), e.hoverState = "out", e.options.delay && e.options.delay.hide ? void (e.timeout = setTimeout(function() {
			"out" == e.hoverState && e.hide()
		}, e.options.delay.hide)) : e.hide()
	}, t.prototype.show = function() {
		var a = v.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(a);
			var i = v.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (a.isDefaultPrevented() || !i) return;
			var y = this,
				e = this.tip(),
				n = this.getUID(this.type);
			this.setContent(), e.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && e.addClass("fade");
			var o = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
				s = /\s?auto?\s?/i,
				l = s.test(o);
			l && (o = o.replace(s, "") || "top"), e.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(o).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var d = this.getPosition(),
				p = e[0].offsetWidth,
				c = e[0].offsetHeight;
			if (l) {
				var u = o,
					m = this.getPosition(this.$viewport);
				o = "bottom" == o && d.bottom + c > m.bottom ? "top" : "top" == o && d.top - c < m.top ? "bottom" : "right" == o && d.right + p > m.width ? "left" : "left" == o && d.left - p < m.left ? "right" : o, e.removeClass(u).addClass(o)
			}
			var h = this.getCalculatedOffset(o, d, p, c);
			this.applyPlacement(h, o);
			var g = function() {
				var t = y.hoverState;
				y.$element.trigger("shown.bs." + y.type), y.hoverState = null, "out" == t && y.leave(y)
			};
			v.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", g).emulateTransitionEnd(t.TRANSITION_DURATION) : g()
		}
	}, t.prototype.applyPlacement = function(t, e) {
		var a = this.tip(),
			i = a[0].offsetWidth,
			n = a[0].offsetHeight,
			o = parseInt(a.css("margin-top"), 10),
			h = parseInt(a.css("margin-left"), 10);
		isNaN(o) && (o = 0), isNaN(h) && (h = 0), t.top += o, t.left += h, v.offset.setOffset(a[0], v.extend({
			using: function(t) {
				a.css({
					top: Math.round(t.top),
					left: Math.round(t.left)
				})
			}
		}, t), 0), a.addClass("in");
		var g = a[0].offsetWidth,
			l = a[0].offsetHeight;
		"top" == e && l != n && (t.top = t.top + n - l);
		var d = this.getViewportAdjustedDelta(e, t, g, l);
		d.left ? t.left += d.left : t.top += d.top;
		var p = /top|bottom/.test(e),
			c = p ? 2 * d.left - i + g : 2 * d.top - n + l,
			u = p ? "offsetWidth" : "offsetHeight";
		a.offset(t), this.replaceArrow(c, a[0][u], p)
	}, t.prototype.replaceArrow = function(n, e, t) {
		this.arrow().css(t ? "left" : "top", 50 * (1 - n / e) + "%").css(t ? "top" : "left", "")
	}, t.prototype.setContent = function() {
		var a = this.tip(),
			e = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), a.removeClass("fade in top bottom left right")
	}, t.prototype.hide = function(e) {
		function a() {
			"in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
		}
		var n = this,
			i = v(this.$tip),
			o = v.Event("hide.bs." + this.type);
		if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), v.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", a).emulateTransitionEnd(t.TRANSITION_DURATION) : a(), this.hoverState = null, this
	}, t.prototype.fixTitle = function() {
		var t = this.$element;
		(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	}, t.prototype.hasContent = function() {
		return this.getTitle()
	}, t.prototype.getPosition = function(t) {
		t = t || this.$element;
		var d = t[0],
			a = "BODY" == d.tagName,
			i = d.getBoundingClientRect();
		null == i.width && (i = v.extend({}, i, {
			width: i.right - i.left,
			height: i.bottom - i.top
		}));
		var c = window.SVGElement && d instanceof window.SVGElement,
			o = a ? {
				top: 0,
				left: 0
			} : c ? null : t.offset(),
			s = {
				scroll: a ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
			},
			r = a ? {
				width: v(window).width(),
				height: v(window).height()
			} : null;
		return v.extend({}, i, s, r, o)
	}, t.prototype.getCalculatedOffset = function(n, e, t, a) {
		return "bottom" == n ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - t / 2
		} : "top" == n ? {
			top: e.top - a,
			left: e.left + e.width / 2 - t / 2
		} : "left" == n ? {
			top: e.top + e.height / 2 - a / 2,
			left: e.left - t
		} : {
						top: e.top + e.height / 2 - a / 2,
						left: e.left + e.width
					}
	}, t.prototype.getViewportAdjustedDelta = function(c, e, t, a) {
		var i = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return i;
		var n = this.options.viewport && this.options.viewport.padding || 0,
			o = this.getPosition(this.$viewport);
		if (/right|left/.test(c)) {
			var s = e.top - n - o.scroll,
				r = e.top + n - o.scroll + a;
			s < o.top ? i.top = o.top - s : r > o.top + o.height && (i.top = o.top + o.height - r)
		} else {
			var l = e.left - n,
				d = e.left + n + t;
			l < o.left ? i.left = o.left - l : d > o.right && (i.left = o.left + o.width - d)
		}
		return i
	}, t.prototype.getTitle = function() {
		var n = this.$element,
			e = this.options,
			t;
		return t = n.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(n[0]) : e.title), t
	}, t.prototype.getUID = function(t) {
		do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
		return t
	}, t.prototype.tip = function() {
		if (!this.$tip && (this.$tip = v(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, t.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, t.prototype.enable = function() {
		this.enabled = !0
	}, t.prototype.disable = function() {
		this.enabled = !1
	}, t.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, t.prototype.toggle = function(t) {
		var a = this;
		t && (a = v(t.currentTarget).data("bs." + this.type), !a && (a = new this.constructor(t.currentTarget, this.getDelegateOptions()), v(t.currentTarget).data("bs." + this.type, a))), t ? (a.inState.click = !a.inState.click, a.isInStateTrue() ? a.enter(a) : a.leave(a)) : a.tip().hasClass("in") ? a.leave(a) : a.enter(a)
	}, t.prototype.destroy = function() {
		var t = this;
		clearTimeout(this.timeout), this.hide(function() {
			t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
		})
	};
	var e = v.fn.tooltip;
	v.fn.tooltip = function(a) {
		return this.each(function() {
			var e = v(this),
				i = e.data("bs.tooltip");
			!i && /destroy|hide/.test(a) || (!i && e.data("bs.tooltip", i = new t(this, "object" == typeof a && a)), "string" == typeof a && i[a]())
		})
	}, v.fn.tooltip.Constructor = t, v.fn.tooltip.noConflict = function() {
		return v.fn.tooltip = e, this
	}
}(jQuery), + function(o) {
	"use strict";
	var e = function(a, e) {
		this.init("popover", a, e)
	};
	if (!o.fn.tooltip) throw new Error("Popover requires tooltip.js");
	e.VERSION = "3.3.7", e.DEFAULTS = o.extend({}, o.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: "<div class=\"popover\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-title\"></h3><div class=\"popover-content\"></div></div>"
	}), e.prototype = o.extend({}, o.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
		return e.DEFAULTS
	}, e.prototype.setContent = function() {
		var n = this.tip(),
			e = this.getTitle(),
			t = this.getContent();
		n.find(".popover-title")[this.options.html ? "html" : "text"](e), n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t), n.removeClass("fade top bottom left right in"), n.find(".popover-title").html() || n.find(".popover-title").hide()
	}, e.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, e.prototype.getContent = function() {
		var a = this.$element,
			e = this.options;
		return a.attr("data-content") || ("function" == typeof e.content ? e.content.call(a[0]) : e.content)
	}, e.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var t = o.fn.popover;
	o.fn.popover = function(t) {
		return this.each(function() {
			var a = o(this),
				i = a.data("bs.popover");
			!i && /destroy|hide/.test(t) || (!i && a.data("bs.popover", i = new e(this, "object" == typeof t && t)), "string" == typeof t && i[t]())
		})
	}, o.fn.popover.Constructor = e, o.fn.popover.noConflict = function() {
		return o.fn.popover = t, this
	}
}(jQuery), + function(s) {
	"use strict";

	function e(t, a) {
		this.$body = s(document.body), this.$scrollElement = s(t).is(document.body) ? s(window) : s(t), this.options = s.extend({}, e.DEFAULTS, a), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)), this.refresh(), this.process()
	}

	function n(t) {
		return this.each(function() {
			var a = s(this),
				i = a.data("bs.scrollspy");
			i || a.data("bs.scrollspy", i = new e(this, "object" == typeof t && t)), "string" == typeof t && i[t]()
		})
	}
	e.VERSION = "3.3.7", e.DEFAULTS = {
		offset: 10
	}, e.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, e.prototype.refresh = function() {
		var e = this,
			r = "offset",
			l = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), s.isWindow(this.$scrollElement[0]) || (r = "position", l = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
			var e = s(this),
				t = e.data("target") || e.attr("href"),
				a = /^#./.test(t) && s(t);
			return a && a.length && a.is(":visible") && [
				[a[r]().top + l, t]
			] || null
		}).sort(function(a, e) {
			return a[0] - e[0]
		}).each(function() {
			e.offsets.push(this[0]), e.targets.push(this[1])
		})
	}, e.prototype.process = function() {
		var i = this.$scrollElement.scrollTop() + this.options.offset,
			e = this.getScrollHeight(),
			t = this.options.offset + e - this.$scrollElement.height(),
			a = this.offsets,
			n = this.targets,
			o = this.activeTarget,
			s;
		if (this.scrollHeight != e && this.refresh(), i >= t) return o != (s = n[n.length - 1]) && this.activate(s);
		if (o && i < a[0]) return this.activeTarget = null, this.clear();
		for (s = a.length; s--;) o != n[s] && i >= a[s] && (void 0 === a[s + 1] || i < a[s + 1]) && this.activate(n[s])
	}, e.prototype.activate = function(e) {
		this.activeTarget = e, this.clear();
		var t = this.selector + "[data-target=\"" + e + "\"]," + this.selector + "[href=\"" + e + "\"]",
			a = s(t).parents("li").addClass("active");
		a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active")), a.trigger("activate.bs.scrollspy")
	}, e.prototype.clear = function() {
		s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var t = s.fn.scrollspy;
	s.fn.scrollspy = n, s.fn.scrollspy.Constructor = e, s.fn.scrollspy.noConflict = function() {
		return s.fn.scrollspy = t, this
	}, s(window).on("load.bs.scrollspy.data-api", function() {
		s("[data-spy=\"scroll\"]").each(function() {
			var e = s(this);
			n.call(e, e.data())
		})
	})
}(jQuery), + function(l) {
	"use strict";

	function e(i) {
		return this.each(function() {
			var e = l(this),
				a = e.data("bs.tab");
			a || e.data("bs.tab", a = new t(this)), "string" == typeof i && a[i]()
		})
	}
	var t = function(t) {
		this.element = l(t)
	};
	t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.prototype.show = function() {
		var t = this.element,
			e = t.closest("ul:not(.dropdown-menu)"),
			a = t.data("target");
		if (a || (a = t.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
			var d = e.find(".active:last a"),
				n = l.Event("hide.bs.tab", {
					relatedTarget: t[0]
				}),
				o = l.Event("show.bs.tab", {
					relatedTarget: d[0]
				});
			if (d.trigger(n), t.trigger(o), !(o.isDefaultPrevented() || n.isDefaultPrevented())) {
				var s = l(a);
				this.activate(t.closest("li"), e), this.activate(s, s.parent(), function() {
					d.trigger({
						type: "hidden.bs.tab",
						relatedTarget: t[0]
					}), t.trigger({
						type: "shown.bs.tab",
						relatedTarget: d[0]
					})
				})
			}
		}
	}, t.prototype.activate = function(i, e, a) {
		function n() {
			o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find("[data-toggle=\"tab\"]").attr("aria-expanded", !1), i.addClass("active").find("[data-toggle=\"tab\"]").attr("aria-expanded", !0), s ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade"), i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find("[data-toggle=\"tab\"]").attr("aria-expanded", !0), a && a()
		}
		var o = e.find("> .active"),
			s = a && l.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);
		o.length && s ? o.one("bsTransitionEnd", n).emulateTransitionEnd(t.TRANSITION_DURATION) : n(), o.removeClass("in")
	};
	var a = l.fn.tab;
	l.fn.tab = e, l.fn.tab.Constructor = t, l.fn.tab.noConflict = function() {
		return l.fn.tab = a, this
	};
	var n = function(t) {
		t.preventDefault(), e.call(l(this), "show")
	};
	l(document).on("click.bs.tab.data-api", "[data-toggle=\"tab\"]", n).on("click.bs.tab.data-api", "[data-toggle=\"pill\"]", n)
}(jQuery), + function(c) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var e = c(this),
				a = e.data("bs.affix");
			a || e.data("bs.affix", a = new o(this, "object" == typeof t && t)), "string" == typeof t && a[t]()
		})
	}
	var o = function(t, e) {
		this.options = c.extend({}, o.DEFAULTS, e), this.$target = c(this.options.target).on("scroll.bs.affix.data-api", c.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", c.proxy(this.checkPositionWithEventLoop, this)), this.$element = c(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	o.VERSION = "3.3.7", o.RESET = "affix affix-top affix-bottom", o.DEFAULTS = {
		offset: 0,
		target: window
	}, o.prototype.getState = function(c, e, t, a) {
		var i = this.$target.scrollTop(),
			n = this.$element.offset(),
			o = this.$target.height();
		if (null != t && "top" == this.affixed) return !!(i < t) && "top";
		if ("bottom" == this.affixed) return null == t ? !(i + o <= c - a) && "bottom" : !(i + this.unpin <= n.top) && "bottom";
		var s = null == this.affixed,
			r = s ? i : n.top,
			l = s ? o : e;
		return null != t && i <= t ? "top" : !!(null != a && r + l >= c - a) && "bottom"
	}, o.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(o.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
			e = this.$element.offset();
		return this.pinnedOffset = e.top - a
	}, o.prototype.checkPositionWithEventLoop = function() {
		setTimeout(c.proxy(this.checkPosition, this), 1)
	}, o.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var e = this.$element.height(),
				t = this.options.offset,
				a = t.top,
				n = t.bottom,
				i = Math.max(c(document).height(), c(document.body).height());
			"object" != typeof t && (n = a = t), "function" == typeof a && (a = t.top(this.$element)), "function" == typeof n && (n = t.bottom(this.$element));
			var r = this.getState(i, e, a, n);
			if (this.affixed != r) {
				null != this.unpin && this.$element.css("top", "");
				var l = "affix" + (r ? "-" + r : ""),
					d = c.Event(l + ".bs.affix");
				if (this.$element.trigger(d), d.isDefaultPrevented()) return;
				this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(o.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == r && this.$element.offset({
				top: i - e - n
			})
		}
	};
	var e = c.fn.affix;
	c.fn.affix = t, c.fn.affix.Constructor = o, c.fn.affix.noConflict = function() {
		return c.fn.affix = e, this
	}, c(window).on("load", function() {
		c("[data-spy=\"affix\"]").each(function() {
			var e = c(this),
				a = e.data();
			a.offset = a.offset || {}, null != a.offsetBottom && (a.offset.bottom = a.offsetBottom), null != a.offsetTop && (a.offset.top = a.offsetTop), t.call(e, a)
		})
	})
}(jQuery), ! function(t) {
	"use strict";
	if ("function" == typeof define && define.amd) define(["jquery", "moment"], t);
	else if ("object" == typeof exports) t(require("jquery"), require("moment"));
	else {
		if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
		if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
		t(jQuery, moment)
	}
}(function(p, u) {
	"use strict";
	if (!u) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
	var n = function(m, h) {
		var g = {},
			d = !0,
			f = !1,
			k = !1,
			n = 0,
			t = [{
				clsName: "days",
				navFnc: "M",
				navStep: 1
			}, {
				clsName: "months",
				navFnc: "y",
				navStep: 1
			}, {
				clsName: "years",
				navFnc: "y",
				navStep: 10
			}, {
				clsName: "decades",
				navFnc: "y",
				navStep: 100
			}],
			i = ["days", "months", "years", "decades"],
			o = ["top", "bottom", "auto"],
			r = ["left", "right", "auto"],
			s = ["default", "top", "bottom"],
			e = {
				up: 38,
				38: "up",
				down: 40,
				40: "down",
				left: 37,
				37: "left",
				right: 39,
				39: "right",
				tab: 9,
				9: "tab",
				escape: 27,
				27: "escape",
				enter: 13,
				13: "enter",
				pageUp: 33,
				33: "pageUp",
				pageDown: 34,
				34: "pageDown",
				shift: 16,
				16: "shift",
				control: 17,
				17: "control",
				space: 32,
				32: "space",
				t: 84,
				84: "t",
				delete: 46,
				46: "delete"
			},
			c = {},
			v = function() {
				return void 0 !== u.tz && void 0 !== h.timeZone && null !== h.timeZone && "" !== h.timeZone
			},
			b = function(t) {
				var e;
				return e = void 0 === t || null === t ? u() : v() ? u.tz(t, be, h.useStrict, h.timeZone) : u(t, be, h.useStrict), v() && e.tz(h.timeZone), e
			},
			w = function(t) {
				if ("string" != typeof t || 1 < t.length) throw new TypeError("isEnabled expects a single character string parameter");
				return "y" === t ? -1 !== ye.indexOf("Y") : "M" === t ? -1 !== ye.indexOf("M") : "d" === t ? -1 !== ye.toLowerCase().indexOf("d") : "h" === t || "H" === t ? -1 !== ye.toLowerCase().indexOf("h") : "m" === t ? -1 !== ye.indexOf("m") : "s" == t && -1 !== ye.indexOf("s")
			},
			y = function() {
				return w("h") || w("m") || w("s")
			},
			x = function() {
				return w("y") || w("M") || w("d")
			},
			A = function() {
				var a = p("<thead>").append(p("<tr>").append(p("<th>").addClass("prev").attr("data-action", "previous").append(p("<span>").addClass(h.icons.previous))).append(p("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", h.calendarWeeks ? "6" : "5")).append(p("<th>").addClass("next").attr("data-action", "next").append(p("<span>").addClass(h.icons.next)))),
					e = p("<tbody>").append(p("<tr>").append(p("<td>").attr("colspan", h.calendarWeeks ? "8" : "7")));
				return [p("<div>").addClass("datepicker-days").append(p("<table>").addClass("table-condensed").append(a).append(p("<tbody>"))), p("<div>").addClass("datepicker-months").append(p("<table>").addClass("table-condensed").append(a.clone()).append(e.clone())), p("<div>").addClass("datepicker-years").append(p("<table>").addClass("table-condensed").append(a.clone()).append(e.clone())), p("<div>").addClass("datepicker-decades").append(p("<table>").addClass("table-condensed").append(a.clone()).append(e.clone()))]
			},
			z = function() {
				var e = p("<tr>"),
					t = p("<tr>"),
					a = p("<tr>");
				return w("h") && (e.append(p("<td>").append(p("<a>").attr({
					href: "#",
					tabindex: "-1",
					title: h.tooltips.incrementHour
				}).addClass("btn").attr("data-action", "incrementHours").append(p("<span>").addClass(h.icons.up)))), t.append(p("<td>").append(p("<span>").addClass("timepicker-hour").attr({
					"data-time-component": "hours",
					title: h.tooltips.pickHour
				}).attr("data-action", "showHours"))), a.append(p("<td>").append(p("<a>").attr({
					href: "#",
					tabindex: "-1",
					title: h.tooltips.decrementHour
				}).addClass("btn").attr("data-action", "decrementHours").append(p("<span>").addClass(h.icons.down))))), w("m") && (w("h") && (e.append(p("<td>").addClass("separator")), t.append(p("<td>").addClass("separator").html(":")), a.append(p("<td>").addClass("separator"))), e.append(p("<td>").append(p("<a>").attr({
					href: "#",
					tabindex: "-1",
					title: h.tooltips.incrementMinute
				}).addClass("btn").attr("data-action", "incrementMinutes").append(p("<span>").addClass(h.icons.up)))), t.append(p("<td>").append(p("<span>").addClass("timepicker-minute").attr({
					"data-time-component": "minutes",
					title: h.tooltips.pickMinute
				}).attr("data-action", "showMinutes"))), a.append(p("<td>").append(p("<a>").attr({
					href: "#",
					tabindex: "-1",
					title: h.tooltips.decrementMinute
				}).addClass("btn").attr("data-action", "decrementMinutes").append(p("<span>").addClass(h.icons.down))))), w("s") && (w("m") && (e.append(p("<td>").addClass("separator")), t.append(p("<td>").addClass("separator").html(":")), a.append(p("<td>").addClass("separator"))), e.append(p("<td>").append(p("<a>").attr({
					href: "#",
					tabindex: "-1",
					title: h.tooltips.incrementSecond
				}).addClass("btn").attr("data-action", "incrementSeconds").append(p("<span>").addClass(h.icons.up)))), t.append(p("<td>").append(p("<span>").addClass("timepicker-second").attr({
					"data-time-component": "seconds",
					title: h.tooltips.pickSecond
				}).attr("data-action", "showSeconds"))), a.append(p("<td>").append(p("<a>").attr({
					href: "#",
					tabindex: "-1",
					title: h.tooltips.decrementSecond
				}).addClass("btn").attr("data-action", "decrementSeconds").append(p("<span>").addClass(h.icons.down))))), ve || (e.append(p("<td>").addClass("separator")), t.append(p("<td>").append(p("<button>").addClass("btn btn-primary").attr({
					"data-action": "togglePeriod",
					tabindex: "-1",
					title: h.tooltips.togglePeriod
				}))), a.append(p("<td>").addClass("separator"))), p("<div>").addClass("timepicker-picker").append(p("<table>").addClass("table-condensed").append([e, t, a]))
			},
			C = function() {
				var e = p("<div>").addClass("timepicker-hours").append(p("<table>").addClass("table-condensed")),
					t = p("<div>").addClass("timepicker-minutes").append(p("<table>").addClass("table-condensed")),
					a = p("<div>").addClass("timepicker-seconds").append(p("<table>").addClass("table-condensed")),
					i = [z()];
				return w("h") && i.push(e), w("m") && i.push(t), w("s") && i.push(a), i
			},
			D = function() {
				var t = [];
				return h.showTodayButton && t.push(p("<td>").append(p("<a>").attr({
					"data-action": "today",
					title: h.tooltips.today
				}).append(p("<span>").addClass(h.icons.today)))), !h.sideBySide && x() && y() && t.push(p("<td>").append(p("<a>").attr({
					"data-action": "togglePicker",
					title: h.tooltips.selectTime
				}).append(p("<span>").addClass(h.icons.time)))), h.showClear && t.push(p("<td>").append(p("<a>").attr({
					"data-action": "clear",
					title: h.tooltips.clear
				}).append(p("<span>").addClass(h.icons.clear)))), h.showClose && t.push(p("<td>").append(p("<a>").attr({
					"data-action": "close",
					title: h.tooltips.close
				}).append(p("<span>").addClass(h.icons.close)))), p("<table>").addClass("table-condensed").append(p("<tbody>").append(p("<tr>").append(t)))
			},
			E = function() {
				var o = p("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
					t = p("<div>").addClass("datepicker").append(A()),
					a = p("<div>").addClass("timepicker").append(C()),
					i = p("<ul>").addClass("list-unstyled"),
					e = p("<li>").addClass("picker-switch" + (h.collapse ? " accordion-toggle" : "")).append(D());
				return h.inline && o.removeClass("dropdown-menu"), ve && o.addClass("usetwentyfour"), w("s") && !ve && o.addClass("wider"), h.sideBySide && x() && y() ? (o.addClass("timepicker-sbs"), "top" === h.toolbarPlacement && o.append(e), o.append(p("<div>").addClass("row").append(t.addClass("col-md-6")).append(a.addClass("col-md-6"))), "bottom" === h.toolbarPlacement && o.append(e), o) : ("top" === h.toolbarPlacement && i.append(e), x() && i.append(p("<li>").addClass(h.collapse && y() ? "collapse in" : "").append(t)), "default" === h.toolbarPlacement && i.append(e), y() && i.append(p("<li>").addClass(h.collapse && x() ? "collapse" : "").append(a)), "bottom" === h.toolbarPlacement && i.append(e), o.append(i))
			},
			F = function() {
				var a = (f || m).position(),
					t = (f || m).offset(),
					e = h.widgetPositioning.vertical,
					s = h.widgetPositioning.horizontal,
					r;
				if (h.widgetParent) r = h.widgetParent.append(k);
				else if (m.is("input")) r = m.after(k).parent();
				else {
					if (h.inline) return void (r = m.append(k));
					r = m, m.children().first().after(k)
				}
				if ("auto" === e && (e = t.top + 1.5 * k.height() >= p(window).height() + p(window).scrollTop() && k.height() + m.outerHeight() < t.top ? "top" : "bottom"), "auto" === s && (s = r.width() < t.left + k.outerWidth() / 2 && t.left + k.outerWidth() > p(window).width() ? "right" : "left"), "top" === e ? k.addClass("top").removeClass("bottom") : k.addClass("bottom").removeClass("top"), "right" === s ? k.addClass("pull-right") : k.removeClass("pull-right"), "relative" !== r.css("position") && (r = r.parents().filter(function() {
					return "relative" === p(this).css("position")
				}).first()), 0 === r.length) throw new Error("datetimepicker component should be placed within a relative positioned container");
				k.css({
					top: "top" === e ? "auto" : a.top + m.outerHeight(),
					bottom: "top" === e ? r.outerHeight() - (r === m ? 0 : a.top) : "auto",
					left: "left" === s ? r === m ? 0 : a.left : "auto",
					right: "left" === s ? "auto" : r.outerWidth() - m.outerWidth() - (r === m ? 0 : a.left)
				})
			},
			H = function(t) {
				"dp.change" === t.type && (t.date && t.date.isSame(t.oldDate) || !t.date && !t.oldDate) || m.trigger(t)
			},
			I = function(t) {
				"y" === t && (t = "YYYY"), H({
					type: "dp.update",
					change: t,
					viewDate: ge.clone()
				})
			},
			q = function(a) {
				k && (a && (_e = Math.max(n, Math.min(3, _e + a))), k.find(".datepicker > div").hide().filter(".datepicker-" + t[_e].clsName).show())
			},
			B = function() {
				var a = p("<tr>"),
					e = ge.clone().startOf("w").startOf("d");
				for (!0 === h.calendarWeeks && a.append(p("<th>").addClass("cw").text("#")); e.isBefore(ge.clone().endOf("w"));) a.append(p("<th>").addClass("dow").text(e.format("dd"))), e.add(1, "d");
				k.find(".datepicker-days thead").append(a)
			},
			L = function(t) {
				return !0 === h.disabledDates[t.format("YYYY-MM-DD")]
			},
			M = function(t) {
				return !0 === h.enabledDates[t.format("YYYY-MM-DD")]
			},
			N = function(t) {
				return !0 === h.disabledHours[t.format("H")]
			},
			O = function(t) {
				return !0 === h.enabledHours[t.format("H")]
			},
			P = function(e, t) {
				if (!e.isValid()) return !1;
				if (h.disabledDates && "d" === t && L(e)) return !1;
				if (h.enabledDates && "d" === t && !M(e)) return !1;
				if (h.minDate && e.isBefore(h.minDate, t)) return !1;
				if (h.maxDate && e.isAfter(h.maxDate, t)) return !1;
				if (h.daysOfWeekDisabled && "d" === t && -1 !== h.daysOfWeekDisabled.indexOf(e.day())) return !1;
				if (h.disabledHours && ("h" === t || "m" === t || "s" === t) && N(e)) return !1;
				if (h.enabledHours && ("h" === t || "m" === t || "s" === t) && !O(e)) return !1;
				if (h.disabledTimeIntervals && ("h" === t || "m" === t || "s" === t)) {
					var a = !1;
					if (p.each(h.disabledTimeIntervals, function() {
						return e.isBetween(this[0], this[1]) ? (a = !0, !1) : void 0
					}), a) return !1
				}
				return !0
			},
			G = function() {
				for (var a = [], e = ge.clone().startOf("y").startOf("d"); e.isSame(ge, "y");) a.push(p("<span>").attr("data-action", "selectMonth").addClass("month").text(e.format("MMM"))), e.add(1, "M");
				k.find(".datepicker-months td").empty().append(a)
			},
			R = function() {
				var n = k.find(".datepicker-months"),
					e = n.find("th"),
					t = n.find("tbody").find("span");
				e.eq(0).find("span").attr("title", h.tooltips.prevYear), e.eq(1).attr("title", h.tooltips.selectYear), e.eq(2).find("span").attr("title", h.tooltips.nextYear), n.find(".disabled").removeClass("disabled"), P(ge.clone().subtract(1, "y"), "y") || e.eq(0).addClass("disabled"), e.eq(1).text(ge.year()), P(ge.clone().add(1, "y"), "y") || e.eq(2).addClass("disabled"), t.removeClass("active"), he.isSame(ge, "y") && !d && t.eq(he.month()).addClass("active"), t.each(function(t) {
					P(ge.clone().month(t), "M") || p(this).addClass("disabled")
				})
			},
			S = function() {
				var o = k.find(".datepicker-years"),
					e = o.find("th"),
					t = ge.clone().subtract(5, "y"),
					a = ge.clone().add(6, "y"),
					i = "";
				for (e.eq(0).find("span").attr("title", h.tooltips.prevDecade), e.eq(1).attr("title", h.tooltips.selectDecade), e.eq(2).find("span").attr("title", h.tooltips.nextDecade), o.find(".disabled").removeClass("disabled"), h.minDate && h.minDate.isAfter(t, "y") && e.eq(0).addClass("disabled"), e.eq(1).text(t.year() + "-" + a.year()), h.maxDate && h.maxDate.isBefore(a, "y") && e.eq(2).addClass("disabled"); !t.isAfter(a, "y");) i += "<span data-action=\"selectYear\" class=\"year" + (t.isSame(he, "y") && !d ? " active" : "") + (P(t, "y") ? "" : " disabled") + "\">" + t.year() + "</span>", t.add(1, "y");
				o.find("td").html(i)
			},
			T = function() {
				var t = k.find(".datepicker-decades"),
					e = t.find("th"),
					a = u({
						y: ge.year() - ge.year() % 100 - 1
					}),
					n = a.clone().add(100, "y"),
					o = a.clone(),
					i = !1,
					s = !1,
					l = "",
					m;
				for (e.eq(0).find("span").attr("title", h.tooltips.prevCentury), e.eq(2).find("span").attr("title", h.tooltips.nextCentury), t.find(".disabled").removeClass("disabled"), (a.isSame(u({
					y: 1900
				})) || h.minDate && h.minDate.isAfter(a, "y")) && e.eq(0).addClass("disabled"), e.eq(1).text(a.year() + "-" + n.year()), (a.isSame(u({
					y: 2e3
				})) || h.maxDate && h.maxDate.isBefore(n, "y")) && e.eq(2).addClass("disabled"); !a.isAfter(n, "y");) m = a.year() + 12, i = h.minDate && h.minDate.isAfter(a, "y") && h.minDate.year() <= m, s = h.maxDate && h.maxDate.isAfter(a, "y") && h.maxDate.year() <= m, l += "<span data-action=\"selectDecade\" class=\"decade" + (he.isAfter(a) && he.year() <= m ? " active" : "") + (P(a, "y") || i || s ? "" : " disabled") + "\" data-selection=\"" + (a.year() + 6) + "\">" + (a.year() + 1) + " - " + (a.year() + 12) + "</span>", a.add(12, "y");
				l += "<span></span><span></span><span></span>", t.find("td").html(l), e.eq(1).text(o.year() + 1 + "-" + a.year())
			},
			U = function() {
				var r = k.find(".datepicker-days"),
					e = r.find("th"),
					t = [],
					a, l, c, u;
				if (x()) {
					for (e.eq(0).find("span").attr("title", h.tooltips.prevMonth), e.eq(1).attr("title", h.tooltips.selectMonth), e.eq(2).find("span").attr("title", h.tooltips.nextMonth), r.find(".disabled").removeClass("disabled"), e.eq(1).text(ge.format(h.dayViewHeaderFormat)), P(ge.clone().subtract(1, "M"), "M") || e.eq(0).addClass("disabled"), P(ge.clone().add(1, "M"), "M") || e.eq(2).addClass("disabled"), a = ge.clone().startOf("M").startOf("w").startOf("d"), u = 0; 42 > u; u++) 0 === a.weekday() && (l = p("<tr>"), h.calendarWeeks && l.append("<td class=\"cw\">" + a.week() + "</td>"), t.push(l)), c = "", a.isBefore(ge, "M") && (c += " old"), a.isAfter(ge, "M") && (c += " new"), a.isSame(he, "d") && !d && (c += " active"), P(a, "d") || (c += " disabled"), a.isSame(b(), "d") && (c += " today"), 0 !== a.day() && 6 !== a.day() || (c += " weekend"), l.append("<td data-action=\"selectDay\" data-day=\"" + a.format("L") + "\" class=\"day" + c + "\">" + a.date() + "</td>"), a.add(1, "d");
					r.find("tbody").empty().append(t), R(), S(), T()
				}
			},
			V = function() {
				var e = k.find(".timepicker-hours table"),
					t = ge.clone().startOf("d"),
					a = [],
					i = p("<tr>");
				for (11 < ge.hour() && !ve && t.hour(12); t.isSame(ge, "d") && (ve || 12 > ge.hour() && 12 > t.hour() || 11 < ge.hour());) 0 == t.hour() % 4 && (i = p("<tr>"), a.push(i)), i.append("<td data-action=\"selectHour\" class=\"hour" + (P(t, "h") ? "" : " disabled") + "\">" + t.format(ve ? "HH" : "hh") + "</td>"), t.add(1, "h");
				e.empty().append(a)
			},
			W = function() {
				for (var o = k.find(".timepicker-minutes table"), t = ge.clone().startOf("h"), a = [], i = p("<tr>"), s = 1 === h.stepping ? 5 : h.stepping; ge.isSame(t, "h");) 0 == t.minute() % (4 * s) && (i = p("<tr>"), a.push(i)), i.append("<td data-action=\"selectMinute\" class=\"minute" + (P(t, "m") ? "" : " disabled") + "\">" + t.format("mm") + "</td>"), t.add(s, "m");
				o.empty().append(a)
			},
			K = function() {
				for (var e = k.find(".timepicker-seconds table"), t = ge.clone().startOf("m"), a = [], i = p("<tr>"); ge.isSame(t, "m");) 0 == t.second() % 20 && (i = p("<tr>"), a.push(i)), i.append("<td data-action=\"selectSecond\" class=\"second" + (P(t, "s") ? "" : " disabled") + "\">" + t.format("ss") + "</td>"), t.add(5, "s");
				e.empty().append(a)
			},
			Y = function() {
				var a = k.find(".timepicker span[data-time-component]"),
					e, n;
				ve || (e = k.find(".timepicker [data-action=togglePeriod]"), n = he.clone().add(12 <= he.hours() ? -12 : 12, "h"), e.text(he.format("A")), P(n, "h") ? e.removeClass("disabled") : e.addClass("disabled")), a.filter("[data-time-component=hours]").text(he.format(ve ? "HH" : "hh")), a.filter("[data-time-component=minutes]").text(he.format("mm")), a.filter("[data-time-component=seconds]").text(he.format("ss")), V(), W(), K()
			},
			X = function() {
				k && (U(), Y())
			},
			Q = function(a) {
				var n = d ? null : he;
				return a ? (a = a.clone().locale(h.locale), v() && a.tz(h.timeZone), 1 !== h.stepping && a.minutes(Math.round(a.minutes() / h.stepping) * h.stepping).seconds(0), void (P(a) ? (he = a, fe.val(he.format(ye)), m.data("date", he.format(ye)), d = !1, X(), H({
					type: "dp.change",
					date: he.clone(),
					oldDate: n
				})) : (h.keepInvalid ? H({
					type: "dp.change",
					date: a,
					oldDate: n
				}) : fe.val(d ? "" : he.format(ye)), H({
					type: "dp.error",
					date: a,
					oldDate: n
				})))) : (d = !0, fe.val(""), m.data("date", ""), H({
					type: "dp.change",
					date: !1,
					oldDate: n
				}), void X())
			},
			_ = function() {
				var a = !1;
				return k ? (k.find(".collapse").each(function() {
					var e = p(this).data("collapse");
					return !(e && e.transitioning) || (a = !0, !1)
				}), a ? g : (f && f.hasClass("btn") && f.toggleClass("active"), k.hide(), p(window).off("resize", F), k.off("click", "[data-action]"), k.off("mousedown", !1), k.remove(), k = !1, H({
					type: "dp.hide",
					date: he.clone()
				}), fe.blur(), _e = 0, ge = he.clone(), g)) : g
			},
			Z = function() {
				Q(null)
			},
			J = function(t) {
				return void 0 === h.parseInputDate ? u.isMoment(t) || (t = b(t)) : t = h.parseInputDate(t), t
			},
			ee = {
				next: function() {
					var a = t[_e].navFnc;
					ge.add(t[_e].navStep, a), U(), I(a)
				},
				previous: function() {
					var a = t[_e].navFnc;
					ge.subtract(t[_e].navStep, a), U(), I(a)
				},
				pickerSwitch: function() {
					q(1)
				},
				selectMonth: function(a) {
					var e = p(a.target).closest("tbody").find("span").index(p(a.target));
					ge.month(e), _e === n ? (Q(he.clone().year(ge.year()).month(ge.month())), h.inline || _()) : (q(-1), U()), I("M")
				},
				selectYear: function(a) {
					var e = parseInt(p(a.target).text(), 10) || 0;
					ge.year(e), _e === n ? (Q(he.clone().year(ge.year())), h.inline || _()) : (q(-1), U()), I("YYYY")
				},
				selectDecade: function(a) {
					var e = parseInt(p(a.target).data("selection"), 10) || 0;
					ge.year(e), _e === n ? (Q(he.clone().year(ge.year())), h.inline || _()) : (q(-1), U()), I("YYYY")
				},
				selectDay: function(a) {
					var e = ge.clone();
					p(a.target).is(".old") && e.subtract(1, "M"), p(a.target).is(".new") && e.add(1, "M"), Q(e.date(parseInt(p(a.target).text(), 10))), y() || h.keepOpen || h.inline || _()
				},
				incrementHours: function() {
					var t = he.clone().add(1, "h");
					P(t, "h") && Q(t)
				},
				incrementMinutes: function() {
					var t = he.clone().add(h.stepping, "m");
					P(t, "m") && Q(t)
				},
				incrementSeconds: function() {
					var t = he.clone().add(1, "s");
					P(t, "s") && Q(t)
				},
				decrementHours: function() {
					var t = he.clone().subtract(1, "h");
					P(t, "h") && Q(t)
				},
				decrementMinutes: function() {
					var t = he.clone().subtract(h.stepping, "m");
					P(t, "m") && Q(t)
				},
				decrementSeconds: function() {
					var t = he.clone().subtract(1, "s");
					P(t, "s") && Q(t)
				},
				togglePeriod: function() {
					Q(he.clone().add(12 <= he.hours() ? -12 : 12, "h"))
				},
				togglePicker: function(s) {
					var t = p(s.target),
						a = t.closest("ul"),
						e = a.find(".in"),
						i = a.find(".collapse:not(.in)"),
						n;
					if (e && e.length) {
						if (n = e.data("collapse"), n && n.transitioning) return;
						e.collapse ? (e.collapse("hide"), i.collapse("show")) : (e.removeClass("in"), i.addClass("in")), t.is("span") ? t.toggleClass(h.icons.time + " " + h.icons.date) : t.find("span").toggleClass(h.icons.time + " " + h.icons.date)
					}
				},
				showPicker: function() {
					k.find(".timepicker > div:not(.timepicker-picker)").hide(), k.find(".timepicker .timepicker-picker").show()
				},
				showHours: function() {
					k.find(".timepicker .timepicker-picker").hide(), k.find(".timepicker .timepicker-hours").show()
				},
				showMinutes: function() {
					k.find(".timepicker .timepicker-picker").hide(), k.find(".timepicker .timepicker-minutes").show()
				},
				showSeconds: function() {
					k.find(".timepicker .timepicker-picker").hide(), k.find(".timepicker .timepicker-seconds").show()
				},
				selectHour: function(a) {
					var e = parseInt(p(a.target).text(), 10);
					ve || (12 <= he.hours() ? 12 !== e && (e += 12) : 12 === e && (e = 0)), Q(he.clone().hours(e)), ee.showPicker.call(g)
				},
				selectMinute: function(t) {
					Q(he.clone().minutes(parseInt(p(t.target).text(), 10))), ee.showPicker.call(g)
				},
				selectSecond: function(t) {
					Q(he.clone().seconds(parseInt(p(t.target).text(), 10))), ee.showPicker.call(g)
				},
				clear: Z,
				today: function() {
					var t = b();
					P(t, "d") && Q(t)
				},
				close: _
			},
			te = function(t) {
				return !p(t.currentTarget).is(".disabled") && (ee[p(t.currentTarget).data("action")].apply(g, arguments), !1)
			},
			ae = function() {
				var t;
				return fe.prop("disabled") || !h.ignoreReadonly && fe.prop("readonly") || k ? g : (void 0 !== fe.val() && 0 !== fe.val().trim().length ? Q(J(fe.val().trim())) : d && h.useCurrent && (h.inline || fe.is("input") && 0 === fe.val().trim().length) && (t = b(), "string" == typeof h.useCurrent && (t = {
					year: function(t) {
						return t.month(0).date(1).hours(0).seconds(0).minutes(0)
					},
					month: function(t) {
						return t.date(1).hours(0).seconds(0).minutes(0)
					},
					day: function(t) {
						return t.hours(0).seconds(0).minutes(0)
					},
					hour: function(t) {
						return t.seconds(0).minutes(0)
					},
					minute: function(t) {
						return t.seconds(0)
					}
				}[h.useCurrent](t)), Q(t)), k = E(), B(), G(), k.find(".timepicker-hours").hide(), k.find(".timepicker-minutes").hide(), k.find(".timepicker-seconds").hide(), X(), q(), p(window).on("resize", F), k.on("click", "[data-action]", te), k.on("mousedown", !1), f && f.hasClass("btn") && f.toggleClass("active"), F(), k.show(), h.focusOnShow && !fe.is(":focus") && fe.focus(), H({
					type: "dp.show"
				}), g)
			},
			oe = function() {
				return k ? _() : ae()
			},
			se = function(d) {
				var t = null,
					u = [],
					n = {},
					o = d.which,
					i, m, f, v;
				for (i in c[o] = "p", c) c.hasOwnProperty(i) && "p" === c[i] && (u.push(i), parseInt(i, 10) !== o && (n[i] = !0));
				for (i in h.keyBinds)
					if (h.keyBinds.hasOwnProperty(i) && "function" == typeof h.keyBinds[i] && (f = i.split(" "), f.length === u.length && e[o] === f[f.length - 1])) {
						for (v = !0, m = f.length - 2; 0 <= m; m--)
							if (!(e[f[m]] in n)) {
								v = !1;
								break
							} if (v) {
								t = h.keyBinds[i];
								break
							}
					} t && (t.call(g, k), d.stopPropagation(), d.preventDefault())
			},
			re = function(t) {
				c[t.which] = "r", t.stopPropagation(), t.preventDefault()
			},
			le = function(n) {
				var e = p(n.target).val().trim(),
					t = e ? J(e) : null;
				return Q(t), n.stopImmediatePropagation(), !1
			},
			de = function() {
				fe.on({
					change: le,
					blur: h.debug ? "" : _,
					keydown: se,
					keyup: re,
					focus: h.allowInputToggle ? ae : ""
				}), m.is("input") ? fe.on({
					focus: ae
				}) : f && (f.on("click", oe), f.on("mousedown", !1))
			},
			ce = function() {
				fe.off({
					change: le,
					blur: blur,
					keydown: se,
					keyup: re,
					focus: h.allowInputToggle ? _ : ""
				}), m.is("input") ? fe.off({
					focus: ae
				}) : f && (f.off("click", oe), f.off("mousedown", !1))
			},
			pe = function(a) {
				var n = {};
				return p.each(a, function() {
					var t = J(this);
					t.isValid() && (n[t.format("YYYY-MM-DD")] = !0)
				}), !!Object.keys(n).length && n
			},
			ue = function(a) {
				var e = {};
				return p.each(a, function() {
					e[this] = !0
				}), !!Object.keys(e).length && e
			},
			me = function() {
				var t = h.format || "L LT";
				ye = t.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(a) {
					var e = he.localeData().longDateFormat(a) || a;
					return e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(t) {
						return he.localeData().longDateFormat(t) || t
					})
				}), be = h.extraFormats ? h.extraFormats.slice() : [], 0 > be.indexOf(t) && 0 > be.indexOf(ye) && be.push(ye), ve = 1 > ye.toLowerCase().indexOf("a") && 1 > ye.replace(/\[.*?\]/g, "").indexOf("h"), w("y") && (n = 2), w("M") && (n = 1), w("d") && (n = 0), _e = Math.max(n, _e), d || Q(he)
			},
			he, ge, fe, ve, ye, be, _e;
		if (g.destroy = function() {
			_(), ce(), m.removeData("DateTimePicker"), m.removeData("date")
		}, g.toggle = oe, g.show = ae, g.hide = _, g.disable = function() {
			return _(), f && f.hasClass("btn") && f.addClass("disabled"), fe.prop("disabled", !0), g
		}, g.enable = function() {
			return f && f.hasClass("btn") && f.removeClass("disabled"), fe.prop("disabled", !1), g
		}, g.ignoreReadonly = function(t) {
			if (0 === arguments.length) return h.ignoreReadonly;
			if ("boolean" != typeof t) throw new TypeError("ignoreReadonly () expects a boolean parameter");
			return h.ignoreReadonly = t, g
		}, g.options = function(t) {
			if (0 === arguments.length) return p.extend(!0, {}, h);
			if (!(t instanceof Object)) throw new TypeError("options() options parameter should be an object");
			return p.extend(!0, h, t), p.each(h, function(a, e) {
				if (void 0 === g[a]) throw new TypeError("option " + a + " is not recognized!");
				g[a](e)
			}), g
		}, g.date = function(t) {
			if (0 === arguments.length) return d ? null : he.clone();
			if (!(null === t || "string" == typeof t || u.isMoment(t) || t instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
			return Q(null === t ? null : J(t)), g
		}, g.format = function(t) {
			if (0 === arguments.length) return h.format;
			if ("string" != typeof t && ("boolean" != typeof t || !1 !== t)) throw new TypeError("format() expects a string or boolean:false parameter " + t);
			return h.format = t, ye && me(), g
		}, g.timeZone = function(t) {
			if (0 === arguments.length) return h.timeZone;
			if ("string" != typeof t) throw new TypeError("newZone() expects a string parameter");
			return h.timeZone = t, g
		}, g.dayViewHeaderFormat = function(t) {
			if (0 === arguments.length) return h.dayViewHeaderFormat;
			if ("string" != typeof t) throw new TypeError("dayViewHeaderFormat() expects a string parameter");
			return h.dayViewHeaderFormat = t, g
		}, g.extraFormats = function(t) {
			if (0 === arguments.length) return h.extraFormats;
			if (!1 !== t && !(t instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
			return h.extraFormats = t, be && me(), g
		}, g.disabledDates = function(t) {
			if (0 === arguments.length) return h.disabledDates ? p.extend({}, h.disabledDates) : h.disabledDates;
			if (!t) return h.disabledDates = !1, X(), g;
			if (!(t instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
			return h.disabledDates = pe(t), h.enabledDates = !1, X(), g
		}, g.enabledDates = function(t) {
			if (0 === arguments.length) return h.enabledDates ? p.extend({}, h.enabledDates) : h.enabledDates;
			if (!t) return h.enabledDates = !1, X(), g;
			if (!(t instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
			return h.enabledDates = pe(t), h.disabledDates = !1, X(), g
		}, g.daysOfWeekDisabled = function(a) {
			if (0 === arguments.length) return h.daysOfWeekDisabled.splice(0);
			if ("boolean" == typeof a && !a) return h.daysOfWeekDisabled = !1, X(), g;
			if (!(a instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
			if (h.daysOfWeekDisabled = a.reduce(function(a, e) {
				return e = parseInt(e, 10), 6 < e || 0 > e || isNaN(e) ? a : (-1 === a.indexOf(e) && a.push(e), a)
			}, []).sort(), h.useCurrent && !h.keepInvalid) {
				for (var e = 0; !P(he, "d");) {
					if (he.add(1, "d"), 7 == e) throw "Tried 7 times to find a valid date";
					e++
				}
				Q(he)
			}
			return X(), g
		}, g.maxDate = function(a) {
			if (0 === arguments.length) return h.maxDate ? h.maxDate.clone() : h.maxDate;
			if ("boolean" == typeof a && !1 === a) return h.maxDate = !1, X(), g;
			"string" == typeof a && ("now" !== a && "moment" !== a || (a = b()));
			var n = J(a);
			if (!n.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + a);
			if (h.minDate && n.isBefore(h.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + n.format(ye));
			return h.maxDate = n, h.useCurrent && !h.keepInvalid && he.isAfter(a) && Q(h.maxDate), ge.isAfter(n) && (ge = n.clone().subtract(h.stepping, "m")), X(), g
		}, g.minDate = function(a) {
			if (0 === arguments.length) return h.minDate ? h.minDate.clone() : h.minDate;
			if ("boolean" == typeof a && !1 === a) return h.minDate = !1, X(), g;
			"string" == typeof a && ("now" !== a && "moment" !== a || (a = b()));
			var n = J(a);
			if (!n.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + a);
			if (h.maxDate && n.isAfter(h.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + n.format(ye));
			return h.minDate = n, h.useCurrent && !h.keepInvalid && he.isBefore(a) && Q(h.minDate), ge.isBefore(n) && (ge = n.clone().add(h.stepping, "m")), X(), g
		}, g.defaultDate = function(a) {
			if (0 === arguments.length) return h.defaultDate ? h.defaultDate.clone() : h.defaultDate;
			if (!a) return h.defaultDate = !1, g;
			"string" == typeof a && (a = "now" === a || "moment" === a ? b() : b(a));
			var n = J(a);
			if (!n.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + a);
			if (!P(n)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
			return h.defaultDate = n, (h.defaultDate && h.inline || "" === fe.val().trim()) && Q(h.defaultDate), g
		}, g.locale = function(t) {
			if (0 === arguments.length) return h.locale;
			if (!u.localeData(t)) throw new TypeError("locale() locale " + t + " is not loaded from moment locales!");
			return h.locale = t, he.locale(h.locale), ge.locale(h.locale), ye && me(), k && (_(), ae()), g
		}, g.stepping = function(t) {
			return 0 === arguments.length ? h.stepping : (t = parseInt(t, 10), (isNaN(t) || 1 > t) && (t = 1), h.stepping = t, g)
		}, g.useCurrent = function(a) {
			var e = ["year", "month", "day", "hour", "minute"];
			if (0 === arguments.length) return h.useCurrent;
			if ("boolean" != typeof a && "string" != typeof a) throw new TypeError("useCurrent() expects a boolean or string parameter");
			if ("string" == typeof a && -1 === e.indexOf(a.toLowerCase())) throw new TypeError("useCurrent() expects a string parameter of " + e.join(", "));
			return h.useCurrent = a, g
		}, g.collapse = function(t) {
			if (0 === arguments.length) return h.collapse;
			if ("boolean" != typeof t) throw new TypeError("collapse() expects a boolean parameter");
			return h.collapse === t ? g : (h.collapse = t, k && (_(), ae()), g)
		}, g.icons = function(t) {
			if (0 === arguments.length) return p.extend({}, h.icons);
			if (!(t instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
			return p.extend(h.icons, t), k && (_(), ae()), g
		}, g.tooltips = function(t) {
			if (0 === arguments.length) return p.extend({}, h.tooltips);
			if (!(t instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");
			return p.extend(h.tooltips, t), k && (_(), ae()), g
		}, g.useStrict = function(t) {
			if (0 === arguments.length) return h.useStrict;
			if ("boolean" != typeof t) throw new TypeError("useStrict() expects a boolean parameter");
			return h.useStrict = t, g
		}, g.sideBySide = function(t) {
			if (0 === arguments.length) return h.sideBySide;
			if ("boolean" != typeof t) throw new TypeError("sideBySide() expects a boolean parameter");
			return h.sideBySide = t, k && (_(), ae()), g
		}, g.viewMode = function(t) {
			if (0 === arguments.length) return h.viewMode;
			if ("string" != typeof t) throw new TypeError("viewMode() expects a string parameter");
			if (-1 === i.indexOf(t)) throw new TypeError("viewMode() parameter must be one of (" + i.join(", ") + ") value");
			return h.viewMode = t, _e = Math.max(i.indexOf(t), n), q(), g
		}, g.toolbarPlacement = function(t) {
			if (0 === arguments.length) return h.toolbarPlacement;
			if ("string" != typeof t) throw new TypeError("toolbarPlacement() expects a string parameter");
			if (-1 === s.indexOf(t)) throw new TypeError("toolbarPlacement() parameter must be one of (" + s.join(", ") + ") value");
			return h.toolbarPlacement = t, k && (_(), ae()), g
		}, g.widgetPositioning = function(t) {
			if (0 === arguments.length) return p.extend({}, h.widgetPositioning);
			if ("[object Object]" !== {}.toString.call(t)) throw new TypeError("widgetPositioning() expects an object variable");
			if (t.horizontal) {
				if ("string" != typeof t.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
				if (t.horizontal = t.horizontal.toLowerCase(), -1 === r.indexOf(t.horizontal)) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + r.join(", ") + ")");
				h.widgetPositioning.horizontal = t.horizontal
			}
			if (t.vertical) {
				if ("string" != typeof t.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
				if (t.vertical = t.vertical.toLowerCase(), -1 === o.indexOf(t.vertical)) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + o.join(", ") + ")");
				h.widgetPositioning.vertical = t.vertical
			}
			return X(), g
		}, g.calendarWeeks = function(t) {
			if (0 === arguments.length) return h.calendarWeeks;
			if ("boolean" != typeof t) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
			return h.calendarWeeks = t, X(), g
		}, g.showTodayButton = function(t) {
			if (0 === arguments.length) return h.showTodayButton;
			if ("boolean" != typeof t) throw new TypeError("showTodayButton() expects a boolean parameter");
			return h.showTodayButton = t, k && (_(), ae()), g
		}, g.showClear = function(t) {
			if (0 === arguments.length) return h.showClear;
			if ("boolean" != typeof t) throw new TypeError("showClear() expects a boolean parameter");
			return h.showClear = t, k && (_(), ae()), g
		}, g.widgetParent = function(t) {
			if (0 === arguments.length) return h.widgetParent;
			if ("string" == typeof t && (t = p(t)), null !== t && "string" != typeof t && !(t instanceof p)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
			return h.widgetParent = t, k && (_(), ae()), g
		}, g.keepOpen = function(t) {
			if (0 === arguments.length) return h.keepOpen;
			if ("boolean" != typeof t) throw new TypeError("keepOpen() expects a boolean parameter");
			return h.keepOpen = t, g
		}, g.focusOnShow = function(t) {
			if (0 === arguments.length) return h.focusOnShow;
			if ("boolean" != typeof t) throw new TypeError("focusOnShow() expects a boolean parameter");
			return h.focusOnShow = t, g
		}, g.inline = function(t) {
			if (0 === arguments.length) return h.inline;
			if ("boolean" != typeof t) throw new TypeError("inline() expects a boolean parameter");
			return h.inline = t, g
		}, g.clear = function() {
			return Z(), g
		}, g.keyBinds = function(t) {
			return 0 === arguments.length ? h.keyBinds : (h.keyBinds = t, g)
		}, g.getMoment = function(t) {
			return b(t)
		}, g.debug = function(t) {
			if ("boolean" != typeof t) throw new TypeError("debug() expects a boolean parameter");
			return h.debug = t, g
		}, g.allowInputToggle = function(t) {
			if (0 === arguments.length) return h.allowInputToggle;
			if ("boolean" != typeof t) throw new TypeError("allowInputToggle() expects a boolean parameter");
			return h.allowInputToggle = t, g
		}, g.showClose = function(t) {
			if (0 === arguments.length) return h.showClose;
			if ("boolean" != typeof t) throw new TypeError("showClose() expects a boolean parameter");
			return h.showClose = t, g
		}, g.keepInvalid = function(t) {
			if (0 === arguments.length) return h.keepInvalid;
			if ("boolean" != typeof t) throw new TypeError("keepInvalid() expects a boolean parameter");
			return h.keepInvalid = t, g
		}, g.datepickerInput = function(t) {
			if (0 === arguments.length) return h.datepickerInput;
			if ("string" != typeof t) throw new TypeError("datepickerInput() expects a string parameter");
			return h.datepickerInput = t, g
		}, g.parseInputDate = function(t) {
			if (0 === arguments.length) return h.parseInputDate;
			if ("function" != typeof t) throw new TypeError("parseInputDate() sholud be as function");
			return h.parseInputDate = t, g
		}, g.disabledTimeIntervals = function(t) {
			if (0 === arguments.length) return h.disabledTimeIntervals ? p.extend({}, h.disabledTimeIntervals) : h.disabledTimeIntervals;
			if (!t) return h.disabledTimeIntervals = !1, X(), g;
			if (!(t instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");
			return h.disabledTimeIntervals = t, X(), g
		}, g.disabledHours = function(a) {
			if (0 === arguments.length) return h.disabledHours ? p.extend({}, h.disabledHours) : h.disabledHours;
			if (!a) return h.disabledHours = !1, X(), g;
			if (!(a instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
			if (h.disabledHours = ue(a), h.enabledHours = !1, h.useCurrent && !h.keepInvalid) {
				for (var e = 0; !P(he, "h");) {
					if (he.add(1, "h"), 24 == e) throw "Tried 24 times to find a valid date";
					e++
				}
				Q(he)
			}
			return X(), g
		}, g.enabledHours = function(a) {
			if (0 === arguments.length) return h.enabledHours ? p.extend({}, h.enabledHours) : h.enabledHours;
			if (!a) return h.enabledHours = !1, X(), g;
			if (!(a instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
			if (h.enabledHours = ue(a), h.disabledHours = !1, h.useCurrent && !h.keepInvalid) {
				for (var e = 0; !P(he, "h");) {
					if (he.add(1, "h"), 24 == e) throw "Tried 24 times to find a valid date";
					e++
				}
				Q(he)
			}
			return X(), g
		}, g.viewDate = function(t) {
			if (0 === arguments.length) return ge.clone();
			if (!t) return ge = he.clone(), g;
			if (!("string" == typeof t || u.isMoment(t) || t instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
			return ge = J(t), I(), g
		}, m.is("input")) fe = m;
		else if (fe = m.find(h.datepickerInput), 0 === fe.length) fe = m.find("input");
		else if (!fe.is("input")) throw new Error("CSS class \"" + h.datepickerInput + "\" cannot be applied to non input element");
		if (m.hasClass("input-group") && (f = 0 === m.find(".datepickerbutton").length ? m.find(".input-group-addon") : m.find(".datepickerbutton")), !h.inline && !fe.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
		return he = b(), ge = he.clone(), p.extend(!0, h, function() {
			var n = {},
				o;
			return o = m.is("input") || h.inline ? m.data() : m.find("input").data(), o.dateOptions && o.dateOptions instanceof Object && (n = p.extend(!0, n, o.dateOptions)), p.each(h, function(t) {
				var e = "date" + t.charAt(0).toUpperCase() + t.slice(1);
				void 0 !== o[e] && (n[t] = o[e])
			}), n
		}()), g.options(h), me(), de(), fe.prop("disabled") && g.disable(), fe.is("input") && 0 !== fe.val().trim().length ? Q(J(fe.val().trim())) : h.defaultDate && void 0 === fe.attr("placeholder") && Q(h.defaultDate), h.inline && ae(), g
	};
	p.fn.datetimepicker = function(s) {
		s = s || {};
		var r = Array.prototype.slice.call(arguments, 1),
			a = !0,
			l;
		if ("object" == typeof s) return this.each(function() {
			var e = p(this);
			e.data("DateTimePicker") || (s = p.extend(!0, {}, p.fn.datetimepicker.defaults, s), e.data("DateTimePicker", n(e, s)))
		});
		if ("string" == typeof s) return this.each(function() {
			var t = p(this),
				e = t.data("DateTimePicker");
			if (!e) throw new Error("bootstrap-datetimepicker(\"" + s + "\") method was called on an element that is not using DateTimePicker");
			l = e[s].apply(e, r), a = l === e
		}), a || -1 < p.inArray(s, ["destroy", "hide", "show", "toggle"]) ? this : l;
		throw new TypeError("Invalid arguments for DateTimePicker: " + s)
	}, p.fn.datetimepicker.defaults = {
		timeZone: "",
		format: !1,
		dayViewHeaderFormat: "MMMM YYYY",
		extraFormats: !1,
		stepping: 1,
		minDate: !1,
		maxDate: !1,
		useCurrent: !0,
		collapse: !0,
		locale: u.locale(),
		defaultDate: !1,
		disabledDates: !1,
		enabledDates: !1,
		icons: {
			time: "glyphicon glyphicon-time",
			date: "glyphicon glyphicon-calendar",
			up: "glyphicon glyphicon-chevron-up",
			down: "glyphicon glyphicon-chevron-down",
			previous: "glyphicon glyphicon-chevron-left",
			next: "glyphicon glyphicon-chevron-right",
			today: "glyphicon glyphicon-screenshot",
			clear: "glyphicon glyphicon-trash",
			close: "glyphicon glyphicon-remove"
		},
		tooltips: {
			today: "Go to today",
			clear: "Clear selection",
			close: "Close the picker",
			selectMonth: "Select Month",
			prevMonth: "Previous Month",
			nextMonth: "Next Month",
			selectYear: "Select Year",
			prevYear: "Previous Year",
			nextYear: "Next Year",
			selectDecade: "Select Decade",
			prevDecade: "Previous Decade",
			nextDecade: "Next Decade",
			prevCentury: "Previous Century",
			nextCentury: "Next Century",
			pickHour: "Pick Hour",
			incrementHour: "Increment Hour",
			decrementHour: "Decrement Hour",
			pickMinute: "Pick Minute",
			incrementMinute: "Increment Minute",
			decrementMinute: "Decrement Minute",
			pickSecond: "Pick Second",
			incrementSecond: "Increment Second",
			decrementSecond: "Decrement Second",
			togglePeriod: "Toggle Period",
			selectTime: "Select Time"
		},
		useStrict: !1,
		sideBySide: !1,
		daysOfWeekDisabled: !1,
		calendarWeeks: !1,
		viewMode: "days",
		toolbarPlacement: "default",
		showTodayButton: !1,
		showClear: !1,
		showClose: !1,
		widgetPositioning: {
			horizontal: "auto",
			vertical: "auto"
		},
		widgetParent: null,
		ignoreReadonly: !1,
		keepOpen: !1,
		focusOnShow: !0,
		inline: !1,
		keepInvalid: !1,
		datepickerInput: ".datepickerinput",
		keyBinds: {
			up: function(a) {
				if (a) {
					var e = this.date() || this.getMoment();
					a.find(".datepicker").is(":visible") ? this.date(e.clone().subtract(7, "d")) : this.date(e.clone().add(this.stepping(), "m"))
				}
			},
			down: function(a) {
				if (!a) return void this.show();
				var e = this.date() || this.getMoment();
				a.find(".datepicker").is(":visible") ? this.date(e.clone().add(7, "d")) : this.date(e.clone().subtract(this.stepping(), "m"))
			},
			"control up": function(a) {
				if (a) {
					var e = this.date() || this.getMoment();
					a.find(".datepicker").is(":visible") ? this.date(e.clone().subtract(1, "y")) : this.date(e.clone().add(1, "h"))
				}
			},
			"control down": function(a) {
				if (a) {
					var e = this.date() || this.getMoment();
					a.find(".datepicker").is(":visible") ? this.date(e.clone().add(1, "y")) : this.date(e.clone().subtract(1, "h"))
				}
			},
			left: function(a) {
				if (a) {
					var e = this.date() || this.getMoment();
					a.find(".datepicker").is(":visible") && this.date(e.clone().subtract(1, "d"))
				}
			},
			right: function(a) {
				if (a) {
					var e = this.date() || this.getMoment();
					a.find(".datepicker").is(":visible") && this.date(e.clone().add(1, "d"))
				}
			},
			pageUp: function(a) {
				if (a) {
					var e = this.date() || this.getMoment();
					a.find(".datepicker").is(":visible") && this.date(e.clone().subtract(1, "M"))
				}
			},
			pageDown: function(a) {
				if (a) {
					var e = this.date() || this.getMoment();
					a.find(".datepicker").is(":visible") && this.date(e.clone().add(1, "M"))
				}
			},
			enter: function() {
				this.hide()
			},
			escape: function() {
				this.hide()
			},
			"control space": function(t) {
				t.find(".timepicker").is(":visible") && t.find(".btn[data-action=\"togglePeriod\"]").click()
			},
			t: function() {
				this.date(this.getMoment())
			},
			delete: function() {
				this.clear()
			}
		},
		debug: !1,
		allowInputToggle: !1,
		disabledTimeIntervals: !1,
		disabledHours: !1,
		enabledHours: !1,
		viewDate: !1
	}, "undefined" != typeof module && (module.exports = p.fn.datetimepicker)
}), jQuery.extend(jQuery.easing, {
	easeInQuad: function(t, e, s, i, n) {
		return i * (e /= n) * e + s
	},
	easeOutQuad: function(t, e, s, i, n) {
		return -i * (e /= n) * (e - 2) + s
	},
	easeInOutQuad: function(t, e, s, i, n) {
		return 1 > (e /= n / 2) ? i / 2 * e * e + s : -i / 2 * (--e * (e - 2) - 1) + s
	},
	easeInCubic: function(t, e, s, i, n) {
		return i * (e /= n) * e * e + s
	},
	easeOutCubic: function(t, e, s, i, n) {
		return i * ((e = e / n - 1) * e * e + 1) + s
	},
	easeInOutCubic: function(t, e, s, i, n) {
		return 1 > (e /= n / 2) ? i / 2 * e * e * e + s : i / 2 * ((e -= 2) * e * e + 2) + s
	},
	easeInQuart: function(t, e, s, i, n) {
		return i * (e /= n) * e * e * e + s
	},
	easeOutQuart: function(t, e, s, i, n) {
		return -i * ((e = e / n - 1) * e * e * e - 1) + s
	},
	easeInOutQuart: function(t, e, s, i, n) {
		return 1 > (e /= n / 2) ? i / 2 * e * e * e * e + s : -i / 2 * ((e -= 2) * e * e * e - 2) + s
	},
	easeInQuint: function(t, e, s, i, n) {
		return i * (e /= n) * e * e * e * e + s
	},
	easeOutQuint: function(t, e, s, i, n) {
		return i * ((e = e / n - 1) * e * e * e * e + 1) + s
	},
	easeInOutQuint: function(t, e, s, i, n) {
		return 1 > (e /= n / 2) ? i / 2 * e * e * e * e * e + s : i / 2 * ((e -= 2) * e * e * e * e + 2) + s
	},
	easeInSine: function(o, e, a, t, i) {
		return -t * Math.cos(e / i * (Math.PI / 2)) + t + a
	},
	easeOutSine: function(o, e, a, t, i) {
		return t * Math.sin(e / i * (Math.PI / 2)) + a
	},
	easeInOutSine: function(o, e, a, t, i) {
		return -t / 2 * (Math.cos(Math.PI * e / i) - 1) + a
	},
	easeInExpo: function(o, e, a, t, i) {
		return 0 == e ? a : t * Math.pow(2, 10 * (e / i - 1)) + a
	},
	easeOutExpo: function(o, e, a, t, i) {
		return e == i ? a + t : t * (-Math.pow(2, -10 * e / i) + 1) + a
	},
	easeInOutExpo: function(t, e, s, i, n) {
		return 0 == e ? s : e == n ? s + i : 1 > (e /= n / 2) ? i / 2 * Math.pow(2, 10 * (e - 1)) + s : i / 2 * (-Math.pow(2, -10 * --e) + 2) + s
	},
	easeInCirc: function(t, e, s, i, n) {
		return -i * (Math.sqrt(1 - (e /= n) * e) - 1) + s
	},
	easeOutCirc: function(t, e, s, i, n) {
		return i * Math.sqrt(1 - (e = e / n - 1) * e) + s
	},
	easeInOutCirc: function(t, e, s, i, n) {
		return 1 > (e /= n / 2) ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + s : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + s
	},
	easeInElastic: function(t, e, a, n, o) {
		var s = 1.70158,
			r = 0,
			p = n;
		if (0 == e) return a;
		if (1 == (e /= o)) return a + n;
		if (r || (r = .3 * o), p < Math.abs(n)) {
			p = n;
			var s = r / 4
		} else var s = r / (2 * Math.PI) * Math.asin(n / p);
		return -(p * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - s) * (2 * Math.PI) / r)) + a
	},
	easeOutElastic: function(t, e, a, n, o) {
		var s = 1.70158,
			r = 0,
			p = n;
		if (0 == e) return a;
		if (1 == (e /= o)) return a + n;
		if (r || (r = .3 * o), p < Math.abs(n)) {
			p = n;
			var s = r / 4
		} else var s = r / (2 * Math.PI) * Math.asin(n / p);
		return p * Math.pow(2, -10 * e) * Math.sin((e * o - s) * (2 * Math.PI) / r) + n + a
	},
	easeInOutElastic: function(t, e, a, n, o) {
		var s = 1.70158,
			r = 0,
			p = n;
		if (0 == e) return a;
		if (2 == (e /= o / 2)) return a + n;
		if (r || (r = o * (1.5 * .3)), p < Math.abs(n)) {
			p = n;
			var s = r / 4
		} else var s = r / (2 * Math.PI) * Math.asin(n / p);
		return 1 > e ? -.5 * (p * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - s) * (2 * Math.PI) / r)) + a : .5 * (p * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - s) * (2 * Math.PI) / r)) + n + a
	},
	easeInBack: function(t, e, s, i, n, o) {
		return null == o && (o = 1.70158), i * (e /= n) * e * ((o + 1) * e - o) + s
	},
	easeOutBack: function(t, e, s, i, n, o) {
		return null == o && (o = 1.70158), i * ((e = e / n - 1) * e * ((o + 1) * e + o) + 1) + s
	},
	easeInOutBack: function(t, e, s, i, n, o) {
		return null == o && (o = 1.70158), 1 > (e /= n / 2) ? i / 2 * (e * e * (((o *= 1.525) + 1) * e - o)) + s : i / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + s
	},
	easeInBounce: function(o, e, a, t, i) {
		return t - jQuery.easing.easeOutBounce(o, i - e, 0, t, i) + a
	},
	easeOutBounce: function(t, e, s, i, n) {
		return (e /= n) < 1 / 2.75 ? i * (7.5625 * e * e) + s : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + s : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + s : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + s
	},
	easeInOutBounce: function(o, e, a, t, i) {
		return e < i / 2 ? .5 * jQuery.easing.easeInBounce(o, 2 * e, 0, t, i) + a : .5 * jQuery.easing.easeOutBounce(o, 2 * e - i, 0, t, i) + .5 * t + a
	}
}),
	function(c) {
		c.fn.extend({
			easyResponsiveTabs: function(r) {
				var r = c.extend({
					type: "default",
					width: "auto",
					fit: !0,
					closed: !1,
					activate: function() { }
				}, r),
					e = r,
					s = e.type,
					i = e.fit,
					n = e.width;
				c(this).bind("tabactivate", function(t, a) {
					"function" == typeof r.activate && r.activate.call(a, t)
				}), this.each(function() {
					var e = c(this),
						t = e.find("ul.resp-tabs-list");
					e.find("ul.resp-tabs-list li").addClass("resp-tab-item"), e.css({
						display: "block",
						width: n
					}), e.find(".resp-tabs-container > div").addClass("resp-tab-content"),
						function() {
							"vertical" == s && e.addClass("resp-vtabs"), !0 == i && e.css({
								width: "100%",
								margin: "0px"
							}), "accordion" == s && (e.addClass("resp-easy-accordion"), e.find(".resp-tabs-list").css("display", "none"))
						}();
					var a;
					e.find(".resp-tab-content").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");
					var o = 0;
					e.find(".resp-accordion").each(function() {
						a = c(this);
						var n = e.find(".resp-tab-item:eq(" + o + ")").html();
						e.find(".resp-accordion:eq(" + o + ")").append(n), a.attr("aria-controls", "tab_item-" + o), o++
					});
					var u = 0,
						m;
					e.find(".resp-tab-item").each(function() {
						$tabItem = c(this), $tabItem.attr("aria-controls", "tab_item-" + u), $tabItem.attr("role", "tab"), !0 === r.closed || "accordion" === r.closed && !t.is(":visible") || "tabs" === r.closed && t.is(":visible") || (e.find(".resp-tab-item").first().addClass("resp-tab-active"), e.find(".resp-accordion").first().addClass("resp-tab-active"), e.find(".resp-tab-content").first().addClass("resp-tab-content-active").attr("style", "display:block"));
						var a = 0;
						e.find(".resp-tab-content").each(function() {
							m = c(this), m.attr("aria-labelledby", "tab_item-" + a), a++
						}), u++
					}), e.find("[role=tab]").each(function() {
						var a = c(this);
						a.click(function() {
							var t = a.attr("aria-controls");
							return a.hasClass("resp-accordion") && a.hasClass("resp-tab-active") ? (e.find(".resp-tab-content-active").slideUp("", function() {
								c(this).addClass("resp-accordion-closed")
							}), a.removeClass("resp-tab-active"), !1) : void (!a.hasClass("resp-tab-active") && a.hasClass("resp-accordion") ? (e.find(".resp-tab-active").removeClass("resp-tab-active"), e.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), e.find("[aria-controls=" + t + "]").addClass("resp-tab-active"), e.find(".resp-tab-content[aria-labelledby = " + t + "]").slideDown().addClass("resp-tab-content-active")) : (e.find(".resp-tab-active").removeClass("resp-tab-active"), e.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), e.find("[aria-controls=" + t + "]").addClass("resp-tab-active"), e.find(".resp-tab-content[aria-labelledby = " + t + "]").addClass("resp-tab-content-active").attr("style", "display:block")), a.trigger("tabactivate", a))
						}), c(window).resize(function() {
							e.find(".resp-accordion-closed").removeAttr("style")
						})
					})
				})
			}
		})
	}(jQuery), ! function() {
		"use strict";

		function i(t) {
			if (!t) throw new Error("No options passed to Waypoint constructor");
			if (!t.element) throw new Error("No element option passed to Waypoint constructor");
			if (!t.handler) throw new Error("No handler option passed to Waypoint constructor");
			this.key = "waypoint-" + a, this.options = i.Adapter.extend({}, i.defaults, t), this.element = this.options.element, this.adapter = new i.Adapter(this.element), this.callback = t.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = i.Group.findOrCreate({
				name: this.options.group,
				axis: this.axis
			}), this.context = i.Context.findOrCreateByElement(this.options.context), i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), o[this.key] = this, a += 1
		}
		var a = 0,
			o = {};
		i.prototype.queueTrigger = function(t) {
			this.group.queueTrigger(this, t)
		}, i.prototype.trigger = function(t) {
			this.enabled && this.callback && this.callback.apply(this, t)
		}, i.prototype.destroy = function() {
			this.context.remove(this), this.group.remove(this), delete o[this.key]
		}, i.prototype.disable = function() {
			return this.enabled = !1, this
		}, i.prototype.enable = function() {
			return this.context.refresh(), this.enabled = !0, this
		}, i.prototype.next = function() {
			return this.group.next(this)
		}, i.prototype.previous = function() {
			return this.group.previous(this)
		}, i.invokeAll = function(n) {
			var a = [];
			for (var t in o) a.push(o[t]);
			for (var e = 0, s = a.length; s > e; e++) a[e][n]()
		}, i.destroyAll = function() {
			i.invokeAll("destroy")
		}, i.disableAll = function() {
			i.invokeAll("disable")
		}, i.enableAll = function() {
			i.invokeAll("enable")
		}, i.refreshAll = function() {
			i.Context.refreshAll()
		}, i.viewportHeight = function() {
			return window.innerHeight || document.documentElement.clientHeight
		}, i.viewportWidth = function() {
			return document.documentElement.clientWidth
		}, i.adapters = [], i.defaults = {
			context: window,
			continuous: !0,
			enabled: !0,
			group: "default",
			horizontal: !1,
			offset: 0
		}, i.offsetAliases = {
			"bottom-in-view": function() {
				return this.context.innerHeight() - this.adapter.outerHeight()
			},
			"right-in-view": function() {
				return this.context.innerWidth() - this.adapter.outerWidth()
			}
		}, window.Waypoint = i
	}(),
	function() {
		"use strict";

		function n(t) {
			window.setTimeout(t, 1e3 / 60)
		}

		function a(e) {
			this.element = e, this.Adapter = l.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
				x: this.adapter.scrollLeft(),
				y: this.adapter.scrollTop()
			}, this.waypoints = {
				vertical: {},
				horizontal: {}
			}, e.waypointContextKey = this.key, o[e.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
		}
		var i = 0,
			o = {},
			l = window.Waypoint,
			s = window.onload;
		a.prototype.add = function(e) {
			var a = e.options.horizontal ? "horizontal" : "vertical";
			this.waypoints[a][e.key] = e, this.refresh()
		}, a.prototype.checkEmpty = function() {
			var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
				a = this.Adapter.isEmptyObject(this.waypoints.vertical);
			e && a && (this.adapter.off(".waypoints"), delete o[this.key])
		}, a.prototype.createThrottledResizeHandler = function() {
			function e() {
				a.handleResize(), a.didResize = !1
			}
			var a = this;
			this.adapter.on("resize.waypoints", function() {
				a.didResize || (a.didResize = !0, l.requestAnimationFrame(e))
			})
		}, a.prototype.createThrottledScrollHandler = function() {
			function e() {
				a.handleScroll(), a.didScroll = !1
			}
			var a = this;
			this.adapter.on("scroll.waypoints", function() {
				(!a.didScroll || l.isTouch) && (a.didScroll = !0, l.requestAnimationFrame(e))
			})
		}, a.prototype.handleResize = function() {
			l.Context.refreshAll()
		}, a.prototype.handleScroll = function() {
			var c = {},
				d = {
					horizontal: {
						newScroll: this.adapter.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.adapter.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				};
			for (var t in d) {
				var e = d[t],
					i = e.newScroll > e.oldScroll,
					o = i ? e.forward : e.backward;
				for (var n in this.waypoints[t]) {
					var r = this.waypoints[t][n],
						s = e.oldScroll < r.triggerPoint,
						a = e.newScroll >= r.triggerPoint;
					(s && a || !s && !a) && (r.queueTrigger(o), c[r.group.id] = r.group)
				}
			}
			for (var l in c) c[l].flushTriggers();
			this.oldScroll = {
				x: d.horizontal.newScroll,
				y: d.vertical.newScroll
			}
		}, a.prototype.innerHeight = function() {
			return this.element == this.element.window ? l.viewportHeight() : this.adapter.innerHeight()
		}, a.prototype.remove = function(t) {
			delete this.waypoints[t.axis][t.key], this.checkEmpty()
		}, a.prototype.innerWidth = function() {
			return this.element == this.element.window ? l.viewportWidth() : this.adapter.innerWidth()
		}, a.prototype.destroy = function() {
			var n = [];
			for (var a in this.waypoints)
				for (var t in this.waypoints[a]) n.push(this.waypoints[a][t]);
			for (var e = 0, o = n.length; o > e; e++) n[e].destroy()
		}, a.prototype.refresh = function() {
			var t = this.element == this.element.window,
				n = t ? void 0 : this.adapter.offset(),
				c = {},
				e;
			for (var i in this.handleScroll(), e = {
				horizontal: {
					contextOffset: t ? 0 : n.left,
					contextScroll: t ? 0 : this.oldScroll.x,
					contextDimension: this.innerWidth(),
					oldScroll: this.oldScroll.x,
					forward: "right",
					backward: "left",
					offsetProp: "left"
				},
				vertical: {
					contextOffset: t ? 0 : n.top,
					contextScroll: t ? 0 : this.oldScroll.y,
					contextDimension: this.innerHeight(),
					oldScroll: this.oldScroll.y,
					forward: "down",
					backward: "up",
					offsetProp: "top"
				}
			}, e) {
				var p = e[i];
				for (var r in this.waypoints[i]) {
					var s = this.waypoints[i][r],
						a = s.options.offset,
						u = s.triggerPoint,
						m = 0,
						h = null == u,
						f, v, y, b, w;
					s.element !== s.element.window && (m = s.adapter.offset()[p.offsetProp]), "function" == typeof a ? a = a.apply(s) : "string" == typeof a && (a = parseFloat(a), -1 < s.options.offset.indexOf("%") && (a = Math.ceil(p.contextDimension * a / 100))), f = p.contextScroll - p.contextOffset, s.triggerPoint = m + f - a, v = u < p.oldScroll, y = s.triggerPoint >= p.oldScroll, b = v && y, w = !v && !y, !h && b ? (s.queueTrigger(p.backward), c[s.group.id] = s.group) : !h && w ? (s.queueTrigger(p.forward), c[s.group.id] = s.group) : h && p.oldScroll >= s.triggerPoint && (s.queueTrigger(p.forward), c[s.group.id] = s.group)
				}
			}
			return l.requestAnimationFrame(function() {
				for (var t in c) c[t].flushTriggers()
			}), this
		}, a.findOrCreateByElement = function(t) {
			return a.findByElement(t) || new a(t)
		}, a.refreshAll = function() {
			for (var t in o) o[t].refresh()
		}, a.findByElement = function(t) {
			return o[t.waypointContextKey]
		}, window.onload = function() {
			s && s(), a.refreshAll()
		}, l.requestAnimationFrame = function(a) {
			var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || n;
			t.call(window, a)
		}, l.Context = a
	}(),
	function() {
		"use strict";

		function r(e, a) {
			return e.triggerPoint - a.triggerPoint
		}

		function l(e, a) {
			return a.triggerPoint - e.triggerPoint
		}

		function t(t) {
			this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
		}
		var n = {
			vertical: {},
			horizontal: {}
		},
			i = window.Waypoint;
		t.prototype.add = function(t) {
			this.waypoints.push(t)
		}, t.prototype.clearTriggerQueues = function() {
			this.triggerQueues = {
				up: [],
				down: [],
				left: [],
				right: []
			}
		}, t.prototype.flushTriggers = function() {
			for (var t in this.triggerQueues) {
				var e = this.triggerQueues[t];
				e.sort("up" == t || "left" == t ? l : r);
				for (var a = 0, i = e.length, o; i > a; a += 1) o = e[a], (o.options.continuous || a == e.length - 1) && o.trigger([t])
			}
			this.clearTriggerQueues()
		}, t.prototype.next = function(n) {
			this.waypoints.sort(r);
			var t = i.Adapter.inArray(n, this.waypoints),
				e = t === this.waypoints.length - 1;
			return e ? null : this.waypoints[t + 1]
		}, t.prototype.previous = function(a) {
			this.waypoints.sort(r);
			var t = i.Adapter.inArray(a, this.waypoints);
			return t ? this.waypoints[t - 1] : null
		}, t.prototype.queueTrigger = function(e, a) {
			this.triggerQueues[a].push(e)
		}, t.prototype.remove = function(e) {
			var a = i.Adapter.inArray(e, this.waypoints); - 1 < a && this.waypoints.splice(a, 1)
		}, t.prototype.first = function() {
			return this.waypoints[0]
		}, t.prototype.last = function() {
			return this.waypoints[this.waypoints.length - 1]
		}, t.findOrCreate = function(e) {
			return n[e.axis][e.name] || new t(e)
		}, i.Group = t
	}(),
	function() {
		"use strict";

		function i(t) {
			this.$element = a(t)
		}
		var a = window.jQuery,
			t = window.Waypoint;
		a.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(a, t) {
			i.prototype[t] = function() {
				var e = Array.prototype.slice.call(arguments);
				return this.$element[t].apply(this.$element, e)
			}
		}), a.each(["extend", "inArray", "isEmptyObject"], function(n, e) {
			i[e] = a[e]
		}), t.adapters.push({
			name: "jquery",
			Adapter: i
		}), t.Adapter = i
	}(),
	function() {
		"use strict";

		function e(o) {
			return function() {
				var e = [],
					t = arguments[0];
				return o.isFunction(arguments[0]) && (t = o.extend({}, arguments[1]), t.handler = arguments[0]), this.each(function() {
					var a = o.extend({}, t, {
						element: this
					});
					"string" == typeof a.context && (a.context = o(this).closest(a.context)[0]), e.push(new n(a))
				}), e
			}
		}
		var n = window.Waypoint;
		window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
	}(),
	function(i) {
		"use strict";
		i.fn.countUp = function(e) {
			var o = i.extend({
				time: 2e3,
				delay: 10
			}, e);
			return this.each(function() {
				var h = i(this),
					t = o;
				h.waypoint(function() {
					h.data("counterupTo") || h.data("counterupTo", h.text());
					var n = 0 < parseInt(h.data("counter-time")) ? parseInt(h.data("counter-time")) : t.time,
						e = 0 < parseInt(h.data("counter-delay")) ? parseInt(h.data("counter-delay")) : t.delay,
						a = n / e,
						i = h.data("counterupTo"),
						o = [i],
						r = /[0-9]+,[0-9]+/.test(i);
					i = i.replace(/,/g, "");
					for (var l = /^[0-9]+$/.test(i), d = /^[0-9]+\.[0-9]+$/.test(i), p = d ? (i.split(".")[1] || []).length : 0, c = a, g; 1 <= c; c--) {
						if (g = parseInt(Math.round(i / a * c)), d && (g = parseFloat(i / a * c).toFixed(p)), r)
							for (;
								/(\d+)(\d{3})/.test(g.toString());) g = g.toString().replace(/(\d+)(\d{3})/, "$1,$2");
						o.unshift(g)
					}
					h.data("counterup-nums", o), h.text("0"), h.data("counterup-func", function() {
						h.text(h.data("counterup-nums").shift()), h.data("counterup-nums").length ? setTimeout(h.data("counterup-func"), e) : (delete h.data("counterup-nums"), h.data("counterup-nums", null), h.data("counterup-func", null))
					}), setTimeout(h.data("counterup-func"), e)
				}, {
					offset: "100%",
					triggerOnce: !0
				})
			})
		}
	}(jQuery),
	function(v) {
		v.flexslider = function(y, t) {
			var w = v(y),
				n = v.extend({}, v.flexslider.defaults, t),
				o = n.namespace,
				s = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
				i = s ? "touchend" : "click",
				x = "vertical" === n.direction,
				r = n.reverse,
				d = 0 < n.itemWidth,
				c = "fade" === n.animation,
				p = "" !== n.asNavFor,
				u = {};
			v.data(y, "flexslider", w), u = {
				init: function() {
					w.animating = !1, w.currentSlide = n.startAt, w.animatingTo = w.currentSlide, w.atEnd = 0 === w.currentSlide || w.currentSlide === w.last, w.containerSelector = n.selector.substr(0, n.selector.search(" ")), w.slides = v(n.selector, w), w.container = v(w.containerSelector, w), w.count = w.slides.length, w.syncExists = 0 < v(n.sync).length, "slide" === n.animation && (n.animation = "swing"), w.prop = x ? "top" : "marginLeft", w.args = {}, w.manualPause = !1, w.transitions = !n.video && !c && n.useCSS && function() {
						var n = document.createElement("div"),
							e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
						for (var t in e)
							if (void 0 !== n.style[e[t]]) return w.pfx = e[t].replace("Perspective", "").toLowerCase(), w.prop = "-" + w.pfx + "-transform", !0;
						return !1
					}(), "" !== n.controlsContainer && (w.controlsContainer = 0 < v(n.controlsContainer).length && v(n.controlsContainer)), "" !== n.manualControls && (w.manualControls = 0 < v(n.manualControls).length && v(n.manualControls)), n.randomize && (w.slides.sort(function() {
						return Math.round(Math.random()) - .5
					}), w.container.empty().append(w.slides)), w.doMath(), p && u.asNav.setup(), w.setup("init"), n.controlNav && u.controlNav.setup(), n.directionNav && u.directionNav.setup(), n.keyboard && (1 === v(w.containerSelector).length || n.multipleKeyboard) && v(document).bind("keyup", function(i) {
						var e = i.keyCode;
						if (!w.animating && (39 === e || 37 === e)) {
							var t = 39 === e ? w.getTarget("next") : 37 === e && w.getTarget("prev");
							w.flexAnimate(t, n.pauseOnAction)
						}
					}), n.mousewheel && w.bind("mousewheel", function(i, e) {
						i.preventDefault();
						var t = 0 > e ? w.getTarget("next") : w.getTarget("prev");
						w.flexAnimate(t, n.pauseOnAction)
					}), n.pausePlay && u.pausePlay.setup(), n.slideshow && (n.pauseOnHover && w.hover(function() {
						w.manualPlay || w.manualPause || w.pause()
					}, function() {
						w.manualPause || w.manualPlay || w.play()
					}), 0 < n.initDelay ? setTimeout(w.play, n.initDelay) : w.play()), s && n.touch && u.touch(), (!c || c && n.smoothHeight) && v(window).bind("resize focus", u.resize), setTimeout(function() {
						n.start(w)
					}, 200)
				},
				asNav: {
					setup: function() {
						w.asNav = !0, w.animatingTo = Math.floor(w.currentSlide / w.move), w.currentItem = w.currentSlide, w.slides.removeClass(o + "active-slide").eq(w.currentItem).addClass(o + "active-slide"), w.slides.click(function(t) {
							t.preventDefault();
							var a = v(this),
								e = a.index();
							v(n.asNavFor).data("flexslider").animating || a.hasClass("active") || (w.direction = w.currentItem < e ? "next" : "prev", w.flexAnimate(e, n.pauseOnAction, !1, !0, !0))
						})
					}
				},
				controlNav: {
					setup: function() {
						w.manualControls ? u.controlNav.setupManual() : u.controlNav.setupPaging()
					},
					setupPaging: function() {
						var t = "thumbnails" === n.controlNav ? "control-thumbs" : "control-paging",
							e = 1,
							r;
						if (w.controlNavScaffold = v("<ol class=\"" + o + "control-nav " + o + t + "\"></ol>"), 1 < w.pagingCount)
							for (var l = 0; l < w.pagingCount; l++) r = "thumbnails" === n.controlNav ? "<img src=\"" + w.slides.eq(l).attr("data-thumb") + "\"/>" : "<a>" + e + "</a>", w.controlNavScaffold.append("<li>" + r + "</li>"), e++;
						w.controlsContainer ? v(w.controlsContainer).append(w.controlNavScaffold) : w.append(w.controlNavScaffold), u.controlNav.set(), u.controlNav.active(), w.controlNavScaffold.delegate("a, img", i, function(t) {
							t.preventDefault();
							var e = v(this),
								a = w.controlNav.index(e);
							e.hasClass(o + "active") || (w.direction = a > w.currentSlide ? "next" : "prev", w.flexAnimate(a, n.pauseOnAction))
						}), s && w.controlNavScaffold.delegate("a", "click touchstart", function(t) {
							t.preventDefault()
						})
					},
					setupManual: function() {
						w.controlNav = w.manualControls, u.controlNav.active(), w.controlNav.live(i, function(t) {
							t.preventDefault();
							var e = v(this),
								a = w.controlNav.index(e);
							e.hasClass(o + "active") || (w.direction = a > w.currentSlide ? "next" : "prev", w.flexAnimate(a, n.pauseOnAction))
						}), s && w.controlNav.live("click touchstart", function(t) {
							t.preventDefault()
						})
					},
					set: function() {
						var t = "thumbnails" === n.controlNav ? "img" : "a";
						w.controlNav = v("." + o + "control-nav li " + t, w.controlsContainer ? w.controlsContainer : w)
					},
					active: function() {
						w.controlNav.removeClass(o + "active").eq(w.animatingTo).addClass(o + "active")
					},
					update: function(t, e) {
						1 < w.pagingCount && "add" === t ? w.controlNavScaffold.append(v("<li><a>" + w.count + "</a></li>")) : 1 === w.pagingCount ? w.controlNavScaffold.find("li").remove() : w.controlNav.eq(e).closest("li").remove(), u.controlNav.set(), 1 < w.pagingCount && w.pagingCount !== w.controlNav.length ? w.update(e, t) : u.controlNav.active()
					}
				},
				directionNav: {
					setup: function() {
						var t = v("<ul class=\"" + o + "direction-nav\"><li><a class=\"" + o + "prev\" href=\"#\">" + n.prevText + "</a></li><li><a class=\"" + o + "next\" href=\"#\">" + n.nextText + "</a></li></ul>");
						w.controlsContainer ? (v(w.controlsContainer).append(t), w.directionNav = v("." + o + "direction-nav li a", w.controlsContainer)) : (w.append(t), w.directionNav = v("." + o + "direction-nav li a", w)), u.directionNav.update(), w.directionNav.bind(i, function(t) {
							t.preventDefault();
							var e = v(this).hasClass(o + "next") ? w.getTarget("next") : w.getTarget("prev");
							w.flexAnimate(e, n.pauseOnAction)
						}), s && w.directionNav.bind("click touchstart", function(t) {
							t.preventDefault()
						})
					},
					update: function() {
						var t = o + "disabled";
						1 === w.pagingCount ? w.directionNav.addClass(t) : n.animationLoop ? w.directionNav.removeClass(t) : 0 === w.animatingTo ? w.directionNav.removeClass(t).filter("." + o + "prev").addClass(t) : w.animatingTo === w.last ? w.directionNav.removeClass(t).filter("." + o + "next").addClass(t) : w.directionNav.removeClass(t)
					}
				},
				pausePlay: {
					setup: function() {
						var t = v("<div class=\"" + o + "pauseplay\"><a></a></div>");
						w.controlsContainer ? (w.controlsContainer.append(t), w.pausePlay = v("." + o + "pauseplay a", w.controlsContainer)) : (w.append(t), w.pausePlay = v("." + o + "pauseplay a", w)), u.pausePlay.update(n.slideshow ? o + "pause" : o + "play"), w.pausePlay.bind(i, function(t) {
							t.preventDefault(), v(this).hasClass(o + "pause") ? (w.manualPause = !0, w.manualPlay = !1, w.pause()) : (w.manualPause = !1, w.manualPlay = !0, w.play())
						}), s && w.pausePlay.bind("click touchstart", function(t) {
							t.preventDefault()
						})
					},
					update: function(t) {
						"play" === t ? w.pausePlay.removeClass(o + "pause").addClass(o + "play").text(n.playText) : w.pausePlay.removeClass(o + "play").addClass(o + "pause").text(n.pauseText)
					}
				},
				touch: function() {
					function a(e) {
						w.animating ? e.preventDefault() : 1 === e.touches.length && (w.pause(), b = x ? w.h : w.w, C = +new Date, v = d && r && w.animatingTo === w.last ? 0 : d && r ? w.limit - (w.itemW + n.itemMargin) * w.move * w.animatingTo : d && w.currentSlide === w.last ? w.limit : d ? (w.itemW + n.itemMargin) * w.move * w.currentSlide : r ? (w.last - w.currentSlide + w.cloneOffset) * b : (w.currentSlide + w.cloneOffset) * b, p = x ? e.touches[0].pageY : e.touches[0].pageX, u = x ? e.touches[0].pageX : e.touches[0].pageY, y.addEventListener("touchmove", o, !1), y.addEventListener("touchend", t, !1))
					}

					function o(e) {
						_ = x ? p - e.touches[0].pageY : p - e.touches[0].pageX, i = x ? Math.abs(_) < Math.abs(e.touches[0].pageX - u) : Math.abs(_) < Math.abs(e.touches[0].pageY - u), (!i || 500 < +new Date - C) && (e.preventDefault(), !c && w.transitions && (!n.animationLoop && (_ /= 0 === w.currentSlide && 0 > _ || w.currentSlide === w.last && 0 < _ ? Math.abs(_) / b + 2 : 1), w.setProps(v + _, "setTouch")))
					}

					function t() {
						if (y.removeEventListener("touchmove", o, !1), w.animatingTo === w.currentSlide && !i && null !== _) {
							var a = r ? -_ : _,
								e = 0 < a ? w.getTarget("next") : w.getTarget("prev");
							w.canAdvance(e) && (550 > +new Date - C && 50 < Math.abs(a) || Math.abs(a) > b / 2) ? w.flexAnimate(e, n.pauseOnAction) : !c && w.flexAnimate(w.currentSlide, n.pauseOnAction, !0)
						}
						y.removeEventListener("touchend", t, !1), p = null, u = null, _ = null, v = null
					}
					var i = !1,
						p, u, v, b, _, C;
					y.addEventListener("touchstart", a, !1)
				},
				resize: function() {
					!w.animating && w.is(":visible") && (!d && w.doMath(), c ? u.smoothHeight() : d ? (w.slides.width(w.computedW), w.update(w.pagingCount), w.setProps()) : x ? (w.viewport.height(w.h), w.setProps(w.h, "setTotal")) : (n.smoothHeight && u.smoothHeight(), w.newSlides.width(w.computedW), w.setProps(w.computedW, "setTotal")))
				},
				smoothHeight: function(a) {
					if (!x || c) {
						var e = c ? w : w.viewport;
						a ? e.animate({
							height: w.slides.eq(w.animatingTo).height()
						}, a) : e.height(w.slides.eq(w.animatingTo).height())
					}
				},
				sync: function(t) {
					var e = v(n.sync).data("flexslider"),
						a = w.animatingTo;
					"animate" === t ? e.flexAnimate(a, n.pauseOnAction, !1, !0) : "play" === t ? e.playing || e.asNav || e.play() : "pause" === t ? e.pause() : void 0
				}
			}, w.flexAnimate = function(t, m, a, i, l) {
				if (p && 1 === w.pagingCount && (w.direction = w.currentItem < t ? "next" : "prev"), !w.animating && (w.canAdvance(t, l) || a) && w.is(":visible")) {
					if (p && i) {
						var h = v(n.asNavFor).data("flexslider");
						if (w.atEnd = 0 === t || t === w.count - 1, h.flexAnimate(t, !0, !1, !0, l), w.direction = w.currentItem < t ? "next" : "prev", h.direction = w.direction, Math.ceil((t + 1) / w.visible) - 1 !== w.currentSlide && 0 !== t) w.currentItem = t, w.slides.removeClass(o + "active-slide").eq(t).addClass(o + "active-slide"), t = Math.floor(t / w.visible);
						else return w.currentItem = t, w.slides.removeClass(o + "active-slide").eq(t).addClass(o + "active-slide"), !1
					}
					if (w.animating = !0, w.animatingTo = t, n.before(w), m && w.pause(), w.syncExists && !l && u.sync("animate"), n.controlNav && u.controlNav.active(), d || w.slides.removeClass(o + "active-slide").eq(t).addClass(o + "active-slide"), w.atEnd = 0 === t || t === w.last, n.directionNav && u.directionNav.update(), t === w.last && (n.end(w), !n.animationLoop && w.pause()), !c) {
						var g = x ? w.slides.filter(":first").height() : w.computedW,
							f, C, k;
						d ? (f = n.itemWidth > w.w ? 2 * n.itemMargin : n.itemMargin, k = (w.itemW + f) * w.move * w.animatingTo, C = k > w.limit && 1 !== w.visible ? w.limit : k) : 0 === w.currentSlide && t === w.count - 1 && n.animationLoop && "next" !== w.direction ? C = r ? (w.count + w.cloneOffset) * g : 0 : w.currentSlide === w.last && 0 === t && n.animationLoop && "prev" !== w.direction ? C = r ? 0 : (w.count + 1) * g : C = r ? (w.count - 1 - t + w.cloneOffset) * g : (t + w.cloneOffset) * g, w.setProps(C, "", n.animationSpeed), w.transitions ? ((!n.animationLoop || !w.atEnd) && (w.animating = !1, w.currentSlide = w.animatingTo), w.container.unbind("webkitTransitionEnd transitionend"), w.container.bind("webkitTransitionEnd transitionend", function() {
							w.wrapup(g)
						})) : w.container.animate(w.args, n.animationSpeed, n.easing, function() {
							w.wrapup(g)
						})
					} else s ? (w.slides.eq(w.currentSlide).css({
						opacity: 0,
						zIndex: 1
					}), w.slides.eq(t).css({
						opacity: 1,
						zIndex: 2
					}), w.slides.unbind("webkitTransitionEnd transitionend"), w.slides.eq(w.currentSlide).bind("webkitTransitionEnd transitionend", function() {
						n.after(w)
					}), w.animating = !1, w.currentSlide = w.animatingTo) : (w.slides.eq(w.currentSlide).fadeOut(n.animationSpeed, n.easing), w.slides.eq(t).fadeIn(n.animationSpeed, n.easing, w.wrapup));
					n.smoothHeight && u.smoothHeight(n.animationSpeed)
				}
			}, w.wrapup = function(t) {
				c || d || (0 === w.currentSlide && w.animatingTo === w.last && n.animationLoop ? w.setProps(t, "jumpEnd") : w.currentSlide === w.last && 0 === w.animatingTo && n.animationLoop && w.setProps(t, "jumpStart")), w.animating = !1, w.currentSlide = w.animatingTo, n.after(w)
			}, w.animateSlides = function() {
				w.animating || w.flexAnimate(w.getTarget("next"))
			}, w.pause = function() {
				clearInterval(w.animatedSlides), w.playing = !1, n.pausePlay && u.pausePlay.update("play"), w.syncExists && u.sync("pause")
			}, w.play = function() {
				w.animatedSlides = setInterval(w.animateSlides, n.slideshowSpeed), w.playing = !0, n.pausePlay && u.pausePlay.update("pause"), w.syncExists && u.sync("play")
			}, w.canAdvance = function(i, e) {
				var t = p ? w.pagingCount - 1 : w.last;
				return !!e || !!(p && w.currentItem === w.count - 1 && 0 === i && "prev" === w.direction) || !(p && 0 === w.currentItem && i === w.pagingCount - 1 && "next" !== w.direction) && !!(i !== w.currentSlide || p) && (!!n.animationLoop || !(w.atEnd && 0 === w.currentSlide && i === t && "next" !== w.direction) && !(w.atEnd && w.currentSlide === t && 0 === i && "next" === w.direction))
			}, w.getTarget = function(t) {
				return w.direction = t, "next" === t ? w.currentSlide === w.last ? 0 : w.currentSlide + 1 : 0 === w.currentSlide ? w.last : w.currentSlide - 1
			}, w.setProps = function(o, e, t) {
				var s = function() {
					var t = o ? o : (w.itemW + n.itemMargin) * w.move * w.animatingTo,
						a = function() {
							return d ? "setTouch" === e ? o : r && w.animatingTo === w.last ? 0 : r ? w.limit - (w.itemW + n.itemMargin) * w.move * w.animatingTo : w.animatingTo === w.last ? w.limit : t : "setTotal" === e ? r ? (w.count - 1 - w.currentSlide + w.cloneOffset) * o : (w.currentSlide + w.cloneOffset) * o : "setTouch" === e ? r ? o : o : "jumpEnd" === e ? r ? o : w.count * o : "jumpStart" === e ? r ? w.count * o : o : o
						}();
					return -1 * a + "px"
				}();
				w.transitions && (s = x ? "translate3d(0," + s + ",0)" : "translate3d(" + s + ",0,0)", t = void 0 === t ? "0s" : t / 1e3 + "s", w.container.css("-" + w.pfx + "-transition-duration", t)), w.args[w.prop] = s, (w.transitions || void 0 === t) && w.container.css(w.args)
			}, w.setup = function(t) {
				if (!c) {
					var e, l;
					"init" === t && (w.viewport = v("<div class=\"" + o + "viewport\"></div>").css({
						overflow: "hidden",
						position: "relative"
					}).appendTo(w).append(w.container), w.cloneCount = 0, w.cloneOffset = 0, r && (l = v.makeArray(w.slides).reverse(), w.slides = v(l), w.container.empty().append(w.slides))), n.animationLoop && !d && (w.cloneCount = 2, w.cloneOffset = 1, "init" !== t && w.container.find(".clone").remove(), w.container.append(w.slides.first().clone().addClass("clone")).prepend(w.slides.last().clone().addClass("clone"))), w.newSlides = v(n.selector, w), e = r ? w.count - 1 - w.currentSlide + w.cloneOffset : w.currentSlide + w.cloneOffset, x && !d ? (w.container.height(200 * (w.count + w.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
						w.newSlides.css({
							display: "block"
						}), w.doMath(), w.viewport.height(w.h), w.setProps(e * w.h, "init")
					}, "init" === t ? 100 : 0)) : (w.container.width(200 * (w.count + w.cloneCount) + "%"), w.setProps(e * w.computedW, "init"), setTimeout(function() {
						w.doMath(), w.newSlides.css({
							width: w.computedW,
							float: "left",
							display: "block"
						}), n.smoothHeight && u.smoothHeight()
					}, "init" === t ? 100 : 0))
				} else w.slides.css({
					width: "100%",
					float: "left",
					marginRight: "-100%",
					position: "relative"
				}), "init" === t && (s ? w.slides.css({
					opacity: 0,
					display: "block",
					webkitTransition: "opacity " + n.animationSpeed / 1e3 + "s ease",
					zIndex: 1
				}).eq(w.currentSlide).css({
					opacity: 1,
					zIndex: 2
				}) : w.slides.eq(w.currentSlide).fadeIn(n.animationSpeed, n.easing)), n.smoothHeight && u.smoothHeight();
				d || w.slides.removeClass(o + "active-slide").eq(w.currentSlide).addClass(o + "active-slide")
			}, w.doMath = function() {
				var o = w.slides.first(),
					e = n.itemMargin,
					t = n.minItems,
					a = n.maxItems;
				w.w = w.width(), w.h = o.height(), w.boxPadding = o.outerWidth() - o.width(), d ? (w.itemT = n.itemWidth + e, w.minW = t ? t * w.itemT : w.w, w.maxW = a ? a * w.itemT : w.w, w.itemW = w.minW > w.w ? (w.w - e * t) / t : w.maxW < w.w ? (w.w - e * a) / a : n.itemWidth > w.w ? w.w : n.itemWidth, w.visible = Math.floor(w.w / (w.itemW + e)), w.move = 0 < n.move && n.move < w.visible ? n.move : w.visible, w.pagingCount = Math.ceil((w.count - w.visible) / w.move + 1), w.last = w.pagingCount - 1, w.limit = 1 === w.pagingCount ? 0 : n.itemWidth > w.w ? (w.itemW + 2 * e) * w.count - w.w - e : (w.itemW + e) * w.count - w.w - e) : (w.itemW = w.w, w.pagingCount = w.count, w.last = w.count - 1), w.computedW = w.itemW - w.boxPadding
			}, w.update = function(a, e) {
				w.doMath(), d || (a < w.currentSlide ? w.currentSlide += 1 : a <= w.currentSlide && 0 != a && (w.currentSlide -= 1), w.animatingTo = w.currentSlide), n.controlNav && !w.manualControls && ("add" === e && !d || w.pagingCount > w.controlNav.length ? u.controlNav.update("add") : ("remove" === e && !d || w.pagingCount < w.controlNav.length) && (d && w.currentSlide > w.last && (w.currentSlide -= 1, w.animatingTo -= 1), u.controlNav.update("remove", w.last))), n.directionNav && u.directionNav.update()
			}, w.addSlide = function(t, e) {
				var a = v(t);
				w.count += 1, w.last = w.count - 1, x && r ? void 0 === e ? w.container.prepend(a) : w.slides.eq(w.count - e).after(a) : void 0 === e ? w.container.append(a) : w.slides.eq(e).before(a), w.update(e, "add"), w.slides = v(n.selector + ":not(.clone)", w), w.setup(), n.added(w)
			}, w.removeSlide = function(t) {
				var e = isNaN(t) ? w.slides.index(v(t)) : t;
				w.count -= 1, w.last = w.count - 1, isNaN(t) ? v(t, w.slides).remove() : x && r ? w.slides.eq(w.last).remove() : w.slides.eq(t).remove(), w.doMath(), w.update(e, "remove"), w.slides = v(n.selector + ":not(.clone)", w), w.setup(), n.removed(w)
			}, u.init()
		}, v.flexslider.defaults = {
			namespace: "flex-",
			selector: ".slides > li",
			animation: "fade",
			easing: "swing",
			direction: "horizontal",
			reverse: !1,
			animationLoop: !0,
			smoothHeight: !1,
			startAt: 0,
			slideshow: !0,
			slideshowSpeed: 7e3,
			animationSpeed: 600,
			initDelay: 0,
			randomize: !1,
			pauseOnAction: !0,
			pauseOnHover: !1,
			useCSS: !0,
			touch: !0,
			video: !1,
			controlNav: !0,
			directionNav: !0,
			prevText: "Previous",
			nextText: "Next",
			keyboard: !0,
			multipleKeyboard: !1,
			mousewheel: !1,
			pausePlay: !1,
			pauseText: "Pause",
			playText: "Play",
			controlsContainer: "",
			manualControls: "",
			sync: "",
			asNavFor: "",
			itemWidth: 0,
			itemMargin: 0,
			minItems: 0,
			maxItems: 0,
			move: 0,
			start: function() { },
			before: function() { },
			after: function() { },
			end: function() { },
			added: function() { },
			removed: function() { }
		}, v.fn.flexslider = function(t) {
			if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
				var e = v(this),
					a = t.selector ? t.selector : ".slides > li",
					i = e.find(a);
				1 === i.length ? (i.fadeIn(400), t.start && t.start(e)) : null == e.data("flexslider") && new v.flexslider(this, t)
			});
			var n = v(this).data("flexslider");
			"play" === t ? n.play() : "pause" === t ? n.pause() : "next" === t ? n.flexAnimate(n.getTarget("next"), !0) : "prev" === t || "previous" === t ? n.flexAnimate(n.getTarget("prev"), !0) : "number" == typeof t && n.flexAnimate(t, !0)
		}
	}(jQuery),
	function(n, t, e) {
		n.fn.responsiveSlides = function(i) {
			var o = n.extend({
				auto: !0,
				speed: 500,
				timeout: 4E3,
				pager: !1,
				nav: !1,
				random: !1,
				pause: !1,
				pauseControls: !0,
				prevText: "Previous",
				nextText: "Next",
				maxwidth: "",
				navContainer: "",
				manualControls: "",
				namespace: "rslides",
				before: n.noop,
				after: n.noop
			}, i);
			return this.each(function() {
				e++;
				var s = n(this),
					a = 0,
					r = s.children(),
					l = r.size(),
					d = parseFloat(o.speed),
					c = parseFloat(o.timeout),
					p = parseFloat(o.maxwidth),
					m = o.namespace,
					h = m + e,
					g = m + "_nav " + h + "_nav",
					b = m + "_here",
					_ = h + "_on",
					v = h + "_s",
					C = n("<ul class='" + m + "_tabs " + h + "_tabs' />"),
					k = {
						float: "left",
						position: "relative",
						opacity: 1,
						zIndex: 2
					},
					T = {
						float: "none",
						position: "absolute",
						opacity: 0,
						zIndex: 1
					},
					x = function() {
						var a = (document.body || document.documentElement).style,
							e = "transition";
						if ("string" == typeof a[e]) return !0;
						S = ["Moz", "Webkit", "Khtml", "O", "ms"];
						var e = e.charAt(0).toUpperCase() + e.substr(1),
							n;
						for (n = 0; n < S.length; n++)
							if ("string" == typeof a[S[n] + e]) return !0;
						return !1
					}(),
					y = function(t) {
						o.before(t), x ? (r.removeClass(_).css(T).eq(t).addClass(_).css(k), a = t, setTimeout(function() {
							o.after(t)
						}, d)) : r.stop().fadeOut(d, function() {
							n(this).removeClass(_).css(T).css("opacity", 1)
						}).eq(t).fadeIn(d, function() {
							n(this).addClass(_).css(k), o.after(t), a = t
						})
					},
					S, P, M, O, I, A;
				if (o.random && (r.sort(function() {
					return Math.round(Math.random()) - .5
				}), s.empty().append(r)), r.each(function(t) {
					this.id = v + t
				}), s.addClass(m + " " + h), i && i.maxwidth && s.css("max-width", p), r.hide().css(T).eq(0).addClass(_).css(k).show(), x && r.show().css({
					"-webkit-transition": "opacity " + d + "ms ease-in-out",
					"-moz-transition": "opacity " + d + "ms ease-in-out",
					"-o-transition": "opacity " + d + "ms ease-in-out",
					transition: "opacity " + d + "ms ease-in-out"
				}), 1 < r.size()) {
					if (c < d + 100) return;
					if (o.pager && !o.manualControls) {
						var H = [];
						r.each(function(t) {
							t += 1, H += "<li><a href='#' class='" + v + t + "'>" + t + "</a></li>"
						}), C.append(H), i.navContainer ? n(o.navContainer).append(C) : s.after(C)
					}
					if (o.manualControls && (C = n(o.manualControls), C.addClass(m + "_tabs " + h + "_tabs")), (o.pager || o.manualControls) && C.find("li").each(function(t) {
						n(this).addClass(v + (t + 1))
					}), (o.pager || o.manualControls) && (A = C.find("a"), P = function(t) {
						A.closest("li").removeClass(b).eq(t).addClass(b)
					}), o.auto && (M = function() {
						I = setInterval(function() {
							r.stop(!0, !0);
							var t = a + 1 < l ? a + 1 : 0;
							(o.pager || o.manualControls) && P(t), y(t)
						}, c)
					}, M()), O = function() {
						o.auto && (clearInterval(I), M())
					}, o.pause && s.hover(function() {
						clearInterval(I)
					}, function() {
						O()
					}), (o.pager || o.manualControls) && (A.bind("click", function(t) {
						t.preventDefault(), o.pauseControls || O(), t = A.index(this), a === t || n("." + _).queue("fx").length || (P(t), y(t))
					}).eq(0).closest("li").addClass(b), o.pauseControls && A.hover(function() {
						clearInterval(I)
					}, function() {
						O()
					})), o.nav) {
						m = "<a href='#' class='" + g + " prev'>" + o.prevText + "</a><a href='#' class='" + g + " next'>" + o.nextText + "</a>", i.navContainer ? n(o.navContainer).append(m) : s.after(m);
						var h = n("." + h + "_nav"),
							q = h.filter(".prev");
						h.bind("click", function(i) {
							if (i.preventDefault(), i = n("." + _), !i.queue("fx").length) {
								var s = r.index(i);
								i = s - 1, s = s + 1 < l ? a + 1 : 0, y(n(this)[0] === q[0] ? i : s), (o.pager || o.manualControls) && P(n(this)[0] === q[0] ? i : s), o.pauseControls || O()
							}
						}), o.pauseControls && h.hover(function() {
							clearInterval(I)
						}, function() {
							O()
						})
					}
				}
				if ("undefined" == typeof document.body.style.maxWidth && i.maxwidth) {
					var F = function() {
						s.css("width", "100%"), s.width() > p && s.css("width", p)
					};
					F(), n(t).bind("resize", function() {
						F()
					})
				}
			})
		}
	}(jQuery, this, 0), jQuery(document).ready(function(o) {
		function s() {
			o(".cd-nav-trigger").removeClass("nav-is-visible"), o(".cd-main-header").removeClass("nav-is-visible"), o(".cd-primary-nav").removeClass("nav-is-visible"), o(".has-children ul").addClass("is-hidden"), o(".has-children a").removeClass("selected"), o(".moves-out").removeClass("moves-out"), o(".cd-main-content").removeClass("nav-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
				o("body").removeClass("overflow-hidden")
			})
		}

		function t(e) {
			"close" == e ? (o(".cd-search").removeClass("is-visible"), o(".cd-search-trigger").removeClass("search-is-visible"), o(".cd-overlay").removeClass("search-is-visible")) : (o(".cd-search").toggleClass("is-visible"), o(".cd-search-trigger").toggleClass("search-is-visible"), o(".cd-overlay").toggleClass("search-is-visible"), 1170 < o(window).width() && o(".cd-search").hasClass("is-visible") && o(".cd-search").find("input[type=\"search\"]").focus(), o(".cd-search").hasClass("is-visible") ? o(".cd-overlay").addClass("is-visible") : o(".cd-overlay").removeClass("is-visible"))
		}

		function e() {
			var e = window,
				a = "inner";
			return "innerWidth" in window || (a = "client", e = document.documentElement || document.body), !!(1170 <= e[a + "Width"])
		}

		function a() {
			var n = o(".cd-nav"),
				t = e();
			t ? (n.detach(), n.insertBefore(".cd-header-buttons")) : (n.detach(), n.insertAfter(".cd-main-content"))
		}
		a(), o(window).on("resize", function() {
			window.requestAnimationFrame ? window.requestAnimationFrame(a) : setTimeout(a, 300)
		}), o(".cd-nav-trigger").on("click", function(e) {
			e.preventDefault(), o(".cd-main-content").hasClass("nav-is-visible") ? (s(), o(".cd-overlay").removeClass("is-visible")) : (o(this).addClass("nav-is-visible"), o(".cd-main-header").addClass("nav-is-visible"), o(".cd-main-content").addClass("nav-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
				o("body").addClass("overflow-hidden")
			}), t("close"), o(".cd-overlay").addClass("is-visible"))
		}), o(".cd-search-trigger").on("click", function(a) {
			a.preventDefault(), t(), s()
		}), o(".go-back").on("click", function() {
			o(this).parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("moves-out")
		})
	}), $(document).ready(function() {
		setNotification()
	}), addEventListener("load", function() {
		setTimeout(hideURLbar, 0)
	}, !1);

function hideURLbar() {
	window.scrollTo(0, 1)
}
async function setNotification() {
	var t = await getMasterProd();
	fetch(t.notification).then(t => t.json()).then(t => {
		$("#floatingText").length && (document.getElementById("floatingText").innerHTML = t.notification)
	})
}
var testUrl = "https://raw.githubusercontent.com/xworkzodc/JSON/master/master_dev_prod.json",
	masterUrl = "https://raw.githubusercontent.com/xworkzodc/JSON/master/master_dev_prod.json";
let getMasterProd = () => fetch(testUrl).then(t => t.json());
(function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(E) {
	function l(a, e) {
		var t = a.nodeName.toLowerCase(),
			n, i, o;
		return "area" === t ? (n = a.parentNode, i = n.name, !!(a.href && i && "map" === n.nodeName.toLowerCase()) && (o = E("img[usemap='#" + i + "']")[0], !!o && d(o))) : (/^(input|select|textarea|button|object)$/.test(t) ? !a.disabled : "a" === t ? a.href || e : e) && d(a)
	}

	function d(t) {
		return E.expr.filters.visible(t) && !E(t).parents().addBack().filter(function() {
			return "hidden" === E.css(this, "visibility")
		}).length
	}

	function v(e) {
		for (var t, i; e.length && e[0] !== document;) {
			if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
			e = e.parent()
		}
		return 0
	}

	function e() {
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, E.extend(this._defaults, this.regional[""]), this.regional.en = E.extend(!0, {}, this.regional[""]), this.regional["en-US"] = E.extend(!0, {}, this.regional.en), this.dpDiv = c(E("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}

	function c(t) {
		return t.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseout", function() {
			E(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && E(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && E(this).removeClass("ui-datepicker-next-hover")
		}).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseover", p)
	}

	function p() {
		E.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (E(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), E(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && E(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && E(this).addClass("ui-datepicker-next-hover"))
	}

	function b(n, e) {
		for (var t in E.extend(n, e), e) null == e[t] && (n[t] = e[t]);
		return n
	}

	function a(t) {
		return function() {
			var a = this.element.val();
			t.apply(this, arguments), this._refresh(), a !== this.element.val() && this._trigger("change")
		}
	}
	E.ui = E.ui || {}, E.extend(E.ui, {
		version: "1.11.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), E.fn.extend({
		scrollParent: function(a) {
			var n = this.css("position"),
				o = a ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				e = this.parents().filter(function() {
					var t = E(this);
					return ("absolute" !== n || "static" !== t.css("position")) && o.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
				}).eq(0);
			return "fixed" !== n && e.length ? e : E(this[0].ownerDocument || document)
		},
		uniqueId: function() {
			var e = 0;
			return function() {
				return this.each(function() {
					this.id || (this.id = "ui-id-" + ++e)
				})
			}
		}(),
		removeUniqueId: function() {
			return this.each(function() {
				/^ui-id-\d+$/.test(this.id) && E(this).removeAttr("id")
			})
		}
	}), E.extend(E.expr[":"], {
		data: E.expr.createPseudo ? E.expr.createPseudo(function(a) {
			return function(e) {
				return !!E.data(e, a)
			}
		}) : function(n, e, t) {
			return !!E.data(n, t[3])
		},
		focusable: function(e) {
			return l(e, !isNaN(E.attr(e, "tabindex")))
		},
		tabbable: function(e) {
			var t = E.attr(e, "tabindex"),
				a = isNaN(t);
			return (a || 0 <= t) && l(e, !a)
		}
	}), E("<a>").outerWidth(1).jquery || E.each(["Width", "Height"], function(t, n) {
		function o(a, e, s, n) {
			return E.each(i, function() {
				e -= parseFloat(E.css(a, "padding" + this)) || 0, s && (e -= parseFloat(E.css(a, "border" + this + "Width")) || 0), n && (e -= parseFloat(E.css(a, "margin" + this)) || 0)
			}), e
		}
		var i = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
			r = n.toLowerCase(),
			s = {
				innerWidth: E.fn.innerWidth,
				innerHeight: E.fn.innerHeight,
				outerWidth: E.fn.outerWidth,
				outerHeight: E.fn.outerHeight
			};
		E.fn["inner" + n] = function(t) {
			return void 0 === t ? s["inner" + n].call(this) : this.each(function() {
				E(this).css(r, o(this, t) + "px")
			})
		}, E.fn["outer" + n] = function(a, e) {
			return "number" == typeof a ? this.each(function() {
				E(this).css(r, o(this, a, !0, e) + "px")
			}) : s["outer" + n].call(this, a)
		}
	}), E.fn.addBack || (E.fn.addBack = function(e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
	}), E("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (E.fn.removeData = function(a) {
		return function(e) {
			return arguments.length ? a.call(this, E.camelCase(e)) : a.call(this)
		}
	}(E.fn.removeData)), E.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), E.fn.extend({
		focus: function(t) {
			return function(n, a) {
				return "number" == typeof n ? this.each(function() {
					var t = this;
					setTimeout(function() {
						E(t).focus(), a && a.call(t)
					}, n)
				}) : t.apply(this, arguments)
			}
		}(E.fn.focus),
		disableSelection: function() {
			var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
			return function() {
				return this.bind(e + ".ui-disableSelection", function(e) {
					e.preventDefault()
				})
			}
		}(),
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		},
		zIndex: function(n) {
			if (void 0 !== n) return this.css("zIndex", n);
			if (this.length)
				for (var e = E(this[0]), i, s; e.length && e[0] !== document;) {
					if (i = e.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(e.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
					e = e.parent()
				}
			return 0
		}
	}), E.ui.plugin = {
		add: function(n, e, t) {
			var i = E.ui[n].prototype,
				o;
			for (o in t) i.plugins[o] = i.plugins[o] || [], i.plugins[o].push([e, t[o]])
		},
		call: function(n, o, e, t) {
			var i = n.plugins[o],
				s;
			if (i && (t || n.element[0].parentNode && 11 !== n.element[0].parentNode.nodeType))
				for (s = 0; i.length > s; s++) n.options[i[s][0]] && i[s][1].apply(n.element, e)
		}
	};
	var n = 0,
		i = Array.prototype.slice;
	E.cleanData = function(a) {
		return function(e) {
			var t, n, s;
			for (s = 0; null != (n = e[s]); s++) try {
				t = E._data(n, "events"), t && t.remove && E(n).triggerHandler("remove")
			} catch (t) { }
			a(e)
		}
	}(E.cleanData), E.widget = function(t, n, a) {
		var i = {},
			o = t.split(".")[0],
			s, r, c, u;
		return t = t.split(".")[1], s = o + "-" + t, a || (a = n, n = E.Widget), E.expr[":"][s.toLowerCase()] = function(t) {
			return !!E.data(t, s)
		}, E[o] = E[o] || {}, r = E[o][t], c = E[o][t] = function(t, a) {
			return this._createWidget ? (arguments.length && this._createWidget(t, a), void 0) : new c(t, a)
		}, E.extend(c, r, {
			version: a.version,
			_proto: E.extend({}, a),
			_childConstructors: []
		}), u = new n, u.options = E.widget.extend({}, u.options), E.each(a, function(e, t) {
			return E.isFunction(t) ? (i[e] = function() {
				var o = function() {
					return n.prototype[e].apply(this, arguments)
				},
					s = function(a) {
						return n.prototype[e].apply(this, a)
					};
				return function() {
					var e = this._super,
						n = this._superApply,
						i;
					return this._super = o, this._superApply = s, i = t.apply(this, arguments), this._super = e, this._superApply = n, i
				}
			}(), void 0) : (i[e] = t, void 0)
		}), c.prototype = E.widget.extend(u, {
			widgetEventPrefix: r ? u.widgetEventPrefix || t : t
		}, i, {
			constructor: c,
			namespace: o,
			widgetName: t,
			widgetFullName: s
		}), r ? (E.each(r._childConstructors, function(n, e) {
			var t = e.prototype;
			E.widget(t.namespace + "." + t.widgetName, c, e._proto)
		}), delete r._childConstructors) : n._childConstructors.push(c), E.widget.bridge(t, c), c
	}, E.widget.extend = function(a) {
		for (var e = i.call(arguments, 1), t = 0, s = e.length, r, d; s > t; t++)
			for (r in e[t]) d = e[t][r], e[t].hasOwnProperty(r) && void 0 !== d && (a[r] = E.isPlainObject(d) ? E.isPlainObject(a[r]) ? E.widget.extend({}, a[r], d) : E.widget.extend({}, d) : d);
		return a
	}, E.widget.bridge = function(n, t) {
		var r = t.prototype.widgetFullName || n;
		E.fn[n] = function(l) {
			var e = "string" == typeof l,
				c = i.call(arguments, 1),
				d = this;
			return e ? this.each(function() {
				var e = E.data(this, r),
					t;
				return "instance" === l ? (d = e, !1) : e ? E.isFunction(e[l]) && "_" !== l.charAt(0) ? (t = e[l].apply(e, c), t !== e && void 0 !== t ? (d = t && t.jquery ? d.pushStack(t.get()) : t, !1) : void 0) : E.error("no such method '" + l + "' for " + n + " widget instance") : E.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + l + "'")
			}) : (c.length && (l = E.widget.extend.apply(null, [l].concat(c))), this.each(function() {
				var a = E.data(this, r);
				a ? (a.option(l || {}), a._init && a._init()) : E.data(this, r, new t(l, this))
			})), d
		}
	}, E.Widget = function() { }, E.Widget._childConstructors = [], E.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function(a, e) {
			e = E(e || this.defaultElement || this)[0], this.element = E(e), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = E(), this.hoverable = E(), this.focusable = E(), e !== this && (E.data(e, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function(t) {
					t.target === e && this.destroy()
				}
			}), this.document = E(e.style ? e.ownerDocument : e.document || e), this.window = E(this.document[0].defaultView || this.document[0].parentWindow)), this.options = E.widget.extend({}, this.options, this._getCreateOptions(), a), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: E.noop,
		_getCreateEventData: E.noop,
		_create: E.noop,
		_init: E.noop,
		destroy: function() {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(E.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: E.noop,
		widget: function() {
			return this.element
		},
		option: function(t, a) {
			var n = t,
				o, s, r;
			if (0 === arguments.length) return E.widget.extend({}, this.options);
			if ("string" == typeof t)
				if (n = {}, o = t.split("."), t = o.shift(), o.length) {
					for (s = n[t] = E.widget.extend({}, this.options[t]), r = 0; o.length - 1 > r; r++) s[o[r]] = s[o[r]] || {}, s = s[o[r]];
					if (t = o.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
					s[t] = a
				} else {
					if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
					n[t] = a
				} return this._setOptions(n), this
		},
		_setOptions: function(t) {
			for (var a in t) this._setOption(a, t[a]);
			return this
		},
		_setOption: function(t, a) {
			return this.options[t] = a, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!a), a && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
		},
		enable: function() {
			return this._setOptions({
				disabled: !1
			})
		},
		disable: function() {
			return this._setOptions({
				disabled: !0
			})
		},
		_on: function(t, l, n) {
			var c = this,
				p;
			"boolean" != typeof t && (n = l, l = t, t = !1), n ? (l = p = E(l), this.bindings = this.bindings.add(l)) : (n = l, l = this.element, p = this.widget()), E.each(n, function(e, a) {
				function i() {
					return t || !0 !== c.options.disabled && !E(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? c[a] : a).apply(c, arguments) : void 0
				}
				"string" != typeof a && (i.guid = a.guid = a.guid || i.guid || E.guid++);
				var n = e.match(/^([\w:-]*)\s*(.*)$/),
					o = n[1] + c.eventNamespace,
					s = n[2];
				s ? p.delegate(s, o, i) : l.bind(o, i)
			})
		},
		_off: function(a, e) {
			e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(e).undelegate(e), this.bindings = E(this.bindings.not(a).get()), this.focusable = E(this.focusable.not(a).get()), this.hoverable = E(this.hoverable.not(a).get())
		},
		_delay: function(n, a) {
			var e = this;
			return setTimeout(function() {
				return ("string" == typeof n ? e[n] : n).apply(e, arguments)
			}, a || 0)
		},
		_hoverable: function(t) {
			this.hoverable = this.hoverable.add(t), this._on(t, {
				mouseenter: function(t) {
					E(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(t) {
					E(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(t) {
			this.focusable = this.focusable.add(t), this._on(t, {
				focusin: function(t) {
					E(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(t) {
					E(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(a, e, n) {
			var i = this.options[a],
				s, l;
			if (n = n || {}, e = E.Event(e), e.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(), e.target = this.element[0], l = e.originalEvent)
				for (s in l) s in e || (e[s] = l[s]);
			return this.element.trigger(e, n), !(E.isFunction(i) && !1 === i.apply(this.element[0], [e].concat(n)) || e.isDefaultPrevented())
		}
	}, E.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function(n, e) {
		E.Widget.prototype["_" + n] = function(o, t, l) {
			"string" == typeof t && (t = {
				effect: t
			});
			var s = t ? !0 === t || "number" == typeof t ? e : t.effect || e : n,
				a;
			t = t || {}, "number" == typeof t && (t = {
				duration: t
			}), a = !E.isEmptyObject(t), t.complete = l, t.delay && o.delay(t.delay), a && E.effects && E.effects.effect[s] ? o[n](t) : s !== n && o[s] ? o[s](t.duration, t.easing, l) : o.queue(function(e) {
				E(this)[n](), l && l.call(o[0]), e()
			})
		}
	}), E.widget;
	var h = !1;
	E(document).mouseup(function() {
		h = !1
	}), E.widget("ui.mouse", {
		version: "1.11.4",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var n = this;
			this.element.bind("mousedown." + this.widgetName, function(e) {
				return n._mouseDown(e)
			}).bind("click." + this.widgetName, function(t) {
				return !0 === E.data(t.target, n.widgetName + ".preventClickEvent") ? (E.removeData(t.target, n.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1) : void 0
			}), this.started = !1
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function(n) {
			if (!h) {
				this._mouseMoved = !1, this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
				var e = this,
					t = 1 === n.which,
					a = !!("string" == typeof this.options.cancel && n.target.nodeName) && E(n.target).closest(this.options.cancel).length;
				return !(t && !a && this._mouseCapture(n)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
					e.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = !1 !== this._mouseStart(n), !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === E.data(n.target, this.widgetName + ".preventClickEvent") && E.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
					return e._mouseMove(t)
				}, this._mouseUpDelegate = function(t) {
					return e._mouseUp(t)
				}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), h = !0, !0))
			}
		},
		_mouseMove: function(t) {
			if (this._mouseMoved) {
				if (E.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
				if (!t.which) return this._mouseUp(t)
			}
			return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
		},
		_mouseUp: function(t) {
			return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && E.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), h = !1, !1
		},
		_mouseDistanceMet: function(e) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function() {
			return this.mouseDelayMet
		},
		_mouseStart: function() { },
		_mouseDrag: function() { },
		_mouseStop: function() { },
		_mouseCapture: function() {
			return !0
		}
	}),
		function() {
			function S(i, a, e) {
				return [parseFloat(i[0]) * (n.test(i[0]) ? a / 100 : 1), parseFloat(i[1]) * (n.test(i[1]) ? e / 100 : 1)]
			}

			function e(a, e) {
				return parseInt(E.css(a, e), 10) || 0
			}

			function t(a) {
				var e = a[0];
				return 9 === e.nodeType ? {
					width: a.width(),
					height: a.height(),
					offset: {
						top: 0,
						left: 0
					}
				} : E.isWindow(e) ? {
					width: a.width(),
					height: a.height(),
					offset: {
						top: a.scrollTop(),
						left: a.scrollLeft()
					}
				} : e.preventDefault ? {
					width: 0,
					height: 0,
					offset: {
						top: e.pageY,
						left: e.pageX
					}
				} : {
								width: a.outerWidth(),
								height: a.outerHeight(),
								offset: a.offset()
							}
			}
			E.ui = E.ui || {};
			var h = Math.max,
				v = Math.abs,
				y = Math.round,
				i = /left|center|right/,
				s = /top|center|bottom/,
				r = /[\+\-]\d+(\.[\d]+)?%?/,
				l = /^\w+/,
				n = /%$/,
				o = E.fn.position,
				d, b;
			E.position = {
				scrollbarWidth: function() {
					if (void 0 !== d) return d;
					var t = E("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
						e = t.children()[0],
						n, i;
					return E("body").append(t), n = e.offsetWidth, t.css("overflow", "scroll"), i = e.offsetWidth, n === i && (i = t[0].clientWidth), t.remove(), d = n - i
				},
				getScrollInfo: function(a) {
					var e = a.isWindow || a.isDocument ? "" : a.element.css("overflow-x"),
						t = a.isWindow || a.isDocument ? "" : a.element.css("overflow-y"),
						i = "scroll" === e || "auto" === e && a.width < a.element[0].scrollWidth,
						o = "scroll" === t || "auto" === t && a.height < a.element[0].scrollHeight;
					return {
						width: o ? E.position.scrollbarWidth() : 0,
						height: i ? E.position.scrollbarWidth() : 0
					}
				},
				getWithinInfo: function(n) {
					var e = E(n || window),
						t = E.isWindow(e[0]),
						a = !!e[0] && 9 === e[0].nodeType;
					return {
						element: e,
						isWindow: t,
						isDocument: a,
						offset: e.offset() || {
							left: 0,
							top: 0
						},
						scrollLeft: e.scrollLeft(),
						scrollTop: e.scrollTop(),
						width: t || a ? e.width() : e.outerWidth(),
						height: t || a ? e.height() : e.outerHeight()
					}
				}
			}, E.fn.position = function(P) {
				if (!P || !P.of) return o.apply(this, arguments);
				P = E.extend({}, P);
				var p = E(P.of),
					f = E.position.getWithinInfo(P.within),
					a = E.position.getScrollInfo(f),
					D = (P.collision || "flip").split(" "),
					_ = {},
					w, M, O, u, N, n;
				return n = t(p), p[0].preventDefault && (P.at = "left top"), M = n.width, O = n.height, u = n.offset, N = E.extend({}, u), E.each(["my", "at"], function() {
					var e = (P[this] || "").split(" "),
						t, d;
					1 === e.length && (e = i.test(e[0]) ? e.concat(["center"]) : s.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = i.test(e[0]) ? e[0] : "center", e[1] = s.test(e[1]) ? e[1] : "center", t = r.exec(e[0]), d = r.exec(e[1]), _[this] = [t ? t[0] : 0, d ? d[0] : 0], P[this] = [l.exec(e[0])[0], l.exec(e[1])[0]]
				}), 1 === D.length && (D[1] = D[0]), "right" === P.at[0] ? N.left += M : "center" === P.at[0] && (N.left += M / 2), "bottom" === P.at[1] ? N.top += O : "center" === P.at[1] && (N.top += O / 2), w = S(_.at, M, O), N.left += w[0], N.top += w[1], this.each(function() {
					var l = E(this),
						n = l.outerWidth(),
						r = l.outerHeight(),
						t = e(this, "marginLeft"),
						i = e(this, "marginTop"),
						o = n + t + e(this, "marginRight") + a.width,
						s = r + i + e(this, "marginBottom") + a.height,
						d = E.extend({}, N),
						c = S(_.my, l.outerWidth(), l.outerHeight()),
						m, g;
					"right" === P.my[0] ? d.left -= n : "center" === P.my[0] && (d.left -= n / 2), "bottom" === P.my[1] ? d.top -= r : "center" === P.my[1] && (d.top -= r / 2), d.left += c[0], d.top += c[1], b || (d.left = y(d.left), d.top = y(d.top)), m = {
						marginLeft: t,
						marginTop: i
					}, E.each(["left", "top"], function(a, e) {
						E.ui.position[D[a]] && E.ui.position[D[a]][e](d, {
							targetWidth: M,
							targetHeight: O,
							elemWidth: n,
							elemHeight: r,
							collisionPosition: m,
							collisionWidth: o,
							collisionHeight: s,
							offset: [w[0] + c[0], w[1] + c[1]],
							my: P.my,
							at: P.at,
							within: f,
							elem: l
						})
					}), P.using && (g = function(c) {
						var o = u.left - d.left,
							e = o + M - n,
							t = u.top - d.top,
							i = t + O - r,
							s = {
								target: {
									element: p,
									left: u.left,
									top: u.top,
									width: M,
									height: O
								},
								element: {
									element: l,
									left: d.left,
									top: d.top,
									width: n,
									height: r
								},
								horizontal: 0 > e ? "left" : 0 < o ? "right" : "center",
								vertical: 0 > i ? "top" : 0 < t ? "bottom" : "middle"
							};
						n > M && M > v(o + e) && (s.horizontal = "center"), r > O && O > v(t + i) && (s.vertical = "middle"), s.important = h(v(o), v(e)) > h(v(t), v(i)) ? "horizontal" : "vertical", P.using.call(this, c, s)
					}), l.offset(E.extend(d, {
						using: g
					}))
				})
			}, E.ui.position = {
				fit: {
					left: function(i, o) {
						var e = o.within,
							t = e.isWindow ? e.scrollLeft : e.offset.left,
							s = e.width,
							n = i.left - o.collisionPosition.marginLeft,
							a = t - n,
							r = n + o.collisionWidth - s - t,
							d;
						o.collisionWidth > s ? 0 < a && 0 >= r ? (d = i.left + a + o.collisionWidth - s - t, i.left += a - d) : i.left = 0 < r && 0 >= a ? t : a > r ? t + s - o.collisionWidth : t : 0 < a ? i.left += a : 0 < r ? i.left -= r : i.left = h(i.left - n, i.left)
					},
					top: function(i, o) {
						var e = o.within,
							t = e.isWindow ? e.scrollTop : e.offset.top,
							s = o.within.height,
							n = i.top - o.collisionPosition.marginTop,
							a = t - n,
							r = n + o.collisionHeight - s - t,
							d;
						o.collisionHeight > s ? 0 < a && 0 >= r ? (d = i.top + a + o.collisionHeight - s - t, i.top += a - d) : i.top = 0 < r && 0 >= a ? t : a > r ? t + s - o.collisionHeight : t : 0 < a ? i.top += a : 0 < r ? i.top -= r : i.top = h(i.top - n, i.top)
					}
				},
				flip: {
					left: function(i, s) {
						var e = s.within,
							t = e.offset.left + e.scrollLeft,
							n = e.width,
							a = e.isWindow ? e.scrollLeft : e.offset.left,
							o = i.left - s.collisionPosition.marginLeft,
							r = o - a,
							l = o + s.collisionWidth - n - a,
							u = "left" === s.my[0] ? -s.elemWidth : "right" === s.my[0] ? s.elemWidth : 0,
							d = "left" === s.at[0] ? s.targetWidth : "right" === s.at[0] ? -s.targetWidth : 0,
							c = -2 * s.offset[0],
							p, m;
						0 > r ? (p = i.left + u + d + c + s.collisionWidth - n - t, (0 > p || v(r) > p) && (i.left += u + d + c)) : 0 < l && (m = i.left - s.collisionPosition.marginLeft + u + d + c - a, (0 < m || l > v(m)) && (i.left += u + d + c))
					},
					top: function(i, s) {
						var e = s.within,
							t = e.offset.top + e.scrollTop,
							n = e.height,
							a = e.isWindow ? e.scrollTop : e.offset.top,
							o = i.top - s.collisionPosition.marginTop,
							r = o - a,
							l = o + s.collisionHeight - n - a,
							u = "top" === s.my[1],
							d = u ? -s.elemHeight : "bottom" === s.my[1] ? s.elemHeight : 0,
							c = "top" === s.at[1] ? s.targetHeight : "bottom" === s.at[1] ? -s.targetHeight : 0,
							p = -2 * s.offset[1],
							h, g;
						0 > r ? (g = i.top + d + c + p + s.collisionHeight - n - t, (0 > g || v(r) > g) && (i.top += d + c + p)) : 0 < l && (h = i.top - s.collisionPosition.marginTop + d + c + p - a, (0 < h || l > v(h)) && (i.top += d + c + p))
					}
				},
				flipfit: {
					left: function() {
						E.ui.position.flip.left.apply(this, arguments), E.ui.position.fit.left.apply(this, arguments)
					},
					top: function() {
						E.ui.position.flip.top.apply(this, arguments), E.ui.position.fit.top.apply(this, arguments)
					}
				}
			},
				function() {
					var t = document.getElementsByTagName("body")[0],
						e = document.createElement("div"),
						a, n, i, o, s;
					for (s in a = document.createElement(t ? "div" : "body"), i = {
						visibility: "hidden",
						width: 0,
						height: 0,
						border: 0,
						margin: 0,
						background: "none"
					}, t && E.extend(i, {
						position: "absolute",
						left: "-1000px",
						top: "-1000px"
					}), i) a.style[s] = i[s];
					a.appendChild(e), n = t || document.documentElement, n.insertBefore(a, n.firstChild), e.style.cssText = "position: absolute; left: 10.7432222px;", o = E(e).offset().left, b = 10 < o && 11 > o, a.innerHTML = "", n.removeChild(a)
				}()
		}(), E.ui.position, E.widget("ui.accordion", {
			version: "1.11.4",
			options: {
				active: 0,
				animate: {},
				collapsible: !1,
				event: "click",
				header: "> li > :first-child,> :not(li):even",
				heightStyle: "auto",
				icons: {
					activeHeader: "ui-icon-triangle-1-s",
					header: "ui-icon-triangle-1-e"
				},
				activate: null,
				beforeActivate: null
			},
			hideProps: {
				borderTopWidth: "hide",
				borderBottomWidth: "hide",
				paddingTop: "hide",
				paddingBottom: "hide",
				height: "hide"
			},
			showProps: {
				borderTopWidth: "show",
				borderBottomWidth: "show",
				paddingTop: "show",
				paddingBottom: "show",
				height: "show"
			},
			_create: function() {
				var t = this.options;
				this.prevShow = this.prevHide = E(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || !1 !== t.active && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
			},
			_getCreateEventData: function() {
				return {
					header: this.active,
					panel: this.active.length ? this.active.next() : E()
				}
			},
			_createIcons: function() {
				var t = this.options.icons;
				t && (E("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
			},
			_destroyIcons: function() {
				this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
			},
			_destroy: function() {
				var e;
				this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
			},
			_setOption: function(t, a) {
				return "active" === t ? (this._activate(a), void 0) : ("event" == t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(a)), this._super(t, a), "collapsible" != t || a || !1 !== this.options.active || this._activate(0), "icons" == t && (this._destroyIcons(), a && this._createIcons()), "disabled" == t && (this.element.toggleClass("ui-state-disabled", !!a).attr("aria-disabled", a), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!a)), void 0)
			},
			_keydown: function(a) {
				if (!a.altKey && !a.ctrlKey) {
					var e = E.ui.keyCode,
						t = this.headers.length,
						i = this.headers.index(a.target),
						o = !1;
					switch (a.keyCode) {
						case e.RIGHT:
						case e.DOWN:
							o = this.headers[(i + 1) % t];
							break;
						case e.LEFT:
						case e.UP:
							o = this.headers[(i - 1 + t) % t];
							break;
						case e.SPACE:
						case e.ENTER:
							this._eventHandler(a);
							break;
						case e.HOME:
							o = this.headers[0];
							break;
						case e.END:
							o = this.headers[t - 1];
					}
					o && (E(a.target).attr("tabIndex", -1), E(o).attr("tabIndex", 0), o.focus(), a.preventDefault())
				}
			},
			_panelKeyDown: function(t) {
				t.keyCode === E.ui.keyCode.UP && t.ctrlKey && E(t.currentTarget).prev().focus()
			},
			refresh: function() {
				var t = this.options;
				this._processPanels(), (!1 !== t.active || !0 !== t.collapsible) && this.headers.length ? !1 === t.active ? this._activate(0) : this.active.length && !E.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = E()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active) : (t.active = !1, this.active = E()), this._destroyIcons(), this._refresh()
			},
			_processPanels: function() {
				var t = this.headers,
					a = this.panels;
				this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), a && (this._off(t.not(this.headers)), this._off(a.not(this.panels)))
			},
			_refresh: function() {
				var t = this.options,
					e = t.heightStyle,
					a = this.element.parent(),
					i;
				this.active = this._findActive(t.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
					var n = E(this),
						e = n.uniqueId().attr("id"),
						t = n.next(),
						a = t.uniqueId().attr("id");
					n.attr("aria-controls", a), t.attr("aria-labelledby", e)
				}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
					"aria-selected": "false",
					"aria-expanded": "false",
					tabIndex: -1
				}).next().attr({
					"aria-hidden": "true"
				}).hide(), this.active.length ? this.active.attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				}).next().attr({
					"aria-hidden": "false"
				}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(t.event), "fill" === e ? (i = a.height(), this.element.siblings(":visible").each(function() {
					var a = E(this),
						e = a.css("position");
					"absolute" !== e && "fixed" !== e && (i -= a.outerHeight(!0))
				}), this.headers.each(function() {
					i -= E(this).outerHeight(!0)
				}), this.headers.next().each(function() {
					E(this).height(Math.max(0, i - E(this).innerHeight() + E(this).height()))
				}).css("overflow", "auto")) : "auto" === e && (i = 0, this.headers.next().each(function() {
					i = Math.max(i, E(this).css("height", "").height())
				}).height(i))
			},
			_activate: function(a) {
				var e = this._findActive(a)[0];
				e !== this.active[0] && (e = e || this.active[0], this._eventHandler({
					target: e,
					currentTarget: e,
					preventDefault: E.noop
				}))
			},
			_findActive: function(t) {
				return "number" == typeof t ? this.headers.eq(t) : E()
			},
			_setupEvents: function(t) {
				var n = {
					keydown: "_keydown"
				};
				t && E.each(t.split(" "), function(t, a) {
					n[a] = "_eventHandler"
				}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, n), this._on(this.headers.next(), {
					keydown: "_panelKeyDown"
				}), this._hoverable(this.headers), this._focusable(this.headers)
			},
			_eventHandler: function(l) {
				var e = this.options,
					t = this.active,
					i = E(l.currentTarget),
					s = i[0] === t[0],
					n = s && e.collapsible,
					a = n ? E() : i.next(),
					o = t.next(),
					r = {
						oldHeader: t,
						oldPanel: o,
						newHeader: n ? E() : i,
						newPanel: a
					};
				l.preventDefault(), s && !e.collapsible || !1 === this._trigger("beforeActivate", l, r) || (e.active = !n && this.headers.index(i), this.active = s ? E() : i, this._toggle(r), t.removeClass("ui-accordion-header-active ui-state-active"), e.icons && t.children(".ui-accordion-header-icon").removeClass(e.icons.activeHeader).addClass(e.icons.header), s || (i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), e.icons && i.children(".ui-accordion-header-icon").removeClass(e.icons.header).addClass(e.icons.activeHeader), i.next().addClass("ui-accordion-content-active")))
			},
			_toggle: function(n) {
				var e = n.newPanel,
					t = this.prevShow.length ? this.prevShow : n.oldPanel;
				this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = e, this.prevHide = t, this.options.animate ? this._animate(e, t, n) : (t.hide(), e.show(), this._toggleComplete(n)), t.attr({
					"aria-hidden": "true"
				}), t.prev().attr({
					"aria-selected": "false",
					"aria-expanded": "false"
				}), e.length && t.length ? t.prev().attr({
					tabIndex: -1,
					"aria-expanded": "false"
				}) : e.length && this.headers.filter(function() {
					return 0 === parseInt(E(this).attr("tabIndex"), 10)
				}).attr("tabIndex", -1), e.attr("aria-hidden", "false").prev().attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				})
			},
			_animate: function(a, n, s) {
				var r = this,
					t = 0,
					p = a.css("box-sizing"),
					e = a.length && (!n.length || a.index() < n.index()),
					i = this.options.animate || {},
					l = e && i.down || i,
					u = function() {
						r._toggleComplete(s)
					},
					d, m, g;
				return "number" == typeof l && (g = l), "string" == typeof l && (m = l), m = m || l.easing || i.easing, g = g || l.duration || i.duration, n.length ? a.length ? (d = a.show().outerHeight(), n.animate(this.hideProps, {
					duration: g,
					easing: m,
					step: function(t, a) {
						a.now = Math.round(t)
					}
				}), a.hide().animate(this.showProps, {
					duration: g,
					easing: m,
					complete: u,
					step: function(i, a) {
						a.now = Math.round(i), "height" === a.prop ? "content" !== r.options.heightStyle && (a.now = Math.round(d - n.outerHeight() - t), t = 0) : "content-box" === p && (t += a.now)
					}
				}), void 0) : n.animate(this.hideProps, g, m, u) : a.animate(this.showProps, g, m, u)
			},
			_toggleComplete: function(t) {
				var a = t.oldPanel;
				a.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), a.length && (a.parent()[0].className = a.parent()[0].className), this._trigger("activate", null, t)
			}
		}), E.widget("ui.menu", {
			version: "1.11.4",
			defaultElement: "<ul>",
			delay: 300,
			options: {
				icons: {
					submenu: "ui-icon-carat-1-e"
				},
				items: "> *",
				menus: "ul",
				position: {
					my: "left-1 top",
					at: "right top"
				},
				role: "menu",
				blur: null,
				focus: null,
				select: null
			},
			_create: function() {
				this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
					role: this.options.role,
					tabIndex: 0
				}), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
					"mousedown .ui-menu-item": function(e) {
						e.preventDefault()
					},
					"click .ui-menu-item": function(a) {
						var e = E(a.target);
						!this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(a), a.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(a) : !this.element.is(":focus") && E(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
					},
					"mouseenter .ui-menu-item": function(a) {
						if (!this.previousFilter) {
							var e = E(a.currentTarget);
							e.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(a, e)
						}
					},
					mouseleave: "collapseAll",
					"mouseleave .ui-menu": "collapseAll",
					focus: function(n, a) {
						var e = this.active || this.element.find(this.options.items).eq(0);
						a || this.focus(n, e)
					},
					blur: function(t) {
						this._delay(function() {
							E.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
						})
					},
					keydown: "_keydown"
				}), this.refresh(), this._on(this.document, {
					click: function(e) {
						this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
					}
				})
			},
			_destroy: function() {
				this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
					var t = E(this);
					t.data("ui-menu-submenu-carat") && t.remove()
				}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
			},
			_keydown: function(a) {
				var e = !0,
					n, i, o, s;
				switch (a.keyCode) {
					case E.ui.keyCode.PAGE_UP:
						this.previousPage(a);
						break;
					case E.ui.keyCode.PAGE_DOWN:
						this.nextPage(a);
						break;
					case E.ui.keyCode.HOME:
						this._move("first", "first", a);
						break;
					case E.ui.keyCode.END:
						this._move("last", "last", a);
						break;
					case E.ui.keyCode.UP:
						this.previous(a);
						break;
					case E.ui.keyCode.DOWN:
						this.next(a);
						break;
					case E.ui.keyCode.LEFT:
						this.collapse(a);
						break;
					case E.ui.keyCode.RIGHT:
						this.active && !this.active.is(".ui-state-disabled") && this.expand(a);
						break;
					case E.ui.keyCode.ENTER:
					case E.ui.keyCode.SPACE:
						this._activate(a);
						break;
					case E.ui.keyCode.ESCAPE:
						this.collapse(a);
						break;
					default:
						e = !1, i = this.previousFilter || "", o = String.fromCharCode(a.keyCode), s = !1, clearTimeout(this.filterTimer), o === i ? s = !0 : o = i + o, n = this._filterMenuItems(o), n = s && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n, n.length || (o = String.fromCharCode(a.keyCode), n = this._filterMenuItems(o)), n.length ? (this.focus(a, n), this.previousFilter = o, this.filterTimer = this._delay(function() {
							delete this.previousFilter
						}, 1e3)) : delete this.previousFilter;
				}
				e && a.preventDefault()
			},
			_activate: function(e) {
				this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
			},
			refresh: function() {
				var t = this,
					i = this.options.icons.submenu,
					e = this.element.find(this.options.menus),
					n, o;
				this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), e.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
					role: this.options.role,
					"aria-hidden": "true",
					"aria-expanded": "false"
				}).each(function() {
					var n = E(this),
						e = n.parent(),
						t = E("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
					e.attr("aria-haspopup", "true").prepend(t), n.attr("aria-labelledby", e.attr("id"))
				}), n = e.add(this.element), o = n.find(this.options.items), o.not(".ui-menu-item").each(function() {
					var e = E(this);
					t._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
				}), o.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
					tabIndex: -1,
					role: this._itemRole()
				}), o.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !E.contains(this.element[0], this.active[0]) && this.blur()
			},
			_itemRole: function() {
				return {
					menu: "menuitem",
					listbox: "option"
				}[this.options.role]
			},
			_setOption: function(t, a) {
				"icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(a.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!a).attr("aria-disabled", a), this._super(t, a)
			},
			focus: function(i, a) {
				var e, o;
				this.blur(i, i && "focus" === i.type), this._scrollIntoView(a), this.active = a.first(), o = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", o.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), i && "keydown" === i.type ? this._close() : this.timer = this._delay(function() {
					this._close()
				}, this.delay), e = a.children(".ui-menu"), e.length && i && /^mouse/.test(i.type) && this._startOpening(e), this.activeMenu = a.parent(), this._trigger("focus", i, {
					item: a
				})
			},
			_scrollIntoView: function(a) {
				var e, n, i, o, s, r;
				this._hasScroll() && (e = parseFloat(E.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(E.css(this.activeMenu[0], "paddingTop")) || 0, i = a.offset().top - this.activeMenu.offset().top - e - n, o = this.activeMenu.scrollTop(), s = this.activeMenu.height(), r = a.outerHeight(), 0 > i ? this.activeMenu.scrollTop(o + i) : i + r > s && this.activeMenu.scrollTop(o + i - s + r))
			},
			blur: function(t, a) {
				a || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
					item: this.active
				}))
			},
			_startOpening: function(e) {
				clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
					this._close(), this._open(e)
				}, this.delay))
			},
			_open: function(a) {
				var e = E.extend({
					of: this.active
				}, this.options.position);
				clearTimeout(this.timer), this.element.find(".ui-menu").not(a.parents(".ui-menu")).hide().attr("aria-hidden", "true"), a.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
			},
			collapseAll: function(n, e) {
				clearTimeout(this.timer), this.timer = this._delay(function() {
					var t = e ? this.element : E(n && n.target).closest(this.element.find(".ui-menu"));
					t.length || (t = this.element), this._close(t), this.blur(n), this.activeMenu = t
				}, this.delay)
			},
			_close: function(e) {
				e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
			},
			_closeOnDocumentClick: function(t) {
				return !E(t.target).closest(".ui-menu").length
			},
			_isDivider: function(e) {
				return !/[^\-\u2014\u2013\s]/.test(e.text())
			},
			collapse: function(t) {
				var a = this.active && this.active.parent().closest(".ui-menu-item", this.element);
				a && a.length && (this._close(), this.focus(t, a))
			},
			expand: function(t) {
				var a = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
				a && a.length && (this._open(a.parent()), this._delay(function() {
					this.focus(t, a)
				}))
			},
			next: function(e) {
				this._move("next", "first", e)
			},
			previous: function(e) {
				this._move("prev", "last", e)
			},
			isFirstItem: function() {
				return this.active && !this.active.prevAll(".ui-menu-item").length
			},
			isLastItem: function() {
				return this.active && !this.active.nextAll(".ui-menu-item").length
			},
			_move: function(n, a, e) {
				var t;
				this.active && (t = "first" === n || "last" === n ? this.active["first" === n ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0)), t && t.length && this.active || (t = this.activeMenu.find(this.options.items)[a]()), this.focus(e, t)
			},
			nextPage: function(n) {
				var e, i, s;
				return this.active ? (this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
					return e = E(this), 0 > e.offset().top - i - s
				}), this.focus(n, e)) : this.focus(n, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(n), void 0)
			},
			previousPage: function(n) {
				var e, i, s;
				return this.active ? (this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
					return e = E(this), 0 < e.offset().top - i + s
				}), this.focus(n, e)) : this.focus(n, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(n), void 0)
			},
			_hasScroll: function() {
				return this.element.outerHeight() < this.element.prop("scrollHeight")
			},
			select: function(a) {
				this.active = this.active || E(a.target).closest(".ui-menu-item");
				var e = {
					item: this.active
				};
				this.active.has(".ui-menu").length || this.collapseAll(a, !0), this._trigger("select", a, e)
			},
			_filterMenuItems: function(n) {
				var e = n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
					t = RegExp("^" + e, "i");
				return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
					return t.test(E.trim(E(this).text()))
				})
			}
		}), E.widget("ui.autocomplete", {
			version: "1.11.4",
			defaultElement: "<input>",
			options: {
				appendTo: null,
				autoFocus: !1,
				delay: 300,
				minLength: 1,
				position: {
					my: "left top",
					at: "left bottom",
					collision: "none"
				},
				source: null,
				change: null,
				close: null,
				focus: null,
				open: null,
				response: null,
				search: null,
				select: null
			},
			requestIndex: 0,
			pending: 0,
			_create: function() {
				var t = this.element[0].nodeName.toLowerCase(),
					e = "textarea" === t,
					n = "input" === t,
					a, i, s;
				this.isMultiLine = !!e || !n && this.element.prop("isContentEditable"), this.valueMethod = this.element[e || n ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
					keydown: function(n) {
						if (this.element.prop("readOnly")) return a = !0, s = !0, i = !0, void 0;
						a = !1, s = !1, i = !1;
						var e = E.ui.keyCode;
						switch (n.keyCode) {
							case e.PAGE_UP:
								a = !0, this._move("previousPage", n);
								break;
							case e.PAGE_DOWN:
								a = !0, this._move("nextPage", n);
								break;
							case e.UP:
								a = !0, this._keyEvent("previous", n);
								break;
							case e.DOWN:
								a = !0, this._keyEvent("next", n);
								break;
							case e.ENTER:
								this.menu.active && (a = !0, n.preventDefault(), this.menu.select(n));
								break;
							case e.TAB:
								this.menu.active && this.menu.select(n);
								break;
							case e.ESCAPE:
								this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
								break;
							default:
								i = !0, this._searchTimeout(n);
						}
					},
					keypress: function(n) {
						if (a) return a = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault(), void 0;
						if (!i) {
							var e = E.ui.keyCode;
							switch (n.keyCode) {
								case e.PAGE_UP:
									this._move("previousPage", n);
									break;
								case e.PAGE_DOWN:
									this._move("nextPage", n);
									break;
								case e.UP:
									this._keyEvent("previous", n);
									break;
								case e.DOWN:
									this._keyEvent("next", n);
							}
						}
					},
					input: function(e) {
						return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0)
					},
					focus: function() {
						this.selectedItem = null, this.previous = this._value()
					},
					blur: function(e) {
						return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0)
					}
				}), this._initSource(), this.menu = E("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
					role: null
				}).hide().menu("instance"), this._on(this.menu.element, {
					mousedown: function(t) {
						t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
							delete this.cancelBlur
						});
						var n = this.menu.element[0];
						E(t.target).closest(".ui-menu-item").length || this._delay(function() {
							var a = this;
							this.document.one("mousedown", function(e) {
								e.target === a.element[0] || e.target === n || E.contains(n, e.target) || a.close()
							})
						})
					},
					menufocus: function(n, e) {
						var t, o;
						return this.isNewMenu && (this.isNewMenu = !1, n.originalEvent && /^mouse/.test(n.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function() {
							E(n.target).trigger(n.originalEvent)
						}), void 0) : (o = e.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", n, {
							item: o
						}) && n.originalEvent && /^key/.test(n.originalEvent.type) && this._value(o.value), t = e.item.attr("aria-label") || o.value, t && E.trim(t).length && (this.liveRegion.children().hide(), E("<div>").text(t).appendTo(this.liveRegion)), void 0)
					},
					menuselect: function(n, a) {
						var e = a.item.data("ui-autocomplete-item"),
							t = this.previous;
						this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = t, this._delay(function() {
							this.previous = t, this.selectedItem = e
						})), !1 !== this._trigger("select", n, {
							item: e
						}) && this._value(e.value), this.term = this._value(), this.close(n), this.selectedItem = e
					}
				}), this.liveRegion = E("<span>", {
					role: "status",
					"aria-live": "assertive",
					"aria-relevant": "additions"
				}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
					beforeunload: function() {
						this.element.removeAttr("autocomplete")
					}
				})
			},
			_destroy: function() {
				clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
			},
			_setOption: function(t, a) {
				this._super(t, a), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && a && this.xhr && this.xhr.abort()
			},
			_appendTo: function() {
				var t = this.options.appendTo;
				return t && (t = t.jquery || t.nodeType ? E(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
			},
			_initSource: function() {
				var n = this,
					i, e;
				E.isArray(this.options.source) ? (i = this.options.source, this.source = function(a, e) {
					e(E.ui.autocomplete.filter(i, a.term))
				}) : "string" == typeof this.options.source ? (e = this.options.source, this.source = function(i, o) {
					n.xhr && n.xhr.abort(), n.xhr = E.ajax({
						url: e,
						data: i,
						dataType: "json",
						success: function(e) {
							o(e)
						},
						error: function() {
							o([])
						}
					})
				}) : this.source = this.options.source
			},
			_searchTimeout: function(n) {
				clearTimeout(this.searching), this.searching = this._delay(function() {
					var a = this.term === this._value(),
						e = this.menu.element.is(":visible"),
						t = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
					a && (!a || e || t) || (this.selectedItem = null, this.search(null, n))
				}, this.options.delay)
			},
			search: function(e, t) {
				return e = null == e ? this._value() : e, this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 === this._trigger("search", t) ? void 0 : this._search(e)
			},
			_search: function(e) {
				this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
					term: e
				}, this._response())
			},
			_response: function() {
				var e = ++this.requestIndex;
				return E.proxy(function(a) {
					e === this.requestIndex && this.__response(a), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
				}, this)
			},
			__response: function(e) {
				e && (e = this._normalize(e)), this._trigger("response", null, {
					content: e
				}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
			},
			close: function(e) {
				this.cancelSearch = !0, this._close(e)
			},
			_close: function(e) {
				this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
			},
			_change: function(e) {
				this.previous !== this._value() && this._trigger("change", e, {
					item: this.selectedItem
				})
			},
			_normalize: function(t) {
				return t.length && t[0].label && t[0].value ? t : E.map(t, function(t) {
					return "string" == typeof t ? {
						label: t,
						value: t
					} : E.extend({}, t, {
						label: t.label || t.value,
						value: t.value || t.label
					})
				})
			},
			_suggest: function(a) {
				var e = this.menu.element.empty();
				this._renderMenu(e, a), this.isNewMenu = !0, this.menu.refresh(), e.show(), this._resizeMenu(), e.position(E.extend({
					of: this.element
				}, this.options.position)), this.options.autoFocus && this.menu.next()
			},
			_resizeMenu: function() {
				var e = this.menu.element;
				e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
			},
			_renderMenu: function(i, a) {
				var o = this;
				E.each(a, function(t, a) {
					o._renderItemData(i, a)
				})
			},
			_renderItemData: function(t, a) {
				return this._renderItem(t, a).data("ui-autocomplete-item", a)
			},
			_renderItem: function(a, e) {
				return E("<li>").text(e.label).appendTo(a)
			},
			_move: function(t, a) {
				return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](a), void 0) : (this.search(null, a), void 0)
			},
			widget: function() {
				return this.menu.element
			},
			_value: function() {
				return this.valueMethod.apply(this.element, arguments)
			},
			_keyEvent: function(t, a) {
				(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, a), a.preventDefault())
			}
		}), E.extend(E.ui.autocomplete, {
			escapeRegex: function(e) {
				return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			},
			filter: function(n, e) {
				var i = RegExp(E.ui.autocomplete.escapeRegex(e), "i");
				return E.grep(n, function(e) {
					return i.test(e.label || e.value || e)
				})
			}
		}), E.widget("ui.autocomplete", E.ui.autocomplete, {
			options: {
				messages: {
					noResults: "No search results.",
					results: function(e) {
						return e + (1 < e ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
					}
				}
			},
			__response: function(a) {
				var e;
				this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.children().hide(), E("<div>").text(e).appendTo(this.liveRegion))
			}
		}), E.ui.autocomplete;
	var f = function() {
		var t = E(this);
		setTimeout(function() {
			t.find(":ui-button").button("refresh")
		}, 1)
	},
		u = function(n) {
			var e = n.name,
				i = n.form,
				a = E([]);
			return e && (e = e.replace(/'/g, "\\'"), a = i ? E(i).find("[name='" + e + "'][type=radio]") : E("[name='" + e + "'][type=radio]", n.ownerDocument).filter(function() {
				return !this.form
			})), a
		},
		t;
	E.widget("ui.button", {
		version: "1.11.4",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: !0,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function() {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f), "boolean" == typeof this.options.disabled ? this.element.prop("disabled", this.options.disabled) : this.options.disabled = !!this.element.prop("disabled"), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
			var n = this,
				o = this.options,
				e = "checkbox" === this.type || "radio" === this.type,
				a = e ? "" : "ui-state-active";
			null === o.label && (o.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
				o.disabled || this === t && E(this).addClass("ui-state-active")
			}).bind("mouseleave" + this.eventNamespace, function() {
				o.disabled || E(this).removeClass(a)
			}).bind("click" + this.eventNamespace, function(e) {
				o.disabled && (e.preventDefault(), e.stopImmediatePropagation())
			}), this._on({
				focus: function() {
					this.buttonElement.addClass("ui-state-focus")
				},
				blur: function() {
					this.buttonElement.removeClass("ui-state-focus")
				}
			}), e && this.element.bind("change" + this.eventNamespace, function() {
				n.refresh()
			}), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
				return !o.disabled && void 0
			}) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
				if (o.disabled) return !1;
				E(this).addClass("ui-state-active"), n.buttonElement.attr("aria-pressed", "true");
				var e = n.element[0];
				u(e).not(e).map(function() {
					return E(this).button("widget")[0]
				}).removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
				return !o.disabled && (E(this).addClass("ui-state-active"), t = this, n.document.one("mouseup", function() {
					t = null
				}), void 0)
			}).bind("mouseup" + this.eventNamespace, function() {
				return !o.disabled && (E(this).removeClass("ui-state-active"), void 0)
			}).bind("keydown" + this.eventNamespace, function(t) {
				return !o.disabled && ((t.keyCode === E.ui.keyCode.SPACE || t.keyCode === E.ui.keyCode.ENTER) && E(this).addClass("ui-state-active"), void 0)
			}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
				E(this).removeClass("ui-state-active")
			}), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
				t.keyCode === E.ui.keyCode.SPACE && E(this).click()
			})), this._setOption("disabled", o.disabled), this._resetButton()
		},
		_determineButtonType: function() {
			var e, t, i;
			this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
		},
		widget: function() {
			return this.buttonElement
		},
		_destroy: function() {
			this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-active ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
		},
		_setOption: function(t, a) {
			return this._super(t, a), "disabled" === t ? (this.widget().toggleClass("ui-state-disabled", !!a), this.element.prop("disabled", !!a), a && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0)
		},
		refresh: function() {
			var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
			t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? u(this.element[0]).each(function() {
				E(this).is(":checked") ? E(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : E(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
		},
		_resetButton: function() {
			if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
			var a = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
				e = E("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),
				t = this.options.icons,
				i = t.primary && t.secondary,
				o = [];
			t.primary || t.secondary ? (this.options.text && o.push("ui-button-text-icon" + (i ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && a.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'></span>"), t.secondary && a.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'></span>"), this.options.text || (o.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || a.attr("title", E.trim(e)))) : o.push("ui-button-text-only"), a.addClass(o.join(" "))
		}
	}), E.widget("ui.buttonset", {
		version: "1.11.4",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
		},
		_create: function() {
			this.element.addClass("ui-buttonset")
		},
		_init: function() {
			this.refresh()
		},
		_setOption: function(t, a) {
			"disabled" === t && this.buttons.button("option", t, a), this._super(t, a)
		},
		refresh: function() {
			var n = "rtl" === this.element.css("direction"),
				e = this.element.find(this.options.items),
				t = e.filter(":ui-button");
			e.not(":ui-button").button(), t.button("refresh"), this.buttons = e.map(function() {
				return E(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(n ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(n ? "ui-corner-left" : "ui-corner-right").end().end()
		},
		_destroy: function() {
			this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
				return E(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
		}
	}), E.ui.button, E.extend(E.ui, {
		datepicker: {
			version: "1.11.4"
		}
	});
	var m;
	E.extend(e.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function() {
			return this.dpDiv
		},
		setDefaults: function(e) {
			return b(this._defaults, e || {}), this
		},
		_attachDatepicker: function(a, e) {
			var t, n, s;
			t = a.nodeName.toLowerCase(), n = "div" === t || "span" === t, a.id || (this.uuid += 1, a.id = "dp" + this.uuid), s = this._newInst(E(a), n), s.settings = E.extend({}, e || {}), "input" === t ? this._connectDatepicker(a, s) : n && this._inlineDatepicker(a, s)
		},
		_newInst: function(n, e) {
			var t = n[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id: t,
				input: n,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: e,
				dpDiv: e ? c(E("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function(n, e) {
			var t = E(n);
			e.append = E([]), e.trigger = E([]), t.hasClass(this.markerClassName) || (this._attachments(t, e), t.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(e), E.data(n, "datepicker", e), e.settings.disabled && this._disableDatepicker(n))
		},
		_attachments: function(a, e) {
			var t = this._get(e, "appendText"),
				n = this._get(e, "isRTL"),
				i, o, s;
			e.append && e.append.remove(), t && (e.append = E("<span class='" + this._appendClass + "'>" + t + "</span>"), a[n ? "before" : "after"](e.append)), a.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove(), i = this._get(e, "showOn"), ("focus" === i || "both" === i) && a.focus(this._showDatepicker), ("button" === i || "both" === i) && (o = this._get(e, "buttonText"), s = this._get(e, "buttonImage"), e.trigger = E(this._get(e, "buttonImageOnly") ? E("<img/>").addClass(this._triggerClass).attr({
				src: s,
				alt: o,
				title: o
			}) : E("<button type='button'></button>").addClass(this._triggerClass).html(s ? E("<img/>").attr({
				src: s,
				alt: o,
				title: o
			}) : o)), a[n ? "before" : "after"](e.trigger), e.trigger.click(function() {
				return E.datepicker._datepickerShowing && E.datepicker._lastInput === a[0] ? E.datepicker._hideDatepicker() : E.datepicker._datepickerShowing && E.datepicker._lastInput !== a[0] ? (E.datepicker._hideDatepicker(), E.datepicker._showDatepicker(a[0])) : E.datepicker._showDatepicker(a[0]), !1
			}))
		},
		_autoSize: function(t) {
			if (this._get(t, "autoSize") && !t.inline) {
				var n = new Date(2009, 11, 20),
					e = this._get(t, "dateFormat"),
					a, i, s, r;
				e.match(/[DM]/) && (a = function(e) {
					for (i = 0, s = 0, r = 0; e.length > r; r++) e[r].length > i && (i = e[r].length, s = r);
					return s
				}, n.setMonth(a(this._get(t, e.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(a(this._get(t, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), t.input.attr("size", this._formatDate(t, n).length)
			}
		},
		_inlineDatepicker: function(n, e) {
			var t = E(n);
			t.hasClass(this.markerClassName) || (t.addClass(this.markerClassName).append(e.dpDiv), E.data(n, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(n), e.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function(i, e, o, r, s) {
			var n = this._dialogInst,
				l, d, c, u, h;
			return n || (this.uuid += 1, l = "dp" + this.uuid, this._dialogInput = E("<input type='text' id='" + l + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), E("body").append(this._dialogInput), n = this._dialogInst = this._newInst(this._dialogInput, !1), n.settings = {}, E.data(this._dialogInput[0], "datepicker", n)), b(n.settings, r || {}), e = e && e.constructor === Date ? this._formatDate(n, e) : e, this._dialogInput.val(e), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (d = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [d / 2 - 100 + u, c / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), n.settings.onSelect = o, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), E.blockUI && E.blockUI(this.dpDiv), E.data(this._dialogInput[0], "datepicker", n), this
		},
		_destroyDatepicker: function(i) {
			var e = E(i),
				t = E.data(i, "datepicker"),
				a;
			e.hasClass(this.markerClassName) && (a = i.nodeName.toLowerCase(), E.removeData(i, "datepicker"), "input" === a ? (t.append.remove(), t.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === a || "span" === a) && e.removeClass(this.markerClassName).empty(), m === t && (m = null))
		},
		_enableDatepicker: function(i) {
			var o = E(i),
				e = E.data(i, "datepicker"),
				t, s;
			o.hasClass(this.markerClassName) && (t = i.nodeName.toLowerCase(), "input" === t ? (i.disabled = !1, e.trigger.filter("button").each(function() {
				this.disabled = !1
			}).end().filter("img").css({
				opacity: "1.0",
				cursor: ""
			})) : ("div" === t || "span" === t) && (s = o.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = E.map(this._disabledInputs, function(e) {
				return e === i ? null : e
			}))
		},
		_disableDatepicker: function(i) {
			var o = E(i),
				e = E.data(i, "datepicker"),
				t, s;
			o.hasClass(this.markerClassName) && (t = i.nodeName.toLowerCase(), "input" === t ? (i.disabled = !0, e.trigger.filter("button").each(function() {
				this.disabled = !0
			}).end().filter("img").css({
				opacity: "0.5",
				cursor: "default"
			})) : ("div" === t || "span" === t) && (s = o.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = E.map(this._disabledInputs, function(e) {
				return e === i ? null : e
			}), this._disabledInputs[this._disabledInputs.length] = i)
		},
		_isDisabledDatepicker: function(t) {
			if (!t) return !1;
			for (var a = 0; this._disabledInputs.length > a; a++)
				if (this._disabledInputs[a] === t) return !0;
			return !1
		},
		_getInst: function(t) {
			try {
				return E.data(t, "datepicker")
			} catch (t) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function(a, e, t) {
			var n = this._getInst(a),
				i, o, s, c;
			return 2 === arguments.length && "string" == typeof e ? "defaults" === e ? E.extend({}, E.datepicker._defaults) : n ? "all" === e ? E.extend({}, n.settings) : this._get(n, e) : null : (i = e || {}, "string" == typeof e && (i = {}, i[e] = t), n && (this._curInst === n && this._hideDatepicker(), o = this._getDateDatepicker(a, !0), s = this._getMinMaxDate(n, "min"), c = this._getMinMaxDate(n, "max"), b(n.settings, i), null !== s && void 0 !== i.dateFormat && void 0 === i.minDate && (n.settings.minDate = this._formatDate(n, s)), null !== c && void 0 !== i.dateFormat && void 0 === i.maxDate && (n.settings.maxDate = this._formatDate(n, c)), "disabled" in i && (i.disabled ? this._disableDatepicker(a) : this._enableDatepicker(a)), this._attachments(E(a), n), this._autoSize(n), this._setDate(n, o), this._updateAlternate(n), this._updateDatepicker(n)), void 0)
		},
		_changeDatepicker: function(n, a, e) {
			this._optionDatepicker(n, a, e)
		},
		_refreshDatepicker: function(t) {
			var a = this._getInst(t);
			a && this._updateDatepicker(a)
		},
		_setDateDatepicker: function(n, a) {
			var e = this._getInst(n);
			e && (this._setDate(e, a), this._updateDatepicker(e), this._updateAlternate(e))
		},
		_getDateDatepicker: function(n, a) {
			var e = this._getInst(n);
			return e && !e.inline && this._setDateFromField(e, a), e ? this._getDate(e) : null
		},
		_doKeyDown: function(n) {
			var e = E.datepicker._getInst(n.target),
				t = !0,
				i = e.dpDiv.is(".ui-datepicker-rtl"),
				o, s, l;
			if (e._keyEvent = !0, E.datepicker._datepickerShowing) switch (n.keyCode) {
				case 9:
					E.datepicker._hideDatepicker(), t = !1;
					break;
				case 13:
					return l = E("td." + E.datepicker._dayOverClass + ":not(." + E.datepicker._currentClass + ")", e.dpDiv), l[0] && E.datepicker._selectDay(n.target, e.selectedMonth, e.selectedYear, l[0]), o = E.datepicker._get(e, "onSelect"), o ? (s = E.datepicker._formatDate(e), o.apply(e.input ? e.input[0] : null, [s, e])) : E.datepicker._hideDatepicker(), !1;
				case 27:
					E.datepicker._hideDatepicker();
					break;
				case 33:
					E.datepicker._adjustDate(n.target, n.ctrlKey ? -E.datepicker._get(e, "stepBigMonths") : -E.datepicker._get(e, "stepMonths"), "M");
					break;
				case 34:
					E.datepicker._adjustDate(n.target, n.ctrlKey ? +E.datepicker._get(e, "stepBigMonths") : +E.datepicker._get(e, "stepMonths"), "M");
					break;
				case 35:
					(n.ctrlKey || n.metaKey) && E.datepicker._clearDate(n.target), t = n.ctrlKey || n.metaKey;
					break;
				case 36:
					(n.ctrlKey || n.metaKey) && E.datepicker._gotoToday(n.target), t = n.ctrlKey || n.metaKey;
					break;
				case 37:
					(n.ctrlKey || n.metaKey) && E.datepicker._adjustDate(n.target, i ? 1 : -1, "D"), t = n.ctrlKey || n.metaKey, n.originalEvent.altKey && E.datepicker._adjustDate(n.target, n.ctrlKey ? -E.datepicker._get(e, "stepBigMonths") : -E.datepicker._get(e, "stepMonths"), "M");
					break;
				case 38:
					(n.ctrlKey || n.metaKey) && E.datepicker._adjustDate(n.target, -7, "D"), t = n.ctrlKey || n.metaKey;
					break;
				case 39:
					(n.ctrlKey || n.metaKey) && E.datepicker._adjustDate(n.target, i ? -1 : 1, "D"), t = n.ctrlKey || n.metaKey, n.originalEvent.altKey && E.datepicker._adjustDate(n.target, n.ctrlKey ? +E.datepicker._get(e, "stepBigMonths") : +E.datepicker._get(e, "stepMonths"), "M");
					break;
				case 40:
					(n.ctrlKey || n.metaKey) && E.datepicker._adjustDate(n.target, 7, "D"), t = n.ctrlKey || n.metaKey;
					break;
				default:
					t = !1;
			} else 36 === n.keyCode && n.ctrlKey ? E.datepicker._showDatepicker(this) : t = !1;
			t && (n.preventDefault(), n.stopPropagation())
		},
		_doKeyPress: function(i) {
			var e = E.datepicker._getInst(i.target),
				t, o;
			return E.datepicker._get(e, "constrainInput") ? (t = E.datepicker._possibleChars(E.datepicker._get(e, "dateFormat")), o = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > o || !t || -1 < t.indexOf(o)) : void 0
		},
		_doKeyUp: function(n) {
			var e = E.datepicker._getInst(n.target),
				t;
			if (e.input.val() !== e.lastVal) try {
				t = E.datepicker.parseDate(E.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, E.datepicker._getFormatConfig(e)), t && (E.datepicker._setDateFromField(e), E.datepicker._updateAlternate(e), E.datepicker._updateDatepicker(e))
			} catch (t) { }
			return !0
		},
		_showDatepicker: function(t) {
			if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = E("input", t.parentNode)[0]), !E.datepicker._isDisabledDatepicker(t) && E.datepicker._lastInput !== t) {
				var a, n, i, o, l, u, h;
				a = E.datepicker._getInst(t), E.datepicker._curInst && E.datepicker._curInst !== a && (E.datepicker._curInst.dpDiv.stop(!0, !0), a && E.datepicker._datepickerShowing && E.datepicker._hideDatepicker(E.datepicker._curInst.input[0])), n = E.datepicker._get(a, "beforeShow"), i = n ? n.apply(t, [t, a]) : {}, !1 !== i && (b(a.settings, i), a.lastVal = null, E.datepicker._lastInput = t, E.datepicker._setDateFromField(a), E.datepicker._inDialog && (t.value = ""), E.datepicker._pos || (E.datepicker._pos = E.datepicker._findPos(t), E.datepicker._pos[1] += t.offsetHeight), o = !1, E(t).parents().each(function() {
					return o |= "fixed" === E(this).css("position"), !o
				}), l = {
					left: E.datepicker._pos[0],
					top: E.datepicker._pos[1]
				}, E.datepicker._pos = null, a.dpDiv.empty(), a.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				}), E.datepicker._updateDatepicker(a), l = E.datepicker._checkOffset(a, l, o), a.dpDiv.css({
					position: E.datepicker._inDialog && E.blockUI ? "static" : o ? "fixed" : "absolute",
					display: "none",
					left: l.left + "px",
					top: l.top + "px"
				}), a.inline || (u = E.datepicker._get(a, "showAnim"), h = E.datepicker._get(a, "duration"), a.dpDiv.css("z-index", v(E(t)) + 1), E.datepicker._datepickerShowing = !0, E.effects && E.effects.effect[u] ? a.dpDiv.show(u, E.datepicker._get(a, "showOptions"), h) : a.dpDiv[u || "show"](u ? h : null), E.datepicker._shouldFocusInput(a) && a.input.focus(), E.datepicker._curInst = a))
			}
		},
		_updateDatepicker: function(a) {
			this.maxRows = 4, m = a, a.dpDiv.empty().append(this._generateHTML(a)), this._attachHandlers(a);
			var e = this._getNumberOfMonths(a),
				t = e[1],
				i = a.dpDiv.find("." + this._dayOverClass + " a"),
				n;
			0 < i.length && p.apply(i.get(0)), a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < t && a.dpDiv.addClass("ui-datepicker-multi-" + t).css("width", 17 * t + "em"), a.dpDiv[(1 !== e[0] || 1 !== e[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), a === E.datepicker._curInst && E.datepicker._datepickerShowing && E.datepicker._shouldFocusInput(a) && a.input.focus(), a.yearshtml && (n = a.yearshtml, setTimeout(function() {
				n === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml), n = a.yearshtml = null
			}, 0))
		},
		_shouldFocusInput: function(e) {
			return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
		},
		_checkOffset: function(l, e, t) {
			var i = l.dpDiv.outerWidth(),
				s = l.dpDiv.outerHeight(),
				n = l.input ? l.input.outerWidth() : 0,
				a = l.input ? l.input.outerHeight() : 0,
				o = document.documentElement.clientWidth + (t ? 0 : E(document).scrollLeft()),
				r = document.documentElement.clientHeight + (t ? 0 : E(document).scrollTop());
			return e.left -= this._get(l, "isRTL") ? i - n : 0, e.left -= t && e.left === l.input.offset().left ? E(document).scrollLeft() : 0, e.top -= t && e.top === l.input.offset().top + a ? E(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + i > o && o > i ? Math.abs(e.left + i - o) : 0), e.top -= Math.min(e.top, e.top + s > r && r > s ? Math.abs(s + a) : 0), e
		},
		_findPos: function(t) {
			for (var i = this._getInst(t), a = this._get(i, "isRTL"), o; t && ("hidden" === t.type || 1 !== t.nodeType || E.expr.filters.hidden(t));) t = t[a ? "previousSibling" : "nextSibling"];
			return o = E(t).offset(), [o.left, o.top]
		},
		_hideDatepicker: function(a) {
			var e = this._curInst,
				t, n, i, s;
			!e || a && e !== E.data(a, "datepicker") || this._datepickerShowing && (t = this._get(e, "showAnim"), n = this._get(e, "duration"), i = function() {
				E.datepicker._tidyDialog(e)
			}, E.effects && (E.effects.effect[t] || E.effects[t]) ? e.dpDiv.hide(t, E.datepicker._get(e, "showOptions"), n, i) : e.dpDiv["slideDown" === t ? "slideUp" : "fadeIn" === t ? "fadeOut" : "hide"](t ? n : null, i), t || i(), this._datepickerShowing = !1, s = this._get(e, "onClose"), s && s.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
				position: "absolute",
				left: "0",
				top: "-100px"
			}), E.blockUI && (E.unblockUI(), E("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function(e) {
			e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function(n) {
			if (E.datepicker._curInst) {
				var e = E(n.target),
					t = E.datepicker._getInst(e[0]);
				(e[0].id === E.datepicker._mainDivId || 0 !== e.parents("#" + E.datepicker._mainDivId).length || e.hasClass(E.datepicker.markerClassName) || e.closest("." + E.datepicker._triggerClass).length || !E.datepicker._datepickerShowing || E.datepicker._inDialog && E.blockUI) && (!e.hasClass(E.datepicker.markerClassName) || E.datepicker._curInst === t) || E.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function(a, e, t) {
			var i = E(a),
				o = this._getInst(i[0]);
			this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(o, e + ("M" === t ? this._get(o, "showCurrentAtPos") : 0), t), this._updateDatepicker(o))
		},
		_gotoToday: function(i) {
			var e = E(i),
				t = this._getInst(e[0]),
				a;
			this._get(t, "gotoCurrent") && t.currentDay ? (t.selectedDay = t.currentDay, t.drawMonth = t.selectedMonth = t.currentMonth, t.drawYear = t.selectedYear = t.currentYear) : (a = new Date, t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear()), this._notifyChange(t), this._adjustDate(e)
		},
		_selectMonthYear: function(a, e, t) {
			var i = E(a),
				o = this._getInst(i[0]);
			o["selected" + ("M" === t ? "Month" : "Year")] = o["draw" + ("M" === t ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(i)
		},
		_selectDay: function(a, e, t, i) {
			var s = E(a),
				n;
			E(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(s[0]) || (n = this._getInst(s[0]), n.selectedDay = n.currentDay = E("a", i).html(), n.selectedMonth = n.currentMonth = e, n.selectedYear = n.currentYear = t, this._selectDate(a, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
		},
		_clearDate: function(a) {
			var e = E(a);
			this._selectDate(e, "")
		},
		_selectDate: function(i, e) {
			var s = E(i),
				o = this._getInst(s[0]),
				n;
			e = null == e ? this._formatDate(o) : e, o.input && o.input.val(e), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [e, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
		},
		_updateAlternate: function(n) {
			var e = this._get(n, "altField"),
				t, i, s;
			e && (t = this._get(n, "altFormat") || this._get(n, "dateFormat"), i = this._getDate(n), s = this.formatDate(t, i, this._getFormatConfig(n)), E(e).each(function() {
				E(this).val(s)
			}))
		},
		noWeekends: function(t) {
			var a = t.getDay();
			return [0 < a && 6 > a, ""]
		},
		iso8601Week: function(t) {
			var a = new Date(t.getTime()),
				e;
			return a.setDate(a.getDate() + 4 - (a.getDay() || 7)), e = a.getTime(), a.setMonth(0), a.setDate(1), Math.floor(Math.round((e - a) / 864e5) / 7) + 1
		},
		parseDate: function(a, o, n) {
			if (null == a || null == o) throw "Invalid arguments";
			if (o = "object" == typeof o ? "" + o : o + "", "" === o) return null;
			var r = 0,
				e = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				t = "string" == typeof e ? new Date().getFullYear() % 100 + parseInt(e, 10) : e,
				i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
				s = (n ? n.dayNames : null) || this._defaults.dayNames,
				l = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
				d = (n ? n.monthNames : null) || this._defaults.monthNames,
				c = -1,
				p = -1,
				m = -1,
				h = -1,
				g = !1,
				v = function(n) {
					var t = a.length > w + 1 && a.charAt(w + 1) === n;
					return t && w++, t
				},
				y = function(l) {
					var i = v(l),
						e = "@" === l ? 14 : "!" === l ? 20 : "y" === l && i ? 4 : "o" === l ? 3 : 2,
						t = "y" === l ? e : 1,
						s = RegExp("^\\d{" + t + "," + e + "}"),
						n = o.substring(r).match(s);
					if (!n) throw "Missing number at position " + r;
					return r += n[0].length, parseInt(n[0], 10)
				},
				b = function(a, e, t) {
					var i = -1,
						l = E.map(v(a) ? t : e, function(t, a) {
							return [
								[a, t]
							]
						}).sort(function(t, a) {
							return -(t[1].length - a[1].length)
						});
					if (E.each(l, function(n, a) {
						var e = a[1];
						return o.substr(r, e.length).toLowerCase() === e.toLowerCase() ? (i = a[0], r += e.length, !1) : void 0
					}), -1 !== i) return i + 1;
					throw "Unknown name at position " + r
				},
				_ = function() {
					if (o.charAt(r) !== a.charAt(w)) throw "Unexpected literal at position " + r;
					r++
				},
				w, x, C, P;
			for (w = 0; a.length > w; w++)
				if (g) "'" !== a.charAt(w) || v("'") ? _() : g = !1;
				else switch (a.charAt(w)) {
					case "d":
						m = y("d");
						break;
					case "D":
						b("D", i, s);
						break;
					case "o":
						h = y("o");
						break;
					case "m":
						p = y("m");
						break;
					case "M":
						p = b("M", l, d);
						break;
					case "y":
						c = y("y");
						break;
					case "@":
						P = new Date(y("@")), c = P.getFullYear(), p = P.getMonth() + 1, m = P.getDate();
						break;
					case "!":
						P = new Date((y("!") - this._ticksTo1970) / 1e4), c = P.getFullYear(), p = P.getMonth() + 1, m = P.getDate();
						break;
					case "'":
						v("'") ? _() : g = !0;
						break;
					default:
						_();
				}
			if (o.length > r && (C = o.substr(r), !/^\s+/.test(C))) throw "Extra/unparsed characters found in date: " + C;
			if (-1 === c ? c = new Date().getFullYear() : 100 > c && (c += new Date().getFullYear() - new Date().getFullYear() % 100 + (t >= c ? 0 : -100)), -1 < h)
				for (p = 1, m = h; ;) {
					if (x = this._getDaysInMonth(c, p - 1), x >= m) break;
					p++, m -= x
				}
			if (P = this._daylightSavingAdjust(new Date(c, p - 1, m)), P.getFullYear() !== c || P.getMonth() + 1 !== p || P.getDate() !== m) throw "Invalid date";
			return P
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
		formatDate: function(s, d, e) {
			if (!d) return "";
			var t = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
				i = (e ? e.dayNames : null) || this._defaults.dayNames,
				n = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
				a = (e ? e.monthNames : null) || this._defaults.monthNames,
				o = function(a) {
					var e = s.length > m + 1 && s.charAt(m + 1) === a;
					return e && m++, e
				},
				r = function(n, a, e) {
					var t = "" + a;
					if (o(n))
						for (; e > t.length;) t = "0" + t;
					return t
				},
				c = function(n, a, e, t) {
					return o(n) ? t[a] : e[a]
				},
				l = "",
				p = !1,
				m;
			if (d)
				for (m = 0; s.length > m; m++)
					if (p) "'" !== s.charAt(m) || o("'") ? l += s.charAt(m) : p = !1;
					else switch (s.charAt(m)) {
						case "d":
							l += r("d", d.getDate(), 2);
							break;
						case "D":
							l += c("D", d.getDay(), t, i);
							break;
						case "o":
							l += r("o", Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 864e5), 3);
							break;
						case "m":
							l += r("m", d.getMonth() + 1, 2);
							break;
						case "M":
							l += c("M", d.getMonth(), n, a);
							break;
						case "y":
							l += o("y") ? d.getFullYear() : (10 > d.getYear() % 100 ? "0" : "") + d.getYear() % 100;
							break;
						case "@":
							l += d.getTime();
							break;
						case "!":
							l += 1e4 * d.getTime() + this._ticksTo1970;
							break;
						case "'":
							o("'") ? l += "'" : p = !0;
							break;
						default:
							l += s.charAt(m);
					}
			return l
		},
		_possibleChars: function(i) {
			var t = "",
				a = !1,
				s = function(a) {
					var e = i.length > r + 1 && i.charAt(r + 1) === a;
					return e && r++, e
				},
				r;
			for (r = 0; i.length > r; r++)
				if (a) "'" !== i.charAt(r) || s("'") ? t += i.charAt(r) : a = !1;
				else switch (i.charAt(r)) {
					case "d":
					case "m":
					case "y":
					case "@":
						t += "0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						s("'") ? t += "'" : a = !0;
						break;
					default:
						t += i.charAt(r);
				}
			return t
		},
		_get: function(t, a) {
			return void 0 === t.settings[a] ? this._defaults[a] : t.settings[a]
		},
		_setDateFromField: function(a, o) {
			if (a.input.val() !== a.lastVal) {
				var e = this._get(a, "dateFormat"),
					s = a.lastVal = a.input ? a.input.val() : null,
					t = this._getDefaultDate(a),
					r = t,
					l = this._getFormatConfig(a);
				try {
					r = this.parseDate(e, s, l) || t
				} catch (e) {
					s = o ? "" : s
				}
				a.selectedDay = r.getDate(), a.drawMonth = a.selectedMonth = r.getMonth(), a.drawYear = a.selectedYear = r.getFullYear(), a.currentDay = s ? r.getDate() : 0, a.currentMonth = s ? r.getMonth() : 0, a.currentYear = s ? r.getFullYear() : 0, this._adjustInstDate(a)
			}
		},
		_getDefaultDate: function(e) {
			return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
		},
		_determineDate: function(o, e, t) {
			var i = function(e) {
				try {
					return E.datepicker.parseDate(E.datepicker._get(o, "dateFormat"), e, E.datepicker._getFormatConfig(o))
				} catch (t) { }
				for (var t = (e.toLowerCase().match(/^c/) ? E.datepicker._getDate(o) : null) || new Date, a = t.getFullYear(), i = t.getMonth(), r = t.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, p = l.exec(e); p;) {
					switch (p[2] || "d") {
						case "d":
						case "D":
							r += parseInt(p[1], 10);
							break;
						case "w":
						case "W":
							r += 7 * parseInt(p[1], 10);
							break;
						case "m":
						case "M":
							i += parseInt(p[1], 10), r = Math.min(r, E.datepicker._getDaysInMonth(a, i));
							break;
						case "y":
						case "Y":
							a += parseInt(p[1], 10), r = Math.min(r, E.datepicker._getDaysInMonth(a, i));
					}
					p = l.exec(e)
				}
				return new Date(a, i, r)
			},
				n = null == e || "" === e ? t : "string" == typeof e ? i(e) : "number" == typeof e ? isNaN(e) ? t : function(t) {
					var a = new Date;
					return a.setDate(a.getDate() + t), a
				}(e) : new Date(e.getTime());
			return n = n && "Invalid Date" == "" + n ? t : n, n && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
		},
		_daylightSavingAdjust: function(e) {
			return e ? (e.setHours(12 < e.getHours() ? e.getHours() + 2 : 0), e) : null
		},
		_setDate: function(o, s, e) {
			var t = o.selectedMonth,
				i = o.selectedYear,
				n = this._restrictMinMax(o, this._determineDate(o, s, new Date));
			o.selectedDay = o.currentDay = n.getDate(), o.drawMonth = o.selectedMonth = o.currentMonth = n.getMonth(), o.drawYear = o.selectedYear = o.currentYear = n.getFullYear(), t === o.selectedMonth && i === o.selectedYear || e || this._notifyChange(o), this._adjustInstDate(o), o.input && o.input.val(s ? this._formatDate(o) : "")
		},
		_getDate: function(t) {
			var a = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return a
		},
		_attachHandlers: function(n) {
			var e = this._get(n, "stepMonths"),
				t = "#" + n.id.replace(/\\\\/g, "\\");
			n.dpDiv.find("[data-handler]").map(function() {
				E(this).bind(this.getAttribute("data-event"), {
					prev: function() {
						E.datepicker._adjustDate(t, -e, "M")
					},
					next: function() {
						E.datepicker._adjustDate(t, +e, "M")
					},
					hide: function() {
						E.datepicker._hideDatepicker()
					},
					today: function() {
						E.datepicker._gotoToday(t)
					},
					selectDay: function() {
						return E.datepicker._selectDay(t, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function() {
						return E.datepicker._selectMonthYear(t, this, "M"), !1
					},
					selectYear: function() {
						return E.datepicker._selectMonthYear(t, this, "Y"), !1
					}
				}[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function(t) {
			var a = new Date,
				e = this._daylightSavingAdjust(new Date(a.getFullYear(), a.getMonth(), a.getDate())),
				n = this._get(t, "isRTL"),
				i = this._get(t, "showButtonPanel"),
				o = this._get(t, "hideIfNoPrevNext"),
				s = this._get(t, "navigationAsDateFormat"),
				r = this._getNumberOfMonths(t),
				l = this._get(t, "showCurrentAtPos"),
				d = this._get(t, "stepMonths"),
				c = 1 !== r[0] || 1 !== r[1],
				p = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
				u = this._getMinMaxDate(t, "min"),
				m = this._getMinMaxDate(t, "max"),
				h = t.drawMonth - l,
				g = t.drawYear,
				f, v, y, b, _, w, x, C, k, D, T, S, P, M, O, I, E, A, N, H, W, z, R, F, L, Y, q, B, U, V, G, K, X, Q, Z, J, ee, je, qe;
			if (0 > h && (h += 12, g--), m)
				for (f = this._daylightSavingAdjust(new Date(m.getFullYear(), m.getMonth() - r[0] * r[1] + 1, m.getDate())), f = u && u > f ? u : f; this._daylightSavingAdjust(new Date(g, h, 1)) > f;) h--, 0 > h && (h = 11, g--);
			for (t.drawMonth = h, t.drawYear = g, v = this._get(t, "prevText"), v = s ? this.formatDate(v, this._daylightSavingAdjust(new Date(g, h - d, 1)), this._getFormatConfig(t)) : v, y = this._canAdjustMonth(t, -1, g, h) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + v + "'><span class='ui-icon ui-icon-circle-triangle-" + (n ? "e" : "w") + "'>" + v + "</span></a>" : o ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + v + "'><span class='ui-icon ui-icon-circle-triangle-" + (n ? "e" : "w") + "'>" + v + "</span></a>", b = this._get(t, "nextText"), b = s ? this.formatDate(b, this._daylightSavingAdjust(new Date(g, h + d, 1)), this._getFormatConfig(t)) : b, _ = this._canAdjustMonth(t, 1, g, h) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + b + "'><span class='ui-icon ui-icon-circle-triangle-" + (n ? "w" : "e") + "'>" + b + "</span></a>" : o ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + b + "'><span class='ui-icon ui-icon-circle-triangle-" + (n ? "w" : "e") + "'>" + b + "</span></a>", w = this._get(t, "currentText"), x = this._get(t, "gotoCurrent") && t.currentDay ? p : e, w = s ? this.formatDate(w, x, this._getFormatConfig(t)) : w, C = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", k = i ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (n ? C : "") + (this._isInRange(t, x) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + w + "</button>" : "") + (n ? "" : C) + "</div>" : "", D = parseInt(this._get(t, "firstDay"), 10), D = isNaN(D) ? 0 : D, T = this._get(t, "showWeek"), S = this._get(t, "dayNames"), P = this._get(t, "dayNamesMin"), M = this._get(t, "monthNames"), O = this._get(t, "monthNamesShort"), I = this._get(t, "beforeShowDay"), E = this._get(t, "showOtherMonths"), A = this._get(t, "selectOtherMonths"), N = this._getDefaultDate(t), H = "", z = 0; r[0] > z; z++) {
				for (R = "", this.maxRows = 4, F = 0; r[1] > F; F++) {
					for ((L = this._daylightSavingAdjust(new Date(g, h, t.selectedDay)), Y = " ui-corner-all", q = "", c) && ((q += "<div class='ui-datepicker-group", 1 < r[1]) && (0 === F ? (q += " ui-datepicker-group-first", Y = " ui-corner-" + (n ? "right" : "left")) : F === r[1] - 1 ? (q += " ui-datepicker-group-last", Y = " ui-corner-" + (n ? "left" : "right")) : (q += " ui-datepicker-group-middle", Y = "")), q += "'>"), q += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + Y + "'>" + (/all|left/.test(Y) && 0 === z ? n ? _ : y : "") + (/all|right/.test(Y) && 0 === z ? n ? y : _ : "") + this._generateMonthYearHeader(t, h, g, u, m, 0 < z || 0 < F, M, O) + "</div><table class='ui-datepicker-calendar'><thead><tr>", B = T ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", W = 0; 7 > W; W++) U = (W + D) % 7, B += "<th scope='col'" + (5 <= (W + D + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + S[U] + "'>" + P[U] + "</span></th>";
					for (q += B + "</tr></thead><tbody>", V = this._getDaysInMonth(g, h), g === t.selectedYear && h === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, V)), G = (this._getFirstDayOfMonth(g, h) - D + 7) % 7, K = Math.ceil((G + V) / 7), X = c ? this.maxRows > K ? this.maxRows : K : K, this.maxRows = X, Q = this._daylightSavingAdjust(new Date(g, h, 1 - G)), Z = 0; X > Z; Z++) {
						for (q += "<tr>", J = T ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(Q) + "</td>" : "", W = 0; 7 > W; W++) ee = I ? I.apply(t.input ? t.input[0] : null, [Q]) : [!0, ""], je = Q.getMonth() !== h, qe = je && !A || !ee[0] || u && u > Q || m && Q > m, J += "<td class='" + (5 <= (W + D + 6) % 7 ? " ui-datepicker-week-end" : "") + (je ? " ui-datepicker-other-month" : "") + (Q.getTime() === L.getTime() && h === t.selectedMonth && t._keyEvent || N.getTime() === Q.getTime() && N.getTime() === L.getTime() ? " " + this._dayOverClass : "") + (qe ? " " + this._unselectableClass + " ui-state-disabled" : "") + (je && !E ? "" : " " + ee[1] + (Q.getTime() === p.getTime() ? " " + this._currentClass : "") + (Q.getTime() === e.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!je || E) && ee[2] ? " title='" + ee[2].replace(/'/g, "&#39;") + "'" : "") + (qe ? "" : " data-handler='selectDay' data-event='click' data-month='" + Q.getMonth() + "' data-year='" + Q.getFullYear() + "'") + ">" + (je && !E ? "&#xa0;" : qe ? "<span class='ui-state-default'>" + Q.getDate() + "</span>" : "<a class='ui-state-default" + (Q.getTime() === e.getTime() ? " ui-state-highlight" : "") + (Q.getTime() === p.getTime() ? " ui-state-active" : "") + (je ? " ui-priority-secondary" : "") + "' href='#'>" + Q.getDate() + "</a>") + "</td>", Q.setDate(Q.getDate() + 1), Q = this._daylightSavingAdjust(Q);
						q += J + "</tr>"
					}
					h++, 11 < h && (h = 0, g++), q += "</tbody></table>" + (c ? "</div>" + (0 < r[0] && F === r[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), R += q
				}
				H += R
			}
			return H += k, t._keyEvent = !1, H
		},
		_generateMonthYearHeader: function(l, d, c, e, t, i, n, a) {
			var o = this._get(l, "changeMonth"),
				s = this._get(l, "changeYear"),
				r = this._get(l, "showMonthAfterYear"),
				p = "<div class='ui-datepicker-title'>",
				u = "",
				m, h, g, f, b, _, w, x;
			if (i || !o) u += "<span class='ui-datepicker-month'>" + n[d] + "</span>";
			else {
				for (m = e && e.getFullYear() === c, h = t && t.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", g = 0; 12 > g; g++)(!m || g >= e.getMonth()) && (!h || t.getMonth() >= g) && (u += "<option value='" + g + "'" + (g === d ? " selected='selected'" : "") + ">" + a[g] + "</option>");
				u += "</select>"
			}
			if (r || (p += u + (!i && o && s ? "" : "&#xa0;")), !l.yearshtml)
				if (l.yearshtml = "", i || !s) p += "<span class='ui-datepicker-year'>" + c + "</span>";
				else {
					for (f = this._get(l, "yearRange").split(":"), b = new Date().getFullYear(), _ = function(t) {
						var a = t.match(/c[+\-].*/) ? c + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? b + parseInt(t, 10) : parseInt(t, 10);
						return isNaN(a) ? b : a
					}, w = _(f[0]), x = Math.max(w, _(f[1] || "")), w = e ? Math.max(w, e.getFullYear()) : w, x = t ? Math.min(x, t.getFullYear()) : x, l.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; x >= w; w++) l.yearshtml += "<option value='" + w + "'" + (w === c ? " selected='selected'" : "") + ">" + w + "</option>";
					l.yearshtml += "</select>", p += l.yearshtml, l.yearshtml = null
				} return p += this._get(l, "yearSuffix"), r && (p += (!i && o && s ? "" : "&#xa0;") + u), p += "</div>"
		},
		_adjustInstDate: function(o, r, e) {
			var t = o.drawYear + ("Y" === e ? r : 0),
				i = o.drawMonth + ("M" === e ? r : 0),
				s = Math.min(o.selectedDay, this._getDaysInMonth(t, i)) + ("D" === e ? r : 0),
				n = this._restrictMinMax(o, this._daylightSavingAdjust(new Date(t, i, s)));
			o.selectedDay = n.getDate(), o.drawMonth = o.selectedMonth = n.getMonth(), o.drawYear = o.selectedYear = n.getFullYear(), ("M" === e || "Y" === e) && this._notifyChange(o)
		},
		_restrictMinMax: function(n, a) {
			var e = this._getMinMaxDate(n, "min"),
				t = this._getMinMaxDate(n, "max"),
				i = e && e > a ? e : a;
			return t && i > t ? t : i
		},
		_notifyChange: function(t) {
			var a = this._get(t, "onChangeMonthYear");
			a && a.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
		},
		_getNumberOfMonths: function(t) {
			var a = this._get(t, "numberOfMonths");
			return null == a ? [1, 1] : "number" == typeof a ? [1, a] : a
		},
		_getMinMaxDate: function(t, a) {
			return this._determineDate(t, this._get(t, a + "Date"), null)
		},
		_getDaysInMonth: function(t, a) {
			return 32 - this._daylightSavingAdjust(new Date(t, a, 32)).getDate()
		},
		_getFirstDayOfMonth: function(t, a) {
			return new Date(t, a, 1).getDay()
		},
		_canAdjustMonth: function(a, o, e, t) {
			var i = this._getNumberOfMonths(a),
				s = this._daylightSavingAdjust(new Date(e, t + (0 > o ? o : i[0] * i[1]), 1));
			return 0 > o && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(a, s)
		},
		_isInRange: function(i, o) {
			var e = this._getMinMaxDate(i, "min"),
				t = this._getMinMaxDate(i, "max"),
				n = null,
				s = null,
				r = this._get(i, "yearRange"),
				l, p;
			return r && (l = r.split(":"), p = new Date().getFullYear(), n = parseInt(l[0], 10), s = parseInt(l[1], 10), l[0].match(/[+\-].*/) && (n += p), l[1].match(/[+\-].*/) && (s += p)), (!e || o.getTime() >= e.getTime()) && (!t || o.getTime() <= t.getTime()) && (!n || o.getFullYear() >= n) && (!s || s >= o.getFullYear())
		},
		_getFormatConfig: function(t) {
			var a = this._get(t, "shortYearCutoff");
			return a = "string" == typeof a ? new Date().getFullYear() % 100 + parseInt(a, 10) : a, {
				shortYearCutoff: a,
				dayNamesShort: this._get(t, "dayNamesShort"),
				dayNames: this._get(t, "dayNames"),
				monthNamesShort: this._get(t, "monthNamesShort"),
				monthNames: this._get(t, "monthNames")
			}
		},
		_formatDate: function(n, a, e, t) {
			a || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
			var i = a ? "object" == typeof a ? a : this._daylightSavingAdjust(new Date(t, e, a)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
			return this.formatDate(this._get(n, "dateFormat"), i, this._getFormatConfig(n))
		}
	}), E.fn.datepicker = function(a) {
		if (!this.length) return this;
		E.datepicker.initialized || (E(document).mousedown(E.datepicker._checkExternalClick), E.datepicker.initialized = !0), 0 === E("#" + E.datepicker._mainDivId).length && E("body").append(E.datepicker.dpDiv);
		var e = Array.prototype.slice.call(arguments, 1);
		return "string" != typeof a || "isDisabled" !== a && "getDate" !== a && "widget" !== a ? "option" === a && 2 === arguments.length && "string" == typeof arguments[1] ? E.datepicker["_" + a + "Datepicker"].apply(E.datepicker, [this[0]].concat(e)) : this.each(function() {
			"string" == typeof a ? E.datepicker["_" + a + "Datepicker"].apply(E.datepicker, [this].concat(e)) : E.datepicker._attachDatepicker(this, a)
		}) : E.datepicker["_" + a + "Datepicker"].apply(E.datepicker, [this[0]].concat(e))
	}, E.datepicker = new e, E.datepicker.initialized = !1, E.datepicker.uuid = new Date().getTime(), E.datepicker.version = "1.11.4", E.datepicker, E.widget("ui.draggable", E.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function() {
			"original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
		},
		_setOption: function(t, a) {
			this._super(t, a), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
		},
		_destroy: function() {
			return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
		},
		_mouseCapture: function(a) {
			var e = this.options;
			return this._blurActiveElement(a), !(this.helper || e.disabled || 0 < E(a.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(a), !!this.handle && (this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), !0))
		},
		_blockFrames: function(t) {
			this.iframeBlocks = this.document.find(t).map(function() {
				var t = E(this);
				return E("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
			})
		},
		_unblockFrames: function() {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_blurActiveElement: function(a) {
			var e = this.document[0];
			if (this.handleElement.is(a.target)) try {
				e.activeElement && "body" !== e.activeElement.nodeName.toLowerCase() && E(e.activeElement).blur()
			} catch (t) { }
		},
		_mouseStart: function(a) {
			var e = this.options;
			return this.helper = this._createHelper(a), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), E.ui.ddmanager && (E.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
				return "fixed" === E(this).css("position")
			}).length, this.positionAbs = this.element.offset(), this._refreshOffsets(a), this.originalPosition = this.position = this._generatePosition(a, !1), this.originalPageX = a.pageX, this.originalPageY = a.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), !1 === this._trigger("start", a) ? (this._clear(), !1) : (this._cacheHelperProportions(), E.ui.ddmanager && !e.dropBehaviour && E.ui.ddmanager.prepareOffsets(this, a), this._normalizeRightBottom(), this._mouseDrag(a, !0), E.ui.ddmanager && E.ui.ddmanager.dragStart(this, a), !0)
		},
		_refreshOffsets: function(e) {
			this.offset = {
				top: this.positionAbs.top - this.margins.top,
				left: this.positionAbs.left - this.margins.left,
				scroll: !1,
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}, this.offset.click = {
				left: e.pageX - this.offset.left,
				top: e.pageY - this.offset.top
			}
		},
		_mouseDrag: function(n, e) {
			if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(n, !0), this.positionAbs = this._convertPositionTo("absolute"), !e) {
				var t = this._uiHash();
				if (!1 === this._trigger("drag", n, t)) return this._mouseUp({}), !1;
				this.position = t.position
			}
			return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", E.ui.ddmanager && E.ui.ddmanager.drag(this, n), !1
		},
		_mouseStop: function(n) {
			var e = this,
				t = !1;
			return E.ui.ddmanager && !this.options.dropBehaviour && (t = E.ui.ddmanager.drop(this, n)), this.dropped && (t = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !t || "valid" === this.options.revert && t || !0 === this.options.revert || E.isFunction(this.options.revert) && this.options.revert.call(this.element, t) ? E(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
				!1 !== e._trigger("stop", n) && e._clear()
			}) : !1 !== this._trigger("stop", n) && this._clear(), !1
		},
		_mouseUp: function(t) {
			return this._unblockFrames(), E.ui.ddmanager && E.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), E.ui.mouse.prototype._mouseUp.call(this, t)
		},
		cancel: function() {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
		},
		_getHandle: function(t) {
			return !this.options.handle || !!E(t.target).closest(this.element.find(this.options.handle)).length
		},
		_setHandleClassName: function() {
			this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
		},
		_removeHandleClassName: function() {
			this.handleElement.removeClass("ui-draggable-handle")
		},
		_createHelper: function(n) {
			var e = this.options,
				t = E.isFunction(e.helper),
				a = t ? E(e.helper.apply(this.element[0], [n])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
			return a.parents("body").length || a.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), t && a[0] === this.element[0] && this._setPositionRelative(), a[0] === this.element[0] || /(fixed|absolute)/.test(a.css("position")) || a.css("position", "absolute"), a
		},
		_setPositionRelative: function() {
			/^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
		},
		_adjustOffsetFromHelper: function(t) {
			"string" == typeof t && (t = t.split(" ")), E.isArray(t) && (t = {
				left: +t[0],
				top: +t[1] || 0
			}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
		},
		_isRootNode: function(e) {
			return /(html|body)/i.test(e.tagName) || e === this.document[0]
		},
		_getParentOffset: function() {
			var t = this.offsetParent.offset(),
				n = this.document[0];
			return "absolute" === this.cssPosition && this.scrollParent[0] !== n && E.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
				top: 0,
				left: 0
			}), {
				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" !== this.cssPosition) return {
				top: 0,
				left: 0
			};
			var t = this.element.position(),
				a = this._isRootNode(this.scrollParent[0]);
			return {
				top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (a ? 0 : this.scrollParent.scrollTop()),
				left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (a ? 0 : this.scrollParent.scrollLeft())
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var t = this.options,
				e = this.document[0],
				n, i, s;
			return this.relativeContainer = null, t.containment ? "window" === t.containment ? (this.containment = [E(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, E(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, E(window).scrollLeft() + E(window).width() - this.helperProportions.width - this.margins.left, E(window).scrollTop() + (E(window).height() || e.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === t.containment ? (this.containment = [0, 0, E(e).width() - this.helperProportions.width - this.margins.left, (E(e).height() || e.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : t.containment.constructor === Array ? (this.containment = t.containment, void 0) : ("parent" === t.containment && (t.containment = this.helper[0].parentNode), i = E(t.containment), s = i[0], s && (n = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (n ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (n ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
		},
		_convertPositionTo: function(t, a) {
			a || (a = this.position);
			var o = "absolute" === t ? 1 : -1,
				n = this._isRootNode(this.scrollParent[0]);
			return {
				top: a.top + this.offset.relative.top * o + this.offset.parent.top * o - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * o,
				left: a.left + this.offset.relative.left * o + this.offset.parent.left * o - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * o
			}
		},
		_generatePosition: function(a, n) {
			var e = this.options,
				t = this._isRootNode(this.scrollParent[0]),
				i = a.pageX,
				o = a.pageY,
				s, l, d, h;
			return t && this.offset.scroll || (this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			}), n && (this.containment && (this.relativeContainer ? (l = this.relativeContainer.offset(), s = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]) : s = this.containment, a.pageX - this.offset.click.left < s[0] && (i = s[0] + this.offset.click.left), a.pageY - this.offset.click.top < s[1] && (o = s[1] + this.offset.click.top), a.pageX - this.offset.click.left > s[2] && (i = s[2] + this.offset.click.left), a.pageY - this.offset.click.top > s[3] && (o = s[3] + this.offset.click.top)), e.grid && (d = e.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / e.grid[1]) * e.grid[1] : this.originalPageY, o = s ? d - this.offset.click.top >= s[1] || d - this.offset.click.top > s[3] ? d : d - this.offset.click.top >= s[1] ? d - e.grid[1] : d + e.grid[1] : d, h = e.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / e.grid[0]) * e.grid[0] : this.originalPageX, i = s ? h - this.offset.click.left >= s[0] || h - this.offset.click.left > s[2] ? h : h - this.offset.click.left >= s[0] ? h - e.grid[0] : h + e.grid[0] : h), "y" === e.axis && (i = this.originalPageX), "x" === e.axis && (o = this.originalPageY)), {
				top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : t ? 0 : this.offset.scroll.top),
				left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : t ? 0 : this.offset.scroll.left)
			}
		},
		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
		},
		_normalizeRightBottom: function() {
			"y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
		},
		_trigger: function(n, e, t) {
			return t = t || this._uiHash(), E.ui.plugin.call(this, n, [e, t, this], !0), /^(drag|start|stop)/.test(n) && (this.positionAbs = this._convertPositionTo("absolute"), t.offset = this.positionAbs), E.Widget.prototype._trigger.call(this, n, e, t)
		},
		plugins: {},
		_uiHash: function() {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), E.ui.plugin.add("draggable", "connectToSortable", {
		start: function(n, e, i) {
			var a = E.extend({}, e, {
				item: i.element
			});
			i.sortables = [], E(i.options.connectToSortable).each(function() {
				var e = E(this).sortable("instance");
				e && !e.options.disabled && (i.sortables.push(e), e.refreshPositions(), e._trigger("activate", n, a))
			})
		},
		stop: function(o, a, e) {
			var t = E.extend({}, a, {
				item: e.element
			});
			e.cancelHelperRemoval = !1, E.each(e.sortables, function() {
				var a = this;
				a.isOver ? (a.isOver = 0, e.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = {
					position: a.placeholder.css("position"),
					top: a.placeholder.css("top"),
					left: a.placeholder.css("left")
				}, a._mouseStop(o), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, a._trigger("deactivate", o, t))
			})
		},
		drag: function(a, e, t) {
			E.each(t.sortables, function() {
				var n = !1,
					i = this;
				i.positionAbs = t.positionAbs, i.helperProportions = t.helperProportions, i.offset.click = t.offset.click, i._intersectsWith(i.containerCache) && (n = !0, E.each(t.sortables, function() {
					return this.positionAbs = t.positionAbs, this.helperProportions = t.helperProportions, this.offset.click = t.offset.click, this !== i && this._intersectsWith(this.containerCache) && E.contains(i.element[0], this.element[0]) && (n = !1), n
				})), n ? (i.isOver || (i.isOver = 1, t._parent = e.helper.parent(), i.currentItem = e.helper.appendTo(i.element).data("ui-sortable-item", !0), i.options._helper = i.options.helper, i.options.helper = function() {
					return e.helper[0]
				}, a.target = i.currentItem[0], i._mouseCapture(a, !0), i._mouseStart(a, !0, !0), i.offset.click.top = t.offset.click.top, i.offset.click.left = t.offset.click.left, i.offset.parent.left -= t.offset.parent.left - i.offset.parent.left, i.offset.parent.top -= t.offset.parent.top - i.offset.parent.top, t._trigger("toSortable", a), t.dropped = i.element, E.each(t.sortables, function() {
					this.refreshPositions()
				}), t.currentItem = t.element, i.fromOutside = t), i.currentItem && (i._mouseDrag(a), e.position = i.position)) : i.isOver && (i.isOver = 0, i.cancelHelperRemoval = !0, i.options._revert = i.options.revert, i.options.revert = !1, i._trigger("out", a, i._uiHash(i)), i._mouseStop(a, !0), i.options.revert = i.options._revert, i.options.helper = i.options._helper, i.placeholder && i.placeholder.remove(), e.helper.appendTo(t._parent), t._refreshOffsets(a), e.position = t._generatePosition(a, !0), t._trigger("fromSortable", a), t.dropped = !1, E.each(t.sortables, function() {
					this.refreshPositions()
				}))
			})
		}
	}), E.ui.plugin.add("draggable", "cursor", {
		start: function(a, e, t) {
			var i = E("body"),
				o = t.options;
			i.css("cursor") && (o._cursor = i.css("cursor")), i.css("cursor", o.cursor)
		},
		stop: function(n, e, t) {
			var a = t.options;
			a._cursor && E("body").css("cursor", a._cursor)
		}
	}), E.ui.plugin.add("draggable", "opacity", {
		start: function(a, e, t) {
			var i = E(e.helper),
				o = t.options;
			i.css("opacity") && (o._opacity = i.css("opacity")), i.css("opacity", o.opacity)
		},
		stop: function(n, e, t) {
			var a = t.options;
			a._opacity && E(e.helper).css("opacity", a._opacity)
		}
	}), E.ui.plugin.add("draggable", "scroll", {
		start: function(n, a, e) {
			e.scrollParentNotHidden || (e.scrollParentNotHidden = e.helper.scrollParent(!1)), e.scrollParentNotHidden[0] !== e.document[0] && "HTML" !== e.scrollParentNotHidden[0].tagName && (e.overflowOffset = e.scrollParentNotHidden.offset())
		},
		drag: function(a, e, t) {
			var i = t.options,
				s = !1,
				r = t.scrollParentNotHidden[0],
				l = t.document[0];
			r !== l && "HTML" !== r.tagName ? (i.axis && "x" === i.axis || (t.overflowOffset.top + r.offsetHeight - a.pageY < i.scrollSensitivity ? r.scrollTop = s = r.scrollTop + i.scrollSpeed : a.pageY - t.overflowOffset.top < i.scrollSensitivity && (r.scrollTop = s = r.scrollTop - i.scrollSpeed)), i.axis && "y" === i.axis || (t.overflowOffset.left + r.offsetWidth - a.pageX < i.scrollSensitivity ? r.scrollLeft = s = r.scrollLeft + i.scrollSpeed : a.pageX - t.overflowOffset.left < i.scrollSensitivity && (r.scrollLeft = s = r.scrollLeft - i.scrollSpeed))) : (i.axis && "x" === i.axis || (a.pageY - E(l).scrollTop() < i.scrollSensitivity ? s = E(l).scrollTop(E(l).scrollTop() - i.scrollSpeed) : E(window).height() - (a.pageY - E(l).scrollTop()) < i.scrollSensitivity && (s = E(l).scrollTop(E(l).scrollTop() + i.scrollSpeed))), i.axis && "y" === i.axis || (a.pageX - E(l).scrollLeft() < i.scrollSensitivity ? s = E(l).scrollLeft(E(l).scrollLeft() - i.scrollSpeed) : E(window).width() - (a.pageX - E(l).scrollLeft()) < i.scrollSensitivity && (s = E(l).scrollLeft(E(l).scrollLeft() + i.scrollSpeed)))), !1 !== s && E.ui.ddmanager && !i.dropBehaviour && E.ui.ddmanager.prepareOffsets(t, a)
		}
	}), E.ui.plugin.add("draggable", "snap", {
		start: function(n, e, o) {
			var t = o.options;
			o.snapElements = [], E(t.snap.constructor === String ? t.snap : t.snap.items || ":data(ui-draggable)").each(function() {
				var a = E(this),
					e = a.offset();
				this !== o.element[0] && o.snapElements.push({
					item: this,
					width: a.outerWidth(),
					height: a.outerHeight(),
					top: e.top,
					left: e.left
				})
			})
		},
		drag: function(a, e, t) {
			var n = t.options,
				i = n.snapTolerance,
				o = e.offset.left,
				s = o + t.helperProportions.width,
				r = e.offset.top,
				l = r + t.helperProportions.height,
				d, c, p, u, m, h, g, f, v, y;
			for (v = t.snapElements.length - 1; 0 <= v; v--) m = t.snapElements[v].left - t.margins.left, h = m + t.snapElements[v].width, g = t.snapElements[v].top - t.margins.top, f = g + t.snapElements[v].height, m - i > s || o > h + i || g - i > l || r > f + i || !E.contains(t.snapElements[v].item.ownerDocument, t.snapElements[v].item) ? (t.snapElements[v].snapping && t.options.snap.release && t.options.snap.release.call(t.element, a, E.extend(t._uiHash(), {
				snapItem: t.snapElements[v].item
			})), t.snapElements[v].snapping = !1) : ("inner" !== n.snapMode && (d = i >= Math.abs(g - l), c = i >= Math.abs(f - r), p = i >= Math.abs(m - s), u = i >= Math.abs(h - o), d && (e.position.top = t._convertPositionTo("relative", {
				top: g - t.helperProportions.height,
				left: 0
			}).top), c && (e.position.top = t._convertPositionTo("relative", {
				top: f,
				left: 0
			}).top), p && (e.position.left = t._convertPositionTo("relative", {
				top: 0,
				left: m - t.helperProportions.width
			}).left), u && (e.position.left = t._convertPositionTo("relative", {
				top: 0,
				left: h
			}).left)), y = d || c || p || u, "outer" !== n.snapMode && (d = i >= Math.abs(g - r), c = i >= Math.abs(f - l), p = i >= Math.abs(m - o), u = i >= Math.abs(h - s), d && (e.position.top = t._convertPositionTo("relative", {
				top: g,
				left: 0
			}).top), c && (e.position.top = t._convertPositionTo("relative", {
				top: f - t.helperProportions.height,
				left: 0
			}).top), p && (e.position.left = t._convertPositionTo("relative", {
				top: 0,
				left: m
			}).left), u && (e.position.left = t._convertPositionTo("relative", {
				top: 0,
				left: h - t.helperProportions.width
			}).left)), !t.snapElements[v].snapping && (d || c || p || u || y) && t.options.snap.snap && t.options.snap.snap.call(t.element, a, E.extend(t._uiHash(), {
				snapItem: t.snapElements[v].item
			})), t.snapElements[v].snapping = d || c || p || u || y)
		}
	}), E.ui.plugin.add("draggable", "stack", {
		start: function(n, e, t) {
			var i = t.options,
				s = E.makeArray(E(i.stack)).sort(function(a, e) {
					return (parseInt(E(a).css("zIndex"), 10) || 0) - (parseInt(E(e).css("zIndex"), 10) || 0)
				}),
				a;
			s.length && (a = parseInt(E(s[0]).css("zIndex"), 10) || 0, E(s).each(function(t) {
				E(this).css("zIndex", a + t)
			}), this.css("zIndex", a + s.length))
		}
	}), E.ui.plugin.add("draggable", "zIndex", {
		start: function(a, e, t) {
			var i = E(e.helper),
				o = t.options;
			i.css("zIndex") && (o._zIndex = i.css("zIndex")), i.css("zIndex", o.zIndex)
		},
		stop: function(n, e, t) {
			var a = t.options;
			a._zIndex && E(e.helper).css("zIndex", a._zIndex)
		}
	}), E.ui.draggable, E.widget("ui.resizable", E.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_num: function(e) {
			return parseInt(e, 10) || 0
		},
		_isNumber: function(e) {
			return !isNaN(parseInt(e, 10))
		},
		_hasScroll: function(n, e) {
			if ("hidden" === E(n).css("overflow")) return !1;
			var t = e && "left" === e ? "scrollLeft" : "scrollTop",
				a = !1;
			return !!(0 < n[t]) || (n[t] = 1, a = 0 < n[t], n[t] = 0, a)
		},
		_create: function() {
			var t = this,
				e = this.options,
				a, n, i, o, s;
			if (this.element.addClass("ui-resizable"), E.extend(this, {
				_aspectRatio: !!e.aspectRatio,
				aspectRatio: e.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
			}), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(E("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
				position: this.element.css("position"),
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				top: this.element.css("top"),
				left: this.element.css("left")
			})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
				marginLeft: this.originalElement.css("marginLeft"),
				marginTop: this.originalElement.css("marginTop"),
				marginRight: this.originalElement.css("marginRight"),
				marginBottom: this.originalElement.css("marginBottom")
			}), this.originalElement.css({
				marginLeft: 0,
				marginTop: 0,
				marginRight: 0,
				marginBottom: 0
			}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
				position: "static",
				zoom: 1,
				display: "block"
			})), this.originalElement.css({
				margin: this.originalElement.css("margin")
			}), this._proportionallyResize()), this.handles = e.handles || (E(".ui-resizable-handle", this.element).length ? {
				n: ".ui-resizable-n",
				e: ".ui-resizable-e",
				s: ".ui-resizable-s",
				w: ".ui-resizable-w",
				se: ".ui-resizable-se",
				sw: ".ui-resizable-sw",
				ne: ".ui-resizable-ne",
				nw: ".ui-resizable-nw"
			} : "e,s,se"), this._handles = E(), this.handles.constructor === String)
				for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), a = this.handles.split(","), this.handles = {}, n = 0; a.length > n; n++) i = E.trim(a[n]), s = "ui-resizable-" + i, o = E("<div class='ui-resizable-handle " + s + "'></div>"), o.css({
					zIndex: e.zIndex
				}), "se" === i && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[i] = ".ui-resizable-" + i, this.element.append(o);
			this._renderAxis = function(e) {
				var a, n, i, s;
				for (a in e = e || this.element, this.handles) this.handles[a].constructor === String ? this.handles[a] = this.element.children(this.handles[a]).first().show() : (this.handles[a].jquery || this.handles[a].nodeType) && (this.handles[a] = E(this.handles[a]), this._on(this.handles[a], {
					mousedown: t._mouseDown
				})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = E(this.handles[a], this.element), s = /sw|ne|nw|se|n|s/.test(a) ? n.outerHeight() : n.outerWidth(), i = ["padding", /ne|nw|n/.test(a) ? "Top" : /se|sw|s/.test(a) ? "Bottom" : /^e$/.test(a) ? "Right" : "Left"].join(""), e.css(i, s), this._proportionallyResize()), this._handles = this._handles.add(this.handles[a])
			}, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() {
				t.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), t.axis = o && o[1] ? o[1] : "se")
			}), e.autoHide && (this._handles.hide(), E(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
				e.disabled || (E(this).removeClass("ui-resizable-autohide"), t._handles.show())
			}).mouseleave(function() {
				e.disabled || t.resizing || (E(this).addClass("ui-resizable-autohide"), t._handles.hide())
			})), this._mouseInit()
		},
		_destroy: function() {
			this._mouseDestroy();
			var t = function(t) {
				E(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
			},
				e;
			return this.elementIsWrapper && (t(this.element), e = this.element, this.originalElement.css({
				position: e.css("position"),
				width: e.outerWidth(),
				height: e.outerHeight(),
				top: e.css("top"),
				left: e.css("left")
			}).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
		},
		_mouseCapture: function(n) {
			var e = !1,
				i, s;
			for (i in this.handles) s = E(this.handles[i])[0], (s === n.target || E.contains(s, n.target)) && (e = !0);
			return !this.options.disabled && e
		},
		_mouseStart: function(n) {
			var e = this.options,
				t = this.element,
				a, i, s;
			return this.resizing = !0, this._renderProxy(), a = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), e.containment && (a += E(e.containment).scrollLeft() || 0, i += E(e.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: a,
				top: i
			}, this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
					width: t.width(),
					height: t.height()
				}, this.originalSize = this._helper ? {
					width: t.outerWidth(),
					height: t.outerHeight()
				} : {
						width: t.width(),
						height: t.height()
					}, this.sizeDiff = {
						width: t.outerWidth() - t.width(),
						height: t.outerHeight() - t.height()
					}, this.originalPosition = {
						left: a,
						top: i
					}, this.originalMousePosition = {
						left: n.pageX,
						top: n.pageY
					}, this.aspectRatio = "number" == typeof e.aspectRatio ? e.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = E(".ui-resizable-" + this.axis).css("cursor"), E("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), t.addClass("ui-resizable-resizing"), this._propagate("start", n), !0
		},
		_mouseDrag: function(i) {
			var e = this.originalMousePosition,
				t = this.axis,
				n = i.pageX - e.left || 0,
				a = i.pageY - e.top || 0,
				o = this._change[t],
				s, r;
			return this._updatePrevProperties(), !!o && (s = o.apply(this, [i, n, a]), this._updateVirtualBoundaries(i.shiftKey), (this._aspectRatio || i.shiftKey) && (s = this._updateRatio(s, i)), s = this._respectSize(s, i), this._updateCache(s), this._propagate("resize", i), r = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), E.isEmptyObject(r) || (this._updatePrevProperties(), this._trigger("resize", i, this.ui()), this._applyChanges()), !1)
		},
		_mouseStop: function(a) {
			this.resizing = !1;
			var e = this.options,
				t = this,
				n, i, o, s, r, l, h;
			return this._helper && (n = this._proportionallyResizeElements, i = n.length && /textarea/i.test(n[0].nodeName), o = i && this._hasScroll(n[0], "left") ? 0 : t.sizeDiff.height, s = i ? 0 : t.sizeDiff.width, r = {
				width: t.helper.width() - s,
				height: t.helper.height() - o
			}, l = parseInt(t.element.css("left"), 10) + (t.position.left - t.originalPosition.left) || null, h = parseInt(t.element.css("top"), 10) + (t.position.top - t.originalPosition.top) || null, e.animate || this.element.css(E.extend(r, {
				top: h,
				left: l
			})), t.helper.height(t.size.height), t.helper.width(t.size.width), this._helper && !e.animate && this._proportionallyResize()), E("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", a), this._helper && this.helper.remove(), !1
		},
		_updatePrevProperties: function() {
			this.prevPosition = {
				top: this.position.top,
				left: this.position.left
			}, this.prevSize = {
				width: this.size.width,
				height: this.size.height
			}
		},
		_applyChanges: function() {
			var e = {};
			return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
		},
		_updateVirtualBoundaries: function(t) {
			var a = this.options,
				e, n, i, s, r;
			r = {
				minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
				maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
				minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
				maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
			}, (this._aspectRatio || t) && (e = r.minHeight * this.aspectRatio, i = r.minWidth / this.aspectRatio, n = r.maxHeight * this.aspectRatio, s = r.maxWidth / this.aspectRatio, e > r.minWidth && (r.minWidth = e), i > r.minHeight && (r.minHeight = i), r.maxWidth > n && (r.maxWidth = n), r.maxHeight > s && (r.maxHeight = s)), this._vBoundaries = r
		},
		_updateCache: function(e) {
			this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
		},
		_updateRatio: function(n) {
			var a = this.position,
				e = this.size,
				t = this.axis;
			return this._isNumber(n.height) ? n.width = n.height * this.aspectRatio : this._isNumber(n.width) && (n.height = n.width / this.aspectRatio), "sw" === t && (n.left = a.left + (e.width - n.width), n.top = null), "nw" === t && (n.top = a.top + (e.height - n.height), n.left = a.left + (e.width - n.width)), n
		},
		_respectSize: function(c) {
			var d = this._vBoundaries,
				e = this.axis,
				t = this._isNumber(c.width) && d.maxWidth && d.maxWidth < c.width,
				i = this._isNumber(c.height) && d.maxHeight && d.maxHeight < c.height,
				s = this._isNumber(c.width) && d.minWidth && d.minWidth > c.width,
				n = this._isNumber(c.height) && d.minHeight && d.minHeight > c.height,
				a = this.originalPosition.left + this.originalSize.width,
				o = this.position.top + this.size.height,
				r = /sw|nw|w/.test(e),
				p = /nw|ne|n/.test(e);
			return s && (c.width = d.minWidth), n && (c.height = d.minHeight), t && (c.width = d.maxWidth), i && (c.height = d.maxHeight), s && r && (c.left = a - d.minWidth), t && r && (c.left = a - d.maxWidth), n && p && (c.top = o - d.minHeight), i && p && (c.top = o - d.maxHeight), c.width || c.height || c.left || !c.top ? c.width || c.height || c.top || !c.left || (c.left = null) : c.top = null, c
		},
		_getPaddingPlusBorderDimensions: function(t) {
			for (var a = 0, n = [], o = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], i = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > a; a++) n[a] = parseInt(o[a], 10) || 0, n[a] += parseInt(i[a], 10) || 0;
			return {
				height: n[0] + n[2],
				width: n[1] + n[3]
			}
		},
		_proportionallyResize: function() {
			if (this._proportionallyResizeElements.length)
				for (var e = 0, t = this.helper || this.element, n; this._proportionallyResizeElements.length > e; e++) n = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(n)), n.css({
					height: t.height() - this.outerDimensions.height || 0,
					width: t.width() - this.outerDimensions.width || 0
				})
		},
		_renderProxy: function() {
			var a = this.element,
				e = this.options;
			this.elementOffset = a.offset(), this._helper ? (this.helper = this.helper || E("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() - 1,
				height: this.element.outerHeight() - 1,
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++e.zIndex
			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change: {
			e: function(t, a) {
				return {
					width: this.originalSize.width + a
				}
			},
			w: function(n, a) {
				var e = this.originalSize,
					t = this.originalPosition;
				return {
					left: t.left + a,
					width: e.width - a
				}
			},
			n: function(n, a, e) {
				var t = this.originalSize,
					i = this.originalPosition;
				return {
					top: i.top + e,
					height: t.height - e
				}
			},
			s: function(n, a, e) {
				return {
					height: this.originalSize.height + e
				}
			},
			se: function(n, e, t) {
				return E.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [n, e, t]))
			},
			sw: function(n, e, t) {
				return E.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [n, e, t]))
			},
			ne: function(n, e, t) {
				return E.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [n, e, t]))
			},
			nw: function(n, e, t) {
				return E.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [n, e, t]))
			}
		},
		_propagate: function(a, e) {
			E.ui.plugin.call(this, a, [e, this.ui()]), "resize" !== a && this._trigger(a, e, this.ui())
		},
		plugins: {},
		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}), E.ui.plugin.add("resizable", "animate", {
		stop: function(c) {
			var e = E(this).resizable("instance"),
				t = e.options,
				i = e._proportionallyResizeElements,
				d = i.length && /textarea/i.test(i[0].nodeName),
				n = d && e._hasScroll(i[0], "left") ? 0 : e.sizeDiff.height,
				a = d ? 0 : e.sizeDiff.width,
				o = {
					width: e.size.width - a,
					height: e.size.height - n
				},
				s = parseInt(e.element.css("left"), 10) + (e.position.left - e.originalPosition.left) || null,
				r = parseInt(e.element.css("top"), 10) + (e.position.top - e.originalPosition.top) || null;
			e.element.animate(E.extend(o, r && s ? {
				top: r,
				left: s
			} : {}), {
				duration: t.animateDuration,
				easing: t.animateEasing,
				step: function() {
					var t = {
						width: parseInt(e.element.css("width"), 10),
						height: parseInt(e.element.css("height"), 10),
						top: parseInt(e.element.css("top"), 10),
						left: parseInt(e.element.css("left"), 10)
					};
					i && i.length && E(i[0]).css({
						width: t.width,
						height: t.height
					}), e._updateCache(t), e._propagate("resize", c)
				}
			})
		}
	}), E.ui.plugin.add("resizable", "containment", {
		start: function() {
			var a = E(this).resizable("instance"),
				t = a.options,
				e = a.element,
				n = t.containment,
				i = n instanceof E ? n.get(0) : /parent/.test(n) ? e.parent().get(0) : n,
				o, s, r, l, d, p, u;
			i && (a.containerElement = E(i), /document/.test(n) || n === document ? (a.containerOffset = {
				left: 0,
				top: 0
			}, a.containerPosition = {
				left: 0,
				top: 0
			}, a.parentData = {
				element: E(document),
				left: 0,
				top: 0,
				width: E(document).width(),
				height: E(document).height() || document.body.parentNode.scrollHeight
			}) : (o = E(i), s = [], E(["Top", "Right", "Left", "Bottom"]).each(function(n, t) {
				s[n] = a._num(o.css("padding" + t))
			}), a.containerOffset = o.offset(), a.containerPosition = o.position(), a.containerSize = {
				height: o.innerHeight() - s[3],
				width: o.innerWidth() - s[1]
			}, r = a.containerOffset, l = a.containerSize.height, d = a.containerSize.width, p = a._hasScroll(i, "left") ? i.scrollWidth : d, u = a._hasScroll(i) ? i.scrollHeight : l, a.parentData = {
				element: i,
				left: r.left,
				top: r.top,
				width: p,
				height: u
			}))
		},
		resize: function(a) {
			var e = E(this).resizable("instance"),
				t = e.options,
				n = e.containerOffset,
				i = e.position,
				o = e._aspectRatio || a.shiftKey,
				s = {
					top: 0,
					left: 0
				},
				r = e.containerElement,
				l = !0,
				d, p, m, h;
			r[0] !== document && /static/.test(r.css("position")) && (s = n), i.left < (e._helper ? n.left : 0) && (e.size.width += e._helper ? e.position.left - n.left : e.position.left - s.left, o && (e.size.height = e.size.width / e.aspectRatio, l = !1), e.position.left = t.helper ? n.left : 0), i.top < (e._helper ? n.top : 0) && (e.size.height += e._helper ? e.position.top - n.top : e.position.top, o && (e.size.width = e.size.height * e.aspectRatio, l = !1), e.position.top = e._helper ? n.top : 0), m = e.containerElement.get(0) === e.element.parent().get(0), h = /relative|absolute/.test(e.containerElement.css("position")), m && h ? (e.offset.left = e.parentData.left + e.position.left, e.offset.top = e.parentData.top + e.position.top) : (e.offset.left = e.element.offset().left, e.offset.top = e.element.offset().top), d = Math.abs(e.sizeDiff.width + (e._helper ? e.offset.left - s.left : e.offset.left - n.left)), p = Math.abs(e.sizeDiff.height + (e._helper ? e.offset.top - s.top : e.offset.top - n.top)), d + e.size.width >= e.parentData.width && (e.size.width = e.parentData.width - d, o && (e.size.height = e.size.width / e.aspectRatio, l = !1)), p + e.size.height >= e.parentData.height && (e.size.height = e.parentData.height - p, o && (e.size.width = e.size.height * e.aspectRatio, l = !1)), l || (e.position.left = e.prevPosition.left, e.position.top = e.prevPosition.top, e.size.width = e.prevSize.width, e.size.height = e.prevSize.height)
		},
		stop: function() {
			var l = E(this).resizable("instance"),
				e = l.options,
				t = l.containerOffset,
				i = l.containerPosition,
				s = l.containerElement,
				n = E(l.helper),
				a = n.offset(),
				o = n.outerWidth() - l.sizeDiff.width,
				r = n.outerHeight() - l.sizeDiff.height;
			l._helper && !e.animate && /relative/.test(s.css("position")) && E(this).css({
				left: a.left - i.left - t.left,
				width: o,
				height: r
			}), l._helper && !e.animate && /static/.test(s.css("position")) && E(this).css({
				left: a.left - i.left - t.left,
				width: o,
				height: r
			})
		}
	}), E.ui.plugin.add("resizable", "alsoResize", {
		start: function() {
			var a = E(this).resizable("instance"),
				e = a.options;
			E(e.alsoResize).each(function() {
				var t = E(this);
				t.data("ui-resizable-alsoresize", {
					width: parseInt(t.width(), 10),
					height: parseInt(t.height(), 10),
					left: parseInt(t.css("left"), 10),
					top: parseInt(t.css("top"), 10)
				})
			})
		},
		resize: function(s, d) {
			var e = E(this).resizable("instance"),
				t = e.options,
				i = e.originalSize,
				n = e.originalPosition,
				l = {
					height: e.size.height - i.height || 0,
					width: e.size.width - i.width || 0,
					top: e.position.top - n.top || 0,
					left: e.position.left - n.left || 0
				};
			E(t.alsoResize).each(function() {
				var a = E(this),
					n = E(this).data("ui-resizable-alsoresize"),
					i = {},
					e = a.parents(d.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
				E.each(e, function(o, a) {
					var e = (n[a] || 0) + (l[a] || 0);
					e && 0 <= e && (i[a] = e || null)
				}), a.css(i)
			})
		},
		stop: function() {
			E(this).removeData("resizable-alsoresize")
		}
	}), E.ui.plugin.add("resizable", "ghost", {
		start: function() {
			var n = E(this).resizable("instance"),
				e = n.options,
				t = n.size;
			n.ghost = n.originalElement.clone(), n.ghost.css({
				opacity: .25,
				display: "block",
				position: "relative",
				height: t.height,
				width: t.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass("string" == typeof e.ghost ? e.ghost : ""), n.ghost.appendTo(n.helper)
		},
		resize: function() {
			var t = E(this).resizable("instance");
			t.ghost && t.ghost.css({
				position: "relative",
				height: t.size.height,
				width: t.size.width
			})
		},
		stop: function() {
			var t = E(this).resizable("instance");
			t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
		}
	}), E.ui.plugin.add("resizable", "grid", {
		resize: function() {
			var t = E(this).resizable("instance"),
				e = t.options,
				i = t.size,
				s = t.originalSize,
				n = t.originalPosition,
				a = t.axis,
				o = "number" == typeof e.grid ? [e.grid, e.grid] : e.grid,
				r = o[0] || 1,
				p = o[1] || 1,
				l = Math.round((i.width - s.width) / r) * r,
				u = Math.round((i.height - s.height) / p) * p,
				d = s.width + l,
				h = s.height + u,
				f = e.maxWidth && d > e.maxWidth,
				_ = e.maxHeight && h > e.maxHeight,
				m = e.minWidth && e.minWidth > d,
				g = e.minHeight && e.minHeight > h,
				v;
			e.grid = o, m && (d += r), g && (h += p), f && (d -= r), _ && (h -= p), /^(se|s|e)$/.test(a) ? (t.size.width = d, t.size.height = h) : /^(ne)$/.test(a) ? (t.size.width = d, t.size.height = h, t.position.top = n.top - u) : /^(sw)$/.test(a) ? (t.size.width = d, t.size.height = h, t.position.left = n.left - l) : ((0 >= h - p || 0 >= d - r) && (v = t._getPaddingPlusBorderDimensions(this)), 0 < h - p ? (t.size.height = h, t.position.top = n.top - u) : (h = p - v.height, t.size.height = h, t.position.top = n.top + s.height - h), 0 < d - r ? (t.size.width = d, t.position.left = n.left - l) : (d = r - v.width, t.size.width = d, t.position.left = n.left + s.width - d))
		}
	}), E.ui.resizable, E.widget("ui.dialog", {
		version: "1.11.4",
		options: {
			appendTo: "body",
			autoOpen: !0,
			buttons: [],
			closeOnEscape: !0,
			closeText: "Close",
			dialogClass: "",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function(a) {
					var e = E(this).css(a).offset().top;
					0 > e && E(this).css("top", a.top - e)
				}
			},
			resizable: !0,
			show: null,
			title: null,
			width: 300,
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},
		sizeRelatedOptions: {
			buttons: !0,
			height: !0,
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0,
			width: !0
		},
		resizableRelatedOptions: {
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		},
		_create: function() {
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			}, this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			}, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && E.fn.draggable && this._makeDraggable(), this.options.resizable && E.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
		},
		_init: function() {
			this.options.autoOpen && this.open()
		},
		_appendTo: function() {
			var t = this.options.appendTo;
			return t && (t.jquery || t.nodeType) ? E(t) : this.document.find(t || "body").eq(0)
		},
		_destroy: function() {
			var e = this.originalPosition,
				a;
			this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), a = e.parent.children().eq(e.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : e.parent.append(this.element)
		},
		widget: function() {
			return this.uiDialog
		},
		disable: E.noop,
		enable: E.noop,
		close: function(n) {
			var e = this,
				t;
			if (this._isOpen && !1 !== this._trigger("beforeClose", n)) {
				if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
					t = this.document[0].activeElement, t && "body" !== t.nodeName.toLowerCase() && E(t).blur()
				} catch (t) { }
				this._hide(this.uiDialog, this.options.hide, function() {
					e._trigger("close", n)
				})
			}
		},
		isOpen: function() {
			return this._isOpen
		},
		moveToTop: function() {
			this._moveToTop()
		},
		_moveToTop: function(a, e) {
			var t = !1,
				s = this.uiDialog.siblings(".ui-front:visible").map(function() {
					return +E(this).css("z-index")
				}).get(),
				o = Math.max.apply(null, s);
			return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), t = !0), t && !e && this._trigger("focus", a), t
		},
		open: function() {
			var t = this;
			return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = E(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
				t._focusTabbable(), t._trigger("focus")
			}), this._makeFocusTarget(), this._trigger("open"), void 0)
		},
		_focusTabbable: function() {
			var e = this._focusedElement;
			e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
		},
		_keepFocus: function(a) {
			function e() {
				var a = this.document[0].activeElement,
					e = this.uiDialog[0] === a || E.contains(this.uiDialog[0], a);
				e || this._focusTabbable()
			}
			a.preventDefault(), e.call(this), this._delay(e)
		},
		_createWrapper: function() {
			this.uiDialog = E("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
				tabIndex: -1,
				role: "dialog"
			}).appendTo(this._appendTo()), this._on(this.uiDialog, {
				keydown: function(n) {
					if (this.options.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === E.ui.keyCode.ESCAPE) return n.preventDefault(), this.close(n), void 0;
					if (n.keyCode === E.ui.keyCode.TAB && !n.isDefaultPrevented()) {
						var e = this.uiDialog.find(":tabbable"),
							t = e.filter(":first"),
							a = e.filter(":last");
						n.target !== a[0] && n.target !== this.uiDialog[0] || n.shiftKey ? n.target !== t[0] && n.target !== this.uiDialog[0] || !n.shiftKey || (this._delay(function() {
							a.focus()
						}), n.preventDefault()) : (this._delay(function() {
							t.focus()
						}), n.preventDefault())
					}
				},
				mousedown: function(e) {
					this._moveToTop(e) && this._focusTabbable()
				}
			}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
				"aria-describedby": this.element.uniqueId().attr("id")
			})
		},
		_createTitlebar: function() {
			var t;
			this.uiDialogTitlebar = E("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
				mousedown: function(t) {
					E(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
				}
			}), this.uiDialogTitlebarClose = E("<button type='button'></button>").button({
				label: this.options.closeText,
				icons: {
					primary: "ui-icon-closethick"
				},
				text: !1
			}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
				click: function(e) {
					e.preventDefault(), this.close(e)
				}
			}), t = E("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
				"aria-labelledby": t.attr("id")
			})
		},
		_title: function(e) {
			this.options.title || e.html("&#160;"), e.text(this.options.title)
		},
		_createButtonPane: function() {
			this.uiDialogButtonPane = E("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = E("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
		},
		_createButtons: function() {
			var a = this,
				e = this.options.buttons;
			return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), E.isEmptyObject(e) || E.isArray(e) && !e.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (E.each(e, function(e, t) {
				var n, s;
				t = E.isFunction(t) ? {
					click: t,
					text: e
				} : t, t = E.extend({
					type: "button"
				}, t), n = t.click, t.click = function() {
					n.apply(a.element[0], arguments)
				}, s = {
					icons: t.icons,
					text: t.showText
				}, delete t.icons, delete t.showText, E("<button></button>", t).button(s).appendTo(a.uiButtonSet)
			}), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
		},
		_makeDraggable: function() {
			function s(e) {
				return {
					position: e.position,
					offset: e.offset
				}
			}
			var r = this,
				t = this.options;
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function(t, e) {
					E(this).addClass("ui-dialog-dragging"), r._blockFrames(), r._trigger("dragStart", t, s(e))
				},
				drag: function(t, a) {
					r._trigger("drag", t, s(a))
				},
				stop: function(e, i) {
					var n = i.offset.left - r.document.scrollLeft(),
						a = i.offset.top - r.document.scrollTop();
					t.position = {
						my: "left top",
						at: "left" + (0 <= n ? "+" : "") + n + " top" + (0 <= a ? "+" : "") + a,
						of: r.window
					}, E(this).removeClass("ui-dialog-dragging"), r._unblockFrames(), r._trigger("dragStop", e, s(i))
				}
			})
		},
		_makeResizable: function() {
			function r(e) {
				return {
					originalPosition: e.originalPosition,
					originalSize: e.originalSize,
					position: e.position,
					size: e.size
				}
			}
			var l = this,
				t = this.options,
				e = t.resizable,
				i = this.uiDialog.css("position"),
				n = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: t.maxWidth,
				maxHeight: t.maxHeight,
				minWidth: t.minWidth,
				minHeight: this._minHeight(),
				handles: n,
				start: function(t, e) {
					E(this).addClass("ui-dialog-resizing"), l._blockFrames(), l._trigger("resizeStart", t, r(e))
				},
				resize: function(t, a) {
					l._trigger("resize", t, r(a))
				},
				stop: function(e, i) {
					var n = l.uiDialog.offset(),
						a = n.left - l.document.scrollLeft(),
						o = n.top - l.document.scrollTop();
					t.height = l.uiDialog.height(), t.width = l.uiDialog.width(), t.position = {
						my: "left top",
						at: "left" + (0 <= a ? "+" : "") + a + " top" + (0 <= o ? "+" : "") + o,
						of: l.window
					}, E(this).removeClass("ui-dialog-resizing"), l._unblockFrames(), l._trigger("resizeStop", e, r(i))
				}
			}).css("position", i)
		},
		_trackFocus: function() {
			this._on(this.widget(), {
				focusin: function(t) {
					this._makeFocusTarget(), this._focusedElement = E(t.target)
				}
			})
		},
		_makeFocusTarget: function() {
			this._untrackInstance(), this._trackingInstances().unshift(this)
		},
		_untrackInstance: function() {
			var a = this._trackingInstances(),
				e = E.inArray(this, a); - 1 !== e && a.splice(e, 1)
		},
		_trackingInstances: function() {
			var e = this.document.data("ui-dialog-instances");
			return e || (e = [], this.document.data("ui-dialog-instances", e)), e
		},
		_minHeight: function() {
			var e = this.options;
			return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
		},
		_position: function() {
			var e = this.uiDialog.is(":visible");
			e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
		},
		_setOptions: function(t) {
			var s = this,
				a = !1,
				r = {};
			E.each(t, function(t, n) {
				s._setOption(t, n), t in s.sizeRelatedOptions && (a = !0), t in s.resizableRelatedOptions && (r[t] = n)
			}), a && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", r)
		},
		_setOption: function(i, a) {
			var e = this.uiDialog,
				t, s;
			"dialogClass" === i && e.removeClass(this.options.dialogClass).addClass(a), "disabled" !== i && (this._super(i, a), "appendTo" === i && this.uiDialog.appendTo(this._appendTo()), "buttons" === i && this._createButtons(), "closeText" === i && this.uiDialogTitlebarClose.button({
				label: "" + a
			}), "draggable" === i && (t = e.is(":data(ui-draggable)"), t && !a && e.draggable("destroy"), !t && a && this._makeDraggable()), "position" === i && this._position(), "resizable" === i && (s = e.is(":data(ui-resizable)"), s && !a && e.resizable("destroy"), s && "string" == typeof a && e.resizable("option", "handles", a), s || !1 === a || this._makeResizable()), "title" === i && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
		},
		_size: function() {
			var e = this.options,
				t, a, i;
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			}), e.minWidth > e.width && (e.width = e.minWidth), t = this.uiDialog.css({
				height: "auto",
				width: e.width
			}).outerHeight(), a = Math.max(0, e.minHeight - t), i = "number" == typeof e.maxHeight ? Math.max(0, e.maxHeight - t) : "none", "auto" === e.height ? this.element.css({
				minHeight: a,
				maxHeight: i,
				height: "auto"
			}) : this.element.height(Math.max(0, e.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		},
		_blockFrames: function() {
			this.iframeBlocks = this.document.find("iframe").map(function() {
				var t = E(this);
				return E("<div>").css({
					position: "absolute",
					width: t.outerWidth(),
					height: t.outerHeight()
				}).appendTo(t.parent()).offset(t.offset())[0]
			})
		},
		_unblockFrames: function() {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_allowInteraction: function(t) {
			return !!E(t.target).closest(".ui-dialog").length || !!E(t.target).closest(".ui-datepicker").length
		},
		_createOverlay: function() {
			if (this.options.modal) {
				var e = !0;
				this._delay(function() {
					e = !1
				}), this.document.data("ui-dialog-overlays") || this._on(this.document, {
					focusin: function(a) {
						e || this._allowInteraction(a) || (a.preventDefault(), this._trackingInstances()[0]._focusTabbable())
					}
				}), this.overlay = E("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
					mousedown: "_keepFocus"
				}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
			}
		},
		_destroyOverlay: function() {
			if (this.options.modal && this.overlay) {
				var e = this.document.data("ui-dialog-overlays") - 1;
				e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
			}
		}
	}), E.widget("ui.droppable", {
		version: "1.11.4",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: !1,
			addClasses: !0,
			greedy: !1,
			hoverClass: !1,
			scope: "default",
			tolerance: "intersect",
			activate: null,
			deactivate: null,
			drop: null,
			out: null,
			over: null
		},
		_create: function() {
			var t = this.options,
				e = t.accept,
				a;
			this.isover = !1, this.isout = !0, this.accept = E.isFunction(e) ? e : function(a) {
				return a.is(e)
			}, this.proportions = function() {
				return arguments.length ? (a = arguments[0], void 0) : a ? a : a = {
					width: this.element[0].offsetWidth,
					height: this.element[0].offsetHeight
				}
			}, this._addToManager(t.scope), t.addClasses && this.element.addClass("ui-droppable")
		},
		_addToManager: function(t) {
			E.ui.ddmanager.droppables[t] = E.ui.ddmanager.droppables[t] || [], E.ui.ddmanager.droppables[t].push(this)
		},
		_splice: function(t) {
			for (var a = 0; t.length > a; a++) t[a] === this && t.splice(a, 1)
		},
		_destroy: function() {
			var t = E.ui.ddmanager.droppables[this.options.scope];
			this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled")
		},
		_setOption: function(n, e) {
			if ("accept" === n) this.accept = E.isFunction(e) ? e : function(t) {
				return t.is(e)
			};
			else if ("scope" === n) {
				var t = E.ui.ddmanager.droppables[this.options.scope];
				this._splice(t), this._addToManager(e)
			}
			this._super(n, e)
		},
		_activate: function(a) {
			var e = E.ui.ddmanager.current;
			this.options.activeClass && this.element.addClass(this.options.activeClass), e && this._trigger("activate", a, this.ui(e))
		},
		_deactivate: function(a) {
			var e = E.ui.ddmanager.current;
			this.options.activeClass && this.element.removeClass(this.options.activeClass), e && this._trigger("deactivate", a, this.ui(e))
		},
		_over: function(a) {
			var e = E.ui.ddmanager.current;
			e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", a, this.ui(e)))
		},
		_out: function(a) {
			var e = E.ui.ddmanager.current;
			e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", a, this.ui(e)))
		},
		_drop: function(n, e) {
			var i = e || E.ui.ddmanager.current,
				a = !1;
			return !!(i && (i.currentItem || i.element)[0] !== this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
				var e = E(this).droppable("instance");
				return e.options.greedy && !e.options.disabled && e.options.scope === i.options.scope && e.accept.call(e.element[0], i.currentItem || i.element) && E.ui.intersect(i, E.extend(e, {
					offset: e.element.offset()
				}), e.options.tolerance, n) ? (a = !0, !1) : void 0
			}), !a && !!this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", n, this.ui(i)), this.element))
		},
		ui: function(e) {
			return {
				draggable: e.currentItem || e.element,
				helper: e.helper,
				position: e.position,
				offset: e.positionAbs
			}
		}
	}), E.ui.intersect = function() {
		function c(n, a, e) {
			return n >= a && a + e > n
		}
		return function(p, e, t, i) {
			if (!e.offset) return !1;
			var s = (p.positionAbs || p.position.absolute).left + p.margins.left,
				n = (p.positionAbs || p.position.absolute).top + p.margins.top,
				a = s + p.helperProportions.width,
				o = n + p.helperProportions.height,
				r = e.offset.left,
				m = e.offset.top,
				l = r + e.proportions().width,
				u = m + e.proportions().height;
			return "fit" === t ? s >= r && l >= a && n >= m && u >= o : "intersect" === t ? s + p.helperProportions.width / 2 > r && l > a - p.helperProportions.width / 2 && n + p.helperProportions.height / 2 > m && u > o - p.helperProportions.height / 2 : "pointer" === t ? c(i.pageY, m, e.proportions().height) && c(i.pageX, r, e.proportions().width) : "touch" == t && (n >= m && u >= n || o >= m && u >= o || m > n && o > u) && (s >= r && l >= s || a >= r && l >= a || r > s && a > l)
		}
	}(), E.ui.ddmanager = {
		current: null,
		droppables: {
			default: []
		},
		prepareOffsets: function(n, e) {
			var t = E.ui.ddmanager.droppables[n.options.scope] || [],
				i = e ? e.type : null,
				a = (n.currentItem || n.element).find(":data(ui-droppable)").addBack(),
				o, s;
			e: for (o = 0; t.length > o; o++)
				if (!(t[o].options.disabled || n && !t[o].accept.call(t[o].element[0], n.currentItem || n.element))) {
					for (s = 0; a.length > s; s++)
						if (a[s] === t[o].element[0]) {
							t[o].proportions().height = 0;
							continue e
						} t[o].visible = "none" !== t[o].element.css("display"), t[o].visible && ("mousedown" === i && t[o]._activate.call(t[o], e), t[o].offset = t[o].element.offset(), t[o].proportions({
							width: t[o].element[0].offsetWidth,
							height: t[o].element[0].offsetHeight
						}))
				}
		},
		drop: function(n, e) {
			var t = !1;
			return E.each((E.ui.ddmanager.droppables[n.options.scope] || []).slice(), function() {
				this.options && (!this.options.disabled && this.visible && E.ui.intersect(n, this, this.options.tolerance, e) && (t = this._drop.call(this, e) || t), !this.options.disabled && this.visible && this.accept.call(this.element[0], n.currentItem || n.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, e)))
			}), t
		},
		dragStart: function(a, e) {
			a.element.parentsUntil("body").bind("scroll.droppable", function() {
				a.options.refreshPositions || E.ui.ddmanager.prepareOffsets(a, e)
			})
		},
		drag: function(a, e) {
			a.options.refreshPositions && E.ui.ddmanager.prepareOffsets(a, e), E.each(E.ui.ddmanager.droppables[a.options.scope] || [], function() {
				if (!this.options.disabled && !this.greedyChild && this.visible) {
					var t = E.ui.intersect(a, this, this.options.tolerance, e),
						n = !t && this.isover ? "isout" : t && !this.isover ? "isover" : null,
						i, o, s;
					n && (this.options.greedy && (o = this.options.scope, s = this.element.parents(":data(ui-droppable)").filter(function() {
						return E(this).droppable("instance").options.scope === o
					}), s.length && (i = E(s[0]).droppable("instance"), i.greedyChild = "isover" === n)), i && "isover" === n && (i.isover = !1, i.isout = !0, i._out.call(i, e)), this[n] = !0, this["isout" === n ? "isover" : "isout"] = !1, this["isover" === n ? "_over" : "_out"].call(this, e), i && "isout" === n && (i.isout = !1, i.isover = !0, i._over.call(i, e)))
				}
			})
		},
		dragStop: function(a, e) {
			a.element.parentsUntil("body").unbind("scroll.droppable"), a.options.refreshPositions || E.ui.ddmanager.prepareOffsets(a, e)
		}
	}, E.ui.droppable;
	var y = E;
	E.effects = {
		effect: {}
	},
		function(f, c) {
			function m(e, o, n) {
				var t = h[o.type] || {};
				return null == e ? n || !o.def ? null : o.def : (e = t.floor ? ~~e : parseFloat(e), isNaN(e) ? o.def : t.mod ? (e + t.mod) % t.mod : 0 > e ? 0 : e > t.max ? t.max : e)
			}

			function n(u) {
				var m = g(),
					p = m._rgba = [];
				return u = u.toLowerCase(), y(e, function(s, t) {
					var e = t.re.exec(u),
						a = e && t.parse(e),
						i = t.space || "rgba",
						n;
					return a ? (n = m[i](a), m[o[i].cache] = n[o[i].cache], p = m._rgba = n._rgba, !1) : c
				}), p.length ? ("0,0,0,0" === p.join() && f.extend(p, l.transparent), m) : l[u]
			}

			function r(n, a, e) {
				return e = (e + 1) % 1, 1 > 6 * e ? n + 6 * (a - n) * e : 1 > 2 * e ? a : 2 > 3 * e ? n + 6 * (a - n) * (2 / 3 - e) : n
			}
			var a = /^([\-+])=\s*(\d+\.?\d*)/,
				e = [{
					re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function(e) {
						return [e[1], e[2], e[3], e[4]]
					}
				}, {
					re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function(e) {
						return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
					}
				}, {
					re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
					parse: function(e) {
						return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
					}
				}, {
					re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
					parse: function(e) {
						return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
					}
				}, {
					re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					space: "hsla",
					parse: function(e) {
						return [e[1], e[2] / 100, e[3] / 100, e[4]]
					}
				}],
				g = f.Color = function(n, e, t, a) {
					return new f.Color.fn.parse(n, e, t, a)
				},
				o = {
					rgba: {
						props: {
							red: {
								idx: 0,
								type: "byte"
							},
							green: {
								idx: 1,
								type: "byte"
							},
							blue: {
								idx: 2,
								type: "byte"
							}
						}
					},
					hsla: {
						props: {
							hue: {
								idx: 0,
								type: "degrees"
							},
							saturation: {
								idx: 1,
								type: "percent"
							},
							lightness: {
								idx: 2,
								type: "percent"
							}
						}
					}
				},
				h = {
					byte: {
						floor: !0,
						max: 255
					},
					percent: {
						max: 1
					},
					degrees: {
						mod: 360,
						floor: !0
					}
				},
				v = g.support = {},
				t = f("<p>")[0],
				y = f.each,
				l;
			t.style.cssText = "background-color:rgba(1,1,1,.5)", v.rgba = -1 < t.style.backgroundColor.indexOf("rgba"), y(o, function(t, a) {
				a.cache = "_" + t, a.props.alpha = {
					idx: 3,
					type: "percent",
					def: 1
				}
			}), g.fn = f.extend(g.prototype, {
				parse: function(p, e, u, a) {
					if (p === c) return this._rgba = [null, null, null, null], this;
					(p.jquery || p.nodeType) && (p = f(p).css(e), e = c);
					var s = this,
						r = f.type(p),
						v = this._rgba = [];
					return e !== c && (p = [p, e, u, a], r = "array"), "string" === r ? this.parse(n(p) || l._default) : "array" === r ? (y(o.rgba.props, function(t, a) {
						v[a.idx] = m(p[a.idx], a)
					}), this) : "object" === r ? (p instanceof g ? y(o, function(t, a) {
						p[a.cache] && (s[a.cache] = p[a.cache].slice())
					}) : y(o, function(t, i) {
						var n = i.cache;
						y(i.props, function(t, a) {
							if (!s[n] && i.to) {
								if ("alpha" === t || null == p[t]) return;
								s[n] = i.to(s._rgba)
							}
							s[n][a.idx] = m(p[t], a, !0)
						}), s[n] && 0 > f.inArray(null, s[n].slice(0, 3)) && (s[n][3] = 1, i.from && (s._rgba = i.from(s[n])))
					}), this) : c
				},
				is: function(e) {
					var s = g(e),
						r = !0,
						l = this;
					return y(o, function(i, t) {
						var o = s[t.cache],
							a;
						return o && (a = l[t.cache] || t.to && t.to(l._rgba) || [], y(t.props, function(n, t) {
							return null == o[t.idx] ? c : r = o[t.idx] === a[t.idx]
						})), r
					}), r
				},
				_space: function() {
					var n = [],
						a = this;
					return y(o, function(e, t) {
						a[t.cache] && n.push(e)
					}), n.pop()
				},
				transition: function(s, c) {
					var d = g(s),
						i = d._space(),
						e = o[i],
						n = 0 === this.alpha() ? g("transparent") : this,
						u = n[e.cache] || e.to(n._rgba),
						p = u.slice();
					return d = d[e.cache], y(e.props, function(t, i) {
						var e = i.idx,
							n = u[e],
							o = d[e],
							s = h[i.type] || {};
						null !== o && (null === n ? p[e] = o : (s.mod && (o - n > s.mod / 2 ? n += s.mod : n - o > s.mod / 2 && (n -= s.mod)), p[e] = m((o - n) * c + n, i)))
					}), this[i](p)
				},
				blend: function(n) {
					if (1 === this._rgba[3]) return this;
					var e = this._rgba.slice(),
						t = e.pop(),
						a = g(n)._rgba;
					return g(f.map(e, function(i, n) {
						return (1 - t) * a[n] + t * i
					}))
				},
				toRgbaString: function() {
					var t = "rgba(",
						n = f.map(this._rgba, function(t, a) {
							return null == t ? 2 < a ? 1 : 0 : t
						});
					return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")"
				},
				toHslaString: function() {
					var t = "hsla(",
						n = f.map(this.hsla(), function(e, t) {
							return null == e && (e = 2 < t ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
						});
					return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")"
				},
				toHexString: function(n) {
					var e = this._rgba.slice(),
						t = e.pop();
					return n && e.push(~~(255 * t)), "#" + f.map(e, function(e) {
						return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
					}).join("")
				},
				toString: function() {
					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
				}
			}), g.fn.parse.prototype = g.fn, o.hsla.to = function(t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var i = t[0] / 255,
					e = t[1] / 255,
					s = t[2] / 255,
					n = t[3],
					a = Math.max(i, e, s),
					o = Math.min(i, e, s),
					r = a - o,
					c = a + o,
					l = .5 * c,
					p, u;
				return p = o === a ? 0 : i === a ? 60 * (e - s) / r + 360 : e === a ? 60 * (s - i) / r + 120 : 60 * (i - e) / r + 240, u = 0 == r ? 0 : .5 >= l ? r / c : r / (2 - c), [Math.round(p) % 360, u, l, null == n ? 1 : n]
			}, o.hsla.from = function(l) {
				if (null == l[0] || null == l[1] || null == l[2]) return [null, null, null, l[3]];
				var n = l[0] / 360,
					e = l[1],
					t = l[2],
					i = l[3],
					s = .5 >= t ? t * (1 + e) : t + e - t * e,
					a = 2 * t - s;
				return [Math.round(255 * r(a, s, n + 1 / 3)), Math.round(255 * r(a, s, n)), Math.round(255 * r(a, s, n - 1 / 3)), i]
			}, y(o, function(n, e) {
				var s = e.props,
					i = e.cache,
					l = e.to,
					o = e.from;
				g.fn[n] = function(a) {
					if (l && !this[i] && (this[i] = l(this._rgba)), a === c) return this[i].slice();
					var n = f.type(a),
						p = "array" === n || "object" === n ? a : arguments,
						r = this[i].slice(),
						e;
					return y(s, function(i, a) {
						var e = p["object" === n ? i : a.idx];
						null == e && (e = r[a.idx]), r[a.idx] = m(e, a)
					}), o ? (e = g(o(r)), e[i] = r, e) : g(r)
				}, y(s, function(e, o) {
					g.fn[e] || (g.fn[e] = function(t) {
						var s = f.type(t),
							u = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
							d = this[u](),
							p = d[o.idx],
							l;
						return "undefined" === s ? p : ("function" === s && (t = t.call(this, p), s = f.type(t)), null == t && o.empty ? this : ("string" === s && (l = a.exec(t), l && (t = p + parseFloat(l[2]) * ("+" === l[1] ? 1 : -1))), d[o.idx] = t, this[u](d)))
					})
				})
			}), g.hook = function(e) {
				var a = e.split(" ");
				y(a, function(e, a) {
					f.cssHooks[a] = {
						set: function(e, i) {
							var o = "",
								s, r;
							if ("transparent" !== i && ("string" !== f.type(i) || (s = n(i)))) {
								if (i = g(s || i), !v.rgba && 1 !== i._rgba[3]) {
									for (r = "backgroundColor" === a ? e.parentNode : e;
										("" === o || "transparent" === o) && r && r.style;) try {
											o = f.css(r, "backgroundColor"), r = r.parentNode
										} catch (t) { }
									i = i.blend(o && "transparent" !== o ? o : "_default")
								}
								i = i.toRgbaString()
							}
							try {
								e.style[a] = i
							} catch (t) { }
						}
					}, f.fx.step[a] = function(t) {
						t.colorInit || (t.start = g(t.elem, a), t.end = g(t.end), t.colorInit = !0), f.cssHooks[a].set(t.elem, t.start.transition(t.end, t.pos))
					}
				})
			}, g.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), f.cssHooks.borderColor = {
				expand: function(n) {
					var a = {};
					return y(["Top", "Right", "Bottom", "Left"], function(e, t) {
						a["border" + t + "Color"] = n
					}), a
				}
			}, l = f.Color.names = {
				aqua: "#00ffff",
				black: "#000000",
				blue: "#0000ff",
				fuchsia: "#ff00ff",
				gray: "#808080",
				green: "#008000",
				lime: "#00ff00",
				maroon: "#800000",
				navy: "#000080",
				olive: "#808000",
				purple: "#800080",
				red: "#ff0000",
				silver: "#c0c0c0",
				teal: "#008080",
				white: "#ffffff",
				yellow: "#ffff00",
				transparent: [null, null, null, 0],
				_default: "#ffffff"
			}
		}(y),
		function() {
			function n(i) {
				var e = i.ownerDocument.defaultView ? i.ownerDocument.defaultView.getComputedStyle(i, null) : i.currentStyle,
					t = {},
					n, s;
				if (e && e.length && e[0] && e[e[0]])
					for (s = e.length; s--;) n = e[s], "string" == typeof e[n] && (t[E.camelCase(n)] = e[n]);
				else
					for (n in e) "string" == typeof e[n] && (t[n] = e[n]);
				return t
			}

			function e(s, e) {
				var t = {},
					i, r;
				for (i in e) r = e[i], s[i] !== r && (a[i] || (E.fx.step[i] || !isNaN(parseFloat(r))) && (t[i] = r));
				return t
			}
			var t = ["add", "remove", "toggle"],
				a = {
					border: 1,
					borderBottom: 1,
					borderColor: 1,
					borderLeft: 1,
					borderRight: 1,
					borderTop: 1,
					borderWidth: 1,
					margin: 1,
					padding: 1
				};
			E.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(a, e) {
				E.fx.step[e] = function(t) {
					("none" === t.end || t.setAttr) && (1 !== t.pos || t.setAttr) || (y.style(t.elem, e, t.end), t.setAttr = !0)
				}
			}), E.fn.addBack || (E.fn.addBack = function(e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}), E.effects.animateClass = function(r, a, i, s) {
				var l = E.speed(a, i, s);
				return this.queue(function() {
					var i = E(this),
						a = i.attr("class") || "",
						o = l.children ? i.find("*").addBack() : i,
						d;
					o = o.map(function() {
						var e = E(this);
						return {
							el: e,
							start: n(this)
						}
					}), d = function() {
						E.each(t, function(t, a) {
							r[a] && i[a + "Class"](r[a])
						})
					}, d(), o = o.map(function() {
						return this.end = n(this.el[0]), this.diff = e(this.start, this.end), this
					}), i.attr("class", a), o = o.map(function() {
						var n = this,
							e = E.Deferred(),
							t = E.extend({}, l, {
								queue: !1,
								complete: function() {
									e.resolve(n)
								}
							});
						return this.el.animate(this.diff, t), e.promise()
					}), E.when.apply(E, o.get()).done(function() {
						d(), E.each(arguments, function() {
							var e = this.el;
							E.each(this.diff, function(a) {
								e.css(a, "")
							})
						}), l.complete.call(i[0])
					})
				})
			}, E.fn.extend({
				addClass: function(a) {
					return function(e, t, i, o) {
						return t ? E.effects.animateClass.call(this, {
							add: e
						}, t, i, o) : a.apply(this, arguments)
					}
				}(E.fn.addClass),
				removeClass: function(a) {
					return function(e, t, i, o) {
						return 1 < arguments.length ? E.effects.animateClass.call(this, {
							remove: e
						}, t, i, o) : a.apply(this, arguments)
					}
				}(E.fn.removeClass),
				toggleClass: function(o) {
					return function(e, t, i, s, n) {
						return "boolean" == typeof t || void 0 === t ? i ? E.effects.animateClass.call(this, t ? {
							add: e
						} : {
								remove: e
							}, i, s, n) : o.apply(this, arguments) : E.effects.animateClass.call(this, {
								toggle: e
							}, t, i, s)
					}
				}(E.fn.toggleClass),
				switchClass: function(a, e, t, i, o) {
					return E.effects.animateClass.call(this, {
						add: e,
						remove: a
					}, t, i, o)
				}
			})
		}(),
		function() {
			function n(t, n, i, s) {
				return E.isPlainObject(t) && (n = t, t = t.effect), t = {
					effect: t
				}, null == n && (n = {}), E.isFunction(n) && (s = n, i = null, n = {}), ("number" == typeof n || E.fx.speeds[n]) && (s = i, i = n, n = {}), E.isFunction(i) && (s = i, i = null), n && E.extend(t, n), i = i || n.duration, t.duration = E.fx.off ? 0 : "number" == typeof i ? i : i in E.fx.speeds ? E.fx.speeds[i] : E.fx.speeds._default, t.complete = s || n.complete, t
			}

			function o(t) {
				return !t || "number" == typeof t || E.fx.speeds[t] || !("string" != typeof t || E.effects.effect[t]) || !!E.isFunction(t) || !("object" != typeof t || t.effect)
			}
			E.extend(E.effects, {
				version: "1.11.4",
				save: function(n, a) {
					for (var e = 0; a.length > e; e++) null !== a[e] && n.data("ui-effects-" + a[e], n[0].style[a[e]])
				},
				restore: function(i, a) {
					var e, o;
					for (o = 0; a.length > o; o++) null !== a[o] && (e = i.data("ui-effects-" + a[o]), void 0 === e && (e = ""), i.css(a[o], e))
				},
				setMode: function(t, a) {
					return "toggle" === a && (a = t.is(":hidden") ? "show" : "hide"), a
				},
				getBaseline: function(i, a) {
					var e, o;
					switch (i[0]) {
						case "top":
							e = 0;
							break;
						case "middle":
							e = .5;
							break;
						case "bottom":
							e = 1;
							break;
						default:
							e = i[0] / a.height;
					}
					switch (i[1]) {
						case "left":
							o = 0;
							break;
						case "center":
							o = .5;
							break;
						case "right":
							o = 1;
							break;
						default:
							o = i[1] / a.width;
					}
					return {
						x: o,
						y: e
					}
				},
				createWrapper: function(s) {
					if (s.parent().is(".ui-effects-wrapper")) return s.parent();
					var o = {
						width: s.outerWidth(!0),
						height: s.outerHeight(!0),
						float: s.css("float")
					},
						t = E("<div></div>").addClass("ui-effects-wrapper").css({
							fontSize: "100%",
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0
						}),
						a = {
							width: s.width(),
							height: s.height()
						},
						i = document.activeElement;
					try {
						i.id
					} catch (t) {
						i = document.body
					}
					return s.wrap(t), (s[0] === i || E.contains(s[0], i)) && E(i).focus(), t = s.parent(), "static" === s.css("position") ? (t.css({
						position: "relative"
					}), s.css({
						position: "relative"
					})) : (E.extend(o, {
						position: s.css("position"),
						zIndex: s.css("z-index")
					}), E.each(["top", "left", "bottom", "right"], function(t, a) {
						o[a] = s.css(a), isNaN(parseInt(o[a], 10)) && (o[a] = "auto")
					}), s.css({
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					})), s.css(a), t.css(o).show()
				},
				removeWrapper: function(a) {
					var e = document.activeElement;
					return a.parent().is(".ui-effects-wrapper") && (a.parent().replaceWith(a), (a[0] === e || E.contains(a[0], e)) && E(e).focus()), a
				},
				setTransition: function(a, n, o, t) {
					return t = t || {}, E.each(n, function(s, n) {
						var e = a.cssUnit(n);
						0 < e[0] && (t[n] = e[0] * o + e[1])
					}), t
				}
			}), E.fn.extend({
				effect: function() {
					function a(s) {
						function e() {
							E.isFunction(i) && i.call(t[0]), E.isFunction(s) && s()
						}
						var t = E(this),
							i = o.complete,
							n = o.mode;
						(t.is(":hidden") ? "hide" === n : "show" === n) ? (t[n](), e()) : r.call(t[0], o, e)
					}
					var o = n.apply(this, arguments),
						e = o.mode,
						t = o.queue,
						r = E.effects.effect[o.effect];
					return E.fx.off || !r ? e ? this[e](o.duration, o.complete) : this.each(function() {
						o.complete && o.complete.call(this)
					}) : !1 === t ? this.each(a) : this.queue(t || "fx", a)
				},
				show: function(t) {
					return function(a) {
						if (o(a)) return t.apply(this, arguments);
						var e = n.apply(this, arguments);
						return e.mode = "show", this.effect.call(this, e)
					}
				}(E.fn.show),
				hide: function(t) {
					return function(a) {
						if (o(a)) return t.apply(this, arguments);
						var e = n.apply(this, arguments);
						return e.mode = "hide", this.effect.call(this, e)
					}
				}(E.fn.hide),
				toggle: function(t) {
					return function(a) {
						if (o(a) || "boolean" == typeof a) return t.apply(this, arguments);
						var e = n.apply(this, arguments);
						return e.mode = "toggle", this.effect.call(this, e)
					}
				}(E.fn.toggle),
				cssUnit: function(t) {
					var o = this.css(t),
						a = [];
					return E.each(["em", "px", "%", "pt"], function(t, n) {
						0 < o.indexOf(n) && (a = [parseFloat(o), n])
					}), a
				}
			})
		}(),
		function() {
			var t = {};
			E.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, n) {
				t[n] = function(t) {
					return Math.pow(t, a + 2)
				}
			}), E.extend(t, {
				Sine: function(e) {
					return 1 - Math.cos(e * Math.PI / 2)
				},
				Circ: function(e) {
					return 1 - Math.sqrt(1 - e * e)
				},
				Elastic: function(e) {
					return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
				},
				Back: function(e) {
					return e * e * (3 * e - 2)
				},
				Bounce: function(t) {
					for (var a = 4, i;
						((i = Math.pow(2, --a)) - 1) / 11 > t;);
					return 1 / Math.pow(4, 3 - a) - 7.5625 * Math.pow((3 * i - 2) / 22 - t, 2)
				}
			}), E.each(t, function(a, e) {
				E.easing["easeIn" + a] = e, E.easing["easeOut" + a] = function(t) {
					return 1 - e(1 - t)
				}, E.easing["easeInOut" + a] = function(t) {
					return .5 > t ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
				}
			})
		}(), E.effects, E.effects.effect.blind = function(a, e) {
			var t = E(this),
				n = /up|down|vertical/,
				i = /up|left|vertical|horizontal/,
				o = ["position", "top", "bottom", "left", "right", "height", "width"],
				s = E.effects.setMode(t, a.mode || "hide"),
				r = a.direction || "up",
				l = n.test(r),
				d = l ? "height" : "width",
				c = l ? "top" : "left",
				p = i.test(r),
				u = {},
				m = "show" === s,
				h, g, f;
			t.parent().is(".ui-effects-wrapper") ? E.effects.save(t.parent(), o) : E.effects.save(t, o), t.show(), h = E.effects.createWrapper(t).css({
				overflow: "hidden"
			}), g = h[d](), f = parseFloat(h.css(c)) || 0, u[d] = m ? g : 0, p || (t.css(l ? "bottom" : "right", 0).css(l ? "top" : "left", "auto").css({
				position: "absolute"
			}), u[c] = m ? f : g + f), m && (h.css(d, 0), p || h.css(c, f + g)), h.animate(u, {
				duration: a.duration,
				easing: a.easing,
				queue: !1,
				complete: function() {
					"hide" === s && t.hide(), E.effects.restore(t, o), E.effects.removeWrapper(t), e()
				}
			})
		}, E.effects.effect.bounce = function(a, e) {
			var t = E(this),
				n = ["position", "top", "bottom", "left", "right", "height", "width"],
				i = E.effects.setMode(t, a.mode || "effect"),
				o = "hide" === i,
				s = "show" === i,
				r = a.direction || "up",
				l = a.distance,
				c = a.times || 5,
				u = 2 * c + (s || o ? 1 : 0),
				p = a.duration / u,
				h = a.easing,
				m = "up" === r || "down" === r ? "top" : "left",
				g = "up" === r || "left" === r,
				f = t.queue(),
				v = f.length,
				y, b, w;
			for ((s || o) && n.push("opacity"), E.effects.save(t, n), t.show(), E.effects.createWrapper(t), l || (l = t["top" == m ? "outerHeight" : "outerWidth"]() / 3), s && (w = {
				opacity: 1
			}, w[m] = 0, t.css("opacity", 0).css(m, g ? 2 * -l : 2 * l).animate(w, p, h)), o && (l /= Math.pow(2, c - 1)), w = {}, w[m] = 0, y = 0; c > y; y++) b = {}, b[m] = (g ? "-=" : "+=") + l, t.animate(b, p, h).animate(w, p, h), l = o ? 2 * l : l / 2;
			o && (b = {
				opacity: 0
			}, b[m] = (g ? "-=" : "+=") + l, t.animate(b, p, h)), t.queue(function() {
				o && t.hide(), E.effects.restore(t, n), E.effects.removeWrapper(t), e()
			}), 1 < v && f.splice.apply(f, [1, 0].concat(f.splice(v, u + 1))), t.dequeue()
		}, E.effects.effect.clip = function(a, e) {
			var t = E(this),
				n = ["position", "top", "bottom", "left", "right", "height", "width"],
				i = E.effects.setMode(t, a.mode || "hide"),
				o = "show" === i,
				s = a.direction || "vertical",
				r = "vertical" === s,
				l = r ? "height" : "width",
				d = r ? "top" : "left",
				c = {},
				p, u, m;
			E.effects.save(t, n), t.show(), p = E.effects.createWrapper(t).css({
				overflow: "hidden"
			}), u = "IMG" === t[0].tagName ? p : t, m = u[l](), o && (u.css(l, 0), u.css(d, m / 2)), c[l] = o ? m : 0, c[d] = o ? 0 : m / 2, u.animate(c, {
				queue: !1,
				duration: a.duration,
				easing: a.easing,
				complete: function() {
					o || t.hide(), E.effects.restore(t, n), E.effects.removeWrapper(t), e()
				}
			})
		}, E.effects.effect.drop = function(s, e) {
			var t = E(this),
				i = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
				n = E.effects.setMode(t, s.mode || "hide"),
				a = "show" === n,
				o = s.direction || "left",
				r = "up" === o || "down" === o ? "top" : "left",
				p = "up" === o || "left" === o ? "pos" : "neg",
				l = {
					opacity: a ? 1 : 0
				},
				c;
			E.effects.save(t, i), t.show(), E.effects.createWrapper(t), c = s.distance || t["top" == r ? "outerHeight" : "outerWidth"](!0) / 2, a && t.css("opacity", 0).css(r, "pos" == p ? -c : c), l[r] = (a ? "pos" == p ? "+=" : "-=" : "pos" == p ? "-=" : "+=") + c, t.animate(l, {
				queue: !1,
				duration: s.duration,
				easing: s.easing,
				complete: function() {
					"hide" === n && t.hide(), E.effects.restore(t, i), E.effects.removeWrapper(t), e()
				}
			})
		}, E.effects.effect.explode = function(a, e) {
			function t() {
				u.push(this), u.length === o * n && i()
			}

			function i() {
				s.css({
					visibility: "visible"
				}), E(u).remove(), l || s.hide(), e()
			}
			var o = a.pieces ? Math.round(Math.sqrt(a.pieces)) : 3,
				n = o,
				s = E(this),
				r = E.effects.setMode(s, a.mode || "hide"),
				l = "show" === r,
				d = s.show().css("visibility", "hidden").offset(),
				c = Math.ceil(s.outerWidth() / n),
				p = Math.ceil(s.outerHeight() / o),
				u = [],
				m, h, g, f, v, y;
			for (m = 0; o > m; m++)
				for (f = d.top + m * p, y = m - (o - 1) / 2, h = 0; n > h; h++) g = d.left + h * c, v = h - (n - 1) / 2, s.clone().appendTo("body").wrap("<div></div>").css({
					position: "absolute",
					visibility: "visible",
					left: -h * c,
					top: -m * p
				}).parent().addClass("ui-effects-explode").css({
					position: "absolute",
					overflow: "hidden",
					width: c,
					height: p,
					left: g + (l ? v * c : 0),
					top: f + (l ? y * p : 0),
					opacity: l ? 0 : 1
				}).animate({
					left: g + (l ? 0 : v * c),
					top: f + (l ? 0 : y * p),
					opacity: l ? 1 : 0
				}, a.duration || 500, a.easing, t)
		}, E.effects.effect.fade = function(n, e) {
			var t = E(this),
				a = E.effects.setMode(t, n.mode || "toggle");
			t.animate({
				opacity: a
			}, {
				queue: !1,
				duration: n.duration,
				easing: n.easing,
				complete: e
			})
		}, E.effects.effect.fold = function(n, e) {
			var t = E(this),
				i = ["position", "top", "bottom", "left", "right", "height", "width"],
				a = E.effects.setMode(t, n.mode || "hide"),
				o = "show" === a,
				s = "hide" === a,
				r = n.size || 15,
				u = /([0-9]+)%/.exec(r),
				h = !!n.horizFirst,
				d = o != h,
				c = d ? ["width", "height"] : ["height", "width"],
				p = n.duration / 2,
				f = {},
				m = {},
				g, b;
			E.effects.save(t, i), t.show(), g = E.effects.createWrapper(t).css({
				overflow: "hidden"
			}), b = d ? [g.width(), g.height()] : [g.height(), g.width()], u && (r = parseInt(u[1], 10) / 100 * b[s ? 0 : 1]), o && g.css(h ? {
				height: 0,
				width: r
			} : {
					height: r,
					width: 0
				}), f[c[0]] = o ? b[0] : r, m[c[1]] = o ? b[1] : 0, g.animate(f, p, n.easing).animate(m, p, n.easing, function() {
					s && t.hide(), E.effects.restore(t, i), E.effects.removeWrapper(t), e()
				})
		}, E.effects.effect.highlight = function(o, e) {
			var t = E(this),
				i = ["backgroundImage", "backgroundColor", "opacity"],
				s = E.effects.setMode(t, o.mode || "show"),
				n = {
					backgroundColor: t.css("backgroundColor")
				};
			"hide" === s && (n.opacity = 0), E.effects.save(t, i), t.show().css({
				backgroundImage: "none",
				backgroundColor: o.color || "#ffff99"
			}).animate(n, {
				queue: !1,
				duration: o.duration,
				easing: o.easing,
				complete: function() {
					"hide" === s && t.hide(), E.effects.restore(t, i), e()
				}
			})
		}, E.effects.effect.size = function(n, e) {
			var s = E(this),
				t = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
				i = ["width", "height", "overflow"],
				a = ["fontSize"],
				r = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
				l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
				d = E.effects.setMode(s, n.mode || "effect"),
				c = n.restore || "effect" !== d,
				p = n.scale || "both",
				h = n.origin || ["middle", "center"],
				m = s.css("position"),
				g = c ? t : ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
				f = {
					height: 0,
					width: 0,
					outerHeight: 0,
					outerWidth: 0
				},
				y, w, x;
			"show" === d && s.show(), y = {
				height: s.height(),
				width: s.width(),
				outerHeight: s.outerHeight(),
				outerWidth: s.outerWidth()
			}, "toggle" === n.mode && "show" === d ? (s.from = n.to || f, s.to = n.from || y) : (s.from = n.from || ("show" === d ? f : y), s.to = n.to || ("hide" === d ? f : y)), x = {
				from: {
					y: s.from.height / y.height,
					x: s.from.width / y.width
				},
				to: {
					y: s.to.height / y.height,
					x: s.to.width / y.width
				}
			}, ("box" === p || "both" === p) && (x.from.y !== x.to.y && (g = g.concat(r), s.from = E.effects.setTransition(s, r, x.from.y, s.from), s.to = E.effects.setTransition(s, r, x.to.y, s.to)), x.from.x !== x.to.x && (g = g.concat(l), s.from = E.effects.setTransition(s, l, x.from.x, s.from), s.to = E.effects.setTransition(s, l, x.to.x, s.to))), ("content" === p || "both" === p) && x.from.y !== x.to.y && (g = g.concat(a).concat(i), s.from = E.effects.setTransition(s, a, x.from.y, s.from), s.to = E.effects.setTransition(s, a, x.to.y, s.to)), E.effects.save(s, g), s.show(), E.effects.createWrapper(s), s.css("overflow", "hidden").css(s.from), h && (w = E.effects.getBaseline(h, y), s.from.top = (y.outerHeight - s.outerHeight()) * w.y, s.from.left = (y.outerWidth - s.outerWidth()) * w.x, s.to.top = (y.outerHeight - s.to.outerHeight) * w.y, s.to.left = (y.outerWidth - s.to.outerWidth) * w.x), s.css(s.from), ("content" === p || "both" === p) && (r = r.concat(["marginTop", "marginBottom"]).concat(a), l = l.concat(["marginLeft", "marginRight"]), i = t.concat(r).concat(l), s.find("*[width]").each(function() {
				var e = E(this),
					t = {
						height: e.height(),
						width: e.width(),
						outerHeight: e.outerHeight(),
						outerWidth: e.outerWidth()
					};
				c && E.effects.save(e, i), e.from = {
					height: t.height * x.from.y,
					width: t.width * x.from.x,
					outerHeight: t.outerHeight * x.from.y,
					outerWidth: t.outerWidth * x.from.x
				}, e.to = {
					height: t.height * x.to.y,
					width: t.width * x.to.x,
					outerHeight: t.height * x.to.y,
					outerWidth: t.width * x.to.x
				}, x.from.y !== x.to.y && (e.from = E.effects.setTransition(e, r, x.from.y, e.from), e.to = E.effects.setTransition(e, r, x.to.y, e.to)), x.from.x !== x.to.x && (e.from = E.effects.setTransition(e, l, x.from.x, e.from), e.to = E.effects.setTransition(e, l, x.to.x, e.to)), e.css(e.from), e.animate(e.to, n.duration, n.easing, function() {
					c && E.effects.restore(e, i)
				})
			})), s.animate(s.to, {
				queue: !1,
				duration: n.duration,
				easing: n.easing,
				complete: function() {
					0 === s.to.opacity && s.css("opacity", s.from.opacity), "hide" === d && s.hide(), E.effects.restore(s, g), c || ("static" === m ? s.css({
						position: "relative",
						top: s.to.top,
						left: s.to.left
					}) : E.each(["top", "left"], function(n, t) {
						s.css(t, function(a, e) {
							var t = parseInt(e, 10),
								i = n ? s.to.left : s.to.top;
							return "auto" === e ? i + "px" : t + i + "px"
						})
					})), E.effects.removeWrapper(s), e()
				}
			})
		}, E.effects.effect.scale = function(c, e) {
			var t = E(this),
				i = E.extend(!0, {}, c),
				s = E.effects.setMode(t, c.mode || "effect"),
				n = parseInt(c.percent, 10) || (0 === parseInt(c.percent, 10) ? 0 : "hide" === s ? 0 : 100),
				a = c.direction || "both",
				o = c.origin,
				r = {
					height: t.height(),
					width: t.width(),
					outerHeight: t.outerHeight(),
					outerWidth: t.outerWidth()
				},
				d = {
					y: "horizontal" === a ? 1 : n / 100,
					x: "vertical" === a ? 1 : n / 100
				};
			i.effect = "size", i.queue = !1, i.complete = e, "effect" !== s && (i.origin = o || ["middle", "center"], i.restore = !0), i.from = c.from || ("show" === s ? {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			} : r), i.to = {
				height: r.height * d.y,
				width: r.width * d.x,
				outerHeight: r.outerHeight * d.y,
				outerWidth: r.outerWidth * d.x
			}, i.fade && ("show" === s && (i.from.opacity = 0, i.to.opacity = 1), "hide" === s && (i.from.opacity = 1, i.to.opacity = 0)), t.effect(i)
		}, E.effects.effect.puff = function(l, e) {
			var t = E(this),
				i = E.effects.setMode(t, l.mode || "hide"),
				s = "hide" === i,
				n = parseInt(l.percent, 10) || 150,
				a = n / 100,
				o = {
					height: t.height(),
					width: t.width(),
					outerHeight: t.outerHeight(),
					outerWidth: t.outerWidth()
				};
			E.extend(l, {
				effect: "scale",
				queue: !1,
				fade: !0,
				mode: i,
				complete: e,
				percent: s ? n : 100,
				from: s ? o : {
					height: o.height * a,
					width: o.width * a,
					outerHeight: o.outerHeight * a,
					outerWidth: o.outerWidth * a
				}
			}), t.effect(l)
		}, E.effects.effect.pulsate = function(s, e) {
			var t = E(this),
				i = E.effects.setMode(t, s.mode || "show"),
				n = "show" === i,
				a = 2 * (s.times || 5) + (n || "hide" === i ? 1 : 0),
				o = s.duration / a,
				r = 0,
				d = t.queue(),
				u = d.length,
				c;
			for ((n || !t.is(":visible")) && (t.css("opacity", 0).show(), r = 1), c = 1; a > c; c++) t.animate({
				opacity: r
			}, o, s.easing), r = 1 - r;
			t.animate({
				opacity: r
			}, o, s.easing), t.queue(function() {
				"hide" === i && t.hide(), e()
			}), 1 < u && d.splice.apply(d, [1, 0].concat(d.splice(u, a + 1))), t.dequeue()
		}, E.effects.effect.shake = function(s, e) {
			var t = E(this),
				i = ["position", "top", "bottom", "left", "right", "height", "width"],
				n = E.effects.setMode(t, s.mode || "effect"),
				a = s.direction || "left",
				o = s.distance || 20,
				r = s.times || 3,
				h = 2 * r + 1,
				l = Math.round(s.duration / h),
				u = "up" === a || "down" === a ? "top" : "left",
				d = "up" === a || "left" === a,
				c = {},
				p = {},
				f = {},
				m = t.queue(),
				g = m.length,
				v;
			for (E.effects.save(t, i), t.show(), E.effects.createWrapper(t), c[u] = (d ? "-=" : "+=") + o, p[u] = (d ? "+=" : "-=") + 2 * o, f[u] = (d ? "-=" : "+=") + 2 * o, t.animate(c, l, s.easing), v = 1; r > v; v++) t.animate(p, l, s.easing).animate(f, l, s.easing);
			t.animate(p, l, s.easing).animate(c, l / 2, s.easing).queue(function() {
				"hide" === n && t.hide(), E.effects.restore(t, i), E.effects.removeWrapper(t), e()
			}), 1 < g && m.splice.apply(m, [1, 0].concat(m.splice(g, h + 1))), t.dequeue()
		}, E.effects.effect.slide = function(s, e) {
			var t = E(this),
				i = ["position", "top", "bottom", "left", "right", "width", "height"],
				n = E.effects.setMode(t, s.mode || "show"),
				a = "show" === n,
				o = s.direction || "left",
				r = "up" === o || "down" === o ? "top" : "left",
				p = "up" === o || "left" === o,
				l = {},
				c;
			E.effects.save(t, i), t.show(), c = s.distance || t["top" == r ? "outerHeight" : "outerWidth"](!0), E.effects.createWrapper(t).css({
				overflow: "hidden"
			}), a && t.css(r, p ? isNaN(c) ? "-" + c : -c : c), l[r] = (a ? p ? "+=" : "-=" : p ? "-=" : "+=") + c, t.animate(l, {
				queue: !1,
				duration: s.duration,
				easing: s.easing,
				complete: function() {
					"hide" === n && t.hide(), E.effects.restore(t, i), E.effects.removeWrapper(t), e()
				}
			})
		}, E.effects.effect.transfer = function(c, e) {
			var t = E(this),
				i = E(c.to),
				s = "fixed" === i.css("position"),
				n = E("body"),
				a = s ? n.scrollTop() : 0,
				o = s ? n.scrollLeft() : 0,
				r = i.offset(),
				p = {
					top: r.top - a,
					left: r.left - o,
					height: i.innerHeight(),
					width: i.innerWidth()
				},
				l = t.offset(),
				u = E("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(c.className).css({
					top: l.top - a,
					left: l.left - o,
					height: t.innerHeight(),
					width: t.innerWidth(),
					position: s ? "fixed" : "absolute"
				}).animate(p, c.duration, c.easing, function() {
					u.remove(), e()
				})
		}, E.widget("ui.progressbar", {
			version: "1.11.4",
			options: {
				max: 100,
				value: 0,
				change: null,
				complete: null
			},
			min: 0,
			_create: function() {
				this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
					role: "progressbar",
					"aria-valuemin": this.min
				}), this.valueDiv = E("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
			},
			_destroy: function() {
				this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
			},
			value: function(e) {
				return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0)
			},
			_constrainedValue: function(e) {
				return void 0 === e && (e = this.options.value), this.indeterminate = !1 === e, "number" != typeof e && (e = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, e))
			},
			_setOptions: function(t) {
				var a = t.value;
				delete t.value, this._super(t), this.options.value = this._constrainedValue(a), this._refreshValue()
			},
			_setOption: function(t, a) {
				"max" === t && (a = Math.max(this.min, a)), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!a).attr("aria-disabled", a), this._super(t, a)
			},
			_percentage: function() {
				return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
			},
			_refreshValue: function() {
				var a = this.options.value,
					e = this._percentage();
				this.valueDiv.toggle(this.indeterminate || a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(e.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = E("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
					"aria-valuemax": this.options.max,
					"aria-valuenow": a
				}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== a && (this.oldValue = a, this._trigger("change")), a === this.options.max && this._trigger("complete")
			}
		}), E.widget("ui.selectable", E.ui.mouse, {
			version: "1.11.4",
			options: {
				appendTo: "body",
				autoRefresh: !0,
				distance: 0,
				filter: "*",
				tolerance: "touch",
				selected: null,
				selecting: null,
				start: null,
				stop: null,
				unselected: null,
				unselecting: null
			},
			_create: function() {
				var t = this,
					e;
				this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
					e = E(t.options.filter, t.element[0]), e.addClass("ui-selectee"), e.each(function() {
						var a = E(this),
							e = a.offset();
						E.data(this, "selectable-item", {
							element: this,
							$element: a,
							left: e.left,
							top: e.top,
							right: e.left + a.outerWidth(),
							bottom: e.top + a.outerHeight(),
							startselected: !1,
							selected: a.hasClass("ui-selected"),
							selecting: a.hasClass("ui-selecting"),
							unselecting: a.hasClass("ui-unselecting")
						})
					})
				}, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = E("<div class='ui-selectable-helper'></div>")
			},
			_destroy: function() {
				this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
			},
			_mouseStart: function(n) {
				var e = this,
					t = this.options;
				this.opos = [n.pageX, n.pageY], this.options.disabled || (this.selectees = E(t.filter, this.element[0]), this._trigger("start", n), E(t.appendTo).append(this.helper), this.helper.css({
					left: n.pageX,
					top: n.pageY,
					width: 0,
					height: 0
				}), t.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
					var t = E.data(this, "selectable-item");
					t.startselected = !0, n.metaKey || n.ctrlKey || (t.$element.removeClass("ui-selected"), t.selected = !1, t.$element.addClass("ui-unselecting"), t.unselecting = !0, e._trigger("unselecting", n, {
						unselecting: t.element
					}))
				}), E(n.target).parents().addBack().each(function() {
					var t = E.data(this, "selectable-item"),
						a;
					return t ? (a = !n.metaKey && !n.ctrlKey || !t.$element.hasClass("ui-selected"), t.$element.removeClass(a ? "ui-unselecting" : "ui-selected").addClass(a ? "ui-selecting" : "ui-unselecting"), t.unselecting = !a, t.selecting = a, t.selected = a, a ? e._trigger("selecting", n, {
						selecting: t.element
					}) : e._trigger("unselecting", n, {
						unselecting: t.element
					}), !1) : void 0
				}))
			},
			_mouseDrag: function(o) {
				if (this.dragged = !0, !this.options.disabled) {
					var e = this,
						t = this.options,
						s = this.opos[0],
						r = this.opos[1],
						u = o.pageX,
						m = o.pageY,
						a;
					return s > u && (a = u, u = s, s = a), r > m && (a = m, m = r, r = a), this.helper.css({
						left: s,
						top: r,
						width: u - s,
						height: m - r
					}), this.selectees.each(function() {
						var n = E.data(this, "selectable-item"),
							a = !1;
						n && n.element !== e.element[0] && ("touch" === t.tolerance ? a = !(n.left > u || s > n.right || n.top > m || r > n.bottom) : "fit" === t.tolerance && (a = n.left > s && u > n.right && n.top > r && m > n.bottom), a ? (n.selected && (n.$element.removeClass("ui-selected"), n.selected = !1), n.unselecting && (n.$element.removeClass("ui-unselecting"), n.unselecting = !1), n.selecting || (n.$element.addClass("ui-selecting"), n.selecting = !0, e._trigger("selecting", o, {
							selecting: n.element
						}))) : (n.selecting && ((o.metaKey || o.ctrlKey) && n.startselected ? (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.$element.addClass("ui-selected"), n.selected = !0) : (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.startselected && (n.$element.addClass("ui-unselecting"), n.unselecting = !0), e._trigger("unselecting", o, {
							unselecting: n.element
						}))), n.selected && (o.metaKey || o.ctrlKey || n.startselected || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, e._trigger("unselecting", o, {
							unselecting: n.element
						})))))
					}), !1
				}
			},
			_mouseStop: function(n) {
				var e = this;
				return this.dragged = !1, E(".ui-unselecting", this.element[0]).each(function() {
					var t = E.data(this, "selectable-item");
					t.$element.removeClass("ui-unselecting"), t.unselecting = !1, t.startselected = !1, e._trigger("unselected", n, {
						unselected: t.element
					})
				}), E(".ui-selecting", this.element[0]).each(function() {
					var t = E.data(this, "selectable-item");
					t.$element.removeClass("ui-selecting").addClass("ui-selected"), t.selecting = !1, t.selected = !0, t.startselected = !0, e._trigger("selected", n, {
						selected: t.element
					})
				}), this._trigger("stop", n), this.helper.remove(), !1
			}
		}), E.widget("ui.selectmenu", {
			version: "1.11.4",
			defaultElement: "<select>",
			options: {
				appendTo: null,
				disabled: null,
				icons: {
					button: "ui-icon-triangle-1-s"
				},
				position: {
					my: "left top",
					at: "left bottom",
					collision: "none"
				},
				width: null,
				change: null,
				close: null,
				focus: null,
				open: null,
				select: null
			},
			_create: function() {
				var e = this.element.uniqueId().attr("id");
				this.ids = {
					element: e,
					button: e + "-button",
					menu: e + "-menu"
				}, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
			},
			_drawButton: function() {
				var t = this;
				this.label = E("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
					click: function(e) {
						this.button.focus(), e.preventDefault()
					}
				}), this.element.hide(), this.button = E("<span>", {
					class: "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
					tabindex: this.options.disabled ? -1 : 0,
					id: this.ids.button,
					role: "combobox",
					"aria-expanded": "false",
					"aria-autocomplete": "list",
					"aria-owns": this.ids.menu,
					"aria-haspopup": "true"
				}).insertAfter(this.element), E("<span>", {
					class: "ui-icon " + this.options.icons.button
				}).prependTo(this.button), this.buttonText = E("<span>", {
					class: "ui-selectmenu-text"
				}).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
					t.menuItems || t._refreshMenu()
				}), this._hoverable(this.button), this._focusable(this.button)
			},
			_drawMenu: function() {
				var n = this;
				this.menu = E("<ul>", {
					"aria-hidden": "true",
					"aria-labelledby": this.ids.button,
					id: this.ids.menu
				}), this.menuWrap = E("<div>", {
					class: "ui-selectmenu-menu ui-front"
				}).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
					role: "listbox",
					select: function(a, t) {
						a.preventDefault(), n._setSelection(), n._select(t.item.data("ui-selectmenu-item"), a)
					},
					focus: function(a, t) {
						var e = t.item.data("ui-selectmenu-item");
						null != n.focusIndex && e.index !== n.focusIndex && (n._trigger("focus", a, {
							item: e
						}), n.isOpen || n._select(e, a)), n.focusIndex = e.index, n.button.attr("aria-activedescendant", n.menuItems.eq(e.index).attr("id"))
					}
				}).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
					return !1
				}, this.menuInstance._isDivider = function() {
					return !1
				}
			},
			refresh: function() {
				this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
			},
			_refreshMenu: function() {
				this.menu.empty();
				var e = this.element.find("option"),
					a;
				e.length && (this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), a = this._getSelectedItem(), this.menuInstance.focus(null, a), this._setAria(a.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
			},
			open: function(e) {
				this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e))
			},
			_position: function() {
				this.menuWrap.position(E.extend({
					of: this.button
				}, this.options.position))
			},
			close: function(e) {
				this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e))
			},
			widget: function() {
				return this.button
			},
			menuWidget: function() {
				return this.menu
			},
			_renderMenu: function(a, e) {
				var n = this,
					o = "";
				E.each(e, function(e, t) {
					t.optgroup !== o && (E("<li>", {
						class: "ui-selectmenu-optgroup ui-menu-divider" + (t.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
						text: t.optgroup
					}).appendTo(a), o = t.optgroup), n._renderItemData(a, t)
				})
			},
			_renderItemData: function(t, a) {
				return this._renderItem(t, a).data("ui-selectmenu-item", a)
			},
			_renderItem: function(n, e) {
				var t = E("<li>");
				return e.disabled && t.addClass("ui-state-disabled"), this._setText(t, e.label), t.appendTo(n)
			},
			_setText: function(t, a) {
				a ? t.text(a) : t.html("&#160;")
			},
			_move: function(n, a) {
				var e = ".ui-menu-item",
					i, s;
				this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), e += ":not(.ui-state-disabled)"), s = "first" === n || "last" === n ? i["first" === n ? "prevAll" : "nextAll"](e).eq(-1) : i[n + "All"](e).eq(0), s.length && this.menuInstance.focus(a, s)
			},
			_getSelectedItem: function() {
				return this.menuItems.eq(this.element[0].selectedIndex)
			},
			_toggle: function(e) {
				this[this.isOpen ? "close" : "open"](e)
			},
			_setSelection: function() {
				var e;
				this.range && (window.getSelection ? (e = window.getSelection(), e.removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.focus())
			},
			_documentClick: {
				mousedown: function(t) {
					this.isOpen && (E(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
				}
			},
			_buttonEvents: {
				mousedown: function() {
					var e;
					window.getSelection ? (e = window.getSelection(), e.rangeCount && (this.range = e.getRangeAt(0))) : this.range = document.selection.createRange()
				},
				click: function(e) {
					this._setSelection(), this._toggle(e)
				},
				keydown: function(a) {
					var e = !0;
					switch (a.keyCode) {
						case E.ui.keyCode.TAB:
						case E.ui.keyCode.ESCAPE:
							this.close(a), e = !1;
							break;
						case E.ui.keyCode.ENTER:
							this.isOpen && this._selectFocusedItem(a);
							break;
						case E.ui.keyCode.UP:
							a.altKey ? this._toggle(a) : this._move("prev", a);
							break;
						case E.ui.keyCode.DOWN:
							a.altKey ? this._toggle(a) : this._move("next", a);
							break;
						case E.ui.keyCode.SPACE:
							this.isOpen ? this._selectFocusedItem(a) : this._toggle(a);
							break;
						case E.ui.keyCode.LEFT:
							this._move("prev", a);
							break;
						case E.ui.keyCode.RIGHT:
							this._move("next", a);
							break;
						case E.ui.keyCode.HOME:
						case E.ui.keyCode.PAGE_UP:
							this._move("first", a);
							break;
						case E.ui.keyCode.END:
						case E.ui.keyCode.PAGE_DOWN:
							this._move("last", a);
							break;
						default:
							this.menu.trigger(a), e = !1;
					}
					e && a.preventDefault()
				}
			},
			_selectFocusedItem: function(t) {
				var a = this.menuItems.eq(this.focusIndex);
				a.hasClass("ui-state-disabled") || this._select(a.data("ui-selectmenu-item"), t)
			},
			_select: function(n, a) {
				var e = this.element[0].selectedIndex;
				this.element[0].selectedIndex = n.index, this._setText(this.buttonText, n.label), this._setAria(n), this._trigger("select", a, {
					item: n
				}), n.index !== e && this._trigger("change", a, {
					item: n
				}), this.close(a)
			},
			_setAria: function(t) {
				var a = this.menuItems.eq(t.index).attr("id");
				this.button.attr({
					"aria-labelledby": a,
					"aria-activedescendant": a
				}), this.menu.attr("aria-activedescendant", a)
			},
			_setOption: function(t, a) {
				"icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(a.button), this._super(t, a), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "disabled" === t && (this.menuInstance.option("disabled", a), this.button.toggleClass("ui-state-disabled", a).attr("aria-disabled", a), this.element.prop("disabled", a), a ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === t && this._resizeButton()
			},
			_appendTo: function() {
				var t = this.options.appendTo;
				return t && (t = t.jquery || t.nodeType ? E(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
			},
			_toggleAttr: function() {
				this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
			},
			_resizeButton: function() {
				var e = this.options.width;
				e || (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e)
			},
			_resizeMenu: function() {
				this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
			},
			_getCreateOptions: function() {
				return {
					disabled: this.element.prop("disabled")
				}
			},
			_parseOptions: function(t) {
				var a = [];
				t.each(function(o, e) {
					var t = E(e),
						i = t.parent("optgroup");
					a.push({
						element: t,
						index: o,
						value: t.val(),
						label: t.text(),
						optgroup: i.attr("label") || "",
						disabled: i.prop("disabled") || t.prop("disabled")
					})
				}), this.items = a
			},
			_destroy: function() {
				this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
			}
		}), E.widget("ui.slider", E.ui.mouse, {
			version: "1.11.4",
			widgetEventPrefix: "slide",
			options: {
				animate: !1,
				distance: 0,
				max: 100,
				min: 0,
				orientation: "horizontal",
				range: !1,
				step: 1,
				value: 0,
				values: null,
				change: null,
				slide: null,
				start: null,
				stop: null
			},
			numPages: 5,
			_create: function() {
				this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
			},
			_refresh: function() {
				this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
			},
			_createHandles: function() {
				var t = this.options,
					e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
					n = [],
					i, s;
				for (s = t.values && t.values.length || 1, e.length > s && (e.slice(s).remove(), e = e.slice(0, s)), i = e.length; s > i; i++) n.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
				this.handles = e.add(E(n.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
					E(this).data("ui-slider-handle-index", t)
				})
			},
			_createRange: function() {
				var a = this.options,
					e = "";
				a.range ? (!0 === a.range && (a.values ? a.values.length && 2 !== a.values.length ? a.values = [a.values[0], a.values[0]] : E.isArray(a.values) && (a.values = a.values.slice(0)) : a.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
					left: "",
					bottom: ""
				}) : (this.range = E("<div></div>").appendTo(this.element), e = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(e + ("min" === a.range || "max" === a.range ? " ui-slider-range-" + a.range : ""))) : (this.range && this.range.remove(), this.range = null)
			},
			_setupEvents: function() {
				this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
			},
			_destroy: function() {
				this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
			},
			_mouseCapture: function(a) {
				var n = this,
					i = this.options,
					e, o, s, r, l, c, p, h;
				return !i.disabled && (this.elementSize = {
					width: this.element.outerWidth(),
					height: this.element.outerHeight()
				}, this.elementOffset = this.element.offset(), e = {
					x: a.pageX,
					y: a.pageY
				}, o = this._normValueFromMouse(e), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(a) {
					var e = Math.abs(o - n.values(a));
					(s > e || s === e && (a === n._lastChangedValue || n.values(a) === i.min)) && (s = e, r = E(this), l = a)
				}), c = this._start(a, l), !1 !== c && (this._mouseSliding = !0, this._handleIndex = l, r.addClass("ui-state-active").focus(), p = r.offset(), h = !E(a.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
					left: 0,
					top: 0
				} : {
						left: a.pageX - p.left - r.width() / 2,
						top: a.pageY - p.top - r.height() / 2 - (parseInt(r.css("borderTopWidth"), 10) || 0) - (parseInt(r.css("borderBottomWidth"), 10) || 0) + (parseInt(r.css("marginTop"), 10) || 0)
					}, this.handles.hasClass("ui-state-hover") || this._slide(a, l, o), this._animateOff = !0, !0))
			},
			_mouseStart: function() {
				return !0
			},
			_mouseDrag: function(n) {
				var a = {
					x: n.pageX,
					y: n.pageY
				},
					e = this._normValueFromMouse(a);
				return this._slide(n, this._handleIndex, e), !1
			},
			_mouseStop: function(e) {
				return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
			},
			_detectOrientation: function() {
				this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
			},
			_normValueFromMouse: function(t) {
				var a, n, i, o, s;
				return "horizontal" === this.orientation ? (a = this.elementSize.width, n = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (a = this.elementSize.height, n = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), i = n / a, 1 < i && (i = 1), 0 > i && (i = 0), "vertical" === this.orientation && (i = 1 - i), o = this._valueMax() - this._valueMin(), s = this._valueMin() + i * o, this._trimAlignValue(s)
			},
			_start: function(n, a) {
				var e = {
					handle: this.handles[a],
					value: this.value()
				};
				return this.options.values && this.options.values.length && (e.value = this.values(a), e.values = this.values()), this._trigger("start", n, e)
			},
			_slide: function(a, n, e) {
				var i, o, s;
				this.options.values && this.options.values.length ? (i = this.values(n ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === n && e > i || 1 === n && i > e) && (e = i), e !== this.values(n) && (o = this.values(), o[n] = e, s = this._trigger("slide", a, {
					handle: this.handles[n],
					value: e,
					values: o
				}), i = this.values(n ? 0 : 1), !1 !== s && this.values(n, e))) : e !== this.value() && (s = this._trigger("slide", a, {
					handle: this.handles[n],
					value: e
				}), !1 !== s && this.value(e))
			},
			_stop: function(n, a) {
				var e = {
					handle: this.handles[a],
					value: this.value()
				};
				this.options.values && this.options.values.length && (e.value = this.values(a), e.values = this.values()), this._trigger("stop", n, e)
			},
			_change: function(n, a) {
				if (!this._keySliding && !this._mouseSliding) {
					var e = {
						handle: this.handles[a],
						value: this.value()
					};
					this.options.values && this.options.values.length && (e.value = this.values(a), e.values = this.values()), this._lastChangedValue = a, this._trigger("change", n, e)
				}
			},
			value: function(e) {
				return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
			},
			values: function(a, e) {
				var t, n, s;
				if (1 < arguments.length) return this.options.values[a] = this._trimAlignValue(e), this._refreshValue(), this._change(null, a), void 0;
				if (!arguments.length) return this._values();
				if (!E.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(a) : this.value();
				for (t = this.options.values, n = arguments[0], s = 0; t.length > s; s += 1) t[s] = this._trimAlignValue(n[s]), this._change(null, s);
				this._refreshValue()
			},
			_setOption: function(n, e) {
				var t = 0,
					o;
				switch ("range" === n && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" == e && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), E.isArray(this.options.values) && (t = this.options.values.length), "disabled" === n && this.element.toggleClass("ui-state-disabled", !!e), this._super(n, e), n) {
					case "orientation":
						this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === e ? "bottom" : "left", "");
						break;
					case "value":
						this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
						break;
					case "values":
						for (this._animateOff = !0, this._refreshValue(), o = 0; t > o; o += 1) this._change(null, o);
						this._animateOff = !1;
						break;
					case "step":
					case "min":
					case "max":
						this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
						break;
					case "range":
						this._animateOff = !0, this._refresh(), this._animateOff = !1;
				}
			},
			_value: function() {
				var e = this.options.value;
				return e = this._trimAlignValue(e)
			},
			_values: function(t) {
				var a, i, s;
				if (arguments.length) return a = this.options.values[t], a = this._trimAlignValue(a);
				if (this.options.values && this.options.values.length) {
					for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
					return i
				}
				return []
			},
			_trimAlignValue: function(n) {
				if (this._valueMin() >= n) return this._valueMin();
				if (n >= this._valueMax()) return this._valueMax();
				var a = 0 < this.options.step ? this.options.step : 1,
					e = (n - this._valueMin()) % a,
					t = n - e;
				return 2 * Math.abs(e) >= a && (t += 0 < e ? a : -a), parseFloat(t.toFixed(5))
			},
			_calculateNewMax: function() {
				var e = this.options.max,
					o = this._valueMin(),
					n = this.options.step,
					t = Math.floor(+(e - o).toFixed(this._precision()) / n) * n;
				e = t + o, this.max = parseFloat(e.toFixed(this._precision()))
			},
			_precision: function() {
				var e = this._precisionOf(this.options.step);
				return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
			},
			_precisionOf: function(n) {
				var a = "" + n,
					e = a.indexOf(".");
				return -1 === e ? 0 : a.length - e - 1
			},
			_valueMin: function() {
				return this.options.min
			},
			_valueMax: function() {
				return this.max
			},
			_refreshValue: function() {
				var t = this.options.range,
					a = this.options,
					n = this,
					i = !this._animateOff && a.animate,
					o = {},
					s, r, e, l, d;
				this.options.values && this.options.values.length ? this.handles.each(function(t) {
					r = 100 * ((n.values(t) - n._valueMin()) / (n._valueMax() - n._valueMin())), o["horizontal" === n.orientation ? "left" : "bottom"] = r + "%", E(this).stop(1, 1)[i ? "animate" : "css"](o, a.animate), !0 === n.options.range && ("horizontal" === n.orientation ? (0 === t && n.range.stop(1, 1)[i ? "animate" : "css"]({
						left: r + "%"
					}, a.animate), 1 === t && n.range[i ? "animate" : "css"]({
						width: r - s + "%"
					}, {
						queue: !1,
						duration: a.animate
					})) : (0 === t && n.range.stop(1, 1)[i ? "animate" : "css"]({
						bottom: r + "%"
					}, a.animate), 1 === t && n.range[i ? "animate" : "css"]({
						height: r - s + "%"
					}, {
						queue: !1,
						duration: a.animate
					}))), s = r
				}) : (e = this.value(), l = this._valueMin(), d = this._valueMax(), r = d === l ? 0 : 100 * ((e - l) / (d - l)), o["horizontal" === this.orientation ? "left" : "bottom"] = r + "%", this.handle.stop(1, 1)[i ? "animate" : "css"](o, a.animate), "min" === t && "horizontal" === this.orientation && this.range.stop(1, 1)[i ? "animate" : "css"]({
					width: r + "%"
				}, a.animate), "max" === t && "horizontal" === this.orientation && this.range[i ? "animate" : "css"]({
					width: 100 - r + "%"
				}, {
					queue: !1,
					duration: a.animate
				}), "min" === t && "vertical" === this.orientation && this.range.stop(1, 1)[i ? "animate" : "css"]({
					height: r + "%"
				}, a.animate), "max" === t && "vertical" === this.orientation && this.range[i ? "animate" : "css"]({
					height: 100 - r + "%"
				}, {
					queue: !1,
					duration: a.animate
				}))
			},
			_handleEvents: {
				keydown: function(a) {
					var e = E(a.target).data("ui-slider-handle-index"),
						t, n, i, s;
					switch (a.keyCode) {
						case E.ui.keyCode.HOME:
						case E.ui.keyCode.END:
						case E.ui.keyCode.PAGE_UP:
						case E.ui.keyCode.PAGE_DOWN:
						case E.ui.keyCode.UP:
						case E.ui.keyCode.RIGHT:
						case E.ui.keyCode.DOWN:
						case E.ui.keyCode.LEFT:
							if (a.preventDefault(), !this._keySliding && (this._keySliding = !0, E(a.target).addClass("ui-state-active"), t = this._start(a, e), !1 === t)) return;
					}
					switch (s = this.options.step, n = i = this.options.values && this.options.values.length ? this.values(e) : this.value(), a.keyCode) {
						case E.ui.keyCode.HOME:
							i = this._valueMin();
							break;
						case E.ui.keyCode.END:
							i = this._valueMax();
							break;
						case E.ui.keyCode.PAGE_UP:
							i = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
							break;
						case E.ui.keyCode.PAGE_DOWN:
							i = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
							break;
						case E.ui.keyCode.UP:
						case E.ui.keyCode.RIGHT:
							if (n === this._valueMax()) return;
							i = this._trimAlignValue(n + s);
							break;
						case E.ui.keyCode.DOWN:
						case E.ui.keyCode.LEFT:
							if (n === this._valueMin()) return;
							i = this._trimAlignValue(n - s);
					}
					this._slide(a, e, i)
				},
				keyup: function(a) {
					var e = E(a.target).data("ui-slider-handle-index");
					this._keySliding && (this._keySliding = !1, this._stop(a, e), this._change(a, e), E(a.target).removeClass("ui-state-active"))
				}
			}
		}), E.widget("ui.sortable", E.ui.mouse, {
			version: "1.11.4",
			widgetEventPrefix: "sort",
			ready: !1,
			options: {
				appendTo: "parent",
				axis: !1,
				connectWith: !1,
				containment: !1,
				cursor: "auto",
				cursorAt: !1,
				dropOnEmpty: !0,
				forcePlaceholderSize: !1,
				forceHelperSize: !1,
				grid: !1,
				handle: !1,
				helper: "original",
				items: "> *",
				opacity: !1,
				placeholder: !1,
				revert: !1,
				scroll: !0,
				scrollSensitivity: 20,
				scrollSpeed: 20,
				scope: "default",
				tolerance: "intersect",
				zIndex: 1e3,
				activate: null,
				beforeStop: null,
				change: null,
				deactivate: null,
				out: null,
				over: null,
				receive: null,
				remove: null,
				sort: null,
				start: null,
				stop: null,
				update: null
			},
			_isOverAxis: function(n, a, e) {
				return n >= a && a + e > n
			},
			_isFloating: function(e) {
				return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
			},
			_create: function() {
				this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
			},
			_setOption: function(t, a) {
				this._super(t, a), "handle" === t && this._setHandleClassName()
			},
			_setHandleClassName: function() {
				this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), E.each(this.items, function() {
					(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
				})
			},
			_destroy: function() {
				this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
				for (var e = this.items.length - 1; 0 <= e; e--) this.items[e].item.removeData(this.widgetName + "-item");
				return this
			},
			_mouseCapture: function(a, e) {
				var t = null,
					n = !1,
					s = this;
				return !this.reverting && !(this.options.disabled || "static" === this.options.type) && (this._refreshItems(a), E(a.target).parents().each(function() {
					return E.data(this, s.widgetName + "-item") === s ? (t = E(this), !1) : void 0
				}), E.data(a.target, s.widgetName + "-item") === s && (t = E(a.target)), !!t && !!(!this.options.handle || e || (E(this.options.handle, t).find("*").addBack().each(function() {
					this === a.target && (n = !0)
				}), n)) && (this.currentItem = t, this._removeCurrentsFromItems(), !0))
			},
			_mouseStart: function(a, e, t) {
				var n = this.options,
					i, s;
				if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(a), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				}, E.extend(this.offset, {
					click: {
						left: a.pageX - this.offset.left,
						top: a.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(a), this.originalPageX = a.pageX, this.originalPageY = a.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this.domPosition = {
					prev: this.currentItem.prev()[0],
					parent: this.currentItem.parent()[0]
				}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), n.containment && this._setContainment(), n.cursor && "auto" !== n.cursor && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", n.cursor), this.storedStylesheet = E("<style>*{ cursor: " + n.cursor + " !important; }</style>").appendTo(s)), n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", a, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !t)
					for (i = this.containers.length - 1; 0 <= i; i--) this.containers[i]._trigger("activate", a, this._uiHash(this));
				return E.ui.ddmanager && (E.ui.ddmanager.current = this), E.ui.ddmanager && !n.dropBehaviour && E.ui.ddmanager.prepareOffsets(this, a), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(a), !0
			},
			_mouseDrag: function(a) {
				var e = this.options,
					t = !1,
					n, i, s, r;
				for (this.position = this._generatePosition(a), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - a.pageY < e.scrollSensitivity ? this.scrollParent[0].scrollTop = t = this.scrollParent[0].scrollTop + e.scrollSpeed : a.pageY - this.overflowOffset.top < e.scrollSensitivity && (this.scrollParent[0].scrollTop = t = this.scrollParent[0].scrollTop - e.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - a.pageX < e.scrollSensitivity ? this.scrollParent[0].scrollLeft = t = this.scrollParent[0].scrollLeft + e.scrollSpeed : a.pageX - this.overflowOffset.left < e.scrollSensitivity && (this.scrollParent[0].scrollLeft = t = this.scrollParent[0].scrollLeft - e.scrollSpeed)) : (a.pageY - this.document.scrollTop() < e.scrollSensitivity ? t = this.document.scrollTop(this.document.scrollTop() - e.scrollSpeed) : this.window.height() - (a.pageY - this.document.scrollTop()) < e.scrollSensitivity && (t = this.document.scrollTop(this.document.scrollTop() + e.scrollSpeed)), a.pageX - this.document.scrollLeft() < e.scrollSensitivity ? t = this.document.scrollLeft(this.document.scrollLeft() - e.scrollSpeed) : this.window.width() - (a.pageX - this.document.scrollLeft()) < e.scrollSensitivity && (t = this.document.scrollLeft(this.document.scrollLeft() + e.scrollSpeed))), !1 !== t && E.ui.ddmanager && !e.dropBehaviour && E.ui.ddmanager.prepareOffsets(this, a)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; 0 <= n; n--)
					if (i = this.items[n], s = i.item[0], r = this._intersectsWithPointer(i), r && i.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === r ? "next" : "prev"]()[0] !== s && !E.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !E.contains(this.element[0], s))) {
						if (this.direction = 1 === r ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
						this._rearrange(a, i), this._trigger("change", a, this._uiHash());
						break
					} return this._contactContainers(a), E.ui.ddmanager && E.ui.ddmanager.drag(this, a), this._trigger("sort", a, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
			},
			_mouseStop: function(o, e) {
				if (o) {
					if (E.ui.ddmanager && !this.options.dropBehaviour && E.ui.ddmanager.drop(this, o), this.options.revert) {
						var t = this,
							i = this.placeholder.offset(),
							s = this.options.axis,
							n = {};
						s && "x" !== s || (n.left = i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), s && "y" !== s || (n.top = i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, E(this.helper).animate(n, parseInt(this.options.revert, 10) || 500, function() {
							t._clear(o)
						})
					} else this._clear(o, e);
					return !1
				}
			},
			cancel: function() {
				if (this.dragging) {
					this._mouseUp({
						target: null
					}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
					for (var t = this.containers.length - 1; 0 <= t; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
				}
				return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), E.extend(this, {
					helper: null,
					dragging: !1,
					reverting: !1,
					_noFinalSort: null
				}), this.domPosition.prev ? E(this.domPosition.prev).after(this.currentItem) : E(this.domPosition.parent).prepend(this.currentItem)), this
			},
			serialize: function(i) {
				var t = this._getItemsAsjQuery(i && i.connected),
					a = [];
				return i = i || {}, E(t).each(function() {
					var e = (E(i.item || this).attr(i.attribute || "id") || "").match(i.expression || /(.+)[\-=_](.+)/);
					e && a.push((i.key || e[1] + "[]") + "=" + (i.key && i.expression ? e[1] : e[2]))
				}), !a.length && i.key && a.push(i.key + "="), a.join("&")
			},
			toArray: function(t) {
				var n = this._getItemsAsjQuery(t && t.connected),
					a = [];
				return t = t || {}, n.each(function() {
					a.push(E(t.item || this).attr(t.attribute || "id") || "")
				}), a
			},
			_intersectsWith: function(c) {
				var p = this.positionAbs.left,
					e = p + this.helperProportions.width,
					t = this.positionAbs.top,
					i = t + this.helperProportions.height,
					s = c.left,
					n = s + c.width,
					a = c.top,
					o = a + c.height,
					r = this.offset.click.top,
					m = this.offset.click.left,
					l = "x" === this.options.axis || t + r > a && o > t + r,
					u = "y" === this.options.axis || p + m > s && n > p + m;
				return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > c[this.floating ? "width" : "height"] ? l && u : p + this.helperProportions.width / 2 > s && n > e - this.helperProportions.width / 2 && t + this.helperProportions.height / 2 > a && o > i - this.helperProportions.height / 2
			},
			_intersectsWithPointer: function(a) {
				var o = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height),
					e = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width),
					t = this._getDragVerticalDirection(),
					i = this._getDragHorizontalDirection();
				return !!(o && e) && (this.floating ? i && "right" === i || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1))
			},
			_intersectsWithSides: function(n) {
				var a = this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height),
					e = this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width),
					t = this._getDragVerticalDirection(),
					i = this._getDragHorizontalDirection();
				return this.floating && i ? "right" === i && e || "left" === i && !e : t && ("down" === t && a || "up" === t && !a)
			},
			_getDragVerticalDirection: function() {
				var e = this.positionAbs.top - this.lastPositionAbs.top;
				return 0 != e && (0 < e ? "down" : "up")
			},
			_getDragHorizontalDirection: function() {
				var e = this.positionAbs.left - this.lastPositionAbs.left;
				return 0 != e && (0 < e ? "right" : "left")
			},
			refresh: function(e) {
				return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
			},
			_connectWith: function() {
				var e = this.options;
				return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
			},
			_getItemsAsjQuery: function(a) {
				function e() {
					t.push(this)
				}
				var t = [],
					n = [],
					i = this._connectWith(),
					o, s, r, d;
				if (i && a)
					for (o = i.length - 1; 0 <= o; o--)
						for (r = E(i[o], this.document[0]), s = r.length - 1; 0 <= s; s--) d = E.data(r[s], this.widgetFullName), d && d !== this && !d.options.disabled && n.push([E.isFunction(d.options.items) ? d.options.items.call(d.element) : E(d.options.items, d.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), d]);
				for (n.push([E.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
					options: this.options,
					item: this.currentItem
				}) : E(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), o = n.length - 1; 0 <= o; o--) n[o][0].each(e);
				return E(t)
			},
			_removeCurrentsFromItems: function() {
				var n = this.currentItem.find(":data(" + this.widgetName + "-item)");
				this.items = E.grep(this.items, function(a) {
					for (var t = 0; n.length > t; t++)
						if (n[t] === a.item[0]) return !1;
					return !0
				})
			},
			_refreshItems: function(a) {
				this.items = [], this.containers = [this];
				var e = this.items,
					t = [
						[E.isFunction(this.options.items) ? this.options.items.call(this.element[0], a, {
							item: this.currentItem
						}) : E(this.options.items, this.element), this]
					],
					n = this._connectWith(),
					i, o, s, r, l, d, p, h;
				if (n && this.ready)
					for (i = n.length - 1; 0 <= i; i--)
						for (s = E(n[i], this.document[0]), o = s.length - 1; 0 <= o; o--) r = E.data(s[o], this.widgetFullName), r && r !== this && !r.options.disabled && (t.push([E.isFunction(r.options.items) ? r.options.items.call(r.element[0], a, {
							item: this.currentItem
						}) : E(r.options.items, r.element), r]), this.containers.push(r));
				for (i = t.length - 1; 0 <= i; i--)
					for (l = t[i][1], d = t[i][0], o = 0, h = d.length; h > o; o++) p = E(d[o]), p.data(this.widgetName + "-item", l), e.push({
						item: p,
						instance: l,
						width: 0,
						height: 0,
						left: 0,
						top: 0
					})
			},
			refreshPositions: function(a) {
				this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
				var e, n, i, s;
				for (e = this.items.length - 1; 0 <= e; e--) n = this.items[e], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (i = this.options.toleranceElement ? E(this.options.toleranceElement, n.item) : n.item, a || (n.width = i.outerWidth(), n.height = i.outerHeight()), s = i.offset(), n.left = s.left, n.top = s.top);
				if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
				else
					for (e = this.containers.length - 1; 0 <= e; e--) s = this.containers[e].element.offset(), this.containers[e].containerCache.left = s.left, this.containers[e].containerCache.top = s.top, this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
				return this
			},
			_createPlaceholder: function(n) {
				n = n || this;
				var i = n.options,
					o;
				i.placeholder && i.placeholder.constructor !== String || (o = i.placeholder, i.placeholder = {
					element: function() {
						var a = n.currentItem[0].nodeName.toLowerCase(),
							e = E("<" + a + ">", n.document[0]).addClass(o || n.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
						return "tbody" === a ? n._createTrPlaceholder(n.currentItem.find("tr").eq(0), E("<tr>", n.document[0]).appendTo(e)) : "tr" === a ? n._createTrPlaceholder(n.currentItem, e) : "img" === a && e.attr("src", n.currentItem.attr("src")), o || e.css("visibility", "hidden"), e
					},
					update: function(a, t) {
						(!o || i.forcePlaceholderSize) && (t.height() || t.height(n.currentItem.innerHeight() - parseInt(n.currentItem.css("paddingTop") || 0, 10) - parseInt(n.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(n.currentItem.innerWidth() - parseInt(n.currentItem.css("paddingLeft") || 0, 10) - parseInt(n.currentItem.css("paddingRight") || 0, 10)))
					}
				}), n.placeholder = E(i.placeholder.element.call(n.element, n.currentItem)), n.currentItem.after(n.placeholder), i.placeholder.update(n, n.placeholder)
			},
			_createTrPlaceholder: function(n, e) {
				var t = this;
				n.children().each(function() {
					E("<td>&#160;</td>", t.document[0]).attr("colspan", E(this).attr("colspan") || 1).appendTo(e)
				})
			},
			_contactContainers: function(a) {
				var e = null,
					n = null,
					i, o, s, r, l, d, c, p, u, h;
				for (i = this.containers.length - 1; 0 <= i; i--)
					if (!E.contains(this.currentItem[0], this.containers[i].element[0]))
						if (this._intersectsWith(this.containers[i].containerCache)) {
							if (e && E.contains(this.containers[i].element[0], e.element[0])) continue;
							e = this.containers[i], n = i
						} else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", a, this._uiHash(this)), this.containers[i].containerCache.over = 0);
				if (e)
					if (1 === this.containers.length) this.containers[n].containerCache.over || (this.containers[n]._trigger("over", a, this._uiHash(this)), this.containers[n].containerCache.over = 1);
					else {
						for (s = 1e4, r = null, u = e.floating || this._isFloating(this.currentItem), l = u ? "left" : "top", d = u ? "width" : "height", h = u ? "clientX" : "clientY", o = this.items.length - 1; 0 <= o; o--) E.contains(this.containers[n].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (c = this.items[o].item.offset()[l], p = !1, a[h] - c > this.items[o][d] / 2 && (p = !0), s > Math.abs(a[h] - c) && (s = Math.abs(a[h] - c), r = this.items[o], this.direction = p ? "up" : "down"));
						if (!r && !this.options.dropOnEmpty) return;
						if (this.currentContainer === this.containers[n]) return this.currentContainer.containerCache.over || (this.containers[n]._trigger("over", a, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
						r ? this._rearrange(a, r, null, !0) : this._rearrange(a, null, this.containers[n].element, !0), this._trigger("change", a, this._uiHash()), this.containers[n]._trigger("change", a, this._uiHash(this)), this.currentContainer = this.containers[n], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", a, this._uiHash(this)), this.containers[n].containerCache.over = 1
					}
			},
			_createHelper: function(n) {
				var e = this.options,
					t = E.isFunction(e.helper) ? E(e.helper.apply(this.element[0], [n, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
				return t.parents("body").length || E("parent" === e.appendTo ? this.currentItem[0].parentNode : e.appendTo)[0].appendChild(t[0]), t[0] === this.currentItem[0] && (this._storedCSS = {
					width: this.currentItem[0].style.width,
					height: this.currentItem[0].style.height,
					position: this.currentItem.css("position"),
					top: this.currentItem.css("top"),
					left: this.currentItem.css("left")
				}), (!t[0].style.width || e.forceHelperSize) && t.width(this.currentItem.width()), (!t[0].style.height || e.forceHelperSize) && t.height(this.currentItem.height()), t
			},
			_adjustOffsetFromHelper: function(t) {
				"string" == typeof t && (t = t.split(" ")), E.isArray(t) && (t = {
					left: +t[0],
					top: +t[1] || 0
				}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
			},
			_getParentOffset: function() {
				this.offsetParent = this.helper.offsetParent();
				var t = this.offsetParent.offset();
				return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && E.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && E.ui.ie) && (t = {
					top: 0,
					left: 0
				}), {
					top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
					left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
				}
			},
			_getRelativeOffset: function() {
				if ("relative" === this.cssPosition) {
					var e = this.currentItem.position();
					return {
						top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
						left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
					}
				}
				return {
					top: 0,
					left: 0
				}
			},
			_cacheMargins: function() {
				this.margins = {
					left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
					top: parseInt(this.currentItem.css("marginTop"), 10) || 0
				}
			},
			_cacheHelperProportions: function() {
				this.helperProportions = {
					width: this.helper.outerWidth(),
					height: this.helper.outerHeight()
				}
			},
			_setContainment: function() {
				var t = this.options,
					e, i, s;
				"parent" === t.containment && (t.containment = this.helper[0].parentNode), ("document" === t.containment || "window" === t.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === t.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === t.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(t.containment) || (e = E(t.containment)[0], i = E(t.containment).offset(), s = "hidden" !== E(e).css("overflow"), this.containment = [i.left + (parseInt(E(e).css("borderLeftWidth"), 10) || 0) + (parseInt(E(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(E(e).css("borderTopWidth"), 10) || 0) + (parseInt(E(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(E(e).css("borderLeftWidth"), 10) || 0) - (parseInt(E(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(E(e).css("borderTopWidth"), 10) || 0) - (parseInt(E(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
			},
			_convertPositionTo: function(a, e) {
				e || (e = this.position);
				var i = "absolute" === a ? 1 : -1,
					o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && E.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					s = /(html|body)/i.test(o[0].tagName);
				return {
					top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()) * i,
					left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft()) * i
				}
			},
			_generatePosition: function(a) {
				var e = this.options,
					t = a.pageX,
					i = a.pageY,
					o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && E.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					s = /(html|body)/i.test(o[0].tagName),
					r, d;
				return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (a.pageX - this.offset.click.left < this.containment[0] && (t = this.containment[0] + this.offset.click.left), a.pageY - this.offset.click.top < this.containment[1] && (i = this.containment[1] + this.offset.click.top), a.pageX - this.offset.click.left > this.containment[2] && (t = this.containment[2] + this.offset.click.left), a.pageY - this.offset.click.top > this.containment[3] && (i = this.containment[3] + this.offset.click.top)), e.grid && (r = this.originalPageY + Math.round((i - this.originalPageY) / e.grid[1]) * e.grid[1], i = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - e.grid[1] : r + e.grid[1] : r, d = this.originalPageX + Math.round((t - this.originalPageX) / e.grid[0]) * e.grid[0], t = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
					top: i - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
					left: t - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
				}
			},
			_rearrange: function(n, a, e, t) {
				e ? e[0].appendChild(this.placeholder[0]) : a.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? a.item[0] : a.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
				var i = this.counter;
				this._delay(function() {
					i === this.counter && this.refreshPositions(!t)
				})
			},
			_clear: function(o, a) {
				function e(n, a, e) {
					return function(t) {
						e._trigger(n, t, a._uiHash(a))
					}
				}
				this.reverting = !1;
				var t = [],
					i;
				if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
					for (i in this._storedCSS) ("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
					this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
				} else this.currentItem.show();
				for (this.fromOutside && !a && t.push(function(e) {
					this._trigger("receive", e, this._uiHash(this.fromOutside))
				}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || a || t.push(function(e) {
					this._trigger("update", e, this._uiHash())
				}), this !== this.currentContainer && (a || (t.push(function(e) {
					this._trigger("remove", e, this._uiHash())
				}), t.push(function(t) {
					return function(a) {
						t._trigger("receive", a, this._uiHash(this))
					}
				}.call(this, this.currentContainer)), t.push(function(t) {
					return function(a) {
						t._trigger("update", a, this._uiHash(this))
					}
				}.call(this, this.currentContainer)))), i = this.containers.length - 1; 0 <= i; i--) a || t.push(e("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (t.push(e("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
				if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, a || this._trigger("beforeStop", o, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !a) {
					for (i = 0; t.length > i; i++) t[i].call(this, o);
					this._trigger("stop", o, this._uiHash())
				}
				return this.fromOutside = !1, !this.cancelHelperRemoval
			},
			_trigger: function() {
				!1 === E.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
			},
			_uiHash: function(a) {
				var e = a || this;
				return {
					helper: e.helper,
					placeholder: e.placeholder || E([]),
					position: e.position,
					originalPosition: e.originalPosition,
					offset: e.positionAbs,
					item: e.currentItem,
					sender: a ? a.element : null
				}
			}
		}), E.widget("ui.spinner", {
			version: "1.11.4",
			defaultElement: "<input>",
			widgetEventPrefix: "spin",
			options: {
				culture: null,
				icons: {
					down: "ui-icon-triangle-1-s",
					up: "ui-icon-triangle-1-n"
				},
				incremental: !0,
				max: null,
				min: null,
				numberFormat: null,
				page: 10,
				step: 1,
				change: null,
				spin: null,
				start: null,
				stop: null
			},
			_create: function() {
				this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
					beforeunload: function() {
						this.element.removeAttr("autocomplete")
					}
				})
			},
			_getCreateOptions: function() {
				var n = {},
					a = this.element;
				return E.each(["min", "max", "step"], function(t, i) {
					var e = a.attr(i);
					void 0 !== e && e.length && (n[i] = e)
				}), n
			},
			_events: {
				keydown: function(e) {
					this._start(e) && this._keydown(e) && e.preventDefault()
				},
				keyup: "_stop",
				focus: function() {
					this.previous = this.element.val()
				},
				blur: function(e) {
					return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0)
				},
				mousewheel: function(t, a) {
					if (a) {
						if (!this.spinning && !this._start(t)) return !1;
						this._spin((0 < a ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
							this.spinning && this._stop(t)
						}, 100), t.preventDefault()
					}
				},
				"mousedown .ui-spinner-button": function(n) {
					function e() {
						var e = this.element[0] === this.document[0].activeElement;
						e || (this.element.focus(), this.previous = i, this._delay(function() {
							this.previous = i
						}))
					}
					var i;
					i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), n.preventDefault(), e.call(this), this.cancelBlur = !0, this._delay(function() {
						delete this.cancelBlur, e.call(this)
					}), !1 !== this._start(n) && this._repeat(null, E(n.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, n)
				},
				"mouseup .ui-spinner-button": "_stop",
				"mouseenter .ui-spinner-button": function(t) {
					return E(t.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(t) && (this._repeat(null, E(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0
				},
				"mouseleave .ui-spinner-button": "_stop"
			},
			_draw: function() {
				var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
				this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && 0 < e.height() && e.height(e.height()), this.options.disabled && this.disable()
			},
			_keydown: function(n) {
				var e = this.options,
					t = E.ui.keyCode;
				switch (n.keyCode) {
					case t.UP:
						return this._repeat(null, 1, n), !0;
					case t.DOWN:
						return this._repeat(null, -1, n), !0;
					case t.PAGE_UP:
						return this._repeat(null, e.page, n), !0;
					case t.PAGE_DOWN:
						return this._repeat(null, -e.page, n), !0;
				}
				return !1
			},
			_uiSpinnerHtml: function() {
				return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
			},
			_buttonHtml: function() {
				return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
			},
			_start: function(e) {
				return !!(this.spinning || !1 !== this._trigger("start", e)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
			},
			_repeat: function(e, i, n) {
				e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
					this._repeat(40, i, n)
				}, e), this._spin(i * this.options.step, n)
			},
			_spin: function(n, a) {
				var e = this.value() || 0;
				this.counter || (this.counter = 1), e = this._adjustValue(e + n * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", a, {
					value: e
				}) || (this._value(e), this.counter++)
			},
			_increment: function(a) {
				var e = this.options.incremental;
				return e ? E.isFunction(e) ? e(a) : Math.floor(a * a * a / 5e4 - a * a / 500 + 17 * a / 200 + 1) : 1
			},
			_precision: function() {
				var e = this._precisionOf(this.options.step);
				return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
			},
			_precisionOf: function(n) {
				var a = "" + n,
					e = a.indexOf(".");
				return -1 === e ? 0 : a.length - e - 1
			},
			_adjustValue: function(e) {
				var t = this.options,
					n, i;
				return n = null === t.min ? 0 : t.min, i = e - n, i = Math.round(i / t.step) * t.step, e = n + i, e = parseFloat(e.toFixed(this._precision())), null !== t.max && e > t.max ? t.max : null !== t.min && t.min > e ? t.min : e
			},
			_stop: function(e) {
				this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
			},
			_setOption: function(t, a) {
				if ("culture" === t || "numberFormat" === t) {
					var i = this._parse(this.element.val());
					return this.options[t] = a, this.element.val(this._format(i)), void 0
				} ("max" === t || "min" === t || "step" === t) && "string" == typeof a && (a = this._parse(a)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(a.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(a.down)), this._super(t, a), "disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!a), this.element.prop("disabled", !!a), this.buttons.button(a ? "disable" : "enable"))
			},
			_setOptions: a(function(e) {
				this._super(e)
			}),
			_parse: function(e) {
				return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
			},
			_format: function(e) {
				return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
			},
			_refresh: function() {
				this.element.attr({
					"aria-valuemin": this.options.min,
					"aria-valuemax": this.options.max,
					"aria-valuenow": this._parse(this.element.val())
				})
			},
			isValid: function() {
				var e = this.value();
				return null !== e && e === this._adjustValue(e)
			},
			_value: function(e, i) {
				var n;
				"" !== e && (n = this._parse(e), null !== n && (i || (n = this._adjustValue(n)), e = this._format(n))), this.element.val(e), this._refresh()
			},
			_destroy: function() {
				this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
			},
			stepUp: a(function(e) {
				this._stepUp(e)
			}),
			_stepUp: function(e) {
				this._start() && (this._spin((e || 1) * this.options.step), this._stop())
			},
			stepDown: a(function(e) {
				this._stepDown(e)
			}),
			_stepDown: function(e) {
				this._start() && (this._spin((e || 1) * -this.options.step), this._stop())
			},
			pageUp: a(function(e) {
				this._stepUp((e || 1) * this.options.page)
			}),
			pageDown: a(function(e) {
				this._stepDown((e || 1) * this.options.page)
			}),
			value: function(e) {
				return arguments.length ? (a(this._value).call(this, e), void 0) : this._parse(this.element.val())
			},
			widget: function() {
				return this.uiSpinner
			}
		}), E.widget("ui.tabs", {
			version: "1.11.4",
			delay: 300,
			options: {
				active: null,
				collapsible: !1,
				event: "click",
				heightStyle: "content",
				hide: null,
				show: null,
				activate: null,
				beforeActivate: null,
				beforeLoad: null,
				load: null
			},
			_isLocal: function() {
				var t = /#.*$/;
				return function(a) {
					var i, s;
					a = a.cloneNode(!1), i = a.href.replace(t, ""), s = location.href.replace(t, "");
					try {
						i = decodeURIComponent(i)
					} catch (t) { }
					try {
						s = decodeURIComponent(s)
					} catch (t) { }
					return 1 < a.hash.length && i === s
				}
			}(),
			_create: function() {
				var n = this,
					t = this.options;
				this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible), this._processTabs(), t.active = this._initialActive(), E.isArray(t.disabled) && (t.disabled = E.unique(t.disabled.concat(E.map(this.tabs.filter(".ui-state-disabled"), function(e) {
					return n.tabs.index(e)
				}))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(t.active) : E(), this._refresh(), this.active.length && this.load(t.active)
			},
			_initialActive: function() {
				var n = this.options.active,
					t = this.options.collapsible,
					i = location.hash.substring(1);
				return null === n && (i && this.tabs.each(function(e, t) {
					return E(t).attr("aria-controls") === i ? (n = e, !1) : void 0
				}), null === n && (n = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === n || -1 === n) && (n = !!this.tabs.length && 0)), !1 !== n && (n = this.tabs.index(this.tabs.eq(n)), -1 === n && (n = !t && 0)), !t && !1 === n && this.anchors.length && (n = 0), n
			},
			_getCreateEventData: function() {
				return {
					tab: this.active,
					panel: this.active.length ? this._getPanelForTab(this.active) : E()
				}
			},
			_tabKeydown: function(n) {
				var e = E(this.document[0].activeElement).closest("li"),
					t = this.tabs.index(e),
					o = !0;
				if (!this._handlePageNav(n)) {
					switch (n.keyCode) {
						case E.ui.keyCode.RIGHT:
						case E.ui.keyCode.DOWN:
							t++;
							break;
						case E.ui.keyCode.UP:
						case E.ui.keyCode.LEFT:
							o = !1, t--;
							break;
						case E.ui.keyCode.END:
							t = this.anchors.length - 1;
							break;
						case E.ui.keyCode.HOME:
							t = 0;
							break;
						case E.ui.keyCode.SPACE:
							return n.preventDefault(), clearTimeout(this.activating), this._activate(t), void 0;
						case E.ui.keyCode.ENTER:
							return n.preventDefault(), clearTimeout(this.activating), this._activate(t !== this.options.active && t), void 0;
						default:
							return;
					}
					n.preventDefault(), clearTimeout(this.activating), t = this._focusNextTab(t, o), n.ctrlKey || n.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(t).attr("aria-selected", "true"), this.activating = this._delay(function() {
						this.option("active", t)
					}, this.delay))
				}
			},
			_panelKeydown: function(t) {
				this._handlePageNav(t) || t.ctrlKey && t.keyCode === E.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
			},
			_handlePageNav: function(t) {
				return t.altKey && t.keyCode === E.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === E.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
			},
			_findNextTab: function(t, n) {
				function a() {
					return t > i && (t = 0), 0 > t && (t = i), t
				}
				for (var i = this.tabs.length - 1; - 1 !== E.inArray(a(), this.options.disabled);) t = n ? t + 1 : t - 1;
				return t
			},
			_focusNextTab: function(e, t) {
				return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
			},
			_setOption: function(t, a) {
				return "active" === t ? (this._activate(a), void 0) : "disabled" === t ? (this._setupDisabled(a), void 0) : (this._super(t, a), "collapsible" == t && (this.element.toggleClass("ui-tabs-collapsible", a), a || !1 !== this.options.active || this._activate(0)), "event" == t && this._setupEvents(a), "heightStyle" == t && this._setupHeightStyle(a), void 0)
			},
			_sanitizeSelector: function(e) {
				return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
			},
			refresh: function() {
				var a = this.options,
					e = this.tablist.children(":has(a[href])");
				a.disabled = E.map(e.filter(".ui-state-disabled"), function(t) {
					return e.index(t)
				}), this._processTabs(), !1 !== a.active && this.anchors.length ? this.active.length && !E.contains(this.tablist[0], this.active[0]) ? this.tabs.length === a.disabled.length ? (a.active = !1, this.active = E()) : this._activate(this._findNextTab(Math.max(0, a.active - 1), !1)) : a.active = this.tabs.index(this.active) : (a.active = !1, this.active = E()), this._refresh()
			},
			_refresh: function() {
				this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
					"aria-selected": "false",
					"aria-expanded": "false",
					tabIndex: -1
				}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
					"aria-hidden": "true"
				}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				}), this._getPanelForTab(this.active).show().attr({
					"aria-hidden": "false"
				})) : this.tabs.eq(0).attr("tabIndex", 0)
			},
			_processTabs: function() {
				var n = this,
					e = this.tabs,
					t = this.anchors,
					a = this.panels;
				this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) {
					E(this).is(".ui-state-disabled") && t.preventDefault()
				}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
					E(this).closest("li").is(".ui-state-disabled") && this.blur()
				}), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
					role: "tab",
					tabIndex: -1
				}), this.anchors = this.tabs.map(function() {
					return E("a", this)[0]
				}).addClass("ui-tabs-anchor").attr({
					role: "presentation",
					tabIndex: -1
				}), this.panels = E(), this.anchors.each(function(e, t) {
					var a = E(t).uniqueId().attr("id"),
						i = E(t).closest("li"),
						o = i.attr("aria-controls"),
						s, r, d;
					n._isLocal(t) ? (s = t.hash, d = s.substring(1), r = n.element.find(n._sanitizeSelector(s))) : (d = i.attr("aria-controls") || E({}).uniqueId()[0].id, s = "#" + d, r = n.element.find(s), r.length || (r = n._createPanel(d), r.insertAfter(n.panels[e - 1] || n.tablist)), r.attr("aria-live", "polite")), r.length && (n.panels = n.panels.add(r)), o && i.data("ui-tabs-aria-controls", o), i.attr({
						"aria-controls": d,
						"aria-labelledby": a
					}), r.attr("aria-labelledby", a)
				}), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), e && (this._off(e.not(this.tabs)), this._off(t.not(this.anchors)), this._off(a.not(this.panels)))
			},
			_getList: function() {
				return this.tablist || this.element.find("ol,ul").eq(0)
			},
			_createPanel: function(t) {
				return E("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
			},
			_setupDisabled: function(t) {
				E.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
				for (var i = 0, o; o = this.tabs[i]; i++) !0 === t || -1 !== E.inArray(i, t) ? E(o).addClass("ui-state-disabled").attr("aria-disabled", "true") : E(o).removeClass("ui-state-disabled").removeAttr("aria-disabled");
				this.options.disabled = t
			},
			_setupEvents: function(t) {
				var n = {};
				t && E.each(t.split(" "), function(t, a) {
					n[a] = "_eventHandler"
				}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
					click: function(e) {
						e.preventDefault()
					}
				}), this._on(this.anchors, n), this._on(this.tabs, {
					keydown: "_tabKeydown"
				}), this._on(this.panels, {
					keydown: "_panelKeydown"
				}), this._focusable(this.tabs), this._hoverable(this.tabs)
			},
			_setupHeightStyle: function(n) {
				var e = this.element.parent(),
					i;
				"fill" === n ? (i = e.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
					var a = E(this),
						e = a.css("position");
					"absolute" !== e && "fixed" !== e && (i -= a.outerHeight(!0))
				}), this.element.children().not(this.panels).each(function() {
					i -= E(this).outerHeight(!0)
				}), this.panels.each(function() {
					E(this).height(Math.max(0, i - E(this).innerHeight() + E(this).height()))
				}).css("overflow", "auto")) : "auto" == n && (i = 0, this.panels.each(function() {
					i = Math.max(i, E(this).height("").height())
				}).height(i))
			},
			_eventHandler: function(c) {
				var e = this.options,
					t = this.active,
					i = E(c.currentTarget),
					s = i.closest("li"),
					n = s[0] === t[0],
					a = n && e.collapsible,
					o = a ? E() : this._getPanelForTab(s),
					r = t.length ? this._getPanelForTab(t) : E(),
					d = {
						oldTab: t,
						oldPanel: r,
						newTab: a ? E() : s,
						newPanel: o
					};
				c.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || n && !e.collapsible || !1 === this._trigger("beforeActivate", c, d) || (e.active = !a && this.tabs.index(s), this.active = n ? E() : s, this.xhr && this.xhr.abort(), r.length || o.length || E.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(s), c), this._toggle(c, d))
			},
			_toggle: function(r, e) {
				function t() {
					s.running = !1, s._trigger("activate", r, e)
				}

				function i() {
					e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), n.length && s.options.show ? s._show(n, s.options.show, t) : (n.show(), t())
				}
				var s = this,
					n = e.newPanel,
					a = e.oldPanel;
				this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() {
					e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), i()
				}) : (e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), i()), a.attr("aria-hidden", "true"), e.oldTab.attr({
					"aria-selected": "false",
					"aria-expanded": "false"
				}), n.length && a.length ? e.oldTab.attr("tabIndex", -1) : n.length && this.tabs.filter(function() {
					return 0 === E(this).attr("tabIndex")
				}).attr("tabIndex", -1), n.attr("aria-hidden", "false"), e.newTab.attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				})
			},
			_activate: function(n) {
				var e = this._findActive(n),
					i;
				e[0] !== this.active[0] && (e.length || (e = this.active), i = e.find(".ui-tabs-anchor")[0], this._eventHandler({
					target: i,
					currentTarget: i,
					preventDefault: E.noop
				}))
			},
			_findActive: function(t) {
				return !1 === t ? E() : this.tabs.eq(t)
			},
			_getIndex: function(e) {
				return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
			},
			_destroy: function() {
				this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
					E.data(this, "ui-tabs-destroy") ? E(this).remove() : E(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
				}), this.tabs.each(function() {
					var a = E(this),
						e = a.data("ui-tabs-aria-controls");
					e ? a.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : a.removeAttr("aria-controls")
				}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
			},
			enable: function(n) {
				var t = this.options.disabled;
				!1 !== t && (void 0 === n ? t = !1 : (n = this._getIndex(n), t = E.isArray(t) ? E.map(t, function(e) {
					return e === n ? null : e
				}) : E.map(this.tabs, function(a, t) {
					return t === n ? null : t
				})), this._setupDisabled(t))
			},
			disable: function(t) {
				var n = this.options.disabled;
				if (!0 !== n) {
					if (void 0 === t) n = !0;
					else {
						if (t = this._getIndex(t), -1 !== E.inArray(t, n)) return;
						n = E.isArray(n) ? E.merge([t], n).sort() : [t]
					}
					this._setupDisabled(n)
				}
			},
			load: function(t, d) {
				t = this._getIndex(t);
				var l = this,
					i = this.tabs.eq(t),
					s = i.find(".ui-tabs-anchor"),
					c = this._getPanelForTab(i),
					a = {
						tab: i,
						panel: c
					},
					n = function(t, a) {
						"abort" === a && l.panels.stop(!1, !0), i.removeClass("ui-tabs-loading"), c.removeAttr("aria-busy"), t === l.xhr && delete l.xhr
					};
				this._isLocal(s[0]) || (this.xhr = E.ajax(this._ajaxSettings(s, d, a)), this.xhr && "canceled" !== this.xhr.statusText && (i.addClass("ui-tabs-loading"), c.attr("aria-busy", "true"), this.xhr.done(function(i, o, e) {
					setTimeout(function() {
						c.html(i), l._trigger("load", d, a), n(e, o)
					}, 1)
				}).fail(function(t, a) {
					setTimeout(function() {
						n(t, a)
					}, 1)
				})))
			},
			_ajaxSettings: function(t, a, n) {
				var i = this;
				return {
					url: t.attr("href"),
					beforeSend: function(o, e) {
						return i._trigger("beforeLoad", a, E.extend({
							jqXHR: o,
							ajaxSettings: e
						}, n))
					}
				}
			},
			_getPanelForTab: function(a) {
				var e = E(a).attr("aria-controls");
				return this.element.find(this._sanitizeSelector("#" + e))
			}
		}), E.widget("ui.tooltip", {
			version: "1.11.4",
			options: {
				content: function() {
					var t = E(this).attr("title") || "";
					return E("<a>").text(t).html()
				},
				hide: !0,
				items: "[title]:not([disabled])",
				position: {
					my: "left top+15",
					at: "left bottom",
					collision: "flipfit flip"
				},
				show: !0,
				tooltipClass: null,
				track: !1,
				close: null,
				open: null
			},
			_addDescribedBy: function(n, e) {
				var t = (n.attr("aria-describedby") || "").split(/\s+/);
				t.push(e), n.data("ui-tooltip-id", e).attr("aria-describedby", E.trim(t.join(" ")))
			},
			_removeDescribedBy: function(n) {
				var e = n.data("ui-tooltip-id"),
					t = (n.attr("aria-describedby") || "").split(/\s+/),
					o = E.inArray(e, t); - 1 !== o && t.splice(o, 1), n.removeData("ui-tooltip-id"), t = E.trim(t.join(" ")), t ? n.attr("aria-describedby", t) : n.removeAttr("aria-describedby")
			},
			_create: function() {
				this._on({
					mouseover: "open",
					focusin: "open"
				}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = E("<div>").attr({
					role: "log",
					"aria-live": "assertive",
					"aria-relevant": "additions"
				}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
			},
			_setOption: function(n, e) {
				var t = this;
				return "disabled" === n ? (this[e ? "_disable" : "_enable"](), this.options[n] = e, void 0) : (this._super(n, e), "content" == n && E.each(this.tooltips, function(a, n) {
					t._updateContent(n.element)
				}), void 0)
			},
			_disable: function() {
				var n = this;
				E.each(this.tooltips, function(e, t) {
					var a = E.Event("blur");
					a.target = a.currentTarget = t.element[0], n.close(a, !0)
				}), this.element.find(this.options.items).addBack().each(function() {
					var t = E(this);
					t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
				})
			},
			_enable: function() {
				this.element.find(this.options.items).addBack().each(function() {
					var t = E(this);
					t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
				})
			},
			open: function(n) {
				var o = this,
					e = E(n ? n.target : this.element).closest(this.options.items);
				e.length && !e.data("ui-tooltip-id") && (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")), e.data("ui-tooltip-open", !0), n && "mouseover" === n.type && e.parents().each(function() {
					var t = E(this),
						e;
					t.data("ui-tooltip-open") && (e = E.Event("blur"), e.target = e.currentTarget = this, o.close(e, !0)), t.attr("title") && (t.uniqueId(), o.parents[this.id] = {
						element: this,
						title: t.attr("title")
					}, t.attr("title", ""))
				}), this._registerCloseHandlers(n, e), this._updateContent(e, n))
			},
			_updateContent: function(i, o) {
				var e = this.options.content,
					r = this,
					s = o ? o.type : null,
					t;
				return "string" == typeof e ? this._open(o, i, e) : (t = e.call(i[0], function(e) {
					r._delay(function() {
						i.data("ui-tooltip-open") && (o && (o.type = s), this._open(o, i, e))
					})
				}), t && this._open(o, i, t), void 0)
			},
			_open: function(a, e, t) {
				function i(e) {
					o.of = e, s.is(":hidden") || s.position(o)
				}
				var o = E.extend({}, this.options.position),
					n, s, r, u;
				if (t) {
					if (n = this._find(e)) return n.tooltip.find(".ui-tooltip-content").html(t), void 0;
					e.is("[title]") && (a && "mouseover" === a.type ? e.attr("title", "") : e.removeAttr("title")), n = this._tooltip(e), s = n.tooltip, this._addDescribedBy(e, s.attr("id")), s.find(".ui-tooltip-content").html(t), this.liveRegion.children().hide(), t.clone ? (u = t.clone(), u.removeAttr("id").find("[id]").removeAttr("id")) : u = t, E("<div>").html(u).appendTo(this.liveRegion), this.options.track && a && /^mouse/.test(a.type) ? (this._on(this.document, {
						mousemove: i
					}), i(a)) : s.position(E.extend({
						of: e
					}, this.options.position)), s.hide(), this._show(s, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
						s.is(":visible") && (i(o.of), clearInterval(r))
					}, E.fx.interval)), this._trigger("open", a, {
						tooltip: s
					})
				}
			},
			_registerCloseHandlers: function(n, i) {
				var e = {
					keyup: function(a) {
						if (a.keyCode === E.ui.keyCode.ESCAPE) {
							var e = E.Event(a);
							e.currentTarget = i[0], this.close(e, !0)
						}
					}
				};
				i[0] !== this.element[0] && (e.remove = function() {
					this._removeTooltip(this._find(i).tooltip)
				}), n && "mouseover" !== n.type || (e.mouseleave = "close"), n && "focusin" !== n.type || (e.focusout = "close"), this._on(!0, i, e)
			},
			close: function(i) {
				var s = this,
					e = E(i ? i.currentTarget : this.element),
					t = this._find(e),
					n;
				return t ? (n = t.tooltip, t.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && !e.attr("title") && e.attr("title", e.data("ui-tooltip-title")), this._removeDescribedBy(e), t.hiding = !0, n.stop(!0), this._hide(n, this.options.hide, function() {
					s._removeTooltip(E(this))
				}), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), i && "mouseleave" === i.type && E.each(this.parents, function(a, e) {
					E(e.element).attr("title", e.title), delete s.parents[a]
				}), t.closing = !0, this._trigger("close", i, {
					tooltip: n
				}), t.hiding || (t.closing = !1)), void 0) : (e.removeData("ui-tooltip-open"), void 0)
			},
			_tooltip: function(n) {
				var e = E("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
					t = e.uniqueId().attr("id");
				return E("<div>").addClass("ui-tooltip-content").appendTo(e), e.appendTo(this.document[0].body), this.tooltips[t] = {
					element: n,
					tooltip: e
				}
			},
			_find: function(t) {
				var a = t.data("ui-tooltip-id");
				return a ? this.tooltips[a] : null
			},
			_removeTooltip: function(e) {
				e.remove(), delete this.tooltips[e.attr("id")]
			},
			_destroy: function() {
				var a = this;
				E.each(this.tooltips, function(e, t) {
					var i = E.Event("blur"),
						o = t.element;
					i.target = i.currentTarget = o[0], a.close(i, !0), E("#" + e).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
				}), this.liveRegion.remove()
			}
		})
}), ! function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(m) {
	m.extend(m.fn, {
		validate: function(t) {
			if (!this.length) return void (t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var s = m.data(this[0], "validator");
			return s ? s : (this.attr("novalidate", "novalidate"), s = new m.validator(t, this[0]), m.data(this[0], "validator", s), s.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
				s.settings.submitHandler && (s.submitButton = t.target), m(this).hasClass("cancel") && (s.cancelSubmit = !0), void 0 !== m(this).attr("formnovalidate") && (s.cancelSubmit = !0)
			}), this.on("submit.validate", function(t) {
				function a() {
					var e, a;
					return !s.settings.submitHandler || (s.submitButton && (e = m("<input type='hidden'/>").attr("name", s.submitButton.name).val(m(s.submitButton).val()).appendTo(s.currentForm)), a = s.settings.submitHandler.call(s, s.currentForm, t), s.submitButton && e.remove(), void 0 !== a && a)
				}
				return s.settings.debug && t.preventDefault(), s.cancelSubmit ? (s.cancelSubmit = !1, a()) : s.form() ? s.pendingRequest ? (s.formSubmitted = !0, !1) : a() : (s.focusInvalid(), !1)
			})), s)
		},
		valid: function() {
			var t, n, o;
			return m(this[0]).is("form") ? t = this.validate().form() : (o = [], t = !0, n = m(this[0].form).validate(), this.each(function() {
				t = n.element(this) && t, t || (o = o.concat(n.errorList))
			}), n.errorList = o), t
		},
		rules: function(e, t) {
			var n = this[0],
				a, i, o, d, h, g;
			if (null != n && null != n.form) {
				if (e) switch (a = m.data(n.form, "validator").settings, i = a.rules, o = m.validator.staticRules(n), e) {
					case "add":
						m.extend(o, m.validator.normalizeRule(t)), delete o.messages, i[n.name] = o, t.messages && (a.messages[n.name] = m.extend(a.messages[n.name], t.messages));
						break;
					case "remove":
						return t ? (g = {}, m.each(t.split(/\s/), function(t, e) {
							g[e] = o[e], delete o[e], "required" === e && m(n).removeAttr("aria-required")
						}), g) : (delete i[n.name], o);
				}
				return d = m.validator.normalizeRules(m.extend({}, m.validator.classRules(n), m.validator.attributeRules(n), m.validator.dataRules(n), m.validator.staticRules(n)), n), d.required && (h = d.required, delete d.required, d = m.extend({
					required: h
				}, d), m(n).attr("aria-required", "true")), d.remote && (h = d.remote, delete d.remote, d = m.extend(d, {
					remote: h
				})), d
			}
		}
	}), m.extend(m.expr.pseudos || m.expr[":"], {
		blank: function(t) {
			return !m.trim("" + m(t).val())
		},
		filled: function(t) {
			var e = m(t).val();
			return null !== e && !!m.trim("" + e)
		},
		unchecked: function(t) {
			return !m(t).prop("checked")
		}
	}), m.validator = function(t, e) {
		this.settings = m.extend(!0, {}, m.validator.defaults, t), this.currentForm = e, this.init()
	}, m.validator.format = function(n, t) {
		return 1 === arguments.length ? function() {
			var e = m.makeArray(arguments);
			return e.unshift(n), m.validator.format.apply(this, e)
		} : void 0 === t ? n : (2 < arguments.length && t.constructor !== Array && (t = m.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), m.each(t, function(e, t) {
			n = n.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
				return t
			})
		}), n)
	}, m.extend(m.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: m([]),
			errorLabelContainer: m([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(t) {
				this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
			},
			onfocusout: function(t) {
				this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
			},
			onkeyup: function(t, e) {
				9 === e.which && "" === this.elementValue(t) || -1 !== m.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
			},
			onclick: function(t) {
				t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
			},
			highlight: function(t, e, a) {
				"radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(a) : m(t).addClass(e).removeClass(a)
			},
			unhighlight: function(t, e, a) {
				"radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(a) : m(t).removeClass(e).addClass(a)
			}
		},
		setDefaults: function(t) {
			m.extend(m.validator.defaults, t)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "Please enter the same value again.",
			maxlength: m.validator.format("Please enter no more than {0} characters."),
			minlength: m.validator.format("Please enter at least {0} characters."),
			rangelength: m.validator.format("Please enter a value between {0} and {1} characters long."),
			range: m.validator.format("Please enter a value between {0} and {1}."),
			max: m.validator.format("Please enter a value less than or equal to {0}."),
			min: m.validator.format("Please enter a value greater than or equal to {0}."),
			step: m.validator.format("Please enter a multiple of {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function t(e) {
					!this.form && this.hasAttribute("contenteditable") && (this.form = m(this).closest("form")[0]);
					var t = m.data(this.form, "validator"),
						a = "on" + e.type.replace(/^validate/, ""),
						n = t.settings;
					n[a] && !m(this).is(n.ignore) && n[a].call(t, this, e)
				}
				this.labelContainer = m(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || m(this.currentForm), this.containers = m(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var n = this.groups = {},
					o;
				m.each(this.settings.groups, function(i, e) {
					"string" == typeof e && (e = e.split(/\s/)), m.each(e, function(e, t) {
						n[t] = i
					})
				}), o = this.settings.rules, m.each(o, function(t, e) {
					o[t] = m.validator.normalizeRule(e)
				}), m(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && m(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), m(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
			},
			form: function() {
				return this.checkForm(), m.extend(this.submitted, this.errorMap), this.invalid = m.extend({}, this.errorMap), this.valid() || m(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var a = 0, n = this.currentElements = this.elements(); n[a]; a++) this.check(n[a]);
				return this.valid()
			},
			element: function(e) {
				var a = this.clean(e),
					d = this.validationTargetFor(a),
					n = this,
					o = !0,
					t, c;
				return void 0 === d ? delete this.invalid[a.name] : (this.prepareElement(d), this.currentElements = m(d), c = this.groups[d.name], c && m.each(this.groups, function(i, e) {
					e === c && i !== d.name && (a = n.validationTargetFor(n.clean(n.findByName(i))), a && a.name in n.invalid && (n.currentElements.push(a), o = n.check(a) && o))
				}), t = !1 !== this.check(d), o = o && t, this.invalid[d.name] = !t, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), m(e).attr("aria-invalid", !t)), o
			},
			showErrors: function(a) {
				if (a) {
					var n = this;
					m.extend(this.errorMap, a), this.errorList = m.map(this.errorMap, function(a, e) {
						return {
							message: a,
							element: n.findByName(e)[0]
						}
					}), this.successList = m.grep(this.successList, function(e) {
						return !(e.name in a)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				m.fn.resetForm && m(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
				var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				this.resetElements(t)
			},
			resetElements: function(a) {
				var e;
				if (this.settings.unhighlight)
					for (e = 0; a[e]; e++) this.settings.unhighlight.call(this, a[e], this.settings.errorClass, ""), this.findByName(a[e].name).removeClass(this.settings.validClass);
				else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(n) {
				var e = 0,
					i;
				for (i in n) n[i] && e++;
				return e
			},
			hideErrors: function() {
				this.hideThese(this.toHide)
			},
			hideThese: function(t) {
				t.not(this.containers).text(""), this.addWrapper(t).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					m(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (t) { }
			},
			findLastActive: function() {
				var a = this.lastActive;
				return a && 1 === m.grep(this.errorList, function(e) {
					return e.element.name === a.name
				}).length && a
			},
			elements: function() {
				var t = this,
					e = {};
				return m(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
					var a = this.name || m(this).attr("name");
					return !a && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = m(this).closest("form")[0]), !(a in e) && t.objectLength(m(this).rules()) && (e[a] = !0, !0)
				})
			},
			clean: function(t) {
				return m(t)[0]
			},
			errors: function() {
				var t = this.settings.errorClass.split(" ").join(".");
				return m(this.settings.errorElement + "." + t, this.errorContext)
			},
			resetInternals: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = m([]), this.toHide = m([])
			},
			reset: function() {
				this.resetInternals(), this.currentElements = m([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(t) {
				this.reset(), this.toHide = this.errorsFor(t)
			},
			elementValue: function(t) {
				var a = m(t),
					i = t.type,
					e, s;
				return "radio" === i || "checkbox" === i ? this.findByName(t.name).filter(":checked").val() : "number" === i && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" : a.val() : (e = t.hasAttribute("contenteditable") ? a.text() : a.val(), "file" === i ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : (s = e.lastIndexOf("/"), 0 <= s ? e.substr(s + 1) : (s = e.lastIndexOf("\\"), 0 <= s ? e.substr(s + 1) : e)) : "string" == typeof e ? e.replace(/\r/g, "") : e)
			},
			check: function(t) {
				t = this.validationTargetFor(this.clean(t));
				var e = m(t).rules(),
					n = m.map(e, function(a, e) {
						return e
					}).length,
					i = !1,
					o = this.elementValue(t),
					d, c, h;
				if ("function" == typeof e.normalizer) {
					if (o = e.normalizer.call(t, o), "string" != typeof o) throw new TypeError("The normalizer should return a string value.");
					delete e.normalizer
				}
				for (c in e) {
					h = {
						method: c,
						parameters: e[c]
					};
					try {
						if (d = m.validator.methods[c].call(this, o, t, h.parameters), "dependency-mismatch" === d && 1 === n) {
							i = !0;
							continue
						}
						if (i = !1, "pending" === d) return void (this.toHide = this.toHide.not(this.errorsFor(t)));
						if (!d) return this.formatAndAdd(t, h), !1
					} catch (a) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + h.method + "' method.", a), a instanceof TypeError && (a.message += ".  Exception occurred when checking element " + t.id + ", check the '" + h.method + "' method."), a
					}
				}
				if (!i) return this.objectLength(e) && this.successList.push(t), !0
			},
			customDataMessage: function(t, e) {
				return m(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || m(t).data("msg")
			},
			customMessage: function(n, e) {
				var t = this.settings.messages[n];
				return t && (t.constructor === String ? t : t[e])
			},
			findDefined: function() {
				for (var t = 0; t < arguments.length; t++)
					if (void 0 !== arguments[t]) return arguments[t]
			},
			defaultMessage: function(e, t) {
				"string" == typeof t && (t = {
					method: t
				});
				var a = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || void 0, m.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
					s = /\$?\{(\d+)\}/g;
				return "function" == typeof a ? a = a.call(this, t.parameters, e) : s.test(a) && (a = m.validator.format(a.replace(s, "{$1}"), t.parameters)), a
			},
			formatAndAdd: function(n, e) {
				var t = this.defaultMessage(n, e);
				this.errorList.push({
					message: t,
					element: n,
					method: e.method
				}), this.errorMap[n.name] = t, this.submitted[n.name] = t
			},
			addWrapper: function(t) {
				return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
			},
			defaultShowErrors: function() {
				var a, n, o;
				for (a = 0; this.errorList[a]; a++) o = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, o.element, this.settings.errorClass, this.settings.validClass), this.showLabel(o.element, o.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
				if (this.settings.unhighlight)
					for (a = 0, n = this.validElements(); n[a]; a++) this.settings.unhighlight.call(this, n[a], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return m(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(e, t) {
				var n = this.errorsFor(e),
					a = this.idOrName(e),
					s = m(e).attr("aria-describedby"),
					d, c, h, g;
				n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.html(t)) : (n = m("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(t || ""), d = n, this.settings.wrapper && (d = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, m(e)) : d.insertAfter(e), n.is("label") ? n.attr("for", a) : 0 === n.parents("label[for='" + this.escapeCssMeta(a) + "']").length && (h = n.attr("id"), s ? s.match(new RegExp("\\b" + this.escapeCssMeta(h) + "\\b")) || (s += " " + h) : s = h, m(e).attr("aria-describedby", s), c = this.groups[e.name], c && (g = this, m.each(g.groups, function(t, e) {
					e === c && m("[name='" + g.escapeCssMeta(t) + "']", g.currentForm).attr("aria-describedby", n.attr("id"))
				})))), !t && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, e)), this.toShow = this.toShow.add(n)
			},
			errorsFor: function(e) {
				var t = this.escapeCssMeta(this.idOrName(e)),
					a = m(e).attr("aria-describedby"),
					n = "label[for='" + t + "'], label[for='" + t + "'] *";
				return a && (n = n + ", #" + this.escapeCssMeta(a).replace(/\s+/g, ", #")), this.errors().filter(n)
			},
			escapeCssMeta: function(t) {
				return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
			},
			idOrName: function(t) {
				return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
			},
			validationTargetFor: function(t) {
				return this.checkable(t) && (t = this.findByName(t.name)), m(t).not(this.settings.ignore)[0]
			},
			checkable: function(t) {
				return /radio|checkbox/i.test(t.type)
			},
			findByName: function(t) {
				return m(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
			},
			getLength: function(t, e) {
				switch (e.nodeName.toLowerCase()) {
					case "select":
						return m("option:selected", e).length;
					case "input":
						if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length;
				}
				return t.length
			},
			depend: function(a, e) {
				return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, e)
			},
			dependTypes: {
				boolean: function(t) {
					return t
				},
				string: function(t, e) {
					return !!m(t, e.form).length
				},
				function: function(a, e) {
					return a(e)
				}
			},
			optional: function(t) {
				var e = this.elementValue(t);
				return !m.validator.methods.required.call(this, e, t) && "dependency-mismatch"
			},
			startRequest: function(t) {
				this.pending[t.name] || (this.pendingRequest++, m(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
			},
			stopRequest: function(t, e) {
				this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[t.name], m(t).removeClass(this.settings.pendingClass), e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (m(this.currentForm).submit(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (m(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(t, e) {
				return e = "string" == typeof e && e || "remote", m.data(t, "previousValue") || m.data(t, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(t, {
						method: e
					})
				})
			},
			destroy: function() {
				this.resetForm(), m(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(t, e) {
			t.constructor === String ? this.classRuleSettings[t] = e : m.extend(this.classRuleSettings, t)
		},
		classRules: function(t) {
			var e = {},
				a = m(t).attr("class");
			return a && m.each(a.split(" "), function() {
				this in m.validator.classRuleSettings && m.extend(e, m.validator.classRuleSettings[this])
			}), e
		},
		normalizeAttributeRule: function(n, e, t, a) {
			/min|max|step/.test(t) && (null === e || /number|range|text/.test(e)) && (a = +a, isNaN(a) && (a = void 0)), a || 0 === a ? n[t] = a : e === t && "range" !== e && (n[t] = !0)
		},
		attributeRules: function(t) {
			var a = {},
				i = m(t),
				e = t.getAttribute("type"),
				n, r;
			for (n in m.validator.methods) "required" === n ? (r = t.getAttribute(n), "" === r && (r = !0), r = !!r) : r = i.attr(n), this.normalizeAttributeRule(a, e, n, r);
			return a.maxlength && /-1|2147483647|524288/.test(a.maxlength) && delete a.maxlength, a
		},
		dataRules: function(t) {
			var a = {},
				i = m(t),
				e = t.getAttribute("type"),
				n, r;
			for (n in m.validator.methods) r = i.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(a, e, n, r);
			return a
		},
		staticRules: function(t) {
			var e = {},
				n = m.data(t.form, "validator");
			return n.settings.rules && (e = m.validator.normalizeRule(n.settings.rules[t.name]) || {}), e
		},
		normalizeRules: function(t, a) {
			return m.each(t, function(i, n) {
				if (!1 === n) return void delete t[i];
				if (n.param || n.depends) {
					var o = !0;
					switch (typeof n.depends) {
						case "string":
							o = !!m(n.depends, a.form).length;
							break;
						case "function":
							o = n.depends.call(a, a);
					}
					o ? t[i] = void 0 === n.param || n.param : (m.data(a.form, "validator").resetElements(m(a)), delete t[i])
				}
			}), m.each(t, function(e, n) {
				t[e] = m.isFunction(n) && "normalizer" !== e ? n(a) : n
			}), m.each(["minlength", "maxlength"], function() {
				t[this] && (t[this] = +t[this])
			}), m.each(["rangelength", "range"], function() {
				var a;
				t[this] && (m.isArray(t[this]) ? t[this] = [+t[this][0], +t[this][1]] : "string" == typeof t[this] && (a = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [+a[0], +a[1]]))
			}), m.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
		},
		normalizeRule: function(t) {
			if ("string" == typeof t) {
				var n = {};
				m.each(t.split(/\s/), function() {
					n[this] = !0
				}), t = n
			}
			return t
		},
		addMethod: function(t, e, a) {
			m.validator.methods[t] = e, m.validator.messages[t] = void 0 === a ? m.validator.messages[t] : a, 3 > e.length && m.validator.addClassRules(t, m.validator.normalizeRule(t))
		},
		methods: {
			required: function(e, t, a) {
				if (!this.depend(a, t)) return "dependency-mismatch";
				if ("select" === t.nodeName.toLowerCase()) {
					var n = m(t).val();
					return n && 0 < n.length
				}
				return this.checkable(t) ? 0 < this.getLength(e, t) : 0 < e.length
			},
			email: function(a, e) {
				return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
			},
			url: function(a, e) {
				return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
			},
			date: function(a, e) {
				return this.optional(e) || !/Invalid|NaN/.test(new Date(a).toString())
			},
			dateISO: function(a, e) {
				return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
			},
			number: function(a, e) {
				return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			},
			digits: function(a, e) {
				return this.optional(e) || /^\d+$/.test(a)
			},
			minlength: function(e, t, a) {
				var n = m.isArray(e) ? e.length : this.getLength(e, t);
				return this.optional(t) || n >= a
			},
			maxlength: function(e, t, a) {
				var n = m.isArray(e) ? e.length : this.getLength(e, t);
				return this.optional(t) || n <= a
			},
			rangelength: function(e, t, a) {
				var n = m.isArray(e) ? e.length : this.getLength(e, t);
				return this.optional(t) || n >= a[0] && n <= a[1]
			},
			min: function(n, e, t) {
				return this.optional(e) || n >= t
			},
			max: function(n, e, t) {
				return this.optional(e) || n <= t
			},
			range: function(n, e, t) {
				return this.optional(e) || n >= t[0] && n <= t[1]
			},
			step: function(e, t, a) {
				var n = m(t).attr("type"),
					o = new RegExp("\\b" + n + "\\b"),
					s = n && !o.test("text,number,range"),
					i = function(a) {
						var e = ("" + a).match(/(?:\.(\d+))?$/);
						return e && e[1] ? e[1].length : 0
					},
					r = function(t) {
						return Math.round(t * Math.pow(10, p))
					},
					d = !0,
					p;
				if (s) throw new Error("Step attribute on input type " + n + " is not supported.");
				return p = i(a), (i(e) > p || 0 != r(e) % r(a)) && (d = !1), this.optional(t) || d
			},
			equalTo: function(e, t, a) {
				var n = m(a);
				return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
					m(t).valid()
				}), e === n.val()
			},
			remote: function(d, n, e, o) {
				if (this.optional(n)) return "dependency-mismatch";
				o = "string" == typeof o && o || "remote";
				var c = this.previousValue(n, o),
					r, t, u;
				return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), c.originalMessage = c.originalMessage || this.settings.messages[n.name][o], this.settings.messages[n.name][o] = c.message, e = "string" == typeof e && {
					url: e
				} || e, u = m.param(m.extend({
					data: d
				}, e.data)), c.old === u ? c.valid : (c.old = u, r = this, this.startRequest(n), t = {}, t[n.name] = d, m.ajax(m.extend(!0, {
					mode: "abort",
					port: "validate" + n.name,
					dataType: "json",
					data: t,
					context: r.currentForm,
					success: function(i) {
						var e = !0 === i || "true" === i,
							t, s, u;
						r.settings.messages[n.name][o] = c.originalMessage, e ? (u = r.formSubmitted, r.resetInternals(), r.toHide = r.errorsFor(n), r.formSubmitted = u, r.successList.push(n), r.invalid[n.name] = !1, r.showErrors()) : (t = {}, s = i || r.defaultMessage(n, {
							method: o,
							parameters: d
						}), t[n.name] = c.message = s, r.invalid[n.name] = !0, r.showErrors(t)), c.valid = e, r.stopRequest(n, e)
					}
				}, e)), "pending")
			}
		}
	});
	var s = {},
		t;
	return m.ajaxPrefilter ? m.ajaxPrefilter(function(e, t, a) {
		var n = e.port;
		"abort" === e.mode && (s[n] && s[n].abort(), s[n] = a)
	}) : (t = m.ajax, m.ajax = function(a) {
		var n = ("mode" in a ? a : m.ajaxSettings).mode,
			i = ("port" in a ? a : m.ajaxSettings).port;
		return "abort" === n ? (s[i] && s[i].abort(), s[i] = t.apply(this, arguments), s[i]) : t.apply(this, arguments)
	}), m
});
var CryptoJS = CryptoJS || function(i, e) {
	var a = {},
		o = a.lib = {},
		l = function() { },
		s = o.Base = {
			extend: function(e) {
				l.prototype = this;
				var t = new l;
				return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
					t.$super.init.apply(this, arguments)
				}), t.init.prototype = t, t.$super = this, t
			},
			create: function() {
				var e = this.extend();
				return e.init.apply(e, arguments), e
			},
			init: function() { },
			mixIn: function(e) {
				for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
				e.hasOwnProperty("toString") && (this.toString = e.toString)
			},
			clone: function() {
				return this.init.prototype.extend(this)
			}
		},
		t = o.WordArray = s.extend({
			init: function(t, n) {
				t = this.words = t || [], this.sigBytes = n == e ? 4 * t.length : n
			},
			toString: function(e) {
				return (e || d).stringify(this)
			},
			concat: function(t) {
				var n = this.words,
					i = t.words,
					e = this.sigBytes;
				if (t = t.sigBytes, this.clamp(), e % 4)
					for (var o = 0; o < t; o++) n[e + o >>> 2] |= (255 & i[o >>> 2] >>> 24 - 8 * (o % 4)) << 24 - 8 * ((e + o) % 4);
				else if (65535 < i.length)
					for (o = 0; o < t; o += 4) n[e + o >>> 2] = i[o >>> 2];
				else n.push.apply(n, i);
				return this.sigBytes += t, this
			},
			clamp: function() {
				var e = this.words,
					t = this.sigBytes;
				e[t >>> 2] &= 4294967295 << 32 - 8 * (t % 4), e.length = i.ceil(t / 4)
			},
			clone: function() {
				var e = s.clone.call(this);
				return e.words = this.words.slice(0), e
			},
			random: function(n) {
				for (var a = [], o = 0; o < n; o += 4) a.push(0 | 4294967296 * i.random());
				return new t.init(a, n)
			}
		}),
		r = a.enc = {},
		d = r.Hex = {
			stringify: function(t) {
				var n = t.words;
				t = t.sigBytes;
				for (var i = [], e = 0, o; e < t; e++) o = 255 & n[e >>> 2] >>> 24 - 8 * (e % 4), i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16));
				return i.join("")
			},
			parse: function(n) {
				for (var a = n.length, i = [], e = 0; e < a; e += 2) i[e >>> 3] |= parseInt(n.substr(e, 2), 16) << 24 - 4 * (e % 8);
				return new t.init(i, a / 2)
			}
		},
		c = r.Latin1 = {
			stringify: function(t) {
				var n = t.words;
				t = t.sigBytes;
				for (var i = [], e = 0; e < t; e++) i.push(String.fromCharCode(255 & n[e >>> 2] >>> 24 - 8 * (e % 4)));
				return i.join("")
			},
			parse: function(n) {
				for (var a = n.length, i = [], e = 0; e < a; e++) i[e >>> 2] |= (255 & n.charCodeAt(e)) << 24 - 8 * (e % 4);
				return new t.init(i, a)
			}
		},
		p = r.Utf8 = {
			stringify: function(e) {
				try {
					return decodeURIComponent(escape(c.stringify(e)))
				} catch (e) {
					throw Error("Malformed UTF-8 data")
				}
			},
			parse: function(e) {
				return c.parse(unescape(encodeURIComponent(e)))
			}
		},
		u = o.BufferedBlockAlgorithm = s.extend({
			reset: function() {
				this._data = new t.init, this._nDataBytes = 0
			},
			_append: function(e) {
				"string" == typeof e && (e = p.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
			},
			_process: function(n) {
				var o = this._data,
					s = o.words,
					e = o.sigBytes,
					r = this.blockSize,
					l = e / (4 * r),
					l = n ? i.ceil(l) : i.max((0 | l) - this._minBufferSize, 0);
				if (n = l * r, e = i.min(4 * n, e), n) {
					for (var d = 0; d < n; d += r) this._doProcessBlock(s, d);
					d = s.splice(0, n), o.sigBytes -= e
				}
				return new t.init(d, e)
			},
			clone: function() {
				var e = s.clone.call(this);
				return e._data = this._data.clone(), e
			},
			_minBufferSize: 0
		});
	o.Hasher = u.extend({
		cfg: s.extend(),
		init: function(e) {
			this.cfg = this.cfg.extend(e), this.reset()
		},
		reset: function() {
			u.reset.call(this), this._doReset()
		},
		update: function(e) {
			return this._append(e), this._process(), this
		},
		finalize: function(e) {
			return e && this._append(e), this._doFinalize()
		},
		blockSize: 16,
		_createHelper: function(t) {
			return function(a, n) {
				return new t.init(n).finalize(a)
			}
		},
		_createHmacHelper: function(t) {
			return function(a, n) {
				return new m.HMAC.init(t, n).finalize(a)
			}
		}
	});
	var m = a.algo = {};
	return a
}(Math);
(function() {
	var e = CryptoJS,
		a = e.lib.WordArray;
	e.enc.Base64 = {
		stringify: function(e) {
			var a = e.words,
				n = e.sigBytes,
				i = this._map;
			e.clamp(), e = [];
			for (var t = 0; t < n; t += 3)
				for (var o = (255 & a[t >>> 2] >>> 24 - 8 * (t % 4)) << 16 | (255 & a[t + 1 >>> 2] >>> 24 - 8 * ((t + 1) % 4)) << 8 | 255 & a[t + 2 >>> 2] >>> 24 - 8 * ((t + 2) % 4), s = 0; 4 > s && t + .75 * s < n; s++) e.push(i.charAt(63 & o >>> 6 * (3 - s)));
			if (a = i.charAt(64))
				for (; e.length % 4;) e.push(a);
			return e.join("")
		},
		parse: function(e) {
			var n = e.length,
				i = this._map,
				o = i.charAt(64);
			o && (o = e.indexOf(o), -1 != o && (n = o));
			for (var o = [], s = 0, d = 0; d < n; d++)
				if (d % 4) {
					var c = i.indexOf(e.charAt(d - 1)) << 2 * (d % 4),
						p = i.indexOf(e.charAt(d)) >>> 6 - 2 * (d % 4);
					o[s >>> 2] |= (c | p) << 24 - 8 * (s % 4), s++
				} return a.create(o, s)
		},
		_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
	}
})(),
	function(i) {
		function o(t, i, n, a, o, e, s) {
			return t = t + (i & n | ~i & a) + o + s, (t << e | t >>> 32 - e) + i
		}

		function p(t, i, n, a, o, e, s) {
			return t = t + (i & a | n & ~a) + o + s, (t << e | t >>> 32 - e) + i
		}

		function d(t, i, n, a, o, e, s) {
			return t = t + (i ^ n ^ a) + o + s, (t << e | t >>> 32 - e) + i
		}

		function l(t, i, n, a, o, e, s) {
			return t = t + (n ^ (i | ~a)) + o + s, (t << e | t >>> 32 - e) + i
		}
		for (var e = CryptoJS, t = e.lib, a = t.WordArray, n = t.Hasher, t = e.algo, s = [], c = 0; 64 > c; c++) s[c] = 0 | 4294967296 * i.abs(i.sin(c + 1));
		t = t.MD5 = n.extend({
			_doReset: function() {
				this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878])
			},
			_doProcessBlock: function(i, y) {
				for (var n = 0; 16 > n; n++) {
					var b = y + n,
						_ = i[b];
					i[b] = 16711935 & (_ << 8 | _ >>> 24) | 4278255360 & (_ << 24 | _ >>> 8)
				}
				var n = this._hash.words,
					b = i[y + 0],
					_ = i[y + 1],
					T = i[y + 2],
					S = i[y + 3],
					k = i[y + 4],
					P = i[y + 5],
					r = i[y + 6],
					t = i[y + 7],
					w = i[y + 8],
					v = i[y + 9],
					M = i[y + 10],
					O = i[y + 11],
					C = i[y + 12],
					u = i[y + 13],
					D = i[y + 14],
					I = i[y + 15],
					x = n[0],
					E = n[1],
					A = n[2],
					N = n[3],
					x = o(x, E, A, N, b, 7, s[0]),
					N = o(N, x, E, A, _, 12, s[1]),
					A = o(A, N, x, E, T, 17, s[2]),
					E = o(E, A, N, x, S, 22, s[3]),
					x = o(x, E, A, N, k, 7, s[4]),
					N = o(N, x, E, A, P, 12, s[5]),
					A = o(A, N, x, E, r, 17, s[6]),
					E = o(E, A, N, x, t, 22, s[7]),
					x = o(x, E, A, N, w, 7, s[8]),
					N = o(N, x, E, A, v, 12, s[9]),
					A = o(A, N, x, E, M, 17, s[10]),
					E = o(E, A, N, x, O, 22, s[11]),
					x = o(x, E, A, N, C, 7, s[12]),
					N = o(N, x, E, A, u, 12, s[13]),
					A = o(A, N, x, E, D, 17, s[14]),
					E = o(E, A, N, x, I, 22, s[15]),
					x = p(x, E, A, N, _, 5, s[16]),
					N = p(N, x, E, A, r, 9, s[17]),
					A = p(A, N, x, E, O, 14, s[18]),
					E = p(E, A, N, x, b, 20, s[19]),
					x = p(x, E, A, N, P, 5, s[20]),
					N = p(N, x, E, A, M, 9, s[21]),
					A = p(A, N, x, E, I, 14, s[22]),
					E = p(E, A, N, x, k, 20, s[23]),
					x = p(x, E, A, N, v, 5, s[24]),
					N = p(N, x, E, A, D, 9, s[25]),
					A = p(A, N, x, E, S, 14, s[26]),
					E = p(E, A, N, x, w, 20, s[27]),
					x = p(x, E, A, N, u, 5, s[28]),
					N = p(N, x, E, A, T, 9, s[29]),
					A = p(A, N, x, E, t, 14, s[30]),
					E = p(E, A, N, x, C, 20, s[31]),
					x = d(x, E, A, N, P, 4, s[32]),
					N = d(N, x, E, A, w, 11, s[33]),
					A = d(A, N, x, E, O, 16, s[34]),
					E = d(E, A, N, x, D, 23, s[35]),
					x = d(x, E, A, N, _, 4, s[36]),
					N = d(N, x, E, A, k, 11, s[37]),
					A = d(A, N, x, E, t, 16, s[38]),
					E = d(E, A, N, x, M, 23, s[39]),
					x = d(x, E, A, N, u, 4, s[40]),
					N = d(N, x, E, A, b, 11, s[41]),
					A = d(A, N, x, E, S, 16, s[42]),
					E = d(E, A, N, x, r, 23, s[43]),
					x = d(x, E, A, N, v, 4, s[44]),
					N = d(N, x, E, A, C, 11, s[45]),
					A = d(A, N, x, E, I, 16, s[46]),
					E = d(E, A, N, x, T, 23, s[47]),
					x = l(x, E, A, N, b, 6, s[48]),
					N = l(N, x, E, A, t, 10, s[49]),
					A = l(A, N, x, E, D, 15, s[50]),
					E = l(E, A, N, x, P, 21, s[51]),
					x = l(x, E, A, N, C, 6, s[52]),
					N = l(N, x, E, A, S, 10, s[53]),
					A = l(A, N, x, E, M, 15, s[54]),
					E = l(E, A, N, x, _, 21, s[55]),
					x = l(x, E, A, N, w, 6, s[56]),
					N = l(N, x, E, A, I, 10, s[57]),
					A = l(A, N, x, E, r, 15, s[58]),
					E = l(E, A, N, x, u, 21, s[59]),
					x = l(x, E, A, N, k, 6, s[60]),
					N = l(N, x, E, A, O, 10, s[61]),
					A = l(A, N, x, E, T, 15, s[62]),
					E = l(E, A, N, x, v, 21, s[63]);
				n[0] = 0 | n[0] + x, n[1] = 0 | n[1] + E, n[2] = 0 | n[2] + A, n[3] = 0 | n[3] + N
			},
			_doFinalize: function() {
				var t = this._data,
					o = t.words,
					s = 8 * this._nDataBytes,
					r = 8 * t.sigBytes;
				o[r >>> 5] |= 128 << 24 - r % 32;
				var l = i.floor(s / 4294967296);
				for (o[(r + 64 >>> 9 << 4) + 15] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8), o[(r + 64 >>> 9 << 4) + 14] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), t.sigBytes = 4 * (o.length + 1), this._process(), t = this._hash, o = t.words, s = 0; 4 > s; s++) r = o[s], o[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
				return t
			},
			clone: function() {
				var e = n.clone.call(this);
				return e._hash = this._hash.clone(), e
			}
		}), e.MD5 = n._createHelper(t), e.HmacMD5 = n._createHmacHelper(t)
	}(Math),
	function() {
		var e = CryptoJS,
			t = e.lib,
			a = t.Base,
			i = t.WordArray,
			t = e.algo,
			n = t.EvpKDF = a.extend({
				cfg: a.extend({
					keySize: 4,
					hasher: t.MD5,
					iterations: 1
				}),
				init: function(e) {
					this.cfg = this.cfg.extend(e)
				},
				compute: function(e, t) {
					for (var o = this.cfg, r = o.hasher.create(), s = i.create(), l = s.words, d = o.keySize, o = o.iterations; l.length < d;) {
						c && r.update(c);
						var c = r.update(e).finalize(t);
						r.reset();
						for (var u = 1; u < o; u++) c = r.finalize(c), r.reset();
						s.concat(c)
					}
					return s.sigBytes = 4 * d, s
				}
			});
		e.EvpKDF = function(e, t, a) {
			return n.create(a).compute(e, t)
		}
	}(), CryptoJS.lib.Cipher || function(i) {
		var e = CryptoJS,
			o = e.lib,
			d = o.Base,
			u = o.WordArray,
			s = o.BufferedBlockAlgorithm,
			t = e.enc.Base64,
			r = e.algo.EvpKDF,
			l = o.Cipher = s.extend({
				cfg: d.extend(),
				createEncryptor: function(t, e) {
					return this.create(this._ENC_XFORM_MODE, t, e)
				},
				createDecryptor: function(t, e) {
					return this.create(this._DEC_XFORM_MODE, t, e)
				},
				init: function(t, e, a) {
					this.cfg = this.cfg.extend(a), this._xformMode = t, this._key = e, this.reset()
				},
				reset: function() {
					s.reset.call(this), this._doReset()
				},
				process: function(t) {
					return this._append(t), this._process()
				},
				finalize: function(t) {
					return t && this._append(t), this._doFinalize()
				},
				keySize: 4,
				ivSize: 4,
				_ENC_XFORM_MODE: 1,
				_DEC_XFORM_MODE: 2,
				_createHelper: function(t) {
					return {
						encrypt: function(e, i, o) {
							return ("string" == typeof i ? a : n).encrypt(t, e, i, o)
						},
						decrypt: function(e, i, o) {
							return ("string" == typeof i ? a : n).decrypt(t, e, i, o)
						}
					}
				}
			});
		o.StreamCipher = l.extend({
			_doFinalize: function() {
				return this._process(!0)
			},
			blockSize: 1
		});
		var m = e.mode = {},
			h = function(t, e, a) {
				var n = this._iv;
				n ? this._iv = i : n = this._prevBlock;
				for (var o = 0; o < a; o++) t[e + o] ^= n[o]
			},
			g = (o.BlockCipherMode = d.extend({
				createEncryptor: function(t, e) {
					return this.Encryptor.create(t, e)
				},
				createDecryptor: function(t, e) {
					return this.Decryptor.create(t, e)
				},
				init: function(t, e) {
					this._cipher = t, this._iv = e
				}
			})).extend();
		g.Encryptor = g.extend({
			processBlock: function(t, e) {
				var a = this._cipher,
					n = a.blockSize;
				h.call(this, t, e, n), a.encryptBlock(t, e), this._prevBlock = t.slice(e, e + n)
			}
		}), g.Decryptor = g.extend({
			processBlock: function(t, e) {
				var a = this._cipher,
					n = a.blockSize,
					i = t.slice(e, e + n);
				a.decryptBlock(t, e), h.call(this, t, e, n), this._prevBlock = i
			}
		}), m = m.CBC = g, g = (e.pad = {}).Pkcs7 = {
			pad: function(e, t) {
				for (var a = 4 * t, a = a - e.sigBytes % a, i = a << 24 | a << 16 | a << 8 | a, o = [], s = 0; s < a; s += 4) o.push(i);
				a = u.create(o, a), e.concat(a)
			},
			unpad: function(e) {
				e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
			}
		}, o.BlockCipher = l.extend({
			cfg: l.cfg.extend({
				mode: m,
				padding: g
			}),
			reset: function() {
				l.reset.call(this);
				var e = this.cfg,
					t = e.iv,
					e = e.mode;
				if (this._xformMode == this._ENC_XFORM_MODE) var n = e.createEncryptor;
				else n = e.createDecryptor, this._minBufferSize = 1;
				this._mode = n.call(e, this, t && t.words)
			},
			_doProcessBlock: function(e, t) {
				this._mode.processBlock(e, t)
			},
			_doFinalize: function() {
				var e = this.cfg.padding;
				if (this._xformMode == this._ENC_XFORM_MODE) {
					e.pad(this._data, this.blockSize);
					var t = this._process(!0)
				} else t = this._process(!0), e.unpad(t);
				return t
			},
			blockSize: 4
		});
		var f = o.CipherParams = d.extend({
			init: function(e) {
				this.mixIn(e)
			},
			toString: function(e) {
				return (e || this.formatter).stringify(this)
			}
		}),
			m = (e.format = {}).OpenSSL = {
				stringify: function(e) {
					var n = e.ciphertext;
					return e = e.salt, (e ? u.create([1398893684, 1701076831]).concat(e).concat(n) : n).toString(t)
				},
				parse: function(e) {
					e = t.parse(e);
					var n = e.words;
					if (1398893684 == n[0] && 1701076831 == n[1]) {
						var i = u.create(n.slice(2, 4));
						n.splice(0, 4), e.sigBytes -= 16
					}
					return f.create({
						ciphertext: e,
						salt: i
					})
				}
			},
			n = o.SerializableCipher = d.extend({
				cfg: d.extend({
					format: m
				}),
				encrypt: function(e, t, a, n) {
					n = this.cfg.extend(n);
					var i = e.createEncryptor(a, n);
					return t = i.finalize(t), i = i.cfg, f.create({
						ciphertext: t,
						key: a,
						iv: i.iv,
						algorithm: e,
						mode: i.mode,
						padding: i.padding,
						blockSize: e.blockSize,
						formatter: n.format
					})
				},
				decrypt: function(e, t, a, n) {
					return n = this.cfg.extend(n), t = this._parse(t, n.format), e.createDecryptor(a, n).finalize(t.ciphertext)
				},
				_parse: function(e, t) {
					return "string" == typeof e ? t.parse(e, this) : e
				}
			}),
			e = (e.kdf = {}).OpenSSL = {
				execute: function(e, t, n, i) {
					return i || (i = u.random(8)), e = r.create({
						keySize: t + n
					}).compute(e, i), n = u.create(e.words.slice(t), 4 * n), e.sigBytes = 4 * t, f.create({
						key: e,
						iv: n,
						salt: i
					})
				}
			},
			a = o.PasswordBasedCipher = n.extend({
				cfg: n.cfg.extend({
					kdf: e
				}),
				encrypt: function(e, t, a, i) {
					return i = this.cfg.extend(i), a = i.kdf.execute(a, e.keySize, e.ivSize), i.iv = a.iv, e = n.encrypt.call(this, e, t, a.key, i), e.mixIn(a), e
				},
				decrypt: function(e, t, a, i) {
					return i = this.cfg.extend(i), t = this._parse(t, i.format), a = i.kdf.execute(a, e.keySize, e.ivSize, t.salt), i.iv = a.iv, n.decrypt.call(this, e, t, a.key, i)
				}
			})
	}(),
	function() {
		for (var i = CryptoJS, o = i.lib.BlockCipher, p = i.algo, u = [], l = [], s = [], t = [], r = [], m = [], h = [], g = [], f = [], v = [], n = [], a = 0; 256 > a; a++) n[a] = 128 > a ? a << 1 : 283 ^ a << 1;
		for (var b = 0, _ = 0, a = 0; 256 > a; a++) {
			var w = _ ^ _ << 1 ^ _ << 2 ^ _ << 3 ^ _ << 4,
				w = 99 ^ (w >>> 8 ^ 255 & w);
			u[b] = w, l[w] = b;
			var x = n[b],
				C = n[x],
				D = n[C],
				T = 257 * n[w] ^ 16843008 * w;
			s[b] = T << 24 | T >>> 8, t[b] = T << 16 | T >>> 16, r[b] = T << 8 | T >>> 24, m[b] = T, T = 16843009 * D ^ 65537 * C ^ 257 * x ^ 16843008 * b, h[w] = T << 24 | T >>> 8, g[w] = T << 16 | T >>> 16, f[w] = T << 8 | T >>> 24, v[w] = T, b ? (b = x ^ n[n[n[D ^ x]]], _ ^= n[n[_]]) : b = _ = 1
		}
		var S = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
			p = p.AES = o.extend({
				_doReset: function() {
					for (var t = this._key, n = t.words, i = t.sigBytes / 4, t = 4 * ((this._nRounds = i + 6) + 1), o = this._keySchedule = [], e = 0; e < t; e++)
						if (e < i) o[e] = n[e];
						else {
							var s = o[e - 1];
							e % i ? 6 < i && 4 == e % i && (s = u[s >>> 24] << 24 | u[255 & s >>> 16] << 16 | u[255 & s >>> 8] << 8 | u[255 & s]) : (s = s << 8 | s >>> 24, s = u[s >>> 24] << 24 | u[255 & s >>> 16] << 16 | u[255 & s >>> 8] << 8 | u[255 & s], s ^= S[0 | e / i] << 24), o[e] = o[e - i] ^ s
						} for (n = this._invKeySchedule = [], i = 0; i < t; i++) e = t - i, s = i % 4 ? o[e] : o[e - 4], n[i] = 4 > i || 4 >= e ? s : h[u[s >>> 24]] ^ g[u[255 & s >>> 16]] ^ f[u[255 & s >>> 8]] ^ v[u[255 & s]]
				},
				encryptBlock: function(e, a) {
					this._doCryptBlock(e, a, this._keySchedule, s, t, r, m, u)
				},
				decryptBlock: function(e, t) {
					var a = e[t + 1];
					e[t + 1] = e[t + 3], e[t + 3] = a, this._doCryptBlock(e, t, this._invKeySchedule, h, g, f, v, l), a = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = a
				},
				_doCryptBlock: function(i, a, o, c, d, e, u, l) {
					for (var f = this._nRounds, m = i[a] ^ o[0], v = i[a + 1] ^ o[1], y = i[a + 2] ^ o[2], b = i[a + 3] ^ o[3], _ = 4, w = 1; w < f; w++) var x = c[m >>> 24] ^ d[255 & v >>> 16] ^ e[255 & y >>> 8] ^ u[255 & b] ^ o[_++],
						C = c[v >>> 24] ^ d[255 & y >>> 16] ^ e[255 & b >>> 8] ^ u[255 & m] ^ o[_++],
						D = c[y >>> 24] ^ d[255 & b >>> 16] ^ e[255 & m >>> 8] ^ u[255 & v] ^ o[_++],
						b = c[b >>> 24] ^ d[255 & m >>> 16] ^ e[255 & v >>> 8] ^ u[255 & y] ^ o[_++],
						m = x,
						v = C,
						y = D;
					x = (l[m >>> 24] << 24 | l[255 & v >>> 16] << 16 | l[255 & y >>> 8] << 8 | l[255 & b]) ^ o[_++], C = (l[v >>> 24] << 24 | l[255 & y >>> 16] << 16 | l[255 & b >>> 8] << 8 | l[255 & m]) ^ o[_++], D = (l[y >>> 24] << 24 | l[255 & b >>> 16] << 16 | l[255 & m >>> 8] << 8 | l[255 & v]) ^ o[_++], b = (l[b >>> 24] << 24 | l[255 & m >>> 16] << 16 | l[255 & v >>> 8] << 8 | l[255 & y]) ^ o[_++], i[a] = x, i[a + 1] = C, i[a + 2] = D, i[a + 3] = b
				},
				keySize: 8
			});
		i.AES = o._createHelper(p)
	}(),

	$("#refferal").submit(function(t) {
		t.preventDefault()
	}).validate({
		rules: {
			name: {
				required: !0
			},
			email: {
				required: !0
			},
			position: {
				required: !0
			},
			technicalSkill: {
				required: !0
			},
			yearOfPassout: {
				required: !0
			},
			lastDate: {
				required: !0
			},
			companyName: {
				required: !0
			},
			empType: {
				required: !0
			},
			percentage: {
				required: !0
			},
			positionNum: {
				digits: !0
			},
			yearOfExp: {
				required: !0,
				digits: !0
			}
		},
		messages: {
			name: "Please Enter Your Name",
			email: "Please Enter Your Email id",
			position: "Please Enter Job Designation",
			technicalSkill: "Please Enter Required Technical Skills for Job",
			yearOfPassout: "Please Enter year of Passout",
			yearOfExp: {
				required: "Please Enter Required Year of experience",
				digits: "Please enter only digits"
			},
			lastDate: "Please Enter last date for registraion",
			empType: "Please Select Employee type",
			percentage: "Please Select Percentage Criteria",
			companyName: "Please enter company name",
			positionNum: "Please enter the number only"
		},
		beforeSend: function() {
			+
				$("#processingModal").modal("show")
		},
		submitHandler: function() {
			$(".loadingProgressBar").show();
			var e = $("#name").val(),
				t = $("#email").val(),
				a = $("#position").val(),
				n = $("#yearOfExp").val(),
				i = $("#technicalSkill").val(),
				o = $("#yearOfPassout").val(),
				s = $("#lastDate").val(),
				r = $("#positionNum").val(),
				l = $("#empType").val(),
				d = $("#percentage").val(),
				c = $("#companyName").val(),
				p = $("#otherComment").val(),
				u = $("#jobCode").val();
			let isValid = ValidateEmail(t);
			if (isValid == true) {
				console.log("Email checked")
				checkEmailNSendMailForReferal(e, t, a, n, i, o, s, r, l, d, c, p, u);
			}

			$("#refferal").trigger("reset"), $(".freshers").hide(), $(".exp").hide(), setTimeout(function() {
				$(".loadingProgressBar").hide()
			}, 1e3)
		},
		complete: function() {
			setTimeout(function() {
				$(".loadingProgressBar").hide()
			}, 1e3)
		}
	}),

	$(document).ready(function() {
		$(".submitReff").click(function() { })
	}),
	$("input.datepick").datepicker({
		minDate: 0
	}).on("change", function() {
		$("input.datepick").valid() && $("input.datepick").removeClass("invalid").addClass("success")
	}), $(".freshers").hide(), $(".exp").hide()
	, $(document).ready(function() {
		for (var e = "<option value=''>Select Year of passout</option>", t = 2010; 2022 >= t; t++) e = e + "<option >" + t + "</option>";
		$("#yearOfPassout").empty(), $("#yearOfPassout").append(e)
	}), $("select#empType").change(function() {
		var e = $("#empType").val();
		"" == e ? ($(".freshers").hide(), $(".exp").hide()) : "freshers" == e ? ($(".freshers").show(), $(".exp").hide()) : "experience" == e && ($(".freshers").hide(), $(".exp").show())
	}), $(document).ready(function() {
		$(".loadingProgressBar").hide()
	});

function checkEmailNSendMailForReferal(e, t, a, n, i, o, s, r, l, d, c, p, u) {
	$(".loadingProgressBar").show();
	$.ajax('https://api.thechecker.co/v2/verify?email=' + t + '&api_key=' + emailApiKey, {
		dataType: 'json', // type of response data
		timeout: 20000, // timeout milliseconds
		success: function(data) { // success callback function
			// console.log(data.result);
			if (data.result == 'deliverable') {
				alert("Email Id is valid");
				var v = ["xworkzcontact@gmail.com"];
				v.push.apply(v, toMailIds);
				new SendContactEmail().send(emailSent("We will be shortly getting in touch with you......."), t, v, `we have job oppening...`, `we got the requirement from ` + e + ` for ` + c + ` details is given below: <pre>Position is ` + a + ` <pre>Required Skill is ` + i + `<pre>job code is ` + u + `<pre>year of experience ` + n + ` <pre>total number of position ` + r + ` <pre>year of passout ` + o + ` <pre>criteria is ` + d + `<pre>employee type is  ` + l + `<pre>person's email id ` + t + ` <pre>Last registration date ` + s + `<pre>other comment ` + p)
				setTimeout(function() {
					$(".loadingProgressBar").hide()
				}, 1e3)

			} else {
				alert('email is invalid please check it again.');
				setTimeout(function() {
					$(".loadingProgressBar").hide()
				}, 1e3);
			}
		},
		error: function(error) { // error callback
			console.log(error);
			console.log(error.responseText);
			var v = ["xworkzcontact@gmail.com"];
			v.push.apply(v, toMailIds);
			new SendContactEmail().send(emailSent("We will be shortly getting in touch with you......."), t, v, `we have job oppening...`, `we got the requirement from ` + e + ` for ` + c + ` details is given below: <pre>Position is ` + a + ` <pre>Required Skill is ` + i + `<pre>job code is ` + u + `<pre>year of experience ` + n + ` <pre>total number of position ` + r + ` <pre>year of passout ` + o + ` <pre>criteria is ` + d + `<pre>employee type is  ` + l + `<pre>person's email id ` + t + ` <pre>Last registration date ` + s + `<pre>other comment ` + p)
			setTimeout(function() {
				$(".loadingProgressBar").hide()
			}, 1e3)
			setTimeout(function() {
				$(".loadingProgressBar").hide()
			}, 1e3)
			//alert("something went wrong. try again later...");
		}
	});

}

class SendContactEmail {
	send(e, t, a = "xworkzcontact@gmail.com", n = `from ${t} Contact`, i = "Contact") {
		Email.send(t, a, n, i, {
			token: "15ea4491-4edd-438d-9517-0bddffa7dfb7",
			callback: e
		})
	}
}

class SendEmail {
	send(e, t, a = "xworkzsubscribe@gmail.com", n = `from ${t} Subscribe`, i = "Subscribe") {
		Email.send(t, a, n, i, {
			token: "2281582a-ee40-4cf5-8a9d-34c86e59383d",
			callback: e
		})
	}
}

let emailSent = e => {
	$("#emailSubField").val(""), alert(e), setTimeout(function() {
		$(".loadingProgressBar").hide()
	}, 1e3)
};

function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return (true)
	}
	alert("You have entered an invalid email address!")
	return (false)
}

const emailApiKey = 'ccbf7f478da1ff461a9e66ab607f0b11091d9b145e1df12297d522011e1b8a9b';

function checkEmailAndSendMail(email) {
	// alert("Email Id is valid");
	$.ajax('https://api.thechecker.co/v2/verify?email=' + email + '&api_key=' + emailApiKey, {
		dataType: 'json', // type of response data
		timeout: 2000, // timeout milliseconds
		success: function(data) { // success callback function
			console.log(data);
			console.log(data.result);
			if (data.result == 'deliverable') {
				var v = ["xworkzsubscribe@gmail.com"];
				v.push.apply(v, toMailIds);
				new SendEmail().send(emailSent("Subscribed Successfully"), email, v);
				setTimeout(function() {
					$(".loadingProgressBar").hide()
				}, 1e3)

			} else {
				alert('email is invalid please check it again.');
				setTimeout(function() {
					$(".loadingProgressBar").hide()
				}, 1e3);
			}
		},
		error: function(error) { // error callback
			console.log(error);
			console.log(error.responseText);
			var v = ["xworkzsubscribe@gmail.com"];
			v.push.apply(v, toMailIds); important
			new SendEmail().send(emailSent("Subscribed Successfully"), email, v);
			setTimeout(function() {
				$(".loadingProgressBar").hide()
			}, 1e3)
			// alert("something went wrong. try again later...");
		}
	});
}

$("#subscribe").click(() => {
	$(".loadingProgressBar").show();
	let data = $("#emailSubField").val() ? $("#emailSubField").val() : '';
	if (data.length > 0) {
		let valEmail = ValidateEmail(data);
		if (valEmail == true) {
			checkEmailAndSendMail(data);
			console.log("checked Email And Sending Mail");
		} else {
			setTimeout(function() {
				$(".loadingProgressBar").hide()
			}, 1e3)
		}
	} else {
		alert("Please Enter your email.");
		setTimeout(function() {
			$(".loadingProgressBar").hide()
		}, 1e3)
	}
	// alert("Data is "+data.length);

	// let e=$("#emailSubField").val();null!=e&&""!=e?new
	// SendEmail().send(emailSent("Subscribed
	// Successfully"),e,"xworkzcontact@gmail.com"):($("#submit").click(),
	// setTimeout(function(){
	// $(".loadingProgressBar").hide()
	// },1e3)
	// )
}),

	addEventListener("load", function() {
		hideURLbar(), getAllUrls()
	});

function hideURLbar() {
	window.scrollTo(0, 1)
}
async function getAllUrls() {
	var e = await getMasterProd();
	console.log('getAllUrls' + e);
	setGalleryImages(e);
	setGalleryvideos(e);
	setReviewsImages(e);
	setPlacedImages(e);
}

function setGalleryImages(e) {
	fetch(e.gallery).then(e => e.json()).then(e => {
		for (var t = 0; t < e.images.length; t++) {
			key = Object.keys(e.images[t]), image = e.images[t][key];
			var a = `<div class="col-md-12 text-center" style="margin-bottom: 3%;margin-top: 3%"><h2>${key}</h2></div> <div class="col-md-12" style="margin-bottom:5%;"> 
                    <div class="carousel slide" data-ride="carousel" data-type="multi" data-interval="3500" id="myCarousel` + t + `">
                     <div class="carousel-inner">`,
				n = "";
			for (j = 0; j < image.length; j++) n = 0 == j ? n + `<div class="item active"><div
          class="col-md-3 col-sm-6 col-xs-12"><img src=` + JSON.stringify(image[j]) + ` class="img-responsive img-rounded"
          style="height: 240px;"></div></div>` : n + `<div class="item"><div class="col-md-3 col-sm-6
          col-xs-12"><img src=` + JSON.stringify(image[j]) + `
          class="img-responsive img-rounded" style="height: 240px;"></div></div>`;
			a = a + n + `</div> <a class="left carousel-control"
          href="#myCarousel` + t + `" data-slide="prev"><i class="glyphicon
          glyphicon-chevron-left"></i></a> <a class="right carousel-control"
          href="#myCarousel` + t + `" data-slide="next"><i class="glyphicon
          glyphicon-chevron-right" style="margin-right:1%"></i></a> </div></div>`, $(".imageGallery").append(a)
		}
		setTimeout(function() {
			$(".loadingProgressBar").hide()
		}, 1e3)
	})
}

function setReviewsImages(e) {
	fetch(e.reviews).then(e => e.json()).then(e => {
		console.log('main json=' + e.reviews);
		for (var t = 0; t < e.images.length; t++) {
			console.log('inside json=' + e.images[t]);
			key = Object.keys(e.images[t]), image = e.images[t][key];
			var a = `<div class="col-md-12 text-center" style="margin-bottom: 3%;margin-top: 3%"><h2>${key}</h2></div> <div class="col-md-12" style="margin-bottom:5%;"> 
                    <div class="carousel slide" data-ride="carousel" data-type="multi" data-interval="3500" id="myCarousel` + t + `">
                     <div class="carousel-inner">`,
				n = "";
			for (j = 0; j < image.length; j++) n = 0 == j ? n + `<div class="item active"><div
          class="col-md-3 col-sm-6 col-xs-12"><img src=` + JSON.stringify(image[j]) + ` class="img-responsive img-rounded"
          style="height: 240px;"></div></div>` : n + `<div class="item"><div class="col-md-3 col-sm-6
          col-xs-12"><img src=` + JSON.stringify(image[j]) + `
          class="img-responsive img-rounded" style="height: 240px;"></div></div>`;
			a = a + n + `</div> <a class="left carousel-control"
          href="#myCarousel` + t + `" data-slide="prev"><i class="glyphicon
          glyphicon-chevron-left"></i></a> <a class="right carousel-control"
          href="#myCarousel` + t + `" data-slide="next"><i class="glyphicon
          glyphicon-chevron-right" style="margin-right:1%"></i></a> </div></div>`, $(".reviewsimage").append(a)
		}
		setTimeout(function() {
			$(".loadingProgressBar").hide()
		}, 1e3)
	})
}

function setPlacedImages(e) {
	fetch(e.placed).then(e => e.json()).then(e => {
		console.log('main json=' + e.reviews);
		for (var t = 0; t < e.images.length; t++) {
			console.log('inside json=' + e.images[t]);
			key = Object.keys(e.images[t]), image = e.images[t][key];
			var a = `<div class="col-md-12 text-center" style="margin-bottom: 3%;margin-top: 3%"><h2>${key}</h2></div> <div class="col-md-12" style="margin-bottom:5%;"> 
                    <div class="carousel slide" data-ride="carousel" data-type="multi" data-interval="3500" id="myCarousel` + t + `">
                     <div class="carousel-inner">`,
				n = "";
			for (j = 0; j < image.length; j++) n = 0 == j ? n + `<div class="item active"><div
          class="col-md-3 col-sm-6 col-xs-12"><img src=` + JSON.stringify(image[j]) + ` class="img-responsive img-rounded"
          style="height: 240px;"></div></div>` : n + `<div class="item"><div class="col-md-3 col-sm-6
          col-xs-12"><img src=` + JSON.stringify(image[j]) + `
          class="img-responsive img-rounded" style="height: 240px;"></div></div>`;
			a = a + n + `</div> <a class="left carousel-control"
          href="#myCarousel` + t + `" data-slide="prev"><i class="glyphicon
          glyphicon-chevron-left"></i></a> <a class="right carousel-control"
          href="#myCarousel` + t + `" data-slide="next"><i class="glyphicon
          glyphicon-chevron-right" style="margin-right:1%"></i></a> </div></div>`, $(".placedimages").append(a)
		}
		sildeImg(), setTimeout(function() {
			$(".loadingProgressBar").hide()
		}, 1e3)
	})
}

function setGalleryvideos(e) {
	fetch(e.video).then(e => e.json()).then(e => {
		e.Videos.forEach(e => {
			var iframe = document.createElement('iframe');
			iframe.AllowFullScreen = true;
			iframe.src = e.videoSrc;
			$("#videos").append(iframe);
		})
	})
};

var toMailIds = [];

async function setEmailIds() {
	var e = await getMasterProd();
	fetch(e.mailIds).then(e => e.json()).then(e => {
		e.MailIds.forEach(e => {
			toMailIds.push(e.mailAddress);
			//console.log('mailids='+e.mailAddress);
		})
		return toMailIds;
	})
}

var result = setEmailIds();

function sildeImg() {
	$(".carousel[data-type=\"multi\"] .item").each(function() {
		var e = $(this).next();
		e.length || (e = $(this).siblings(":first")), e.children(":first-child").clone().appendTo($(this));
		for (var t = 0, e; 2 > t; t++) e = e.next(), e.length || (e = $(this).siblings(":first")), e.children(":first-child").clone().appendTo($(this))
	})
}

Email = {
	send: function(l, e, o, t, n, a, s, r) {
		var p = Math.floor(1e6 * Math.random() + 1),
			d = "From=" + l;
		d += "&to=" + e, d += "&Subject=" + encodeURIComponent(o), d += "&Body=" + encodeURIComponent(t), null == n.token ? (d += "&Host=" + n, d += "&Username=" + a, d += "&Password=" + s, d += "&Action=Send") : (d += "&SecureToken=" + n.token, d += "&Action=SendFromStored", r = n.callback), d += "&cachebuster=" + p, Email.ajaxPost("https://smtpjs.com/v2/smtp.aspx?", d, r)
		console.log("sent finished")
	},
	sendWithAttachment: function(l, e, o, t, n, a, s, r, c) {
		var d = Math.floor(1e6 * Math.random() + 1),
			i = "From=" + l;
		i += "&to=" + e, i += "&Subject=" + encodeURIComponent(o), i += "&Body=" + encodeURIComponent(t), i += "&Attachment=" + encodeURIComponent(r), null == n.token ? (i += "&Host=" + n, i += "&Username=" + a, i += "&Password=" + s, i += "&Action=Send") : (i += "&SecureToken=" + n.token, i += "&Action=SendFromStored"), i += "&cachebuster=" + d, Email.ajaxPost("https://smtpjs.com/v2/smtp.aspx?", i, c)
	},
	ajaxPost: function(a, e, i) {
		var t = Email.createCORSRequest("POST", a);
		t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onload = function() {
			var a = t.responseText;
			null != i && i(a)
		}, t.send(e)
	},
	ajax: function(a, n) {
		var i = Email.createCORSRequest("GET", a);
		i.onload = function() {
			var t = i.responseText;
			null != n && n(t)
		}, i.send()
	},
	createCORSRequest: function(a, e) {
		var n = new XMLHttpRequest;
		return "withCredentials" in n ? n.open(a, e, !0) : "undefined" == typeof XDomainRequest ? n = null : (n = new XDomainRequest).open(a, e), n
	}
};

// function getContactFormValues(event){
// event.stopPropagation();
// return {};
// var
// e=$("#Name").val(),t=$("#personEmail").val(),a=$("#Subject").val(),n=$("#Message").val();
//            
// return{name:e,fromEmail:t,subject:a,message:n}};
function done() {
	$("#Name").val(""),
		$("#personEmail").val(""),
		$("#Subject").val(""),
		$("#Message").val(""),
		alert("Email sent, will get in touch with you!"),
		setTimeout(function() {
			$(".loadingProgressBar").hide()
		}, 2e3)
}

$("#sendFormData").click((event) => {
	// let{name:e,fromEmail:t,subject:a,message:n}=getContactFormValues(event);
	var e = $("#Name").val(),
		t = $("#personEmail").val(),
		a = $("#Subject").val(),
		b = $("#branch").val(),
		n = $("#Message").val();
	let validEmail = ValidateEmail(t);
	if (validEmail == true) {
		$.ajax('https://api.thechecker.co/v2/verify?email=' + t + '&api_key=' + emailApiKey, {
			dataType: 'json', // type of response data
			timeout: 6000, // timeout milliseconds
			success: function(data) { // success
				// callback
				// function
				console.log(data);
				// console.log(data.result);
				if (data.result == 'deliverable') {
					if ($(".loadingProgressBar").show(),
						"" != e && "" != t && "" != a && "" != n) {
						/* alert("Email Id is valid"); */
						var v = ["xworkzcontact@gmail.com"];
						v.push.apply(v, toMailIds);
						new SendContactEmail().send(done, t, v, `${`Message from ${e}  `} ${a} - ${b}`, `Hi X-workz,

                                    This is ${t}, ${n}.

                                    Regards,
                                    ${e}`)
					} else $("#submitForm").click()
					setTimeout(function() {
						$(".loadingProgressBar").hide()
					}, 1e3)

				} else {
					alert('email is invalid please check it again.');
					setTimeout(function() {
						$(".loadingProgressBar").hide()
					}, 1e3);
				}
			},
			error: function(error) { // error callback
				console.log(error);
				console.log(error.responseText);
				var v = ["xworkzcontact@gmail.com"];
				v.push.apply(v, toMailIds);
				new SendContactEmail().send(done, t, v, `${`Message from ${e}  `} ${a} - ${b}`, `Hi X-workz,

                            This is ${t}, ${n}.

                            Regards,
                            ${e}`)
				setTimeout(function() {
					$(".loadingProgressBar").hide()
				}, 1e3)
				// alert("something went wrong. try again later...");
			}
		})
	}
	// setTimeout(function(){$(".loadingProgressBar").hide()},1e3)
}), addEventListener("load", function() {
	window.scrollTo(0, 1), getMainUrl()
});
async function getMainUrl() {
	var e = await getMasterProd();
	setCourseDetailsBTM(e), setCourseDetails(e), setFacultyDetails(e)
}
let createFacultyDescList = e => e.split(".").map(e => `<li class="facultyDesc">${e}</li>`);

function setFacultyDetails(e) {
	fetch(e.faculty).then(e => e.json()).then(e => {
		e.Faculties.forEach(e => {
			$("#trainers").append(`<div class="row" style="display:flex">
                            <div class="col-md-3">
                                <div class="team-grid">
                                    <img class="team-img img-responsive" src="${e.imgSrc}" alt="" height="100px">
                                    <h6>${e.name}</h6>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        <div class="col-md-7" style="background-color:#f7f4f4;" class="facultyDesc">
                        <ul><b class="facultyName"><span></span></b>
                        <br/>
                    ${createFacultyDescList(e.description).join("")}
                        </ul>
                        </div>
                        </div>
                        <br/>`)
		})
	})
}

function setCourses(e, t) {
	for (var a = "", n = 0; n < t.length; n++) {
		var o = Object.keys(t[n]),
			s = t[n][o];

		a += `<div class="col-md-12 text-center subHeading" ><h2>${o}</h2></div>`;

		for (var r = "", l = 0; l < s.length; l++) {

			var placed = s[l].placed != 0 ? 'Total placed:' + s[l].placed : '';
			r += `<div class="col-md-4 courses-info" >
                        
                <h5  id="contactUs"
                    style="cursor:pointer;">${s[l].courseName}<br/>
                    <span class="badge badge-success">${s[l].type}</span></h5>
                    <div class="c-image" >
                        <img src="${e.facultyImage}${s[l].facultyName}.png" class="img-responsive">
                        <h6>${s[l].facultyName}</h6> <h7 class="pull-right">` + placed + `</h7>
                        <div class="clearfix"></div>
                    </div>
                    <p class="batch">
                            Batch Starts from ${s[l].startDate} at ${s[l].time}
                            <span>  </span>
                    </p>
                    
                    <div class="row">
                        <div class="col-md-6 col-sm-2 download-align downloadTextCss" style="margin: 20px 0px 0px0 20px;" id="downloadCourse" onclick="storeCourseData('${s[l].courseName}','${s[l].startDate}');">
                            <span id="getCourse"  style="color:#ea4c89;cursor:pointer;"  >Download Course <span class="fa fa-download"></span></span>
                        </div>
                        <div class="col-md-5 col-sm-1 share-align" id="shareCourse" onclick="storeCourseData('${s[l].courseName}','${s[l].startDate}');" align="right">
                            <span id="shareCourseTo"  style="color:#ea4c89;cursor:pointer;"  >Share Course <span class="fa fa-share-alt"></span></span>
                        </div>
                        <div class="col-md-6 col-sm-2 download-align downloadTextCss classRegister-${o}" style="margin: 20px 0px 0px0 20px;">
                        	 <a href="https://docs.google.com/forms/d/e/1FAIpQLScJwBASoweZ-ex9cu2jUAK_cE7Yeou8qy3UeEPB_u1buMGmvg/viewform" style="color:#ea4c89;cursor:pointer;">
                        	 <button id ="buttonD" >Register Here </button>
                        	 </a>                        	 
                        </div> 
                </div>
                </div>`
		};
		a += r
	}
	$("#courses").append(a);
}

function setCoursesBTM(e, t) {
	console.log("course at BTM");
	console.log(e);
	for (var a = "", n = 0; n < t.length; n++) {
		var o = Object.keys(t[n]),
			s = t[n][o];
		a += `<div class="col-md-12 text-center subHeading" ><h2>${o}</h2></div>`;
		for (var r = "", l = 0; l < s.length; l++) {
			var placed = s[l].placed != 0 ? 'Total placed:' + s[l].placed : '';
			r += `<div class="col-md-4 courses-info" >
                        
                <h5  id="contactUs"
                    style="cursor:pointer;">${s[l].courseName}<br/>
                    <span class="badge badge-success">${s[l].type}</span></h5>
                    <div class="c-image" >
                        <img src="${e.facultyImage}${s[l].facultyName}.png" class="img-responsive">
                        <h6>${s[l].facultyName}</h6> <h7 class="pull-right">` + placed + `</h7>
                        <div class="clearfix"></div>
                    </div>
                    <p class="batch">
                            Batch Starts from ${s[l].startDate} at ${s[l].time}
                            <span>  </span>
                    </p>
                    
                    <div class="row">
                        <div class="col-md-6 col-sm-2 download-align downloadTextCss" style="margin: 20px 0px 0px0 20px;" id="downloadCourse" onclick="storeCourseData('${s[l].courseName}','${s[l].startDate}');">
                            <span id="getCourse"  style="color:#ea4c89;cursor:pointer;"  >Download Course <span class="fa fa-download"></span></span>
                        </div>
                        <div class="col-md-5 col-sm-1 share-align" id="shareCourse" onclick="storeCourseData('${s[l].courseName}','${s[l].startDate}');" align="right">
                            <span id="shareCourseTo"  style="color:#ea4c89;cursor:pointer;"  >Share Course <span class="fa fa-share-alt"></span></span>
                        </div>
                        <div class="col-md-6 col-sm-2 download-align downloadTextCss classRegister-${o}" style="margin: 20px 0px 0px0 20px;">
                        	 <a href="https://docs.google.com/forms/d/e/1FAIpQLScJwBASoweZ-ex9cu2jUAK_cE7Yeou8qy3UeEPB_u1buMGmvg/viewform" style="color:#ea4c89;cursor:pointer;">
                        	 <button id ="buttonD" >Register Here </button>
                        	 </a>                        	 
                        </div>
                </div>
                </div>`
		};
		a += r
	}
	$("#coursesBTM").append(a)
}

function setCourseDetails(e) {
	fetch(e.batches).then(e => e.json()).then(t => {
		setCourses(e, t.Batches)
		//console.log(t.Batches);
	})
}

function setCourseDetailsBTM(e) {
	fetch(e.batchesBTM).then(e => e.json()).then(t => {
		setCoursesBTM(e, t.BatchesBTM)
	})
}


var ToolsData = [];

async function setTools() {
	var e = await getMasterProd();
	fetch(e.softwares).then(e => e.json()).then(e => {
		e.Softwares.forEach(e => {
			ToolsData.push({ name: e.name, description: e.description, directLink: e.directLink, extranalLink: e.extranalLink });
		})
		this.setSoftwares();
	})
}
var toolsStart = setTools();


function setSoftwares() {
	console.log('ToolsData=' + ToolsData);
	$.each(ToolsData, function(i) {
		var templateString = '<article class="card"><h2>' + ToolsData[i].name + '</h2><p>' + ToolsData[i].description + '</p><br>Direct Download ⬇<a href="' + ToolsData[i].directLink + '"></p><button id="buttonD">Download</button></a><br><p>For Other Versions: <a href="' + ToolsData[i].extranalLink + '">Check Here</a></p></article>';
		$('#toolsCards').append(templateString);
	})
}

var RegistrationsData = [];

async function setRegistrations() {
	var e = await getMasterProd();
	fetch(e.registrations).then(e => e.json()).then(e => {
		e.Registrations.forEach(e => {
			RegistrationsData.push({ name: e.name, description: e.description, link: e.link });
		})
		this.setForms();
	})
}
var registerStart = setRegistrations();


function setForms() {
	$.each(RegistrationsData, function(i) {
		var Registrationtemplate = '<article class="card"><h2>' + RegistrationsData[i].name + '</h2><p>' + RegistrationsData[i].description + '</p><p></p><br>To Fill The From ⬇<br><a href="' + RegistrationsData[i].link + '"> <button id="buttonD">Click Here</button></a></article>';
		$('#registrationCards').append(Registrationtemplate);
	})
}


function setQuestions(jsondata) {
	var Questionstemplate = [];
	var j = 0;
	$.each(jsondata.Questions, function(i) {
		Questionstemplate.push('<article><hr><h3>' + (++j) + '.' + jsondata.Questions[i].question + '</h3><hr>');
		$('#section1').html(Questionstemplate);
	});
}

$("#getCourse").click(() => {
	console.log("getCourse"),
		alert("getCourse")
}),
	$("#courses").on("click", "#contactUs", () => {
		$("#myModal").modal("show")
	}),
	$("#courses").on("click", "#shareCourse", () => {
		$("#courseModal").modal("hide"),
			$("#shareModal").modal("show")
	}),
	$("#getCourseContent").click(() => {
		$(".loadingProgressBar").show();
		let e = $("#emailID")[0].value,
			t = "",
			a = /^[6-9]{1}[0-9]{9}$/;
		if ($("#mobNumber")[0].value)
			if ($("#mobNumber")[0].value.match(a)) t = $("#mobNumber")[0].value;
			else return alert("Please enter the valid mobile number"),
				$("#emailID").val(""), $("#mobNumber").val(""),
				void setTimeout(function() {
					$(".loadingProgressBar").hide()
				}, 1e3);
		if (!(0 < e.length))

			$("#courseSubmit").click(), setTimeout(function() {
				$(".loadingProgressBar").hide()
			}, 1e3);
		else if (0 < t.length) {
			let a = localStorage.getItem("getCourseInfo"),
				n = localStorage.getItem("getCourseDate");
			$("#emailID").val(""),
				$("#mobNumber").val(""),
				localStorage.removeItem("getCourseInfo"),
				localStorage.removeItem("getCourseDate")
			// alert("Calling this "+e);
			let validEmail = ValidateEmail(e);
			if (validEmail == true) {
				$.ajax('https://api.thechecker.co/v2/verify?email=' + e + '&api_key=' + emailApiKey, {
					dataType: 'json', // type of response
					// data
					timeout: 30000, // timeout
					// milliseconds
					success: function(data) { // success
						// callback
						// function
						console.log(data);
						// console.log(data.result);
						if (data.result == 'deliverable') {
							setTimeout(() => {
								var v = ["xworkzcontact@gmail.com"];
								v.push.apply(v, toMailIds); important
								var i = `Hi
                                            Please Send the Course contents for ${a} (${n}) to '${e}' contact number is ${t} . Thanks`;
								new SendContactEmail().send(emailSent("We Will be Shortly Sending you course Content to Your Email"), e, v, `Course Contents for ${a} (${n}) `, i)
							}, 1000),
								$("#courseModal").modal("hide"),
								setTimeout(function() {
									$(".loadingProgressBar").hide()
								}, 1e3)

						} else {
							alert('email is invalid please check it again.');
							setTimeout(function() {
								$(".loadingProgressBar").hide()
							}, 1e3);
						}
					},
					error: function(error) { // error
						// callback
						console.log(error);
						console.log(error.responseText);
						setTimeout(() => {
							var v = ["xworkzcontact@gmail.com"];
							v.push.apply(v, toMailIds); important
							var i = `Hi
                                    Please Send the Course contents for ${a} (${n}) to '${e}' contact number is ${t} . Thanks`;
							new SendContactEmail().send(emailSent("We Will be Shortly Sending you course Content to Your Email"), e, v, `Course Contents for ${a} (${n}) `, i)
						}, 1000),
							$("#courseModal").modal("hide"),
							setTimeout(function() {
								$(".loadingProgressBar").hide()
							}, 1e3)
						setTimeout(function() {
							$(".loadingProgressBar").hide()
						}, 1e3)
						// alert("something went wrong. try again later...");
					}
				});
			} else {
				setTimeout(function() {
					$(".loadingProgressBar").hide()
				}, 1e3)
			}

		} else
			$("#courseSubmit").click(), setTimeout(function() {
				$(".loadingProgressBar").hide()
			}, 1e3)

	}),


	$("#shereCourseContent").click(function(event) {
		// event.stopImmediatePropagation();
		$(".loadingProgressBar").show();
		let e = $("#fromEmailID")[0].value,
			t = $("#toEmailID")[0].value;

		$("#toEmailID").val(""),
			$("#fromEmailID").val("");
		let a = localStorage.getItem("getCourseInfo"),
			n = localStorage.getItem("getCourseDate");
		localStorage.removeItem("getCourseInfo"),
			localStorage.removeItem("getCourseDate"),
			// $("#shareModal").modal("hide"),
			setTimeout(() => {
				if (t && e) {
					let validPersonEmail = ValidateEmail(e);
					let validSharedPersonEmail = ValidateEmail(t);
					if (validPersonEmail == true && validSharedPersonEmail == true) {
						alert('given emails are valid.............')

						var v = ["xworkzcontact@gmail.com"];
						v.push.apply(v, toMailIds);
						new SendContactEmail().send(emailSent("We will be shortly sending course content to your friend's Email \nThank you for sharing....."), e, v,
							`Course Contents, reffered for ${a} (${n})`,

							`Please Send the Course contents for ${a} (${n}) to  ${t}  from  ${e}. Thanks`);
					} else {
						alert('given email is not valid...........');
					}

				} else alert("Both email id is necessary....\nplease Enter all details"),
					$(".loadingProgressBar").hide()
			}, 500),
			setTimeout(function() {
				$(".loadingProgressBar").hide()
			}, 1e3)
	});

function hideURLbar() {
	window.scrollTo(0, 1)
}
jQuery(document).ready(function(e) {
	e(".scroll").click(function(t) {
		t.preventDefault(), e("html,body").animate({
			scrollTop: e(this.hash).offset().top
		}, 1e3)
	})
});

function hideURLbar() {
	window.scrollTo(0, 1)
}
//$(".counter").countUp(), $(window).load(function() {
$(document).ready(function() {
	$(".flexslider").flexslider({
		animation: "slide",
		start: function() {
			$("body").removeClass("loading")
		}
	})
}), jQuery(function($) {
	$("#slider3").responsiveSlides({
		auto: !0,
		pager: !0,
		nav: !1,
		speed: 500,
		namespace: "callbacks",
		before: function() {
			$(".events").append("<li>before event fired.</li>")
		},
		after: function() {
			$(".events").append("<li>after event fired.</li>")
		}
	})
}), jQuery(document).ready(function(e) {
	e(".scroll").click(function(t) {
		t.preventDefault(), e("html,body").animate({
			scrollTop: e(this.hash).offset().top
		}, 1e3)
	})
}),
	function(e) {
		e.fn.UItoTop = function(t) {
			var a = e.extend({
				text: "To Top",
				min: 200,
				inDelay: 600,
				outDelay: 400,
				containerID: "toTop",
				containerHoverID: "toTopHover",
				scrollSpeed: 1e3,
				easingType: "linear"
			}, t),
				n = "#" + a.containerID,
				i = "#" + a.containerHoverID;
			e("body").append("<a href=\"#\" id=\"" + a.containerID + "\">" + a.text + "</a>"), e(n).hide().on("click.UItoTop", function() {
				return e("html, body").animate({
					scrollTop: 0
				}, a.scrollSpeed, a.easingType), e("#" + a.containerHoverID, this).stop().animate({
					opacity: 0
				}, a.inDelay, a.easingType), !1
			}).prepend("<span id=\"" + a.containerHoverID + "\"></span>").hover(function() {
				e(i, this).stop().animate({
					opacity: 1
				}, 600, "linear")
			}, function() {
				e(i, this).stop().animate({
					opacity: 0
				}, 700, "linear")
			}), e(window).scroll(function() {
				var t = e(window).scrollTop();
				"undefined" == typeof document.body.style.maxHeight && e(n).css({
					position: "absolute",
					top: t + e(window).height() - 50
				}), t > a.min ? e(n).fadeIn(a.inDelay) : e(n).fadeOut(a.Outdelay)
			})
		}
	}(jQuery),
	$().UItoTop({
		easingType: "easeOutQuart"
	});


$(document).ready(function() {
	getPopUp();
});

function checkNdSendSharedEmail(event, e, t) {
	// alert(e,t);
	$(".loadingProgressBar").show();
	var data = {};
	// event.preventDefault();
	var emails = [];
	emails.push(e);
	emails.push(t);
	data.emails = emails;
	// console.log(JSON.stringify(data));
	// event.preventDefault();
	$.ajax({
		type: 'POST',
		timeout: 10000,
		contentType: 'application/json',
		secure: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		dataType: 'json',
		// make sure you respect the same origin
		// policy with this url:
		// http://en.wikipedia.org/wiki/Same_origin_policy
		url: 'https://api.thechecker.co/v2/verifications?api_key=' + emailApiKey,
		// data: JSON.stringify(data),
		success: function(data) {
			// console.log(data.id );
			$(".loadingProgressBar").show();
			checkFileDataFromTheCheckerIdNSharedMail(event, e, t, data.id);
			setTimeout(function() {
				checkFileDataFromTheCheckerIdNSharedMail(event, e, t, data.id);
				// $(".loadingProgressBar").hide()
			}, 10000)
		},
		error: function(error) { // error
			// callback
			console.log(error);
			setTimeout(function() {
				$(".loadingProgressBar").hide()
			}, 1e3)
			alert("something went wrong. try again later...");
		}
	});
}

function checkFileDataFromTheCheckerIdNSharedMail(event, e, t, id) {
	$(".loadingProgressBar").show();
	$.ajax('https://api.thechecker.co/v2/verifications/' + id + '?api_key=' + emailApiKey, {
		dataType: 'json',
		// response data
		timeout: 20000, // timeout
		// milliseconds
		success: function(data) { // success
			// callback
			// function
			console.log(data);
			// console.log(data.result)

			if (data.status.deliverable == 2) {
				let a = localStorage.getItem("getCourseInfo"),
					n = localStorage.getItem("getCourseDate");
				var v = ["xworkzcontact@gmail.com"];
				v.push.apply(v, toMailIds);
				new SendContactEmail().send(emailSent("We will be shortly sending course content to your friend's Email \nThank you for sharing....."), e, v,
					`Course Contents, reffered for ${a} (${n})`,

					`Please Send the Course contents for ${a} (${n}) to  ${t}  from  ${e}. Thanks`);

				setTimeout(function() {
					$(".loadingProgressBar").hide()
				}, 1e3)
				// }
			} else {
				alert('emails is invalid please check it again.');
				setTimeout(function() {
					$(".loadingProgressBar").hide()
				}, 1e3);
			}
		},
		error: function(error) { // error
			// callback
			console.log(error);
			setTimeout(function() {
				$(".loadingProgressBar").hide()
			}, 1e3)
			alert("something went wrong. try again later...");
		}
	})
}
async function getPopUp() {
	let data = await getMasterProd();
	setNotificationData(data.popUp);
}

function setNotificationData(popUpURL) {
	fetch(popUpURL).then(data => data.json()).then(popUpNotificationData => {
		var jsonData = popUpNotificationData.data;
		var notification = "";
		for (i = 0; i < jsonData.length; i++) {
			notification += '<div class="row" style="margin-top: 25px"><div class="col-sm-1"></div><div class="col-sm-10"><h5>' +
				jsonData[i] +
				'</h5></div>    <div class="col-sm-1"></div></div>';
		}
		$(".notData").html(notification);
	});

}

function OnloadPopUp() {
	var count = sessionStorage.getItem('count') || '0';
	if (count == '0') {
		$('#notification').modal('toggle');
		sessionStorage.setItem('count', 1);
	}
}

$(function() {
	$.ajax({
		async: true,
		type: "GET",
		url: "https://raw.githubusercontent.com/xworkzodc/JSON/master/JsonForJsTree.json",
		dataType: "json",
		success: function(json) {
			createJSTree(json);
		},

		error: function(xhr, ajaxOptions, thrownError) {
			alert(xhr.status);
			alert(thrownError);
		}
	});
});

function createJSTree(jsondata) {
	$.noConflict();
	$('#SimpleJSTree').jstree({
		'core': {
			"animation": 1,
			"check_callback": true,
			"select_node": 'Java',
			'data': jsondata
		},
		'types': {
			"root": {
				"icon": "fa fa-hand-o-down"
			},
			"child": {
				"icon": "fa fa-hand-o-right"
			},
			"superchild": {
				"icon": "fa fa-file-text-o"
			}
		},
		"plugins": [
			"search",
			"state", "types"
		],
		"search": {
			"case_sensitive": false,
			"show_only_matches": true
		}

	});

	$("#jstree_menu").on('open_node.jstree', function(event, data) {
		data.instance.set_type(data.node, 'root');
	});
	$("#jstree_menu").on('close_node.jstree', function(event, data) {
		data.instance.set_type(data.node, 'child');
	});

	$('#SimpleJSTree').on("changed.jstree", function(e, data) {
		var nodeid = data.instance.get_node(data.selected);
		console.log(nodeid.data);
		var json_obj = JSON.parse(Get(nodeid.data));
		setQuestions(json_obj);
	});
}
$(document).ready(function() {
	$(".search-input").keyup(function() {
		var searchString = $(this).val();
		$('#SimpleJSTree').jstree('search', searchString);
	});
});

function Get(yourUrl) {
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET", yourUrl, false);
	Httpreq.send(null);
	return Httpreq.responseText;
}

/*
 * $(window).onbeforeunload(function(){ localStorage.removeItem('count'); });
 */
/*
 * window.onbeforeunload = function() { localStorage.removeItem('count'); return
 * ''; };
 */

/*
 *
 */
/*
 * * window.onbeforeunload = function (e) { window.onunload = function () {
 * alert("Onunload"); } };
 *
 * window.onload = function () { alert("onload"); };
 */