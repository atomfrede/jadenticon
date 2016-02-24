// Jdenticon 1.3.2 | jdenticon.com | zlib licensed | (c) 2014-2015 Daniel Mester Pirttijärvi
(function (k, g, h) {
    var l = h(k, k.jQuery);
    "undefined" !== typeof module && "exports" in module ? module.exports = l : "function" === typeof define && define.amd ? define([], function () {
        return l
    }) : k[g] = l
})(this, "jdenticon", function (k, g) {
    function h(b, a) {
        this.x = b;
        this.y = a
    }

    function l(b, a, c, d) {
        this.o = b;
        this.s = a;
        this.f = c;
        this.l = d
    }

    function A(b) {
        this.C = b;
        this.m = l.O
    }

    function m(b) {
        b |= 0;
        return 0 > b ? "00" : 16 > b ? "0" + b.toString(16) : 256 > b ? b.toString(16) : "ff"
    }

    function q(b, a, c) {
        c = 0 > c ? c + 6 : 6 < c ? c - 6 : c;
        return m(255 * (1 > c ? b + (a - b) * c : 3 > c ? a : 4 > c ? b + (a -
            b) * (4 - c) : b))
    }

    function D(b, a) {
        return [n.w(0, 0, a.H(0)), n.v(b, a.A, a.u(.5)), n.w(0, 0, a.H(1)), n.v(b, a.A, a.u(1)), n.v(b, a.A, a.u(0))]
    }

    function r(b, a, c, d, t) {
        var f = 0, u = 0;

        function v(c, d, t, e, g) {
            e = e ? parseInt(a.charAt(e), 16) : 0;
            d = d[parseInt(a.charAt(t), 16) % d.length];
            b.F(n[m[c]]);
            for (c = 0; c < g.length; c++)k.m = new l(f + g[c][0] * h, u + g[c][1] * h, h, e++ % 4), d(k, h, c);
            b.G()
        }

        function e(a) {
            if (0 <= a.indexOf(g))for (var b = 0; b < a.length; b++)if (0 <= m.indexOf(a[b]))return !0
        }

        d = c * (void 0 === d ? .08 : d) | 0;
        c -= 2 * d;
        if (30 > c)throw Error("Jdenticon cannot render identicons smaller than 30 pixels.");
        if (!/^[0-9a-f]{11,}$/i.test(a))throw Error("Invalid hash passed to Jdenticon.");
        var k = new A(b), h = 0 | c / 4, f = f + (0 | d + c / 2 - 2 * h), u = u + (0 | d + c / 2 - 2 * h), n = D(parseInt(a.substr(-7), 16) / 268435455, t), m = [], g;
        for (c = 0; 3 > c; c++) {
            g = parseInt(a.charAt(8 + c), 16) % n.length;
            if (e([0, 4]) || e([2, 3]))g = 1;
            m.push(g)
        }
        v(0, w.J, 2, 3, [[1, 0], [2, 0], [2, 3], [1, 3], [0, 1], [3, 1], [3, 2], [0, 2]]);
        v(1, w.J, 4, 5, [[0, 0], [3, 0], [3, 3], [0, 3]]);
        v(2, w.N, 1, null, [[1, 1], [2, 1], [2, 2], [1, 2]])
    }

    function B() {
        this.i = ""
    }

    function x(b, a) {
        this.j = {};
        this.f = {M: b, I: a}
    }

    function y(b,
               a, c) {
        this.h = b;
        b.clearRect(0, 0, a, c)
    }

    function z() {
        function b(a, b, f) {
            var e = c[a] instanceof Array ? c[a] : [b, f];
            return function (a) {
                a = e[0] + a * (e[1] - e[0]);
                return 0 > a ? 0 : 1 < a ? 1 : a
            }
        }

        var a = e.config || k.jdenticon_config || {}, c = a.lightness || {}, a = a.saturation;
        return {A: "number" == typeof a ? a : .5, u: b("color", .4, .8), H: b("grayscale", .3, .9)}
    }

    function p(b, a, c) {
        if ("string" === typeof b) {
            if (C) {
                b = document.querySelectorAll(b);
                for (var d = 0; d < b.length; d++)p(b[d], a, c)
            }
        } else if (b && b.tagName && (a = a || b.getAttribute("data-jdenticon-hash"))) {
            var e =
                "svg" == b.tagName.toLowerCase(), d = "canvas" == b.tagName.toLowerCase();
            if (e || d && "getContext" in b) {
                var d = Number(b.getAttribute("width")) || b.clientWidth || 0, f = Number(b.getAttribute("height")) || b.clientHeight || 0, g = e ? new x(d, f) : new y(b.getContext("2d"), d, f);
                r(g, a, Math.min(d, f), c, z());
                if (e) {
                    a = document.createElement("span");
                    for (a.innerHTML = g.K(!1); b.firstChild;)b.removeChild(b.firstChild);
                    for (a = a.firstChild.childNodes; a.length;)b.appendChild(a[0]);
                    b.setAttribute("viewBox", "0 0 " + d + " " + f)
                }
            }
        }
    }

    function e() {
        C &&
        p("svg[data-jdenticon-hash],canvas[data-jdenticon-hash]")
    }

    l.prototype = {
        L: function (b, a, c, d) {
            var e = this.o + this.f, f = this.s + this.f;
            return 1 === this.l ? new h(e - a - (d || 0), this.s + b) : 2 === this.l ? new h(e - b - (c || 0), f - a - (d || 0)) : 3 === this.l ? new h(this.o + a, f - b - (c || 0)) : new h(this.o + b, this.s + a)
        }
    };
    l.O = new l(0, 0, 0, 0);
    A.prototype = {
        a: function (b, a) {
            var c = a ? -2 : 2, d = this.m, e = [], f;
            for (f = a ? b.length - 2 : 0; f < b.length && 0 <= f; f += c)e.push(d.L(b[f], b[f + 1]));
            this.C.a(e)
        }, b: function (b, a, c, d) {
            this.C.b(this.m.L(b, a, c, c), c, d)
        }, c: function (b,
                        a, c, d, e) {
            this.a([b, a, b + c, a, b + c, a + d, b, a + d], e)
        }, g: function (b, a, c, d, e, f) {
            b = [b + c, a, b + c, a + d, b, a + d, b, a];
            b.splice((e || 0) % 4 * 2, 2);
            this.a(b, f)
        }, D: function (b, a, c, d, e) {
            this.a([b + c / 2, a, b + c, a + d / 2, b + c / 2, a + d, b, a + d / 2], e)
        }
    };
    var w = {
        N: [function (b, a) {
            var c = .42 * a;
            b.a([0, 0, a, 0, a, a - 2 * c, a - c, a, 0, a])
        }, function (b, a) {
            var c = 0 | .5 * a;
            b.g(a - c, 0, c, 0 | .8 * a, 2)
        }, function (b, a) {
            var c = 0 | a / 3;
            b.c(c, c, a - c, a - c)
        }, function (b, a) {
            var c = 0 | .1 * a, d = 0 | .25 * a;
            b.c(d, d, a - c - d, a - c - d)
        }, function (b, a) {
            var c = 0 | .15 * a, d = 0 | .5 * a;
            b.b(a - d - c, a - d - c, d)
        }, function (b, a) {
            var c =
                .1 * a, d = 4 * c;
            b.c(0, 0, a, a);
            b.a([d, d, a - c, d, d + (a - d - c) / 2, a - c], !0)
        }, function (b, a) {
            b.a([0, 0, a, 0, a, .7 * a, .4 * a, .4 * a, .7 * a, a, 0, a])
        }, function (b, a) {
            b.g(a / 2, a / 2, a / 2, a / 2, 3)
        }, function (b, a) {
            b.c(0, 0, a, a / 2);
            b.c(0, a / 2, a / 2, a / 2);
            b.g(a / 2, a / 2, a / 2, a / 2, 1)
        }, function (b, a) {
            var c = 0 | .14 * a, d = 0 | .35 * a;
            b.c(0, 0, a, a);
            b.c(d, d, a - d - c, a - d - c, !0)
        }, function (b, a) {
            var c = .12 * a, d = 3 * c;
            b.c(0, 0, a, a);
            b.b(d, d, a - c - d, !0)
        }, function (b, a) {
            b.g(a / 2, a / 2, a / 2, a / 2, 3)
        }, function (b, a) {
            var c = .25 * a;
            b.c(0, 0, a, a);
            b.D(c, c, a - c, a - c, !0)
        }, function (b, a, c) {
            var d = .4 * a;
            c || b.b(d,
                d, 1.2 * a)
        }], J: [function (b, a) {
            b.g(0, 0, a, a, 0)
        }, function (b, a) {
            b.g(0, a / 2, a, a / 2, 0)
        }, function (b, a) {
            b.D(0, 0, a, a)
        }, function (b, a) {
            var c = a / 6;
            b.b(c, c, a - 2 * c)
        }]
    }, n = {
        P: function (b, a, c) {
            return "#" + m(b) + m(a) + m(c)
        }, w: function (b, a, c) {
            if (0 == a)return b = m(255 * c), "#" + b + b + b;
            a = .5 >= c ? c * (a + 1) : c + a - c * a;
            c = 2 * c - a;
            return "#" + q(c, a, 6 * b + 2) + q(c, a, 6 * b) + q(c, a, 6 * b - 2)
        }, v: function (b, a, c) {
            var d = [.55, .5, .5, .46, .6, .55, .55][6 * b + .5 | 0];
            return n.w(b, a, .5 > c ? c * d * 2 : d + (c - .5) * (1 - d) * 2)
        }
    };
    B.prototype = {
        a: function (b) {
            for (var a = "M" + b[0].x + " " + b[0].y, c = 1; c <
            b.length; c++)a += "L" + b[c].x + " " + b[c].y;
            this.i += a + "Z"
        }, b: function (b, a, c) {
            c = c ? 0 : 1;
            var d = a / 2;
            this.i += "M" + b.x + " " + (b.y + d) + "a" + d + "," + d + " 0 1," + c + " " + a + ",0a" + d + "," + d + " 0 1," + c + " " + -a + ",0"
        }
    };
    x.prototype = {
        F: function (b) {
            this.B = this.j[b] || (this.j[b] = new B)
        }, G: function () {
        }, a: function (b) {
            this.B.a(b)
        }, b: function (b, a, c) {
            this.B.b(b, a, c)
        }, K: function (b) {
            var a = b ? "" : '<svg xmlns="http://www.w3.org/2000/svg" width="' + this.f.M + '" height="' + this.f.I + '" viewBox="0 0 ' + this.f.M + " " + this.f.I + '" preserveAspectRatio="xMidYMid meet">',
                c;
            for (c in this.j)a += '<path fill="' + c + '" d="' + this.j[c].i + '"/>';
            return b ? a : a + "</svg>"
        }
    };
    y.prototype = {
        F: function (b) {
            this.h.fillStyle = b;
            this.h.beginPath()
        }, G: function () {
            this.h.fill()
        }, a: function (b) {
            var a = this.h, c;
            a.moveTo(b[0].x, b[0].y);
            for (c = 1; c < b.length; c++)a.lineTo(b[c].x, b[c].y);
            a.closePath()
        }, b: function (b, a, c) {
            var d = this.h;
            a /= 2;
            d.arc(b.x + a, b.y + a, a, 0, 2 * Math.PI, c);
            d.closePath()
        }
    };
    var C = "document" in k && "querySelectorAll" in document;
    e.drawIcon = function (b, a, c) {
        if (!b)throw Error("No canvas specified.");
        b = new y(b, c, c);
        r(b, a, c, 0, z())
    };
    e.toSvg = function (b, a, c) {
        var d = new x(a, a);
        r(d, b, a, c, z());
        return d.K()
    };
    e.update = p;
    e.version = "1.3.2";
    g && (g.fn.jdenticon = function (b, a) {
        this.each(function (c, d) {
            p(d, b, a)
        });
        return this
    });
    "function" === typeof setTimeout && setTimeout(e, 0);
    return e
});
