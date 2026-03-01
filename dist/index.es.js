import * as m from "react";
import E, { forwardRef as Ft, createElement as nd, useLayoutEffect as rf, useState as cn, useRef as Lr, useEffect as $t, createContext as cr, useContext as ur, useCallback as hy, isValidElement as zP, PureComponent as Ci, useImperativeHandle as BP, useMemo as vy, cloneElement as qP } from "react";
import * as Pi from "react-dom";
import of from "react-dom";
var wa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sa = { exports: {} }, co = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xm;
function HP() {
  if (xm) return co;
  xm = 1;
  var e = E, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var f, u = {}, p = null, v = null;
    c !== void 0 && (p = "" + c), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (f in l) r.call(l, f) && !a.hasOwnProperty(f) && (u[f] = l[f]);
    if (s && s.defaultProps) for (f in l = s.defaultProps, l) u[f] === void 0 && (u[f] = l[f]);
    return { $$typeof: t, type: s, key: p, ref: v, props: u, _owner: o.current };
  }
  return co.Fragment = n, co.jsx = i, co.jsxs = i, co;
}
var uo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wm;
function WP() {
  return wm || (wm = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = E, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), h = Symbol.iterator, g = "@@iterator";
    function b(N) {
      if (N === null || typeof N != "object")
        return null;
      var Q = h && N[h] || N[g];
      return typeof Q == "function" ? Q : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(N) {
      {
        for (var Q = arguments.length, ie = new Array(Q > 1 ? Q - 1 : 0), ve = 1; ve < Q; ve++)
          ie[ve - 1] = arguments[ve];
        w("error", N, ie);
      }
    }
    function w(N, Q, ie) {
      {
        var ve = y.ReactDebugCurrentFrame, Ae = ve.getStackAddendum();
        Ae !== "" && (Q += "%s", ie = ie.concat([Ae]));
        var Fe = ie.map(function(Re) {
          return String(Re);
        });
        Fe.unshift("Warning: " + Q), Function.prototype.apply.call(console[N], console, Fe);
      }
    }
    var S = !1, C = !1, P = !1, _ = !1, R = !1, T;
    T = Symbol.for("react.module.reference");
    function z(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === r || N === a || R || N === o || N === c || N === f || _ || N === v || S || C || P || typeof N == "object" && N !== null && (N.$$typeof === p || N.$$typeof === u || N.$$typeof === i || N.$$typeof === s || N.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === T || N.getModuleId !== void 0));
    }
    function j(N, Q, ie) {
      var ve = N.displayName;
      if (ve)
        return ve;
      var Ae = Q.displayName || Q.name || "";
      return Ae !== "" ? ie + "(" + Ae + ")" : ie;
    }
    function B(N) {
      return N.displayName || "Context";
    }
    function A(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case s:
            var Q = N;
            return B(Q) + ".Consumer";
          case i:
            var ie = N;
            return B(ie._context) + ".Provider";
          case l:
            return j(N, N.render, "ForwardRef");
          case u:
            var ve = N.displayName || null;
            return ve !== null ? ve : A(N.type) || "Memo";
          case p: {
            var Ae = N, Fe = Ae._payload, Re = Ae._init;
            try {
              return A(Re(Fe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, q = 0, $, F, M, G, oe, Z, L;
    function D() {
    }
    D.__reactDisabledLog = !0;
    function W() {
      {
        if (q === 0) {
          $ = console.log, F = console.info, M = console.warn, G = console.error, oe = console.group, Z = console.groupCollapsed, L = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: D,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        q++;
      }
    }
    function V() {
      {
        if (q--, q === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, N, {
              value: $
            }),
            info: H({}, N, {
              value: F
            }),
            warn: H({}, N, {
              value: M
            }),
            error: H({}, N, {
              value: G
            }),
            group: H({}, N, {
              value: oe
            }),
            groupCollapsed: H({}, N, {
              value: Z
            }),
            groupEnd: H({}, N, {
              value: L
            })
          });
        }
        q < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = y.ReactCurrentDispatcher, I;
    function Y(N, Q, ie) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (Ae) {
            var ve = Ae.stack.trim().match(/\n( *(at )?)/);
            I = ve && ve[1] || "";
          }
        return `
` + I + N;
      }
    }
    var J = !1, te;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      te = new ne();
    }
    function X(N, Q) {
      if (!N || J)
        return "";
      {
        var ie = te.get(N);
        if (ie !== void 0)
          return ie;
      }
      var ve;
      J = !0;
      var Ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Fe;
      Fe = K.current, K.current = null, W();
      try {
        if (Q) {
          var Re = function() {
            throw Error();
          };
          if (Object.defineProperty(Re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Re, []);
            } catch (yt) {
              ve = yt;
            }
            Reflect.construct(N, [], Re);
          } else {
            try {
              Re.call();
            } catch (yt) {
              ve = yt;
            }
            N.call(Re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yt) {
            ve = yt;
          }
          N();
        }
      } catch (yt) {
        if (yt && ve && typeof yt.stack == "string") {
          for (var Ce = yt.stack.split(`
`), vt = ve.stack.split(`
`), Je = Ce.length - 1, et = vt.length - 1; Je >= 1 && et >= 0 && Ce[Je] !== vt[et]; )
            et--;
          for (; Je >= 1 && et >= 0; Je--, et--)
            if (Ce[Je] !== vt[et]) {
              if (Je !== 1 || et !== 1)
                do
                  if (Je--, et--, et < 0 || Ce[Je] !== vt[et]) {
                    var Dt = `
` + Ce[Je].replace(" at new ", " at ");
                    return N.displayName && Dt.includes("<anonymous>") && (Dt = Dt.replace("<anonymous>", N.displayName)), typeof N == "function" && te.set(N, Dt), Dt;
                  }
                while (Je >= 1 && et >= 0);
              break;
            }
        }
      } finally {
        J = !1, K.current = Fe, V(), Error.prepareStackTrace = Ae;
      }
      var wr = N ? N.displayName || N.name : "", Un = wr ? Y(wr) : "";
      return typeof N == "function" && te.set(N, Un), Un;
    }
    function ae(N, Q, ie) {
      return X(N, !1);
    }
    function k(N) {
      var Q = N.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function re(N, Q, ie) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return X(N, k(N));
      if (typeof N == "string")
        return Y(N);
      switch (N) {
        case c:
          return Y("Suspense");
        case f:
          return Y("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case l:
            return ae(N.render);
          case u:
            return re(N.type, Q, ie);
          case p: {
            var ve = N, Ae = ve._payload, Fe = ve._init;
            try {
              return re(Fe(Ae), Q, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, me = {}, ge = y.ReactDebugCurrentFrame;
    function de(N) {
      if (N) {
        var Q = N._owner, ie = re(N.type, N._source, Q ? Q.type : null);
        ge.setExtraStackFrame(ie);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ee(N, Q, ie, ve, Ae) {
      {
        var Fe = Function.call.bind(pe);
        for (var Re in N)
          if (Fe(N, Re)) {
            var Ce = void 0;
            try {
              if (typeof N[Re] != "function") {
                var vt = Error((ve || "React class") + ": " + ie + " type `" + Re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[Re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw vt.name = "Invariant Violation", vt;
              }
              Ce = N[Re](Q, Re, ve, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Je) {
              Ce = Je;
            }
            Ce && !(Ce instanceof Error) && (de(Ae), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ve || "React class", ie, Re, typeof Ce), de(null)), Ce instanceof Error && !(Ce.message in me) && (me[Ce.message] = !0, de(Ae), x("Failed %s type: %s", ie, Ce.message), de(null));
          }
      }
    }
    var Ge = Array.isArray;
    function _e(N) {
      return Ge(N);
    }
    function $e(N) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, ie = Q && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return ie;
      }
    }
    function it(N) {
      try {
        return nt(N), !1;
      } catch {
        return !0;
      }
    }
    function nt(N) {
      return "" + N;
    }
    function Ze(N) {
      if (it(N))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $e(N)), nt(N);
    }
    var lt = y.ReactCurrentOwner, bt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mt, Xe;
    function Ot(N) {
      if (pe.call(N, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function Qe(N) {
      if (pe.call(N, "key")) {
        var Q = Object.getOwnPropertyDescriptor(N, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function rt(N, Q) {
      typeof N.ref == "string" && lt.current;
    }
    function qt(N, Q) {
      {
        var ie = function() {
          mt || (mt = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        ie.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function nn(N, Q) {
      {
        var ie = function() {
          Xe || (Xe = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        ie.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var Mn = function(N, Q, ie, ve, Ae, Fe, Re) {
      var Ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: N,
        key: Q,
        ref: ie,
        props: Re,
        // Record the component responsible for creating this element.
        _owner: Fe
      };
      return Ce._store = {}, Object.defineProperty(Ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ve
      }), Object.defineProperty(Ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ae
      }), Object.freeze && (Object.freeze(Ce.props), Object.freeze(Ce)), Ce;
    };
    function Gn(N, Q, ie, ve, Ae) {
      {
        var Fe, Re = {}, Ce = null, vt = null;
        ie !== void 0 && (Ze(ie), Ce = "" + ie), Qe(Q) && (Ze(Q.key), Ce = "" + Q.key), Ot(Q) && (vt = Q.ref, rt(Q, Ae));
        for (Fe in Q)
          pe.call(Q, Fe) && !bt.hasOwnProperty(Fe) && (Re[Fe] = Q[Fe]);
        if (N && N.defaultProps) {
          var Je = N.defaultProps;
          for (Fe in Je)
            Re[Fe] === void 0 && (Re[Fe] = Je[Fe]);
        }
        if (Ce || vt) {
          var et = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          Ce && qt(Re, et), vt && nn(Re, et);
        }
        return Mn(N, Ce, vt, Ae, ve, lt.current, Re);
      }
    }
    var Ht = y.ReactCurrentOwner, ce = y.ReactDebugCurrentFrame;
    function ye(N) {
      if (N) {
        var Q = N._owner, ie = re(N.type, N._source, Q ? Q.type : null);
        ce.setExtraStackFrame(ie);
      } else
        ce.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function be(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function Me() {
      {
        if (Ht.current) {
          var N = A(Ht.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function ue(N) {
      return "";
    }
    var xe = {};
    function Ne(N) {
      {
        var Q = Me();
        if (!Q) {
          var ie = typeof N == "string" ? N : N.displayName || N.name;
          ie && (Q = `

Check the top-level render call using <` + ie + ">.");
        }
        return Q;
      }
    }
    function Oe(N, Q) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var ie = Ne(Q);
        if (xe[ie])
          return;
        xe[ie] = !0;
        var ve = "";
        N && N._owner && N._owner !== Ht.current && (ve = " It was passed a child from " + A(N._owner.type) + "."), ye(N), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, ve), ye(null);
      }
    }
    function ht(N, Q) {
      {
        if (typeof N != "object")
          return;
        if (_e(N))
          for (var ie = 0; ie < N.length; ie++) {
            var ve = N[ie];
            be(ve) && Oe(ve, Q);
          }
        else if (be(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var Ae = b(N);
          if (typeof Ae == "function" && Ae !== N.entries)
            for (var Fe = Ae.call(N), Re; !(Re = Fe.next()).done; )
              be(Re.value) && Oe(Re.value, Q);
        }
      }
    }
    function Le(N) {
      {
        var Q = N.type;
        if (Q == null || typeof Q == "string")
          return;
        var ie;
        if (typeof Q == "function")
          ie = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === u))
          ie = Q.propTypes;
        else
          return;
        if (ie) {
          var ve = A(Q);
          Ee(ie, N.props, "prop", ve, N);
        } else if (Q.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var Ae = A(Q);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function We(N) {
      {
        for (var Q = Object.keys(N.props), ie = 0; ie < Q.length; ie++) {
          var ve = Q[ie];
          if (ve !== "children" && ve !== "key") {
            ye(N), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ve), ye(null);
            break;
          }
        }
        N.ref !== null && (ye(N), x("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    var At = {};
    function ct(N, Q, ie, ve, Ae, Fe) {
      {
        var Re = z(N);
        if (!Re) {
          var Ce = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var vt = ue();
          vt ? Ce += vt : Ce += Me();
          var Je;
          N === null ? Je = "null" : _e(N) ? Je = "array" : N !== void 0 && N.$$typeof === t ? (Je = "<" + (A(N.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : Je = typeof N, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Je, Ce);
        }
        var et = Gn(N, Q, ie, Ae, Fe);
        if (et == null)
          return et;
        if (Re) {
          var Dt = Q.children;
          if (Dt !== void 0)
            if (ve)
              if (_e(Dt)) {
                for (var wr = 0; wr < Dt.length; wr++)
                  ht(Dt[wr], N);
                Object.freeze && Object.freeze(Dt);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ht(Dt, N);
        }
        if (pe.call(Q, "key")) {
          var Un = A(N), yt = Object.keys(Q).filter(function(FP) {
            return FP !== "key";
          }), xs = yt.length > 0 ? "{key: someKey, " + yt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!At[Un + xs]) {
            var LP = yt.length > 0 ? "{" + yt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xs, Un, LP, Un), At[Un + xs] = !0;
          }
        }
        return N === r ? We(et) : Le(et), et;
      }
    }
    function Et(N, Q, ie) {
      return ct(N, Q, ie, !0);
    }
    function xa(N, Q, ie) {
      return ct(N, Q, ie, !1);
    }
    var yn = xa, ym = Et;
    uo.Fragment = r, uo.jsx = yn, uo.jsxs = ym;
  })()), uo;
}
var Sm;
function VP() {
  return Sm || (Sm = 1, process.env.NODE_ENV === "production" ? Sa.exports = HP() : Sa.exports = WP()), Sa.exports;
}
var d = VP();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), UP = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), _m = (e) => {
  const t = UP(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, gy = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var KP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YP = Ft(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, l) => nd(
    "svg",
    {
      ref: l,
      ...KP,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: gy("lucide", o),
      ...s
    },
    [
      ...i.map(([c, f]) => nd(c, f)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = (e, t) => {
  const n = Ft(
    ({ className: r, ...o }, a) => nd(YP, {
      ref: a,
      iconNode: t,
      className: gy(
        `lucide-${GP(_m(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = _m(e), n;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XP = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], JP = st("arrow-left", XP);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZP = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], QP = st("arrow-right", ZP);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eE = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], dr = st("check", eE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tE = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Wo = st("chevron-down", tE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nE = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], by = st("chevron-left", nE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rE = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Jr = st("chevron-right", rE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oE = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], aE = st("chevron-up", oE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iE = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], sE = st("circle-alert", iE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lE = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], cE = st("circle-check-big", lE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uE = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], dE = st("circle-x", uE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fE = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Ei = st("circle", fE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pE = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], yy = st("ellipsis", pE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mE = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], hE = st("grip-vertical", mE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vE = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], gE = st("info", vE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bE = [["path", { d: "M5 12h14", key: "1ays0h" }]], yE = st("minus", bE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xE = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], wE = st("panel-left", xE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SE = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], _E = st("search", SE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CE = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], af = st("x", CE);
function xy(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = xy(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Cn() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = xy(e)) && (r && (r += " "), r += t);
  return r;
}
const Cm = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Pm = Cn, fr = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Pm(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((c) => {
    const f = n == null ? void 0 : n[c], u = a == null ? void 0 : a[c];
    if (f === null) return null;
    const p = Cm(f) || Cm(u);
    return o[c][p];
  }), s = n && Object.entries(n).reduce((c, f) => {
    let [u, p] = f;
    return p === void 0 || (c[u] = p), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, f) => {
    let { class: u, className: p, ...v } = f;
    return Object.entries(v).every((h) => {
      let [g, b] = h;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...s
      }[g]) : {
        ...a,
        ...s
      }[g] === b;
    }) ? [
      ...c,
      u,
      p
    ] : c;
  }, []);
  return Pm(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, sf = "-", PE = (e) => {
  const t = RE(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(sf);
      return s[0] === "" && s.length !== 1 && s.shift(), wy(s, t) || EE(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const l = n[i] || [];
      return s && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, wy = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? wy(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(sf);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, Em = /^\[(.+)\]$/, EE = (e) => {
  if (Em.test(e)) {
    const t = Em.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, RE = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    rd(n[o], r, o, t);
  return r;
}, rd = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Rm(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (TE(o)) {
        rd(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      rd(i, Rm(t, a), n, r);
    });
  });
}, Rm = (e, t) => {
  let n = e;
  return t.split(sf).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, TE = (e) => e.isThemeGetter, ME = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    n.set(a, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = n.get(a);
      if (i !== void 0)
        return i;
      if ((i = r.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      n.has(a) ? n.set(a, i) : o(a, i);
    }
  };
}, od = "!", ad = ":", NE = ad.length, OE = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const a = [];
    let i = 0, s = 0, l = 0, c;
    for (let h = 0; h < o.length; h++) {
      let g = o[h];
      if (i === 0 && s === 0) {
        if (g === ad) {
          a.push(o.slice(l, h)), l = h + NE;
          continue;
        }
        if (g === "/") {
          c = h;
          continue;
        }
      }
      g === "[" ? i++ : g === "]" ? i-- : g === "(" ? s++ : g === ")" && s--;
    }
    const f = a.length === 0 ? o : o.substring(l), u = AE(f), p = u !== f, v = c && c > l ? c - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: u,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + ad, a = r;
    r = (i) => i.startsWith(o) ? a(i.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const o = r;
    r = (a) => n({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, AE = (e) => e.endsWith(od) ? e.substring(0, e.length - 1) : e.startsWith(od) ? e.substring(1) : e, DE = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let a = [];
    return r.forEach((i) => {
      i[0] === "[" || t[i] ? (o.push(...a.sort(), i), a = []) : a.push(i);
    }), o.push(...a.sort()), o;
  };
}, jE = (e) => ({
  cache: ME(e.cacheSize),
  parseClassName: OE(e),
  sortModifiers: DE(e),
  ...PE(e)
}), kE = /\s+/, IE = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(kE);
  let l = "";
  for (let c = s.length - 1; c >= 0; c -= 1) {
    const f = s[c], {
      isExternal: u,
      modifiers: p,
      hasImportantModifier: v,
      baseClassName: h,
      maybePostfixModifierPosition: g
    } = n(f);
    if (u) {
      l = f + (l.length > 0 ? " " + l : l);
      continue;
    }
    let b = !!g, y = r(b ? h.substring(0, g) : h);
    if (!y) {
      if (!b) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (y = r(h), !y) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      b = !1;
    }
    const x = a(p).join(":"), w = v ? x + od : x, S = w + y;
    if (i.includes(S))
      continue;
    i.push(S);
    const C = o(y, b);
    for (let P = 0; P < C.length; ++P) {
      const _ = C[P];
      i.push(w + _);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function $E() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Sy(t)) && (r && (r += " "), r += n);
  return r;
}
const Sy = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Sy(e[r])) && (n && (n += " "), n += t);
  return n;
};
function LE(e, ...t) {
  let n, r, o, a = i;
  function i(l) {
    const c = t.reduce((f, u) => u(f), e());
    return n = jE(c), r = n.cache.get, o = n.cache.set, a = s, s(l);
  }
  function s(l) {
    const c = r(l);
    if (c)
      return c;
    const f = IE(l, n);
    return o(l, f), f;
  }
  return function() {
    return a($E.apply(null, arguments));
  };
}
const ot = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, _y = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Cy = /^\((?:(\w[\w-]*):)?(.+)\)$/i, FE = /^\d+\/\d+$/, zE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, BE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, HE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, WE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Sr = (e) => FE.test(e), Se = (e) => !!e && !Number.isNaN(Number(e)), Nn = (e) => !!e && Number.isInteger(Number(e)), ws = (e) => e.endsWith("%") && Se(e.slice(0, -1)), xn = (e) => zE.test(e), VE = () => !0, GE = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  BE.test(e) && !qE.test(e)
), Py = () => !1, UE = (e) => HE.test(e), KE = (e) => WE.test(e), YE = (e) => !se(e) && !le(e), XE = (e) => Zr(e, Ty, Py), se = (e) => _y.test(e), Kn = (e) => Zr(e, My, GE), Ss = (e) => Zr(e, tR, Se), Tm = (e) => Zr(e, Ey, Py), JE = (e) => Zr(e, Ry, KE), _a = (e) => Zr(e, Ny, UE), le = (e) => Cy.test(e), fo = (e) => Qr(e, My), ZE = (e) => Qr(e, nR), Mm = (e) => Qr(e, Ey), QE = (e) => Qr(e, Ty), eR = (e) => Qr(e, Ry), Ca = (e) => Qr(e, Ny, !0), Zr = (e, t, n) => {
  const r = _y.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Qr = (e, t, n = !1) => {
  const r = Cy.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Ey = (e) => e === "position" || e === "percentage", Ry = (e) => e === "image" || e === "url", Ty = (e) => e === "length" || e === "size" || e === "bg-size", My = (e) => e === "length", tR = (e) => e === "number", nR = (e) => e === "family-name", Ny = (e) => e === "shadow", rR = () => {
  const e = ot("color"), t = ot("font"), n = ot("text"), r = ot("font-weight"), o = ot("tracking"), a = ot("leading"), i = ot("breakpoint"), s = ot("container"), l = ot("spacing"), c = ot("radius"), f = ot("shadow"), u = ot("inset-shadow"), p = ot("text-shadow"), v = ot("drop-shadow"), h = ot("blur"), g = ot("perspective"), b = ot("aspect"), y = ot("ease"), x = ot("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], C = () => [...S(), le, se], P = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", "contain", "none"], R = () => [le, se, l], T = () => [Sr, "full", "auto", ...R()], z = () => [Nn, "none", "subgrid", le, se], j = () => ["auto", {
    span: ["full", Nn, le, se]
  }, Nn, le, se], B = () => [Nn, "auto", le, se], A = () => ["auto", "min", "max", "fr", le, se], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...R()], F = () => [Sr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...R()], M = () => [e, le, se], G = () => [...S(), Mm, Tm, {
    position: [le, se]
  }], oe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Z = () => ["auto", "cover", "contain", QE, XE, {
    size: [le, se]
  }], L = () => [ws, fo, Kn], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    le,
    se
  ], W = () => ["", Se, fo, Kn], V = () => ["solid", "dashed", "dotted", "double"], K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => [Se, ws, Mm, Tm], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    le,
    se
  ], J = () => ["none", Se, le, se], te = () => ["none", Se, le, se], ne = () => [Se, le, se], X = () => [Sr, "full", ...R()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [xn],
      breakpoint: [xn],
      color: [VE],
      container: [xn],
      "drop-shadow": [xn],
      ease: ["in", "out", "in-out"],
      font: [YE],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [xn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [xn],
      shadow: [xn],
      spacing: ["px", Se],
      text: [xn],
      "text-shadow": [xn],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Sr, se, le, b]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Se, se, le, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: C()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: T()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": T()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": T()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: T()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: T()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: T()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: T()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: T()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: T()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Nn, "auto", le, se]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Sr, "full", "auto", s, ...R()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Se, Sr, "auto", "initial", "none", se]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Se, le, se]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Se, le, se]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Nn, "first", "last", "none", le, se]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": z()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: j()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": z()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: j()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": A()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": A()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: R()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": R()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": R()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...q(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...q()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...q(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...q()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: R()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: R()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: R()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: R()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: R()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: R()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: R()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: R()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: R()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: $()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: $()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: $()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: $()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: $()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: $()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: $()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: $()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: $()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": R()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": R()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: F()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...F()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...F()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...F()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...F()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...F()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...F()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, fo, Kn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, le, Ss]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ws, se]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ZE, se, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, le, se]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Se, "none", le, Ss]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...R()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le, se]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", le, se]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...V(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Se, "from-font", "auto", le, Kn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Se, "auto", le, se]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le, se]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", le, se]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: G()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: oe()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Z()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Nn, le, se],
          radial: ["", le, se],
          conic: [Nn, le, se]
        }, eR, JE]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: L()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: D()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": D()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": D()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": D()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": D()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": D()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": D()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": D()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": D()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": D()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": D()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": D()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": D()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": D()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": D()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: W()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": W()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": W()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": W()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": W()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": W()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": W()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": W()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": W()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": W()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": W()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...V(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...V(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: M()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...V(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Se, le, se]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Se, fo, Kn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: M()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          f,
          Ca,
          _a
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: M()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, Ca, _a]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": M()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: W()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: M()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Se, Kn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": M()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": W()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": M()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, Ca, _a]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Se, le, se]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...K(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": K()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Se]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": I()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": I()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": I()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": I()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": I()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": I()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": I()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": I()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": I()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": I()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": I()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": I()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": I()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": I()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [le, se]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": I()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": I()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": M()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Se]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": I()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": I()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": M()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: G()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: oe()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Z()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", le, se]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          le,
          se
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Y()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Se, le, se]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Se, le, se]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          v,
          Ca,
          _a
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": M()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Se, le, se]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Se, le, se]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Se, le, se]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Se, le, se]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Se, le, se]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          le,
          se
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Y()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Se, le, se]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Se, le, se]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Se, le, se]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Se, le, se]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Se, le, se]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Se, le, se]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Se, le, se]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Se, le, se]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": R()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": R()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": R()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", le, se]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Se, "initial", le, se]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, le, se]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Se, le, se]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, le, se]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [g, le, se]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": C()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: J()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": J()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": J()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": J()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: te()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": te()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": te()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": te()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ne()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ne()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ne()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [le, se, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: C()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: X()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": X()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": X()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": X()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: M()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: M()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le, se]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", le, se]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Se, fo, Kn, Ss]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, oR = /* @__PURE__ */ LE(rR);
function O(...e) {
  return oR(Cn(e));
}
const aR = fr(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
        success: "bg-green-50 text-green-900 border-green-200 [&>svg]:text-green-600",
        warning: "bg-yellow-50 text-yellow-900 border-yellow-200 [&>svg]:text-yellow-600"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Nm = {
  default: gE,
  success: cE,
  warning: sE,
  destructive: dE
};
function e4({
  className: e,
  variant: t = "default",
  ...n
}) {
  const r = Nm[t] || Nm.default;
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: O(aR({ variant: t }), e),
      ...n,
      children: [
        /* @__PURE__ */ d.jsx(r, {}),
        n.children
      ]
    }
  );
}
function t4({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "alert-title",
      className: O(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        e
      ),
      ...t
    }
  );
}
function n4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "alert-description",
      className: O(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        e
      ),
      ...t
    }
  );
}
function Om(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function un(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Om(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Om(e[o], null);
        }
      };
  };
}
function fe(...e) {
  return m.useCallback(un(...e), e);
}
var ut = m.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = m.Children.toArray(n), a = o.find(iR);
  if (a) {
    const i = a.props.children, s = o.map((l) => l === a ? m.Children.count(i) > 1 ? m.Children.only(null) : m.isValidElement(i) ? i.props.children : null : l);
    return /* @__PURE__ */ d.jsx(id, { ...r, ref: t, children: m.isValidElement(i) ? m.cloneElement(i, void 0, s) : null });
  }
  return /* @__PURE__ */ d.jsx(id, { ...r, ref: t, children: n });
});
ut.displayName = "Slot";
var id = m.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (m.isValidElement(n)) {
    const o = lR(n), a = sR(r, n.props);
    return n.type !== m.Fragment && (a.ref = t ? un(t, o) : o), m.cloneElement(n, a);
  }
  return m.Children.count(n) > 1 ? m.Children.only(null) : null;
});
id.displayName = "SlotClone";
var lf = ({ children: e }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: e });
function iR(e) {
  return m.isValidElement(e) && e.type === lf;
}
function sR(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      a(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function lR(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const cR = fr(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        success: "border-transparent bg-green-600 text-white [a&]:hover:bg-green-600/90",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function r4({
  className: e,
  variant: t,
  asChild: n = !1,
  ...r
}) {
  const o = n ? ut : "span";
  return /* @__PURE__ */ d.jsx(
    o,
    {
      "data-slot": "badge",
      className: O(cR({ variant: t }), e),
      ...r
    }
  );
}
const Fr = fr(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        md: "h-11 rounded-md px-6 has-[>svg]:px-4",
        lg: "h-12 rounded-md px-8 has-[>svg]:px-6",
        icon: "size-9 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function cf({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  ...o
}) {
  const a = r ? ut : "button";
  return /* @__PURE__ */ d.jsx(
    a,
    {
      "data-slot": "button",
      className: O(Fr({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
const uR = fr(
  "bg-card text-card-foreground flex flex-col gap-6 rounded-xl",
  {
    variants: {
      variant: {
        default: "border",
        bordered: "border-2 border-border",
        elevated: "shadow-lg border-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function o4({
  className: e,
  variant: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "card",
      className: O(uR({ variant: t }), e),
      ...n
    }
  );
}
function a4({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: O(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function i4({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "h4",
    {
      "data-slot": "card-title",
      className: O("leading-none", e),
      ...t
    }
  );
}
function s4({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "p",
    {
      "data-slot": "card-description",
      className: O("text-muted-foreground", e),
      ...t
    }
  );
}
function l4({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "card-action",
      className: O(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        e
      ),
      ...t
    }
  );
}
function c4({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: O("px-6 [&:last-child]:pb-6", e),
      ...t
    }
  );
}
function u4({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: O("flex items-center px-6 pb-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
function dR({
  className: e,
  type: t,
  error: n,
  fieldSize: r = "default",
  ...o
}) {
  return /* @__PURE__ */ d.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      "data-size": r,
      "aria-invalid": n,
      className: O(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "data-[size=sm]:h-8 data-[size=default]:h-9 data-[size=md]:h-11 data-[size=lg]:h-14",
        e
      ),
      ...o
    }
  );
}
function Mo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function U(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function fR(e, t) {
  const n = m.createContext(t), r = (a) => {
    const { children: i, ...s } = a, l = m.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ d.jsx(n.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const i = m.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Be(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = m.createContext(i), l = n.length;
    n = [...n, i];
    const c = (u) => {
      var y;
      const { scope: p, children: v, ...h } = u, g = ((y = p == null ? void 0 : p[e]) == null ? void 0 : y[l]) || s, b = m.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ d.jsx(g.Provider, { value: b, children: v });
    };
    c.displayName = a + "Provider";
    function f(u, p) {
      var g;
      const v = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[l]) || s, h = m.useContext(v);
      if (h) return h;
      if (i !== void 0) return i;
      throw new Error(`\`${u}\` must be used within \`${a}\``);
    }
    return [c, f];
  }
  const o = () => {
    const a = n.map((i) => m.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, pR(o, ...t)];
}
function pR(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: c }) => {
        const u = l(a)[`__scope${c}`];
        return { ...s, ...u };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Ln(e) {
  const t = e + "CollectionProvider", [n, r] = Be(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: h, children: g } = v, b = E.useRef(null), y = E.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(o, { scope: h, itemMap: y, collectionRef: b, children: g });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", l = E.forwardRef(
    (v, h) => {
      const { scope: g, children: b } = v, y = a(s, g), x = fe(h, y.collectionRef);
      return /* @__PURE__ */ d.jsx(ut, { ref: x, children: b });
    }
  );
  l.displayName = s;
  const c = e + "CollectionItemSlot", f = "data-radix-collection-item", u = E.forwardRef(
    (v, h) => {
      const { scope: g, children: b, ...y } = v, x = E.useRef(null), w = fe(h, x), S = a(c, g);
      return E.useEffect(() => (S.itemMap.set(x, { ref: x, ...y }), () => void S.itemMap.delete(x))), /* @__PURE__ */ d.jsx(ut, { [f]: "", ref: w, children: b });
    }
  );
  u.displayName = c;
  function p(v) {
    const h = a(e + "CollectionConsumer", v);
    return E.useCallback(() => {
      const b = h.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${f}]`));
      return Array.from(h.itemMap.values()).sort(
        (S, C) => y.indexOf(S.ref.current) - y.indexOf(C.ref.current)
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return [
    { Provider: i, Slot: l, ItemSlot: u },
    p,
    r
  ];
}
var mR = m.createContext(void 0);
function Zt(e) {
  const t = m.useContext(mR);
  return e || t || "ltr";
}
var hR = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ee = hR.reduce((e, t) => {
  const n = m.forwardRef((r, o) => {
    const { asChild: a, ...i } = r, s = a ? ut : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(s, { ...i, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Ua(e, t) {
  e && Pi.flushSync(() => e.dispatchEvent(t));
}
function Ie(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function vR(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ie(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var gR = "DismissableLayer", sd = "dismissableLayer.update", bR = "dismissableLayer.pointerDownOutside", yR = "dismissableLayer.focusOutside", Am, Oy = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Fn = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, c = m.useContext(Oy), [f, u] = m.useState(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = m.useState({}), h = fe(t, (_) => u(_)), g = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = g.indexOf(b), x = f ? g.indexOf(f) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, S = x >= y, C = SR((_) => {
      const R = _.target, T = [...c.branches].some((z) => z.contains(R));
      !S || T || (o == null || o(_), i == null || i(_), _.defaultPrevented || s == null || s());
    }, p), P = _R((_) => {
      const R = _.target;
      [...c.branches].some((z) => z.contains(R)) || (a == null || a(_), i == null || i(_), _.defaultPrevented || s == null || s());
    }, p);
    return vR((_) => {
      x === c.layers.size - 1 && (r == null || r(_), !_.defaultPrevented && s && (_.preventDefault(), s()));
    }, p), m.useEffect(() => {
      if (f)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Am = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), Dm(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Am);
        };
    }, [f, p, n, c]), m.useEffect(() => () => {
      f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), Dm());
    }, [f, c]), m.useEffect(() => {
      const _ = () => v({});
      return document.addEventListener(sd, _), () => document.removeEventListener(sd, _);
    }, []), /* @__PURE__ */ d.jsx(
      ee.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: w ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: U(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: U(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: U(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Fn.displayName = gR;
var xR = "DismissableLayerBranch", wR = m.forwardRef((e, t) => {
  const n = m.useContext(Oy), r = m.useRef(null), o = fe(t, r);
  return m.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ d.jsx(ee.div, { ...e, ref: o });
});
wR.displayName = xR;
function SR(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ie(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Ay(
            bR,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function _R(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ie(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Ay(yR, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Dm() {
  const e = new CustomEvent(sd);
  document.dispatchEvent(e);
}
function Ay(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ua(o, a) : o.dispatchEvent(a);
}
var _s = 0;
function Ri() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? jm()), document.body.insertAdjacentElement("beforeend", e[1] ?? jm()), _s++, () => {
      _s === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), _s--;
    };
  }, []);
}
function jm() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Cs = "focusScope.autoFocusOnMount", Ps = "focusScope.autoFocusOnUnmount", km = { bubbles: !1, cancelable: !0 }, CR = "FocusScope", Vo = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, l] = m.useState(null), c = Ie(o), f = Ie(a), u = m.useRef(null), p = fe(t, (g) => l(g)), v = m.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.useEffect(() => {
    if (r) {
      let g = function(w) {
        if (v.paused || !s) return;
        const S = w.target;
        s.contains(S) ? u.current = S : An(u.current, { select: !0 });
      }, b = function(w) {
        if (v.paused || !s) return;
        const S = w.relatedTarget;
        S !== null && (s.contains(S) || An(u.current, { select: !0 }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (const C of w)
            C.removedNodes.length > 0 && An(s);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", b);
      const x = new MutationObserver(y);
      return s && x.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", b), x.disconnect();
      };
    }
  }, [r, s, v.paused]), m.useEffect(() => {
    if (s) {
      $m.add(v);
      const g = document.activeElement;
      if (!s.contains(g)) {
        const y = new CustomEvent(Cs, km);
        s.addEventListener(Cs, c), s.dispatchEvent(y), y.defaultPrevented || (PR(NR(Dy(s)), { select: !0 }), document.activeElement === g && An(s));
      }
      return () => {
        s.removeEventListener(Cs, c), setTimeout(() => {
          const y = new CustomEvent(Ps, km);
          s.addEventListener(Ps, f), s.dispatchEvent(y), y.defaultPrevented || An(g ?? document.body, { select: !0 }), s.removeEventListener(Ps, f), $m.remove(v);
        }, 0);
      };
    }
  }, [s, c, f, v]);
  const h = m.useCallback(
    (g) => {
      if (!n && !r || v.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, y = document.activeElement;
      if (b && y) {
        const x = g.currentTarget, [w, S] = ER(x);
        w && S ? !g.shiftKey && y === S ? (g.preventDefault(), n && An(w, { select: !0 })) : g.shiftKey && y === w && (g.preventDefault(), n && An(S, { select: !0 })) : y === x && g.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ d.jsx(ee.div, { tabIndex: -1, ...i, ref: p, onKeyDown: h });
});
Vo.displayName = CR;
function PR(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (An(r, { select: t }), document.activeElement !== n) return;
}
function ER(e) {
  const t = Dy(e), n = Im(t, e), r = Im(t.reverse(), e);
  return [n, r];
}
function Dy(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Im(e, t) {
  for (const n of e)
    if (!RR(n, { upTo: t })) return n;
}
function RR(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function TR(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function An(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && TR(e) && t && e.select();
  }
}
var $m = MR();
function MR() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Lm(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Lm(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Lm(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function NR(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ye = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, OR = m.useId || (() => {
}), AR = 0;
function ze(e) {
  const [t, n] = m.useState(OR());
  return Ye(() => {
    n((r) => r ?? String(AR++));
  }, [e]), t ? `radix-${t}` : "";
}
const DR = ["top", "right", "bottom", "left"], kn = Math.min, Tt = Math.max, Ka = Math.round, Pa = Math.floor, ln = (e) => ({
  x: e,
  y: e
}), jR = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, kR = {
  start: "end",
  end: "start"
};
function ld(e, t, n) {
  return Tt(e, kn(t, n));
}
function Pn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function En(e) {
  return e.split("-")[0];
}
function eo(e) {
  return e.split("-")[1];
}
function uf(e) {
  return e === "x" ? "y" : "x";
}
function df(e) {
  return e === "y" ? "height" : "width";
}
const IR = /* @__PURE__ */ new Set(["top", "bottom"]);
function an(e) {
  return IR.has(En(e)) ? "y" : "x";
}
function ff(e) {
  return uf(an(e));
}
function $R(e, t, n) {
  n === void 0 && (n = !1);
  const r = eo(e), o = ff(e), a = df(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Ya(i)), [i, Ya(i)];
}
function LR(e) {
  const t = Ya(e);
  return [cd(e), t, cd(t)];
}
function cd(e) {
  return e.replace(/start|end/g, (t) => kR[t]);
}
const Fm = ["left", "right"], zm = ["right", "left"], FR = ["top", "bottom"], zR = ["bottom", "top"];
function BR(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? zm : Fm : t ? Fm : zm;
    case "left":
    case "right":
      return t ? FR : zR;
    default:
      return [];
  }
}
function qR(e, t, n, r) {
  const o = eo(e);
  let a = BR(En(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(cd)))), a;
}
function Ya(e) {
  return e.replace(/left|right|bottom|top/g, (t) => jR[t]);
}
function HR(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function jy(e) {
  return typeof e != "number" ? HR(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Xa(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Bm(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = an(t), i = ff(t), s = df(i), l = En(t), c = a === "y", f = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (eo(t)) {
    case "start":
      v[i] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      v[i] += p * (n && c ? -1 : 1);
      break;
  }
  return v;
}
async function WR(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: v = 0
  } = Pn(t, e), h = jy(v), b = s[p ? u === "floating" ? "reference" : "floating" : u], y = Xa(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: l
  })), x = u === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), S = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Xa(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: x,
    offsetParent: w,
    strategy: l
  }) : x);
  return {
    top: (y.top - C.top + h.top) / S.y,
    bottom: (C.bottom - y.bottom + h.bottom) / S.y,
    left: (y.left - C.left + h.left) / S.x,
    right: (C.right - y.right + h.right) / S.x
  };
}
const VR = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: u
  } = Bm(c, r, l), p = r, v = {}, h = 0;
  for (let b = 0; b < s.length; b++) {
    var g;
    const {
      name: y,
      fn: x
    } = s[b], {
      x: w,
      y: S,
      data: C,
      reset: P
    } = await x({
      x: f,
      y: u,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: v,
      rects: c,
      platform: {
        ...i,
        detectOverflow: (g = i.detectOverflow) != null ? g : WR
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    f = w ?? f, u = S ?? u, v = {
      ...v,
      [y]: {
        ...v[y],
        ...C
      }
    }, P && h <= 50 && (h++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (c = P.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: f,
      y: u
    } = Bm(c, p, l)), b = -1);
  }
  return {
    x: f,
    y: u,
    placement: p,
    strategy: o,
    middlewareData: v
  };
}, GR = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: c,
      padding: f = 0
    } = Pn(e, t) || {};
    if (c == null)
      return {};
    const u = jy(f), p = {
      x: n,
      y: r
    }, v = ff(o), h = df(v), g = await i.getDimensions(c), b = v === "y", y = b ? "top" : "left", x = b ? "bottom" : "right", w = b ? "clientHeight" : "clientWidth", S = a.reference[h] + a.reference[v] - p[v] - a.floating[h], C = p[v] - a.reference[v], P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let _ = P ? P[w] : 0;
    (!_ || !await (i.isElement == null ? void 0 : i.isElement(P))) && (_ = s.floating[w] || a.floating[h]);
    const R = S / 2 - C / 2, T = _ / 2 - g[h] / 2 - 1, z = kn(u[y], T), j = kn(u[x], T), B = z, A = _ - g[h] - j, H = _ / 2 - g[h] / 2 + R, q = ld(B, H, A), $ = !l.arrow && eo(o) != null && H !== q && a.reference[h] / 2 - (H < B ? z : j) - g[h] / 2 < 0, F = $ ? H < B ? H - B : H - A : 0;
    return {
      [v]: p[v] + F,
      data: {
        [v]: q,
        centerOffset: H - q - F,
        ...$ && {
          alignmentOffset: F
        }
      },
      reset: $
    };
  }
}), UR = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: c
      } = t, {
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...b
      } = Pn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = En(o), x = an(s), w = En(s) === s, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = p || (w || !g ? [Ya(s)] : LR(s)), P = h !== "none";
      !p && P && C.push(...qR(s, g, h, S));
      const _ = [s, ...C], R = await l.detectOverflow(t, b), T = [];
      let z = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && T.push(R[y]), u) {
        const H = $R(o, i, S);
        T.push(R[H[0]], R[H[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: T
      }], !T.every((H) => H <= 0)) {
        var j, B;
        const H = (((j = a.flip) == null ? void 0 : j.index) || 0) + 1, q = _[H];
        if (q && (!(u === "alignment" ? x !== an(q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every((M) => an(M.placement) === x ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: H,
              overflows: z
            },
            reset: {
              placement: q
            }
          };
        let $ = (B = z.filter((F) => F.overflows[0] <= 0).sort((F, M) => F.overflows[1] - M.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!$)
          switch (v) {
            case "bestFit": {
              var A;
              const F = (A = z.filter((M) => {
                if (P) {
                  const G = an(M.placement);
                  return G === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((G) => G > 0).reduce((G, oe) => G + oe, 0)]).sort((M, G) => M[1] - G[1])[0]) == null ? void 0 : A[0];
              F && ($ = F);
              break;
            }
            case "initialPlacement":
              $ = s;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
function qm(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Hm(e) {
  return DR.some((t) => e[t] >= 0);
}
const KR = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = Pn(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await r.detectOverflow(t, {
            ...a,
            elementContext: "reference"
          }), s = qm(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Hm(s)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...a,
            altBoundary: !0
          }), s = qm(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Hm(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, ky = /* @__PURE__ */ new Set(["left", "top"]);
async function YR(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = En(n), s = eo(n), l = an(n) === "y", c = ky.has(i) ? -1 : 1, f = a && l ? -1 : 1, u = Pn(t, e);
  let {
    mainAxis: p,
    crossAxis: v,
    alignmentAxis: h
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return s && typeof h == "number" && (v = s === "end" ? h * -1 : h), l ? {
    x: v * f,
    y: p * c
  } : {
    x: p * c,
    y: v * f
  };
}
const XR = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, l = await YR(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, JR = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: a
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (y) => {
            let {
              x,
              y: w
            } = y;
            return {
              x,
              y: w
            };
          }
        },
        ...c
      } = Pn(e, t), f = {
        x: n,
        y: r
      }, u = await a.detectOverflow(t, c), p = an(En(o)), v = uf(p);
      let h = f[v], g = f[p];
      if (i) {
        const y = v === "y" ? "top" : "left", x = v === "y" ? "bottom" : "right", w = h + u[y], S = h - u[x];
        h = ld(w, h, S);
      }
      if (s) {
        const y = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", w = g + u[y], S = g - u[x];
        g = ld(w, g, S);
      }
      const b = l.fn({
        ...t,
        [v]: h,
        [p]: g
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [v]: i,
            [p]: s
          }
        }
      };
    }
  };
}, ZR = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = Pn(e, t), f = {
        x: n,
        y: r
      }, u = an(o), p = uf(u);
      let v = f[p], h = f[u];
      const g = Pn(s, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const w = p === "y" ? "height" : "width", S = a.reference[p] - a.floating[w] + b.mainAxis, C = a.reference[p] + a.reference[w] - b.mainAxis;
        v < S ? v = S : v > C && (v = C);
      }
      if (c) {
        var y, x;
        const w = p === "y" ? "width" : "height", S = ky.has(En(o)), C = a.reference[u] - a.floating[w] + (S && ((y = i.offset) == null ? void 0 : y[u]) || 0) + (S ? 0 : b.crossAxis), P = a.reference[u] + a.reference[w] + (S ? 0 : ((x = i.offset) == null ? void 0 : x[u]) || 0) - (S ? b.crossAxis : 0);
        h < C ? h = C : h > P && (h = P);
      }
      return {
        [p]: v,
        [u]: h
      };
    }
  };
}, QR = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...c
      } = Pn(e, t), f = await i.detectOverflow(t, c), u = En(o), p = eo(o), v = an(o) === "y", {
        width: h,
        height: g
      } = a.floating;
      let b, y;
      u === "top" || u === "bottom" ? (b = u, y = p === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = u, b = p === "end" ? "top" : "bottom");
      const x = g - f.top - f.bottom, w = h - f.left - f.right, S = kn(g - f[b], x), C = kn(h - f[y], w), P = !t.middlewareData.shift;
      let _ = S, R = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = w), (r = t.middlewareData.shift) != null && r.enabled.y && (_ = x), P && !p) {
        const z = Tt(f.left, 0), j = Tt(f.right, 0), B = Tt(f.top, 0), A = Tt(f.bottom, 0);
        v ? R = h - 2 * (z !== 0 || j !== 0 ? z + j : Tt(f.left, f.right)) : _ = g - 2 * (B !== 0 || A !== 0 ? B + A : Tt(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: R,
        availableHeight: _
      });
      const T = await i.getDimensions(s.floating);
      return h !== T.width || g !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ti() {
  return typeof window < "u";
}
function to(e) {
  return Iy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Mt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mn(e) {
  var t;
  return (t = (Iy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Iy(e) {
  return Ti() ? e instanceof Node || e instanceof Mt(e).Node : !1;
}
function Kt(e) {
  return Ti() ? e instanceof Element || e instanceof Mt(e).Element : !1;
}
function dn(e) {
  return Ti() ? e instanceof HTMLElement || e instanceof Mt(e).HTMLElement : !1;
}
function Wm(e) {
  return !Ti() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Mt(e).ShadowRoot;
}
const eT = /* @__PURE__ */ new Set(["inline", "contents"]);
function Go(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Yt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !eT.has(o);
}
const tT = /* @__PURE__ */ new Set(["table", "td", "th"]);
function nT(e) {
  return tT.has(to(e));
}
const rT = [":popover-open", ":modal"];
function Mi(e) {
  return rT.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const oT = ["transform", "translate", "scale", "rotate", "perspective"], aT = ["transform", "translate", "scale", "rotate", "perspective", "filter"], iT = ["paint", "layout", "strict", "content"];
function pf(e) {
  const t = mf(), n = Kt(e) ? Yt(e) : e;
  return oT.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || aT.some((r) => (n.willChange || "").includes(r)) || iT.some((r) => (n.contain || "").includes(r));
}
function sT(e) {
  let t = In(e);
  for (; dn(t) && !zr(t); ) {
    if (pf(t))
      return t;
    if (Mi(t))
      return null;
    t = In(t);
  }
  return null;
}
function mf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const lT = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function zr(e) {
  return lT.has(to(e));
}
function Yt(e) {
  return Mt(e).getComputedStyle(e);
}
function Ni(e) {
  return Kt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function In(e) {
  if (to(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Wm(e) && e.host || // Fallback.
    mn(e)
  );
  return Wm(t) ? t.host : t;
}
function $y(e) {
  const t = In(e);
  return zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : dn(t) && Go(t) ? t : $y(t);
}
function No(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = $y(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Mt(o);
  if (a) {
    const s = ud(i);
    return t.concat(i, i.visualViewport || [], Go(o) ? o : [], s && n ? No(s) : []);
  }
  return t.concat(o, No(o, [], n));
}
function ud(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ly(e) {
  const t = Yt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = dn(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = Ka(n) !== a || Ka(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function hf(e) {
  return Kt(e) ? e : e.contextElement;
}
function Dr(e) {
  const t = hf(e);
  if (!dn(t))
    return ln(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Ly(t);
  let i = (a ? Ka(n.width) : n.width) / r, s = (a ? Ka(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const cT = /* @__PURE__ */ ln(0);
function Fy(e) {
  const t = Mt(e);
  return !mf() || !t.visualViewport ? cT : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function uT(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Mt(e) ? !1 : t;
}
function nr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = hf(e);
  let i = ln(1);
  t && (r ? Kt(r) && (i = Dr(r)) : i = Dr(e));
  const s = uT(a, n, r) ? Fy(a) : ln(0);
  let l = (o.left + s.x) / i.x, c = (o.top + s.y) / i.y, f = o.width / i.x, u = o.height / i.y;
  if (a) {
    const p = Mt(a), v = r && Kt(r) ? Mt(r) : r;
    let h = p, g = ud(h);
    for (; g && r && v !== h; ) {
      const b = Dr(g), y = g.getBoundingClientRect(), x = Yt(g), w = y.left + (g.clientLeft + parseFloat(x.paddingLeft)) * b.x, S = y.top + (g.clientTop + parseFloat(x.paddingTop)) * b.y;
      l *= b.x, c *= b.y, f *= b.x, u *= b.y, l += w, c += S, h = Mt(g), g = ud(h);
    }
  }
  return Xa({
    width: f,
    height: u,
    x: l,
    y: c
  });
}
function Oi(e, t) {
  const n = Ni(e).scrollLeft;
  return t ? t.left + n : nr(mn(e)).left + n;
}
function zy(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Oi(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function dT(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = mn(r), s = t ? Mi(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ln(1);
  const f = ln(0), u = dn(r);
  if ((u || !u && !a) && ((to(r) !== "body" || Go(i)) && (l = Ni(r)), dn(r))) {
    const v = nr(r);
    c = Dr(r), f.x = v.x + r.clientLeft, f.y = v.y + r.clientTop;
  }
  const p = i && !u && !a ? zy(i, l) : ln(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + f.x + p.x,
    y: n.y * c.y - l.scrollTop * c.y + f.y + p.y
  };
}
function fT(e) {
  return Array.from(e.getClientRects());
}
function pT(e) {
  const t = mn(e), n = Ni(e), r = e.ownerDocument.body, o = Tt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Tt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Oi(e);
  const s = -n.scrollTop;
  return Yt(r).direction === "rtl" && (i += Tt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
const Vm = 25;
function mT(e, t) {
  const n = Mt(e), r = mn(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const f = mf();
    (!f || f && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  const c = Oi(r);
  if (c <= 0) {
    const f = r.ownerDocument, u = f.body, p = getComputedStyle(u), v = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, h = Math.abs(r.clientWidth - u.clientWidth - v);
    h <= Vm && (a -= h);
  } else c <= Vm && (a += c);
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
const hT = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function vT(e, t) {
  const n = nr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = dn(e) ? Dr(e) : ln(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, c = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function Gm(e, t, n) {
  let r;
  if (t === "viewport")
    r = mT(e, n);
  else if (t === "document")
    r = pT(mn(e));
  else if (Kt(t))
    r = vT(t, n);
  else {
    const o = Fy(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Xa(r);
}
function By(e, t) {
  const n = In(e);
  return n === t || !Kt(n) || zr(n) ? !1 : Yt(n).position === "fixed" || By(n, t);
}
function gT(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = No(e, [], !1).filter((s) => Kt(s) && to(s) !== "body"), o = null;
  const a = Yt(e).position === "fixed";
  let i = a ? In(e) : e;
  for (; Kt(i) && !zr(i); ) {
    const s = Yt(i), l = pf(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && !!o && hT.has(o.position) || Go(i) && !l && By(e, i)) ? r = r.filter((f) => f !== i) : o = s, i = In(i);
  }
  return t.set(e, r), r;
}
function bT(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Mi(t) ? [] : gT(t, this._c) : [].concat(n), r], s = i[0], l = i.reduce((c, f) => {
    const u = Gm(t, f, o);
    return c.top = Tt(u.top, c.top), c.right = kn(u.right, c.right), c.bottom = kn(u.bottom, c.bottom), c.left = Tt(u.left, c.left), c;
  }, Gm(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function yT(e) {
  const {
    width: t,
    height: n
  } = Ly(e);
  return {
    width: t,
    height: n
  };
}
function xT(e, t, n) {
  const r = dn(t), o = mn(t), a = n === "fixed", i = nr(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ln(0);
  function c() {
    l.x = Oi(o);
  }
  if (r || !r && !a)
    if ((to(t) !== "body" || Go(o)) && (s = Ni(t)), r) {
      const v = nr(t, !0, a, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && c();
  a && !r && o && c();
  const f = o && !r && !a ? zy(o, s) : ln(0), u = i.left + s.scrollLeft - l.x - f.x, p = i.top + s.scrollTop - l.y - f.y;
  return {
    x: u,
    y: p,
    width: i.width,
    height: i.height
  };
}
function Es(e) {
  return Yt(e).position === "static";
}
function Um(e, t) {
  if (!dn(e) || Yt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return mn(e) === n && (n = n.ownerDocument.body), n;
}
function qy(e, t) {
  const n = Mt(e);
  if (Mi(e))
    return n;
  if (!dn(e)) {
    let o = In(e);
    for (; o && !zr(o); ) {
      if (Kt(o) && !Es(o))
        return o;
      o = In(o);
    }
    return n;
  }
  let r = Um(e, t);
  for (; r && nT(r) && Es(r); )
    r = Um(r, t);
  return r && zr(r) && Es(r) && !pf(r) ? n : r || sT(e) || n;
}
const wT = async function(e) {
  const t = this.getOffsetParent || qy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: xT(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ST(e) {
  return Yt(e).direction === "rtl";
}
const _T = {
  convertOffsetParentRelativeRectToViewportRelativeRect: dT,
  getDocumentElement: mn,
  getClippingRect: bT,
  getOffsetParent: qy,
  getElementRects: wT,
  getClientRects: fT,
  getDimensions: yT,
  getScale: Dr,
  isElement: Kt,
  isRTL: ST
};
function Hy(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function CT(e, t) {
  let n = null, r;
  const o = mn(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const c = e.getBoundingClientRect(), {
      left: f,
      top: u,
      width: p,
      height: v
    } = c;
    if (s || t(), !p || !v)
      return;
    const h = Pa(u), g = Pa(o.clientWidth - (f + p)), b = Pa(o.clientHeight - (u + v)), y = Pa(f), w = {
      rootMargin: -h + "px " + -g + "px " + -b + "px " + -y + "px",
      threshold: Tt(0, kn(1, l)) || 1
    };
    let S = !0;
    function C(P) {
      const _ = P[0].intersectionRatio;
      if (_ !== l) {
        if (!S)
          return i();
        _ ? i(!1, _) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      _ === 1 && !Hy(c, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, w);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function PT(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = hf(e), f = o || a ? [...c ? No(c) : [], ...No(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const u = c && s ? CT(c, n) : null;
  let p = -1, v = null;
  i && (v = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === c && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = v) == null || w.observe(t);
    })), n();
  }), c && !l && v.observe(c), v.observe(t));
  let h, g = l ? nr(e) : null;
  l && b();
  function b() {
    const y = nr(e);
    g && !Hy(g, y) && n(), g = y, h = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    f.forEach((x) => {
      o && x.removeEventListener("scroll", n), a && x.removeEventListener("resize", n);
    }), u == null || u(), (y = v) == null || y.disconnect(), v = null, l && cancelAnimationFrame(h);
  };
}
const ET = XR, RT = JR, TT = UR, MT = QR, NT = KR, Km = GR, OT = ZR, AT = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: _T,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return VR(e, t, {
    ...o,
    platform: a
  });
};
var DT = typeof document < "u", jT = function() {
}, Ba = DT ? rf : jT;
function Ja(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ja(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Ja(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Wy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ym(e, t) {
  const n = Wy(e);
  return Math.round(t * n) / n;
}
function Rs(e) {
  const t = m.useRef(e);
  return Ba(() => {
    t.current = e;
  }), t;
}
function kT(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: c
  } = e, [f, u] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, v] = m.useState(r);
  Ja(p, r) || v(r);
  const [h, g] = m.useState(null), [b, y] = m.useState(null), x = m.useCallback((M) => {
    M !== P.current && (P.current = M, g(M));
  }, []), w = m.useCallback((M) => {
    M !== _.current && (_.current = M, y(M));
  }, []), S = a || h, C = i || b, P = m.useRef(null), _ = m.useRef(null), R = m.useRef(f), T = l != null, z = Rs(l), j = Rs(o), B = Rs(c), A = m.useCallback(() => {
    if (!P.current || !_.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: p
    };
    j.current && (M.platform = j.current), AT(P.current, _.current, M).then((G) => {
      const oe = {
        ...G,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      H.current && !Ja(R.current, oe) && (R.current = oe, Pi.flushSync(() => {
        u(oe);
      }));
    });
  }, [p, t, n, j, B]);
  Ba(() => {
    c === !1 && R.current.isPositioned && (R.current.isPositioned = !1, u((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [c]);
  const H = m.useRef(!1);
  Ba(() => (H.current = !0, () => {
    H.current = !1;
  }), []), Ba(() => {
    if (S && (P.current = S), C && (_.current = C), S && C) {
      if (z.current)
        return z.current(S, C, A);
      A();
    }
  }, [S, C, A, z, T]);
  const q = m.useMemo(() => ({
    reference: P,
    floating: _,
    setReference: x,
    setFloating: w
  }), [x, w]), $ = m.useMemo(() => ({
    reference: S,
    floating: C
  }), [S, C]), F = m.useMemo(() => {
    const M = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return M;
    const G = Ym($.floating, f.x), oe = Ym($.floating, f.y);
    return s ? {
      ...M,
      transform: "translate(" + G + "px, " + oe + "px)",
      ...Wy($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: G,
      top: oe
    };
  }, [n, s, $.floating, f.x, f.y]);
  return m.useMemo(() => ({
    ...f,
    update: A,
    refs: q,
    elements: $,
    floatingStyles: F
  }), [f, A, q, $, F]);
}
const IT = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Km({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Km({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, $T = (e, t) => ({
  ...ET(e),
  options: [e, t]
}), LT = (e, t) => ({
  ...RT(e),
  options: [e, t]
}), FT = (e, t) => ({
  ...OT(e),
  options: [e, t]
}), zT = (e, t) => ({
  ...TT(e),
  options: [e, t]
}), BT = (e, t) => ({
  ...MT(e),
  options: [e, t]
}), qT = (e, t) => ({
  ...NT(e),
  options: [e, t]
}), HT = (e, t) => ({
  ...IT(e),
  options: [e, t]
});
var WT = "Arrow", Vy = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ d.jsx(
    ee.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ d.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Vy.displayName = WT;
var VT = Vy;
function Uo(e) {
  const [t, n] = m.useState(void 0);
  return Ye(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, s = c.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var vf = "Popper", [Gy, hn] = Be(vf), [GT, Uy] = Gy(vf), Ky = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ d.jsx(GT, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Ky.displayName = vf;
var Yy = "PopperAnchor", Xy = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Uy(Yy, n), i = m.useRef(null), s = fe(t, i);
    return m.useEffect(() => {
      a.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ d.jsx(ee.div, { ...o, ref: s });
  }
);
Xy.displayName = Yy;
var gf = "PopperContent", [UT, KT] = Gy(gf), Jy = m.forwardRef(
  (e, t) => {
    var I, Y, J, te, ne, X;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: f = 0,
      sticky: u = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: h,
      ...g
    } = e, b = Uy(gf, n), [y, x] = m.useState(null), w = fe(t, (ae) => x(ae)), [S, C] = m.useState(null), P = Uo(S), _ = (P == null ? void 0 : P.width) ?? 0, R = (P == null ? void 0 : P.height) ?? 0, T = r + (a !== "center" ? "-" + a : ""), z = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, j = Array.isArray(c) ? c : [c], B = j.length > 0, A = {
      padding: z,
      boundary: j.filter(XT),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: H, floatingStyles: q, placement: $, isPositioned: F, middlewareData: M } = kT({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...ae) => PT(...ae, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        $T({ mainAxis: o + R, alignmentAxis: i }),
        l && LT({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? FT() : void 0,
          ...A
        }),
        l && zT({ ...A }),
        BT({
          ...A,
          apply: ({ elements: ae, rects: k, availableWidth: re, availableHeight: pe }) => {
            const { width: me, height: ge } = k.reference, de = ae.floating.style;
            de.setProperty("--radix-popper-available-width", `${re}px`), de.setProperty("--radix-popper-available-height", `${pe}px`), de.setProperty("--radix-popper-anchor-width", `${me}px`), de.setProperty("--radix-popper-anchor-height", `${ge}px`);
          }
        }),
        S && HT({ element: S, padding: s }),
        JT({ arrowWidth: _, arrowHeight: R }),
        p && qT({ strategy: "referenceHidden", ...A })
      ]
    }), [G, oe] = ex($), Z = Ie(h);
    Ye(() => {
      F && (Z == null || Z());
    }, [F, Z]);
    const L = (I = M.arrow) == null ? void 0 : I.x, D = (Y = M.arrow) == null ? void 0 : Y.y, W = ((J = M.arrow) == null ? void 0 : J.centerOffset) !== 0, [V, K] = m.useState();
    return Ye(() => {
      y && K(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: H.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...q,
          transform: F ? q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: V,
          "--radix-popper-transform-origin": [
            (te = M.transformOrigin) == null ? void 0 : te.x,
            (ne = M.transformOrigin) == null ? void 0 : ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((X = M.hide) == null ? void 0 : X.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d.jsx(
          UT,
          {
            scope: n,
            placedSide: G,
            onArrowChange: C,
            arrowX: L,
            arrowY: D,
            shouldHideArrow: W,
            children: /* @__PURE__ */ d.jsx(
              ee.div,
              {
                "data-side": G,
                "data-align": oe,
                ...g,
                ref: w,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: F ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Jy.displayName = gf;
var Zy = "PopperArrow", YT = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Qy = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = KT(Zy, r), i = YT[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ d.jsx(
          VT,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Qy.displayName = Zy;
function XT(e) {
  return e !== null;
}
var JT = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, y, x;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, f] = ex(n), u = { start: "0%", center: "50%", end: "100%" }[f], p = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, v = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
    let h = "", g = "";
    return c === "bottom" ? (h = i ? u : `${p}px`, g = `${-l}px`) : c === "top" ? (h = i ? u : `${p}px`, g = `${r.floating.height + l}px`) : c === "right" ? (h = `${-l}px`, g = i ? u : `${v}px`) : c === "left" && (h = `${r.floating.width + l}px`, g = i ? u : `${v}px`), { data: { x: h, y: g } };
  }
});
function ex(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var no = Ky, ro = Xy, Ko = Jy, Yo = Qy, ZT = "Portal", pr = m.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = m.useState(!1);
  Ye(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? of.createPortal(/* @__PURE__ */ d.jsx(ee.div, { ...r, ref: t }), i) : null;
});
pr.displayName = ZT;
function Ve({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = QT({ defaultProp: t, onChange: n }), a = e !== void 0, i = a ? e : r, s = Ie(n), l = m.useCallback(
    (c) => {
      if (a) {
        const u = typeof c == "function" ? c(e) : c;
        u !== e && s(u);
      } else
        o(c);
    },
    [a, e, o, s]
  );
  return [i, l];
}
function QT({
  defaultProp: e,
  onChange: t
}) {
  const n = m.useState(e), [r] = n, o = m.useRef(r), a = Ie(t);
  return m.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function oo(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var eM = "VisuallyHidden", bf = m.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    ee.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
bf.displayName = eM;
var tx = bf, tM = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, _r = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Ra = {}, Ts = 0, nx = function(e) {
  return e && (e.host || nx(e.parentNode));
}, nM = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = nx(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, rM = function(e, t, n, r) {
  var o = nM(t, Array.isArray(e) ? e : [e]);
  Ra[n] || (Ra[n] = /* @__PURE__ */ new WeakMap());
  var a = Ra[n], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(u) {
    !u || s.has(u) || (s.add(u), c(u.parentNode));
  };
  o.forEach(c);
  var f = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(p) {
      if (s.has(p))
        f(p);
      else
        try {
          var v = p.getAttribute(r), h = v !== null && v !== "false", g = (_r.get(p) || 0) + 1, b = (a.get(p) || 0) + 1;
          _r.set(p, g), a.set(p, b), i.push(p), g === 1 && h && Ea.set(p, !0), b === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return f(t), s.clear(), Ts++, function() {
    i.forEach(function(u) {
      var p = _r.get(u) - 1, v = a.get(u) - 1;
      _r.set(u, p), a.set(u, v), p || (Ea.has(u) || u.removeAttribute(r), Ea.delete(u)), v || u.removeAttribute(n);
    }), Ts--, Ts || (_r = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Ra = {});
  };
}, Ai = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = tM(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), rM(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, on = function() {
  return on = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, on.apply(this, arguments);
};
function rx(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function oM(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var qa = "right-scroll-bar-position", Ha = "width-before-scroll-bar", aM = "with-scroll-bars-hidden", iM = "--removed-body-scroll-bar-size";
function Ms(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function sM(e, t) {
  var n = cn(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var lM = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Xm = /* @__PURE__ */ new WeakMap();
function cM(e, t) {
  var n = sM(null, function(r) {
    return e.forEach(function(o) {
      return Ms(o, r);
    });
  });
  return lM(function() {
    var r = Xm.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), i = n.current;
      o.forEach(function(s) {
        a.has(s) || Ms(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Ms(s, i);
      });
    }
    Xm.set(n, e);
  }, [e]), n;
}
function uM(e) {
  return e;
}
function dM(e, t) {
  t === void 0 && (t = uM);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var l = function() {
        var f = i;
        i = [], f.forEach(a);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(f) {
          i.push(f), c();
        },
        filter: function(f) {
          return i = i.filter(f), n;
        }
      };
    }
  };
  return o;
}
function fM(e) {
  e === void 0 && (e = {});
  var t = dM(null);
  return t.options = on({ async: !0, ssr: !1 }, e), t;
}
var ox = function(e) {
  var t = e.sideCar, n = rx(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, on({}, n));
};
ox.isSideCarExport = !0;
function pM(e, t) {
  return e.useMedium(t), ox;
}
var ax = fM(), Ns = function() {
}, Di = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: Ns,
    onWheelCapture: Ns,
    onTouchMoveCapture: Ns
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, f = e.enabled, u = e.shards, p = e.sideCar, v = e.noRelative, h = e.noIsolation, g = e.inert, b = e.allowPinchZoom, y = e.as, x = y === void 0 ? "div" : y, w = e.gapMode, S = rx(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, P = cM([n, t]), _ = on(on({}, S), o);
  return m.createElement(
    m.Fragment,
    null,
    f && m.createElement(C, { sideCar: ax, removeScrollBar: c, shards: u, noRelative: v, noIsolation: h, inert: g, setCallbacks: a, allowPinchZoom: !!b, lockRef: n, gapMode: w }),
    i ? m.cloneElement(m.Children.only(s), on(on({}, _), { ref: P })) : m.createElement(x, on({}, _, { className: l, ref: P }), s)
  );
});
Di.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Di.classNames = {
  fullWidth: Ha,
  zeroRight: qa
};
var mM = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function hM() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = mM();
  return t && e.setAttribute("nonce", t), e;
}
function vM(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function gM(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var bM = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = hM()) && (vM(t, n), gM(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, yM = function() {
  var e = bM();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ix = function() {
  var e = yM(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, xM = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Os = function(e) {
  return parseInt(e || "", 10) || 0;
}, wM = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Os(n), Os(r), Os(o)];
}, SM = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return xM;
  var t = wM(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, _M = ix(), jr = "data-scroll-locked", CM = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(aM, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(jr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(qa, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ha, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(qa, " .").concat(qa, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ha, " .").concat(Ha, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(jr, `] {
    `).concat(iM, ": ").concat(s, `px;
  }
`);
}, Jm = function() {
  var e = parseInt(document.body.getAttribute(jr) || "0", 10);
  return isFinite(e) ? e : 0;
}, PM = function() {
  m.useEffect(function() {
    return document.body.setAttribute(jr, (Jm() + 1).toString()), function() {
      var e = Jm() - 1;
      e <= 0 ? document.body.removeAttribute(jr) : document.body.setAttribute(jr, e.toString());
    };
  }, []);
}, EM = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  PM();
  var a = m.useMemo(function() {
    return SM(o);
  }, [o]);
  return m.createElement(_M, { styles: CM(a, !t, o, n ? "" : "!important") });
}, dd = !1;
if (typeof window < "u")
  try {
    var Ta = Object.defineProperty({}, "passive", {
      get: function() {
        return dd = !0, !0;
      }
    });
    window.addEventListener("test", Ta, Ta), window.removeEventListener("test", Ta, Ta);
  } catch {
    dd = !1;
  }
var Cr = dd ? { passive: !1 } : !1, RM = function(e) {
  return e.tagName === "TEXTAREA";
}, sx = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !RM(e) && n[t] === "visible")
  );
}, TM = function(e) {
  return sx(e, "overflowY");
}, MM = function(e) {
  return sx(e, "overflowX");
}, Zm = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = lx(e, r);
    if (o) {
      var a = cx(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, NM = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, OM = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, lx = function(e, t) {
  return e === "v" ? TM(t) : MM(t);
}, cx = function(e, t) {
  return e === "v" ? NM(t) : OM(t);
}, AM = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, DM = function(e, t, n, r, o) {
  var a = AM(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), c = !1, f = i > 0, u = 0, p = 0;
  do {
    if (!s)
      break;
    var v = cx(e, s), h = v[0], g = v[1], b = v[2], y = g - b - a * h;
    (h || y) && lx(e, s) && (u += y, p += h);
    var x = s.parentNode;
    s = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (f && Math.abs(u) < 1 || !f && Math.abs(p) < 1) && (c = !0), c;
}, Ma = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Qm = function(e) {
  return [e.deltaX, e.deltaY];
}, eh = function(e) {
  return e && "current" in e ? e.current : e;
}, jM = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, kM = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, IM = 0, Pr = [];
function $M(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(IM++)[0], a = m.useState(ix)[0], i = m.useRef(e);
  m.useEffect(function() {
    i.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = oM([e.lockRef.current], (e.shards || []).map(eh), !0).filter(Boolean);
      return g.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = m.useCallback(function(g, b) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !i.current.allowPinchZoom;
    var y = Ma(g), x = n.current, w = "deltaX" in g ? g.deltaX : x[0] - y[0], S = "deltaY" in g ? g.deltaY : x[1] - y[1], C, P = g.target, _ = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in g && _ === "h" && P.type === "range")
      return !1;
    var R = window.getSelection(), T = R && R.anchorNode, z = T ? T === P || T.contains(P) : !1;
    if (z)
      return !1;
    var j = Zm(_, P);
    if (!j)
      return !0;
    if (j ? C = _ : (C = _ === "v" ? "h" : "v", j = Zm(_, P)), !j)
      return !1;
    if (!r.current && "changedTouches" in g && (w || S) && (r.current = C), !C)
      return !0;
    var B = r.current || C;
    return DM(B, b, g, B === "h" ? w : S);
  }, []), l = m.useCallback(function(g) {
    var b = g;
    if (!(!Pr.length || Pr[Pr.length - 1] !== a)) {
      var y = "deltaY" in b ? Qm(b) : Ma(b), x = t.current.filter(function(C) {
        return C.name === b.type && (C.target === b.target || b.target === C.shadowParent) && jM(C.delta, y);
      })[0];
      if (x && x.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!x) {
        var w = (i.current.shards || []).map(eh).filter(Boolean).filter(function(C) {
          return C.contains(b.target);
        }), S = w.length > 0 ? s(b, w[0]) : !i.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), c = m.useCallback(function(g, b, y, x) {
    var w = { name: g, delta: b, target: y, should: x, shadowParent: LM(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), f = m.useCallback(function(g) {
    n.current = Ma(g), r.current = void 0;
  }, []), u = m.useCallback(function(g) {
    c(g.type, Qm(g), g.target, s(g, e.lockRef.current));
  }, []), p = m.useCallback(function(g) {
    c(g.type, Ma(g), g.target, s(g, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return Pr.push(a), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, Cr), document.addEventListener("touchmove", l, Cr), document.addEventListener("touchstart", f, Cr), function() {
      Pr = Pr.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", l, Cr), document.removeEventListener("touchmove", l, Cr), document.removeEventListener("touchstart", f, Cr);
    };
  }, []);
  var v = e.removeScrollBar, h = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    h ? m.createElement(a, { styles: kM(o) }) : null,
    v ? m.createElement(EM, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function LM(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const FM = pM(ax, $M);
var Xo = m.forwardRef(function(e, t) {
  return m.createElement(Di, on({}, e, { ref: t, sideCar: FM }));
});
Xo.classNames = Di.classNames;
var zM = [" ", "Enter", "ArrowUp", "ArrowDown"], BM = [" ", "Enter"], Jo = "Select", [ji, ki, qM] = Ln(Jo), [ao] = Be(Jo, [
  qM,
  hn
]), Ii = hn(), [HM, zn] = ao(Jo), [WM, VM] = ao(Jo), ux = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: l,
    dir: c,
    name: f,
    autoComplete: u,
    disabled: p,
    required: v,
    form: h
  } = e, g = Ii(t), [b, y] = m.useState(null), [x, w] = m.useState(null), [S, C] = m.useState(!1), P = Zt(c), [_ = !1, R] = Ve({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [T, z] = Ve({
    prop: i,
    defaultProp: s,
    onChange: l
  }), j = m.useRef(null), B = b ? h || !!b.closest("form") : !0, [A, H] = m.useState(/* @__PURE__ */ new Set()), q = Array.from(A).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ d.jsx(no, { ...g, children: /* @__PURE__ */ d.jsxs(
    HM,
    {
      required: v,
      scope: t,
      trigger: b,
      onTriggerChange: y,
      valueNode: x,
      onValueNodeChange: w,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: ze(),
      value: T,
      onValueChange: z,
      open: _,
      onOpenChange: R,
      dir: P,
      triggerPointerDownPosRef: j,
      disabled: p,
      children: [
        /* @__PURE__ */ d.jsx(ji.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
          WM,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback(($) => {
              H((F) => new Set(F).add($));
            }, []),
            onNativeOptionRemove: m.useCallback(($) => {
              H((F) => {
                const M = new Set(F);
                return M.delete($), M;
              });
            }, []),
            children: n
          }
        ) }),
        B ? /* @__PURE__ */ d.jsxs(
          Ix,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: f,
            autoComplete: u,
            value: T,
            onChange: ($) => z($.target.value),
            disabled: p,
            form: h,
            children: [
              T === void 0 ? /* @__PURE__ */ d.jsx("option", { value: "" }) : null,
              Array.from(A)
            ]
          },
          q
        ) : null
      ]
    }
  ) });
};
ux.displayName = Jo;
var dx = "SelectTrigger", fx = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Ii(n), i = zn(dx, n), s = i.disabled || r, l = fe(t, i.onTriggerChange), c = ki(n), f = m.useRef("touch"), [u, p, v] = $x((g) => {
      const b = c().filter((w) => !w.disabled), y = b.find((w) => w.value === i.value), x = Lx(b, g, y);
      x !== void 0 && i.onValueChange(x.value);
    }), h = (g) => {
      s || (i.onOpenChange(!0), v()), g && (i.triggerPointerDownPosRef.current = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      });
    };
    return /* @__PURE__ */ d.jsx(ro, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
      ee.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": kx(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: U(o.onClick, (g) => {
          g.currentTarget.focus(), f.current !== "mouse" && h(g);
        }),
        onPointerDown: U(o.onPointerDown, (g) => {
          f.current = g.pointerType;
          const b = g.target;
          b.hasPointerCapture(g.pointerId) && b.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && g.pointerType === "mouse" && (h(g), g.preventDefault());
        }),
        onKeyDown: U(o.onKeyDown, (g) => {
          const b = u.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && p(g.key), !(b && g.key === " ") && zM.includes(g.key) && (h(), g.preventDefault());
        })
      }
    ) });
  }
);
fx.displayName = dx;
var px = "SelectValue", mx = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i = "", ...s } = e, l = zn(px, n), { onValueNodeHasChildrenChange: c } = l, f = a !== void 0, u = fe(t, l.onValueNodeChange);
    return Ye(() => {
      c(f);
    }, [c, f]), /* @__PURE__ */ d.jsx(
      ee.span,
      {
        ...s,
        ref: u,
        style: { pointerEvents: "none" },
        children: kx(l.value) ? /* @__PURE__ */ d.jsx(d.Fragment, { children: i }) : a
      }
    );
  }
);
mx.displayName = px;
var GM = "SelectIcon", hx = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(ee.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
hx.displayName = GM;
var UM = "SelectPortal", vx = (e) => /* @__PURE__ */ d.jsx(pr, { asChild: !0, ...e });
vx.displayName = UM;
var rr = "SelectContent", gx = m.forwardRef(
  (e, t) => {
    const n = zn(rr, e.__scopeSelect), [r, o] = m.useState();
    if (Ye(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Pi.createPortal(
        /* @__PURE__ */ d.jsx(bx, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx(ji.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ d.jsx(yx, { ...e, ref: t });
  }
);
gx.displayName = rr;
var Wt = 10, [bx, Bn] = ao(rr), KM = "SelectContentImpl", yx = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: l,
      align: c,
      alignOffset: f,
      arrowPadding: u,
      collisionBoundary: p,
      collisionPadding: v,
      sticky: h,
      hideWhenDetached: g,
      avoidCollisions: b,
      //
      ...y
    } = e, x = zn(rr, n), [w, S] = m.useState(null), [C, P] = m.useState(null), _ = fe(t, (I) => S(I)), [R, T] = m.useState(null), [z, j] = m.useState(
      null
    ), B = ki(n), [A, H] = m.useState(!1), q = m.useRef(!1);
    m.useEffect(() => {
      if (w) return Ai(w);
    }, [w]), Ri();
    const $ = m.useCallback(
      (I) => {
        const [Y, ...J] = B().map((X) => X.ref.current), [te] = J.slice(-1), ne = document.activeElement;
        for (const X of I)
          if (X === ne || (X == null || X.scrollIntoView({ block: "nearest" }), X === Y && C && (C.scrollTop = 0), X === te && C && (C.scrollTop = C.scrollHeight), X == null || X.focus(), document.activeElement !== ne)) return;
      },
      [B, C]
    ), F = m.useCallback(
      () => $([R, w]),
      [$, R, w]
    );
    m.useEffect(() => {
      A && F();
    }, [A, F]);
    const { onOpenChange: M, triggerPointerDownPosRef: G } = x;
    m.useEffect(() => {
      if (w) {
        let I = { x: 0, y: 0 };
        const Y = (te) => {
          var ne, X;
          I = {
            x: Math.abs(Math.round(te.pageX) - (((ne = G.current) == null ? void 0 : ne.x) ?? 0)),
            y: Math.abs(Math.round(te.pageY) - (((X = G.current) == null ? void 0 : X.y) ?? 0))
          };
        }, J = (te) => {
          I.x <= 10 && I.y <= 10 ? te.preventDefault() : w.contains(te.target) || M(!1), document.removeEventListener("pointermove", Y), G.current = null;
        };
        return G.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [w, M, G]), m.useEffect(() => {
      const I = () => M(!1);
      return window.addEventListener("blur", I), window.addEventListener("resize", I), () => {
        window.removeEventListener("blur", I), window.removeEventListener("resize", I);
      };
    }, [M]);
    const [oe, Z] = $x((I) => {
      const Y = B().filter((ne) => !ne.disabled), J = Y.find((ne) => ne.ref.current === document.activeElement), te = Lx(Y, I, J);
      te && setTimeout(() => te.ref.current.focus());
    }), L = m.useCallback(
      (I, Y, J) => {
        const te = !q.current && !J;
        (x.value !== void 0 && x.value === Y || te) && (T(I), te && (q.current = !0));
      },
      [x.value]
    ), D = m.useCallback(() => w == null ? void 0 : w.focus(), [w]), W = m.useCallback(
      (I, Y, J) => {
        const te = !q.current && !J;
        (x.value !== void 0 && x.value === Y || te) && j(I);
      },
      [x.value]
    ), V = r === "popper" ? fd : xx, K = V === fd ? {
      side: s,
      sideOffset: l,
      align: c,
      alignOffset: f,
      arrowPadding: u,
      collisionBoundary: p,
      collisionPadding: v,
      sticky: h,
      hideWhenDetached: g,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ d.jsx(
      bx,
      {
        scope: n,
        content: w,
        viewport: C,
        onViewportChange: P,
        itemRefCallback: L,
        selectedItem: R,
        onItemLeave: D,
        itemTextRefCallback: W,
        focusSelectedItem: F,
        selectedItemText: z,
        position: r,
        isPositioned: A,
        searchRef: oe,
        children: /* @__PURE__ */ d.jsx(Xo, { as: ut, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          Vo,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (I) => {
              I.preventDefault();
            },
            onUnmountAutoFocus: U(o, (I) => {
              var Y;
              (Y = x.trigger) == null || Y.focus({ preventScroll: !0 }), I.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              Fn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (I) => I.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  V,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (I) => I.preventDefault(),
                    ...y,
                    ...K,
                    onPlaced: () => H(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: U(y.onKeyDown, (I) => {
                      const Y = I.ctrlKey || I.altKey || I.metaKey;
                      if (I.key === "Tab" && I.preventDefault(), !Y && I.key.length === 1 && Z(I.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key)) {
                        let te = B().filter((ne) => !ne.disabled).map((ne) => ne.ref.current);
                        if (["ArrowUp", "End"].includes(I.key) && (te = te.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(I.key)) {
                          const ne = I.target, X = te.indexOf(ne);
                          te = te.slice(X + 1);
                        }
                        setTimeout(() => $(te)), I.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
yx.displayName = KM;
var YM = "SelectItemAlignedPosition", xx = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = zn(rr, n), i = Bn(rr, n), [s, l] = m.useState(null), [c, f] = m.useState(null), u = fe(t, (_) => f(_)), p = ki(n), v = m.useRef(!1), h = m.useRef(!0), { viewport: g, selectedItem: b, selectedItemText: y, focusSelectedItem: x } = i, w = m.useCallback(() => {
    if (a.trigger && a.valueNode && s && c && g && b && y) {
      const _ = a.trigger.getBoundingClientRect(), R = c.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), z = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ne = z.left - R.left, X = T.left - ne, ae = _.left - X, k = _.width + ae, re = Math.max(k, R.width), pe = window.innerWidth - Wt, me = Mo(X, [
          Wt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Wt, pe - re)
        ]);
        s.style.minWidth = k + "px", s.style.left = me + "px";
      } else {
        const ne = R.right - z.right, X = window.innerWidth - T.right - ne, ae = window.innerWidth - _.right - X, k = _.width + ae, re = Math.max(k, R.width), pe = window.innerWidth - Wt, me = Mo(X, [
          Wt,
          Math.max(Wt, pe - re)
        ]);
        s.style.minWidth = k + "px", s.style.right = me + "px";
      }
      const j = p(), B = window.innerHeight - Wt * 2, A = g.scrollHeight, H = window.getComputedStyle(c), q = parseInt(H.borderTopWidth, 10), $ = parseInt(H.paddingTop, 10), F = parseInt(H.borderBottomWidth, 10), M = parseInt(H.paddingBottom, 10), G = q + $ + A + M + F, oe = Math.min(b.offsetHeight * 5, G), Z = window.getComputedStyle(g), L = parseInt(Z.paddingTop, 10), D = parseInt(Z.paddingBottom, 10), W = _.top + _.height / 2 - Wt, V = B - W, K = b.offsetHeight / 2, I = b.offsetTop + K, Y = q + $ + I, J = G - Y;
      if (Y <= W) {
        const ne = j.length > 0 && b === j[j.length - 1].ref.current;
        s.style.bottom = "0px";
        const X = c.clientHeight - g.offsetTop - g.offsetHeight, ae = Math.max(
          V,
          K + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ne ? D : 0) + X + F
        ), k = Y + ae;
        s.style.height = k + "px";
      } else {
        const ne = j.length > 0 && b === j[0].ref.current;
        s.style.top = "0px";
        const ae = Math.max(
          W,
          q + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ne ? L : 0) + K
        ) + J;
        s.style.height = ae + "px", g.scrollTop = Y - W + g.offsetTop;
      }
      s.style.margin = `${Wt}px 0`, s.style.minHeight = oe + "px", s.style.maxHeight = B + "px", r == null || r(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    s,
    c,
    g,
    b,
    y,
    a.dir,
    r
  ]);
  Ye(() => w(), [w]);
  const [S, C] = m.useState();
  Ye(() => {
    c && C(window.getComputedStyle(c).zIndex);
  }, [c]);
  const P = m.useCallback(
    (_) => {
      _ && h.current === !0 && (w(), x == null || x(), h.current = !1);
    },
    [w, x]
  );
  return /* @__PURE__ */ d.jsx(
    JM,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ d.jsx(
            ee.div,
            {
              ...o,
              ref: u,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
xx.displayName = YM;
var XM = "SelectPopperPosition", fd = m.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Wt,
    ...a
  } = e, i = Ii(n);
  return /* @__PURE__ */ d.jsx(
    Ko,
    {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
fd.displayName = XM;
var [JM, yf] = ao(rr, {}), pd = "SelectViewport", wx = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Bn(pd, n), i = yf(pd, n), s = fe(t, a.onViewportChange), l = m.useRef(0);
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ d.jsx(ji.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(
        ee.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: U(o.onScroll, (c) => {
            const f = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: p } = i;
            if (p != null && p.current && u) {
              const v = Math.abs(l.current - f.scrollTop);
              if (v > 0) {
                const h = window.innerHeight - Wt * 2, g = parseFloat(u.style.minHeight), b = parseFloat(u.style.height), y = Math.max(g, b);
                if (y < h) {
                  const x = y + v, w = Math.min(h, x), S = x - w;
                  u.style.height = w + "px", u.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, u.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
wx.displayName = pd;
var Sx = "SelectGroup", [ZM, QM] = ao(Sx), _x = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ze();
    return /* @__PURE__ */ d.jsx(ZM, { scope: n, id: o, children: /* @__PURE__ */ d.jsx(ee.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
_x.displayName = Sx;
var Cx = "SelectLabel", Px = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = QM(Cx, n);
    return /* @__PURE__ */ d.jsx(ee.div, { id: o.id, ...r, ref: t });
  }
);
Px.displayName = Cx;
var Za = "SelectItem", [eN, Ex] = ao(Za), Rx = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = zn(Za, n), l = Bn(Za, n), c = s.value === r, [f, u] = m.useState(a ?? ""), [p, v] = m.useState(!1), h = fe(
      t,
      (x) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, x, r, o);
      }
    ), g = ze(), b = m.useRef("touch"), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d.jsx(
      eN,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: c,
        onItemTextChange: m.useCallback((x) => {
          u((w) => w || ((x == null ? void 0 : x.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d.jsx(
          ji.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ d.jsx(
              ee.div,
              {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": c && p,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: h,
                onFocus: U(i.onFocus, () => v(!0)),
                onBlur: U(i.onBlur, () => v(!1)),
                onClick: U(i.onClick, () => {
                  b.current !== "mouse" && y();
                }),
                onPointerUp: U(i.onPointerUp, () => {
                  b.current === "mouse" && y();
                }),
                onPointerDown: U(i.onPointerDown, (x) => {
                  b.current = x.pointerType;
                }),
                onPointerMove: U(i.onPointerMove, (x) => {
                  var w;
                  b.current = x.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : b.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: U(i.onPointerLeave, (x) => {
                  var w;
                  x.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: U(i.onKeyDown, (x) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && x.key === " " || (BM.includes(x.key) && y(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Rx.displayName = Za;
var wo = "SelectItemText", Tx = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, i = zn(wo, n), s = Bn(wo, n), l = Ex(wo, n), c = VM(wo, n), [f, u] = m.useState(null), p = fe(
      t,
      (y) => u(y),
      l.onItemTextChange,
      (y) => {
        var x;
        return (x = s.itemTextRefCallback) == null ? void 0 : x.call(s, y, l.value, l.disabled);
      }
    ), v = f == null ? void 0 : f.textContent, h = m.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: l.value, disabled: l.disabled, children: v }, l.value),
      [l.disabled, l.value, v]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: b } = c;
    return Ye(() => (g(h), () => b(h)), [g, b, h]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(ee.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? Pi.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
Tx.displayName = wo;
var Mx = "SelectItemIndicator", Nx = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Ex(Mx, n).isSelected ? /* @__PURE__ */ d.jsx(ee.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Nx.displayName = Mx;
var md = "SelectScrollUpButton", Ox = m.forwardRef((e, t) => {
  const n = Bn(md, e.__scopeSelect), r = yf(md, e.__scopeSelect), [o, a] = m.useState(!1), i = fe(t, r.onScrollButtonChange);
  return Ye(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const c = l.scrollTop > 0;
        a(c);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    Dx,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Ox.displayName = md;
var hd = "SelectScrollDownButton", Ax = m.forwardRef((e, t) => {
  const n = Bn(hd, e.__scopeSelect), r = yf(hd, e.__scopeSelect), [o, a] = m.useState(!1), i = fe(t, r.onScrollButtonChange);
  return Ye(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const c = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < c;
        a(f);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    Dx,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Ax.displayName = hd;
var Dx = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Bn("SelectScrollButton", n), i = m.useRef(null), s = ki(n), l = m.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return m.useEffect(() => () => l(), [l]), Ye(() => {
    var f;
    const c = s().find((u) => u.ref.current === document.activeElement);
    (f = c == null ? void 0 : c.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ d.jsx(
    ee.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: U(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: U(o.onPointerMove, () => {
        var c;
        (c = a.onItemLeave) == null || c.call(a), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: U(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), tN = "SelectSeparator", jx = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(ee.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
jx.displayName = tN;
var vd = "SelectArrow", nN = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ii(n), a = zn(vd, n), i = Bn(vd, n);
    return a.open && i.position === "popper" ? /* @__PURE__ */ d.jsx(Yo, { ...o, ...r, ref: t }) : null;
  }
);
nN.displayName = vd;
function kx(e) {
  return e === "" || e === void 0;
}
var Ix = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = m.useRef(null), a = fe(t, o), i = oo(n);
    return m.useEffect(() => {
      const s = o.current, l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== n && f) {
        const u = new Event("change", { bubbles: !0 });
        f.call(s, n), s.dispatchEvent(u);
      }
    }, [i, n]), /* @__PURE__ */ d.jsx(bf, { asChild: !0, children: /* @__PURE__ */ d.jsx("select", { ...r, ref: a, defaultValue: n }) });
  }
);
Ix.displayName = "BubbleSelect";
function $x(e) {
  const t = Ie(e), n = m.useRef(""), r = m.useRef(0), o = m.useCallback(
    (i) => {
      const s = n.current + i;
      t(s), (function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(s);
    },
    [t]
  ), a = m.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return m.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function Lx(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = rN(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function rN(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var oN = ux, aN = fx, iN = mx, sN = hx, lN = vx, cN = gx, uN = wx, dN = _x, fN = Px, pN = Rx, mN = Tx, hN = Nx, vN = Ox, gN = Ax, bN = jx;
function d4({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(oN, { "data-slot": "select", ...e });
}
function f4({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(dN, { "data-slot": "select-group", ...e });
}
function p4({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(iN, { "data-slot": "select-value", ...e });
}
function m4({
  className: e,
  size: t = "default",
  error: n,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ d.jsxs(
    aN,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      "aria-invalid": n,
      className: O(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ d.jsx(sN, { asChild: !0, children: /* @__PURE__ */ d.jsx(Wo, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function h4({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ d.jsx(lN, { children: /* @__PURE__ */ d.jsxs(
    cN,
    {
      "data-slot": "select-content",
      className: O(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(yN, {}),
        /* @__PURE__ */ d.jsx(
          uN,
          {
            className: O(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ d.jsx(xN, {})
      ]
    }
  ) });
}
function v4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    fN,
    {
      "data-slot": "select-label",
      className: O("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function g4({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(
    pN,
    {
      "data-slot": "select-item",
      className: O(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(hN, { children: /* @__PURE__ */ d.jsx(dr, { className: "size-4" }) }) }),
        /* @__PURE__ */ d.jsx(mN, { children: t })
      ]
    }
  );
}
function b4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    bN,
    {
      "data-slot": "select-separator",
      className: O("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function yN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    vN,
    {
      "data-slot": "select-scroll-up-button",
      className: O(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(aE, { className: "size-4" })
    }
  );
}
function xN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    gN,
    {
      "data-slot": "select-scroll-down-button",
      className: O(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(Wo, { className: "size-4" })
    }
  );
}
var xf = "Switch", [wN] = Be(xf), [SN, _N] = wN(xf), Fx = m.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l = "on",
      onCheckedChange: c,
      form: f,
      ...u
    } = e, [p, v] = m.useState(null), h = fe(t, (w) => v(w)), g = m.useRef(!1), b = p ? f || !!p.closest("form") : !0, [y = !1, x] = Ve({
      prop: o,
      defaultProp: a,
      onChange: c
    });
    return /* @__PURE__ */ d.jsxs(SN, { scope: n, checked: y, disabled: s, children: [
      /* @__PURE__ */ d.jsx(
        ee.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": i,
          "data-state": qx(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...u,
          ref: h,
          onClick: U(e.onClick, (w) => {
            x((S) => !S), b && (g.current = w.isPropagationStopped(), g.current || w.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ d.jsx(
        CN,
        {
          control: p,
          bubbles: !g.current,
          name: r,
          value: l,
          checked: y,
          required: i,
          disabled: s,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Fx.displayName = xf;
var zx = "SwitchThumb", Bx = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = _N(zx, n);
    return /* @__PURE__ */ d.jsx(
      ee.span,
      {
        "data-state": qx(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Bx.displayName = zx;
var CN = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = m.useRef(null), i = oo(n), s = Uo(t);
  return m.useEffect(() => {
    const l = a.current, c = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (i !== n && u) {
      const p = new Event("click", { bubbles: r });
      u.call(l, n), l.dispatchEvent(p);
    }
  }, [i, n, r]), /* @__PURE__ */ d.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...s,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function qx(e) {
  return e ? "checked" : "unchecked";
}
var PN = Fx, EN = Bx;
function y4({
  className: e,
  label: t,
  ...n
}) {
  const r = /* @__PURE__ */ d.jsx(
    PN,
    {
      "data-slot": "switch",
      className: O(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...n,
      children: /* @__PURE__ */ d.jsx(
        EN,
        {
          "data-slot": "switch-thumb",
          className: O(
            "bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
  return t ? /* @__PURE__ */ d.jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
    r,
    t && /* @__PURE__ */ d.jsx("span", { className: "text-sm font-medium", children: t })
  ] }) : r;
}
function RN({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ d.jsx(
        "table",
        {
          "data-slot": "table",
          className: O("w-full caption-bottom text-sm", e),
          ...t
        }
      )
    }
  );
}
function TN({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: O("[&_tr]:border-b", e),
      ...t
    }
  );
}
function MN({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: O("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function x4({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: O(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...t
    }
  );
}
function As({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: O(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        e
      ),
      ...t
    }
  );
}
function NN({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: O(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function th({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: O(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function w4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "caption",
    {
      "data-slot": "table-caption",
      className: O("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function S4({
  data: e,
  columns: t,
  bordered: n = !0,
  striped: r = !1,
  className: o = "",
  ...a
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: O(
        "w-full overflow-auto rounded-lg",
        n && "border",
        o
      ),
      ...a,
      children: /* @__PURE__ */ d.jsxs(RN, { children: [
        /* @__PURE__ */ d.jsx(TN, { className: "bg-muted/50", children: /* @__PURE__ */ d.jsx(As, { children: t.map((i, s) => /* @__PURE__ */ d.jsx(
          NN,
          {
            className: O(
              n && s !== 0 && "border-l"
            ),
            children: i.header
          },
          i.key
        )) }) }),
        /* @__PURE__ */ d.jsxs(MN, { children: [
          e.map((i, s) => /* @__PURE__ */ d.jsx(
            As,
            {
              className: O(
                r && s % 2 === 1 && "bg-muted/30"
              ),
              children: t.map((l, c) => /* @__PURE__ */ d.jsx(
                th,
                {
                  className: O(
                    n && c !== 0 && "border-l"
                  ),
                  children: l.render ? l.render(i) : i[l.key]
                },
                l.key
              ))
            },
            s
          )),
          e.length === 0 && /* @__PURE__ */ d.jsx(As, { children: /* @__PURE__ */ d.jsx(
            th,
            {
              colSpan: t.length,
              className: "h-24 text-center text-muted-foreground",
              children: "No data available"
            }
          ) })
        ] })
      ] })
    }
  );
}
function _4({
  className: e,
  error: t,
  fieldSize: n = "default",
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      "data-size": n,
      "aria-invalid": t,
      className: O(
        "resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "data-[size=sm]:min-h-20 data-[size=default]:min-h-24 data-[size=md]:min-h-28 data-[size=lg]:min-h-32",
        e
      ),
      ...r
    }
  );
}
const ON = Ft(
  ({ margin: e = "none", bordered: t = !1, className: n = "", children: r, ...o }, a) => {
    const i = {
      none: "",
      sm: "m-2",
      md: "m-4",
      lg: "m-6",
      xl: "m-8"
    };
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: a,
        className: `${i[e]} ${t ? "border-2 border-border rounded-lg" : ""} ${n}`,
        ...o,
        children: r
      }
    );
  }
);
ON.displayName = "Container";
function C4({
  options: e,
  value: t,
  onChange: n,
  placeholder: r = "Select an option...",
  error: o = !1,
  disabled: a = !1,
  size: i = "md",
  className: s = ""
}) {
  const [l, c] = cn(!1), f = Lr(null), u = e.find((h) => h.value === t), p = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4",
    lg: "h-14 px-5 text-lg"
  };
  $t(() => {
    const h = (g) => {
      f.current && !f.current.contains(g.target) && c(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []);
  const v = (h) => {
    n == null || n(h), c(!1);
  };
  return /* @__PURE__ */ d.jsxs("div", { ref: f, className: `relative ${s}`, children: [
    /* @__PURE__ */ d.jsxs(
      "button",
      {
        type: "button",
        onClick: () => !a && c(!l),
        disabled: a,
        className: `
          w-full ${p[i]} rounded-lg 
          bg-input-background border-2 border-transparent
          transition-colors
          flex items-center justify-between
          text-left
          focus:outline-none focus:border-primary
          disabled:opacity-50 disabled:pointer-events-none
          ${o ? "border-destructive focus:border-destructive" : ""}
          ${u ? "" : "text-muted-foreground"}
        `,
        children: [
          /* @__PURE__ */ d.jsx("span", { children: u ? u.label : r }),
          /* @__PURE__ */ d.jsx(
            Wo,
            {
              className: `w-5 h-5 transition-transform ${l ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    l && /* @__PURE__ */ d.jsx("div", { className: "absolute z-50 w-full mt-2 bg-popover border-2 border-border rounded-lg shadow-lg max-h-60 overflow-auto", children: e.map((h) => /* @__PURE__ */ d.jsxs(
      "button",
      {
        type: "button",
        onClick: () => v(h.value),
        className: `
                w-full px-4 py-3 text-left flex items-center justify-between
                transition-colors
                hover:bg-accent
                ${h.value === t ? "bg-accent/50" : ""}
              `,
        children: [
          /* @__PURE__ */ d.jsx("span", { children: h.label }),
          h.value === t && /* @__PURE__ */ d.jsx(dr, { className: "w-5 h-5 text-primary" })
        ]
      },
      h.value
    )) })
  ] });
}
const AN = Ft(
  ({
    direction: e = "row",
    justify: t = "start",
    align: n = "start",
    wrap: r = !1,
    gap: o = "none",
    className: a = "",
    children: i,
    ...s
  }, l) => {
    const c = {
      row: "flex-row",
      col: "flex-col",
      "row-reverse": "flex-row-reverse",
      "col-reverse": "flex-col-reverse"
    }, f = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly"
    }, u = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline"
    }, p = {
      none: "",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8"
    };
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: l,
        className: `flex ${c[e]} ${f[t]} ${u[n]} ${r ? "flex-wrap" : ""} ${p[o]} ${a}`,
        ...s,
        children: i
      }
    );
  }
);
AN.displayName = "Flex";
const DN = Ft(
  ({
    cols: e = "auto",
    gap: t = "md",
    rows: n = "auto",
    className: r = "",
    children: o,
    ...a
  }, i) => {
    const s = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      12: "grid-cols-12",
      auto: "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
    }, l = {
      none: "",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8"
    }, c = n === "auto" ? "" : `grid-rows-${n}`;
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: i,
        className: `grid ${s[e]} ${l[t]} ${c} ${r}`,
        ...a,
        children: o
      }
    );
  }
);
DN.displayName = "Grid";
const $i = Ft(
  ({ isOpen: e, onClose: t, variant: n = "popup", title: r, className: o = "", children: a, ...i }, s) => {
    if ($t(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
      document.body.style.overflow = "unset";
    }), [e]), $t(() => {
      const u = (p) => {
        p.key === "Escape" && e && t();
      };
      return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
    }, [e, t]), !e) return null;
    const l = {
      fullscreen: "inset-0",
      popup: "inset-0 flex items-center justify-center p-4",
      side: "inset-y-0 right-0"
    }, c = {
      fullscreen: "w-full h-full bg-background",
      popup: "bg-card rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto",
      side: "w-full max-w-md h-full bg-card shadow-2xl"
    }, f = {
      fullscreen: "animate-in fade-in duration-200",
      popup: "animate-in fade-in zoom-in-95 duration-200",
      side: "animate-in slide-in-from-right duration-300"
    };
    return /* @__PURE__ */ d.jsxs("div", { className: "fixed inset-0 z-50", children: [
      /* @__PURE__ */ d.jsx(
        "div",
        {
          className: "fixed inset-0 bg-black/50 animate-in fade-in duration-200",
          onClick: t
        }
      ),
      /* @__PURE__ */ d.jsx("div", { className: `fixed ${l[n]}`, children: /* @__PURE__ */ d.jsxs(
        "div",
        {
          ref: s,
          className: `relative ${c[n]} ${f[n]} ${o}`,
          ...i,
          children: [
            (r || n !== "fullscreen") && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-between p-6 border-b-2 border-border", children: [
              r && /* @__PURE__ */ d.jsx("h2", { children: r }),
              /* @__PURE__ */ d.jsx(
                "button",
                {
                  onClick: t,
                  className: "ml-auto p-2 rounded-lg hover:bg-accent transition-colors",
                  "aria-label": "Close modal",
                  children: /* @__PURE__ */ d.jsx(af, { className: "w-5 h-5" })
                }
              )
            ] }),
            /* @__PURE__ */ d.jsx("div", { className: "p-6", children: a })
          ]
        }
      ) })
    ] });
  }
);
$i.displayName = "Modal";
const jN = Ft(
  (e, t) => /* @__PURE__ */ d.jsx($i, { ref: t, variant: "fullscreen", ...e })
);
jN.displayName = "FullscreenModal";
const kN = Ft(
  (e, t) => /* @__PURE__ */ d.jsx($i, { ref: t, variant: "popup", ...e })
);
kN.displayName = "PopupModal";
const IN = Ft(
  (e, t) => /* @__PURE__ */ d.jsx($i, { ref: t, variant: "side", ...e })
);
IN.displayName = "SideModal";
const $N = Ft(
  ({ padding: e = "md", bordered: t = !1, className: n = "", children: r, ...o }, a) => {
    const i = {
      none: "",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      xl: "p-8"
    };
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: a,
        className: `${i[e]} ${t ? "border-2 border-border rounded-lg" : ""} ${n}`,
        ...o,
        children: r
      }
    );
  }
);
$N.displayName = "Padded";
function P4({
  options: e,
  value: t,
  onChange: n,
  multiple: r = !1,
  className: o = ""
}) {
  const a = Array.isArray(t) ? t : t ? [t] : [], i = (l) => {
    if (r) {
      const c = a.includes(l) ? a.filter((f) => f !== l) : [...a, l];
      n == null || n(c);
    } else
      n == null || n(l);
  }, s = (l) => a.includes(l);
  return /* @__PURE__ */ d.jsx("div", { className: `space-y-2 ${o}`, children: e.map((l) => {
    const c = s(l.value);
    return /* @__PURE__ */ d.jsx(
      "button",
      {
        type: "button",
        onClick: () => i(l.value),
        className: `
              w-full p-4 rounded-lg border-2 text-left
              transition-all
              ${c ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50 hover:bg-accent/50"}
            `,
        children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ d.jsx("div", { className: `
                w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5
                border-2 transition-colors
                ${c ? "bg-primary border-primary" : "border-border bg-background"}
              `, children: c && /* @__PURE__ */ d.jsx(dr, { className: "w-3 h-3 text-primary-foreground" }) }),
          /* @__PURE__ */ d.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx("div", { className: "font-medium", children: l.label }),
            l.description && /* @__PURE__ */ d.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: l.description })
          ] })
        ] })
      },
      l.value
    );
  }) });
}
function LN(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var qe = (e) => {
  const { present: t, children: n } = e, r = FN(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), a = fe(r.ref, zN(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: a }) : null;
};
qe.displayName = "Presence";
function FN(e) {
  const [t, n] = m.useState(), r = m.useRef({}), o = m.useRef(e), a = m.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = LN(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return m.useEffect(() => {
    const c = Na(r.current);
    a.current = s === "mounted" ? c : "none";
  }, [s]), Ye(() => {
    const c = r.current, f = o.current;
    if (f !== e) {
      const p = a.current, v = Na(c);
      e ? l("MOUNT") : v === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(f && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ye(() => {
    if (t) {
      let c;
      const f = t.ownerDocument.defaultView ?? window, u = (v) => {
        const g = Na(r.current).includes(v.animationName);
        if (v.target === t && g && (l("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, p = (v) => {
        v.target === t && (a.current = Na(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        f.clearTimeout(c), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: m.useCallback((c) => {
      c && (r.current = getComputedStyle(c)), n(c);
    }, [])
  };
}
function Na(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function zN(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var wf = "Collapsible", [BN, Hx] = Be(wf), [qN, Sf] = BN(wf), Wx = m.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...s
    } = e, [l = !1, c] = Ve({
      prop: r,
      defaultProp: o,
      onChange: i
    });
    return /* @__PURE__ */ d.jsx(
      qN,
      {
        scope: n,
        disabled: a,
        contentId: ze(),
        open: l,
        onOpenToggle: m.useCallback(() => c((f) => !f), [c]),
        children: /* @__PURE__ */ d.jsx(
          ee.div,
          {
            "data-state": Ef(l),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
Wx.displayName = wf;
var Vx = "CollapsibleTrigger", _f = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Sf(Vx, n);
    return /* @__PURE__ */ d.jsx(
      ee.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Ef(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: U(e.onClick, o.onOpenToggle)
      }
    );
  }
);
_f.displayName = Vx;
var Cf = "CollapsibleContent", Pf = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Sf(Cf, e.__scopeCollapsible);
    return /* @__PURE__ */ d.jsx(qe, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ d.jsx(HN, { ...r, ref: t, present: a }) });
  }
);
Pf.displayName = Cf;
var HN = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, i = Sf(Cf, n), [s, l] = m.useState(r), c = m.useRef(null), f = fe(t, c), u = m.useRef(0), p = u.current, v = m.useRef(0), h = v.current, g = i.open || s, b = m.useRef(g), y = m.useRef(void 0);
  return m.useEffect(() => {
    const x = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(x);
  }, []), Ye(() => {
    const x = c.current;
    if (x) {
      y.current = y.current || {
        transitionDuration: x.style.transitionDuration,
        animationName: x.style.animationName
      }, x.style.transitionDuration = "0s", x.style.animationName = "none";
      const w = x.getBoundingClientRect();
      u.current = w.height, v.current = w.width, b.current || (x.style.transitionDuration = y.current.transitionDuration, x.style.animationName = y.current.animationName), l(r);
    }
  }, [i.open, r]), /* @__PURE__ */ d.jsx(
    ee.div,
    {
      "data-state": Ef(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !g,
      ...a,
      ref: f,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": h ? `${h}px` : void 0,
        ...e.style
      },
      children: g && o
    }
  );
});
function Ef(e) {
  return e ? "open" : "closed";
}
var Gx = Wx, WN = _f, VN = Pf, Rn = "Accordion", GN = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Rf, UN, KN] = Ln(Rn), [Li] = Be(Rn, [
  KN,
  Hx
]), Tf = Hx(), Ux = E.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ d.jsx(Rf.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ d.jsx(ZN, { ...a, ref: t }) : /* @__PURE__ */ d.jsx(JN, { ...o, ref: t }) });
  }
);
Ux.displayName = Rn;
var [Kx, YN] = Li(Rn), [Yx, XN] = Li(
  Rn,
  { collapsible: !1 }
), JN = E.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...i
    } = e, [s, l] = Ve({
      prop: n,
      defaultProp: r,
      onChange: o
    });
    return /* @__PURE__ */ d.jsx(
      Kx,
      {
        scope: e.__scopeAccordion,
        value: s ? [s] : [],
        onItemOpen: l,
        onItemClose: E.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ d.jsx(Yx, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ d.jsx(Xx, { ...i, ref: t }) })
      }
    );
  }
), ZN = E.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i = [], s] = Ve({
    prop: n,
    defaultProp: r,
    onChange: o
  }), l = E.useCallback(
    (f) => s((u = []) => [...u, f]),
    [s]
  ), c = E.useCallback(
    (f) => s((u = []) => u.filter((p) => p !== f)),
    [s]
  );
  return /* @__PURE__ */ d.jsx(
    Kx,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: l,
      onItemClose: c,
      children: /* @__PURE__ */ d.jsx(Yx, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ d.jsx(Xx, { ...a, ref: t }) })
    }
  );
}), [QN, Fi] = Li(Rn), Xx = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...i } = e, s = E.useRef(null), l = fe(s, t), c = UN(n), u = Zt(o) === "ltr", p = U(e.onKeyDown, (v) => {
      var R;
      if (!GN.includes(v.key)) return;
      const h = v.target, g = c().filter((T) => {
        var z;
        return !((z = T.ref.current) != null && z.disabled);
      }), b = g.findIndex((T) => T.ref.current === h), y = g.length;
      if (b === -1) return;
      v.preventDefault();
      let x = b;
      const w = 0, S = y - 1, C = () => {
        x = b + 1, x > S && (x = w);
      }, P = () => {
        x = b - 1, x < w && (x = S);
      };
      switch (v.key) {
        case "Home":
          x = w;
          break;
        case "End":
          x = S;
          break;
        case "ArrowRight":
          a === "horizontal" && (u ? C() : P());
          break;
        case "ArrowDown":
          a === "vertical" && C();
          break;
        case "ArrowLeft":
          a === "horizontal" && (u ? P() : C());
          break;
        case "ArrowUp":
          a === "vertical" && P();
          break;
      }
      const _ = x % y;
      (R = g[_].ref.current) == null || R.focus();
    });
    return /* @__PURE__ */ d.jsx(
      QN,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ d.jsx(Rf.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(
          ee.div,
          {
            ...i,
            "data-orientation": a,
            ref: l,
            onKeyDown: r ? void 0 : p
          }
        ) })
      }
    );
  }
), Qa = "AccordionItem", [eO, Mf] = Li(Qa), Jx = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = Fi(Qa, n), i = YN(Qa, n), s = Tf(n), l = ze(), c = r && i.value.includes(r) || !1, f = a.disabled || e.disabled;
    return /* @__PURE__ */ d.jsx(
      eO,
      {
        scope: n,
        open: c,
        disabled: f,
        triggerId: l,
        children: /* @__PURE__ */ d.jsx(
          Gx,
          {
            "data-orientation": a.orientation,
            "data-state": rw(c),
            ...s,
            ...o,
            ref: t,
            disabled: f,
            open: c,
            onOpenChange: (u) => {
              u ? i.onItemOpen(r) : i.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
Jx.displayName = Qa;
var Zx = "AccordionHeader", Qx = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Fi(Rn, n), a = Mf(Zx, n);
    return /* @__PURE__ */ d.jsx(
      ee.h3,
      {
        "data-orientation": o.orientation,
        "data-state": rw(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Qx.displayName = Zx;
var gd = "AccordionTrigger", ew = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Fi(Rn, n), a = Mf(gd, n), i = XN(gd, n), s = Tf(n);
    return /* @__PURE__ */ d.jsx(Rf.ItemSlot, { scope: n, children: /* @__PURE__ */ d.jsx(
      WN,
      {
        "aria-disabled": a.open && !i.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...s,
        ...r,
        ref: t
      }
    ) });
  }
);
ew.displayName = gd;
var tw = "AccordionContent", nw = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Fi(Rn, n), a = Mf(tw, n), i = Tf(n);
    return /* @__PURE__ */ d.jsx(
      VN,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...i,
        ...r,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
nw.displayName = tw;
function rw(e) {
  return e ? "open" : "closed";
}
var tO = Ux, nO = Jx, rO = Qx, oO = ew, aO = nw;
function E4({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(tO, { "data-slot": "accordion", ...e });
}
function R4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    nO,
    {
      "data-slot": "accordion-item",
      className: O("border-b last:border-b-0", e),
      ...t
    }
  );
}
function T4({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(rO, { className: "flex", children: /* @__PURE__ */ d.jsxs(
    oO,
    {
      "data-slot": "accordion-trigger",
      className: O(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ d.jsx(Wo, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function M4({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    aO,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...n,
      children: /* @__PURE__ */ d.jsx("div", { className: O("pt-0 pb-4", e), children: t })
    }
  );
}
var Nf = "Dialog", [ow, aw] = Be(Nf), [iO, Qt] = ow(Nf), iw = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = m.useRef(null), l = m.useRef(null), [c = !1, f] = Ve({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ d.jsx(
    iO,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: ze(),
      titleId: ze(),
      descriptionId: ze(),
      open: c,
      onOpenChange: f,
      onOpenToggle: m.useCallback(() => f((u) => !u), [f]),
      modal: i,
      children: n
    }
  );
};
iw.displayName = Nf;
var sw = "DialogTrigger", lw = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(sw, n), a = fe(t, o.triggerRef);
    return /* @__PURE__ */ d.jsx(
      ee.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Df(o.open),
        ...r,
        ref: a,
        onClick: U(e.onClick, o.onOpenToggle)
      }
    );
  }
);
lw.displayName = sw;
var Of = "DialogPortal", [sO, cw] = ow(Of, {
  forceMount: void 0
}), uw = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Qt(Of, t);
  return /* @__PURE__ */ d.jsx(sO, { scope: t, forceMount: n, children: m.Children.map(r, (i) => /* @__PURE__ */ d.jsx(qe, { present: n || a.open, children: /* @__PURE__ */ d.jsx(pr, { asChild: !0, container: o, children: i }) })) });
};
uw.displayName = Of;
var ei = "DialogOverlay", dw = m.forwardRef(
  (e, t) => {
    const n = cw(ei, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Qt(ei, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ d.jsx(qe, { present: r || a.open, children: /* @__PURE__ */ d.jsx(lO, { ...o, ref: t }) }) : null;
  }
);
dw.displayName = ei;
var lO = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(ei, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d.jsx(Xo, { as: ut, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d.jsx(
        ee.div,
        {
          "data-state": Df(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), or = "DialogContent", fw = m.forwardRef(
  (e, t) => {
    const n = cw(or, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Qt(or, e.__scopeDialog);
    return /* @__PURE__ */ d.jsx(qe, { present: r || a.open, children: a.modal ? /* @__PURE__ */ d.jsx(cO, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(uO, { ...o, ref: t }) });
  }
);
fw.displayName = or;
var cO = m.forwardRef(
  (e, t) => {
    const n = Qt(or, e.__scopeDialog), r = m.useRef(null), o = fe(t, n.contentRef, r);
    return m.useEffect(() => {
      const a = r.current;
      if (a) return Ai(a);
    }, []), /* @__PURE__ */ d.jsx(
      pw,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: U(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: U(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: U(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), uO = m.forwardRef(
  (e, t) => {
    const n = Qt(or, e.__scopeDialog), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      pw,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), pw = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = Qt(or, n), l = m.useRef(null), c = fe(t, l);
    return Ri(), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        Vo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ d.jsx(
            Fn,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Df(s.open),
              ...i,
              ref: c,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(fO, { titleId: s.titleId }),
        /* @__PURE__ */ d.jsx(mO, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Af = "DialogTitle", mw = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(Af, n);
    return /* @__PURE__ */ d.jsx(ee.h2, { id: o.titleId, ...r, ref: t });
  }
);
mw.displayName = Af;
var hw = "DialogDescription", vw = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(hw, n);
    return /* @__PURE__ */ d.jsx(ee.p, { id: o.descriptionId, ...r, ref: t });
  }
);
vw.displayName = hw;
var gw = "DialogClose", bw = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(gw, n);
    return /* @__PURE__ */ d.jsx(
      ee.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: U(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
bw.displayName = gw;
function Df(e) {
  return e ? "open" : "closed";
}
var yw = "DialogTitleWarning", [dO, xw] = fR(yw, {
  contentName: or,
  titleName: Af,
  docsSlug: "dialog"
}), fO = ({ titleId: e }) => {
  const t = xw(yw), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, pO = "DialogDescriptionWarning", mO = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${xw(pO).contentName}}.`;
  return m.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Zo = iw, zi = lw, Qo = uw, ea = dw, ta = fw, Bi = mw, qi = vw, mr = bw, ww = "AlertDialog", [hO] = Be(ww, [
  aw
]), Tn = aw(), Sw = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Tn(t);
  return /* @__PURE__ */ d.jsx(Zo, { ...r, ...n, modal: !0 });
};
Sw.displayName = ww;
var vO = "AlertDialogTrigger", _w = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
    return /* @__PURE__ */ d.jsx(zi, { ...o, ...r, ref: t });
  }
);
_w.displayName = vO;
var gO = "AlertDialogPortal", Cw = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Tn(t);
  return /* @__PURE__ */ d.jsx(Qo, { ...r, ...n });
};
Cw.displayName = gO;
var bO = "AlertDialogOverlay", Pw = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
    return /* @__PURE__ */ d.jsx(ea, { ...o, ...r, ref: t });
  }
);
Pw.displayName = bO;
var kr = "AlertDialogContent", [yO, xO] = hO(kr), Ew = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, a = Tn(n), i = m.useRef(null), s = fe(t, i), l = m.useRef(null);
    return /* @__PURE__ */ d.jsx(
      dO,
      {
        contentName: kr,
        titleName: Rw,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ d.jsx(yO, { scope: n, cancelRef: l, children: /* @__PURE__ */ d.jsxs(
          ta,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: U(o.onOpenAutoFocus, (c) => {
              var f;
              c.preventDefault(), (f = l.current) == null || f.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (c) => c.preventDefault(),
            onInteractOutside: (c) => c.preventDefault(),
            children: [
              /* @__PURE__ */ d.jsx(lf, { children: r }),
              /* @__PURE__ */ d.jsx(SO, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
Ew.displayName = kr;
var Rw = "AlertDialogTitle", Tw = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
    return /* @__PURE__ */ d.jsx(Bi, { ...o, ...r, ref: t });
  }
);
Tw.displayName = Rw;
var Mw = "AlertDialogDescription", Nw = m.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
  return /* @__PURE__ */ d.jsx(qi, { ...o, ...r, ref: t });
});
Nw.displayName = Mw;
var wO = "AlertDialogAction", Ow = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
    return /* @__PURE__ */ d.jsx(mr, { ...o, ...r, ref: t });
  }
);
Ow.displayName = wO;
var Aw = "AlertDialogCancel", Dw = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = xO(Aw, n), a = Tn(n), i = fe(t, o);
    return /* @__PURE__ */ d.jsx(mr, { ...a, ...r, ref: i });
  }
);
Dw.displayName = Aw;
var SO = ({ contentRef: e }) => {
  const t = `\`${kr}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${kr}\` by passing a \`${Mw}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${kr}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return m.useEffect(() => {
    var r;
    document.getElementById(
      (r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, _O = Sw, CO = _w, PO = Cw, EO = Pw, RO = Ew, TO = Ow, MO = Dw, NO = Tw, OO = Nw;
function N4({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(_O, { "data-slot": "alert-dialog", ...e });
}
function O4({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(CO, { "data-slot": "alert-dialog-trigger", ...e });
}
function AO({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(PO, { "data-slot": "alert-dialog-portal", ...e });
}
function DO({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    EO,
    {
      "data-slot": "alert-dialog-overlay",
      className: O(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function A4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsxs(AO, { children: [
    /* @__PURE__ */ d.jsx(DO, {}),
    /* @__PURE__ */ d.jsx(
      RO,
      {
        "data-slot": "alert-dialog-content",
        className: O(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function D4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: O("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function j4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: O(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function k4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    NO,
    {
      "data-slot": "alert-dialog-title",
      className: O("text-lg font-semibold", e),
      ...t
    }
  );
}
function I4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    OO,
    {
      "data-slot": "alert-dialog-description",
      className: O("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function $4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    TO,
    {
      className: O(Fr(), e),
      ...t
    }
  );
}
function L4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    MO,
    {
      className: O(Fr({ variant: "outline" }), e),
      ...t
    }
  );
}
var jO = "AspectRatio", jw = m.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / n}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ d.jsx(
          ee.div,
          {
            ...o,
            ref: t,
            style: {
              ...r,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
jw.displayName = jO;
var kO = jw;
function F4({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(kO, { "data-slot": "aspect-ratio", ...e });
}
var jf = "Avatar", [IO] = Be(jf), [$O, kw] = IO(jf), Iw = m.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = m.useState("idle");
    return /* @__PURE__ */ d.jsx(
      $O,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ d.jsx(ee.span, { ...r, ref: t })
      }
    );
  }
);
Iw.displayName = jf;
var $w = "AvatarImage", Lw = m.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = kw($w, n), s = LO(r, a.referrerPolicy), l = Ie((c) => {
      o(c), i.onImageLoadingStatusChange(c);
    });
    return Ye(() => {
      s !== "idle" && l(s);
    }, [s, l]), s === "loaded" ? /* @__PURE__ */ d.jsx(ee.img, { ...a, ref: t, src: r }) : null;
  }
);
Lw.displayName = $w;
var Fw = "AvatarFallback", zw = m.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = kw(Fw, n), [i, s] = m.useState(r === void 0);
    return m.useEffect(() => {
      if (r !== void 0) {
        const l = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(l);
      }
    }, [r]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ d.jsx(ee.span, { ...o, ref: t }) : null;
  }
);
zw.displayName = Fw;
function LO(e, t) {
  const [n, r] = m.useState("idle");
  return Ye(() => {
    if (!e) {
      r("error");
      return;
    }
    let o = !0;
    const a = new window.Image(), i = (s) => () => {
      o && r(s);
    };
    return r("loading"), a.onload = i("loaded"), a.onerror = i("error"), a.src = e, t && (a.referrerPolicy = t), () => {
      o = !1;
    };
  }, [e, t]), n;
}
var FO = Iw, zO = Lw, BO = zw;
function z4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    FO,
    {
      "data-slot": "avatar",
      className: O(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t
    }
  );
}
function B4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    zO,
    {
      "data-slot": "avatar-image",
      className: O("aspect-square size-full", e),
      ...t
    }
  );
}
function q4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    BO,
    {
      "data-slot": "avatar-fallback",
      className: O(
        "bg-muted flex size-full items-center justify-center rounded-full",
        e
      ),
      ...t
    }
  );
}
function H4({ ...e }) {
  return /* @__PURE__ */ d.jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function W4({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: O(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function V4({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: O("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function G4({
  asChild: e,
  className: t,
  ...n
}) {
  const r = e ? ut : "a";
  return /* @__PURE__ */ d.jsx(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: O("hover:text-foreground transition-colors", t),
      ...n
    }
  );
}
function U4({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: O("text-foreground font-normal", e),
      ...t
    }
  );
}
function K4({
  children: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: O("[&>svg]:size-3.5", t),
      ...n,
      children: e ?? /* @__PURE__ */ d.jsx(Jr, {})
    }
  );
}
function Y4({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsxs(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: O("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ d.jsx(yy, { className: "size-4" }),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function Te(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Nt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function gt(e, t) {
  const n = Te(e);
  return isNaN(t) ? Nt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Xt(e, t) {
  const n = Te(e);
  if (isNaN(t)) return Nt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = Nt(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const kf = 6048e5, qO = 864e5;
let HO = {};
function na() {
  return HO;
}
function fn(e, t) {
  var s, l, c, f;
  const n = na(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = Te(e), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function ar(e) {
  return fn(e, { weekStartsOn: 1 });
}
function Bw(e) {
  const t = Te(e), n = t.getFullYear(), r = Nt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = ar(r), a = Nt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const i = ar(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function Br(e) {
  const t = Te(e);
  return t.setHours(0, 0, 0, 0), t;
}
function ti(e) {
  const t = Te(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function sn(e, t) {
  const n = Br(e), r = Br(t), o = +n - ti(n), a = +r - ti(r);
  return Math.round((o - a) / qO);
}
function WO(e) {
  const t = Bw(e), n = Nt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), ar(n);
}
function bd(e, t) {
  const n = t * 7;
  return gt(e, n);
}
function VO(e, t) {
  return Xt(e, t * 12);
}
function GO(e) {
  let t;
  return e.forEach(function(n) {
    const r = Te(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function UO(e) {
  let t;
  return e.forEach((n) => {
    const r = Te(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Ct(e, t) {
  const n = Br(e), r = Br(t);
  return +n == +r;
}
function If(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function KO(e) {
  if (!If(e) && typeof e != "number")
    return !1;
  const t = Te(e);
  return !isNaN(Number(t));
}
function Oo(e, t) {
  const n = Te(e), r = Te(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function YO(e, t, n) {
  const r = fn(e, n), o = fn(t, n), a = +r - ti(r), i = +o - ti(o);
  return Math.round((a - i) / kf);
}
function $f(e) {
  const t = Te(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Pt(e) {
  const t = Te(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function qw(e) {
  const t = Te(e), n = Nt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Lf(e, t) {
  var s, l, c, f;
  const n = na(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = Te(e), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function Hw(e) {
  return Lf(e, { weekStartsOn: 1 });
}
const XO = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, JO = (e, t, n) => {
  let r;
  const o = XO[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ds(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const ZO = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, QO = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, eA = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, tA = {
  date: Ds({
    formats: ZO,
    defaultWidth: "full"
  }),
  time: Ds({
    formats: QO,
    defaultWidth: "full"
  }),
  dateTime: Ds({
    formats: eA,
    defaultWidth: "full"
  })
}, nA = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, rA = (e, t, n, r) => nA[e];
function po(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const oA = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, aA = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, iA = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, sA = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, lA = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, cA = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, uA = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, dA = {
  ordinalNumber: uA,
  era: po({
    values: oA,
    defaultWidth: "wide"
  }),
  quarter: po({
    values: aA,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: po({
    values: iA,
    defaultWidth: "wide"
  }),
  day: po({
    values: sA,
    defaultWidth: "wide"
  }),
  dayPeriod: po({
    values: lA,
    defaultWidth: "wide",
    formattingValues: cA,
    defaultFormattingWidth: "wide"
  })
};
function mo(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? pA(s, (u) => u.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      fA(s, (u) => u.test(i))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const f = t.slice(i.length);
    return { value: c, rest: f };
  };
}
function fA(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function pA(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function mA(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const hA = /^(\d+)(th|st|nd|rd)?/i, vA = /\d+/i, gA = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, bA = {
  any: [/^b/i, /^(a|c)/i]
}, yA = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, xA = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, wA = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, SA = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, _A = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, CA = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, PA = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, EA = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, RA = {
  ordinalNumber: mA({
    matchPattern: hA,
    parsePattern: vA,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: mo({
    matchPatterns: gA,
    defaultMatchWidth: "wide",
    parsePatterns: bA,
    defaultParseWidth: "any"
  }),
  quarter: mo({
    matchPatterns: yA,
    defaultMatchWidth: "wide",
    parsePatterns: xA,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: mo({
    matchPatterns: wA,
    defaultMatchWidth: "wide",
    parsePatterns: SA,
    defaultParseWidth: "any"
  }),
  day: mo({
    matchPatterns: _A,
    defaultMatchWidth: "wide",
    parsePatterns: CA,
    defaultParseWidth: "any"
  }),
  dayPeriod: mo({
    matchPatterns: PA,
    defaultMatchWidth: "any",
    parsePatterns: EA,
    defaultParseWidth: "any"
  })
}, Ww = {
  code: "en-US",
  formatDistance: JO,
  formatLong: tA,
  formatRelative: rA,
  localize: dA,
  match: RA,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function TA(e) {
  const t = Te(e);
  return sn(t, qw(t)) + 1;
}
function Vw(e) {
  const t = Te(e), n = +ar(t) - +WO(t);
  return Math.round(n / kf) + 1;
}
function Gw(e, t) {
  var f, u, p, v;
  const n = Te(e), r = n.getFullYear(), o = na(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : u.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = Nt(e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = fn(i, t), l = Nt(e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const c = fn(l, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function MA(e, t) {
  var s, l, c, f;
  const n = na(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = Gw(e, t), a = Nt(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), fn(a, t);
}
function Uw(e, t) {
  const n = Te(e), r = +fn(n, t) - +MA(n, t);
  return Math.round(r / kf) + 1;
}
function ke(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const On = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ke(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ke(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ke(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ke(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ke(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ke(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ke(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ke(o, t.length);
  }
}, Er = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, nh = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return On.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Gw(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return ke(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : ke(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Bw(e);
    return ke(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return ke(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return ke(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return ke(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return On.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return ke(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = Uw(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ke(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Vw(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ke(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : On.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = TA(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ke(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return ke(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return ke(a, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return ke(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = Er.noon : r === 0 ? o = Er.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = Er.evening : r >= 12 ? o = Er.afternoon : r >= 4 ? o = Er.morning : o = Er.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return On.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : On.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ke(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ke(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : On.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : On.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return On.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return oh(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Jn(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Jn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return oh(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Jn(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Jn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + rh(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Jn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + rh(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Jn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return ke(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return ke(r, t.length);
  }
};
function rh(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + ke(a, 2);
}
function oh(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ke(Math.abs(e) / 60, 2) : Jn(e, t);
}
function Jn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ke(Math.trunc(r / 60), 2), a = ke(r % 60, 2);
  return n + o + t + a;
}
const ah = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Kw = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, NA = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return ah(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", ah(r, t)).replace("{{time}}", Kw(o, t));
}, OA = {
  p: Kw,
  P: NA
}, AA = /^D+$/, DA = /^Y+$/, jA = ["D", "DD", "YY", "YYYY"];
function kA(e) {
  return AA.test(e);
}
function IA(e) {
  return DA.test(e);
}
function $A(e, t, n) {
  const r = LA(e, t, n);
  if (console.warn(r), jA.includes(e)) throw new RangeError(r);
}
function LA(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const FA = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, zA = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, BA = /^'([^]*?)'?$/, qA = /''/g, HA = /[a-zA-Z]/;
function hr(e, t, n) {
  var f, u, p, v, h, g, b, y;
  const r = na(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Ww, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : u.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((v = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? ((y = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : y.weekStartsOn) ?? 0, s = Te(e);
  if (!KO(s))
    throw new RangeError("Invalid time value");
  let l = t.match(zA).map((x) => {
    const w = x[0];
    if (w === "p" || w === "P") {
      const S = OA[w];
      return S(x, o.formatLong);
    }
    return x;
  }).join("").match(FA).map((x) => {
    if (x === "''")
      return { isToken: !1, value: "'" };
    const w = x[0];
    if (w === "'")
      return { isToken: !1, value: WA(x) };
    if (nh[w])
      return { isToken: !0, value: x };
    if (w.match(HA))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + w + "`"
      );
    return { isToken: !1, value: x };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const c = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return l.map((x) => {
    if (!x.isToken) return x.value;
    const w = x.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && IA(w) || !(n != null && n.useAdditionalDayOfYearTokens) && kA(w)) && $A(w, t, String(e));
    const S = nh[w[0]];
    return S(s, w, o.localize, c);
  }).join("");
}
function WA(e) {
  const t = e.match(BA);
  return t ? t[1].replace(qA, "'") : e;
}
function VA(e) {
  const t = Te(e), n = t.getFullYear(), r = t.getMonth(), o = Nt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function GA(e) {
  return Math.trunc(+Te(e) / 1e3);
}
function UA(e) {
  const t = Te(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function KA(e, t) {
  return YO(
    UA(e),
    Pt(e),
    t
  ) + 1;
}
function yd(e, t) {
  const n = Te(e), r = Te(t);
  return n.getTime() > r.getTime();
}
function Yw(e, t) {
  const n = Te(e), r = Te(t);
  return +n < +r;
}
function Ff(e, t) {
  const n = Te(e), r = Te(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function YA(e, t) {
  const n = Te(e), r = Te(t);
  return n.getFullYear() === r.getFullYear();
}
function js(e, t) {
  return gt(e, -t);
}
function ks(e, t) {
  const n = Te(e), r = n.getFullYear(), o = n.getDate(), a = Nt(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const i = VA(a);
  return n.setMonth(t, Math.min(o, i)), n;
}
function ih(e, t) {
  const n = Te(e);
  return isNaN(+n) ? Nt(e, NaN) : (n.setFullYear(t), n);
}
var he = function() {
  return he = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, he.apply(this, arguments);
};
function XA(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Xw(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function ra(e) {
  return e.mode === "multiple";
}
function oa(e) {
  return e.mode === "range";
}
function Hi(e) {
  return e.mode === "single";
}
var JA = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function ZA(e, t) {
  return hr(e, "LLLL y", t);
}
function QA(e, t) {
  return hr(e, "d", t);
}
function eD(e, t) {
  return hr(e, "LLLL", t);
}
function tD(e) {
  return "".concat(e);
}
function nD(e, t) {
  return hr(e, "cccccc", t);
}
function rD(e, t) {
  return hr(e, "yyyy", t);
}
var oD = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: ZA,
  formatDay: QA,
  formatMonthCaption: eD,
  formatWeekNumber: tD,
  formatWeekdayName: nD,
  formatYearCaption: rD
}), aD = function(e, t, n) {
  return hr(e, "do MMMM (EEEE)", n);
}, iD = function() {
  return "Month: ";
}, sD = function() {
  return "Go to next month";
}, lD = function() {
  return "Go to previous month";
}, cD = function(e, t) {
  return hr(e, "cccc", t);
}, uD = function(e) {
  return "Week n. ".concat(e);
}, dD = function() {
  return "Year: ";
}, fD = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: aD,
  labelMonthDropdown: iD,
  labelNext: sD,
  labelPrevious: lD,
  labelWeekNumber: uD,
  labelWeekday: cD,
  labelYearDropdown: dD
});
function pD() {
  var e = "buttons", t = JA, n = Ww, r = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: oD,
    labels: fD,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function mD(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return r ? a = Pt(r) : t && (a = new Date(t, 0, 1)), o ? i = $f(o) : n && (i = new Date(n, 11, 31)), {
    fromDate: a ? Br(a) : void 0,
    toDate: i ? Br(i) : void 0
  };
}
var Jw = cr(void 0);
function hD(e) {
  var t, n = e.initialProps, r = pD(), o = mD(n), a = o.fromDate, i = o.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var l;
  (Hi(n) || ra(n) || oa(n)) && (l = n.onSelect);
  var c = he(he(he({}, r), n), { captionLayout: s, classNames: he(he({}, r.classNames), n.classNames), components: he({}, n.components), formatters: he(he({}, r.formatters), n.formatters), fromDate: a, labels: he(he({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: he(he({}, r.modifiers), n.modifiers), modifiersClassNames: he(he({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: l, styles: he(he({}, r.styles), n.styles), toDate: i });
  return d.jsx(Jw.Provider, { value: c, children: e.children });
}
function He() {
  var e = ur(Jw);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Zw(e) {
  var t = He(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return d.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function vD(e) {
  return d.jsx("svg", he({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: d.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Qw(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, l = e.style, c = He(), f = (n = (t = c.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : vD;
  return d.jsxs("div", { className: s, style: l, children: [d.jsx("span", { className: c.classNames.vhidden, children: e["aria-label"] }), d.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: c.classNames.dropdown, style: c.styles.dropdown, value: o, onChange: r, children: a }), d.jsxs("div", { className: c.classNames.caption_label, style: c.styles.caption_label, "aria-hidden": "true", children: [i, d.jsx(f, { className: c.classNames.dropdown_icon, style: c.styles.dropdown_icon })] })] });
}
function gD(e) {
  var t, n = He(), r = n.fromDate, o = n.toDate, a = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, l = n.classNames, c = n.components, f = n.labels.labelMonthDropdown;
  if (!r)
    return d.jsx(d.Fragment, {});
  if (!o)
    return d.jsx(d.Fragment, {});
  var u = [];
  if (YA(r, o))
    for (var p = Pt(r), v = r.getMonth(); v <= o.getMonth(); v++)
      u.push(ks(p, v));
  else
    for (var p = Pt(/* @__PURE__ */ new Date()), v = 0; v <= 11; v++)
      u.push(ks(p, v));
  var h = function(b) {
    var y = Number(b.target.value), x = ks(Pt(e.displayMonth), y);
    e.onChange(x);
  }, g = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : Qw;
  return d.jsx(g, { name: "months", "aria-label": f(), className: l.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: u.map(function(b) {
    return d.jsx("option", { value: b.getMonth(), children: s(b, { locale: i }) }, b.getMonth());
  }) });
}
function bD(e) {
  var t, n = e.displayMonth, r = He(), o = r.fromDate, a = r.toDate, i = r.locale, s = r.styles, l = r.classNames, c = r.components, f = r.formatters.formatYearCaption, u = r.labels.labelYearDropdown, p = [];
  if (!o)
    return d.jsx(d.Fragment, {});
  if (!a)
    return d.jsx(d.Fragment, {});
  for (var v = o.getFullYear(), h = a.getFullYear(), g = v; g <= h; g++)
    p.push(ih(qw(/* @__PURE__ */ new Date()), g));
  var b = function(x) {
    var w = ih(Pt(n), Number(x.target.value));
    e.onChange(w);
  }, y = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : Qw;
  return d.jsx(y, { name: "years", "aria-label": u(), className: l.dropdown_year, style: s.dropdown_year, onChange: b, value: n.getFullYear(), caption: f(n, { locale: i }), children: p.map(function(x) {
    return d.jsx("option", { value: x.getFullYear(), children: f(x, { locale: i }) }, x.getFullYear());
  }) });
}
function yD(e, t) {
  var n = cn(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function xD(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, l = s === void 0 ? 1 : s;
  if (a && Oo(a, o) < 0) {
    var c = -1 * (l - 1);
    o = Xt(a, c);
  }
  return i && Oo(o, i) < 0 && (o = i), Pt(o);
}
function wD() {
  var e = He(), t = xD(e), n = yD(t, e.month), r = n[0], o = n[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var l = Pt(i);
      o(l), (s = e.onMonthChange) === null || s === void 0 || s.call(e, l);
    }
  };
  return [r, a];
}
function SD(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Pt(e), a = Pt(Xt(o, r)), i = Oo(a, o), s = [], l = 0; l < i; l++) {
    var c = Xt(o, l);
    s.push(c);
  }
  return n && (s = s.reverse()), s;
}
function _D(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Pt(e);
    if (!n)
      return Xt(s, i);
    var l = Oo(n, e);
    if (!(l < a))
      return Xt(s, i);
  }
}
function CD(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Pt(e);
    if (!n)
      return Xt(s, -i);
    var l = Oo(s, n);
    if (!(l <= 0))
      return Xt(s, -i);
  }
}
var e0 = cr(void 0);
function PD(e) {
  var t = He(), n = wD(), r = n[0], o = n[1], a = SD(r, t), i = _D(r, t), s = CD(r, t), l = function(u) {
    return a.some(function(p) {
      return Ff(u, p);
    });
  }, c = function(u, p) {
    l(u) || (p && Yw(u, p) ? o(Xt(u, 1 + t.numberOfMonths * -1)) : o(u));
  }, f = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: c,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: l
  };
  return d.jsx(e0.Provider, { value: f, children: e.children });
}
function aa() {
  var e = ur(e0);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function sh(e) {
  var t, n = He(), r = n.classNames, o = n.styles, a = n.components, i = aa().goToMonth, s = function(f) {
    i(Xt(f, e.displayIndex ? -e.displayIndex : 0));
  }, l = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Zw, c = d.jsx(l, { id: e.id, displayMonth: e.displayMonth });
  return d.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [d.jsx("div", { className: r.vhidden, children: c }), d.jsx(gD, { onChange: s, displayMonth: e.displayMonth }), d.jsx(bD, { onChange: s, displayMonth: e.displayMonth })] });
}
function ED(e) {
  return d.jsx("svg", he({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: d.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function RD(e) {
  return d.jsx("svg", he({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: d.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var ni = Ft(function(e, t) {
  var n = He(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = he(he({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), d.jsx("button", he({}, e, { ref: t, type: "button", className: i, style: s }));
});
function TD(e) {
  var t, n, r = He(), o = r.dir, a = r.locale, i = r.classNames, s = r.styles, l = r.labels, c = l.labelPrevious, f = l.labelNext, u = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return d.jsx(d.Fragment, {});
  var p = c(e.previousMonth, { locale: a }), v = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), h = f(e.nextMonth, { locale: a }), g = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), b = (t = u == null ? void 0 : u.IconRight) !== null && t !== void 0 ? t : RD, y = (n = u == null ? void 0 : u.IconLeft) !== null && n !== void 0 ? n : ED;
  return d.jsxs("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && d.jsx(ni, { name: "previous-month", "aria-label": p, className: v, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? d.jsx(b, { className: i.nav_icon, style: s.nav_icon }) : d.jsx(y, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && d.jsx(ni, { name: "next-month", "aria-label": h, className: g, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? d.jsx(y, { className: i.nav_icon, style: s.nav_icon }) : d.jsx(b, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function lh(e) {
  var t = He().numberOfMonths, n = aa(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(h) {
    return Ff(e.displayMonth, h);
  }), l = s === 0, c = s === i.length - 1, f = t > 1 && (l || !c), u = t > 1 && (c || !l), p = function() {
    r && a(r);
  }, v = function() {
    o && a(o);
  };
  return d.jsx(TD, { displayMonth: e.displayMonth, hideNext: f, hidePrevious: u, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: v });
}
function MD(e) {
  var t, n = He(), r = n.classNames, o = n.disableNavigation, a = n.styles, i = n.captionLayout, s = n.components, l = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : Zw, c;
  return o ? c = d.jsx(l, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? c = d.jsx(sh, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? c = d.jsxs(d.Fragment, { children: [d.jsx(sh, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), d.jsx(lh, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : c = d.jsxs(d.Fragment, { children: [d.jsx(l, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), d.jsx(lh, { displayMonth: e.displayMonth, id: e.id })] }), d.jsx("div", { className: r.caption, style: a.caption, children: c });
}
function ND(e) {
  var t = He(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? d.jsx("tfoot", { className: o, style: r.tfoot, children: d.jsx("tr", { children: d.jsx("td", { colSpan: 8, children: n }) }) }) : d.jsx(d.Fragment, {});
}
function OD(e, t, n) {
  for (var r = n ? ar(/* @__PURE__ */ new Date()) : fn(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = gt(r, a);
    o.push(i);
  }
  return o;
}
function AD() {
  var e = He(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, l = e.labels.labelWeekday, c = OD(o, a, i);
  return d.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && d.jsx("td", { style: n.head_cell, className: t.head_cell }), c.map(function(f, u) {
    return d.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": l(f, { locale: o }), children: s(f, { locale: o }) }, u);
  })] });
}
function DD() {
  var e, t = He(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : AD;
  return d.jsx("thead", { style: r.head, className: n.head, children: d.jsx(a, {}) });
}
function jD(e) {
  var t = He(), n = t.locale, r = t.formatters.formatDay;
  return d.jsx(d.Fragment, { children: r(e.date, { locale: n }) });
}
var zf = cr(void 0);
function kD(e) {
  if (!ra(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return d.jsx(zf.Provider, { value: t, children: e.children });
  }
  return d.jsx(ID, { initialProps: e.initialProps, children: e.children });
}
function ID(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, i = function(c, f, u) {
    var p, v;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, c, f, u);
    var h = !!(f.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var g = !!(!f.selected && a && (r == null ? void 0 : r.length) === a);
      if (!g) {
        var b = r ? Xw([], r) : [];
        if (f.selected) {
          var y = b.findIndex(function(x) {
            return Ct(c, x);
          });
          b.splice(y, 1);
        } else
          b.push(c);
        (v = t.onSelect) === null || v === void 0 || v.call(t, b, c, f, u);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(c) {
    var f = a && r.length > a - 1, u = r.some(function(p) {
      return Ct(p, c);
    });
    return !!(f && !u);
  });
  var l = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return d.jsx(zf.Provider, { value: l, children: n });
}
function Bf() {
  var e = ur(zf);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function $D(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Ct(o, e) && Ct(r, e) ? void 0 : Ct(o, e) ? { from: o, to: void 0 } : Ct(r, e) ? void 0 : yd(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? yd(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? Yw(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var qf = cr(void 0);
function LD(e) {
  if (!oa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return d.jsx(qf.Provider, { value: t, children: e.children });
  }
  return d.jsx(FD, { initialProps: e.initialProps, children: e.children });
}
function FD(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, i = o.to, s = t.min, l = t.max, c = function(v, h, g) {
    var b, y;
    (b = t.onDayClick) === null || b === void 0 || b.call(t, v, h, g);
    var x = $D(v, r);
    (y = t.onSelect) === null || y === void 0 || y.call(t, x, v, h, g);
  }, f = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (f.range_start = [a], i ? (f.range_end = [i], Ct(a, i) || (f.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : f.range_end = [a]) : i && (f.range_start = [i], f.range_end = [i]), s && (a && !i && f.disabled.push({
    after: js(a, s - 1),
    before: gt(a, s - 1)
  }), a && i && f.disabled.push({
    after: a,
    before: gt(a, s - 1)
  }), !a && i && f.disabled.push({
    after: js(i, s - 1),
    before: gt(i, s - 1)
  })), l) {
    if (a && !i && (f.disabled.push({
      before: gt(a, -l + 1)
    }), f.disabled.push({
      after: gt(a, l - 1)
    })), a && i) {
      var u = sn(i, a) + 1, p = l - u;
      f.disabled.push({
        before: js(a, p)
      }), f.disabled.push({
        after: gt(i, p)
      });
    }
    !a && i && (f.disabled.push({
      before: gt(i, -l + 1)
    }), f.disabled.push({
      after: gt(i, l - 1)
    }));
  }
  return d.jsx(qf.Provider, { value: { selected: r, onDayClick: c, modifiers: f }, children: n });
}
function Hf() {
  var e = ur(qf);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Wa(e) {
  return Array.isArray(e) ? Xw([], e) : e !== void 0 ? [e] : [];
}
function zD(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Wa(o);
  }), t;
}
var Jt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Jt || (Jt = {}));
var BD = Jt.Selected, wn = Jt.Disabled, qD = Jt.Hidden, HD = Jt.Today, Is = Jt.RangeEnd, $s = Jt.RangeMiddle, Ls = Jt.RangeStart, WD = Jt.Outside;
function VD(e, t, n) {
  var r, o = (r = {}, r[BD] = Wa(e.selected), r[wn] = Wa(e.disabled), r[qD] = Wa(e.hidden), r[HD] = [e.today], r[Is] = [], r[$s] = [], r[Ls] = [], r[WD] = [], r);
  return e.fromDate && o[wn].push({ before: e.fromDate }), e.toDate && o[wn].push({ after: e.toDate }), ra(e) ? o[wn] = o[wn].concat(t.modifiers[wn]) : oa(e) && (o[wn] = o[wn].concat(n.modifiers[wn]), o[Ls] = n.modifiers[Ls], o[$s] = n.modifiers[$s], o[Is] = n.modifiers[Is]), o;
}
var t0 = cr(void 0);
function GD(e) {
  var t = He(), n = Bf(), r = Hf(), o = VD(t, n, r), a = zD(t.modifiers), i = he(he({}, o), a);
  return d.jsx(t0.Provider, { value: i, children: e.children });
}
function n0() {
  var e = ur(t0);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function UD(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function KD(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function YD(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function XD(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function JD(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function ZD(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = sn(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var i = sn(e, r) >= 0 && sn(o, e) >= 0;
    return i;
  }
  return o ? Ct(o, e) : r ? Ct(r, e) : !1;
}
function QD(e) {
  return If(e);
}
function ej(e) {
  return Array.isArray(e) && e.every(If);
}
function tj(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (QD(n))
      return Ct(e, n);
    if (ej(n))
      return n.includes(e);
    if (KD(n))
      return ZD(e, n);
    if (JD(n))
      return n.dayOfWeek.includes(e.getDay());
    if (UD(n)) {
      var r = sn(n.before, e), o = sn(n.after, e), a = r > 0, i = o < 0, s = yd(n.before, n.after);
      return s ? i && a : a || i;
    }
    return YD(n) ? sn(e, n.after) > 0 : XD(n) ? sn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Wf(e, t, n) {
  var r = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return tj(e, s) && a.push(i), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Ff(e, n) && (o.outside = !0), o;
}
function nj(e, t) {
  for (var n = Pt(e[0]), r = $f(e[e.length - 1]), o, a, i = n; i <= r; ) {
    var s = Wf(i, t), l = !s.disabled && !s.hidden;
    if (!l) {
      i = gt(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = gt(i, 1);
  }
  return a || o;
}
var rj = 365;
function r0(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, l = o.weekStartsOn, c = o.fromDate, f = o.toDate, u = o.locale, p = {
    day: gt,
    week: bd,
    month: Xt,
    year: VO,
    startOfWeek: function(b) {
      return o.ISOWeek ? ar(b) : fn(b, { locale: u, weekStartsOn: l });
    },
    endOfWeek: function(b) {
      return o.ISOWeek ? Hw(b) : Lf(b, { locale: u, weekStartsOn: l });
    }
  }, v = p[n](e, r === "after" ? 1 : -1);
  r === "before" && c ? v = GO([c, v]) : r === "after" && f && (v = UO([f, v]));
  var h = !0;
  if (a) {
    var g = Wf(v, a);
    h = !g.disabled && !g.hidden;
  }
  return h ? v : s.count > rj ? s.lastFocused : r0(v, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: he(he({}, s), { count: s.count + 1 })
  });
}
var o0 = cr(void 0);
function oj(e) {
  var t = aa(), n = n0(), r = cn(), o = r[0], a = r[1], i = cn(), s = i[0], l = i[1], c = nj(t.displayMonths, n), f = o ?? (s && t.isDateDisplayed(s)) ? s : c, u = function() {
    l(o), a(void 0);
  }, p = function(b) {
    a(b);
  }, v = He(), h = function(b, y) {
    if (o) {
      var x = r0(o, {
        moveBy: b,
        direction: y,
        context: v,
        modifiers: n
      });
      Ct(o, x) || (t.goToDate(x, o), p(x));
    }
  }, g = {
    focusedDay: o,
    focusTarget: f,
    blur: u,
    focus: p,
    focusDayAfter: function() {
      return h("day", "after");
    },
    focusDayBefore: function() {
      return h("day", "before");
    },
    focusWeekAfter: function() {
      return h("week", "after");
    },
    focusWeekBefore: function() {
      return h("week", "before");
    },
    focusMonthBefore: function() {
      return h("month", "before");
    },
    focusMonthAfter: function() {
      return h("month", "after");
    },
    focusYearBefore: function() {
      return h("year", "before");
    },
    focusYearAfter: function() {
      return h("year", "after");
    },
    focusStartOfWeek: function() {
      return h("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return h("endOfWeek", "after");
    }
  };
  return d.jsx(o0.Provider, { value: g, children: e.children });
}
function Vf() {
  var e = ur(o0);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function aj(e, t) {
  var n = n0(), r = Wf(e, n, t);
  return r;
}
var Gf = cr(void 0);
function ij(e) {
  if (!Hi(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return d.jsx(Gf.Provider, { value: t, children: e.children });
  }
  return d.jsx(sj, { initialProps: e.initialProps, children: e.children });
}
function sj(e) {
  var t = e.initialProps, n = e.children, r = function(a, i, s) {
    var l, c, f;
    if ((l = t.onDayClick) === null || l === void 0 || l.call(t, a, i, s), i.selected && !t.required) {
      (c = t.onSelect) === null || c === void 0 || c.call(t, void 0, a, i, s);
      return;
    }
    (f = t.onSelect) === null || f === void 0 || f.call(t, a, a, i, s);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return d.jsx(Gf.Provider, { value: o, children: n });
}
function a0() {
  var e = ur(Gf);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function lj(e, t) {
  var n = He(), r = a0(), o = Bf(), a = Hf(), i = Vf(), s = i.focusDayAfter, l = i.focusDayBefore, c = i.focusWeekAfter, f = i.focusWeekBefore, u = i.blur, p = i.focus, v = i.focusMonthBefore, h = i.focusMonthAfter, g = i.focusYearBefore, b = i.focusYearAfter, y = i.focusStartOfWeek, x = i.focusEndOfWeek, w = function(F) {
    var M, G, oe, Z;
    Hi(n) ? (M = r.onDayClick) === null || M === void 0 || M.call(r, e, t, F) : ra(n) ? (G = o.onDayClick) === null || G === void 0 || G.call(o, e, t, F) : oa(n) ? (oe = a.onDayClick) === null || oe === void 0 || oe.call(a, e, t, F) : (Z = n.onDayClick) === null || Z === void 0 || Z.call(n, e, t, F);
  }, S = function(F) {
    var M;
    p(e), (M = n.onDayFocus) === null || M === void 0 || M.call(n, e, t, F);
  }, C = function(F) {
    var M;
    u(), (M = n.onDayBlur) === null || M === void 0 || M.call(n, e, t, F);
  }, P = function(F) {
    var M;
    (M = n.onDayMouseEnter) === null || M === void 0 || M.call(n, e, t, F);
  }, _ = function(F) {
    var M;
    (M = n.onDayMouseLeave) === null || M === void 0 || M.call(n, e, t, F);
  }, R = function(F) {
    var M;
    (M = n.onDayPointerEnter) === null || M === void 0 || M.call(n, e, t, F);
  }, T = function(F) {
    var M;
    (M = n.onDayPointerLeave) === null || M === void 0 || M.call(n, e, t, F);
  }, z = function(F) {
    var M;
    (M = n.onDayTouchCancel) === null || M === void 0 || M.call(n, e, t, F);
  }, j = function(F) {
    var M;
    (M = n.onDayTouchEnd) === null || M === void 0 || M.call(n, e, t, F);
  }, B = function(F) {
    var M;
    (M = n.onDayTouchMove) === null || M === void 0 || M.call(n, e, t, F);
  }, A = function(F) {
    var M;
    (M = n.onDayTouchStart) === null || M === void 0 || M.call(n, e, t, F);
  }, H = function(F) {
    var M;
    (M = n.onDayKeyUp) === null || M === void 0 || M.call(n, e, t, F);
  }, q = function(F) {
    var M;
    switch (F.key) {
      case "ArrowLeft":
        F.preventDefault(), F.stopPropagation(), n.dir === "rtl" ? s() : l();
        break;
      case "ArrowRight":
        F.preventDefault(), F.stopPropagation(), n.dir === "rtl" ? l() : s();
        break;
      case "ArrowDown":
        F.preventDefault(), F.stopPropagation(), c();
        break;
      case "ArrowUp":
        F.preventDefault(), F.stopPropagation(), f();
        break;
      case "PageUp":
        F.preventDefault(), F.stopPropagation(), F.shiftKey ? g() : v();
        break;
      case "PageDown":
        F.preventDefault(), F.stopPropagation(), F.shiftKey ? b() : h();
        break;
      case "Home":
        F.preventDefault(), F.stopPropagation(), y();
        break;
      case "End":
        F.preventDefault(), F.stopPropagation(), x();
        break;
    }
    (M = n.onDayKeyDown) === null || M === void 0 || M.call(n, e, t, F);
  }, $ = {
    onClick: w,
    onFocus: S,
    onBlur: C,
    onKeyDown: q,
    onKeyUp: H,
    onMouseEnter: P,
    onMouseLeave: _,
    onPointerEnter: R,
    onPointerLeave: T,
    onTouchCancel: z,
    onTouchEnd: j,
    onTouchMove: B,
    onTouchStart: A
  };
  return $;
}
function cj() {
  var e = He(), t = a0(), n = Bf(), r = Hf(), o = Hi(e) ? t.selected : ra(e) ? n.selected : oa(e) ? r.selected : void 0;
  return o;
}
function uj(e) {
  return Object.values(Jt).includes(e);
}
function dj(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (uj(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function fj(e, t) {
  var n = he({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = he(he({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function pj(e, t, n) {
  var r, o, a, i = He(), s = Vf(), l = aj(e, t), c = lj(e, l), f = cj(), u = !!(i.onDayClick || i.mode !== "default");
  $t(function() {
    var P;
    l.outside || s.focusedDay && u && Ct(s.focusedDay, e) && ((P = n.current) === null || P === void 0 || P.focus());
  }, [
    s.focusedDay,
    e,
    n,
    u,
    l.outside
  ]);
  var p = dj(i, l).join(" "), v = fj(i, l), h = !!(l.outside && !i.showOutsideDays || l.hidden), g = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : jD, b = d.jsx(g, { date: e, displayMonth: t, activeModifiers: l }), y = {
    style: v,
    className: p,
    children: b,
    role: "gridcell"
  }, x = s.focusTarget && Ct(s.focusTarget, e) && !l.outside, w = s.focusedDay && Ct(s.focusedDay, e), S = he(he(he({}, y), (r = { disabled: l.disabled, role: "gridcell" }, r["aria-selected"] = l.selected, r.tabIndex = w || x ? 0 : -1, r)), c), C = {
    isButton: u,
    isHidden: h,
    activeModifiers: l,
    selectedDays: f,
    buttonProps: S,
    divProps: y
  };
  return C;
}
function mj(e) {
  var t = Lr(null), n = pj(e.date, e.displayMonth, t);
  return n.isHidden ? d.jsx("div", { role: "gridcell" }) : n.isButton ? d.jsx(ni, he({ name: "day", ref: t }, n.buttonProps)) : d.jsx("div", he({}, n.divProps));
}
function hj(e) {
  var t = e.number, n = e.dates, r = He(), o = r.onWeekNumberClick, a = r.styles, i = r.classNames, s = r.locale, l = r.labels.labelWeekNumber, c = r.formatters.formatWeekNumber, f = c(Number(t), { locale: s });
  if (!o)
    return d.jsx("span", { className: i.weeknumber, style: a.weeknumber, children: f });
  var u = l(Number(t), { locale: s }), p = function(v) {
    o(t, n, v);
  };
  return d.jsx(ni, { name: "week-number", "aria-label": u, className: i.weeknumber, style: a.weeknumber, onClick: p, children: f });
}
function vj(e) {
  var t, n, r = He(), o = r.styles, a = r.classNames, i = r.showWeekNumber, s = r.components, l = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : mj, c = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : hj, f;
  return i && (f = d.jsx("td", { className: a.cell, style: o.cell, children: d.jsx(c, { number: e.weekNumber, dates: e.dates }) })), d.jsxs("tr", { className: a.row, style: o.row, children: [f, e.dates.map(function(u) {
    return d.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: d.jsx(l, { displayMonth: e.displayMonth, date: u }) }, GA(u));
  })] });
}
function ch(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Hw(t) : Lf(t, n), o = n != null && n.ISOWeek ? ar(e) : fn(e, n), a = sn(r, o), i = [], s = 0; s <= a; s++)
    i.push(gt(o, s));
  var l = i.reduce(function(c, f) {
    var u = n != null && n.ISOWeek ? Vw(f) : Uw(f, n), p = c.find(function(v) {
      return v.weekNumber === u;
    });
    return p ? (p.dates.push(f), c) : (c.push({
      weekNumber: u,
      dates: [f]
    }), c);
  }, []);
  return l;
}
function gj(e, t) {
  var n = ch(Pt(e), $f(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = KA(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], i = bd(a, 6 - r), s = ch(bd(a, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function bj(e) {
  var t, n, r, o = He(), a = o.locale, i = o.classNames, s = o.styles, l = o.hideHead, c = o.fixedWeeks, f = o.components, u = o.weekStartsOn, p = o.firstWeekContainsDate, v = o.ISOWeek, h = gj(e.displayMonth, {
    useFixedWeeks: !!c,
    ISOWeek: v,
    locale: a,
    weekStartsOn: u,
    firstWeekContainsDate: p
  }), g = (t = f == null ? void 0 : f.Head) !== null && t !== void 0 ? t : DD, b = (n = f == null ? void 0 : f.Row) !== null && n !== void 0 ? n : vj, y = (r = f == null ? void 0 : f.Footer) !== null && r !== void 0 ? r : ND;
  return d.jsxs("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!l && d.jsx(g, {}), d.jsx("tbody", { className: i.tbody, style: s.tbody, children: h.map(function(x) {
    return d.jsx(b, { displayMonth: e.displayMonth, dates: x.dates, weekNumber: x.weekNumber }, x.weekNumber);
  }) }), d.jsx(y, { displayMonth: e.displayMonth })] });
}
function yj() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var xj = yj() ? rf : $t, Fs = !1, wj = 0;
function uh() {
  return "react-day-picker-".concat(++wj);
}
function Sj(e) {
  var t, n = e ?? (Fs ? uh() : null), r = cn(n), o = r[0], a = r[1];
  return xj(function() {
    o === null && a(uh());
  }, []), $t(function() {
    Fs === !1 && (Fs = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function _j(e) {
  var t, n, r = He(), o = r.dir, a = r.classNames, i = r.styles, s = r.components, l = aa().displayMonths, c = Sj(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), f = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, u = [a.month], p = i.month, v = e.displayIndex === 0, h = e.displayIndex === l.length - 1, g = !v && !h;
  o === "rtl" && (t = [v, h], h = t[0], v = t[1]), v && (u.push(a.caption_start), p = he(he({}, p), i.caption_start)), h && (u.push(a.caption_end), p = he(he({}, p), i.caption_end)), g && (u.push(a.caption_between), p = he(he({}, p), i.caption_between));
  var b = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : MD;
  return d.jsxs("div", { className: u.join(" "), style: p, children: [d.jsx(b, { id: c, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), d.jsx(bj, { id: f, "aria-labelledby": c, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function Cj(e) {
  var t = He(), n = t.classNames, r = t.styles;
  return d.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function Pj(e) {
  var t, n, r = e.initialProps, o = He(), a = Vf(), i = aa(), s = cn(!1), l = s[0], c = s[1];
  $t(function() {
    o.initialFocus && a.focusTarget && (l || (a.focus(a.focusTarget), c(!0)));
  }, [
    o.initialFocus,
    l,
    a.focus,
    a.focusTarget,
    a
  ]);
  var f = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && f.push(o.classNames.multiple_months), o.showWeekNumber && f.push(o.classNames.with_weeknumber);
  var u = he(he({}, o.styles.root), o.style), p = Object.keys(r).filter(function(h) {
    return h.startsWith("data-");
  }).reduce(function(h, g) {
    var b;
    return he(he({}, h), (b = {}, b[g] = r[g], b));
  }, {}), v = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : Cj;
  return d.jsx("div", he({ className: f.join(" "), style: u, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, p, { children: d.jsx(v, { children: i.displayMonths.map(function(h, g) {
    return d.jsx(_j, { displayIndex: g, displayMonth: h }, g);
  }) }) }));
}
function Ej(e) {
  var t = e.children, n = XA(e, ["children"]);
  return d.jsx(hD, { initialProps: n, children: d.jsx(PD, { children: d.jsx(ij, { initialProps: n, children: d.jsx(kD, { initialProps: n, children: d.jsx(LD, { initialProps: n, children: d.jsx(GD, { children: d.jsx(oj, { children: t }) }) }) }) }) }) });
}
function Rj(e) {
  return d.jsx(Ej, he({}, e, { children: d.jsx(Pj, { initialProps: e }) }));
}
function X4({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    Rj,
    {
      showOutsideDays: n,
      className: O("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: O(
          Fr({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: O(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          r.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: O(
          Fr({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ className: o, ...a }) => /* @__PURE__ */ d.jsx(by, { className: O("size-4", o), ...a }),
        IconRight: ({ className: o, ...a }) => /* @__PURE__ */ d.jsx(Jr, { className: O("size-4", o), ...a })
      },
      ...r
    }
  );
}
function Tj(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function dh(e) {
  return Tj(e) || Array.isArray(e);
}
function Mj() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Uf(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((i) => {
    const s = e[i], l = t[i];
    return typeof s == "function" ? `${s}` == `${l}` : !dh(s) || !dh(l) ? s === l : Uf(s, l);
  });
}
function fh(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Nj(e, t) {
  if (e.length !== t.length) return !1;
  const n = fh(e), r = fh(t);
  return n.every((o, a) => {
    const i = r[a];
    return Uf(o, i);
  });
}
function Kf(e) {
  return typeof e == "number";
}
function xd(e) {
  return typeof e == "string";
}
function Wi(e) {
  return typeof e == "boolean";
}
function ph(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ke(e) {
  return Math.abs(e);
}
function Yf(e) {
  return Math.sign(e);
}
function To(e, t) {
  return Ke(e - t);
}
function Oj(e, t) {
  if (e === 0 || t === 0 || Ke(e) <= Ke(t)) return 0;
  const n = To(Ke(e), Ke(t));
  return Ke(n / e);
}
function Aj(e) {
  return Math.round(e * 100) / 100;
}
function Ao(e) {
  return Do(e).map(Number);
}
function Gt(e) {
  return e[ia(e)];
}
function ia(e) {
  return Math.max(0, e.length - 1);
}
function Xf(e, t) {
  return t === ia(e);
}
function mh(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Do(e) {
  return Object.keys(e);
}
function i0(e, t) {
  return [e, t].reduce((n, r) => (Do(r).forEach((o) => {
    const a = n[o], i = r[o], s = ph(a) && ph(i);
    n[o] = s ? i0(a, i) : i;
  }), n), {});
}
function wd(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Dj(e, t) {
  const n = {
    start: r,
    center: o,
    end: a
  };
  function r() {
    return 0;
  }
  function o(l) {
    return a(l) / 2;
  }
  function a(l) {
    return t - l;
  }
  function i(l, c) {
    return xd(e) ? n[e](l) : e(t, l, c);
  }
  return {
    measure: i
  };
}
function jo() {
  let e = [];
  function t(o, a, i, s = {
    passive: !0
  }) {
    let l;
    if ("addEventListener" in o)
      o.addEventListener(a, i, s), l = () => o.removeEventListener(a, i, s);
    else {
      const c = o;
      c.addListener(i), l = () => c.removeListener(i);
    }
    return e.push(l), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function jj(e, t, n, r) {
  const o = jo(), a = 1e3 / 60;
  let i = null, s = 0, l = 0;
  function c() {
    o.add(e, "visibilitychange", () => {
      e.hidden && h();
    });
  }
  function f() {
    v(), o.clear();
  }
  function u(b) {
    if (!l) return;
    i || (i = b, n(), n());
    const y = b - i;
    for (i = b, s += y; s >= a; )
      n(), s -= a;
    const x = s / a;
    r(x), l && (l = t.requestAnimationFrame(u));
  }
  function p() {
    l || (l = t.requestAnimationFrame(u));
  }
  function v() {
    t.cancelAnimationFrame(l), i = null, s = 0, l = 0;
  }
  function h() {
    i = null, s = 0;
  }
  return {
    init: c,
    destroy: f,
    start: p,
    stop: v,
    update: n,
    render: r
  };
}
function kj(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", i = !r && n ? -1 : 1, s = f(), l = u();
  function c(h) {
    const {
      height: g,
      width: b
    } = h;
    return r ? g : b;
  }
  function f() {
    return r ? "top" : n ? "right" : "left";
  }
  function u() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function p(h) {
    return h * i;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: s,
    endEdge: l,
    measureSize: c,
    direction: p
  };
}
function ir(e = 0, t = 0) {
  const n = Ke(e - t);
  function r(c) {
    return c < e;
  }
  function o(c) {
    return c > t;
  }
  function a(c) {
    return r(c) || o(c);
  }
  function i(c) {
    return a(c) ? r(c) ? e : t : c;
  }
  function s(c) {
    return n ? c - n * Math.ceil((c - t) / n) : c;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: i,
    reachedAny: a,
    reachedMax: o,
    reachedMin: r,
    removeOffset: s
  };
}
function s0(e, t, n) {
  const {
    constrain: r
  } = ir(0, e), o = e + 1;
  let a = i(t);
  function i(p) {
    return n ? Ke((o + p) % o) : r(p);
  }
  function s() {
    return a;
  }
  function l(p) {
    return a = i(p), u;
  }
  function c(p) {
    return f().set(s() + p);
  }
  function f() {
    return s0(e, s(), n);
  }
  const u = {
    get: s,
    set: l,
    add: c,
    clone: f
  };
  return u;
}
function Ij(e, t, n, r, o, a, i, s, l, c, f, u, p, v, h, g, b, y, x) {
  const {
    cross: w,
    direction: S
  } = e, C = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, _ = jo(), R = jo(), T = ir(50, 225).constrain(v.measure(20)), z = {
    mouse: 300,
    touch: 400
  }, j = {
    mouse: 500,
    touch: 600
  }, B = h ? 43 : 25;
  let A = !1, H = 0, q = 0, $ = !1, F = !1, M = !1, G = !1;
  function oe(X) {
    if (!x) return;
    function ae(re) {
      (Wi(x) || x(X, re)) && K(re);
    }
    const k = t;
    _.add(k, "dragstart", (re) => re.preventDefault(), P).add(k, "touchmove", () => {
    }, P).add(k, "touchend", () => {
    }).add(k, "touchstart", ae).add(k, "mousedown", ae).add(k, "touchcancel", Y).add(k, "contextmenu", Y).add(k, "click", J, !0);
  }
  function Z() {
    _.clear(), R.clear();
  }
  function L() {
    const X = G ? n : t;
    R.add(X, "touchmove", I, P).add(X, "touchend", Y).add(X, "mousemove", I, P).add(X, "mouseup", Y);
  }
  function D(X) {
    const ae = X.nodeName || "";
    return C.includes(ae);
  }
  function W() {
    return (h ? j : z)[G ? "mouse" : "touch"];
  }
  function V(X, ae) {
    const k = u.add(Yf(X) * -1), re = f.byDistance(X, !h).distance;
    return h || Ke(X) < T ? re : b && ae ? re * 0.5 : f.byIndex(k.get(), 0).distance;
  }
  function K(X) {
    const ae = wd(X, r);
    G = ae, M = h && ae && !X.buttons && A, A = To(o.get(), i.get()) >= 2, !(ae && X.button !== 0) && (D(X.target) || ($ = !0, a.pointerDown(X), c.useFriction(0).useDuration(0), o.set(i), L(), H = a.readPoint(X), q = a.readPoint(X, w), p.emit("pointerDown")));
  }
  function I(X) {
    if (!wd(X, r) && X.touches.length >= 2) return Y(X);
    const k = a.readPoint(X), re = a.readPoint(X, w), pe = To(k, H), me = To(re, q);
    if (!F && !G && (!X.cancelable || (F = pe > me, !F)))
      return Y(X);
    const ge = a.pointerMove(X);
    pe > g && (M = !0), c.useFriction(0.3).useDuration(0.75), s.start(), o.add(S(ge)), X.preventDefault();
  }
  function Y(X) {
    const k = f.byDistance(0, !1).index !== u.get(), re = a.pointerUp(X) * W(), pe = V(S(re), k), me = Oj(re, pe), ge = B - 10 * me, de = y + me / 50;
    F = !1, $ = !1, R.clear(), c.useDuration(ge).useFriction(de), l.distance(pe, !h), G = !1, p.emit("pointerUp");
  }
  function J(X) {
    M && (X.stopPropagation(), X.preventDefault(), M = !1);
  }
  function te() {
    return $;
  }
  return {
    init: oe,
    destroy: Z,
    pointerDown: te
  };
}
function $j(e, t) {
  let r, o;
  function a(u) {
    return u.timeStamp;
  }
  function i(u, p) {
    const h = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (wd(u, t) ? u : u.touches[0])[h];
  }
  function s(u) {
    return r = u, o = u, i(u);
  }
  function l(u) {
    const p = i(u) - i(o), v = a(u) - a(r) > 170;
    return o = u, v && (r = u), p;
  }
  function c(u) {
    if (!r || !o) return 0;
    const p = i(o) - i(r), v = a(u) - a(r), h = a(u) - a(o) > 170, g = p / v;
    return v && !h && Ke(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: s,
    pointerMove: l,
    pointerUp: c,
    readPoint: i
  };
}
function Lj() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: i
    } = n;
    return {
      top: r,
      right: o + a,
      bottom: r + i,
      left: o,
      width: a,
      height: i
    };
  }
  return {
    measure: e
  };
}
function Fj(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function zj(e, t, n, r, o, a, i) {
  const s = [e].concat(r);
  let l, c, f = [], u = !1;
  function p(b) {
    return o.measureSize(i.measure(b));
  }
  function v(b) {
    if (!a) return;
    c = p(e), f = r.map(p);
    function y(x) {
      for (const w of x) {
        if (u) return;
        const S = w.target === e, C = r.indexOf(w.target), P = S ? c : f[C], _ = p(S ? e : r[C]);
        if (Ke(_ - P) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    l = new ResizeObserver((x) => {
      (Wi(a) || a(b, x)) && y(x);
    }), n.requestAnimationFrame(() => {
      s.forEach((x) => l.observe(x));
    });
  }
  function h() {
    u = !0, l && l.disconnect();
  }
  return {
    init: v,
    destroy: h
  };
}
function Bj(e, t, n, r, o, a) {
  let i = 0, s = 0, l = o, c = a, f = e.get(), u = 0;
  function p() {
    const P = r.get() - e.get(), _ = !l;
    let R = 0;
    return _ ? (i = 0, n.set(r), e.set(r), R = P) : (n.set(e), i += P / l, i *= c, f += i, e.add(i), R = f - u), s = Yf(R), u = f, C;
  }
  function v() {
    const P = r.get() - t.get();
    return Ke(P) < 1e-3;
  }
  function h() {
    return l;
  }
  function g() {
    return s;
  }
  function b() {
    return i;
  }
  function y() {
    return w(o);
  }
  function x() {
    return S(a);
  }
  function w(P) {
    return l = P, C;
  }
  function S(P) {
    return c = P, C;
  }
  const C = {
    direction: g,
    duration: h,
    velocity: b,
    seek: p,
    settled: v,
    useBaseFriction: x,
    useBaseDuration: y,
    useFriction: S,
    useDuration: w
  };
  return C;
}
function qj(e, t, n, r, o) {
  const a = o.measure(10), i = o.measure(50), s = ir(0.1, 0.99);
  let l = !1;
  function c() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function f(v) {
    if (!c()) return;
    const h = e.reachedMin(t.get()) ? "min" : "max", g = Ke(e[h] - t.get()), b = n.get() - t.get(), y = s.constrain(g / i);
    n.subtract(b * y), !v && Ke(b) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function u(v) {
    l = !v;
  }
  return {
    shouldConstrain: c,
    constrain: f,
    toggleActive: u
  };
}
function Hj(e, t, n, r, o) {
  const a = ir(-t + e, 0), i = u(), s = f(), l = p();
  function c(h, g) {
    return To(h, g) <= 1;
  }
  function f() {
    const h = i[0], g = Gt(i), b = i.lastIndexOf(h), y = i.indexOf(g) + 1;
    return ir(b, y);
  }
  function u() {
    return n.map((h, g) => {
      const {
        min: b,
        max: y
      } = a, x = a.constrain(h), w = !g, S = Xf(n, g);
      return w ? y : S || c(b, x) ? b : c(y, x) ? y : x;
    }).map((h) => parseFloat(h.toFixed(3)));
  }
  function p() {
    if (t <= e + o) return [a.max];
    if (r === "keepSnaps") return i;
    const {
      min: h,
      max: g
    } = s;
    return i.slice(h, g);
  }
  return {
    snapsContained: l,
    scrollContainLimit: s
  };
}
function Wj(e, t, n) {
  const r = t[0], o = n ? r - e : Gt(t);
  return {
    limit: ir(o, r)
  };
}
function Vj(e, t, n, r) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: l
  } = ir(a, i);
  function c(p) {
    return p === 1 ? l(n.get()) : p === -1 ? s(n.get()) : !1;
  }
  function f(p) {
    if (!c(p)) return;
    const v = e * (p * -1);
    r.forEach((h) => h.add(v));
  }
  return {
    loop: f
  };
}
function Gj(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(a) {
    const i = a - t;
    return n ? i / -n : 0;
  }
  return {
    get: r
  };
}
function Uj(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = o, l = u().map(t.measure), c = p(), f = v();
  function u() {
    return s(r).map((g) => Gt(g)[i] - g[0][a]).map(Ke);
  }
  function p() {
    return r.map((g) => n[a] - g[a]).map((g) => -Ke(g));
  }
  function v() {
    return s(c).map((g) => g[0]).map((g, b) => g + l[b]);
  }
  return {
    snaps: c,
    snapsAligned: f
  };
}
function Kj(e, t, n, r, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: l
  } = r, c = f();
  function f() {
    const p = i(a), v = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : v ? p : p.slice(s, l).map((h, g, b) => {
      const y = !g, x = Xf(b, g);
      if (y) {
        const w = Gt(b[0]) + 1;
        return mh(w);
      }
      if (x) {
        const w = ia(a) - Gt(b)[0] + 1;
        return mh(w, Gt(b)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: c
  };
}
function Yj(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: i,
    constrain: s
  } = r;
  function l(h) {
    return h.concat().sort((g, b) => Ke(g) - Ke(b))[0];
  }
  function c(h) {
    const g = e ? i(h) : s(h), b = t.map((x, w) => ({
      diff: f(x - g, 0),
      index: w
    })).sort((x, w) => Ke(x.diff) - Ke(w.diff)), {
      index: y
    } = b[0];
    return {
      index: y,
      distance: g
    };
  }
  function f(h, g) {
    const b = [h, h + n, h - n];
    if (!e) return h;
    if (!g) return l(b);
    const y = b.filter((x) => Yf(x) === g);
    return y.length ? l(y) : Gt(b) - n;
  }
  function u(h, g) {
    const b = t[h] - o.get(), y = f(b, g);
    return {
      index: h,
      distance: y
    };
  }
  function p(h, g) {
    const b = o.get() + h, {
      index: y,
      distance: x
    } = c(b), w = !e && a(b);
    if (!g || w) return {
      index: y,
      distance: h
    };
    const S = t[y] - x, C = h + f(S, 0);
    return {
      index: y,
      distance: C
    };
  }
  return {
    byDistance: p,
    byIndex: u,
    shortcut: f
  };
}
function Xj(e, t, n, r, o, a, i) {
  function s(u) {
    const p = u.distance, v = u.index !== t.get();
    a.add(p), p && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), v && (n.set(t.get()), t.set(u.index), i.emit("select"));
  }
  function l(u, p) {
    const v = o.byDistance(u, p);
    s(v);
  }
  function c(u, p) {
    const v = t.clone().set(u), h = o.byIndex(v.get(), p);
    s(h);
  }
  return {
    distance: l,
    index: c
  };
}
function Jj(e, t, n, r, o, a, i, s) {
  const l = {
    passive: !0,
    capture: !0
  };
  let c = 0;
  function f(v) {
    if (!s) return;
    function h(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - c > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const x = n.findIndex((w) => w.includes(g));
      Kf(x) && (o.useDuration(0), r.index(x, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", u, !1), t.forEach((g, b) => {
      a.add(g, "focus", (y) => {
        (Wi(s) || s(v, y)) && h(b);
      }, l);
    });
  }
  function u(v) {
    v.code === "Tab" && (c = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: f
  };
}
function So(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(l) {
    t = i(l);
  }
  function o(l) {
    t += i(l);
  }
  function a(l) {
    t -= i(l);
  }
  function i(l) {
    return Kf(l) ? l : l.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function l0(e, t) {
  const n = e.scroll === "x" ? i : s, r = t.style;
  let o = null, a = !1;
  function i(p) {
    return `translate3d(${p}px,0px,0px)`;
  }
  function s(p) {
    return `translate3d(0px,${p}px,0px)`;
  }
  function l(p) {
    if (a) return;
    const v = Aj(e.direction(p));
    v !== o && (r.transform = n(v), o = v);
  }
  function c(p) {
    a = !p;
  }
  function f() {
    a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: f,
    to: l,
    toggleActive: c
  };
}
function Zj(e, t, n, r, o, a, i, s, l) {
  const f = Ao(o), u = Ao(o).reverse(), p = y().concat(x());
  function v(_, R) {
    return _.reduce((T, z) => T - o[z], R);
  }
  function h(_, R) {
    return _.reduce((T, z) => v(T, R) > 0 ? T.concat([z]) : T, []);
  }
  function g(_) {
    return a.map((R, T) => ({
      start: R - r[T] + 0.5 + _,
      end: R + t - 0.5 + _
    }));
  }
  function b(_, R, T) {
    const z = g(R);
    return _.map((j) => {
      const B = T ? 0 : -n, A = T ? n : 0, H = T ? "end" : "start", q = z[j][H];
      return {
        index: j,
        loopPoint: q,
        slideLocation: So(-1),
        translate: l0(e, l[j]),
        target: () => s.get() > q ? B : A
      };
    });
  }
  function y() {
    const _ = i[0], R = h(u, _);
    return b(R, n, !1);
  }
  function x() {
    const _ = t - i[0] - 1, R = h(f, _);
    return b(R, -n, !0);
  }
  function w() {
    return p.every(({
      index: _
    }) => {
      const R = f.filter((T) => T !== _);
      return v(R, t) <= 0.1;
    });
  }
  function S() {
    p.forEach((_) => {
      const {
        target: R,
        translate: T,
        slideLocation: z
      } = _, j = R();
      j !== z.get() && (T.to(j), z.set(j));
    });
  }
  function C() {
    p.forEach((_) => _.translate.clear());
  }
  return {
    canLoop: w,
    clear: C,
    loop: S,
    loopPoints: p
  };
}
function Qj(e, t, n) {
  let r, o = !1;
  function a(l) {
    if (!n) return;
    function c(f) {
      for (const u of f)
        if (u.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((f) => {
      o || (Wi(n) || n(l, f)) && c(f);
    }), r.observe(e, {
      childList: !0
    });
  }
  function i() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: i
  };
}
function ek(e, t, n, r) {
  const o = {};
  let a = null, i = null, s, l = !1;
  function c() {
    s = new IntersectionObserver((h) => {
      l || (h.forEach((g) => {
        const b = t.indexOf(g.target);
        o[b] = g;
      }), a = null, i = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((h) => s.observe(h));
  }
  function f() {
    s && s.disconnect(), l = !0;
  }
  function u(h) {
    return Do(o).reduce((g, b) => {
      const y = parseInt(b), {
        isIntersecting: x
      } = o[y];
      return (h && x || !h && !x) && g.push(y), g;
    }, []);
  }
  function p(h = !0) {
    if (h && a) return a;
    if (!h && i) return i;
    const g = u(h);
    return h && (a = g), h || (i = g), g;
  }
  return {
    init: c,
    destroy: f,
    get: p
  };
}
function tk(e, t, n, r, o, a) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: l
  } = e, c = n[0] && o, f = h(), u = g(), p = n.map(i), v = b();
  function h() {
    if (!c) return 0;
    const x = n[0];
    return Ke(t[s] - x[s]);
  }
  function g() {
    if (!c) return 0;
    const x = a.getComputedStyle(Gt(r));
    return parseFloat(x.getPropertyValue(`margin-${l}`));
  }
  function b() {
    return n.map((x, w, S) => {
      const C = !w, P = Xf(S, w);
      return C ? p[w] + f : P ? p[w] + u : S[w + 1][s] - x[s];
    }).map(Ke);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: v,
    startGap: f,
    endGap: u
  };
}
function nk(e, t, n, r, o, a, i, s, l) {
  const {
    startEdge: c,
    endEdge: f,
    direction: u
  } = e, p = Kf(n);
  function v(y, x) {
    return Ao(y).filter((w) => w % x === 0).map((w) => y.slice(w, w + x));
  }
  function h(y) {
    return y.length ? Ao(y).reduce((x, w, S) => {
      const C = Gt(x) || 0, P = C === 0, _ = w === ia(y), R = o[c] - a[C][c], T = o[c] - a[w][f], z = !r && P ? u(i) : 0, j = !r && _ ? u(s) : 0, B = Ke(T - j - (R + z));
      return S && B > t + l && x.push(w), _ && x.push(y.length), x;
    }, []).map((x, w, S) => {
      const C = Math.max(S[w - 1] || 0);
      return y.slice(C, x);
    }) : [];
  }
  function g(y) {
    return p ? v(y, n) : h(y);
  }
  return {
    groupSlides: g
  };
}
function rk(e, t, n, r, o, a, i) {
  const {
    align: s,
    axis: l,
    direction: c,
    startIndex: f,
    loop: u,
    duration: p,
    dragFree: v,
    dragThreshold: h,
    inViewThreshold: g,
    slidesToScroll: b,
    skipSnaps: y,
    containScroll: x,
    watchResize: w,
    watchSlides: S,
    watchDrag: C,
    watchFocus: P
  } = a, _ = 2, R = Lj(), T = R.measure(t), z = n.map(R.measure), j = kj(l, c), B = j.measureSize(T), A = Fj(B), H = Dj(s, B), q = !u && !!x, $ = u || !!x, {
    slideSizes: F,
    slideSizesWithGaps: M,
    startGap: G,
    endGap: oe
  } = tk(j, T, z, n, $, o), Z = nk(j, B, b, u, T, z, G, oe, _), {
    snaps: L,
    snapsAligned: D
  } = Uj(j, H, T, z, Z), W = -Gt(L) + Gt(M), {
    snapsContained: V,
    scrollContainLimit: K
  } = Hj(B, W, D, x, _), I = q ? V : D, {
    limit: Y
  } = Wj(W, I, u), J = s0(ia(I), f, u), te = J.clone(), ne = Ao(n), X = ({
    dragHandler: Xe,
    scrollBody: Ot,
    scrollBounds: Qe,
    options: {
      loop: rt
    }
  }) => {
    rt || Qe.constrain(Xe.pointerDown()), Ot.seek();
  }, ae = ({
    scrollBody: Xe,
    translate: Ot,
    location: Qe,
    offsetLocation: rt,
    previousLocation: qt,
    scrollLooper: nn,
    slideLooper: Mn,
    dragHandler: Gn,
    animation: Ht,
    eventHandler: ce,
    scrollBounds: ye,
    options: {
      loop: Pe
    }
  }, be) => {
    const Me = Xe.settled(), ue = !ye.shouldConstrain(), xe = Pe ? Me : Me && ue, Ne = xe && !Gn.pointerDown();
    Ne && Ht.stop();
    const Oe = Qe.get() * be + qt.get() * (1 - be);
    rt.set(Oe), Pe && (nn.loop(Xe.direction()), Mn.loop()), Ot.to(rt.get()), Ne && ce.emit("settle"), xe || ce.emit("scroll");
  }, k = jj(r, o, () => X(mt), (Xe) => ae(mt, Xe)), re = 0.68, pe = I[J.get()], me = So(pe), ge = So(pe), de = So(pe), Ee = So(pe), Ge = Bj(me, de, ge, Ee, p, re), _e = Yj(u, I, W, Y, Ee), $e = Xj(k, J, te, Ge, _e, Ee, i), it = Gj(Y), nt = jo(), Ze = ek(t, n, i, g), {
    slideRegistry: lt
  } = Kj(q, x, I, K, Z, ne), bt = Jj(e, n, lt, $e, Ge, nt, i, P), mt = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: i,
    containerRect: T,
    slideRects: z,
    animation: k,
    axis: j,
    dragHandler: Ij(j, e, r, o, Ee, $j(j, o), me, k, $e, Ge, _e, J, i, A, v, h, y, re, C),
    eventStore: nt,
    percentOfView: A,
    index: J,
    indexPrevious: te,
    limit: Y,
    location: me,
    offsetLocation: de,
    previousLocation: ge,
    options: a,
    resizeHandler: zj(t, i, o, n, j, w, R),
    scrollBody: Ge,
    scrollBounds: qj(Y, de, Ee, Ge, A),
    scrollLooper: Vj(W, Y, de, [me, de, ge, Ee]),
    scrollProgress: it,
    scrollSnapList: I.map(it.get),
    scrollSnaps: I,
    scrollTarget: _e,
    scrollTo: $e,
    slideLooper: Zj(j, B, W, F, M, L, I, de, n),
    slideFocus: bt,
    slidesHandler: Qj(t, i, S),
    slidesInView: Ze,
    slideIndexes: ne,
    slideRegistry: lt,
    slidesToScroll: Z,
    target: Ee,
    translate: l0(j, t)
  };
  return mt;
}
function ok() {
  let e = {}, t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function o(c) {
    return r(c).forEach((f) => f(t, c)), l;
  }
  function a(c, f) {
    return e[c] = r(c).concat([f]), l;
  }
  function i(c, f) {
    return e[c] = r(c).filter((u) => u !== f), l;
  }
  function s() {
    e = {};
  }
  const l = {
    init: n,
    emit: o,
    off: i,
    on: a,
    clear: s
  };
  return l;
}
const ak = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function ik(e) {
  function t(a, i) {
    return i0(a, i || {});
  }
  function n(a) {
    const i = a.breakpoints || {}, s = Do(i).filter((l) => e.matchMedia(l).matches).map((l) => i[l]).reduce((l, c) => t(l, c), {});
    return t(a, s);
  }
  function r(a) {
    return a.map((i) => Do(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function sk(e) {
  let t = [];
  function n(a, i) {
    return t = i.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(a, e)), i.reduce((s, l) => Object.assign(s, {
      [l.name]: l
    }), {});
  }
  function r() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function ri(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = ik(o), i = sk(a), s = jo(), l = ok(), {
    mergeOptions: c,
    optionsAtMedia: f,
    optionsMediaQueries: u
  } = a, {
    on: p,
    off: v,
    emit: h
  } = l, g = j;
  let b = !1, y, x = c(ak, ri.globalOptions), w = c(x), S = [], C, P, _;
  function R() {
    const {
      container: ne,
      slides: X
    } = w;
    P = (xd(ne) ? e.querySelector(ne) : ne) || e.children[0];
    const k = xd(X) ? P.querySelectorAll(X) : X;
    _ = [].slice.call(k || P.children);
  }
  function T(ne) {
    const X = rk(e, P, _, r, o, ne, l);
    if (ne.loop && !X.slideLooper.canLoop()) {
      const ae = Object.assign({}, ne, {
        loop: !1
      });
      return T(ae);
    }
    return X;
  }
  function z(ne, X) {
    b || (x = c(x, ne), w = f(x), S = X || S, R(), y = T(w), u([x, ...S.map(({
      options: ae
    }) => ae)]).forEach((ae) => s.add(ae, "change", j)), w.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(te), y.eventHandler.init(te), y.resizeHandler.init(te), y.slidesHandler.init(te), y.options.loop && y.slideLooper.loop(), P.offsetParent && _.length && y.dragHandler.init(te), C = i.init(te, S)));
  }
  function j(ne, X) {
    const ae = Z();
    B(), z(c({
      startIndex: ae
    }, ne), X), l.emit("reInit");
  }
  function B() {
    y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), i.destroy(), s.clear();
  }
  function A() {
    b || (b = !0, s.clear(), B(), l.emit("destroy"), l.clear());
  }
  function H(ne, X, ae) {
    !w.active || b || (y.scrollBody.useBaseFriction().useDuration(X === !0 ? 0 : w.duration), y.scrollTo.index(ne, ae || 0));
  }
  function q(ne) {
    const X = y.index.add(1).get();
    H(X, ne, -1);
  }
  function $(ne) {
    const X = y.index.add(-1).get();
    H(X, ne, 1);
  }
  function F() {
    return y.index.add(1).get() !== Z();
  }
  function M() {
    return y.index.add(-1).get() !== Z();
  }
  function G() {
    return y.scrollSnapList;
  }
  function oe() {
    return y.scrollProgress.get(y.offsetLocation.get());
  }
  function Z() {
    return y.index.get();
  }
  function L() {
    return y.indexPrevious.get();
  }
  function D() {
    return y.slidesInView.get();
  }
  function W() {
    return y.slidesInView.get(!1);
  }
  function V() {
    return C;
  }
  function K() {
    return y;
  }
  function I() {
    return e;
  }
  function Y() {
    return P;
  }
  function J() {
    return _;
  }
  const te = {
    canScrollNext: F,
    canScrollPrev: M,
    containerNode: Y,
    internalEngine: K,
    destroy: A,
    off: v,
    on: p,
    emit: h,
    plugins: V,
    previousScrollSnap: L,
    reInit: g,
    rootNode: I,
    scrollNext: q,
    scrollPrev: $,
    scrollProgress: oe,
    scrollSnapList: G,
    scrollTo: H,
    selectedScrollSnap: Z,
    slideNodes: J,
    slidesInView: D,
    slidesNotInView: W
  };
  return z(t, n), setTimeout(() => l.emit("init"), 0), te;
}
ri.globalOptions = void 0;
function Jf(e = {}, t = []) {
  const n = Lr(e), r = Lr(t), [o, a] = cn(), [i, s] = cn(), l = hy(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return $t(() => {
    Uf(n.current, e) || (n.current = e, l());
  }, [e, l]), $t(() => {
    Nj(r.current, t) || (r.current = t, l());
  }, [t, l]), $t(() => {
    if (Mj() && i) {
      ri.globalOptions = Jf.globalOptions;
      const c = ri(i, n.current, r.current);
      return a(c), () => c.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
Jf.globalOptions = void 0;
const c0 = m.createContext(null);
function Vi() {
  const e = m.useContext(c0);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function J4({
  orientation: e = "horizontal",
  opts: t,
  setApi: n,
  plugins: r,
  className: o,
  children: a,
  ...i
}) {
  const [s, l] = Jf(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    r
  ), [c, f] = m.useState(!1), [u, p] = m.useState(!1), v = m.useCallback((y) => {
    y && (f(y.canScrollPrev()), p(y.canScrollNext()));
  }, []), h = m.useCallback(() => {
    l == null || l.scrollPrev();
  }, [l]), g = m.useCallback(() => {
    l == null || l.scrollNext();
  }, [l]), b = m.useCallback(
    (y) => {
      y.key === "ArrowLeft" ? (y.preventDefault(), h()) : y.key === "ArrowRight" && (y.preventDefault(), g());
    },
    [h, g]
  );
  return m.useEffect(() => {
    !l || !n || n(l);
  }, [l, n]), m.useEffect(() => {
    if (l)
      return v(l), l.on("reInit", v), l.on("select", v), () => {
        l == null || l.off("select", v);
      };
  }, [l, v]), /* @__PURE__ */ d.jsx(
    c0.Provider,
    {
      value: {
        carouselRef: s,
        api: l,
        opts: t,
        orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev: h,
        scrollNext: g,
        canScrollPrev: c,
        canScrollNext: u
      },
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          onKeyDownCapture: b,
          className: O("relative", o),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...i,
          children: a
        }
      )
    }
  );
}
function Z4({ className: e, ...t }) {
  const { carouselRef: n, orientation: r } = Vi();
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: n,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          className: O(
            "flex",
            r === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            e
          ),
          ...t
        }
      )
    }
  );
}
function Q4({ className: e, ...t }) {
  const { orientation: n } = Vi();
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: O(
        "min-w-0 shrink-0 grow-0 basis-full",
        n === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function eV({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...r
}) {
  const { orientation: o, scrollPrev: a, canScrollPrev: i } = Vi();
  return /* @__PURE__ */ d.jsxs(
    cf,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: n,
      className: O(
        "absolute size-8 rounded-full",
        o === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: a,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(JP, {}),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function tV({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...r
}) {
  const { orientation: o, scrollNext: a, canScrollNext: i } = Vi();
  return /* @__PURE__ */ d.jsxs(
    cf,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: n,
      className: O(
        "absolute size-8 rounded-full",
        o === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: a,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(QP, {}),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
var zs, hh;
function en() {
  if (hh) return zs;
  hh = 1;
  var e = Array.isArray;
  return zs = e, zs;
}
var Bs, vh;
function u0() {
  if (vh) return Bs;
  vh = 1;
  var e = typeof wa == "object" && wa && wa.Object === Object && wa;
  return Bs = e, Bs;
}
var qs, gh;
function vn() {
  if (gh) return qs;
  gh = 1;
  var e = u0(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return qs = n, qs;
}
var Hs, bh;
function sa() {
  if (bh) return Hs;
  bh = 1;
  var e = vn(), t = e.Symbol;
  return Hs = t, Hs;
}
var Ws, yh;
function lk() {
  if (yh) return Ws;
  yh = 1;
  var e = sa(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, o = e ? e.toStringTag : void 0;
  function a(i) {
    var s = n.call(i, o), l = i[o];
    try {
      i[o] = void 0;
      var c = !0;
    } catch {
    }
    var f = r.call(i);
    return c && (s ? i[o] = l : delete i[o]), f;
  }
  return Ws = a, Ws;
}
var Vs, xh;
function ck() {
  if (xh) return Vs;
  xh = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return Vs = n, Vs;
}
var Gs, wh;
function vr() {
  if (wh) return Gs;
  wh = 1;
  var e = sa(), t = lk(), n = ck(), r = "[object Null]", o = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? o : r : a && a in Object(s) ? t(s) : n(s);
  }
  return Gs = i, Gs;
}
var Us, Sh;
function gr() {
  if (Sh) return Us;
  Sh = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Us = e, Us;
}
var Ks, _h;
function la() {
  if (_h) return Ks;
  _h = 1;
  var e = vr(), t = gr(), n = "[object Symbol]";
  function r(o) {
    return typeof o == "symbol" || t(o) && e(o) == n;
  }
  return Ks = r, Ks;
}
var Ys, Ch;
function Zf() {
  if (Ch) return Ys;
  Ch = 1;
  var e = en(), t = la(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function o(a, i) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : r.test(a) || !n.test(a) || i != null && a in Object(i);
  }
  return Ys = o, Ys;
}
var Xs, Ph;
function qn() {
  if (Ph) return Xs;
  Ph = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Xs = e, Xs;
}
var Js, Eh;
function Qf() {
  if (Eh) return Js;
  Eh = 1;
  var e = vr(), t = qn(), n = "[object AsyncFunction]", r = "[object Function]", o = "[object GeneratorFunction]", a = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var l = e(s);
    return l == r || l == o || l == n || l == a;
  }
  return Js = i, Js;
}
var Zs, Rh;
function uk() {
  if (Rh) return Zs;
  Rh = 1;
  var e = vn(), t = e["__core-js_shared__"];
  return Zs = t, Zs;
}
var Qs, Th;
function dk() {
  if (Th) return Qs;
  Th = 1;
  var e = uk(), t = (function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!t && t in r;
  }
  return Qs = n, Qs;
}
var el, Mh;
function d0() {
  if (Mh) return el;
  Mh = 1;
  var e = Function.prototype, t = e.toString;
  function n(r) {
    if (r != null) {
      try {
        return t.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return el = n, el;
}
var tl, Nh;
function fk() {
  if (Nh) return tl;
  Nh = 1;
  var e = Qf(), t = dk(), n = qn(), r = d0(), o = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, l = i.toString, c = s.hasOwnProperty, f = RegExp(
    "^" + l.call(c).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function u(p) {
    if (!n(p) || t(p))
      return !1;
    var v = e(p) ? f : a;
    return v.test(r(p));
  }
  return tl = u, tl;
}
var nl, Oh;
function pk() {
  if (Oh) return nl;
  Oh = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return nl = e, nl;
}
var rl, Ah;
function br() {
  if (Ah) return rl;
  Ah = 1;
  var e = fk(), t = pk();
  function n(r, o) {
    var a = t(r, o);
    return e(a) ? a : void 0;
  }
  return rl = n, rl;
}
var ol, Dh;
function Gi() {
  if (Dh) return ol;
  Dh = 1;
  var e = br(), t = e(Object, "create");
  return ol = t, ol;
}
var al, jh;
function mk() {
  if (jh) return al;
  jh = 1;
  var e = Gi();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return al = t, al;
}
var il, kh;
function hk() {
  if (kh) return il;
  kh = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return il = e, il;
}
var sl, Ih;
function vk() {
  if (Ih) return sl;
  Ih = 1;
  var e = Gi(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function o(a) {
    var i = this.__data__;
    if (e) {
      var s = i[a];
      return s === t ? void 0 : s;
    }
    return r.call(i, a) ? i[a] : void 0;
  }
  return sl = o, sl;
}
var ll, $h;
function gk() {
  if ($h) return ll;
  $h = 1;
  var e = Gi(), t = Object.prototype, n = t.hasOwnProperty;
  function r(o) {
    var a = this.__data__;
    return e ? a[o] !== void 0 : n.call(a, o);
  }
  return ll = r, ll;
}
var cl, Lh;
function bk() {
  if (Lh) return cl;
  Lh = 1;
  var e = Gi(), t = "__lodash_hash_undefined__";
  function n(r, o) {
    var a = this.__data__;
    return this.size += this.has(r) ? 0 : 1, a[r] = e && o === void 0 ? t : o, this;
  }
  return cl = n, cl;
}
var ul, Fh;
function yk() {
  if (Fh) return ul;
  Fh = 1;
  var e = mk(), t = hk(), n = vk(), r = gk(), o = bk();
  function a(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var c = i[s];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = o, ul = a, ul;
}
var dl, zh;
function xk() {
  if (zh) return dl;
  zh = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return dl = e, dl;
}
var fl, Bh;
function ep() {
  if (Bh) return fl;
  Bh = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return fl = e, fl;
}
var pl, qh;
function Ui() {
  if (qh) return pl;
  qh = 1;
  var e = ep();
  function t(n, r) {
    for (var o = n.length; o--; )
      if (e(n[o][0], r))
        return o;
    return -1;
  }
  return pl = t, pl;
}
var ml, Hh;
function wk() {
  if (Hh) return ml;
  Hh = 1;
  var e = Ui(), t = Array.prototype, n = t.splice;
  function r(o) {
    var a = this.__data__, i = e(a, o);
    if (i < 0)
      return !1;
    var s = a.length - 1;
    return i == s ? a.pop() : n.call(a, i, 1), --this.size, !0;
  }
  return ml = r, ml;
}
var hl, Wh;
function Sk() {
  if (Wh) return hl;
  Wh = 1;
  var e = Ui();
  function t(n) {
    var r = this.__data__, o = e(r, n);
    return o < 0 ? void 0 : r[o][1];
  }
  return hl = t, hl;
}
var vl, Vh;
function _k() {
  if (Vh) return vl;
  Vh = 1;
  var e = Ui();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return vl = t, vl;
}
var gl, Gh;
function Ck() {
  if (Gh) return gl;
  Gh = 1;
  var e = Ui();
  function t(n, r) {
    var o = this.__data__, a = e(o, n);
    return a < 0 ? (++this.size, o.push([n, r])) : o[a][1] = r, this;
  }
  return gl = t, gl;
}
var bl, Uh;
function Ki() {
  if (Uh) return bl;
  Uh = 1;
  var e = xk(), t = wk(), n = Sk(), r = _k(), o = Ck();
  function a(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var c = i[s];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = o, bl = a, bl;
}
var yl, Kh;
function tp() {
  if (Kh) return yl;
  Kh = 1;
  var e = br(), t = vn(), n = e(t, "Map");
  return yl = n, yl;
}
var xl, Yh;
function Pk() {
  if (Yh) return xl;
  Yh = 1;
  var e = yk(), t = Ki(), n = tp();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return xl = r, xl;
}
var wl, Xh;
function Ek() {
  if (Xh) return wl;
  Xh = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return wl = e, wl;
}
var Sl, Jh;
function Yi() {
  if (Jh) return Sl;
  Jh = 1;
  var e = Ek();
  function t(n, r) {
    var o = n.__data__;
    return e(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map;
  }
  return Sl = t, Sl;
}
var _l, Zh;
function Rk() {
  if (Zh) return _l;
  Zh = 1;
  var e = Yi();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return _l = t, _l;
}
var Cl, Qh;
function Tk() {
  if (Qh) return Cl;
  Qh = 1;
  var e = Yi();
  function t(n) {
    return e(this, n).get(n);
  }
  return Cl = t, Cl;
}
var Pl, ev;
function Mk() {
  if (ev) return Pl;
  ev = 1;
  var e = Yi();
  function t(n) {
    return e(this, n).has(n);
  }
  return Pl = t, Pl;
}
var El, tv;
function Nk() {
  if (tv) return El;
  tv = 1;
  var e = Yi();
  function t(n, r) {
    var o = e(this, n), a = o.size;
    return o.set(n, r), this.size += o.size == a ? 0 : 1, this;
  }
  return El = t, El;
}
var Rl, nv;
function np() {
  if (nv) return Rl;
  nv = 1;
  var e = Pk(), t = Rk(), n = Tk(), r = Mk(), o = Nk();
  function a(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var c = i[s];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = o, Rl = a, Rl;
}
var Tl, rv;
function Ok() {
  if (rv) return Tl;
  rv = 1;
  var e = np(), t = "Expected a function";
  function n(r, o) {
    if (typeof r != "function" || o != null && typeof o != "function")
      throw new TypeError(t);
    var a = function() {
      var i = arguments, s = o ? o.apply(this, i) : i[0], l = a.cache;
      if (l.has(s))
        return l.get(s);
      var c = r.apply(this, i);
      return a.cache = l.set(s, c) || l, c;
    };
    return a.cache = new (n.Cache || e)(), a;
  }
  return n.Cache = e, Tl = n, Tl;
}
var Ml, ov;
function Ak() {
  if (ov) return Ml;
  ov = 1;
  var e = Ok(), t = 500;
  function n(r) {
    var o = e(r, function(i) {
      return a.size === t && a.clear(), i;
    }), a = o.cache;
    return o;
  }
  return Ml = n, Ml;
}
var Nl, av;
function Dk() {
  if (av) return Nl;
  av = 1;
  var e = Ak(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(o) {
    var a = [];
    return o.charCodeAt(0) === 46 && a.push(""), o.replace(t, function(i, s, l, c) {
      a.push(l ? c.replace(n, "$1") : s || i);
    }), a;
  });
  return Nl = r, Nl;
}
var Ol, iv;
function f0() {
  if (iv) return Ol;
  iv = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length, a = Array(o); ++r < o; )
      a[r] = n(t[r], r, t);
    return a;
  }
  return Ol = e, Ol;
}
var Al, sv;
function jk() {
  if (sv) return Al;
  sv = 1;
  var e = sa(), t = f0(), n = en(), r = la(), o = e ? e.prototype : void 0, a = o ? o.toString : void 0;
  function i(s) {
    if (typeof s == "string")
      return s;
    if (n(s))
      return t(s, i) + "";
    if (r(s))
      return a ? a.call(s) : "";
    var l = s + "";
    return l == "0" && 1 / s == -1 / 0 ? "-0" : l;
  }
  return Al = i, Al;
}
var Dl, lv;
function p0() {
  if (lv) return Dl;
  lv = 1;
  var e = jk();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return Dl = t, Dl;
}
var jl, cv;
function m0() {
  if (cv) return jl;
  cv = 1;
  var e = en(), t = Zf(), n = Dk(), r = p0();
  function o(a, i) {
    return e(a) ? a : t(a, i) ? [a] : n(r(a));
  }
  return jl = o, jl;
}
var kl, uv;
function Xi() {
  if (uv) return kl;
  uv = 1;
  var e = la();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return kl = t, kl;
}
var Il, dv;
function rp() {
  if (dv) return Il;
  dv = 1;
  var e = m0(), t = Xi();
  function n(r, o) {
    o = e(o, r);
    for (var a = 0, i = o.length; r != null && a < i; )
      r = r[t(o[a++])];
    return a && a == i ? r : void 0;
  }
  return Il = n, Il;
}
var $l, fv;
function h0() {
  if (fv) return $l;
  fv = 1;
  var e = rp();
  function t(n, r, o) {
    var a = n == null ? void 0 : e(n, r);
    return a === void 0 ? o : a;
  }
  return $l = t, $l;
}
h0();
var Ll, pv;
function kk() {
  if (pv) return Ll;
  pv = 1;
  function e(t) {
    return t == null;
  }
  return Ll = e, Ll;
}
var Ik = kk();
const $k = /* @__PURE__ */ pn(Ik);
var Fl, mv;
function Lk() {
  if (mv) return Fl;
  mv = 1;
  var e = vr(), t = en(), n = gr(), r = "[object String]";
  function o(a) {
    return typeof a == "string" || !t(a) && n(a) && e(a) == r;
  }
  return Fl = o, Fl;
}
var Fk = Lk();
const v0 = /* @__PURE__ */ pn(Fk);
var zk = Qf();
const oi = /* @__PURE__ */ pn(zk);
var Bk = qn();
const g0 = /* @__PURE__ */ pn(Bk);
var Oa = { exports: {} }, De = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hv;
function qk() {
  if (hv) return De;
  hv = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function g(b) {
    if (typeof b == "object" && b !== null) {
      var y = b.$$typeof;
      switch (y) {
        case e:
          switch (b = b.type, b) {
            case n:
            case o:
            case r:
            case c:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case i:
                case l:
                case p:
                case u:
                case a:
                  return b;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return De.ContextConsumer = i, De.ContextProvider = a, De.Element = e, De.ForwardRef = l, De.Fragment = n, De.Lazy = p, De.Memo = u, De.Portal = t, De.Profiler = o, De.StrictMode = r, De.Suspense = c, De.SuspenseList = f, De.isAsyncMode = function() {
    return !1;
  }, De.isConcurrentMode = function() {
    return !1;
  }, De.isContextConsumer = function(b) {
    return g(b) === i;
  }, De.isContextProvider = function(b) {
    return g(b) === a;
  }, De.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, De.isForwardRef = function(b) {
    return g(b) === l;
  }, De.isFragment = function(b) {
    return g(b) === n;
  }, De.isLazy = function(b) {
    return g(b) === p;
  }, De.isMemo = function(b) {
    return g(b) === u;
  }, De.isPortal = function(b) {
    return g(b) === t;
  }, De.isProfiler = function(b) {
    return g(b) === o;
  }, De.isStrictMode = function(b) {
    return g(b) === r;
  }, De.isSuspense = function(b) {
    return g(b) === c;
  }, De.isSuspenseList = function(b) {
    return g(b) === f;
  }, De.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === o || b === r || b === c || b === f || b === v || typeof b == "object" && b !== null && (b.$$typeof === p || b.$$typeof === u || b.$$typeof === a || b.$$typeof === i || b.$$typeof === l || b.$$typeof === h || b.getModuleId !== void 0);
  }, De.typeOf = g, De;
}
var je = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vv;
function Hk() {
  return vv || (vv = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), h = !1, g = !1, b = !1, y = !1, x = !1, w;
    w = Symbol.for("react.module.reference");
    function S(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === n || k === o || x || k === r || k === c || k === f || y || k === v || h || g || b || typeof k == "object" && k !== null && (k.$$typeof === p || k.$$typeof === u || k.$$typeof === a || k.$$typeof === i || k.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === w || k.getModuleId !== void 0));
    }
    function C(k) {
      if (typeof k == "object" && k !== null) {
        var re = k.$$typeof;
        switch (re) {
          case e:
            var pe = k.type;
            switch (pe) {
              case n:
              case o:
              case r:
              case c:
              case f:
                return pe;
              default:
                var me = pe && pe.$$typeof;
                switch (me) {
                  case s:
                  case i:
                  case l:
                  case p:
                  case u:
                  case a:
                    return me;
                  default:
                    return re;
                }
            }
          case t:
            return re;
        }
      }
    }
    var P = i, _ = a, R = e, T = l, z = n, j = p, B = u, A = t, H = o, q = r, $ = c, F = f, M = !1, G = !1;
    function oe(k) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(k) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(k) {
      return C(k) === i;
    }
    function D(k) {
      return C(k) === a;
    }
    function W(k) {
      return typeof k == "object" && k !== null && k.$$typeof === e;
    }
    function V(k) {
      return C(k) === l;
    }
    function K(k) {
      return C(k) === n;
    }
    function I(k) {
      return C(k) === p;
    }
    function Y(k) {
      return C(k) === u;
    }
    function J(k) {
      return C(k) === t;
    }
    function te(k) {
      return C(k) === o;
    }
    function ne(k) {
      return C(k) === r;
    }
    function X(k) {
      return C(k) === c;
    }
    function ae(k) {
      return C(k) === f;
    }
    je.ContextConsumer = P, je.ContextProvider = _, je.Element = R, je.ForwardRef = T, je.Fragment = z, je.Lazy = j, je.Memo = B, je.Portal = A, je.Profiler = H, je.StrictMode = q, je.Suspense = $, je.SuspenseList = F, je.isAsyncMode = oe, je.isConcurrentMode = Z, je.isContextConsumer = L, je.isContextProvider = D, je.isElement = W, je.isForwardRef = V, je.isFragment = K, je.isLazy = I, je.isMemo = Y, je.isPortal = J, je.isProfiler = te, je.isStrictMode = ne, je.isSuspense = X, je.isSuspenseList = ae, je.isValidElementType = S, je.typeOf = C;
  })()), je;
}
var gv;
function Wk() {
  return gv || (gv = 1, process.env.NODE_ENV === "production" ? Oa.exports = qk() : Oa.exports = Hk()), Oa.exports;
}
Wk();
var zl, bv;
function b0() {
  if (bv) return zl;
  bv = 1;
  var e = vr(), t = gr(), n = "[object Number]";
  function r(o) {
    return typeof o == "number" || t(o) && e(o) == n;
  }
  return zl = r, zl;
}
var Bl, yv;
function Vk() {
  if (yv) return Bl;
  yv = 1;
  var e = b0();
  function t(n) {
    return e(n) && n != +n;
  }
  return Bl = t, Bl;
}
var Gk = Vk();
const Uk = /* @__PURE__ */ pn(Gk);
var Kk = b0();
const Yk = /* @__PURE__ */ pn(Kk);
var Aa = function(t) {
  return v0(t) && t.indexOf("%") === t.length - 1;
}, Vt = function(t) {
  return Yk(t) && !Uk(t);
}, ai = function(t) {
  return Vt(t) || v0(t);
};
function Sd(e) {
  "@babel/helpers - typeof";
  return Sd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sd(e);
}
var Xk = ["viewBox", "children"], Jk = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], xv = ["points", "pathLength"], ql = {
  svg: Xk,
  polygon: xv,
  polyline: xv
}, y0 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Zk = function(t, n, r) {
  return function(o) {
    return t(n, r, o), null;
  };
}, Qk = function(t, n, r) {
  if (!g0(t) || Sd(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    y0.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = Zk(i, n, r));
  }), o;
}, eI = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, tI = function(t, n, r, o) {
  var a, i = (a = ql == null ? void 0 : ql[o]) !== null && a !== void 0 ? a : [];
  return n.startsWith("data-") || !oi(t) && (o && i.includes(n) || Jk.includes(n)) || y0.includes(n);
}, x0 = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ zP(t) && (o = t.props), !g0(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    tI((s = o) === null || s === void 0 ? void 0 : s[i], i, n, r) && (a[i] = o[i]);
  }), a;
}, nI = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function _d() {
  return _d = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _d.apply(this, arguments);
}
function rI(e, t) {
  if (e == null) return {};
  var n = oI(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function oI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function aI(e) {
  var t = e.children, n = e.width, r = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, l = e.desc, c = rI(e, nI), f = o || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, u = Cn("recharts-surface", a);
  return /* @__PURE__ */ E.createElement("svg", _d({}, x0(c, !0, "svg"), {
    className: u,
    width: n,
    height: r,
    style: i,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ E.createElement("title", null, s), /* @__PURE__ */ E.createElement("desc", null, l), t);
}
var iI = process.env.NODE_ENV !== "production", Va = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  if (iI && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(n.replace(/%s/g, function() {
        return o[i++];
      }));
    }
}, Hl, wv;
function sI() {
  if (wv) return Hl;
  wv = 1;
  function e(t, n, r) {
    var o = -1, a = t.length;
    n < 0 && (n = -n > a ? 0 : a + n), r = r > a ? a : r, r < 0 && (r += a), a = n > r ? 0 : r - n >>> 0, n >>>= 0;
    for (var i = Array(a); ++o < a; )
      i[o] = t[o + n];
    return i;
  }
  return Hl = e, Hl;
}
var Wl, Sv;
function lI() {
  if (Sv) return Wl;
  Sv = 1;
  var e = sI();
  function t(n, r, o) {
    var a = n.length;
    return o = o === void 0 ? a : o, !r && o >= a ? n : e(n, r, o);
  }
  return Wl = t, Wl;
}
var Vl, _v;
function w0() {
  if (_v) return Vl;
  _v = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", o = t + n + r, a = "\\ufe0e\\ufe0f", i = "\\u200d", s = RegExp("[" + i + e + o + a + "]");
  function l(c) {
    return s.test(c);
  }
  return Vl = l, Vl;
}
var Gl, Cv;
function cI() {
  if (Cv) return Gl;
  Cv = 1;
  function e(t) {
    return t.split("");
  }
  return Gl = e, Gl;
}
var Ul, Pv;
function uI() {
  if (Pv) return Ul;
  Pv = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", o = t + n + r, a = "\\ufe0e\\ufe0f", i = "[" + e + "]", s = "[" + o + "]", l = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + s + "|" + l + ")", f = "[^" + e + "]", u = "(?:\\ud83c[\\udde6-\\uddff]){2}", p = "[\\ud800-\\udbff][\\udc00-\\udfff]", v = "\\u200d", h = c + "?", g = "[" + a + "]?", b = "(?:" + v + "(?:" + [f, u, p].join("|") + ")" + g + h + ")*", y = g + h + b, x = "(?:" + [f + s + "?", s, u, p, i].join("|") + ")", w = RegExp(l + "(?=" + l + ")|" + x + y, "g");
  function S(C) {
    return C.match(w) || [];
  }
  return Ul = S, Ul;
}
var Kl, Ev;
function dI() {
  if (Ev) return Kl;
  Ev = 1;
  var e = cI(), t = w0(), n = uI();
  function r(o) {
    return t(o) ? n(o) : e(o);
  }
  return Kl = r, Kl;
}
var Yl, Rv;
function fI() {
  if (Rv) return Yl;
  Rv = 1;
  var e = lI(), t = w0(), n = dI(), r = p0();
  function o(a) {
    return function(i) {
      i = r(i);
      var s = t(i) ? n(i) : void 0, l = s ? s[0] : i.charAt(0), c = s ? e(s, 1).join("") : i.slice(1);
      return l[a]() + c;
    };
  }
  return Yl = o, Yl;
}
var Xl, Tv;
function pI() {
  if (Tv) return Xl;
  Tv = 1;
  var e = fI(), t = e("toUpperCase");
  return Xl = t, Xl;
}
var mI = pI();
const S0 = /* @__PURE__ */ pn(mI);
function Da(e) {
  return function() {
    return e;
  };
}
const _0 = Math.cos, ii = Math.sin, tn = Math.sqrt, si = Math.PI, Ji = 2 * si, Cd = Math.PI, Pd = 2 * Cd, Zn = 1e-6, hI = Pd - Zn;
function C0(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function vI(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return C0;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, a = r.length; o < a; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class gI {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? C0 : vI(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, a, i) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +a},${this._y1 = +i}`;
  }
  arcTo(t, n, r, o, a) {
    if (t = +t, n = +n, r = +r, o = +o, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let i = this._x1, s = this._y1, l = r - t, c = o - n, f = i - t, u = s - n, p = f * f + u * u;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (p > Zn) if (!(Math.abs(u * l - c * f) > Zn) || !a)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let v = r - i, h = o - s, g = l * l + c * c, b = v * v + h * h, y = Math.sqrt(g), x = Math.sqrt(p), w = a * Math.tan((Cd - Math.acos((g + p - b) / (2 * y * x))) / 2), S = w / x, C = w / y;
      Math.abs(S - 1) > Zn && this._append`L${t + S * f},${n + S * u}`, this._append`A${a},${a},0,0,${+(u * v > f * h)},${this._x1 = t + C * l},${this._y1 = n + C * c}`;
    }
  }
  arc(t, n, r, o, a, i) {
    if (t = +t, n = +n, r = +r, i = !!i, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(o), l = r * Math.sin(o), c = t + s, f = n + l, u = 1 ^ i, p = i ? o - a : a - o;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > Zn || Math.abs(this._y1 - f) > Zn) && this._append`L${c},${f}`, r && (p < 0 && (p = p % Pd + Pd), p > hI ? this._append`A${r},${r},0,1,${u},${t - s},${n - l}A${r},${r},0,1,${u},${this._x1 = c},${this._y1 = f}` : p > Zn && this._append`A${r},${r},0,${+(p >= Cd)},${u},${this._x1 = t + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function bI(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new gI(t);
}
const op = {
  draw(e, t) {
    const n = tn(t / si);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, Ji);
  }
}, yI = {
  draw(e, t) {
    const n = tn(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, P0 = tn(1 / 3), xI = P0 * 2, wI = {
  draw(e, t) {
    const n = tn(t / xI), r = n * P0;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, SI = {
  draw(e, t) {
    const n = tn(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, _I = 0.8908130915292852, E0 = ii(si / 10) / ii(7 * si / 10), CI = ii(Ji / 10) * E0, PI = -_0(Ji / 10) * E0, EI = {
  draw(e, t) {
    const n = tn(t * _I), r = CI * n, o = PI * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let a = 1; a < 5; ++a) {
      const i = Ji * a / 5, s = _0(i), l = ii(i);
      e.lineTo(l * n, -s * n), e.lineTo(s * r - l * o, l * r + s * o);
    }
    e.closePath();
  }
}, Jl = tn(3), RI = {
  draw(e, t) {
    const n = -tn(t / (Jl * 3));
    e.moveTo(0, n * 2), e.lineTo(-Jl * n, -n), e.lineTo(Jl * n, -n), e.closePath();
  }
}, jt = -0.5, kt = tn(3) / 2, Ed = 1 / tn(12), TI = (Ed / 2 + 1) * 3, MI = {
  draw(e, t) {
    const n = tn(t / TI), r = n / 2, o = n * Ed, a = r, i = n * Ed + n, s = -a, l = i;
    e.moveTo(r, o), e.lineTo(a, i), e.lineTo(s, l), e.lineTo(jt * r - kt * o, kt * r + jt * o), e.lineTo(jt * a - kt * i, kt * a + jt * i), e.lineTo(jt * s - kt * l, kt * s + jt * l), e.lineTo(jt * r + kt * o, jt * o - kt * r), e.lineTo(jt * a + kt * i, jt * i - kt * a), e.lineTo(jt * s + kt * l, jt * l - kt * s), e.closePath();
  }
};
function NI(e, t) {
  let n = null, r = bI(o);
  e = typeof e == "function" ? e : Da(e || op), t = typeof t == "function" ? t : Da(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (n || (n = a = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), a) return n = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Da(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Da(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (n = a ?? null, o) : n;
  }, o;
}
function ko(e) {
  "@babel/helpers - typeof";
  return ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ko(e);
}
var OI = ["type", "size", "sizeType"];
function Rd() {
  return Rd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Rd.apply(this, arguments);
}
function Mv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Nv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mv(Object(n), !0).forEach(function(r) {
      AI(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mv(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function AI(e, t, n) {
  return t = DI(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function DI(e) {
  var t = jI(e, "string");
  return ko(t) == "symbol" ? t : t + "";
}
function jI(e, t) {
  if (ko(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ko(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kI(e, t) {
  if (e == null) return {};
  var n = II(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function II(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var R0 = {
  symbolCircle: op,
  symbolCross: yI,
  symbolDiamond: wI,
  symbolSquare: SI,
  symbolStar: EI,
  symbolTriangle: RI,
  symbolWye: MI
}, $I = Math.PI / 180, LI = function(t) {
  var n = "symbol".concat(S0(t));
  return R0[n] || op;
}, FI = function(t, n, r) {
  if (n === "area")
    return t;
  switch (r) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var o = 18 * $I;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, zI = function(t, n) {
  R0["symbol".concat(S0(t))] = n;
}, T0 = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, l = kI(t, OI), c = Nv(Nv({}, l), {}, {
    type: r,
    size: a,
    sizeType: s
  }), f = function() {
    var b = LI(r), y = NI().type(b).size(FI(a, s, r));
    return y();
  }, u = c.className, p = c.cx, v = c.cy, h = x0(c, !0);
  return p === +p && v === +v && a === +a ? /* @__PURE__ */ E.createElement("path", Rd({}, h, {
    className: Cn("recharts-symbols", u),
    transform: "translate(".concat(p, ", ").concat(v, ")"),
    d: f()
  })) : null;
};
T0.registerSymbol = zI;
function qr(e) {
  "@babel/helpers - typeof";
  return qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qr(e);
}
function Td() {
  return Td = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Td.apply(this, arguments);
}
function Ov(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function BI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ov(Object(n), !0).forEach(function(r) {
      Io(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ov(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function qI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function HI(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, N0(r.key), r);
  }
}
function WI(e, t, n) {
  return t && HI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function VI(e, t, n) {
  return t = li(t), GI(e, M0() ? Reflect.construct(t, n || [], li(e).constructor) : t.apply(e, n));
}
function GI(e, t) {
  if (t && (qr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return UI(e);
}
function UI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function M0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (M0 = function() {
    return !!e;
  })();
}
function li(e) {
  return li = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, li(e);
}
function KI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Md(e, t);
}
function Md(e, t) {
  return Md = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Md(e, t);
}
function Io(e, t, n) {
  return t = N0(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function N0(e) {
  var t = YI(e, "string");
  return qr(t) == "symbol" ? t : t + "";
}
function YI(e, t) {
  if (qr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (qr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var It = 32, ap = /* @__PURE__ */ (function(e) {
  function t() {
    return qI(this, t), VI(this, t, arguments);
  }
  return KI(t, e), WI(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var o = this.props.inactiveColor, a = It / 2, i = It / 6, s = It / 3, l = r.inactive ? o : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ E.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: It,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ E.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(It, "M").concat(2 * s, ",").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ E.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat(It / 8, "h").concat(It, "v").concat(It * 3 / 4, "h").concat(-It, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ E.isValidElement(r.legendIcon)) {
          var c = BI({}, r);
          return delete c.legendIcon, /* @__PURE__ */ E.cloneElement(r.legendIcon, c);
        }
        return /* @__PURE__ */ E.createElement(T0, {
          fill: l,
          cx: a,
          cy: a,
          size: It,
          sizeType: "diameter",
          type: r.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var r = this, o = this.props, a = o.payload, i = o.iconSize, s = o.layout, l = o.formatter, c = o.inactiveColor, f = {
        x: 0,
        y: 0,
        width: It,
        height: It
      }, u = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, p = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(v, h) {
        var g = v.formatter || l, b = Cn(Io(Io({
          "recharts-legend-item": !0
        }, "legend-item-".concat(h), !0), "inactive", v.inactive));
        if (v.type === "none")
          return null;
        var y = oi(v.value) ? null : v.value;
        Va(
          !oi(v.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var x = v.inactive ? c : v.color;
        return /* @__PURE__ */ E.createElement("li", Td({
          className: b,
          style: u,
          key: "legend-item-".concat(h)
        }, Qk(r.props, v, h)), /* @__PURE__ */ E.createElement(aI, {
          width: i,
          height: i,
          viewBox: f,
          style: p
        }, r.renderIcon(v)), /* @__PURE__ */ E.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: x
          }
        }, g ? g(y, v, h) : y));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.payload, a = r.layout, i = r.align;
      if (!o || !o.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? i : "left"
      };
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
})(Ci);
Io(ap, "displayName", "Legend");
Io(ap, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Zl, Av;
function XI() {
  if (Av) return Zl;
  Av = 1;
  var e = Ki();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Zl = t, Zl;
}
var Ql, Dv;
function JI() {
  if (Dv) return Ql;
  Dv = 1;
  function e(t) {
    var n = this.__data__, r = n.delete(t);
    return this.size = n.size, r;
  }
  return Ql = e, Ql;
}
var ec, jv;
function ZI() {
  if (jv) return ec;
  jv = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return ec = e, ec;
}
var tc, kv;
function QI() {
  if (kv) return tc;
  kv = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return tc = e, tc;
}
var nc, Iv;
function e$() {
  if (Iv) return nc;
  Iv = 1;
  var e = Ki(), t = tp(), n = np(), r = 200;
  function o(a, i) {
    var s = this.__data__;
    if (s instanceof e) {
      var l = s.__data__;
      if (!t || l.length < r - 1)
        return l.push([a, i]), this.size = ++s.size, this;
      s = this.__data__ = new n(l);
    }
    return s.set(a, i), this.size = s.size, this;
  }
  return nc = o, nc;
}
var rc, $v;
function O0() {
  if ($v) return rc;
  $v = 1;
  var e = Ki(), t = XI(), n = JI(), r = ZI(), o = QI(), a = e$();
  function i(s) {
    var l = this.__data__ = new e(s);
    this.size = l.size;
  }
  return i.prototype.clear = t, i.prototype.delete = n, i.prototype.get = r, i.prototype.has = o, i.prototype.set = a, rc = i, rc;
}
var oc, Lv;
function t$() {
  if (Lv) return oc;
  Lv = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return oc = t, oc;
}
var ac, Fv;
function n$() {
  if (Fv) return ac;
  Fv = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ac = e, ac;
}
var ic, zv;
function A0() {
  if (zv) return ic;
  zv = 1;
  var e = np(), t = t$(), n = n$();
  function r(o) {
    var a = -1, i = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++a < i; )
      this.add(o[a]);
  }
  return r.prototype.add = r.prototype.push = t, r.prototype.has = n, ic = r, ic;
}
var sc, Bv;
function r$() {
  if (Bv) return sc;
  Bv = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length; ++r < o; )
      if (n(t[r], r, t))
        return !0;
    return !1;
  }
  return sc = e, sc;
}
var lc, qv;
function D0() {
  if (qv) return lc;
  qv = 1;
  function e(t, n) {
    return t.has(n);
  }
  return lc = e, lc;
}
var cc, Hv;
function j0() {
  if (Hv) return cc;
  Hv = 1;
  var e = A0(), t = r$(), n = D0(), r = 1, o = 2;
  function a(i, s, l, c, f, u) {
    var p = l & r, v = i.length, h = s.length;
    if (v != h && !(p && h > v))
      return !1;
    var g = u.get(i), b = u.get(s);
    if (g && b)
      return g == s && b == i;
    var y = -1, x = !0, w = l & o ? new e() : void 0;
    for (u.set(i, s), u.set(s, i); ++y < v; ) {
      var S = i[y], C = s[y];
      if (c)
        var P = p ? c(C, S, y, s, i, u) : c(S, C, y, i, s, u);
      if (P !== void 0) {
        if (P)
          continue;
        x = !1;
        break;
      }
      if (w) {
        if (!t(s, function(_, R) {
          if (!n(w, R) && (S === _ || f(S, _, l, c, u)))
            return w.push(R);
        })) {
          x = !1;
          break;
        }
      } else if (!(S === C || f(S, C, l, c, u))) {
        x = !1;
        break;
      }
    }
    return u.delete(i), u.delete(s), x;
  }
  return cc = a, cc;
}
var uc, Wv;
function o$() {
  if (Wv) return uc;
  Wv = 1;
  var e = vn(), t = e.Uint8Array;
  return uc = t, uc;
}
var dc, Vv;
function a$() {
  if (Vv) return dc;
  Vv = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(o, a) {
      r[++n] = [a, o];
    }), r;
  }
  return dc = e, dc;
}
var fc, Gv;
function ip() {
  if (Gv) return fc;
  Gv = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(o) {
      r[++n] = o;
    }), r;
  }
  return fc = e, fc;
}
var pc, Uv;
function i$() {
  if (Uv) return pc;
  Uv = 1;
  var e = sa(), t = o$(), n = ep(), r = j0(), o = a$(), a = ip(), i = 1, s = 2, l = "[object Boolean]", c = "[object Date]", f = "[object Error]", u = "[object Map]", p = "[object Number]", v = "[object RegExp]", h = "[object Set]", g = "[object String]", b = "[object Symbol]", y = "[object ArrayBuffer]", x = "[object DataView]", w = e ? e.prototype : void 0, S = w ? w.valueOf : void 0;
  function C(P, _, R, T, z, j, B) {
    switch (R) {
      case x:
        if (P.byteLength != _.byteLength || P.byteOffset != _.byteOffset)
          return !1;
        P = P.buffer, _ = _.buffer;
      case y:
        return !(P.byteLength != _.byteLength || !j(new t(P), new t(_)));
      case l:
      case c:
      case p:
        return n(+P, +_);
      case f:
        return P.name == _.name && P.message == _.message;
      case v:
      case g:
        return P == _ + "";
      case u:
        var A = o;
      case h:
        var H = T & i;
        if (A || (A = a), P.size != _.size && !H)
          return !1;
        var q = B.get(P);
        if (q)
          return q == _;
        T |= s, B.set(P, _);
        var $ = r(A(P), A(_), T, z, j, B);
        return B.delete(P), $;
      case b:
        if (S)
          return S.call(P) == S.call(_);
    }
    return !1;
  }
  return pc = C, pc;
}
var mc, Kv;
function k0() {
  if (Kv) return mc;
  Kv = 1;
  function e(t, n) {
    for (var r = -1, o = n.length, a = t.length; ++r < o; )
      t[a + r] = n[r];
    return t;
  }
  return mc = e, mc;
}
var hc, Yv;
function s$() {
  if (Yv) return hc;
  Yv = 1;
  var e = k0(), t = en();
  function n(r, o, a) {
    var i = o(r);
    return t(r) ? i : e(i, a(r));
  }
  return hc = n, hc;
}
var vc, Xv;
function l$() {
  if (Xv) return vc;
  Xv = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length, a = 0, i = []; ++r < o; ) {
      var s = t[r];
      n(s, r, t) && (i[a++] = s);
    }
    return i;
  }
  return vc = e, vc;
}
var gc, Jv;
function c$() {
  if (Jv) return gc;
  Jv = 1;
  function e() {
    return [];
  }
  return gc = e, gc;
}
var bc, Zv;
function u$() {
  if (Zv) return bc;
  Zv = 1;
  var e = l$(), t = c$(), n = Object.prototype, r = n.propertyIsEnumerable, o = Object.getOwnPropertySymbols, a = o ? function(i) {
    return i == null ? [] : (i = Object(i), e(o(i), function(s) {
      return r.call(i, s);
    }));
  } : t;
  return bc = a, bc;
}
var yc, Qv;
function d$() {
  if (Qv) return yc;
  Qv = 1;
  function e(t, n) {
    for (var r = -1, o = Array(t); ++r < t; )
      o[r] = n(r);
    return o;
  }
  return yc = e, yc;
}
var xc, eg;
function f$() {
  if (eg) return xc;
  eg = 1;
  var e = vr(), t = gr(), n = "[object Arguments]";
  function r(o) {
    return t(o) && e(o) == n;
  }
  return xc = r, xc;
}
var wc, tg;
function sp() {
  if (tg) return wc;
  tg = 1;
  var e = f$(), t = gr(), n = Object.prototype, r = n.hasOwnProperty, o = n.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(i) {
    return t(i) && r.call(i, "callee") && !o.call(i, "callee");
  };
  return wc = a, wc;
}
var _o = { exports: {} }, Sc, ng;
function p$() {
  if (ng) return Sc;
  ng = 1;
  function e() {
    return !1;
  }
  return Sc = e, Sc;
}
_o.exports;
var rg;
function I0() {
  return rg || (rg = 1, (function(e, t) {
    var n = vn(), r = p$(), o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? n.Buffer : void 0, l = s ? s.isBuffer : void 0, c = l || r;
    e.exports = c;
  })(_o, _o.exports)), _o.exports;
}
var _c, og;
function lp() {
  if (og) return _c;
  og = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(r, o) {
    var a = typeof r;
    return o = o ?? e, !!o && (a == "number" || a != "symbol" && t.test(r)) && r > -1 && r % 1 == 0 && r < o;
  }
  return _c = n, _c;
}
var Cc, ag;
function cp() {
  if (ag) return Cc;
  ag = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return Cc = t, Cc;
}
var Pc, ig;
function m$() {
  if (ig) return Pc;
  ig = 1;
  var e = vr(), t = cp(), n = gr(), r = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", i = "[object Date]", s = "[object Error]", l = "[object Function]", c = "[object Map]", f = "[object Number]", u = "[object Object]", p = "[object RegExp]", v = "[object Set]", h = "[object String]", g = "[object WeakMap]", b = "[object ArrayBuffer]", y = "[object DataView]", x = "[object Float32Array]", w = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", P = "[object Int32Array]", _ = "[object Uint8Array]", R = "[object Uint8ClampedArray]", T = "[object Uint16Array]", z = "[object Uint32Array]", j = {};
  j[x] = j[w] = j[S] = j[C] = j[P] = j[_] = j[R] = j[T] = j[z] = !0, j[r] = j[o] = j[b] = j[a] = j[y] = j[i] = j[s] = j[l] = j[c] = j[f] = j[u] = j[p] = j[v] = j[h] = j[g] = !1;
  function B(A) {
    return n(A) && t(A.length) && !!j[e(A)];
  }
  return Pc = B, Pc;
}
var Ec, sg;
function $0() {
  if (sg) return Ec;
  sg = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return Ec = e, Ec;
}
var Co = { exports: {} };
Co.exports;
var lg;
function h$() {
  return lg || (lg = 1, (function(e, t) {
    var n = u0(), r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, i = a && n.process, s = (function() {
      try {
        var l = o && o.require && o.require("util").types;
        return l || i && i.binding && i.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(Co, Co.exports)), Co.exports;
}
var Rc, cg;
function L0() {
  if (cg) return Rc;
  cg = 1;
  var e = m$(), t = $0(), n = h$(), r = n && n.isTypedArray, o = r ? t(r) : e;
  return Rc = o, Rc;
}
var Tc, ug;
function v$() {
  if (ug) return Tc;
  ug = 1;
  var e = d$(), t = sp(), n = en(), r = I0(), o = lp(), a = L0(), i = Object.prototype, s = i.hasOwnProperty;
  function l(c, f) {
    var u = n(c), p = !u && t(c), v = !u && !p && r(c), h = !u && !p && !v && a(c), g = u || p || v || h, b = g ? e(c.length, String) : [], y = b.length;
    for (var x in c)
      (f || s.call(c, x)) && !(g && // Safari 9 has enumerable `arguments.length` in strict mode.
      (x == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (x == "offset" || x == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      h && (x == "buffer" || x == "byteLength" || x == "byteOffset") || // Skip index properties.
      o(x, y))) && b.push(x);
    return b;
  }
  return Tc = l, Tc;
}
var Mc, dg;
function g$() {
  if (dg) return Mc;
  dg = 1;
  var e = Object.prototype;
  function t(n) {
    var r = n && n.constructor, o = typeof r == "function" && r.prototype || e;
    return n === o;
  }
  return Mc = t, Mc;
}
var Nc, fg;
function b$() {
  if (fg) return Nc;
  fg = 1;
  function e(t, n) {
    return function(r) {
      return t(n(r));
    };
  }
  return Nc = e, Nc;
}
var Oc, pg;
function y$() {
  if (pg) return Oc;
  pg = 1;
  var e = b$(), t = e(Object.keys, Object);
  return Oc = t, Oc;
}
var Ac, mg;
function x$() {
  if (mg) return Ac;
  mg = 1;
  var e = g$(), t = y$(), n = Object.prototype, r = n.hasOwnProperty;
  function o(a) {
    if (!e(a))
      return t(a);
    var i = [];
    for (var s in Object(a))
      r.call(a, s) && s != "constructor" && i.push(s);
    return i;
  }
  return Ac = o, Ac;
}
var Dc, hg;
function Zi() {
  if (hg) return Dc;
  hg = 1;
  var e = Qf(), t = cp();
  function n(r) {
    return r != null && t(r.length) && !e(r);
  }
  return Dc = n, Dc;
}
var jc, vg;
function up() {
  if (vg) return jc;
  vg = 1;
  var e = v$(), t = x$(), n = Zi();
  function r(o) {
    return n(o) ? e(o) : t(o);
  }
  return jc = r, jc;
}
var kc, gg;
function w$() {
  if (gg) return kc;
  gg = 1;
  var e = s$(), t = u$(), n = up();
  function r(o) {
    return e(o, n, t);
  }
  return kc = r, kc;
}
var Ic, bg;
function S$() {
  if (bg) return Ic;
  bg = 1;
  var e = w$(), t = 1, n = Object.prototype, r = n.hasOwnProperty;
  function o(a, i, s, l, c, f) {
    var u = s & t, p = e(a), v = p.length, h = e(i), g = h.length;
    if (v != g && !u)
      return !1;
    for (var b = v; b--; ) {
      var y = p[b];
      if (!(u ? y in i : r.call(i, y)))
        return !1;
    }
    var x = f.get(a), w = f.get(i);
    if (x && w)
      return x == i && w == a;
    var S = !0;
    f.set(a, i), f.set(i, a);
    for (var C = u; ++b < v; ) {
      y = p[b];
      var P = a[y], _ = i[y];
      if (l)
        var R = u ? l(_, P, y, i, a, f) : l(P, _, y, a, i, f);
      if (!(R === void 0 ? P === _ || c(P, _, s, l, f) : R)) {
        S = !1;
        break;
      }
      C || (C = y == "constructor");
    }
    if (S && !C) {
      var T = a.constructor, z = i.constructor;
      T != z && "constructor" in a && "constructor" in i && !(typeof T == "function" && T instanceof T && typeof z == "function" && z instanceof z) && (S = !1);
    }
    return f.delete(a), f.delete(i), S;
  }
  return Ic = o, Ic;
}
var $c, yg;
function _$() {
  if (yg) return $c;
  yg = 1;
  var e = br(), t = vn(), n = e(t, "DataView");
  return $c = n, $c;
}
var Lc, xg;
function C$() {
  if (xg) return Lc;
  xg = 1;
  var e = br(), t = vn(), n = e(t, "Promise");
  return Lc = n, Lc;
}
var Fc, wg;
function F0() {
  if (wg) return Fc;
  wg = 1;
  var e = br(), t = vn(), n = e(t, "Set");
  return Fc = n, Fc;
}
var zc, Sg;
function P$() {
  if (Sg) return zc;
  Sg = 1;
  var e = br(), t = vn(), n = e(t, "WeakMap");
  return zc = n, zc;
}
var Bc, _g;
function E$() {
  if (_g) return Bc;
  _g = 1;
  var e = _$(), t = tp(), n = C$(), r = F0(), o = P$(), a = vr(), i = d0(), s = "[object Map]", l = "[object Object]", c = "[object Promise]", f = "[object Set]", u = "[object WeakMap]", p = "[object DataView]", v = i(e), h = i(t), g = i(n), b = i(r), y = i(o), x = a;
  return (e && x(new e(new ArrayBuffer(1))) != p || t && x(new t()) != s || n && x(n.resolve()) != c || r && x(new r()) != f || o && x(new o()) != u) && (x = function(w) {
    var S = a(w), C = S == l ? w.constructor : void 0, P = C ? i(C) : "";
    if (P)
      switch (P) {
        case v:
          return p;
        case h:
          return s;
        case g:
          return c;
        case b:
          return f;
        case y:
          return u;
      }
    return S;
  }), Bc = x, Bc;
}
var qc, Cg;
function R$() {
  if (Cg) return qc;
  Cg = 1;
  var e = O0(), t = j0(), n = i$(), r = S$(), o = E$(), a = en(), i = I0(), s = L0(), l = 1, c = "[object Arguments]", f = "[object Array]", u = "[object Object]", p = Object.prototype, v = p.hasOwnProperty;
  function h(g, b, y, x, w, S) {
    var C = a(g), P = a(b), _ = C ? f : o(g), R = P ? f : o(b);
    _ = _ == c ? u : _, R = R == c ? u : R;
    var T = _ == u, z = R == u, j = _ == R;
    if (j && i(g)) {
      if (!i(b))
        return !1;
      C = !0, T = !1;
    }
    if (j && !T)
      return S || (S = new e()), C || s(g) ? t(g, b, y, x, w, S) : n(g, b, _, y, x, w, S);
    if (!(y & l)) {
      var B = T && v.call(g, "__wrapped__"), A = z && v.call(b, "__wrapped__");
      if (B || A) {
        var H = B ? g.value() : g, q = A ? b.value() : b;
        return S || (S = new e()), w(H, q, y, x, S);
      }
    }
    return j ? (S || (S = new e()), r(g, b, y, x, w, S)) : !1;
  }
  return qc = h, qc;
}
var Hc, Pg;
function z0() {
  if (Pg) return Hc;
  Pg = 1;
  var e = R$(), t = gr();
  function n(r, o, a, i, s) {
    return r === o ? !0 : r == null || o == null || !t(r) && !t(o) ? r !== r && o !== o : e(r, o, a, i, n, s);
  }
  return Hc = n, Hc;
}
var Wc, Eg;
function T$() {
  if (Eg) return Wc;
  Eg = 1;
  var e = O0(), t = z0(), n = 1, r = 2;
  function o(a, i, s, l) {
    var c = s.length, f = c, u = !l;
    if (a == null)
      return !f;
    for (a = Object(a); c--; ) {
      var p = s[c];
      if (u && p[2] ? p[1] !== a[p[0]] : !(p[0] in a))
        return !1;
    }
    for (; ++c < f; ) {
      p = s[c];
      var v = p[0], h = a[v], g = p[1];
      if (u && p[2]) {
        if (h === void 0 && !(v in a))
          return !1;
      } else {
        var b = new e();
        if (l)
          var y = l(h, g, v, a, i, b);
        if (!(y === void 0 ? t(g, h, n | r, l, b) : y))
          return !1;
      }
    }
    return !0;
  }
  return Wc = o, Wc;
}
var Vc, Rg;
function B0() {
  if (Rg) return Vc;
  Rg = 1;
  var e = qn();
  function t(n) {
    return n === n && !e(n);
  }
  return Vc = t, Vc;
}
var Gc, Tg;
function M$() {
  if (Tg) return Gc;
  Tg = 1;
  var e = B0(), t = up();
  function n(r) {
    for (var o = t(r), a = o.length; a--; ) {
      var i = o[a], s = r[i];
      o[a] = [i, s, e(s)];
    }
    return o;
  }
  return Gc = n, Gc;
}
var Uc, Mg;
function q0() {
  if (Mg) return Uc;
  Mg = 1;
  function e(t, n) {
    return function(r) {
      return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r));
    };
  }
  return Uc = e, Uc;
}
var Kc, Ng;
function N$() {
  if (Ng) return Kc;
  Ng = 1;
  var e = T$(), t = M$(), n = q0();
  function r(o) {
    var a = t(o);
    return a.length == 1 && a[0][2] ? n(a[0][0], a[0][1]) : function(i) {
      return i === o || e(i, o, a);
    };
  }
  return Kc = r, Kc;
}
var Yc, Og;
function O$() {
  if (Og) return Yc;
  Og = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return Yc = e, Yc;
}
var Xc, Ag;
function A$() {
  if (Ag) return Xc;
  Ag = 1;
  var e = m0(), t = sp(), n = en(), r = lp(), o = cp(), a = Xi();
  function i(s, l, c) {
    l = e(l, s);
    for (var f = -1, u = l.length, p = !1; ++f < u; ) {
      var v = a(l[f]);
      if (!(p = s != null && c(s, v)))
        break;
      s = s[v];
    }
    return p || ++f != u ? p : (u = s == null ? 0 : s.length, !!u && o(u) && r(v, u) && (n(s) || t(s)));
  }
  return Xc = i, Xc;
}
var Jc, Dg;
function D$() {
  if (Dg) return Jc;
  Dg = 1;
  var e = O$(), t = A$();
  function n(r, o) {
    return r != null && t(r, o, e);
  }
  return Jc = n, Jc;
}
var Zc, jg;
function j$() {
  if (jg) return Zc;
  jg = 1;
  var e = z0(), t = h0(), n = D$(), r = Zf(), o = B0(), a = q0(), i = Xi(), s = 1, l = 2;
  function c(f, u) {
    return r(f) && o(u) ? a(i(f), u) : function(p) {
      var v = t(p, f);
      return v === void 0 && v === u ? n(p, f) : e(u, v, s | l);
    };
  }
  return Zc = c, Zc;
}
var Qc, kg;
function Qi() {
  if (kg) return Qc;
  kg = 1;
  function e(t) {
    return t;
  }
  return Qc = e, Qc;
}
var eu, Ig;
function k$() {
  if (Ig) return eu;
  Ig = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return eu = e, eu;
}
var tu, $g;
function I$() {
  if ($g) return tu;
  $g = 1;
  var e = rp();
  function t(n) {
    return function(r) {
      return e(r, n);
    };
  }
  return tu = t, tu;
}
var nu, Lg;
function $$() {
  if (Lg) return nu;
  Lg = 1;
  var e = k$(), t = I$(), n = Zf(), r = Xi();
  function o(a) {
    return n(a) ? e(r(a)) : t(a);
  }
  return nu = o, nu;
}
var ru, Fg;
function H0() {
  if (Fg) return ru;
  Fg = 1;
  var e = N$(), t = j$(), n = Qi(), r = en(), o = $$();
  function a(i) {
    return typeof i == "function" ? i : i == null ? n : typeof i == "object" ? r(i) ? t(i[0], i[1]) : e(i) : o(i);
  }
  return ru = a, ru;
}
var ou, zg;
function L$() {
  if (zg) return ou;
  zg = 1;
  function e(t, n, r, o) {
    for (var a = t.length, i = r + (o ? 1 : -1); o ? i-- : ++i < a; )
      if (n(t[i], i, t))
        return i;
    return -1;
  }
  return ou = e, ou;
}
var au, Bg;
function F$() {
  if (Bg) return au;
  Bg = 1;
  function e(t) {
    return t !== t;
  }
  return au = e, au;
}
var iu, qg;
function z$() {
  if (qg) return iu;
  qg = 1;
  function e(t, n, r) {
    for (var o = r - 1, a = t.length; ++o < a; )
      if (t[o] === n)
        return o;
    return -1;
  }
  return iu = e, iu;
}
var su, Hg;
function B$() {
  if (Hg) return su;
  Hg = 1;
  var e = L$(), t = F$(), n = z$();
  function r(o, a, i) {
    return a === a ? n(o, a, i) : e(o, t, i);
  }
  return su = r, su;
}
var lu, Wg;
function q$() {
  if (Wg) return lu;
  Wg = 1;
  var e = B$();
  function t(n, r) {
    var o = n == null ? 0 : n.length;
    return !!o && e(n, r, 0) > -1;
  }
  return lu = t, lu;
}
var cu, Vg;
function H$() {
  if (Vg) return cu;
  Vg = 1;
  function e(t, n, r) {
    for (var o = -1, a = t == null ? 0 : t.length; ++o < a; )
      if (r(n, t[o]))
        return !0;
    return !1;
  }
  return cu = e, cu;
}
var uu, Gg;
function W$() {
  if (Gg) return uu;
  Gg = 1;
  function e() {
  }
  return uu = e, uu;
}
var du, Ug;
function V$() {
  if (Ug) return du;
  Ug = 1;
  var e = F0(), t = W$(), n = ip(), r = 1 / 0, o = e && 1 / n(new e([, -0]))[1] == r ? function(a) {
    return new e(a);
  } : t;
  return du = o, du;
}
var fu, Kg;
function G$() {
  if (Kg) return fu;
  Kg = 1;
  var e = A0(), t = q$(), n = H$(), r = D0(), o = V$(), a = ip(), i = 200;
  function s(l, c, f) {
    var u = -1, p = t, v = l.length, h = !0, g = [], b = g;
    if (f)
      h = !1, p = n;
    else if (v >= i) {
      var y = c ? null : o(l);
      if (y)
        return a(y);
      h = !1, p = r, b = new e();
    } else
      b = c ? [] : g;
    e:
      for (; ++u < v; ) {
        var x = l[u], w = c ? c(x) : x;
        if (x = f || x !== 0 ? x : 0, h && w === w) {
          for (var S = b.length; S--; )
            if (b[S] === w)
              continue e;
          c && b.push(w), g.push(x);
        } else p(b, w, f) || (b !== g && b.push(w), g.push(x));
      }
    return g;
  }
  return fu = s, fu;
}
var pu, Yg;
function U$() {
  if (Yg) return pu;
  Yg = 1;
  var e = H0(), t = G$();
  function n(r, o) {
    return r && r.length ? t(r, e(o, 2)) : [];
  }
  return pu = n, pu;
}
var K$ = U$();
const Xg = /* @__PURE__ */ pn(K$);
function W0(e, t, n) {
  return t === !0 ? Xg(e, n) : oi(t) ? Xg(e, t) : e;
}
function Hr(e) {
  "@babel/helpers - typeof";
  return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hr(e);
}
var Y$ = ["ref"];
function Jg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jg(Object(n), !0).forEach(function(r) {
      es(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function X$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, G0(r.key), r);
  }
}
function J$(e, t, n) {
  return t && Zg(e.prototype, t), n && Zg(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Z$(e, t, n) {
  return t = ci(t), Q$(e, V0() ? Reflect.construct(t, n || [], ci(e).constructor) : t.apply(e, n));
}
function Q$(e, t) {
  if (t && (Hr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return e2(e);
}
function e2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function V0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (V0 = function() {
    return !!e;
  })();
}
function ci(e) {
  return ci = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ci(e);
}
function t2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Nd(e, t);
}
function Nd(e, t) {
  return Nd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Nd(e, t);
}
function es(e, t, n) {
  return t = G0(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function G0(e) {
  var t = n2(e, "string");
  return Hr(t) == "symbol" ? t : t + "";
}
function n2(e, t) {
  if (Hr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Hr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function r2(e, t) {
  if (e == null) return {};
  var n = o2(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function o2(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function a2(e) {
  return e.value;
}
function i2(e, t) {
  if (/* @__PURE__ */ E.isValidElement(e))
    return /* @__PURE__ */ E.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ E.createElement(e, t);
  t.ref;
  var n = r2(t, Y$);
  return /* @__PURE__ */ E.createElement(ap, n);
}
var Qg = 1, dp = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    X$(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = Z$(this, t, [].concat(o)), es(n, "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return t2(t, e), J$(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        return r.height = this.wrapperNode.offsetHeight, r.width = this.wrapperNode.offsetWidth, r;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var r = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > Qg || Math.abs(o.height - this.lastBoundingBox.height) > Qg) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, r && r(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Sn({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var o = this.props, a = o.layout, i = o.align, s = o.verticalAlign, l = o.margin, c = o.chartWidth, f = o.chartHeight, u, p;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (i === "center" && a === "vertical") {
          var v = this.getBBoxSnapshot();
          u = {
            left: ((c || 0) - v.width) / 2
          };
        } else
          u = i === "right" ? {
            right: l && l.right || 0
          } : {
            left: l && l.left || 0
          };
      if (!r || (r.top === void 0 || r.top === null) && (r.bottom === void 0 || r.bottom === null))
        if (s === "middle") {
          var h = this.getBBoxSnapshot();
          p = {
            top: ((f || 0) - h.height) / 2
          };
        } else
          p = s === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return Sn(Sn({}, u), p);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.content, i = o.width, s = o.height, l = o.wrapperStyle, c = o.payloadUniqBy, f = o.payload, u = Sn(Sn({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ E.createElement("div", {
        className: "recharts-legend-wrapper",
        style: u,
        ref: function(v) {
          r.wrapperNode = v;
        }
      }, i2(a, Sn(Sn({}, this.props), {}, {
        payload: W0(f, c, a2)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, o) {
      var a = Sn(Sn({}, this.defaultProps), r.props), i = a.layout;
      return i === "vertical" && Vt(r.props.height) ? {
        height: r.props.height
      } : i === "horizontal" ? {
        width: r.props.width || o
      } : null;
    }
  }]);
})(Ci);
es(dp, "displayName", "Legend");
es(dp, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var mu, eb;
function s2() {
  if (eb) return mu;
  eb = 1;
  var e = sa(), t = sp(), n = en(), r = e ? e.isConcatSpreadable : void 0;
  function o(a) {
    return n(a) || t(a) || !!(r && a && a[r]);
  }
  return mu = o, mu;
}
var hu, tb;
function l2() {
  if (tb) return hu;
  tb = 1;
  var e = k0(), t = s2();
  function n(r, o, a, i, s) {
    var l = -1, c = r.length;
    for (a || (a = t), s || (s = []); ++l < c; ) {
      var f = r[l];
      o > 0 && a(f) ? o > 1 ? n(f, o - 1, a, i, s) : e(s, f) : i || (s[s.length] = f);
    }
    return s;
  }
  return hu = n, hu;
}
var vu, nb;
function c2() {
  if (nb) return vu;
  nb = 1;
  function e(t) {
    return function(n, r, o) {
      for (var a = -1, i = Object(n), s = o(n), l = s.length; l--; ) {
        var c = s[t ? l : ++a];
        if (r(i[c], c, i) === !1)
          break;
      }
      return n;
    };
  }
  return vu = e, vu;
}
var gu, rb;
function u2() {
  if (rb) return gu;
  rb = 1;
  var e = c2(), t = e();
  return gu = t, gu;
}
var bu, ob;
function d2() {
  if (ob) return bu;
  ob = 1;
  var e = u2(), t = up();
  function n(r, o) {
    return r && e(r, o, t);
  }
  return bu = n, bu;
}
var yu, ab;
function f2() {
  if (ab) return yu;
  ab = 1;
  var e = Zi();
  function t(n, r) {
    return function(o, a) {
      if (o == null)
        return o;
      if (!e(o))
        return n(o, a);
      for (var i = o.length, s = r ? i : -1, l = Object(o); (r ? s-- : ++s < i) && a(l[s], s, l) !== !1; )
        ;
      return o;
    };
  }
  return yu = t, yu;
}
var xu, ib;
function p2() {
  if (ib) return xu;
  ib = 1;
  var e = d2(), t = f2(), n = t(e);
  return xu = n, xu;
}
var wu, sb;
function m2() {
  if (sb) return wu;
  sb = 1;
  var e = p2(), t = Zi();
  function n(r, o) {
    var a = -1, i = t(r) ? Array(r.length) : [];
    return e(r, function(s, l, c) {
      i[++a] = o(s, l, c);
    }), i;
  }
  return wu = n, wu;
}
var Su, lb;
function h2() {
  if (lb) return Su;
  lb = 1;
  function e(t, n) {
    var r = t.length;
    for (t.sort(n); r--; )
      t[r] = t[r].value;
    return t;
  }
  return Su = e, Su;
}
var _u, cb;
function v2() {
  if (cb) return _u;
  cb = 1;
  var e = la();
  function t(n, r) {
    if (n !== r) {
      var o = n !== void 0, a = n === null, i = n === n, s = e(n), l = r !== void 0, c = r === null, f = r === r, u = e(r);
      if (!c && !u && !s && n > r || s && l && f && !c && !u || a && l && f || !o && f || !i)
        return 1;
      if (!a && !s && !u && n < r || u && o && i && !a && !s || c && o && i || !l && i || !f)
        return -1;
    }
    return 0;
  }
  return _u = t, _u;
}
var Cu, ub;
function g2() {
  if (ub) return Cu;
  ub = 1;
  var e = v2();
  function t(n, r, o) {
    for (var a = -1, i = n.criteria, s = r.criteria, l = i.length, c = o.length; ++a < l; ) {
      var f = e(i[a], s[a]);
      if (f) {
        if (a >= c)
          return f;
        var u = o[a];
        return f * (u == "desc" ? -1 : 1);
      }
    }
    return n.index - r.index;
  }
  return Cu = t, Cu;
}
var Pu, db;
function b2() {
  if (db) return Pu;
  db = 1;
  var e = f0(), t = rp(), n = H0(), r = m2(), o = h2(), a = $0(), i = g2(), s = Qi(), l = en();
  function c(f, u, p) {
    u.length ? u = e(u, function(g) {
      return l(g) ? function(b) {
        return t(b, g.length === 1 ? g[0] : g);
      } : g;
    }) : u = [s];
    var v = -1;
    u = e(u, a(n));
    var h = r(f, function(g, b, y) {
      var x = e(u, function(w) {
        return w(g);
      });
      return { criteria: x, index: ++v, value: g };
    });
    return o(h, function(g, b) {
      return i(g, b, p);
    });
  }
  return Pu = c, Pu;
}
var Eu, fb;
function y2() {
  if (fb) return Eu;
  fb = 1;
  function e(t, n, r) {
    switch (r.length) {
      case 0:
        return t.call(n);
      case 1:
        return t.call(n, r[0]);
      case 2:
        return t.call(n, r[0], r[1]);
      case 3:
        return t.call(n, r[0], r[1], r[2]);
    }
    return t.apply(n, r);
  }
  return Eu = e, Eu;
}
var Ru, pb;
function x2() {
  if (pb) return Ru;
  pb = 1;
  var e = y2(), t = Math.max;
  function n(r, o, a) {
    return o = t(o === void 0 ? r.length - 1 : o, 0), function() {
      for (var i = arguments, s = -1, l = t(i.length - o, 0), c = Array(l); ++s < l; )
        c[s] = i[o + s];
      s = -1;
      for (var f = Array(o + 1); ++s < o; )
        f[s] = i[s];
      return f[o] = a(c), e(r, this, f);
    };
  }
  return Ru = n, Ru;
}
var Tu, mb;
function w2() {
  if (mb) return Tu;
  mb = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Tu = e, Tu;
}
var Mu, hb;
function S2() {
  if (hb) return Mu;
  hb = 1;
  var e = br(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return Mu = t, Mu;
}
var Nu, vb;
function _2() {
  if (vb) return Nu;
  vb = 1;
  var e = w2(), t = S2(), n = Qi(), r = t ? function(o, a) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : n;
  return Nu = r, Nu;
}
var Ou, gb;
function C2() {
  if (gb) return Ou;
  gb = 1;
  var e = 800, t = 16, n = Date.now;
  function r(o) {
    var a = 0, i = 0;
    return function() {
      var s = n(), l = t - (s - i);
      if (i = s, l > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return o.apply(void 0, arguments);
    };
  }
  return Ou = r, Ou;
}
var Au, bb;
function P2() {
  if (bb) return Au;
  bb = 1;
  var e = _2(), t = C2(), n = t(e);
  return Au = n, Au;
}
var Du, yb;
function E2() {
  if (yb) return Du;
  yb = 1;
  var e = Qi(), t = x2(), n = P2();
  function r(o, a) {
    return n(t(o, a, e), o + "");
  }
  return Du = r, Du;
}
var ju, xb;
function R2() {
  if (xb) return ju;
  xb = 1;
  var e = ep(), t = Zi(), n = lp(), r = qn();
  function o(a, i, s) {
    if (!r(s))
      return !1;
    var l = typeof i;
    return (l == "number" ? t(s) && n(i, s.length) : l == "string" && i in s) ? e(s[i], a) : !1;
  }
  return ju = o, ju;
}
var ku, wb;
function T2() {
  if (wb) return ku;
  wb = 1;
  var e = l2(), t = b2(), n = E2(), r = R2(), o = n(function(a, i) {
    if (a == null)
      return [];
    var s = i.length;
    return s > 1 && r(a, i[0], i[1]) ? i = [] : s > 2 && r(i[0], i[1], i[2]) && (i = [i[0]]), t(a, e(i, 1), []);
  });
  return ku = o, ku;
}
var M2 = T2();
const N2 = /* @__PURE__ */ pn(M2);
function $o(e) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $o(e);
}
function Od() {
  return Od = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Od.apply(this, arguments);
}
function O2(e, t) {
  return k2(e) || j2(e, t) || D2(e, t) || A2();
}
function A2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function D2(e, t) {
  if (e) {
    if (typeof e == "string") return Sb(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Sb(e, t);
  }
}
function Sb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function j2(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], l = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (f) {
      c = !0, o = f;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function k2(e) {
  if (Array.isArray(e)) return e;
}
function _b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Iu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _b(Object(n), !0).forEach(function(r) {
      I2(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _b(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function I2(e, t, n) {
  return t = $2(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function $2(e) {
  var t = L2(e, "string");
  return $o(t) == "symbol" ? t : t + "";
}
function L2(e, t) {
  if ($o(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if ($o(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function F2(e) {
  return Array.isArray(e) && ai(e[0]) && ai(e[1]) ? e.join(" ~ ") : e;
}
var z2 = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, l = t.labelStyle, c = l === void 0 ? {} : l, f = t.payload, u = t.formatter, p = t.itemSorter, v = t.wrapperClassName, h = t.labelClassName, g = t.label, b = t.labelFormatter, y = t.accessibilityLayer, x = y === void 0 ? !1 : y, w = function() {
    if (f && f.length) {
      var B = {
        padding: 0,
        margin: 0
      }, A = (p ? N2(f, p) : f).map(function(H, q) {
        if (H.type === "none")
          return null;
        var $ = Iu({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: H.color || "#000"
        }, s), F = H.formatter || u || F2, M = H.value, G = H.name, oe = M, Z = G;
        if (F && oe != null && Z != null) {
          var L = F(M, G, H, q, f);
          if (Array.isArray(L)) {
            var D = O2(L, 2);
            oe = D[0], Z = D[1];
          } else
            oe = L;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ E.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(q),
            style: $
          }, ai(Z) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, Z) : null, ai(Z) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, oe), /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, H.unit || ""))
        );
      });
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: B
      }, A);
    }
    return null;
  }, S = Iu({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), C = Iu({
    margin: 0
  }, c), P = !$k(g), _ = P ? g : "", R = Cn("recharts-default-tooltip", v), T = Cn("recharts-tooltip-label", h);
  P && b && f !== void 0 && f !== null && (_ = b(g, f));
  var z = x ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ E.createElement("div", Od({
    className: R,
    style: S
  }, z), /* @__PURE__ */ E.createElement("p", {
    className: T,
    style: C
  }, /* @__PURE__ */ E.isValidElement(_) ? _ : "".concat(_)), w());
};
function Lo(e) {
  "@babel/helpers - typeof";
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lo(e);
}
function ja(e, t, n) {
  return t = B2(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function B2(e) {
  var t = q2(e, "string");
  return Lo(t) == "symbol" ? t : t + "";
}
function q2(e, t) {
  if (Lo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Lo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ho = "recharts-tooltip-wrapper", H2 = {
  visibility: "hidden"
};
function W2(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return Cn(ho, ja(ja(ja(ja({}, "".concat(ho, "-right"), Vt(n) && t && Vt(t.x) && n >= t.x), "".concat(ho, "-left"), Vt(n) && t && Vt(t.x) && n < t.x), "".concat(ho, "-bottom"), Vt(r) && t && Vt(t.y) && r >= t.y), "".concat(ho, "-top"), Vt(r) && t && Vt(t.y) && r < t.y));
}
function Cb(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, l = e.viewBox, c = e.viewBoxDimension;
  if (a && Vt(a[r]))
    return a[r];
  var f = n[r] - s - o, u = n[r] + o;
  if (t[r])
    return i[r] ? f : u;
  if (i[r]) {
    var p = f, v = l[r];
    return p < v ? Math.max(u, l[r]) : Math.max(f, l[r]);
  }
  var h = u + s, g = l[r] + c;
  return h > g ? Math.max(f, l[r]) : Math.max(u, l[r]);
}
function V2(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function G2(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, c, f, u;
  return i.height > 0 && i.width > 0 && n ? (f = Cb({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), u = Cb({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), c = V2({
    translateX: f,
    translateY: u,
    useTranslate3d: s
  })) : c = H2, {
    cssProperties: c,
    cssClasses: W2({
      translateX: f,
      translateY: u,
      coordinate: n
    })
  };
}
function Wr(e) {
  "@babel/helpers - typeof";
  return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wr(e);
}
function Pb(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Eb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pb(Object(n), !0).forEach(function(r) {
      Dd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pb(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function U2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function K2(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, K0(r.key), r);
  }
}
function Y2(e, t, n) {
  return t && K2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function X2(e, t, n) {
  return t = ui(t), J2(e, U0() ? Reflect.construct(t, n || [], ui(e).constructor) : t.apply(e, n));
}
function J2(e, t) {
  if (t && (Wr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Z2(e);
}
function Z2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function U0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (U0 = function() {
    return !!e;
  })();
}
function ui(e) {
  return ui = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ui(e);
}
function Q2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ad(e, t);
}
function Ad(e, t) {
  return Ad = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ad(e, t);
}
function Dd(e, t, n) {
  return t = K0(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function K0(e) {
  var t = eL(e, "string");
  return Wr(t) == "symbol" ? t : t + "";
}
function eL(e, t) {
  if (Wr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Wr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Rb = 1, tL = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    U2(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = X2(this, t, [].concat(o)), Dd(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Dd(n, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, l, c, f;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (l = n.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && s !== void 0 ? s : 0,
            y: (c = (f = n.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), n;
  }
  return Q2(t, e), Y2(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > Rb || Math.abs(r.height - this.state.lastBoundingBox.height) > Rb) && this.setState({
          lastBoundingBox: {
            width: r.width,
            height: r.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var r, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, l = o.animationEasing, c = o.children, f = o.coordinate, u = o.hasPayload, p = o.isAnimationActive, v = o.offset, h = o.position, g = o.reverseDirection, b = o.useTranslate3d, y = o.viewBox, x = o.wrapperStyle, w = G2({
        allowEscapeViewBox: i,
        coordinate: f,
        offsetTopLeft: v,
        position: h,
        reverseDirection: g,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: b,
        viewBox: y
      }), S = w.cssClasses, C = w.cssProperties, P = Eb(Eb({
        transition: p && a ? "transform ".concat(s, "ms ").concat(l) : void 0
      }, C), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && u ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, x);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ E.createElement("div", {
          tabIndex: -1,
          className: S,
          style: P,
          ref: function(R) {
            r.wrapperNode = R;
          }
        }, c)
      );
    }
  }]);
})(Ci), nL = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, rL = {
  isSsr: nL()
};
function Vr(e) {
  "@babel/helpers - typeof";
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(e);
}
function Tb(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Mb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tb(Object(n), !0).forEach(function(r) {
      fp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tb(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function oL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function aL(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, X0(r.key), r);
  }
}
function iL(e, t, n) {
  return t && aL(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sL(e, t, n) {
  return t = di(t), lL(e, Y0() ? Reflect.construct(t, n || [], di(e).constructor) : t.apply(e, n));
}
function lL(e, t) {
  if (t && (Vr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return cL(e);
}
function cL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Y0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Y0 = function() {
    return !!e;
  })();
}
function di(e) {
  return di = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, di(e);
}
function uL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && jd(e, t);
}
function jd(e, t) {
  return jd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, jd(e, t);
}
function fp(e, t, n) {
  return t = X0(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function X0(e) {
  var t = dL(e, "string");
  return Vr(t) == "symbol" ? t : t + "";
}
function dL(e, t) {
  if (Vr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Vr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function fL(e) {
  return e.dataKey;
}
function pL(e, t) {
  return /* @__PURE__ */ E.isValidElement(e) ? /* @__PURE__ */ E.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ E.createElement(e, t) : /* @__PURE__ */ E.createElement(z2, t);
}
var pp = /* @__PURE__ */ (function(e) {
  function t() {
    return oL(this, t), sL(this, t, arguments);
  }
  return uL(t, e), iL(t, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, l = o.animationEasing, c = o.content, f = o.coordinate, u = o.filterNull, p = o.isAnimationActive, v = o.offset, h = o.payload, g = o.payloadUniqBy, b = o.position, y = o.reverseDirection, x = o.useTranslate3d, w = o.viewBox, S = o.wrapperStyle, C = h ?? [];
      u && C.length && (C = W0(h.filter(function(_) {
        return _.value != null && (_.hide !== !0 || r.props.includeHidden);
      }), g, fL));
      var P = C.length > 0;
      return /* @__PURE__ */ E.createElement(tL, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: l,
        isAnimationActive: p,
        active: a,
        coordinate: f,
        hasPayload: P,
        offset: v,
        position: b,
        reverseDirection: y,
        useTranslate3d: x,
        viewBox: w,
        wrapperStyle: S
      }, pL(c, Mb(Mb({}, this.props), {}, {
        payload: C
      })));
    }
  }]);
})(Ci);
fp(pp, "displayName", "Tooltip");
fp(pp, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !rL.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var $u, Nb;
function mL() {
  if (Nb) return $u;
  Nb = 1;
  var e = vn(), t = function() {
    return e.Date.now();
  };
  return $u = t, $u;
}
var Lu, Ob;
function hL() {
  if (Ob) return Lu;
  Ob = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return Lu = t, Lu;
}
var Fu, Ab;
function vL() {
  if (Ab) return Fu;
  Ab = 1;
  var e = hL(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return Fu = n, Fu;
}
var zu, Db;
function gL() {
  if (Db) return zu;
  Db = 1;
  var e = vL(), t = qn(), n = la(), r = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
  function l(c) {
    if (typeof c == "number")
      return c;
    if (n(c))
      return r;
    if (t(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(f) ? f + "" : f;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var u = a.test(c);
    return u || i.test(c) ? s(c.slice(2), u ? 2 : 8) : o.test(c) ? r : +c;
  }
  return zu = l, zu;
}
var Bu, jb;
function bL() {
  if (jb) return Bu;
  jb = 1;
  var e = qn(), t = mL(), n = gL(), r = "Expected a function", o = Math.max, a = Math.min;
  function i(s, l, c) {
    var f, u, p, v, h, g, b = 0, y = !1, x = !1, w = !0;
    if (typeof s != "function")
      throw new TypeError(r);
    l = n(l) || 0, e(c) && (y = !!c.leading, x = "maxWait" in c, p = x ? o(n(c.maxWait) || 0, l) : p, w = "trailing" in c ? !!c.trailing : w);
    function S(A) {
      var H = f, q = u;
      return f = u = void 0, b = A, v = s.apply(q, H), v;
    }
    function C(A) {
      return b = A, h = setTimeout(R, l), y ? S(A) : v;
    }
    function P(A) {
      var H = A - g, q = A - b, $ = l - H;
      return x ? a($, p - q) : $;
    }
    function _(A) {
      var H = A - g, q = A - b;
      return g === void 0 || H >= l || H < 0 || x && q >= p;
    }
    function R() {
      var A = t();
      if (_(A))
        return T(A);
      h = setTimeout(R, P(A));
    }
    function T(A) {
      return h = void 0, w && f ? S(A) : (f = u = void 0, v);
    }
    function z() {
      h !== void 0 && clearTimeout(h), b = 0, f = g = u = h = void 0;
    }
    function j() {
      return h === void 0 ? v : T(t());
    }
    function B() {
      var A = t(), H = _(A);
      if (f = arguments, u = this, g = A, H) {
        if (h === void 0)
          return C(g);
        if (x)
          return clearTimeout(h), h = setTimeout(R, l), S(g);
      }
      return h === void 0 && (h = setTimeout(R, l)), v;
    }
    return B.cancel = z, B.flush = j, B;
  }
  return Bu = i, Bu;
}
var qu, kb;
function yL() {
  if (kb) return qu;
  kb = 1;
  var e = bL(), t = qn(), n = "Expected a function";
  function r(o, a, i) {
    var s = !0, l = !0;
    if (typeof o != "function")
      throw new TypeError(n);
    return t(i) && (s = "leading" in i ? !!i.leading : s, l = "trailing" in i ? !!i.trailing : l), e(o, a, {
      leading: s,
      maxWait: a,
      trailing: l
    });
  }
  return qu = r, qu;
}
var xL = yL();
const wL = /* @__PURE__ */ pn(xL);
function Fo(e) {
  "@babel/helpers - typeof";
  return Fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fo(e);
}
function Ib(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ka(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ib(Object(n), !0).forEach(function(r) {
      SL(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ib(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function SL(e, t, n) {
  return t = _L(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _L(e) {
  var t = CL(e, "string");
  return Fo(t) == "symbol" ? t : t + "";
}
function CL(e, t) {
  if (Fo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Fo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function PL(e, t) {
  return ML(e) || TL(e, t) || RL(e, t) || EL();
}
function EL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RL(e, t) {
  if (e) {
    if (typeof e == "string") return $b(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $b(e, t);
  }
}
function $b(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function TL(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], l = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (f) {
      c = !0, o = f;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function ML(e) {
  if (Array.isArray(e)) return e;
}
var NL = /* @__PURE__ */ Ft(function(e, t) {
  var n = e.aspect, r = e.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, l = s === void 0 ? "100%" : s, c = e.minWidth, f = c === void 0 ? 0 : c, u = e.minHeight, p = e.maxHeight, v = e.children, h = e.debounce, g = h === void 0 ? 0 : h, b = e.id, y = e.className, x = e.onResize, w = e.style, S = w === void 0 ? {} : w, C = Lr(null), P = Lr();
  P.current = x, BP(t, function() {
    return Object.defineProperty(C.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), C.current;
      },
      configurable: !0
    });
  });
  var _ = cn({
    containerWidth: o.width,
    containerHeight: o.height
  }), R = PL(_, 2), T = R[0], z = R[1], j = hy(function(A, H) {
    z(function(q) {
      var $ = Math.round(A), F = Math.round(H);
      return q.containerWidth === $ && q.containerHeight === F ? q : {
        containerWidth: $,
        containerHeight: F
      };
    });
  }, []);
  $t(function() {
    var A = function(G) {
      var oe, Z = G[0].contentRect, L = Z.width, D = Z.height;
      j(L, D), (oe = P.current) === null || oe === void 0 || oe.call(P, L, D);
    };
    g > 0 && (A = wL(A, g, {
      trailing: !0,
      leading: !1
    }));
    var H = new ResizeObserver(A), q = C.current.getBoundingClientRect(), $ = q.width, F = q.height;
    return j($, F), H.observe(C.current), function() {
      H.disconnect();
    };
  }, [j, g]);
  var B = vy(function() {
    var A = T.containerWidth, H = T.containerHeight;
    if (A < 0 || H < 0)
      return null;
    Va(Aa(i) || Aa(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, l), Va(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var q = Aa(i) ? A : i, $ = Aa(l) ? H : l;
    n && n > 0 && (q ? $ = q / n : $ && (q = $ * n), p && $ > p && ($ = p)), Va(q > 0 || $ > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, q, $, i, l, f, u, n);
    var F = !Array.isArray(v) && eI(v.type).endsWith("Chart");
    return E.Children.map(v, function(M) {
      return /* @__PURE__ */ E.isValidElement(M) ? /* @__PURE__ */ qP(M, ka({
        width: q,
        height: $
      }, F ? {
        style: ka({
          height: "100%",
          width: "100%",
          maxHeight: $,
          maxWidth: q
        }, M.props.style)
      } : {})) : M;
    });
  }, [n, v, l, p, u, f, T, i]);
  return /* @__PURE__ */ E.createElement("div", {
    id: b ? "".concat(b) : void 0,
    className: Cn("recharts-responsive-container", y),
    style: ka(ka({}, S), {}, {
      width: i,
      height: l,
      minWidth: f,
      minHeight: u,
      maxHeight: p
    }),
    ref: C
  }, B);
});
const OL = { light: "", dark: ".dark" }, J0 = m.createContext(null);
function Z0() {
  const e = m.useContext(J0);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function nV({
  id: e,
  className: t,
  children: n,
  config: r,
  ...o
}) {
  const a = m.useId(), i = `chart-${e || a.replace(/:/g, "")}`;
  return /* @__PURE__ */ d.jsx(J0.Provider, { value: { config: r }, children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-slot": "chart",
      "data-chart": i,
      className: O(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ d.jsx(AL, { id: i, config: r }),
        /* @__PURE__ */ d.jsx(NL, { children: n })
      ]
    }
  ) });
}
const AL = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([, r]) => r.theme || r.color
  );
  return n.length ? /* @__PURE__ */ d.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(OL).map(
          ([r, o]) => `
${o} [data-chart=${e}] {
${n.map(([a, i]) => {
            var l;
            const s = ((l = i.theme) == null ? void 0 : l[r]) || i.color;
            return s ? `  --color-${a}: ${s};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, rV = pp;
function oV({
  active: e,
  payload: t,
  className: n,
  indicator: r = "dot",
  hideLabel: o = !1,
  hideIndicator: a = !1,
  label: i,
  labelFormatter: s,
  labelClassName: l,
  formatter: c,
  color: f,
  nameKey: u,
  labelKey: p
}) {
  const { config: v } = Z0(), h = m.useMemo(() => {
    var S;
    if (o || !(t != null && t.length))
      return null;
    const [b] = t, y = `${p || (b == null ? void 0 : b.dataKey) || (b == null ? void 0 : b.name) || "value"}`, x = kd(v, b, y), w = !p && typeof i == "string" ? ((S = v[i]) == null ? void 0 : S.label) || i : x == null ? void 0 : x.label;
    return s ? /* @__PURE__ */ d.jsx("div", { className: O("font-medium", l), children: s(w, t) }) : w ? /* @__PURE__ */ d.jsx("div", { className: O("font-medium", l), children: w }) : null;
  }, [
    i,
    s,
    t,
    o,
    l,
    v,
    p
  ]);
  if (!e || !(t != null && t.length))
    return null;
  const g = t.length === 1 && r !== "dot";
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: O(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        n
      ),
      children: [
        g ? null : h,
        /* @__PURE__ */ d.jsx("div", { className: "grid gap-1.5", children: t.map((b, y) => {
          const x = `${u || b.name || b.dataKey || "value"}`, w = kd(v, b, x), S = f || b.payload.fill || b.color;
          return /* @__PURE__ */ d.jsx(
            "div",
            {
              className: O(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                r === "dot" && "items-center"
              ),
              children: c && (b == null ? void 0 : b.value) !== void 0 && b.name ? c(b.value, b.name, b, y, b.payload) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                w != null && w.icon ? /* @__PURE__ */ d.jsx(w.icon, {}) : !a && /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    className: O(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": r === "dot",
                        "w-1": r === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                        "my-0.5": g && r === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": S,
                      "--color-border": S
                    }
                  }
                ),
                /* @__PURE__ */ d.jsxs(
                  "div",
                  {
                    className: O(
                      "flex flex-1 justify-between leading-none",
                      g ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ d.jsxs("div", { className: "grid gap-1.5", children: [
                        g ? h : null,
                        /* @__PURE__ */ d.jsx("span", { className: "text-muted-foreground", children: (w == null ? void 0 : w.label) || b.name })
                      ] }),
                      b.value && /* @__PURE__ */ d.jsx("span", { className: "text-foreground font-mono font-medium tabular-nums", children: b.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            b.dataKey
          );
        }) })
      ]
    }
  );
}
const aV = dp;
function iV({
  className: e,
  hideIcon: t = !1,
  payload: n,
  verticalAlign: r = "bottom",
  nameKey: o
}) {
  const { config: a } = Z0();
  return n != null && n.length ? /* @__PURE__ */ d.jsx(
    "div",
    {
      className: O(
        "flex items-center justify-center gap-4",
        r === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: n.map((i) => {
        const s = `${o || i.dataKey || "value"}`, l = kd(a, i, s);
        return /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: O(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              l != null && l.icon && !t ? /* @__PURE__ */ d.jsx(l.icon, {}) : /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: i.color
                  }
                }
              ),
              l == null ? void 0 : l.label
            ]
          },
          i.value
        );
      })
    }
  ) : null;
}
function kd(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
var mp = "Checkbox", [DL] = Be(mp), [jL, kL] = DL(mp), Q0 = m.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l = "on",
      onCheckedChange: c,
      form: f,
      ...u
    } = e, [p, v] = m.useState(null), h = fe(t, (S) => v(S)), g = m.useRef(!1), b = p ? f || !!p.closest("form") : !0, [y = !1, x] = Ve({
      prop: o,
      defaultProp: a,
      onChange: c
    }), w = m.useRef(y);
    return m.useEffect(() => {
      const S = p == null ? void 0 : p.form;
      if (S) {
        const C = () => x(w.current);
        return S.addEventListener("reset", C), () => S.removeEventListener("reset", C);
      }
    }, [p, x]), /* @__PURE__ */ d.jsxs(jL, { scope: n, state: y, disabled: s, children: [
      /* @__PURE__ */ d.jsx(
        ee.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": jn(y) ? "mixed" : y,
          "aria-required": i,
          "data-state": nS(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...u,
          ref: h,
          onKeyDown: U(e.onKeyDown, (S) => {
            S.key === "Enter" && S.preventDefault();
          }),
          onClick: U(e.onClick, (S) => {
            x((C) => jn(C) ? !0 : !C), b && (g.current = S.isPropagationStopped(), g.current || S.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ d.jsx(
        IL,
        {
          control: p,
          bubbles: !g.current,
          name: r,
          value: l,
          checked: y,
          required: i,
          disabled: s,
          form: f,
          style: { transform: "translateX(-100%)" },
          defaultChecked: jn(a) ? !1 : a
        }
      )
    ] });
  }
);
Q0.displayName = mp;
var eS = "CheckboxIndicator", tS = m.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = kL(eS, n);
    return /* @__PURE__ */ d.jsx(qe, { present: r || jn(a.state) || a.state === !0, children: /* @__PURE__ */ d.jsx(
      ee.span,
      {
        "data-state": nS(a.state),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
tS.displayName = eS;
var IL = (e) => {
  const { control: t, checked: n, bubbles: r = !0, defaultChecked: o, ...a } = e, i = m.useRef(null), s = oo(n), l = Uo(t);
  m.useEffect(() => {
    const f = i.current, u = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (s !== n && v) {
      const h = new Event("click", { bubbles: r });
      f.indeterminate = jn(n), v.call(f, jn(n) ? !1 : n), f.dispatchEvent(h);
    }
  }, [s, n, r]);
  const c = m.useRef(jn(n) ? !1 : n);
  return /* @__PURE__ */ d.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: o ?? c.current,
      ...a,
      tabIndex: -1,
      ref: i,
      style: {
        ...e.style,
        ...l,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function jn(e) {
  return e === "indeterminate";
}
function nS(e) {
  return jn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var $L = Q0, LL = tS;
function sV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    $L,
    {
      "data-slot": "checkbox",
      className: O(
        "peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(
        LL,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ d.jsx(dr, { className: "size-3.5" })
        }
      )
    }
  );
}
function lV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Gx, { "data-slot": "collapsible", ...e });
}
function cV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(
    _f,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function uV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(
    Pf,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
var Lb = 1, FL = 0.9, zL = 0.8, BL = 0.17, Hu = 0.1, Wu = 0.999, qL = 0.9999, HL = 0.99, WL = /[\\\/_+.#"@\[\(\{&]/, VL = /[\\\/_+.#"@\[\(\{&]/g, GL = /[\s-]/, rS = /[\s-]/g;
function Id(e, t, n, r, o, a, i) {
  if (a === t.length) return o === e.length ? Lb : HL;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var l = r.charAt(a), c = n.indexOf(l, o), f = 0, u, p, v, h; c >= 0; ) u = Id(e, t, n, r, c + 1, a + 1, i), u > f && (c === o ? u *= Lb : WL.test(e.charAt(c - 1)) ? (u *= zL, v = e.slice(o, c - 1).match(VL), v && o > 0 && (u *= Math.pow(Wu, v.length))) : GL.test(e.charAt(c - 1)) ? (u *= FL, h = e.slice(o, c - 1).match(rS), h && o > 0 && (u *= Math.pow(Wu, h.length))) : (u *= BL, o > 0 && (u *= Math.pow(Wu, c - o))), e.charAt(c) !== t.charAt(a) && (u *= qL)), (u < Hu && n.charAt(c - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(c - 1) !== r.charAt(a)) && (p = Id(e, t, n, r, c + 1, a + 2, i), p * Hu > u && (u = p * Hu)), u > f && (f = u), c = n.indexOf(l, c + 1);
  return i[s] = f, f;
}
function Fb(e) {
  return e.toLowerCase().replace(rS, " ");
}
function UL(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Id(e, t, Fb(e), Fb(t), 0, 0, {});
}
var vo = '[cmdk-group=""]', Vu = '[cmdk-group-items=""]', KL = '[cmdk-group-heading=""]', oS = '[cmdk-item=""]', zb = `${oS}:not([aria-disabled="true"])`, $d = "cmdk-item-select", Mr = "data-value", YL = (e, t, n) => UL(e, t, n), aS = m.createContext(void 0), ca = () => m.useContext(aS), iS = m.createContext(void 0), hp = () => m.useContext(iS), sS = m.createContext(void 0), lS = m.forwardRef((e, t) => {
  let n = Nr(() => {
    var L, D;
    return { search: "", value: (D = (L = e.value) != null ? L : e.defaultValue) != null ? D : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = Nr(() => /* @__PURE__ */ new Set()), o = Nr(() => /* @__PURE__ */ new Map()), a = Nr(() => /* @__PURE__ */ new Map()), i = Nr(() => /* @__PURE__ */ new Set()), s = cS(e), { label: l, children: c, value: f, onValueChange: u, filter: p, shouldFilter: v, loop: h, disablePointerSelection: g = !1, vimBindings: b = !0, ...y } = e, x = ze(), w = ze(), S = ze(), C = m.useRef(null), P = iF();
  sr(() => {
    if (f !== void 0) {
      let L = f.trim();
      n.current.value = L, _.emit();
    }
  }, [f]), sr(() => {
    P(6, A);
  }, []);
  let _ = m.useMemo(() => ({ subscribe: (L) => (i.current.add(L), () => i.current.delete(L)), snapshot: () => n.current, setState: (L, D, W) => {
    var V, K, I, Y;
    if (!Object.is(n.current[L], D)) {
      if (n.current[L] = D, L === "search") B(), z(), P(1, j);
      else if (L === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let J = document.getElementById(S);
          J ? J.focus() : (V = document.getElementById(x)) == null || V.focus();
        }
        if (P(7, () => {
          var J;
          n.current.selectedItemId = (J = H()) == null ? void 0 : J.id, _.emit();
        }), W || P(5, A), ((K = s.current) == null ? void 0 : K.value) !== void 0) {
          let J = D ?? "";
          (Y = (I = s.current).onValueChange) == null || Y.call(I, J);
          return;
        }
      }
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((L) => L());
  } }), []), R = m.useMemo(() => ({ value: (L, D, W) => {
    var V;
    D !== ((V = a.current.get(L)) == null ? void 0 : V.value) && (a.current.set(L, { value: D, keywords: W }), n.current.filtered.items.set(L, T(D, W)), P(2, () => {
      z(), _.emit();
    }));
  }, item: (L, D) => (r.current.add(L), D && (o.current.has(D) ? o.current.get(D).add(L) : o.current.set(D, /* @__PURE__ */ new Set([L]))), P(3, () => {
    B(), z(), n.current.value || j(), _.emit();
  }), () => {
    a.current.delete(L), r.current.delete(L), n.current.filtered.items.delete(L);
    let W = H();
    P(4, () => {
      B(), (W == null ? void 0 : W.getAttribute("id")) === L && j(), _.emit();
    });
  }), group: (L) => (o.current.has(L) || o.current.set(L, /* @__PURE__ */ new Set()), () => {
    a.current.delete(L), o.current.delete(L);
  }), filter: () => s.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: x, inputId: S, labelId: w, listInnerRef: C }), []);
  function T(L, D) {
    var W, V;
    let K = (V = (W = s.current) == null ? void 0 : W.filter) != null ? V : YL;
    return L ? K(L, n.current.search, D) : 0;
  }
  function z() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let L = n.current.filtered.items, D = [];
    n.current.filtered.groups.forEach((V) => {
      let K = o.current.get(V), I = 0;
      K.forEach((Y) => {
        let J = L.get(Y);
        I = Math.max(J, I);
      }), D.push([V, I]);
    });
    let W = C.current;
    q().sort((V, K) => {
      var I, Y;
      let J = V.getAttribute("id"), te = K.getAttribute("id");
      return ((I = L.get(te)) != null ? I : 0) - ((Y = L.get(J)) != null ? Y : 0);
    }).forEach((V) => {
      let K = V.closest(Vu);
      K ? K.appendChild(V.parentElement === K ? V : V.closest(`${Vu} > *`)) : W.appendChild(V.parentElement === W ? V : V.closest(`${Vu} > *`));
    }), D.sort((V, K) => K[1] - V[1]).forEach((V) => {
      var K;
      let I = (K = C.current) == null ? void 0 : K.querySelector(`${vo}[${Mr}="${encodeURIComponent(V[0])}"]`);
      I == null || I.parentElement.appendChild(I);
    });
  }
  function j() {
    let L = q().find((W) => W.getAttribute("aria-disabled") !== "true"), D = L == null ? void 0 : L.getAttribute(Mr);
    _.setState("value", D || void 0);
  }
  function B() {
    var L, D, W, V;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let K = 0;
    for (let I of r.current) {
      let Y = (D = (L = a.current.get(I)) == null ? void 0 : L.value) != null ? D : "", J = (V = (W = a.current.get(I)) == null ? void 0 : W.keywords) != null ? V : [], te = T(Y, J);
      n.current.filtered.items.set(I, te), te > 0 && K++;
    }
    for (let [I, Y] of o.current) for (let J of Y) if (n.current.filtered.items.get(J) > 0) {
      n.current.filtered.groups.add(I);
      break;
    }
    n.current.filtered.count = K;
  }
  function A() {
    var L, D, W;
    let V = H();
    V && (((L = V.parentElement) == null ? void 0 : L.firstChild) === V && ((W = (D = V.closest(vo)) == null ? void 0 : D.querySelector(KL)) == null || W.scrollIntoView({ block: "nearest" })), V.scrollIntoView({ block: "nearest" }));
  }
  function H() {
    var L;
    return (L = C.current) == null ? void 0 : L.querySelector(`${oS}[aria-selected="true"]`);
  }
  function q() {
    var L;
    return Array.from(((L = C.current) == null ? void 0 : L.querySelectorAll(zb)) || []);
  }
  function $(L) {
    let D = q()[L];
    D && _.setState("value", D.getAttribute(Mr));
  }
  function F(L) {
    var D;
    let W = H(), V = q(), K = V.findIndex((Y) => Y === W), I = V[K + L];
    (D = s.current) != null && D.loop && (I = K + L < 0 ? V[V.length - 1] : K + L === V.length ? V[0] : V[K + L]), I && _.setState("value", I.getAttribute(Mr));
  }
  function M(L) {
    let D = H(), W = D == null ? void 0 : D.closest(vo), V;
    for (; W && !V; ) W = L > 0 ? oF(W, vo) : aF(W, vo), V = W == null ? void 0 : W.querySelector(zb);
    V ? _.setState("value", V.getAttribute(Mr)) : F(L);
  }
  let G = () => $(q().length - 1), oe = (L) => {
    L.preventDefault(), L.metaKey ? G() : L.altKey ? M(1) : F(1);
  }, Z = (L) => {
    L.preventDefault(), L.metaKey ? $(0) : L.altKey ? M(-1) : F(-1);
  };
  return m.createElement(ee.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (L) => {
    var D;
    (D = y.onKeyDown) == null || D.call(y, L);
    let W = L.nativeEvent.isComposing || L.keyCode === 229;
    if (!(L.defaultPrevented || W)) switch (L.key) {
      case "n":
      case "j": {
        b && L.ctrlKey && oe(L);
        break;
      }
      case "ArrowDown": {
        oe(L);
        break;
      }
      case "p":
      case "k": {
        b && L.ctrlKey && Z(L);
        break;
      }
      case "ArrowUp": {
        Z(L);
        break;
      }
      case "Home": {
        L.preventDefault(), $(0);
        break;
      }
      case "End": {
        L.preventDefault(), G();
        break;
      }
      case "Enter": {
        L.preventDefault();
        let V = H();
        if (V) {
          let K = new Event($d);
          V.dispatchEvent(K);
        }
      }
    }
  } }, m.createElement("label", { "cmdk-label": "", htmlFor: R.inputId, id: R.labelId, style: lF }, l), ts(e, (L) => m.createElement(iS.Provider, { value: _ }, m.createElement(aS.Provider, { value: R }, L))));
}), XL = m.forwardRef((e, t) => {
  var n, r;
  let o = ze(), a = m.useRef(null), i = m.useContext(sS), s = ca(), l = cS(e), c = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i == null ? void 0 : i.forceMount;
  sr(() => {
    if (!c) return s.item(o, i == null ? void 0 : i.id);
  }, [c]);
  let f = uS(o, a, [e.value, e.children, a], e.keywords), u = hp(), p = $n((P) => P.value && P.value === f.current), v = $n((P) => c || s.filter() === !1 ? !0 : P.search ? P.filtered.items.get(o) > 0 : !0);
  m.useEffect(() => {
    let P = a.current;
    if (!(!P || e.disabled)) return P.addEventListener($d, h), () => P.removeEventListener($d, h);
  }, [v, e.onSelect, e.disabled]);
  function h() {
    var P, _;
    g(), (_ = (P = l.current).onSelect) == null || _.call(P, f.current);
  }
  function g() {
    u.setState("value", f.current, !0);
  }
  if (!v) return null;
  let { disabled: b, value: y, onSelect: x, forceMount: w, keywords: S, ...C } = e;
  return m.createElement(ee.div, { ref: un(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!b, "aria-selected": !!p, "data-disabled": !!b, "data-selected": !!p, onPointerMove: b || s.getDisablePointerSelection() ? void 0 : g, onClick: b ? void 0 : h }, e.children);
}), JL = m.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, i = ze(), s = m.useRef(null), l = m.useRef(null), c = ze(), f = ca(), u = $n((v) => o || f.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(i) : !0);
  sr(() => f.group(i), []), uS(i, s, [e.value, e.heading, l]);
  let p = m.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return m.createElement(ee.div, { ref: un(s, t), ...a, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && m.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), ts(e, (v) => m.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, m.createElement(sS.Provider, { value: p }, v))));
}), ZL = m.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.useRef(null), a = $n((i) => !i.search);
  return !n && !a ? null : m.createElement(ee.div, { ref: un(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), QL = m.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = hp(), i = $n((c) => c.search), s = $n((c) => c.selectedItemId), l = ca();
  return m.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), m.createElement(ee.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": s, id: l.inputId, type: "text", value: o ? e.value : i, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), eF = m.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = m.useRef(null), i = m.useRef(null), s = $n((c) => c.selectedItemId), l = ca();
  return m.useEffect(() => {
    if (i.current && a.current) {
      let c = i.current, f = a.current, u, p = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let v = c.offsetHeight;
          f.style.setProperty("--cmdk-list-height", v.toFixed(1) + "px");
        });
      });
      return p.observe(c), () => {
        cancelAnimationFrame(u), p.unobserve(c);
      };
    }
  }, []), m.createElement(ee.div, { ref: un(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: l.listId }, ts(e, (c) => m.createElement("div", { ref: un(i, l.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), tF = m.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return m.createElement(Zo, { open: n, onOpenChange: r }, m.createElement(Qo, { container: i }, m.createElement(ea, { "cmdk-overlay": "", className: o }), m.createElement(ta, { "aria-label": e.label, "cmdk-dialog": "", className: a }, m.createElement(lS, { ref: t, ...s }))));
}), nF = m.forwardRef((e, t) => $n((n) => n.filtered.count === 0) ? m.createElement(ee.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), rF = m.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return m.createElement(ee.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, ts(e, (i) => m.createElement("div", { "aria-hidden": !0 }, i)));
}), yr = Object.assign(lS, { List: eF, Item: XL, Input: QL, Group: JL, Separator: ZL, Dialog: tF, Empty: nF, Loading: rF });
function oF(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function aF(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function cS(e) {
  let t = m.useRef(e);
  return sr(() => {
    t.current = e;
  }), t;
}
var sr = typeof window > "u" ? m.useEffect : m.useLayoutEffect;
function Nr(e) {
  let t = m.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function $n(e) {
  let t = hp(), n = () => e(t.snapshot());
  return m.useSyncExternalStore(t.subscribe, n, n);
}
function uS(e, t, n, r = []) {
  let o = m.useRef(), a = ca();
  return sr(() => {
    var i;
    let s = (() => {
      var c;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (c = f.current.textContent) == null ? void 0 : c.trim() : o.current;
      }
    })(), l = r.map((c) => c.trim());
    a.value(e, s, l), (i = t.current) == null || i.setAttribute(Mr, s), o.current = s;
  }), o;
}
var iF = () => {
  let [e, t] = m.useState(), n = Nr(() => /* @__PURE__ */ new Map());
  return sr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function sF(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function ts({ asChild: e, children: t }, n) {
  return e && m.isValidElement(t) ? m.cloneElement(sF(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var lF = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function cF({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Zo, { "data-slot": "dialog", ...e });
}
function dV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(zi, { "data-slot": "dialog-trigger", ...e });
}
function uF({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Qo, { "data-slot": "dialog-portal", ...e });
}
function fV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(mr, { "data-slot": "dialog-close", ...e });
}
function dF({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    ea,
    {
      "data-slot": "dialog-overlay",
      className: O(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function fF({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(uF, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ d.jsx(dF, {}),
    /* @__PURE__ */ d.jsxs(
      ta,
      {
        "data-slot": "dialog-content",
        className: O(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...n,
        children: [
          t,
          /* @__PURE__ */ d.jsxs(mr, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ d.jsx(af, {}),
            /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function pF({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: O("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function pV({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: O(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function mF({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Bi,
    {
      "data-slot": "dialog-title",
      className: O("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function hF({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    qi,
    {
      "data-slot": "dialog-description",
      className: O("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function vF({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    yr,
    {
      "data-slot": "command",
      className: O(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...t
    }
  );
}
function mV({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(cF, { ...r, children: [
    /* @__PURE__ */ d.jsxs(pF, { className: "sr-only", children: [
      /* @__PURE__ */ d.jsx(mF, { children: e }),
      /* @__PURE__ */ d.jsx(hF, { children: t })
    ] }),
    /* @__PURE__ */ d.jsx(fF, { className: "overflow-hidden p-0", children: /* @__PURE__ */ d.jsx(vF, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n }) })
  ] });
}
function hV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ d.jsx(_E, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ d.jsx(
          yr.Input,
          {
            "data-slot": "command-input",
            className: O(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              e
            ),
            ...t
          }
        )
      ]
    }
  );
}
function vV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    yr.List,
    {
      "data-slot": "command-list",
      className: O(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        e
      ),
      ...t
    }
  );
}
function gV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(
    yr.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function bV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    yr.Group,
    {
      "data-slot": "command-group",
      className: O(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...t
    }
  );
}
function yV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    yr.Separator,
    {
      "data-slot": "command-separator",
      className: O("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function xV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    yr.Item,
    {
      "data-slot": "command-item",
      className: O(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function wV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      "data-slot": "command-shortcut",
      className: O(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
var Gu = "rovingFocusGroup.onEntryFocus", gF = { bubbles: !1, cancelable: !0 }, ns = "RovingFocusGroup", [Ld, dS, bF] = Ln(ns), [yF, gn] = Be(
  ns,
  [bF]
), [xF, wF] = yF(ns), fS = m.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(Ld.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(Ld.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(SF, { ...e, ref: t }) }) })
);
fS.displayName = ns;
var SF = m.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: f = !1,
    ...u
  } = e, p = m.useRef(null), v = fe(t, p), h = Zt(a), [g = null, b] = Ve({
    prop: i,
    defaultProp: s,
    onChange: l
  }), [y, x] = m.useState(!1), w = Ie(c), S = dS(n), C = m.useRef(!1), [P, _] = m.useState(0);
  return m.useEffect(() => {
    const R = p.current;
    if (R)
      return R.addEventListener(Gu, w), () => R.removeEventListener(Gu, w);
  }, [w]), /* @__PURE__ */ d.jsx(
    xF,
    {
      scope: n,
      orientation: r,
      dir: h,
      loop: o,
      currentTabStopId: g,
      onItemFocus: m.useCallback(
        (R) => b(R),
        [b]
      ),
      onItemShiftTab: m.useCallback(() => x(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => _((R) => R + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => _((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        ee.div,
        {
          tabIndex: y || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: U(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: U(e.onFocus, (R) => {
            const T = !C.current;
            if (R.target === R.currentTarget && T && !y) {
              const z = new CustomEvent(Gu, gF);
              if (R.currentTarget.dispatchEvent(z), !z.defaultPrevented) {
                const j = S().filter(($) => $.focusable), B = j.find(($) => $.active), A = j.find(($) => $.id === g), q = [B, A, ...j].filter(
                  Boolean
                ).map(($) => $.ref.current);
                hS(q, f);
              }
            }
            C.current = !1;
          }),
          onBlur: U(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), pS = "RovingFocusGroupItem", mS = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      ...i
    } = e, s = ze(), l = a || s, c = wF(pS, n), f = c.currentTabStopId === l, u = dS(n), { onFocusableItemAdd: p, onFocusableItemRemove: v } = c;
    return m.useEffect(() => {
      if (r)
        return p(), () => v();
    }, [r, p, v]), /* @__PURE__ */ d.jsx(
      Ld.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ d.jsx(
          ee.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": c.orientation,
            ...i,
            ref: t,
            onMouseDown: U(e.onMouseDown, (h) => {
              r ? c.onItemFocus(l) : h.preventDefault();
            }),
            onFocus: U(e.onFocus, () => c.onItemFocus(l)),
            onKeyDown: U(e.onKeyDown, (h) => {
              if (h.key === "Tab" && h.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (h.target !== h.currentTarget) return;
              const g = PF(h, c.orientation, c.dir);
              if (g !== void 0) {
                if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey) return;
                h.preventDefault();
                let y = u().filter((x) => x.focusable).map((x) => x.ref.current);
                if (g === "last") y.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && y.reverse();
                  const x = y.indexOf(h.currentTarget);
                  y = c.loop ? EF(y, x + 1) : y.slice(x + 1);
                }
                setTimeout(() => hS(y));
              }
            })
          }
        )
      }
    );
  }
);
mS.displayName = pS;
var _F = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function CF(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function PF(e, t, n) {
  const r = CF(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return _F[r];
}
function hS(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function EF(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var ua = fS, da = mS, Fd = ["Enter", " "], RF = ["ArrowDown", "PageUp", "Home"], vS = ["ArrowUp", "PageDown", "End"], TF = [...RF, ...vS], MF = {
  ltr: [...Fd, "ArrowRight"],
  rtl: [...Fd, "ArrowLeft"]
}, NF = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, fa = "Menu", [zo, OF, AF] = Ln(fa), [xr, pa] = Be(fa, [
  AF,
  hn,
  gn
]), ma = hn(), gS = gn(), [bS, Hn] = xr(fa), [DF, ha] = xr(fa), yS = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = ma(t), [l, c] = m.useState(null), f = m.useRef(!1), u = Ie(a), p = Zt(o);
  return m.useEffect(() => {
    const v = () => {
      f.current = !0, document.addEventListener("pointerdown", h, { capture: !0, once: !0 }), document.addEventListener("pointermove", h, { capture: !0, once: !0 });
    }, h = () => f.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", h, { capture: !0 }), document.removeEventListener("pointermove", h, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d.jsx(no, { ...s, children: /* @__PURE__ */ d.jsx(
    bS,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ d.jsx(
        DF,
        {
          scope: t,
          onClose: m.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: f,
          dir: p,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
yS.displayName = fa;
var jF = "MenuAnchor", vp = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = ma(n);
    return /* @__PURE__ */ d.jsx(ro, { ...o, ...r, ref: t });
  }
);
vp.displayName = jF;
var gp = "MenuPortal", [kF, xS] = xr(gp, {
  forceMount: void 0
}), wS = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Hn(gp, t);
  return /* @__PURE__ */ d.jsx(kF, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(qe, { present: n || a.open, children: /* @__PURE__ */ d.jsx(pr, { asChild: !0, container: o, children: r }) }) });
};
wS.displayName = gp;
var Lt = "MenuContent", [IF, bp] = xr(Lt), SS = m.forwardRef(
  (e, t) => {
    const n = xS(Lt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Hn(Lt, e.__scopeMenu), i = ha(Lt, e.__scopeMenu);
    return /* @__PURE__ */ d.jsx(zo.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(qe, { present: r || a.open, children: /* @__PURE__ */ d.jsx(zo.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ d.jsx($F, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(LF, { ...o, ref: t }) }) }) });
  }
), $F = m.forwardRef(
  (e, t) => {
    const n = Hn(Lt, e.__scopeMenu), r = m.useRef(null), o = fe(t, r);
    return m.useEffect(() => {
      const a = r.current;
      if (a) return Ai(a);
    }, []), /* @__PURE__ */ d.jsx(
      yp,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: U(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), LF = m.forwardRef((e, t) => {
  const n = Hn(Lt, e.__scopeMenu);
  return /* @__PURE__ */ d.jsx(
    yp,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), yp = m.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: f,
      onFocusOutside: u,
      onInteractOutside: p,
      onDismiss: v,
      disableOutsideScroll: h,
      ...g
    } = e, b = Hn(Lt, n), y = ha(Lt, n), x = ma(n), w = gS(n), S = OF(n), [C, P] = m.useState(null), _ = m.useRef(null), R = fe(t, _, b.onContentChange), T = m.useRef(0), z = m.useRef(""), j = m.useRef(0), B = m.useRef(null), A = m.useRef("right"), H = m.useRef(0), q = h ? Xo : m.Fragment, $ = h ? { as: ut, allowPinchZoom: !0 } : void 0, F = (G) => {
      var I, Y;
      const oe = z.current + G, Z = S().filter((J) => !J.disabled), L = document.activeElement, D = (I = Z.find((J) => J.ref.current === L)) == null ? void 0 : I.textValue, W = Z.map((J) => J.textValue), V = XF(W, oe, D), K = (Y = Z.find((J) => J.textValue === V)) == null ? void 0 : Y.ref.current;
      (function J(te) {
        z.current = te, window.clearTimeout(T.current), te !== "" && (T.current = window.setTimeout(() => J(""), 1e3));
      })(oe), K && setTimeout(() => K.focus());
    };
    m.useEffect(() => () => window.clearTimeout(T.current), []), Ri();
    const M = m.useCallback((G) => {
      var Z, L;
      return A.current === ((Z = B.current) == null ? void 0 : Z.side) && ZF(G, (L = B.current) == null ? void 0 : L.area);
    }, []);
    return /* @__PURE__ */ d.jsx(
      IF,
      {
        scope: n,
        searchRef: z,
        onItemEnter: m.useCallback(
          (G) => {
            M(G) && G.preventDefault();
          },
          [M]
        ),
        onItemLeave: m.useCallback(
          (G) => {
            var oe;
            M(G) || ((oe = _.current) == null || oe.focus(), P(null));
          },
          [M]
        ),
        onTriggerLeave: m.useCallback(
          (G) => {
            M(G) && G.preventDefault();
          },
          [M]
        ),
        pointerGraceTimerRef: j,
        onPointerGraceIntentChange: m.useCallback((G) => {
          B.current = G;
        }, []),
        children: /* @__PURE__ */ d.jsx(q, { ...$, children: /* @__PURE__ */ d.jsx(
          Vo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: U(a, (G) => {
              var oe;
              G.preventDefault(), (oe = _.current) == null || oe.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ d.jsx(
              Fn,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: c,
                onPointerDownOutside: f,
                onFocusOutside: u,
                onInteractOutside: p,
                onDismiss: v,
                children: /* @__PURE__ */ d.jsx(
                  ua,
                  {
                    asChild: !0,
                    ...w,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: U(l, (G) => {
                      y.isUsingKeyboardRef.current || G.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d.jsx(
                      Ko,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": FS(b.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...x,
                        ...g,
                        ref: R,
                        style: { outline: "none", ...g.style },
                        onKeyDown: U(g.onKeyDown, (G) => {
                          const Z = G.target.closest("[data-radix-menu-content]") === G.currentTarget, L = G.ctrlKey || G.altKey || G.metaKey, D = G.key.length === 1;
                          Z && (G.key === "Tab" && G.preventDefault(), !L && D && F(G.key));
                          const W = _.current;
                          if (G.target !== W || !TF.includes(G.key)) return;
                          G.preventDefault();
                          const K = S().filter((I) => !I.disabled).map((I) => I.ref.current);
                          vS.includes(G.key) && K.reverse(), KF(K);
                        }),
                        onBlur: U(e.onBlur, (G) => {
                          G.currentTarget.contains(G.target) || (window.clearTimeout(T.current), z.current = "");
                        }),
                        onPointerMove: U(
                          e.onPointerMove,
                          Bo((G) => {
                            const oe = G.target, Z = H.current !== G.clientX;
                            if (G.currentTarget.contains(oe) && Z) {
                              const L = G.clientX > H.current ? "right" : "left";
                              A.current = L, H.current = G.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
SS.displayName = Lt;
var FF = "MenuGroup", xp = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(ee.div, { role: "group", ...r, ref: t });
  }
);
xp.displayName = FF;
var zF = "MenuLabel", _S = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(ee.div, { ...r, ref: t });
  }
);
_S.displayName = zF;
var fi = "MenuItem", Bb = "menu.itemSelect", rs = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = m.useRef(null), i = ha(fi, e.__scopeMenu), s = bp(fi, e.__scopeMenu), l = fe(t, a), c = m.useRef(!1), f = () => {
      const u = a.current;
      if (!n && u) {
        const p = new CustomEvent(Bb, { bubbles: !0, cancelable: !0 });
        u.addEventListener(Bb, (v) => r == null ? void 0 : r(v), { once: !0 }), Ua(u, p), p.defaultPrevented ? c.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ d.jsx(
      CS,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: U(e.onClick, f),
        onPointerDown: (u) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, u), c.current = !0;
        },
        onPointerUp: U(e.onPointerUp, (u) => {
          var p;
          c.current || (p = u.currentTarget) == null || p.click();
        }),
        onKeyDown: U(e.onKeyDown, (u) => {
          const p = s.searchRef.current !== "";
          n || p && u.key === " " || Fd.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
rs.displayName = fi;
var CS = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, i = bp(fi, n), s = gS(n), l = m.useRef(null), c = fe(t, l), [f, u] = m.useState(!1), [p, v] = m.useState("");
    return m.useEffect(() => {
      const h = l.current;
      h && v((h.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ d.jsx(
      zo.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ d.jsx(da, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ d.jsx(
          ee.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: c,
            onPointerMove: U(
              e.onPointerMove,
              Bo((h) => {
                r ? i.onItemLeave(h) : (i.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: U(
              e.onPointerLeave,
              Bo((h) => i.onItemLeave(h))
            ),
            onFocus: U(e.onFocus, () => u(!0)),
            onBlur: U(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), BF = "MenuCheckboxItem", PS = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(NS, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ d.jsx(
      rs,
      {
        role: "menuitemcheckbox",
        "aria-checked": pi(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": _p(n),
        onSelect: U(
          o.onSelect,
          () => r == null ? void 0 : r(pi(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
PS.displayName = BF;
var ES = "MenuRadioGroup", [qF, HF] = xr(
  ES,
  { value: void 0, onValueChange: () => {
  } }
), RS = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = Ie(r);
    return /* @__PURE__ */ d.jsx(qF, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ d.jsx(xp, { ...o, ref: t }) });
  }
);
RS.displayName = ES;
var TS = "MenuRadioItem", MS = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = HF(TS, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ d.jsx(NS, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ d.jsx(
      rs,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": _p(a),
        onSelect: U(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
MS.displayName = TS;
var wp = "MenuItemIndicator", [NS, WF] = xr(
  wp,
  { checked: !1 }
), OS = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = WF(wp, n);
    return /* @__PURE__ */ d.jsx(
      qe,
      {
        present: r || pi(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          ee.span,
          {
            ...o,
            ref: t,
            "data-state": _p(a.checked)
          }
        )
      }
    );
  }
);
OS.displayName = wp;
var VF = "MenuSeparator", AS = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(
      ee.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
AS.displayName = VF;
var GF = "MenuArrow", DS = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = ma(n);
    return /* @__PURE__ */ d.jsx(Yo, { ...o, ...r, ref: t });
  }
);
DS.displayName = GF;
var Sp = "MenuSub", [UF, jS] = xr(Sp), kS = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Hn(Sp, t), i = ma(t), [s, l] = m.useState(null), [c, f] = m.useState(null), u = Ie(o);
  return m.useEffect(() => (a.open === !1 && u(!1), () => u(!1)), [a.open, u]), /* @__PURE__ */ d.jsx(no, { ...i, children: /* @__PURE__ */ d.jsx(
    bS,
    {
      scope: t,
      open: r,
      onOpenChange: u,
      content: c,
      onContentChange: f,
      children: /* @__PURE__ */ d.jsx(
        UF,
        {
          scope: t,
          contentId: ze(),
          triggerId: ze(),
          trigger: s,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
kS.displayName = Sp;
var Po = "MenuSubTrigger", IS = m.forwardRef(
  (e, t) => {
    const n = Hn(Po, e.__scopeMenu), r = ha(Po, e.__scopeMenu), o = jS(Po, e.__scopeMenu), a = bp(Po, e.__scopeMenu), i = m.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = a, c = { __scopeMenu: e.__scopeMenu }, f = m.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return m.useEffect(() => f, [f]), m.useEffect(() => {
      const u = s.current;
      return () => {
        window.clearTimeout(u), l(null);
      };
    }, [s, l]), /* @__PURE__ */ d.jsx(vp, { asChild: !0, ...c, children: /* @__PURE__ */ d.jsx(
      CS,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": FS(n.open),
        ...e,
        ref: un(t, o.onTriggerChange),
        onClick: (u) => {
          var p;
          (p = e.onClick) == null || p.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: U(
          e.onPointerMove,
          Bo((u) => {
            a.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: U(
          e.onPointerLeave,
          Bo((u) => {
            var v, h;
            f();
            const p = (v = n.content) == null ? void 0 : v.getBoundingClientRect();
            if (p) {
              const g = (h = n.content) == null ? void 0 : h.dataset.side, b = g === "right", y = b ? -5 : 5, x = p[b ? "left" : "right"], w = p[b ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + y, y: u.clientY },
                  { x, y: p.top },
                  { x: w, y: p.top },
                  { x: w, y: p.bottom },
                  { x, y: p.bottom }
                ],
                side: g
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(u), u.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: U(e.onKeyDown, (u) => {
          var v;
          const p = a.searchRef.current !== "";
          e.disabled || p && u.key === " " || MF[r.dir].includes(u.key) && (n.onOpenChange(!0), (v = n.content) == null || v.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
IS.displayName = Po;
var $S = "MenuSubContent", LS = m.forwardRef(
  (e, t) => {
    const n = xS(Lt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Hn(Lt, e.__scopeMenu), i = ha(Lt, e.__scopeMenu), s = jS($S, e.__scopeMenu), l = m.useRef(null), c = fe(t, l);
    return /* @__PURE__ */ d.jsx(zo.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(qe, { present: r || a.open, children: /* @__PURE__ */ d.jsx(zo.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(
      yp,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: c,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var u;
          i.isUsingKeyboardRef.current && ((u = l.current) == null || u.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: U(e.onFocusOutside, (f) => {
          f.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: U(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: U(e.onKeyDown, (f) => {
          var v;
          const u = f.currentTarget.contains(f.target), p = NF[i.dir].includes(f.key);
          u && p && (a.onOpenChange(!1), (v = s.trigger) == null || v.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
LS.displayName = $S;
function FS(e) {
  return e ? "open" : "closed";
}
function pi(e) {
  return e === "indeterminate";
}
function _p(e) {
  return pi(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function KF(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function YF(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function XF(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = YF(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function JF(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, l = t[a].y, c = t[i].x, f = t[i].y;
    l > r != f > r && n < (c - s) * (r - l) / (f - l) + s && (o = !o);
  }
  return o;
}
function ZF(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return JF(n, t);
}
function Bo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Cp = yS, Pp = vp, Ep = wS, Rp = SS, Tp = xp, Mp = _S, Np = rs, Op = PS, Ap = RS, Dp = MS, jp = OS, kp = AS, Ip = DS, $p = kS, Lp = IS, Fp = LS, zp = "ContextMenu", [QF] = Be(zp, [
  pa
]), dt = pa(), [ez, zS] = QF(zp), BS = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [i, s] = m.useState(!1), l = dt(t), c = Ie(r), f = m.useCallback(
    (u) => {
      s(u), c(u);
    },
    [c]
  );
  return /* @__PURE__ */ d.jsx(
    ez,
    {
      scope: t,
      open: i,
      onOpenChange: f,
      modal: a,
      children: /* @__PURE__ */ d.jsx(
        Cp,
        {
          ...l,
          dir: o,
          open: i,
          onOpenChange: f,
          modal: a,
          children: n
        }
      )
    }
  );
};
BS.displayName = zp;
var qS = "ContextMenuTrigger", HS = m.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = zS(qS, n), i = dt(n), s = m.useRef({ x: 0, y: 0 }), l = m.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...s.current })
    }), c = m.useRef(0), f = m.useCallback(
      () => window.clearTimeout(c.current),
      []
    ), u = (p) => {
      s.current = { x: p.clientX, y: p.clientY }, a.onOpenChange(!0);
    };
    return m.useEffect(() => f, [f]), m.useEffect(() => void (r && f()), [r, f]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(Pp, { ...i, virtualRef: l }),
      /* @__PURE__ */ d.jsx(
        ee.span,
        {
          "data-state": a.open ? "open" : "closed",
          "data-disabled": r ? "" : void 0,
          ...o,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: r ? e.onContextMenu : U(e.onContextMenu, (p) => {
            f(), u(p), p.preventDefault();
          }),
          onPointerDown: r ? e.onPointerDown : U(
            e.onPointerDown,
            Ia((p) => {
              f(), c.current = window.setTimeout(() => u(p), 700);
            })
          ),
          onPointerMove: r ? e.onPointerMove : U(e.onPointerMove, Ia(f)),
          onPointerCancel: r ? e.onPointerCancel : U(e.onPointerCancel, Ia(f)),
          onPointerUp: r ? e.onPointerUp : U(e.onPointerUp, Ia(f))
        }
      )
    ] });
  }
);
HS.displayName = qS;
var tz = "ContextMenuPortal", WS = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = dt(t);
  return /* @__PURE__ */ d.jsx(Ep, { ...r, ...n });
};
WS.displayName = tz;
var VS = "ContextMenuContent", GS = m.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = zS(VS, n), a = dt(n), i = m.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Rp,
      {
        ...a,
        ...r,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (s) => {
          var l;
          (l = e.onCloseAutoFocus) == null || l.call(e, s), !s.defaultPrevented && i.current && s.preventDefault(), i.current = !1;
        },
        onInteractOutside: (s) => {
          var l;
          (l = e.onInteractOutside) == null || l.call(e, s), !s.defaultPrevented && !o.modal && (i.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
GS.displayName = VS;
var nz = "ContextMenuGroup", US = m.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = dt(n);
    return /* @__PURE__ */ d.jsx(Tp, { ...o, ...r, ref: t });
  }
);
US.displayName = nz;
var rz = "ContextMenuLabel", KS = m.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = dt(n);
    return /* @__PURE__ */ d.jsx(Mp, { ...o, ...r, ref: t });
  }
);
KS.displayName = rz;
var oz = "ContextMenuItem", YS = m.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = dt(n);
    return /* @__PURE__ */ d.jsx(Np, { ...o, ...r, ref: t });
  }
);
YS.displayName = oz;
var az = "ContextMenuCheckboxItem", XS = m.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = dt(n);
  return /* @__PURE__ */ d.jsx(Op, { ...o, ...r, ref: t });
});
XS.displayName = az;
var iz = "ContextMenuRadioGroup", JS = m.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = dt(n);
  return /* @__PURE__ */ d.jsx(Ap, { ...o, ...r, ref: t });
});
JS.displayName = iz;
var sz = "ContextMenuRadioItem", ZS = m.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = dt(n);
  return /* @__PURE__ */ d.jsx(Dp, { ...o, ...r, ref: t });
});
ZS.displayName = sz;
var lz = "ContextMenuItemIndicator", QS = m.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = dt(n);
  return /* @__PURE__ */ d.jsx(jp, { ...o, ...r, ref: t });
});
QS.displayName = lz;
var cz = "ContextMenuSeparator", e_ = m.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = dt(n);
  return /* @__PURE__ */ d.jsx(kp, { ...o, ...r, ref: t });
});
e_.displayName = cz;
var uz = "ContextMenuArrow", dz = m.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = dt(n);
    return /* @__PURE__ */ d.jsx(Ip, { ...o, ...r, ref: t });
  }
);
dz.displayName = uz;
var fz = "ContextMenuSub", t_ = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, i = dt(t), [s, l] = Ve({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ d.jsx($p, { ...i, open: s, onOpenChange: l, children: n });
};
t_.displayName = fz;
var pz = "ContextMenuSubTrigger", n_ = m.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = dt(n);
  return /* @__PURE__ */ d.jsx(Lp, { ...o, ...r, ref: t });
});
n_.displayName = pz;
var mz = "ContextMenuSubContent", r_ = m.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = dt(n);
  return /* @__PURE__ */ d.jsx(
    Fp,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
r_.displayName = mz;
function Ia(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var hz = BS, vz = HS, o_ = WS, gz = GS, bz = US, yz = KS, xz = YS, wz = XS, Sz = JS, _z = ZS, a_ = QS, Cz = e_, Pz = t_, Ez = n_, Rz = r_;
function SV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(hz, { "data-slot": "context-menu", ...e });
}
function _V({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(vz, { "data-slot": "context-menu-trigger", ...e });
}
function CV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(bz, { "data-slot": "context-menu-group", ...e });
}
function PV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(o_, { "data-slot": "context-menu-portal", ...e });
}
function EV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Pz, { "data-slot": "context-menu-sub", ...e });
}
function RV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(
    Sz,
    {
      "data-slot": "context-menu-radio-group",
      ...e
    }
  );
}
function TV({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    Ez,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: O(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ d.jsx(Jr, { className: "ml-auto" })
      ]
    }
  );
}
function MV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Rz,
    {
      "data-slot": "context-menu-sub-content",
      className: O(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function NV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(o_, { children: /* @__PURE__ */ d.jsx(
    gz,
    {
      "data-slot": "context-menu-content",
      className: O(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...t
    }
  ) });
}
function OV({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    xz,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: O(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function AV({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    wz,
    {
      "data-slot": "context-menu-checkbox-item",
      className: O(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(a_, { children: /* @__PURE__ */ d.jsx(dr, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function DV({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(
    _z,
    {
      "data-slot": "context-menu-radio-item",
      className: O(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(a_, { children: /* @__PURE__ */ d.jsx(Ei, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function jV({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    yz,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: O(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function kV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Cz,
    {
      "data-slot": "context-menu-separator",
      className: O("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function IV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: O(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function Tz(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const i_ = E.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: !1,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldAnimate: {
    current: !0
  },
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1,
  container: null,
  autoFocus: !1
}), va = () => {
  const e = E.useContext(i_);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
Tz(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function Mz() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function Nz() {
  return Bp(/^Mac/);
}
function Oz() {
  return Bp(/^iPhone/);
}
function qb() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Az() {
  return Bp(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Nz() && navigator.maxTouchPoints > 1;
}
function s_() {
  return Oz() || Az();
}
function Bp(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const Dz = 24, jz = typeof window < "u" ? rf : $t;
function Hb(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const Uu = typeof document < "u" && window.visualViewport;
function Wb(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function l_(e) {
  for (Wb(e) && (e = e.parentElement); e && !Wb(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const kz = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let $a = 0, Ku;
function Iz(e = {}) {
  let { isDisabled: t } = e;
  jz(() => {
    if (!t)
      return $a++, $a === 1 && s_() && (Ku = $z()), () => {
        $a--, $a === 0 && (Ku == null || Ku());
      };
  }, [
    t
  ]);
}
function $z() {
  let e, t = 0, n = (u) => {
    e = l_(u.target), !(e === document.documentElement && e === document.body) && (t = u.changedTouches[0].pageY);
  }, r = (u) => {
    if (!e || e === document.documentElement || e === document.body) {
      u.preventDefault();
      return;
    }
    let p = u.changedTouches[0].pageY, v = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((v <= 0 && p > t || v >= h && p < t) && u.preventDefault(), t = p);
  }, o = (u) => {
    let p = u.target;
    zd(p) && p !== document.activeElement && (u.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (u) => {
    let p = u.target;
    zd(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", Uu && (Uu.height < window.innerHeight ? requestAnimationFrame(() => {
        Vb(p);
      }) : Uu.addEventListener("resize", () => Vb(p), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, l = window.pageYOffset, c = Hb(Lz(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let f = Hb(go(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), go(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), go(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), go(document, "focus", a, !0), go(window, "scroll", i));
  return () => {
    c(), f(), window.scrollTo(s, l);
  };
}
function Lz(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function go(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Vb(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = l_(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom + Dz;
      a > i && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function zd(e) {
  return e instanceof HTMLInputElement && !kz.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Fz(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function zz(...e) {
  return (t) => e.forEach((n) => Fz(n, t));
}
function c_(...e) {
  return m.useCallback(zz(...e), e);
}
const u_ = /* @__PURE__ */ new WeakMap();
function at(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && u_.set(e, r);
}
function Bz(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = u_.get(e);
  n && (e.style[t] = n[t]);
}
const tt = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function La(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[tt(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[tt(t) ? 5 : 4]) : null);
}
function qz(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Yu(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function Hz(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Ue = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, d_ = 0.4, Wz = 0.25, Vz = 100, f_ = 8, Yn = 16, Bd = 26, Xu = "vaul-dragging";
function p_(e) {
  const t = E.useRef(e);
  return E.useEffect(() => {
    t.current = e;
  }), E.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function Gz({ defaultProp: e, onChange: t }) {
  const n = E.useState(e), [r] = n, o = E.useRef(r), a = p_(t);
  return E.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function m_({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Gz({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = p_(n), l = E.useCallback((c) => {
    if (a) {
      const u = typeof c == "function" ? c(e) : c;
      u !== e && s(u);
    } else
      o(c);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    l
  ];
}
function Uz({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: i, direction: s = "bottom", container: l, snapToSequentialPoint: c }) {
  const [f, u] = m_({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [p, v] = E.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  E.useEffect(() => {
    function _() {
      v({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, []);
  const h = E.useMemo(() => f === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    f
  ]), g = E.useMemo(() => {
    var _;
    return (_ = n == null ? void 0 : n.findIndex((R) => R === f)) != null ? _ : null;
  }, [
    n,
    f
  ]), b = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === f || !n, y = E.useMemo(() => {
    const _ = l ? {
      width: l.getBoundingClientRect().width,
      height: l.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var R;
    return (R = n == null ? void 0 : n.map((T) => {
      const z = typeof T == "string";
      let j = 0;
      if (z && (j = parseInt(T, 10)), tt(s)) {
        const A = z ? j : p ? T * _.height : 0;
        return p ? s === "bottom" ? _.height - A : -_.height + A : A;
      }
      const B = z ? j : p ? T * _.width : 0;
      return p ? s === "right" ? _.width - B : -_.width + B : B;
    })) != null ? R : [];
  }, [
    n,
    p,
    l
  ]), x = E.useMemo(() => g !== null ? y == null ? void 0 : y[g] : null, [
    y,
    g
  ]), w = E.useCallback((_) => {
    var R;
    const T = (R = y == null ? void 0 : y.findIndex((z) => z === _)) != null ? R : null;
    i(T), at(r.current, {
      transition: `transform ${Ue.DURATION}s cubic-bezier(${Ue.EASE.join(",")})`,
      transform: tt(s) ? `translate3d(0, ${_}px, 0)` : `translate3d(${_}px, 0, 0)`
    }), y && T !== y.length - 1 && a !== void 0 && T !== a && T < a ? at(o.current, {
      transition: `opacity ${Ue.DURATION}s cubic-bezier(${Ue.EASE.join(",")})`,
      opacity: "0"
    }) : at(o.current, {
      transition: `opacity ${Ue.DURATION}s cubic-bezier(${Ue.EASE.join(",")})`,
      opacity: "1"
    }), u(n == null ? void 0 : n[Math.max(T, 0)]);
  }, [
    r.current,
    n,
    y,
    a,
    o,
    u
  ]);
  E.useEffect(() => {
    if (f || e) {
      var _;
      const R = (_ = n == null ? void 0 : n.findIndex((T) => T === e || T === f)) != null ? _ : -1;
      y && R !== -1 && typeof y[R] == "number" && w(y[R]);
    }
  }, [
    f,
    e,
    n,
    y,
    w
  ]);
  function S({ draggedDistance: _, closeDrawer: R, velocity: T, dismissible: z }) {
    if (a === void 0) return;
    const j = s === "bottom" || s === "right" ? (x ?? 0) - _ : (x ?? 0) + _, B = g === a - 1, A = g === 0, H = _ > 0;
    if (B && at(o.current, {
      transition: `opacity ${Ue.DURATION}s cubic-bezier(${Ue.EASE.join(",")})`
    }), !c && T > 2 && !H) {
      z ? R() : w(y[0]);
      return;
    }
    if (!c && T > 2 && H && y && n) {
      w(y[n.length - 1]);
      return;
    }
    const q = y == null ? void 0 : y.reduce((F, M) => typeof F != "number" || typeof M != "number" ? F : Math.abs(M - j) < Math.abs(F - j) ? M : F), $ = tt(s) ? window.innerHeight : window.innerWidth;
    if (T > d_ && Math.abs(_) < $ * 0.4) {
      const F = H ? 1 : -1;
      if (F > 0 && h && n) {
        w(y[n.length - 1]);
        return;
      }
      if (A && F < 0 && z && R(), g === null) return;
      w(y[g + F]);
      return;
    }
    w(q);
  }
  function C({ draggedDistance: _ }) {
    if (x === null) return;
    const R = s === "bottom" || s === "right" ? x - _ : x + _;
    (s === "bottom" || s === "right") && R < y[y.length - 1] || (s === "top" || s === "left") && R > y[y.length - 1] || at(r.current, {
      transform: tt(s) ? `translate3d(0, ${R}px, 0)` : `translate3d(${R}px, 0, 0)`
    });
  }
  function P(_, R) {
    if (!n || typeof g != "number" || !y || a === void 0) return null;
    const T = g === a - 1;
    if (g >= a && R)
      return 0;
    if (T && !R) return 1;
    if (!b && !T) return null;
    const j = T ? g + 1 : g - 1, B = T ? y[j] - y[j - 1] : y[j + 1] - y[j], A = _ / Math.abs(B);
    return T ? 1 - A : A;
  }
  return {
    isLastSnapPoint: h,
    activeSnapPoint: f,
    shouldFade: b,
    getPercentageDragged: P,
    setActiveSnapPoint: u,
    activeSnapPointIndex: g,
    onRelease: S,
    onDrag: C,
    snapPointsOffset: y
  };
}
const Kz = () => () => {
};
function Yz() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = va(), a = E.useRef(null), i = vy(() => document.body.style.backgroundColor, []);
  function s() {
    return (window.innerWidth - Bd) / window.innerWidth;
  }
  E.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      const l = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!l) return;
      Hz(r && !o ? Yu(document.body, {
        background: "black"
      }) : Kz, Yu(l, {
        transformOrigin: tt(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Ue.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Ue.EASE.join(",")})`
      }));
      const c = Yu(l, {
        borderRadius: `${f_}px`,
        overflow: "hidden",
        ...tt(e) ? {
          transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        c(), a.current = window.setTimeout(() => {
          i ? document.body.style.background = i : document.body.style.removeProperty("background");
        }, Ue.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    i
  ]);
}
let bo = null;
function Xz({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [i, s] = E.useState(() => typeof window < "u" ? window.location.href : ""), l = E.useRef(0), c = E.useCallback(() => {
    if (qb() && bo === null && e && !a) {
      bo = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: u, innerHeight: p } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-l.current}px`,
        left: `${-u}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const v = p - window.innerHeight;
        v && l.current >= p && (document.body.style.top = `${-(l.current + v)}px`);
      }), 300);
    }
  }, [
    e
  ]), f = E.useCallback(() => {
    if (qb() && bo !== null && !a) {
      const u = -parseInt(document.body.style.top, 10), p = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, bo), window.requestAnimationFrame(() => {
        if (o && i !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(p, u);
      }), bo = null;
    }
  }, [
    i
  ]);
  return E.useEffect(() => {
    function u() {
      l.current = window.scrollY;
    }
    return u(), window.addEventListener("scroll", u), () => {
      window.removeEventListener("scroll", u);
    };
  }, []), E.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || f();
      };
  }, [
    t,
    f
  ]), E.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && c(), t || window.setTimeout(() => {
      f();
    }, 500)) : f());
  }, [
    e,
    r,
    i,
    t,
    n,
    c,
    f
  ]), {
    restorePositionSetting: f
  };
}
function Jz({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: a, shouldScaleBackground: i = !1, setBackgroundColorOnScale: s = !0, closeThreshold: l = Wz, scrollLockTimeout: c = Vz, dismissible: f = !0, handleOnly: u = !1, fadeFromIndex: p = a && a.length - 1, activeSnapPoint: v, setActiveSnapPoint: h, fixed: g, modal: b = !0, onClose: y, nested: x, noBodyStyles: w = !1, direction: S = "bottom", defaultOpen: C = !1, disablePreventScroll: P = !0, snapToSequentialPoint: _ = !1, preventScrollRestoration: R = !1, repositionInputs: T = !0, onAnimationEnd: z, container: j, autoFocus: B = !1 }) {
  var A, H;
  const [q = !1, $] = m_({
    defaultProp: C,
    prop: e,
    onChange: (ce) => {
      t == null || t(ce), !ce && !x && lt(), setTimeout(() => {
        z == null || z(ce);
      }, Ue.DURATION * 1e3), ce && !b && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), ce || (document.body.style.pointerEvents = "auto");
    }
  }), [F, M] = E.useState(!1), [G, oe] = E.useState(!1), [Z, L] = E.useState(!1), D = E.useRef(null), W = E.useRef(null), V = E.useRef(null), K = E.useRef(null), I = E.useRef(null), Y = E.useRef(!1), J = E.useRef(null), te = E.useRef(0), ne = E.useRef(!1), X = E.useRef(!C), ae = E.useRef(0), k = E.useRef(null), re = E.useRef(((A = k.current) == null ? void 0 : A.getBoundingClientRect().height) || 0), pe = E.useRef(((H = k.current) == null ? void 0 : H.getBoundingClientRect().width) || 0), me = E.useRef(0), ge = E.useCallback((ce) => {
    a && ce === $e.length - 1 && (W.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: de, activeSnapPointIndex: Ee, setActiveSnapPoint: Ge, onRelease: _e, snapPointsOffset: $e, onDrag: it, shouldFade: nt, getPercentageDragged: Ze } = Uz({
    snapPoints: a,
    activeSnapPointProp: v,
    setActiveSnapPointProp: h,
    drawerRef: k,
    fadeFromIndex: p,
    overlayRef: D,
    onSnapPointChange: ge,
    direction: S,
    container: j,
    snapToSequentialPoint: _
  });
  Iz({
    isDisabled: !q || G || !b || Z || !F || !T || !P
  });
  const { restorePositionSetting: lt } = Xz({
    isOpen: q,
    modal: b,
    nested: x ?? !1,
    hasBeenOpened: F,
    preventScrollRestoration: R,
    noBodyStyles: w
  });
  function bt() {
    return (window.innerWidth - Bd) / window.innerWidth;
  }
  function mt(ce) {
    var ye, Pe;
    !f && !a || k.current && !k.current.contains(ce.target) || (re.current = ((ye = k.current) == null ? void 0 : ye.getBoundingClientRect().height) || 0, pe.current = ((Pe = k.current) == null ? void 0 : Pe.getBoundingClientRect().width) || 0, oe(!0), V.current = /* @__PURE__ */ new Date(), s_() && window.addEventListener("touchend", () => Y.current = !1, {
      once: !0
    }), ce.target.setPointerCapture(ce.pointerId), te.current = tt(S) ? ce.pageY : ce.pageX);
  }
  function Xe(ce, ye) {
    var Pe;
    let be = ce;
    const Me = (Pe = window.getSelection()) == null ? void 0 : Pe.toString(), ue = k.current ? La(k.current, S) : null, xe = /* @__PURE__ */ new Date();
    if (be.tagName === "SELECT" || be.hasAttribute("data-vaul-no-drag") || be.closest("[data-vaul-no-drag]"))
      return !1;
    if (S === "right" || S === "left")
      return !0;
    if (W.current && xe.getTime() - W.current.getTime() < 500)
      return !1;
    if (ue !== null && (S === "bottom" ? ue > 0 : ue < 0))
      return !0;
    if (Me && Me.length > 0)
      return !1;
    if (I.current && xe.getTime() - I.current.getTime() < c && ue === 0 || ye)
      return I.current = xe, !1;
    for (; be; ) {
      if (be.scrollHeight > be.clientHeight) {
        if (be.scrollTop !== 0)
          return I.current = /* @__PURE__ */ new Date(), !1;
        if (be.getAttribute("role") === "dialog")
          return !0;
      }
      be = be.parentNode;
    }
    return !0;
  }
  function Ot(ce) {
    if (k.current && G) {
      const ye = S === "bottom" || S === "right" ? 1 : -1, Pe = (te.current - (tt(S) ? ce.pageY : ce.pageX)) * ye, be = Pe > 0, Me = a && !f && !be;
      if (Me && Ee === 0) return;
      const ue = Math.abs(Pe), xe = document.querySelector("[data-vaul-drawer-wrapper]"), Ne = S === "bottom" || S === "top" ? re.current : pe.current;
      let Oe = ue / Ne;
      const ht = Ze(ue, be);
      if (ht !== null && (Oe = ht), Me && Oe >= 1 || !Y.current && !Xe(ce.target, be)) return;
      if (k.current.classList.add(Xu), Y.current = !0, at(k.current, {
        transition: "none"
      }), at(D.current, {
        transition: "none"
      }), a && it({
        draggedDistance: Pe
      }), be && !a) {
        const We = qz(Pe), At = Math.min(We * -1, 0) * ye;
        at(k.current, {
          transform: tt(S) ? `translate3d(0, ${At}px, 0)` : `translate3d(${At}px, 0, 0)`
        });
        return;
      }
      const Le = 1 - Oe;
      if ((nt || p && Ee === p - 1) && (r == null || r(ce, Oe), at(D.current, {
        opacity: `${Le}`,
        transition: "none"
      }, !0)), xe && D.current && i) {
        const We = Math.min(bt() + Oe * (1 - bt()), 1), At = 8 - Oe * 8, ct = Math.max(0, 14 - Oe * 14);
        at(xe, {
          borderRadius: `${At}px`,
          transform: tt(S) ? `scale(${We}) translate3d(0, ${ct}px, 0)` : `scale(${We}) translate3d(${ct}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const We = ue * ye;
        at(k.current, {
          transform: tt(S) ? `translate3d(0, ${We}px, 0)` : `translate3d(${We}px, 0, 0)`
        });
      }
    }
  }
  E.useEffect(() => {
    window.requestAnimationFrame(() => {
      X.current = !0;
    });
  }, []), E.useEffect(() => {
    var ce;
    function ye() {
      if (!k.current || !T) return;
      const Pe = document.activeElement;
      if (zd(Pe) || ne.current) {
        var be;
        const Me = ((be = window.visualViewport) == null ? void 0 : be.height) || 0, ue = window.innerHeight;
        let xe = ue - Me;
        const Ne = k.current.getBoundingClientRect().height || 0, Oe = Ne > ue * 0.8;
        me.current || (me.current = Ne);
        const ht = k.current.getBoundingClientRect().top;
        if (Math.abs(ae.current - xe) > 60 && (ne.current = !ne.current), a && a.length > 0 && $e && Ee) {
          const Le = $e[Ee] || 0;
          xe += Le;
        }
        if (ae.current = xe, Ne > Me || ne.current) {
          const Le = k.current.getBoundingClientRect().height;
          let We = Le;
          Le > Me && (We = Me - (Oe ? ht : Bd)), g ? k.current.style.height = `${Le - Math.max(xe, 0)}px` : k.current.style.height = `${Math.max(We, Me - ht)}px`;
        } else Mz() || (k.current.style.height = `${me.current}px`);
        a && a.length > 0 && !ne.current ? k.current.style.bottom = "0px" : k.current.style.bottom = `${Math.max(xe, 0)}px`;
      }
    }
    return (ce = window.visualViewport) == null || ce.addEventListener("resize", ye), () => {
      var Pe;
      return (Pe = window.visualViewport) == null ? void 0 : Pe.removeEventListener("resize", ye);
    };
  }, [
    Ee,
    a,
    $e
  ]);
  function Qe(ce) {
    qt(), y == null || y(), ce || $(!1), setTimeout(() => {
      a && Ge(a[0]);
    }, Ue.DURATION * 1e3);
  }
  function rt() {
    if (!k.current) return;
    const ce = document.querySelector("[data-vaul-drawer-wrapper]"), ye = La(k.current, S);
    at(k.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Ue.DURATION}s cubic-bezier(${Ue.EASE.join(",")})`
    }), at(D.current, {
      transition: `opacity ${Ue.DURATION}s cubic-bezier(${Ue.EASE.join(",")})`,
      opacity: "1"
    }), i && ye && ye > 0 && q && at(ce, {
      borderRadius: `${f_}px`,
      overflow: "hidden",
      ...tt(S) ? {
        transform: `scale(${bt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${bt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${Ue.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${Ue.EASE.join(",")})`
    }, !0);
  }
  function qt() {
    !G || !k.current || (k.current.classList.remove(Xu), Y.current = !1, oe(!1), K.current = /* @__PURE__ */ new Date());
  }
  function nn(ce) {
    if (!G || !k.current) return;
    k.current.classList.remove(Xu), Y.current = !1, oe(!1), K.current = /* @__PURE__ */ new Date();
    const ye = La(k.current, S);
    if (!ce || !Xe(ce.target, !1) || !ye || Number.isNaN(ye) || V.current === null) return;
    const Pe = K.current.getTime() - V.current.getTime(), be = te.current - (tt(S) ? ce.pageY : ce.pageX), Me = Math.abs(be) / Pe;
    if (Me > 0.05 && (L(!0), setTimeout(() => {
      L(!1);
    }, 200)), a) {
      _e({
        draggedDistance: be * (S === "bottom" || S === "right" ? 1 : -1),
        closeDrawer: Qe,
        velocity: Me,
        dismissible: f
      }), o == null || o(ce, !0);
      return;
    }
    if (S === "bottom" || S === "right" ? be > 0 : be < 0) {
      rt(), o == null || o(ce, !0);
      return;
    }
    if (Me > d_) {
      Qe(), o == null || o(ce, !1);
      return;
    }
    var ue;
    const xe = Math.min((ue = k.current.getBoundingClientRect().height) != null ? ue : 0, window.innerHeight);
    var Ne;
    const Oe = Math.min((Ne = k.current.getBoundingClientRect().width) != null ? Ne : 0, window.innerWidth), ht = S === "left" || S === "right";
    if (Math.abs(ye) >= (ht ? Oe : xe) * l) {
      Qe(), o == null || o(ce, !1);
      return;
    }
    o == null || o(ce, !0), rt();
  }
  E.useEffect(() => (q && (at(document.documentElement, {
    scrollBehavior: "auto"
  }), W.current = /* @__PURE__ */ new Date()), () => {
    Bz(document.documentElement, "scrollBehavior");
  }), [
    q
  ]);
  function Mn(ce) {
    const ye = ce ? (window.innerWidth - Yn) / window.innerWidth : 1, Pe = ce ? -Yn : 0;
    J.current && window.clearTimeout(J.current), at(k.current, {
      transition: `transform ${Ue.DURATION}s cubic-bezier(${Ue.EASE.join(",")})`,
      transform: tt(S) ? `scale(${ye}) translate3d(0, ${Pe}px, 0)` : `scale(${ye}) translate3d(${Pe}px, 0, 0)`
    }), !ce && k.current && (J.current = setTimeout(() => {
      const be = La(k.current, S);
      at(k.current, {
        transition: "none",
        transform: tt(S) ? `translate3d(0, ${be}px, 0)` : `translate3d(${be}px, 0, 0)`
      });
    }, 500));
  }
  function Gn(ce, ye) {
    if (ye < 0) return;
    const Pe = (window.innerWidth - Yn) / window.innerWidth, be = Pe + ye * (1 - Pe), Me = -Yn + ye * Yn;
    at(k.current, {
      transform: tt(S) ? `scale(${be}) translate3d(0, ${Me}px, 0)` : `scale(${be}) translate3d(${Me}px, 0, 0)`,
      transition: "none"
    });
  }
  function Ht(ce, ye) {
    const Pe = tt(S) ? window.innerHeight : window.innerWidth, be = ye ? (Pe - Yn) / Pe : 1, Me = ye ? -Yn : 0;
    ye && at(k.current, {
      transition: `transform ${Ue.DURATION}s cubic-bezier(${Ue.EASE.join(",")})`,
      transform: tt(S) ? `scale(${be}) translate3d(0, ${Me}px, 0)` : `scale(${be}) translate3d(${Me}px, 0, 0)`
    });
  }
  return E.useEffect(() => {
    b || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    b
  ]), /* @__PURE__ */ E.createElement(Zo, {
    defaultOpen: C,
    onOpenChange: (ce) => {
      !f && !ce || (ce ? M(!0) : Qe(!0), $(ce));
    },
    open: q
  }, /* @__PURE__ */ E.createElement(i_.Provider, {
    value: {
      activeSnapPoint: de,
      snapPoints: a,
      setActiveSnapPoint: Ge,
      drawerRef: k,
      overlayRef: D,
      onOpenChange: t,
      onPress: mt,
      onRelease: nn,
      onDrag: Ot,
      dismissible: f,
      shouldAnimate: X,
      handleOnly: u,
      isOpen: q,
      isDragging: G,
      shouldFade: nt,
      closeDrawer: Qe,
      onNestedDrag: Gn,
      onNestedOpenChange: Mn,
      onNestedRelease: Ht,
      keyboardIsOpen: ne,
      modal: b,
      snapPointsOffset: $e,
      activeSnapPointIndex: Ee,
      direction: S,
      shouldScaleBackground: i,
      setBackgroundColorOnScale: s,
      noBodyStyles: w,
      container: j,
      autoFocus: B
    }
  }, n));
}
const h_ = /* @__PURE__ */ E.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: o, shouldFade: a, isOpen: i, modal: s, shouldAnimate: l } = va(), c = c_(t, n), f = r && r.length > 0;
  if (!s)
    return null;
  const u = E.useCallback((p) => o(p), [
    o
  ]);
  return /* @__PURE__ */ E.createElement(ea, {
    onMouseUp: u,
    ref: c,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": i && f ? "true" : "false",
    "data-vaul-snap-points-overlay": i && a ? "true" : "false",
    "data-vaul-animate": l != null && l.current ? "true" : "false",
    ...e
  });
});
h_.displayName = "Drawer.Overlay";
const v_ = /* @__PURE__ */ E.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, o) {
  const { drawerRef: a, onPress: i, onRelease: s, onDrag: l, keyboardIsOpen: c, snapPointsOffset: f, activeSnapPointIndex: u, modal: p, isOpen: v, direction: h, snapPoints: g, container: b, handleOnly: y, shouldAnimate: x, autoFocus: w } = va(), [S, C] = E.useState(!1), P = c_(o, a), _ = E.useRef(null), R = E.useRef(null), T = E.useRef(!1), z = g && g.length > 0;
  Yz();
  const j = (A, H, q = 0) => {
    if (T.current) return !0;
    const $ = Math.abs(A.y), F = Math.abs(A.x), M = F > $, G = [
      "bottom",
      "right"
    ].includes(H) ? 1 : -1;
    if (H === "left" || H === "right") {
      if (!(A.x * G < 0) && F >= 0 && F <= q)
        return M;
    } else if (!(A.y * G < 0) && $ >= 0 && $ <= q)
      return !M;
    return T.current = !0, !0;
  };
  E.useEffect(() => {
    z && window.requestAnimationFrame(() => {
      C(!0);
    });
  }, []);
  function B(A) {
    _.current = null, T.current = !1, s(A);
  }
  return /* @__PURE__ */ E.createElement(ta, {
    "data-vaul-drawer-direction": h,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": S ? "true" : "false",
    "data-vaul-snap-points": v && z ? "true" : "false",
    "data-vaul-custom-container": b ? "true" : "false",
    "data-vaul-animate": x != null && x.current ? "true" : "false",
    ...r,
    ref: P,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[u ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (A) => {
      y || (r.onPointerDown == null || r.onPointerDown.call(r, A), _.current = {
        x: A.pageX,
        y: A.pageY
      }, i(A));
    },
    onOpenAutoFocus: (A) => {
      n == null || n(A), w || A.preventDefault();
    },
    onPointerDownOutside: (A) => {
      if (e == null || e(A), !p || A.defaultPrevented) {
        A.preventDefault();
        return;
      }
      c.current && (c.current = !1);
    },
    onFocusOutside: (A) => {
      if (!p) {
        A.preventDefault();
        return;
      }
    },
    onPointerMove: (A) => {
      if (R.current = A, y || (r.onPointerMove == null || r.onPointerMove.call(r, A), !_.current)) return;
      const H = A.pageY - _.current.y, q = A.pageX - _.current.x, $ = A.pointerType === "touch" ? 10 : 2;
      j({
        x: q,
        y: H
      }, h, $) ? l(A) : (Math.abs(q) > $ || Math.abs(H) > $) && (_.current = null);
    },
    onPointerUp: (A) => {
      r.onPointerUp == null || r.onPointerUp.call(r, A), _.current = null, T.current = !1, s(A);
    },
    onPointerOut: (A) => {
      r.onPointerOut == null || r.onPointerOut.call(r, A), B(R.current);
    },
    onContextMenu: (A) => {
      r.onContextMenu == null || r.onContextMenu.call(r, A), R.current && B(R.current);
    }
  });
});
v_.displayName = "Drawer.Content";
const Zz = 250, Qz = 120, eB = /* @__PURE__ */ E.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: o, isDragging: a, snapPoints: i, activeSnapPoint: s, setActiveSnapPoint: l, dismissible: c, handleOnly: f, isOpen: u, onPress: p, onDrag: v } = va(), h = E.useRef(null), g = E.useRef(!1);
  function b() {
    if (g.current) {
      w();
      return;
    }
    window.setTimeout(() => {
      y();
    }, Qz);
  }
  function y() {
    if (a || e || g.current) {
      w();
      return;
    }
    if (w(), !i || i.length === 0) {
      c || o();
      return;
    }
    if (s === i[i.length - 1] && c) {
      o();
      return;
    }
    const C = i.findIndex((_) => _ === s);
    if (C === -1) return;
    const P = i[C + 1];
    l(P);
  }
  function x() {
    h.current = window.setTimeout(() => {
      g.current = !0;
    }, Zz);
  }
  function w() {
    h.current && window.clearTimeout(h.current), g.current = !1;
  }
  return /* @__PURE__ */ E.createElement("div", {
    onClick: b,
    onPointerCancel: w,
    onPointerDown: (S) => {
      f && p(S), x();
    },
    onPointerMove: (S) => {
      f && v(S);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": u ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ E.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
eB.displayName = "Drawer.Handle";
function tB(e) {
  const t = va(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ E.createElement(Qo, {
    container: n,
    ...r
  });
}
const Wn = {
  Root: Jz,
  Content: v_,
  Overlay: h_,
  Trigger: zi,
  Portal: tB,
  Close: mr,
  Title: Bi,
  Description: qi
};
function $V({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Wn.Root, { "data-slot": "drawer", ...e });
}
function LV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Wn.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function nB({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Wn.Portal, { "data-slot": "drawer-portal", ...e });
}
function FV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Wn.Close, { "data-slot": "drawer-close", ...e });
}
function rB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Wn.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: O(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function zV({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(nB, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ d.jsx(rB, {}),
    /* @__PURE__ */ d.jsxs(
      Wn.Content,
      {
        "data-slot": "drawer-content",
        className: O(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          e
        ),
        ...n,
        children: [
          /* @__PURE__ */ d.jsx("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function BV({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "drawer-header",
      className: O("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function qV({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "drawer-footer",
      className: O("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function HV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Wn.Title,
    {
      "data-slot": "drawer-title",
      className: O("text-foreground font-semibold", e),
      ...t
    }
  );
}
function WV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Wn.Description,
    {
      "data-slot": "drawer-description",
      className: O("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
var qp = "DropdownMenu", [oB] = Be(
  qp,
  [pa]
), ft = pa(), [aB, g_] = oB(qp), b_ = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, l = ft(t), c = m.useRef(null), [f = !1, u] = Ve({
    prop: o,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ d.jsx(
    aB,
    {
      scope: t,
      triggerId: ze(),
      triggerRef: c,
      contentId: ze(),
      open: f,
      onOpenChange: u,
      onOpenToggle: m.useCallback(() => u((p) => !p), [u]),
      modal: s,
      children: /* @__PURE__ */ d.jsx(Cp, { ...l, open: f, onOpenChange: u, dir: r, modal: s, children: n })
    }
  );
};
b_.displayName = qp;
var y_ = "DropdownMenuTrigger", x_ = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = g_(y_, n), i = ft(n);
    return /* @__PURE__ */ d.jsx(Pp, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
      ee.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: un(t, a.triggerRef),
        onPointerDown: U(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: U(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
x_.displayName = y_;
var iB = "DropdownMenuPortal", w_ = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = ft(t);
  return /* @__PURE__ */ d.jsx(Ep, { ...r, ...n });
};
w_.displayName = iB;
var S_ = "DropdownMenuContent", __ = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = g_(S_, n), a = ft(n), i = m.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Rp,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: U(e.onCloseAutoFocus, (s) => {
          var l;
          i.current || (l = o.triggerRef.current) == null || l.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: U(e.onInteractOutside, (s) => {
          const l = s.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || c;
          (!o.modal || f) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
__.displayName = S_;
var sB = "DropdownMenuGroup", C_ = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ft(n);
    return /* @__PURE__ */ d.jsx(Tp, { ...o, ...r, ref: t });
  }
);
C_.displayName = sB;
var lB = "DropdownMenuLabel", P_ = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ft(n);
    return /* @__PURE__ */ d.jsx(Mp, { ...o, ...r, ref: t });
  }
);
P_.displayName = lB;
var cB = "DropdownMenuItem", E_ = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ft(n);
    return /* @__PURE__ */ d.jsx(Np, { ...o, ...r, ref: t });
  }
);
E_.displayName = cB;
var uB = "DropdownMenuCheckboxItem", R_ = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ft(n);
  return /* @__PURE__ */ d.jsx(Op, { ...o, ...r, ref: t });
});
R_.displayName = uB;
var dB = "DropdownMenuRadioGroup", T_ = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ft(n);
  return /* @__PURE__ */ d.jsx(Ap, { ...o, ...r, ref: t });
});
T_.displayName = dB;
var fB = "DropdownMenuRadioItem", M_ = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ft(n);
  return /* @__PURE__ */ d.jsx(Dp, { ...o, ...r, ref: t });
});
M_.displayName = fB;
var pB = "DropdownMenuItemIndicator", N_ = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ft(n);
  return /* @__PURE__ */ d.jsx(jp, { ...o, ...r, ref: t });
});
N_.displayName = pB;
var mB = "DropdownMenuSeparator", O_ = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ft(n);
  return /* @__PURE__ */ d.jsx(kp, { ...o, ...r, ref: t });
});
O_.displayName = mB;
var hB = "DropdownMenuArrow", vB = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ft(n);
    return /* @__PURE__ */ d.jsx(Ip, { ...o, ...r, ref: t });
  }
);
vB.displayName = hB;
var gB = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = ft(t), [s = !1, l] = Ve({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ d.jsx($p, { ...i, open: s, onOpenChange: l, children: n });
}, bB = "DropdownMenuSubTrigger", A_ = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ft(n);
  return /* @__PURE__ */ d.jsx(Lp, { ...o, ...r, ref: t });
});
A_.displayName = bB;
var yB = "DropdownMenuSubContent", D_ = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ft(n);
  return /* @__PURE__ */ d.jsx(
    Fp,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
D_.displayName = yB;
var xB = b_, wB = x_, j_ = w_, SB = __, _B = C_, CB = P_, PB = E_, EB = R_, RB = T_, TB = M_, k_ = N_, MB = O_, NB = gB, OB = A_, AB = D_;
function VV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(xB, { "data-slot": "dropdown-menu", ...e });
}
function GV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(j_, { "data-slot": "dropdown-menu-portal", ...e });
}
function UV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(
    wB,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function KV({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(j_, { children: /* @__PURE__ */ d.jsx(
    SB,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: O(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n
    }
  ) });
}
function YV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(_B, { "data-slot": "dropdown-menu-group", ...e });
}
function XV({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    PB,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: O(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function JV({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    EB,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: O(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(k_, { children: /* @__PURE__ */ d.jsx(dr, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function ZV({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(
    RB,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function QV({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(
    TB,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: O(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(k_, { children: /* @__PURE__ */ d.jsx(Ei, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function eG({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    CB,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: O(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function tG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    MB,
    {
      "data-slot": "dropdown-menu-separator",
      className: O("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function nG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: O(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function rG({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(NB, { "data-slot": "dropdown-menu-sub", ...e });
}
function oG({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    OB,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: O(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ d.jsx(Jr, { className: "ml-auto size-4" })
      ]
    }
  );
}
function aG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    AB,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: O(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
var DB = (e) => e.type === "checkbox", jB = (e) => e instanceof Date, I_ = (e) => e == null;
const kB = (e) => typeof e == "object";
var ga = (e) => !I_(e) && !Array.isArray(e) && kB(e) && !jB(e), IB = (e) => ga(e) && e.target ? DB(e.target) ? e.target.checked : e.target.value : e, $B = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, LB = (e, t) => e.has($B(t)), FB = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return ga(t) && t.hasOwnProperty("isPrototypeOf");
}, zB = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function $_(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(zB && (e instanceof Blob || r)) && (n || ga(e)))
    if (t = n ? [] : {}, !n && !FB(e))
      t = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (t[o] = $_(e[o]));
  else
    return e;
  return t;
}
var L_ = (e) => Array.isArray(e) ? e.filter(Boolean) : [], qd = (e) => e === void 0, wt = (e, t, n) => {
  if (!t || !ga(e))
    return n;
  const r = L_(t.split(/[,[\].]+?/)).reduce((o, a) => I_(o) ? o : o[a], e);
  return qd(r) || r === e ? qd(e[t]) ? n : e[t] : r;
}, Ju = (e) => typeof e == "boolean", BB = (e) => /^\w*$/.test(e), qB = (e) => L_(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Gb = (e, t, n) => {
  let r = -1;
  const o = BB(t) ? [t] : qB(t), a = o.length, i = a - 1;
  for (; ++r < a; ) {
    const s = o[r];
    let l = n;
    if (r !== i) {
      const c = e[s];
      l = ga(c) || Array.isArray(c) ? c : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = l, e = e[s];
  }
};
const Ub = {
  BLUR: "blur",
  CHANGE: "change"
}, Kb = {
  all: "all"
}, F_ = E.createContext(null), os = () => E.useContext(F_), HB = (e) => {
  const { children: t, ...n } = e;
  return E.createElement(F_.Provider, { value: n }, t);
};
var WB = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const i = a;
        return t._proxyFormState[i] !== Kb.all && (t._proxyFormState[i] = !r || Kb.all), n && (n[i] = !0), e[i];
      }
    });
  return o;
};
function z_(e) {
  const t = os(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [i, s] = E.useState(n._formState), l = E.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), c = E.useRef(o);
  return c.current = o, E.useEffect(() => n._subscribe({
    name: c.current,
    formState: l.current,
    exact: a,
    callback: (f) => {
      !r && s({
        ...n._formState,
        ...f
      });
    }
  }), [n, r, a]), E.useEffect(() => {
    l.current.isValid && n._setValid(!0);
  }, [n]), E.useMemo(() => WB(i, n, l.current, !1), [i, n]);
}
var VB = (e) => typeof e == "string", GB = (e, t, n, r, o) => VB(e) ? wt(n, e, o) : Array.isArray(e) ? e.map((a) => wt(n, a)) : n;
function UB(e) {
  const t = os(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: i } = e || {}, s = E.useRef(r), l = E.useRef(o);
  s.current = r, E.useEffect(() => n._subscribe({
    name: s.current,
    formState: {
      values: !0
    },
    exact: i,
    callback: (u) => !a && f(GB(s.current, n._names, u.values || n._formValues, !1, l.current))
  }), [n, a, i]);
  const [c, f] = E.useState(n._getWatch(r, o));
  return E.useEffect(() => n._removeUnmounted()), c;
}
function KB(e) {
  const t = os(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a } = e, i = LB(o._names.array, n), s = UB({
    control: o,
    name: n,
    defaultValue: wt(o._formValues, n, wt(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = z_({
    control: o,
    name: n,
    exact: !0
  }), c = E.useRef(e), f = E.useRef(o.register(n, {
    ...e.rules,
    value: s,
    ...Ju(e.disabled) ? { disabled: e.disabled } : {}
  })), u = E.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!wt(l.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!wt(l.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!wt(l.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!wt(l.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => wt(l.errors, n)
    }
  }), [l, n]), p = E.useCallback((b) => f.current.onChange({
    target: {
      value: IB(b),
      name: n
    },
    type: Ub.CHANGE
  }), [n]), v = E.useCallback(() => f.current.onBlur({
    target: {
      value: wt(o._formValues, n),
      name: n
    },
    type: Ub.BLUR
  }), [n, o._formValues]), h = E.useCallback((b) => {
    const y = wt(o._fields, n);
    y && b && (y._f.ref = {
      focus: () => b.focus(),
      select: () => b.select(),
      setCustomValidity: (x) => b.setCustomValidity(x),
      reportValidity: () => b.reportValidity()
    });
  }, [o._fields, n]), g = E.useMemo(() => ({
    name: n,
    value: s,
    ...Ju(r) || l.disabled ? { disabled: l.disabled || r } : {},
    onChange: p,
    onBlur: v,
    ref: h
  }), [n, r, l.disabled, p, v, h, s]);
  return E.useEffect(() => {
    const b = o._options.shouldUnregister || a;
    o.register(n, {
      ...c.current.rules,
      ...Ju(c.current.disabled) ? { disabled: c.current.disabled } : {}
    });
    const y = (x, w) => {
      const S = wt(o._fields, x);
      S && S._f && (S._f.mount = w);
    };
    if (y(n, !0), b) {
      const x = $_(wt(o._options.defaultValues, n));
      Gb(o._defaultValues, n, x), qd(wt(o._formValues, n)) && Gb(o._formValues, n, x);
    }
    return !i && o.register(n), () => {
      (i ? b && !o._state.action : b) ? o.unregister(n) : y(n, !1);
    };
  }, [n, o, i, a]), E.useEffect(() => {
    o._setDisabledField({
      disabled: r,
      name: n
    });
  }, [r, n, o]), E.useMemo(() => ({
    field: g,
    formState: l,
    fieldState: u
  }), [g, l, u]);
}
const YB = (e) => e.render(KB(e));
var XB = "Label", B_ = m.forwardRef((e, t) => /* @__PURE__ */ d.jsx(
  ee.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
B_.displayName = XB;
var JB = B_;
function ZB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    JB,
    {
      "data-slot": "label",
      className: O(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const iG = HB, q_ = m.createContext(
  {}
), sG = ({
  ...e
}) => /* @__PURE__ */ d.jsx(q_.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d.jsx(YB, { ...e }) }), as = () => {
  const e = m.useContext(q_), t = m.useContext(H_), { getFieldState: n } = os(), r = z_({ name: e.name }), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, H_ = m.createContext(
  {}
);
function lG({ className: e, ...t }) {
  const n = m.useId();
  return /* @__PURE__ */ d.jsx(H_.Provider, { value: { id: n }, children: /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "form-item",
      className: O("grid gap-2", e),
      ...t
    }
  ) });
}
function cG({
  className: e,
  ...t
}) {
  const { error: n, formItemId: r } = as();
  return /* @__PURE__ */ d.jsx(
    ZB,
    {
      "data-slot": "form-label",
      "data-error": !!n,
      className: O("data-[error=true]:text-destructive", e),
      htmlFor: r,
      ...t
    }
  );
}
function uG({ ...e }) {
  const { error: t, formItemId: n, formDescriptionId: r, formMessageId: o } = as();
  return /* @__PURE__ */ d.jsx(
    ut,
    {
      "data-slot": "form-control",
      id: n,
      "aria-describedby": t ? `${r} ${o}` : `${r}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function dG({ className: e, ...t }) {
  const { formDescriptionId: n } = as();
  return /* @__PURE__ */ d.jsx(
    "p",
    {
      "data-slot": "form-description",
      id: n,
      className: O("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function fG({ className: e, ...t }) {
  const { error: n, formMessageId: r } = as(), o = n ? String((n == null ? void 0 : n.message) ?? "") : t.children;
  return o ? /* @__PURE__ */ d.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: O("text-destructive text-sm", e),
      ...t,
      children: o
    }
  ) : null;
}
var Zu, Hp = "HoverCard", [W_] = Be(Hp, [
  hn
]), is = hn(), [QB, ss] = W_(Hp), V_ = (e) => {
  const {
    __scopeHoverCard: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    openDelay: i = 700,
    closeDelay: s = 300
  } = e, l = is(t), c = m.useRef(0), f = m.useRef(0), u = m.useRef(!1), p = m.useRef(!1), [v = !1, h] = Ve({
    prop: r,
    defaultProp: o,
    onChange: a
  }), g = m.useCallback(() => {
    clearTimeout(f.current), c.current = window.setTimeout(() => h(!0), i);
  }, [i, h]), b = m.useCallback(() => {
    clearTimeout(c.current), !u.current && !p.current && (f.current = window.setTimeout(() => h(!1), s));
  }, [s, h]), y = m.useCallback(() => h(!1), [h]);
  return m.useEffect(() => () => {
    clearTimeout(c.current), clearTimeout(f.current);
  }, []), /* @__PURE__ */ d.jsx(
    QB,
    {
      scope: t,
      open: v,
      onOpenChange: h,
      onOpen: g,
      onClose: b,
      onDismiss: y,
      hasSelectionRef: u,
      isPointerDownOnContentRef: p,
      children: /* @__PURE__ */ d.jsx(no, { ...l, children: n })
    }
  );
};
V_.displayName = Hp;
var G_ = "HoverCardTrigger", U_ = m.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = ss(G_, n), a = is(n);
    return /* @__PURE__ */ d.jsx(ro, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
      ee.a,
      {
        "data-state": o.open ? "open" : "closed",
        ...r,
        ref: t,
        onPointerEnter: U(e.onPointerEnter, hi(o.onOpen)),
        onPointerLeave: U(e.onPointerLeave, hi(o.onClose)),
        onFocus: U(e.onFocus, o.onOpen),
        onBlur: U(e.onBlur, o.onClose),
        onTouchStart: U(e.onTouchStart, (i) => i.preventDefault())
      }
    ) });
  }
);
U_.displayName = G_;
var Wp = "HoverCardPortal", [e5, t5] = W_(Wp, {
  forceMount: void 0
}), K_ = (e) => {
  const { __scopeHoverCard: t, forceMount: n, children: r, container: o } = e, a = ss(Wp, t);
  return /* @__PURE__ */ d.jsx(e5, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(qe, { present: n || a.open, children: /* @__PURE__ */ d.jsx(pr, { asChild: !0, container: o, children: r }) }) });
};
K_.displayName = Wp;
var mi = "HoverCardContent", Y_ = m.forwardRef(
  (e, t) => {
    const n = t5(mi, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = ss(mi, e.__scopeHoverCard);
    return /* @__PURE__ */ d.jsx(qe, { present: r || a.open, children: /* @__PURE__ */ d.jsx(
      n5,
      {
        "data-state": a.open ? "open" : "closed",
        ...o,
        onPointerEnter: U(e.onPointerEnter, hi(a.onOpen)),
        onPointerLeave: U(e.onPointerLeave, hi(a.onClose)),
        ref: t
      }
    ) });
  }
);
Y_.displayName = mi;
var n5 = m.forwardRef((e, t) => {
  const {
    __scopeHoverCard: n,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: a,
    onInteractOutside: i,
    ...s
  } = e, l = ss(mi, n), c = is(n), f = m.useRef(null), u = fe(t, f), [p, v] = m.useState(!1);
  return m.useEffect(() => {
    if (p) {
      const h = document.body;
      return Zu = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = Zu, h.style.webkitUserSelect = Zu;
      };
    }
  }, [p]), m.useEffect(() => {
    if (f.current) {
      const h = () => {
        v(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var b;
          ((b = document.getSelection()) == null ? void 0 : b.toString()) !== "" && (l.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", h), () => {
        document.removeEventListener("pointerup", h), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [l.isPointerDownOnContentRef, l.hasSelectionRef]), m.useEffect(() => {
    f.current && a5(f.current).forEach((g) => g.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ d.jsx(
    Fn,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: i,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: U(a, (h) => {
        h.preventDefault();
      }),
      onDismiss: l.onDismiss,
      children: /* @__PURE__ */ d.jsx(
        Ko,
        {
          ...c,
          ...s,
          onPointerDown: U(s.onPointerDown, (h) => {
            h.currentTarget.contains(h.target) && v(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0;
          }),
          ref: u,
          style: {
            ...s.style,
            userSelect: p ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: p ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}), r5 = "HoverCardArrow", o5 = m.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = is(n);
    return /* @__PURE__ */ d.jsx(Yo, { ...o, ...r, ref: t });
  }
);
o5.displayName = r5;
function hi(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function a5(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
var i5 = V_, s5 = U_, l5 = K_, c5 = Y_;
function pG({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(i5, { "data-slot": "hover-card", ...e });
}
function mG({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(s5, { "data-slot": "hover-card-trigger", ...e });
}
function hG({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(l5, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ d.jsx(
    c5,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: n,
      className: O(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
var u5 = Object.defineProperty, d5 = Object.defineProperties, f5 = Object.getOwnPropertyDescriptors, vi = Object.getOwnPropertySymbols, X_ = Object.prototype.hasOwnProperty, J_ = Object.prototype.propertyIsEnumerable, Yb = (e, t, n) => t in e ? u5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, p5 = (e, t) => {
  for (var n in t || (t = {})) X_.call(t, n) && Yb(e, n, t[n]);
  if (vi) for (var n of vi(t)) J_.call(t, n) && Yb(e, n, t[n]);
  return e;
}, m5 = (e, t) => d5(e, f5(t)), h5 = (e, t) => {
  var n = {};
  for (var r in e) X_.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && vi) for (var r of vi(e)) t.indexOf(r) < 0 && J_.call(e, r) && (n[r] = e[r]);
  return n;
};
function v5(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function g5(e) {
  let t = m.useRef();
  return m.useEffect(() => {
    t.current = e;
  }), t.current;
}
var b5 = 18, Z_ = 40, y5 = `${Z_}px`, x5 = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function w5({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let [o, a] = m.useState(!1), [i, s] = m.useState(!1), [l, c] = m.useState(!1), f = m.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && o && i, [o, i, n]), u = m.useCallback(() => {
    let p = e.current, v = t.current;
    if (!p || !v || l || n === "none") return;
    let h = p, g = h.getBoundingClientRect().left + h.offsetWidth, b = h.getBoundingClientRect().top + h.offsetHeight / 2, y = g - b5, x = b;
    document.querySelectorAll(x5).length === 0 && document.elementFromPoint(y, x) === p || (a(!0), c(!0));
  }, [e, t, l, n]);
  return m.useEffect(() => {
    let p = e.current;
    if (!p || n === "none") return;
    function v() {
      let g = window.innerWidth - p.getBoundingClientRect().right;
      s(g >= Z_);
    }
    v();
    let h = setInterval(v, 1e3);
    return () => {
      clearInterval(h);
    };
  }, [e, n]), m.useEffect(() => {
    let p = r || document.activeElement === t.current;
    if (n === "none" || !p) return;
    let v = setTimeout(u, 0), h = setTimeout(u, 2e3), g = setTimeout(u, 5e3), b = setTimeout(() => {
      c(!0);
    }, 6e3);
    return () => {
      clearTimeout(v), clearTimeout(h), clearTimeout(g), clearTimeout(b);
    };
  }, [t, r, n, u]), { hasPWMBadge: o, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: y5 };
}
var Q_ = m.createContext({}), eC = m.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: i = "left", pattern: s, placeholder: l, inputMode: c = "numeric", onComplete: f, pushPasswordManagerStrategy: u = "increase-width", pasteTransformer: p, containerClassName: v, noScriptCSSFallback: h = S5, render: g, children: b } = n, y = h5(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), x, w, S, C, P;
  let [_, R] = m.useState(typeof y.defaultValue == "string" ? y.defaultValue : ""), T = r ?? _, z = g5(T), j = m.useCallback((k) => {
    o == null || o(k), R(k);
  }, [o]), B = m.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), A = m.useRef(null), H = m.useRef(null), q = m.useRef({ value: T, onChange: j, isIOS: typeof window < "u" && ((w = (x = window == null ? void 0 : window.CSS) == null ? void 0 : x.supports) == null ? void 0 : w.call(x, "-webkit-touch-callout", "none")) }), $ = m.useRef({ prev: [(S = A.current) == null ? void 0 : S.selectionStart, (C = A.current) == null ? void 0 : C.selectionEnd, (P = A.current) == null ? void 0 : P.selectionDirection] });
  m.useImperativeHandle(t, () => A.current, []), m.useEffect(() => {
    let k = A.current, re = H.current;
    if (!k || !re) return;
    q.current.value !== k.value && q.current.onChange(k.value), $.current.prev = [k.selectionStart, k.selectionEnd, k.selectionDirection];
    function pe() {
      if (document.activeElement !== k) {
        L(null), W(null);
        return;
      }
      let de = k.selectionStart, Ee = k.selectionEnd, Ge = k.selectionDirection, _e = k.maxLength, $e = k.value, it = $.current.prev, nt = -1, Ze = -1, lt;
      if ($e.length !== 0 && de !== null && Ee !== null) {
        let Ot = de === Ee, Qe = de === $e.length && $e.length < _e;
        if (Ot && !Qe) {
          let rt = de;
          if (rt === 0) nt = 0, Ze = 1, lt = "forward";
          else if (rt === _e) nt = rt - 1, Ze = rt, lt = "backward";
          else if (_e > 1 && $e.length > 1) {
            let qt = 0;
            if (it[0] !== null && it[1] !== null) {
              lt = rt < it[1] ? "backward" : "forward";
              let nn = it[0] === it[1] && it[0] < _e;
              lt === "backward" && !nn && (qt = -1);
            }
            nt = qt + rt, Ze = qt + rt + 1;
          }
        }
        nt !== -1 && Ze !== -1 && nt !== Ze && A.current.setSelectionRange(nt, Ze, lt);
      }
      let bt = nt !== -1 ? nt : de, mt = Ze !== -1 ? Ze : Ee, Xe = lt ?? Ge;
      L(bt), W(mt), $.current.prev = [bt, mt, Xe];
    }
    if (document.addEventListener("selectionchange", pe, { capture: !0 }), pe(), document.activeElement === k && oe(!0), !document.getElementById("input-otp-style")) {
      let de = document.createElement("style");
      if (de.id = "input-otp-style", document.head.appendChild(de), de.sheet) {
        let Ee = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        yo(de.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), yo(de.sheet, `[data-input-otp]:autofill { ${Ee} }`), yo(de.sheet, `[data-input-otp]:-webkit-autofill { ${Ee} }`), yo(de.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), yo(de.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let me = () => {
      re && re.style.setProperty("--root-height", `${k.clientHeight}px`);
    };
    me();
    let ge = new ResizeObserver(me);
    return ge.observe(k), () => {
      document.removeEventListener("selectionchange", pe, { capture: !0 }), ge.disconnect();
    };
  }, []);
  let [F, M] = m.useState(!1), [G, oe] = m.useState(!1), [Z, L] = m.useState(null), [D, W] = m.useState(null);
  m.useEffect(() => {
    v5(() => {
      var k, re, pe, me;
      (k = A.current) == null || k.dispatchEvent(new Event("input"));
      let ge = (re = A.current) == null ? void 0 : re.selectionStart, de = (pe = A.current) == null ? void 0 : pe.selectionEnd, Ee = (me = A.current) == null ? void 0 : me.selectionDirection;
      ge !== null && de !== null && (L(ge), W(de), $.current.prev = [ge, de, Ee]);
    });
  }, [T, G]), m.useEffect(() => {
    z !== void 0 && T !== z && z.length < a && T.length === a && (f == null || f(T));
  }, [a, f, z, T]);
  let V = w5({ containerRef: H, inputRef: A, pushPasswordManagerStrategy: u, isFocused: G }), K = m.useCallback((k) => {
    let re = k.currentTarget.value.slice(0, a);
    if (re.length > 0 && B && !B.test(re)) {
      k.preventDefault();
      return;
    }
    typeof z == "string" && re.length < z.length && document.dispatchEvent(new Event("selectionchange")), j(re);
  }, [a, j, z, B]), I = m.useCallback(() => {
    var k;
    if (A.current) {
      let re = Math.min(A.current.value.length, a - 1), pe = A.current.value.length;
      (k = A.current) == null || k.setSelectionRange(re, pe), L(re), W(pe);
    }
    oe(!0);
  }, [a]), Y = m.useCallback((k) => {
    var re, pe;
    let me = A.current;
    if (!p && (!q.current.isIOS || !k.clipboardData || !me)) return;
    let ge = k.clipboardData.getData("text/plain"), de = p ? p(ge) : ge;
    k.preventDefault();
    let Ee = (re = A.current) == null ? void 0 : re.selectionStart, Ge = (pe = A.current) == null ? void 0 : pe.selectionEnd, _e = (Ee !== Ge ? T.slice(0, Ee) + de + T.slice(Ge) : T.slice(0, Ee) + de + T.slice(Ee)).slice(0, a);
    if (_e.length > 0 && B && !B.test(_e)) return;
    me.value = _e, j(_e);
    let $e = Math.min(_e.length, a - 1), it = _e.length;
    me.setSelectionRange($e, it), L($e), W(it);
  }, [a, j, B, T]), J = m.useMemo(() => ({ position: "relative", cursor: y.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [y.disabled]), te = m.useMemo(() => ({ position: "absolute", inset: 0, width: V.willPushPWMBadge ? `calc(100% + ${V.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: V.willPushPWMBadge ? `inset(0 ${V.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [V.PWM_BADGE_SPACE_WIDTH, V.willPushPWMBadge, i]), ne = m.useMemo(() => m.createElement("input", m5(p5({ autoComplete: y.autoComplete || "one-time-code" }, y), { "data-input-otp": !0, "data-input-otp-placeholder-shown": T.length === 0 || void 0, "data-input-otp-mss": Z, "data-input-otp-mse": D, inputMode: c, pattern: B == null ? void 0 : B.source, "aria-placeholder": l, style: te, maxLength: a, value: T, ref: A, onPaste: (k) => {
    var re;
    Y(k), (re = y.onPaste) == null || re.call(y, k);
  }, onChange: K, onMouseOver: (k) => {
    var re;
    M(!0), (re = y.onMouseOver) == null || re.call(y, k);
  }, onMouseLeave: (k) => {
    var re;
    M(!1), (re = y.onMouseLeave) == null || re.call(y, k);
  }, onFocus: (k) => {
    var re;
    I(), (re = y.onFocus) == null || re.call(y, k);
  }, onBlur: (k) => {
    var re;
    oe(!1), (re = y.onBlur) == null || re.call(y, k);
  } })), [K, I, Y, c, te, a, D, Z, y, B == null ? void 0 : B.source, T]), X = m.useMemo(() => ({ slots: Array.from({ length: a }).map((k, re) => {
    var pe;
    let me = G && Z !== null && D !== null && (Z === D && re === Z || re >= Z && re < D), ge = T[re] !== void 0 ? T[re] : null, de = T[0] !== void 0 ? null : (pe = l == null ? void 0 : l[re]) != null ? pe : null;
    return { char: ge, placeholderChar: de, isActive: me, hasFakeCaret: me && ge === null };
  }), isFocused: G, isHovering: !y.disabled && F }), [G, F, a, D, Z, y.disabled, T]), ae = m.useMemo(() => g ? g(X) : m.createElement(Q_.Provider, { value: X }, b), [b, X, g]);
  return m.createElement(m.Fragment, null, h !== null && m.createElement("noscript", null, m.createElement("style", null, h)), m.createElement("div", { ref: H, "data-input-otp-container": !0, style: J, className: v }, ae, m.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, ne)));
});
eC.displayName = "Input";
function yo(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var S5 = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
function vG({
  className: e,
  containerClassName: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    eC,
    {
      "data-slot": "input-otp",
      containerClassName: O(
        "flex items-center gap-2 has-disabled:opacity-50",
        t
      ),
      className: O("disabled:cursor-not-allowed", e),
      ...n
    }
  );
}
function gG({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: O("flex items-center gap-1", e),
      ...t
    }
  );
}
function bG({
  index: e,
  className: t,
  ...n
}) {
  const r = m.useContext(Q_), { char: o, hasFakeCaret: a, isActive: i } = (r == null ? void 0 : r.slots[e]) ?? {};
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": i,
      className: O(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm bg-input-background transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        t
      ),
      ...n,
      children: [
        o,
        a && /* @__PURE__ */ d.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ d.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function yG({ ...e }) {
  return /* @__PURE__ */ d.jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ d.jsx(yE, {}) });
}
var ls = "Menubar", [Hd, _5, C5] = Ln(ls), [tC] = Be(ls, [
  C5,
  gn
]), pt = pa(), nC = gn(), [P5, Vp] = tC(ls), rC = m.forwardRef(
  (e, t) => {
    const {
      __scopeMenubar: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      loop: i = !0,
      dir: s,
      ...l
    } = e, c = Zt(s), f = nC(n), [u = "", p] = Ve({
      prop: r,
      onChange: o,
      defaultProp: a
    }), [v, h] = m.useState(null);
    return /* @__PURE__ */ d.jsx(
      P5,
      {
        scope: n,
        value: u,
        onMenuOpen: m.useCallback(
          (g) => {
            p(g), h(g);
          },
          [p]
        ),
        onMenuClose: m.useCallback(() => p(""), [p]),
        onMenuToggle: m.useCallback(
          (g) => {
            p((b) => b ? "" : g), h(g);
          },
          [p]
        ),
        dir: c,
        loop: i,
        children: /* @__PURE__ */ d.jsx(Hd.Provider, { scope: n, children: /* @__PURE__ */ d.jsx(Hd.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(
          ua,
          {
            asChild: !0,
            ...f,
            orientation: "horizontal",
            loop: i,
            dir: c,
            currentTabStopId: v,
            onCurrentTabStopIdChange: h,
            children: /* @__PURE__ */ d.jsx(ee.div, { role: "menubar", ...l, ref: t })
          }
        ) }) })
      }
    );
  }
);
rC.displayName = ls;
var Gp = "MenubarMenu", [E5, oC] = tC(Gp), aC = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = ze(), a = n || o || "LEGACY_REACT_AUTO_VALUE", i = Vp(Gp, t), s = pt(t), l = m.useRef(null), c = m.useRef(!1), f = i.value === a;
  return m.useEffect(() => {
    f || (c.current = !1);
  }, [f]), /* @__PURE__ */ d.jsx(
    E5,
    {
      scope: t,
      value: a,
      triggerId: ze(),
      triggerRef: l,
      contentId: ze(),
      wasKeyboardTriggerOpenRef: c,
      children: /* @__PURE__ */ d.jsx(
        Cp,
        {
          ...s,
          open: f,
          onOpenChange: (u) => {
            u || i.onMenuClose();
          },
          modal: !1,
          dir: i.dir,
          ...r
        }
      )
    }
  );
};
aC.displayName = Gp;
var Wd = "MenubarTrigger", iC = m.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = nC(n), i = pt(n), s = Vp(Wd, n), l = oC(Wd, n), c = m.useRef(null), f = fe(t, c, l.triggerRef), [u, p] = m.useState(!1), v = s.value === l.value;
    return /* @__PURE__ */ d.jsx(Hd.ItemSlot, { scope: n, value: l.value, disabled: r, children: /* @__PURE__ */ d.jsx(
      da,
      {
        asChild: !0,
        ...a,
        focusable: !r,
        tabStopId: l.value,
        children: /* @__PURE__ */ d.jsx(Pp, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
          ee.button,
          {
            type: "button",
            role: "menuitem",
            id: l.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": v,
            "aria-controls": v ? l.contentId : void 0,
            "data-highlighted": u ? "" : void 0,
            "data-state": v ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            ...o,
            ref: f,
            onPointerDown: U(e.onPointerDown, (h) => {
              !r && h.button === 0 && h.ctrlKey === !1 && (s.onMenuOpen(l.value), v || h.preventDefault());
            }),
            onPointerEnter: U(e.onPointerEnter, () => {
              var g;
              !!s.value && !v && (s.onMenuOpen(l.value), (g = c.current) == null || g.focus());
            }),
            onKeyDown: U(e.onKeyDown, (h) => {
              r || (["Enter", " "].includes(h.key) && s.onMenuToggle(l.value), h.key === "ArrowDown" && s.onMenuOpen(l.value), ["Enter", " ", "ArrowDown"].includes(h.key) && (l.wasKeyboardTriggerOpenRef.current = !0, h.preventDefault()));
            }),
            onFocus: U(e.onFocus, () => p(!0)),
            onBlur: U(e.onBlur, () => p(!1))
          }
        ) })
      }
    ) });
  }
);
iC.displayName = Wd;
var R5 = "MenubarPortal", sC = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = pt(t);
  return /* @__PURE__ */ d.jsx(Ep, { ...r, ...n });
};
sC.displayName = R5;
var Vd = "MenubarContent", lC = m.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, align: r = "start", ...o } = e, a = pt(n), i = Vp(Vd, n), s = oC(Vd, n), l = _5(n), c = m.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Rp,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        "data-radix-menubar-content": "",
        ...a,
        ...o,
        ref: t,
        align: r,
        onCloseAutoFocus: U(e.onCloseAutoFocus, (f) => {
          var p;
          !!!i.value && !c.current && ((p = s.triggerRef.current) == null || p.focus()), c.current = !1, f.preventDefault();
        }),
        onFocusOutside: U(e.onFocusOutside, (f) => {
          const u = f.target;
          l().some((v) => {
            var h;
            return (h = v.ref.current) == null ? void 0 : h.contains(u);
          }) && f.preventDefault();
        }),
        onInteractOutside: U(e.onInteractOutside, () => {
          c.current = !0;
        }),
        onEntryFocus: (f) => {
          s.wasKeyboardTriggerOpenRef.current || f.preventDefault();
        },
        onKeyDown: U(
          e.onKeyDown,
          (f) => {
            if (["ArrowRight", "ArrowLeft"].includes(f.key)) {
              const u = f.target, p = u.hasAttribute("data-radix-menubar-subtrigger"), v = u.closest("[data-radix-menubar-content]") !== f.currentTarget, g = (i.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === f.key;
              if (!g && p || v && g) return;
              let x = l().filter((C) => !C.disabled).map((C) => C.value);
              g && x.reverse();
              const w = x.indexOf(s.value);
              x = i.loop ? B5(x, w + 1) : x.slice(w + 1);
              const [S] = x;
              S && i.onMenuOpen(S);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
lC.displayName = Vd;
var T5 = "MenubarGroup", cC = m.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ d.jsx(Tp, { ...o, ...r, ref: t });
  }
);
cC.displayName = T5;
var M5 = "MenubarLabel", uC = m.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ d.jsx(Mp, { ...o, ...r, ref: t });
  }
);
uC.displayName = M5;
var N5 = "MenubarItem", dC = m.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ d.jsx(Np, { ...o, ...r, ref: t });
  }
);
dC.displayName = N5;
var O5 = "MenubarCheckboxItem", fC = m.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ d.jsx(Op, { ...o, ...r, ref: t });
  }
);
fC.displayName = O5;
var A5 = "MenubarRadioGroup", pC = m.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ d.jsx(Ap, { ...o, ...r, ref: t });
  }
);
pC.displayName = A5;
var D5 = "MenubarRadioItem", mC = m.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ d.jsx(Dp, { ...o, ...r, ref: t });
  }
);
mC.displayName = D5;
var j5 = "MenubarItemIndicator", hC = m.forwardRef((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ d.jsx(jp, { ...o, ...r, ref: t });
});
hC.displayName = j5;
var k5 = "MenubarSeparator", vC = m.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ d.jsx(kp, { ...o, ...r, ref: t });
  }
);
vC.displayName = k5;
var I5 = "MenubarArrow", $5 = m.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ d.jsx(Ip, { ...o, ...r, ref: t });
  }
);
$5.displayName = I5;
var L5 = "MenubarSub", gC = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = pt(t), [s = !1, l] = Ve({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ d.jsx($p, { ...i, open: s, onOpenChange: l, children: n });
};
gC.displayName = L5;
var F5 = "MenubarSubTrigger", bC = m.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ d.jsx(
      Lp,
      {
        "data-radix-menubar-subtrigger": "",
        ...o,
        ...r,
        ref: t
      }
    );
  }
);
bC.displayName = F5;
var z5 = "MenubarSubContent", yC = m.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ d.jsx(
      Fp,
      {
        ...o,
        "data-radix-menubar-content": "",
        ...r,
        ref: t,
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
yC.displayName = z5;
function B5(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var q5 = rC, H5 = aC, W5 = iC, V5 = sC, G5 = lC, U5 = cC, K5 = uC, Y5 = dC, X5 = fC, J5 = pC, Z5 = mC, xC = hC, Q5 = vC, eq = gC, tq = bC, nq = yC;
function xG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    q5,
    {
      "data-slot": "menubar",
      className: O(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function wG({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(H5, { "data-slot": "menubar-menu", ...e });
}
function SG({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(U5, { "data-slot": "menubar-group", ...e });
}
function rq({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(V5, { "data-slot": "menubar-portal", ...e });
}
function _G({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(J5, { "data-slot": "menubar-radio-group", ...e });
}
function CG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    W5,
    {
      "data-slot": "menubar-trigger",
      className: O(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...t
    }
  );
}
function PG({
  className: e,
  align: t = "start",
  alignOffset: n = -4,
  sideOffset: r = 8,
  ...o
}) {
  return /* @__PURE__ */ d.jsx(rq, { children: /* @__PURE__ */ d.jsx(
    G5,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: O(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...o
    }
  ) });
}
function EG({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    Y5,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": n,
      className: O(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function RG({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    X5,
    {
      "data-slot": "menubar-checkbox-item",
      className: O(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(xC, { children: /* @__PURE__ */ d.jsx(dr, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function TG({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(
    Z5,
    {
      "data-slot": "menubar-radio-item",
      className: O(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(xC, { children: /* @__PURE__ */ d.jsx(Ei, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function MG({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    K5,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: O(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function NG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Q5,
    {
      "data-slot": "menubar-separator",
      className: O("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function OG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: O(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function AG({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(eq, { "data-slot": "menubar-sub", ...e });
}
function DG({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    tq,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: O(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ d.jsx(Jr, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function jG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    nq,
    {
      "data-slot": "menubar-sub-content",
      className: O(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
var io = "NavigationMenu", [Up, wC, oq] = Ln(io), [Gd, aq, iq] = Ln(io), [Kp] = Be(
  io,
  [oq, iq]
), [sq, zt] = Kp(io), [lq, cq] = Kp(io), SC = m.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      delayDuration: i = 200,
      skipDelayDuration: s = 300,
      orientation: l = "horizontal",
      dir: c,
      ...f
    } = e, [u, p] = m.useState(null), v = fe(t, (T) => p(T)), h = Zt(c), g = m.useRef(0), b = m.useRef(0), y = m.useRef(0), [x, w] = m.useState(!0), [S = "", C] = Ve({
      prop: r,
      onChange: (T) => {
        const z = T !== "", j = s > 0;
        z ? (window.clearTimeout(y.current), j && w(!1)) : (window.clearTimeout(y.current), y.current = window.setTimeout(
          () => w(!0),
          s
        )), o == null || o(T);
      },
      defaultProp: a
    }), P = m.useCallback(() => {
      window.clearTimeout(b.current), b.current = window.setTimeout(() => C(""), 150);
    }, [C]), _ = m.useCallback(
      (T) => {
        window.clearTimeout(b.current), C(T);
      },
      [C]
    ), R = m.useCallback(
      (T) => {
        S === T ? window.clearTimeout(b.current) : g.current = window.setTimeout(() => {
          window.clearTimeout(b.current), C(T);
        }, i);
      },
      [S, C, i]
    );
    return m.useEffect(() => () => {
      window.clearTimeout(g.current), window.clearTimeout(b.current), window.clearTimeout(y.current);
    }, []), /* @__PURE__ */ d.jsx(
      CC,
      {
        scope: n,
        isRootMenu: !0,
        value: S,
        dir: h,
        orientation: l,
        rootNavigationMenu: u,
        onTriggerEnter: (T) => {
          window.clearTimeout(g.current), x ? R(T) : _(T);
        },
        onTriggerLeave: () => {
          window.clearTimeout(g.current), P();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: P,
        onItemSelect: (T) => {
          C((z) => z === T ? "" : T);
        },
        onItemDismiss: () => C(""),
        children: /* @__PURE__ */ d.jsx(
          ee.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: h,
            ...f,
            ref: v
          }
        )
      }
    );
  }
);
SC.displayName = io;
var _C = "NavigationMenuSub", uq = m.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, l = zt(_C, n), [c = "", f] = Ve({
      prop: r,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ d.jsx(
      CC,
      {
        scope: n,
        isRootMenu: !1,
        value: c,
        dir: l.dir,
        orientation: i,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (u) => f(u),
        onItemSelect: (u) => f(u),
        onItemDismiss: () => f(""),
        children: /* @__PURE__ */ d.jsx(ee.div, { "data-orientation": i, ...s, ref: t })
      }
    );
  }
);
uq.displayName = _C;
var CC = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: a,
    children: i,
    value: s,
    onItemSelect: l,
    onItemDismiss: c,
    onTriggerEnter: f,
    onTriggerLeave: u,
    onContentEnter: p,
    onContentLeave: v
  } = e, [h, g] = m.useState(null), [b, y] = m.useState(/* @__PURE__ */ new Map()), [x, w] = m.useState(null);
  return /* @__PURE__ */ d.jsx(
    sq,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: s,
      previousValue: oo(s),
      baseId: ze(),
      dir: o,
      orientation: a,
      viewport: h,
      onViewportChange: g,
      indicatorTrack: x,
      onIndicatorTrackChange: w,
      onTriggerEnter: Ie(f),
      onTriggerLeave: Ie(u),
      onContentEnter: Ie(p),
      onContentLeave: Ie(v),
      onItemSelect: Ie(l),
      onItemDismiss: Ie(c),
      onViewportContentChange: m.useCallback((S, C) => {
        y((P) => (P.set(S, C), new Map(P)));
      }, []),
      onViewportContentRemove: m.useCallback((S) => {
        y((C) => C.has(S) ? (C.delete(S), new Map(C)) : C);
      }, []),
      children: /* @__PURE__ */ d.jsx(Up.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(lq, { scope: t, items: b, children: i }) })
    }
  );
}, PC = "NavigationMenuList", EC = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = zt(PC, n), a = /* @__PURE__ */ d.jsx(ee.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ d.jsx(ee.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ d.jsx(Up.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ d.jsx(IC, { asChild: !0, children: a }) : a }) });
  }
);
EC.displayName = PC;
var RC = "NavigationMenuItem", [dq, TC] = Kp(RC), MC = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, a = ze(), i = r || a || "LEGACY_REACT_AUTO_VALUE", s = m.useRef(null), l = m.useRef(null), c = m.useRef(null), f = m.useRef(() => {
    }), u = m.useRef(!1), p = m.useCallback((h = "start") => {
      if (s.current) {
        f.current();
        const g = Kd(s.current);
        g.length && Jp(h === "start" ? g : g.reverse());
      }
    }, []), v = m.useCallback(() => {
      if (s.current) {
        const h = Kd(s.current);
        h.length && (f.current = bq(h));
      }
    }, []);
    return /* @__PURE__ */ d.jsx(
      dq,
      {
        scope: n,
        value: i,
        triggerRef: l,
        contentRef: s,
        focusProxyRef: c,
        wasEscapeCloseRef: u,
        onEntryKeyDown: p,
        onFocusProxyEnter: p,
        onRootContentClose: v,
        onContentFocusOutside: v,
        children: /* @__PURE__ */ d.jsx(ee.li, { ...o, ref: t })
      }
    );
  }
);
MC.displayName = RC;
var Ud = "NavigationMenuTrigger", NC = m.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = zt(Ud, e.__scopeNavigationMenu), i = TC(Ud, e.__scopeNavigationMenu), s = m.useRef(null), l = fe(s, i.triggerRef, t), c = LC(a.baseId, i.value), f = FC(a.baseId, i.value), u = m.useRef(!1), p = m.useRef(!1), v = i.value === a.value;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(Up.ItemSlot, { scope: n, value: i.value, children: /* @__PURE__ */ d.jsx($C, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      ee.button,
      {
        id: c,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Zp(v),
        "aria-expanded": v,
        "aria-controls": f,
        ...o,
        ref: l,
        onPointerEnter: U(e.onPointerEnter, () => {
          p.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: U(
          e.onPointerMove,
          gi(() => {
            r || p.current || i.wasEscapeCloseRef.current || u.current || (a.onTriggerEnter(i.value), u.current = !0);
          })
        ),
        onPointerLeave: U(
          e.onPointerLeave,
          gi(() => {
            r || (a.onTriggerLeave(), u.current = !1);
          })
        ),
        onClick: U(e.onClick, () => {
          a.onItemSelect(i.value), p.current = v;
        }),
        onKeyDown: U(e.onKeyDown, (h) => {
          const b = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          v && h.key === b && (i.onEntryKeyDown(), h.preventDefault());
        })
      }
    ) }) }),
    v && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        tx,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (h) => {
            const g = i.contentRef.current, b = h.relatedTarget, y = b === s.current, x = g == null ? void 0 : g.contains(b);
            (y || !x) && i.onFocusProxyEnter(y ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ d.jsx("span", { "aria-owns": f })
    ] })
  ] });
});
NC.displayName = Ud;
var fq = "NavigationMenuLink", Xb = "navigationMenu.linkSelect", OC = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
    return /* @__PURE__ */ d.jsx($C, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      ee.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...a,
        ref: t,
        onClick: U(
          e.onClick,
          (i) => {
            const s = i.target, l = new CustomEvent(Xb, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Xb, (c) => o == null ? void 0 : o(c), { once: !0 }), Ua(s, l), !l.defaultPrevented && !i.metaKey) {
              const c = new CustomEvent(Ga, {
                bubbles: !0,
                cancelable: !0
              });
              Ua(s, c);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
OC.displayName = fq;
var Yp = "NavigationMenuIndicator", AC = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = zt(Yp, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? of.createPortal(
    /* @__PURE__ */ d.jsx(qe, { present: n || a, children: /* @__PURE__ */ d.jsx(pq, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
AC.displayName = Yp;
var pq = m.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = zt(Yp, n), a = wC(n), [i, s] = m.useState(
    null
  ), [l, c] = m.useState(null), f = o.orientation === "horizontal", u = !!o.value;
  m.useEffect(() => {
    var g;
    const h = (g = a().find((b) => b.value === o.value)) == null ? void 0 : g.ref.current;
    h && s(h);
  }, [a, o.value]);
  const p = () => {
    i && c({
      size: f ? i.offsetWidth : i.offsetHeight,
      offset: f ? i.offsetLeft : i.offsetTop
    });
  };
  return Yd(i, p), Yd(o.indicatorTrack, p), l ? /* @__PURE__ */ d.jsx(
    ee.div,
    {
      "aria-hidden": !0,
      "data-state": u ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...f ? {
          left: 0,
          width: l.size + "px",
          transform: `translateX(${l.offset}px)`
        } : {
          top: 0,
          height: l.size + "px",
          transform: `translateY(${l.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), Gr = "NavigationMenuContent", DC = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = zt(Gr, e.__scopeNavigationMenu), a = TC(Gr, e.__scopeNavigationMenu), i = fe(a.contentRef, t), s = a.value === o.value, l = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ d.jsx(mq, { forceMount: n, ...l, ref: i }) : /* @__PURE__ */ d.jsx(qe, { present: n || s, children: /* @__PURE__ */ d.jsx(
    jC,
    {
      "data-state": Zp(s),
      ...l,
      ref: i,
      onPointerEnter: U(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: U(
        e.onPointerLeave,
        gi(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
DC.displayName = Gr;
var mq = m.forwardRef((e, t) => {
  const n = zt(Gr, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return Ye(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), Ye(() => () => o(e.value), [e.value, o]), null;
}), Ga = "navigationMenu.rootContentDismiss", jC = m.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: l,
    ...c
  } = e, f = zt(Gr, n), u = m.useRef(null), p = fe(u, t), v = LC(f.baseId, r), h = FC(f.baseId, r), g = wC(n), b = m.useRef(null), { onItemDismiss: y } = f;
  m.useEffect(() => {
    const w = u.current;
    if (f.isRootMenu && w) {
      const S = () => {
        var C;
        y(), s(), w.contains(document.activeElement) && ((C = o.current) == null || C.focus());
      };
      return w.addEventListener(Ga, S), () => w.removeEventListener(Ga, S);
    }
  }, [f.isRootMenu, e.value, o, y, s]);
  const x = m.useMemo(() => {
    const S = g().map((z) => z.value);
    f.dir === "rtl" && S.reverse();
    const C = S.indexOf(f.value), P = S.indexOf(f.previousValue), _ = r === f.value, R = P === S.indexOf(r);
    if (!_ && !R) return b.current;
    const T = (() => {
      if (C !== P) {
        if (_ && P !== -1) return C > P ? "from-end" : "from-start";
        if (R && C !== -1) return C > P ? "to-start" : "to-end";
      }
      return null;
    })();
    return b.current = T, T;
  }, [f.previousValue, f.value, f.dir, g, r]);
  return /* @__PURE__ */ d.jsx(IC, { asChild: !0, children: /* @__PURE__ */ d.jsx(
    Fn,
    {
      id: h,
      "aria-labelledby": v,
      "data-motion": x,
      "data-orientation": f.orientation,
      ...c,
      ref: p,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var S;
        const w = new Event(Ga, {
          bubbles: !0,
          cancelable: !0
        });
        (S = u.current) == null || S.dispatchEvent(w);
      },
      onFocusOutside: U(e.onFocusOutside, (w) => {
        var C;
        l();
        const S = w.target;
        (C = f.rootNavigationMenu) != null && C.contains(S) && w.preventDefault();
      }),
      onPointerDownOutside: U(e.onPointerDownOutside, (w) => {
        var _;
        const S = w.target, C = g().some((R) => {
          var T;
          return (T = R.ref.current) == null ? void 0 : T.contains(S);
        }), P = f.isRootMenu && ((_ = f.viewport) == null ? void 0 : _.contains(S));
        (C || P || !f.isRootMenu) && w.preventDefault();
      }),
      onKeyDown: U(e.onKeyDown, (w) => {
        var P;
        const S = w.altKey || w.ctrlKey || w.metaKey;
        if (w.key === "Tab" && !S) {
          const _ = Kd(w.currentTarget), R = document.activeElement, T = _.findIndex((B) => B === R), j = w.shiftKey ? _.slice(0, T).reverse() : _.slice(T + 1, _.length);
          Jp(j) ? w.preventDefault() : (P = a.current) == null || P.focus();
        }
      }),
      onEscapeKeyDown: U(e.onEscapeKeyDown, (w) => {
        i.current = !0;
      })
    }
  ) });
}), Xp = "NavigationMenuViewport", kC = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, a = !!zt(Xp, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ d.jsx(qe, { present: n || a, children: /* @__PURE__ */ d.jsx(hq, { ...r, ref: t }) });
});
kC.displayName = Xp;
var hq = m.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = zt(Xp, n), i = fe(t, a.onViewportChange), s = cq(
    Gr,
    e.__scopeNavigationMenu
  ), [l, c] = m.useState(null), [f, u] = m.useState(null), p = l ? (l == null ? void 0 : l.width) + "px" : void 0, v = l ? (l == null ? void 0 : l.height) + "px" : void 0, h = !!a.value, g = h ? a.value : a.previousValue;
  return Yd(f, () => {
    f && c({ width: f.offsetWidth, height: f.offsetHeight });
  }), /* @__PURE__ */ d.jsx(
    ee.div,
    {
      "data-state": Zp(h),
      "data-orientation": a.orientation,
      ...o,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !h && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": p,
        "--radix-navigation-menu-viewport-height": v,
        ...o.style
      },
      onPointerEnter: U(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: U(e.onPointerLeave, gi(a.onContentLeave)),
      children: Array.from(s.items).map(([y, { ref: x, forceMount: w, ...S }]) => {
        const C = g === y;
        return /* @__PURE__ */ d.jsx(qe, { present: w || C, children: /* @__PURE__ */ d.jsx(
          jC,
          {
            ...S,
            ref: un(x, (P) => {
              C && P && u(P);
            })
          }
        ) }, y);
      })
    }
  );
}), vq = "FocusGroup", IC = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = zt(vq, n);
    return /* @__PURE__ */ d.jsx(Gd.Provider, { scope: n, children: /* @__PURE__ */ d.jsx(Gd.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(ee.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Jb = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], gq = "FocusGroupItem", $C = m.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = aq(n), a = zt(gq, n);
    return /* @__PURE__ */ d.jsx(Gd.ItemSlot, { scope: n, children: /* @__PURE__ */ d.jsx(
      ee.button,
      {
        ...r,
        ref: t,
        onKeyDown: U(e.onKeyDown, (i) => {
          if (["Home", "End", ...Jb].includes(i.key)) {
            let l = o().map((u) => u.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && l.reverse(), Jb.includes(i.key)) {
              const u = l.indexOf(i.currentTarget);
              l = l.slice(u + 1);
            }
            setTimeout(() => Jp(l)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function Kd(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Jp(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function bq(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Yd(e, t) {
  const n = Ie(t);
  Ye(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
function Zp(e) {
  return e ? "open" : "closed";
}
function LC(e, t) {
  return `${e}-trigger-${t}`;
}
function FC(e, t) {
  return `${e}-content-${t}`;
}
function gi(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var yq = SC, xq = EC, wq = MC, Sq = NC, _q = OC, Cq = AC, Pq = DC, Eq = kC;
function kG({
  className: e,
  children: t,
  viewport: n = !0,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    yq,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      className: O(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ d.jsx(Tq, {})
      ]
    }
  );
}
function IG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    xq,
    {
      "data-slot": "navigation-menu-list",
      className: O(
        "group flex flex-1 list-none items-center justify-center gap-1",
        e
      ),
      ...t
    }
  );
}
function $G({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    wq,
    {
      "data-slot": "navigation-menu-item",
      className: O("relative", e),
      ...t
    }
  );
}
const Rq = fr(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function LG({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(
    Sq,
    {
      "data-slot": "navigation-menu-trigger",
      className: O(Rq(), "group", e),
      ...n,
      children: [
        t,
        " ",
        /* @__PURE__ */ d.jsx(
          Wo,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function FG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Pq,
    {
      "data-slot": "navigation-menu-content",
      className: O(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function Tq({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: O(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ d.jsx(
        Eq,
        {
          "data-slot": "navigation-menu-viewport",
          className: O(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            e
          ),
          ...t
        }
      )
    }
  );
}
function zG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    _q,
    {
      "data-slot": "navigation-menu-link",
      className: O(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function BG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Cq,
    {
      "data-slot": "navigation-menu-indicator",
      className: O(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function qG({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: O("mx-auto flex w-full justify-center", e),
      ...t
    }
  );
}
function HG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "ul",
    {
      "data-slot": "pagination-content",
      className: O("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function WG({ ...e }) {
  return /* @__PURE__ */ d.jsx("li", { "data-slot": "pagination-item", ...e });
}
function zC({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: O(
        Fr({
          variant: t ? "outline" : "ghost",
          size: n
        }),
        e
      ),
      ...r
    }
  );
}
function VG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsxs(
    zC,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: O("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ d.jsx(by, {}),
        /* @__PURE__ */ d.jsx("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function GG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsxs(
    zC,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: O("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ d.jsx(Jr, {})
      ]
    }
  );
}
function UG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsxs(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: O("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ d.jsx(yy, { className: "size-4" }),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
var Qp = "Popover", [BC] = Be(Qp, [
  hn
]), ba = hn(), [Mq, Vn] = BC(Qp), qC = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = ba(t), l = m.useRef(null), [c, f] = m.useState(!1), [u = !1, p] = Ve({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ d.jsx(no, { ...s, children: /* @__PURE__ */ d.jsx(
    Mq,
    {
      scope: t,
      contentId: ze(),
      triggerRef: l,
      open: u,
      onOpenChange: p,
      onOpenToggle: m.useCallback(() => p((v) => !v), [p]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: m.useCallback(() => f(!0), []),
      onCustomAnchorRemove: m.useCallback(() => f(!1), []),
      modal: i,
      children: n
    }
  ) });
};
qC.displayName = Qp;
var HC = "PopoverAnchor", WC = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Vn(HC, n), a = ba(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return m.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ d.jsx(ro, { ...a, ...r, ref: t });
  }
);
WC.displayName = HC;
var VC = "PopoverTrigger", GC = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Vn(VC, n), a = ba(n), i = fe(t, o.triggerRef), s = /* @__PURE__ */ d.jsx(
      ee.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": JC(o.open),
        ...r,
        ref: i,
        onClick: U(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ d.jsx(ro, { asChild: !0, ...a, children: s });
  }
);
GC.displayName = VC;
var em = "PopoverPortal", [Nq, Oq] = BC(em, {
  forceMount: void 0
}), UC = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Vn(em, t);
  return /* @__PURE__ */ d.jsx(Nq, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(qe, { present: n || a.open, children: /* @__PURE__ */ d.jsx(pr, { asChild: !0, container: o, children: r }) }) });
};
UC.displayName = em;
var Ur = "PopoverContent", KC = m.forwardRef(
  (e, t) => {
    const n = Oq(Ur, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Vn(Ur, e.__scopePopover);
    return /* @__PURE__ */ d.jsx(qe, { present: r || a.open, children: a.modal ? /* @__PURE__ */ d.jsx(Aq, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(Dq, { ...o, ref: t }) });
  }
);
KC.displayName = Ur;
var Aq = m.forwardRef(
  (e, t) => {
    const n = Vn(Ur, e.__scopePopover), r = m.useRef(null), o = fe(t, r), a = m.useRef(!1);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return Ai(i);
    }, []), /* @__PURE__ */ d.jsx(Xo, { as: ut, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
      YC,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: U(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), a.current || (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: U(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, c = s.button === 2 || l;
            a.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: U(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Dq = m.forwardRef(
  (e, t) => {
    const n = Vn(Ur, e.__scopePopover), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      YC,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), YC = m.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: f,
      ...u
    } = e, p = Vn(Ur, n), v = ba(n);
    return Ri(), /* @__PURE__ */ d.jsx(
      Vo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ d.jsx(
          Fn,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: f,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ d.jsx(
              Ko,
              {
                "data-state": JC(p.open),
                role: "dialog",
                id: p.contentId,
                ...v,
                ...u,
                ref: t,
                style: {
                  ...u.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), XC = "PopoverClose", jq = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Vn(XC, n);
    return /* @__PURE__ */ d.jsx(
      ee.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: U(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
jq.displayName = XC;
var kq = "PopoverArrow", Iq = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ba(n);
    return /* @__PURE__ */ d.jsx(Yo, { ...o, ...r, ref: t });
  }
);
Iq.displayName = kq;
function JC(e) {
  return e ? "open" : "closed";
}
var $q = qC, Lq = WC, Fq = GC, zq = UC, Bq = KC;
function KG({
  ...e
}) {
  return /* @__PURE__ */ d.jsx($q, { "data-slot": "popover", ...e });
}
function YG({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Fq, { "data-slot": "popover-trigger", ...e });
}
function XG({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(zq, { children: /* @__PURE__ */ d.jsx(
    Bq,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: O(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
function JG({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Lq, { "data-slot": "popover-anchor", ...e });
}
var tm = "Progress", nm = 100, [qq] = Be(tm), [Hq, Wq] = qq(tm), ZC = m.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = Vq,
      ...i
    } = e;
    (o || o === 0) && !Zb(o) && console.error(Gq(`${o}`, "Progress"));
    const s = Zb(o) ? o : nm;
    r !== null && !Qb(r, s) && console.error(Uq(`${r}`, "Progress"));
    const l = Qb(r, s) ? r : null, c = bi(l) ? a(l, s) : void 0;
    return /* @__PURE__ */ d.jsx(Hq, { scope: n, value: l, max: s, children: /* @__PURE__ */ d.jsx(
      ee.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": bi(l) ? l : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": t1(l, s),
        "data-value": l ?? void 0,
        "data-max": s,
        ...i,
        ref: t
      }
    ) });
  }
);
ZC.displayName = tm;
var QC = "ProgressIndicator", e1 = m.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = Wq(QC, n);
    return /* @__PURE__ */ d.jsx(
      ee.div,
      {
        "data-state": t1(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
e1.displayName = QC;
function Vq(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function t1(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function bi(e) {
  return typeof e == "number";
}
function Zb(e) {
  return bi(e) && !isNaN(e) && e > 0;
}
function Qb(e, t) {
  return bi(e) && !isNaN(e) && e <= t && e >= 0;
}
function Gq(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${nm}\`.`;
}
function Uq(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${nm} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Kq = ZC, Yq = e1;
function ZG({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    Kq,
    {
      "data-slot": "progress",
      className: O(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...n,
      children: /* @__PURE__ */ d.jsx(
        Yq,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
var rm = "Radio", [Xq, n1] = Be(rm), [Jq, Zq] = Xq(rm), r1 = m.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: i,
      value: s = "on",
      onCheck: l,
      form: c,
      ...f
    } = e, [u, p] = m.useState(null), v = fe(t, (b) => p(b)), h = m.useRef(!1), g = u ? c || !!u.closest("form") : !0;
    return /* @__PURE__ */ d.jsxs(Jq, { scope: n, checked: o, disabled: i, children: [
      /* @__PURE__ */ d.jsx(
        ee.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": i1(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...f,
          ref: v,
          onClick: U(e.onClick, (b) => {
            o || l == null || l(), g && (h.current = b.isPropagationStopped(), h.current || b.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ d.jsx(
        Qq,
        {
          control: u,
          bubbles: !h.current,
          name: r,
          value: s,
          checked: o,
          required: a,
          disabled: i,
          form: c,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
r1.displayName = rm;
var o1 = "RadioIndicator", a1 = m.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = Zq(o1, n);
    return /* @__PURE__ */ d.jsx(qe, { present: r || a.checked, children: /* @__PURE__ */ d.jsx(
      ee.span,
      {
        "data-state": i1(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
a1.displayName = o1;
var Qq = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = m.useRef(null), i = oo(n), s = Uo(t);
  return m.useEffect(() => {
    const l = a.current, c = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (i !== n && u) {
      const p = new Event("click", { bubbles: r });
      u.call(l, n), l.dispatchEvent(p);
    }
  }, [i, n, r]), /* @__PURE__ */ d.jsx(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...s,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function i1(e) {
  return e ? "checked" : "unchecked";
}
var eH = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], om = "RadioGroup", [tH] = Be(om, [
  gn,
  n1
]), s1 = gn(), l1 = n1(), [nH, rH] = tH(om), c1 = m.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: i = !1,
      disabled: s = !1,
      orientation: l,
      dir: c,
      loop: f = !0,
      onValueChange: u,
      ...p
    } = e, v = s1(n), h = Zt(c), [g, b] = Ve({
      prop: a,
      defaultProp: o,
      onChange: u
    });
    return /* @__PURE__ */ d.jsx(
      nH,
      {
        scope: n,
        name: r,
        required: i,
        disabled: s,
        value: g,
        onValueChange: b,
        children: /* @__PURE__ */ d.jsx(
          ua,
          {
            asChild: !0,
            ...v,
            orientation: l,
            dir: h,
            loop: f,
            children: /* @__PURE__ */ d.jsx(
              ee.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": l,
                "data-disabled": s ? "" : void 0,
                dir: h,
                ...p,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
c1.displayName = om;
var u1 = "RadioGroupItem", d1 = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = rH(u1, n), i = a.disabled || r, s = s1(n), l = l1(n), c = m.useRef(null), f = fe(t, c), u = a.value === o.value, p = m.useRef(!1);
    return m.useEffect(() => {
      const v = (g) => {
        eH.includes(g.key) && (p.current = !0);
      }, h = () => p.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", h), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", h);
      };
    }, []), /* @__PURE__ */ d.jsx(
      da,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: u,
        children: /* @__PURE__ */ d.jsx(
          r1,
          {
            disabled: i,
            required: a.required,
            checked: u,
            ...l,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: U((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: U(o.onFocus, () => {
              var v;
              p.current && ((v = c.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
d1.displayName = u1;
var oH = "RadioGroupIndicator", f1 = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = l1(n);
    return /* @__PURE__ */ d.jsx(a1, { ...o, ...r, ref: t });
  }
);
f1.displayName = oH;
var aH = c1, iH = d1, sH = f1;
function QG({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    aH,
    {
      "data-slot": "radio-group",
      className: O("grid gap-3", e),
      ...t
    }
  );
}
function eU({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    iH,
    {
      "data-slot": "radio-group-item",
      className: O(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(
        sH,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ d.jsx(Ei, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
const {
  createElement: Kr,
  createContext: lH,
  forwardRef: p1,
  useCallback: xt,
  useContext: m1,
  useEffect: er,
  useImperativeHandle: h1,
  useLayoutEffect: cH,
  useMemo: uH,
  useRef: _t,
  useState: Ir
} = m, ey = m[`useId${Math.random()}`.slice(0, 5)], dH = cH, cs = lH(null);
cs.displayName = "PanelGroupContext";
const tr = dH, fH = typeof ey == "function" ? ey : () => null;
let pH = 0;
function am(e = null) {
  const t = fH(), n = _t(e || t || null);
  return n.current === null && (n.current = "" + pH++), e ?? n.current;
}
function v1({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: o,
  forwardedRef: a,
  id: i,
  maxSize: s,
  minSize: l,
  onCollapse: c,
  onExpand: f,
  onResize: u,
  order: p,
  style: v,
  tagName: h = "div",
  ...g
}) {
  const b = m1(cs);
  if (b === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: y,
    expandPanel: x,
    getPanelSize: w,
    getPanelStyle: S,
    groupId: C,
    isPanelCollapsed: P,
    reevaluatePanelConstraints: _,
    registerPanel: R,
    resizePanel: T,
    unregisterPanel: z
  } = b, j = am(i), B = _t({
    callbacks: {
      onCollapse: c,
      onExpand: f,
      onResize: u
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: o,
      maxSize: s,
      minSize: l
    },
    id: j,
    idIsFromProps: i !== void 0,
    order: p
  });
  _t({
    didLogMissingDefaultSizeWarning: !1
  }), tr(() => {
    const {
      callbacks: H,
      constraints: q
    } = B.current, $ = {
      ...q
    };
    B.current.id = j, B.current.idIsFromProps = i !== void 0, B.current.order = p, H.onCollapse = c, H.onExpand = f, H.onResize = u, q.collapsedSize = n, q.collapsible = r, q.defaultSize = o, q.maxSize = s, q.minSize = l, ($.collapsedSize !== q.collapsedSize || $.collapsible !== q.collapsible || $.maxSize !== q.maxSize || $.minSize !== q.minSize) && _(B.current, $);
  }), tr(() => {
    const H = B.current;
    return R(H), () => {
      z(H);
    };
  }, [p, j, R, z]), h1(a, () => ({
    collapse: () => {
      y(B.current);
    },
    expand: (H) => {
      x(B.current, H);
    },
    getId() {
      return j;
    },
    getSize() {
      return w(B.current);
    },
    isCollapsed() {
      return P(B.current);
    },
    isExpanded() {
      return !P(B.current);
    },
    resize: (H) => {
      T(B.current, H);
    }
  }), [y, x, w, P, j, T]);
  const A = S(B.current, o);
  return Kr(h, {
    ...g,
    children: e,
    className: t,
    id: i,
    style: {
      ...A,
      ...v
    },
    // CSS selectors
    "data-panel": "",
    "data-panel-collapsible": r || void 0,
    "data-panel-group-id": C,
    "data-panel-id": j,
    "data-panel-size": parseFloat("" + A.flexGrow).toFixed(1)
  });
}
const g1 = p1((e, t) => Kr(v1, {
  ...e,
  forwardedRef: t
}));
v1.displayName = "Panel";
g1.displayName = "forwardRef(Panel)";
let Xd = null, Qn = null;
function mH(e, t) {
  if (t) {
    const n = (t & S1) !== 0, r = (t & _1) !== 0, o = (t & C1) !== 0, a = (t & P1) !== 0;
    if (n)
      return o ? "se-resize" : a ? "ne-resize" : "e-resize";
    if (r)
      return o ? "sw-resize" : a ? "nw-resize" : "w-resize";
    if (o)
      return "s-resize";
    if (a)
      return "n-resize";
  }
  switch (e) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function hH() {
  Qn !== null && (document.head.removeChild(Qn), Xd = null, Qn = null);
}
function Qu(e, t) {
  const n = mH(e, t);
  Xd !== n && (Xd = n, Qn === null && (Qn = document.createElement("style"), document.head.appendChild(Qn)), Qn.innerHTML = `*{cursor: ${n}!important;}`);
}
function b1(e) {
  return e.type === "keydown";
}
function y1(e) {
  return e.type.startsWith("pointer");
}
function x1(e) {
  return e.type.startsWith("mouse");
}
function us(e) {
  if (y1(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (x1(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function vH() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function gH(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function bH(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: ry(e),
    b: ry(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  we(r, "Stacking order can only be calculated for elements with a common ancestor");
  const o = {
    a: ny(ty(n.a)),
    b: ny(ty(n.b))
  };
  if (o.a === o.b) {
    const a = r.childNodes, i = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let s = a.length;
    for (; s--; ) {
      const l = a[s];
      if (l === i.a) return 1;
      if (l === i.b) return -1;
    }
  }
  return Math.sign(o.a - o.b);
}
const yH = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function xH(e) {
  var t;
  const n = getComputedStyle((t = w1(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function wH(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || xH(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || yH.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function ty(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (we(n, "Missing node"), wH(n)) return n;
  }
  return null;
}
function ny(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function ry(e) {
  const t = [];
  for (; e; )
    t.push(e), e = w1(e);
  return t;
}
function w1(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const S1 = 1, _1 = 2, C1 = 4, P1 = 8, SH = vH() === "coarse";
let Ut = [], $r = !1, Dn = /* @__PURE__ */ new Map(), ds = /* @__PURE__ */ new Map();
const qo = /* @__PURE__ */ new Set();
function _H(e, t, n, r, o) {
  var a;
  const {
    ownerDocument: i
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: o
  }, l = (a = Dn.get(i)) !== null && a !== void 0 ? a : 0;
  return Dn.set(i, l + 1), qo.add(s), yi(), function() {
    var f;
    ds.delete(e), qo.delete(s);
    const u = (f = Dn.get(i)) !== null && f !== void 0 ? f : 1;
    if (Dn.set(i, u - 1), yi(), u === 1 && Dn.delete(i), Ut.includes(s)) {
      const p = Ut.indexOf(s);
      p >= 0 && Ut.splice(p, 1), sm(), o("up", !0, null);
    }
  };
}
function oy(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = us(e);
  $r = !0, im({
    target: t,
    x: n,
    y: r
  }), yi(), Ut.length > 0 && (xi("down", e), e.preventDefault(), e.stopPropagation());
}
function xo(e) {
  const {
    x: t,
    y: n
  } = us(e);
  if ($r && e.buttons === 0 && ($r = !1, xi("up", e)), !$r) {
    const {
      target: r
    } = e;
    im({
      target: r,
      x: t,
      y: n
    });
  }
  xi("move", e), sm(), Ut.length > 0 && e.preventDefault();
}
function Rr(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = us(e);
  ds.clear(), $r = !1, Ut.length > 0 && e.preventDefault(), xi("up", e), im({
    target: t,
    x: n,
    y: r
  }), sm(), yi();
}
function im({
  target: e,
  x: t,
  y: n
}) {
  Ut.splice(0);
  let r = null;
  (e instanceof HTMLElement || e instanceof SVGElement) && (r = e), qo.forEach((o) => {
    const {
      element: a,
      hitAreaMargins: i
    } = o, s = a.getBoundingClientRect(), {
      bottom: l,
      left: c,
      right: f,
      top: u
    } = s, p = SH ? i.coarse : i.fine;
    if (t >= c - p && t <= f + p && n >= u - p && n <= l + p) {
      if (r !== null && document.contains(r) && a !== r && !a.contains(r) && !r.contains(a) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      bH(r, a) > 0) {
        let h = r, g = !1;
        for (; h && !h.contains(a); ) {
          if (gH(h.getBoundingClientRect(), s)) {
            g = !0;
            break;
          }
          h = h.parentElement;
        }
        if (g)
          return;
      }
      Ut.push(o);
    }
  });
}
function ed(e, t) {
  ds.set(e, t);
}
function sm() {
  let e = !1, t = !1;
  Ut.forEach((r) => {
    const {
      direction: o
    } = r;
    o === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  ds.forEach((r) => {
    n |= r;
  }), e && t ? Qu("intersection", n) : e ? Qu("horizontal", n) : t ? Qu("vertical", n) : hH();
}
function yi() {
  Dn.forEach((e, t) => {
    const {
      body: n
    } = t;
    n.removeEventListener("contextmenu", Rr), n.removeEventListener("pointerdown", oy), n.removeEventListener("pointerleave", xo), n.removeEventListener("pointermove", xo);
  }), window.removeEventListener("pointerup", Rr), window.removeEventListener("pointercancel", Rr), qo.size > 0 && ($r ? (Ut.length > 0 && Dn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("contextmenu", Rr), n.addEventListener("pointerleave", xo), n.addEventListener("pointermove", xo));
  }), window.addEventListener("pointerup", Rr), window.addEventListener("pointercancel", Rr)) : Dn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("pointerdown", oy, {
      capture: !0
    }), n.addEventListener("pointermove", xo));
  }));
}
function xi(e, t) {
  qo.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, o = Ut.includes(n);
    r(e, o, t);
  });
}
function CH() {
  const [e, t] = Ir(0);
  return xt(() => t((n) => n + 1), []);
}
function we(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
const lm = 10;
function lr(e, t, n = lm) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function _n(e, t, n = lm) {
  return lr(e, t, n) === 0;
}
function Rt(e, t, n) {
  return lr(e, t, n) === 0;
}
function PH(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const o = e[r], a = t[r];
    if (!Rt(o, a, n))
      return !1;
  }
  return !0;
}
function Ar({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  we(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: o = 0,
    collapsible: a,
    maxSize: i = 100,
    minSize: s = 0
  } = r;
  if (lr(n, s) < 0)
    if (a) {
      const l = (o + s) / 2;
      lr(n, l) < 0 ? n = o : n = s;
    } else
      n = s;
  return n = Math.min(i, n), n = parseFloat(n.toFixed(lm)), n;
}
function Eo({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: o,
  trigger: a
}) {
  if (Rt(e, 0))
    return t;
  const i = [...t], [s, l] = r;
  we(s != null, "Invalid first pivot index"), we(l != null, "Invalid second pivot index");
  let c = 0;
  if (a === "keyboard") {
    {
      const u = e < 0 ? l : s, p = n[u];
      we(p, `Panel constraints not found for index ${u}`);
      const {
        collapsedSize: v = 0,
        collapsible: h,
        minSize: g = 0
      } = p;
      if (h) {
        const b = t[u];
        if (we(b != null, `Previous layout not found for panel index ${u}`), Rt(b, v)) {
          const y = g - b;
          lr(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
    {
      const u = e < 0 ? s : l, p = n[u];
      we(p, `No panel constraints found for index ${u}`);
      const {
        collapsedSize: v = 0,
        collapsible: h,
        minSize: g = 0
      } = p;
      if (h) {
        const b = t[u];
        if (we(b != null, `Previous layout not found for panel index ${u}`), Rt(b, g)) {
          const y = b - v;
          lr(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
  }
  {
    const u = e < 0 ? 1 : -1;
    let p = e < 0 ? l : s, v = 0;
    for (; ; ) {
      const g = t[p];
      we(g != null, `Previous layout not found for panel index ${p}`);
      const y = Ar({
        panelConstraints: n,
        panelIndex: p,
        size: 100
      }) - g;
      if (v += y, p += u, p < 0 || p >= n.length)
        break;
    }
    const h = Math.min(Math.abs(e), Math.abs(v));
    e = e < 0 ? 0 - h : h;
  }
  {
    let p = e < 0 ? s : l;
    for (; p >= 0 && p < n.length; ) {
      const v = Math.abs(e) - Math.abs(c), h = t[p];
      we(h != null, `Previous layout not found for panel index ${p}`);
      const g = h - v, b = Ar({
        panelConstraints: n,
        panelIndex: p,
        size: g
      });
      if (!Rt(h, b) && (c += h - b, i[p] = b, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? p-- : p++;
    }
  }
  if (PH(o, i))
    return o;
  {
    const u = e < 0 ? l : s, p = t[u];
    we(p != null, `Previous layout not found for panel index ${u}`);
    const v = p + c, h = Ar({
      panelConstraints: n,
      panelIndex: u,
      size: v
    });
    if (i[u] = h, !Rt(h, v)) {
      let g = v - h, y = e < 0 ? l : s;
      for (; y >= 0 && y < n.length; ) {
        const x = i[y];
        we(x != null, `Previous layout not found for panel index ${y}`);
        const w = x + g, S = Ar({
          panelConstraints: n,
          panelIndex: y,
          size: w
        });
        if (Rt(x, S) || (g -= S - x, i[y] = S), Rt(g, 0))
          break;
        e > 0 ? y-- : y++;
      }
    }
  }
  const f = i.reduce((u, p) => p + u, 0);
  return Rt(f, 100) ? i : o;
}
function EH({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, o = 100, a = 0, i = 0;
  const s = n[0];
  we(s != null, "No pivot index found"), t.forEach((u, p) => {
    const {
      constraints: v
    } = u, {
      maxSize: h = 100,
      minSize: g = 0
    } = v;
    p === s ? (r = g, o = h) : (a += g, i += h);
  });
  const l = Math.min(o, 100 - a), c = Math.max(r, 100 - i), f = e[s];
  return {
    valueMax: l,
    valueMin: c,
    valueNow: f
  };
}
function Ho(e, t = document) {
  return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`));
}
function E1(e, t, n = document) {
  const o = Ho(e, n).findIndex((a) => a.getAttribute("data-panel-resize-handle-id") === t);
  return o ?? null;
}
function R1(e, t, n) {
  const r = E1(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function T1(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function fs(e, t = document) {
  const n = t.querySelector(`[data-panel-resize-handle-id="${e}"]`);
  return n || null;
}
function RH(e, t, n, r = document) {
  var o, a, i, s;
  const l = fs(t, r), c = Ho(e, r), f = l ? c.indexOf(l) : -1, u = (o = (a = n[f]) === null || a === void 0 ? void 0 : a.id) !== null && o !== void 0 ? o : null, p = (i = (s = n[f + 1]) === null || s === void 0 ? void 0 : s.id) !== null && i !== void 0 ? i : null;
  return [u, p];
}
function TH({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: o,
  panelGroupElement: a,
  setLayout: i
}) {
  _t({
    didWarnAboutMissingResizeHandle: !1
  }), tr(() => {
    if (!a)
      return;
    const s = Ho(n, a);
    for (let l = 0; l < o.length - 1; l++) {
      const {
        valueMax: c,
        valueMin: f,
        valueNow: u
      } = EH({
        layout: r,
        panelsArray: o,
        pivotIndices: [l, l + 1]
      }), p = s[l];
      if (p != null) {
        const v = o[l];
        we(v, `No panel data found for index "${l}"`), p.setAttribute("aria-controls", v.id), p.setAttribute("aria-valuemax", "" + Math.round(c)), p.setAttribute("aria-valuemin", "" + Math.round(f)), p.setAttribute("aria-valuenow", u != null ? "" + Math.round(u) : "");
      }
    }
    return () => {
      s.forEach((l, c) => {
        l.removeAttribute("aria-controls"), l.removeAttribute("aria-valuemax"), l.removeAttribute("aria-valuemin"), l.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, o, a]), er(() => {
    if (!a)
      return;
    const s = t.current;
    we(s, "Eager values not found");
    const {
      panelDataArray: l
    } = s, c = T1(n, a);
    we(c != null, `No group found for id "${n}"`);
    const f = Ho(n, a);
    we(f, `No resize handles found for group id "${n}"`);
    const u = f.map((p) => {
      const v = p.getAttribute("data-panel-resize-handle-id");
      we(v, "Resize handle element has no handle id attribute");
      const [h, g] = RH(n, v, l, a);
      if (h == null || g == null)
        return () => {
        };
      const b = (y) => {
        if (!y.defaultPrevented)
          switch (y.key) {
            case "Enter": {
              y.preventDefault();
              const x = l.findIndex((w) => w.id === h);
              if (x >= 0) {
                const w = l[x];
                we(w, `No panel data found for index ${x}`);
                const S = r[x], {
                  collapsedSize: C = 0,
                  collapsible: P,
                  minSize: _ = 0
                } = w.constraints;
                if (S != null && P) {
                  const R = Eo({
                    delta: Rt(S, C) ? _ - C : C - S,
                    initialLayout: r,
                    panelConstraints: l.map((T) => T.constraints),
                    pivotIndices: R1(n, v, a),
                    prevLayout: r,
                    trigger: "keyboard"
                  });
                  r !== R && i(R);
                }
              }
              break;
            }
          }
      };
      return p.addEventListener("keydown", b), () => {
        p.removeEventListener("keydown", b);
      };
    });
    return () => {
      u.forEach((p) => p());
    };
  }, [a, e, t, n, r, o, i]);
}
function ay(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function M1(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: o
  } = us(t);
  return n ? r : o;
}
function MH(e, t, n, r, o) {
  const a = n === "horizontal", i = fs(t, o);
  we(i, `No resize handle element found for id "${t}"`);
  const s = i.getAttribute("data-panel-group-id");
  we(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: l
  } = r;
  const c = M1(n, e), f = T1(s, o);
  we(f, `No group element found for id "${s}"`);
  const u = f.getBoundingClientRect(), p = a ? u.width : u.height;
  return (c - l) / p * 100;
}
function NH(e, t, n, r, o, a) {
  if (b1(e)) {
    const i = n === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : o != null ? s = o : s = 10;
    let l = 0;
    switch (e.key) {
      case "ArrowDown":
        l = i ? 0 : s;
        break;
      case "ArrowLeft":
        l = i ? -s : 0;
        break;
      case "ArrowRight":
        l = i ? s : 0;
        break;
      case "ArrowUp":
        l = i ? 0 : -s;
        break;
      case "End":
        l = 100;
        break;
      case "Home":
        l = -100;
        break;
    }
    return l;
  } else
    return r == null ? 0 : MH(e, t, n, r, a);
}
function OH({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((a) => a.constraints);
  let r = 0, o = 100;
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    we(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    s != null && (r++, t[a] = s, o -= s);
  }
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    we(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    if (s != null)
      continue;
    const l = e.length - r, c = o / l;
    r++, t[a] = c, o -= c;
  }
  return t;
}
function Tr(e, t, n) {
  t.forEach((r, o) => {
    const a = e[o];
    we(a, `Panel data not found for index ${o}`);
    const {
      callbacks: i,
      constraints: s,
      id: l
    } = a, {
      collapsedSize: c = 0,
      collapsible: f
    } = s, u = n[l];
    if (u == null || r !== u) {
      n[l] = r;
      const {
        onCollapse: p,
        onExpand: v,
        onResize: h
      } = i;
      h && h(r, u), f && (p || v) && (v && (u == null || _n(u, c)) && !_n(r, c) && v(), p && (u == null || !_n(u, c)) && _n(r, c) && p());
    }
  });
}
function Fa(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function AH({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: r,
  panelIndex: o,
  precision: a = 3
}) {
  const i = n[o];
  let s;
  return i == null ? s = e != null ? e.toPrecision(a) : "1" : r.length === 1 ? s = "1" : s = i.toPrecision(a), {
    flexBasis: 0,
    flexGrow: s,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function DH(e, t = 10) {
  let n = null;
  return (...o) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...o);
    }, t);
  };
}
function iy(e) {
  try {
    if (typeof localStorage < "u")
      e.getItem = (t) => localStorage.getItem(t), e.setItem = (t, n) => {
        localStorage.setItem(t, n);
      };
    else
      throw new Error("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), e.getItem = () => null, e.setItem = () => {
    };
  }
}
function N1(e) {
  return `react-resizable-panels:${e}`;
}
function O1(e) {
  return e.map((t) => {
    const {
      constraints: n,
      id: r,
      idIsFromProps: o,
      order: a
    } = t;
    return o ? r : a ? `${a}:${JSON.stringify(n)}` : JSON.stringify(n);
  }).sort((t, n) => t.localeCompare(n)).join(",");
}
function A1(e, t) {
  try {
    const n = N1(e), r = t.getItem(n);
    if (r) {
      const o = JSON.parse(r);
      if (typeof o == "object" && o != null)
        return o;
    }
  } catch {
  }
  return null;
}
function jH(e, t, n) {
  var r, o;
  const a = (r = A1(e, n)) !== null && r !== void 0 ? r : {}, i = O1(t);
  return (o = a[i]) !== null && o !== void 0 ? o : null;
}
function kH(e, t, n, r, o) {
  var a;
  const i = N1(e), s = O1(t), l = (a = A1(e, o)) !== null && a !== void 0 ? a : {};
  l[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    o.setItem(i, JSON.stringify(l));
  } catch (c) {
    console.error(c);
  }
}
function sy({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((a, i) => a + i, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((a) => `${a}%`).join(", ")}`);
  if (!Rt(r, 100) && n.length > 0)
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      we(i != null, `No layout data found for index ${a}`);
      const s = 100 / r * i;
      n[a] = s;
    }
  let o = 0;
  for (let a = 0; a < t.length; a++) {
    const i = n[a];
    we(i != null, `No layout data found for index ${a}`);
    const s = Ar({
      panelConstraints: t,
      panelIndex: a,
      size: i
    });
    i != s && (o += i - s, n[a] = s);
  }
  if (!Rt(o, 0))
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      we(i != null, `No layout data found for index ${a}`);
      const s = i + o, l = Ar({
        panelConstraints: t,
        panelIndex: a,
        size: s
      });
      if (i !== l && (o -= l - i, n[a] = l, Rt(o, 0)))
        break;
    }
  return n;
}
const IH = 100, Ro = {
  getItem: (e) => (iy(Ro), Ro.getItem(e)),
  setItem: (e, t) => {
    iy(Ro), Ro.setItem(e, t);
  }
}, ly = {};
function D1({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: o,
  id: a = null,
  onLayout: i = null,
  keyboardResizeBy: s = null,
  storage: l = Ro,
  style: c,
  tagName: f = "div",
  ...u
}) {
  const p = am(a), v = _t(null), [h, g] = Ir(null), [b, y] = Ir([]), x = CH(), w = _t({}), S = _t(/* @__PURE__ */ new Map()), C = _t(0), P = _t({
    autoSaveId: e,
    direction: r,
    dragState: h,
    id: p,
    keyboardResizeBy: s,
    onLayout: i,
    storage: l
  }), _ = _t({
    layout: b,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  _t({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), h1(o, () => ({
    getId: () => P.current.id,
    getLayout: () => {
      const {
        layout: D
      } = _.current;
      return D;
    },
    setLayout: (D) => {
      const {
        onLayout: W
      } = P.current, {
        layout: V,
        panelDataArray: K
      } = _.current, I = sy({
        layout: D,
        panelConstraints: K.map((Y) => Y.constraints)
      });
      ay(V, I) || (y(I), _.current.layout = I, W && W(I), Tr(K, I, w.current));
    }
  }), []), tr(() => {
    P.current.autoSaveId = e, P.current.direction = r, P.current.dragState = h, P.current.id = p, P.current.onLayout = i, P.current.storage = l;
  }), TH({
    committedValuesRef: P,
    eagerValuesRef: _,
    groupId: p,
    layout: b,
    panelDataArray: _.current.panelDataArray,
    setLayout: y,
    panelGroupElement: v.current
  }), er(() => {
    const {
      panelDataArray: D
    } = _.current;
    if (e) {
      if (b.length === 0 || b.length !== D.length)
        return;
      let W = ly[e];
      W == null && (W = DH(kH, IH), ly[e] = W);
      const V = [...D], K = new Map(S.current);
      W(e, V, K, b, l);
    }
  }, [e, b, l]), er(() => {
  });
  const R = xt((D) => {
    const {
      onLayout: W
    } = P.current, {
      layout: V,
      panelDataArray: K
    } = _.current;
    if (D.constraints.collapsible) {
      const I = K.map((ne) => ne.constraints), {
        collapsedSize: Y = 0,
        panelSize: J,
        pivotIndices: te
      } = Xn(K, D, V);
      if (we(J != null, `Panel size not found for panel "${D.id}"`), !_n(J, Y)) {
        S.current.set(D.id, J);
        const X = Or(K, D) === K.length - 1 ? J - Y : Y - J, ae = Eo({
          delta: X,
          initialLayout: V,
          panelConstraints: I,
          pivotIndices: te,
          prevLayout: V,
          trigger: "imperative-api"
        });
        Fa(V, ae) || (y(ae), _.current.layout = ae, W && W(ae), Tr(K, ae, w.current));
      }
    }
  }, []), T = xt((D, W) => {
    const {
      onLayout: V
    } = P.current, {
      layout: K,
      panelDataArray: I
    } = _.current;
    if (D.constraints.collapsible) {
      const Y = I.map((k) => k.constraints), {
        collapsedSize: J = 0,
        panelSize: te = 0,
        minSize: ne = 0,
        pivotIndices: X
      } = Xn(I, D, K), ae = W ?? ne;
      if (_n(te, J)) {
        const k = S.current.get(D.id), re = k != null && k >= ae ? k : ae, me = Or(I, D) === I.length - 1 ? te - re : re - te, ge = Eo({
          delta: me,
          initialLayout: K,
          panelConstraints: Y,
          pivotIndices: X,
          prevLayout: K,
          trigger: "imperative-api"
        });
        Fa(K, ge) || (y(ge), _.current.layout = ge, V && V(ge), Tr(I, ge, w.current));
      }
    }
  }, []), z = xt((D) => {
    const {
      layout: W,
      panelDataArray: V
    } = _.current, {
      panelSize: K
    } = Xn(V, D, W);
    return we(K != null, `Panel size not found for panel "${D.id}"`), K;
  }, []), j = xt((D, W) => {
    const {
      panelDataArray: V
    } = _.current, K = Or(V, D);
    return AH({
      defaultSize: W,
      dragState: h,
      layout: b,
      panelData: V,
      panelIndex: K
    });
  }, [h, b]), B = xt((D) => {
    const {
      layout: W,
      panelDataArray: V
    } = _.current, {
      collapsedSize: K = 0,
      collapsible: I,
      panelSize: Y
    } = Xn(V, D, W);
    return we(Y != null, `Panel size not found for panel "${D.id}"`), I === !0 && _n(Y, K);
  }, []), A = xt((D) => {
    const {
      layout: W,
      panelDataArray: V
    } = _.current, {
      collapsedSize: K = 0,
      collapsible: I,
      panelSize: Y
    } = Xn(V, D, W);
    return we(Y != null, `Panel size not found for panel "${D.id}"`), !I || lr(Y, K) > 0;
  }, []), H = xt((D) => {
    const {
      panelDataArray: W
    } = _.current;
    W.push(D), W.sort((V, K) => {
      const I = V.order, Y = K.order;
      return I == null && Y == null ? 0 : I == null ? -1 : Y == null ? 1 : I - Y;
    }), _.current.panelDataArrayChanged = !0, x();
  }, [x]);
  tr(() => {
    if (_.current.panelDataArrayChanged) {
      _.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: D,
        onLayout: W,
        storage: V
      } = P.current, {
        layout: K,
        panelDataArray: I
      } = _.current;
      let Y = null;
      if (D) {
        const te = jH(D, I, V);
        te && (S.current = new Map(Object.entries(te.expandToSizes)), Y = te.layout);
      }
      Y == null && (Y = OH({
        panelDataArray: I
      }));
      const J = sy({
        layout: Y,
        panelConstraints: I.map((te) => te.constraints)
      });
      ay(K, J) || (y(J), _.current.layout = J, W && W(J), Tr(I, J, w.current));
    }
  }), tr(() => {
    const D = _.current;
    return () => {
      D.layout = [];
    };
  }, []);
  const q = xt((D) => {
    let W = !1;
    const V = v.current;
    return V && window.getComputedStyle(V, null).getPropertyValue("direction") === "rtl" && (W = !0), function(I) {
      I.preventDefault();
      const Y = v.current;
      if (!Y)
        return () => null;
      const {
        direction: J,
        dragState: te,
        id: ne,
        keyboardResizeBy: X,
        onLayout: ae
      } = P.current, {
        layout: k,
        panelDataArray: re
      } = _.current, {
        initialLayout: pe
      } = te ?? {}, me = R1(ne, D, Y);
      let ge = NH(I, D, J, te, X, Y);
      const de = J === "horizontal";
      de && W && (ge = -ge);
      const Ee = re.map(($e) => $e.constraints), Ge = Eo({
        delta: ge,
        initialLayout: pe ?? k,
        panelConstraints: Ee,
        pivotIndices: me,
        prevLayout: k,
        trigger: b1(I) ? "keyboard" : "mouse-or-touch"
      }), _e = !Fa(k, Ge);
      (y1(I) || x1(I)) && C.current != ge && (C.current = ge, !_e && ge !== 0 ? de ? ed(D, ge < 0 ? S1 : _1) : ed(D, ge < 0 ? C1 : P1) : ed(D, 0)), _e && (y(Ge), _.current.layout = Ge, ae && ae(Ge), Tr(re, Ge, w.current));
    };
  }, []), $ = xt((D, W) => {
    const {
      onLayout: V
    } = P.current, {
      layout: K,
      panelDataArray: I
    } = _.current, Y = I.map((k) => k.constraints), {
      panelSize: J,
      pivotIndices: te
    } = Xn(I, D, K);
    we(J != null, `Panel size not found for panel "${D.id}"`);
    const X = Or(I, D) === I.length - 1 ? J - W : W - J, ae = Eo({
      delta: X,
      initialLayout: K,
      panelConstraints: Y,
      pivotIndices: te,
      prevLayout: K,
      trigger: "imperative-api"
    });
    Fa(K, ae) || (y(ae), _.current.layout = ae, V && V(ae), Tr(I, ae, w.current));
  }, []), F = xt((D, W) => {
    const {
      layout: V,
      panelDataArray: K
    } = _.current, {
      collapsedSize: I = 0,
      collapsible: Y
    } = W, {
      collapsedSize: J = 0,
      collapsible: te,
      maxSize: ne = 100,
      minSize: X = 0
    } = D.constraints, {
      panelSize: ae
    } = Xn(K, D, V);
    ae != null && (Y && te && _n(ae, I) ? _n(I, J) || $(D, J) : ae < X ? $(D, X) : ae > ne && $(D, ne));
  }, [$]), M = xt((D, W) => {
    const {
      direction: V
    } = P.current, {
      layout: K
    } = _.current;
    if (!v.current)
      return;
    const I = fs(D, v.current);
    we(I, `Drag handle element not found for id "${D}"`);
    const Y = M1(V, W);
    g({
      dragHandleId: D,
      dragHandleRect: I.getBoundingClientRect(),
      initialCursorPosition: Y,
      initialLayout: K
    });
  }, []), G = xt(() => {
    g(null);
  }, []), oe = xt((D) => {
    const {
      panelDataArray: W
    } = _.current, V = Or(W, D);
    V >= 0 && (W.splice(V, 1), delete w.current[D.id], _.current.panelDataArrayChanged = !0, x());
  }, [x]), Z = uH(() => ({
    collapsePanel: R,
    direction: r,
    dragState: h,
    expandPanel: T,
    getPanelSize: z,
    getPanelStyle: j,
    groupId: p,
    isPanelCollapsed: B,
    isPanelExpanded: A,
    reevaluatePanelConstraints: F,
    registerPanel: H,
    registerResizeHandle: q,
    resizePanel: $,
    startDragging: M,
    stopDragging: G,
    unregisterPanel: oe,
    panelGroupElement: v.current
  }), [R, h, r, T, z, j, p, B, A, F, H, q, $, M, G, oe]), L = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return Kr(cs.Provider, {
    value: Z
  }, Kr(f, {
    ...u,
    children: t,
    className: n,
    id: a,
    ref: v,
    style: {
      ...L,
      ...c
    },
    // CSS selectors
    "data-panel-group": "",
    "data-panel-group-direction": r,
    "data-panel-group-id": p
  }));
}
const j1 = p1((e, t) => Kr(D1, {
  ...e,
  forwardedRef: t
}));
D1.displayName = "PanelGroup";
j1.displayName = "forwardRef(PanelGroup)";
function Or(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function Xn(e, t, n) {
  const r = Or(e, t), a = r === e.length - 1 ? [r - 1, r] : [r, r + 1], i = n[r];
  return {
    ...t.constraints,
    panelSize: i,
    pivotIndices: a
  };
}
function $H({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  er(() => {
    if (e || n == null || r == null)
      return;
    const o = fs(t, r);
    if (o == null)
      return;
    const a = (i) => {
      if (!i.defaultPrevented)
        switch (i.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            i.preventDefault(), n(i);
            break;
          }
          case "F6": {
            i.preventDefault();
            const s = o.getAttribute("data-panel-group-id");
            we(s, `No group element found for id "${s}"`);
            const l = Ho(s, r), c = E1(s, t, r);
            we(c !== null, `No resize element found for id "${t}"`);
            const f = i.shiftKey ? c > 0 ? c - 1 : l.length - 1 : c + 1 < l.length ? c + 1 : 0;
            l[f].focus();
            break;
          }
        }
    };
    return o.addEventListener("keydown", a), () => {
      o.removeEventListener("keydown", a);
    };
  }, [r, e, t, n]);
}
function k1({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: o,
  onBlur: a,
  onDragging: i,
  onFocus: s,
  style: l = {},
  tabIndex: c = 0,
  tagName: f = "div",
  ...u
}) {
  var p, v;
  const h = _t(null), g = _t({
    onDragging: i
  });
  er(() => {
    g.current.onDragging = i;
  });
  const b = m1(cs);
  if (b === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: y,
    groupId: x,
    registerResizeHandle: w,
    startDragging: S,
    stopDragging: C,
    panelGroupElement: P
  } = b, _ = am(o), [R, T] = Ir("inactive"), [z, j] = Ir(!1), [B, A] = Ir(null), H = _t({
    state: R
  });
  tr(() => {
    H.current.state = R;
  }), er(() => {
    if (n)
      A(null);
    else {
      const M = w(_);
      A(() => M);
    }
  }, [n, _, w]);
  const q = (p = r == null ? void 0 : r.coarse) !== null && p !== void 0 ? p : 15, $ = (v = r == null ? void 0 : r.fine) !== null && v !== void 0 ? v : 5;
  return er(() => {
    if (n || B == null)
      return;
    const M = h.current;
    return we(M, "Element ref not attached"), _H(_, M, y, {
      coarse: q,
      fine: $
    }, (oe, Z, L) => {
      if (Z)
        switch (oe) {
          case "down": {
            T("drag"), we(L, 'Expected event to be defined for "down" action'), S(_, L);
            const {
              onDragging: D
            } = g.current;
            D && D(!0);
            break;
          }
          case "move": {
            const {
              state: D
            } = H.current;
            D !== "drag" && T("hover"), we(L, 'Expected event to be defined for "move" action'), B(L);
            break;
          }
          case "up": {
            T("hover"), C();
            const {
              onDragging: D
            } = g.current;
            D && D(!1);
            break;
          }
        }
      else
        T("inactive");
    });
  }, [q, y, n, $, w, _, B, S, C]), $H({
    disabled: n,
    handleId: _,
    resizeHandler: B,
    panelGroupElement: P
  }), Kr(f, {
    ...u,
    children: e,
    className: t,
    id: o,
    onBlur: () => {
      j(!1), a == null || a();
    },
    onFocus: () => {
      j(!0), s == null || s();
    },
    ref: h,
    role: "separator",
    style: {
      ...{
        touchAction: "none",
        userSelect: "none"
      },
      ...l
    },
    tabIndex: c,
    // CSS selectors
    "data-panel-group-direction": y,
    "data-panel-group-id": x,
    "data-resize-handle": "",
    "data-resize-handle-active": R === "drag" ? "pointer" : z ? "keyboard" : void 0,
    "data-resize-handle-state": R,
    "data-panel-resize-handle-enabled": !n,
    "data-panel-resize-handle-id": _
  });
}
k1.displayName = "PanelResizeHandle";
function tU({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    j1,
    {
      "data-slot": "resizable-panel-group",
      className: O(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        e
      ),
      ...t
    }
  );
}
function nU({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(g1, { "data-slot": "resizable-panel", ...e });
}
function rU({
  withHandle: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    k1,
    {
      "data-slot": "resizable-handle",
      className: O(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        t
      ),
      ...n,
      children: e && /* @__PURE__ */ d.jsx("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ d.jsx(hE, { className: "size-2.5" }) })
    }
  );
}
function LH(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var cm = "ScrollArea", [I1] = Be(cm), [FH, Bt] = I1(cm), $1 = m.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, l] = m.useState(null), [c, f] = m.useState(null), [u, p] = m.useState(null), [v, h] = m.useState(null), [g, b] = m.useState(null), [y, x] = m.useState(0), [w, S] = m.useState(0), [C, P] = m.useState(!1), [_, R] = m.useState(!1), T = fe(t, (j) => l(j)), z = Zt(o);
    return /* @__PURE__ */ d.jsx(
      FH,
      {
        scope: n,
        type: r,
        dir: z,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: c,
        onViewportChange: f,
        content: u,
        onContentChange: p,
        scrollbarX: v,
        onScrollbarXChange: h,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: P,
        scrollbarY: g,
        onScrollbarYChange: b,
        scrollbarYEnabled: _,
        onScrollbarYEnabledChange: R,
        onCornerWidthChange: x,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ d.jsx(
          ee.div,
          {
            dir: z,
            ...i,
            ref: T,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": w + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
$1.displayName = cm;
var L1 = "ScrollAreaViewport", F1 = m.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, i = Bt(L1, n), s = m.useRef(null), l = fe(t, s, i.onViewportChange);
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ d.jsx(
        ee.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: l,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ d.jsx("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
F1.displayName = L1;
var bn = "ScrollAreaScrollbar", z1 = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Bt(bn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return m.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ d.jsx(zH, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ d.jsx(BH, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ d.jsx(B1, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ d.jsx(um, { ...r, ref: t }) : null;
  }
);
z1.displayName = bn;
var zH = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Bt(bn, e.__scopeScrollArea), [a, i] = m.useState(!1);
  return m.useEffect(() => {
    const s = o.scrollArea;
    let l = 0;
    if (s) {
      const c = () => {
        window.clearTimeout(l), i(!0);
      }, f = () => {
        l = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", c), s.addEventListener("pointerleave", f), () => {
        window.clearTimeout(l), s.removeEventListener("pointerenter", c), s.removeEventListener("pointerleave", f);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ d.jsx(qe, { present: n || a, children: /* @__PURE__ */ d.jsx(
    B1,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), BH = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Bt(bn, e.__scopeScrollArea), a = e.orientation === "horizontal", i = ms(() => l("SCROLL_END"), 100), [s, l] = LH("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return m.useEffect(() => {
    if (s === "idle") {
      const c = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(c);
    }
  }, [s, o.scrollHideDelay, l]), m.useEffect(() => {
    const c = o.viewport, f = a ? "scrollLeft" : "scrollTop";
    if (c) {
      let u = c[f];
      const p = () => {
        const v = c[f];
        u !== v && (l("SCROLL"), i()), u = v;
      };
      return c.addEventListener("scroll", p), () => c.removeEventListener("scroll", p);
    }
  }, [o.viewport, a, l, i]), /* @__PURE__ */ d.jsx(qe, { present: n || s !== "hidden", children: /* @__PURE__ */ d.jsx(
    um,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: U(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: U(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), B1 = m.forwardRef((e, t) => {
  const n = Bt(bn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, i] = m.useState(!1), s = e.orientation === "horizontal", l = ms(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? c : f);
    }
  }, 10);
  return Yr(n.viewport, l), Yr(n.content, l), /* @__PURE__ */ d.jsx(qe, { present: r || a, children: /* @__PURE__ */ d.jsx(
    um,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), um = m.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Bt(bn, e.__scopeScrollArea), a = m.useRef(null), i = m.useRef(0), [s, l] = m.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = G1(s.viewport, s.content), f = {
    ...r,
    sizes: s,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (p) => i.current = p
  };
  function u(p, v) {
    return UH(p, i.current, s, v);
  }
  return n === "horizontal" ? /* @__PURE__ */ d.jsx(
    qH,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const p = o.viewport.scrollLeft, v = cy(p, s, o.dir);
          a.current.style.transform = `translate3d(${v}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = u(p, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ d.jsx(
    HH,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const p = o.viewport.scrollTop, v = cy(p, s);
          a.current.style.transform = `translate3d(0, ${v}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = u(p));
      }
    }
  ) : null;
}), qH = m.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Bt(bn, e.__scopeScrollArea), [i, s] = m.useState(), l = m.useRef(null), c = fe(t, l, a.onScrollbarXChange);
  return m.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ d.jsx(
    H1,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: c,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": ps(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, u) => {
        if (a.viewport) {
          const p = a.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(p), K1(p, u) && f.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: Si(i.paddingLeft),
            paddingEnd: Si(i.paddingRight)
          }
        });
      }
    }
  );
}), HH = m.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Bt(bn, e.__scopeScrollArea), [i, s] = m.useState(), l = m.useRef(null), c = fe(t, l, a.onScrollbarYChange);
  return m.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ d.jsx(
    H1,
    {
      "data-orientation": "vertical",
      ...o,
      ref: c,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": ps(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, u) => {
        if (a.viewport) {
          const p = a.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(p), K1(p, u) && f.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: Si(i.paddingTop),
            paddingEnd: Si(i.paddingBottom)
          }
        });
      }
    }
  );
}), [WH, q1] = I1(bn), H1 = m.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: l,
    onDragScroll: c,
    onWheelScroll: f,
    onResize: u,
    ...p
  } = e, v = Bt(bn, n), [h, g] = m.useState(null), b = fe(t, (T) => g(T)), y = m.useRef(null), x = m.useRef(""), w = v.viewport, S = r.content - r.viewport, C = Ie(f), P = Ie(l), _ = ms(u, 10);
  function R(T) {
    if (y.current) {
      const z = T.clientX - y.current.left, j = T.clientY - y.current.top;
      c({ x: z, y: j });
    }
  }
  return m.useEffect(() => {
    const T = (z) => {
      const j = z.target;
      (h == null ? void 0 : h.contains(j)) && C(z, S);
    };
    return document.addEventListener("wheel", T, { passive: !1 }), () => document.removeEventListener("wheel", T, { passive: !1 });
  }, [w, h, S, C]), m.useEffect(P, [r, P]), Yr(h, _), Yr(v.content, _), /* @__PURE__ */ d.jsx(
    WH,
    {
      scope: n,
      scrollbar: h,
      hasThumb: o,
      onThumbChange: Ie(a),
      onThumbPointerUp: Ie(i),
      onThumbPositionChange: P,
      onThumbPointerDown: Ie(s),
      children: /* @__PURE__ */ d.jsx(
        ee.div,
        {
          ...p,
          ref: b,
          style: { position: "absolute", ...p.style },
          onPointerDown: U(e.onPointerDown, (T) => {
            T.button === 0 && (T.target.setPointerCapture(T.pointerId), y.current = h.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), R(T));
          }),
          onPointerMove: U(e.onPointerMove, R),
          onPointerUp: U(e.onPointerUp, (T) => {
            const z = T.target;
            z.hasPointerCapture(T.pointerId) && z.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = x.current, v.viewport && (v.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), wi = "ScrollAreaThumb", W1 = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = q1(wi, e.__scopeScrollArea);
    return /* @__PURE__ */ d.jsx(qe, { present: n || o.hasThumb, children: /* @__PURE__ */ d.jsx(VH, { ref: t, ...r }) });
  }
), VH = m.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = Bt(wi, n), i = q1(wi, n), { onThumbPositionChange: s } = i, l = fe(
      t,
      (u) => i.onThumbChange(u)
    ), c = m.useRef(void 0), f = ms(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return m.useEffect(() => {
      const u = a.viewport;
      if (u) {
        const p = () => {
          if (f(), !c.current) {
            const v = KH(u, s);
            c.current = v, s();
          }
        };
        return s(), u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
      }
    }, [a.viewport, f, s]), /* @__PURE__ */ d.jsx(
      ee.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: U(e.onPointerDownCapture, (u) => {
          const v = u.target.getBoundingClientRect(), h = u.clientX - v.left, g = u.clientY - v.top;
          i.onThumbPointerDown({ x: h, y: g });
        }),
        onPointerUp: U(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
W1.displayName = wi;
var dm = "ScrollAreaCorner", V1 = m.forwardRef(
  (e, t) => {
    const n = Bt(dm, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ d.jsx(GH, { ...e, ref: t }) : null;
  }
);
V1.displayName = dm;
var GH = m.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Bt(dm, n), [a, i] = m.useState(0), [s, l] = m.useState(0), c = !!(a && s);
  return Yr(o.scrollbarX, () => {
    var u;
    const f = ((u = o.scrollbarX) == null ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(f), l(f);
  }), Yr(o.scrollbarY, () => {
    var u;
    const f = ((u = o.scrollbarY) == null ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(f), i(f);
  }), c ? /* @__PURE__ */ d.jsx(
    ee.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
        height: s,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Si(e) {
  return e ? parseInt(e, 10) : 0;
}
function G1(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ps(e) {
  const t = G1(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function UH(e, t, n, r = "ltr") {
  const o = ps(n), a = o / 2, i = t || a, s = o - i, l = n.scrollbar.paddingStart + i, c = n.scrollbar.size - n.scrollbar.paddingEnd - s, f = n.content - n.viewport, u = r === "ltr" ? [0, f] : [f * -1, 0];
  return U1([l, c], u)(e);
}
function cy(e, t, n = "ltr") {
  const r = ps(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - r, l = n === "ltr" ? [0, i] : [i * -1, 0], c = Mo(e, l);
  return U1([0, i], [0, s])(c);
}
function U1(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function K1(e, t) {
  return e > 0 && e < t;
}
var KH = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== a.left, s = n.top !== a.top;
    (i || s) && t(), n = a, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function ms(e, t) {
  const n = Ie(e), r = m.useRef(0);
  return m.useEffect(() => () => window.clearTimeout(r.current), []), m.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Yr(e, t) {
  const n = Ie(t);
  Ye(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var YH = $1, XH = F1, JH = V1;
function oU({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(
    YH,
    {
      "data-slot": "scroll-area",
      className: O("relative", e),
      ...n,
      children: [
        /* @__PURE__ */ d.jsx(
          XH,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ d.jsx(ZH, {}),
        /* @__PURE__ */ d.jsx(JH, {})
      ]
    }
  );
}
function ZH({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    z1,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: O(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...n,
      children: /* @__PURE__ */ d.jsx(
        W1,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
var QH = "Separator", uy = "horizontal", eW = ["horizontal", "vertical"], Y1 = m.forwardRef((e, t) => {
  const { decorative: n, orientation: r = uy, ...o } = e, a = tW(r) ? r : uy, s = n ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ d.jsx(
    ee.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
Y1.displayName = QH;
function tW(e) {
  return eW.includes(e);
}
var nW = Y1;
function rW({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    nW,
    {
      "data-slot": "separator-root",
      decorative: n,
      orientation: t,
      className: O(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...r
    }
  );
}
function oW({ ...e }) {
  return /* @__PURE__ */ d.jsx(Zo, { "data-slot": "sheet", ...e });
}
function aU({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(zi, { "data-slot": "sheet-trigger", ...e });
}
function iU({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(mr, { "data-slot": "sheet-close", ...e });
}
function aW({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Qo, { "data-slot": "sheet-portal", ...e });
}
function iW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    ea,
    {
      "data-slot": "sheet-overlay",
      className: O(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function sW({
  className: e,
  children: t,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(aW, { children: [
    /* @__PURE__ */ d.jsx(iW, {}),
    /* @__PURE__ */ d.jsxs(
      ta,
      {
        "data-slot": "sheet-content",
        className: O(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          n === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          n === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          n === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          n === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...r,
        children: [
          t,
          /* @__PURE__ */ d.jsxs(mr, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ d.jsx(af, { className: "size-4" }),
            /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function lW({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: O("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function sU({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "sheet-footer",
      className: O("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function cW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Bi,
    {
      "data-slot": "sheet-title",
      className: O("text-foreground font-semibold", e),
      ...t
    }
  );
}
function uW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    qi,
    {
      "data-slot": "sheet-description",
      className: O("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const td = 768;
function dW() {
  const [e, t] = m.useState(
    void 0
  );
  return m.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${td - 1}px)`), r = () => {
      t(window.innerWidth < td);
    };
    return n.addEventListener("change", r), t(window.innerWidth < td), () => n.removeEventListener("change", r);
  }, []), !!e;
}
function dy({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: O("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
var [hs] = Be("Tooltip", [
  hn
]), vs = hn(), X1 = "TooltipProvider", fW = 700, Jd = "tooltip.open", [pW, fm] = hs(X1), J1 = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = fW,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, [i, s] = m.useState(!0), l = m.useRef(!1), c = m.useRef(0);
  return m.useEffect(() => {
    const f = c.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ d.jsx(
    pW,
    {
      scope: t,
      isOpenDelayed: i,
      delayDuration: n,
      onOpen: m.useCallback(() => {
        window.clearTimeout(c.current), s(!1);
      }, []),
      onClose: m.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => s(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: m.useCallback((f) => {
        l.current = f;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
J1.displayName = X1;
var gs = "Tooltip", [mW, ya] = hs(gs), Z1 = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o = !1,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, l = fm(gs, e.__scopeTooltip), c = vs(t), [f, u] = m.useState(null), p = ze(), v = m.useRef(0), h = i ?? l.disableHoverableContent, g = s ?? l.delayDuration, b = m.useRef(!1), [y = !1, x] = Ve({
    prop: r,
    defaultProp: o,
    onChange: (_) => {
      _ ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Jd))) : l.onClose(), a == null || a(_);
    }
  }), w = m.useMemo(() => y ? b.current ? "delayed-open" : "instant-open" : "closed", [y]), S = m.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, b.current = !1, x(!0);
  }, [x]), C = m.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, x(!1);
  }, [x]), P = m.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      b.current = !0, x(!0), v.current = 0;
    }, g);
  }, [g, x]);
  return m.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ d.jsx(no, { ...c, children: /* @__PURE__ */ d.jsx(
    mW,
    {
      scope: t,
      contentId: p,
      open: y,
      stateAttribute: w,
      trigger: f,
      onTriggerChange: u,
      onTriggerEnter: m.useCallback(() => {
        l.isOpenDelayed ? P() : S();
      }, [l.isOpenDelayed, P, S]),
      onTriggerLeave: m.useCallback(() => {
        h ? C() : (window.clearTimeout(v.current), v.current = 0);
      }, [C, h]),
      onOpen: S,
      onClose: C,
      disableHoverableContent: h,
      children: n
    }
  ) });
};
Z1.displayName = gs;
var Zd = "TooltipTrigger", Q1 = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ya(Zd, n), a = fm(Zd, n), i = vs(n), s = m.useRef(null), l = fe(t, s, o.onTriggerChange), c = m.useRef(!1), f = m.useRef(!1), u = m.useCallback(() => c.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), /* @__PURE__ */ d.jsx(ro, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
      ee.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: U(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: U(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: U(e.onPointerDown, () => {
          c.current = !0, document.addEventListener("pointerup", u, { once: !0 });
        }),
        onFocus: U(e.onFocus, () => {
          c.current || o.onOpen();
        }),
        onBlur: U(e.onBlur, o.onClose),
        onClick: U(e.onClick, o.onClose)
      }
    ) });
  }
);
Q1.displayName = Zd;
var pm = "TooltipPortal", [hW, vW] = hs(pm, {
  forceMount: void 0
}), eP = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = ya(pm, t);
  return /* @__PURE__ */ d.jsx(hW, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(qe, { present: n || a.open, children: /* @__PURE__ */ d.jsx(pr, { asChild: !0, container: o, children: r }) }) });
};
eP.displayName = pm;
var Xr = "TooltipContent", tP = m.forwardRef(
  (e, t) => {
    const n = vW(Xr, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, i = ya(Xr, e.__scopeTooltip);
    return /* @__PURE__ */ d.jsx(qe, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ d.jsx(nP, { side: o, ...a, ref: t }) : /* @__PURE__ */ d.jsx(gW, { side: o, ...a, ref: t }) });
  }
), gW = m.forwardRef((e, t) => {
  const n = ya(Xr, e.__scopeTooltip), r = fm(Xr, e.__scopeTooltip), o = m.useRef(null), a = fe(t, o), [i, s] = m.useState(null), { trigger: l, onClose: c } = n, f = o.current, { onPointerInTransitChange: u } = r, p = m.useCallback(() => {
    s(null), u(!1);
  }, [u]), v = m.useCallback(
    (h, g) => {
      const b = h.currentTarget, y = { x: h.clientX, y: h.clientY }, x = xW(y, b.getBoundingClientRect()), w = wW(y, x), S = SW(g.getBoundingClientRect()), C = CW([...w, ...S]);
      s(C), u(!0);
    },
    [u]
  );
  return m.useEffect(() => () => p(), [p]), m.useEffect(() => {
    if (l && f) {
      const h = (b) => v(b, f), g = (b) => v(b, l);
      return l.addEventListener("pointerleave", h), f.addEventListener("pointerleave", g), () => {
        l.removeEventListener("pointerleave", h), f.removeEventListener("pointerleave", g);
      };
    }
  }, [l, f, v, p]), m.useEffect(() => {
    if (i) {
      const h = (g) => {
        const b = g.target, y = { x: g.clientX, y: g.clientY }, x = (l == null ? void 0 : l.contains(b)) || (f == null ? void 0 : f.contains(b)), w = !_W(y, i);
        x ? p() : w && (p(), c());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [l, f, i, c, p]), /* @__PURE__ */ d.jsx(nP, { ...e, ref: a });
}), [bW, yW] = hs(gs, { isInside: !1 }), nP = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, l = ya(Xr, n), c = vs(n), { onClose: f } = l;
    return m.useEffect(() => (document.addEventListener(Jd, f), () => document.removeEventListener(Jd, f)), [f]), m.useEffect(() => {
      if (l.trigger) {
        const u = (p) => {
          const v = p.target;
          v != null && v.contains(l.trigger) && f();
        };
        return window.addEventListener("scroll", u, { capture: !0 }), () => window.removeEventListener("scroll", u, { capture: !0 });
      }
    }, [l.trigger, f]), /* @__PURE__ */ d.jsx(
      Fn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (u) => u.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ d.jsxs(
          Ko,
          {
            "data-state": l.stateAttribute,
            ...c,
            ...s,
            ref: t,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ d.jsx(lf, { children: r }),
              /* @__PURE__ */ d.jsx(bW, { scope: n, isInside: !0, children: /* @__PURE__ */ d.jsx(tx, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
tP.displayName = Xr;
var rP = "TooltipArrow", oP = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = vs(n);
    return yW(
      rP,
      n
    ).isInside ? null : /* @__PURE__ */ d.jsx(Yo, { ...o, ...r, ref: t });
  }
);
oP.displayName = rP;
function xW(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function wW(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function SW(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function _W(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, l = t[a].y, c = t[i].x, f = t[i].y;
    l > r != f > r && n < (c - s) * (r - l) / (f - l) + s && (o = !o);
  }
  return o;
}
function CW(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), PW(t);
}
function PW(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var EW = J1, RW = Z1, TW = Q1, MW = eP, NW = tP, OW = oP;
function aP({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    EW,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function AW({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(aP, { children: /* @__PURE__ */ d.jsx(RW, { "data-slot": "tooltip", ...e }) });
}
function DW({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(TW, { "data-slot": "tooltip-trigger", ...e });
}
function jW({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(MW, { children: /* @__PURE__ */ d.jsxs(
    NW,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: O(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ d.jsx(OW, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const kW = "sidebar_state", IW = 3600 * 24 * 7, $W = "16rem", LW = "18rem", FW = "3rem", zW = "b", iP = m.createContext(null);
function bs() {
  const e = m.useContext(iP);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function lU({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: r,
  style: o,
  children: a,
  ...i
}) {
  const s = dW(), [l, c] = m.useState(!1), [f, u] = m.useState(e), p = t ?? f, v = m.useCallback(
    (y) => {
      const x = typeof y == "function" ? y(p) : y;
      n ? n(x) : u(x), document.cookie = `${kW}=${x}; path=/; max-age=${IW}`;
    },
    [n, p]
  ), h = m.useCallback(() => s ? c((y) => !y) : v((y) => !y), [s, v, c]);
  m.useEffect(() => {
    const y = (x) => {
      x.key === zW && (x.metaKey || x.ctrlKey) && (x.preventDefault(), h());
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [h]);
  const g = p ? "expanded" : "collapsed", b = m.useMemo(
    () => ({
      state: g,
      open: p,
      setOpen: v,
      isMobile: s,
      openMobile: l,
      setOpenMobile: c,
      toggleSidebar: h
    }),
    [g, p, v, s, l, c, h]
  );
  return /* @__PURE__ */ d.jsx(iP.Provider, { value: b, children: /* @__PURE__ */ d.jsx(aP, { delayDuration: 0, children: /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": $W,
        "--sidebar-width-icon": FW,
        ...o
      },
      className: O(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        r
      ),
      ...i,
      children: a
    }
  ) }) });
}
function cU({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: r,
  children: o,
  ...a
}) {
  const { isMobile: i, state: s, openMobile: l, setOpenMobile: c } = bs();
  return n === "none" ? /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "sidebar",
      className: O(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        r
      ),
      ...a,
      children: o
    }
  ) : i ? /* @__PURE__ */ d.jsx(oW, { open: l, onOpenChange: c, ...a, children: /* @__PURE__ */ d.jsxs(
    sW,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": LW
      },
      side: e,
      children: [
        /* @__PURE__ */ d.jsxs(lW, { className: "sr-only", children: [
          /* @__PURE__ */ d.jsx(cW, { children: "Sidebar" }),
          /* @__PURE__ */ d.jsx(uW, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "flex h-full w-full flex-col", children: o })
      ]
    }
  ) }) : /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": s,
      "data-collapsible": s === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ d.jsx(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: O(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            "data-slot": "sidebar-container",
            className: O(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              r
            ),
            ...a,
            children: /* @__PURE__ */ d.jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: o
              }
            )
          }
        )
      ]
    }
  );
}
function uU({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: r } = bs();
  return /* @__PURE__ */ d.jsxs(
    cf,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: O("size-7", e),
      onClick: (o) => {
        t == null || t(o), r();
      },
      ...n,
      children: [
        /* @__PURE__ */ d.jsx(wE, {}),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function dU({ className: e, ...t }) {
  const { toggleSidebar: n } = bs();
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: n,
      title: "Toggle Sidebar",
      className: O(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        e
      ),
      ...t
    }
  );
}
function fU({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: O(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function pU({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    dR,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: O("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function mU({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: O("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function hU({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: O("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function vU({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    rW,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: O("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function gU({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: O(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function bU({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: O("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function yU({
  className: e,
  asChild: t = !1,
  ...n
}) {
  const r = t ? ut : "div";
  return /* @__PURE__ */ d.jsx(
    r,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: O(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...n
    }
  );
}
function xU({
  className: e,
  asChild: t = !1,
  ...n
}) {
  const r = t ? ut : "button";
  return /* @__PURE__ */ d.jsx(
    r,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: O(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...n
    }
  );
}
function wU({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: O("w-full text-sm", e),
      ...t
    }
  );
}
function SU({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: O("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function _U({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: O("group/menu-item relative", e),
      ...t
    }
  );
}
const BW = fr(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function CU({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: r = "default",
  tooltip: o,
  className: a,
  ...i
}) {
  const s = e ? ut : "button", { isMobile: l, state: c } = bs(), f = /* @__PURE__ */ d.jsx(
    s,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: O(BW({ variant: n, size: r }), a),
      ...i
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ d.jsxs(AW, { children: [
    /* @__PURE__ */ d.jsx(DW, { asChild: !0, children: f }),
    /* @__PURE__ */ d.jsx(
      jW,
      {
        side: "right",
        align: "center",
        hidden: c !== "collapsed" || l,
        ...o
      }
    )
  ] })) : f;
}
function PU({
  className: e,
  asChild: t = !1,
  showOnHover: n = !1,
  ...r
}) {
  const o = t ? ut : "button";
  return /* @__PURE__ */ d.jsx(
    o,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: O(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        n && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        e
      ),
      ...r
    }
  );
}
function EU({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: O(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function RU({
  className: e,
  showIcon: t = !1,
  ...n
}) {
  const r = m.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: O("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...n,
      children: [
        t && /* @__PURE__ */ d.jsx(
          dy,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ d.jsx(
          dy,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": r
            }
          }
        )
      ]
    }
  );
}
function TU({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: O(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function MU({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: O("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function NU({
  asChild: e = !1,
  size: t = "md",
  isActive: n = !1,
  className: r,
  ...o
}) {
  const a = e ? ut : "a";
  return /* @__PURE__ */ d.jsx(
    a,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": n,
      className: O(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        r
      ),
      ...o
    }
  );
}
var sP = ["PageUp", "PageDown"], lP = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], cP = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, so = "Slider", [Qd, qW, HW] = Ln(so), [uP] = Be(so, [
  HW
]), [WW, ys] = uP(so), dP = m.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: r = 0,
      max: o = 100,
      step: a = 1,
      orientation: i = "horizontal",
      disabled: s = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: c = [r],
      value: f,
      onValueChange: u = () => {
      },
      onValueCommit: p = () => {
      },
      inverted: v = !1,
      form: h,
      ...g
    } = e, b = m.useRef(/* @__PURE__ */ new Set()), y = m.useRef(0), w = i === "horizontal" ? VW : GW, [S = [], C] = Ve({
      prop: f,
      defaultProp: c,
      onChange: (j) => {
        var A;
        (A = [...b.current][y.current]) == null || A.focus(), u(j);
      }
    }), P = m.useRef(S);
    function _(j) {
      const B = JW(S, j);
      z(j, B);
    }
    function R(j) {
      z(j, y.current);
    }
    function T() {
      const j = P.current[y.current];
      S[y.current] !== j && p(S);
    }
    function z(j, B, { commit: A } = { commit: !1 }) {
      const H = t3(a), q = n3(Math.round((j - r) / a) * a + r, H), $ = Mo(q, [r, o]);
      C((F = []) => {
        const M = YW(F, $, B);
        if (e3(M, l * a)) {
          y.current = M.indexOf($);
          const G = String(M) !== String(F);
          return G && A && p(M), G ? M : F;
        } else
          return F;
      });
    }
    return /* @__PURE__ */ d.jsx(
      WW,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: s,
        min: r,
        max: o,
        valueIndexToChangeRef: y,
        thumbs: b.current,
        values: S,
        orientation: i,
        form: h,
        children: /* @__PURE__ */ d.jsx(Qd.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ d.jsx(Qd.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ d.jsx(
          w,
          {
            "aria-disabled": s,
            "data-disabled": s ? "" : void 0,
            ...g,
            ref: t,
            onPointerDown: U(g.onPointerDown, () => {
              s || (P.current = S);
            }),
            min: r,
            max: o,
            inverted: v,
            onSlideStart: s ? void 0 : _,
            onSlideMove: s ? void 0 : R,
            onSlideEnd: s ? void 0 : T,
            onHomeKeyDown: () => !s && z(r, 0, { commit: !0 }),
            onEndKeyDown: () => !s && z(o, S.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: j, direction: B }) => {
              if (!s) {
                const q = sP.includes(j.key) || j.shiftKey && lP.includes(j.key) ? 10 : 1, $ = y.current, F = S[$], M = a * q * B;
                z(F + M, $, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
dP.displayName = so;
var [fP, pP] = uP(so, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), VW = m.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      dir: o,
      inverted: a,
      onSlideStart: i,
      onSlideMove: s,
      onSlideEnd: l,
      onStepKeyDown: c,
      ...f
    } = e, [u, p] = m.useState(null), v = fe(t, (w) => p(w)), h = m.useRef(void 0), g = Zt(o), b = g === "ltr", y = b && !a || !b && a;
    function x(w) {
      const S = h.current || u.getBoundingClientRect(), C = [0, S.width], _ = mm(C, y ? [n, r] : [r, n]);
      return h.current = S, _(w - S.left);
    }
    return /* @__PURE__ */ d.jsx(
      fP,
      {
        scope: e.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ d.jsx(
          mP,
          {
            dir: g,
            "data-orientation": "horizontal",
            ...f,
            ref: v,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (w) => {
              const S = x(w.clientX);
              i == null || i(S);
            },
            onSlideMove: (w) => {
              const S = x(w.clientX);
              s == null || s(S);
            },
            onSlideEnd: () => {
              h.current = void 0, l == null || l();
            },
            onStepKeyDown: (w) => {
              const C = cP[y ? "from-left" : "from-right"].includes(w.key);
              c == null || c({ event: w, direction: C ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), GW = m.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      inverted: o,
      onSlideStart: a,
      onSlideMove: i,
      onSlideEnd: s,
      onStepKeyDown: l,
      ...c
    } = e, f = m.useRef(null), u = fe(t, f), p = m.useRef(void 0), v = !o;
    function h(g) {
      const b = p.current || f.current.getBoundingClientRect(), y = [0, b.height], w = mm(y, v ? [r, n] : [n, r]);
      return p.current = b, w(g - b.top);
    }
    return /* @__PURE__ */ d.jsx(
      fP,
      {
        scope: e.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: /* @__PURE__ */ d.jsx(
          mP,
          {
            "data-orientation": "vertical",
            ...c,
            ref: u,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (g) => {
              const b = h(g.clientY);
              a == null || a(b);
            },
            onSlideMove: (g) => {
              const b = h(g.clientY);
              i == null || i(b);
            },
            onSlideEnd: () => {
              p.current = void 0, s == null || s();
            },
            onStepKeyDown: (g) => {
              const y = cP[v ? "from-bottom" : "from-top"].includes(g.key);
              l == null || l({ event: g, direction: y ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), mP = m.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: r,
      onSlideMove: o,
      onSlideEnd: a,
      onHomeKeyDown: i,
      onEndKeyDown: s,
      onStepKeyDown: l,
      ...c
    } = e, f = ys(so, n);
    return /* @__PURE__ */ d.jsx(
      ee.span,
      {
        ...c,
        ref: t,
        onKeyDown: U(e.onKeyDown, (u) => {
          u.key === "Home" ? (i(u), u.preventDefault()) : u.key === "End" ? (s(u), u.preventDefault()) : sP.concat(lP).includes(u.key) && (l(u), u.preventDefault());
        }),
        onPointerDown: U(e.onPointerDown, (u) => {
          const p = u.target;
          p.setPointerCapture(u.pointerId), u.preventDefault(), f.thumbs.has(p) ? p.focus() : r(u);
        }),
        onPointerMove: U(e.onPointerMove, (u) => {
          u.target.hasPointerCapture(u.pointerId) && o(u);
        }),
        onPointerUp: U(e.onPointerUp, (u) => {
          const p = u.target;
          p.hasPointerCapture(u.pointerId) && (p.releasePointerCapture(u.pointerId), a(u));
        })
      }
    );
  }
), hP = "SliderTrack", vP = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = ys(hP, n);
    return /* @__PURE__ */ d.jsx(
      ee.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t
      }
    );
  }
);
vP.displayName = hP;
var ef = "SliderRange", gP = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = ys(ef, n), a = pP(ef, n), i = m.useRef(null), s = fe(t, i), l = o.values.length, c = o.values.map(
      (p) => yP(p, o.min, o.max)
    ), f = l > 1 ? Math.min(...c) : 0, u = 100 - Math.max(...c);
    return /* @__PURE__ */ d.jsx(
      ee.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: s,
        style: {
          ...e.style,
          [a.startEdge]: f + "%",
          [a.endEdge]: u + "%"
        }
      }
    );
  }
);
gP.displayName = ef;
var tf = "SliderThumb", bP = m.forwardRef(
  (e, t) => {
    const n = qW(e.__scopeSlider), [r, o] = m.useState(null), a = fe(t, (s) => o(s)), i = m.useMemo(
      () => r ? n().findIndex((s) => s.ref.current === r) : -1,
      [n, r]
    );
    return /* @__PURE__ */ d.jsx(UW, { ...e, ref: a, index: i });
  }
), UW = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: r, name: o, ...a } = e, i = ys(tf, n), s = pP(tf, n), [l, c] = m.useState(null), f = fe(t, (x) => c(x)), u = l ? i.form || !!l.closest("form") : !0, p = Uo(l), v = i.values[r], h = v === void 0 ? 0 : yP(v, i.min, i.max), g = XW(r, i.values.length), b = p == null ? void 0 : p[s.size], y = b ? ZW(b, h, s.direction) : 0;
    return m.useEffect(() => {
      if (l)
        return i.thumbs.add(l), () => {
          i.thumbs.delete(l);
        };
    }, [l, i.thumbs]), /* @__PURE__ */ d.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${h}% + ${y}px)`
        },
        children: [
          /* @__PURE__ */ d.jsx(Qd.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ d.jsx(
            ee.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || g,
              "aria-valuemin": i.min,
              "aria-valuenow": v,
              "aria-valuemax": i.max,
              "aria-orientation": i.orientation,
              "data-orientation": i.orientation,
              "data-disabled": i.disabled ? "" : void 0,
              tabIndex: i.disabled ? void 0 : 0,
              ...a,
              ref: f,
              style: v === void 0 ? { display: "none" } : e.style,
              onFocus: U(e.onFocus, () => {
                i.valueIndexToChangeRef.current = r;
              })
            }
          ) }),
          u && /* @__PURE__ */ d.jsx(
            KW,
            {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: v
            },
            r
          )
        ]
      }
    );
  }
);
bP.displayName = tf;
var KW = (e) => {
  const { value: t, ...n } = e, r = m.useRef(null), o = oo(t);
  return m.useEffect(() => {
    const a = r.current, i = window.HTMLInputElement.prototype, l = Object.getOwnPropertyDescriptor(i, "value").set;
    if (o !== t && l) {
      const c = new Event("input", { bubbles: !0 });
      l.call(a, t), a.dispatchEvent(c);
    }
  }, [o, t]), /* @__PURE__ */ d.jsx("input", { style: { display: "none" }, ...n, ref: r, defaultValue: t });
};
function YW(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, a) => o - a);
}
function yP(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Mo(a, [0, 100]);
}
function XW(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function JW(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function ZW(e, t, n) {
  const r = e / 2, a = mm([0, 50], [0, r]);
  return (r - a(t) * n) * n;
}
function QW(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function e3(e, t) {
  if (t > 0) {
    const n = QW(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function mm(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function t3(e) {
  return (String(e).split(".")[1] || "").length;
}
function n3(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var r3 = dP, o3 = vP, a3 = gP, i3 = bP;
function OU({
  className: e,
  defaultValue: t,
  value: n,
  min: r = 0,
  max: o = 100,
  ...a
}) {
  const i = m.useMemo(
    () => Array.isArray(n) ? n : Array.isArray(t) ? t : [r, o],
    [n, t, r, o]
  );
  return /* @__PURE__ */ d.jsxs(
    r3,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: n,
      min: r,
      max: o,
      className: O(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ d.jsx(
          o3,
          {
            "data-slot": "slider-track",
            className: O(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ d.jsx(
              a3,
              {
                "data-slot": "slider-range",
                className: O(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: i.length }, (s, l) => /* @__PURE__ */ d.jsx(
          i3,
          {
            "data-slot": "slider-thumb",
            className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          l
        ))
      ]
    }
  );
}
var s3 = (e, t, n, r, o, a, i, s) => {
  let l = document.documentElement, c = ["light", "dark"];
  function f(v) {
    (Array.isArray(e) ? e : [e]).forEach((h) => {
      let g = h === "class", b = g && a ? o.map((y) => a[y] || y) : o;
      g ? (l.classList.remove(...b), l.classList.add(a && a[v] ? a[v] : v)) : l.setAttribute(h, v);
    }), u(v);
  }
  function u(v) {
    s && c.includes(v) && (l.style.colorScheme = v);
  }
  function p() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (r) f(r);
  else try {
    let v = localStorage.getItem(t) || n, h = i && v === "system" ? p() : v;
    f(h);
  } catch {
  }
}, l3 = m.createContext(void 0), c3 = { setTheme: (e) => {
}, themes: [] }, u3 = () => {
  var e;
  return (e = m.useContext(l3)) != null ? e : c3;
};
m.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: i, themes: s, nonce: l, scriptProps: c }) => {
  let f = JSON.stringify([n, t, a, e, s, i, r, o]).slice(1, -1);
  return m.createElement("script", { ...c, suppressHydrationWarning: !0, nonce: typeof window > "u" ? l : "", dangerouslySetInnerHTML: { __html: `(${s3.toString()})(${f})` } });
});
function d3(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const f3 = (e) => {
  switch (e) {
    case "success":
      return h3;
    case "info":
      return g3;
    case "warning":
      return v3;
    case "error":
      return b3;
    default:
      return null;
  }
}, p3 = Array(12).fill(0), m3 = ({ visible: e, className: t }) => /* @__PURE__ */ E.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ E.createElement("div", {
  className: "sonner-spinner"
}, p3.map((n, r) => /* @__PURE__ */ E.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), h3 = /* @__PURE__ */ E.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ E.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), v3 = /* @__PURE__ */ E.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ E.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), g3 = /* @__PURE__ */ E.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ E.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), b3 = /* @__PURE__ */ E.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ E.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), y3 = /* @__PURE__ */ E.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ E.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ E.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), x3 = () => {
  const [e, t] = E.useState(document.hidden);
  return E.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let nf = 1;
class w3 {
  constructor() {
    this.subscribe = (t) => (this.subscribers.push(t), () => {
      const n = this.subscribers.indexOf(t);
      this.subscribers.splice(n, 1);
    }), this.publish = (t) => {
      this.subscribers.forEach((n) => n(t));
    }, this.addToast = (t) => {
      this.publish(t), this.toasts = [
        ...this.toasts,
        t
      ];
    }, this.create = (t) => {
      var n;
      const { message: r, ...o } = t, a = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : nf++, i = this.toasts.find((l) => l.id === a), s = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(a) && this.dismissedToasts.delete(a), i ? this.toasts = this.toasts.map((l) => l.id === a ? (this.publish({
        ...l,
        ...t,
        id: a,
        title: r
      }), {
        ...l,
        ...t,
        id: a,
        dismissible: s,
        title: r
      }) : l) : this.addToast({
        title: r,
        ...o,
        dismissible: s,
        id: a
      }), a;
    }, this.dismiss = (t) => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach((n) => n({
      id: t,
      dismiss: !0
    })))) : this.toasts.forEach((n) => {
      this.subscribers.forEach((r) => r({
        id: n.id,
        dismiss: !0
      }));
    }), t), this.message = (t, n) => this.create({
      ...n,
      message: t
    }), this.error = (t, n) => this.create({
      ...n,
      message: t,
      type: "error"
    }), this.success = (t, n) => this.create({
      ...n,
      type: "success",
      message: t
    }), this.info = (t, n) => this.create({
      ...n,
      type: "info",
      message: t
    }), this.warning = (t, n) => this.create({
      ...n,
      type: "warning",
      message: t
    }), this.loading = (t, n) => this.create({
      ...n,
      type: "loading",
      message: t
    }), this.promise = (t, n) => {
      if (!n)
        return;
      let r;
      n.loading !== void 0 && (r = this.create({
        ...n,
        promise: t,
        type: "loading",
        message: n.loading,
        description: typeof n.description != "function" ? n.description : void 0
      }));
      const o = Promise.resolve(t instanceof Function ? t() : t);
      let a = r !== void 0, i;
      const s = o.then(async (c) => {
        if (i = [
          "resolve",
          c
        ], E.isValidElement(c))
          a = !1, this.create({
            id: r,
            type: "default",
            message: c
          });
        else if (_3(c) && !c.ok) {
          a = !1;
          const u = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, p = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description, h = typeof u == "object" && !E.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: p,
            ...h
          });
        } else if (c instanceof Error) {
          a = !1;
          const u = typeof n.error == "function" ? await n.error(c) : n.error, p = typeof n.description == "function" ? await n.description(c) : n.description, h = typeof u == "object" && !E.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: p,
            ...h
          });
        } else if (n.success !== void 0) {
          a = !1;
          const u = typeof n.success == "function" ? await n.success(c) : n.success, p = typeof n.description == "function" ? await n.description(c) : n.description, h = typeof u == "object" && !E.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "success",
            description: p,
            ...h
          });
        }
      }).catch(async (c) => {
        if (i = [
          "reject",
          c
        ], n.error !== void 0) {
          a = !1;
          const f = typeof n.error == "function" ? await n.error(c) : n.error, u = typeof n.description == "function" ? await n.description(c) : n.description, v = typeof f == "object" && !E.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: r,
            type: "error",
            description: u,
            ...v
          });
        }
      }).finally(() => {
        a && (this.dismiss(r), r = void 0), n.finally == null || n.finally.call(n);
      }), l = () => new Promise((c, f) => s.then(() => i[0] === "reject" ? f(i[1]) : c(i[1])).catch(f));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: l
      } : Object.assign(r, {
        unwrap: l
      });
    }, this.custom = (t, n) => {
      const r = (n == null ? void 0 : n.id) || nf++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const St = new w3(), S3 = (e, t) => {
  const n = (t == null ? void 0 : t.id) || nf++;
  return St.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, _3 = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", C3 = S3, P3 = () => St.toasts, E3 = () => St.getActiveToasts();
Object.assign(C3, {
  success: St.success,
  info: St.info,
  warning: St.warning,
  error: St.error,
  custom: St.custom,
  message: St.message,
  promise: St.promise,
  dismiss: St.dismiss,
  loading: St.loading
}, {
  getHistory: P3,
  getToasts: E3
});
d3("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function za(e) {
  return e.label !== void 0;
}
const R3 = 3, T3 = "24px", M3 = "16px", fy = 4e3, N3 = 356, O3 = 14, A3 = 45, D3 = 200;
function rn(...e) {
  return e.filter(Boolean).join(" ");
}
function j3(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const k3 = (e) => {
  var t, n, r, o, a, i, s, l, c;
  const { invert: f, toast: u, unstyled: p, interacting: v, setHeights: h, visibleToasts: g, heights: b, index: y, toasts: x, expanded: w, removeToast: S, defaultRichColors: C, closeButton: P, style: _, cancelButtonStyle: R, actionButtonStyle: T, className: z = "", descriptionClassName: j = "", duration: B, position: A, gap: H, expandByDefault: q, classNames: $, icons: F, closeButtonAriaLabel: M = "Close toast" } = e, [G, oe] = E.useState(null), [Z, L] = E.useState(null), [D, W] = E.useState(!1), [V, K] = E.useState(!1), [I, Y] = E.useState(!1), [J, te] = E.useState(!1), [ne, X] = E.useState(!1), [ae, k] = E.useState(0), [re, pe] = E.useState(0), me = E.useRef(u.duration || B || fy), ge = E.useRef(null), de = E.useRef(null), Ee = y === 0, Ge = y + 1 <= g, _e = u.type, $e = u.dismissible !== !1, it = u.className || "", nt = u.descriptionClassName || "", Ze = E.useMemo(() => b.findIndex((ue) => ue.toastId === u.id) || 0, [
    b,
    u.id
  ]), lt = E.useMemo(() => {
    var ue;
    return (ue = u.closeButton) != null ? ue : P;
  }, [
    u.closeButton,
    P
  ]), bt = E.useMemo(() => u.duration || B || fy, [
    u.duration,
    B
  ]), mt = E.useRef(0), Xe = E.useRef(0), Ot = E.useRef(0), Qe = E.useRef(null), [rt, qt] = A.split("-"), nn = E.useMemo(() => b.reduce((ue, xe, Ne) => Ne >= Ze ? ue : ue + xe.height, 0), [
    b,
    Ze
  ]), Mn = x3(), Gn = u.invert || f, Ht = _e === "loading";
  Xe.current = E.useMemo(() => Ze * H + nn, [
    Ze,
    nn
  ]), E.useEffect(() => {
    me.current = bt;
  }, [
    bt
  ]), E.useEffect(() => {
    W(!0);
  }, []), E.useEffect(() => {
    const ue = de.current;
    if (ue) {
      const xe = ue.getBoundingClientRect().height;
      return pe(xe), h((Ne) => [
        {
          toastId: u.id,
          height: xe,
          position: u.position
        },
        ...Ne
      ]), () => h((Ne) => Ne.filter((Oe) => Oe.toastId !== u.id));
    }
  }, [
    h,
    u.id
  ]), E.useLayoutEffect(() => {
    if (!D) return;
    const ue = de.current, xe = ue.style.height;
    ue.style.height = "auto";
    const Ne = ue.getBoundingClientRect().height;
    ue.style.height = xe, pe(Ne), h((Oe) => Oe.find((Le) => Le.toastId === u.id) ? Oe.map((Le) => Le.toastId === u.id ? {
      ...Le,
      height: Ne
    } : Le) : [
      {
        toastId: u.id,
        height: Ne,
        position: u.position
      },
      ...Oe
    ]);
  }, [
    D,
    u.title,
    u.description,
    h,
    u.id
  ]);
  const ce = E.useCallback(() => {
    K(!0), k(Xe.current), h((ue) => ue.filter((xe) => xe.toastId !== u.id)), setTimeout(() => {
      S(u);
    }, D3);
  }, [
    u,
    S,
    h,
    Xe
  ]);
  E.useEffect(() => {
    if (u.promise && _e === "loading" || u.duration === 1 / 0 || u.type === "loading") return;
    let ue;
    return w || v || Mn ? (() => {
      if (Ot.current < mt.current) {
        const Oe = (/* @__PURE__ */ new Date()).getTime() - mt.current;
        me.current = me.current - Oe;
      }
      Ot.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      me.current !== 1 / 0 && (mt.current = (/* @__PURE__ */ new Date()).getTime(), ue = setTimeout(() => {
        u.onAutoClose == null || u.onAutoClose.call(u, u), ce();
      }, me.current));
    })(), () => clearTimeout(ue);
  }, [
    w,
    v,
    u,
    _e,
    Mn,
    ce
  ]), E.useEffect(() => {
    u.delete && ce();
  }, [
    ce,
    u.delete
  ]);
  function ye() {
    var ue;
    if (F != null && F.loading) {
      var xe;
      return /* @__PURE__ */ E.createElement("div", {
        className: rn($ == null ? void 0 : $.loader, u == null || (xe = u.classNames) == null ? void 0 : xe.loader, "sonner-loader"),
        "data-visible": _e === "loading"
      }, F.loading);
    }
    return /* @__PURE__ */ E.createElement(m3, {
      className: rn($ == null ? void 0 : $.loader, u == null || (ue = u.classNames) == null ? void 0 : ue.loader),
      visible: _e === "loading"
    });
  }
  const Pe = u.icon || (F == null ? void 0 : F[_e]) || f3(_e);
  var be, Me;
  return /* @__PURE__ */ E.createElement("li", {
    tabIndex: 0,
    ref: de,
    className: rn(z, it, $ == null ? void 0 : $.toast, u == null || (t = u.classNames) == null ? void 0 : t.toast, $ == null ? void 0 : $.default, $ == null ? void 0 : $[_e], u == null || (n = u.classNames) == null ? void 0 : n[_e]),
    "data-sonner-toast": "",
    "data-rich-colors": (be = u.richColors) != null ? be : C,
    "data-styled": !(u.jsx || u.unstyled || p),
    "data-mounted": D,
    "data-promise": !!u.promise,
    "data-swiped": ne,
    "data-removed": V,
    "data-visible": Ge,
    "data-y-position": rt,
    "data-x-position": qt,
    "data-index": y,
    "data-front": Ee,
    "data-swiping": I,
    "data-dismissible": $e,
    "data-type": _e,
    "data-invert": Gn,
    "data-swipe-out": J,
    "data-swipe-direction": Z,
    "data-expanded": !!(w || q && D),
    style: {
      "--index": y,
      "--toasts-before": y,
      "--z-index": x.length - y,
      "--offset": `${V ? ae : Xe.current}px`,
      "--initial-height": q ? "auto" : `${re}px`,
      ..._,
      ...u.style
    },
    onDragEnd: () => {
      Y(!1), oe(null), Qe.current = null;
    },
    onPointerDown: (ue) => {
      Ht || !$e || (ge.current = /* @__PURE__ */ new Date(), k(Xe.current), ue.target.setPointerCapture(ue.pointerId), ue.target.tagName !== "BUTTON" && (Y(!0), Qe.current = {
        x: ue.clientX,
        y: ue.clientY
      }));
    },
    onPointerUp: () => {
      var ue, xe, Ne;
      if (J || !$e) return;
      Qe.current = null;
      const Oe = Number(((ue = de.current) == null ? void 0 : ue.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), ht = Number(((xe = de.current) == null ? void 0 : xe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Le = (/* @__PURE__ */ new Date()).getTime() - ((Ne = ge.current) == null ? void 0 : Ne.getTime()), We = G === "x" ? Oe : ht, At = Math.abs(We) / Le;
      if (Math.abs(We) >= A3 || At > 0.11) {
        k(Xe.current), u.onDismiss == null || u.onDismiss.call(u, u), L(G === "x" ? Oe > 0 ? "right" : "left" : ht > 0 ? "down" : "up"), ce(), te(!0);
        return;
      } else {
        var ct, Et;
        (ct = de.current) == null || ct.style.setProperty("--swipe-amount-x", "0px"), (Et = de.current) == null || Et.style.setProperty("--swipe-amount-y", "0px");
      }
      X(!1), Y(!1), oe(null);
    },
    onPointerMove: (ue) => {
      var xe, Ne, Oe;
      if (!Qe.current || !$e || ((xe = window.getSelection()) == null ? void 0 : xe.toString().length) > 0) return;
      const Le = ue.clientY - Qe.current.y, We = ue.clientX - Qe.current.x;
      var At;
      const ct = (At = e.swipeDirections) != null ? At : j3(A);
      !G && (Math.abs(We) > 1 || Math.abs(Le) > 1) && oe(Math.abs(We) > Math.abs(Le) ? "x" : "y");
      let Et = {
        x: 0,
        y: 0
      };
      const xa = (yn) => 1 / (1.5 + Math.abs(yn) / 20);
      if (G === "y") {
        if (ct.includes("top") || ct.includes("bottom"))
          if (ct.includes("top") && Le < 0 || ct.includes("bottom") && Le > 0)
            Et.y = Le;
          else {
            const yn = Le * xa(Le);
            Et.y = Math.abs(yn) < Math.abs(Le) ? yn : Le;
          }
      } else if (G === "x" && (ct.includes("left") || ct.includes("right")))
        if (ct.includes("left") && We < 0 || ct.includes("right") && We > 0)
          Et.x = We;
        else {
          const yn = We * xa(We);
          Et.x = Math.abs(yn) < Math.abs(We) ? yn : We;
        }
      (Math.abs(Et.x) > 0 || Math.abs(Et.y) > 0) && X(!0), (Ne = de.current) == null || Ne.style.setProperty("--swipe-amount-x", `${Et.x}px`), (Oe = de.current) == null || Oe.style.setProperty("--swipe-amount-y", `${Et.y}px`);
    }
  }, lt && !u.jsx && _e !== "loading" ? /* @__PURE__ */ E.createElement("button", {
    "aria-label": M,
    "data-disabled": Ht,
    "data-close-button": !0,
    onClick: Ht || !$e ? () => {
    } : () => {
      ce(), u.onDismiss == null || u.onDismiss.call(u, u);
    },
    className: rn($ == null ? void 0 : $.closeButton, u == null || (r = u.classNames) == null ? void 0 : r.closeButton)
  }, (Me = F == null ? void 0 : F.close) != null ? Me : y3) : null, (_e || u.icon || u.promise) && u.icon !== null && ((F == null ? void 0 : F[_e]) !== null || u.icon) ? /* @__PURE__ */ E.createElement("div", {
    "data-icon": "",
    className: rn($ == null ? void 0 : $.icon, u == null || (o = u.classNames) == null ? void 0 : o.icon)
  }, u.promise || u.type === "loading" && !u.icon ? u.icon || ye() : null, u.type !== "loading" ? Pe : null) : null, /* @__PURE__ */ E.createElement("div", {
    "data-content": "",
    className: rn($ == null ? void 0 : $.content, u == null || (a = u.classNames) == null ? void 0 : a.content)
  }, /* @__PURE__ */ E.createElement("div", {
    "data-title": "",
    className: rn($ == null ? void 0 : $.title, u == null || (i = u.classNames) == null ? void 0 : i.title)
  }, u.jsx ? u.jsx : typeof u.title == "function" ? u.title() : u.title), u.description ? /* @__PURE__ */ E.createElement("div", {
    "data-description": "",
    className: rn(j, nt, $ == null ? void 0 : $.description, u == null || (s = u.classNames) == null ? void 0 : s.description)
  }, typeof u.description == "function" ? u.description() : u.description) : null), /* @__PURE__ */ E.isValidElement(u.cancel) ? u.cancel : u.cancel && za(u.cancel) ? /* @__PURE__ */ E.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: u.cancelButtonStyle || R,
    onClick: (ue) => {
      za(u.cancel) && $e && (u.cancel.onClick == null || u.cancel.onClick.call(u.cancel, ue), ce());
    },
    className: rn($ == null ? void 0 : $.cancelButton, u == null || (l = u.classNames) == null ? void 0 : l.cancelButton)
  }, u.cancel.label) : null, /* @__PURE__ */ E.isValidElement(u.action) ? u.action : u.action && za(u.action) ? /* @__PURE__ */ E.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: u.actionButtonStyle || T,
    onClick: (ue) => {
      za(u.action) && (u.action.onClick == null || u.action.onClick.call(u.action, ue), !ue.defaultPrevented && ce());
    },
    className: rn($ == null ? void 0 : $.actionButton, u == null || (c = u.classNames) == null ? void 0 : c.actionButton)
  }, u.action.label) : null);
};
function py() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function I3(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, o) => {
    const a = o === 1, i = a ? "--mobile-offset" : "--offset", s = a ? M3 : T3;
    function l(c) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((f) => {
        n[`${i}-${f}`] = typeof c == "number" ? `${c}px` : c;
      });
    }
    typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((c) => {
      r[c] === void 0 ? n[`${i}-${c}`] = s : n[`${i}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c];
    }) : l(s);
  }), n;
}
const $3 = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const { invert: r, position: o = "bottom-right", hotkey: a = [
    "altKey",
    "KeyT"
  ], expand: i, closeButton: s, className: l, offset: c, mobileOffset: f, theme: u = "light", richColors: p, duration: v, style: h, visibleToasts: g = R3, toastOptions: b, dir: y = py(), gap: x = O3, icons: w, containerAriaLabel: S = "Notifications" } = t, [C, P] = E.useState([]), _ = E.useMemo(() => Array.from(new Set([
    o
  ].concat(C.filter((Z) => Z.position).map((Z) => Z.position)))), [
    C,
    o
  ]), [R, T] = E.useState([]), [z, j] = E.useState(!1), [B, A] = E.useState(!1), [H, q] = E.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), $ = E.useRef(null), F = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), M = E.useRef(null), G = E.useRef(!1), oe = E.useCallback((Z) => {
    P((L) => {
      var D;
      return (D = L.find((W) => W.id === Z.id)) != null && D.delete || St.dismiss(Z.id), L.filter(({ id: W }) => W !== Z.id);
    });
  }, []);
  return E.useEffect(() => St.subscribe((Z) => {
    if (Z.dismiss) {
      requestAnimationFrame(() => {
        P((L) => L.map((D) => D.id === Z.id ? {
          ...D,
          delete: !0
        } : D));
      });
      return;
    }
    setTimeout(() => {
      of.flushSync(() => {
        P((L) => {
          const D = L.findIndex((W) => W.id === Z.id);
          return D !== -1 ? [
            ...L.slice(0, D),
            {
              ...L[D],
              ...Z
            },
            ...L.slice(D + 1)
          ] : [
            Z,
            ...L
          ];
        });
      });
    });
  }), [
    C
  ]), E.useEffect(() => {
    if (u !== "system") {
      q(u);
      return;
    }
    if (u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? q("dark") : q("light")), typeof window > "u") return;
    const Z = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      Z.addEventListener("change", ({ matches: L }) => {
        q(L ? "dark" : "light");
      });
    } catch {
      Z.addListener(({ matches: D }) => {
        try {
          q(D ? "dark" : "light");
        } catch (W) {
          console.error(W);
        }
      });
    }
  }, [
    u
  ]), E.useEffect(() => {
    C.length <= 1 && j(!1);
  }, [
    C
  ]), E.useEffect(() => {
    const Z = (L) => {
      var D;
      if (a.every((K) => L[K] || L.code === K)) {
        var V;
        j(!0), (V = $.current) == null || V.focus();
      }
      L.code === "Escape" && (document.activeElement === $.current || (D = $.current) != null && D.contains(document.activeElement)) && j(!1);
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [
    a
  ]), E.useEffect(() => {
    if ($.current)
      return () => {
        M.current && (M.current.focus({
          preventScroll: !0
        }), M.current = null, G.current = !1);
      };
  }, [
    $.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ E.createElement("section", {
    ref: n,
    "aria-label": `${S} ${F}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, _.map((Z, L) => {
    var D;
    const [W, V] = Z.split("-");
    return C.length ? /* @__PURE__ */ E.createElement("ol", {
      key: Z,
      dir: y === "auto" ? py() : y,
      tabIndex: -1,
      ref: $,
      className: l,
      "data-sonner-toaster": !0,
      "data-sonner-theme": H,
      "data-y-position": W,
      "data-lifted": z && C.length > 1 && !i,
      "data-x-position": V,
      style: {
        "--front-toast-height": `${((D = R[0]) == null ? void 0 : D.height) || 0}px`,
        "--width": `${N3}px`,
        "--gap": `${x}px`,
        ...h,
        ...I3(c, f)
      },
      onBlur: (K) => {
        G.current && !K.currentTarget.contains(K.relatedTarget) && (G.current = !1, M.current && (M.current.focus({
          preventScroll: !0
        }), M.current = null));
      },
      onFocus: (K) => {
        K.target instanceof HTMLElement && K.target.dataset.dismissible === "false" || G.current || (G.current = !0, M.current = K.relatedTarget);
      },
      onMouseEnter: () => j(!0),
      onMouseMove: () => j(!0),
      onMouseLeave: () => {
        B || j(!1);
      },
      onDragEnd: () => j(!1),
      onPointerDown: (K) => {
        K.target instanceof HTMLElement && K.target.dataset.dismissible === "false" || A(!0);
      },
      onPointerUp: () => A(!1)
    }, C.filter((K) => !K.position && L === 0 || K.position === Z).map((K, I) => {
      var Y, J;
      return /* @__PURE__ */ E.createElement(k3, {
        key: K.id,
        icons: w,
        index: I,
        toast: K,
        defaultRichColors: p,
        duration: (Y = b == null ? void 0 : b.duration) != null ? Y : v,
        className: b == null ? void 0 : b.className,
        descriptionClassName: b == null ? void 0 : b.descriptionClassName,
        invert: r,
        visibleToasts: g,
        closeButton: (J = b == null ? void 0 : b.closeButton) != null ? J : s,
        interacting: B,
        position: Z,
        style: b == null ? void 0 : b.style,
        unstyled: b == null ? void 0 : b.unstyled,
        classNames: b == null ? void 0 : b.classNames,
        cancelButtonStyle: b == null ? void 0 : b.cancelButtonStyle,
        actionButtonStyle: b == null ? void 0 : b.actionButtonStyle,
        closeButtonAriaLabel: b == null ? void 0 : b.closeButtonAriaLabel,
        removeToast: oe,
        toasts: C.filter((te) => te.position == K.position),
        heights: R.filter((te) => te.position == K.position),
        setHeights: T,
        expandByDefault: i,
        gap: x,
        expanded: z,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), AU = ({ ...e }) => {
  const { theme: t = "system" } = u3();
  return /* @__PURE__ */ d.jsx(
    $3,
    {
      theme: t,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...e
    }
  );
};
var hm = "Tabs", [L3] = Be(hm, [
  gn
]), xP = gn(), [F3, vm] = L3(hm), wP = m.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: s,
      activationMode: l = "automatic",
      ...c
    } = e, f = Zt(s), [u, p] = Ve({
      prop: r,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ d.jsx(
      F3,
      {
        scope: n,
        baseId: ze(),
        value: u,
        onValueChange: p,
        orientation: i,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ d.jsx(
          ee.div,
          {
            dir: f,
            "data-orientation": i,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
wP.displayName = hm;
var SP = "TabsList", _P = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = vm(SP, n), i = xP(n);
    return /* @__PURE__ */ d.jsx(
      ua,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ d.jsx(
          ee.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
_P.displayName = SP;
var CP = "TabsTrigger", PP = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, i = vm(CP, n), s = xP(n), l = TP(i.baseId, r), c = MP(i.baseId, r), f = r === i.value;
    return /* @__PURE__ */ d.jsx(
      da,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ d.jsx(
          ee.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": c,
            "data-state": f ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...a,
            ref: t,
            onMouseDown: U(e.onMouseDown, (u) => {
              !o && u.button === 0 && u.ctrlKey === !1 ? i.onValueChange(r) : u.preventDefault();
            }),
            onKeyDown: U(e.onKeyDown, (u) => {
              [" ", "Enter"].includes(u.key) && i.onValueChange(r);
            }),
            onFocus: U(e.onFocus, () => {
              const u = i.activationMode !== "manual";
              !f && !o && u && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
PP.displayName = CP;
var EP = "TabsContent", RP = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...i } = e, s = vm(EP, n), l = TP(s.baseId, r), c = MP(s.baseId, r), f = r === s.value, u = m.useRef(f);
    return m.useEffect(() => {
      const p = requestAnimationFrame(() => u.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ d.jsx(qe, { present: o || f, children: ({ present: p }) => /* @__PURE__ */ d.jsx(
      ee.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !p,
        id: c,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: u.current ? "0s" : void 0
        },
        children: p && a
      }
    ) });
  }
);
RP.displayName = EP;
function TP(e, t) {
  return `${e}-trigger-${t}`;
}
function MP(e, t) {
  return `${e}-content-${t}`;
}
var z3 = wP, B3 = _P, q3 = PP, H3 = RP;
function DU({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    z3,
    {
      "data-slot": "tabs",
      className: O("flex flex-col gap-2", e),
      ...t
    }
  );
}
function jU({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    B3,
    {
      "data-slot": "tabs-list",
      className: O(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",
        e
      ),
      ...t
    }
  );
}
function kU({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    q3,
    {
      "data-slot": "tabs-trigger",
      className: O(
        "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function IU({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    H3,
    {
      "data-slot": "tabs-content",
      className: O("flex-1 outline-none", e),
      ...t
    }
  );
}
var W3 = "Toggle", gm = m.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [i = !1, s] = Ve({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ d.jsx(
    ee.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: U(e.onClick, () => {
        e.disabled || s(!i);
      })
    }
  );
});
gm.displayName = W3;
var V3 = gm, lo = "ToggleGroup", [NP] = Be(lo, [
  gn
]), OP = gn(), bm = E.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single") {
    const o = r;
    return /* @__PURE__ */ d.jsx(G3, { ...o, ref: t });
  }
  if (n === "multiple") {
    const o = r;
    return /* @__PURE__ */ d.jsx(U3, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${lo}\``);
});
bm.displayName = lo;
var [AP, DP] = NP(lo), G3 = E.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = Ve({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ d.jsx(
    AP,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: i ? [i] : [],
      onItemActivate: s,
      onItemDeactivate: E.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ d.jsx(jP, { ...a, ref: t })
    }
  );
}), U3 = E.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i = [], s] = Ve({
    prop: n,
    defaultProp: r,
    onChange: o
  }), l = E.useCallback(
    (f) => s((u = []) => [...u, f]),
    [s]
  ), c = E.useCallback(
    (f) => s((u = []) => u.filter((p) => p !== f)),
    [s]
  );
  return /* @__PURE__ */ d.jsx(
    AP,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: l,
      onItemDeactivate: c,
      children: /* @__PURE__ */ d.jsx(jP, { ...a, ref: t })
    }
  );
});
bm.displayName = lo;
var [K3, Y3] = NP(lo), jP = E.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...l
    } = e, c = OP(n), f = Zt(i), u = { role: "group", dir: f, ...l };
    return /* @__PURE__ */ d.jsx(K3, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ d.jsx(
      ua,
      {
        asChild: !0,
        ...c,
        orientation: a,
        dir: f,
        loop: s,
        children: /* @__PURE__ */ d.jsx(ee.div, { ...u, ref: t })
      }
    ) : /* @__PURE__ */ d.jsx(ee.div, { ...u, ref: t }) });
  }
), _i = "ToggleGroupItem", kP = E.forwardRef(
  (e, t) => {
    const n = DP(_i, e.__scopeToggleGroup), r = Y3(_i, e.__scopeToggleGroup), o = OP(e.__scopeToggleGroup), a = n.value.includes(e.value), i = r.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, l = E.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ d.jsx(
      da,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: l,
        children: /* @__PURE__ */ d.jsx(my, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ d.jsx(my, { ...s, ref: t });
  }
);
kP.displayName = _i;
var my = E.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, a = DP(_i, n), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ d.jsx(
      gm,
      {
        ...s,
        ...o,
        ref: t,
        onPressedChange: (l) => {
          l ? a.onItemActivate(r) : a.onItemDeactivate(r);
        }
      }
    );
  }
), X3 = bm, J3 = kP;
const IP = fr(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function $U({
  className: e,
  variant: t,
  size: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    V3,
    {
      "data-slot": "toggle",
      className: O(IP({ variant: t, size: n, className: e })),
      ...r
    }
  );
}
const $P = m.createContext({
  size: "default",
  variant: "default"
});
function LU({
  className: e,
  variant: t,
  size: n,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ d.jsx(
    X3,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": n,
      className: O(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        e
      ),
      ...o,
      children: /* @__PURE__ */ d.jsx($P.Provider, { value: { variant: t, size: n }, children: r })
    }
  );
}
function FU({
  className: e,
  children: t,
  variant: n,
  size: r,
  ...o
}) {
  const a = m.useContext($P);
  return /* @__PURE__ */ d.jsx(
    J3,
    {
      "data-slot": "toggle-group-item",
      "data-variant": a.variant || n,
      "data-size": a.size || r,
      className: O(
        IP({
          variant: a.variant || n,
          size: a.size || r
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        e
      ),
      ...o,
      children: t
    }
  );
}
export {
  E4 as Accordion,
  M4 as AccordionContent,
  R4 as AccordionItem,
  T4 as AccordionTrigger,
  e4 as Alert,
  n4 as AlertDescription,
  N4 as AlertDialog,
  $4 as AlertDialogAction,
  L4 as AlertDialogCancel,
  A4 as AlertDialogContent,
  I4 as AlertDialogDescription,
  j4 as AlertDialogFooter,
  D4 as AlertDialogHeader,
  DO as AlertDialogOverlay,
  AO as AlertDialogPortal,
  k4 as AlertDialogTitle,
  O4 as AlertDialogTrigger,
  t4 as AlertTitle,
  F4 as AspectRatio,
  z4 as Avatar,
  q4 as AvatarFallback,
  B4 as AvatarImage,
  r4 as Badge,
  H4 as Breadcrumb,
  Y4 as BreadcrumbEllipsis,
  V4 as BreadcrumbItem,
  G4 as BreadcrumbLink,
  W4 as BreadcrumbList,
  U4 as BreadcrumbPage,
  K4 as BreadcrumbSeparator,
  cf as Button,
  X4 as Calendar,
  o4 as Card,
  l4 as CardAction,
  c4 as CardContent,
  s4 as CardDescription,
  u4 as CardFooter,
  a4 as CardHeader,
  i4 as CardTitle,
  J4 as Carousel,
  Z4 as CarouselContent,
  Q4 as CarouselItem,
  tV as CarouselNext,
  eV as CarouselPrevious,
  nV as ChartContainer,
  aV as ChartLegend,
  iV as ChartLegendContent,
  AL as ChartStyle,
  rV as ChartTooltip,
  oV as ChartTooltipContent,
  sV as Checkbox,
  lV as Collapsible,
  uV as CollapsibleContent,
  cV as CollapsibleTrigger,
  vF as Command,
  mV as CommandDialog,
  gV as CommandEmpty,
  bV as CommandGroup,
  hV as CommandInput,
  xV as CommandItem,
  vV as CommandList,
  yV as CommandSeparator,
  wV as CommandShortcut,
  ON as Container,
  SV as ContextMenu,
  AV as ContextMenuCheckboxItem,
  NV as ContextMenuContent,
  CV as ContextMenuGroup,
  OV as ContextMenuItem,
  jV as ContextMenuLabel,
  PV as ContextMenuPortal,
  RV as ContextMenuRadioGroup,
  DV as ContextMenuRadioItem,
  kV as ContextMenuSeparator,
  IV as ContextMenuShortcut,
  EV as ContextMenuSub,
  MV as ContextMenuSubContent,
  TV as ContextMenuSubTrigger,
  _V as ContextMenuTrigger,
  S4 as DataTable,
  cF as Dialog,
  fV as DialogClose,
  fF as DialogContent,
  hF as DialogDescription,
  pV as DialogFooter,
  pF as DialogHeader,
  dF as DialogOverlay,
  uF as DialogPortal,
  mF as DialogTitle,
  dV as DialogTrigger,
  $V as Drawer,
  FV as DrawerClose,
  zV as DrawerContent,
  WV as DrawerDescription,
  qV as DrawerFooter,
  BV as DrawerHeader,
  rB as DrawerOverlay,
  nB as DrawerPortal,
  HV as DrawerTitle,
  LV as DrawerTrigger,
  C4 as Dropdown,
  VV as DropdownMenu,
  JV as DropdownMenuCheckboxItem,
  KV as DropdownMenuContent,
  YV as DropdownMenuGroup,
  XV as DropdownMenuItem,
  eG as DropdownMenuLabel,
  GV as DropdownMenuPortal,
  ZV as DropdownMenuRadioGroup,
  QV as DropdownMenuRadioItem,
  tG as DropdownMenuSeparator,
  nG as DropdownMenuShortcut,
  rG as DropdownMenuSub,
  aG as DropdownMenuSubContent,
  oG as DropdownMenuSubTrigger,
  UV as DropdownMenuTrigger,
  AN as Flex,
  iG as Form,
  uG as FormControl,
  dG as FormDescription,
  sG as FormField,
  lG as FormItem,
  cG as FormLabel,
  fG as FormMessage,
  DN as Grid,
  pG as HoverCard,
  hG as HoverCardContent,
  mG as HoverCardTrigger,
  dR as Input,
  vG as InputOTP,
  gG as InputOTPGroup,
  yG as InputOTPSeparator,
  bG as InputOTPSlot,
  ZB as Label,
  xG as Menubar,
  RG as MenubarCheckboxItem,
  PG as MenubarContent,
  SG as MenubarGroup,
  EG as MenubarItem,
  MG as MenubarLabel,
  wG as MenubarMenu,
  rq as MenubarPortal,
  _G as MenubarRadioGroup,
  TG as MenubarRadioItem,
  NG as MenubarSeparator,
  OG as MenubarShortcut,
  AG as MenubarSub,
  jG as MenubarSubContent,
  DG as MenubarSubTrigger,
  CG as MenubarTrigger,
  $i as Modal,
  kG as NavigationMenu,
  FG as NavigationMenuContent,
  BG as NavigationMenuIndicator,
  $G as NavigationMenuItem,
  zG as NavigationMenuLink,
  IG as NavigationMenuList,
  LG as NavigationMenuTrigger,
  Tq as NavigationMenuViewport,
  $N as Padded,
  qG as Pagination,
  HG as PaginationContent,
  UG as PaginationEllipsis,
  WG as PaginationItem,
  zC as PaginationLink,
  GG as PaginationNext,
  VG as PaginationPrevious,
  KG as Popover,
  JG as PopoverAnchor,
  XG as PopoverContent,
  YG as PopoverTrigger,
  ZG as Progress,
  QG as RadioGroup,
  eU as RadioGroupItem,
  rU as ResizableHandle,
  nU as ResizablePanel,
  tU as ResizablePanelGroup,
  oU as ScrollArea,
  ZH as ScrollBar,
  d4 as Select,
  P4 as SelectBox,
  h4 as SelectContent,
  f4 as SelectGroup,
  g4 as SelectItem,
  v4 as SelectLabel,
  xN as SelectScrollDownButton,
  yN as SelectScrollUpButton,
  b4 as SelectSeparator,
  m4 as SelectTrigger,
  p4 as SelectValue,
  rW as Separator,
  oW as Sheet,
  iU as SheetClose,
  sW as SheetContent,
  uW as SheetDescription,
  sU as SheetFooter,
  lW as SheetHeader,
  cW as SheetTitle,
  aU as SheetTrigger,
  cU as Sidebar,
  gU as SidebarContent,
  hU as SidebarFooter,
  bU as SidebarGroup,
  xU as SidebarGroupAction,
  wU as SidebarGroupContent,
  yU as SidebarGroupLabel,
  mU as SidebarHeader,
  pU as SidebarInput,
  fU as SidebarInset,
  SU as SidebarMenu,
  PU as SidebarMenuAction,
  EU as SidebarMenuBadge,
  CU as SidebarMenuButton,
  _U as SidebarMenuItem,
  RU as SidebarMenuSkeleton,
  TU as SidebarMenuSub,
  NU as SidebarMenuSubButton,
  MU as SidebarMenuSubItem,
  lU as SidebarProvider,
  dU as SidebarRail,
  vU as SidebarSeparator,
  uU as SidebarTrigger,
  dy as Skeleton,
  OU as Slider,
  y4 as Switch,
  RN as Table,
  MN as TableBody,
  w4 as TableCaption,
  th as TableCell,
  x4 as TableFooter,
  NN as TableHead,
  TN as TableHeader,
  As as TableRow,
  DU as Tabs,
  IU as TabsContent,
  jU as TabsList,
  kU as TabsTrigger,
  _4 as Textarea,
  AU as Toaster,
  $U as Toggle,
  LU as ToggleGroup,
  FU as ToggleGroupItem,
  AW as Tooltip,
  jW as TooltipContent,
  aP as TooltipProvider,
  DW as TooltipTrigger,
  cR as badgeVariants,
  Fr as buttonVariants,
  O as cn,
  Rq as navigationMenuTriggerStyle,
  IP as toggleVariants,
  as as useFormField,
  dW as useIsMobile,
  bs as useSidebar
};
