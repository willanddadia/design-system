import { jsxs as U, jsx as f, Fragment as ht } from "react/jsx-runtime";
import { XCircle as Fh, AlertCircle as Hh, CheckCircle as Wh, Info as Yh, X as gm, ExternalLink as Vh, CheckIcon as lr, ChevronDownIcon as Gr, ChevronUpIcon as Gh, Loader2 as Uh, MoreHorizontalIcon as Kh, ChevronRightIcon as Ur, ChevronLeftIcon as Xh, Filter as Qh, Search as Jh, ChevronDown as Zh, Check as vm, MoreHorizontal as eg, ChevronRight as bm, ChevronLeft as tg, ArrowRight as ng, ArrowLeft as rg, XIcon as ym, SearchIcon as ag, CircleIcon as Kr, MinusIcon as og, GripVerticalIcon as ig, PanelLeftIcon as sg } from "lucide-react";
import { cva as qt } from "class-variance-authority";
import Jt, { clsx as lg } from "clsx";
import { twMerge as ug } from "tailwind-merge";
import { Slot as rt } from "@radix-ui/react-slot";
import * as Ye from "@radix-ui/react-select";
import * as ou from "@radix-ui/react-switch";
import * as M from "react";
import x, { forwardRef as Ct, useState as kt, useRef as Cn, useEffect as ct, createContext as an, useContext as on, useLayoutEffect as wm, useCallback as xm, isValidElement as cg, PureComponent as Xr, useImperativeHandle as dg, useMemo as _m, cloneElement as fg } from "react";
import * as Un from "@radix-ui/react-accordion";
import * as Rt from "@radix-ui/react-alert-dialog";
import * as mg from "@radix-ui/react-aspect-ratio";
import * as gl from "@radix-ui/react-avatar";
import * as iu from "@radix-ui/react-checkbox";
import * as vl from "@radix-ui/react-collapsible";
import * as we from "@radix-ui/react-dialog";
import { Primitive as $t } from "@radix-ui/react-primitive";
import { useId as wn } from "@radix-ui/react-id";
import { composeRefs as Kn } from "@radix-ui/react-compose-refs";
import * as $e from "@radix-ui/react-context-menu";
import * as Be from "@radix-ui/react-dropdown-menu";
import * as pg from "@radix-ui/react-label";
import * as kr from "@radix-ui/react-hover-card";
import * as je from "@radix-ui/react-menubar";
import * as Bt from "@radix-ui/react-navigation-menu";
import * as Xn from "@radix-ui/react-popover";
import * as su from "@radix-ui/react-progress";
import * as Ws from "@radix-ui/react-radio-group";
import * as Vn from "@radix-ui/react-scroll-area";
import * as hg from "@radix-ui/react-separator";
import * as xn from "@radix-ui/react-tooltip";
import * as yr from "@radix-ui/react-slider";
import gg from "react-dom";
import * as Qr from "@radix-ui/react-tabs";
import * as Sm from "@radix-ui/react-toggle-group";
import * as vg from "@radix-ui/react-toggle";
function w(...e) {
  return ug(lg(e));
}
const bg = qt(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr_auto] grid-cols-[0_1fr_auto] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
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
), lu = {
  default: Yh,
  success: Wh,
  warning: Hh,
  destructive: Fh
};
function iN({
  variant: e = "default",
  onClose: t,
  title: n,
  children: r,
  ...a
}) {
  const o = lu[e] || lu.default;
  return /* @__PURE__ */ U(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: w(bg({ variant: e })),
      ...a,
      children: [
        /* @__PURE__ */ f(o, {}),
        /* @__PURE__ */ U("div", { className: "col-start-2 flex flex-col gap-1 min-w-0", children: [
          n && /* @__PURE__ */ f(yg, { children: n }),
          r
        ] }),
        t && /* @__PURE__ */ f(
          "button",
          {
            onClick: t,
            className: "col-start-3 row-start-1 ml-auto -mr-1 -mt-1 p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors",
            "aria-label": "Close alert",
            children: /* @__PURE__ */ f(gm, { className: "size-4 opacity-50 hover:opacity-100" })
          }
        )
      ]
    }
  );
}
function yg({ ...e }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert-title",
      className: w("line-clamp-1 min-h-4 font-medium tracking-tight"),
      ...e
    }
  );
}
function sN({ ...e }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert-description",
      className: w(
        "text-muted-foreground grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed"
      ),
      ...e
    }
  );
}
function Ue(e, t) {
  if (t === void 0 || t === 0) return "";
  const n = t < 0, a = Math.abs(t) * 4;
  return `${n ? "-" : ""}${e}-${a}`;
}
function Re(e) {
  return [
    Ue("m", e.m),
    Ue("mt", e.mt),
    Ue("mr", e.mr),
    Ue("mb", e.mb),
    Ue("ml", e.ml),
    Ue("mx", e.mx),
    Ue("my", e.my),
    Ue("p", e.p),
    Ue("pt", e.pt),
    Ue("pr", e.pr),
    Ue("pb", e.pb),
    Ue("pl", e.pl),
    Ue("px", e.px),
    Ue("py", e.py)
  ].filter(Boolean).join(" ");
}
function Dn(e) {
  return [
    e.overflow && `overflow-${e.overflow}`,
    e.overflowX && `overflow-x-${e.overflowX}`,
    e.overflowY && `overflow-y-${e.overflowY}`
  ].filter(Boolean).join(" ");
}
const wg = qt(
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
function lN({
  variant: e,
  asChild: t = !1,
  internalClassName: n,
  // Spacing props
  m: r,
  mt: a,
  mr: o,
  mb: i,
  ml: s,
  mx: l,
  my: c,
  p: d,
  pt: u,
  pr: m,
  pb: g,
  pl: h,
  px: b,
  py: p,
  ...v
}) {
  return /* @__PURE__ */ f(
    t ? rt : "span",
    {
      "data-slot": "badge",
      className: w(
        wg({ variant: e }),
        Re({ m: r, mt: a, mr: o, mb: i, ml: s, mx: l, my: c, p: d, pt: u, pr: m, pb: g, pl: h, px: b, py: p }),
        n
      ),
      ...v
    }
  );
}
const Zt = qt(
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
        none: "p-0 h-auto",
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
function Jr({
  variant: e,
  size: t,
  asChild: n = !1,
  leftIcon: r,
  rightIcon: a,
  href: o,
  target: i,
  children: s,
  internalClassName: l,
  // Spacing props
  m: c,
  mt: d,
  mr: u,
  mb: m,
  ml: g,
  mx: h,
  my: b,
  p,
  pt: v,
  pr: y,
  pb: _,
  pl: C,
  px: D,
  py: E,
  ...S
}) {
  const k = a || (e === "link" && i === "_blank" ? /* @__PURE__ */ f(Vh, { className: "size-3.5 opacity-70" }) : null);
  return o ? /* @__PURE__ */ U(
    "a",
    {
      href: o,
      target: i,
      rel: i === "_blank" ? "noopener noreferrer" : void 0,
      className: w(
        Zt({ variant: e, size: t }),
        Re({ m: c, mt: d, mr: u, mb: m, ml: g, mx: h, my: b, p, pt: v, pr: y, pb: _, pl: C, px: D, py: E }),
        l
      ),
      "data-slot": "button",
      children: [
        r,
        s,
        k
      ]
    }
  ) : /* @__PURE__ */ f(
    n ? rt : "button",
    {
      "data-slot": "button",
      className: w(
        Zt({ variant: e, size: t }),
        Re({ m: c, mt: d, mr: u, mb: m, ml: g, mx: h, my: b, p, pt: v, pr: y, pb: _, pl: C, px: D, py: E }),
        l
      ),
      ...S,
      children: n ? s : /* @__PURE__ */ U(ht, { children: [
        r,
        s,
        k
      ] })
    }
  );
}
const xg = qt("bg-card text-card-foreground flex flex-col gap-6 rounded-xl", {
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
});
function uN({
  variant: e,
  internalClassName: t,
  // Spacing props
  m: n,
  mt: r,
  mr: a,
  mb: o,
  ml: i,
  mx: s,
  my: l,
  p: c,
  pt: d,
  pr: u,
  pb: m,
  pl: g,
  px: h,
  py: b,
  ...p
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card",
      className: w(
        xg({ variant: e }),
        Re({ m: n, mt: r, mr: a, mb: o, ml: i, mx: s, my: l, p: c, pt: d, pr: u, pb: m, pl: g, px: h, py: b }),
        t
      ),
      ...p
    }
  );
}
function cN({
  internalClassName: e,
  // Spacing props
  m: t,
  mt: n,
  mr: r,
  mb: a,
  ml: o,
  mx: i,
  my: s,
  p: l,
  pt: c,
  pr: d,
  pb: u,
  pl: m,
  px: g,
  py: h,
  ...b
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card-header",
      className: w(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        Re({ m: t, mt: n, mr: r, mb: a, ml: o, mx: i, my: s, p: l, pt: c, pr: d, pb: u, pl: m, px: g, py: h }),
        e
      ),
      ...b
    }
  );
}
function dN({
  internalClassName: e,
  // Spacing props
  m: t,
  mt: n,
  mr: r,
  mb: a,
  ml: o,
  mx: i,
  my: s,
  p: l,
  pt: c,
  pr: d,
  pb: u,
  pl: m,
  px: g,
  py: h,
  ...b
}) {
  return /* @__PURE__ */ f(
    "h4",
    {
      "data-slot": "card-title",
      className: w(
        "leading-none",
        Re({ m: t, mt: n, mr: r, mb: a, ml: o, mx: i, my: s, p: l, pt: c, pr: d, pb: u, pl: m, px: g, py: h }),
        e
      ),
      ...b
    }
  );
}
function fN({
  internalClassName: e,
  // Spacing props
  m: t,
  mt: n,
  mr: r,
  mb: a,
  ml: o,
  mx: i,
  my: s,
  p: l,
  pt: c,
  pr: d,
  pb: u,
  pl: m,
  px: g,
  py: h,
  ...b
}) {
  return /* @__PURE__ */ f(
    "p",
    {
      "data-slot": "card-description",
      className: w(
        "text-muted-foreground",
        Re({ m: t, mt: n, mr: r, mb: a, ml: o, mx: i, my: s, p: l, pt: c, pr: d, pb: u, pl: m, px: g, py: h }),
        e
      ),
      ...b
    }
  );
}
function mN({
  internalClassName: e,
  // Spacing props
  m: t,
  mt: n,
  mr: r,
  mb: a,
  ml: o,
  mx: i,
  my: s,
  p: l,
  pt: c,
  pr: d,
  pb: u,
  pl: m,
  px: g,
  py: h,
  ...b
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card-action",
      className: w(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        Re({ m: t, mt: n, mr: r, mb: a, ml: o, mx: i, my: s, p: l, pt: c, pr: d, pb: u, pl: m, px: g, py: h }),
        e
      ),
      ...b
    }
  );
}
function pN({
  internalClassName: e,
  // Spacing props
  m: t,
  mt: n,
  mr: r,
  mb: a,
  ml: o,
  mx: i,
  my: s,
  p: l,
  pt: c,
  pr: d,
  pb: u,
  pl: m,
  px: g,
  py: h,
  ...b
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card-content",
      className: w(
        "px-6 [&:last-child]:pb-6",
        Re({ m: t, mt: n, mr: r, mb: a, ml: o, mx: i, my: s, p: l, pt: c, pr: d, pb: u, pl: m, px: g, py: h }),
        e
      ),
      ...b
    }
  );
}
function hN({
  internalClassName: e,
  // Spacing props
  m: t,
  mt: n,
  mr: r,
  mb: a,
  ml: o,
  mx: i,
  my: s,
  p: l,
  pt: c,
  pr: d,
  pb: u,
  pl: m,
  px: g,
  py: h,
  ...b
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card-footer",
      className: w(
        "flex items-center px-6 pb-6 [.border-t]:pt-6",
        Re({ m: t, mt: n, mr: r, mb: a, ml: o, mx: i, my: s, p: l, pt: c, pr: d, pb: u, pl: m, px: g, py: h }),
        e
      ),
      ...b
    }
  );
}
function Cm({
  type: e,
  error: t,
  fieldSize: n = "default",
  internalClassName: r,
  // Spacing props
  m: a,
  mt: o,
  mr: i,
  mb: s,
  ml: l,
  mx: c,
  my: d,
  p: u,
  pt: m,
  pr: g,
  pb: h,
  pl: b,
  px: p,
  py: v,
  ...y
}) {
  return /* @__PURE__ */ f(
    "input",
    {
      type: e,
      "data-slot": "input",
      "data-size": n,
      "aria-invalid": t,
      className: w(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "data-[size=sm]:h-8 data-[size=default]:h-9 data-[size=md]:h-11 data-[size=lg]:h-14",
        Re({ m: a, mt: o, mr: i, mb: s, ml: l, mx: c, my: d, p: u, pt: m, pr: g, pb: h, pl: b, px: p, py: v }),
        r
      ),
      ...y
    }
  );
}
function gN({ ...e }) {
  return /* @__PURE__ */ f(Ye.Root, { "data-slot": "select", ...e });
}
function vN({ ...e }) {
  return /* @__PURE__ */ f(Ye.Group, { "data-slot": "select-group", ...e });
}
function bN({ ...e }) {
  return /* @__PURE__ */ f(Ye.Value, { "data-slot": "select-value", ...e });
}
function yN({
  size: e = "default",
  error: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ U(
    Ye.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": e,
      "aria-invalid": t,
      className: w(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f(Ye.Icon, { asChild: !0, children: /* @__PURE__ */ f(Gr, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function wN({
  children: e,
  position: t = "popper",
  ...n
}) {
  return /* @__PURE__ */ f(Ye.Portal, { children: /* @__PURE__ */ U(
    Ye.Content,
    {
      "data-slot": "select-content",
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
      ),
      position: t,
      ...n,
      children: [
        /* @__PURE__ */ f(_g, {}),
        /* @__PURE__ */ f(
          Ye.Viewport,
          {
            className: w(
              "p-1",
              t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: e
          }
        ),
        /* @__PURE__ */ f(Sg, {})
      ]
    }
  ) });
}
function xN({ ...e }) {
  return /* @__PURE__ */ f(
    Ye.Label,
    {
      "data-slot": "select-label",
      className: w("text-muted-foreground px-2 py-1.5 text-xs"),
      ...e
    }
  );
}
function _N({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ U(
    Ye.Item,
    {
      "data-slot": "select-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
      ),
      ...t,
      children: [
        /* @__PURE__ */ f("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f(Ye.ItemIndicator, { children: /* @__PURE__ */ f(lr, { className: "size-4" }) }) }),
        /* @__PURE__ */ f(Ye.ItemText, { children: e })
      ]
    }
  );
}
function SN({
  ...e
}) {
  return /* @__PURE__ */ f(
    Ye.Separator,
    {
      "data-slot": "select-separator",
      className: w("bg-border pointer-events-none -mx-1 my-1 h-px"),
      ...e
    }
  );
}
function _g({
  ...e
}) {
  return /* @__PURE__ */ f(
    Ye.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: w("flex cursor-default items-center justify-center py-1"),
      ...e,
      children: /* @__PURE__ */ f(Gh, { className: "size-4" })
    }
  );
}
function Sg({
  ...e
}) {
  return /* @__PURE__ */ f(
    Ye.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: w("flex cursor-default items-center justify-center py-1"),
      ...e,
      children: /* @__PURE__ */ f(Gr, { className: "size-4" })
    }
  );
}
function CN({
  label: e,
  ...t
}) {
  const n = /* @__PURE__ */ f(
    ou.Root,
    {
      "data-slot": "switch",
      className: w(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
      ),
      ...t,
      children: /* @__PURE__ */ f(
        ou.Thumb,
        {
          "data-slot": "switch-thumb",
          className: w(
            "bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
  return e ? /* @__PURE__ */ U("label", { className: "flex items-center gap-3 cursor-pointer", children: [
    n,
    e && /* @__PURE__ */ f("span", { className: "text-sm font-medium", children: e })
  ] }) : n;
}
const Cg = qt(
  "animate-spin text-muted-foreground",
  {
    variants: {
      size: {
        default: "size-6",
        sm: "size-4",
        lg: "size-8",
        xl: "size-12"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
function Pm({ className: e, size: t, ...n }) {
  return /* @__PURE__ */ f("div", { "data-slot": "loader", className: w("flex items-center justify-center", e), ...n, children: /* @__PURE__ */ f(Uh, { className: w(Cg({ size: t })) }) });
}
function PN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "full-screen-loader",
      className: w(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
        e
      ),
      ...t,
      children: /* @__PURE__ */ f(Pm, { size: "xl" })
    }
  );
}
function NN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "loading-overlay",
      className: w(
        "absolute inset-0 z-10 flex items-center justify-center bg-background/50 backdrop-blur-[1px]",
        e
      ),
      ...t,
      children: /* @__PURE__ */ f(Pm, {})
    }
  );
}
function Pg({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: w("mx-auto flex w-full justify-center", e),
      ...t
    }
  );
}
function Ng({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "ul",
    {
      "data-slot": "pagination-content",
      className: w("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function wa({ ...e }) {
  return /* @__PURE__ */ f("li", { "data-slot": "pagination-item", ...e });
}
function bl({ className: e, isActive: t, size: n = "icon", ...r }) {
  return /* @__PURE__ */ f(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: w(
        Zt({
          variant: t ? "outline" : "ghost",
          size: n
        }),
        e
      ),
      ...r
    }
  );
}
function Eg({ className: e, ...t }) {
  return /* @__PURE__ */ U(
    bl,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: w("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ f(Xh, {}),
        /* @__PURE__ */ f("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function Tg({ className: e, ...t }) {
  return /* @__PURE__ */ U(
    bl,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: w("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ f("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ f(Ur, {})
      ]
    }
  );
}
function EN({ className: e, ...t }) {
  return /* @__PURE__ */ U(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: w("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ f(Kh, { className: "size-4" }),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function Og({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ f(
    "table",
    {
      "data-slot": "table",
      className: w("w-full caption-bottom text-sm", e),
      ...t
    }
  ) });
}
function Mg({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f("thead", { "data-slot": "table-header", className: w("[&_tr]:border-b", e), ...t });
}
function Dg({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    "tbody",
    {
      "data-slot": "table-body",
      className: w("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function TN({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: w("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
      ...t
    }
  );
}
function xa({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    "tr",
    {
      "data-slot": "table-row",
      className: w(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        e
      ),
      ...t
    }
  );
}
function kg({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    "th",
    {
      "data-slot": "table-head",
      className: w(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function uu({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    "td",
    {
      "data-slot": "table-cell",
      className: w(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function ON({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    "caption",
    {
      "data-slot": "table-caption",
      className: w("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function MN({ ...e }) {
  return /* @__PURE__ */ U("div", { className: "relative", children: [
    /* @__PURE__ */ f(Jh, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }),
    /* @__PURE__ */ f(
      Cm,
      {
        type: "search",
        placeholder: "Search...",
        ...e
      }
    )
  ] });
}
function DN({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ U(Jr, { variant: "outline", size: "sm", ...t, children: [
    /* @__PURE__ */ f(Qh, { className: "h-4 w-4" }),
    e || "Filter"
  ] });
}
function kN({
  currentPage: e,
  totalPages: t,
  onPageChange: n
}) {
  return /* @__PURE__ */ f(Pg, { children: /* @__PURE__ */ U(Ng, { children: [
    /* @__PURE__ */ f(wa, { children: /* @__PURE__ */ f(
      Eg,
      {
        href: "#",
        onClick: (r) => {
          r.preventDefault(), e > 1 && n(e - 1);
        }
      }
    ) }),
    [...Array(t)].map((r, a) => /* @__PURE__ */ f(wa, { children: /* @__PURE__ */ f(
      bl,
      {
        href: "#",
        isActive: e === a + 1,
        onClick: (o) => {
          o.preventDefault(), n(a + 1);
        },
        children: a + 1
      }
    ) }, a)),
    /* @__PURE__ */ f(wa, { children: /* @__PURE__ */ f(
      Tg,
      {
        href: "#",
        onClick: (r) => {
          r.preventDefault(), e < t && n(e + 1);
        }
      }
    ) })
  ] }) });
}
function RN({
  data: e,
  columns: t,
  bordered: n = !0,
  striped: r = !1,
  ...a
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: w("w-full overflow-auto rounded-lg", n && "border"),
      ...a,
      children: /* @__PURE__ */ U(Og, { children: [
        /* @__PURE__ */ f(Mg, { internalClassName: "bg-muted/50", children: /* @__PURE__ */ f(xa, { children: t.map((o, i) => /* @__PURE__ */ f(kg, { internalClassName: w(n && i !== 0 && "border-l"), children: o.header }, o.key)) }) }),
        /* @__PURE__ */ U(Dg, { children: [
          e.map((o, i) => /* @__PURE__ */ f(xa, { internalClassName: w(r && i % 2 === 1 && "bg-muted/30"), children: t.map((s, l) => /* @__PURE__ */ f(
            uu,
            {
              internalClassName: w(n && l !== 0 && "border-l"),
              children: s.render ? s.render(o) : o[s.key]
            },
            s.key
          )) }, i)),
          e.length === 0 && /* @__PURE__ */ f(xa, { children: /* @__PURE__ */ f(
            uu,
            {
              colSpan: t.length,
              internalClassName: "h-24 text-center text-muted-foreground",
              children: "No data available"
            }
          ) })
        ] })
      ] })
    }
  );
}
function IN({
  error: e,
  fieldSize: t = "default",
  ...n
}) {
  return /* @__PURE__ */ f(
    "textarea",
    {
      "data-slot": "textarea",
      "data-size": t,
      "aria-invalid": e,
      className: w(
        "resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "data-[size=sm]:min-h-20 data-[size=default]:min-h-24 data-[size=md]:min-h-28 data-[size=lg]:min-h-32"
      ),
      ...n
    }
  );
}
const Rg = Ct(
  ({
    margin: e = "none",
    bordered: t = !1,
    asChild: n = !1,
    children: r,
    internalClassName: a,
    // Spacing props
    m: o,
    mt: i,
    mr: s,
    mb: l,
    ml: c,
    mx: d,
    my: u,
    p: m,
    pt: g,
    pr: h,
    pb: b,
    pl: p,
    px: v,
    py: y,
    // Overflow props
    overflow: _,
    overflowX: C,
    overflowY: D,
    ...E
  }, S) => /* @__PURE__ */ f(
    n ? rt : "div",
    {
      ref: S,
      className: w(
        {
          none: "",
          sm: "m-2",
          md: "m-4",
          lg: "m-6",
          xl: "m-8"
        }[e],
        t ? "border-2 border-border rounded-lg" : "",
        Re({ m: o, mt: i, mr: s, mb: l, ml: c, mx: d, my: u, p: m, pt: g, pr: h, pb: b, pl: p, px: v, py: y }),
        Dn({ overflow: _, overflowX: C, overflowY: D }),
        a
      ),
      ...E,
      children: r
    }
  )
);
Rg.displayName = "Container";
function AN({
  options: e,
  value: t,
  onChange: n,
  placeholder: r = "Select an option...",
  error: a = !1,
  disabled: o = !1,
  size: i = "md",
  className: s = ""
}) {
  const [l, c] = kt(!1), d = Cn(null), u = e.find((h) => h.value === t), m = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4",
    lg: "h-14 px-5 text-lg"
  };
  ct(() => {
    const h = (b) => {
      d.current && !d.current.contains(b.target) && c(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []);
  const g = (h) => {
    n == null || n(h), c(!1);
  };
  return /* @__PURE__ */ U("div", { ref: d, className: `relative ${s}`, children: [
    /* @__PURE__ */ U(
      "button",
      {
        type: "button",
        onClick: () => !o && c(!l),
        disabled: o,
        className: `
          w-full ${m[i]} rounded-lg 
          bg-input-background border-2 border-transparent
          transition-colors
          flex items-center justify-between
          text-left
          focus:outline-none focus:border-primary
          disabled:opacity-50 disabled:pointer-events-none
          ${a ? "border-destructive focus:border-destructive" : ""}
          ${u ? "" : "text-muted-foreground"}
        `,
        children: [
          /* @__PURE__ */ f("span", { children: u ? u.label : r }),
          /* @__PURE__ */ f(Zh, { className: `w-5 h-5 transition-transform ${l ? "rotate-180" : ""}` })
        ]
      }
    ),
    l && /* @__PURE__ */ f("div", { className: "absolute z-50 w-full mt-2 bg-popover border-2 border-border rounded-lg shadow-lg max-h-60 overflow-auto", children: e.map((h) => /* @__PURE__ */ U(
      "button",
      {
        type: "button",
        onClick: () => g(h.value),
        className: `
                w-full px-4 py-3 text-left flex items-center justify-between
                transition-colors
                hover:bg-accent
                ${h.value === t ? "bg-accent/50" : ""}
              `,
        children: [
          /* @__PURE__ */ f("span", { children: h.label }),
          h.value === t && /* @__PURE__ */ f(vm, { className: "w-5 h-5 text-primary" })
        ]
      },
      h.value
    )) })
  ] });
}
const Ig = Ct(
  ({
    direction: e = "row",
    justify: t = "start",
    align: n = "start",
    wrap: r = !1,
    gap: a = "none",
    mdDirection: o,
    mdAlign: i,
    mdJustify: s,
    asChild: l = !1,
    internalClassName: c,
    children: d,
    // Spacing props
    m: u,
    mt: m,
    mr: g,
    mb: h,
    ml: b,
    mx: p,
    my: v,
    p: y,
    pt: _,
    pr: C,
    pb: D,
    pl: E,
    px: S,
    py: R,
    // Overflow props
    overflow: k,
    overflowX: Y,
    overflowY: I,
    ...F
  }, T) => {
    const W = l ? rt : "div", j = {
      row: "flex-row",
      col: "flex-col",
      "row-reverse": "flex-row-reverse",
      "col-reverse": "flex-col-reverse"
    }, $ = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly"
    }, z = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline"
    }, q = {
      none: "",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8"
    }, ee = o ? `md:${j[o]}` : "", ie = i ? `md:${z[i]}` : "", K = s ? `md:${$[s]}` : "";
    return /* @__PURE__ */ f(
      W,
      {
        ref: T,
        className: w(
          "flex",
          j[e],
          $[t],
          z[n],
          r && "flex-wrap",
          q[a],
          ee,
          ie,
          K,
          Re({ m: u, mt: m, mr: g, mb: h, ml: b, mx: p, my: v, p: y, pt: _, pr: C, pb: D, pl: E, px: S, py: R }),
          Dn({ overflow: k, overflowX: Y, overflowY: I }),
          c
        ),
        ...F,
        children: d
      }
    );
  }
);
Ig.displayName = "Flex";
const Ag = Ct(
  ({
    cols: e = "auto",
    mdCols: t,
    lgCols: n,
    gap: r = "md",
    rows: a = "auto",
    asChild: o = !1,
    children: i,
    internalClassName: s,
    // Spacing props
    m: l,
    mt: c,
    mr: d,
    mb: u,
    ml: m,
    mx: g,
    my: h,
    p: b,
    pt: p,
    pr: v,
    pb: y,
    pl: _,
    px: C,
    py: D,
    // Overflow props
    overflow: E,
    overflowX: S,
    overflowY: R,
    ...k
  }, Y) => {
    const I = o ? rt : "div", F = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      7: "grid-cols-7",
      8: "grid-cols-8",
      9: "grid-cols-9",
      10: "grid-cols-10",
      11: "grid-cols-11",
      12: "grid-cols-12",
      auto: "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
    }, T = {
      none: "",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8"
    }, W = a === "auto" ? "" : `grid-rows-${a}`, j = t ? `md:${F[t]}` : "", $ = n ? `lg:${F[n]}` : "";
    return /* @__PURE__ */ f(
      I,
      {
        ref: Y,
        className: w(
          "grid",
          // @ts-ignore - dynamic index
          F[e],
          // @ts-ignore - dynamic index
          T[r],
          W,
          j,
          $,
          Re({ m: l, mt: c, mr: d, mb: u, ml: m, mx: g, my: h, p: b, pt: p, pr: v, pb: y, pl: _, px: C, py: D }),
          Dn({ overflow: E, overflowX: S, overflowY: R }),
          s
        ),
        ...k,
        children: i
      }
    );
  }
);
Ag.displayName = "Grid";
const Zr = Ct(
  ({ isOpen: e, onClose: t, variant: n = "popup", title: r, className: a = "", children: o, ...i }, s) => {
    if (ct(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
      document.body.style.overflow = "unset";
    }), [e]), ct(() => {
      const u = (m) => {
        m.key === "Escape" && e && t();
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
    }, d = {
      fullscreen: "animate-in fade-in duration-200",
      popup: "animate-in fade-in zoom-in-95 duration-200",
      side: "animate-in slide-in-from-right duration-300"
    };
    return /* @__PURE__ */ U("div", { className: "fixed inset-0 z-50", children: [
      /* @__PURE__ */ f(
        "div",
        {
          className: "fixed inset-0 bg-black/50 animate-in fade-in duration-200",
          onClick: t
        }
      ),
      /* @__PURE__ */ f("div", { className: `fixed ${l[n]}`, children: /* @__PURE__ */ U(
        "div",
        {
          ref: s,
          className: `relative ${c[n]} ${d[n]} ${a}`,
          ...i,
          children: [
            (r || n !== "fullscreen") && /* @__PURE__ */ U("div", { className: "flex items-center justify-between p-6 border-b-2 border-border", children: [
              r && /* @__PURE__ */ f("h2", { children: r }),
              /* @__PURE__ */ f(
                "button",
                {
                  onClick: t,
                  className: "ml-auto p-2 rounded-lg hover:bg-accent transition-colors",
                  "aria-label": "Close modal",
                  children: /* @__PURE__ */ f(gm, { className: "w-5 h-5" })
                }
              )
            ] }),
            /* @__PURE__ */ f("div", { className: "p-6", children: o })
          ]
        }
      ) })
    ] });
  }
);
Zr.displayName = "Modal";
const zg = Ct(
  (e, t) => /* @__PURE__ */ f(Zr, { ref: t, variant: "fullscreen", ...e })
);
zg.displayName = "FullscreenModal";
const Lg = Ct((e, t) => /* @__PURE__ */ f(Zr, { ref: t, variant: "popup", ...e }));
Lg.displayName = "PopupModal";
const qg = Ct((e, t) => /* @__PURE__ */ f(Zr, { ref: t, variant: "side", ...e }));
qg.displayName = "SideModal";
const $g = Ct(
  ({
    padding: e = "md",
    bordered: t = !1,
    asChild: n = !1,
    children: r,
    internalClassName: a,
    // Spacing props
    m: o,
    mt: i,
    mr: s,
    mb: l,
    ml: c,
    mx: d,
    my: u,
    p: m,
    pt: g,
    pr: h,
    pb: b,
    pl: p,
    px: v,
    py: y,
    // Overflow props
    overflow: _,
    overflowX: C,
    overflowY: D,
    ...E
  }, S) => /* @__PURE__ */ f(
    n ? rt : "div",
    {
      ref: S,
      className: w(
        // @ts-ignore - dynamic index
        {
          none: "",
          sm: "p-2",
          md: "p-4",
          lg: "p-6",
          xl: "p-8"
        }[e],
        t ? "border-2 border-border rounded-lg" : "",
        Re({ m: o, mt: i, mr: s, mb: l, ml: c, mx: d, my: u, p: m, pt: g, pr: h, pb: b, pl: p, px: v, py: y }),
        Dn({ overflow: _, overflowX: C, overflowY: D }),
        a
      ),
      ...E,
      children: r
    }
  )
);
$g.displayName = "Padded";
function zN({
  blur: e = !0,
  children: t,
  internalClassName: n,
  // Spacing props
  m: r,
  mt: a,
  mr: o,
  mb: i,
  ml: s,
  mx: l,
  my: c,
  p: d,
  pt: u,
  pr: m,
  pb: g,
  pl: h,
  px: b,
  py: p,
  // Overflow props
  overflow: v,
  overflowX: y,
  overflowY: _,
  ...C
}) {
  return /* @__PURE__ */ f(
    "header",
    {
      "data-slot": "sticky-header",
      className: w(
        "sticky top-0 z-40 w-full border-b backdrop-blur-md",
        e ? "bg-background/80" : "bg-background",
        Re({ m: r, mt: a, mr: o, mb: i, ml: s, mx: l, my: c, p: d, pt: u, pr: m, pb: g, pl: h, px: b, py: p }),
        Dn({ overflow: v, overflowX: y, overflowY: _ }),
        n
      ),
      ...C,
      children: t
    }
  );
}
function LN({
  blur: e = !0,
  children: t,
  internalClassName: n,
  // Spacing props
  m: r,
  mt: a,
  mr: o,
  mb: i,
  ml: s,
  mx: l,
  my: c,
  p: d,
  pt: u,
  pr: m,
  pb: g,
  pl: h,
  px: b,
  py: p,
  // Overflow props
  overflow: v,
  overflowX: y,
  overflowY: _,
  ...C
}) {
  return /* @__PURE__ */ f(
    "footer",
    {
      "data-slot": "sticky-footer",
      className: w(
        "sticky bottom-0 z-40 w-full border-t backdrop-blur-md",
        e ? "bg-background/80" : "bg-background",
        Re({ m: r, mt: a, mr: o, mb: i, ml: s, mx: l, my: c, p: d, pt: u, pr: m, pb: g, pl: h, px: b, py: p }),
        Dn({ overflow: v, overflowX: y, overflowY: _ }),
        n
      ),
      ...C,
      children: t
    }
  );
}
function qN({
  options: e,
  value: t,
  onChange: n,
  multiple: r = !1,
  className: a = ""
}) {
  const o = Array.isArray(t) ? t : t ? [t] : [], i = (l) => {
    if (r) {
      const c = o.includes(l) ? o.filter((d) => d !== l) : [...o, l];
      n == null || n(c);
    } else
      n == null || n(l);
  }, s = (l) => o.includes(l);
  return /* @__PURE__ */ f("div", { className: `space-y-2 ${a}`, children: e.map((l) => {
    const c = s(l.value);
    return /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: () => i(l.value),
        className: `
              w-full p-4 rounded-lg border-2 text-left
              transition-all
              ${c ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50 hover:bg-accent/50"}
            `,
        children: /* @__PURE__ */ U("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ f(
            "div",
            {
              className: `
                w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5
                border-2 transition-colors
                ${c ? "bg-primary border-primary" : "border-border bg-background"}
              `,
              children: c && /* @__PURE__ */ f(vm, { className: "w-3 h-3 text-primary-foreground" })
            }
          ),
          /* @__PURE__ */ U("div", { className: "flex-1", children: [
            /* @__PURE__ */ f("div", { className: "font-medium", children: l.label }),
            l.description && /* @__PURE__ */ f("div", { className: "text-sm text-muted-foreground mt-1", children: l.description })
          ] })
        ] })
      },
      l.value
    );
  }) });
}
function $N({ ...e }) {
  return /* @__PURE__ */ f(Un.Root, { "data-slot": "accordion", ...e });
}
function BN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Un.Item,
    {
      "data-slot": "accordion-item",
      className: w("border-b last:border-b-0", e),
      ...t
    }
  );
}
function jN({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ f(Un.Header, { className: "flex", children: /* @__PURE__ */ U(
    Un.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: w(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ f(Gr, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function FN({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    Un.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...n,
      children: /* @__PURE__ */ f("div", { className: w("pt-0 pb-4", e), children: t })
    }
  );
}
function HN({ ...e }) {
  return /* @__PURE__ */ f(Rt.Root, { "data-slot": "alert-dialog", ...e });
}
function WN({
  ...e
}) {
  return /* @__PURE__ */ f(Rt.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function Bg({ ...e }) {
  return /* @__PURE__ */ f(Rt.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function jg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Rt.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: w(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function YN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ U(Bg, { children: [
    /* @__PURE__ */ f(jg, {}),
    /* @__PURE__ */ f(
      Rt.Content,
      {
        "data-slot": "alert-dialog-content",
        className: w(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function VN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: w("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function GN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: w("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function UN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Rt.Title,
    {
      "data-slot": "alert-dialog-title",
      className: w("text-lg font-semibold", e),
      ...t
    }
  );
}
function KN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Rt.Description,
    {
      "data-slot": "alert-dialog-description",
      className: w("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function XN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(Rt.Action, { className: w(Zt(), e), ...t });
}
function QN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Rt.Cancel,
    {
      className: w(Zt({ variant: "outline" }), e),
      ...t
    }
  );
}
function JN({ ...e }) {
  return /* @__PURE__ */ f(mg.Root, { "data-slot": "aspect-ratio", ...e });
}
function ZN({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    gl.Root,
    {
      "data-slot": "avatar",
      className: w("relative flex size-10 shrink-0 overflow-hidden rounded-full", e),
      ...t
    }
  );
}
function eE({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    gl.Image,
    {
      "data-slot": "avatar-image",
      className: w("aspect-square size-full", e),
      ...t
    }
  );
}
function tE({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    gl.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: w("bg-muted flex size-full items-center justify-center rounded-full", e),
      ...t
    }
  );
}
function nE({ ...e }) {
  return /* @__PURE__ */ f("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function rE({ ...e }) {
  return /* @__PURE__ */ f(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: w(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5"
      ),
      ...e
    }
  );
}
function aE({ ...e }) {
  return /* @__PURE__ */ f(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: w("inline-flex items-center gap-1.5"),
      ...e
    }
  );
}
function oE({
  asChild: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    e ? rt : "a",
    {
      "data-slot": "breadcrumb-link",
      className: w("hover:text-foreground transition-colors"),
      ...t
    }
  );
}
function iE({ ...e }) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: w("text-foreground font-normal"),
      ...e
    }
  );
}
function sE({ children: e, ...t }) {
  return /* @__PURE__ */ f(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: w("[&>svg]:size-3.5"),
      ...t,
      children: e ?? /* @__PURE__ */ f(bm, {})
    }
  );
}
function lE({ ...e }) {
  return /* @__PURE__ */ U(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: w("flex size-9 items-center justify-center"),
      ...e,
      children: [
        /* @__PURE__ */ f(eg, { className: "size-4" }),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function he(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function nt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function We(e, t) {
  const n = he(e);
  return isNaN(t) ? nt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function gt(e, t) {
  const n = he(e);
  if (isNaN(t)) return nt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), a = nt(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const o = a.getDate();
  return r >= o ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    r
  ), n);
}
const yl = 6048e5, Fg = 864e5;
let Hg = {};
function ur() {
  return Hg;
}
function St(e, t) {
  var s, l, c, d;
  const n = ur(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = he(e), o = a.getDay(), i = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function en(e) {
  return St(e, { weekStartsOn: 1 });
}
function Nm(e) {
  const t = he(e), n = t.getFullYear(), r = nt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = en(r), o = nt(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const i = en(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function Pn(e) {
  const t = he(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Rr(e) {
  const t = he(e), n = new Date(
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
function _t(e, t) {
  const n = Pn(e), r = Pn(t), a = +n - Rr(n), o = +r - Rr(r);
  return Math.round((a - o) / Fg);
}
function Wg(e) {
  const t = Nm(e), n = nt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), en(n);
}
function Ys(e, t) {
  const n = t * 7;
  return We(e, n);
}
function Yg(e, t) {
  return gt(e, t * 12);
}
function Vg(e) {
  let t;
  return e.forEach(function(n) {
    const r = he(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Gg(e) {
  let t;
  return e.forEach((n) => {
    const r = he(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Ze(e, t) {
  const n = Pn(e), r = Pn(t);
  return +n == +r;
}
function wl(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ug(e) {
  if (!wl(e) && typeof e != "number")
    return !1;
  const t = he(e);
  return !isNaN(Number(t));
}
function Qn(e, t) {
  const n = he(e), r = he(t), a = n.getFullYear() - r.getFullYear(), o = n.getMonth() - r.getMonth();
  return a * 12 + o;
}
function Kg(e, t, n) {
  const r = St(e, n), a = St(t, n), o = +r - Rr(r), i = +a - Rr(a);
  return Math.round((o - i) / yl);
}
function xl(e) {
  const t = he(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function et(e) {
  const t = he(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Em(e) {
  const t = he(e), n = nt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function _l(e, t) {
  var s, l, c, d;
  const n = ur(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = he(e), o = a.getDay(), i = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
}
function Tm(e) {
  return _l(e, { weekStartsOn: 1 });
}
const Xg = {
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
}, Qg = (e, t, n) => {
  let r;
  const a = Xg[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function _a(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Jg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Zg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ev = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, tv = {
  date: _a({
    formats: Jg,
    defaultWidth: "full"
  }),
  time: _a({
    formats: Zg,
    defaultWidth: "full"
  }),
  dateTime: _a({
    formats: ev,
    defaultWidth: "full"
  })
}, nv = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, rv = (e, t, n, r) => nv[e];
function Rn(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      a = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[s] || e.values[i];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[o];
  };
}
const av = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ov = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, iv = {
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
}, sv = {
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
}, lv = {
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
}, uv = {
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
}, cv = (e, t) => {
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
}, dv = {
  ordinalNumber: cv,
  era: Rn({
    values: av,
    defaultWidth: "wide"
  }),
  quarter: Rn({
    values: ov,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Rn({
    values: iv,
    defaultWidth: "wide"
  }),
  day: Rn({
    values: sv,
    defaultWidth: "wide"
  }),
  dayPeriod: Rn({
    values: lv,
    defaultWidth: "wide",
    formattingValues: uv,
    defaultFormattingWidth: "wide"
  })
};
function In(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const i = o[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? mv(s, (u) => u.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      fv(s, (u) => u.test(i))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const d = t.slice(i.length);
    return { value: c, rest: d };
  };
}
function fv(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function mv(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function pv(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(a.length);
    return { value: i, rest: s };
  };
}
const hv = /^(\d+)(th|st|nd|rd)?/i, gv = /\d+/i, vv = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, bv = {
  any: [/^b/i, /^(a|c)/i]
}, yv = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, wv = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, xv = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, _v = {
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
}, Sv = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Cv = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Pv = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Nv = {
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
}, Ev = {
  ordinalNumber: pv({
    matchPattern: hv,
    parsePattern: gv,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: In({
    matchPatterns: vv,
    defaultMatchWidth: "wide",
    parsePatterns: bv,
    defaultParseWidth: "any"
  }),
  quarter: In({
    matchPatterns: yv,
    defaultMatchWidth: "wide",
    parsePatterns: wv,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: In({
    matchPatterns: xv,
    defaultMatchWidth: "wide",
    parsePatterns: _v,
    defaultParseWidth: "any"
  }),
  day: In({
    matchPatterns: Sv,
    defaultMatchWidth: "wide",
    parsePatterns: Cv,
    defaultParseWidth: "any"
  }),
  dayPeriod: In({
    matchPatterns: Pv,
    defaultMatchWidth: "any",
    parsePatterns: Nv,
    defaultParseWidth: "any"
  })
}, Om = {
  code: "en-US",
  formatDistance: Qg,
  formatLong: tv,
  formatRelative: rv,
  localize: dv,
  match: Ev,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Tv(e) {
  const t = he(e);
  return _t(t, Em(t)) + 1;
}
function Mm(e) {
  const t = he(e), n = +en(t) - +Wg(t);
  return Math.round(n / yl) + 1;
}
function Dm(e, t) {
  var d, u, m, g;
  const n = he(e), r = n.getFullYear(), a = ur(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((g = (m = a.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = nt(e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = St(i, t), l = nt(e, 0);
  l.setFullYear(r, 0, o), l.setHours(0, 0, 0, 0);
  const c = St(l, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function Ov(e, t) {
  var s, l, c, d;
  const n = ur(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, a = Dm(e, t), o = nt(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), St(o, t);
}
function km(e, t) {
  const n = he(e), r = +St(n, t) - +Ov(n, t);
  return Math.round(r / yl) + 1;
}
function xe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const At = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return xe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : xe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return xe(e.getDate(), t.length);
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
    return xe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return xe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return xe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return xe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return xe(a, t.length);
  }
}, mn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, cu = {
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
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return At.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = Dm(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const i = o % 100;
      return xe(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : xe(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Nm(e);
    return xe(n, t.length);
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
    return xe(n, t.length);
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
        return xe(r, 2);
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
        return xe(r, 2);
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
        return At.M(e, t);
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
        return xe(r + 1, 2);
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
    const a = km(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : xe(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Mm(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : xe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : At.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Tv(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : xe(r, t.length);
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
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return xe(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return xe(o, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return xe(a, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
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
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = mn.noon : r === 0 ? a = mn.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = mn.evening : r >= 12 ? a = mn.afternoon : r >= 4 ? a = mn.morning : a = mn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
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
    return At.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : At.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : xe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : xe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : At.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : At.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return At.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return fu(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Gt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Gt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return fu(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Gt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Gt(r, ":");
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
        return "GMT" + du(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Gt(r, ":");
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
        return "GMT" + du(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Gt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return xe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return xe(r, t.length);
  }
};
function du(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + xe(o, 2);
}
function fu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + xe(Math.abs(e) / 60, 2) : Gt(e, t);
}
function Gt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = xe(Math.trunc(r / 60), 2), o = xe(r % 60, 2);
  return n + a + t + o;
}
const mu = (e, t) => {
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
}, Rm = (e, t) => {
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
}, Mv = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return mu(e, t);
  let o;
  switch (r) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", mu(r, t)).replace("{{time}}", Rm(a, t));
}, Dv = {
  p: Rm,
  P: Mv
}, kv = /^D+$/, Rv = /^Y+$/, Iv = ["D", "DD", "YY", "YYYY"];
function Av(e) {
  return kv.test(e);
}
function zv(e) {
  return Rv.test(e);
}
function Lv(e, t, n) {
  const r = qv(e, t, n);
  if (console.warn(r), Iv.includes(e)) throw new RangeError(r);
}
function qv(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const $v = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Bv = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, jv = /^'([^]*?)'?$/, Fv = /''/g, Hv = /[a-zA-Z]/;
function sn(e, t, n) {
  var d, u, m, g, h, b, p, v;
  const r = ur(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? Om, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((b = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : b.weekStartsOn) ?? r.weekStartsOn ?? ((v = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : v.weekStartsOn) ?? 0, s = he(e);
  if (!Ug(s))
    throw new RangeError("Invalid time value");
  let l = t.match(Bv).map((y) => {
    const _ = y[0];
    if (_ === "p" || _ === "P") {
      const C = Dv[_];
      return C(y, a.formatLong);
    }
    return y;
  }).join("").match($v).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const _ = y[0];
    if (_ === "'")
      return { isToken: !1, value: Wv(y) };
    if (cu[_])
      return { isToken: !0, value: y };
    if (_.match(Hv))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + _ + "`"
      );
    return { isToken: !1, value: y };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(s, l));
  const c = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: a
  };
  return l.map((y) => {
    if (!y.isToken) return y.value;
    const _ = y.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && zv(_) || !(n != null && n.useAdditionalDayOfYearTokens) && Av(_)) && Lv(_, t, String(e));
    const C = cu[_[0]];
    return C(s, _, a.localize, c);
  }).join("");
}
function Wv(e) {
  const t = e.match(jv);
  return t ? t[1].replace(Fv, "'") : e;
}
function Yv(e) {
  const t = he(e), n = t.getFullYear(), r = t.getMonth(), a = nt(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Vv(e) {
  return Math.trunc(+he(e) / 1e3);
}
function Gv(e) {
  const t = he(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Uv(e, t) {
  return Kg(
    Gv(e),
    et(e),
    t
  ) + 1;
}
function Vs(e, t) {
  const n = he(e), r = he(t);
  return n.getTime() > r.getTime();
}
function Im(e, t) {
  const n = he(e), r = he(t);
  return +n < +r;
}
function Sl(e, t) {
  const n = he(e), r = he(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Kv(e, t) {
  const n = he(e), r = he(t);
  return n.getFullYear() === r.getFullYear();
}
function Sa(e, t) {
  return We(e, -t);
}
function Ca(e, t) {
  const n = he(e), r = n.getFullYear(), a = n.getDate(), o = nt(e, 0);
  o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
  const i = Yv(o);
  return n.setMonth(t, Math.min(a, i)), n;
}
function pu(e, t) {
  const n = he(e);
  return isNaN(+n) ? nt(e, NaN) : (n.setFullYear(t), n);
}
var re = function() {
  return re = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, re.apply(this, arguments);
};
function Xv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Am(e, t, n) {
  for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function cr(e) {
  return e.mode === "multiple";
}
function dr(e) {
  return e.mode === "range";
}
function ea(e) {
  return e.mode === "single";
}
var Qv = {
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
function Jv(e, t) {
  return sn(e, "LLLL y", t);
}
function Zv(e, t) {
  return sn(e, "d", t);
}
function eb(e, t) {
  return sn(e, "LLLL", t);
}
function tb(e) {
  return "".concat(e);
}
function nb(e, t) {
  return sn(e, "cccccc", t);
}
function rb(e, t) {
  return sn(e, "yyyy", t);
}
var ab = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Jv,
  formatDay: Zv,
  formatMonthCaption: eb,
  formatWeekNumber: tb,
  formatWeekdayName: nb,
  formatYearCaption: rb
}), ob = function(e, t, n) {
  return sn(e, "do MMMM (EEEE)", n);
}, ib = function() {
  return "Month: ";
}, sb = function() {
  return "Go to next month";
}, lb = function() {
  return "Go to previous month";
}, ub = function(e, t) {
  return sn(e, "cccc", t);
}, cb = function(e) {
  return "Week n. ".concat(e);
}, db = function() {
  return "Year: ";
}, fb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: ob,
  labelMonthDropdown: ib,
  labelNext: sb,
  labelPrevious: lb,
  labelWeekNumber: cb,
  labelWeekday: ub,
  labelYearDropdown: db
});
function mb() {
  var e = "buttons", t = Qv, n = Om, r = {}, a = {}, o = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: ab,
    labels: fb,
    locale: n,
    modifiersClassNames: r,
    modifiers: a,
    numberOfMonths: o,
    styles: i,
    today: s,
    mode: "default"
  };
}
function pb(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, a = e.toMonth, o = e.fromDate, i = e.toDate;
  return r ? o = et(r) : t && (o = new Date(t, 0, 1)), a ? i = xl(a) : n && (i = new Date(n, 11, 31)), {
    fromDate: o ? Pn(o) : void 0,
    toDate: i ? Pn(i) : void 0
  };
}
var zm = an(void 0);
function hb(e) {
  var t, n = e.initialProps, r = mb(), a = pb(n), o = a.fromDate, i = a.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!o || !i) && (s = "buttons");
  var l;
  (ea(n) || cr(n) || dr(n)) && (l = n.onSelect);
  var c = re(re(re({}, r), n), { captionLayout: s, classNames: re(re({}, r.classNames), n.classNames), components: re({}, n.components), formatters: re(re({}, r.formatters), n.formatters), fromDate: o, labels: re(re({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: re(re({}, r.modifiers), n.modifiers), modifiersClassNames: re(re({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: l, styles: re(re({}, r.styles), n.styles), toDate: i });
  return f(zm.Provider, { value: c, children: e.children });
}
function Ee() {
  var e = on(zm);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Lm(e) {
  var t = Ee(), n = t.locale, r = t.classNames, a = t.styles, o = t.formatters.formatCaption;
  return f("div", { className: r.caption_label, style: a.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: o(e.displayMonth, { locale: n }) });
}
function gb(e) {
  return f("svg", re({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: f("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function qm(e) {
  var t, n, r = e.onChange, a = e.value, o = e.children, i = e.caption, s = e.className, l = e.style, c = Ee(), d = (n = (t = c.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : gb;
  return U("div", { className: s, style: l, children: [f("span", { className: c.classNames.vhidden, children: e["aria-label"] }), f("select", { name: e.name, "aria-label": e["aria-label"], className: c.classNames.dropdown, style: c.styles.dropdown, value: a, onChange: r, children: o }), U("div", { className: c.classNames.caption_label, style: c.styles.caption_label, "aria-hidden": "true", children: [i, f(d, { className: c.classNames.dropdown_icon, style: c.styles.dropdown_icon })] })] });
}
function vb(e) {
  var t, n = Ee(), r = n.fromDate, a = n.toDate, o = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, l = n.classNames, c = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return f(ht, {});
  if (!a)
    return f(ht, {});
  var u = [];
  if (Kv(r, a))
    for (var m = et(r), g = r.getMonth(); g <= a.getMonth(); g++)
      u.push(Ca(m, g));
  else
    for (var m = et(/* @__PURE__ */ new Date()), g = 0; g <= 11; g++)
      u.push(Ca(m, g));
  var h = function(p) {
    var v = Number(p.target.value), y = Ca(et(e.displayMonth), v);
    e.onChange(y);
  }, b = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : qm;
  return f(b, { name: "months", "aria-label": d(), className: l.dropdown_month, style: o.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: u.map(function(p) {
    return f("option", { value: p.getMonth(), children: s(p, { locale: i }) }, p.getMonth());
  }) });
}
function bb(e) {
  var t, n = e.displayMonth, r = Ee(), a = r.fromDate, o = r.toDate, i = r.locale, s = r.styles, l = r.classNames, c = r.components, d = r.formatters.formatYearCaption, u = r.labels.labelYearDropdown, m = [];
  if (!a)
    return f(ht, {});
  if (!o)
    return f(ht, {});
  for (var g = a.getFullYear(), h = o.getFullYear(), b = g; b <= h; b++)
    m.push(pu(Em(/* @__PURE__ */ new Date()), b));
  var p = function(y) {
    var _ = pu(et(n), Number(y.target.value));
    e.onChange(_);
  }, v = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : qm;
  return f(v, { name: "years", "aria-label": u(), className: l.dropdown_year, style: s.dropdown_year, onChange: p, value: n.getFullYear(), caption: d(n, { locale: i }), children: m.map(function(y) {
    return f("option", { value: y.getFullYear(), children: d(y, { locale: i }) }, y.getFullYear());
  }) });
}
function yb(e, t) {
  var n = kt(e), r = n[0], a = n[1], o = t === void 0 ? r : t;
  return [o, a];
}
function wb(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, a = t || n || r || /* @__PURE__ */ new Date(), o = e.toDate, i = e.fromDate, s = e.numberOfMonths, l = s === void 0 ? 1 : s;
  if (o && Qn(o, a) < 0) {
    var c = -1 * (l - 1);
    a = gt(o, c);
  }
  return i && Qn(a, i) < 0 && (a = i), et(a);
}
function xb() {
  var e = Ee(), t = wb(e), n = yb(t, e.month), r = n[0], a = n[1], o = function(i) {
    var s;
    if (!e.disableNavigation) {
      var l = et(i);
      a(l), (s = e.onMonthChange) === null || s === void 0 || s.call(e, l);
    }
  };
  return [r, o];
}
function _b(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, a = et(e), o = et(gt(a, r)), i = Qn(o, a), s = [], l = 0; l < i; l++) {
    var c = gt(a, l);
    s.push(c);
  }
  return n && (s = s.reverse()), s;
}
function Sb(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, i = r ? o : 1, s = et(e);
    if (!n)
      return gt(s, i);
    var l = Qn(n, e);
    if (!(l < o))
      return gt(s, i);
  }
}
function Cb(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, i = r ? o : 1, s = et(e);
    if (!n)
      return gt(s, -i);
    var l = Qn(s, n);
    if (!(l <= 0))
      return gt(s, -i);
  }
}
var $m = an(void 0);
function Pb(e) {
  var t = Ee(), n = xb(), r = n[0], a = n[1], o = _b(r, t), i = Sb(r, t), s = Cb(r, t), l = function(u) {
    return o.some(function(m) {
      return Sl(u, m);
    });
  }, c = function(u, m) {
    l(u) || (m && Im(u, m) ? a(gt(u, 1 + t.numberOfMonths * -1)) : a(u));
  }, d = {
    currentMonth: r,
    displayMonths: o,
    goToMonth: a,
    goToDate: c,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: l
  };
  return f($m.Provider, { value: d, children: e.children });
}
function fr() {
  var e = on($m);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function hu(e) {
  var t, n = Ee(), r = n.classNames, a = n.styles, o = n.components, i = fr().goToMonth, s = function(d) {
    i(gt(d, e.displayIndex ? -e.displayIndex : 0));
  }, l = (t = o == null ? void 0 : o.CaptionLabel) !== null && t !== void 0 ? t : Lm, c = f(l, { id: e.id, displayMonth: e.displayMonth });
  return U("div", { className: r.caption_dropdowns, style: a.caption_dropdowns, children: [f("div", { className: r.vhidden, children: c }), f(vb, { onChange: s, displayMonth: e.displayMonth }), f(bb, { onChange: s, displayMonth: e.displayMonth })] });
}
function Nb(e) {
  return f("svg", re({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: f("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Eb(e) {
  return f("svg", re({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: f("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Ir = Ct(function(e, t) {
  var n = Ee(), r = n.classNames, a = n.styles, o = [r.button_reset, r.button];
  e.className && o.push(e.className);
  var i = o.join(" "), s = re(re({}, a.button_reset), a.button);
  return e.style && Object.assign(s, e.style), f("button", re({}, e, { ref: t, type: "button", className: i, style: s }));
});
function Tb(e) {
  var t, n, r = Ee(), a = r.dir, o = r.locale, i = r.classNames, s = r.styles, l = r.labels, c = l.labelPrevious, d = l.labelNext, u = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return f(ht, {});
  var m = c(e.previousMonth, { locale: o }), g = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), h = d(e.nextMonth, { locale: o }), b = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), p = (t = u == null ? void 0 : u.IconRight) !== null && t !== void 0 ? t : Eb, v = (n = u == null ? void 0 : u.IconLeft) !== null && n !== void 0 ? n : Nb;
  return U("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && f(Ir, { name: "previous-month", "aria-label": m, className: g, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: a === "rtl" ? f(p, { className: i.nav_icon, style: s.nav_icon }) : f(v, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && f(Ir, { name: "next-month", "aria-label": h, className: b, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: a === "rtl" ? f(v, { className: i.nav_icon, style: s.nav_icon }) : f(p, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function gu(e) {
  var t = Ee().numberOfMonths, n = fr(), r = n.previousMonth, a = n.nextMonth, o = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(h) {
    return Sl(e.displayMonth, h);
  }), l = s === 0, c = s === i.length - 1, d = t > 1 && (l || !c), u = t > 1 && (c || !l), m = function() {
    r && o(r);
  }, g = function() {
    a && o(a);
  };
  return f(Tb, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: u, nextMonth: a, previousMonth: r, onPreviousClick: m, onNextClick: g });
}
function Ob(e) {
  var t, n = Ee(), r = n.classNames, a = n.disableNavigation, o = n.styles, i = n.captionLayout, s = n.components, l = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : Lm, c;
  return a ? c = f(l, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? c = f(hu, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? c = U(ht, { children: [f(hu, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), f(gu, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : c = U(ht, { children: [f(l, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), f(gu, { displayMonth: e.displayMonth, id: e.id })] }), f("div", { className: r.caption, style: o.caption, children: c });
}
function Mb(e) {
  var t = Ee(), n = t.footer, r = t.styles, a = t.classNames.tfoot;
  return n ? f("tfoot", { className: a, style: r.tfoot, children: f("tr", { children: f("td", { colSpan: 8, children: n }) }) }) : f(ht, {});
}
function Db(e, t, n) {
  for (var r = n ? en(/* @__PURE__ */ new Date()) : St(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), a = [], o = 0; o < 7; o++) {
    var i = We(r, o);
    a.push(i);
  }
  return a;
}
function kb() {
  var e = Ee(), t = e.classNames, n = e.styles, r = e.showWeekNumber, a = e.locale, o = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, l = e.labels.labelWeekday, c = Db(a, o, i);
  return U("tr", { style: n.head_row, className: t.head_row, children: [r && f("td", { style: n.head_cell, className: t.head_cell }), c.map(function(d, u) {
    return f("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": l(d, { locale: a }), children: s(d, { locale: a }) }, u);
  })] });
}
function Rb() {
  var e, t = Ee(), n = t.classNames, r = t.styles, a = t.components, o = (e = a == null ? void 0 : a.HeadRow) !== null && e !== void 0 ? e : kb;
  return f("thead", { style: r.head, className: n.head, children: f(o, {}) });
}
function Ib(e) {
  var t = Ee(), n = t.locale, r = t.formatters.formatDay;
  return f(ht, { children: r(e.date, { locale: n }) });
}
var Cl = an(void 0);
function Ab(e) {
  if (!cr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return f(Cl.Provider, { value: t, children: e.children });
  }
  return f(zb, { initialProps: e.initialProps, children: e.children });
}
function zb(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = t.min, o = t.max, i = function(c, d, u) {
    var m, g;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, c, d, u);
    var h = !!(d.selected && a && (r == null ? void 0 : r.length) === a);
    if (!h) {
      var b = !!(!d.selected && o && (r == null ? void 0 : r.length) === o);
      if (!b) {
        var p = r ? Am([], r) : [];
        if (d.selected) {
          var v = p.findIndex(function(y) {
            return Ze(c, y);
          });
          p.splice(v, 1);
        } else
          p.push(c);
        (g = t.onSelect) === null || g === void 0 || g.call(t, p, c, d, u);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(c) {
    var d = o && r.length > o - 1, u = r.some(function(m) {
      return Ze(m, c);
    });
    return !!(d && !u);
  });
  var l = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return f(Cl.Provider, { value: l, children: n });
}
function Pl() {
  var e = on(Cl);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function Lb(e, t) {
  var n = t || {}, r = n.from, a = n.to;
  return r && a ? Ze(a, e) && Ze(r, e) ? void 0 : Ze(a, e) ? { from: a, to: void 0 } : Ze(r, e) ? void 0 : Vs(r, e) ? { from: e, to: a } : { from: r, to: e } : a ? Vs(e, a) ? { from: a, to: e } : { from: e, to: a } : r ? Im(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Nl = an(void 0);
function qb(e) {
  if (!dr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return f(Nl.Provider, { value: t, children: e.children });
  }
  return f($b, { initialProps: e.initialProps, children: e.children });
}
function $b(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = r || {}, o = a.from, i = a.to, s = t.min, l = t.max, c = function(g, h, b) {
    var p, v;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, g, h, b);
    var y = Lb(g, r);
    (v = t.onSelect) === null || v === void 0 || v.call(t, y, g, h, b);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (o ? (d.range_start = [o], i ? (d.range_end = [i], Ze(o, i) || (d.range_middle = [
    {
      after: o,
      before: i
    }
  ])) : d.range_end = [o]) : i && (d.range_start = [i], d.range_end = [i]), s && (o && !i && d.disabled.push({
    after: Sa(o, s - 1),
    before: We(o, s - 1)
  }), o && i && d.disabled.push({
    after: o,
    before: We(o, s - 1)
  }), !o && i && d.disabled.push({
    after: Sa(i, s - 1),
    before: We(i, s - 1)
  })), l) {
    if (o && !i && (d.disabled.push({
      before: We(o, -l + 1)
    }), d.disabled.push({
      after: We(o, l - 1)
    })), o && i) {
      var u = _t(i, o) + 1, m = l - u;
      d.disabled.push({
        before: Sa(o, m)
      }), d.disabled.push({
        after: We(i, m)
      });
    }
    !o && i && (d.disabled.push({
      before: We(i, -l + 1)
    }), d.disabled.push({
      after: We(i, l - 1)
    }));
  }
  return f(Nl.Provider, { value: { selected: r, onDayClick: c, modifiers: d }, children: n });
}
function El() {
  var e = on(Nl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Mr(e) {
  return Array.isArray(e) ? Am([], e) : e !== void 0 ? [e] : [];
}
function Bb(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], a = n[1];
    t[r] = Mr(a);
  }), t;
}
var vt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(vt || (vt = {}));
var jb = vt.Selected, Ot = vt.Disabled, Fb = vt.Hidden, Hb = vt.Today, Pa = vt.RangeEnd, Na = vt.RangeMiddle, Ea = vt.RangeStart, Wb = vt.Outside;
function Yb(e, t, n) {
  var r, a = (r = {}, r[jb] = Mr(e.selected), r[Ot] = Mr(e.disabled), r[Fb] = Mr(e.hidden), r[Hb] = [e.today], r[Pa] = [], r[Na] = [], r[Ea] = [], r[Wb] = [], r);
  return e.fromDate && a[Ot].push({ before: e.fromDate }), e.toDate && a[Ot].push({ after: e.toDate }), cr(e) ? a[Ot] = a[Ot].concat(t.modifiers[Ot]) : dr(e) && (a[Ot] = a[Ot].concat(n.modifiers[Ot]), a[Ea] = n.modifiers[Ea], a[Na] = n.modifiers[Na], a[Pa] = n.modifiers[Pa]), a;
}
var Bm = an(void 0);
function Vb(e) {
  var t = Ee(), n = Pl(), r = El(), a = Yb(t, n, r), o = Bb(t.modifiers), i = re(re({}, a), o);
  return f(Bm.Provider, { value: i, children: e.children });
}
function jm() {
  var e = on(Bm);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Gb(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Ub(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Kb(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Xb(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Qb(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Jb(e, t) {
  var n, r = t.from, a = t.to;
  if (r && a) {
    var o = _t(a, r) < 0;
    o && (n = [a, r], r = n[0], a = n[1]);
    var i = _t(e, r) >= 0 && _t(a, e) >= 0;
    return i;
  }
  return a ? Ze(a, e) : r ? Ze(r, e) : !1;
}
function Zb(e) {
  return wl(e);
}
function ey(e) {
  return Array.isArray(e) && e.every(wl);
}
function ty(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Zb(n))
      return Ze(e, n);
    if (ey(n))
      return n.includes(e);
    if (Ub(n))
      return Jb(e, n);
    if (Qb(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Gb(n)) {
      var r = _t(n.before, e), a = _t(n.after, e), o = r > 0, i = a < 0, s = Vs(n.before, n.after);
      return s ? i && o : o || i;
    }
    return Kb(n) ? _t(e, n.after) > 0 : Xb(n) ? _t(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Tl(e, t, n) {
  var r = Object.keys(t).reduce(function(o, i) {
    var s = t[i];
    return ty(e, s) && o.push(i), o;
  }, []), a = {};
  return r.forEach(function(o) {
    return a[o] = !0;
  }), n && !Sl(e, n) && (a.outside = !0), a;
}
function ny(e, t) {
  for (var n = et(e[0]), r = xl(e[e.length - 1]), a, o, i = n; i <= r; ) {
    var s = Tl(i, t), l = !s.disabled && !s.hidden;
    if (!l) {
      i = We(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !o && (o = i), a || (a = i), i = We(i, 1);
  }
  return o || a;
}
var ry = 365;
function Fm(e, t) {
  var n = t.moveBy, r = t.direction, a = t.context, o = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, l = a.weekStartsOn, c = a.fromDate, d = a.toDate, u = a.locale, m = {
    day: We,
    week: Ys,
    month: gt,
    year: Yg,
    startOfWeek: function(p) {
      return a.ISOWeek ? en(p) : St(p, { locale: u, weekStartsOn: l });
    },
    endOfWeek: function(p) {
      return a.ISOWeek ? Tm(p) : _l(p, { locale: u, weekStartsOn: l });
    }
  }, g = m[n](e, r === "after" ? 1 : -1);
  r === "before" && c ? g = Vg([c, g]) : r === "after" && d && (g = Gg([d, g]));
  var h = !0;
  if (o) {
    var b = Tl(g, o);
    h = !b.disabled && !b.hidden;
  }
  return h ? g : s.count > ry ? s.lastFocused : Fm(g, {
    moveBy: n,
    direction: r,
    context: a,
    modifiers: o,
    retry: re(re({}, s), { count: s.count + 1 })
  });
}
var Hm = an(void 0);
function ay(e) {
  var t = fr(), n = jm(), r = kt(), a = r[0], o = r[1], i = kt(), s = i[0], l = i[1], c = ny(t.displayMonths, n), d = a ?? (s && t.isDateDisplayed(s)) ? s : c, u = function() {
    l(a), o(void 0);
  }, m = function(p) {
    o(p);
  }, g = Ee(), h = function(p, v) {
    if (a) {
      var y = Fm(a, {
        moveBy: p,
        direction: v,
        context: g,
        modifiers: n
      });
      Ze(a, y) || (t.goToDate(y, a), m(y));
    }
  }, b = {
    focusedDay: a,
    focusTarget: d,
    blur: u,
    focus: m,
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
  return f(Hm.Provider, { value: b, children: e.children });
}
function Ol() {
  var e = on(Hm);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function oy(e, t) {
  var n = jm(), r = Tl(e, n, t);
  return r;
}
var Ml = an(void 0);
function iy(e) {
  if (!ea(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return f(Ml.Provider, { value: t, children: e.children });
  }
  return f(sy, { initialProps: e.initialProps, children: e.children });
}
function sy(e) {
  var t = e.initialProps, n = e.children, r = function(o, i, s) {
    var l, c, d;
    if ((l = t.onDayClick) === null || l === void 0 || l.call(t, o, i, s), i.selected && !t.required) {
      (c = t.onSelect) === null || c === void 0 || c.call(t, void 0, o, i, s);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, o, o, i, s);
  }, a = {
    selected: t.selected,
    onDayClick: r
  };
  return f(Ml.Provider, { value: a, children: n });
}
function Wm() {
  var e = on(Ml);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function ly(e, t) {
  var n = Ee(), r = Wm(), a = Pl(), o = El(), i = Ol(), s = i.focusDayAfter, l = i.focusDayBefore, c = i.focusWeekAfter, d = i.focusWeekBefore, u = i.blur, m = i.focus, g = i.focusMonthBefore, h = i.focusMonthAfter, b = i.focusYearBefore, p = i.focusYearAfter, v = i.focusStartOfWeek, y = i.focusEndOfWeek, _ = function(z) {
    var q, ee, ie, K;
    ea(n) ? (q = r.onDayClick) === null || q === void 0 || q.call(r, e, t, z) : cr(n) ? (ee = a.onDayClick) === null || ee === void 0 || ee.call(a, e, t, z) : dr(n) ? (ie = o.onDayClick) === null || ie === void 0 || ie.call(o, e, t, z) : (K = n.onDayClick) === null || K === void 0 || K.call(n, e, t, z);
  }, C = function(z) {
    var q;
    m(e), (q = n.onDayFocus) === null || q === void 0 || q.call(n, e, t, z);
  }, D = function(z) {
    var q;
    u(), (q = n.onDayBlur) === null || q === void 0 || q.call(n, e, t, z);
  }, E = function(z) {
    var q;
    (q = n.onDayMouseEnter) === null || q === void 0 || q.call(n, e, t, z);
  }, S = function(z) {
    var q;
    (q = n.onDayMouseLeave) === null || q === void 0 || q.call(n, e, t, z);
  }, R = function(z) {
    var q;
    (q = n.onDayPointerEnter) === null || q === void 0 || q.call(n, e, t, z);
  }, k = function(z) {
    var q;
    (q = n.onDayPointerLeave) === null || q === void 0 || q.call(n, e, t, z);
  }, Y = function(z) {
    var q;
    (q = n.onDayTouchCancel) === null || q === void 0 || q.call(n, e, t, z);
  }, I = function(z) {
    var q;
    (q = n.onDayTouchEnd) === null || q === void 0 || q.call(n, e, t, z);
  }, F = function(z) {
    var q;
    (q = n.onDayTouchMove) === null || q === void 0 || q.call(n, e, t, z);
  }, T = function(z) {
    var q;
    (q = n.onDayTouchStart) === null || q === void 0 || q.call(n, e, t, z);
  }, W = function(z) {
    var q;
    (q = n.onDayKeyUp) === null || q === void 0 || q.call(n, e, t, z);
  }, j = function(z) {
    var q;
    switch (z.key) {
      case "ArrowLeft":
        z.preventDefault(), z.stopPropagation(), n.dir === "rtl" ? s() : l();
        break;
      case "ArrowRight":
        z.preventDefault(), z.stopPropagation(), n.dir === "rtl" ? l() : s();
        break;
      case "ArrowDown":
        z.preventDefault(), z.stopPropagation(), c();
        break;
      case "ArrowUp":
        z.preventDefault(), z.stopPropagation(), d();
        break;
      case "PageUp":
        z.preventDefault(), z.stopPropagation(), z.shiftKey ? b() : g();
        break;
      case "PageDown":
        z.preventDefault(), z.stopPropagation(), z.shiftKey ? p() : h();
        break;
      case "Home":
        z.preventDefault(), z.stopPropagation(), v();
        break;
      case "End":
        z.preventDefault(), z.stopPropagation(), y();
        break;
    }
    (q = n.onDayKeyDown) === null || q === void 0 || q.call(n, e, t, z);
  }, $ = {
    onClick: _,
    onFocus: C,
    onBlur: D,
    onKeyDown: j,
    onKeyUp: W,
    onMouseEnter: E,
    onMouseLeave: S,
    onPointerEnter: R,
    onPointerLeave: k,
    onTouchCancel: Y,
    onTouchEnd: I,
    onTouchMove: F,
    onTouchStart: T
  };
  return $;
}
function uy() {
  var e = Ee(), t = Wm(), n = Pl(), r = El(), a = ea(e) ? t.selected : cr(e) ? n.selected : dr(e) ? r.selected : void 0;
  return a;
}
function cy(e) {
  return Object.values(vt).includes(e);
}
function dy(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var a = e.modifiersClassNames[r];
    if (a)
      n.push(a);
    else if (cy(r)) {
      var o = e.classNames["day_".concat(r)];
      o && n.push(o);
    }
  }), n;
}
function fy(e, t) {
  var n = re({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var a;
    n = re(re({}, n), (a = e.modifiersStyles) === null || a === void 0 ? void 0 : a[r]);
  }), n;
}
function my(e, t, n) {
  var r, a, o, i = Ee(), s = Ol(), l = oy(e, t), c = ly(e, l), d = uy(), u = !!(i.onDayClick || i.mode !== "default");
  ct(function() {
    var E;
    l.outside || s.focusedDay && u && Ze(s.focusedDay, e) && ((E = n.current) === null || E === void 0 || E.focus());
  }, [
    s.focusedDay,
    e,
    n,
    u,
    l.outside
  ]);
  var m = dy(i, l).join(" "), g = fy(i, l), h = !!(l.outside && !i.showOutsideDays || l.hidden), b = (o = (a = i.components) === null || a === void 0 ? void 0 : a.DayContent) !== null && o !== void 0 ? o : Ib, p = f(b, { date: e, displayMonth: t, activeModifiers: l }), v = {
    style: g,
    className: m,
    children: p,
    role: "gridcell"
  }, y = s.focusTarget && Ze(s.focusTarget, e) && !l.outside, _ = s.focusedDay && Ze(s.focusedDay, e), C = re(re(re({}, v), (r = { disabled: l.disabled, role: "gridcell" }, r["aria-selected"] = l.selected, r.tabIndex = _ || y ? 0 : -1, r)), c), D = {
    isButton: u,
    isHidden: h,
    activeModifiers: l,
    selectedDays: d,
    buttonProps: C,
    divProps: v
  };
  return D;
}
function py(e) {
  var t = Cn(null), n = my(e.date, e.displayMonth, t);
  return n.isHidden ? f("div", { role: "gridcell" }) : n.isButton ? f(Ir, re({ name: "day", ref: t }, n.buttonProps)) : f("div", re({}, n.divProps));
}
function hy(e) {
  var t = e.number, n = e.dates, r = Ee(), a = r.onWeekNumberClick, o = r.styles, i = r.classNames, s = r.locale, l = r.labels.labelWeekNumber, c = r.formatters.formatWeekNumber, d = c(Number(t), { locale: s });
  if (!a)
    return f("span", { className: i.weeknumber, style: o.weeknumber, children: d });
  var u = l(Number(t), { locale: s }), m = function(g) {
    a(t, n, g);
  };
  return f(Ir, { name: "week-number", "aria-label": u, className: i.weeknumber, style: o.weeknumber, onClick: m, children: d });
}
function gy(e) {
  var t, n, r = Ee(), a = r.styles, o = r.classNames, i = r.showWeekNumber, s = r.components, l = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : py, c = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : hy, d;
  return i && (d = f("td", { className: o.cell, style: a.cell, children: f(c, { number: e.weekNumber, dates: e.dates }) })), U("tr", { className: o.row, style: a.row, children: [d, e.dates.map(function(u) {
    return f("td", { className: o.cell, style: a.cell, role: "presentation", children: f(l, { displayMonth: e.displayMonth, date: u }) }, Vv(u));
  })] });
}
function vu(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Tm(t) : _l(t, n), a = n != null && n.ISOWeek ? en(e) : St(e, n), o = _t(r, a), i = [], s = 0; s <= o; s++)
    i.push(We(a, s));
  var l = i.reduce(function(c, d) {
    var u = n != null && n.ISOWeek ? Mm(d) : km(d, n), m = c.find(function(g) {
      return g.weekNumber === u;
    });
    return m ? (m.dates.push(d), c) : (c.push({
      weekNumber: u,
      dates: [d]
    }), c);
  }, []);
  return l;
}
function vy(e, t) {
  var n = vu(et(e), xl(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Uv(e, t);
    if (r < 6) {
      var a = n[n.length - 1], o = a.dates[a.dates.length - 1], i = Ys(o, 6 - r), s = vu(Ys(o, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function by(e) {
  var t, n, r, a = Ee(), o = a.locale, i = a.classNames, s = a.styles, l = a.hideHead, c = a.fixedWeeks, d = a.components, u = a.weekStartsOn, m = a.firstWeekContainsDate, g = a.ISOWeek, h = vy(e.displayMonth, {
    useFixedWeeks: !!c,
    ISOWeek: g,
    locale: o,
    weekStartsOn: u,
    firstWeekContainsDate: m
  }), b = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : Rb, p = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : gy, v = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : Mb;
  return U("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!l && f(b, {}), f("tbody", { className: i.tbody, style: s.tbody, children: h.map(function(y) {
    return f(p, { displayMonth: e.displayMonth, dates: y.dates, weekNumber: y.weekNumber }, y.weekNumber);
  }) }), f(v, { displayMonth: e.displayMonth })] });
}
function yy() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var wy = yy() ? wm : ct, Ta = !1, xy = 0;
function bu() {
  return "react-day-picker-".concat(++xy);
}
function _y(e) {
  var t, n = e ?? (Ta ? bu() : null), r = kt(n), a = r[0], o = r[1];
  return wy(function() {
    a === null && o(bu());
  }, []), ct(function() {
    Ta === !1 && (Ta = !0);
  }, []), (t = e ?? a) !== null && t !== void 0 ? t : void 0;
}
function Sy(e) {
  var t, n, r = Ee(), a = r.dir, o = r.classNames, i = r.styles, s = r.components, l = fr().displayMonths, c = _y(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, u = [o.month], m = i.month, g = e.displayIndex === 0, h = e.displayIndex === l.length - 1, b = !g && !h;
  a === "rtl" && (t = [g, h], h = t[0], g = t[1]), g && (u.push(o.caption_start), m = re(re({}, m), i.caption_start)), h && (u.push(o.caption_end), m = re(re({}, m), i.caption_end)), b && (u.push(o.caption_between), m = re(re({}, m), i.caption_between));
  var p = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : Ob;
  return U("div", { className: u.join(" "), style: m, children: [f(p, { id: c, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), f(by, { id: d, "aria-labelledby": c, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function Cy(e) {
  var t = Ee(), n = t.classNames, r = t.styles;
  return f("div", { className: n.months, style: r.months, children: e.children });
}
function Py(e) {
  var t, n, r = e.initialProps, a = Ee(), o = Ol(), i = fr(), s = kt(!1), l = s[0], c = s[1];
  ct(function() {
    a.initialFocus && o.focusTarget && (l || (o.focus(o.focusTarget), c(!0)));
  }, [
    a.initialFocus,
    l,
    o.focus,
    o.focusTarget,
    o
  ]);
  var d = [a.classNames.root, a.className];
  a.numberOfMonths > 1 && d.push(a.classNames.multiple_months), a.showWeekNumber && d.push(a.classNames.with_weeknumber);
  var u = re(re({}, a.styles.root), a.style), m = Object.keys(r).filter(function(h) {
    return h.startsWith("data-");
  }).reduce(function(h, b) {
    var p;
    return re(re({}, h), (p = {}, p[b] = r[b], p));
  }, {}), g = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : Cy;
  return f("div", re({ className: d.join(" "), style: u, dir: a.dir, id: a.id, nonce: r.nonce, title: r.title, lang: r.lang }, m, { children: f(g, { children: i.displayMonths.map(function(h, b) {
    return f(Sy, { displayIndex: b, displayMonth: h }, b);
  }) }) }));
}
function Ny(e) {
  var t = e.children, n = Xv(e, ["children"]);
  return f(hb, { initialProps: n, children: f(Pb, { children: f(iy, { initialProps: n, children: f(Ab, { initialProps: n, children: f(qb, { initialProps: n, children: f(Vb, { children: f(ay, { children: t }) }) }) }) }) }) });
}
function Ey(e) {
  return f(Ny, re({}, e, { children: f(Py, { initialProps: e }) }));
}
function uE({
  internalClassName: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f(
    Ey,
    {
      showOutsideDays: n,
      className: w("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: w(
          Zt({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: w(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          r.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: w(
          Zt({ variant: "ghost" }),
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
        IconLeft: ({ className: a, ...o }) => /* @__PURE__ */ f(tg, { className: w("size-4", a), ...o }),
        IconRight: ({ className: a, ...o }) => /* @__PURE__ */ f(bm, { className: w("size-4", a), ...o })
      },
      ...r
    }
  );
}
function Ty(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function yu(e) {
  return Ty(e) || Array.isArray(e);
}
function Oy() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Dl(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), o = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== o ? !1 : n.every((i) => {
    const s = e[i], l = t[i];
    return typeof s == "function" ? `${s}` == `${l}` : !yu(s) || !yu(l) ? s === l : Dl(s, l);
  });
}
function wu(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function My(e, t) {
  if (e.length !== t.length) return !1;
  const n = wu(e), r = wu(t);
  return n.every((a, o) => {
    const i = r[o];
    return Dl(a, i);
  });
}
function kl(e) {
  return typeof e == "number";
}
function Gs(e) {
  return typeof e == "string";
}
function ta(e) {
  return typeof e == "boolean";
}
function xu(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Me(e) {
  return Math.abs(e);
}
function Rl(e) {
  return Math.sign(e);
}
function Gn(e, t) {
  return Me(e - t);
}
function Dy(e, t) {
  if (e === 0 || t === 0 || Me(e) <= Me(t)) return 0;
  const n = Gn(Me(e), Me(t));
  return Me(n / e);
}
function ky(e) {
  return Math.round(e * 100) / 100;
}
function Jn(e) {
  return Zn(e).map(Number);
}
function mt(e) {
  return e[mr(e)];
}
function mr(e) {
  return Math.max(0, e.length - 1);
}
function Il(e, t) {
  return t === mr(e);
}
function _u(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Zn(e) {
  return Object.keys(e);
}
function Ym(e, t) {
  return [e, t].reduce((n, r) => (Zn(r).forEach((a) => {
    const o = n[a], i = r[a], s = xu(o) && xu(i);
    n[a] = s ? Ym(o, i) : i;
  }), n), {});
}
function Us(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Ry(e, t) {
  const n = {
    start: r,
    center: a,
    end: o
  };
  function r() {
    return 0;
  }
  function a(l) {
    return o(l) / 2;
  }
  function o(l) {
    return t - l;
  }
  function i(l, c) {
    return Gs(e) ? n[e](l) : e(t, l, c);
  }
  return {
    measure: i
  };
}
function er() {
  let e = [];
  function t(a, o, i, s = {
    passive: !0
  }) {
    let l;
    if ("addEventListener" in a)
      a.addEventListener(o, i, s), l = () => a.removeEventListener(o, i, s);
    else {
      const c = a;
      c.addListener(i), l = () => c.removeListener(i);
    }
    return e.push(l), r;
  }
  function n() {
    e = e.filter((a) => a());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function Iy(e, t, n, r) {
  const a = er(), o = 1e3 / 60;
  let i = null, s = 0, l = 0;
  function c() {
    a.add(e, "visibilitychange", () => {
      e.hidden && h();
    });
  }
  function d() {
    g(), a.clear();
  }
  function u(p) {
    if (!l) return;
    i || (i = p, n(), n());
    const v = p - i;
    for (i = p, s += v; s >= o; )
      n(), s -= o;
    const y = s / o;
    r(y), l && (l = t.requestAnimationFrame(u));
  }
  function m() {
    l || (l = t.requestAnimationFrame(u));
  }
  function g() {
    t.cancelAnimationFrame(l), i = null, s = 0, l = 0;
  }
  function h() {
    i = null, s = 0;
  }
  return {
    init: c,
    destroy: d,
    start: m,
    stop: g,
    update: n,
    render: r
  };
}
function Ay(e, t) {
  const n = t === "rtl", r = e === "y", a = r ? "y" : "x", o = r ? "x" : "y", i = !r && n ? -1 : 1, s = d(), l = u();
  function c(h) {
    const {
      height: b,
      width: p
    } = h;
    return r ? b : p;
  }
  function d() {
    return r ? "top" : n ? "right" : "left";
  }
  function u() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function m(h) {
    return h * i;
  }
  return {
    scroll: a,
    cross: o,
    startEdge: s,
    endEdge: l,
    measureSize: c,
    direction: m
  };
}
function tn(e = 0, t = 0) {
  const n = Me(e - t);
  function r(c) {
    return c < e;
  }
  function a(c) {
    return c > t;
  }
  function o(c) {
    return r(c) || a(c);
  }
  function i(c) {
    return o(c) ? r(c) ? e : t : c;
  }
  function s(c) {
    return n ? c - n * Math.ceil((c - t) / n) : c;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: i,
    reachedAny: o,
    reachedMax: a,
    reachedMin: r,
    removeOffset: s
  };
}
function Vm(e, t, n) {
  const {
    constrain: r
  } = tn(0, e), a = e + 1;
  let o = i(t);
  function i(m) {
    return n ? Me((a + m) % a) : r(m);
  }
  function s() {
    return o;
  }
  function l(m) {
    return o = i(m), u;
  }
  function c(m) {
    return d().set(s() + m);
  }
  function d() {
    return Vm(e, s(), n);
  }
  const u = {
    get: s,
    set: l,
    add: c,
    clone: d
  };
  return u;
}
function zy(e, t, n, r, a, o, i, s, l, c, d, u, m, g, h, b, p, v, y) {
  const {
    cross: _,
    direction: C
  } = e, D = ["INPUT", "SELECT", "TEXTAREA"], E = {
    passive: !1
  }, S = er(), R = er(), k = tn(50, 225).constrain(g.measure(20)), Y = {
    mouse: 300,
    touch: 400
  }, I = {
    mouse: 500,
    touch: 600
  }, F = h ? 43 : 25;
  let T = !1, W = 0, j = 0, $ = !1, z = !1, q = !1, ee = !1;
  function ie(G) {
    if (!y) return;
    function Z(X) {
      (ta(y) || y(G, X)) && B(X);
    }
    const P = t;
    S.add(P, "dragstart", (X) => X.preventDefault(), E).add(P, "touchmove", () => {
    }, E).add(P, "touchend", () => {
    }).add(P, "touchstart", Z).add(P, "mousedown", Z).add(P, "touchcancel", V).add(P, "contextmenu", V).add(P, "click", Q, !0);
  }
  function K() {
    S.clear(), R.clear();
  }
  function O() {
    const G = ee ? n : t;
    R.add(G, "touchmove", H, E).add(G, "touchend", V).add(G, "mousemove", H, E).add(G, "mouseup", V);
  }
  function N(G) {
    const Z = G.nodeName || "";
    return D.includes(Z);
  }
  function L() {
    return (h ? I : Y)[ee ? "mouse" : "touch"];
  }
  function A(G, Z) {
    const P = u.add(Rl(G) * -1), X = d.byDistance(G, !h).distance;
    return h || Me(G) < k ? X : p && Z ? X * 0.5 : d.byIndex(P.get(), 0).distance;
  }
  function B(G) {
    const Z = Us(G, r);
    ee = Z, q = h && Z && !G.buttons && T, T = Gn(a.get(), i.get()) >= 2, !(Z && G.button !== 0) && (N(G.target) || ($ = !0, o.pointerDown(G), c.useFriction(0).useDuration(0), a.set(i), O(), W = o.readPoint(G), j = o.readPoint(G, _), m.emit("pointerDown")));
  }
  function H(G) {
    if (!Us(G, r) && G.touches.length >= 2) return V(G);
    const P = o.readPoint(G), X = o.readPoint(G, _), se = Gn(P, W), ce = Gn(X, j);
    if (!z && !ee && (!G.cancelable || (z = se > ce, !z)))
      return V(G);
    const le = o.pointerMove(G);
    se > b && (q = !0), c.useFriction(0.3).useDuration(0.75), s.start(), a.add(C(le)), G.preventDefault();
  }
  function V(G) {
    const P = d.byDistance(0, !1).index !== u.get(), X = o.pointerUp(G) * L(), se = A(C(X), P), ce = Dy(X, se), le = F - 10 * ce, oe = v + ce / 50;
    z = !1, $ = !1, R.clear(), c.useDuration(le).useFriction(oe), l.distance(se, !h), ee = !1, m.emit("pointerUp");
  }
  function Q(G) {
    q && (G.stopPropagation(), G.preventDefault(), q = !1);
  }
  function ne() {
    return $;
  }
  return {
    init: ie,
    destroy: K,
    pointerDown: ne
  };
}
function Ly(e, t) {
  let r, a;
  function o(u) {
    return u.timeStamp;
  }
  function i(u, m) {
    const h = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Us(u, t) ? u : u.touches[0])[h];
  }
  function s(u) {
    return r = u, a = u, i(u);
  }
  function l(u) {
    const m = i(u) - i(a), g = o(u) - o(r) > 170;
    return a = u, g && (r = u), m;
  }
  function c(u) {
    if (!r || !a) return 0;
    const m = i(a) - i(r), g = o(u) - o(r), h = o(u) - o(a) > 170, b = m / g;
    return g && !h && Me(b) > 0.1 ? b : 0;
  }
  return {
    pointerDown: s,
    pointerMove: l,
    pointerUp: c,
    readPoint: i
  };
}
function qy() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: a,
      offsetWidth: o,
      offsetHeight: i
    } = n;
    return {
      top: r,
      right: a + o,
      bottom: r + i,
      left: a,
      width: o,
      height: i
    };
  }
  return {
    measure: e
  };
}
function $y(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function By(e, t, n, r, a, o, i) {
  const s = [e].concat(r);
  let l, c, d = [], u = !1;
  function m(p) {
    return a.measureSize(i.measure(p));
  }
  function g(p) {
    if (!o) return;
    c = m(e), d = r.map(m);
    function v(y) {
      for (const _ of y) {
        if (u) return;
        const C = _.target === e, D = r.indexOf(_.target), E = C ? c : d[D], S = m(C ? e : r[D]);
        if (Me(S - E) >= 0.5) {
          p.reInit(), t.emit("resize");
          break;
        }
      }
    }
    l = new ResizeObserver((y) => {
      (ta(o) || o(p, y)) && v(y);
    }), n.requestAnimationFrame(() => {
      s.forEach((y) => l.observe(y));
    });
  }
  function h() {
    u = !0, l && l.disconnect();
  }
  return {
    init: g,
    destroy: h
  };
}
function jy(e, t, n, r, a, o) {
  let i = 0, s = 0, l = a, c = o, d = e.get(), u = 0;
  function m() {
    const E = r.get() - e.get(), S = !l;
    let R = 0;
    return S ? (i = 0, n.set(r), e.set(r), R = E) : (n.set(e), i += E / l, i *= c, d += i, e.add(i), R = d - u), s = Rl(R), u = d, D;
  }
  function g() {
    const E = r.get() - t.get();
    return Me(E) < 1e-3;
  }
  function h() {
    return l;
  }
  function b() {
    return s;
  }
  function p() {
    return i;
  }
  function v() {
    return _(a);
  }
  function y() {
    return C(o);
  }
  function _(E) {
    return l = E, D;
  }
  function C(E) {
    return c = E, D;
  }
  const D = {
    direction: b,
    duration: h,
    velocity: p,
    seek: m,
    settled: g,
    useBaseFriction: y,
    useBaseDuration: v,
    useFriction: C,
    useDuration: _
  };
  return D;
}
function Fy(e, t, n, r, a) {
  const o = a.measure(10), i = a.measure(50), s = tn(0.1, 0.99);
  let l = !1;
  function c() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(g) {
    if (!c()) return;
    const h = e.reachedMin(t.get()) ? "min" : "max", b = Me(e[h] - t.get()), p = n.get() - t.get(), v = s.constrain(b / i);
    n.subtract(p * v), !g && Me(p) < o && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function u(g) {
    l = !g;
  }
  return {
    shouldConstrain: c,
    constrain: d,
    toggleActive: u
  };
}
function Hy(e, t, n, r, a) {
  const o = tn(-t + e, 0), i = u(), s = d(), l = m();
  function c(h, b) {
    return Gn(h, b) <= 1;
  }
  function d() {
    const h = i[0], b = mt(i), p = i.lastIndexOf(h), v = i.indexOf(b) + 1;
    return tn(p, v);
  }
  function u() {
    return n.map((h, b) => {
      const {
        min: p,
        max: v
      } = o, y = o.constrain(h), _ = !b, C = Il(n, b);
      return _ ? v : C || c(p, y) ? p : c(v, y) ? v : y;
    }).map((h) => parseFloat(h.toFixed(3)));
  }
  function m() {
    if (t <= e + a) return [o.max];
    if (r === "keepSnaps") return i;
    const {
      min: h,
      max: b
    } = s;
    return i.slice(h, b);
  }
  return {
    snapsContained: l,
    scrollContainLimit: s
  };
}
function Wy(e, t, n) {
  const r = t[0], a = n ? r - e : mt(t);
  return {
    limit: tn(a, r)
  };
}
function Yy(e, t, n, r) {
  const o = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: l
  } = tn(o, i);
  function c(m) {
    return m === 1 ? l(n.get()) : m === -1 ? s(n.get()) : !1;
  }
  function d(m) {
    if (!c(m)) return;
    const g = e * (m * -1);
    r.forEach((h) => h.add(g));
  }
  return {
    loop: d
  };
}
function Vy(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(o) {
    const i = o - t;
    return n ? i / -n : 0;
  }
  return {
    get: r
  };
}
function Gy(e, t, n, r, a) {
  const {
    startEdge: o,
    endEdge: i
  } = e, {
    groupSlides: s
  } = a, l = u().map(t.measure), c = m(), d = g();
  function u() {
    return s(r).map((b) => mt(b)[i] - b[0][o]).map(Me);
  }
  function m() {
    return r.map((b) => n[o] - b[o]).map((b) => -Me(b));
  }
  function g() {
    return s(c).map((b) => b[0]).map((b, p) => b + l[p]);
  }
  return {
    snaps: c,
    snapsAligned: d
  };
}
function Uy(e, t, n, r, a, o) {
  const {
    groupSlides: i
  } = a, {
    min: s,
    max: l
  } = r, c = d();
  function d() {
    const m = i(o), g = !e || t === "keepSnaps";
    return n.length === 1 ? [o] : g ? m : m.slice(s, l).map((h, b, p) => {
      const v = !b, y = Il(p, b);
      if (v) {
        const _ = mt(p[0]) + 1;
        return _u(_);
      }
      if (y) {
        const _ = mr(o) - mt(p)[0] + 1;
        return _u(_, mt(p)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: c
  };
}
function Ky(e, t, n, r, a) {
  const {
    reachedAny: o,
    removeOffset: i,
    constrain: s
  } = r;
  function l(h) {
    return h.concat().sort((b, p) => Me(b) - Me(p))[0];
  }
  function c(h) {
    const b = e ? i(h) : s(h), p = t.map((y, _) => ({
      diff: d(y - b, 0),
      index: _
    })).sort((y, _) => Me(y.diff) - Me(_.diff)), {
      index: v
    } = p[0];
    return {
      index: v,
      distance: b
    };
  }
  function d(h, b) {
    const p = [h, h + n, h - n];
    if (!e) return h;
    if (!b) return l(p);
    const v = p.filter((y) => Rl(y) === b);
    return v.length ? l(v) : mt(p) - n;
  }
  function u(h, b) {
    const p = t[h] - a.get(), v = d(p, b);
    return {
      index: h,
      distance: v
    };
  }
  function m(h, b) {
    const p = a.get() + h, {
      index: v,
      distance: y
    } = c(p), _ = !e && o(p);
    if (!b || _) return {
      index: v,
      distance: h
    };
    const C = t[v] - y, D = h + d(C, 0);
    return {
      index: v,
      distance: D
    };
  }
  return {
    byDistance: m,
    byIndex: u,
    shortcut: d
  };
}
function Xy(e, t, n, r, a, o, i) {
  function s(u) {
    const m = u.distance, g = u.index !== t.get();
    o.add(m), m && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), g && (n.set(t.get()), t.set(u.index), i.emit("select"));
  }
  function l(u, m) {
    const g = a.byDistance(u, m);
    s(g);
  }
  function c(u, m) {
    const g = t.clone().set(u), h = a.byIndex(g.get(), m);
    s(h);
  }
  return {
    distance: l,
    index: c
  };
}
function Qy(e, t, n, r, a, o, i, s) {
  const l = {
    passive: !0,
    capture: !0
  };
  let c = 0;
  function d(g) {
    if (!s) return;
    function h(b) {
      if ((/* @__PURE__ */ new Date()).getTime() - c > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const y = n.findIndex((_) => _.includes(b));
      kl(y) && (a.useDuration(0), r.index(y, 0), i.emit("slideFocus"));
    }
    o.add(document, "keydown", u, !1), t.forEach((b, p) => {
      o.add(b, "focus", (v) => {
        (ta(s) || s(g, v)) && h(p);
      }, l);
    });
  }
  function u(g) {
    g.code === "Tab" && (c = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: d
  };
}
function jn(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(l) {
    t = i(l);
  }
  function a(l) {
    t += i(l);
  }
  function o(l) {
    t -= i(l);
  }
  function i(l) {
    return kl(l) ? l : l.get();
  }
  return {
    get: n,
    set: r,
    add: a,
    subtract: o
  };
}
function Gm(e, t) {
  const n = e.scroll === "x" ? i : s, r = t.style;
  let a = null, o = !1;
  function i(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function s(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function l(m) {
    if (o) return;
    const g = ky(e.direction(m));
    g !== a && (r.transform = n(g), a = g);
  }
  function c(m) {
    o = !m;
  }
  function d() {
    o || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: d,
    to: l,
    toggleActive: c
  };
}
function Jy(e, t, n, r, a, o, i, s, l) {
  const d = Jn(a), u = Jn(a).reverse(), m = v().concat(y());
  function g(S, R) {
    return S.reduce((k, Y) => k - a[Y], R);
  }
  function h(S, R) {
    return S.reduce((k, Y) => g(k, R) > 0 ? k.concat([Y]) : k, []);
  }
  function b(S) {
    return o.map((R, k) => ({
      start: R - r[k] + 0.5 + S,
      end: R + t - 0.5 + S
    }));
  }
  function p(S, R, k) {
    const Y = b(R);
    return S.map((I) => {
      const F = k ? 0 : -n, T = k ? n : 0, W = k ? "end" : "start", j = Y[I][W];
      return {
        index: I,
        loopPoint: j,
        slideLocation: jn(-1),
        translate: Gm(e, l[I]),
        target: () => s.get() > j ? F : T
      };
    });
  }
  function v() {
    const S = i[0], R = h(u, S);
    return p(R, n, !1);
  }
  function y() {
    const S = t - i[0] - 1, R = h(d, S);
    return p(R, -n, !0);
  }
  function _() {
    return m.every(({
      index: S
    }) => {
      const R = d.filter((k) => k !== S);
      return g(R, t) <= 0.1;
    });
  }
  function C() {
    m.forEach((S) => {
      const {
        target: R,
        translate: k,
        slideLocation: Y
      } = S, I = R();
      I !== Y.get() && (k.to(I), Y.set(I));
    });
  }
  function D() {
    m.forEach((S) => S.translate.clear());
  }
  return {
    canLoop: _,
    clear: D,
    loop: C,
    loopPoints: m
  };
}
function Zy(e, t, n) {
  let r, a = !1;
  function o(l) {
    if (!n) return;
    function c(d) {
      for (const u of d)
        if (u.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((d) => {
      a || (ta(n) || n(l, d)) && c(d);
    }), r.observe(e, {
      childList: !0
    });
  }
  function i() {
    r && r.disconnect(), a = !0;
  }
  return {
    init: o,
    destroy: i
  };
}
function e0(e, t, n, r) {
  const a = {};
  let o = null, i = null, s, l = !1;
  function c() {
    s = new IntersectionObserver((h) => {
      l || (h.forEach((b) => {
        const p = t.indexOf(b.target);
        a[p] = b;
      }), o = null, i = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((h) => s.observe(h));
  }
  function d() {
    s && s.disconnect(), l = !0;
  }
  function u(h) {
    return Zn(a).reduce((b, p) => {
      const v = parseInt(p), {
        isIntersecting: y
      } = a[v];
      return (h && y || !h && !y) && b.push(v), b;
    }, []);
  }
  function m(h = !0) {
    if (h && o) return o;
    if (!h && i) return i;
    const b = u(h);
    return h && (o = b), h || (i = b), b;
  }
  return {
    init: c,
    destroy: d,
    get: m
  };
}
function t0(e, t, n, r, a, o) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: l
  } = e, c = n[0] && a, d = h(), u = b(), m = n.map(i), g = p();
  function h() {
    if (!c) return 0;
    const y = n[0];
    return Me(t[s] - y[s]);
  }
  function b() {
    if (!c) return 0;
    const y = o.getComputedStyle(mt(r));
    return parseFloat(y.getPropertyValue(`margin-${l}`));
  }
  function p() {
    return n.map((y, _, C) => {
      const D = !_, E = Il(C, _);
      return D ? m[_] + d : E ? m[_] + u : C[_ + 1][s] - y[s];
    }).map(Me);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: g,
    startGap: d,
    endGap: u
  };
}
function n0(e, t, n, r, a, o, i, s, l) {
  const {
    startEdge: c,
    endEdge: d,
    direction: u
  } = e, m = kl(n);
  function g(v, y) {
    return Jn(v).filter((_) => _ % y === 0).map((_) => v.slice(_, _ + y));
  }
  function h(v) {
    return v.length ? Jn(v).reduce((y, _, C) => {
      const D = mt(y) || 0, E = D === 0, S = _ === mr(v), R = a[c] - o[D][c], k = a[c] - o[_][d], Y = !r && E ? u(i) : 0, I = !r && S ? u(s) : 0, F = Me(k - I - (R + Y));
      return C && F > t + l && y.push(_), S && y.push(v.length), y;
    }, []).map((y, _, C) => {
      const D = Math.max(C[_ - 1] || 0);
      return v.slice(D, y);
    }) : [];
  }
  function b(v) {
    return m ? g(v, n) : h(v);
  }
  return {
    groupSlides: b
  };
}
function r0(e, t, n, r, a, o, i) {
  const {
    align: s,
    axis: l,
    direction: c,
    startIndex: d,
    loop: u,
    duration: m,
    dragFree: g,
    dragThreshold: h,
    inViewThreshold: b,
    slidesToScroll: p,
    skipSnaps: v,
    containScroll: y,
    watchResize: _,
    watchSlides: C,
    watchDrag: D,
    watchFocus: E
  } = o, S = 2, R = qy(), k = R.measure(t), Y = n.map(R.measure), I = Ay(l, c), F = I.measureSize(k), T = $y(F), W = Ry(s, F), j = !u && !!y, $ = u || !!y, {
    slideSizes: z,
    slideSizesWithGaps: q,
    startGap: ee,
    endGap: ie
  } = t0(I, k, Y, n, $, a), K = n0(I, F, p, u, k, Y, ee, ie, S), {
    snaps: O,
    snapsAligned: N
  } = Gy(I, W, k, Y, K), L = -mt(O) + mt(q), {
    snapsContained: A,
    scrollContainLimit: B
  } = Hy(F, L, N, y, S), H = j ? A : N, {
    limit: V
  } = Wy(L, H, u), Q = Vm(mr(H), d, u), ne = Q.clone(), ae = Jn(n), G = ({
    dragHandler: Ae,
    scrollBody: wt,
    scrollBounds: ze,
    options: {
      loop: qe
    }
  }) => {
    qe || ze.constrain(Ae.pointerDown()), wt.seek();
  }, Z = ({
    scrollBody: Ae,
    translate: wt,
    location: ze,
    offsetLocation: qe,
    previousLocation: Et,
    scrollLooper: It,
    slideLooper: fn,
    dragHandler: kn,
    animation: Ht,
    eventHandler: J,
    scrollBounds: pe,
    options: {
      loop: ve
    }
  }, de) => {
    const Se = Ae.settled(), te = !pe.shouldConstrain(), fe = ve ? Se : Se && te, _e = fe && !kn.pointerDown();
    _e && Ht.stop();
    const Ce = ze.get() * de + Et.get() * (1 - de);
    qe.set(Ce), ve && (It.loop(Ae.direction()), fn.loop()), wt.to(qe.get()), _e && J.emit("settle"), fe || J.emit("scroll");
  }, P = Iy(r, a, () => G(ot), (Ae) => Z(ot, Ae)), X = 0.68, se = H[Q.get()], ce = jn(se), le = jn(se), oe = jn(se), ge = jn(se), De = jy(ce, oe, le, ge, m, X), me = Ky(u, H, L, V, ge), Pe = Xy(P, Q, ne, De, me, ge, i), Fe = Vy(V), He = er(), Le = e0(t, n, i, b), {
    slideRegistry: Ve
  } = Uy(j, y, H, B, K, ae), at = Qy(e, n, Ve, Pe, De, He, i, E), ot = {
    ownerDocument: r,
    ownerWindow: a,
    eventHandler: i,
    containerRect: k,
    slideRects: Y,
    animation: P,
    axis: I,
    dragHandler: zy(I, e, r, a, ge, Ly(I, a), ce, P, Pe, De, me, Q, i, T, g, h, v, X, D),
    eventStore: He,
    percentOfView: T,
    index: Q,
    indexPrevious: ne,
    limit: V,
    location: ce,
    offsetLocation: oe,
    previousLocation: le,
    options: o,
    resizeHandler: By(t, i, a, n, I, _, R),
    scrollBody: De,
    scrollBounds: Fy(V, oe, ge, De, T),
    scrollLooper: Yy(L, V, oe, [ce, oe, le, ge]),
    scrollProgress: Fe,
    scrollSnapList: H.map(Fe.get),
    scrollSnaps: H,
    scrollTarget: me,
    scrollTo: Pe,
    slideLooper: Jy(I, F, L, z, q, O, H, oe, n),
    slideFocus: at,
    slidesHandler: Zy(t, i, C),
    slidesInView: Le,
    slideIndexes: ae,
    slideRegistry: Ve,
    slidesToScroll: K,
    target: ge,
    translate: Gm(I, t)
  };
  return ot;
}
function a0() {
  let e = {}, t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function a(c) {
    return r(c).forEach((d) => d(t, c)), l;
  }
  function o(c, d) {
    return e[c] = r(c).concat([d]), l;
  }
  function i(c, d) {
    return e[c] = r(c).filter((u) => u !== d), l;
  }
  function s() {
    e = {};
  }
  const l = {
    init: n,
    emit: a,
    off: i,
    on: o,
    clear: s
  };
  return l;
}
const o0 = {
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
function i0(e) {
  function t(o, i) {
    return Ym(o, i || {});
  }
  function n(o) {
    const i = o.breakpoints || {}, s = Zn(i).filter((l) => e.matchMedia(l).matches).map((l) => i[l]).reduce((l, c) => t(l, c), {});
    return t(o, s);
  }
  function r(o) {
    return o.map((i) => Zn(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function s0(e) {
  let t = [];
  function n(o, i) {
    return t = i.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(o, e)), i.reduce((s, l) => Object.assign(s, {
      [l.name]: l
    }), {});
  }
  function r() {
    t = t.filter((o) => o.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function Ar(e, t, n) {
  const r = e.ownerDocument, a = r.defaultView, o = i0(a), i = s0(o), s = er(), l = a0(), {
    mergeOptions: c,
    optionsAtMedia: d,
    optionsMediaQueries: u
  } = o, {
    on: m,
    off: g,
    emit: h
  } = l, b = I;
  let p = !1, v, y = c(o0, Ar.globalOptions), _ = c(y), C = [], D, E, S;
  function R() {
    const {
      container: ae,
      slides: G
    } = _;
    E = (Gs(ae) ? e.querySelector(ae) : ae) || e.children[0];
    const P = Gs(G) ? E.querySelectorAll(G) : G;
    S = [].slice.call(P || E.children);
  }
  function k(ae) {
    const G = r0(e, E, S, r, a, ae, l);
    if (ae.loop && !G.slideLooper.canLoop()) {
      const Z = Object.assign({}, ae, {
        loop: !1
      });
      return k(Z);
    }
    return G;
  }
  function Y(ae, G) {
    p || (y = c(y, ae), _ = d(y), C = G || C, R(), v = k(_), u([y, ...C.map(({
      options: Z
    }) => Z)]).forEach((Z) => s.add(Z, "change", I)), _.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(ne), v.eventHandler.init(ne), v.resizeHandler.init(ne), v.slidesHandler.init(ne), v.options.loop && v.slideLooper.loop(), E.offsetParent && S.length && v.dragHandler.init(ne), D = i.init(ne, C)));
  }
  function I(ae, G) {
    const Z = K();
    F(), Y(c({
      startIndex: Z
    }, ae), G), l.emit("reInit");
  }
  function F() {
    v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), i.destroy(), s.clear();
  }
  function T() {
    p || (p = !0, s.clear(), F(), l.emit("destroy"), l.clear());
  }
  function W(ae, G, Z) {
    !_.active || p || (v.scrollBody.useBaseFriction().useDuration(G === !0 ? 0 : _.duration), v.scrollTo.index(ae, Z || 0));
  }
  function j(ae) {
    const G = v.index.add(1).get();
    W(G, ae, -1);
  }
  function $(ae) {
    const G = v.index.add(-1).get();
    W(G, ae, 1);
  }
  function z() {
    return v.index.add(1).get() !== K();
  }
  function q() {
    return v.index.add(-1).get() !== K();
  }
  function ee() {
    return v.scrollSnapList;
  }
  function ie() {
    return v.scrollProgress.get(v.offsetLocation.get());
  }
  function K() {
    return v.index.get();
  }
  function O() {
    return v.indexPrevious.get();
  }
  function N() {
    return v.slidesInView.get();
  }
  function L() {
    return v.slidesInView.get(!1);
  }
  function A() {
    return D;
  }
  function B() {
    return v;
  }
  function H() {
    return e;
  }
  function V() {
    return E;
  }
  function Q() {
    return S;
  }
  const ne = {
    canScrollNext: z,
    canScrollPrev: q,
    containerNode: V,
    internalEngine: B,
    destroy: T,
    off: g,
    on: m,
    emit: h,
    plugins: A,
    previousScrollSnap: O,
    reInit: b,
    rootNode: H,
    scrollNext: j,
    scrollPrev: $,
    scrollProgress: ie,
    scrollSnapList: ee,
    scrollTo: W,
    selectedScrollSnap: K,
    slideNodes: Q,
    slidesInView: N,
    slidesNotInView: L
  };
  return Y(t, n), setTimeout(() => l.emit("init"), 0), ne;
}
Ar.globalOptions = void 0;
function Al(e = {}, t = []) {
  const n = Cn(e), r = Cn(t), [a, o] = kt(), [i, s] = kt(), l = xm(() => {
    a && a.reInit(n.current, r.current);
  }, [a]);
  return ct(() => {
    Dl(n.current, e) || (n.current = e, l());
  }, [e, l]), ct(() => {
    My(r.current, t) || (r.current = t, l());
  }, [t, l]), ct(() => {
    if (Oy() && i) {
      Ar.globalOptions = Al.globalOptions;
      const c = Ar(i, n.current, r.current);
      return o(c), () => c.destroy();
    } else
      o(void 0);
  }, [i, o]), [s, a];
}
Al.globalOptions = void 0;
const Um = M.createContext(null);
function na() {
  const e = M.useContext(Um);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function cE({
  orientation: e = "horizontal",
  opts: t,
  setApi: n,
  plugins: r,
  className: a,
  children: o,
  ...i
}) {
  const [s, l] = Al(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    r
  ), [c, d] = M.useState(!1), [u, m] = M.useState(!1), g = M.useCallback((v) => {
    v && (d(v.canScrollPrev()), m(v.canScrollNext()));
  }, []), h = M.useCallback(() => {
    l == null || l.scrollPrev();
  }, [l]), b = M.useCallback(() => {
    l == null || l.scrollNext();
  }, [l]), p = M.useCallback(
    (v) => {
      v.key === "ArrowLeft" ? (v.preventDefault(), h()) : v.key === "ArrowRight" && (v.preventDefault(), b());
    },
    [h, b]
  );
  return M.useEffect(() => {
    !l || !n || n(l);
  }, [l, n]), M.useEffect(() => {
    if (l)
      return g(l), l.on("reInit", g), l.on("select", g), () => {
        l == null || l.off("select", g);
      };
  }, [l, g]), /* @__PURE__ */ f(
    Um.Provider,
    {
      value: {
        carouselRef: s,
        api: l,
        opts: t,
        orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev: h,
        scrollNext: b,
        canScrollPrev: c,
        canScrollNext: u
      },
      children: /* @__PURE__ */ f(
        "div",
        {
          onKeyDownCapture: p,
          className: w("relative", a),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...i,
          children: o
        }
      )
    }
  );
}
function dE({ internalClassName: e, ...t }) {
  const { carouselRef: n, orientation: r } = na();
  return /* @__PURE__ */ f("div", { ref: n, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ f(
    "div",
    {
      className: w("flex", r === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    }
  ) });
}
function fE({ internalClassName: e, ...t }) {
  const { orientation: n } = na();
  return /* @__PURE__ */ f(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: w(
        "min-w-0 shrink-0 grow-0 basis-full",
        n === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function mE({
  internalClassName: e,
  variant: t = "outline",
  size: n = "icon",
  ...r
}) {
  const { orientation: a, scrollPrev: o, canScrollPrev: i } = na();
  return /* @__PURE__ */ U(
    Jr,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: n,
      internalClassName: w(
        "absolute size-8 rounded-full",
        a === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: o,
      ...r,
      children: [
        /* @__PURE__ */ f(rg, {}),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function pE({
  internalClassName: e,
  variant: t = "outline",
  size: n = "icon",
  ...r
}) {
  const { orientation: a, scrollNext: o, canScrollNext: i } = na();
  return /* @__PURE__ */ U(
    Jr,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: n,
      internalClassName: w(
        "absolute size-8 rounded-full",
        a === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: o,
      ...r,
      children: [
        /* @__PURE__ */ f(ng, {}),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
var wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oa, Su;
function bt() {
  if (Su) return Oa;
  Su = 1;
  var e = Array.isArray;
  return Oa = e, Oa;
}
var Ma, Cu;
function Km() {
  if (Cu) return Ma;
  Cu = 1;
  var e = typeof wr == "object" && wr && wr.Object === Object && wr;
  return Ma = e, Ma;
}
var Da, Pu;
function Nt() {
  if (Pu) return Da;
  Pu = 1;
  var e = Km(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Da = n, Da;
}
var ka, Nu;
function pr() {
  if (Nu) return ka;
  Nu = 1;
  var e = Nt(), t = e.Symbol;
  return ka = t, ka;
}
var Ra, Eu;
function l0() {
  if (Eu) return Ra;
  Eu = 1;
  var e = pr(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, a = e ? e.toStringTag : void 0;
  function o(i) {
    var s = n.call(i, a), l = i[a];
    try {
      i[a] = void 0;
      var c = !0;
    } catch {
    }
    var d = r.call(i);
    return c && (s ? i[a] = l : delete i[a]), d;
  }
  return Ra = o, Ra;
}
var Ia, Tu;
function u0() {
  if (Tu) return Ia;
  Tu = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return Ia = n, Ia;
}
var Aa, Ou;
function ln() {
  if (Ou) return Aa;
  Ou = 1;
  var e = pr(), t = l0(), n = u0(), r = "[object Null]", a = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? a : r : o && o in Object(s) ? t(s) : n(s);
  }
  return Aa = i, Aa;
}
var za, Mu;
function un() {
  if (Mu) return za;
  Mu = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return za = e, za;
}
var La, Du;
function hr() {
  if (Du) return La;
  Du = 1;
  var e = ln(), t = un(), n = "[object Symbol]";
  function r(a) {
    return typeof a == "symbol" || t(a) && e(a) == n;
  }
  return La = r, La;
}
var qa, ku;
function zl() {
  if (ku) return qa;
  ku = 1;
  var e = bt(), t = hr(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function a(o, i) {
    if (e(o))
      return !1;
    var s = typeof o;
    return s == "number" || s == "symbol" || s == "boolean" || o == null || t(o) ? !0 : r.test(o) || !n.test(o) || i != null && o in Object(i);
  }
  return qa = a, qa;
}
var $a, Ru;
function jt() {
  if (Ru) return $a;
  Ru = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return $a = e, $a;
}
var Ba, Iu;
function Ll() {
  if (Iu) return Ba;
  Iu = 1;
  var e = ln(), t = jt(), n = "[object AsyncFunction]", r = "[object Function]", a = "[object GeneratorFunction]", o = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var l = e(s);
    return l == r || l == a || l == n || l == o;
  }
  return Ba = i, Ba;
}
var ja, Au;
function c0() {
  if (Au) return ja;
  Au = 1;
  var e = Nt(), t = e["__core-js_shared__"];
  return ja = t, ja;
}
var Fa, zu;
function d0() {
  if (zu) return Fa;
  zu = 1;
  var e = c0(), t = (function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!t && t in r;
  }
  return Fa = n, Fa;
}
var Ha, Lu;
function Xm() {
  if (Lu) return Ha;
  Lu = 1;
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
  return Ha = n, Ha;
}
var Wa, qu;
function f0() {
  if (qu) return Wa;
  qu = 1;
  var e = Ll(), t = d0(), n = jt(), r = Xm(), a = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, l = i.toString, c = s.hasOwnProperty, d = RegExp(
    "^" + l.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function u(m) {
    if (!n(m) || t(m))
      return !1;
    var g = e(m) ? d : o;
    return g.test(r(m));
  }
  return Wa = u, Wa;
}
var Ya, $u;
function m0() {
  if ($u) return Ya;
  $u = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return Ya = e, Ya;
}
var Va, Bu;
function cn() {
  if (Bu) return Va;
  Bu = 1;
  var e = f0(), t = m0();
  function n(r, a) {
    var o = t(r, a);
    return e(o) ? o : void 0;
  }
  return Va = n, Va;
}
var Ga, ju;
function ra() {
  if (ju) return Ga;
  ju = 1;
  var e = cn(), t = e(Object, "create");
  return Ga = t, Ga;
}
var Ua, Fu;
function p0() {
  if (Fu) return Ua;
  Fu = 1;
  var e = ra();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ua = t, Ua;
}
var Ka, Hu;
function h0() {
  if (Hu) return Ka;
  Hu = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return Ka = e, Ka;
}
var Xa, Wu;
function g0() {
  if (Wu) return Xa;
  Wu = 1;
  var e = ra(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function a(o) {
    var i = this.__data__;
    if (e) {
      var s = i[o];
      return s === t ? void 0 : s;
    }
    return r.call(i, o) ? i[o] : void 0;
  }
  return Xa = a, Xa;
}
var Qa, Yu;
function v0() {
  if (Yu) return Qa;
  Yu = 1;
  var e = ra(), t = Object.prototype, n = t.hasOwnProperty;
  function r(a) {
    var o = this.__data__;
    return e ? o[a] !== void 0 : n.call(o, a);
  }
  return Qa = r, Qa;
}
var Ja, Vu;
function b0() {
  if (Vu) return Ja;
  Vu = 1;
  var e = ra(), t = "__lodash_hash_undefined__";
  function n(r, a) {
    var o = this.__data__;
    return this.size += this.has(r) ? 0 : 1, o[r] = e && a === void 0 ? t : a, this;
  }
  return Ja = n, Ja;
}
var Za, Gu;
function y0() {
  if (Gu) return Za;
  Gu = 1;
  var e = p0(), t = h0(), n = g0(), r = v0(), a = b0();
  function o(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var c = i[s];
      this.set(c[0], c[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = a, Za = o, Za;
}
var eo, Uu;
function w0() {
  if (Uu) return eo;
  Uu = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return eo = e, eo;
}
var to, Ku;
function ql() {
  if (Ku) return to;
  Ku = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return to = e, to;
}
var no, Xu;
function aa() {
  if (Xu) return no;
  Xu = 1;
  var e = ql();
  function t(n, r) {
    for (var a = n.length; a--; )
      if (e(n[a][0], r))
        return a;
    return -1;
  }
  return no = t, no;
}
var ro, Qu;
function x0() {
  if (Qu) return ro;
  Qu = 1;
  var e = aa(), t = Array.prototype, n = t.splice;
  function r(a) {
    var o = this.__data__, i = e(o, a);
    if (i < 0)
      return !1;
    var s = o.length - 1;
    return i == s ? o.pop() : n.call(o, i, 1), --this.size, !0;
  }
  return ro = r, ro;
}
var ao, Ju;
function _0() {
  if (Ju) return ao;
  Ju = 1;
  var e = aa();
  function t(n) {
    var r = this.__data__, a = e(r, n);
    return a < 0 ? void 0 : r[a][1];
  }
  return ao = t, ao;
}
var oo, Zu;
function S0() {
  if (Zu) return oo;
  Zu = 1;
  var e = aa();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return oo = t, oo;
}
var io, ec;
function C0() {
  if (ec) return io;
  ec = 1;
  var e = aa();
  function t(n, r) {
    var a = this.__data__, o = e(a, n);
    return o < 0 ? (++this.size, a.push([n, r])) : a[o][1] = r, this;
  }
  return io = t, io;
}
var so, tc;
function oa() {
  if (tc) return so;
  tc = 1;
  var e = w0(), t = x0(), n = _0(), r = S0(), a = C0();
  function o(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var c = i[s];
      this.set(c[0], c[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = a, so = o, so;
}
var lo, nc;
function $l() {
  if (nc) return lo;
  nc = 1;
  var e = cn(), t = Nt(), n = e(t, "Map");
  return lo = n, lo;
}
var uo, rc;
function P0() {
  if (rc) return uo;
  rc = 1;
  var e = y0(), t = oa(), n = $l();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return uo = r, uo;
}
var co, ac;
function N0() {
  if (ac) return co;
  ac = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return co = e, co;
}
var fo, oc;
function ia() {
  if (oc) return fo;
  oc = 1;
  var e = N0();
  function t(n, r) {
    var a = n.__data__;
    return e(r) ? a[typeof r == "string" ? "string" : "hash"] : a.map;
  }
  return fo = t, fo;
}
var mo, ic;
function E0() {
  if (ic) return mo;
  ic = 1;
  var e = ia();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return mo = t, mo;
}
var po, sc;
function T0() {
  if (sc) return po;
  sc = 1;
  var e = ia();
  function t(n) {
    return e(this, n).get(n);
  }
  return po = t, po;
}
var ho, lc;
function O0() {
  if (lc) return ho;
  lc = 1;
  var e = ia();
  function t(n) {
    return e(this, n).has(n);
  }
  return ho = t, ho;
}
var go, uc;
function M0() {
  if (uc) return go;
  uc = 1;
  var e = ia();
  function t(n, r) {
    var a = e(this, n), o = a.size;
    return a.set(n, r), this.size += a.size == o ? 0 : 1, this;
  }
  return go = t, go;
}
var vo, cc;
function Bl() {
  if (cc) return vo;
  cc = 1;
  var e = P0(), t = E0(), n = T0(), r = O0(), a = M0();
  function o(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var c = i[s];
      this.set(c[0], c[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = a, vo = o, vo;
}
var bo, dc;
function D0() {
  if (dc) return bo;
  dc = 1;
  var e = Bl(), t = "Expected a function";
  function n(r, a) {
    if (typeof r != "function" || a != null && typeof a != "function")
      throw new TypeError(t);
    var o = function() {
      var i = arguments, s = a ? a.apply(this, i) : i[0], l = o.cache;
      if (l.has(s))
        return l.get(s);
      var c = r.apply(this, i);
      return o.cache = l.set(s, c) || l, c;
    };
    return o.cache = new (n.Cache || e)(), o;
  }
  return n.Cache = e, bo = n, bo;
}
var yo, fc;
function k0() {
  if (fc) return yo;
  fc = 1;
  var e = D0(), t = 500;
  function n(r) {
    var a = e(r, function(i) {
      return o.size === t && o.clear(), i;
    }), o = a.cache;
    return a;
  }
  return yo = n, yo;
}
var wo, mc;
function R0() {
  if (mc) return wo;
  mc = 1;
  var e = k0(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(a) {
    var o = [];
    return a.charCodeAt(0) === 46 && o.push(""), a.replace(t, function(i, s, l, c) {
      o.push(l ? c.replace(n, "$1") : s || i);
    }), o;
  });
  return wo = r, wo;
}
var xo, pc;
function Qm() {
  if (pc) return xo;
  pc = 1;
  function e(t, n) {
    for (var r = -1, a = t == null ? 0 : t.length, o = Array(a); ++r < a; )
      o[r] = n(t[r], r, t);
    return o;
  }
  return xo = e, xo;
}
var _o, hc;
function I0() {
  if (hc) return _o;
  hc = 1;
  var e = pr(), t = Qm(), n = bt(), r = hr(), a = e ? e.prototype : void 0, o = a ? a.toString : void 0;
  function i(s) {
    if (typeof s == "string")
      return s;
    if (n(s))
      return t(s, i) + "";
    if (r(s))
      return o ? o.call(s) : "";
    var l = s + "";
    return l == "0" && 1 / s == -1 / 0 ? "-0" : l;
  }
  return _o = i, _o;
}
var So, gc;
function Jm() {
  if (gc) return So;
  gc = 1;
  var e = I0();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return So = t, So;
}
var Co, vc;
function Zm() {
  if (vc) return Co;
  vc = 1;
  var e = bt(), t = zl(), n = R0(), r = Jm();
  function a(o, i) {
    return e(o) ? o : t(o, i) ? [o] : n(r(o));
  }
  return Co = a, Co;
}
var Po, bc;
function sa() {
  if (bc) return Po;
  bc = 1;
  var e = hr();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return Po = t, Po;
}
var No, yc;
function jl() {
  if (yc) return No;
  yc = 1;
  var e = Zm(), t = sa();
  function n(r, a) {
    a = e(a, r);
    for (var o = 0, i = a.length; r != null && o < i; )
      r = r[t(a[o++])];
    return o && o == i ? r : void 0;
  }
  return No = n, No;
}
var Eo, wc;
function ep() {
  if (wc) return Eo;
  wc = 1;
  var e = jl();
  function t(n, r, a) {
    var o = n == null ? void 0 : e(n, r);
    return o === void 0 ? a : o;
  }
  return Eo = t, Eo;
}
ep();
var To, xc;
function A0() {
  if (xc) return To;
  xc = 1;
  function e(t) {
    return t == null;
  }
  return To = e, To;
}
var z0 = A0();
const L0 = /* @__PURE__ */ Pt(z0);
var Oo, _c;
function q0() {
  if (_c) return Oo;
  _c = 1;
  var e = ln(), t = bt(), n = un(), r = "[object String]";
  function a(o) {
    return typeof o == "string" || !t(o) && n(o) && e(o) == r;
  }
  return Oo = a, Oo;
}
var $0 = q0();
const tp = /* @__PURE__ */ Pt($0);
var B0 = Ll();
const zr = /* @__PURE__ */ Pt(B0);
var j0 = jt();
const np = /* @__PURE__ */ Pt(j0);
var xr = { exports: {} }, be = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sc;
function F0() {
  if (Sc) return be;
  Sc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var v = p.$$typeof;
      switch (v) {
        case e:
          switch (p = p.type, p) {
            case n:
            case a:
            case r:
            case c:
            case d:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case i:
                case l:
                case m:
                case u:
                case o:
                  return p;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return be.ContextConsumer = i, be.ContextProvider = o, be.Element = e, be.ForwardRef = l, be.Fragment = n, be.Lazy = m, be.Memo = u, be.Portal = t, be.Profiler = a, be.StrictMode = r, be.Suspense = c, be.SuspenseList = d, be.isAsyncMode = function() {
    return !1;
  }, be.isConcurrentMode = function() {
    return !1;
  }, be.isContextConsumer = function(p) {
    return b(p) === i;
  }, be.isContextProvider = function(p) {
    return b(p) === o;
  }, be.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, be.isForwardRef = function(p) {
    return b(p) === l;
  }, be.isFragment = function(p) {
    return b(p) === n;
  }, be.isLazy = function(p) {
    return b(p) === m;
  }, be.isMemo = function(p) {
    return b(p) === u;
  }, be.isPortal = function(p) {
    return b(p) === t;
  }, be.isProfiler = function(p) {
    return b(p) === a;
  }, be.isStrictMode = function(p) {
    return b(p) === r;
  }, be.isSuspense = function(p) {
    return b(p) === c;
  }, be.isSuspenseList = function(p) {
    return b(p) === d;
  }, be.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === a || p === r || p === c || p === d || p === g || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === u || p.$$typeof === o || p.$$typeof === i || p.$$typeof === l || p.$$typeof === h || p.getModuleId !== void 0);
  }, be.typeOf = b, be;
}
var ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cc;
function H0() {
  return Cc || (Cc = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, v = !1, y = !1, _;
    _ = Symbol.for("react.module.reference");
    function C(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === a || y || P === r || P === c || P === d || v || P === g || h || b || p || typeof P == "object" && P !== null && (P.$$typeof === m || P.$$typeof === u || P.$$typeof === o || P.$$typeof === i || P.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === _ || P.getModuleId !== void 0));
    }
    function D(P) {
      if (typeof P == "object" && P !== null) {
        var X = P.$$typeof;
        switch (X) {
          case e:
            var se = P.type;
            switch (se) {
              case n:
              case a:
              case r:
              case c:
              case d:
                return se;
              default:
                var ce = se && se.$$typeof;
                switch (ce) {
                  case s:
                  case i:
                  case l:
                  case m:
                  case u:
                  case o:
                    return ce;
                  default:
                    return X;
                }
            }
          case t:
            return X;
        }
      }
    }
    var E = i, S = o, R = e, k = l, Y = n, I = m, F = u, T = t, W = a, j = r, $ = c, z = d, q = !1, ee = !1;
    function ie(P) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(P) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(P) {
      return D(P) === i;
    }
    function N(P) {
      return D(P) === o;
    }
    function L(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function A(P) {
      return D(P) === l;
    }
    function B(P) {
      return D(P) === n;
    }
    function H(P) {
      return D(P) === m;
    }
    function V(P) {
      return D(P) === u;
    }
    function Q(P) {
      return D(P) === t;
    }
    function ne(P) {
      return D(P) === a;
    }
    function ae(P) {
      return D(P) === r;
    }
    function G(P) {
      return D(P) === c;
    }
    function Z(P) {
      return D(P) === d;
    }
    ye.ContextConsumer = E, ye.ContextProvider = S, ye.Element = R, ye.ForwardRef = k, ye.Fragment = Y, ye.Lazy = I, ye.Memo = F, ye.Portal = T, ye.Profiler = W, ye.StrictMode = j, ye.Suspense = $, ye.SuspenseList = z, ye.isAsyncMode = ie, ye.isConcurrentMode = K, ye.isContextConsumer = O, ye.isContextProvider = N, ye.isElement = L, ye.isForwardRef = A, ye.isFragment = B, ye.isLazy = H, ye.isMemo = V, ye.isPortal = Q, ye.isProfiler = ne, ye.isStrictMode = ae, ye.isSuspense = G, ye.isSuspenseList = Z, ye.isValidElementType = C, ye.typeOf = D;
  })()), ye;
}
var Pc;
function W0() {
  return Pc || (Pc = 1, process.env.NODE_ENV === "production" ? xr.exports = F0() : xr.exports = H0()), xr.exports;
}
W0();
var Mo, Nc;
function rp() {
  if (Nc) return Mo;
  Nc = 1;
  var e = ln(), t = un(), n = "[object Number]";
  function r(a) {
    return typeof a == "number" || t(a) && e(a) == n;
  }
  return Mo = r, Mo;
}
var Do, Ec;
function Y0() {
  if (Ec) return Do;
  Ec = 1;
  var e = rp();
  function t(n) {
    return e(n) && n != +n;
  }
  return Do = t, Do;
}
var V0 = Y0();
const G0 = /* @__PURE__ */ Pt(V0);
var U0 = rp();
const K0 = /* @__PURE__ */ Pt(U0);
var _r = function(t) {
  return tp(t) && t.indexOf("%") === t.length - 1;
}, ft = function(t) {
  return K0(t) && !G0(t);
}, Lr = function(t) {
  return ft(t) || tp(t);
};
function Ks(e) {
  "@babel/helpers - typeof";
  return Ks = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ks(e);
}
var X0 = ["viewBox", "children"], Q0 = [
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
], Tc = ["points", "pathLength"], ko = {
  svg: X0,
  polygon: Tc,
  polyline: Tc
}, ap = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], J0 = function(t, n, r) {
  return function(a) {
    return t(n, r, a), null;
  };
}, Z0 = function(t, n, r) {
  if (!np(t) || Ks(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(o) {
    var i = t[o];
    ap.includes(o) && typeof i == "function" && (a || (a = {}), a[o] = J0(i, n, r));
  }), a;
}, ew = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, tw = function(t, n, r, a) {
  var o, i = (o = ko == null ? void 0 : ko[a]) !== null && o !== void 0 ? o : [];
  return n.startsWith("data-") || !zr(t) && (a && i.includes(n) || Q0.includes(n)) || ap.includes(n);
}, op = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ cg(t) && (a = t.props), !np(a))
    return null;
  var o = {};
  return Object.keys(a).forEach(function(i) {
    var s;
    tw((s = a) === null || s === void 0 ? void 0 : s[i], i, n, r) && (o[i] = a[i]);
  }), o;
}, nw = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Xs() {
  return Xs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xs.apply(this, arguments);
}
function rw(e, t) {
  if (e == null) return {};
  var n = aw(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function aw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function ow(e) {
  var t = e.children, n = e.width, r = e.height, a = e.viewBox, o = e.className, i = e.style, s = e.title, l = e.desc, c = rw(e, nw), d = a || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, u = Jt("recharts-surface", o);
  return /* @__PURE__ */ x.createElement("svg", Xs({}, op(c, !0, "svg"), {
    className: u,
    width: n,
    height: r,
    style: i,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ x.createElement("title", null, s), /* @__PURE__ */ x.createElement("desc", null, l), t);
}
var iw = process.env.NODE_ENV !== "production", Dr = function(t, n) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    a[o - 2] = arguments[o];
  if (iw && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(n.replace(/%s/g, function() {
        return a[i++];
      }));
    }
}, Ro, Oc;
function sw() {
  if (Oc) return Ro;
  Oc = 1;
  function e(t, n, r) {
    var a = -1, o = t.length;
    n < 0 && (n = -n > o ? 0 : o + n), r = r > o ? o : r, r < 0 && (r += o), o = n > r ? 0 : r - n >>> 0, n >>>= 0;
    for (var i = Array(o); ++a < o; )
      i[a] = t[a + n];
    return i;
  }
  return Ro = e, Ro;
}
var Io, Mc;
function lw() {
  if (Mc) return Io;
  Mc = 1;
  var e = sw();
  function t(n, r, a) {
    var o = n.length;
    return a = a === void 0 ? o : a, !r && a >= o ? n : e(n, r, a);
  }
  return Io = t, Io;
}
var Ao, Dc;
function ip() {
  if (Dc) return Ao;
  Dc = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", a = t + n + r, o = "\\ufe0e\\ufe0f", i = "\\u200d", s = RegExp("[" + i + e + a + o + "]");
  function l(c) {
    return s.test(c);
  }
  return Ao = l, Ao;
}
var zo, kc;
function uw() {
  if (kc) return zo;
  kc = 1;
  function e(t) {
    return t.split("");
  }
  return zo = e, zo;
}
var Lo, Rc;
function cw() {
  if (Rc) return Lo;
  Rc = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", a = t + n + r, o = "\\ufe0e\\ufe0f", i = "[" + e + "]", s = "[" + a + "]", l = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + s + "|" + l + ")", d = "[^" + e + "]", u = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", g = "\\u200d", h = c + "?", b = "[" + o + "]?", p = "(?:" + g + "(?:" + [d, u, m].join("|") + ")" + b + h + ")*", v = b + h + p, y = "(?:" + [d + s + "?", s, u, m, i].join("|") + ")", _ = RegExp(l + "(?=" + l + ")|" + y + v, "g");
  function C(D) {
    return D.match(_) || [];
  }
  return Lo = C, Lo;
}
var qo, Ic;
function dw() {
  if (Ic) return qo;
  Ic = 1;
  var e = uw(), t = ip(), n = cw();
  function r(a) {
    return t(a) ? n(a) : e(a);
  }
  return qo = r, qo;
}
var $o, Ac;
function fw() {
  if (Ac) return $o;
  Ac = 1;
  var e = lw(), t = ip(), n = dw(), r = Jm();
  function a(o) {
    return function(i) {
      i = r(i);
      var s = t(i) ? n(i) : void 0, l = s ? s[0] : i.charAt(0), c = s ? e(s, 1).join("") : i.slice(1);
      return l[o]() + c;
    };
  }
  return $o = a, $o;
}
var Bo, zc;
function mw() {
  if (zc) return Bo;
  zc = 1;
  var e = fw(), t = e("toUpperCase");
  return Bo = t, Bo;
}
var pw = mw();
const sp = /* @__PURE__ */ Pt(pw);
function Sr(e) {
  return function() {
    return e;
  };
}
const lp = Math.cos, qr = Math.sin, yt = Math.sqrt, $r = Math.PI, la = 2 * $r, Qs = Math.PI, Js = 2 * Qs, Ut = 1e-6, hw = Js - Ut;
function up(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function gw(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return up;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let a = 1, o = r.length; a < o; ++a)
      this._ += Math.round(arguments[a] * n) / n + r[a];
  };
}
class vw {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? up : gw(t);
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
  quadraticCurveTo(t, n, r, a) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +a}`;
  }
  bezierCurveTo(t, n, r, a, o, i) {
    this._append`C${+t},${+n},${+r},${+a},${this._x1 = +o},${this._y1 = +i}`;
  }
  arcTo(t, n, r, a, o) {
    if (t = +t, n = +n, r = +r, a = +a, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let i = this._x1, s = this._y1, l = r - t, c = a - n, d = i - t, u = s - n, m = d * d + u * u;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (m > Ut) if (!(Math.abs(u * l - c * d) > Ut) || !o)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let g = r - i, h = a - s, b = l * l + c * c, p = g * g + h * h, v = Math.sqrt(b), y = Math.sqrt(m), _ = o * Math.tan((Qs - Math.acos((b + m - p) / (2 * v * y))) / 2), C = _ / y, D = _ / v;
      Math.abs(C - 1) > Ut && this._append`L${t + C * d},${n + C * u}`, this._append`A${o},${o},0,0,${+(u * g > d * h)},${this._x1 = t + D * l},${this._y1 = n + D * c}`;
    }
  }
  arc(t, n, r, a, o, i) {
    if (t = +t, n = +n, r = +r, i = !!i, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(a), l = r * Math.sin(a), c = t + s, d = n + l, u = 1 ^ i, m = i ? a - o : o - a;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > Ut || Math.abs(this._y1 - d) > Ut) && this._append`L${c},${d}`, r && (m < 0 && (m = m % Js + Js), m > hw ? this._append`A${r},${r},0,1,${u},${t - s},${n - l}A${r},${r},0,1,${u},${this._x1 = c},${this._y1 = d}` : m > Ut && this._append`A${r},${r},0,${+(m >= Qs)},${u},${this._x1 = t + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(t, n, r, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+a}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function bw(e) {
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
  }, () => new vw(t);
}
const Fl = {
  draw(e, t) {
    const n = yt(t / $r);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, la);
  }
}, yw = {
  draw(e, t) {
    const n = yt(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, cp = yt(1 / 3), ww = cp * 2, xw = {
  draw(e, t) {
    const n = yt(t / ww), r = n * cp;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, _w = {
  draw(e, t) {
    const n = yt(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, Sw = 0.8908130915292852, dp = qr($r / 10) / qr(7 * $r / 10), Cw = qr(la / 10) * dp, Pw = -lp(la / 10) * dp, Nw = {
  draw(e, t) {
    const n = yt(t * Sw), r = Cw * n, a = Pw * n;
    e.moveTo(0, -n), e.lineTo(r, a);
    for (let o = 1; o < 5; ++o) {
      const i = la * o / 5, s = lp(i), l = qr(i);
      e.lineTo(l * n, -s * n), e.lineTo(s * r - l * a, l * r + s * a);
    }
    e.closePath();
  }
}, jo = yt(3), Ew = {
  draw(e, t) {
    const n = -yt(t / (jo * 3));
    e.moveTo(0, n * 2), e.lineTo(-jo * n, -n), e.lineTo(jo * n, -n), e.closePath();
  }
}, st = -0.5, lt = yt(3) / 2, Zs = 1 / yt(12), Tw = (Zs / 2 + 1) * 3, Ow = {
  draw(e, t) {
    const n = yt(t / Tw), r = n / 2, a = n * Zs, o = r, i = n * Zs + n, s = -o, l = i;
    e.moveTo(r, a), e.lineTo(o, i), e.lineTo(s, l), e.lineTo(st * r - lt * a, lt * r + st * a), e.lineTo(st * o - lt * i, lt * o + st * i), e.lineTo(st * s - lt * l, lt * s + st * l), e.lineTo(st * r + lt * a, st * a - lt * r), e.lineTo(st * o + lt * i, st * i - lt * o), e.lineTo(st * s + lt * l, st * l - lt * s), e.closePath();
  }
};
function Mw(e, t) {
  let n = null, r = bw(a);
  e = typeof e == "function" ? e : Sr(e || Fl), t = typeof t == "function" ? t : Sr(t === void 0 ? 64 : +t);
  function a() {
    let o;
    if (n || (n = o = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), o) return n = null, o + "" || null;
  }
  return a.type = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Sr(o), a) : e;
  }, a.size = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Sr(+o), a) : t;
  }, a.context = function(o) {
    return arguments.length ? (n = o ?? null, a) : n;
  }, a;
}
function tr(e) {
  "@babel/helpers - typeof";
  return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tr(e);
}
var Dw = ["type", "size", "sizeType"];
function el() {
  return el = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, el.apply(this, arguments);
}
function Lc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lc(Object(n), !0).forEach(function(r) {
      kw(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function kw(e, t, n) {
  return t = Rw(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Rw(e) {
  var t = Iw(e, "string");
  return tr(t) == "symbol" ? t : t + "";
}
function Iw(e, t) {
  if (tr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (tr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Aw(e, t) {
  if (e == null) return {};
  var n = zw(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function zw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var fp = {
  symbolCircle: Fl,
  symbolCross: yw,
  symbolDiamond: xw,
  symbolSquare: _w,
  symbolStar: Nw,
  symbolTriangle: Ew,
  symbolWye: Ow
}, Lw = Math.PI / 180, qw = function(t) {
  var n = "symbol".concat(sp(t));
  return fp[n] || Fl;
}, $w = function(t, n, r) {
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
      var a = 18 * Lw;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, Bw = function(t, n) {
  fp["symbol".concat(sp(t))] = n;
}, mp = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, a = t.size, o = a === void 0 ? 64 : a, i = t.sizeType, s = i === void 0 ? "area" : i, l = Aw(t, Dw), c = qc(qc({}, l), {}, {
    type: r,
    size: o,
    sizeType: s
  }), d = function() {
    var p = qw(r), v = Mw().type(p).size($w(o, s, r));
    return v();
  }, u = c.className, m = c.cx, g = c.cy, h = op(c, !0);
  return m === +m && g === +g && o === +o ? /* @__PURE__ */ x.createElement("path", el({}, h, {
    className: Jt("recharts-symbols", u),
    transform: "translate(".concat(m, ", ").concat(g, ")"),
    d: d()
  })) : null;
};
mp.registerSymbol = Bw;
function Nn(e) {
  "@babel/helpers - typeof";
  return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nn(e);
}
function tl() {
  return tl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tl.apply(this, arguments);
}
function $c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $c(Object(n), !0).forEach(function(r) {
      nr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $c(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Fw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hw(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, hp(r.key), r);
  }
}
function Ww(e, t, n) {
  return t && Hw(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Yw(e, t, n) {
  return t = Br(t), Vw(e, pp() ? Reflect.construct(t, n || [], Br(e).constructor) : t.apply(e, n));
}
function Vw(e, t) {
  if (t && (Nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Gw(e);
}
function Gw(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pp = function() {
    return !!e;
  })();
}
function Br(e) {
  return Br = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Br(e);
}
function Uw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && nl(e, t);
}
function nl(e, t) {
  return nl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, nl(e, t);
}
function nr(e, t, n) {
  return t = hp(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function hp(e) {
  var t = Kw(e, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function Kw(e, t) {
  if (Nn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Nn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ut = 32, Hl = /* @__PURE__ */ (function(e) {
  function t() {
    return Fw(this, t), Yw(this, t, arguments);
  }
  return Uw(t, e), Ww(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var a = this.props.inactiveColor, o = ut / 2, i = ut / 6, s = ut / 3, l = r.inactive ? a : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ x.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: o,
            x2: ut,
            y2: o,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ x.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            d: "M0,".concat(o, "h").concat(s, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * s, ",").concat(o, `
            H`).concat(ut, "M").concat(2 * s, ",").concat(o, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(o),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ x.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat(ut / 8, "h").concat(ut, "v").concat(ut * 3 / 4, "h").concat(-ut, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ x.isValidElement(r.legendIcon)) {
          var c = jw({}, r);
          return delete c.legendIcon, /* @__PURE__ */ x.cloneElement(r.legendIcon, c);
        }
        return /* @__PURE__ */ x.createElement(mp, {
          fill: l,
          cx: o,
          cy: o,
          size: ut,
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
      var r = this, a = this.props, o = a.payload, i = a.iconSize, s = a.layout, l = a.formatter, c = a.inactiveColor, d = {
        x: 0,
        y: 0,
        width: ut,
        height: ut
      }, u = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, m = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return o.map(function(g, h) {
        var b = g.formatter || l, p = Jt(nr(nr({
          "recharts-legend-item": !0
        }, "legend-item-".concat(h), !0), "inactive", g.inactive));
        if (g.type === "none")
          return null;
        var v = zr(g.value) ? null : g.value;
        Dr(
          !zr(g.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var y = g.inactive ? c : g.color;
        return /* @__PURE__ */ x.createElement("li", tl({
          className: p,
          style: u,
          key: "legend-item-".concat(h)
        }, Z0(r.props, g, h)), /* @__PURE__ */ x.createElement(ow, {
          width: i,
          height: i,
          viewBox: d,
          style: m
        }, r.renderIcon(g)), /* @__PURE__ */ x.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: y
          }
        }, b ? b(v, g, h) : v));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, a = r.payload, o = r.layout, i = r.align;
      if (!a || !a.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: o === "horizontal" ? i : "left"
      };
      return /* @__PURE__ */ x.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
})(Xr);
nr(Hl, "displayName", "Legend");
nr(Hl, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Fo, Bc;
function Xw() {
  if (Bc) return Fo;
  Bc = 1;
  var e = oa();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Fo = t, Fo;
}
var Ho, jc;
function Qw() {
  if (jc) return Ho;
  jc = 1;
  function e(t) {
    var n = this.__data__, r = n.delete(t);
    return this.size = n.size, r;
  }
  return Ho = e, Ho;
}
var Wo, Fc;
function Jw() {
  if (Fc) return Wo;
  Fc = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Wo = e, Wo;
}
var Yo, Hc;
function Zw() {
  if (Hc) return Yo;
  Hc = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Yo = e, Yo;
}
var Vo, Wc;
function ex() {
  if (Wc) return Vo;
  Wc = 1;
  var e = oa(), t = $l(), n = Bl(), r = 200;
  function a(o, i) {
    var s = this.__data__;
    if (s instanceof e) {
      var l = s.__data__;
      if (!t || l.length < r - 1)
        return l.push([o, i]), this.size = ++s.size, this;
      s = this.__data__ = new n(l);
    }
    return s.set(o, i), this.size = s.size, this;
  }
  return Vo = a, Vo;
}
var Go, Yc;
function gp() {
  if (Yc) return Go;
  Yc = 1;
  var e = oa(), t = Xw(), n = Qw(), r = Jw(), a = Zw(), o = ex();
  function i(s) {
    var l = this.__data__ = new e(s);
    this.size = l.size;
  }
  return i.prototype.clear = t, i.prototype.delete = n, i.prototype.get = r, i.prototype.has = a, i.prototype.set = o, Go = i, Go;
}
var Uo, Vc;
function tx() {
  if (Vc) return Uo;
  Vc = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Uo = t, Uo;
}
var Ko, Gc;
function nx() {
  if (Gc) return Ko;
  Gc = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Ko = e, Ko;
}
var Xo, Uc;
function vp() {
  if (Uc) return Xo;
  Uc = 1;
  var e = Bl(), t = tx(), n = nx();
  function r(a) {
    var o = -1, i = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++o < i; )
      this.add(a[o]);
  }
  return r.prototype.add = r.prototype.push = t, r.prototype.has = n, Xo = r, Xo;
}
var Qo, Kc;
function rx() {
  if (Kc) return Qo;
  Kc = 1;
  function e(t, n) {
    for (var r = -1, a = t == null ? 0 : t.length; ++r < a; )
      if (n(t[r], r, t))
        return !0;
    return !1;
  }
  return Qo = e, Qo;
}
var Jo, Xc;
function bp() {
  if (Xc) return Jo;
  Xc = 1;
  function e(t, n) {
    return t.has(n);
  }
  return Jo = e, Jo;
}
var Zo, Qc;
function yp() {
  if (Qc) return Zo;
  Qc = 1;
  var e = vp(), t = rx(), n = bp(), r = 1, a = 2;
  function o(i, s, l, c, d, u) {
    var m = l & r, g = i.length, h = s.length;
    if (g != h && !(m && h > g))
      return !1;
    var b = u.get(i), p = u.get(s);
    if (b && p)
      return b == s && p == i;
    var v = -1, y = !0, _ = l & a ? new e() : void 0;
    for (u.set(i, s), u.set(s, i); ++v < g; ) {
      var C = i[v], D = s[v];
      if (c)
        var E = m ? c(D, C, v, s, i, u) : c(C, D, v, i, s, u);
      if (E !== void 0) {
        if (E)
          continue;
        y = !1;
        break;
      }
      if (_) {
        if (!t(s, function(S, R) {
          if (!n(_, R) && (C === S || d(C, S, l, c, u)))
            return _.push(R);
        })) {
          y = !1;
          break;
        }
      } else if (!(C === D || d(C, D, l, c, u))) {
        y = !1;
        break;
      }
    }
    return u.delete(i), u.delete(s), y;
  }
  return Zo = o, Zo;
}
var ei, Jc;
function ax() {
  if (Jc) return ei;
  Jc = 1;
  var e = Nt(), t = e.Uint8Array;
  return ei = t, ei;
}
var ti, Zc;
function ox() {
  if (Zc) return ti;
  Zc = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(a, o) {
      r[++n] = [o, a];
    }), r;
  }
  return ti = e, ti;
}
var ni, ed;
function Wl() {
  if (ed) return ni;
  ed = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(a) {
      r[++n] = a;
    }), r;
  }
  return ni = e, ni;
}
var ri, td;
function ix() {
  if (td) return ri;
  td = 1;
  var e = pr(), t = ax(), n = ql(), r = yp(), a = ox(), o = Wl(), i = 1, s = 2, l = "[object Boolean]", c = "[object Date]", d = "[object Error]", u = "[object Map]", m = "[object Number]", g = "[object RegExp]", h = "[object Set]", b = "[object String]", p = "[object Symbol]", v = "[object ArrayBuffer]", y = "[object DataView]", _ = e ? e.prototype : void 0, C = _ ? _.valueOf : void 0;
  function D(E, S, R, k, Y, I, F) {
    switch (R) {
      case y:
        if (E.byteLength != S.byteLength || E.byteOffset != S.byteOffset)
          return !1;
        E = E.buffer, S = S.buffer;
      case v:
        return !(E.byteLength != S.byteLength || !I(new t(E), new t(S)));
      case l:
      case c:
      case m:
        return n(+E, +S);
      case d:
        return E.name == S.name && E.message == S.message;
      case g:
      case b:
        return E == S + "";
      case u:
        var T = a;
      case h:
        var W = k & i;
        if (T || (T = o), E.size != S.size && !W)
          return !1;
        var j = F.get(E);
        if (j)
          return j == S;
        k |= s, F.set(E, S);
        var $ = r(T(E), T(S), k, Y, I, F);
        return F.delete(E), $;
      case p:
        if (C)
          return C.call(E) == C.call(S);
    }
    return !1;
  }
  return ri = D, ri;
}
var ai, nd;
function wp() {
  if (nd) return ai;
  nd = 1;
  function e(t, n) {
    for (var r = -1, a = n.length, o = t.length; ++r < a; )
      t[o + r] = n[r];
    return t;
  }
  return ai = e, ai;
}
var oi, rd;
function sx() {
  if (rd) return oi;
  rd = 1;
  var e = wp(), t = bt();
  function n(r, a, o) {
    var i = a(r);
    return t(r) ? i : e(i, o(r));
  }
  return oi = n, oi;
}
var ii, ad;
function lx() {
  if (ad) return ii;
  ad = 1;
  function e(t, n) {
    for (var r = -1, a = t == null ? 0 : t.length, o = 0, i = []; ++r < a; ) {
      var s = t[r];
      n(s, r, t) && (i[o++] = s);
    }
    return i;
  }
  return ii = e, ii;
}
var si, od;
function ux() {
  if (od) return si;
  od = 1;
  function e() {
    return [];
  }
  return si = e, si;
}
var li, id;
function cx() {
  if (id) return li;
  id = 1;
  var e = lx(), t = ux(), n = Object.prototype, r = n.propertyIsEnumerable, a = Object.getOwnPropertySymbols, o = a ? function(i) {
    return i == null ? [] : (i = Object(i), e(a(i), function(s) {
      return r.call(i, s);
    }));
  } : t;
  return li = o, li;
}
var ui, sd;
function dx() {
  if (sd) return ui;
  sd = 1;
  function e(t, n) {
    for (var r = -1, a = Array(t); ++r < t; )
      a[r] = n(r);
    return a;
  }
  return ui = e, ui;
}
var ci, ld;
function fx() {
  if (ld) return ci;
  ld = 1;
  var e = ln(), t = un(), n = "[object Arguments]";
  function r(a) {
    return t(a) && e(a) == n;
  }
  return ci = r, ci;
}
var di, ud;
function Yl() {
  if (ud) return di;
  ud = 1;
  var e = fx(), t = un(), n = Object.prototype, r = n.hasOwnProperty, a = n.propertyIsEnumerable, o = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(i) {
    return t(i) && r.call(i, "callee") && !a.call(i, "callee");
  };
  return di = o, di;
}
var Fn = { exports: {} }, fi, cd;
function mx() {
  if (cd) return fi;
  cd = 1;
  function e() {
    return !1;
  }
  return fi = e, fi;
}
Fn.exports;
var dd;
function xp() {
  return dd || (dd = 1, (function(e, t) {
    var n = Nt(), r = mx(), a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, i = o && o.exports === a, s = i ? n.Buffer : void 0, l = s ? s.isBuffer : void 0, c = l || r;
    e.exports = c;
  })(Fn, Fn.exports)), Fn.exports;
}
var mi, fd;
function Vl() {
  if (fd) return mi;
  fd = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(r, a) {
    var o = typeof r;
    return a = a ?? e, !!a && (o == "number" || o != "symbol" && t.test(r)) && r > -1 && r % 1 == 0 && r < a;
  }
  return mi = n, mi;
}
var pi, md;
function Gl() {
  if (md) return pi;
  md = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return pi = t, pi;
}
var hi, pd;
function px() {
  if (pd) return hi;
  pd = 1;
  var e = ln(), t = Gl(), n = un(), r = "[object Arguments]", a = "[object Array]", o = "[object Boolean]", i = "[object Date]", s = "[object Error]", l = "[object Function]", c = "[object Map]", d = "[object Number]", u = "[object Object]", m = "[object RegExp]", g = "[object Set]", h = "[object String]", b = "[object WeakMap]", p = "[object ArrayBuffer]", v = "[object DataView]", y = "[object Float32Array]", _ = "[object Float64Array]", C = "[object Int8Array]", D = "[object Int16Array]", E = "[object Int32Array]", S = "[object Uint8Array]", R = "[object Uint8ClampedArray]", k = "[object Uint16Array]", Y = "[object Uint32Array]", I = {};
  I[y] = I[_] = I[C] = I[D] = I[E] = I[S] = I[R] = I[k] = I[Y] = !0, I[r] = I[a] = I[p] = I[o] = I[v] = I[i] = I[s] = I[l] = I[c] = I[d] = I[u] = I[m] = I[g] = I[h] = I[b] = !1;
  function F(T) {
    return n(T) && t(T.length) && !!I[e(T)];
  }
  return hi = F, hi;
}
var gi, hd;
function _p() {
  if (hd) return gi;
  hd = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return gi = e, gi;
}
var Hn = { exports: {} };
Hn.exports;
var gd;
function hx() {
  return gd || (gd = 1, (function(e, t) {
    var n = Km(), r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, o = a && a.exports === r, i = o && n.process, s = (function() {
      try {
        var l = a && a.require && a.require("util").types;
        return l || i && i.binding && i.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(Hn, Hn.exports)), Hn.exports;
}
var vi, vd;
function Sp() {
  if (vd) return vi;
  vd = 1;
  var e = px(), t = _p(), n = hx(), r = n && n.isTypedArray, a = r ? t(r) : e;
  return vi = a, vi;
}
var bi, bd;
function gx() {
  if (bd) return bi;
  bd = 1;
  var e = dx(), t = Yl(), n = bt(), r = xp(), a = Vl(), o = Sp(), i = Object.prototype, s = i.hasOwnProperty;
  function l(c, d) {
    var u = n(c), m = !u && t(c), g = !u && !m && r(c), h = !u && !m && !g && o(c), b = u || m || g || h, p = b ? e(c.length, String) : [], v = p.length;
    for (var y in c)
      (d || s.call(c, y)) && !(b && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      h && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      a(y, v))) && p.push(y);
    return p;
  }
  return bi = l, bi;
}
var yi, yd;
function vx() {
  if (yd) return yi;
  yd = 1;
  var e = Object.prototype;
  function t(n) {
    var r = n && n.constructor, a = typeof r == "function" && r.prototype || e;
    return n === a;
  }
  return yi = t, yi;
}
var wi, wd;
function bx() {
  if (wd) return wi;
  wd = 1;
  function e(t, n) {
    return function(r) {
      return t(n(r));
    };
  }
  return wi = e, wi;
}
var xi, xd;
function yx() {
  if (xd) return xi;
  xd = 1;
  var e = bx(), t = e(Object.keys, Object);
  return xi = t, xi;
}
var _i, _d;
function wx() {
  if (_d) return _i;
  _d = 1;
  var e = vx(), t = yx(), n = Object.prototype, r = n.hasOwnProperty;
  function a(o) {
    if (!e(o))
      return t(o);
    var i = [];
    for (var s in Object(o))
      r.call(o, s) && s != "constructor" && i.push(s);
    return i;
  }
  return _i = a, _i;
}
var Si, Sd;
function ua() {
  if (Sd) return Si;
  Sd = 1;
  var e = Ll(), t = Gl();
  function n(r) {
    return r != null && t(r.length) && !e(r);
  }
  return Si = n, Si;
}
var Ci, Cd;
function Ul() {
  if (Cd) return Ci;
  Cd = 1;
  var e = gx(), t = wx(), n = ua();
  function r(a) {
    return n(a) ? e(a) : t(a);
  }
  return Ci = r, Ci;
}
var Pi, Pd;
function xx() {
  if (Pd) return Pi;
  Pd = 1;
  var e = sx(), t = cx(), n = Ul();
  function r(a) {
    return e(a, n, t);
  }
  return Pi = r, Pi;
}
var Ni, Nd;
function _x() {
  if (Nd) return Ni;
  Nd = 1;
  var e = xx(), t = 1, n = Object.prototype, r = n.hasOwnProperty;
  function a(o, i, s, l, c, d) {
    var u = s & t, m = e(o), g = m.length, h = e(i), b = h.length;
    if (g != b && !u)
      return !1;
    for (var p = g; p--; ) {
      var v = m[p];
      if (!(u ? v in i : r.call(i, v)))
        return !1;
    }
    var y = d.get(o), _ = d.get(i);
    if (y && _)
      return y == i && _ == o;
    var C = !0;
    d.set(o, i), d.set(i, o);
    for (var D = u; ++p < g; ) {
      v = m[p];
      var E = o[v], S = i[v];
      if (l)
        var R = u ? l(S, E, v, i, o, d) : l(E, S, v, o, i, d);
      if (!(R === void 0 ? E === S || c(E, S, s, l, d) : R)) {
        C = !1;
        break;
      }
      D || (D = v == "constructor");
    }
    if (C && !D) {
      var k = o.constructor, Y = i.constructor;
      k != Y && "constructor" in o && "constructor" in i && !(typeof k == "function" && k instanceof k && typeof Y == "function" && Y instanceof Y) && (C = !1);
    }
    return d.delete(o), d.delete(i), C;
  }
  return Ni = a, Ni;
}
var Ei, Ed;
function Sx() {
  if (Ed) return Ei;
  Ed = 1;
  var e = cn(), t = Nt(), n = e(t, "DataView");
  return Ei = n, Ei;
}
var Ti, Td;
function Cx() {
  if (Td) return Ti;
  Td = 1;
  var e = cn(), t = Nt(), n = e(t, "Promise");
  return Ti = n, Ti;
}
var Oi, Od;
function Cp() {
  if (Od) return Oi;
  Od = 1;
  var e = cn(), t = Nt(), n = e(t, "Set");
  return Oi = n, Oi;
}
var Mi, Md;
function Px() {
  if (Md) return Mi;
  Md = 1;
  var e = cn(), t = Nt(), n = e(t, "WeakMap");
  return Mi = n, Mi;
}
var Di, Dd;
function Nx() {
  if (Dd) return Di;
  Dd = 1;
  var e = Sx(), t = $l(), n = Cx(), r = Cp(), a = Px(), o = ln(), i = Xm(), s = "[object Map]", l = "[object Object]", c = "[object Promise]", d = "[object Set]", u = "[object WeakMap]", m = "[object DataView]", g = i(e), h = i(t), b = i(n), p = i(r), v = i(a), y = o;
  return (e && y(new e(new ArrayBuffer(1))) != m || t && y(new t()) != s || n && y(n.resolve()) != c || r && y(new r()) != d || a && y(new a()) != u) && (y = function(_) {
    var C = o(_), D = C == l ? _.constructor : void 0, E = D ? i(D) : "";
    if (E)
      switch (E) {
        case g:
          return m;
        case h:
          return s;
        case b:
          return c;
        case p:
          return d;
        case v:
          return u;
      }
    return C;
  }), Di = y, Di;
}
var ki, kd;
function Ex() {
  if (kd) return ki;
  kd = 1;
  var e = gp(), t = yp(), n = ix(), r = _x(), a = Nx(), o = bt(), i = xp(), s = Sp(), l = 1, c = "[object Arguments]", d = "[object Array]", u = "[object Object]", m = Object.prototype, g = m.hasOwnProperty;
  function h(b, p, v, y, _, C) {
    var D = o(b), E = o(p), S = D ? d : a(b), R = E ? d : a(p);
    S = S == c ? u : S, R = R == c ? u : R;
    var k = S == u, Y = R == u, I = S == R;
    if (I && i(b)) {
      if (!i(p))
        return !1;
      D = !0, k = !1;
    }
    if (I && !k)
      return C || (C = new e()), D || s(b) ? t(b, p, v, y, _, C) : n(b, p, S, v, y, _, C);
    if (!(v & l)) {
      var F = k && g.call(b, "__wrapped__"), T = Y && g.call(p, "__wrapped__");
      if (F || T) {
        var W = F ? b.value() : b, j = T ? p.value() : p;
        return C || (C = new e()), _(W, j, v, y, C);
      }
    }
    return I ? (C || (C = new e()), r(b, p, v, y, _, C)) : !1;
  }
  return ki = h, ki;
}
var Ri, Rd;
function Pp() {
  if (Rd) return Ri;
  Rd = 1;
  var e = Ex(), t = un();
  function n(r, a, o, i, s) {
    return r === a ? !0 : r == null || a == null || !t(r) && !t(a) ? r !== r && a !== a : e(r, a, o, i, n, s);
  }
  return Ri = n, Ri;
}
var Ii, Id;
function Tx() {
  if (Id) return Ii;
  Id = 1;
  var e = gp(), t = Pp(), n = 1, r = 2;
  function a(o, i, s, l) {
    var c = s.length, d = c, u = !l;
    if (o == null)
      return !d;
    for (o = Object(o); c--; ) {
      var m = s[c];
      if (u && m[2] ? m[1] !== o[m[0]] : !(m[0] in o))
        return !1;
    }
    for (; ++c < d; ) {
      m = s[c];
      var g = m[0], h = o[g], b = m[1];
      if (u && m[2]) {
        if (h === void 0 && !(g in o))
          return !1;
      } else {
        var p = new e();
        if (l)
          var v = l(h, b, g, o, i, p);
        if (!(v === void 0 ? t(b, h, n | r, l, p) : v))
          return !1;
      }
    }
    return !0;
  }
  return Ii = a, Ii;
}
var Ai, Ad;
function Np() {
  if (Ad) return Ai;
  Ad = 1;
  var e = jt();
  function t(n) {
    return n === n && !e(n);
  }
  return Ai = t, Ai;
}
var zi, zd;
function Ox() {
  if (zd) return zi;
  zd = 1;
  var e = Np(), t = Ul();
  function n(r) {
    for (var a = t(r), o = a.length; o--; ) {
      var i = a[o], s = r[i];
      a[o] = [i, s, e(s)];
    }
    return a;
  }
  return zi = n, zi;
}
var Li, Ld;
function Ep() {
  if (Ld) return Li;
  Ld = 1;
  function e(t, n) {
    return function(r) {
      return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r));
    };
  }
  return Li = e, Li;
}
var qi, qd;
function Mx() {
  if (qd) return qi;
  qd = 1;
  var e = Tx(), t = Ox(), n = Ep();
  function r(a) {
    var o = t(a);
    return o.length == 1 && o[0][2] ? n(o[0][0], o[0][1]) : function(i) {
      return i === a || e(i, a, o);
    };
  }
  return qi = r, qi;
}
var $i, $d;
function Dx() {
  if ($d) return $i;
  $d = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return $i = e, $i;
}
var Bi, Bd;
function kx() {
  if (Bd) return Bi;
  Bd = 1;
  var e = Zm(), t = Yl(), n = bt(), r = Vl(), a = Gl(), o = sa();
  function i(s, l, c) {
    l = e(l, s);
    for (var d = -1, u = l.length, m = !1; ++d < u; ) {
      var g = o(l[d]);
      if (!(m = s != null && c(s, g)))
        break;
      s = s[g];
    }
    return m || ++d != u ? m : (u = s == null ? 0 : s.length, !!u && a(u) && r(g, u) && (n(s) || t(s)));
  }
  return Bi = i, Bi;
}
var ji, jd;
function Rx() {
  if (jd) return ji;
  jd = 1;
  var e = Dx(), t = kx();
  function n(r, a) {
    return r != null && t(r, a, e);
  }
  return ji = n, ji;
}
var Fi, Fd;
function Ix() {
  if (Fd) return Fi;
  Fd = 1;
  var e = Pp(), t = ep(), n = Rx(), r = zl(), a = Np(), o = Ep(), i = sa(), s = 1, l = 2;
  function c(d, u) {
    return r(d) && a(u) ? o(i(d), u) : function(m) {
      var g = t(m, d);
      return g === void 0 && g === u ? n(m, d) : e(u, g, s | l);
    };
  }
  return Fi = c, Fi;
}
var Hi, Hd;
function ca() {
  if (Hd) return Hi;
  Hd = 1;
  function e(t) {
    return t;
  }
  return Hi = e, Hi;
}
var Wi, Wd;
function Ax() {
  if (Wd) return Wi;
  Wd = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return Wi = e, Wi;
}
var Yi, Yd;
function zx() {
  if (Yd) return Yi;
  Yd = 1;
  var e = jl();
  function t(n) {
    return function(r) {
      return e(r, n);
    };
  }
  return Yi = t, Yi;
}
var Vi, Vd;
function Lx() {
  if (Vd) return Vi;
  Vd = 1;
  var e = Ax(), t = zx(), n = zl(), r = sa();
  function a(o) {
    return n(o) ? e(r(o)) : t(o);
  }
  return Vi = a, Vi;
}
var Gi, Gd;
function Tp() {
  if (Gd) return Gi;
  Gd = 1;
  var e = Mx(), t = Ix(), n = ca(), r = bt(), a = Lx();
  function o(i) {
    return typeof i == "function" ? i : i == null ? n : typeof i == "object" ? r(i) ? t(i[0], i[1]) : e(i) : a(i);
  }
  return Gi = o, Gi;
}
var Ui, Ud;
function qx() {
  if (Ud) return Ui;
  Ud = 1;
  function e(t, n, r, a) {
    for (var o = t.length, i = r + (a ? 1 : -1); a ? i-- : ++i < o; )
      if (n(t[i], i, t))
        return i;
    return -1;
  }
  return Ui = e, Ui;
}
var Ki, Kd;
function $x() {
  if (Kd) return Ki;
  Kd = 1;
  function e(t) {
    return t !== t;
  }
  return Ki = e, Ki;
}
var Xi, Xd;
function Bx() {
  if (Xd) return Xi;
  Xd = 1;
  function e(t, n, r) {
    for (var a = r - 1, o = t.length; ++a < o; )
      if (t[a] === n)
        return a;
    return -1;
  }
  return Xi = e, Xi;
}
var Qi, Qd;
function jx() {
  if (Qd) return Qi;
  Qd = 1;
  var e = qx(), t = $x(), n = Bx();
  function r(a, o, i) {
    return o === o ? n(a, o, i) : e(a, t, i);
  }
  return Qi = r, Qi;
}
var Ji, Jd;
function Fx() {
  if (Jd) return Ji;
  Jd = 1;
  var e = jx();
  function t(n, r) {
    var a = n == null ? 0 : n.length;
    return !!a && e(n, r, 0) > -1;
  }
  return Ji = t, Ji;
}
var Zi, Zd;
function Hx() {
  if (Zd) return Zi;
  Zd = 1;
  function e(t, n, r) {
    for (var a = -1, o = t == null ? 0 : t.length; ++a < o; )
      if (r(n, t[a]))
        return !0;
    return !1;
  }
  return Zi = e, Zi;
}
var es, ef;
function Wx() {
  if (ef) return es;
  ef = 1;
  function e() {
  }
  return es = e, es;
}
var ts, tf;
function Yx() {
  if (tf) return ts;
  tf = 1;
  var e = Cp(), t = Wx(), n = Wl(), r = 1 / 0, a = e && 1 / n(new e([, -0]))[1] == r ? function(o) {
    return new e(o);
  } : t;
  return ts = a, ts;
}
var ns, nf;
function Vx() {
  if (nf) return ns;
  nf = 1;
  var e = vp(), t = Fx(), n = Hx(), r = bp(), a = Yx(), o = Wl(), i = 200;
  function s(l, c, d) {
    var u = -1, m = t, g = l.length, h = !0, b = [], p = b;
    if (d)
      h = !1, m = n;
    else if (g >= i) {
      var v = c ? null : a(l);
      if (v)
        return o(v);
      h = !1, m = r, p = new e();
    } else
      p = c ? [] : b;
    e:
      for (; ++u < g; ) {
        var y = l[u], _ = c ? c(y) : y;
        if (y = d || y !== 0 ? y : 0, h && _ === _) {
          for (var C = p.length; C--; )
            if (p[C] === _)
              continue e;
          c && p.push(_), b.push(y);
        } else m(p, _, d) || (p !== b && p.push(_), b.push(y));
      }
    return b;
  }
  return ns = s, ns;
}
var rs, rf;
function Gx() {
  if (rf) return rs;
  rf = 1;
  var e = Tp(), t = Vx();
  function n(r, a) {
    return r && r.length ? t(r, e(a, 2)) : [];
  }
  return rs = n, rs;
}
var Ux = Gx();
const af = /* @__PURE__ */ Pt(Ux);
function Op(e, t, n) {
  return t === !0 ? af(e, n) : zr(t) ? af(e, t) : e;
}
function En(e) {
  "@babel/helpers - typeof";
  return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, En(e);
}
var Kx = ["ref"];
function of(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? of(Object(n), !0).forEach(function(r) {
      da(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : of(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Xx(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Dp(r.key), r);
  }
}
function Qx(e, t, n) {
  return t && sf(e.prototype, t), n && sf(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Jx(e, t, n) {
  return t = jr(t), Zx(e, Mp() ? Reflect.construct(t, n || [], jr(e).constructor) : t.apply(e, n));
}
function Zx(e, t) {
  if (t && (En(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return e1(e);
}
function e1(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Mp = function() {
    return !!e;
  })();
}
function jr(e) {
  return jr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, jr(e);
}
function t1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && rl(e, t);
}
function rl(e, t) {
  return rl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, rl(e, t);
}
function da(e, t, n) {
  return t = Dp(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Dp(e) {
  var t = n1(e, "string");
  return En(t) == "symbol" ? t : t + "";
}
function n1(e, t) {
  if (En(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (En(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function r1(e, t) {
  if (e == null) return {};
  var n = a1(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function a1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function o1(e) {
  return e.value;
}
function i1(e, t) {
  if (/* @__PURE__ */ x.isValidElement(e))
    return /* @__PURE__ */ x.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ x.createElement(e, t);
  t.ref;
  var n = r1(t, Kx);
  return /* @__PURE__ */ x.createElement(Hl, n);
}
var lf = 1, Kl = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    Xx(this, t);
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    return n = Jx(this, t, [].concat(a)), da(n, "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return t1(t, e), Qx(t, [{
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
      var r = this.props.onBBoxUpdate, a = this.getBBox();
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > lf || Math.abs(a.height - this.lastBoundingBox.height) > lf) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, r && r(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Mt({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var a = this.props, o = a.layout, i = a.align, s = a.verticalAlign, l = a.margin, c = a.chartWidth, d = a.chartHeight, u, m;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (i === "center" && o === "vertical") {
          var g = this.getBBoxSnapshot();
          u = {
            left: ((c || 0) - g.width) / 2
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
          m = {
            top: ((d || 0) - h.height) / 2
          };
        } else
          m = s === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return Mt(Mt({}, u), m);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, a = this.props, o = a.content, i = a.width, s = a.height, l = a.wrapperStyle, c = a.payloadUniqBy, d = a.payload, u = Mt(Mt({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ x.createElement("div", {
        className: "recharts-legend-wrapper",
        style: u,
        ref: function(g) {
          r.wrapperNode = g;
        }
      }, i1(o, Mt(Mt({}, this.props), {}, {
        payload: Op(d, c, o1)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, a) {
      var o = Mt(Mt({}, this.defaultProps), r.props), i = o.layout;
      return i === "vertical" && ft(r.props.height) ? {
        height: r.props.height
      } : i === "horizontal" ? {
        width: r.props.width || a
      } : null;
    }
  }]);
})(Xr);
da(Kl, "displayName", "Legend");
da(Kl, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var as, uf;
function s1() {
  if (uf) return as;
  uf = 1;
  var e = pr(), t = Yl(), n = bt(), r = e ? e.isConcatSpreadable : void 0;
  function a(o) {
    return n(o) || t(o) || !!(r && o && o[r]);
  }
  return as = a, as;
}
var os, cf;
function l1() {
  if (cf) return os;
  cf = 1;
  var e = wp(), t = s1();
  function n(r, a, o, i, s) {
    var l = -1, c = r.length;
    for (o || (o = t), s || (s = []); ++l < c; ) {
      var d = r[l];
      a > 0 && o(d) ? a > 1 ? n(d, a - 1, o, i, s) : e(s, d) : i || (s[s.length] = d);
    }
    return s;
  }
  return os = n, os;
}
var is, df;
function u1() {
  if (df) return is;
  df = 1;
  function e(t) {
    return function(n, r, a) {
      for (var o = -1, i = Object(n), s = a(n), l = s.length; l--; ) {
        var c = s[t ? l : ++o];
        if (r(i[c], c, i) === !1)
          break;
      }
      return n;
    };
  }
  return is = e, is;
}
var ss, ff;
function c1() {
  if (ff) return ss;
  ff = 1;
  var e = u1(), t = e();
  return ss = t, ss;
}
var ls, mf;
function d1() {
  if (mf) return ls;
  mf = 1;
  var e = c1(), t = Ul();
  function n(r, a) {
    return r && e(r, a, t);
  }
  return ls = n, ls;
}
var us, pf;
function f1() {
  if (pf) return us;
  pf = 1;
  var e = ua();
  function t(n, r) {
    return function(a, o) {
      if (a == null)
        return a;
      if (!e(a))
        return n(a, o);
      for (var i = a.length, s = r ? i : -1, l = Object(a); (r ? s-- : ++s < i) && o(l[s], s, l) !== !1; )
        ;
      return a;
    };
  }
  return us = t, us;
}
var cs, hf;
function m1() {
  if (hf) return cs;
  hf = 1;
  var e = d1(), t = f1(), n = t(e);
  return cs = n, cs;
}
var ds, gf;
function p1() {
  if (gf) return ds;
  gf = 1;
  var e = m1(), t = ua();
  function n(r, a) {
    var o = -1, i = t(r) ? Array(r.length) : [];
    return e(r, function(s, l, c) {
      i[++o] = a(s, l, c);
    }), i;
  }
  return ds = n, ds;
}
var fs, vf;
function h1() {
  if (vf) return fs;
  vf = 1;
  function e(t, n) {
    var r = t.length;
    for (t.sort(n); r--; )
      t[r] = t[r].value;
    return t;
  }
  return fs = e, fs;
}
var ms, bf;
function g1() {
  if (bf) return ms;
  bf = 1;
  var e = hr();
  function t(n, r) {
    if (n !== r) {
      var a = n !== void 0, o = n === null, i = n === n, s = e(n), l = r !== void 0, c = r === null, d = r === r, u = e(r);
      if (!c && !u && !s && n > r || s && l && d && !c && !u || o && l && d || !a && d || !i)
        return 1;
      if (!o && !s && !u && n < r || u && a && i && !o && !s || c && a && i || !l && i || !d)
        return -1;
    }
    return 0;
  }
  return ms = t, ms;
}
var ps, yf;
function v1() {
  if (yf) return ps;
  yf = 1;
  var e = g1();
  function t(n, r, a) {
    for (var o = -1, i = n.criteria, s = r.criteria, l = i.length, c = a.length; ++o < l; ) {
      var d = e(i[o], s[o]);
      if (d) {
        if (o >= c)
          return d;
        var u = a[o];
        return d * (u == "desc" ? -1 : 1);
      }
    }
    return n.index - r.index;
  }
  return ps = t, ps;
}
var hs, wf;
function b1() {
  if (wf) return hs;
  wf = 1;
  var e = Qm(), t = jl(), n = Tp(), r = p1(), a = h1(), o = _p(), i = v1(), s = ca(), l = bt();
  function c(d, u, m) {
    u.length ? u = e(u, function(b) {
      return l(b) ? function(p) {
        return t(p, b.length === 1 ? b[0] : b);
      } : b;
    }) : u = [s];
    var g = -1;
    u = e(u, o(n));
    var h = r(d, function(b, p, v) {
      var y = e(u, function(_) {
        return _(b);
      });
      return { criteria: y, index: ++g, value: b };
    });
    return a(h, function(b, p) {
      return i(b, p, m);
    });
  }
  return hs = c, hs;
}
var gs, xf;
function y1() {
  if (xf) return gs;
  xf = 1;
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
  return gs = e, gs;
}
var vs, _f;
function w1() {
  if (_f) return vs;
  _f = 1;
  var e = y1(), t = Math.max;
  function n(r, a, o) {
    return a = t(a === void 0 ? r.length - 1 : a, 0), function() {
      for (var i = arguments, s = -1, l = t(i.length - a, 0), c = Array(l); ++s < l; )
        c[s] = i[a + s];
      s = -1;
      for (var d = Array(a + 1); ++s < a; )
        d[s] = i[s];
      return d[a] = o(c), e(r, this, d);
    };
  }
  return vs = n, vs;
}
var bs, Sf;
function x1() {
  if (Sf) return bs;
  Sf = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return bs = e, bs;
}
var ys, Cf;
function _1() {
  if (Cf) return ys;
  Cf = 1;
  var e = cn(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return ys = t, ys;
}
var ws, Pf;
function S1() {
  if (Pf) return ws;
  Pf = 1;
  var e = x1(), t = _1(), n = ca(), r = t ? function(a, o) {
    return t(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(o),
      writable: !0
    });
  } : n;
  return ws = r, ws;
}
var xs, Nf;
function C1() {
  if (Nf) return xs;
  Nf = 1;
  var e = 800, t = 16, n = Date.now;
  function r(a) {
    var o = 0, i = 0;
    return function() {
      var s = n(), l = t - (s - i);
      if (i = s, l > 0) {
        if (++o >= e)
          return arguments[0];
      } else
        o = 0;
      return a.apply(void 0, arguments);
    };
  }
  return xs = r, xs;
}
var _s, Ef;
function P1() {
  if (Ef) return _s;
  Ef = 1;
  var e = S1(), t = C1(), n = t(e);
  return _s = n, _s;
}
var Ss, Tf;
function N1() {
  if (Tf) return Ss;
  Tf = 1;
  var e = ca(), t = w1(), n = P1();
  function r(a, o) {
    return n(t(a, o, e), a + "");
  }
  return Ss = r, Ss;
}
var Cs, Of;
function E1() {
  if (Of) return Cs;
  Of = 1;
  var e = ql(), t = ua(), n = Vl(), r = jt();
  function a(o, i, s) {
    if (!r(s))
      return !1;
    var l = typeof i;
    return (l == "number" ? t(s) && n(i, s.length) : l == "string" && i in s) ? e(s[i], o) : !1;
  }
  return Cs = a, Cs;
}
var Ps, Mf;
function T1() {
  if (Mf) return Ps;
  Mf = 1;
  var e = l1(), t = b1(), n = N1(), r = E1(), a = n(function(o, i) {
    if (o == null)
      return [];
    var s = i.length;
    return s > 1 && r(o, i[0], i[1]) ? i = [] : s > 2 && r(i[0], i[1], i[2]) && (i = [i[0]]), t(o, e(i, 1), []);
  });
  return Ps = a, Ps;
}
var O1 = T1();
const M1 = /* @__PURE__ */ Pt(O1);
function rr(e) {
  "@babel/helpers - typeof";
  return rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rr(e);
}
function al() {
  return al = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, al.apply(this, arguments);
}
function D1(e, t) {
  return A1(e) || I1(e, t) || R1(e, t) || k1();
}
function k1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function R1(e, t) {
  if (e) {
    if (typeof e == "string") return Df(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Df(e, t);
  }
}
function Df(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function I1(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, i, s = [], l = !0, c = !1;
    try {
      if (o = (n = n.call(e)).next, t !== 0) for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (d) {
      c = !0, a = d;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function A1(e) {
  if (Array.isArray(e)) return e;
}
function kf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ns(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kf(Object(n), !0).forEach(function(r) {
      z1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function z1(e, t, n) {
  return t = L1(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function L1(e) {
  var t = q1(e, "string");
  return rr(t) == "symbol" ? t : t + "";
}
function q1(e, t) {
  if (rr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (rr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $1(e) {
  return Array.isArray(e) && Lr(e[0]) && Lr(e[1]) ? e.join(" ~ ") : e;
}
var B1 = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, a = t.contentStyle, o = a === void 0 ? {} : a, i = t.itemStyle, s = i === void 0 ? {} : i, l = t.labelStyle, c = l === void 0 ? {} : l, d = t.payload, u = t.formatter, m = t.itemSorter, g = t.wrapperClassName, h = t.labelClassName, b = t.label, p = t.labelFormatter, v = t.accessibilityLayer, y = v === void 0 ? !1 : v, _ = function() {
    if (d && d.length) {
      var F = {
        padding: 0,
        margin: 0
      }, T = (m ? M1(d, m) : d).map(function(W, j) {
        if (W.type === "none")
          return null;
        var $ = Ns({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: W.color || "#000"
        }, s), z = W.formatter || u || $1, q = W.value, ee = W.name, ie = q, K = ee;
        if (z && ie != null && K != null) {
          var O = z(q, ee, W, j, d);
          if (Array.isArray(O)) {
            var N = D1(O, 2);
            ie = N[0], K = N[1];
          } else
            ie = O;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ x.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(j),
            style: $
          }, Lr(K) ? /* @__PURE__ */ x.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, K) : null, Lr(K) ? /* @__PURE__ */ x.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ x.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, ie), /* @__PURE__ */ x.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, W.unit || ""))
        );
      });
      return /* @__PURE__ */ x.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: F
      }, T);
    }
    return null;
  }, C = Ns({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, o), D = Ns({
    margin: 0
  }, c), E = !L0(b), S = E ? b : "", R = Jt("recharts-default-tooltip", g), k = Jt("recharts-tooltip-label", h);
  E && p && d !== void 0 && d !== null && (S = p(b, d));
  var Y = y ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ x.createElement("div", al({
    className: R,
    style: C
  }, Y), /* @__PURE__ */ x.createElement("p", {
    className: k,
    style: D
  }, /* @__PURE__ */ x.isValidElement(S) ? S : "".concat(S)), _());
};
function ar(e) {
  "@babel/helpers - typeof";
  return ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ar(e);
}
function Cr(e, t, n) {
  return t = j1(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function j1(e) {
  var t = F1(e, "string");
  return ar(t) == "symbol" ? t : t + "";
}
function F1(e, t) {
  if (ar(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ar(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var An = "recharts-tooltip-wrapper", H1 = {
  visibility: "hidden"
};
function W1(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return Jt(An, Cr(Cr(Cr(Cr({}, "".concat(An, "-right"), ft(n) && t && ft(t.x) && n >= t.x), "".concat(An, "-left"), ft(n) && t && ft(t.x) && n < t.x), "".concat(An, "-bottom"), ft(r) && t && ft(t.y) && r >= t.y), "".concat(An, "-top"), ft(r) && t && ft(t.y) && r < t.y));
}
function Rf(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, a = e.offsetTopLeft, o = e.position, i = e.reverseDirection, s = e.tooltipDimension, l = e.viewBox, c = e.viewBoxDimension;
  if (o && ft(o[r]))
    return o[r];
  var d = n[r] - s - a, u = n[r] + a;
  if (t[r])
    return i[r] ? d : u;
  if (i[r]) {
    var m = d, g = l[r];
    return m < g ? Math.max(u, l[r]) : Math.max(d, l[r]);
  }
  var h = u + s, b = l[r] + c;
  return h > b ? Math.max(d, l[r]) : Math.max(u, l[r]);
}
function Y1(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function V1(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, a = e.position, o = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, c, d, u;
  return i.height > 0 && i.width > 0 && n ? (d = Rf({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: a,
    reverseDirection: o,
    tooltipDimension: i.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), u = Rf({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: a,
    reverseDirection: o,
    tooltipDimension: i.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), c = Y1({
    translateX: d,
    translateY: u,
    useTranslate3d: s
  })) : c = H1, {
    cssProperties: c,
    cssClasses: W1({
      translateX: d,
      translateY: u,
      coordinate: n
    })
  };
}
function Tn(e) {
  "@babel/helpers - typeof";
  return Tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tn(e);
}
function If(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Af(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? If(Object(n), !0).forEach(function(r) {
      il(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : If(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function G1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function U1(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Rp(r.key), r);
  }
}
function K1(e, t, n) {
  return t && U1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function X1(e, t, n) {
  return t = Fr(t), Q1(e, kp() ? Reflect.construct(t, n || [], Fr(e).constructor) : t.apply(e, n));
}
function Q1(e, t) {
  if (t && (Tn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return J1(e);
}
function J1(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (kp = function() {
    return !!e;
  })();
}
function Fr(e) {
  return Fr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Fr(e);
}
function Z1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ol(e, t);
}
function ol(e, t) {
  return ol = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, ol(e, t);
}
function il(e, t, n) {
  return t = Rp(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Rp(e) {
  var t = e_(e, "string");
  return Tn(t) == "symbol" ? t : t + "";
}
function e_(e, t) {
  if (Tn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Tn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var zf = 1, t_ = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    G1(this, t);
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    return n = X1(this, t, [].concat(a)), il(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), il(n, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, l, c, d;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (l = n.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && s !== void 0 ? s : 0,
            y: (c = (d = n.props.coordinate) === null || d === void 0 ? void 0 : d.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), n;
  }
  return Z1(t, e), K1(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > zf || Math.abs(r.height - this.state.lastBoundingBox.height) > zf) && this.setState({
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
      var r, a;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, a = this.props, o = a.active, i = a.allowEscapeViewBox, s = a.animationDuration, l = a.animationEasing, c = a.children, d = a.coordinate, u = a.hasPayload, m = a.isAnimationActive, g = a.offset, h = a.position, b = a.reverseDirection, p = a.useTranslate3d, v = a.viewBox, y = a.wrapperStyle, _ = V1({
        allowEscapeViewBox: i,
        coordinate: d,
        offsetTopLeft: g,
        position: h,
        reverseDirection: b,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: p,
        viewBox: v
      }), C = _.cssClasses, D = _.cssProperties, E = Af(Af({
        transition: m && o ? "transform ".concat(s, "ms ").concat(l) : void 0
      }, D), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && o && u ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, y);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ x.createElement("div", {
          tabIndex: -1,
          className: C,
          style: E,
          ref: function(R) {
            r.wrapperNode = R;
          }
        }, c)
      );
    }
  }]);
})(Xr), n_ = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, r_ = {
  isSsr: n_()
};
function On(e) {
  "@babel/helpers - typeof";
  return On = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, On(e);
}
function Lf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lf(Object(n), !0).forEach(function(r) {
      Xl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function a_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function o_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ap(r.key), r);
  }
}
function i_(e, t, n) {
  return t && o_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function s_(e, t, n) {
  return t = Hr(t), l_(e, Ip() ? Reflect.construct(t, n || [], Hr(e).constructor) : t.apply(e, n));
}
function l_(e, t) {
  if (t && (On(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return u_(e);
}
function u_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ip() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ip = function() {
    return !!e;
  })();
}
function Hr(e) {
  return Hr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Hr(e);
}
function c_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sl(e, t);
}
function sl(e, t) {
  return sl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, sl(e, t);
}
function Xl(e, t, n) {
  return t = Ap(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ap(e) {
  var t = d_(e, "string");
  return On(t) == "symbol" ? t : t + "";
}
function d_(e, t) {
  if (On(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (On(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function f_(e) {
  return e.dataKey;
}
function m_(e, t) {
  return /* @__PURE__ */ x.isValidElement(e) ? /* @__PURE__ */ x.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ x.createElement(e, t) : /* @__PURE__ */ x.createElement(B1, t);
}
var Ql = /* @__PURE__ */ (function(e) {
  function t() {
    return a_(this, t), s_(this, t, arguments);
  }
  return c_(t, e), i_(t, [{
    key: "render",
    value: function() {
      var r = this, a = this.props, o = a.active, i = a.allowEscapeViewBox, s = a.animationDuration, l = a.animationEasing, c = a.content, d = a.coordinate, u = a.filterNull, m = a.isAnimationActive, g = a.offset, h = a.payload, b = a.payloadUniqBy, p = a.position, v = a.reverseDirection, y = a.useTranslate3d, _ = a.viewBox, C = a.wrapperStyle, D = h ?? [];
      u && D.length && (D = Op(h.filter(function(S) {
        return S.value != null && (S.hide !== !0 || r.props.includeHidden);
      }), b, f_));
      var E = D.length > 0;
      return /* @__PURE__ */ x.createElement(t_, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: l,
        isAnimationActive: m,
        active: o,
        coordinate: d,
        hasPayload: E,
        offset: g,
        position: p,
        reverseDirection: v,
        useTranslate3d: y,
        viewBox: _,
        wrapperStyle: C
      }, m_(c, qf(qf({}, this.props), {}, {
        payload: D
      })));
    }
  }]);
})(Xr);
Xl(Ql, "displayName", "Tooltip");
Xl(Ql, "defaultProps", {
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
  isAnimationActive: !r_.isSsr,
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
var Es, $f;
function p_() {
  if ($f) return Es;
  $f = 1;
  var e = Nt(), t = function() {
    return e.Date.now();
  };
  return Es = t, Es;
}
var Ts, Bf;
function h_() {
  if (Bf) return Ts;
  Bf = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return Ts = t, Ts;
}
var Os, jf;
function g_() {
  if (jf) return Os;
  jf = 1;
  var e = h_(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return Os = n, Os;
}
var Ms, Ff;
function v_() {
  if (Ff) return Ms;
  Ff = 1;
  var e = g_(), t = jt(), n = hr(), r = NaN, a = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
  function l(c) {
    if (typeof c == "number")
      return c;
    if (n(c))
      return r;
    if (t(c)) {
      var d = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(d) ? d + "" : d;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var u = o.test(c);
    return u || i.test(c) ? s(c.slice(2), u ? 2 : 8) : a.test(c) ? r : +c;
  }
  return Ms = l, Ms;
}
var Ds, Hf;
function b_() {
  if (Hf) return Ds;
  Hf = 1;
  var e = jt(), t = p_(), n = v_(), r = "Expected a function", a = Math.max, o = Math.min;
  function i(s, l, c) {
    var d, u, m, g, h, b, p = 0, v = !1, y = !1, _ = !0;
    if (typeof s != "function")
      throw new TypeError(r);
    l = n(l) || 0, e(c) && (v = !!c.leading, y = "maxWait" in c, m = y ? a(n(c.maxWait) || 0, l) : m, _ = "trailing" in c ? !!c.trailing : _);
    function C(T) {
      var W = d, j = u;
      return d = u = void 0, p = T, g = s.apply(j, W), g;
    }
    function D(T) {
      return p = T, h = setTimeout(R, l), v ? C(T) : g;
    }
    function E(T) {
      var W = T - b, j = T - p, $ = l - W;
      return y ? o($, m - j) : $;
    }
    function S(T) {
      var W = T - b, j = T - p;
      return b === void 0 || W >= l || W < 0 || y && j >= m;
    }
    function R() {
      var T = t();
      if (S(T))
        return k(T);
      h = setTimeout(R, E(T));
    }
    function k(T) {
      return h = void 0, _ && d ? C(T) : (d = u = void 0, g);
    }
    function Y() {
      h !== void 0 && clearTimeout(h), p = 0, d = b = u = h = void 0;
    }
    function I() {
      return h === void 0 ? g : k(t());
    }
    function F() {
      var T = t(), W = S(T);
      if (d = arguments, u = this, b = T, W) {
        if (h === void 0)
          return D(b);
        if (y)
          return clearTimeout(h), h = setTimeout(R, l), C(b);
      }
      return h === void 0 && (h = setTimeout(R, l)), g;
    }
    return F.cancel = Y, F.flush = I, F;
  }
  return Ds = i, Ds;
}
var ks, Wf;
function y_() {
  if (Wf) return ks;
  Wf = 1;
  var e = b_(), t = jt(), n = "Expected a function";
  function r(a, o, i) {
    var s = !0, l = !0;
    if (typeof a != "function")
      throw new TypeError(n);
    return t(i) && (s = "leading" in i ? !!i.leading : s, l = "trailing" in i ? !!i.trailing : l), e(a, o, {
      leading: s,
      maxWait: o,
      trailing: l
    });
  }
  return ks = r, ks;
}
var w_ = y_();
const x_ = /* @__PURE__ */ Pt(w_);
function or(e) {
  "@babel/helpers - typeof";
  return or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, or(e);
}
function Yf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yf(Object(n), !0).forEach(function(r) {
      __(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function __(e, t, n) {
  return t = S_(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function S_(e) {
  var t = C_(e, "string");
  return or(t) == "symbol" ? t : t + "";
}
function C_(e, t) {
  if (or(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (or(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function P_(e, t) {
  return O_(e) || T_(e, t) || E_(e, t) || N_();
}
function N_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E_(e, t) {
  if (e) {
    if (typeof e == "string") return Vf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Vf(e, t);
  }
}
function Vf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function T_(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, i, s = [], l = !0, c = !1;
    try {
      if (o = (n = n.call(e)).next, t !== 0) for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (d) {
      c = !0, a = d;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function O_(e) {
  if (Array.isArray(e)) return e;
}
var M_ = /* @__PURE__ */ Ct(function(e, t) {
  var n = e.aspect, r = e.initialDimension, a = r === void 0 ? {
    width: -1,
    height: -1
  } : r, o = e.width, i = o === void 0 ? "100%" : o, s = e.height, l = s === void 0 ? "100%" : s, c = e.minWidth, d = c === void 0 ? 0 : c, u = e.minHeight, m = e.maxHeight, g = e.children, h = e.debounce, b = h === void 0 ? 0 : h, p = e.id, v = e.className, y = e.onResize, _ = e.style, C = _ === void 0 ? {} : _, D = Cn(null), E = Cn();
  E.current = y, dg(t, function() {
    return Object.defineProperty(D.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), D.current;
      },
      configurable: !0
    });
  });
  var S = kt({
    containerWidth: a.width,
    containerHeight: a.height
  }), R = P_(S, 2), k = R[0], Y = R[1], I = xm(function(T, W) {
    Y(function(j) {
      var $ = Math.round(T), z = Math.round(W);
      return j.containerWidth === $ && j.containerHeight === z ? j : {
        containerWidth: $,
        containerHeight: z
      };
    });
  }, []);
  ct(function() {
    var T = function(ee) {
      var ie, K = ee[0].contentRect, O = K.width, N = K.height;
      I(O, N), (ie = E.current) === null || ie === void 0 || ie.call(E, O, N);
    };
    b > 0 && (T = x_(T, b, {
      trailing: !0,
      leading: !1
    }));
    var W = new ResizeObserver(T), j = D.current.getBoundingClientRect(), $ = j.width, z = j.height;
    return I($, z), W.observe(D.current), function() {
      W.disconnect();
    };
  }, [I, b]);
  var F = _m(function() {
    var T = k.containerWidth, W = k.containerHeight;
    if (T < 0 || W < 0)
      return null;
    Dr(_r(i) || _r(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, l), Dr(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var j = _r(i) ? T : i, $ = _r(l) ? W : l;
    n && n > 0 && (j ? $ = j / n : $ && (j = $ * n), m && $ > m && ($ = m)), Dr(j > 0 || $ > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, j, $, i, l, d, u, n);
    var z = !Array.isArray(g) && ew(g.type).endsWith("Chart");
    return x.Children.map(g, function(q) {
      return /* @__PURE__ */ x.isValidElement(q) ? /* @__PURE__ */ fg(q, Pr({
        width: j,
        height: $
      }, z ? {
        style: Pr({
          height: "100%",
          width: "100%",
          maxHeight: $,
          maxWidth: j
        }, q.props.style)
      } : {})) : q;
    });
  }, [n, g, l, m, u, d, k, i]);
  return /* @__PURE__ */ x.createElement("div", {
    id: p ? "".concat(p) : void 0,
    className: Jt("recharts-responsive-container", v),
    style: Pr(Pr({}, C), {}, {
      width: i,
      height: l,
      minWidth: d,
      minHeight: u,
      maxHeight: m
    }),
    ref: D
  }, F);
});
const D_ = { light: "", dark: ".dark" }, zp = M.createContext(null);
function Lp() {
  const e = M.useContext(zp);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function hE({
  id: e,
  className: t,
  children: n,
  config: r,
  ...a
}) {
  const o = M.useId(), i = `chart-${e || o.replace(/:/g, "")}`;
  return /* @__PURE__ */ f(zp.Provider, { value: { config: r }, children: /* @__PURE__ */ U(
    "div",
    {
      "data-slot": "chart",
      "data-chart": i,
      className: w(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...a,
      children: [
        /* @__PURE__ */ f(k_, { id: i, config: r }),
        /* @__PURE__ */ f(M_, { children: n })
      ]
    }
  ) });
}
const k_ = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(([, r]) => r.theme || r.color);
  return n.length ? /* @__PURE__ */ f(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(D_).map(
          ([r, a]) => `
${a} [data-chart=${e}] {
${n.map(([o, i]) => {
            var l;
            const s = ((l = i.theme) == null ? void 0 : l[r]) || i.color;
            return s ? `  --color-${o}: ${s};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, gE = Ql;
function vE({
  active: e,
  payload: t,
  className: n,
  indicator: r = "dot",
  hideLabel: a = !1,
  hideIndicator: o = !1,
  label: i,
  labelFormatter: s,
  labelClassName: l,
  formatter: c,
  color: d,
  nameKey: u,
  labelKey: m
}) {
  const { config: g } = Lp(), h = M.useMemo(() => {
    var C;
    if (a || !(t != null && t.length))
      return null;
    const [p] = t, v = `${m || (p == null ? void 0 : p.dataKey) || (p == null ? void 0 : p.name) || "value"}`, y = ll(g, p, v), _ = !m && typeof i == "string" ? ((C = g[i]) == null ? void 0 : C.label) || i : y == null ? void 0 : y.label;
    return s ? /* @__PURE__ */ f("div", { className: w("font-medium", l), children: s(_, t) }) : _ ? /* @__PURE__ */ f("div", { className: w("font-medium", l), children: _ }) : null;
  }, [i, s, t, a, l, g, m]);
  if (!e || !(t != null && t.length))
    return null;
  const b = t.length === 1 && r !== "dot";
  return /* @__PURE__ */ U(
    "div",
    {
      className: w(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        n
      ),
      children: [
        b ? null : h,
        /* @__PURE__ */ f("div", { className: "grid gap-1.5", children: t.map((p, v) => {
          const y = `${u || p.name || p.dataKey || "value"}`, _ = ll(g, p, y), C = d || p.payload.fill || p.color;
          return /* @__PURE__ */ f(
            "div",
            {
              className: w(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                r === "dot" && "items-center"
              ),
              children: c && (p == null ? void 0 : p.value) !== void 0 && p.name ? c(p.value, p.name, p, v, p.payload) : /* @__PURE__ */ U(ht, { children: [
                _ != null && _.icon ? /* @__PURE__ */ f(_.icon, {}) : !o && /* @__PURE__ */ f(
                  "div",
                  {
                    className: w(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": r === "dot",
                        "w-1": r === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                        "my-0.5": b && r === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": C,
                      "--color-border": C
                    }
                  }
                ),
                /* @__PURE__ */ U(
                  "div",
                  {
                    className: w(
                      "flex flex-1 justify-between leading-none",
                      b ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ U("div", { className: "grid gap-1.5", children: [
                        b ? h : null,
                        /* @__PURE__ */ f("span", { className: "text-muted-foreground", children: (_ == null ? void 0 : _.label) || p.name })
                      ] }),
                      p.value && /* @__PURE__ */ f("span", { className: "text-foreground font-mono font-medium tabular-nums", children: p.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            p.dataKey
          );
        }) })
      ]
    }
  );
}
const bE = Kl;
function yE({
  className: e,
  hideIcon: t = !1,
  payload: n,
  verticalAlign: r = "bottom",
  nameKey: a
}) {
  const { config: o } = Lp();
  return n != null && n.length ? /* @__PURE__ */ f(
    "div",
    {
      className: w(
        "flex items-center justify-center gap-4",
        r === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: n.map((i) => {
        const s = `${a || i.dataKey || "value"}`, l = ll(o, i, s);
        return /* @__PURE__ */ U(
          "div",
          {
            className: w(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              l != null && l.icon && !t ? /* @__PURE__ */ f(l.icon, {}) : /* @__PURE__ */ f(
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
function ll(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let a = n;
  return n in t && typeof t[n] == "string" ? a = t[n] : r && n in r && typeof r[n] == "string" && (a = r[n]), a in e ? e[a] : e[n];
}
function wE({ ...e }) {
  return /* @__PURE__ */ f(
    iu.Root,
    {
      "data-slot": "checkbox",
      className: w(
        "peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
      ),
      ...e,
      children: /* @__PURE__ */ f(
        iu.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ f(lr, { className: "size-3.5" })
        }
      )
    }
  );
}
function xE({ ...e }) {
  return /* @__PURE__ */ f(vl.Root, { "data-slot": "collapsible", ...e });
}
function _E({
  ...e
}) {
  return /* @__PURE__ */ f(vl.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...e });
}
function SE({
  ...e
}) {
  return /* @__PURE__ */ f(vl.CollapsibleContent, { "data-slot": "collapsible-content", ...e });
}
var Gf = 1, R_ = 0.9, I_ = 0.8, A_ = 0.17, Rs = 0.1, Is = 0.999, z_ = 0.9999, L_ = 0.99, q_ = /[\\\/_+.#"@\[\(\{&]/, $_ = /[\\\/_+.#"@\[\(\{&]/g, B_ = /[\s-]/, qp = /[\s-]/g;
function ul(e, t, n, r, a, o, i) {
  if (o === t.length) return a === e.length ? Gf : L_;
  var s = `${a},${o}`;
  if (i[s] !== void 0) return i[s];
  for (var l = r.charAt(o), c = n.indexOf(l, a), d = 0, u, m, g, h; c >= 0; ) u = ul(e, t, n, r, c + 1, o + 1, i), u > d && (c === a ? u *= Gf : q_.test(e.charAt(c - 1)) ? (u *= I_, g = e.slice(a, c - 1).match($_), g && a > 0 && (u *= Math.pow(Is, g.length))) : B_.test(e.charAt(c - 1)) ? (u *= R_, h = e.slice(a, c - 1).match(qp), h && a > 0 && (u *= Math.pow(Is, h.length))) : (u *= A_, a > 0 && (u *= Math.pow(Is, c - a))), e.charAt(c) !== t.charAt(o) && (u *= z_)), (u < Rs && n.charAt(c - 1) === r.charAt(o + 1) || r.charAt(o + 1) === r.charAt(o) && n.charAt(c - 1) !== r.charAt(o)) && (m = ul(e, t, n, r, c + 1, o + 2, i), m * Rs > u && (u = m * Rs)), u > d && (d = u), c = n.indexOf(l, c + 1);
  return i[s] = d, d;
}
function Uf(e) {
  return e.toLowerCase().replace(qp, " ");
}
function j_(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, ul(e, t, Uf(e), Uf(t), 0, 0, {});
}
var zn = '[cmdk-group=""]', As = '[cmdk-group-items=""]', F_ = '[cmdk-group-heading=""]', $p = '[cmdk-item=""]', Kf = `${$p}:not([aria-disabled="true"])`, cl = "cmdk-item-select", gn = "data-value", H_ = (e, t, n) => j_(e, t, n), Bp = M.createContext(void 0), gr = () => M.useContext(Bp), jp = M.createContext(void 0), Jl = () => M.useContext(jp), Fp = M.createContext(void 0), Hp = M.forwardRef((e, t) => {
  let n = vn(() => {
    var O, N;
    return { search: "", value: (N = (O = e.value) != null ? O : e.defaultValue) != null ? N : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = vn(() => /* @__PURE__ */ new Set()), a = vn(() => /* @__PURE__ */ new Map()), o = vn(() => /* @__PURE__ */ new Map()), i = vn(() => /* @__PURE__ */ new Set()), s = Wp(e), { label: l, children: c, value: d, onValueChange: u, filter: m, shouldFilter: g, loop: h, disablePointerSelection: b = !1, vimBindings: p = !0, ...v } = e, y = wn(), _ = wn(), C = wn(), D = M.useRef(null), E = eS();
  nn(() => {
    if (d !== void 0) {
      let O = d.trim();
      n.current.value = O, S.emit();
    }
  }, [d]), nn(() => {
    E(6, T);
  }, []);
  let S = M.useMemo(() => ({ subscribe: (O) => (i.current.add(O), () => i.current.delete(O)), snapshot: () => n.current, setState: (O, N, L) => {
    var A, B, H, V;
    if (!Object.is(n.current[O], N)) {
      if (n.current[O] = N, O === "search") F(), Y(), E(1, I);
      else if (O === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Q = document.getElementById(C);
          Q ? Q.focus() : (A = document.getElementById(y)) == null || A.focus();
        }
        if (E(7, () => {
          var Q;
          n.current.selectedItemId = (Q = W()) == null ? void 0 : Q.id, S.emit();
        }), L || E(5, T), ((B = s.current) == null ? void 0 : B.value) !== void 0) {
          let Q = N ?? "";
          (V = (H = s.current).onValueChange) == null || V.call(H, Q);
          return;
        }
      }
      S.emit();
    }
  }, emit: () => {
    i.current.forEach((O) => O());
  } }), []), R = M.useMemo(() => ({ value: (O, N, L) => {
    var A;
    N !== ((A = o.current.get(O)) == null ? void 0 : A.value) && (o.current.set(O, { value: N, keywords: L }), n.current.filtered.items.set(O, k(N, L)), E(2, () => {
      Y(), S.emit();
    }));
  }, item: (O, N) => (r.current.add(O), N && (a.current.has(N) ? a.current.get(N).add(O) : a.current.set(N, /* @__PURE__ */ new Set([O]))), E(3, () => {
    F(), Y(), n.current.value || I(), S.emit();
  }), () => {
    o.current.delete(O), r.current.delete(O), n.current.filtered.items.delete(O);
    let L = W();
    E(4, () => {
      F(), (L == null ? void 0 : L.getAttribute("id")) === O && I(), S.emit();
    });
  }), group: (O) => (a.current.has(O) || a.current.set(O, /* @__PURE__ */ new Set()), () => {
    o.current.delete(O), a.current.delete(O);
  }), filter: () => s.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: y, inputId: C, labelId: _, listInnerRef: D }), []);
  function k(O, N) {
    var L, A;
    let B = (A = (L = s.current) == null ? void 0 : L.filter) != null ? A : H_;
    return O ? B(O, n.current.search, N) : 0;
  }
  function Y() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let O = n.current.filtered.items, N = [];
    n.current.filtered.groups.forEach((A) => {
      let B = a.current.get(A), H = 0;
      B.forEach((V) => {
        let Q = O.get(V);
        H = Math.max(Q, H);
      }), N.push([A, H]);
    });
    let L = D.current;
    j().sort((A, B) => {
      var H, V;
      let Q = A.getAttribute("id"), ne = B.getAttribute("id");
      return ((H = O.get(ne)) != null ? H : 0) - ((V = O.get(Q)) != null ? V : 0);
    }).forEach((A) => {
      let B = A.closest(As);
      B ? B.appendChild(A.parentElement === B ? A : A.closest(`${As} > *`)) : L.appendChild(A.parentElement === L ? A : A.closest(`${As} > *`));
    }), N.sort((A, B) => B[1] - A[1]).forEach((A) => {
      var B;
      let H = (B = D.current) == null ? void 0 : B.querySelector(`${zn}[${gn}="${encodeURIComponent(A[0])}"]`);
      H == null || H.parentElement.appendChild(H);
    });
  }
  function I() {
    let O = j().find((L) => L.getAttribute("aria-disabled") !== "true"), N = O == null ? void 0 : O.getAttribute(gn);
    S.setState("value", N || void 0);
  }
  function F() {
    var O, N, L, A;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let B = 0;
    for (let H of r.current) {
      let V = (N = (O = o.current.get(H)) == null ? void 0 : O.value) != null ? N : "", Q = (A = (L = o.current.get(H)) == null ? void 0 : L.keywords) != null ? A : [], ne = k(V, Q);
      n.current.filtered.items.set(H, ne), ne > 0 && B++;
    }
    for (let [H, V] of a.current) for (let Q of V) if (n.current.filtered.items.get(Q) > 0) {
      n.current.filtered.groups.add(H);
      break;
    }
    n.current.filtered.count = B;
  }
  function T() {
    var O, N, L;
    let A = W();
    A && (((O = A.parentElement) == null ? void 0 : O.firstChild) === A && ((L = (N = A.closest(zn)) == null ? void 0 : N.querySelector(F_)) == null || L.scrollIntoView({ block: "nearest" })), A.scrollIntoView({ block: "nearest" }));
  }
  function W() {
    var O;
    return (O = D.current) == null ? void 0 : O.querySelector(`${$p}[aria-selected="true"]`);
  }
  function j() {
    var O;
    return Array.from(((O = D.current) == null ? void 0 : O.querySelectorAll(Kf)) || []);
  }
  function $(O) {
    let N = j()[O];
    N && S.setState("value", N.getAttribute(gn));
  }
  function z(O) {
    var N;
    let L = W(), A = j(), B = A.findIndex((V) => V === L), H = A[B + O];
    (N = s.current) != null && N.loop && (H = B + O < 0 ? A[A.length - 1] : B + O === A.length ? A[0] : A[B + O]), H && S.setState("value", H.getAttribute(gn));
  }
  function q(O) {
    let N = W(), L = N == null ? void 0 : N.closest(zn), A;
    for (; L && !A; ) L = O > 0 ? J_(L, zn) : Z_(L, zn), A = L == null ? void 0 : L.querySelector(Kf);
    A ? S.setState("value", A.getAttribute(gn)) : z(O);
  }
  let ee = () => $(j().length - 1), ie = (O) => {
    O.preventDefault(), O.metaKey ? ee() : O.altKey ? q(1) : z(1);
  }, K = (O) => {
    O.preventDefault(), O.metaKey ? $(0) : O.altKey ? q(-1) : z(-1);
  };
  return M.createElement($t.div, { ref: t, tabIndex: -1, ...v, "cmdk-root": "", onKeyDown: (O) => {
    var N;
    (N = v.onKeyDown) == null || N.call(v, O);
    let L = O.nativeEvent.isComposing || O.keyCode === 229;
    if (!(O.defaultPrevented || L)) switch (O.key) {
      case "n":
      case "j": {
        p && O.ctrlKey && ie(O);
        break;
      }
      case "ArrowDown": {
        ie(O);
        break;
      }
      case "p":
      case "k": {
        p && O.ctrlKey && K(O);
        break;
      }
      case "ArrowUp": {
        K(O);
        break;
      }
      case "Home": {
        O.preventDefault(), $(0);
        break;
      }
      case "End": {
        O.preventDefault(), ee();
        break;
      }
      case "Enter": {
        O.preventDefault();
        let A = W();
        if (A) {
          let B = new Event(cl);
          A.dispatchEvent(B);
        }
      }
    }
  } }, M.createElement("label", { "cmdk-label": "", htmlFor: R.inputId, id: R.labelId, style: nS }, l), fa(e, (O) => M.createElement(jp.Provider, { value: S }, M.createElement(Bp.Provider, { value: R }, O))));
}), W_ = M.forwardRef((e, t) => {
  var n, r;
  let a = wn(), o = M.useRef(null), i = M.useContext(Fp), s = gr(), l = Wp(e), c = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i == null ? void 0 : i.forceMount;
  nn(() => {
    if (!c) return s.item(a, i == null ? void 0 : i.id);
  }, [c]);
  let d = Yp(a, o, [e.value, e.children, o], e.keywords), u = Jl(), m = Lt((E) => E.value && E.value === d.current), g = Lt((E) => c || s.filter() === !1 ? !0 : E.search ? E.filtered.items.get(a) > 0 : !0);
  M.useEffect(() => {
    let E = o.current;
    if (!(!E || e.disabled)) return E.addEventListener(cl, h), () => E.removeEventListener(cl, h);
  }, [g, e.onSelect, e.disabled]);
  function h() {
    var E, S;
    b(), (S = (E = l.current).onSelect) == null || S.call(E, d.current);
  }
  function b() {
    u.setState("value", d.current, !0);
  }
  if (!g) return null;
  let { disabled: p, value: v, onSelect: y, forceMount: _, keywords: C, ...D } = e;
  return M.createElement($t.div, { ref: Kn(o, t), ...D, id: a, "cmdk-item": "", role: "option", "aria-disabled": !!p, "aria-selected": !!m, "data-disabled": !!p, "data-selected": !!m, onPointerMove: p || s.getDisablePointerSelection() ? void 0 : b, onClick: p ? void 0 : h }, e.children);
}), Y_ = M.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: a, ...o } = e, i = wn(), s = M.useRef(null), l = M.useRef(null), c = wn(), d = gr(), u = Lt((g) => a || d.filter() === !1 ? !0 : g.search ? g.filtered.groups.has(i) : !0);
  nn(() => d.group(i), []), Yp(i, s, [e.value, e.heading, l]);
  let m = M.useMemo(() => ({ id: i, forceMount: a }), [a]);
  return M.createElement($t.div, { ref: Kn(s, t), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && M.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), fa(e, (g) => M.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, M.createElement(Fp.Provider, { value: m }, g))));
}), V_ = M.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, a = M.useRef(null), o = Lt((i) => !i.search);
  return !n && !o ? null : M.createElement($t.div, { ref: Kn(a, t), ...r, "cmdk-separator": "", role: "separator" });
}), G_ = M.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, a = e.value != null, o = Jl(), i = Lt((c) => c.search), s = Lt((c) => c.selectedItemId), l = gr();
  return M.useEffect(() => {
    e.value != null && o.setState("search", e.value);
  }, [e.value]), M.createElement($t.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": s, id: l.inputId, type: "text", value: a ? e.value : i, onChange: (c) => {
    a || o.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), U_ = M.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...a } = e, o = M.useRef(null), i = M.useRef(null), s = Lt((c) => c.selectedItemId), l = gr();
  return M.useEffect(() => {
    if (i.current && o.current) {
      let c = i.current, d = o.current, u, m = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let g = c.offsetHeight;
          d.style.setProperty("--cmdk-list-height", g.toFixed(1) + "px");
        });
      });
      return m.observe(c), () => {
        cancelAnimationFrame(u), m.unobserve(c);
      };
    }
  }, []), M.createElement($t.div, { ref: Kn(o, t), ...a, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: l.listId }, fa(e, (c) => M.createElement("div", { ref: Kn(i, l.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), K_ = M.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: a, contentClassName: o, container: i, ...s } = e;
  return M.createElement(we.Root, { open: n, onOpenChange: r }, M.createElement(we.Portal, { container: i }, M.createElement(we.Overlay, { "cmdk-overlay": "", className: a }), M.createElement(we.Content, { "aria-label": e.label, "cmdk-dialog": "", className: o }, M.createElement(Hp, { ref: t, ...s }))));
}), X_ = M.forwardRef((e, t) => Lt((n) => n.filtered.count === 0) ? M.createElement($t.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), Q_ = M.forwardRef((e, t) => {
  let { progress: n, children: r, label: a = "Loading...", ...o } = e;
  return M.createElement($t.div, { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": a }, fa(e, (i) => M.createElement("div", { "aria-hidden": !0 }, i)));
}), dn = Object.assign(Hp, { List: U_, Item: W_, Input: G_, Group: Y_, Separator: V_, Dialog: K_, Empty: X_, Loading: Q_ });
function J_(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function Z_(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Wp(e) {
  let t = M.useRef(e);
  return nn(() => {
    t.current = e;
  }), t;
}
var nn = typeof window > "u" ? M.useEffect : M.useLayoutEffect;
function vn(e) {
  let t = M.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Lt(e) {
  let t = Jl(), n = () => e(t.snapshot());
  return M.useSyncExternalStore(t.subscribe, n, n);
}
function Yp(e, t, n, r = []) {
  let a = M.useRef(), o = gr();
  return nn(() => {
    var i;
    let s = (() => {
      var c;
      for (let d of n) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (c = d.current.textContent) == null ? void 0 : c.trim() : a.current;
      }
    })(), l = r.map((c) => c.trim());
    o.value(e, s, l), (i = t.current) == null || i.setAttribute(gn, s), a.current = s;
  }), a;
}
var eS = () => {
  let [e, t] = M.useState(), n = vn(() => /* @__PURE__ */ new Map());
  return nn(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, a) => {
    n.current.set(r, a), t({});
  };
};
function tS(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function fa({ asChild: e, children: t }, n) {
  return e && M.isValidElement(t) ? M.cloneElement(tS(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var nS = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function rS({ ...e }) {
  return /* @__PURE__ */ f(we.Root, { "data-slot": "dialog", ...e });
}
function CE({ ...e }) {
  return /* @__PURE__ */ f(we.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function aS({ ...e }) {
  return /* @__PURE__ */ f(we.Portal, { "data-slot": "dialog-portal", ...e });
}
function PE({ ...e }) {
  return /* @__PURE__ */ f(we.Close, { "data-slot": "dialog-close", ...e });
}
function oS({
  internalClassName: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    we.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: w(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function iS({
  internalClassName: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(aS, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ f(oS, {}),
    /* @__PURE__ */ U(
      we.Content,
      {
        "data-slot": "dialog-content",
        className: w(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...n,
        children: [
          t,
          /* @__PURE__ */ U(we.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ f(ym, {}),
            /* @__PURE__ */ f("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function sS({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "dialog-header",
      className: w("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function NE({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "dialog-footer",
      className: w("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function lS({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    we.Title,
    {
      "data-slot": "dialog-title",
      className: w("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function uS({
  internalClassName: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    we.Description,
    {
      "data-slot": "dialog-description",
      className: w("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function cS({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    dn,
    {
      "data-slot": "command",
      className: w(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...t
    }
  );
}
function EE({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ U(rS, { ...r, children: [
    /* @__PURE__ */ U(sS, { internalClassName: "sr-only", children: [
      /* @__PURE__ */ f(lS, { children: e }),
      /* @__PURE__ */ f(uS, { children: t })
    ] }),
    /* @__PURE__ */ f(iS, { internalClassName: "overflow-hidden p-0", children: /* @__PURE__ */ f(cS, { internalClassName: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n }) })
  ] });
}
function TE({
  internalClassName: e,
  ...t
}) {
  return /* @__PURE__ */ U("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3", children: [
    /* @__PURE__ */ f(ag, { className: "size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ f(
      dn.Input,
      {
        "data-slot": "command-input",
        className: w(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...t
      }
    )
  ] });
}
function OE({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    dn.List,
    {
      "data-slot": "command-list",
      className: w("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
      ...t
    }
  );
}
function ME({ ...e }) {
  return /* @__PURE__ */ f(
    dn.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function DE({
  internalClassName: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    dn.Group,
    {
      "data-slot": "command-group",
      className: w(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...t
    }
  );
}
function kE({
  internalClassName: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    dn.Separator,
    {
      "data-slot": "command-separator",
      className: w("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function RE({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    dn.Item,
    {
      "data-slot": "command-item",
      className: w(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function IE({ internalClassName: e, ...t }) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "command-shortcut",
      className: w("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function AE({ ...e }) {
  return /* @__PURE__ */ f($e.Root, { "data-slot": "context-menu", ...e });
}
function zE({
  ...e
}) {
  return /* @__PURE__ */ f($e.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function LE({ ...e }) {
  return /* @__PURE__ */ f($e.Group, { "data-slot": "context-menu-group", ...e });
}
function qE({ ...e }) {
  return /* @__PURE__ */ f($e.Portal, { "data-slot": "context-menu-portal", ...e });
}
function $E({ ...e }) {
  return /* @__PURE__ */ f($e.Sub, { "data-slot": "context-menu-sub", ...e });
}
function BE({
  ...e
}) {
  return /* @__PURE__ */ f($e.RadioGroup, { "data-slot": "context-menu-radio-group", ...e });
}
function jE({
  inset: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    $e.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": e,
      className: w(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ f(Ur, { className: "ml-auto" })
      ]
    }
  );
}
function FE({
  ...e
}) {
  return /* @__PURE__ */ f(
    $e.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg"
      ),
      ...e
    }
  );
}
function HE({
  ...e
}) {
  return /* @__PURE__ */ f($e.Portal, { children: /* @__PURE__ */ f(
    $e.Content,
    {
      "data-slot": "context-menu-content",
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md"
      ),
      ...e
    }
  ) });
}
function WE({
  inset: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ f(
    $e.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": e,
      "data-variant": t,
      className: w(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      ),
      ...n
    }
  );
}
function YE({
  children: e,
  checked: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    $e.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      ),
      checked: t,
      ...n,
      children: [
        /* @__PURE__ */ f("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f($e.ItemIndicator, { children: /* @__PURE__ */ f(lr, { className: "size-4" }) }) }),
        e
      ]
    }
  );
}
function VE({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ U(
    $e.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      ),
      ...t,
      children: [
        /* @__PURE__ */ f("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f($e.ItemIndicator, { children: /* @__PURE__ */ f(Kr, { className: "size-2 fill-current" }) }) }),
        e
      ]
    }
  );
}
function GE({
  inset: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    $e.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": e,
      className: w("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8"),
      ...t
    }
  );
}
function UE({
  ...e
}) {
  return /* @__PURE__ */ f(
    $e.Separator,
    {
      "data-slot": "context-menu-separator",
      className: w("bg-border -mx-1 my-1 h-px"),
      ...e
    }
  );
}
function KE({ ...e }) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: w("text-muted-foreground ml-auto text-xs tracking-widest"),
      ...e
    }
  );
}
function dS(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Vp = x.createContext({
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
}), vr = () => {
  const e = x.useContext(Vp);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
dS(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function fS() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function mS() {
  return Zl(/^Mac/);
}
function pS() {
  return Zl(/^iPhone/);
}
function Xf() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function hS() {
  return Zl(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  mS() && navigator.maxTouchPoints > 1;
}
function Gp() {
  return pS() || hS();
}
function Zl(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const gS = 24, vS = typeof window < "u" ? wm : ct;
function Qf(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const zs = typeof document < "u" && window.visualViewport;
function Jf(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Up(e) {
  for (Jf(e) && (e = e.parentElement); e && !Jf(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const bS = /* @__PURE__ */ new Set([
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
let Nr = 0, Ls;
function yS(e = {}) {
  let { isDisabled: t } = e;
  vS(() => {
    if (!t)
      return Nr++, Nr === 1 && Gp() && (Ls = wS()), () => {
        Nr--, Nr === 0 && (Ls == null || Ls());
      };
  }, [
    t
  ]);
}
function wS() {
  let e, t = 0, n = (u) => {
    e = Up(u.target), !(e === document.documentElement && e === document.body) && (t = u.changedTouches[0].pageY);
  }, r = (u) => {
    if (!e || e === document.documentElement || e === document.body) {
      u.preventDefault();
      return;
    }
    let m = u.changedTouches[0].pageY, g = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((g <= 0 && m > t || g >= h && m < t) && u.preventDefault(), t = m);
  }, a = (u) => {
    let m = u.target;
    dl(m) && m !== document.activeElement && (u.preventDefault(), m.style.transform = "translateY(-2000px)", m.focus(), requestAnimationFrame(() => {
      m.style.transform = "";
    }));
  }, o = (u) => {
    let m = u.target;
    dl(m) && (m.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      m.style.transform = "", zs && (zs.height < window.innerHeight ? requestAnimationFrame(() => {
        Zf(m);
      }) : zs.addEventListener("resize", () => Zf(m), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, l = window.pageYOffset, c = Qf(xS(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = Qf(Ln(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Ln(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Ln(document, "touchend", a, {
    passive: !1,
    capture: !0
  }), Ln(document, "focus", o, !0), Ln(window, "scroll", i));
  return () => {
    c(), d(), window.scrollTo(s, l);
  };
}
function xS(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Ln(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Zf(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Up(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, a = e.getBoundingClientRect().top, o = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom + gS;
      o > i && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function dl(e) {
  return e instanceof HTMLInputElement && !bS.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function _S(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function SS(...e) {
  return (t) => e.forEach((n) => _S(n, t));
}
function Kp(...e) {
  return M.useCallback(SS(...e), e);
}
const Xp = /* @__PURE__ */ new WeakMap();
function Ie(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([a, o]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, o);
      return;
    }
    r[a] = e.style[a], e.style[a] = o;
  }), !n && Xp.set(e, r);
}
function CS(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Xp.get(e);
  n && (e.style[t] = n[t]);
}
const ke = (e) => {
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
function Er(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let a = r.match(/^matrix3d\((.+)\)$/);
  return a ? parseFloat(a[1].split(", ")[ke(t) ? 13 : 12]) : (a = r.match(/^matrix\((.+)\)$/), a ? parseFloat(a[1].split(", ")[ke(t) ? 5 : 4]) : null);
}
function PS(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function qs(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function NS(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Oe = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, Qp = 0.4, ES = 0.25, TS = 100, Jp = 8, Yt = 16, fl = 26, $s = "vaul-dragging";
function Zp(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function OS({ defaultProp: e, onChange: t }) {
  const n = x.useState(e), [r] = n, a = x.useRef(r), o = Zp(t);
  return x.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [
    r,
    a,
    o
  ]), n;
}
function eh({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = OS({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, i = o ? e : r, s = Zp(n), l = x.useCallback((c) => {
    if (o) {
      const u = typeof c == "function" ? c(e) : c;
      u !== e && s(u);
    } else
      a(c);
  }, [
    o,
    e,
    a,
    s
  ]);
  return [
    i,
    l
  ];
}
function MS({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: a, fadeFromIndex: o, onSnapPointChange: i, direction: s = "bottom", container: l, snapToSequentialPoint: c }) {
  const [d, u] = eh({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [m, g] = x.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  x.useEffect(() => {
    function S() {
      g({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, []);
  const h = x.useMemo(() => d === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    d
  ]), b = x.useMemo(() => {
    var S;
    return (S = n == null ? void 0 : n.findIndex((R) => R === d)) != null ? S : null;
  }, [
    n,
    d
  ]), p = n && n.length > 0 && (o || o === 0) && !Number.isNaN(o) && n[o] === d || !n, v = x.useMemo(() => {
    const S = l ? {
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
    return (R = n == null ? void 0 : n.map((k) => {
      const Y = typeof k == "string";
      let I = 0;
      if (Y && (I = parseInt(k, 10)), ke(s)) {
        const T = Y ? I : m ? k * S.height : 0;
        return m ? s === "bottom" ? S.height - T : -S.height + T : T;
      }
      const F = Y ? I : m ? k * S.width : 0;
      return m ? s === "right" ? S.width - F : -S.width + F : F;
    })) != null ? R : [];
  }, [
    n,
    m,
    l
  ]), y = x.useMemo(() => b !== null ? v == null ? void 0 : v[b] : null, [
    v,
    b
  ]), _ = x.useCallback((S) => {
    var R;
    const k = (R = v == null ? void 0 : v.findIndex((Y) => Y === S)) != null ? R : null;
    i(k), Ie(r.current, {
      transition: `transform ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      transform: ke(s) ? `translate3d(0, ${S}px, 0)` : `translate3d(${S}px, 0, 0)`
    }), v && k !== v.length - 1 && o !== void 0 && k !== o && k < o ? Ie(a.current, {
      transition: `opacity ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      opacity: "0"
    }) : Ie(a.current, {
      transition: `opacity ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      opacity: "1"
    }), u(n == null ? void 0 : n[Math.max(k, 0)]);
  }, [
    r.current,
    n,
    v,
    o,
    a,
    u
  ]);
  x.useEffect(() => {
    if (d || e) {
      var S;
      const R = (S = n == null ? void 0 : n.findIndex((k) => k === e || k === d)) != null ? S : -1;
      v && R !== -1 && typeof v[R] == "number" && _(v[R]);
    }
  }, [
    d,
    e,
    n,
    v,
    _
  ]);
  function C({ draggedDistance: S, closeDrawer: R, velocity: k, dismissible: Y }) {
    if (o === void 0) return;
    const I = s === "bottom" || s === "right" ? (y ?? 0) - S : (y ?? 0) + S, F = b === o - 1, T = b === 0, W = S > 0;
    if (F && Ie(a.current, {
      transition: `opacity ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`
    }), !c && k > 2 && !W) {
      Y ? R() : _(v[0]);
      return;
    }
    if (!c && k > 2 && W && v && n) {
      _(v[n.length - 1]);
      return;
    }
    const j = v == null ? void 0 : v.reduce((z, q) => typeof z != "number" || typeof q != "number" ? z : Math.abs(q - I) < Math.abs(z - I) ? q : z), $ = ke(s) ? window.innerHeight : window.innerWidth;
    if (k > Qp && Math.abs(S) < $ * 0.4) {
      const z = W ? 1 : -1;
      if (z > 0 && h && n) {
        _(v[n.length - 1]);
        return;
      }
      if (T && z < 0 && Y && R(), b === null) return;
      _(v[b + z]);
      return;
    }
    _(j);
  }
  function D({ draggedDistance: S }) {
    if (y === null) return;
    const R = s === "bottom" || s === "right" ? y - S : y + S;
    (s === "bottom" || s === "right") && R < v[v.length - 1] || (s === "top" || s === "left") && R > v[v.length - 1] || Ie(r.current, {
      transform: ke(s) ? `translate3d(0, ${R}px, 0)` : `translate3d(${R}px, 0, 0)`
    });
  }
  function E(S, R) {
    if (!n || typeof b != "number" || !v || o === void 0) return null;
    const k = b === o - 1;
    if (b >= o && R)
      return 0;
    if (k && !R) return 1;
    if (!p && !k) return null;
    const I = k ? b + 1 : b - 1, F = k ? v[I] - v[I - 1] : v[I + 1] - v[I], T = S / Math.abs(F);
    return k ? 1 - T : T;
  }
  return {
    isLastSnapPoint: h,
    activeSnapPoint: d,
    shouldFade: p,
    getPercentageDragged: E,
    setActiveSnapPoint: u,
    activeSnapPointIndex: b,
    onRelease: C,
    onDrag: D,
    snapPointsOffset: v
  };
}
const DS = () => () => {
};
function kS() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: a } = vr(), o = x.useRef(null), i = _m(() => document.body.style.backgroundColor, []);
  function s() {
    return (window.innerWidth - fl) / window.innerWidth;
  }
  x.useEffect(() => {
    if (t && n) {
      o.current && clearTimeout(o.current);
      const l = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!l) return;
      NS(r && !a ? qs(document.body, {
        background: "black"
      }) : DS, qs(l, {
        transformOrigin: ke(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Oe.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Oe.EASE.join(",")})`
      }));
      const c = qs(l, {
        borderRadius: `${Jp}px`,
        overflow: "hidden",
        ...ke(e) ? {
          transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        c(), o.current = window.setTimeout(() => {
          i ? document.body.style.background = i : document.body.style.removeProperty("background");
        }, Oe.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    i
  ]);
}
let qn = null;
function RS({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: a, noBodyStyles: o }) {
  const [i, s] = x.useState(() => typeof window < "u" ? window.location.href : ""), l = x.useRef(0), c = x.useCallback(() => {
    if (Xf() && qn === null && e && !o) {
      qn = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: u, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-l.current}px`,
        left: `${-u}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const g = m - window.innerHeight;
        g && l.current >= m && (document.body.style.top = `${-(l.current + g)}px`);
      }), 300);
    }
  }, [
    e
  ]), d = x.useCallback(() => {
    if (Xf() && qn !== null && !o) {
      const u = -parseInt(document.body.style.top, 10), m = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, qn), window.requestAnimationFrame(() => {
        if (a && i !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(m, u);
      }), qn = null;
    }
  }, [
    i
  ]);
  return x.useEffect(() => {
    function u() {
      l.current = window.scrollY;
    }
    return u(), window.addEventListener("scroll", u), () => {
      window.removeEventListener("scroll", u);
    };
  }, []), x.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || d();
      };
  }, [
    t,
    d
  ]), x.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && c(), t || window.setTimeout(() => {
      d();
    }, 500)) : d());
  }, [
    e,
    r,
    i,
    t,
    n,
    c,
    d
  ]), {
    restorePositionSetting: d
  };
}
function IS({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: a, snapPoints: o, shouldScaleBackground: i = !1, setBackgroundColorOnScale: s = !0, closeThreshold: l = ES, scrollLockTimeout: c = TS, dismissible: d = !0, handleOnly: u = !1, fadeFromIndex: m = o && o.length - 1, activeSnapPoint: g, setActiveSnapPoint: h, fixed: b, modal: p = !0, onClose: v, nested: y, noBodyStyles: _ = !1, direction: C = "bottom", defaultOpen: D = !1, disablePreventScroll: E = !0, snapToSequentialPoint: S = !1, preventScrollRestoration: R = !1, repositionInputs: k = !0, onAnimationEnd: Y, container: I, autoFocus: F = !1 }) {
  var T, W;
  const [j = !1, $] = eh({
    defaultProp: D,
    prop: e,
    onChange: (J) => {
      t == null || t(J), !J && !y && Ve(), setTimeout(() => {
        Y == null || Y(J);
      }, Oe.DURATION * 1e3), J && !p && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), J || (document.body.style.pointerEvents = "auto");
    }
  }), [z, q] = x.useState(!1), [ee, ie] = x.useState(!1), [K, O] = x.useState(!1), N = x.useRef(null), L = x.useRef(null), A = x.useRef(null), B = x.useRef(null), H = x.useRef(null), V = x.useRef(!1), Q = x.useRef(null), ne = x.useRef(0), ae = x.useRef(!1), G = x.useRef(!D), Z = x.useRef(0), P = x.useRef(null), X = x.useRef(((T = P.current) == null ? void 0 : T.getBoundingClientRect().height) || 0), se = x.useRef(((W = P.current) == null ? void 0 : W.getBoundingClientRect().width) || 0), ce = x.useRef(0), le = x.useCallback((J) => {
    o && J === Pe.length - 1 && (L.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: oe, activeSnapPointIndex: ge, setActiveSnapPoint: De, onRelease: me, snapPointsOffset: Pe, onDrag: Fe, shouldFade: He, getPercentageDragged: Le } = MS({
    snapPoints: o,
    activeSnapPointProp: g,
    setActiveSnapPointProp: h,
    drawerRef: P,
    fadeFromIndex: m,
    overlayRef: N,
    onSnapPointChange: le,
    direction: C,
    container: I,
    snapToSequentialPoint: S
  });
  yS({
    isDisabled: !j || ee || !p || K || !z || !k || !E
  });
  const { restorePositionSetting: Ve } = RS({
    isOpen: j,
    modal: p,
    nested: y ?? !1,
    hasBeenOpened: z,
    preventScrollRestoration: R,
    noBodyStyles: _
  });
  function at() {
    return (window.innerWidth - fl) / window.innerWidth;
  }
  function ot(J) {
    var pe, ve;
    !d && !o || P.current && !P.current.contains(J.target) || (X.current = ((pe = P.current) == null ? void 0 : pe.getBoundingClientRect().height) || 0, se.current = ((ve = P.current) == null ? void 0 : ve.getBoundingClientRect().width) || 0, ie(!0), A.current = /* @__PURE__ */ new Date(), Gp() && window.addEventListener("touchend", () => V.current = !1, {
      once: !0
    }), J.target.setPointerCapture(J.pointerId), ne.current = ke(C) ? J.pageY : J.pageX);
  }
  function Ae(J, pe) {
    var ve;
    let de = J;
    const Se = (ve = window.getSelection()) == null ? void 0 : ve.toString(), te = P.current ? Er(P.current, C) : null, fe = /* @__PURE__ */ new Date();
    if (de.tagName === "SELECT" || de.hasAttribute("data-vaul-no-drag") || de.closest("[data-vaul-no-drag]"))
      return !1;
    if (C === "right" || C === "left")
      return !0;
    if (L.current && fe.getTime() - L.current.getTime() < 500)
      return !1;
    if (te !== null && (C === "bottom" ? te > 0 : te < 0))
      return !0;
    if (Se && Se.length > 0)
      return !1;
    if (H.current && fe.getTime() - H.current.getTime() < c && te === 0 || pe)
      return H.current = fe, !1;
    for (; de; ) {
      if (de.scrollHeight > de.clientHeight) {
        if (de.scrollTop !== 0)
          return H.current = /* @__PURE__ */ new Date(), !1;
        if (de.getAttribute("role") === "dialog")
          return !0;
      }
      de = de.parentNode;
    }
    return !0;
  }
  function wt(J) {
    if (P.current && ee) {
      const pe = C === "bottom" || C === "right" ? 1 : -1, ve = (ne.current - (ke(C) ? J.pageY : J.pageX)) * pe, de = ve > 0, Se = o && !d && !de;
      if (Se && ge === 0) return;
      const te = Math.abs(ve), fe = document.querySelector("[data-vaul-drawer-wrapper]"), _e = C === "bottom" || C === "top" ? X.current : se.current;
      let Ce = te / _e;
      const it = Le(te, de);
      if (it !== null && (Ce = it), Se && Ce >= 1 || !V.current && !Ae(J.target, de)) return;
      if (P.current.classList.add($s), V.current = !0, Ie(P.current, {
        transition: "none"
      }), Ie(N.current, {
        transition: "none"
      }), o && Fe({
        draggedDistance: ve
      }), de && !o) {
        const Te = PS(ve), Tt = Math.min(Te * -1, 0) * pe;
        Ie(P.current, {
          transform: ke(C) ? `translate3d(0, ${Tt}px, 0)` : `translate3d(${Tt}px, 0, 0)`
        });
        return;
      }
      const Ne = 1 - Ce;
      if ((He || m && ge === m - 1) && (r == null || r(J, Ce), Ie(N.current, {
        opacity: `${Ne}`,
        transition: "none"
      }, !0)), fe && N.current && i) {
        const Te = Math.min(at() + Ce * (1 - at()), 1), Tt = 8 - Ce * 8, Ge = Math.max(0, 14 - Ce * 14);
        Ie(fe, {
          borderRadius: `${Tt}px`,
          transform: ke(C) ? `scale(${Te}) translate3d(0, ${Ge}px, 0)` : `scale(${Te}) translate3d(${Ge}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!o) {
        const Te = te * pe;
        Ie(P.current, {
          transform: ke(C) ? `translate3d(0, ${Te}px, 0)` : `translate3d(${Te}px, 0, 0)`
        });
      }
    }
  }
  x.useEffect(() => {
    window.requestAnimationFrame(() => {
      G.current = !0;
    });
  }, []), x.useEffect(() => {
    var J;
    function pe() {
      if (!P.current || !k) return;
      const ve = document.activeElement;
      if (dl(ve) || ae.current) {
        var de;
        const Se = ((de = window.visualViewport) == null ? void 0 : de.height) || 0, te = window.innerHeight;
        let fe = te - Se;
        const _e = P.current.getBoundingClientRect().height || 0, Ce = _e > te * 0.8;
        ce.current || (ce.current = _e);
        const it = P.current.getBoundingClientRect().top;
        if (Math.abs(Z.current - fe) > 60 && (ae.current = !ae.current), o && o.length > 0 && Pe && ge) {
          const Ne = Pe[ge] || 0;
          fe += Ne;
        }
        if (Z.current = fe, _e > Se || ae.current) {
          const Ne = P.current.getBoundingClientRect().height;
          let Te = Ne;
          Ne > Se && (Te = Se - (Ce ? it : fl)), b ? P.current.style.height = `${Ne - Math.max(fe, 0)}px` : P.current.style.height = `${Math.max(Te, Se - it)}px`;
        } else fS() || (P.current.style.height = `${ce.current}px`);
        o && o.length > 0 && !ae.current ? P.current.style.bottom = "0px" : P.current.style.bottom = `${Math.max(fe, 0)}px`;
      }
    }
    return (J = window.visualViewport) == null || J.addEventListener("resize", pe), () => {
      var ve;
      return (ve = window.visualViewport) == null ? void 0 : ve.removeEventListener("resize", pe);
    };
  }, [
    ge,
    o,
    Pe
  ]);
  function ze(J) {
    Et(), v == null || v(), J || $(!1), setTimeout(() => {
      o && De(o[0]);
    }, Oe.DURATION * 1e3);
  }
  function qe() {
    if (!P.current) return;
    const J = document.querySelector("[data-vaul-drawer-wrapper]"), pe = Er(P.current, C);
    Ie(P.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`
    }), Ie(N.current, {
      transition: `opacity ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      opacity: "1"
    }), i && pe && pe > 0 && j && Ie(J, {
      borderRadius: `${Jp}px`,
      overflow: "hidden",
      ...ke(C) ? {
        transform: `scale(${at()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${at()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${Oe.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${Oe.EASE.join(",")})`
    }, !0);
  }
  function Et() {
    !ee || !P.current || (P.current.classList.remove($s), V.current = !1, ie(!1), B.current = /* @__PURE__ */ new Date());
  }
  function It(J) {
    if (!ee || !P.current) return;
    P.current.classList.remove($s), V.current = !1, ie(!1), B.current = /* @__PURE__ */ new Date();
    const pe = Er(P.current, C);
    if (!J || !Ae(J.target, !1) || !pe || Number.isNaN(pe) || A.current === null) return;
    const ve = B.current.getTime() - A.current.getTime(), de = ne.current - (ke(C) ? J.pageY : J.pageX), Se = Math.abs(de) / ve;
    if (Se > 0.05 && (O(!0), setTimeout(() => {
      O(!1);
    }, 200)), o) {
      me({
        draggedDistance: de * (C === "bottom" || C === "right" ? 1 : -1),
        closeDrawer: ze,
        velocity: Se,
        dismissible: d
      }), a == null || a(J, !0);
      return;
    }
    if (C === "bottom" || C === "right" ? de > 0 : de < 0) {
      qe(), a == null || a(J, !0);
      return;
    }
    if (Se > Qp) {
      ze(), a == null || a(J, !1);
      return;
    }
    var te;
    const fe = Math.min((te = P.current.getBoundingClientRect().height) != null ? te : 0, window.innerHeight);
    var _e;
    const Ce = Math.min((_e = P.current.getBoundingClientRect().width) != null ? _e : 0, window.innerWidth), it = C === "left" || C === "right";
    if (Math.abs(pe) >= (it ? Ce : fe) * l) {
      ze(), a == null || a(J, !1);
      return;
    }
    a == null || a(J, !0), qe();
  }
  x.useEffect(() => (j && (Ie(document.documentElement, {
    scrollBehavior: "auto"
  }), L.current = /* @__PURE__ */ new Date()), () => {
    CS(document.documentElement, "scrollBehavior");
  }), [
    j
  ]);
  function fn(J) {
    const pe = J ? (window.innerWidth - Yt) / window.innerWidth : 1, ve = J ? -Yt : 0;
    Q.current && window.clearTimeout(Q.current), Ie(P.current, {
      transition: `transform ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      transform: ke(C) ? `scale(${pe}) translate3d(0, ${ve}px, 0)` : `scale(${pe}) translate3d(${ve}px, 0, 0)`
    }), !J && P.current && (Q.current = setTimeout(() => {
      const de = Er(P.current, C);
      Ie(P.current, {
        transition: "none",
        transform: ke(C) ? `translate3d(0, ${de}px, 0)` : `translate3d(${de}px, 0, 0)`
      });
    }, 500));
  }
  function kn(J, pe) {
    if (pe < 0) return;
    const ve = (window.innerWidth - Yt) / window.innerWidth, de = ve + pe * (1 - ve), Se = -Yt + pe * Yt;
    Ie(P.current, {
      transform: ke(C) ? `scale(${de}) translate3d(0, ${Se}px, 0)` : `scale(${de}) translate3d(${Se}px, 0, 0)`,
      transition: "none"
    });
  }
  function Ht(J, pe) {
    const ve = ke(C) ? window.innerHeight : window.innerWidth, de = pe ? (ve - Yt) / ve : 1, Se = pe ? -Yt : 0;
    pe && Ie(P.current, {
      transition: `transform ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      transform: ke(C) ? `scale(${de}) translate3d(0, ${Se}px, 0)` : `scale(${de}) translate3d(${Se}px, 0, 0)`
    });
  }
  return x.useEffect(() => {
    p || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    p
  ]), /* @__PURE__ */ x.createElement(we.Root, {
    defaultOpen: D,
    onOpenChange: (J) => {
      !d && !J || (J ? q(!0) : ze(!0), $(J));
    },
    open: j
  }, /* @__PURE__ */ x.createElement(Vp.Provider, {
    value: {
      activeSnapPoint: oe,
      snapPoints: o,
      setActiveSnapPoint: De,
      drawerRef: P,
      overlayRef: N,
      onOpenChange: t,
      onPress: ot,
      onRelease: It,
      onDrag: wt,
      dismissible: d,
      shouldAnimate: G,
      handleOnly: u,
      isOpen: j,
      isDragging: ee,
      shouldFade: He,
      closeDrawer: ze,
      onNestedDrag: kn,
      onNestedOpenChange: fn,
      onNestedRelease: Ht,
      keyboardIsOpen: ae,
      modal: p,
      snapPointsOffset: Pe,
      activeSnapPointIndex: ge,
      direction: C,
      shouldScaleBackground: i,
      setBackgroundColorOnScale: s,
      noBodyStyles: _,
      container: I,
      autoFocus: F
    }
  }, n));
}
const th = /* @__PURE__ */ x.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: a, shouldFade: o, isOpen: i, modal: s, shouldAnimate: l } = vr(), c = Kp(t, n), d = r && r.length > 0;
  if (!s)
    return null;
  const u = x.useCallback((m) => a(m), [
    a
  ]);
  return /* @__PURE__ */ x.createElement(we.Overlay, {
    onMouseUp: u,
    ref: c,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": i && d ? "true" : "false",
    "data-vaul-snap-points-overlay": i && o ? "true" : "false",
    "data-vaul-animate": l != null && l.current ? "true" : "false",
    ...e
  });
});
th.displayName = "Drawer.Overlay";
const nh = /* @__PURE__ */ x.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, a) {
  const { drawerRef: o, onPress: i, onRelease: s, onDrag: l, keyboardIsOpen: c, snapPointsOffset: d, activeSnapPointIndex: u, modal: m, isOpen: g, direction: h, snapPoints: b, container: p, handleOnly: v, shouldAnimate: y, autoFocus: _ } = vr(), [C, D] = x.useState(!1), E = Kp(a, o), S = x.useRef(null), R = x.useRef(null), k = x.useRef(!1), Y = b && b.length > 0;
  kS();
  const I = (T, W, j = 0) => {
    if (k.current) return !0;
    const $ = Math.abs(T.y), z = Math.abs(T.x), q = z > $, ee = [
      "bottom",
      "right"
    ].includes(W) ? 1 : -1;
    if (W === "left" || W === "right") {
      if (!(T.x * ee < 0) && z >= 0 && z <= j)
        return q;
    } else if (!(T.y * ee < 0) && $ >= 0 && $ <= j)
      return !q;
    return k.current = !0, !0;
  };
  x.useEffect(() => {
    Y && window.requestAnimationFrame(() => {
      D(!0);
    });
  }, []);
  function F(T) {
    S.current = null, k.current = !1, s(T);
  }
  return /* @__PURE__ */ x.createElement(we.Content, {
    "data-vaul-drawer-direction": h,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": C ? "true" : "false",
    "data-vaul-snap-points": g && Y ? "true" : "false",
    "data-vaul-custom-container": p ? "true" : "false",
    "data-vaul-animate": y != null && y.current ? "true" : "false",
    ...r,
    ref: E,
    style: d && d.length > 0 ? {
      "--snap-point-height": `${d[u ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (T) => {
      v || (r.onPointerDown == null || r.onPointerDown.call(r, T), S.current = {
        x: T.pageX,
        y: T.pageY
      }, i(T));
    },
    onOpenAutoFocus: (T) => {
      n == null || n(T), _ || T.preventDefault();
    },
    onPointerDownOutside: (T) => {
      if (e == null || e(T), !m || T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      c.current && (c.current = !1);
    },
    onFocusOutside: (T) => {
      if (!m) {
        T.preventDefault();
        return;
      }
    },
    onPointerMove: (T) => {
      if (R.current = T, v || (r.onPointerMove == null || r.onPointerMove.call(r, T), !S.current)) return;
      const W = T.pageY - S.current.y, j = T.pageX - S.current.x, $ = T.pointerType === "touch" ? 10 : 2;
      I({
        x: j,
        y: W
      }, h, $) ? l(T) : (Math.abs(j) > $ || Math.abs(W) > $) && (S.current = null);
    },
    onPointerUp: (T) => {
      r.onPointerUp == null || r.onPointerUp.call(r, T), S.current = null, k.current = !1, s(T);
    },
    onPointerOut: (T) => {
      r.onPointerOut == null || r.onPointerOut.call(r, T), F(R.current);
    },
    onContextMenu: (T) => {
      r.onContextMenu == null || r.onContextMenu.call(r, T), R.current && F(R.current);
    }
  });
});
nh.displayName = "Drawer.Content";
const AS = 250, zS = 120, LS = /* @__PURE__ */ x.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: a, isDragging: o, snapPoints: i, activeSnapPoint: s, setActiveSnapPoint: l, dismissible: c, handleOnly: d, isOpen: u, onPress: m, onDrag: g } = vr(), h = x.useRef(null), b = x.useRef(!1);
  function p() {
    if (b.current) {
      _();
      return;
    }
    window.setTimeout(() => {
      v();
    }, zS);
  }
  function v() {
    if (o || e || b.current) {
      _();
      return;
    }
    if (_(), !i || i.length === 0) {
      c || a();
      return;
    }
    if (s === i[i.length - 1] && c) {
      a();
      return;
    }
    const D = i.findIndex((S) => S === s);
    if (D === -1) return;
    const E = i[D + 1];
    l(E);
  }
  function y() {
    h.current = window.setTimeout(() => {
      b.current = !0;
    }, AS);
  }
  function _() {
    h.current && window.clearTimeout(h.current), b.current = !1;
  }
  return /* @__PURE__ */ x.createElement("div", {
    onClick: p,
    onPointerCancel: _,
    onPointerDown: (C) => {
      d && m(C), y();
    },
    onPointerMove: (C) => {
      d && g(C);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": u ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ x.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
LS.displayName = "Drawer.Handle";
function qS(e) {
  const t = vr(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ x.createElement(we.Portal, {
    container: n,
    ...r
  });
}
const Ft = {
  Root: IS,
  Content: nh,
  Overlay: th,
  Trigger: we.Trigger,
  Portal: qS,
  Close: we.Close,
  Title: we.Title,
  Description: we.Description
};
function XE({ ...e }) {
  return /* @__PURE__ */ f(Ft.Root, { "data-slot": "drawer", ...e });
}
function QE({ ...e }) {
  return /* @__PURE__ */ f(Ft.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function $S({ ...e }) {
  return /* @__PURE__ */ f(Ft.Portal, { "data-slot": "drawer-portal", ...e });
}
function JE({ ...e }) {
  return /* @__PURE__ */ f(Ft.Close, { "data-slot": "drawer-close", ...e });
}
function BS({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Ft.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: w(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function ZE({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U($S, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ f(BS, {}),
    /* @__PURE__ */ U(
      Ft.Content,
      {
        "data-slot": "drawer-content",
        className: w(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          e
        ),
        ...n,
        children: [
          /* @__PURE__ */ f("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function eT({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "drawer-header",
      className: w("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function tT({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "drawer-footer",
      className: w("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function nT({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    Ft.Title,
    {
      "data-slot": "drawer-title",
      className: w("text-foreground font-semibold", e),
      ...t
    }
  );
}
function rT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Ft.Description,
    {
      "data-slot": "drawer-description",
      className: w("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function aT({ ...e }) {
  return /* @__PURE__ */ f(Be.Root, { "data-slot": "dropdown-menu", ...e });
}
function oT({
  ...e
}) {
  return /* @__PURE__ */ f(Be.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function iT({
  ...e
}) {
  return /* @__PURE__ */ f(Be.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function sT({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ f(Be.Portal, { children: /* @__PURE__ */ f(
    Be.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n
    }
  ) });
}
function lT({ ...e }) {
  return /* @__PURE__ */ f(Be.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function uT({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ f(
    Be.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: w(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function cT({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ U(
    Be.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ f("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f(Be.ItemIndicator, { children: /* @__PURE__ */ f(lr, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function dT({
  ...e
}) {
  return /* @__PURE__ */ f(Be.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function fT({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    Be.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ f("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f(Be.ItemIndicator, { children: /* @__PURE__ */ f(Kr, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function mT({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    Be.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: w("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...n
    }
  );
}
function pT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Be.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: w("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function hT({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: w("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function gT({ ...e }) {
  return /* @__PURE__ */ f(Be.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function vT({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ U(
    Be.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: w(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f(Ur, { className: "ml-auto size-4" })
      ]
    }
  );
}
function bT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Be.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
var jS = (e) => e.type === "checkbox", FS = (e) => e instanceof Date, rh = (e) => e == null;
const HS = (e) => typeof e == "object";
var br = (e) => !rh(e) && !Array.isArray(e) && HS(e) && !FS(e), WS = (e) => br(e) && e.target ? jS(e.target) ? e.target.checked : e.target.value : e, YS = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, VS = (e, t) => e.has(YS(t)), GS = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return br(t) && t.hasOwnProperty("isPrototypeOf");
}, US = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ah(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(US && (e instanceof Blob || r)) && (n || br(e)))
    if (t = n ? [] : {}, !n && !GS(e))
      t = e;
    else
      for (const a in e)
        e.hasOwnProperty(a) && (t[a] = ah(e[a]));
  else
    return e;
  return t;
}
var oh = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ml = (e) => e === void 0, Xe = (e, t, n) => {
  if (!t || !br(e))
    return n;
  const r = oh(t.split(/[,[\].]+?/)).reduce((a, o) => rh(a) ? a : a[o], e);
  return ml(r) || r === e ? ml(e[t]) ? n : e[t] : r;
}, Bs = (e) => typeof e == "boolean", KS = (e) => /^\w*$/.test(e), XS = (e) => oh(e.replace(/["|']|\]/g, "").split(/\.|\[/)), em = (e, t, n) => {
  let r = -1;
  const a = KS(t) ? [t] : XS(t), o = a.length, i = o - 1;
  for (; ++r < o; ) {
    const s = a[r];
    let l = n;
    if (r !== i) {
      const c = e[s];
      l = br(c) || Array.isArray(c) ? c : isNaN(+a[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = l, e = e[s];
  }
};
const tm = {
  BLUR: "blur",
  CHANGE: "change"
}, nm = {
  all: "all"
}, ih = x.createContext(null), ma = () => x.useContext(ih), QS = (e) => {
  const { children: t, ...n } = e;
  return x.createElement(ih.Provider, { value: n }, t);
};
var JS = (e, t, n, r = !0) => {
  const a = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(a, o, {
      get: () => {
        const i = o;
        return t._proxyFormState[i] !== nm.all && (t._proxyFormState[i] = !r || nm.all), n && (n[i] = !0), e[i];
      }
    });
  return a;
};
function sh(e) {
  const t = ma(), { control: n = t.control, disabled: r, name: a, exact: o } = e || {}, [i, s] = x.useState(n._formState), l = x.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), c = x.useRef(a);
  return c.current = a, x.useEffect(() => n._subscribe({
    name: c.current,
    formState: l.current,
    exact: o,
    callback: (d) => {
      !r && s({
        ...n._formState,
        ...d
      });
    }
  }), [n, r, o]), x.useEffect(() => {
    l.current.isValid && n._setValid(!0);
  }, [n]), x.useMemo(() => JS(i, n, l.current, !1), [i, n]);
}
var ZS = (e) => typeof e == "string", eC = (e, t, n, r, a) => ZS(e) ? Xe(n, e, a) : Array.isArray(e) ? e.map((o) => Xe(n, o)) : n;
function tC(e) {
  const t = ma(), { control: n = t.control, name: r, defaultValue: a, disabled: o, exact: i } = e || {}, s = x.useRef(r), l = x.useRef(a);
  s.current = r, x.useEffect(() => n._subscribe({
    name: s.current,
    formState: {
      values: !0
    },
    exact: i,
    callback: (u) => !o && d(eC(s.current, n._names, u.values || n._formValues, !1, l.current))
  }), [n, o, i]);
  const [c, d] = x.useState(n._getWatch(r, a));
  return x.useEffect(() => n._removeUnmounted()), c;
}
function nC(e) {
  const t = ma(), { name: n, disabled: r, control: a = t.control, shouldUnregister: o } = e, i = VS(a._names.array, n), s = tC({
    control: a,
    name: n,
    defaultValue: Xe(a._formValues, n, Xe(a._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = sh({
    control: a,
    name: n,
    exact: !0
  }), c = x.useRef(e), d = x.useRef(a.register(n, {
    ...e.rules,
    value: s,
    ...Bs(e.disabled) ? { disabled: e.disabled } : {}
  })), u = x.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Xe(l.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Xe(l.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Xe(l.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Xe(l.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => Xe(l.errors, n)
    }
  }), [l, n]), m = x.useCallback((p) => d.current.onChange({
    target: {
      value: WS(p),
      name: n
    },
    type: tm.CHANGE
  }), [n]), g = x.useCallback(() => d.current.onBlur({
    target: {
      value: Xe(a._formValues, n),
      name: n
    },
    type: tm.BLUR
  }), [n, a._formValues]), h = x.useCallback((p) => {
    const v = Xe(a._fields, n);
    v && p && (v._f.ref = {
      focus: () => p.focus(),
      select: () => p.select(),
      setCustomValidity: (y) => p.setCustomValidity(y),
      reportValidity: () => p.reportValidity()
    });
  }, [a._fields, n]), b = x.useMemo(() => ({
    name: n,
    value: s,
    ...Bs(r) || l.disabled ? { disabled: l.disabled || r } : {},
    onChange: m,
    onBlur: g,
    ref: h
  }), [n, r, l.disabled, m, g, h, s]);
  return x.useEffect(() => {
    const p = a._options.shouldUnregister || o;
    a.register(n, {
      ...c.current.rules,
      ...Bs(c.current.disabled) ? { disabled: c.current.disabled } : {}
    });
    const v = (y, _) => {
      const C = Xe(a._fields, y);
      C && C._f && (C._f.mount = _);
    };
    if (v(n, !0), p) {
      const y = ah(Xe(a._options.defaultValues, n));
      em(a._defaultValues, n, y), ml(Xe(a._formValues, n)) && em(a._formValues, n, y);
    }
    return !i && a.register(n), () => {
      (i ? p && !a._state.action : p) ? a.unregister(n) : v(n, !1);
    };
  }, [n, a, i, o]), x.useEffect(() => {
    a._setDisabledField({
      disabled: r,
      name: n
    });
  }, [r, n, a]), x.useMemo(() => ({
    field: b,
    formState: l,
    fieldState: u
  }), [b, l, u]);
}
const rC = (e) => e.render(nC(e));
function aC({
  internalClassName: e,
  // Spacing props
  m: t,
  mt: n,
  mr: r,
  mb: a,
  ml: o,
  mx: i,
  my: s,
  p: l,
  pt: c,
  pr: d,
  pb: u,
  pl: m,
  px: g,
  py: h,
  ...b
}) {
  return /* @__PURE__ */ f(
    pg.Root,
    {
      "data-slot": "label",
      className: w(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        Re({ m: t, mt: n, mr: r, mb: a, ml: o, mx: i, my: s, p: l, pt: c, pr: d, pb: u, pl: m, px: g, py: h }),
        e
      ),
      ...b
    }
  );
}
const yT = QS, lh = M.createContext({}), wT = ({
  ...e
}) => /* @__PURE__ */ f(lh.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f(rC, { ...e }) }), pa = () => {
  const e = M.useContext(lh), t = M.useContext(uh), { getFieldState: n } = ma(), r = sh({ name: e.name }), a = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: o } = t;
  return {
    id: o,
    name: e.name,
    formItemId: `${o}-form-item`,
    formDescriptionId: `${o}-form-item-description`,
    formMessageId: `${o}-form-item-message`,
    ...a
  };
}, uh = M.createContext({});
function xT({ internalClassName: e, ...t }) {
  const n = M.useId();
  return /* @__PURE__ */ f(uh.Provider, { value: { id: n }, children: /* @__PURE__ */ f("div", { "data-slot": "form-item", className: w("grid gap-2", e), ...t }) });
}
function _T({ internalClassName: e, ...t }) {
  const { error: n, formItemId: r } = pa();
  return /* @__PURE__ */ f(
    aC,
    {
      "data-slot": "form-label",
      "data-error": !!n,
      internalClassName: w("data-[error=true]:text-destructive", e),
      htmlFor: r,
      ...t
    }
  );
}
function ST({ ...e }) {
  const { error: t, formItemId: n, formDescriptionId: r, formMessageId: a } = pa();
  return /* @__PURE__ */ f(
    rt,
    {
      "data-slot": "form-control",
      id: n,
      "aria-describedby": t ? `${r} ${a}` : `${r}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function CT({ internalClassName: e, ...t }) {
  const { formDescriptionId: n } = pa();
  return /* @__PURE__ */ f(
    "p",
    {
      "data-slot": "form-description",
      id: n,
      className: w("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function PT({ internalClassName: e, ...t }) {
  const { error: n, formMessageId: r } = pa(), a = n ? String((n == null ? void 0 : n.message) ?? "") : t.children;
  return a ? /* @__PURE__ */ f(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: w("text-destructive text-sm", e),
      ...t,
      children: a
    }
  ) : null;
}
function NT({ ...e }) {
  return /* @__PURE__ */ f(kr.Root, { "data-slot": "hover-card", ...e });
}
function ET({ ...e }) {
  return /* @__PURE__ */ f(kr.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function TT({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ f(kr.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ f(
    kr.Content,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: n,
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
var oC = Object.defineProperty, iC = Object.defineProperties, sC = Object.getOwnPropertyDescriptors, Wr = Object.getOwnPropertySymbols, ch = Object.prototype.hasOwnProperty, dh = Object.prototype.propertyIsEnumerable, rm = (e, t, n) => t in e ? oC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lC = (e, t) => {
  for (var n in t || (t = {})) ch.call(t, n) && rm(e, n, t[n]);
  if (Wr) for (var n of Wr(t)) dh.call(t, n) && rm(e, n, t[n]);
  return e;
}, uC = (e, t) => iC(e, sC(t)), cC = (e, t) => {
  var n = {};
  for (var r in e) ch.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Wr) for (var r of Wr(e)) t.indexOf(r) < 0 && dh.call(e, r) && (n[r] = e[r]);
  return n;
};
function dC(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function fC(e) {
  let t = M.useRef();
  return M.useEffect(() => {
    t.current = e;
  }), t.current;
}
var mC = 18, fh = 40, pC = `${fh}px`, hC = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function gC({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let [a, o] = M.useState(!1), [i, s] = M.useState(!1), [l, c] = M.useState(!1), d = M.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && a && i, [a, i, n]), u = M.useCallback(() => {
    let m = e.current, g = t.current;
    if (!m || !g || l || n === "none") return;
    let h = m, b = h.getBoundingClientRect().left + h.offsetWidth, p = h.getBoundingClientRect().top + h.offsetHeight / 2, v = b - mC, y = p;
    document.querySelectorAll(hC).length === 0 && document.elementFromPoint(v, y) === m || (o(!0), c(!0));
  }, [e, t, l, n]);
  return M.useEffect(() => {
    let m = e.current;
    if (!m || n === "none") return;
    function g() {
      let b = window.innerWidth - m.getBoundingClientRect().right;
      s(b >= fh);
    }
    g();
    let h = setInterval(g, 1e3);
    return () => {
      clearInterval(h);
    };
  }, [e, n]), M.useEffect(() => {
    let m = r || document.activeElement === t.current;
    if (n === "none" || !m) return;
    let g = setTimeout(u, 0), h = setTimeout(u, 2e3), b = setTimeout(u, 5e3), p = setTimeout(() => {
      c(!0);
    }, 6e3);
    return () => {
      clearTimeout(g), clearTimeout(h), clearTimeout(b), clearTimeout(p);
    };
  }, [t, r, n, u]), { hasPWMBadge: a, willPushPWMBadge: d, PWM_BADGE_SPACE_WIDTH: pC };
}
var mh = M.createContext({}), ph = M.forwardRef((e, t) => {
  var n = e, { value: r, onChange: a, maxLength: o, textAlign: i = "left", pattern: s, placeholder: l, inputMode: c = "numeric", onComplete: d, pushPasswordManagerStrategy: u = "increase-width", pasteTransformer: m, containerClassName: g, noScriptCSSFallback: h = vC, render: b, children: p } = n, v = cC(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), y, _, C, D, E;
  let [S, R] = M.useState(typeof v.defaultValue == "string" ? v.defaultValue : ""), k = r ?? S, Y = fC(k), I = M.useCallback((P) => {
    a == null || a(P), R(P);
  }, [a]), F = M.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), T = M.useRef(null), W = M.useRef(null), j = M.useRef({ value: k, onChange: I, isIOS: typeof window < "u" && ((_ = (y = window == null ? void 0 : window.CSS) == null ? void 0 : y.supports) == null ? void 0 : _.call(y, "-webkit-touch-callout", "none")) }), $ = M.useRef({ prev: [(C = T.current) == null ? void 0 : C.selectionStart, (D = T.current) == null ? void 0 : D.selectionEnd, (E = T.current) == null ? void 0 : E.selectionDirection] });
  M.useImperativeHandle(t, () => T.current, []), M.useEffect(() => {
    let P = T.current, X = W.current;
    if (!P || !X) return;
    j.current.value !== P.value && j.current.onChange(P.value), $.current.prev = [P.selectionStart, P.selectionEnd, P.selectionDirection];
    function se() {
      if (document.activeElement !== P) {
        O(null), L(null);
        return;
      }
      let oe = P.selectionStart, ge = P.selectionEnd, De = P.selectionDirection, me = P.maxLength, Pe = P.value, Fe = $.current.prev, He = -1, Le = -1, Ve;
      if (Pe.length !== 0 && oe !== null && ge !== null) {
        let wt = oe === ge, ze = oe === Pe.length && Pe.length < me;
        if (wt && !ze) {
          let qe = oe;
          if (qe === 0) He = 0, Le = 1, Ve = "forward";
          else if (qe === me) He = qe - 1, Le = qe, Ve = "backward";
          else if (me > 1 && Pe.length > 1) {
            let Et = 0;
            if (Fe[0] !== null && Fe[1] !== null) {
              Ve = qe < Fe[1] ? "backward" : "forward";
              let It = Fe[0] === Fe[1] && Fe[0] < me;
              Ve === "backward" && !It && (Et = -1);
            }
            He = Et + qe, Le = Et + qe + 1;
          }
        }
        He !== -1 && Le !== -1 && He !== Le && T.current.setSelectionRange(He, Le, Ve);
      }
      let at = He !== -1 ? He : oe, ot = Le !== -1 ? Le : ge, Ae = Ve ?? De;
      O(at), L(ot), $.current.prev = [at, ot, Ae];
    }
    if (document.addEventListener("selectionchange", se, { capture: !0 }), se(), document.activeElement === P && ie(!0), !document.getElementById("input-otp-style")) {
      let oe = document.createElement("style");
      if (oe.id = "input-otp-style", document.head.appendChild(oe), oe.sheet) {
        let ge = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        $n(oe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), $n(oe.sheet, `[data-input-otp]:autofill { ${ge} }`), $n(oe.sheet, `[data-input-otp]:-webkit-autofill { ${ge} }`), $n(oe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), $n(oe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let ce = () => {
      X && X.style.setProperty("--root-height", `${P.clientHeight}px`);
    };
    ce();
    let le = new ResizeObserver(ce);
    return le.observe(P), () => {
      document.removeEventListener("selectionchange", se, { capture: !0 }), le.disconnect();
    };
  }, []);
  let [z, q] = M.useState(!1), [ee, ie] = M.useState(!1), [K, O] = M.useState(null), [N, L] = M.useState(null);
  M.useEffect(() => {
    dC(() => {
      var P, X, se, ce;
      (P = T.current) == null || P.dispatchEvent(new Event("input"));
      let le = (X = T.current) == null ? void 0 : X.selectionStart, oe = (se = T.current) == null ? void 0 : se.selectionEnd, ge = (ce = T.current) == null ? void 0 : ce.selectionDirection;
      le !== null && oe !== null && (O(le), L(oe), $.current.prev = [le, oe, ge]);
    });
  }, [k, ee]), M.useEffect(() => {
    Y !== void 0 && k !== Y && Y.length < o && k.length === o && (d == null || d(k));
  }, [o, d, Y, k]);
  let A = gC({ containerRef: W, inputRef: T, pushPasswordManagerStrategy: u, isFocused: ee }), B = M.useCallback((P) => {
    let X = P.currentTarget.value.slice(0, o);
    if (X.length > 0 && F && !F.test(X)) {
      P.preventDefault();
      return;
    }
    typeof Y == "string" && X.length < Y.length && document.dispatchEvent(new Event("selectionchange")), I(X);
  }, [o, I, Y, F]), H = M.useCallback(() => {
    var P;
    if (T.current) {
      let X = Math.min(T.current.value.length, o - 1), se = T.current.value.length;
      (P = T.current) == null || P.setSelectionRange(X, se), O(X), L(se);
    }
    ie(!0);
  }, [o]), V = M.useCallback((P) => {
    var X, se;
    let ce = T.current;
    if (!m && (!j.current.isIOS || !P.clipboardData || !ce)) return;
    let le = P.clipboardData.getData("text/plain"), oe = m ? m(le) : le;
    P.preventDefault();
    let ge = (X = T.current) == null ? void 0 : X.selectionStart, De = (se = T.current) == null ? void 0 : se.selectionEnd, me = (ge !== De ? k.slice(0, ge) + oe + k.slice(De) : k.slice(0, ge) + oe + k.slice(ge)).slice(0, o);
    if (me.length > 0 && F && !F.test(me)) return;
    ce.value = me, I(me);
    let Pe = Math.min(me.length, o - 1), Fe = me.length;
    ce.setSelectionRange(Pe, Fe), O(Pe), L(Fe);
  }, [o, I, F, k]), Q = M.useMemo(() => ({ position: "relative", cursor: v.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [v.disabled]), ne = M.useMemo(() => ({ position: "absolute", inset: 0, width: A.willPushPWMBadge ? `calc(100% + ${A.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: A.willPushPWMBadge ? `inset(0 ${A.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [A.PWM_BADGE_SPACE_WIDTH, A.willPushPWMBadge, i]), ae = M.useMemo(() => M.createElement("input", uC(lC({ autoComplete: v.autoComplete || "one-time-code" }, v), { "data-input-otp": !0, "data-input-otp-placeholder-shown": k.length === 0 || void 0, "data-input-otp-mss": K, "data-input-otp-mse": N, inputMode: c, pattern: F == null ? void 0 : F.source, "aria-placeholder": l, style: ne, maxLength: o, value: k, ref: T, onPaste: (P) => {
    var X;
    V(P), (X = v.onPaste) == null || X.call(v, P);
  }, onChange: B, onMouseOver: (P) => {
    var X;
    q(!0), (X = v.onMouseOver) == null || X.call(v, P);
  }, onMouseLeave: (P) => {
    var X;
    q(!1), (X = v.onMouseLeave) == null || X.call(v, P);
  }, onFocus: (P) => {
    var X;
    H(), (X = v.onFocus) == null || X.call(v, P);
  }, onBlur: (P) => {
    var X;
    ie(!1), (X = v.onBlur) == null || X.call(v, P);
  } })), [B, H, V, c, ne, o, N, K, v, F == null ? void 0 : F.source, k]), G = M.useMemo(() => ({ slots: Array.from({ length: o }).map((P, X) => {
    var se;
    let ce = ee && K !== null && N !== null && (K === N && X === K || X >= K && X < N), le = k[X] !== void 0 ? k[X] : null, oe = k[0] !== void 0 ? null : (se = l == null ? void 0 : l[X]) != null ? se : null;
    return { char: le, placeholderChar: oe, isActive: ce, hasFakeCaret: ce && le === null };
  }), isFocused: ee, isHovering: !v.disabled && z }), [ee, z, o, N, K, v.disabled, k]), Z = M.useMemo(() => b ? b(G) : M.createElement(mh.Provider, { value: G }, p), [p, G, b]);
  return M.createElement(M.Fragment, null, h !== null && M.createElement("noscript", null, M.createElement("style", null, h)), M.createElement("div", { ref: W, "data-input-otp-container": !0, style: Q, className: g }, Z, M.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, ae)));
});
ph.displayName = "Input";
function $n(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var vC = `
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
function OT({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    ph,
    {
      "data-slot": "input-otp",
      containerClassName: w("flex items-center gap-2 has-disabled:opacity-50"),
      className: w("disabled:cursor-not-allowed"),
      ...t,
      children: e
    }
  );
}
function MT({ ...e }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "input-otp-group",
      className: w("flex items-center gap-1"),
      ...e
    }
  );
}
function DT({
  index: e,
  ...t
}) {
  const n = M.useContext(mh), { char: r, hasFakeCaret: a, isActive: o } = (n == null ? void 0 : n.slots[e]) ?? {};
  return /* @__PURE__ */ U(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": o,
      className: w(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm bg-input-background transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      ),
      ...t,
      children: [
        r,
        a && /* @__PURE__ */ f("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ f("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function kT({ ...e }) {
  return /* @__PURE__ */ f("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ f(og, {}) });
}
function RT({ ...e }) {
  return /* @__PURE__ */ f(
    je.Root,
    {
      "data-slot": "menubar",
      className: w(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs"
      ),
      ...e
    }
  );
}
function IT({ ...e }) {
  return /* @__PURE__ */ f(je.Menu, { "data-slot": "menubar-menu", ...e });
}
function AT({ ...e }) {
  return /* @__PURE__ */ f(je.Group, { "data-slot": "menubar-group", ...e });
}
function bC({ ...e }) {
  return /* @__PURE__ */ f(je.Portal, { "data-slot": "menubar-portal", ...e });
}
function zT({ ...e }) {
  return /* @__PURE__ */ f(je.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function LT({
  ...e
}) {
  return /* @__PURE__ */ f(
    je.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: w(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none"
      ),
      ...e
    }
  );
}
function qT({
  align: e = "start",
  alignOffset: t = -4,
  sideOffset: n = 8,
  ...r
}) {
  return /* @__PURE__ */ f(bC, { children: /* @__PURE__ */ f(
    je.Content,
    {
      "data-slot": "menubar-content",
      align: e,
      alignOffset: t,
      sideOffset: n,
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md"
      ),
      ...r
    }
  ) });
}
function $T({
  inset: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ f(
    je.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": e,
      "data-variant": t,
      className: w(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      ),
      ...n
    }
  );
}
function BT({
  children: e,
  checked: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    je.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      ),
      checked: t,
      ...n,
      children: [
        /* @__PURE__ */ f("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f(je.ItemIndicator, { children: /* @__PURE__ */ f(lr, { className: "size-4" }) }) }),
        e
      ]
    }
  );
}
function jT({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ U(
    je.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      ),
      ...t,
      children: [
        /* @__PURE__ */ f("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f(je.ItemIndicator, { children: /* @__PURE__ */ f(Kr, { className: "size-2 fill-current" }) }) }),
        e
      ]
    }
  );
}
function FT({
  inset: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    je.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": e,
      className: w("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8"),
      ...t
    }
  );
}
function HT({
  ...e
}) {
  return /* @__PURE__ */ f(
    je.Separator,
    {
      "data-slot": "menubar-separator",
      className: w("bg-border -mx-1 my-1 h-px"),
      ...e
    }
  );
}
function WT({ ...e }) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: w("text-muted-foreground ml-auto text-xs tracking-widest"),
      ...e
    }
  );
}
function YT({ ...e }) {
  return /* @__PURE__ */ f(je.Sub, { "data-slot": "menubar-sub", ...e });
}
function VT({
  inset: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    je.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": e,
      className: w(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8"
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ f(Ur, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function GT({
  ...e
}) {
  return /* @__PURE__ */ f(
    je.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg"
      ),
      ...e
    }
  );
}
function UT({
  children: e,
  viewport: t = !0,
  ...n
}) {
  return /* @__PURE__ */ U(
    Bt.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": t,
      className: w(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center"
      ),
      ...n,
      children: [
        e,
        t && /* @__PURE__ */ f(wC, {})
      ]
    }
  );
}
function KT({
  ...e
}) {
  return /* @__PURE__ */ f(
    Bt.List,
    {
      "data-slot": "navigation-menu-list",
      className: w("group flex flex-1 list-none items-center justify-center gap-1"),
      ...e
    }
  );
}
function XT({
  ...e
}) {
  return /* @__PURE__ */ f(
    Bt.Item,
    {
      "data-slot": "navigation-menu-item",
      className: w("relative"),
      ...e
    }
  );
}
const yC = qt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function QT({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ U(
    Bt.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: w(yC(), "group"),
      ...t,
      children: [
        e,
        " ",
        /* @__PURE__ */ f(
          Gr,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function JT({
  ...e
}) {
  return /* @__PURE__ */ f(
    Bt.Content,
    {
      "data-slot": "navigation-menu-content",
      className: w(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none"
      ),
      ...e
    }
  );
}
function wC({
  ...e
}) {
  return /* @__PURE__ */ f("div", { className: w("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ f(
    Bt.Viewport,
    {
      "data-slot": "navigation-menu-viewport",
      className: w(
        "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]"
      ),
      ...e
    }
  ) });
}
function ZT({
  ...e
}) {
  return /* @__PURE__ */ f(
    Bt.Link,
    {
      "data-slot": "navigation-menu-link",
      className: w(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4"
      ),
      ...e
    }
  );
}
function eO({
  ...e
}) {
  return /* @__PURE__ */ f(
    Bt.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: w(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden"
      ),
      ...e,
      children: /* @__PURE__ */ f("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function tO({ ...e }) {
  return /* @__PURE__ */ f(Xn.Root, { "data-slot": "popover", ...e });
}
function nO({ ...e }) {
  return /* @__PURE__ */ f(Xn.Trigger, { "data-slot": "popover-trigger", ...e });
}
function rO({
  align: e = "center",
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ f(Xn.Portal, { children: /* @__PURE__ */ f(
    Xn.Content,
    {
      "data-slot": "popover-content",
      align: e,
      sideOffset: t,
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden"
      ),
      ...n
    }
  ) });
}
function aO({ ...e }) {
  return /* @__PURE__ */ f(Xn.Anchor, { "data-slot": "popover-anchor", ...e });
}
function oO({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    su.Root,
    {
      "data-slot": "progress",
      className: w("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full"),
      ...t,
      children: /* @__PURE__ */ f(
        su.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (e || 0)}%)` }
        }
      )
    }
  );
}
function iO({
  ...e
}) {
  return /* @__PURE__ */ f(
    Ws.Root,
    {
      "data-slot": "radio-group",
      className: w("grid gap-3"),
      ...e
    }
  );
}
function sO({
  ...e
}) {
  return /* @__PURE__ */ f(
    Ws.Item,
    {
      "data-slot": "radio-group-item",
      className: w(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
      ),
      ...e,
      children: /* @__PURE__ */ f(
        Ws.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ f(Kr, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
const {
  createElement: Mn,
  createContext: xC,
  forwardRef: hh,
  useCallback: Ke,
  useContext: gh,
  useEffect: Xt,
  useImperativeHandle: vh,
  useLayoutEffect: _C,
  useMemo: SC,
  useRef: Je,
  useState: _n
} = M, am = M[`useId${Math.random()}`.slice(0, 5)], CC = _C, ha = xC(null);
ha.displayName = "PanelGroupContext";
const Qt = CC, PC = typeof am == "function" ? am : () => null;
let NC = 0;
function eu(e = null) {
  const t = PC(), n = Je(e || t || null);
  return n.current === null && (n.current = "" + NC++), e ?? n.current;
}
function bh({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: a,
  forwardedRef: o,
  id: i,
  maxSize: s,
  minSize: l,
  onCollapse: c,
  onExpand: d,
  onResize: u,
  order: m,
  style: g,
  tagName: h = "div",
  ...b
}) {
  const p = gh(ha);
  if (p === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: v,
    expandPanel: y,
    getPanelSize: _,
    getPanelStyle: C,
    groupId: D,
    isPanelCollapsed: E,
    reevaluatePanelConstraints: S,
    registerPanel: R,
    resizePanel: k,
    unregisterPanel: Y
  } = p, I = eu(i), F = Je({
    callbacks: {
      onCollapse: c,
      onExpand: d,
      onResize: u
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: a,
      maxSize: s,
      minSize: l
    },
    id: I,
    idIsFromProps: i !== void 0,
    order: m
  });
  Je({
    didLogMissingDefaultSizeWarning: !1
  }), Qt(() => {
    const {
      callbacks: W,
      constraints: j
    } = F.current, $ = {
      ...j
    };
    F.current.id = I, F.current.idIsFromProps = i !== void 0, F.current.order = m, W.onCollapse = c, W.onExpand = d, W.onResize = u, j.collapsedSize = n, j.collapsible = r, j.defaultSize = a, j.maxSize = s, j.minSize = l, ($.collapsedSize !== j.collapsedSize || $.collapsible !== j.collapsible || $.maxSize !== j.maxSize || $.minSize !== j.minSize) && S(F.current, $);
  }), Qt(() => {
    const W = F.current;
    return R(W), () => {
      Y(W);
    };
  }, [m, I, R, Y]), vh(o, () => ({
    collapse: () => {
      v(F.current);
    },
    expand: (W) => {
      y(F.current, W);
    },
    getId() {
      return I;
    },
    getSize() {
      return _(F.current);
    },
    isCollapsed() {
      return E(F.current);
    },
    isExpanded() {
      return !E(F.current);
    },
    resize: (W) => {
      k(F.current, W);
    }
  }), [v, y, _, E, I, k]);
  const T = C(F.current, a);
  return Mn(h, {
    ...b,
    children: e,
    className: t,
    id: i,
    style: {
      ...T,
      ...g
    },
    // CSS selectors
    "data-panel": "",
    "data-panel-collapsible": r || void 0,
    "data-panel-group-id": D,
    "data-panel-id": I,
    "data-panel-size": parseFloat("" + T.flexGrow).toFixed(1)
  });
}
const yh = hh((e, t) => Mn(bh, {
  ...e,
  forwardedRef: t
}));
bh.displayName = "Panel";
yh.displayName = "forwardRef(Panel)";
let pl = null, Kt = null;
function EC(e, t) {
  if (t) {
    const n = (t & Ch) !== 0, r = (t & Ph) !== 0, a = (t & Nh) !== 0, o = (t & Eh) !== 0;
    if (n)
      return a ? "se-resize" : o ? "ne-resize" : "e-resize";
    if (r)
      return a ? "sw-resize" : o ? "nw-resize" : "w-resize";
    if (a)
      return "s-resize";
    if (o)
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
function TC() {
  Kt !== null && (document.head.removeChild(Kt), pl = null, Kt = null);
}
function js(e, t) {
  const n = EC(e, t);
  pl !== n && (pl = n, Kt === null && (Kt = document.createElement("style"), document.head.appendChild(Kt)), Kt.innerHTML = `*{cursor: ${n}!important;}`);
}
function wh(e) {
  return e.type === "keydown";
}
function xh(e) {
  return e.type.startsWith("pointer");
}
function _h(e) {
  return e.type.startsWith("mouse");
}
function ga(e) {
  if (xh(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (_h(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function OC() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function MC(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function DC(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: sm(e),
    b: sm(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  ue(r, "Stacking order can only be calculated for elements with a common ancestor");
  const a = {
    a: im(om(n.a)),
    b: im(om(n.b))
  };
  if (a.a === a.b) {
    const o = r.childNodes, i = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let s = o.length;
    for (; s--; ) {
      const l = o[s];
      if (l === i.a) return 1;
      if (l === i.b) return -1;
    }
  }
  return Math.sign(a.a - a.b);
}
const kC = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function RC(e) {
  var t;
  const n = getComputedStyle((t = Sh(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function IC(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || RC(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || kC.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function om(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (ue(n, "Missing node"), IC(n)) return n;
  }
  return null;
}
function im(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function sm(e) {
  const t = [];
  for (; e; )
    t.push(e), e = Sh(e);
  return t;
}
function Sh(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const Ch = 1, Ph = 2, Nh = 4, Eh = 8, AC = OC() === "coarse";
let pt = [], Sn = !1, zt = /* @__PURE__ */ new Map(), va = /* @__PURE__ */ new Map();
const ir = /* @__PURE__ */ new Set();
function zC(e, t, n, r, a) {
  var o;
  const {
    ownerDocument: i
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: a
  }, l = (o = zt.get(i)) !== null && o !== void 0 ? o : 0;
  return zt.set(i, l + 1), ir.add(s), Yr(), function() {
    var d;
    va.delete(e), ir.delete(s);
    const u = (d = zt.get(i)) !== null && d !== void 0 ? d : 1;
    if (zt.set(i, u - 1), Yr(), u === 1 && zt.delete(i), pt.includes(s)) {
      const m = pt.indexOf(s);
      m >= 0 && pt.splice(m, 1), nu(), a("up", !0, null);
    }
  };
}
function lm(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ga(e);
  Sn = !0, tu({
    target: t,
    x: n,
    y: r
  }), Yr(), pt.length > 0 && (Vr("down", e), e.preventDefault(), e.stopPropagation());
}
function Bn(e) {
  const {
    x: t,
    y: n
  } = ga(e);
  if (Sn && e.buttons === 0 && (Sn = !1, Vr("up", e)), !Sn) {
    const {
      target: r
    } = e;
    tu({
      target: r,
      x: t,
      y: n
    });
  }
  Vr("move", e), nu(), pt.length > 0 && e.preventDefault();
}
function pn(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ga(e);
  va.clear(), Sn = !1, pt.length > 0 && e.preventDefault(), Vr("up", e), tu({
    target: t,
    x: n,
    y: r
  }), nu(), Yr();
}
function tu({
  target: e,
  x: t,
  y: n
}) {
  pt.splice(0);
  let r = null;
  (e instanceof HTMLElement || e instanceof SVGElement) && (r = e), ir.forEach((a) => {
    const {
      element: o,
      hitAreaMargins: i
    } = a, s = o.getBoundingClientRect(), {
      bottom: l,
      left: c,
      right: d,
      top: u
    } = s, m = AC ? i.coarse : i.fine;
    if (t >= c - m && t <= d + m && n >= u - m && n <= l + m) {
      if (r !== null && document.contains(r) && o !== r && !o.contains(r) && !r.contains(o) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      DC(r, o) > 0) {
        let h = r, b = !1;
        for (; h && !h.contains(o); ) {
          if (MC(h.getBoundingClientRect(), s)) {
            b = !0;
            break;
          }
          h = h.parentElement;
        }
        if (b)
          return;
      }
      pt.push(a);
    }
  });
}
function Fs(e, t) {
  va.set(e, t);
}
function nu() {
  let e = !1, t = !1;
  pt.forEach((r) => {
    const {
      direction: a
    } = r;
    a === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  va.forEach((r) => {
    n |= r;
  }), e && t ? js("intersection", n) : e ? js("horizontal", n) : t ? js("vertical", n) : TC();
}
function Yr() {
  zt.forEach((e, t) => {
    const {
      body: n
    } = t;
    n.removeEventListener("contextmenu", pn), n.removeEventListener("pointerdown", lm), n.removeEventListener("pointerleave", Bn), n.removeEventListener("pointermove", Bn);
  }), window.removeEventListener("pointerup", pn), window.removeEventListener("pointercancel", pn), ir.size > 0 && (Sn ? (pt.length > 0 && zt.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("contextmenu", pn), n.addEventListener("pointerleave", Bn), n.addEventListener("pointermove", Bn));
  }), window.addEventListener("pointerup", pn), window.addEventListener("pointercancel", pn)) : zt.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("pointerdown", lm, {
      capture: !0
    }), n.addEventListener("pointermove", Bn));
  }));
}
function Vr(e, t) {
  ir.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, a = pt.includes(n);
    r(e, a, t);
  });
}
function LC() {
  const [e, t] = _n(0);
  return Ke(() => t((n) => n + 1), []);
}
function ue(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
const ru = 10;
function rn(e, t, n = ru) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function Dt(e, t, n = ru) {
  return rn(e, t, n) === 0;
}
function tt(e, t, n) {
  return rn(e, t, n) === 0;
}
function qC(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const a = e[r], o = t[r];
    if (!tt(a, o, n))
      return !1;
  }
  return !0;
}
function yn({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  ue(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: a = 0,
    collapsible: o,
    maxSize: i = 100,
    minSize: s = 0
  } = r;
  if (rn(n, s) < 0)
    if (o) {
      const l = (a + s) / 2;
      rn(n, l) < 0 ? n = a : n = s;
    } else
      n = s;
  return n = Math.min(i, n), n = parseFloat(n.toFixed(ru)), n;
}
function Wn({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: a,
  trigger: o
}) {
  if (tt(e, 0))
    return t;
  const i = [...t], [s, l] = r;
  ue(s != null, "Invalid first pivot index"), ue(l != null, "Invalid second pivot index");
  let c = 0;
  if (o === "keyboard") {
    {
      const u = e < 0 ? l : s, m = n[u];
      ue(m, `Panel constraints not found for index ${u}`);
      const {
        collapsedSize: g = 0,
        collapsible: h,
        minSize: b = 0
      } = m;
      if (h) {
        const p = t[u];
        if (ue(p != null, `Previous layout not found for panel index ${u}`), tt(p, g)) {
          const v = b - p;
          rn(v, Math.abs(e)) > 0 && (e = e < 0 ? 0 - v : v);
        }
      }
    }
    {
      const u = e < 0 ? s : l, m = n[u];
      ue(m, `No panel constraints found for index ${u}`);
      const {
        collapsedSize: g = 0,
        collapsible: h,
        minSize: b = 0
      } = m;
      if (h) {
        const p = t[u];
        if (ue(p != null, `Previous layout not found for panel index ${u}`), tt(p, b)) {
          const v = p - g;
          rn(v, Math.abs(e)) > 0 && (e = e < 0 ? 0 - v : v);
        }
      }
    }
  }
  {
    const u = e < 0 ? 1 : -1;
    let m = e < 0 ? l : s, g = 0;
    for (; ; ) {
      const b = t[m];
      ue(b != null, `Previous layout not found for panel index ${m}`);
      const v = yn({
        panelConstraints: n,
        panelIndex: m,
        size: 100
      }) - b;
      if (g += v, m += u, m < 0 || m >= n.length)
        break;
    }
    const h = Math.min(Math.abs(e), Math.abs(g));
    e = e < 0 ? 0 - h : h;
  }
  {
    let m = e < 0 ? s : l;
    for (; m >= 0 && m < n.length; ) {
      const g = Math.abs(e) - Math.abs(c), h = t[m];
      ue(h != null, `Previous layout not found for panel index ${m}`);
      const b = h - g, p = yn({
        panelConstraints: n,
        panelIndex: m,
        size: b
      });
      if (!tt(h, p) && (c += h - p, i[m] = p, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? m-- : m++;
    }
  }
  if (qC(a, i))
    return a;
  {
    const u = e < 0 ? l : s, m = t[u];
    ue(m != null, `Previous layout not found for panel index ${u}`);
    const g = m + c, h = yn({
      panelConstraints: n,
      panelIndex: u,
      size: g
    });
    if (i[u] = h, !tt(h, g)) {
      let b = g - h, v = e < 0 ? l : s;
      for (; v >= 0 && v < n.length; ) {
        const y = i[v];
        ue(y != null, `Previous layout not found for panel index ${v}`);
        const _ = y + b, C = yn({
          panelConstraints: n,
          panelIndex: v,
          size: _
        });
        if (tt(y, C) || (b -= C - y, i[v] = C), tt(b, 0))
          break;
        e > 0 ? v-- : v++;
      }
    }
  }
  const d = i.reduce((u, m) => m + u, 0);
  return tt(d, 100) ? i : a;
}
function $C({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, a = 100, o = 0, i = 0;
  const s = n[0];
  ue(s != null, "No pivot index found"), t.forEach((u, m) => {
    const {
      constraints: g
    } = u, {
      maxSize: h = 100,
      minSize: b = 0
    } = g;
    m === s ? (r = b, a = h) : (o += b, i += h);
  });
  const l = Math.min(a, 100 - o), c = Math.max(r, 100 - i), d = e[s];
  return {
    valueMax: l,
    valueMin: c,
    valueNow: d
  };
}
function sr(e, t = document) {
  return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`));
}
function Th(e, t, n = document) {
  const a = sr(e, n).findIndex((o) => o.getAttribute("data-panel-resize-handle-id") === t);
  return a ?? null;
}
function Oh(e, t, n) {
  const r = Th(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function Mh(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function ba(e, t = document) {
  const n = t.querySelector(`[data-panel-resize-handle-id="${e}"]`);
  return n || null;
}
function BC(e, t, n, r = document) {
  var a, o, i, s;
  const l = ba(t, r), c = sr(e, r), d = l ? c.indexOf(l) : -1, u = (a = (o = n[d]) === null || o === void 0 ? void 0 : o.id) !== null && a !== void 0 ? a : null, m = (i = (s = n[d + 1]) === null || s === void 0 ? void 0 : s.id) !== null && i !== void 0 ? i : null;
  return [u, m];
}
function jC({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: a,
  panelGroupElement: o,
  setLayout: i
}) {
  Je({
    didWarnAboutMissingResizeHandle: !1
  }), Qt(() => {
    if (!o)
      return;
    const s = sr(n, o);
    for (let l = 0; l < a.length - 1; l++) {
      const {
        valueMax: c,
        valueMin: d,
        valueNow: u
      } = $C({
        layout: r,
        panelsArray: a,
        pivotIndices: [l, l + 1]
      }), m = s[l];
      if (m != null) {
        const g = a[l];
        ue(g, `No panel data found for index "${l}"`), m.setAttribute("aria-controls", g.id), m.setAttribute("aria-valuemax", "" + Math.round(c)), m.setAttribute("aria-valuemin", "" + Math.round(d)), m.setAttribute("aria-valuenow", u != null ? "" + Math.round(u) : "");
      }
    }
    return () => {
      s.forEach((l, c) => {
        l.removeAttribute("aria-controls"), l.removeAttribute("aria-valuemax"), l.removeAttribute("aria-valuemin"), l.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, a, o]), Xt(() => {
    if (!o)
      return;
    const s = t.current;
    ue(s, "Eager values not found");
    const {
      panelDataArray: l
    } = s, c = Mh(n, o);
    ue(c != null, `No group found for id "${n}"`);
    const d = sr(n, o);
    ue(d, `No resize handles found for group id "${n}"`);
    const u = d.map((m) => {
      const g = m.getAttribute("data-panel-resize-handle-id");
      ue(g, "Resize handle element has no handle id attribute");
      const [h, b] = BC(n, g, l, o);
      if (h == null || b == null)
        return () => {
        };
      const p = (v) => {
        if (!v.defaultPrevented)
          switch (v.key) {
            case "Enter": {
              v.preventDefault();
              const y = l.findIndex((_) => _.id === h);
              if (y >= 0) {
                const _ = l[y];
                ue(_, `No panel data found for index ${y}`);
                const C = r[y], {
                  collapsedSize: D = 0,
                  collapsible: E,
                  minSize: S = 0
                } = _.constraints;
                if (C != null && E) {
                  const R = Wn({
                    delta: tt(C, D) ? S - D : D - C,
                    initialLayout: r,
                    panelConstraints: l.map((k) => k.constraints),
                    pivotIndices: Oh(n, g, o),
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
      return m.addEventListener("keydown", p), () => {
        m.removeEventListener("keydown", p);
      };
    });
    return () => {
      u.forEach((m) => m());
    };
  }, [o, e, t, n, r, a, i]);
}
function um(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Dh(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: a
  } = ga(t);
  return n ? r : a;
}
function FC(e, t, n, r, a) {
  const o = n === "horizontal", i = ba(t, a);
  ue(i, `No resize handle element found for id "${t}"`);
  const s = i.getAttribute("data-panel-group-id");
  ue(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: l
  } = r;
  const c = Dh(n, e), d = Mh(s, a);
  ue(d, `No group element found for id "${s}"`);
  const u = d.getBoundingClientRect(), m = o ? u.width : u.height;
  return (c - l) / m * 100;
}
function HC(e, t, n, r, a, o) {
  if (wh(e)) {
    const i = n === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : a != null ? s = a : s = 10;
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
    return r == null ? 0 : FC(e, t, n, r, o);
}
function WC({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((o) => o.constraints);
  let r = 0, a = 100;
  for (let o = 0; o < e.length; o++) {
    const i = n[o];
    ue(i, `Panel constraints not found for index ${o}`);
    const {
      defaultSize: s
    } = i;
    s != null && (r++, t[o] = s, a -= s);
  }
  for (let o = 0; o < e.length; o++) {
    const i = n[o];
    ue(i, `Panel constraints not found for index ${o}`);
    const {
      defaultSize: s
    } = i;
    if (s != null)
      continue;
    const l = e.length - r, c = a / l;
    r++, t[o] = c, a -= c;
  }
  return t;
}
function hn(e, t, n) {
  t.forEach((r, a) => {
    const o = e[a];
    ue(o, `Panel data not found for index ${a}`);
    const {
      callbacks: i,
      constraints: s,
      id: l
    } = o, {
      collapsedSize: c = 0,
      collapsible: d
    } = s, u = n[l];
    if (u == null || r !== u) {
      n[l] = r;
      const {
        onCollapse: m,
        onExpand: g,
        onResize: h
      } = i;
      h && h(r, u), d && (m || g) && (g && (u == null || Dt(u, c)) && !Dt(r, c) && g(), m && (u == null || !Dt(u, c)) && Dt(r, c) && m());
    }
  });
}
function Tr(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function YC({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: r,
  panelIndex: a,
  precision: o = 3
}) {
  const i = n[a];
  let s;
  return i == null ? s = e != null ? e.toPrecision(o) : "1" : r.length === 1 ? s = "1" : s = i.toPrecision(o), {
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
function VC(e, t = 10) {
  let n = null;
  return (...a) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...a);
    }, t);
  };
}
function cm(e) {
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
function kh(e) {
  return `react-resizable-panels:${e}`;
}
function Rh(e) {
  return e.map((t) => {
    const {
      constraints: n,
      id: r,
      idIsFromProps: a,
      order: o
    } = t;
    return a ? r : o ? `${o}:${JSON.stringify(n)}` : JSON.stringify(n);
  }).sort((t, n) => t.localeCompare(n)).join(",");
}
function Ih(e, t) {
  try {
    const n = kh(e), r = t.getItem(n);
    if (r) {
      const a = JSON.parse(r);
      if (typeof a == "object" && a != null)
        return a;
    }
  } catch {
  }
  return null;
}
function GC(e, t, n) {
  var r, a;
  const o = (r = Ih(e, n)) !== null && r !== void 0 ? r : {}, i = Rh(t);
  return (a = o[i]) !== null && a !== void 0 ? a : null;
}
function UC(e, t, n, r, a) {
  var o;
  const i = kh(e), s = Rh(t), l = (o = Ih(e, a)) !== null && o !== void 0 ? o : {};
  l[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    a.setItem(i, JSON.stringify(l));
  } catch (c) {
    console.error(c);
  }
}
function dm({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((o, i) => o + i, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((o) => `${o}%`).join(", ")}`);
  if (!tt(r, 100) && n.length > 0)
    for (let o = 0; o < t.length; o++) {
      const i = n[o];
      ue(i != null, `No layout data found for index ${o}`);
      const s = 100 / r * i;
      n[o] = s;
    }
  let a = 0;
  for (let o = 0; o < t.length; o++) {
    const i = n[o];
    ue(i != null, `No layout data found for index ${o}`);
    const s = yn({
      panelConstraints: t,
      panelIndex: o,
      size: i
    });
    i != s && (a += i - s, n[o] = s);
  }
  if (!tt(a, 0))
    for (let o = 0; o < t.length; o++) {
      const i = n[o];
      ue(i != null, `No layout data found for index ${o}`);
      const s = i + a, l = yn({
        panelConstraints: t,
        panelIndex: o,
        size: s
      });
      if (i !== l && (a -= l - i, n[o] = l, tt(a, 0)))
        break;
    }
  return n;
}
const KC = 100, Yn = {
  getItem: (e) => (cm(Yn), Yn.getItem(e)),
  setItem: (e, t) => {
    cm(Yn), Yn.setItem(e, t);
  }
}, fm = {};
function Ah({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: a,
  id: o = null,
  onLayout: i = null,
  keyboardResizeBy: s = null,
  storage: l = Yn,
  style: c,
  tagName: d = "div",
  ...u
}) {
  const m = eu(o), g = Je(null), [h, b] = _n(null), [p, v] = _n([]), y = LC(), _ = Je({}), C = Je(/* @__PURE__ */ new Map()), D = Je(0), E = Je({
    autoSaveId: e,
    direction: r,
    dragState: h,
    id: m,
    keyboardResizeBy: s,
    onLayout: i,
    storage: l
  }), S = Je({
    layout: p,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  Je({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), vh(a, () => ({
    getId: () => E.current.id,
    getLayout: () => {
      const {
        layout: N
      } = S.current;
      return N;
    },
    setLayout: (N) => {
      const {
        onLayout: L
      } = E.current, {
        layout: A,
        panelDataArray: B
      } = S.current, H = dm({
        layout: N,
        panelConstraints: B.map((V) => V.constraints)
      });
      um(A, H) || (v(H), S.current.layout = H, L && L(H), hn(B, H, _.current));
    }
  }), []), Qt(() => {
    E.current.autoSaveId = e, E.current.direction = r, E.current.dragState = h, E.current.id = m, E.current.onLayout = i, E.current.storage = l;
  }), jC({
    committedValuesRef: E,
    eagerValuesRef: S,
    groupId: m,
    layout: p,
    panelDataArray: S.current.panelDataArray,
    setLayout: v,
    panelGroupElement: g.current
  }), Xt(() => {
    const {
      panelDataArray: N
    } = S.current;
    if (e) {
      if (p.length === 0 || p.length !== N.length)
        return;
      let L = fm[e];
      L == null && (L = VC(UC, KC), fm[e] = L);
      const A = [...N], B = new Map(C.current);
      L(e, A, B, p, l);
    }
  }, [e, p, l]), Xt(() => {
  });
  const R = Ke((N) => {
    const {
      onLayout: L
    } = E.current, {
      layout: A,
      panelDataArray: B
    } = S.current;
    if (N.constraints.collapsible) {
      const H = B.map((ae) => ae.constraints), {
        collapsedSize: V = 0,
        panelSize: Q,
        pivotIndices: ne
      } = Vt(B, N, A);
      if (ue(Q != null, `Panel size not found for panel "${N.id}"`), !Dt(Q, V)) {
        C.current.set(N.id, Q);
        const G = bn(B, N) === B.length - 1 ? Q - V : V - Q, Z = Wn({
          delta: G,
          initialLayout: A,
          panelConstraints: H,
          pivotIndices: ne,
          prevLayout: A,
          trigger: "imperative-api"
        });
        Tr(A, Z) || (v(Z), S.current.layout = Z, L && L(Z), hn(B, Z, _.current));
      }
    }
  }, []), k = Ke((N, L) => {
    const {
      onLayout: A
    } = E.current, {
      layout: B,
      panelDataArray: H
    } = S.current;
    if (N.constraints.collapsible) {
      const V = H.map((P) => P.constraints), {
        collapsedSize: Q = 0,
        panelSize: ne = 0,
        minSize: ae = 0,
        pivotIndices: G
      } = Vt(H, N, B), Z = L ?? ae;
      if (Dt(ne, Q)) {
        const P = C.current.get(N.id), X = P != null && P >= Z ? P : Z, ce = bn(H, N) === H.length - 1 ? ne - X : X - ne, le = Wn({
          delta: ce,
          initialLayout: B,
          panelConstraints: V,
          pivotIndices: G,
          prevLayout: B,
          trigger: "imperative-api"
        });
        Tr(B, le) || (v(le), S.current.layout = le, A && A(le), hn(H, le, _.current));
      }
    }
  }, []), Y = Ke((N) => {
    const {
      layout: L,
      panelDataArray: A
    } = S.current, {
      panelSize: B
    } = Vt(A, N, L);
    return ue(B != null, `Panel size not found for panel "${N.id}"`), B;
  }, []), I = Ke((N, L) => {
    const {
      panelDataArray: A
    } = S.current, B = bn(A, N);
    return YC({
      defaultSize: L,
      dragState: h,
      layout: p,
      panelData: A,
      panelIndex: B
    });
  }, [h, p]), F = Ke((N) => {
    const {
      layout: L,
      panelDataArray: A
    } = S.current, {
      collapsedSize: B = 0,
      collapsible: H,
      panelSize: V
    } = Vt(A, N, L);
    return ue(V != null, `Panel size not found for panel "${N.id}"`), H === !0 && Dt(V, B);
  }, []), T = Ke((N) => {
    const {
      layout: L,
      panelDataArray: A
    } = S.current, {
      collapsedSize: B = 0,
      collapsible: H,
      panelSize: V
    } = Vt(A, N, L);
    return ue(V != null, `Panel size not found for panel "${N.id}"`), !H || rn(V, B) > 0;
  }, []), W = Ke((N) => {
    const {
      panelDataArray: L
    } = S.current;
    L.push(N), L.sort((A, B) => {
      const H = A.order, V = B.order;
      return H == null && V == null ? 0 : H == null ? -1 : V == null ? 1 : H - V;
    }), S.current.panelDataArrayChanged = !0, y();
  }, [y]);
  Qt(() => {
    if (S.current.panelDataArrayChanged) {
      S.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: N,
        onLayout: L,
        storage: A
      } = E.current, {
        layout: B,
        panelDataArray: H
      } = S.current;
      let V = null;
      if (N) {
        const ne = GC(N, H, A);
        ne && (C.current = new Map(Object.entries(ne.expandToSizes)), V = ne.layout);
      }
      V == null && (V = WC({
        panelDataArray: H
      }));
      const Q = dm({
        layout: V,
        panelConstraints: H.map((ne) => ne.constraints)
      });
      um(B, Q) || (v(Q), S.current.layout = Q, L && L(Q), hn(H, Q, _.current));
    }
  }), Qt(() => {
    const N = S.current;
    return () => {
      N.layout = [];
    };
  }, []);
  const j = Ke((N) => {
    let L = !1;
    const A = g.current;
    return A && window.getComputedStyle(A, null).getPropertyValue("direction") === "rtl" && (L = !0), function(H) {
      H.preventDefault();
      const V = g.current;
      if (!V)
        return () => null;
      const {
        direction: Q,
        dragState: ne,
        id: ae,
        keyboardResizeBy: G,
        onLayout: Z
      } = E.current, {
        layout: P,
        panelDataArray: X
      } = S.current, {
        initialLayout: se
      } = ne ?? {}, ce = Oh(ae, N, V);
      let le = HC(H, N, Q, ne, G, V);
      const oe = Q === "horizontal";
      oe && L && (le = -le);
      const ge = X.map((Pe) => Pe.constraints), De = Wn({
        delta: le,
        initialLayout: se ?? P,
        panelConstraints: ge,
        pivotIndices: ce,
        prevLayout: P,
        trigger: wh(H) ? "keyboard" : "mouse-or-touch"
      }), me = !Tr(P, De);
      (xh(H) || _h(H)) && D.current != le && (D.current = le, !me && le !== 0 ? oe ? Fs(N, le < 0 ? Ch : Ph) : Fs(N, le < 0 ? Nh : Eh) : Fs(N, 0)), me && (v(De), S.current.layout = De, Z && Z(De), hn(X, De, _.current));
    };
  }, []), $ = Ke((N, L) => {
    const {
      onLayout: A
    } = E.current, {
      layout: B,
      panelDataArray: H
    } = S.current, V = H.map((P) => P.constraints), {
      panelSize: Q,
      pivotIndices: ne
    } = Vt(H, N, B);
    ue(Q != null, `Panel size not found for panel "${N.id}"`);
    const G = bn(H, N) === H.length - 1 ? Q - L : L - Q, Z = Wn({
      delta: G,
      initialLayout: B,
      panelConstraints: V,
      pivotIndices: ne,
      prevLayout: B,
      trigger: "imperative-api"
    });
    Tr(B, Z) || (v(Z), S.current.layout = Z, A && A(Z), hn(H, Z, _.current));
  }, []), z = Ke((N, L) => {
    const {
      layout: A,
      panelDataArray: B
    } = S.current, {
      collapsedSize: H = 0,
      collapsible: V
    } = L, {
      collapsedSize: Q = 0,
      collapsible: ne,
      maxSize: ae = 100,
      minSize: G = 0
    } = N.constraints, {
      panelSize: Z
    } = Vt(B, N, A);
    Z != null && (V && ne && Dt(Z, H) ? Dt(H, Q) || $(N, Q) : Z < G ? $(N, G) : Z > ae && $(N, ae));
  }, [$]), q = Ke((N, L) => {
    const {
      direction: A
    } = E.current, {
      layout: B
    } = S.current;
    if (!g.current)
      return;
    const H = ba(N, g.current);
    ue(H, `Drag handle element not found for id "${N}"`);
    const V = Dh(A, L);
    b({
      dragHandleId: N,
      dragHandleRect: H.getBoundingClientRect(),
      initialCursorPosition: V,
      initialLayout: B
    });
  }, []), ee = Ke(() => {
    b(null);
  }, []), ie = Ke((N) => {
    const {
      panelDataArray: L
    } = S.current, A = bn(L, N);
    A >= 0 && (L.splice(A, 1), delete _.current[N.id], S.current.panelDataArrayChanged = !0, y());
  }, [y]), K = SC(() => ({
    collapsePanel: R,
    direction: r,
    dragState: h,
    expandPanel: k,
    getPanelSize: Y,
    getPanelStyle: I,
    groupId: m,
    isPanelCollapsed: F,
    isPanelExpanded: T,
    reevaluatePanelConstraints: z,
    registerPanel: W,
    registerResizeHandle: j,
    resizePanel: $,
    startDragging: q,
    stopDragging: ee,
    unregisterPanel: ie,
    panelGroupElement: g.current
  }), [R, h, r, k, Y, I, m, F, T, z, W, j, $, q, ee, ie]), O = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return Mn(ha.Provider, {
    value: K
  }, Mn(d, {
    ...u,
    children: t,
    className: n,
    id: o,
    ref: g,
    style: {
      ...O,
      ...c
    },
    // CSS selectors
    "data-panel-group": "",
    "data-panel-group-direction": r,
    "data-panel-group-id": m
  }));
}
const zh = hh((e, t) => Mn(Ah, {
  ...e,
  forwardedRef: t
}));
Ah.displayName = "PanelGroup";
zh.displayName = "forwardRef(PanelGroup)";
function bn(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function Vt(e, t, n) {
  const r = bn(e, t), o = r === e.length - 1 ? [r - 1, r] : [r, r + 1], i = n[r];
  return {
    ...t.constraints,
    panelSize: i,
    pivotIndices: o
  };
}
function XC({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  Xt(() => {
    if (e || n == null || r == null)
      return;
    const a = ba(t, r);
    if (a == null)
      return;
    const o = (i) => {
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
            const s = a.getAttribute("data-panel-group-id");
            ue(s, `No group element found for id "${s}"`);
            const l = sr(s, r), c = Th(s, t, r);
            ue(c !== null, `No resize element found for id "${t}"`);
            const d = i.shiftKey ? c > 0 ? c - 1 : l.length - 1 : c + 1 < l.length ? c + 1 : 0;
            l[d].focus();
            break;
          }
        }
    };
    return a.addEventListener("keydown", o), () => {
      a.removeEventListener("keydown", o);
    };
  }, [r, e, t, n]);
}
function Lh({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: a,
  onBlur: o,
  onDragging: i,
  onFocus: s,
  style: l = {},
  tabIndex: c = 0,
  tagName: d = "div",
  ...u
}) {
  var m, g;
  const h = Je(null), b = Je({
    onDragging: i
  });
  Xt(() => {
    b.current.onDragging = i;
  });
  const p = gh(ha);
  if (p === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: v,
    groupId: y,
    registerResizeHandle: _,
    startDragging: C,
    stopDragging: D,
    panelGroupElement: E
  } = p, S = eu(a), [R, k] = _n("inactive"), [Y, I] = _n(!1), [F, T] = _n(null), W = Je({
    state: R
  });
  Qt(() => {
    W.current.state = R;
  }), Xt(() => {
    if (n)
      T(null);
    else {
      const q = _(S);
      T(() => q);
    }
  }, [n, S, _]);
  const j = (m = r == null ? void 0 : r.coarse) !== null && m !== void 0 ? m : 15, $ = (g = r == null ? void 0 : r.fine) !== null && g !== void 0 ? g : 5;
  return Xt(() => {
    if (n || F == null)
      return;
    const q = h.current;
    return ue(q, "Element ref not attached"), zC(S, q, v, {
      coarse: j,
      fine: $
    }, (ie, K, O) => {
      if (K)
        switch (ie) {
          case "down": {
            k("drag"), ue(O, 'Expected event to be defined for "down" action'), C(S, O);
            const {
              onDragging: N
            } = b.current;
            N && N(!0);
            break;
          }
          case "move": {
            const {
              state: N
            } = W.current;
            N !== "drag" && k("hover"), ue(O, 'Expected event to be defined for "move" action'), F(O);
            break;
          }
          case "up": {
            k("hover"), D();
            const {
              onDragging: N
            } = b.current;
            N && N(!1);
            break;
          }
        }
      else
        k("inactive");
    });
  }, [j, v, n, $, _, S, F, C, D]), XC({
    disabled: n,
    handleId: S,
    resizeHandler: F,
    panelGroupElement: E
  }), Mn(d, {
    ...u,
    children: e,
    className: t,
    id: a,
    onBlur: () => {
      I(!1), o == null || o();
    },
    onFocus: () => {
      I(!0), s == null || s();
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
    "data-panel-group-direction": v,
    "data-panel-group-id": y,
    "data-resize-handle": "",
    "data-resize-handle-active": R === "drag" ? "pointer" : Y ? "keyboard" : void 0,
    "data-resize-handle-state": R,
    "data-panel-resize-handle-enabled": !n,
    "data-panel-resize-handle-id": S
  });
}
Lh.displayName = "PanelResizeHandle";
function lO({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    zh,
    {
      "data-slot": "resizable-panel-group",
      className: w("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", e),
      ...t
    }
  );
}
function uO({ ...e }) {
  return /* @__PURE__ */ f(yh, { "data-slot": "resizable-panel", ...e });
}
function cO({
  withHandle: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    Lh,
    {
      "data-slot": "resizable-handle",
      className: w(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        t
      ),
      ...n,
      children: e && /* @__PURE__ */ f("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ f(ig, { className: "size-2.5" }) })
    }
  );
}
function dO({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    Vn.Root,
    {
      "data-slot": "scroll-area",
      className: w("relative", e),
      ...n,
      children: [
        /* @__PURE__ */ f(
          Vn.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ f(QC, {}),
        /* @__PURE__ */ f(Vn.Corner, {})
      ]
    }
  );
}
function QC({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ f(
    Vn.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: w(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...n,
      children: /* @__PURE__ */ f(
        Vn.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function JC({
  orientation: e = "horizontal",
  decorative: t = !0,
  internalClassName: n,
  // Spacing props
  m: r,
  mt: a,
  mr: o,
  mb: i,
  ml: s,
  mx: l,
  my: c,
  p: d,
  pt: u,
  pr: m,
  pb: g,
  pl: h,
  px: b,
  py: p,
  ...v
}) {
  return /* @__PURE__ */ f(
    hg.Root,
    {
      "data-slot": "separator-root",
      decorative: t,
      orientation: e,
      className: w(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        Re({ m: r, mt: a, mr: o, mb: i, ml: s, mx: l, my: c, p: d, pt: u, pr: m, pb: g, pl: h, px: b, py: p }),
        n
      ),
      ...v
    }
  );
}
function ZC({ ...e }) {
  return /* @__PURE__ */ f(we.Root, { "data-slot": "sheet", ...e });
}
function fO({ ...e }) {
  return /* @__PURE__ */ f(we.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function mO({ ...e }) {
  return /* @__PURE__ */ f(we.Close, { "data-slot": "sheet-close", ...e });
}
function eP({ ...e }) {
  return /* @__PURE__ */ f(we.Portal, { "data-slot": "sheet-portal", ...e });
}
function tP({
  ...e
}) {
  return /* @__PURE__ */ f(
    we.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: w(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50"
      ),
      ...e
    }
  );
}
function nP({
  children: e,
  side: t = "right",
  ...n
}) {
  return /* @__PURE__ */ U(eP, { children: [
    /* @__PURE__ */ f(tP, {}),
    /* @__PURE__ */ U(
      we.Content,
      {
        "data-slot": "sheet-content",
        className: w(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          t === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          t === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          t === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          t === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          n.internalClassName
        ),
        ...n,
        children: [
          e,
          /* @__PURE__ */ U(we.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ f(ym, { className: "size-4" }),
            /* @__PURE__ */ f("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function rP({ ...e }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sheet-header",
      className: w("flex flex-col gap-1.5 p-4", e.internalClassName),
      ...e
    }
  );
}
function pO({ ...e }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sheet-footer",
      className: w("mt-auto flex flex-col gap-2 p-4", e.internalClassName),
      ...e
    }
  );
}
function aP({ ...e }) {
  return /* @__PURE__ */ f(
    we.Title,
    {
      "data-slot": "sheet-title",
      className: w("text-foreground font-semibold", e.internalClassName),
      ...e
    }
  );
}
function oP({
  ...e
}) {
  return /* @__PURE__ */ f(
    we.Description,
    {
      "data-slot": "sheet-description",
      className: w("text-muted-foreground text-sm", e.internalClassName),
      ...e
    }
  );
}
const Hs = 768;
function iP() {
  const [e, t] = M.useState(void 0);
  return M.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Hs - 1}px)`), r = () => {
      t(window.innerWidth < Hs);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Hs), () => n.removeEventListener("change", r);
  }, []), !!e;
}
function mm({
  internalClassName: e,
  // Spacing props
  m: t,
  mt: n,
  mr: r,
  mb: a,
  ml: o,
  mx: i,
  my: s,
  p: l,
  pt: c,
  pr: d,
  pb: u,
  pl: m,
  px: g,
  py: h,
  ...b
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "skeleton",
      className: w(
        "bg-accent animate-pulse rounded-md",
        Re({ m: t, mt: n, mr: r, mb: a, ml: o, mx: i, my: s, p: l, pt: c, pr: d, pb: u, pl: m, px: g, py: h }),
        e
      ),
      ...b
    }
  );
}
function qh({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ f(
    xn.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function sP({ ...e }) {
  return /* @__PURE__ */ f(qh, { children: /* @__PURE__ */ f(xn.Root, { "data-slot": "tooltip", ...e }) });
}
function lP({ ...e }) {
  return /* @__PURE__ */ f(xn.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function uP({
  sideOffset: e = 0,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ f(xn.Portal, { children: /* @__PURE__ */ U(
    xn.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: e,
      className: w(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance"
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ f(xn.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const cP = "sidebar_state", dP = 3600 * 24 * 7, fP = "16rem", mP = "18rem", pP = "3rem", hP = "b", $h = M.createContext(null);
function ya() {
  const e = M.useContext($h);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function hO({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  style: r,
  children: a,
  ...o
}) {
  const i = iP(), [s, l] = M.useState(!1), [c, d] = M.useState(e), u = t ?? c, m = M.useCallback(
    (p) => {
      const v = typeof p == "function" ? p(u) : p;
      n ? n(v) : d(v), document.cookie = `${cP}=${v}; path=/; max-age=${dP}`;
    },
    [n, u]
  ), g = M.useCallback(() => i ? l((p) => !p) : m((p) => !p), [i, m, l]);
  M.useEffect(() => {
    const p = (v) => {
      v.key === hP && (v.metaKey || v.ctrlKey) && (v.preventDefault(), g());
    };
    return window.addEventListener("keydown", p), () => window.removeEventListener("keydown", p);
  }, [g]);
  const h = u ? "expanded" : "collapsed", b = M.useMemo(
    () => ({
      state: h,
      open: u,
      setOpen: m,
      isMobile: i,
      openMobile: s,
      setOpenMobile: l,
      toggleSidebar: g
    }),
    [h, u, m, i, s, l, g]
  );
  return /* @__PURE__ */ f($h.Provider, { value: b, children: /* @__PURE__ */ f(qh, { delayDuration: 0, children: /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": fP,
        "--sidebar-width-icon": pP,
        ...r
      },
      className: w(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full"
      ),
      ...o,
      children: a
    }
  ) }) });
}
function gO({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  children: r,
  ...a
}) {
  const { isMobile: o, state: i, openMobile: s, setOpenMobile: l } = ya();
  return n === "none" ? /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar",
      className: w(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col"
      ),
      ...a,
      children: r
    }
  ) : o ? /* @__PURE__ */ f(ZC, { open: s, onOpenChange: l, ...a, children: /* @__PURE__ */ U(
    nP,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      internalClassName: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": mP
      },
      side: e,
      children: [
        /* @__PURE__ */ U(rP, { internalClassName: "sr-only", children: [
          /* @__PURE__ */ f(aP, { children: "Sidebar" }),
          /* @__PURE__ */ f(oP, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ f("div", { className: "flex h-full w-full flex-col", children: r })
      ]
    }
  ) }) : /* @__PURE__ */ U(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": i,
      "data-collapsible": i === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: w(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            "data-slot": "sidebar-container",
            className: w(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l"
            ),
            ...a,
            children: /* @__PURE__ */ f(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: r
              }
            )
          }
        )
      ]
    }
  );
}
function vO({ onClick: e, ...t }) {
  const { toggleSidebar: n } = ya();
  return /* @__PURE__ */ U(
    Jr,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      internalClassName: w("size-7"),
      onClick: (r) => {
        e == null || e(r), n();
      },
      ...t,
      children: [
        /* @__PURE__ */ f(sg, {}),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function bO({ ...e }) {
  const { toggleSidebar: t } = ya();
  return /* @__PURE__ */ f(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: t,
      title: "Toggle Sidebar",
      className: w(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2"
      ),
      ...e
    }
  );
}
function yO({ ...e }) {
  return /* @__PURE__ */ f(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: w(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2"
      ),
      ...e
    }
  );
}
function wO({ ...e }) {
  return /* @__PURE__ */ f(
    Cm,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      internalClassName: w("bg-background h-8 w-full shadow-none"),
      ...e
    }
  );
}
function xO({ ...e }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: w("flex flex-col gap-2 p-2"),
      ...e
    }
  );
}
function _O({ ...e }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: w("flex flex-col gap-2 p-2"),
      ...e
    }
  );
}
function SO({ ...e }) {
  return /* @__PURE__ */ f(
    JC,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      internalClassName: w("bg-sidebar-border mx-2 w-auto"),
      ...e
    }
  );
}
function CO({ ...e }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: w(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden"
      ),
      ...e
    }
  );
}
function PO({ ...e }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: w("relative flex w-full min-w-0 flex-col p-2"),
      ...e
    }
  );
}
function NO({
  asChild: e = !1,
  ...t
}) {
  return /* @__PURE__ */ f(
    e ? rt : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: w(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0"
      ),
      ...t
    }
  );
}
function EO({
  asChild: e = !1,
  ...t
}) {
  return /* @__PURE__ */ f(
    e ? rt : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: w(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden"
      ),
      ...t
    }
  );
}
function TO({ ...e }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: w("w-full text-sm"),
      ...e
    }
  );
}
function OO({ ...e }) {
  return /* @__PURE__ */ f(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: w("flex w-full min-w-0 flex-col gap-1"),
      ...e
    }
  );
}
function MO({ ...e }) {
  return /* @__PURE__ */ f(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: w("group/menu-item relative"),
      ...e
    }
  );
}
const gP = qt(
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
function DO({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: r = "default",
  tooltip: a,
  ...o
}) {
  const i = e ? rt : "button", { isMobile: s, state: l } = ya(), c = /* @__PURE__ */ f(
    i,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: w(gP({ variant: n, size: r })),
      ...o
    }
  );
  return a ? (typeof a == "string" && (a = {
    children: a
  }), /* @__PURE__ */ U(sP, { children: [
    /* @__PURE__ */ f(lP, { asChild: !0, children: c }),
    /* @__PURE__ */ f(
      uP,
      {
        side: "right",
        align: "center",
        hidden: l !== "collapsed" || s,
        ...a
      }
    )
  ] })) : c;
}
function kO({
  asChild: e = !1,
  showOnHover: t = !1,
  ...n
}) {
  return /* @__PURE__ */ f(
    e ? rt : "button",
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: w(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        t && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0"
      ),
      ...n
    }
  );
}
function RO({ ...e }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: w(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden"
      ),
      ...e
    }
  );
}
function IO({
  showIcon: e = !1,
  ...t
}) {
  const [n, r] = M.useState("70%");
  return M.useEffect(() => {
    r(`${Math.floor(Math.random() * 40) + 50}%`);
  }, []), /* @__PURE__ */ U(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: w("flex h-8 items-center gap-2 rounded-md px-2"),
      ...t,
      children: [
        e && /* @__PURE__ */ f(mm, { internalClassName: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ f(
          mm,
          {
            internalClassName: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": n
            }
          }
        )
      ]
    }
  );
}
function AO({ ...e }) {
  return /* @__PURE__ */ f(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: w(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden"
      ),
      ...e
    }
  );
}
function zO({ ...e }) {
  return /* @__PURE__ */ f(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: w("group/menu-sub-item relative"),
      ...e
    }
  );
}
function LO({
  asChild: e = !1,
  size: t = "md",
  isActive: n = !1,
  ...r
}) {
  return /* @__PURE__ */ f(
    e ? rt : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": n,
      className: w(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden"
      ),
      ...r
    }
  );
}
function qO({
  className: e,
  defaultValue: t,
  value: n,
  min: r = 0,
  max: a = 100,
  ...o
}) {
  const i = M.useMemo(
    () => Array.isArray(n) ? n : Array.isArray(t) ? t : [r, a],
    [n, t, r, a]
  );
  return /* @__PURE__ */ U(
    yr.Root,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: n,
      min: r,
      max: a,
      className: w(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ f(
          yr.Track,
          {
            "data-slot": "slider-track",
            className: w(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ f(
              yr.Range,
              {
                "data-slot": "slider-range",
                className: w(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: i.length }, (s, l) => /* @__PURE__ */ f(
          yr.Thumb,
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
var vP = (e, t, n, r, a, o, i, s) => {
  let l = document.documentElement, c = ["light", "dark"];
  function d(g) {
    (Array.isArray(e) ? e : [e]).forEach((h) => {
      let b = h === "class", p = b && o ? a.map((v) => o[v] || v) : a;
      b ? (l.classList.remove(...p), l.classList.add(o && o[g] ? o[g] : g)) : l.setAttribute(h, g);
    }), u(g);
  }
  function u(g) {
    s && c.includes(g) && (l.style.colorScheme = g);
  }
  function m() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (r) d(r);
  else try {
    let g = localStorage.getItem(t) || n, h = i && g === "system" ? m() : g;
    d(h);
  } catch {
  }
}, bP = M.createContext(void 0), yP = { setTheme: (e) => {
}, themes: [] }, wP = () => {
  var e;
  return (e = M.useContext(bP)) != null ? e : yP;
};
M.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: a, defaultTheme: o, value: i, themes: s, nonce: l, scriptProps: c }) => {
  let d = JSON.stringify([n, t, o, e, s, i, r, a]).slice(1, -1);
  return M.createElement("script", { ...c, suppressHydrationWarning: !0, nonce: typeof window > "u" ? l : "", dangerouslySetInnerHTML: { __html: `(${vP.toString()})(${d})` } });
});
function xP(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const _P = (e) => {
  switch (e) {
    case "success":
      return PP;
    case "info":
      return EP;
    case "warning":
      return NP;
    case "error":
      return TP;
    default:
      return null;
  }
}, SP = Array(12).fill(0), CP = ({ visible: e, className: t }) => /* @__PURE__ */ x.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ x.createElement("div", {
  className: "sonner-spinner"
}, SP.map((n, r) => /* @__PURE__ */ x.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), PP = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ x.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), NP = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ x.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), EP = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ x.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), TP = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ x.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), OP = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ x.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ x.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), MP = () => {
  const [e, t] = x.useState(document.hidden);
  return x.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let hl = 1;
class DP {
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
      const { message: r, ...a } = t, o = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : hl++, i = this.toasts.find((l) => l.id === o), s = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), i ? this.toasts = this.toasts.map((l) => l.id === o ? (this.publish({
        ...l,
        ...t,
        id: o,
        title: r
      }), {
        ...l,
        ...t,
        id: o,
        dismissible: s,
        title: r
      }) : l) : this.addToast({
        title: r,
        ...a,
        dismissible: s,
        id: o
      }), o;
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
      const a = Promise.resolve(t instanceof Function ? t() : t);
      let o = r !== void 0, i;
      const s = a.then(async (c) => {
        if (i = [
          "resolve",
          c
        ], x.isValidElement(c))
          o = !1, this.create({
            id: r,
            type: "default",
            message: c
          });
        else if (RP(c) && !c.ok) {
          o = !1;
          const u = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, m = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description, h = typeof u == "object" && !x.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: m,
            ...h
          });
        } else if (c instanceof Error) {
          o = !1;
          const u = typeof n.error == "function" ? await n.error(c) : n.error, m = typeof n.description == "function" ? await n.description(c) : n.description, h = typeof u == "object" && !x.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: m,
            ...h
          });
        } else if (n.success !== void 0) {
          o = !1;
          const u = typeof n.success == "function" ? await n.success(c) : n.success, m = typeof n.description == "function" ? await n.description(c) : n.description, h = typeof u == "object" && !x.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "success",
            description: m,
            ...h
          });
        }
      }).catch(async (c) => {
        if (i = [
          "reject",
          c
        ], n.error !== void 0) {
          o = !1;
          const d = typeof n.error == "function" ? await n.error(c) : n.error, u = typeof n.description == "function" ? await n.description(c) : n.description, g = typeof d == "object" && !x.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: r,
            type: "error",
            description: u,
            ...g
          });
        }
      }).finally(() => {
        o && (this.dismiss(r), r = void 0), n.finally == null || n.finally.call(n);
      }), l = () => new Promise((c, d) => s.then(() => i[0] === "reject" ? d(i[1]) : c(i[1])).catch(d));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: l
      } : Object.assign(r, {
        unwrap: l
      });
    }, this.custom = (t, n) => {
      const r = (n == null ? void 0 : n.id) || hl++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const Qe = new DP(), kP = (e, t) => {
  const n = (t == null ? void 0 : t.id) || hl++;
  return Qe.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, RP = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", IP = kP, AP = () => Qe.toasts, zP = () => Qe.getActiveToasts();
Object.assign(IP, {
  success: Qe.success,
  info: Qe.info,
  warning: Qe.warning,
  error: Qe.error,
  custom: Qe.custom,
  message: Qe.message,
  promise: Qe.promise,
  dismiss: Qe.dismiss,
  loading: Qe.loading
}, {
  getHistory: AP,
  getToasts: zP
});
xP("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Or(e) {
  return e.label !== void 0;
}
const LP = 3, qP = "24px", $P = "16px", pm = 4e3, BP = 356, jP = 14, FP = 45, HP = 200;
function xt(...e) {
  return e.filter(Boolean).join(" ");
}
function WP(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const YP = (e) => {
  var t, n, r, a, o, i, s, l, c;
  const { invert: d, toast: u, unstyled: m, interacting: g, setHeights: h, visibleToasts: b, heights: p, index: v, toasts: y, expanded: _, removeToast: C, defaultRichColors: D, closeButton: E, style: S, cancelButtonStyle: R, actionButtonStyle: k, className: Y = "", descriptionClassName: I = "", duration: F, position: T, gap: W, expandByDefault: j, classNames: $, icons: z, closeButtonAriaLabel: q = "Close toast" } = e, [ee, ie] = x.useState(null), [K, O] = x.useState(null), [N, L] = x.useState(!1), [A, B] = x.useState(!1), [H, V] = x.useState(!1), [Q, ne] = x.useState(!1), [ae, G] = x.useState(!1), [Z, P] = x.useState(0), [X, se] = x.useState(0), ce = x.useRef(u.duration || F || pm), le = x.useRef(null), oe = x.useRef(null), ge = v === 0, De = v + 1 <= b, me = u.type, Pe = u.dismissible !== !1, Fe = u.className || "", He = u.descriptionClassName || "", Le = x.useMemo(() => p.findIndex((te) => te.toastId === u.id) || 0, [
    p,
    u.id
  ]), Ve = x.useMemo(() => {
    var te;
    return (te = u.closeButton) != null ? te : E;
  }, [
    u.closeButton,
    E
  ]), at = x.useMemo(() => u.duration || F || pm, [
    u.duration,
    F
  ]), ot = x.useRef(0), Ae = x.useRef(0), wt = x.useRef(0), ze = x.useRef(null), [qe, Et] = T.split("-"), It = x.useMemo(() => p.reduce((te, fe, _e) => _e >= Le ? te : te + fe.height, 0), [
    p,
    Le
  ]), fn = MP(), kn = u.invert || d, Ht = me === "loading";
  Ae.current = x.useMemo(() => Le * W + It, [
    Le,
    It
  ]), x.useEffect(() => {
    ce.current = at;
  }, [
    at
  ]), x.useEffect(() => {
    L(!0);
  }, []), x.useEffect(() => {
    const te = oe.current;
    if (te) {
      const fe = te.getBoundingClientRect().height;
      return se(fe), h((_e) => [
        {
          toastId: u.id,
          height: fe,
          position: u.position
        },
        ..._e
      ]), () => h((_e) => _e.filter((Ce) => Ce.toastId !== u.id));
    }
  }, [
    h,
    u.id
  ]), x.useLayoutEffect(() => {
    if (!N) return;
    const te = oe.current, fe = te.style.height;
    te.style.height = "auto";
    const _e = te.getBoundingClientRect().height;
    te.style.height = fe, se(_e), h((Ce) => Ce.find((Ne) => Ne.toastId === u.id) ? Ce.map((Ne) => Ne.toastId === u.id ? {
      ...Ne,
      height: _e
    } : Ne) : [
      {
        toastId: u.id,
        height: _e,
        position: u.position
      },
      ...Ce
    ]);
  }, [
    N,
    u.title,
    u.description,
    h,
    u.id
  ]);
  const J = x.useCallback(() => {
    B(!0), P(Ae.current), h((te) => te.filter((fe) => fe.toastId !== u.id)), setTimeout(() => {
      C(u);
    }, HP);
  }, [
    u,
    C,
    h,
    Ae
  ]);
  x.useEffect(() => {
    if (u.promise && me === "loading" || u.duration === 1 / 0 || u.type === "loading") return;
    let te;
    return _ || g || fn ? (() => {
      if (wt.current < ot.current) {
        const Ce = (/* @__PURE__ */ new Date()).getTime() - ot.current;
        ce.current = ce.current - Ce;
      }
      wt.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      ce.current !== 1 / 0 && (ot.current = (/* @__PURE__ */ new Date()).getTime(), te = setTimeout(() => {
        u.onAutoClose == null || u.onAutoClose.call(u, u), J();
      }, ce.current));
    })(), () => clearTimeout(te);
  }, [
    _,
    g,
    u,
    me,
    fn,
    J
  ]), x.useEffect(() => {
    u.delete && J();
  }, [
    J,
    u.delete
  ]);
  function pe() {
    var te;
    if (z != null && z.loading) {
      var fe;
      return /* @__PURE__ */ x.createElement("div", {
        className: xt($ == null ? void 0 : $.loader, u == null || (fe = u.classNames) == null ? void 0 : fe.loader, "sonner-loader"),
        "data-visible": me === "loading"
      }, z.loading);
    }
    return /* @__PURE__ */ x.createElement(CP, {
      className: xt($ == null ? void 0 : $.loader, u == null || (te = u.classNames) == null ? void 0 : te.loader),
      visible: me === "loading"
    });
  }
  const ve = u.icon || (z == null ? void 0 : z[me]) || _P(me);
  var de, Se;
  return /* @__PURE__ */ x.createElement("li", {
    tabIndex: 0,
    ref: oe,
    className: xt(Y, Fe, $ == null ? void 0 : $.toast, u == null || (t = u.classNames) == null ? void 0 : t.toast, $ == null ? void 0 : $.default, $ == null ? void 0 : $[me], u == null || (n = u.classNames) == null ? void 0 : n[me]),
    "data-sonner-toast": "",
    "data-rich-colors": (de = u.richColors) != null ? de : D,
    "data-styled": !(u.jsx || u.unstyled || m),
    "data-mounted": N,
    "data-promise": !!u.promise,
    "data-swiped": ae,
    "data-removed": A,
    "data-visible": De,
    "data-y-position": qe,
    "data-x-position": Et,
    "data-index": v,
    "data-front": ge,
    "data-swiping": H,
    "data-dismissible": Pe,
    "data-type": me,
    "data-invert": kn,
    "data-swipe-out": Q,
    "data-swipe-direction": K,
    "data-expanded": !!(_ || j && N),
    style: {
      "--index": v,
      "--toasts-before": v,
      "--z-index": y.length - v,
      "--offset": `${A ? Z : Ae.current}px`,
      "--initial-height": j ? "auto" : `${X}px`,
      ...S,
      ...u.style
    },
    onDragEnd: () => {
      V(!1), ie(null), ze.current = null;
    },
    onPointerDown: (te) => {
      Ht || !Pe || (le.current = /* @__PURE__ */ new Date(), P(Ae.current), te.target.setPointerCapture(te.pointerId), te.target.tagName !== "BUTTON" && (V(!0), ze.current = {
        x: te.clientX,
        y: te.clientY
      }));
    },
    onPointerUp: () => {
      var te, fe, _e;
      if (Q || !Pe) return;
      ze.current = null;
      const Ce = Number(((te = oe.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), it = Number(((fe = oe.current) == null ? void 0 : fe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ne = (/* @__PURE__ */ new Date()).getTime() - ((_e = le.current) == null ? void 0 : _e.getTime()), Te = ee === "x" ? Ce : it, Tt = Math.abs(Te) / Ne;
      if (Math.abs(Te) >= FP || Tt > 0.11) {
        P(Ae.current), u.onDismiss == null || u.onDismiss.call(u, u), O(ee === "x" ? Ce > 0 ? "right" : "left" : it > 0 ? "down" : "up"), J(), ne(!0);
        return;
      } else {
        var Ge, dt;
        (Ge = oe.current) == null || Ge.style.setProperty("--swipe-amount-x", "0px"), (dt = oe.current) == null || dt.style.setProperty("--swipe-amount-y", "0px");
      }
      G(!1), V(!1), ie(null);
    },
    onPointerMove: (te) => {
      var fe, _e, Ce;
      if (!ze.current || !Pe || ((fe = window.getSelection()) == null ? void 0 : fe.toString().length) > 0) return;
      const Ne = te.clientY - ze.current.y, Te = te.clientX - ze.current.x;
      var Tt;
      const Ge = (Tt = e.swipeDirections) != null ? Tt : WP(T);
      !ee && (Math.abs(Te) > 1 || Math.abs(Ne) > 1) && ie(Math.abs(Te) > Math.abs(Ne) ? "x" : "y");
      let dt = {
        x: 0,
        y: 0
      };
      const au = (Wt) => 1 / (1.5 + Math.abs(Wt) / 20);
      if (ee === "y") {
        if (Ge.includes("top") || Ge.includes("bottom"))
          if (Ge.includes("top") && Ne < 0 || Ge.includes("bottom") && Ne > 0)
            dt.y = Ne;
          else {
            const Wt = Ne * au(Ne);
            dt.y = Math.abs(Wt) < Math.abs(Ne) ? Wt : Ne;
          }
      } else if (ee === "x" && (Ge.includes("left") || Ge.includes("right")))
        if (Ge.includes("left") && Te < 0 || Ge.includes("right") && Te > 0)
          dt.x = Te;
        else {
          const Wt = Te * au(Te);
          dt.x = Math.abs(Wt) < Math.abs(Te) ? Wt : Te;
        }
      (Math.abs(dt.x) > 0 || Math.abs(dt.y) > 0) && G(!0), (_e = oe.current) == null || _e.style.setProperty("--swipe-amount-x", `${dt.x}px`), (Ce = oe.current) == null || Ce.style.setProperty("--swipe-amount-y", `${dt.y}px`);
    }
  }, Ve && !u.jsx && me !== "loading" ? /* @__PURE__ */ x.createElement("button", {
    "aria-label": q,
    "data-disabled": Ht,
    "data-close-button": !0,
    onClick: Ht || !Pe ? () => {
    } : () => {
      J(), u.onDismiss == null || u.onDismiss.call(u, u);
    },
    className: xt($ == null ? void 0 : $.closeButton, u == null || (r = u.classNames) == null ? void 0 : r.closeButton)
  }, (Se = z == null ? void 0 : z.close) != null ? Se : OP) : null, (me || u.icon || u.promise) && u.icon !== null && ((z == null ? void 0 : z[me]) !== null || u.icon) ? /* @__PURE__ */ x.createElement("div", {
    "data-icon": "",
    className: xt($ == null ? void 0 : $.icon, u == null || (a = u.classNames) == null ? void 0 : a.icon)
  }, u.promise || u.type === "loading" && !u.icon ? u.icon || pe() : null, u.type !== "loading" ? ve : null) : null, /* @__PURE__ */ x.createElement("div", {
    "data-content": "",
    className: xt($ == null ? void 0 : $.content, u == null || (o = u.classNames) == null ? void 0 : o.content)
  }, /* @__PURE__ */ x.createElement("div", {
    "data-title": "",
    className: xt($ == null ? void 0 : $.title, u == null || (i = u.classNames) == null ? void 0 : i.title)
  }, u.jsx ? u.jsx : typeof u.title == "function" ? u.title() : u.title), u.description ? /* @__PURE__ */ x.createElement("div", {
    "data-description": "",
    className: xt(I, He, $ == null ? void 0 : $.description, u == null || (s = u.classNames) == null ? void 0 : s.description)
  }, typeof u.description == "function" ? u.description() : u.description) : null), /* @__PURE__ */ x.isValidElement(u.cancel) ? u.cancel : u.cancel && Or(u.cancel) ? /* @__PURE__ */ x.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: u.cancelButtonStyle || R,
    onClick: (te) => {
      Or(u.cancel) && Pe && (u.cancel.onClick == null || u.cancel.onClick.call(u.cancel, te), J());
    },
    className: xt($ == null ? void 0 : $.cancelButton, u == null || (l = u.classNames) == null ? void 0 : l.cancelButton)
  }, u.cancel.label) : null, /* @__PURE__ */ x.isValidElement(u.action) ? u.action : u.action && Or(u.action) ? /* @__PURE__ */ x.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: u.actionButtonStyle || k,
    onClick: (te) => {
      Or(u.action) && (u.action.onClick == null || u.action.onClick.call(u.action, te), !te.defaultPrevented && J());
    },
    className: xt($ == null ? void 0 : $.actionButton, u == null || (c = u.classNames) == null ? void 0 : c.actionButton)
  }, u.action.label) : null);
};
function hm() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function VP(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, a) => {
    const o = a === 1, i = o ? "--mobile-offset" : "--offset", s = o ? $P : qP;
    function l(c) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((d) => {
        n[`${i}-${d}`] = typeof c == "number" ? `${c}px` : c;
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
const GP = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const { invert: r, position: a = "bottom-right", hotkey: o = [
    "altKey",
    "KeyT"
  ], expand: i, closeButton: s, className: l, offset: c, mobileOffset: d, theme: u = "light", richColors: m, duration: g, style: h, visibleToasts: b = LP, toastOptions: p, dir: v = hm(), gap: y = jP, icons: _, containerAriaLabel: C = "Notifications" } = t, [D, E] = x.useState([]), S = x.useMemo(() => Array.from(new Set([
    a
  ].concat(D.filter((K) => K.position).map((K) => K.position)))), [
    D,
    a
  ]), [R, k] = x.useState([]), [Y, I] = x.useState(!1), [F, T] = x.useState(!1), [W, j] = x.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), $ = x.useRef(null), z = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), q = x.useRef(null), ee = x.useRef(!1), ie = x.useCallback((K) => {
    E((O) => {
      var N;
      return (N = O.find((L) => L.id === K.id)) != null && N.delete || Qe.dismiss(K.id), O.filter(({ id: L }) => L !== K.id);
    });
  }, []);
  return x.useEffect(() => Qe.subscribe((K) => {
    if (K.dismiss) {
      requestAnimationFrame(() => {
        E((O) => O.map((N) => N.id === K.id ? {
          ...N,
          delete: !0
        } : N));
      });
      return;
    }
    setTimeout(() => {
      gg.flushSync(() => {
        E((O) => {
          const N = O.findIndex((L) => L.id === K.id);
          return N !== -1 ? [
            ...O.slice(0, N),
            {
              ...O[N],
              ...K
            },
            ...O.slice(N + 1)
          ] : [
            K,
            ...O
          ];
        });
      });
    });
  }), [
    D
  ]), x.useEffect(() => {
    if (u !== "system") {
      j(u);
      return;
    }
    if (u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? j("dark") : j("light")), typeof window > "u") return;
    const K = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      K.addEventListener("change", ({ matches: O }) => {
        j(O ? "dark" : "light");
      });
    } catch {
      K.addListener(({ matches: N }) => {
        try {
          j(N ? "dark" : "light");
        } catch (L) {
          console.error(L);
        }
      });
    }
  }, [
    u
  ]), x.useEffect(() => {
    D.length <= 1 && I(!1);
  }, [
    D
  ]), x.useEffect(() => {
    const K = (O) => {
      var N;
      if (o.every((B) => O[B] || O.code === B)) {
        var A;
        I(!0), (A = $.current) == null || A.focus();
      }
      O.code === "Escape" && (document.activeElement === $.current || (N = $.current) != null && N.contains(document.activeElement)) && I(!1);
    };
    return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
  }, [
    o
  ]), x.useEffect(() => {
    if ($.current)
      return () => {
        q.current && (q.current.focus({
          preventScroll: !0
        }), q.current = null, ee.current = !1);
      };
  }, [
    $.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ x.createElement("section", {
    ref: n,
    "aria-label": `${C} ${z}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, S.map((K, O) => {
    var N;
    const [L, A] = K.split("-");
    return D.length ? /* @__PURE__ */ x.createElement("ol", {
      key: K,
      dir: v === "auto" ? hm() : v,
      tabIndex: -1,
      ref: $,
      className: l,
      "data-sonner-toaster": !0,
      "data-sonner-theme": W,
      "data-y-position": L,
      "data-lifted": Y && D.length > 1 && !i,
      "data-x-position": A,
      style: {
        "--front-toast-height": `${((N = R[0]) == null ? void 0 : N.height) || 0}px`,
        "--width": `${BP}px`,
        "--gap": `${y}px`,
        ...h,
        ...VP(c, d)
      },
      onBlur: (B) => {
        ee.current && !B.currentTarget.contains(B.relatedTarget) && (ee.current = !1, q.current && (q.current.focus({
          preventScroll: !0
        }), q.current = null));
      },
      onFocus: (B) => {
        B.target instanceof HTMLElement && B.target.dataset.dismissible === "false" || ee.current || (ee.current = !0, q.current = B.relatedTarget);
      },
      onMouseEnter: () => I(!0),
      onMouseMove: () => I(!0),
      onMouseLeave: () => {
        F || I(!1);
      },
      onDragEnd: () => I(!1),
      onPointerDown: (B) => {
        B.target instanceof HTMLElement && B.target.dataset.dismissible === "false" || T(!0);
      },
      onPointerUp: () => T(!1)
    }, D.filter((B) => !B.position && O === 0 || B.position === K).map((B, H) => {
      var V, Q;
      return /* @__PURE__ */ x.createElement(YP, {
        key: B.id,
        icons: _,
        index: H,
        toast: B,
        defaultRichColors: m,
        duration: (V = p == null ? void 0 : p.duration) != null ? V : g,
        className: p == null ? void 0 : p.className,
        descriptionClassName: p == null ? void 0 : p.descriptionClassName,
        invert: r,
        visibleToasts: b,
        closeButton: (Q = p == null ? void 0 : p.closeButton) != null ? Q : s,
        interacting: F,
        position: K,
        style: p == null ? void 0 : p.style,
        unstyled: p == null ? void 0 : p.unstyled,
        classNames: p == null ? void 0 : p.classNames,
        cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
        actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
        closeButtonAriaLabel: p == null ? void 0 : p.closeButtonAriaLabel,
        removeToast: ie,
        toasts: D.filter((ne) => ne.position == B.position),
        heights: R.filter((ne) => ne.position == B.position),
        setHeights: k,
        expandByDefault: i,
        gap: y,
        expanded: Y,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), $O = ({ ...e }) => {
  const { theme: t = "system" } = wP();
  return /* @__PURE__ */ f(
    GP,
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
function BO({ ...e }) {
  return /* @__PURE__ */ f(
    Qr.Root,
    {
      "data-slot": "tabs",
      className: w("flex flex-col gap-2"),
      ...e
    }
  );
}
function jO({ ...e }) {
  return /* @__PURE__ */ f(
    Qr.List,
    {
      "data-slot": "tabs-list",
      className: w(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex"
      ),
      ...e
    }
  );
}
function FO({ ...e }) {
  return /* @__PURE__ */ f(
    Qr.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: w(
        "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      ),
      ...e
    }
  );
}
function HO({ ...e }) {
  return /* @__PURE__ */ f(
    Qr.Content,
    {
      "data-slot": "tabs-content",
      className: w("flex-1 outline-none"),
      ...e
    }
  );
}
const Bh = qt(
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
function WO({
  className: e,
  variant: t,
  size: n,
  ...r
}) {
  return /* @__PURE__ */ f(
    vg.Root,
    {
      "data-slot": "toggle",
      className: w(Bh({ variant: t, size: n, className: e })),
      ...r
    }
  );
}
const jh = M.createContext({
  size: "default",
  variant: "default"
});
function YO({
  className: e,
  variant: t,
  size: n,
  children: r,
  ...a
}) {
  return /* @__PURE__ */ f(
    Sm.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": n,
      className: w(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        e
      ),
      ...a,
      children: /* @__PURE__ */ f(jh.Provider, { value: { variant: t, size: n }, children: r })
    }
  );
}
function VO({
  className: e,
  children: t,
  variant: n,
  size: r,
  ...a
}) {
  const o = M.useContext(jh);
  return /* @__PURE__ */ f(
    Sm.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": o.variant || n,
      "data-size": o.size || r,
      className: w(
        Bh({
          variant: o.variant || n,
          size: o.size || r
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        e
      ),
      ...a,
      children: t
    }
  );
}
export {
  $N as Accordion,
  FN as AccordionContent,
  BN as AccordionItem,
  jN as AccordionTrigger,
  iN as Alert,
  sN as AlertDescription,
  HN as AlertDialog,
  XN as AlertDialogAction,
  QN as AlertDialogCancel,
  YN as AlertDialogContent,
  KN as AlertDialogDescription,
  GN as AlertDialogFooter,
  VN as AlertDialogHeader,
  jg as AlertDialogOverlay,
  Bg as AlertDialogPortal,
  UN as AlertDialogTitle,
  WN as AlertDialogTrigger,
  yg as AlertTitle,
  JN as AspectRatio,
  ZN as Avatar,
  tE as AvatarFallback,
  eE as AvatarImage,
  lN as Badge,
  nE as Breadcrumb,
  lE as BreadcrumbEllipsis,
  aE as BreadcrumbItem,
  oE as BreadcrumbLink,
  rE as BreadcrumbList,
  iE as BreadcrumbPage,
  sE as BreadcrumbSeparator,
  Jr as Button,
  uE as Calendar,
  uN as Card,
  mN as CardAction,
  pN as CardContent,
  fN as CardDescription,
  hN as CardFooter,
  cN as CardHeader,
  dN as CardTitle,
  cE as Carousel,
  dE as CarouselContent,
  fE as CarouselItem,
  pE as CarouselNext,
  mE as CarouselPrevious,
  hE as ChartContainer,
  bE as ChartLegend,
  yE as ChartLegendContent,
  k_ as ChartStyle,
  gE as ChartTooltip,
  vE as ChartTooltipContent,
  wE as Checkbox,
  xE as Collapsible,
  SE as CollapsibleContent,
  _E as CollapsibleTrigger,
  cS as Command,
  EE as CommandDialog,
  ME as CommandEmpty,
  DE as CommandGroup,
  TE as CommandInput,
  RE as CommandItem,
  OE as CommandList,
  kE as CommandSeparator,
  IE as CommandShortcut,
  Rg as Container,
  AE as ContextMenu,
  YE as ContextMenuCheckboxItem,
  HE as ContextMenuContent,
  LE as ContextMenuGroup,
  WE as ContextMenuItem,
  GE as ContextMenuLabel,
  qE as ContextMenuPortal,
  BE as ContextMenuRadioGroup,
  VE as ContextMenuRadioItem,
  UE as ContextMenuSeparator,
  KE as ContextMenuShortcut,
  $E as ContextMenuSub,
  FE as ContextMenuSubContent,
  jE as ContextMenuSubTrigger,
  zE as ContextMenuTrigger,
  RN as DataTable,
  rS as Dialog,
  PE as DialogClose,
  iS as DialogContent,
  uS as DialogDescription,
  NE as DialogFooter,
  sS as DialogHeader,
  oS as DialogOverlay,
  aS as DialogPortal,
  lS as DialogTitle,
  CE as DialogTrigger,
  XE as Drawer,
  JE as DrawerClose,
  ZE as DrawerContent,
  rT as DrawerDescription,
  tT as DrawerFooter,
  eT as DrawerHeader,
  BS as DrawerOverlay,
  $S as DrawerPortal,
  nT as DrawerTitle,
  QE as DrawerTrigger,
  AN as Dropdown,
  aT as DropdownMenu,
  cT as DropdownMenuCheckboxItem,
  sT as DropdownMenuContent,
  lT as DropdownMenuGroup,
  uT as DropdownMenuItem,
  mT as DropdownMenuLabel,
  oT as DropdownMenuPortal,
  dT as DropdownMenuRadioGroup,
  fT as DropdownMenuRadioItem,
  pT as DropdownMenuSeparator,
  hT as DropdownMenuShortcut,
  gT as DropdownMenuSub,
  bT as DropdownMenuSubContent,
  vT as DropdownMenuSubTrigger,
  iT as DropdownMenuTrigger,
  Ig as Flex,
  yT as Form,
  ST as FormControl,
  CT as FormDescription,
  wT as FormField,
  xT as FormItem,
  _T as FormLabel,
  PT as FormMessage,
  PN as FullScreenLoader,
  Ag as Grid,
  NT as HoverCard,
  TT as HoverCardContent,
  ET as HoverCardTrigger,
  Cm as Input,
  OT as InputOTP,
  MT as InputOTPGroup,
  kT as InputOTPSeparator,
  DT as InputOTPSlot,
  aC as Label,
  Pm as Loader,
  NN as LoadingOverlay,
  RT as Menubar,
  BT as MenubarCheckboxItem,
  qT as MenubarContent,
  AT as MenubarGroup,
  $T as MenubarItem,
  FT as MenubarLabel,
  IT as MenubarMenu,
  bC as MenubarPortal,
  zT as MenubarRadioGroup,
  jT as MenubarRadioItem,
  HT as MenubarSeparator,
  WT as MenubarShortcut,
  YT as MenubarSub,
  GT as MenubarSubContent,
  VT as MenubarSubTrigger,
  LT as MenubarTrigger,
  Zr as Modal,
  UT as NavigationMenu,
  JT as NavigationMenuContent,
  eO as NavigationMenuIndicator,
  XT as NavigationMenuItem,
  ZT as NavigationMenuLink,
  KT as NavigationMenuList,
  QT as NavigationMenuTrigger,
  wC as NavigationMenuViewport,
  $g as Padded,
  Pg as Pagination,
  Ng as PaginationContent,
  EN as PaginationEllipsis,
  wa as PaginationItem,
  bl as PaginationLink,
  Tg as PaginationNext,
  Eg as PaginationPrevious,
  tO as Popover,
  aO as PopoverAnchor,
  rO as PopoverContent,
  nO as PopoverTrigger,
  oO as Progress,
  iO as RadioGroup,
  sO as RadioGroupItem,
  cO as ResizableHandle,
  uO as ResizablePanel,
  lO as ResizablePanelGroup,
  dO as ScrollArea,
  QC as ScrollBar,
  gN as Select,
  qN as SelectBox,
  wN as SelectContent,
  vN as SelectGroup,
  _N as SelectItem,
  xN as SelectLabel,
  Sg as SelectScrollDownButton,
  _g as SelectScrollUpButton,
  SN as SelectSeparator,
  yN as SelectTrigger,
  bN as SelectValue,
  JC as Separator,
  ZC as Sheet,
  mO as SheetClose,
  nP as SheetContent,
  oP as SheetDescription,
  pO as SheetFooter,
  rP as SheetHeader,
  aP as SheetTitle,
  fO as SheetTrigger,
  gO as Sidebar,
  CO as SidebarContent,
  _O as SidebarFooter,
  PO as SidebarGroup,
  EO as SidebarGroupAction,
  TO as SidebarGroupContent,
  NO as SidebarGroupLabel,
  xO as SidebarHeader,
  wO as SidebarInput,
  yO as SidebarInset,
  OO as SidebarMenu,
  kO as SidebarMenuAction,
  RO as SidebarMenuBadge,
  DO as SidebarMenuButton,
  MO as SidebarMenuItem,
  IO as SidebarMenuSkeleton,
  AO as SidebarMenuSub,
  LO as SidebarMenuSubButton,
  zO as SidebarMenuSubItem,
  hO as SidebarProvider,
  bO as SidebarRail,
  SO as SidebarSeparator,
  vO as SidebarTrigger,
  mm as Skeleton,
  qO as Slider,
  LN as StickyFooter,
  zN as StickyHeader,
  CN as Switch,
  Og as Table,
  Dg as TableBody,
  ON as TableCaption,
  uu as TableCell,
  DN as TableFilter,
  TN as TableFooter,
  kg as TableHead,
  Mg as TableHeader,
  kN as TablePagination,
  xa as TableRow,
  MN as TableSearch,
  BO as Tabs,
  HO as TabsContent,
  jO as TabsList,
  FO as TabsTrigger,
  IN as Textarea,
  $O as Toaster,
  WO as Toggle,
  YO as ToggleGroup,
  VO as ToggleGroupItem,
  sP as Tooltip,
  uP as TooltipContent,
  qh as TooltipProvider,
  lP as TooltipTrigger,
  wg as badgeVariants,
  Zt as buttonVariants,
  w as cn,
  Cg as loaderVariants,
  yC as navigationMenuTriggerStyle,
  Bh as toggleVariants,
  pa as useFormField,
  iP as useIsMobile,
  ya as useSidebar
};
