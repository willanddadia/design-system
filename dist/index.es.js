import { jsxs as U, jsx as d, Fragment as yt } from "react/jsx-runtime";
import { XCircle as qh, AlertCircle as $h, CheckCircle as Bh, Info as jh, CheckIcon as or, ChevronDownIcon as Wr, ChevronUpIcon as Fh, Loader2 as Hh, MoreHorizontalIcon as Wh, ChevronRightIcon as Yr, ChevronLeftIcon as Yh, Filter as Vh, Search as Gh, ChevronDown as Uh, Check as mm, X as Kh, MoreHorizontal as Xh, ChevronRight as pm, ChevronLeft as Qh, ArrowRight as Jh, ArrowLeft as Zh, XIcon as hm, SearchIcon as eg, CircleIcon as Vr, MinusIcon as tg, GripVerticalIcon as ng, PanelLeftIcon as rg } from "lucide-react";
import { cva as zt } from "class-variance-authority";
import Xt, { clsx as ag } from "clsx";
import { twMerge as og } from "tailwind-merge";
import { Slot as Mt } from "@radix-ui/react-slot";
import * as We from "@radix-ui/react-select";
import * as nu from "@radix-ui/react-switch";
import * as M from "react";
import x, { forwardRef as xt, useState as Ot, useRef as _n, useEffect as st, createContext as nn, useContext as rn, useLayoutEffect as gm, useCallback as vm, isValidElement as ig, PureComponent as Gr, useImperativeHandle as sg, useMemo as bm, cloneElement as lg } from "react";
import * as Yn from "@radix-ui/react-accordion";
import * as Dt from "@radix-ui/react-alert-dialog";
import * as ug from "@radix-ui/react-aspect-ratio";
import * as ml from "@radix-ui/react-avatar";
import * as ru from "@radix-ui/react-checkbox";
import * as pl from "@radix-ui/react-collapsible";
import * as we from "@radix-ui/react-dialog";
import { Primitive as Lt } from "@radix-ui/react-primitive";
import { useId as bn } from "@radix-ui/react-id";
import { composeRefs as Vn } from "@radix-ui/react-compose-refs";
import * as qe from "@radix-ui/react-context-menu";
import * as $e from "@radix-ui/react-dropdown-menu";
import * as cg from "@radix-ui/react-label";
import * as Or from "@radix-ui/react-hover-card";
import * as Be from "@radix-ui/react-menubar";
import * as qt from "@radix-ui/react-navigation-menu";
import * as Gn from "@radix-ui/react-popover";
import * as au from "@radix-ui/react-progress";
import * as js from "@radix-ui/react-radio-group";
import * as Hn from "@radix-ui/react-scroll-area";
import * as dg from "@radix-ui/react-separator";
import * as yn from "@radix-ui/react-tooltip";
import * as gr from "@radix-ui/react-slider";
import fg from "react-dom";
import * as Ur from "@radix-ui/react-tabs";
import * as ym from "@radix-ui/react-toggle-group";
import * as mg from "@radix-ui/react-toggle";
function w(...e) {
  return og(ag(e));
}
const pg = zt(
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
), ou = {
  default: jh,
  success: Bh,
  warning: $h,
  destructive: qh
};
function tN({
  className: e,
  variant: t = "default",
  ...n
}) {
  const r = ou[t] || ou.default;
  return /* @__PURE__ */ U(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: w(pg({ variant: t }), e),
      ...n,
      children: [
        /* @__PURE__ */ d(r, {}),
        n.children
      ]
    }
  );
}
function nN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "alert-title",
      className: w("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e),
      ...t
    }
  );
}
function rN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "alert-description",
      className: w(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        e
      ),
      ...t
    }
  );
}
const hg = zt(
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
function aN({
  className: e,
  variant: t,
  asChild: n = !1,
  ...r
}) {
  return /* @__PURE__ */ d(n ? Mt : "span", { "data-slot": "badge", className: w(hg({ variant: t }), e), ...r });
}
const Qt = zt(
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
function Kr({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  leftIcon: a,
  rightIcon: o,
  href: i,
  target: s,
  children: l,
  ...u
}) {
  return i ? /* @__PURE__ */ U(
    "a",
    {
      href: i,
      target: s,
      rel: s === "_blank" ? "noopener noreferrer" : void 0,
      className: w(Qt({ variant: t, size: n, className: e })),
      "data-slot": "button",
      children: [
        a,
        l,
        o
      ]
    }
  ) : /* @__PURE__ */ U(
    r ? Mt : "button",
    {
      "data-slot": "button",
      className: w(Qt({ variant: t, size: n, className: e })),
      ...u,
      children: [
        a,
        l,
        o
      ]
    }
  );
}
const gg = zt("bg-card text-card-foreground flex flex-col gap-6 rounded-xl", {
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
function oN({
  className: e,
  variant: t,
  ...n
}) {
  return /* @__PURE__ */ d("div", { "data-slot": "card", className: w(gg({ variant: t }), e), ...n });
}
function iN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "card-header",
      className: w(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function sN({ className: e, ...t }) {
  return /* @__PURE__ */ d("h4", { "data-slot": "card-title", className: w("leading-none", e), ...t });
}
function lN({ className: e, ...t }) {
  return /* @__PURE__ */ d("p", { "data-slot": "card-description", className: w("text-muted-foreground", e), ...t });
}
function uN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "card-action",
      className: w("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
      ...t
    }
  );
}
function cN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "card-content",
      className: w("px-6 [&:last-child]:pb-6", e),
      ...t
    }
  );
}
function dN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "card-footer",
      className: w("flex items-center px-6 pb-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
function wm({
  className: e,
  type: t,
  error: n,
  fieldSize: r = "default",
  ...a
}) {
  return /* @__PURE__ */ d(
    "input",
    {
      type: t,
      "data-slot": "input",
      "data-size": r,
      "aria-invalid": n,
      className: w(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "data-[size=sm]:h-8 data-[size=default]:h-9 data-[size=md]:h-11 data-[size=lg]:h-14",
        e
      ),
      ...a
    }
  );
}
function fN({ ...e }) {
  return /* @__PURE__ */ d(We.Root, { "data-slot": "select", ...e });
}
function mN({ ...e }) {
  return /* @__PURE__ */ d(We.Group, { "data-slot": "select-group", ...e });
}
function pN({ ...e }) {
  return /* @__PURE__ */ d(We.Value, { "data-slot": "select-value", ...e });
}
function hN({
  className: e,
  size: t = "default",
  error: n,
  children: r,
  ...a
}) {
  return /* @__PURE__ */ U(
    We.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      "aria-invalid": n,
      className: w(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...a,
      children: [
        r,
        /* @__PURE__ */ d(We.Icon, { asChild: !0, children: /* @__PURE__ */ d(Wr, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function gN({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ d(We.Portal, { children: /* @__PURE__ */ U(
    We.Content,
    {
      "data-slot": "select-content",
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ d(vg, {}),
        /* @__PURE__ */ d(
          We.Viewport,
          {
            className: w(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ d(bg, {})
      ]
    }
  ) });
}
function vN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    We.Label,
    {
      "data-slot": "select-label",
      className: w("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function bN({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    We.Item,
    {
      "data-slot": "select-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ d("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d(We.ItemIndicator, { children: /* @__PURE__ */ d(or, { className: "size-4" }) }) }),
        /* @__PURE__ */ d(We.ItemText, { children: t })
      ]
    }
  );
}
function yN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    We.Separator,
    {
      "data-slot": "select-separator",
      className: w("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function vg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    We.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: w("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ d(Fh, { className: "size-4" })
    }
  );
}
function bg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    We.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: w("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ d(Wr, { className: "size-4" })
    }
  );
}
function wN({
  className: e,
  label: t,
  ...n
}) {
  const r = /* @__PURE__ */ d(
    nu.Root,
    {
      "data-slot": "switch",
      className: w(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...n,
      children: /* @__PURE__ */ d(
        nu.Thumb,
        {
          "data-slot": "switch-thumb",
          className: w(
            "bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
  return t ? /* @__PURE__ */ U("label", { className: "flex items-center gap-3 cursor-pointer", children: [
    r,
    t && /* @__PURE__ */ d("span", { className: "text-sm font-medium", children: t })
  ] }) : r;
}
const yg = zt(
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
function xm({ className: e, size: t, ...n }) {
  return /* @__PURE__ */ d("div", { "data-slot": "loader", className: w("flex items-center justify-center", e), ...n, children: /* @__PURE__ */ d(Hh, { className: w(yg({ size: t })) }) });
}
function xN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "full-screen-loader",
      className: w(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d(xm, { size: "xl" })
    }
  );
}
function _N({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "loading-overlay",
      className: w(
        "absolute inset-0 z-10 flex items-center justify-center bg-background/50 backdrop-blur-[1px]",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d(xm, {})
    }
  );
}
function wg({ className: e, ...t }) {
  return /* @__PURE__ */ d(
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
function xg({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "ul",
    {
      "data-slot": "pagination-content",
      className: w("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function va({ ...e }) {
  return /* @__PURE__ */ d("li", { "data-slot": "pagination-item", ...e });
}
function hl({ className: e, isActive: t, size: n = "icon", ...r }) {
  return /* @__PURE__ */ d(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: w(
        Qt({
          variant: t ? "outline" : "ghost",
          size: n
        }),
        e
      ),
      ...r
    }
  );
}
function _g({ className: e, ...t }) {
  return /* @__PURE__ */ U(
    hl,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: w("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ d(Yh, {}),
        /* @__PURE__ */ d("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function Sg({ className: e, ...t }) {
  return /* @__PURE__ */ U(
    hl,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: w("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ d("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ d(Yr, {})
      ]
    }
  );
}
function SN({ className: e, ...t }) {
  return /* @__PURE__ */ U(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: w("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ d(Wh, { className: "size-4" }),
        /* @__PURE__ */ d("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function Cg({ className: e, ...t }) {
  return /* @__PURE__ */ d("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ d(
    "table",
    {
      "data-slot": "table",
      className: w("w-full caption-bottom text-sm", e),
      ...t
    }
  ) });
}
function Pg({ className: e, ...t }) {
  return /* @__PURE__ */ d("thead", { "data-slot": "table-header", className: w("[&_tr]:border-b", e), ...t });
}
function Ng({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "tbody",
    {
      "data-slot": "table-body",
      className: w("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function CN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: w("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
      ...t
    }
  );
}
function ba({ className: e, ...t }) {
  return /* @__PURE__ */ d(
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
function Eg({ className: e, ...t }) {
  return /* @__PURE__ */ d(
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
function iu({ className: e, ...t }) {
  return /* @__PURE__ */ d(
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
function PN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "caption",
    {
      "data-slot": "table-caption",
      className: w("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function NN({ className: e, ...t }) {
  return /* @__PURE__ */ U("div", { className: "relative", children: [
    /* @__PURE__ */ d(Gh, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }),
    /* @__PURE__ */ d(
      wm,
      {
        type: "search",
        placeholder: "Search...",
        className: w("pl-8", e),
        ...t
      }
    )
  ] });
}
function EN({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(Kr, { variant: "outline", size: "sm", className: w("gap-2", e), ...n, children: [
    /* @__PURE__ */ d(Vh, { className: "h-4 w-4" }),
    t || "Filter"
  ] });
}
function TN({
  currentPage: e,
  totalPages: t,
  onPageChange: n,
  className: r
}) {
  return /* @__PURE__ */ d(wg, { className: w("mt-4", r), children: /* @__PURE__ */ U(xg, { children: [
    /* @__PURE__ */ d(va, { children: /* @__PURE__ */ d(
      _g,
      {
        href: "#",
        onClick: (a) => {
          a.preventDefault(), e > 1 && n(e - 1);
        }
      }
    ) }),
    [...Array(t)].map((a, o) => /* @__PURE__ */ d(va, { children: /* @__PURE__ */ d(
      hl,
      {
        href: "#",
        isActive: e === o + 1,
        onClick: (i) => {
          i.preventDefault(), n(o + 1);
        },
        children: o + 1
      }
    ) }, o)),
    /* @__PURE__ */ d(va, { children: /* @__PURE__ */ d(
      Sg,
      {
        href: "#",
        onClick: (a) => {
          a.preventDefault(), e < t && n(e + 1);
        }
      }
    ) })
  ] }) });
}
function ON({
  data: e,
  columns: t,
  bordered: n = !0,
  striped: r = !1,
  className: a = "",
  ...o
}) {
  return /* @__PURE__ */ d(
    "div",
    {
      className: w("w-full overflow-auto rounded-lg", n && "border", a),
      ...o,
      children: /* @__PURE__ */ U(Cg, { children: [
        /* @__PURE__ */ d(Pg, { className: "bg-muted/50", children: /* @__PURE__ */ d(ba, { children: t.map((i, s) => /* @__PURE__ */ d(Eg, { className: w(n && s !== 0 && "border-l"), children: i.header }, i.key)) }) }),
        /* @__PURE__ */ U(Ng, { children: [
          e.map((i, s) => /* @__PURE__ */ d(ba, { className: w(r && s % 2 === 1 && "bg-muted/30"), children: t.map((l, u) => /* @__PURE__ */ d(
            iu,
            {
              className: w(n && u !== 0 && "border-l"),
              children: l.render ? l.render(i) : i[l.key]
            },
            l.key
          )) }, s)),
          e.length === 0 && /* @__PURE__ */ d(ba, { children: /* @__PURE__ */ d(
            iu,
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
function MN({
  className: e,
  error: t,
  fieldSize: n = "default",
  ...r
}) {
  return /* @__PURE__ */ d(
    "textarea",
    {
      "data-slot": "textarea",
      "data-size": n,
      "aria-invalid": t,
      className: w(
        "resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "data-[size=sm]:min-h-20 data-[size=default]:min-h-24 data-[size=md]:min-h-28 data-[size=lg]:min-h-32",
        e
      ),
      ...r
    }
  );
}
const Tg = xt(
  ({ margin: e = "none", bordered: t = !1, className: n = "", children: r, ...a }, o) => /* @__PURE__ */ d(
    "div",
    {
      ref: o,
      className: `${{
        none: "",
        sm: "m-2",
        md: "m-4",
        lg: "m-6",
        xl: "m-8"
      }[e]} ${t ? "border-2 border-border rounded-lg" : ""} ${n}`,
      ...a,
      children: r
    }
  )
);
Tg.displayName = "Container";
function DN({
  options: e,
  value: t,
  onChange: n,
  placeholder: r = "Select an option...",
  error: a = !1,
  disabled: o = !1,
  size: i = "md",
  className: s = ""
}) {
  const [l, u] = Ot(!1), f = _n(null), c = e.find((h) => h.value === t), m = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4",
    lg: "h-14 px-5 text-lg"
  };
  st(() => {
    const h = (b) => {
      f.current && !f.current.contains(b.target) && u(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []);
  const g = (h) => {
    n == null || n(h), u(!1);
  };
  return /* @__PURE__ */ U("div", { ref: f, className: `relative ${s}`, children: [
    /* @__PURE__ */ U(
      "button",
      {
        type: "button",
        onClick: () => !o && u(!l),
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
          ${c ? "" : "text-muted-foreground"}
        `,
        children: [
          /* @__PURE__ */ d("span", { children: c ? c.label : r }),
          /* @__PURE__ */ d(Uh, { className: `w-5 h-5 transition-transform ${l ? "rotate-180" : ""}` })
        ]
      }
    ),
    l && /* @__PURE__ */ d("div", { className: "absolute z-50 w-full mt-2 bg-popover border-2 border-border rounded-lg shadow-lg max-h-60 overflow-auto", children: e.map((h) => /* @__PURE__ */ U(
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
          /* @__PURE__ */ d("span", { children: h.label }),
          h.value === t && /* @__PURE__ */ d(mm, { className: "w-5 h-5 text-primary" })
        ]
      },
      h.value
    )) })
  ] });
}
const Og = xt(
  ({
    direction: e = "row",
    justify: t = "start",
    align: n = "start",
    wrap: r = !1,
    gap: a = "none",
    className: o = "",
    children: i,
    ...s
  }, l) => {
    const u = {
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
    }, c = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline"
    }, m = {
      none: "",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8"
    };
    return /* @__PURE__ */ d(
      "div",
      {
        ref: l,
        className: `flex ${u[e]} ${f[t]} ${c[n]} ${r ? "flex-wrap" : ""} ${m[a]} ${o}`,
        ...s,
        children: i
      }
    );
  }
);
Og.displayName = "Flex";
const Mg = xt(
  ({ cols: e = "auto", gap: t = "md", rows: n = "auto", className: r = "", children: a, ...o }, i) => {
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
    }, u = n === "auto" ? "" : `grid-rows-${n}`;
    return /* @__PURE__ */ d(
      "div",
      {
        ref: i,
        className: `grid ${s[e]} ${l[t]} ${u} ${r}`,
        ...o,
        children: a
      }
    );
  }
);
Mg.displayName = "Grid";
const Xr = xt(
  ({ isOpen: e, onClose: t, variant: n = "popup", title: r, className: a = "", children: o, ...i }, s) => {
    if (st(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
      document.body.style.overflow = "unset";
    }), [e]), st(() => {
      const c = (m) => {
        m.key === "Escape" && e && t();
      };
      return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
    }, [e, t]), !e) return null;
    const l = {
      fullscreen: "inset-0",
      popup: "inset-0 flex items-center justify-center p-4",
      side: "inset-y-0 right-0"
    }, u = {
      fullscreen: "w-full h-full bg-background",
      popup: "bg-card rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto",
      side: "w-full max-w-md h-full bg-card shadow-2xl"
    }, f = {
      fullscreen: "animate-in fade-in duration-200",
      popup: "animate-in fade-in zoom-in-95 duration-200",
      side: "animate-in slide-in-from-right duration-300"
    };
    return /* @__PURE__ */ U("div", { className: "fixed inset-0 z-50", children: [
      /* @__PURE__ */ d(
        "div",
        {
          className: "fixed inset-0 bg-black/50 animate-in fade-in duration-200",
          onClick: t
        }
      ),
      /* @__PURE__ */ d("div", { className: `fixed ${l[n]}`, children: /* @__PURE__ */ U(
        "div",
        {
          ref: s,
          className: `relative ${u[n]} ${f[n]} ${a}`,
          ...i,
          children: [
            (r || n !== "fullscreen") && /* @__PURE__ */ U("div", { className: "flex items-center justify-between p-6 border-b-2 border-border", children: [
              r && /* @__PURE__ */ d("h2", { children: r }),
              /* @__PURE__ */ d(
                "button",
                {
                  onClick: t,
                  className: "ml-auto p-2 rounded-lg hover:bg-accent transition-colors",
                  "aria-label": "Close modal",
                  children: /* @__PURE__ */ d(Kh, { className: "w-5 h-5" })
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "p-6", children: o })
          ]
        }
      ) })
    ] });
  }
);
Xr.displayName = "Modal";
const Dg = xt(
  (e, t) => /* @__PURE__ */ d(Xr, { ref: t, variant: "fullscreen", ...e })
);
Dg.displayName = "FullscreenModal";
const kg = xt((e, t) => /* @__PURE__ */ d(Xr, { ref: t, variant: "popup", ...e }));
kg.displayName = "PopupModal";
const Rg = xt((e, t) => /* @__PURE__ */ d(Xr, { ref: t, variant: "side", ...e }));
Rg.displayName = "SideModal";
const Ig = xt(
  ({ padding: e = "md", bordered: t = !1, className: n = "", children: r, ...a }, o) => /* @__PURE__ */ d(
    "div",
    {
      ref: o,
      className: `${{
        none: "",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        xl: "p-8"
      }[e]} ${t ? "border-2 border-border rounded-lg" : ""} ${n}`,
      ...a,
      children: r
    }
  )
);
Ig.displayName = "Padded";
function kN({
  className: e,
  blur: t = !0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ d(
    "header",
    {
      "data-slot": "sticky-header",
      className: w(
        "sticky top-0 z-40 w-full border-b backdrop-blur-md",
        t ? "bg-background/80" : "bg-background",
        e
      ),
      ...r,
      children: n
    }
  );
}
function RN({
  className: e,
  blur: t = !0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ d(
    "footer",
    {
      "data-slot": "sticky-footer",
      className: w(
        "sticky bottom-0 z-40 w-full border-t backdrop-blur-md",
        t ? "bg-background/80" : "bg-background",
        e
      ),
      ...r,
      children: n
    }
  );
}
function IN({
  options: e,
  value: t,
  onChange: n,
  multiple: r = !1,
  className: a = ""
}) {
  const o = Array.isArray(t) ? t : t ? [t] : [], i = (l) => {
    if (r) {
      const u = o.includes(l) ? o.filter((f) => f !== l) : [...o, l];
      n == null || n(u);
    } else
      n == null || n(l);
  }, s = (l) => o.includes(l);
  return /* @__PURE__ */ d("div", { className: `space-y-2 ${a}`, children: e.map((l) => {
    const u = s(l.value);
    return /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        onClick: () => i(l.value),
        className: `
              w-full p-4 rounded-lg border-2 text-left
              transition-all
              ${u ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50 hover:bg-accent/50"}
            `,
        children: /* @__PURE__ */ U("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ d(
            "div",
            {
              className: `
                w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5
                border-2 transition-colors
                ${u ? "bg-primary border-primary" : "border-border bg-background"}
              `,
              children: u && /* @__PURE__ */ d(mm, { className: "w-3 h-3 text-primary-foreground" })
            }
          ),
          /* @__PURE__ */ U("div", { className: "flex-1", children: [
            /* @__PURE__ */ d("div", { className: "font-medium", children: l.label }),
            l.description && /* @__PURE__ */ d("div", { className: "text-sm text-muted-foreground mt-1", children: l.description })
          ] })
        ] })
      },
      l.value
    );
  }) });
}
function AN({ ...e }) {
  return /* @__PURE__ */ d(Yn.Root, { "data-slot": "accordion", ...e });
}
function zN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    Yn.Item,
    {
      "data-slot": "accordion-item",
      className: w("border-b last:border-b-0", e),
      ...t
    }
  );
}
function LN({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d(Yn.Header, { className: "flex", children: /* @__PURE__ */ U(
    Yn.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: w(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ d(Wr, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function qN({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d(
    Yn.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...n,
      children: /* @__PURE__ */ d("div", { className: w("pt-0 pb-4", e), children: t })
    }
  );
}
function $N({ ...e }) {
  return /* @__PURE__ */ d(Dt.Root, { "data-slot": "alert-dialog", ...e });
}
function BN({
  ...e
}) {
  return /* @__PURE__ */ d(Dt.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function Ag({ ...e }) {
  return /* @__PURE__ */ d(Dt.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function zg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    Dt.Overlay,
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
function jN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ U(Ag, { children: [
    /* @__PURE__ */ d(zg, {}),
    /* @__PURE__ */ d(
      Dt.Content,
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
function FN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: w("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function HN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: w("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function WN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    Dt.Title,
    {
      "data-slot": "alert-dialog-title",
      className: w("text-lg font-semibold", e),
      ...t
    }
  );
}
function YN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    Dt.Description,
    {
      "data-slot": "alert-dialog-description",
      className: w("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function VN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(Dt.Action, { className: w(Qt(), e), ...t });
}
function GN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    Dt.Cancel,
    {
      className: w(Qt({ variant: "outline" }), e),
      ...t
    }
  );
}
function UN({ ...e }) {
  return /* @__PURE__ */ d(ug.Root, { "data-slot": "aspect-ratio", ...e });
}
function KN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    ml.Root,
    {
      "data-slot": "avatar",
      className: w("relative flex size-10 shrink-0 overflow-hidden rounded-full", e),
      ...t
    }
  );
}
function XN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    ml.Image,
    {
      "data-slot": "avatar-image",
      className: w("aspect-square size-full", e),
      ...t
    }
  );
}
function QN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    ml.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: w("bg-muted flex size-full items-center justify-center rounded-full", e),
      ...t
    }
  );
}
function JN({ ...e }) {
  return /* @__PURE__ */ d("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function ZN({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: w(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function eE({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: w("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function tE({
  asChild: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ d(
    e ? Mt : "a",
    {
      "data-slot": "breadcrumb-link",
      className: w("hover:text-foreground transition-colors", t),
      ...n
    }
  );
}
function nE({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: w("text-foreground font-normal", e),
      ...t
    }
  );
}
function rE({ children: e, className: t, ...n }) {
  return /* @__PURE__ */ d(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: w("[&>svg]:size-3.5", t),
      ...n,
      children: e ?? /* @__PURE__ */ d(pm, {})
    }
  );
}
function aE({ className: e, ...t }) {
  return /* @__PURE__ */ U(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: w("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ d(Xh, { className: "size-4" }),
        /* @__PURE__ */ d("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function he(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function et(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function He(e, t) {
  const n = he(e);
  return isNaN(t) ? et(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function ft(e, t) {
  const n = he(e);
  if (isNaN(t)) return et(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), a = et(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const o = a.getDate();
  return r >= o ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    r
  ), n);
}
const gl = 6048e5, Lg = 864e5;
let qg = {};
function ir() {
  return qg;
}
function wt(e, t) {
  var s, l, u, f;
  const n = ir(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? 0, a = he(e), o = a.getDay(), i = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function Jt(e) {
  return wt(e, { weekStartsOn: 1 });
}
function _m(e) {
  const t = he(e), n = t.getFullYear(), r = et(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = Jt(r), o = et(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const i = Jt(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function Sn(e) {
  const t = he(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Mr(e) {
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
function bt(e, t) {
  const n = Sn(e), r = Sn(t), a = +n - Mr(n), o = +r - Mr(r);
  return Math.round((a - o) / Lg);
}
function $g(e) {
  const t = _m(e), n = et(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Jt(n);
}
function Fs(e, t) {
  const n = t * 7;
  return He(e, n);
}
function Bg(e, t) {
  return ft(e, t * 12);
}
function jg(e) {
  let t;
  return e.forEach(function(n) {
    const r = he(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Fg(e) {
  let t;
  return e.forEach((n) => {
    const r = he(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Qe(e, t) {
  const n = Sn(e), r = Sn(t);
  return +n == +r;
}
function vl(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Hg(e) {
  if (!vl(e) && typeof e != "number")
    return !1;
  const t = he(e);
  return !isNaN(Number(t));
}
function Un(e, t) {
  const n = he(e), r = he(t), a = n.getFullYear() - r.getFullYear(), o = n.getMonth() - r.getMonth();
  return a * 12 + o;
}
function Wg(e, t, n) {
  const r = wt(e, n), a = wt(t, n), o = +r - Mr(r), i = +a - Mr(a);
  return Math.round((o - i) / gl);
}
function bl(e) {
  const t = he(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Je(e) {
  const t = he(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Sm(e) {
  const t = he(e), n = et(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function yl(e, t) {
  var s, l, u, f;
  const n = ir(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? 0, a = he(e), o = a.getDay(), i = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
}
function Cm(e) {
  return yl(e, { weekStartsOn: 1 });
}
const Yg = {
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
}, Vg = (e, t, n) => {
  let r;
  const a = Yg[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function ya(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Gg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ug = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Kg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Xg = {
  date: ya({
    formats: Gg,
    defaultWidth: "full"
  }),
  time: ya({
    formats: Ug,
    defaultWidth: "full"
  }),
  dateTime: ya({
    formats: Kg,
    defaultWidth: "full"
  })
}, Qg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Jg = (e, t, n, r) => Qg[e];
function Mn(e) {
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
const Zg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ev = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, tv = {
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
}, nv = {
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
}, rv = {
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
}, av = {
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
}, ov = (e, t) => {
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
}, iv = {
  ordinalNumber: ov,
  era: Mn({
    values: Zg,
    defaultWidth: "wide"
  }),
  quarter: Mn({
    values: ev,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Mn({
    values: tv,
    defaultWidth: "wide"
  }),
  day: Mn({
    values: nv,
    defaultWidth: "wide"
  }),
  dayPeriod: Mn({
    values: rv,
    defaultWidth: "wide",
    formattingValues: av,
    defaultFormattingWidth: "wide"
  })
};
function Dn(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const i = o[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? lv(s, (c) => c.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      sv(s, (c) => c.test(i))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(u)
    ) : u;
    const f = t.slice(i.length);
    return { value: u, rest: f };
  };
}
function sv(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function lv(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function uv(e) {
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
const cv = /^(\d+)(th|st|nd|rd)?/i, dv = /\d+/i, fv = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, mv = {
  any: [/^b/i, /^(a|c)/i]
}, pv = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, hv = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, gv = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, vv = {
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
}, bv = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, yv = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, wv = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, xv = {
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
}, _v = {
  ordinalNumber: uv({
    matchPattern: cv,
    parsePattern: dv,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Dn({
    matchPatterns: fv,
    defaultMatchWidth: "wide",
    parsePatterns: mv,
    defaultParseWidth: "any"
  }),
  quarter: Dn({
    matchPatterns: pv,
    defaultMatchWidth: "wide",
    parsePatterns: hv,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Dn({
    matchPatterns: gv,
    defaultMatchWidth: "wide",
    parsePatterns: vv,
    defaultParseWidth: "any"
  }),
  day: Dn({
    matchPatterns: bv,
    defaultMatchWidth: "wide",
    parsePatterns: yv,
    defaultParseWidth: "any"
  }),
  dayPeriod: Dn({
    matchPatterns: wv,
    defaultMatchWidth: "any",
    parsePatterns: xv,
    defaultParseWidth: "any"
  })
}, Pm = {
  code: "en-US",
  formatDistance: Vg,
  formatLong: Xg,
  formatRelative: Jg,
  localize: iv,
  match: _v,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Sv(e) {
  const t = he(e);
  return bt(t, Sm(t)) + 1;
}
function Nm(e) {
  const t = he(e), n = +Jt(t) - +$g(t);
  return Math.round(n / gl) + 1;
}
function Em(e, t) {
  var f, c, m, g;
  const n = he(e), r = n.getFullYear(), a = ir(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : c.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((g = (m = a.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = et(e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = wt(i, t), l = et(e, 0);
  l.setFullYear(r, 0, o), l.setHours(0, 0, 0, 0);
  const u = wt(l, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function Cv(e, t) {
  var s, l, u, f;
  const n = ir(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, a = Em(e, t), o = et(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), wt(o, t);
}
function Tm(e, t) {
  const n = he(e), r = +wt(n, t) - +Cv(n, t);
  return Math.round(r / gl) + 1;
}
function xe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Rt = {
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
}, dn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, su = {
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
    return Rt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = Em(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const i = o % 100;
      return xe(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : xe(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = _m(e);
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
        return Rt.M(e, t);
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
    const a = Tm(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : xe(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Nm(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : xe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Rt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Sv(e);
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
    switch (r === 12 ? a = dn.noon : r === 0 ? a = dn.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? a = dn.evening : r >= 12 ? a = dn.afternoon : r >= 4 ? a = dn.morning : a = dn.night, t) {
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
    return Rt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Rt.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Rt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Rt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Rt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return uu(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Yt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Yt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return uu(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Yt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Yt(r, ":");
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
        return "GMT" + lu(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Yt(r, ":");
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
        return "GMT" + lu(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Yt(r, ":");
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
function lu(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + xe(o, 2);
}
function uu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + xe(Math.abs(e) / 60, 2) : Yt(e, t);
}
function Yt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = xe(Math.trunc(r / 60), 2), o = xe(r % 60, 2);
  return n + a + t + o;
}
const cu = (e, t) => {
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
}, Om = (e, t) => {
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
}, Pv = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return cu(e, t);
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
  return o.replace("{{date}}", cu(r, t)).replace("{{time}}", Om(a, t));
}, Nv = {
  p: Om,
  P: Pv
}, Ev = /^D+$/, Tv = /^Y+$/, Ov = ["D", "DD", "YY", "YYYY"];
function Mv(e) {
  return Ev.test(e);
}
function Dv(e) {
  return Tv.test(e);
}
function kv(e, t, n) {
  const r = Rv(e, t, n);
  if (console.warn(r), Ov.includes(e)) throw new RangeError(r);
}
function Rv(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Iv = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Av = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, zv = /^'([^]*?)'?$/, Lv = /''/g, qv = /[a-zA-Z]/;
function an(e, t, n) {
  var f, c, m, g, h, b, p, v;
  const r = ir(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? Pm, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((c = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((b = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : b.weekStartsOn) ?? r.weekStartsOn ?? ((v = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : v.weekStartsOn) ?? 0, s = he(e);
  if (!Hg(s))
    throw new RangeError("Invalid time value");
  let l = t.match(Av).map((y) => {
    const S = y[0];
    if (S === "p" || S === "P") {
      const C = Nv[S];
      return C(y, a.formatLong);
    }
    return y;
  }).join("").match(Iv).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const S = y[0];
    if (S === "'")
      return { isToken: !1, value: $v(y) };
    if (su[S])
      return { isToken: !0, value: y };
    if (S.match(qv))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + S + "`"
      );
    return { isToken: !1, value: y };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(s, l));
  const u = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: a
  };
  return l.map((y) => {
    if (!y.isToken) return y.value;
    const S = y.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Dv(S) || !(n != null && n.useAdditionalDayOfYearTokens) && Mv(S)) && kv(S, t, String(e));
    const C = su[S[0]];
    return C(s, S, a.localize, u);
  }).join("");
}
function $v(e) {
  const t = e.match(zv);
  return t ? t[1].replace(Lv, "'") : e;
}
function Bv(e) {
  const t = he(e), n = t.getFullYear(), r = t.getMonth(), a = et(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function jv(e) {
  return Math.trunc(+he(e) / 1e3);
}
function Fv(e) {
  const t = he(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Hv(e, t) {
  return Wg(
    Fv(e),
    Je(e),
    t
  ) + 1;
}
function Hs(e, t) {
  const n = he(e), r = he(t);
  return n.getTime() > r.getTime();
}
function Mm(e, t) {
  const n = he(e), r = he(t);
  return +n < +r;
}
function wl(e, t) {
  const n = he(e), r = he(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Wv(e, t) {
  const n = he(e), r = he(t);
  return n.getFullYear() === r.getFullYear();
}
function wa(e, t) {
  return He(e, -t);
}
function xa(e, t) {
  const n = he(e), r = n.getFullYear(), a = n.getDate(), o = et(e, 0);
  o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
  const i = Bv(o);
  return n.setMonth(t, Math.min(a, i)), n;
}
function du(e, t) {
  const n = he(e);
  return isNaN(+n) ? et(e, NaN) : (n.setFullYear(t), n);
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
function Yv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Dm(e, t, n) {
  for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function sr(e) {
  return e.mode === "multiple";
}
function lr(e) {
  return e.mode === "range";
}
function Qr(e) {
  return e.mode === "single";
}
var Vv = {
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
function Gv(e, t) {
  return an(e, "LLLL y", t);
}
function Uv(e, t) {
  return an(e, "d", t);
}
function Kv(e, t) {
  return an(e, "LLLL", t);
}
function Xv(e) {
  return "".concat(e);
}
function Qv(e, t) {
  return an(e, "cccccc", t);
}
function Jv(e, t) {
  return an(e, "yyyy", t);
}
var Zv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Gv,
  formatDay: Uv,
  formatMonthCaption: Kv,
  formatWeekNumber: Xv,
  formatWeekdayName: Qv,
  formatYearCaption: Jv
}), eb = function(e, t, n) {
  return an(e, "do MMMM (EEEE)", n);
}, tb = function() {
  return "Month: ";
}, nb = function() {
  return "Go to next month";
}, rb = function() {
  return "Go to previous month";
}, ab = function(e, t) {
  return an(e, "cccc", t);
}, ob = function(e) {
  return "Week n. ".concat(e);
}, ib = function() {
  return "Year: ";
}, sb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: eb,
  labelMonthDropdown: tb,
  labelNext: nb,
  labelPrevious: rb,
  labelWeekNumber: ob,
  labelWeekday: ab,
  labelYearDropdown: ib
});
function lb() {
  var e = "buttons", t = Vv, n = Pm, r = {}, a = {}, o = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Zv,
    labels: sb,
    locale: n,
    modifiersClassNames: r,
    modifiers: a,
    numberOfMonths: o,
    styles: i,
    today: s,
    mode: "default"
  };
}
function ub(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, a = e.toMonth, o = e.fromDate, i = e.toDate;
  return r ? o = Je(r) : t && (o = new Date(t, 0, 1)), a ? i = bl(a) : n && (i = new Date(n, 11, 31)), {
    fromDate: o ? Sn(o) : void 0,
    toDate: i ? Sn(i) : void 0
  };
}
var km = nn(void 0);
function cb(e) {
  var t, n = e.initialProps, r = lb(), a = ub(n), o = a.fromDate, i = a.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!o || !i) && (s = "buttons");
  var l;
  (Qr(n) || sr(n) || lr(n)) && (l = n.onSelect);
  var u = re(re(re({}, r), n), { captionLayout: s, classNames: re(re({}, r.classNames), n.classNames), components: re({}, n.components), formatters: re(re({}, r.formatters), n.formatters), fromDate: o, labels: re(re({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: re(re({}, r.modifiers), n.modifiers), modifiersClassNames: re(re({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: l, styles: re(re({}, r.styles), n.styles), toDate: i });
  return d(km.Provider, { value: u, children: e.children });
}
function Ee() {
  var e = rn(km);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Rm(e) {
  var t = Ee(), n = t.locale, r = t.classNames, a = t.styles, o = t.formatters.formatCaption;
  return d("div", { className: r.caption_label, style: a.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: o(e.displayMonth, { locale: n }) });
}
function db(e) {
  return d("svg", re({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: d("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Im(e) {
  var t, n, r = e.onChange, a = e.value, o = e.children, i = e.caption, s = e.className, l = e.style, u = Ee(), f = (n = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : db;
  return U("div", { className: s, style: l, children: [d("span", { className: u.classNames.vhidden, children: e["aria-label"] }), d("select", { name: e.name, "aria-label": e["aria-label"], className: u.classNames.dropdown, style: u.styles.dropdown, value: a, onChange: r, children: o }), U("div", { className: u.classNames.caption_label, style: u.styles.caption_label, "aria-hidden": "true", children: [i, d(f, { className: u.classNames.dropdown_icon, style: u.styles.dropdown_icon })] })] });
}
function fb(e) {
  var t, n = Ee(), r = n.fromDate, a = n.toDate, o = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, l = n.classNames, u = n.components, f = n.labels.labelMonthDropdown;
  if (!r)
    return d(yt, {});
  if (!a)
    return d(yt, {});
  var c = [];
  if (Wv(r, a))
    for (var m = Je(r), g = r.getMonth(); g <= a.getMonth(); g++)
      c.push(xa(m, g));
  else
    for (var m = Je(/* @__PURE__ */ new Date()), g = 0; g <= 11; g++)
      c.push(xa(m, g));
  var h = function(p) {
    var v = Number(p.target.value), y = xa(Je(e.displayMonth), v);
    e.onChange(y);
  }, b = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Im;
  return d(b, { name: "months", "aria-label": f(), className: l.dropdown_month, style: o.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: c.map(function(p) {
    return d("option", { value: p.getMonth(), children: s(p, { locale: i }) }, p.getMonth());
  }) });
}
function mb(e) {
  var t, n = e.displayMonth, r = Ee(), a = r.fromDate, o = r.toDate, i = r.locale, s = r.styles, l = r.classNames, u = r.components, f = r.formatters.formatYearCaption, c = r.labels.labelYearDropdown, m = [];
  if (!a)
    return d(yt, {});
  if (!o)
    return d(yt, {});
  for (var g = a.getFullYear(), h = o.getFullYear(), b = g; b <= h; b++)
    m.push(du(Sm(/* @__PURE__ */ new Date()), b));
  var p = function(y) {
    var S = du(Je(n), Number(y.target.value));
    e.onChange(S);
  }, v = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Im;
  return d(v, { name: "years", "aria-label": c(), className: l.dropdown_year, style: s.dropdown_year, onChange: p, value: n.getFullYear(), caption: f(n, { locale: i }), children: m.map(function(y) {
    return d("option", { value: y.getFullYear(), children: f(y, { locale: i }) }, y.getFullYear());
  }) });
}
function pb(e, t) {
  var n = Ot(e), r = n[0], a = n[1], o = t === void 0 ? r : t;
  return [o, a];
}
function hb(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, a = t || n || r || /* @__PURE__ */ new Date(), o = e.toDate, i = e.fromDate, s = e.numberOfMonths, l = s === void 0 ? 1 : s;
  if (o && Un(o, a) < 0) {
    var u = -1 * (l - 1);
    a = ft(o, u);
  }
  return i && Un(a, i) < 0 && (a = i), Je(a);
}
function gb() {
  var e = Ee(), t = hb(e), n = pb(t, e.month), r = n[0], a = n[1], o = function(i) {
    var s;
    if (!e.disableNavigation) {
      var l = Je(i);
      a(l), (s = e.onMonthChange) === null || s === void 0 || s.call(e, l);
    }
  };
  return [r, o];
}
function vb(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, a = Je(e), o = Je(ft(a, r)), i = Un(o, a), s = [], l = 0; l < i; l++) {
    var u = ft(a, l);
    s.push(u);
  }
  return n && (s = s.reverse()), s;
}
function bb(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, i = r ? o : 1, s = Je(e);
    if (!n)
      return ft(s, i);
    var l = Un(n, e);
    if (!(l < o))
      return ft(s, i);
  }
}
function yb(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, i = r ? o : 1, s = Je(e);
    if (!n)
      return ft(s, -i);
    var l = Un(s, n);
    if (!(l <= 0))
      return ft(s, -i);
  }
}
var Am = nn(void 0);
function wb(e) {
  var t = Ee(), n = gb(), r = n[0], a = n[1], o = vb(r, t), i = bb(r, t), s = yb(r, t), l = function(c) {
    return o.some(function(m) {
      return wl(c, m);
    });
  }, u = function(c, m) {
    l(c) || (m && Mm(c, m) ? a(ft(c, 1 + t.numberOfMonths * -1)) : a(c));
  }, f = {
    currentMonth: r,
    displayMonths: o,
    goToMonth: a,
    goToDate: u,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: l
  };
  return d(Am.Provider, { value: f, children: e.children });
}
function ur() {
  var e = rn(Am);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function fu(e) {
  var t, n = Ee(), r = n.classNames, a = n.styles, o = n.components, i = ur().goToMonth, s = function(f) {
    i(ft(f, e.displayIndex ? -e.displayIndex : 0));
  }, l = (t = o == null ? void 0 : o.CaptionLabel) !== null && t !== void 0 ? t : Rm, u = d(l, { id: e.id, displayMonth: e.displayMonth });
  return U("div", { className: r.caption_dropdowns, style: a.caption_dropdowns, children: [d("div", { className: r.vhidden, children: u }), d(fb, { onChange: s, displayMonth: e.displayMonth }), d(mb, { onChange: s, displayMonth: e.displayMonth })] });
}
function xb(e) {
  return d("svg", re({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: d("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function _b(e) {
  return d("svg", re({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: d("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Dr = xt(function(e, t) {
  var n = Ee(), r = n.classNames, a = n.styles, o = [r.button_reset, r.button];
  e.className && o.push(e.className);
  var i = o.join(" "), s = re(re({}, a.button_reset), a.button);
  return e.style && Object.assign(s, e.style), d("button", re({}, e, { ref: t, type: "button", className: i, style: s }));
});
function Sb(e) {
  var t, n, r = Ee(), a = r.dir, o = r.locale, i = r.classNames, s = r.styles, l = r.labels, u = l.labelPrevious, f = l.labelNext, c = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return d(yt, {});
  var m = u(e.previousMonth, { locale: o }), g = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), h = f(e.nextMonth, { locale: o }), b = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), p = (t = c == null ? void 0 : c.IconRight) !== null && t !== void 0 ? t : _b, v = (n = c == null ? void 0 : c.IconLeft) !== null && n !== void 0 ? n : xb;
  return U("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && d(Dr, { name: "previous-month", "aria-label": m, className: g, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: a === "rtl" ? d(p, { className: i.nav_icon, style: s.nav_icon }) : d(v, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && d(Dr, { name: "next-month", "aria-label": h, className: b, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: a === "rtl" ? d(v, { className: i.nav_icon, style: s.nav_icon }) : d(p, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function mu(e) {
  var t = Ee().numberOfMonths, n = ur(), r = n.previousMonth, a = n.nextMonth, o = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(h) {
    return wl(e.displayMonth, h);
  }), l = s === 0, u = s === i.length - 1, f = t > 1 && (l || !u), c = t > 1 && (u || !l), m = function() {
    r && o(r);
  }, g = function() {
    a && o(a);
  };
  return d(Sb, { displayMonth: e.displayMonth, hideNext: f, hidePrevious: c, nextMonth: a, previousMonth: r, onPreviousClick: m, onNextClick: g });
}
function Cb(e) {
  var t, n = Ee(), r = n.classNames, a = n.disableNavigation, o = n.styles, i = n.captionLayout, s = n.components, l = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : Rm, u;
  return a ? u = d(l, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? u = d(fu, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? u = U(yt, { children: [d(fu, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), d(mu, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : u = U(yt, { children: [d(l, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), d(mu, { displayMonth: e.displayMonth, id: e.id })] }), d("div", { className: r.caption, style: o.caption, children: u });
}
function Pb(e) {
  var t = Ee(), n = t.footer, r = t.styles, a = t.classNames.tfoot;
  return n ? d("tfoot", { className: a, style: r.tfoot, children: d("tr", { children: d("td", { colSpan: 8, children: n }) }) }) : d(yt, {});
}
function Nb(e, t, n) {
  for (var r = n ? Jt(/* @__PURE__ */ new Date()) : wt(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), a = [], o = 0; o < 7; o++) {
    var i = He(r, o);
    a.push(i);
  }
  return a;
}
function Eb() {
  var e = Ee(), t = e.classNames, n = e.styles, r = e.showWeekNumber, a = e.locale, o = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, l = e.labels.labelWeekday, u = Nb(a, o, i);
  return U("tr", { style: n.head_row, className: t.head_row, children: [r && d("td", { style: n.head_cell, className: t.head_cell }), u.map(function(f, c) {
    return d("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": l(f, { locale: a }), children: s(f, { locale: a }) }, c);
  })] });
}
function Tb() {
  var e, t = Ee(), n = t.classNames, r = t.styles, a = t.components, o = (e = a == null ? void 0 : a.HeadRow) !== null && e !== void 0 ? e : Eb;
  return d("thead", { style: r.head, className: n.head, children: d(o, {}) });
}
function Ob(e) {
  var t = Ee(), n = t.locale, r = t.formatters.formatDay;
  return d(yt, { children: r(e.date, { locale: n }) });
}
var xl = nn(void 0);
function Mb(e) {
  if (!sr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return d(xl.Provider, { value: t, children: e.children });
  }
  return d(Db, { initialProps: e.initialProps, children: e.children });
}
function Db(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = t.min, o = t.max, i = function(u, f, c) {
    var m, g;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, u, f, c);
    var h = !!(f.selected && a && (r == null ? void 0 : r.length) === a);
    if (!h) {
      var b = !!(!f.selected && o && (r == null ? void 0 : r.length) === o);
      if (!b) {
        var p = r ? Dm([], r) : [];
        if (f.selected) {
          var v = p.findIndex(function(y) {
            return Qe(u, y);
          });
          p.splice(v, 1);
        } else
          p.push(u);
        (g = t.onSelect) === null || g === void 0 || g.call(t, p, u, f, c);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(u) {
    var f = o && r.length > o - 1, c = r.some(function(m) {
      return Qe(m, u);
    });
    return !!(f && !c);
  });
  var l = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return d(xl.Provider, { value: l, children: n });
}
function _l() {
  var e = rn(xl);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function kb(e, t) {
  var n = t || {}, r = n.from, a = n.to;
  return r && a ? Qe(a, e) && Qe(r, e) ? void 0 : Qe(a, e) ? { from: a, to: void 0 } : Qe(r, e) ? void 0 : Hs(r, e) ? { from: e, to: a } : { from: r, to: e } : a ? Hs(e, a) ? { from: a, to: e } : { from: e, to: a } : r ? Mm(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Sl = nn(void 0);
function Rb(e) {
  if (!lr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return d(Sl.Provider, { value: t, children: e.children });
  }
  return d(Ib, { initialProps: e.initialProps, children: e.children });
}
function Ib(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = r || {}, o = a.from, i = a.to, s = t.min, l = t.max, u = function(g, h, b) {
    var p, v;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, g, h, b);
    var y = kb(g, r);
    (v = t.onSelect) === null || v === void 0 || v.call(t, y, g, h, b);
  }, f = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (o ? (f.range_start = [o], i ? (f.range_end = [i], Qe(o, i) || (f.range_middle = [
    {
      after: o,
      before: i
    }
  ])) : f.range_end = [o]) : i && (f.range_start = [i], f.range_end = [i]), s && (o && !i && f.disabled.push({
    after: wa(o, s - 1),
    before: He(o, s - 1)
  }), o && i && f.disabled.push({
    after: o,
    before: He(o, s - 1)
  }), !o && i && f.disabled.push({
    after: wa(i, s - 1),
    before: He(i, s - 1)
  })), l) {
    if (o && !i && (f.disabled.push({
      before: He(o, -l + 1)
    }), f.disabled.push({
      after: He(o, l - 1)
    })), o && i) {
      var c = bt(i, o) + 1, m = l - c;
      f.disabled.push({
        before: wa(o, m)
      }), f.disabled.push({
        after: He(i, m)
      });
    }
    !o && i && (f.disabled.push({
      before: He(i, -l + 1)
    }), f.disabled.push({
      after: He(i, l - 1)
    }));
  }
  return d(Sl.Provider, { value: { selected: r, onDayClick: u, modifiers: f }, children: n });
}
function Cl() {
  var e = rn(Sl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Er(e) {
  return Array.isArray(e) ? Dm([], e) : e !== void 0 ? [e] : [];
}
function Ab(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], a = n[1];
    t[r] = Er(a);
  }), t;
}
var mt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(mt || (mt = {}));
var zb = mt.Selected, Nt = mt.Disabled, Lb = mt.Hidden, qb = mt.Today, _a = mt.RangeEnd, Sa = mt.RangeMiddle, Ca = mt.RangeStart, $b = mt.Outside;
function Bb(e, t, n) {
  var r, a = (r = {}, r[zb] = Er(e.selected), r[Nt] = Er(e.disabled), r[Lb] = Er(e.hidden), r[qb] = [e.today], r[_a] = [], r[Sa] = [], r[Ca] = [], r[$b] = [], r);
  return e.fromDate && a[Nt].push({ before: e.fromDate }), e.toDate && a[Nt].push({ after: e.toDate }), sr(e) ? a[Nt] = a[Nt].concat(t.modifiers[Nt]) : lr(e) && (a[Nt] = a[Nt].concat(n.modifiers[Nt]), a[Ca] = n.modifiers[Ca], a[Sa] = n.modifiers[Sa], a[_a] = n.modifiers[_a]), a;
}
var zm = nn(void 0);
function jb(e) {
  var t = Ee(), n = _l(), r = Cl(), a = Bb(t, n, r), o = Ab(t.modifiers), i = re(re({}, a), o);
  return d(zm.Provider, { value: i, children: e.children });
}
function Lm() {
  var e = rn(zm);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Fb(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Hb(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Wb(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Yb(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Vb(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Gb(e, t) {
  var n, r = t.from, a = t.to;
  if (r && a) {
    var o = bt(a, r) < 0;
    o && (n = [a, r], r = n[0], a = n[1]);
    var i = bt(e, r) >= 0 && bt(a, e) >= 0;
    return i;
  }
  return a ? Qe(a, e) : r ? Qe(r, e) : !1;
}
function Ub(e) {
  return vl(e);
}
function Kb(e) {
  return Array.isArray(e) && e.every(vl);
}
function Xb(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Ub(n))
      return Qe(e, n);
    if (Kb(n))
      return n.includes(e);
    if (Hb(n))
      return Gb(e, n);
    if (Vb(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Fb(n)) {
      var r = bt(n.before, e), a = bt(n.after, e), o = r > 0, i = a < 0, s = Hs(n.before, n.after);
      return s ? i && o : o || i;
    }
    return Wb(n) ? bt(e, n.after) > 0 : Yb(n) ? bt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Pl(e, t, n) {
  var r = Object.keys(t).reduce(function(o, i) {
    var s = t[i];
    return Xb(e, s) && o.push(i), o;
  }, []), a = {};
  return r.forEach(function(o) {
    return a[o] = !0;
  }), n && !wl(e, n) && (a.outside = !0), a;
}
function Qb(e, t) {
  for (var n = Je(e[0]), r = bl(e[e.length - 1]), a, o, i = n; i <= r; ) {
    var s = Pl(i, t), l = !s.disabled && !s.hidden;
    if (!l) {
      i = He(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !o && (o = i), a || (a = i), i = He(i, 1);
  }
  return o || a;
}
var Jb = 365;
function qm(e, t) {
  var n = t.moveBy, r = t.direction, a = t.context, o = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, l = a.weekStartsOn, u = a.fromDate, f = a.toDate, c = a.locale, m = {
    day: He,
    week: Fs,
    month: ft,
    year: Bg,
    startOfWeek: function(p) {
      return a.ISOWeek ? Jt(p) : wt(p, { locale: c, weekStartsOn: l });
    },
    endOfWeek: function(p) {
      return a.ISOWeek ? Cm(p) : yl(p, { locale: c, weekStartsOn: l });
    }
  }, g = m[n](e, r === "after" ? 1 : -1);
  r === "before" && u ? g = jg([u, g]) : r === "after" && f && (g = Fg([f, g]));
  var h = !0;
  if (o) {
    var b = Pl(g, o);
    h = !b.disabled && !b.hidden;
  }
  return h ? g : s.count > Jb ? s.lastFocused : qm(g, {
    moveBy: n,
    direction: r,
    context: a,
    modifiers: o,
    retry: re(re({}, s), { count: s.count + 1 })
  });
}
var $m = nn(void 0);
function Zb(e) {
  var t = ur(), n = Lm(), r = Ot(), a = r[0], o = r[1], i = Ot(), s = i[0], l = i[1], u = Qb(t.displayMonths, n), f = a ?? (s && t.isDateDisplayed(s)) ? s : u, c = function() {
    l(a), o(void 0);
  }, m = function(p) {
    o(p);
  }, g = Ee(), h = function(p, v) {
    if (a) {
      var y = qm(a, {
        moveBy: p,
        direction: v,
        context: g,
        modifiers: n
      });
      Qe(a, y) || (t.goToDate(y, a), m(y));
    }
  }, b = {
    focusedDay: a,
    focusTarget: f,
    blur: c,
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
  return d($m.Provider, { value: b, children: e.children });
}
function Nl() {
  var e = rn($m);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function ey(e, t) {
  var n = Lm(), r = Pl(e, n, t);
  return r;
}
var El = nn(void 0);
function ty(e) {
  if (!Qr(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return d(El.Provider, { value: t, children: e.children });
  }
  return d(ny, { initialProps: e.initialProps, children: e.children });
}
function ny(e) {
  var t = e.initialProps, n = e.children, r = function(o, i, s) {
    var l, u, f;
    if ((l = t.onDayClick) === null || l === void 0 || l.call(t, o, i, s), i.selected && !t.required) {
      (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, o, i, s);
      return;
    }
    (f = t.onSelect) === null || f === void 0 || f.call(t, o, o, i, s);
  }, a = {
    selected: t.selected,
    onDayClick: r
  };
  return d(El.Provider, { value: a, children: n });
}
function Bm() {
  var e = rn(El);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function ry(e, t) {
  var n = Ee(), r = Bm(), a = _l(), o = Cl(), i = Nl(), s = i.focusDayAfter, l = i.focusDayBefore, u = i.focusWeekAfter, f = i.focusWeekBefore, c = i.blur, m = i.focus, g = i.focusMonthBefore, h = i.focusMonthAfter, b = i.focusYearBefore, p = i.focusYearAfter, v = i.focusStartOfWeek, y = i.focusEndOfWeek, S = function(L) {
    var q, te, ie, X;
    Qr(n) ? (q = r.onDayClick) === null || q === void 0 || q.call(r, e, t, L) : sr(n) ? (te = a.onDayClick) === null || te === void 0 || te.call(a, e, t, L) : lr(n) ? (ie = o.onDayClick) === null || ie === void 0 || ie.call(o, e, t, L) : (X = n.onDayClick) === null || X === void 0 || X.call(n, e, t, L);
  }, C = function(L) {
    var q;
    m(e), (q = n.onDayFocus) === null || q === void 0 || q.call(n, e, t, L);
  }, D = function(L) {
    var q;
    c(), (q = n.onDayBlur) === null || q === void 0 || q.call(n, e, t, L);
  }, E = function(L) {
    var q;
    (q = n.onDayMouseEnter) === null || q === void 0 || q.call(n, e, t, L);
  }, _ = function(L) {
    var q;
    (q = n.onDayMouseLeave) === null || q === void 0 || q.call(n, e, t, L);
  }, R = function(L) {
    var q;
    (q = n.onDayPointerEnter) === null || q === void 0 || q.call(n, e, t, L);
  }, k = function(L) {
    var q;
    (q = n.onDayPointerLeave) === null || q === void 0 || q.call(n, e, t, L);
  }, Y = function(L) {
    var q;
    (q = n.onDayTouchCancel) === null || q === void 0 || q.call(n, e, t, L);
  }, I = function(L) {
    var q;
    (q = n.onDayTouchEnd) === null || q === void 0 || q.call(n, e, t, L);
  }, H = function(L) {
    var q;
    (q = n.onDayTouchMove) === null || q === void 0 || q.call(n, e, t, L);
  }, T = function(L) {
    var q;
    (q = n.onDayTouchStart) === null || q === void 0 || q.call(n, e, t, L);
  }, W = function(L) {
    var q;
    (q = n.onDayKeyUp) === null || q === void 0 || q.call(n, e, t, L);
  }, F = function(L) {
    var q;
    switch (L.key) {
      case "ArrowLeft":
        L.preventDefault(), L.stopPropagation(), n.dir === "rtl" ? s() : l();
        break;
      case "ArrowRight":
        L.preventDefault(), L.stopPropagation(), n.dir === "rtl" ? l() : s();
        break;
      case "ArrowDown":
        L.preventDefault(), L.stopPropagation(), u();
        break;
      case "ArrowUp":
        L.preventDefault(), L.stopPropagation(), f();
        break;
      case "PageUp":
        L.preventDefault(), L.stopPropagation(), L.shiftKey ? b() : g();
        break;
      case "PageDown":
        L.preventDefault(), L.stopPropagation(), L.shiftKey ? p() : h();
        break;
      case "Home":
        L.preventDefault(), L.stopPropagation(), v();
        break;
      case "End":
        L.preventDefault(), L.stopPropagation(), y();
        break;
    }
    (q = n.onDayKeyDown) === null || q === void 0 || q.call(n, e, t, L);
  }, B = {
    onClick: S,
    onFocus: C,
    onBlur: D,
    onKeyDown: F,
    onKeyUp: W,
    onMouseEnter: E,
    onMouseLeave: _,
    onPointerEnter: R,
    onPointerLeave: k,
    onTouchCancel: Y,
    onTouchEnd: I,
    onTouchMove: H,
    onTouchStart: T
  };
  return B;
}
function ay() {
  var e = Ee(), t = Bm(), n = _l(), r = Cl(), a = Qr(e) ? t.selected : sr(e) ? n.selected : lr(e) ? r.selected : void 0;
  return a;
}
function oy(e) {
  return Object.values(mt).includes(e);
}
function iy(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var a = e.modifiersClassNames[r];
    if (a)
      n.push(a);
    else if (oy(r)) {
      var o = e.classNames["day_".concat(r)];
      o && n.push(o);
    }
  }), n;
}
function sy(e, t) {
  var n = re({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var a;
    n = re(re({}, n), (a = e.modifiersStyles) === null || a === void 0 ? void 0 : a[r]);
  }), n;
}
function ly(e, t, n) {
  var r, a, o, i = Ee(), s = Nl(), l = ey(e, t), u = ry(e, l), f = ay(), c = !!(i.onDayClick || i.mode !== "default");
  st(function() {
    var E;
    l.outside || s.focusedDay && c && Qe(s.focusedDay, e) && ((E = n.current) === null || E === void 0 || E.focus());
  }, [
    s.focusedDay,
    e,
    n,
    c,
    l.outside
  ]);
  var m = iy(i, l).join(" "), g = sy(i, l), h = !!(l.outside && !i.showOutsideDays || l.hidden), b = (o = (a = i.components) === null || a === void 0 ? void 0 : a.DayContent) !== null && o !== void 0 ? o : Ob, p = d(b, { date: e, displayMonth: t, activeModifiers: l }), v = {
    style: g,
    className: m,
    children: p,
    role: "gridcell"
  }, y = s.focusTarget && Qe(s.focusTarget, e) && !l.outside, S = s.focusedDay && Qe(s.focusedDay, e), C = re(re(re({}, v), (r = { disabled: l.disabled, role: "gridcell" }, r["aria-selected"] = l.selected, r.tabIndex = S || y ? 0 : -1, r)), u), D = {
    isButton: c,
    isHidden: h,
    activeModifiers: l,
    selectedDays: f,
    buttonProps: C,
    divProps: v
  };
  return D;
}
function uy(e) {
  var t = _n(null), n = ly(e.date, e.displayMonth, t);
  return n.isHidden ? d("div", { role: "gridcell" }) : n.isButton ? d(Dr, re({ name: "day", ref: t }, n.buttonProps)) : d("div", re({}, n.divProps));
}
function cy(e) {
  var t = e.number, n = e.dates, r = Ee(), a = r.onWeekNumberClick, o = r.styles, i = r.classNames, s = r.locale, l = r.labels.labelWeekNumber, u = r.formatters.formatWeekNumber, f = u(Number(t), { locale: s });
  if (!a)
    return d("span", { className: i.weeknumber, style: o.weeknumber, children: f });
  var c = l(Number(t), { locale: s }), m = function(g) {
    a(t, n, g);
  };
  return d(Dr, { name: "week-number", "aria-label": c, className: i.weeknumber, style: o.weeknumber, onClick: m, children: f });
}
function dy(e) {
  var t, n, r = Ee(), a = r.styles, o = r.classNames, i = r.showWeekNumber, s = r.components, l = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : uy, u = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : cy, f;
  return i && (f = d("td", { className: o.cell, style: a.cell, children: d(u, { number: e.weekNumber, dates: e.dates }) })), U("tr", { className: o.row, style: a.row, children: [f, e.dates.map(function(c) {
    return d("td", { className: o.cell, style: a.cell, role: "presentation", children: d(l, { displayMonth: e.displayMonth, date: c }) }, jv(c));
  })] });
}
function pu(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Cm(t) : yl(t, n), a = n != null && n.ISOWeek ? Jt(e) : wt(e, n), o = bt(r, a), i = [], s = 0; s <= o; s++)
    i.push(He(a, s));
  var l = i.reduce(function(u, f) {
    var c = n != null && n.ISOWeek ? Nm(f) : Tm(f, n), m = u.find(function(g) {
      return g.weekNumber === c;
    });
    return m ? (m.dates.push(f), u) : (u.push({
      weekNumber: c,
      dates: [f]
    }), u);
  }, []);
  return l;
}
function fy(e, t) {
  var n = pu(Je(e), bl(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Hv(e, t);
    if (r < 6) {
      var a = n[n.length - 1], o = a.dates[a.dates.length - 1], i = Fs(o, 6 - r), s = pu(Fs(o, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function my(e) {
  var t, n, r, a = Ee(), o = a.locale, i = a.classNames, s = a.styles, l = a.hideHead, u = a.fixedWeeks, f = a.components, c = a.weekStartsOn, m = a.firstWeekContainsDate, g = a.ISOWeek, h = fy(e.displayMonth, {
    useFixedWeeks: !!u,
    ISOWeek: g,
    locale: o,
    weekStartsOn: c,
    firstWeekContainsDate: m
  }), b = (t = f == null ? void 0 : f.Head) !== null && t !== void 0 ? t : Tb, p = (n = f == null ? void 0 : f.Row) !== null && n !== void 0 ? n : dy, v = (r = f == null ? void 0 : f.Footer) !== null && r !== void 0 ? r : Pb;
  return U("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!l && d(b, {}), d("tbody", { className: i.tbody, style: s.tbody, children: h.map(function(y) {
    return d(p, { displayMonth: e.displayMonth, dates: y.dates, weekNumber: y.weekNumber }, y.weekNumber);
  }) }), d(v, { displayMonth: e.displayMonth })] });
}
function py() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var hy = py() ? gm : st, Pa = !1, gy = 0;
function hu() {
  return "react-day-picker-".concat(++gy);
}
function vy(e) {
  var t, n = e ?? (Pa ? hu() : null), r = Ot(n), a = r[0], o = r[1];
  return hy(function() {
    a === null && o(hu());
  }, []), st(function() {
    Pa === !1 && (Pa = !0);
  }, []), (t = e ?? a) !== null && t !== void 0 ? t : void 0;
}
function by(e) {
  var t, n, r = Ee(), a = r.dir, o = r.classNames, i = r.styles, s = r.components, l = ur().displayMonths, u = vy(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), f = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, c = [o.month], m = i.month, g = e.displayIndex === 0, h = e.displayIndex === l.length - 1, b = !g && !h;
  a === "rtl" && (t = [g, h], h = t[0], g = t[1]), g && (c.push(o.caption_start), m = re(re({}, m), i.caption_start)), h && (c.push(o.caption_end), m = re(re({}, m), i.caption_end)), b && (c.push(o.caption_between), m = re(re({}, m), i.caption_between));
  var p = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : Cb;
  return U("div", { className: c.join(" "), style: m, children: [d(p, { id: u, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), d(my, { id: f, "aria-labelledby": u, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function yy(e) {
  var t = Ee(), n = t.classNames, r = t.styles;
  return d("div", { className: n.months, style: r.months, children: e.children });
}
function wy(e) {
  var t, n, r = e.initialProps, a = Ee(), o = Nl(), i = ur(), s = Ot(!1), l = s[0], u = s[1];
  st(function() {
    a.initialFocus && o.focusTarget && (l || (o.focus(o.focusTarget), u(!0)));
  }, [
    a.initialFocus,
    l,
    o.focus,
    o.focusTarget,
    o
  ]);
  var f = [a.classNames.root, a.className];
  a.numberOfMonths > 1 && f.push(a.classNames.multiple_months), a.showWeekNumber && f.push(a.classNames.with_weeknumber);
  var c = re(re({}, a.styles.root), a.style), m = Object.keys(r).filter(function(h) {
    return h.startsWith("data-");
  }).reduce(function(h, b) {
    var p;
    return re(re({}, h), (p = {}, p[b] = r[b], p));
  }, {}), g = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : yy;
  return d("div", re({ className: f.join(" "), style: c, dir: a.dir, id: a.id, nonce: r.nonce, title: r.title, lang: r.lang }, m, { children: d(g, { children: i.displayMonths.map(function(h, b) {
    return d(by, { displayIndex: b, displayMonth: h }, b);
  }) }) }));
}
function xy(e) {
  var t = e.children, n = Yv(e, ["children"]);
  return d(cb, { initialProps: n, children: d(wb, { children: d(ty, { initialProps: n, children: d(Mb, { initialProps: n, children: d(Rb, { initialProps: n, children: d(jb, { children: d(Zb, { children: t }) }) }) }) }) }) });
}
function _y(e) {
  return d(xy, re({}, e, { children: d(wy, { initialProps: e }) }));
}
function oE({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ d(
    _y,
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
          Qt({ variant: "outline" }),
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
          Qt({ variant: "ghost" }),
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
        IconLeft: ({ className: a, ...o }) => /* @__PURE__ */ d(Qh, { className: w("size-4", a), ...o }),
        IconRight: ({ className: a, ...o }) => /* @__PURE__ */ d(pm, { className: w("size-4", a), ...o })
      },
      ...r
    }
  );
}
function Sy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function gu(e) {
  return Sy(e) || Array.isArray(e);
}
function Cy() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Tl(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), o = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== o ? !1 : n.every((i) => {
    const s = e[i], l = t[i];
    return typeof s == "function" ? `${s}` == `${l}` : !gu(s) || !gu(l) ? s === l : Tl(s, l);
  });
}
function vu(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Py(e, t) {
  if (e.length !== t.length) return !1;
  const n = vu(e), r = vu(t);
  return n.every((a, o) => {
    const i = r[o];
    return Tl(a, i);
  });
}
function Ol(e) {
  return typeof e == "number";
}
function Ws(e) {
  return typeof e == "string";
}
function Jr(e) {
  return typeof e == "boolean";
}
function bu(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Me(e) {
  return Math.abs(e);
}
function Ml(e) {
  return Math.sign(e);
}
function Wn(e, t) {
  return Me(e - t);
}
function Ny(e, t) {
  if (e === 0 || t === 0 || Me(e) <= Me(t)) return 0;
  const n = Wn(Me(e), Me(t));
  return Me(n / e);
}
function Ey(e) {
  return Math.round(e * 100) / 100;
}
function Kn(e) {
  return Xn(e).map(Number);
}
function ct(e) {
  return e[cr(e)];
}
function cr(e) {
  return Math.max(0, e.length - 1);
}
function Dl(e, t) {
  return t === cr(e);
}
function yu(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Xn(e) {
  return Object.keys(e);
}
function jm(e, t) {
  return [e, t].reduce((n, r) => (Xn(r).forEach((a) => {
    const o = n[a], i = r[a], s = bu(o) && bu(i);
    n[a] = s ? jm(o, i) : i;
  }), n), {});
}
function Ys(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Ty(e, t) {
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
  function i(l, u) {
    return Ws(e) ? n[e](l) : e(t, l, u);
  }
  return {
    measure: i
  };
}
function Qn() {
  let e = [];
  function t(a, o, i, s = {
    passive: !0
  }) {
    let l;
    if ("addEventListener" in a)
      a.addEventListener(o, i, s), l = () => a.removeEventListener(o, i, s);
    else {
      const u = a;
      u.addListener(i), l = () => u.removeListener(i);
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
function Oy(e, t, n, r) {
  const a = Qn(), o = 1e3 / 60;
  let i = null, s = 0, l = 0;
  function u() {
    a.add(e, "visibilitychange", () => {
      e.hidden && h();
    });
  }
  function f() {
    g(), a.clear();
  }
  function c(p) {
    if (!l) return;
    i || (i = p, n(), n());
    const v = p - i;
    for (i = p, s += v; s >= o; )
      n(), s -= o;
    const y = s / o;
    r(y), l && (l = t.requestAnimationFrame(c));
  }
  function m() {
    l || (l = t.requestAnimationFrame(c));
  }
  function g() {
    t.cancelAnimationFrame(l), i = null, s = 0, l = 0;
  }
  function h() {
    i = null, s = 0;
  }
  return {
    init: u,
    destroy: f,
    start: m,
    stop: g,
    update: n,
    render: r
  };
}
function My(e, t) {
  const n = t === "rtl", r = e === "y", a = r ? "y" : "x", o = r ? "x" : "y", i = !r && n ? -1 : 1, s = f(), l = c();
  function u(h) {
    const {
      height: b,
      width: p
    } = h;
    return r ? b : p;
  }
  function f() {
    return r ? "top" : n ? "right" : "left";
  }
  function c() {
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
    measureSize: u,
    direction: m
  };
}
function Zt(e = 0, t = 0) {
  const n = Me(e - t);
  function r(u) {
    return u < e;
  }
  function a(u) {
    return u > t;
  }
  function o(u) {
    return r(u) || a(u);
  }
  function i(u) {
    return o(u) ? r(u) ? e : t : u;
  }
  function s(u) {
    return n ? u - n * Math.ceil((u - t) / n) : u;
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
function Fm(e, t, n) {
  const {
    constrain: r
  } = Zt(0, e), a = e + 1;
  let o = i(t);
  function i(m) {
    return n ? Me((a + m) % a) : r(m);
  }
  function s() {
    return o;
  }
  function l(m) {
    return o = i(m), c;
  }
  function u(m) {
    return f().set(s() + m);
  }
  function f() {
    return Fm(e, s(), n);
  }
  const c = {
    get: s,
    set: l,
    add: u,
    clone: f
  };
  return c;
}
function Dy(e, t, n, r, a, o, i, s, l, u, f, c, m, g, h, b, p, v, y) {
  const {
    cross: S,
    direction: C
  } = e, D = ["INPUT", "SELECT", "TEXTAREA"], E = {
    passive: !1
  }, _ = Qn(), R = Qn(), k = Zt(50, 225).constrain(g.measure(20)), Y = {
    mouse: 300,
    touch: 400
  }, I = {
    mouse: 500,
    touch: 600
  }, H = h ? 43 : 25;
  let T = !1, W = 0, F = 0, B = !1, L = !1, q = !1, te = !1;
  function ie(G) {
    if (!y) return;
    function Z(K) {
      (Jr(y) || y(G, K)) && $(K);
    }
    const P = t;
    _.add(P, "dragstart", (K) => K.preventDefault(), E).add(P, "touchmove", () => {
    }, E).add(P, "touchend", () => {
    }).add(P, "touchstart", Z).add(P, "mousedown", Z).add(P, "touchcancel", V).add(P, "contextmenu", V).add(P, "click", Q, !0);
  }
  function X() {
    _.clear(), R.clear();
  }
  function O() {
    const G = te ? n : t;
    R.add(G, "touchmove", j, E).add(G, "touchend", V).add(G, "mousemove", j, E).add(G, "mouseup", V);
  }
  function N(G) {
    const Z = G.nodeName || "";
    return D.includes(Z);
  }
  function z() {
    return (h ? I : Y)[te ? "mouse" : "touch"];
  }
  function A(G, Z) {
    const P = c.add(Ml(G) * -1), K = f.byDistance(G, !h).distance;
    return h || Me(G) < k ? K : p && Z ? K * 0.5 : f.byIndex(P.get(), 0).distance;
  }
  function $(G) {
    const Z = Ys(G, r);
    te = Z, q = h && Z && !G.buttons && T, T = Wn(a.get(), i.get()) >= 2, !(Z && G.button !== 0) && (N(G.target) || (B = !0, o.pointerDown(G), u.useFriction(0).useDuration(0), a.set(i), O(), W = o.readPoint(G), F = o.readPoint(G, S), m.emit("pointerDown")));
  }
  function j(G) {
    if (!Ys(G, r) && G.touches.length >= 2) return V(G);
    const P = o.readPoint(G), K = o.readPoint(G, S), se = Wn(P, W), ce = Wn(K, F);
    if (!L && !te && (!G.cancelable || (L = se > ce, !L)))
      return V(G);
    const le = o.pointerMove(G);
    se > b && (q = !0), u.useFriction(0.3).useDuration(0.75), s.start(), a.add(C(le)), G.preventDefault();
  }
  function V(G) {
    const P = f.byDistance(0, !1).index !== c.get(), K = o.pointerUp(G) * z(), se = A(C(K), P), ce = Ny(K, se), le = H - 10 * ce, oe = v + ce / 50;
    L = !1, B = !1, R.clear(), u.useDuration(le).useFriction(oe), l.distance(se, !h), te = !1, m.emit("pointerUp");
  }
  function Q(G) {
    q && (G.stopPropagation(), G.preventDefault(), q = !1);
  }
  function ne() {
    return B;
  }
  return {
    init: ie,
    destroy: X,
    pointerDown: ne
  };
}
function ky(e, t) {
  let r, a;
  function o(c) {
    return c.timeStamp;
  }
  function i(c, m) {
    const h = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Ys(c, t) ? c : c.touches[0])[h];
  }
  function s(c) {
    return r = c, a = c, i(c);
  }
  function l(c) {
    const m = i(c) - i(a), g = o(c) - o(r) > 170;
    return a = c, g && (r = c), m;
  }
  function u(c) {
    if (!r || !a) return 0;
    const m = i(a) - i(r), g = o(c) - o(r), h = o(c) - o(a) > 170, b = m / g;
    return g && !h && Me(b) > 0.1 ? b : 0;
  }
  return {
    pointerDown: s,
    pointerMove: l,
    pointerUp: u,
    readPoint: i
  };
}
function Ry() {
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
function Iy(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function Ay(e, t, n, r, a, o, i) {
  const s = [e].concat(r);
  let l, u, f = [], c = !1;
  function m(p) {
    return a.measureSize(i.measure(p));
  }
  function g(p) {
    if (!o) return;
    u = m(e), f = r.map(m);
    function v(y) {
      for (const S of y) {
        if (c) return;
        const C = S.target === e, D = r.indexOf(S.target), E = C ? u : f[D], _ = m(C ? e : r[D]);
        if (Me(_ - E) >= 0.5) {
          p.reInit(), t.emit("resize");
          break;
        }
      }
    }
    l = new ResizeObserver((y) => {
      (Jr(o) || o(p, y)) && v(y);
    }), n.requestAnimationFrame(() => {
      s.forEach((y) => l.observe(y));
    });
  }
  function h() {
    c = !0, l && l.disconnect();
  }
  return {
    init: g,
    destroy: h
  };
}
function zy(e, t, n, r, a, o) {
  let i = 0, s = 0, l = a, u = o, f = e.get(), c = 0;
  function m() {
    const E = r.get() - e.get(), _ = !l;
    let R = 0;
    return _ ? (i = 0, n.set(r), e.set(r), R = E) : (n.set(e), i += E / l, i *= u, f += i, e.add(i), R = f - c), s = Ml(R), c = f, D;
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
    return S(a);
  }
  function y() {
    return C(o);
  }
  function S(E) {
    return l = E, D;
  }
  function C(E) {
    return u = E, D;
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
    useDuration: S
  };
  return D;
}
function Ly(e, t, n, r, a) {
  const o = a.measure(10), i = a.measure(50), s = Zt(0.1, 0.99);
  let l = !1;
  function u() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function f(g) {
    if (!u()) return;
    const h = e.reachedMin(t.get()) ? "min" : "max", b = Me(e[h] - t.get()), p = n.get() - t.get(), v = s.constrain(b / i);
    n.subtract(p * v), !g && Me(p) < o && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function c(g) {
    l = !g;
  }
  return {
    shouldConstrain: u,
    constrain: f,
    toggleActive: c
  };
}
function qy(e, t, n, r, a) {
  const o = Zt(-t + e, 0), i = c(), s = f(), l = m();
  function u(h, b) {
    return Wn(h, b) <= 1;
  }
  function f() {
    const h = i[0], b = ct(i), p = i.lastIndexOf(h), v = i.indexOf(b) + 1;
    return Zt(p, v);
  }
  function c() {
    return n.map((h, b) => {
      const {
        min: p,
        max: v
      } = o, y = o.constrain(h), S = !b, C = Dl(n, b);
      return S ? v : C || u(p, y) ? p : u(v, y) ? v : y;
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
function $y(e, t, n) {
  const r = t[0], a = n ? r - e : ct(t);
  return {
    limit: Zt(a, r)
  };
}
function By(e, t, n, r) {
  const o = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: l
  } = Zt(o, i);
  function u(m) {
    return m === 1 ? l(n.get()) : m === -1 ? s(n.get()) : !1;
  }
  function f(m) {
    if (!u(m)) return;
    const g = e * (m * -1);
    r.forEach((h) => h.add(g));
  }
  return {
    loop: f
  };
}
function jy(e) {
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
function Fy(e, t, n, r, a) {
  const {
    startEdge: o,
    endEdge: i
  } = e, {
    groupSlides: s
  } = a, l = c().map(t.measure), u = m(), f = g();
  function c() {
    return s(r).map((b) => ct(b)[i] - b[0][o]).map(Me);
  }
  function m() {
    return r.map((b) => n[o] - b[o]).map((b) => -Me(b));
  }
  function g() {
    return s(u).map((b) => b[0]).map((b, p) => b + l[p]);
  }
  return {
    snaps: u,
    snapsAligned: f
  };
}
function Hy(e, t, n, r, a, o) {
  const {
    groupSlides: i
  } = a, {
    min: s,
    max: l
  } = r, u = f();
  function f() {
    const m = i(o), g = !e || t === "keepSnaps";
    return n.length === 1 ? [o] : g ? m : m.slice(s, l).map((h, b, p) => {
      const v = !b, y = Dl(p, b);
      if (v) {
        const S = ct(p[0]) + 1;
        return yu(S);
      }
      if (y) {
        const S = cr(o) - ct(p)[0] + 1;
        return yu(S, ct(p)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: u
  };
}
function Wy(e, t, n, r, a) {
  const {
    reachedAny: o,
    removeOffset: i,
    constrain: s
  } = r;
  function l(h) {
    return h.concat().sort((b, p) => Me(b) - Me(p))[0];
  }
  function u(h) {
    const b = e ? i(h) : s(h), p = t.map((y, S) => ({
      diff: f(y - b, 0),
      index: S
    })).sort((y, S) => Me(y.diff) - Me(S.diff)), {
      index: v
    } = p[0];
    return {
      index: v,
      distance: b
    };
  }
  function f(h, b) {
    const p = [h, h + n, h - n];
    if (!e) return h;
    if (!b) return l(p);
    const v = p.filter((y) => Ml(y) === b);
    return v.length ? l(v) : ct(p) - n;
  }
  function c(h, b) {
    const p = t[h] - a.get(), v = f(p, b);
    return {
      index: h,
      distance: v
    };
  }
  function m(h, b) {
    const p = a.get() + h, {
      index: v,
      distance: y
    } = u(p), S = !e && o(p);
    if (!b || S) return {
      index: v,
      distance: h
    };
    const C = t[v] - y, D = h + f(C, 0);
    return {
      index: v,
      distance: D
    };
  }
  return {
    byDistance: m,
    byIndex: c,
    shortcut: f
  };
}
function Yy(e, t, n, r, a, o, i) {
  function s(c) {
    const m = c.distance, g = c.index !== t.get();
    o.add(m), m && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), g && (n.set(t.get()), t.set(c.index), i.emit("select"));
  }
  function l(c, m) {
    const g = a.byDistance(c, m);
    s(g);
  }
  function u(c, m) {
    const g = t.clone().set(c), h = a.byIndex(g.get(), m);
    s(h);
  }
  return {
    distance: l,
    index: u
  };
}
function Vy(e, t, n, r, a, o, i, s) {
  const l = {
    passive: !0,
    capture: !0
  };
  let u = 0;
  function f(g) {
    if (!s) return;
    function h(b) {
      if ((/* @__PURE__ */ new Date()).getTime() - u > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const y = n.findIndex((S) => S.includes(b));
      Ol(y) && (a.useDuration(0), r.index(y, 0), i.emit("slideFocus"));
    }
    o.add(document, "keydown", c, !1), t.forEach((b, p) => {
      o.add(b, "focus", (v) => {
        (Jr(s) || s(g, v)) && h(p);
      }, l);
    });
  }
  function c(g) {
    g.code === "Tab" && (u = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: f
  };
}
function qn(e) {
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
    return Ol(l) ? l : l.get();
  }
  return {
    get: n,
    set: r,
    add: a,
    subtract: o
  };
}
function Hm(e, t) {
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
    const g = Ey(e.direction(m));
    g !== a && (r.transform = n(g), a = g);
  }
  function u(m) {
    o = !m;
  }
  function f() {
    o || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: f,
    to: l,
    toggleActive: u
  };
}
function Gy(e, t, n, r, a, o, i, s, l) {
  const f = Kn(a), c = Kn(a).reverse(), m = v().concat(y());
  function g(_, R) {
    return _.reduce((k, Y) => k - a[Y], R);
  }
  function h(_, R) {
    return _.reduce((k, Y) => g(k, R) > 0 ? k.concat([Y]) : k, []);
  }
  function b(_) {
    return o.map((R, k) => ({
      start: R - r[k] + 0.5 + _,
      end: R + t - 0.5 + _
    }));
  }
  function p(_, R, k) {
    const Y = b(R);
    return _.map((I) => {
      const H = k ? 0 : -n, T = k ? n : 0, W = k ? "end" : "start", F = Y[I][W];
      return {
        index: I,
        loopPoint: F,
        slideLocation: qn(-1),
        translate: Hm(e, l[I]),
        target: () => s.get() > F ? H : T
      };
    });
  }
  function v() {
    const _ = i[0], R = h(c, _);
    return p(R, n, !1);
  }
  function y() {
    const _ = t - i[0] - 1, R = h(f, _);
    return p(R, -n, !0);
  }
  function S() {
    return m.every(({
      index: _
    }) => {
      const R = f.filter((k) => k !== _);
      return g(R, t) <= 0.1;
    });
  }
  function C() {
    m.forEach((_) => {
      const {
        target: R,
        translate: k,
        slideLocation: Y
      } = _, I = R();
      I !== Y.get() && (k.to(I), Y.set(I));
    });
  }
  function D() {
    m.forEach((_) => _.translate.clear());
  }
  return {
    canLoop: S,
    clear: D,
    loop: C,
    loopPoints: m
  };
}
function Uy(e, t, n) {
  let r, a = !1;
  function o(l) {
    if (!n) return;
    function u(f) {
      for (const c of f)
        if (c.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((f) => {
      a || (Jr(n) || n(l, f)) && u(f);
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
function Ky(e, t, n, r) {
  const a = {};
  let o = null, i = null, s, l = !1;
  function u() {
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
  function f() {
    s && s.disconnect(), l = !0;
  }
  function c(h) {
    return Xn(a).reduce((b, p) => {
      const v = parseInt(p), {
        isIntersecting: y
      } = a[v];
      return (h && y || !h && !y) && b.push(v), b;
    }, []);
  }
  function m(h = !0) {
    if (h && o) return o;
    if (!h && i) return i;
    const b = c(h);
    return h && (o = b), h || (i = b), b;
  }
  return {
    init: u,
    destroy: f,
    get: m
  };
}
function Xy(e, t, n, r, a, o) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: l
  } = e, u = n[0] && a, f = h(), c = b(), m = n.map(i), g = p();
  function h() {
    if (!u) return 0;
    const y = n[0];
    return Me(t[s] - y[s]);
  }
  function b() {
    if (!u) return 0;
    const y = o.getComputedStyle(ct(r));
    return parseFloat(y.getPropertyValue(`margin-${l}`));
  }
  function p() {
    return n.map((y, S, C) => {
      const D = !S, E = Dl(C, S);
      return D ? m[S] + f : E ? m[S] + c : C[S + 1][s] - y[s];
    }).map(Me);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: g,
    startGap: f,
    endGap: c
  };
}
function Qy(e, t, n, r, a, o, i, s, l) {
  const {
    startEdge: u,
    endEdge: f,
    direction: c
  } = e, m = Ol(n);
  function g(v, y) {
    return Kn(v).filter((S) => S % y === 0).map((S) => v.slice(S, S + y));
  }
  function h(v) {
    return v.length ? Kn(v).reduce((y, S, C) => {
      const D = ct(y) || 0, E = D === 0, _ = S === cr(v), R = a[u] - o[D][u], k = a[u] - o[S][f], Y = !r && E ? c(i) : 0, I = !r && _ ? c(s) : 0, H = Me(k - I - (R + Y));
      return C && H > t + l && y.push(S), _ && y.push(v.length), y;
    }, []).map((y, S, C) => {
      const D = Math.max(C[S - 1] || 0);
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
function Jy(e, t, n, r, a, o, i) {
  const {
    align: s,
    axis: l,
    direction: u,
    startIndex: f,
    loop: c,
    duration: m,
    dragFree: g,
    dragThreshold: h,
    inViewThreshold: b,
    slidesToScroll: p,
    skipSnaps: v,
    containScroll: y,
    watchResize: S,
    watchSlides: C,
    watchDrag: D,
    watchFocus: E
  } = o, _ = 2, R = Ry(), k = R.measure(t), Y = n.map(R.measure), I = My(l, u), H = I.measureSize(k), T = Iy(H), W = Ty(s, H), F = !c && !!y, B = c || !!y, {
    slideSizes: L,
    slideSizesWithGaps: q,
    startGap: te,
    endGap: ie
  } = Xy(I, k, Y, n, B, a), X = Qy(I, H, p, c, k, Y, te, ie, _), {
    snaps: O,
    snapsAligned: N
  } = Fy(I, W, k, Y, X), z = -ct(O) + ct(q), {
    snapsContained: A,
    scrollContainLimit: $
  } = qy(H, z, N, y, _), j = F ? A : N, {
    limit: V
  } = $y(z, j, c), Q = Fm(cr(j), f, c), ne = Q.clone(), ae = Kn(n), G = ({
    dragHandler: Ie,
    scrollBody: gt,
    scrollBounds: Ae,
    options: {
      loop: Le
    }
  }) => {
    Le || Ae.constrain(Ie.pointerDown()), gt.seek();
  }, Z = ({
    scrollBody: Ie,
    translate: gt,
    location: Ae,
    offsetLocation: Le,
    previousLocation: Ct,
    scrollLooper: kt,
    slideLooper: cn,
    dragHandler: On,
    animation: jt,
    eventHandler: J,
    scrollBounds: pe,
    options: {
      loop: ve
    }
  }, de) => {
    const Se = Ie.settled(), ee = !pe.shouldConstrain(), fe = ve ? Se : Se && ee, _e = fe && !On.pointerDown();
    _e && jt.stop();
    const Ce = Ae.get() * de + Ct.get() * (1 - de);
    Le.set(Ce), ve && (kt.loop(Ie.direction()), cn.loop()), gt.to(Le.get()), _e && J.emit("settle"), fe || J.emit("scroll");
  }, P = Oy(r, a, () => G(nt), (Ie) => Z(nt, Ie)), K = 0.68, se = j[Q.get()], ce = qn(se), le = qn(se), oe = qn(se), ge = qn(se), De = zy(ce, oe, le, ge, m, K), me = Wy(c, j, z, V, ge), Pe = Yy(P, Q, ne, De, me, ge, i), je = jy(V), Fe = Qn(), ze = Ky(t, n, i, b), {
    slideRegistry: Ye
  } = Hy(F, y, j, $, X, ae), tt = Vy(e, n, Ye, Pe, De, Fe, i, E), nt = {
    ownerDocument: r,
    ownerWindow: a,
    eventHandler: i,
    containerRect: k,
    slideRects: Y,
    animation: P,
    axis: I,
    dragHandler: Dy(I, e, r, a, ge, ky(I, a), ce, P, Pe, De, me, Q, i, T, g, h, v, K, D),
    eventStore: Fe,
    percentOfView: T,
    index: Q,
    indexPrevious: ne,
    limit: V,
    location: ce,
    offsetLocation: oe,
    previousLocation: le,
    options: o,
    resizeHandler: Ay(t, i, a, n, I, S, R),
    scrollBody: De,
    scrollBounds: Ly(V, oe, ge, De, T),
    scrollLooper: By(z, V, oe, [ce, oe, le, ge]),
    scrollProgress: je,
    scrollSnapList: j.map(je.get),
    scrollSnaps: j,
    scrollTarget: me,
    scrollTo: Pe,
    slideLooper: Gy(I, H, z, L, q, O, j, oe, n),
    slideFocus: tt,
    slidesHandler: Uy(t, i, C),
    slidesInView: ze,
    slideIndexes: ae,
    slideRegistry: Ye,
    slidesToScroll: X,
    target: ge,
    translate: Hm(I, t)
  };
  return nt;
}
function Zy() {
  let e = {}, t;
  function n(u) {
    t = u;
  }
  function r(u) {
    return e[u] || [];
  }
  function a(u) {
    return r(u).forEach((f) => f(t, u)), l;
  }
  function o(u, f) {
    return e[u] = r(u).concat([f]), l;
  }
  function i(u, f) {
    return e[u] = r(u).filter((c) => c !== f), l;
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
const e0 = {
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
function t0(e) {
  function t(o, i) {
    return jm(o, i || {});
  }
  function n(o) {
    const i = o.breakpoints || {}, s = Xn(i).filter((l) => e.matchMedia(l).matches).map((l) => i[l]).reduce((l, u) => t(l, u), {});
    return t(o, s);
  }
  function r(o) {
    return o.map((i) => Xn(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function n0(e) {
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
function kr(e, t, n) {
  const r = e.ownerDocument, a = r.defaultView, o = t0(a), i = n0(o), s = Qn(), l = Zy(), {
    mergeOptions: u,
    optionsAtMedia: f,
    optionsMediaQueries: c
  } = o, {
    on: m,
    off: g,
    emit: h
  } = l, b = I;
  let p = !1, v, y = u(e0, kr.globalOptions), S = u(y), C = [], D, E, _;
  function R() {
    const {
      container: ae,
      slides: G
    } = S;
    E = (Ws(ae) ? e.querySelector(ae) : ae) || e.children[0];
    const P = Ws(G) ? E.querySelectorAll(G) : G;
    _ = [].slice.call(P || E.children);
  }
  function k(ae) {
    const G = Jy(e, E, _, r, a, ae, l);
    if (ae.loop && !G.slideLooper.canLoop()) {
      const Z = Object.assign({}, ae, {
        loop: !1
      });
      return k(Z);
    }
    return G;
  }
  function Y(ae, G) {
    p || (y = u(y, ae), S = f(y), C = G || C, R(), v = k(S), c([y, ...C.map(({
      options: Z
    }) => Z)]).forEach((Z) => s.add(Z, "change", I)), S.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(ne), v.eventHandler.init(ne), v.resizeHandler.init(ne), v.slidesHandler.init(ne), v.options.loop && v.slideLooper.loop(), E.offsetParent && _.length && v.dragHandler.init(ne), D = i.init(ne, C)));
  }
  function I(ae, G) {
    const Z = X();
    H(), Y(u({
      startIndex: Z
    }, ae), G), l.emit("reInit");
  }
  function H() {
    v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), i.destroy(), s.clear();
  }
  function T() {
    p || (p = !0, s.clear(), H(), l.emit("destroy"), l.clear());
  }
  function W(ae, G, Z) {
    !S.active || p || (v.scrollBody.useBaseFriction().useDuration(G === !0 ? 0 : S.duration), v.scrollTo.index(ae, Z || 0));
  }
  function F(ae) {
    const G = v.index.add(1).get();
    W(G, ae, -1);
  }
  function B(ae) {
    const G = v.index.add(-1).get();
    W(G, ae, 1);
  }
  function L() {
    return v.index.add(1).get() !== X();
  }
  function q() {
    return v.index.add(-1).get() !== X();
  }
  function te() {
    return v.scrollSnapList;
  }
  function ie() {
    return v.scrollProgress.get(v.offsetLocation.get());
  }
  function X() {
    return v.index.get();
  }
  function O() {
    return v.indexPrevious.get();
  }
  function N() {
    return v.slidesInView.get();
  }
  function z() {
    return v.slidesInView.get(!1);
  }
  function A() {
    return D;
  }
  function $() {
    return v;
  }
  function j() {
    return e;
  }
  function V() {
    return E;
  }
  function Q() {
    return _;
  }
  const ne = {
    canScrollNext: L,
    canScrollPrev: q,
    containerNode: V,
    internalEngine: $,
    destroy: T,
    off: g,
    on: m,
    emit: h,
    plugins: A,
    previousScrollSnap: O,
    reInit: b,
    rootNode: j,
    scrollNext: F,
    scrollPrev: B,
    scrollProgress: ie,
    scrollSnapList: te,
    scrollTo: W,
    selectedScrollSnap: X,
    slideNodes: Q,
    slidesInView: N,
    slidesNotInView: z
  };
  return Y(t, n), setTimeout(() => l.emit("init"), 0), ne;
}
kr.globalOptions = void 0;
function kl(e = {}, t = []) {
  const n = _n(e), r = _n(t), [a, o] = Ot(), [i, s] = Ot(), l = vm(() => {
    a && a.reInit(n.current, r.current);
  }, [a]);
  return st(() => {
    Tl(n.current, e) || (n.current = e, l());
  }, [e, l]), st(() => {
    Py(r.current, t) || (r.current = t, l());
  }, [t, l]), st(() => {
    if (Cy() && i) {
      kr.globalOptions = kl.globalOptions;
      const u = kr(i, n.current, r.current);
      return o(u), () => u.destroy();
    } else
      o(void 0);
  }, [i, o]), [s, a];
}
kl.globalOptions = void 0;
const Wm = M.createContext(null);
function Zr() {
  const e = M.useContext(Wm);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function iE({
  orientation: e = "horizontal",
  opts: t,
  setApi: n,
  plugins: r,
  className: a,
  children: o,
  ...i
}) {
  const [s, l] = kl(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    r
  ), [u, f] = M.useState(!1), [c, m] = M.useState(!1), g = M.useCallback((v) => {
    v && (f(v.canScrollPrev()), m(v.canScrollNext()));
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
  }, [l, g]), /* @__PURE__ */ d(
    Wm.Provider,
    {
      value: {
        carouselRef: s,
        api: l,
        opts: t,
        orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev: h,
        scrollNext: b,
        canScrollPrev: u,
        canScrollNext: c
      },
      children: /* @__PURE__ */ d(
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
function sE({ className: e, ...t }) {
  const { carouselRef: n, orientation: r } = Zr();
  return /* @__PURE__ */ d("div", { ref: n, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ d(
    "div",
    {
      className: w("flex", r === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    }
  ) });
}
function lE({ className: e, ...t }) {
  const { orientation: n } = Zr();
  return /* @__PURE__ */ d(
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
function uE({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...r
}) {
  const { orientation: a, scrollPrev: o, canScrollPrev: i } = Zr();
  return /* @__PURE__ */ U(
    Kr,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: n,
      className: w(
        "absolute size-8 rounded-full",
        a === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: o,
      ...r,
      children: [
        /* @__PURE__ */ d(Zh, {}),
        /* @__PURE__ */ d("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function cE({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...r
}) {
  const { orientation: a, scrollNext: o, canScrollNext: i } = Zr();
  return /* @__PURE__ */ U(
    Kr,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: n,
      className: w(
        "absolute size-8 rounded-full",
        a === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: o,
      ...r,
      children: [
        /* @__PURE__ */ d(Jh, {}),
        /* @__PURE__ */ d("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
var vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Na, wu;
function pt() {
  if (wu) return Na;
  wu = 1;
  var e = Array.isArray;
  return Na = e, Na;
}
var Ea, xu;
function Ym() {
  if (xu) return Ea;
  xu = 1;
  var e = typeof vr == "object" && vr && vr.Object === Object && vr;
  return Ea = e, Ea;
}
var Ta, _u;
function St() {
  if (_u) return Ta;
  _u = 1;
  var e = Ym(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Ta = n, Ta;
}
var Oa, Su;
function dr() {
  if (Su) return Oa;
  Su = 1;
  var e = St(), t = e.Symbol;
  return Oa = t, Oa;
}
var Ma, Cu;
function r0() {
  if (Cu) return Ma;
  Cu = 1;
  var e = dr(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, a = e ? e.toStringTag : void 0;
  function o(i) {
    var s = n.call(i, a), l = i[a];
    try {
      i[a] = void 0;
      var u = !0;
    } catch {
    }
    var f = r.call(i);
    return u && (s ? i[a] = l : delete i[a]), f;
  }
  return Ma = o, Ma;
}
var Da, Pu;
function a0() {
  if (Pu) return Da;
  Pu = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return Da = n, Da;
}
var ka, Nu;
function on() {
  if (Nu) return ka;
  Nu = 1;
  var e = dr(), t = r0(), n = a0(), r = "[object Null]", a = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? a : r : o && o in Object(s) ? t(s) : n(s);
  }
  return ka = i, ka;
}
var Ra, Eu;
function sn() {
  if (Eu) return Ra;
  Eu = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Ra = e, Ra;
}
var Ia, Tu;
function fr() {
  if (Tu) return Ia;
  Tu = 1;
  var e = on(), t = sn(), n = "[object Symbol]";
  function r(a) {
    return typeof a == "symbol" || t(a) && e(a) == n;
  }
  return Ia = r, Ia;
}
var Aa, Ou;
function Rl() {
  if (Ou) return Aa;
  Ou = 1;
  var e = pt(), t = fr(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function a(o, i) {
    if (e(o))
      return !1;
    var s = typeof o;
    return s == "number" || s == "symbol" || s == "boolean" || o == null || t(o) ? !0 : r.test(o) || !n.test(o) || i != null && o in Object(i);
  }
  return Aa = a, Aa;
}
var za, Mu;
function $t() {
  if (Mu) return za;
  Mu = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return za = e, za;
}
var La, Du;
function Il() {
  if (Du) return La;
  Du = 1;
  var e = on(), t = $t(), n = "[object AsyncFunction]", r = "[object Function]", a = "[object GeneratorFunction]", o = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var l = e(s);
    return l == r || l == a || l == n || l == o;
  }
  return La = i, La;
}
var qa, ku;
function o0() {
  if (ku) return qa;
  ku = 1;
  var e = St(), t = e["__core-js_shared__"];
  return qa = t, qa;
}
var $a, Ru;
function i0() {
  if (Ru) return $a;
  Ru = 1;
  var e = o0(), t = (function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!t && t in r;
  }
  return $a = n, $a;
}
var Ba, Iu;
function Vm() {
  if (Iu) return Ba;
  Iu = 1;
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
  return Ba = n, Ba;
}
var ja, Au;
function s0() {
  if (Au) return ja;
  Au = 1;
  var e = Il(), t = i0(), n = $t(), r = Vm(), a = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, l = i.toString, u = s.hasOwnProperty, f = RegExp(
    "^" + l.call(u).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function c(m) {
    if (!n(m) || t(m))
      return !1;
    var g = e(m) ? f : o;
    return g.test(r(m));
  }
  return ja = c, ja;
}
var Fa, zu;
function l0() {
  if (zu) return Fa;
  zu = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return Fa = e, Fa;
}
var Ha, Lu;
function ln() {
  if (Lu) return Ha;
  Lu = 1;
  var e = s0(), t = l0();
  function n(r, a) {
    var o = t(r, a);
    return e(o) ? o : void 0;
  }
  return Ha = n, Ha;
}
var Wa, qu;
function ea() {
  if (qu) return Wa;
  qu = 1;
  var e = ln(), t = e(Object, "create");
  return Wa = t, Wa;
}
var Ya, $u;
function u0() {
  if ($u) return Ya;
  $u = 1;
  var e = ea();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ya = t, Ya;
}
var Va, Bu;
function c0() {
  if (Bu) return Va;
  Bu = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return Va = e, Va;
}
var Ga, ju;
function d0() {
  if (ju) return Ga;
  ju = 1;
  var e = ea(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function a(o) {
    var i = this.__data__;
    if (e) {
      var s = i[o];
      return s === t ? void 0 : s;
    }
    return r.call(i, o) ? i[o] : void 0;
  }
  return Ga = a, Ga;
}
var Ua, Fu;
function f0() {
  if (Fu) return Ua;
  Fu = 1;
  var e = ea(), t = Object.prototype, n = t.hasOwnProperty;
  function r(a) {
    var o = this.__data__;
    return e ? o[a] !== void 0 : n.call(o, a);
  }
  return Ua = r, Ua;
}
var Ka, Hu;
function m0() {
  if (Hu) return Ka;
  Hu = 1;
  var e = ea(), t = "__lodash_hash_undefined__";
  function n(r, a) {
    var o = this.__data__;
    return this.size += this.has(r) ? 0 : 1, o[r] = e && a === void 0 ? t : a, this;
  }
  return Ka = n, Ka;
}
var Xa, Wu;
function p0() {
  if (Wu) return Xa;
  Wu = 1;
  var e = u0(), t = c0(), n = d0(), r = f0(), a = m0();
  function o(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var u = i[s];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = a, Xa = o, Xa;
}
var Qa, Yu;
function h0() {
  if (Yu) return Qa;
  Yu = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Qa = e, Qa;
}
var Ja, Vu;
function Al() {
  if (Vu) return Ja;
  Vu = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Ja = e, Ja;
}
var Za, Gu;
function ta() {
  if (Gu) return Za;
  Gu = 1;
  var e = Al();
  function t(n, r) {
    for (var a = n.length; a--; )
      if (e(n[a][0], r))
        return a;
    return -1;
  }
  return Za = t, Za;
}
var eo, Uu;
function g0() {
  if (Uu) return eo;
  Uu = 1;
  var e = ta(), t = Array.prototype, n = t.splice;
  function r(a) {
    var o = this.__data__, i = e(o, a);
    if (i < 0)
      return !1;
    var s = o.length - 1;
    return i == s ? o.pop() : n.call(o, i, 1), --this.size, !0;
  }
  return eo = r, eo;
}
var to, Ku;
function v0() {
  if (Ku) return to;
  Ku = 1;
  var e = ta();
  function t(n) {
    var r = this.__data__, a = e(r, n);
    return a < 0 ? void 0 : r[a][1];
  }
  return to = t, to;
}
var no, Xu;
function b0() {
  if (Xu) return no;
  Xu = 1;
  var e = ta();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return no = t, no;
}
var ro, Qu;
function y0() {
  if (Qu) return ro;
  Qu = 1;
  var e = ta();
  function t(n, r) {
    var a = this.__data__, o = e(a, n);
    return o < 0 ? (++this.size, a.push([n, r])) : a[o][1] = r, this;
  }
  return ro = t, ro;
}
var ao, Ju;
function na() {
  if (Ju) return ao;
  Ju = 1;
  var e = h0(), t = g0(), n = v0(), r = b0(), a = y0();
  function o(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var u = i[s];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = a, ao = o, ao;
}
var oo, Zu;
function zl() {
  if (Zu) return oo;
  Zu = 1;
  var e = ln(), t = St(), n = e(t, "Map");
  return oo = n, oo;
}
var io, ec;
function w0() {
  if (ec) return io;
  ec = 1;
  var e = p0(), t = na(), n = zl();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return io = r, io;
}
var so, tc;
function x0() {
  if (tc) return so;
  tc = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return so = e, so;
}
var lo, nc;
function ra() {
  if (nc) return lo;
  nc = 1;
  var e = x0();
  function t(n, r) {
    var a = n.__data__;
    return e(r) ? a[typeof r == "string" ? "string" : "hash"] : a.map;
  }
  return lo = t, lo;
}
var uo, rc;
function _0() {
  if (rc) return uo;
  rc = 1;
  var e = ra();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return uo = t, uo;
}
var co, ac;
function S0() {
  if (ac) return co;
  ac = 1;
  var e = ra();
  function t(n) {
    return e(this, n).get(n);
  }
  return co = t, co;
}
var fo, oc;
function C0() {
  if (oc) return fo;
  oc = 1;
  var e = ra();
  function t(n) {
    return e(this, n).has(n);
  }
  return fo = t, fo;
}
var mo, ic;
function P0() {
  if (ic) return mo;
  ic = 1;
  var e = ra();
  function t(n, r) {
    var a = e(this, n), o = a.size;
    return a.set(n, r), this.size += a.size == o ? 0 : 1, this;
  }
  return mo = t, mo;
}
var po, sc;
function Ll() {
  if (sc) return po;
  sc = 1;
  var e = w0(), t = _0(), n = S0(), r = C0(), a = P0();
  function o(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var u = i[s];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = a, po = o, po;
}
var ho, lc;
function N0() {
  if (lc) return ho;
  lc = 1;
  var e = Ll(), t = "Expected a function";
  function n(r, a) {
    if (typeof r != "function" || a != null && typeof a != "function")
      throw new TypeError(t);
    var o = function() {
      var i = arguments, s = a ? a.apply(this, i) : i[0], l = o.cache;
      if (l.has(s))
        return l.get(s);
      var u = r.apply(this, i);
      return o.cache = l.set(s, u) || l, u;
    };
    return o.cache = new (n.Cache || e)(), o;
  }
  return n.Cache = e, ho = n, ho;
}
var go, uc;
function E0() {
  if (uc) return go;
  uc = 1;
  var e = N0(), t = 500;
  function n(r) {
    var a = e(r, function(i) {
      return o.size === t && o.clear(), i;
    }), o = a.cache;
    return a;
  }
  return go = n, go;
}
var vo, cc;
function T0() {
  if (cc) return vo;
  cc = 1;
  var e = E0(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(a) {
    var o = [];
    return a.charCodeAt(0) === 46 && o.push(""), a.replace(t, function(i, s, l, u) {
      o.push(l ? u.replace(n, "$1") : s || i);
    }), o;
  });
  return vo = r, vo;
}
var bo, dc;
function Gm() {
  if (dc) return bo;
  dc = 1;
  function e(t, n) {
    for (var r = -1, a = t == null ? 0 : t.length, o = Array(a); ++r < a; )
      o[r] = n(t[r], r, t);
    return o;
  }
  return bo = e, bo;
}
var yo, fc;
function O0() {
  if (fc) return yo;
  fc = 1;
  var e = dr(), t = Gm(), n = pt(), r = fr(), a = e ? e.prototype : void 0, o = a ? a.toString : void 0;
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
  return yo = i, yo;
}
var wo, mc;
function Um() {
  if (mc) return wo;
  mc = 1;
  var e = O0();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return wo = t, wo;
}
var xo, pc;
function Km() {
  if (pc) return xo;
  pc = 1;
  var e = pt(), t = Rl(), n = T0(), r = Um();
  function a(o, i) {
    return e(o) ? o : t(o, i) ? [o] : n(r(o));
  }
  return xo = a, xo;
}
var _o, hc;
function aa() {
  if (hc) return _o;
  hc = 1;
  var e = fr();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return _o = t, _o;
}
var So, gc;
function ql() {
  if (gc) return So;
  gc = 1;
  var e = Km(), t = aa();
  function n(r, a) {
    a = e(a, r);
    for (var o = 0, i = a.length; r != null && o < i; )
      r = r[t(a[o++])];
    return o && o == i ? r : void 0;
  }
  return So = n, So;
}
var Co, vc;
function Xm() {
  if (vc) return Co;
  vc = 1;
  var e = ql();
  function t(n, r, a) {
    var o = n == null ? void 0 : e(n, r);
    return o === void 0 ? a : o;
  }
  return Co = t, Co;
}
Xm();
var Po, bc;
function M0() {
  if (bc) return Po;
  bc = 1;
  function e(t) {
    return t == null;
  }
  return Po = e, Po;
}
var D0 = M0();
const k0 = /* @__PURE__ */ _t(D0);
var No, yc;
function R0() {
  if (yc) return No;
  yc = 1;
  var e = on(), t = pt(), n = sn(), r = "[object String]";
  function a(o) {
    return typeof o == "string" || !t(o) && n(o) && e(o) == r;
  }
  return No = a, No;
}
var I0 = R0();
const Qm = /* @__PURE__ */ _t(I0);
var A0 = Il();
const Rr = /* @__PURE__ */ _t(A0);
var z0 = $t();
const Jm = /* @__PURE__ */ _t(z0);
var br = { exports: {} }, be = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wc;
function L0() {
  if (wc) return be;
  wc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
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
            case u:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case i:
                case l:
                case m:
                case c:
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
  return be.ContextConsumer = i, be.ContextProvider = o, be.Element = e, be.ForwardRef = l, be.Fragment = n, be.Lazy = m, be.Memo = c, be.Portal = t, be.Profiler = a, be.StrictMode = r, be.Suspense = u, be.SuspenseList = f, be.isAsyncMode = function() {
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
    return b(p) === c;
  }, be.isPortal = function(p) {
    return b(p) === t;
  }, be.isProfiler = function(p) {
    return b(p) === a;
  }, be.isStrictMode = function(p) {
    return b(p) === r;
  }, be.isSuspense = function(p) {
    return b(p) === u;
  }, be.isSuspenseList = function(p) {
    return b(p) === f;
  }, be.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === a || p === r || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === c || p.$$typeof === o || p.$$typeof === i || p.$$typeof === l || p.$$typeof === h || p.getModuleId !== void 0);
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
var xc;
function q0() {
  return xc || (xc = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, v = !1, y = !1, S;
    S = Symbol.for("react.module.reference");
    function C(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === a || y || P === r || P === u || P === f || v || P === g || h || b || p || typeof P == "object" && P !== null && (P.$$typeof === m || P.$$typeof === c || P.$$typeof === o || P.$$typeof === i || P.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === S || P.getModuleId !== void 0));
    }
    function D(P) {
      if (typeof P == "object" && P !== null) {
        var K = P.$$typeof;
        switch (K) {
          case e:
            var se = P.type;
            switch (se) {
              case n:
              case a:
              case r:
              case u:
              case f:
                return se;
              default:
                var ce = se && se.$$typeof;
                switch (ce) {
                  case s:
                  case i:
                  case l:
                  case m:
                  case c:
                  case o:
                    return ce;
                  default:
                    return K;
                }
            }
          case t:
            return K;
        }
      }
    }
    var E = i, _ = o, R = e, k = l, Y = n, I = m, H = c, T = t, W = a, F = r, B = u, L = f, q = !1, te = !1;
    function ie(P) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(P) {
      return te || (te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(P) {
      return D(P) === i;
    }
    function N(P) {
      return D(P) === o;
    }
    function z(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function A(P) {
      return D(P) === l;
    }
    function $(P) {
      return D(P) === n;
    }
    function j(P) {
      return D(P) === m;
    }
    function V(P) {
      return D(P) === c;
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
      return D(P) === u;
    }
    function Z(P) {
      return D(P) === f;
    }
    ye.ContextConsumer = E, ye.ContextProvider = _, ye.Element = R, ye.ForwardRef = k, ye.Fragment = Y, ye.Lazy = I, ye.Memo = H, ye.Portal = T, ye.Profiler = W, ye.StrictMode = F, ye.Suspense = B, ye.SuspenseList = L, ye.isAsyncMode = ie, ye.isConcurrentMode = X, ye.isContextConsumer = O, ye.isContextProvider = N, ye.isElement = z, ye.isForwardRef = A, ye.isFragment = $, ye.isLazy = j, ye.isMemo = V, ye.isPortal = Q, ye.isProfiler = ne, ye.isStrictMode = ae, ye.isSuspense = G, ye.isSuspenseList = Z, ye.isValidElementType = C, ye.typeOf = D;
  })()), ye;
}
var _c;
function $0() {
  return _c || (_c = 1, process.env.NODE_ENV === "production" ? br.exports = L0() : br.exports = q0()), br.exports;
}
$0();
var Eo, Sc;
function Zm() {
  if (Sc) return Eo;
  Sc = 1;
  var e = on(), t = sn(), n = "[object Number]";
  function r(a) {
    return typeof a == "number" || t(a) && e(a) == n;
  }
  return Eo = r, Eo;
}
var To, Cc;
function B0() {
  if (Cc) return To;
  Cc = 1;
  var e = Zm();
  function t(n) {
    return e(n) && n != +n;
  }
  return To = t, To;
}
var j0 = B0();
const F0 = /* @__PURE__ */ _t(j0);
var H0 = Zm();
const W0 = /* @__PURE__ */ _t(H0);
var yr = function(t) {
  return Qm(t) && t.indexOf("%") === t.length - 1;
}, ut = function(t) {
  return W0(t) && !F0(t);
}, Ir = function(t) {
  return ut(t) || Qm(t);
};
function Vs(e) {
  "@babel/helpers - typeof";
  return Vs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vs(e);
}
var Y0 = ["viewBox", "children"], V0 = [
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
], Pc = ["points", "pathLength"], Oo = {
  svg: Y0,
  polygon: Pc,
  polyline: Pc
}, ep = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], G0 = function(t, n, r) {
  return function(a) {
    return t(n, r, a), null;
  };
}, U0 = function(t, n, r) {
  if (!Jm(t) || Vs(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(o) {
    var i = t[o];
    ep.includes(o) && typeof i == "function" && (a || (a = {}), a[o] = G0(i, n, r));
  }), a;
}, K0 = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, X0 = function(t, n, r, a) {
  var o, i = (o = Oo == null ? void 0 : Oo[a]) !== null && o !== void 0 ? o : [];
  return n.startsWith("data-") || !Rr(t) && (a && i.includes(n) || V0.includes(n)) || ep.includes(n);
}, tp = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ ig(t) && (a = t.props), !Jm(a))
    return null;
  var o = {};
  return Object.keys(a).forEach(function(i) {
    var s;
    X0((s = a) === null || s === void 0 ? void 0 : s[i], i, n, r) && (o[i] = a[i]);
  }), o;
}, Q0 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Gs() {
  return Gs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Gs.apply(this, arguments);
}
function J0(e, t) {
  if (e == null) return {};
  var n = Z0(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Z0(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function ew(e) {
  var t = e.children, n = e.width, r = e.height, a = e.viewBox, o = e.className, i = e.style, s = e.title, l = e.desc, u = J0(e, Q0), f = a || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, c = Xt("recharts-surface", o);
  return /* @__PURE__ */ x.createElement("svg", Gs({}, tp(u, !0, "svg"), {
    className: c,
    width: n,
    height: r,
    style: i,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ x.createElement("title", null, s), /* @__PURE__ */ x.createElement("desc", null, l), t);
}
var tw = process.env.NODE_ENV !== "production", Tr = function(t, n) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    a[o - 2] = arguments[o];
  if (tw && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(n.replace(/%s/g, function() {
        return a[i++];
      }));
    }
}, Mo, Nc;
function nw() {
  if (Nc) return Mo;
  Nc = 1;
  function e(t, n, r) {
    var a = -1, o = t.length;
    n < 0 && (n = -n > o ? 0 : o + n), r = r > o ? o : r, r < 0 && (r += o), o = n > r ? 0 : r - n >>> 0, n >>>= 0;
    for (var i = Array(o); ++a < o; )
      i[a] = t[a + n];
    return i;
  }
  return Mo = e, Mo;
}
var Do, Ec;
function rw() {
  if (Ec) return Do;
  Ec = 1;
  var e = nw();
  function t(n, r, a) {
    var o = n.length;
    return a = a === void 0 ? o : a, !r && a >= o ? n : e(n, r, a);
  }
  return Do = t, Do;
}
var ko, Tc;
function np() {
  if (Tc) return ko;
  Tc = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", a = t + n + r, o = "\\ufe0e\\ufe0f", i = "\\u200d", s = RegExp("[" + i + e + a + o + "]");
  function l(u) {
    return s.test(u);
  }
  return ko = l, ko;
}
var Ro, Oc;
function aw() {
  if (Oc) return Ro;
  Oc = 1;
  function e(t) {
    return t.split("");
  }
  return Ro = e, Ro;
}
var Io, Mc;
function ow() {
  if (Mc) return Io;
  Mc = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", a = t + n + r, o = "\\ufe0e\\ufe0f", i = "[" + e + "]", s = "[" + a + "]", l = "\\ud83c[\\udffb-\\udfff]", u = "(?:" + s + "|" + l + ")", f = "[^" + e + "]", c = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", g = "\\u200d", h = u + "?", b = "[" + o + "]?", p = "(?:" + g + "(?:" + [f, c, m].join("|") + ")" + b + h + ")*", v = b + h + p, y = "(?:" + [f + s + "?", s, c, m, i].join("|") + ")", S = RegExp(l + "(?=" + l + ")|" + y + v, "g");
  function C(D) {
    return D.match(S) || [];
  }
  return Io = C, Io;
}
var Ao, Dc;
function iw() {
  if (Dc) return Ao;
  Dc = 1;
  var e = aw(), t = np(), n = ow();
  function r(a) {
    return t(a) ? n(a) : e(a);
  }
  return Ao = r, Ao;
}
var zo, kc;
function sw() {
  if (kc) return zo;
  kc = 1;
  var e = rw(), t = np(), n = iw(), r = Um();
  function a(o) {
    return function(i) {
      i = r(i);
      var s = t(i) ? n(i) : void 0, l = s ? s[0] : i.charAt(0), u = s ? e(s, 1).join("") : i.slice(1);
      return l[o]() + u;
    };
  }
  return zo = a, zo;
}
var Lo, Rc;
function lw() {
  if (Rc) return Lo;
  Rc = 1;
  var e = sw(), t = e("toUpperCase");
  return Lo = t, Lo;
}
var uw = lw();
const rp = /* @__PURE__ */ _t(uw);
function wr(e) {
  return function() {
    return e;
  };
}
const ap = Math.cos, Ar = Math.sin, ht = Math.sqrt, zr = Math.PI, oa = 2 * zr, Us = Math.PI, Ks = 2 * Us, Vt = 1e-6, cw = Ks - Vt;
function op(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function dw(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return op;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let a = 1, o = r.length; a < o; ++a)
      this._ += Math.round(arguments[a] * n) / n + r[a];
  };
}
class fw {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? op : dw(t);
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
    let i = this._x1, s = this._y1, l = r - t, u = a - n, f = i - t, c = s - n, m = f * f + c * c;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (m > Vt) if (!(Math.abs(c * l - u * f) > Vt) || !o)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let g = r - i, h = a - s, b = l * l + u * u, p = g * g + h * h, v = Math.sqrt(b), y = Math.sqrt(m), S = o * Math.tan((Us - Math.acos((b + m - p) / (2 * v * y))) / 2), C = S / y, D = S / v;
      Math.abs(C - 1) > Vt && this._append`L${t + C * f},${n + C * c}`, this._append`A${o},${o},0,0,${+(c * g > f * h)},${this._x1 = t + D * l},${this._y1 = n + D * u}`;
    }
  }
  arc(t, n, r, a, o, i) {
    if (t = +t, n = +n, r = +r, i = !!i, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(a), l = r * Math.sin(a), u = t + s, f = n + l, c = 1 ^ i, m = i ? a - o : o - a;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > Vt || Math.abs(this._y1 - f) > Vt) && this._append`L${u},${f}`, r && (m < 0 && (m = m % Ks + Ks), m > cw ? this._append`A${r},${r},0,1,${c},${t - s},${n - l}A${r},${r},0,1,${c},${this._x1 = u},${this._y1 = f}` : m > Vt && this._append`A${r},${r},0,${+(m >= Us)},${c},${this._x1 = t + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(t, n, r, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+a}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function mw(e) {
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
  }, () => new fw(t);
}
const $l = {
  draw(e, t) {
    const n = ht(t / zr);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, oa);
  }
}, pw = {
  draw(e, t) {
    const n = ht(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, ip = ht(1 / 3), hw = ip * 2, gw = {
  draw(e, t) {
    const n = ht(t / hw), r = n * ip;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, vw = {
  draw(e, t) {
    const n = ht(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, bw = 0.8908130915292852, sp = Ar(zr / 10) / Ar(7 * zr / 10), yw = Ar(oa / 10) * sp, ww = -ap(oa / 10) * sp, xw = {
  draw(e, t) {
    const n = ht(t * bw), r = yw * n, a = ww * n;
    e.moveTo(0, -n), e.lineTo(r, a);
    for (let o = 1; o < 5; ++o) {
      const i = oa * o / 5, s = ap(i), l = Ar(i);
      e.lineTo(l * n, -s * n), e.lineTo(s * r - l * a, l * r + s * a);
    }
    e.closePath();
  }
}, qo = ht(3), _w = {
  draw(e, t) {
    const n = -ht(t / (qo * 3));
    e.moveTo(0, n * 2), e.lineTo(-qo * n, -n), e.lineTo(qo * n, -n), e.closePath();
  }
}, at = -0.5, ot = ht(3) / 2, Xs = 1 / ht(12), Sw = (Xs / 2 + 1) * 3, Cw = {
  draw(e, t) {
    const n = ht(t / Sw), r = n / 2, a = n * Xs, o = r, i = n * Xs + n, s = -o, l = i;
    e.moveTo(r, a), e.lineTo(o, i), e.lineTo(s, l), e.lineTo(at * r - ot * a, ot * r + at * a), e.lineTo(at * o - ot * i, ot * o + at * i), e.lineTo(at * s - ot * l, ot * s + at * l), e.lineTo(at * r + ot * a, at * a - ot * r), e.lineTo(at * o + ot * i, at * i - ot * o), e.lineTo(at * s + ot * l, at * l - ot * s), e.closePath();
  }
};
function Pw(e, t) {
  let n = null, r = mw(a);
  e = typeof e == "function" ? e : wr(e || $l), t = typeof t == "function" ? t : wr(t === void 0 ? 64 : +t);
  function a() {
    let o;
    if (n || (n = o = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), o) return n = null, o + "" || null;
  }
  return a.type = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : wr(o), a) : e;
  }, a.size = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : wr(+o), a) : t;
  }, a.context = function(o) {
    return arguments.length ? (n = o ?? null, a) : n;
  }, a;
}
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
var Nw = ["type", "size", "sizeType"];
function Qs() {
  return Qs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qs.apply(this, arguments);
}
function Ic(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ac(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ic(Object(n), !0).forEach(function(r) {
      Ew(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ic(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ew(e, t, n) {
  return t = Tw(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Tw(e) {
  var t = Ow(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function Ow(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Jn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mw(e, t) {
  if (e == null) return {};
  var n = Dw(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Dw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var lp = {
  symbolCircle: $l,
  symbolCross: pw,
  symbolDiamond: gw,
  symbolSquare: vw,
  symbolStar: xw,
  symbolTriangle: _w,
  symbolWye: Cw
}, kw = Math.PI / 180, Rw = function(t) {
  var n = "symbol".concat(rp(t));
  return lp[n] || $l;
}, Iw = function(t, n, r) {
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
      var a = 18 * kw;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, Aw = function(t, n) {
  lp["symbol".concat(rp(t))] = n;
}, up = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, a = t.size, o = a === void 0 ? 64 : a, i = t.sizeType, s = i === void 0 ? "area" : i, l = Mw(t, Nw), u = Ac(Ac({}, l), {}, {
    type: r,
    size: o,
    sizeType: s
  }), f = function() {
    var p = Rw(r), v = Pw().type(p).size(Iw(o, s, r));
    return v();
  }, c = u.className, m = u.cx, g = u.cy, h = tp(u, !0);
  return m === +m && g === +g && o === +o ? /* @__PURE__ */ x.createElement("path", Qs({}, h, {
    className: Xt("recharts-symbols", c),
    transform: "translate(".concat(m, ", ").concat(g, ")"),
    d: f()
  })) : null;
};
up.registerSymbol = Aw;
function Cn(e) {
  "@babel/helpers - typeof";
  return Cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cn(e);
}
function Js() {
  return Js = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Js.apply(this, arguments);
}
function zc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function zw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zc(Object(n), !0).forEach(function(r) {
      Zn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Lw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qw(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, dp(r.key), r);
  }
}
function $w(e, t, n) {
  return t && qw(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Bw(e, t, n) {
  return t = Lr(t), jw(e, cp() ? Reflect.construct(t, n || [], Lr(e).constructor) : t.apply(e, n));
}
function jw(e, t) {
  if (t && (Cn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Fw(e);
}
function Fw(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (cp = function() {
    return !!e;
  })();
}
function Lr(e) {
  return Lr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Lr(e);
}
function Hw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Zs(e, t);
}
function Zs(e, t) {
  return Zs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Zs(e, t);
}
function Zn(e, t, n) {
  return t = dp(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function dp(e) {
  var t = Ww(e, "string");
  return Cn(t) == "symbol" ? t : t + "";
}
function Ww(e, t) {
  if (Cn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Cn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var it = 32, Bl = /* @__PURE__ */ (function(e) {
  function t() {
    return Lw(this, t), Bw(this, t, arguments);
  }
  return Hw(t, e), $w(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var a = this.props.inactiveColor, o = it / 2, i = it / 6, s = it / 3, l = r.inactive ? a : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ x.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: o,
            x2: it,
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
            H`).concat(it, "M").concat(2 * s, ",").concat(o, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(o),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ x.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat(it / 8, "h").concat(it, "v").concat(it * 3 / 4, "h").concat(-it, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ x.isValidElement(r.legendIcon)) {
          var u = zw({}, r);
          return delete u.legendIcon, /* @__PURE__ */ x.cloneElement(r.legendIcon, u);
        }
        return /* @__PURE__ */ x.createElement(up, {
          fill: l,
          cx: o,
          cy: o,
          size: it,
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
      var r = this, a = this.props, o = a.payload, i = a.iconSize, s = a.layout, l = a.formatter, u = a.inactiveColor, f = {
        x: 0,
        y: 0,
        width: it,
        height: it
      }, c = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, m = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return o.map(function(g, h) {
        var b = g.formatter || l, p = Xt(Zn(Zn({
          "recharts-legend-item": !0
        }, "legend-item-".concat(h), !0), "inactive", g.inactive));
        if (g.type === "none")
          return null;
        var v = Rr(g.value) ? null : g.value;
        Tr(
          !Rr(g.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var y = g.inactive ? u : g.color;
        return /* @__PURE__ */ x.createElement("li", Js({
          className: p,
          style: c,
          key: "legend-item-".concat(h)
        }, U0(r.props, g, h)), /* @__PURE__ */ x.createElement(ew, {
          width: i,
          height: i,
          viewBox: f,
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
})(Gr);
Zn(Bl, "displayName", "Legend");
Zn(Bl, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var $o, Lc;
function Yw() {
  if (Lc) return $o;
  Lc = 1;
  var e = na();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return $o = t, $o;
}
var Bo, qc;
function Vw() {
  if (qc) return Bo;
  qc = 1;
  function e(t) {
    var n = this.__data__, r = n.delete(t);
    return this.size = n.size, r;
  }
  return Bo = e, Bo;
}
var jo, $c;
function Gw() {
  if ($c) return jo;
  $c = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return jo = e, jo;
}
var Fo, Bc;
function Uw() {
  if (Bc) return Fo;
  Bc = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Fo = e, Fo;
}
var Ho, jc;
function Kw() {
  if (jc) return Ho;
  jc = 1;
  var e = na(), t = zl(), n = Ll(), r = 200;
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
  return Ho = a, Ho;
}
var Wo, Fc;
function fp() {
  if (Fc) return Wo;
  Fc = 1;
  var e = na(), t = Yw(), n = Vw(), r = Gw(), a = Uw(), o = Kw();
  function i(s) {
    var l = this.__data__ = new e(s);
    this.size = l.size;
  }
  return i.prototype.clear = t, i.prototype.delete = n, i.prototype.get = r, i.prototype.has = a, i.prototype.set = o, Wo = i, Wo;
}
var Yo, Hc;
function Xw() {
  if (Hc) return Yo;
  Hc = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Yo = t, Yo;
}
var Vo, Wc;
function Qw() {
  if (Wc) return Vo;
  Wc = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Vo = e, Vo;
}
var Go, Yc;
function mp() {
  if (Yc) return Go;
  Yc = 1;
  var e = Ll(), t = Xw(), n = Qw();
  function r(a) {
    var o = -1, i = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++o < i; )
      this.add(a[o]);
  }
  return r.prototype.add = r.prototype.push = t, r.prototype.has = n, Go = r, Go;
}
var Uo, Vc;
function Jw() {
  if (Vc) return Uo;
  Vc = 1;
  function e(t, n) {
    for (var r = -1, a = t == null ? 0 : t.length; ++r < a; )
      if (n(t[r], r, t))
        return !0;
    return !1;
  }
  return Uo = e, Uo;
}
var Ko, Gc;
function pp() {
  if (Gc) return Ko;
  Gc = 1;
  function e(t, n) {
    return t.has(n);
  }
  return Ko = e, Ko;
}
var Xo, Uc;
function hp() {
  if (Uc) return Xo;
  Uc = 1;
  var e = mp(), t = Jw(), n = pp(), r = 1, a = 2;
  function o(i, s, l, u, f, c) {
    var m = l & r, g = i.length, h = s.length;
    if (g != h && !(m && h > g))
      return !1;
    var b = c.get(i), p = c.get(s);
    if (b && p)
      return b == s && p == i;
    var v = -1, y = !0, S = l & a ? new e() : void 0;
    for (c.set(i, s), c.set(s, i); ++v < g; ) {
      var C = i[v], D = s[v];
      if (u)
        var E = m ? u(D, C, v, s, i, c) : u(C, D, v, i, s, c);
      if (E !== void 0) {
        if (E)
          continue;
        y = !1;
        break;
      }
      if (S) {
        if (!t(s, function(_, R) {
          if (!n(S, R) && (C === _ || f(C, _, l, u, c)))
            return S.push(R);
        })) {
          y = !1;
          break;
        }
      } else if (!(C === D || f(C, D, l, u, c))) {
        y = !1;
        break;
      }
    }
    return c.delete(i), c.delete(s), y;
  }
  return Xo = o, Xo;
}
var Qo, Kc;
function Zw() {
  if (Kc) return Qo;
  Kc = 1;
  var e = St(), t = e.Uint8Array;
  return Qo = t, Qo;
}
var Jo, Xc;
function ex() {
  if (Xc) return Jo;
  Xc = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(a, o) {
      r[++n] = [o, a];
    }), r;
  }
  return Jo = e, Jo;
}
var Zo, Qc;
function jl() {
  if (Qc) return Zo;
  Qc = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(a) {
      r[++n] = a;
    }), r;
  }
  return Zo = e, Zo;
}
var ei, Jc;
function tx() {
  if (Jc) return ei;
  Jc = 1;
  var e = dr(), t = Zw(), n = Al(), r = hp(), a = ex(), o = jl(), i = 1, s = 2, l = "[object Boolean]", u = "[object Date]", f = "[object Error]", c = "[object Map]", m = "[object Number]", g = "[object RegExp]", h = "[object Set]", b = "[object String]", p = "[object Symbol]", v = "[object ArrayBuffer]", y = "[object DataView]", S = e ? e.prototype : void 0, C = S ? S.valueOf : void 0;
  function D(E, _, R, k, Y, I, H) {
    switch (R) {
      case y:
        if (E.byteLength != _.byteLength || E.byteOffset != _.byteOffset)
          return !1;
        E = E.buffer, _ = _.buffer;
      case v:
        return !(E.byteLength != _.byteLength || !I(new t(E), new t(_)));
      case l:
      case u:
      case m:
        return n(+E, +_);
      case f:
        return E.name == _.name && E.message == _.message;
      case g:
      case b:
        return E == _ + "";
      case c:
        var T = a;
      case h:
        var W = k & i;
        if (T || (T = o), E.size != _.size && !W)
          return !1;
        var F = H.get(E);
        if (F)
          return F == _;
        k |= s, H.set(E, _);
        var B = r(T(E), T(_), k, Y, I, H);
        return H.delete(E), B;
      case p:
        if (C)
          return C.call(E) == C.call(_);
    }
    return !1;
  }
  return ei = D, ei;
}
var ti, Zc;
function gp() {
  if (Zc) return ti;
  Zc = 1;
  function e(t, n) {
    for (var r = -1, a = n.length, o = t.length; ++r < a; )
      t[o + r] = n[r];
    return t;
  }
  return ti = e, ti;
}
var ni, ed;
function nx() {
  if (ed) return ni;
  ed = 1;
  var e = gp(), t = pt();
  function n(r, a, o) {
    var i = a(r);
    return t(r) ? i : e(i, o(r));
  }
  return ni = n, ni;
}
var ri, td;
function rx() {
  if (td) return ri;
  td = 1;
  function e(t, n) {
    for (var r = -1, a = t == null ? 0 : t.length, o = 0, i = []; ++r < a; ) {
      var s = t[r];
      n(s, r, t) && (i[o++] = s);
    }
    return i;
  }
  return ri = e, ri;
}
var ai, nd;
function ax() {
  if (nd) return ai;
  nd = 1;
  function e() {
    return [];
  }
  return ai = e, ai;
}
var oi, rd;
function ox() {
  if (rd) return oi;
  rd = 1;
  var e = rx(), t = ax(), n = Object.prototype, r = n.propertyIsEnumerable, a = Object.getOwnPropertySymbols, o = a ? function(i) {
    return i == null ? [] : (i = Object(i), e(a(i), function(s) {
      return r.call(i, s);
    }));
  } : t;
  return oi = o, oi;
}
var ii, ad;
function ix() {
  if (ad) return ii;
  ad = 1;
  function e(t, n) {
    for (var r = -1, a = Array(t); ++r < t; )
      a[r] = n(r);
    return a;
  }
  return ii = e, ii;
}
var si, od;
function sx() {
  if (od) return si;
  od = 1;
  var e = on(), t = sn(), n = "[object Arguments]";
  function r(a) {
    return t(a) && e(a) == n;
  }
  return si = r, si;
}
var li, id;
function Fl() {
  if (id) return li;
  id = 1;
  var e = sx(), t = sn(), n = Object.prototype, r = n.hasOwnProperty, a = n.propertyIsEnumerable, o = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(i) {
    return t(i) && r.call(i, "callee") && !a.call(i, "callee");
  };
  return li = o, li;
}
var $n = { exports: {} }, ui, sd;
function lx() {
  if (sd) return ui;
  sd = 1;
  function e() {
    return !1;
  }
  return ui = e, ui;
}
$n.exports;
var ld;
function vp() {
  return ld || (ld = 1, (function(e, t) {
    var n = St(), r = lx(), a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, i = o && o.exports === a, s = i ? n.Buffer : void 0, l = s ? s.isBuffer : void 0, u = l || r;
    e.exports = u;
  })($n, $n.exports)), $n.exports;
}
var ci, ud;
function Hl() {
  if (ud) return ci;
  ud = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(r, a) {
    var o = typeof r;
    return a = a ?? e, !!a && (o == "number" || o != "symbol" && t.test(r)) && r > -1 && r % 1 == 0 && r < a;
  }
  return ci = n, ci;
}
var di, cd;
function Wl() {
  if (cd) return di;
  cd = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return di = t, di;
}
var fi, dd;
function ux() {
  if (dd) return fi;
  dd = 1;
  var e = on(), t = Wl(), n = sn(), r = "[object Arguments]", a = "[object Array]", o = "[object Boolean]", i = "[object Date]", s = "[object Error]", l = "[object Function]", u = "[object Map]", f = "[object Number]", c = "[object Object]", m = "[object RegExp]", g = "[object Set]", h = "[object String]", b = "[object WeakMap]", p = "[object ArrayBuffer]", v = "[object DataView]", y = "[object Float32Array]", S = "[object Float64Array]", C = "[object Int8Array]", D = "[object Int16Array]", E = "[object Int32Array]", _ = "[object Uint8Array]", R = "[object Uint8ClampedArray]", k = "[object Uint16Array]", Y = "[object Uint32Array]", I = {};
  I[y] = I[S] = I[C] = I[D] = I[E] = I[_] = I[R] = I[k] = I[Y] = !0, I[r] = I[a] = I[p] = I[o] = I[v] = I[i] = I[s] = I[l] = I[u] = I[f] = I[c] = I[m] = I[g] = I[h] = I[b] = !1;
  function H(T) {
    return n(T) && t(T.length) && !!I[e(T)];
  }
  return fi = H, fi;
}
var mi, fd;
function bp() {
  if (fd) return mi;
  fd = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return mi = e, mi;
}
var Bn = { exports: {} };
Bn.exports;
var md;
function cx() {
  return md || (md = 1, (function(e, t) {
    var n = Ym(), r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, o = a && a.exports === r, i = o && n.process, s = (function() {
      try {
        var l = a && a.require && a.require("util").types;
        return l || i && i.binding && i.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(Bn, Bn.exports)), Bn.exports;
}
var pi, pd;
function yp() {
  if (pd) return pi;
  pd = 1;
  var e = ux(), t = bp(), n = cx(), r = n && n.isTypedArray, a = r ? t(r) : e;
  return pi = a, pi;
}
var hi, hd;
function dx() {
  if (hd) return hi;
  hd = 1;
  var e = ix(), t = Fl(), n = pt(), r = vp(), a = Hl(), o = yp(), i = Object.prototype, s = i.hasOwnProperty;
  function l(u, f) {
    var c = n(u), m = !c && t(u), g = !c && !m && r(u), h = !c && !m && !g && o(u), b = c || m || g || h, p = b ? e(u.length, String) : [], v = p.length;
    for (var y in u)
      (f || s.call(u, y)) && !(b && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      h && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      a(y, v))) && p.push(y);
    return p;
  }
  return hi = l, hi;
}
var gi, gd;
function fx() {
  if (gd) return gi;
  gd = 1;
  var e = Object.prototype;
  function t(n) {
    var r = n && n.constructor, a = typeof r == "function" && r.prototype || e;
    return n === a;
  }
  return gi = t, gi;
}
var vi, vd;
function mx() {
  if (vd) return vi;
  vd = 1;
  function e(t, n) {
    return function(r) {
      return t(n(r));
    };
  }
  return vi = e, vi;
}
var bi, bd;
function px() {
  if (bd) return bi;
  bd = 1;
  var e = mx(), t = e(Object.keys, Object);
  return bi = t, bi;
}
var yi, yd;
function hx() {
  if (yd) return yi;
  yd = 1;
  var e = fx(), t = px(), n = Object.prototype, r = n.hasOwnProperty;
  function a(o) {
    if (!e(o))
      return t(o);
    var i = [];
    for (var s in Object(o))
      r.call(o, s) && s != "constructor" && i.push(s);
    return i;
  }
  return yi = a, yi;
}
var wi, wd;
function ia() {
  if (wd) return wi;
  wd = 1;
  var e = Il(), t = Wl();
  function n(r) {
    return r != null && t(r.length) && !e(r);
  }
  return wi = n, wi;
}
var xi, xd;
function Yl() {
  if (xd) return xi;
  xd = 1;
  var e = dx(), t = hx(), n = ia();
  function r(a) {
    return n(a) ? e(a) : t(a);
  }
  return xi = r, xi;
}
var _i, _d;
function gx() {
  if (_d) return _i;
  _d = 1;
  var e = nx(), t = ox(), n = Yl();
  function r(a) {
    return e(a, n, t);
  }
  return _i = r, _i;
}
var Si, Sd;
function vx() {
  if (Sd) return Si;
  Sd = 1;
  var e = gx(), t = 1, n = Object.prototype, r = n.hasOwnProperty;
  function a(o, i, s, l, u, f) {
    var c = s & t, m = e(o), g = m.length, h = e(i), b = h.length;
    if (g != b && !c)
      return !1;
    for (var p = g; p--; ) {
      var v = m[p];
      if (!(c ? v in i : r.call(i, v)))
        return !1;
    }
    var y = f.get(o), S = f.get(i);
    if (y && S)
      return y == i && S == o;
    var C = !0;
    f.set(o, i), f.set(i, o);
    for (var D = c; ++p < g; ) {
      v = m[p];
      var E = o[v], _ = i[v];
      if (l)
        var R = c ? l(_, E, v, i, o, f) : l(E, _, v, o, i, f);
      if (!(R === void 0 ? E === _ || u(E, _, s, l, f) : R)) {
        C = !1;
        break;
      }
      D || (D = v == "constructor");
    }
    if (C && !D) {
      var k = o.constructor, Y = i.constructor;
      k != Y && "constructor" in o && "constructor" in i && !(typeof k == "function" && k instanceof k && typeof Y == "function" && Y instanceof Y) && (C = !1);
    }
    return f.delete(o), f.delete(i), C;
  }
  return Si = a, Si;
}
var Ci, Cd;
function bx() {
  if (Cd) return Ci;
  Cd = 1;
  var e = ln(), t = St(), n = e(t, "DataView");
  return Ci = n, Ci;
}
var Pi, Pd;
function yx() {
  if (Pd) return Pi;
  Pd = 1;
  var e = ln(), t = St(), n = e(t, "Promise");
  return Pi = n, Pi;
}
var Ni, Nd;
function wp() {
  if (Nd) return Ni;
  Nd = 1;
  var e = ln(), t = St(), n = e(t, "Set");
  return Ni = n, Ni;
}
var Ei, Ed;
function wx() {
  if (Ed) return Ei;
  Ed = 1;
  var e = ln(), t = St(), n = e(t, "WeakMap");
  return Ei = n, Ei;
}
var Ti, Td;
function xx() {
  if (Td) return Ti;
  Td = 1;
  var e = bx(), t = zl(), n = yx(), r = wp(), a = wx(), o = on(), i = Vm(), s = "[object Map]", l = "[object Object]", u = "[object Promise]", f = "[object Set]", c = "[object WeakMap]", m = "[object DataView]", g = i(e), h = i(t), b = i(n), p = i(r), v = i(a), y = o;
  return (e && y(new e(new ArrayBuffer(1))) != m || t && y(new t()) != s || n && y(n.resolve()) != u || r && y(new r()) != f || a && y(new a()) != c) && (y = function(S) {
    var C = o(S), D = C == l ? S.constructor : void 0, E = D ? i(D) : "";
    if (E)
      switch (E) {
        case g:
          return m;
        case h:
          return s;
        case b:
          return u;
        case p:
          return f;
        case v:
          return c;
      }
    return C;
  }), Ti = y, Ti;
}
var Oi, Od;
function _x() {
  if (Od) return Oi;
  Od = 1;
  var e = fp(), t = hp(), n = tx(), r = vx(), a = xx(), o = pt(), i = vp(), s = yp(), l = 1, u = "[object Arguments]", f = "[object Array]", c = "[object Object]", m = Object.prototype, g = m.hasOwnProperty;
  function h(b, p, v, y, S, C) {
    var D = o(b), E = o(p), _ = D ? f : a(b), R = E ? f : a(p);
    _ = _ == u ? c : _, R = R == u ? c : R;
    var k = _ == c, Y = R == c, I = _ == R;
    if (I && i(b)) {
      if (!i(p))
        return !1;
      D = !0, k = !1;
    }
    if (I && !k)
      return C || (C = new e()), D || s(b) ? t(b, p, v, y, S, C) : n(b, p, _, v, y, S, C);
    if (!(v & l)) {
      var H = k && g.call(b, "__wrapped__"), T = Y && g.call(p, "__wrapped__");
      if (H || T) {
        var W = H ? b.value() : b, F = T ? p.value() : p;
        return C || (C = new e()), S(W, F, v, y, C);
      }
    }
    return I ? (C || (C = new e()), r(b, p, v, y, S, C)) : !1;
  }
  return Oi = h, Oi;
}
var Mi, Md;
function xp() {
  if (Md) return Mi;
  Md = 1;
  var e = _x(), t = sn();
  function n(r, a, o, i, s) {
    return r === a ? !0 : r == null || a == null || !t(r) && !t(a) ? r !== r && a !== a : e(r, a, o, i, n, s);
  }
  return Mi = n, Mi;
}
var Di, Dd;
function Sx() {
  if (Dd) return Di;
  Dd = 1;
  var e = fp(), t = xp(), n = 1, r = 2;
  function a(o, i, s, l) {
    var u = s.length, f = u, c = !l;
    if (o == null)
      return !f;
    for (o = Object(o); u--; ) {
      var m = s[u];
      if (c && m[2] ? m[1] !== o[m[0]] : !(m[0] in o))
        return !1;
    }
    for (; ++u < f; ) {
      m = s[u];
      var g = m[0], h = o[g], b = m[1];
      if (c && m[2]) {
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
  return Di = a, Di;
}
var ki, kd;
function _p() {
  if (kd) return ki;
  kd = 1;
  var e = $t();
  function t(n) {
    return n === n && !e(n);
  }
  return ki = t, ki;
}
var Ri, Rd;
function Cx() {
  if (Rd) return Ri;
  Rd = 1;
  var e = _p(), t = Yl();
  function n(r) {
    for (var a = t(r), o = a.length; o--; ) {
      var i = a[o], s = r[i];
      a[o] = [i, s, e(s)];
    }
    return a;
  }
  return Ri = n, Ri;
}
var Ii, Id;
function Sp() {
  if (Id) return Ii;
  Id = 1;
  function e(t, n) {
    return function(r) {
      return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r));
    };
  }
  return Ii = e, Ii;
}
var Ai, Ad;
function Px() {
  if (Ad) return Ai;
  Ad = 1;
  var e = Sx(), t = Cx(), n = Sp();
  function r(a) {
    var o = t(a);
    return o.length == 1 && o[0][2] ? n(o[0][0], o[0][1]) : function(i) {
      return i === a || e(i, a, o);
    };
  }
  return Ai = r, Ai;
}
var zi, zd;
function Nx() {
  if (zd) return zi;
  zd = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return zi = e, zi;
}
var Li, Ld;
function Ex() {
  if (Ld) return Li;
  Ld = 1;
  var e = Km(), t = Fl(), n = pt(), r = Hl(), a = Wl(), o = aa();
  function i(s, l, u) {
    l = e(l, s);
    for (var f = -1, c = l.length, m = !1; ++f < c; ) {
      var g = o(l[f]);
      if (!(m = s != null && u(s, g)))
        break;
      s = s[g];
    }
    return m || ++f != c ? m : (c = s == null ? 0 : s.length, !!c && a(c) && r(g, c) && (n(s) || t(s)));
  }
  return Li = i, Li;
}
var qi, qd;
function Tx() {
  if (qd) return qi;
  qd = 1;
  var e = Nx(), t = Ex();
  function n(r, a) {
    return r != null && t(r, a, e);
  }
  return qi = n, qi;
}
var $i, $d;
function Ox() {
  if ($d) return $i;
  $d = 1;
  var e = xp(), t = Xm(), n = Tx(), r = Rl(), a = _p(), o = Sp(), i = aa(), s = 1, l = 2;
  function u(f, c) {
    return r(f) && a(c) ? o(i(f), c) : function(m) {
      var g = t(m, f);
      return g === void 0 && g === c ? n(m, f) : e(c, g, s | l);
    };
  }
  return $i = u, $i;
}
var Bi, Bd;
function sa() {
  if (Bd) return Bi;
  Bd = 1;
  function e(t) {
    return t;
  }
  return Bi = e, Bi;
}
var ji, jd;
function Mx() {
  if (jd) return ji;
  jd = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return ji = e, ji;
}
var Fi, Fd;
function Dx() {
  if (Fd) return Fi;
  Fd = 1;
  var e = ql();
  function t(n) {
    return function(r) {
      return e(r, n);
    };
  }
  return Fi = t, Fi;
}
var Hi, Hd;
function kx() {
  if (Hd) return Hi;
  Hd = 1;
  var e = Mx(), t = Dx(), n = Rl(), r = aa();
  function a(o) {
    return n(o) ? e(r(o)) : t(o);
  }
  return Hi = a, Hi;
}
var Wi, Wd;
function Cp() {
  if (Wd) return Wi;
  Wd = 1;
  var e = Px(), t = Ox(), n = sa(), r = pt(), a = kx();
  function o(i) {
    return typeof i == "function" ? i : i == null ? n : typeof i == "object" ? r(i) ? t(i[0], i[1]) : e(i) : a(i);
  }
  return Wi = o, Wi;
}
var Yi, Yd;
function Rx() {
  if (Yd) return Yi;
  Yd = 1;
  function e(t, n, r, a) {
    for (var o = t.length, i = r + (a ? 1 : -1); a ? i-- : ++i < o; )
      if (n(t[i], i, t))
        return i;
    return -1;
  }
  return Yi = e, Yi;
}
var Vi, Vd;
function Ix() {
  if (Vd) return Vi;
  Vd = 1;
  function e(t) {
    return t !== t;
  }
  return Vi = e, Vi;
}
var Gi, Gd;
function Ax() {
  if (Gd) return Gi;
  Gd = 1;
  function e(t, n, r) {
    for (var a = r - 1, o = t.length; ++a < o; )
      if (t[a] === n)
        return a;
    return -1;
  }
  return Gi = e, Gi;
}
var Ui, Ud;
function zx() {
  if (Ud) return Ui;
  Ud = 1;
  var e = Rx(), t = Ix(), n = Ax();
  function r(a, o, i) {
    return o === o ? n(a, o, i) : e(a, t, i);
  }
  return Ui = r, Ui;
}
var Ki, Kd;
function Lx() {
  if (Kd) return Ki;
  Kd = 1;
  var e = zx();
  function t(n, r) {
    var a = n == null ? 0 : n.length;
    return !!a && e(n, r, 0) > -1;
  }
  return Ki = t, Ki;
}
var Xi, Xd;
function qx() {
  if (Xd) return Xi;
  Xd = 1;
  function e(t, n, r) {
    for (var a = -1, o = t == null ? 0 : t.length; ++a < o; )
      if (r(n, t[a]))
        return !0;
    return !1;
  }
  return Xi = e, Xi;
}
var Qi, Qd;
function $x() {
  if (Qd) return Qi;
  Qd = 1;
  function e() {
  }
  return Qi = e, Qi;
}
var Ji, Jd;
function Bx() {
  if (Jd) return Ji;
  Jd = 1;
  var e = wp(), t = $x(), n = jl(), r = 1 / 0, a = e && 1 / n(new e([, -0]))[1] == r ? function(o) {
    return new e(o);
  } : t;
  return Ji = a, Ji;
}
var Zi, Zd;
function jx() {
  if (Zd) return Zi;
  Zd = 1;
  var e = mp(), t = Lx(), n = qx(), r = pp(), a = Bx(), o = jl(), i = 200;
  function s(l, u, f) {
    var c = -1, m = t, g = l.length, h = !0, b = [], p = b;
    if (f)
      h = !1, m = n;
    else if (g >= i) {
      var v = u ? null : a(l);
      if (v)
        return o(v);
      h = !1, m = r, p = new e();
    } else
      p = u ? [] : b;
    e:
      for (; ++c < g; ) {
        var y = l[c], S = u ? u(y) : y;
        if (y = f || y !== 0 ? y : 0, h && S === S) {
          for (var C = p.length; C--; )
            if (p[C] === S)
              continue e;
          u && p.push(S), b.push(y);
        } else m(p, S, f) || (p !== b && p.push(S), b.push(y));
      }
    return b;
  }
  return Zi = s, Zi;
}
var es, ef;
function Fx() {
  if (ef) return es;
  ef = 1;
  var e = Cp(), t = jx();
  function n(r, a) {
    return r && r.length ? t(r, e(a, 2)) : [];
  }
  return es = n, es;
}
var Hx = Fx();
const tf = /* @__PURE__ */ _t(Hx);
function Pp(e, t, n) {
  return t === !0 ? tf(e, n) : Rr(t) ? tf(e, t) : e;
}
function Pn(e) {
  "@babel/helpers - typeof";
  return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pn(e);
}
var Wx = ["ref"];
function nf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nf(Object(n), !0).forEach(function(r) {
      la(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Yx(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ep(r.key), r);
  }
}
function Vx(e, t, n) {
  return t && rf(e.prototype, t), n && rf(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Gx(e, t, n) {
  return t = qr(t), Ux(e, Np() ? Reflect.construct(t, n || [], qr(e).constructor) : t.apply(e, n));
}
function Ux(e, t) {
  if (t && (Pn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Kx(e);
}
function Kx(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Np() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Np = function() {
    return !!e;
  })();
}
function qr(e) {
  return qr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, qr(e);
}
function Xx(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && el(e, t);
}
function el(e, t) {
  return el = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, el(e, t);
}
function la(e, t, n) {
  return t = Ep(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ep(e) {
  var t = Qx(e, "string");
  return Pn(t) == "symbol" ? t : t + "";
}
function Qx(e, t) {
  if (Pn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Pn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Jx(e, t) {
  if (e == null) return {};
  var n = Zx(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Zx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function e1(e) {
  return e.value;
}
function t1(e, t) {
  if (/* @__PURE__ */ x.isValidElement(e))
    return /* @__PURE__ */ x.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ x.createElement(e, t);
  t.ref;
  var n = Jx(t, Wx);
  return /* @__PURE__ */ x.createElement(Bl, n);
}
var af = 1, Vl = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    Yx(this, t);
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    return n = Gx(this, t, [].concat(a)), la(n, "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return Xx(t, e), Vx(t, [{
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
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > af || Math.abs(a.height - this.lastBoundingBox.height) > af) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, r && r(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Et({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var a = this.props, o = a.layout, i = a.align, s = a.verticalAlign, l = a.margin, u = a.chartWidth, f = a.chartHeight, c, m;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (i === "center" && o === "vertical") {
          var g = this.getBBoxSnapshot();
          c = {
            left: ((u || 0) - g.width) / 2
          };
        } else
          c = i === "right" ? {
            right: l && l.right || 0
          } : {
            left: l && l.left || 0
          };
      if (!r || (r.top === void 0 || r.top === null) && (r.bottom === void 0 || r.bottom === null))
        if (s === "middle") {
          var h = this.getBBoxSnapshot();
          m = {
            top: ((f || 0) - h.height) / 2
          };
        } else
          m = s === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return Et(Et({}, c), m);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, a = this.props, o = a.content, i = a.width, s = a.height, l = a.wrapperStyle, u = a.payloadUniqBy, f = a.payload, c = Et(Et({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ x.createElement("div", {
        className: "recharts-legend-wrapper",
        style: c,
        ref: function(g) {
          r.wrapperNode = g;
        }
      }, t1(o, Et(Et({}, this.props), {}, {
        payload: Pp(f, u, e1)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, a) {
      var o = Et(Et({}, this.defaultProps), r.props), i = o.layout;
      return i === "vertical" && ut(r.props.height) ? {
        height: r.props.height
      } : i === "horizontal" ? {
        width: r.props.width || a
      } : null;
    }
  }]);
})(Gr);
la(Vl, "displayName", "Legend");
la(Vl, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var ts, of;
function n1() {
  if (of) return ts;
  of = 1;
  var e = dr(), t = Fl(), n = pt(), r = e ? e.isConcatSpreadable : void 0;
  function a(o) {
    return n(o) || t(o) || !!(r && o && o[r]);
  }
  return ts = a, ts;
}
var ns, sf;
function r1() {
  if (sf) return ns;
  sf = 1;
  var e = gp(), t = n1();
  function n(r, a, o, i, s) {
    var l = -1, u = r.length;
    for (o || (o = t), s || (s = []); ++l < u; ) {
      var f = r[l];
      a > 0 && o(f) ? a > 1 ? n(f, a - 1, o, i, s) : e(s, f) : i || (s[s.length] = f);
    }
    return s;
  }
  return ns = n, ns;
}
var rs, lf;
function a1() {
  if (lf) return rs;
  lf = 1;
  function e(t) {
    return function(n, r, a) {
      for (var o = -1, i = Object(n), s = a(n), l = s.length; l--; ) {
        var u = s[t ? l : ++o];
        if (r(i[u], u, i) === !1)
          break;
      }
      return n;
    };
  }
  return rs = e, rs;
}
var as, uf;
function o1() {
  if (uf) return as;
  uf = 1;
  var e = a1(), t = e();
  return as = t, as;
}
var os, cf;
function i1() {
  if (cf) return os;
  cf = 1;
  var e = o1(), t = Yl();
  function n(r, a) {
    return r && e(r, a, t);
  }
  return os = n, os;
}
var is, df;
function s1() {
  if (df) return is;
  df = 1;
  var e = ia();
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
  return is = t, is;
}
var ss, ff;
function l1() {
  if (ff) return ss;
  ff = 1;
  var e = i1(), t = s1(), n = t(e);
  return ss = n, ss;
}
var ls, mf;
function u1() {
  if (mf) return ls;
  mf = 1;
  var e = l1(), t = ia();
  function n(r, a) {
    var o = -1, i = t(r) ? Array(r.length) : [];
    return e(r, function(s, l, u) {
      i[++o] = a(s, l, u);
    }), i;
  }
  return ls = n, ls;
}
var us, pf;
function c1() {
  if (pf) return us;
  pf = 1;
  function e(t, n) {
    var r = t.length;
    for (t.sort(n); r--; )
      t[r] = t[r].value;
    return t;
  }
  return us = e, us;
}
var cs, hf;
function d1() {
  if (hf) return cs;
  hf = 1;
  var e = fr();
  function t(n, r) {
    if (n !== r) {
      var a = n !== void 0, o = n === null, i = n === n, s = e(n), l = r !== void 0, u = r === null, f = r === r, c = e(r);
      if (!u && !c && !s && n > r || s && l && f && !u && !c || o && l && f || !a && f || !i)
        return 1;
      if (!o && !s && !c && n < r || c && a && i && !o && !s || u && a && i || !l && i || !f)
        return -1;
    }
    return 0;
  }
  return cs = t, cs;
}
var ds, gf;
function f1() {
  if (gf) return ds;
  gf = 1;
  var e = d1();
  function t(n, r, a) {
    for (var o = -1, i = n.criteria, s = r.criteria, l = i.length, u = a.length; ++o < l; ) {
      var f = e(i[o], s[o]);
      if (f) {
        if (o >= u)
          return f;
        var c = a[o];
        return f * (c == "desc" ? -1 : 1);
      }
    }
    return n.index - r.index;
  }
  return ds = t, ds;
}
var fs, vf;
function m1() {
  if (vf) return fs;
  vf = 1;
  var e = Gm(), t = ql(), n = Cp(), r = u1(), a = c1(), o = bp(), i = f1(), s = sa(), l = pt();
  function u(f, c, m) {
    c.length ? c = e(c, function(b) {
      return l(b) ? function(p) {
        return t(p, b.length === 1 ? b[0] : b);
      } : b;
    }) : c = [s];
    var g = -1;
    c = e(c, o(n));
    var h = r(f, function(b, p, v) {
      var y = e(c, function(S) {
        return S(b);
      });
      return { criteria: y, index: ++g, value: b };
    });
    return a(h, function(b, p) {
      return i(b, p, m);
    });
  }
  return fs = u, fs;
}
var ms, bf;
function p1() {
  if (bf) return ms;
  bf = 1;
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
  return ms = e, ms;
}
var ps, yf;
function h1() {
  if (yf) return ps;
  yf = 1;
  var e = p1(), t = Math.max;
  function n(r, a, o) {
    return a = t(a === void 0 ? r.length - 1 : a, 0), function() {
      for (var i = arguments, s = -1, l = t(i.length - a, 0), u = Array(l); ++s < l; )
        u[s] = i[a + s];
      s = -1;
      for (var f = Array(a + 1); ++s < a; )
        f[s] = i[s];
      return f[a] = o(u), e(r, this, f);
    };
  }
  return ps = n, ps;
}
var hs, wf;
function g1() {
  if (wf) return hs;
  wf = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return hs = e, hs;
}
var gs, xf;
function v1() {
  if (xf) return gs;
  xf = 1;
  var e = ln(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return gs = t, gs;
}
var vs, _f;
function b1() {
  if (_f) return vs;
  _f = 1;
  var e = g1(), t = v1(), n = sa(), r = t ? function(a, o) {
    return t(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(o),
      writable: !0
    });
  } : n;
  return vs = r, vs;
}
var bs, Sf;
function y1() {
  if (Sf) return bs;
  Sf = 1;
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
  return bs = r, bs;
}
var ys, Cf;
function w1() {
  if (Cf) return ys;
  Cf = 1;
  var e = b1(), t = y1(), n = t(e);
  return ys = n, ys;
}
var ws, Pf;
function x1() {
  if (Pf) return ws;
  Pf = 1;
  var e = sa(), t = h1(), n = w1();
  function r(a, o) {
    return n(t(a, o, e), a + "");
  }
  return ws = r, ws;
}
var xs, Nf;
function _1() {
  if (Nf) return xs;
  Nf = 1;
  var e = Al(), t = ia(), n = Hl(), r = $t();
  function a(o, i, s) {
    if (!r(s))
      return !1;
    var l = typeof i;
    return (l == "number" ? t(s) && n(i, s.length) : l == "string" && i in s) ? e(s[i], o) : !1;
  }
  return xs = a, xs;
}
var _s, Ef;
function S1() {
  if (Ef) return _s;
  Ef = 1;
  var e = r1(), t = m1(), n = x1(), r = _1(), a = n(function(o, i) {
    if (o == null)
      return [];
    var s = i.length;
    return s > 1 && r(o, i[0], i[1]) ? i = [] : s > 2 && r(i[0], i[1], i[2]) && (i = [i[0]]), t(o, e(i, 1), []);
  });
  return _s = a, _s;
}
var C1 = S1();
const P1 = /* @__PURE__ */ _t(C1);
function er(e) {
  "@babel/helpers - typeof";
  return er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, er(e);
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
function N1(e, t) {
  return M1(e) || O1(e, t) || T1(e, t) || E1();
}
function E1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function T1(e, t) {
  if (e) {
    if (typeof e == "string") return Tf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tf(e, t);
  }
}
function Tf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function O1(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, i, s = [], l = !0, u = !1;
    try {
      if (o = (n = n.call(e)).next, t !== 0) for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (f) {
      u = !0, a = f;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function M1(e) {
  if (Array.isArray(e)) return e;
}
function Of(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ss(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Of(Object(n), !0).forEach(function(r) {
      D1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Of(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function D1(e, t, n) {
  return t = k1(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function k1(e) {
  var t = R1(e, "string");
  return er(t) == "symbol" ? t : t + "";
}
function R1(e, t) {
  if (er(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (er(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I1(e) {
  return Array.isArray(e) && Ir(e[0]) && Ir(e[1]) ? e.join(" ~ ") : e;
}
var A1 = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, a = t.contentStyle, o = a === void 0 ? {} : a, i = t.itemStyle, s = i === void 0 ? {} : i, l = t.labelStyle, u = l === void 0 ? {} : l, f = t.payload, c = t.formatter, m = t.itemSorter, g = t.wrapperClassName, h = t.labelClassName, b = t.label, p = t.labelFormatter, v = t.accessibilityLayer, y = v === void 0 ? !1 : v, S = function() {
    if (f && f.length) {
      var H = {
        padding: 0,
        margin: 0
      }, T = (m ? P1(f, m) : f).map(function(W, F) {
        if (W.type === "none")
          return null;
        var B = Ss({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: W.color || "#000"
        }, s), L = W.formatter || c || I1, q = W.value, te = W.name, ie = q, X = te;
        if (L && ie != null && X != null) {
          var O = L(q, te, W, F, f);
          if (Array.isArray(O)) {
            var N = N1(O, 2);
            ie = N[0], X = N[1];
          } else
            ie = O;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ x.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(F),
            style: B
          }, Ir(X) ? /* @__PURE__ */ x.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, X) : null, Ir(X) ? /* @__PURE__ */ x.createElement("span", {
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
        style: H
      }, T);
    }
    return null;
  }, C = Ss({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, o), D = Ss({
    margin: 0
  }, u), E = !k0(b), _ = E ? b : "", R = Xt("recharts-default-tooltip", g), k = Xt("recharts-tooltip-label", h);
  E && p && f !== void 0 && f !== null && (_ = p(b, f));
  var Y = y ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ x.createElement("div", tl({
    className: R,
    style: C
  }, Y), /* @__PURE__ */ x.createElement("p", {
    className: k,
    style: D
  }, /* @__PURE__ */ x.isValidElement(_) ? _ : "".concat(_)), S());
};
function tr(e) {
  "@babel/helpers - typeof";
  return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tr(e);
}
function xr(e, t, n) {
  return t = z1(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function z1(e) {
  var t = L1(e, "string");
  return tr(t) == "symbol" ? t : t + "";
}
function L1(e, t) {
  if (tr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (tr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kn = "recharts-tooltip-wrapper", q1 = {
  visibility: "hidden"
};
function $1(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return Xt(kn, xr(xr(xr(xr({}, "".concat(kn, "-right"), ut(n) && t && ut(t.x) && n >= t.x), "".concat(kn, "-left"), ut(n) && t && ut(t.x) && n < t.x), "".concat(kn, "-bottom"), ut(r) && t && ut(t.y) && r >= t.y), "".concat(kn, "-top"), ut(r) && t && ut(t.y) && r < t.y));
}
function Mf(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, a = e.offsetTopLeft, o = e.position, i = e.reverseDirection, s = e.tooltipDimension, l = e.viewBox, u = e.viewBoxDimension;
  if (o && ut(o[r]))
    return o[r];
  var f = n[r] - s - a, c = n[r] + a;
  if (t[r])
    return i[r] ? f : c;
  if (i[r]) {
    var m = f, g = l[r];
    return m < g ? Math.max(c, l[r]) : Math.max(f, l[r]);
  }
  var h = c + s, b = l[r] + u;
  return h > b ? Math.max(f, l[r]) : Math.max(c, l[r]);
}
function B1(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function j1(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, a = e.position, o = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, u, f, c;
  return i.height > 0 && i.width > 0 && n ? (f = Mf({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: a,
    reverseDirection: o,
    tooltipDimension: i.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), c = Mf({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: a,
    reverseDirection: o,
    tooltipDimension: i.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), u = B1({
    translateX: f,
    translateY: c,
    useTranslate3d: s
  })) : u = q1, {
    cssProperties: u,
    cssClasses: $1({
      translateX: f,
      translateY: c,
      coordinate: n
    })
  };
}
function Nn(e) {
  "@babel/helpers - typeof";
  return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nn(e);
}
function Df(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function kf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Df(Object(n), !0).forEach(function(r) {
      rl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Df(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function F1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function H1(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Op(r.key), r);
  }
}
function W1(e, t, n) {
  return t && H1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Y1(e, t, n) {
  return t = $r(t), V1(e, Tp() ? Reflect.construct(t, n || [], $r(e).constructor) : t.apply(e, n));
}
function V1(e, t) {
  if (t && (Nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return G1(e);
}
function G1(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Tp = function() {
    return !!e;
  })();
}
function $r(e) {
  return $r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $r(e);
}
function U1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && nl(e, t);
}
function nl(e, t) {
  return nl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, nl(e, t);
}
function rl(e, t, n) {
  return t = Op(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Op(e) {
  var t = K1(e, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function K1(e, t) {
  if (Nn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Nn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Rf = 1, X1 = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    F1(this, t);
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    return n = Y1(this, t, [].concat(a)), rl(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), rl(n, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, l, u, f;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (l = n.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && s !== void 0 ? s : 0,
            y: (u = (f = n.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && u !== void 0 ? u : 0
          }
        });
      }
    }), n;
  }
  return U1(t, e), W1(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > Rf || Math.abs(r.height - this.state.lastBoundingBox.height) > Rf) && this.setState({
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
      var r = this, a = this.props, o = a.active, i = a.allowEscapeViewBox, s = a.animationDuration, l = a.animationEasing, u = a.children, f = a.coordinate, c = a.hasPayload, m = a.isAnimationActive, g = a.offset, h = a.position, b = a.reverseDirection, p = a.useTranslate3d, v = a.viewBox, y = a.wrapperStyle, S = j1({
        allowEscapeViewBox: i,
        coordinate: f,
        offsetTopLeft: g,
        position: h,
        reverseDirection: b,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: p,
        viewBox: v
      }), C = S.cssClasses, D = S.cssProperties, E = kf(kf({
        transition: m && o ? "transform ".concat(s, "ms ").concat(l) : void 0
      }, D), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && o && c ? "visible" : "hidden",
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
        }, u)
      );
    }
  }]);
})(Gr), Q1 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, J1 = {
  isSsr: Q1()
};
function En(e) {
  "@babel/helpers - typeof";
  return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, En(e);
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
      Gl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : If(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Z1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function e_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Dp(r.key), r);
  }
}
function t_(e, t, n) {
  return t && e_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function n_(e, t, n) {
  return t = Br(t), r_(e, Mp() ? Reflect.construct(t, n || [], Br(e).constructor) : t.apply(e, n));
}
function r_(e, t) {
  if (t && (En(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return a_(e);
}
function a_(e) {
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
function Br(e) {
  return Br = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Br(e);
}
function o_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && al(e, t);
}
function al(e, t) {
  return al = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, al(e, t);
}
function Gl(e, t, n) {
  return t = Dp(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Dp(e) {
  var t = i_(e, "string");
  return En(t) == "symbol" ? t : t + "";
}
function i_(e, t) {
  if (En(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (En(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function s_(e) {
  return e.dataKey;
}
function l_(e, t) {
  return /* @__PURE__ */ x.isValidElement(e) ? /* @__PURE__ */ x.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ x.createElement(e, t) : /* @__PURE__ */ x.createElement(A1, t);
}
var Ul = /* @__PURE__ */ (function(e) {
  function t() {
    return Z1(this, t), n_(this, t, arguments);
  }
  return o_(t, e), t_(t, [{
    key: "render",
    value: function() {
      var r = this, a = this.props, o = a.active, i = a.allowEscapeViewBox, s = a.animationDuration, l = a.animationEasing, u = a.content, f = a.coordinate, c = a.filterNull, m = a.isAnimationActive, g = a.offset, h = a.payload, b = a.payloadUniqBy, p = a.position, v = a.reverseDirection, y = a.useTranslate3d, S = a.viewBox, C = a.wrapperStyle, D = h ?? [];
      c && D.length && (D = Pp(h.filter(function(_) {
        return _.value != null && (_.hide !== !0 || r.props.includeHidden);
      }), b, s_));
      var E = D.length > 0;
      return /* @__PURE__ */ x.createElement(X1, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: l,
        isAnimationActive: m,
        active: o,
        coordinate: f,
        hasPayload: E,
        offset: g,
        position: p,
        reverseDirection: v,
        useTranslate3d: y,
        viewBox: S,
        wrapperStyle: C
      }, l_(u, Af(Af({}, this.props), {}, {
        payload: D
      })));
    }
  }]);
})(Gr);
Gl(Ul, "displayName", "Tooltip");
Gl(Ul, "defaultProps", {
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
  isAnimationActive: !J1.isSsr,
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
var Cs, zf;
function u_() {
  if (zf) return Cs;
  zf = 1;
  var e = St(), t = function() {
    return e.Date.now();
  };
  return Cs = t, Cs;
}
var Ps, Lf;
function c_() {
  if (Lf) return Ps;
  Lf = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return Ps = t, Ps;
}
var Ns, qf;
function d_() {
  if (qf) return Ns;
  qf = 1;
  var e = c_(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return Ns = n, Ns;
}
var Es, $f;
function f_() {
  if ($f) return Es;
  $f = 1;
  var e = d_(), t = $t(), n = fr(), r = NaN, a = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
  function l(u) {
    if (typeof u == "number")
      return u;
    if (n(u))
      return r;
    if (t(u)) {
      var f = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = t(f) ? f + "" : f;
    }
    if (typeof u != "string")
      return u === 0 ? u : +u;
    u = e(u);
    var c = o.test(u);
    return c || i.test(u) ? s(u.slice(2), c ? 2 : 8) : a.test(u) ? r : +u;
  }
  return Es = l, Es;
}
var Ts, Bf;
function m_() {
  if (Bf) return Ts;
  Bf = 1;
  var e = $t(), t = u_(), n = f_(), r = "Expected a function", a = Math.max, o = Math.min;
  function i(s, l, u) {
    var f, c, m, g, h, b, p = 0, v = !1, y = !1, S = !0;
    if (typeof s != "function")
      throw new TypeError(r);
    l = n(l) || 0, e(u) && (v = !!u.leading, y = "maxWait" in u, m = y ? a(n(u.maxWait) || 0, l) : m, S = "trailing" in u ? !!u.trailing : S);
    function C(T) {
      var W = f, F = c;
      return f = c = void 0, p = T, g = s.apply(F, W), g;
    }
    function D(T) {
      return p = T, h = setTimeout(R, l), v ? C(T) : g;
    }
    function E(T) {
      var W = T - b, F = T - p, B = l - W;
      return y ? o(B, m - F) : B;
    }
    function _(T) {
      var W = T - b, F = T - p;
      return b === void 0 || W >= l || W < 0 || y && F >= m;
    }
    function R() {
      var T = t();
      if (_(T))
        return k(T);
      h = setTimeout(R, E(T));
    }
    function k(T) {
      return h = void 0, S && f ? C(T) : (f = c = void 0, g);
    }
    function Y() {
      h !== void 0 && clearTimeout(h), p = 0, f = b = c = h = void 0;
    }
    function I() {
      return h === void 0 ? g : k(t());
    }
    function H() {
      var T = t(), W = _(T);
      if (f = arguments, c = this, b = T, W) {
        if (h === void 0)
          return D(b);
        if (y)
          return clearTimeout(h), h = setTimeout(R, l), C(b);
      }
      return h === void 0 && (h = setTimeout(R, l)), g;
    }
    return H.cancel = Y, H.flush = I, H;
  }
  return Ts = i, Ts;
}
var Os, jf;
function p_() {
  if (jf) return Os;
  jf = 1;
  var e = m_(), t = $t(), n = "Expected a function";
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
  return Os = r, Os;
}
var h_ = p_();
const g_ = /* @__PURE__ */ _t(h_);
function nr(e) {
  "@babel/helpers - typeof";
  return nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nr(e);
}
function Ff(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ff(Object(n), !0).forEach(function(r) {
      v_(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ff(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function v_(e, t, n) {
  return t = b_(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function b_(e) {
  var t = y_(e, "string");
  return nr(t) == "symbol" ? t : t + "";
}
function y_(e, t) {
  if (nr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (nr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function w_(e, t) {
  return C_(e) || S_(e, t) || __(e, t) || x_();
}
function x_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function __(e, t) {
  if (e) {
    if (typeof e == "string") return Hf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hf(e, t);
  }
}
function Hf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function S_(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, i, s = [], l = !0, u = !1;
    try {
      if (o = (n = n.call(e)).next, t !== 0) for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (f) {
      u = !0, a = f;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function C_(e) {
  if (Array.isArray(e)) return e;
}
var P_ = /* @__PURE__ */ xt(function(e, t) {
  var n = e.aspect, r = e.initialDimension, a = r === void 0 ? {
    width: -1,
    height: -1
  } : r, o = e.width, i = o === void 0 ? "100%" : o, s = e.height, l = s === void 0 ? "100%" : s, u = e.minWidth, f = u === void 0 ? 0 : u, c = e.minHeight, m = e.maxHeight, g = e.children, h = e.debounce, b = h === void 0 ? 0 : h, p = e.id, v = e.className, y = e.onResize, S = e.style, C = S === void 0 ? {} : S, D = _n(null), E = _n();
  E.current = y, sg(t, function() {
    return Object.defineProperty(D.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), D.current;
      },
      configurable: !0
    });
  });
  var _ = Ot({
    containerWidth: a.width,
    containerHeight: a.height
  }), R = w_(_, 2), k = R[0], Y = R[1], I = vm(function(T, W) {
    Y(function(F) {
      var B = Math.round(T), L = Math.round(W);
      return F.containerWidth === B && F.containerHeight === L ? F : {
        containerWidth: B,
        containerHeight: L
      };
    });
  }, []);
  st(function() {
    var T = function(te) {
      var ie, X = te[0].contentRect, O = X.width, N = X.height;
      I(O, N), (ie = E.current) === null || ie === void 0 || ie.call(E, O, N);
    };
    b > 0 && (T = g_(T, b, {
      trailing: !0,
      leading: !1
    }));
    var W = new ResizeObserver(T), F = D.current.getBoundingClientRect(), B = F.width, L = F.height;
    return I(B, L), W.observe(D.current), function() {
      W.disconnect();
    };
  }, [I, b]);
  var H = bm(function() {
    var T = k.containerWidth, W = k.containerHeight;
    if (T < 0 || W < 0)
      return null;
    Tr(yr(i) || yr(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, l), Tr(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var F = yr(i) ? T : i, B = yr(l) ? W : l;
    n && n > 0 && (F ? B = F / n : B && (F = B * n), m && B > m && (B = m)), Tr(F > 0 || B > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, F, B, i, l, f, c, n);
    var L = !Array.isArray(g) && K0(g.type).endsWith("Chart");
    return x.Children.map(g, function(q) {
      return /* @__PURE__ */ x.isValidElement(q) ? /* @__PURE__ */ lg(q, _r({
        width: F,
        height: B
      }, L ? {
        style: _r({
          height: "100%",
          width: "100%",
          maxHeight: B,
          maxWidth: F
        }, q.props.style)
      } : {})) : q;
    });
  }, [n, g, l, m, c, f, k, i]);
  return /* @__PURE__ */ x.createElement("div", {
    id: p ? "".concat(p) : void 0,
    className: Xt("recharts-responsive-container", v),
    style: _r(_r({}, C), {}, {
      width: i,
      height: l,
      minWidth: f,
      minHeight: c,
      maxHeight: m
    }),
    ref: D
  }, H);
});
const N_ = { light: "", dark: ".dark" }, kp = M.createContext(null);
function Rp() {
  const e = M.useContext(kp);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function dE({
  id: e,
  className: t,
  children: n,
  config: r,
  ...a
}) {
  const o = M.useId(), i = `chart-${e || o.replace(/:/g, "")}`;
  return /* @__PURE__ */ d(kp.Provider, { value: { config: r }, children: /* @__PURE__ */ U(
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
        /* @__PURE__ */ d(E_, { id: i, config: r }),
        /* @__PURE__ */ d(P_, { children: n })
      ]
    }
  ) });
}
const E_ = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(([, r]) => r.theme || r.color);
  return n.length ? /* @__PURE__ */ d(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(N_).map(
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
}, fE = Ul;
function mE({
  active: e,
  payload: t,
  className: n,
  indicator: r = "dot",
  hideLabel: a = !1,
  hideIndicator: o = !1,
  label: i,
  labelFormatter: s,
  labelClassName: l,
  formatter: u,
  color: f,
  nameKey: c,
  labelKey: m
}) {
  const { config: g } = Rp(), h = M.useMemo(() => {
    var C;
    if (a || !(t != null && t.length))
      return null;
    const [p] = t, v = `${m || (p == null ? void 0 : p.dataKey) || (p == null ? void 0 : p.name) || "value"}`, y = ol(g, p, v), S = !m && typeof i == "string" ? ((C = g[i]) == null ? void 0 : C.label) || i : y == null ? void 0 : y.label;
    return s ? /* @__PURE__ */ d("div", { className: w("font-medium", l), children: s(S, t) }) : S ? /* @__PURE__ */ d("div", { className: w("font-medium", l), children: S }) : null;
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
        /* @__PURE__ */ d("div", { className: "grid gap-1.5", children: t.map((p, v) => {
          const y = `${c || p.name || p.dataKey || "value"}`, S = ol(g, p, y), C = f || p.payload.fill || p.color;
          return /* @__PURE__ */ d(
            "div",
            {
              className: w(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                r === "dot" && "items-center"
              ),
              children: u && (p == null ? void 0 : p.value) !== void 0 && p.name ? u(p.value, p.name, p, v, p.payload) : /* @__PURE__ */ U(yt, { children: [
                S != null && S.icon ? /* @__PURE__ */ d(S.icon, {}) : !o && /* @__PURE__ */ d(
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
                        /* @__PURE__ */ d("span", { className: "text-muted-foreground", children: (S == null ? void 0 : S.label) || p.name })
                      ] }),
                      p.value && /* @__PURE__ */ d("span", { className: "text-foreground font-mono font-medium tabular-nums", children: p.value.toLocaleString() })
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
const pE = Vl;
function hE({
  className: e,
  hideIcon: t = !1,
  payload: n,
  verticalAlign: r = "bottom",
  nameKey: a
}) {
  const { config: o } = Rp();
  return n != null && n.length ? /* @__PURE__ */ d(
    "div",
    {
      className: w(
        "flex items-center justify-center gap-4",
        r === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: n.map((i) => {
        const s = `${a || i.dataKey || "value"}`, l = ol(o, i, s);
        return /* @__PURE__ */ U(
          "div",
          {
            className: w(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              l != null && l.icon && !t ? /* @__PURE__ */ d(l.icon, {}) : /* @__PURE__ */ d(
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
function ol(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let a = n;
  return n in t && typeof t[n] == "string" ? a = t[n] : r && n in r && typeof r[n] == "string" && (a = r[n]), a in e ? e[a] : e[n];
}
function gE({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    ru.Root,
    {
      "data-slot": "checkbox",
      className: w(
        "peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d(
        ru.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ d(or, { className: "size-3.5" })
        }
      )
    }
  );
}
function vE({ ...e }) {
  return /* @__PURE__ */ d(pl.Root, { "data-slot": "collapsible", ...e });
}
function bE({
  ...e
}) {
  return /* @__PURE__ */ d(pl.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...e });
}
function yE({
  ...e
}) {
  return /* @__PURE__ */ d(pl.CollapsibleContent, { "data-slot": "collapsible-content", ...e });
}
var Wf = 1, T_ = 0.9, O_ = 0.8, M_ = 0.17, Ms = 0.1, Ds = 0.999, D_ = 0.9999, k_ = 0.99, R_ = /[\\\/_+.#"@\[\(\{&]/, I_ = /[\\\/_+.#"@\[\(\{&]/g, A_ = /[\s-]/, Ip = /[\s-]/g;
function il(e, t, n, r, a, o, i) {
  if (o === t.length) return a === e.length ? Wf : k_;
  var s = `${a},${o}`;
  if (i[s] !== void 0) return i[s];
  for (var l = r.charAt(o), u = n.indexOf(l, a), f = 0, c, m, g, h; u >= 0; ) c = il(e, t, n, r, u + 1, o + 1, i), c > f && (u === a ? c *= Wf : R_.test(e.charAt(u - 1)) ? (c *= O_, g = e.slice(a, u - 1).match(I_), g && a > 0 && (c *= Math.pow(Ds, g.length))) : A_.test(e.charAt(u - 1)) ? (c *= T_, h = e.slice(a, u - 1).match(Ip), h && a > 0 && (c *= Math.pow(Ds, h.length))) : (c *= M_, a > 0 && (c *= Math.pow(Ds, u - a))), e.charAt(u) !== t.charAt(o) && (c *= D_)), (c < Ms && n.charAt(u - 1) === r.charAt(o + 1) || r.charAt(o + 1) === r.charAt(o) && n.charAt(u - 1) !== r.charAt(o)) && (m = il(e, t, n, r, u + 1, o + 2, i), m * Ms > c && (c = m * Ms)), c > f && (f = c), u = n.indexOf(l, u + 1);
  return i[s] = f, f;
}
function Yf(e) {
  return e.toLowerCase().replace(Ip, " ");
}
function z_(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, il(e, t, Yf(e), Yf(t), 0, 0, {});
}
var Rn = '[cmdk-group=""]', ks = '[cmdk-group-items=""]', L_ = '[cmdk-group-heading=""]', Ap = '[cmdk-item=""]', Vf = `${Ap}:not([aria-disabled="true"])`, sl = "cmdk-item-select", pn = "data-value", q_ = (e, t, n) => z_(e, t, n), zp = M.createContext(void 0), mr = () => M.useContext(zp), Lp = M.createContext(void 0), Kl = () => M.useContext(Lp), qp = M.createContext(void 0), $p = M.forwardRef((e, t) => {
  let n = hn(() => {
    var O, N;
    return { search: "", value: (N = (O = e.value) != null ? O : e.defaultValue) != null ? N : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = hn(() => /* @__PURE__ */ new Set()), a = hn(() => /* @__PURE__ */ new Map()), o = hn(() => /* @__PURE__ */ new Map()), i = hn(() => /* @__PURE__ */ new Set()), s = Bp(e), { label: l, children: u, value: f, onValueChange: c, filter: m, shouldFilter: g, loop: h, disablePointerSelection: b = !1, vimBindings: p = !0, ...v } = e, y = bn(), S = bn(), C = bn(), D = M.useRef(null), E = K_();
  en(() => {
    if (f !== void 0) {
      let O = f.trim();
      n.current.value = O, _.emit();
    }
  }, [f]), en(() => {
    E(6, T);
  }, []);
  let _ = M.useMemo(() => ({ subscribe: (O) => (i.current.add(O), () => i.current.delete(O)), snapshot: () => n.current, setState: (O, N, z) => {
    var A, $, j, V;
    if (!Object.is(n.current[O], N)) {
      if (n.current[O] = N, O === "search") H(), Y(), E(1, I);
      else if (O === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Q = document.getElementById(C);
          Q ? Q.focus() : (A = document.getElementById(y)) == null || A.focus();
        }
        if (E(7, () => {
          var Q;
          n.current.selectedItemId = (Q = W()) == null ? void 0 : Q.id, _.emit();
        }), z || E(5, T), (($ = s.current) == null ? void 0 : $.value) !== void 0) {
          let Q = N ?? "";
          (V = (j = s.current).onValueChange) == null || V.call(j, Q);
          return;
        }
      }
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((O) => O());
  } }), []), R = M.useMemo(() => ({ value: (O, N, z) => {
    var A;
    N !== ((A = o.current.get(O)) == null ? void 0 : A.value) && (o.current.set(O, { value: N, keywords: z }), n.current.filtered.items.set(O, k(N, z)), E(2, () => {
      Y(), _.emit();
    }));
  }, item: (O, N) => (r.current.add(O), N && (a.current.has(N) ? a.current.get(N).add(O) : a.current.set(N, /* @__PURE__ */ new Set([O]))), E(3, () => {
    H(), Y(), n.current.value || I(), _.emit();
  }), () => {
    o.current.delete(O), r.current.delete(O), n.current.filtered.items.delete(O);
    let z = W();
    E(4, () => {
      H(), (z == null ? void 0 : z.getAttribute("id")) === O && I(), _.emit();
    });
  }), group: (O) => (a.current.has(O) || a.current.set(O, /* @__PURE__ */ new Set()), () => {
    o.current.delete(O), a.current.delete(O);
  }), filter: () => s.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: y, inputId: C, labelId: S, listInnerRef: D }), []);
  function k(O, N) {
    var z, A;
    let $ = (A = (z = s.current) == null ? void 0 : z.filter) != null ? A : q_;
    return O ? $(O, n.current.search, N) : 0;
  }
  function Y() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let O = n.current.filtered.items, N = [];
    n.current.filtered.groups.forEach((A) => {
      let $ = a.current.get(A), j = 0;
      $.forEach((V) => {
        let Q = O.get(V);
        j = Math.max(Q, j);
      }), N.push([A, j]);
    });
    let z = D.current;
    F().sort((A, $) => {
      var j, V;
      let Q = A.getAttribute("id"), ne = $.getAttribute("id");
      return ((j = O.get(ne)) != null ? j : 0) - ((V = O.get(Q)) != null ? V : 0);
    }).forEach((A) => {
      let $ = A.closest(ks);
      $ ? $.appendChild(A.parentElement === $ ? A : A.closest(`${ks} > *`)) : z.appendChild(A.parentElement === z ? A : A.closest(`${ks} > *`));
    }), N.sort((A, $) => $[1] - A[1]).forEach((A) => {
      var $;
      let j = ($ = D.current) == null ? void 0 : $.querySelector(`${Rn}[${pn}="${encodeURIComponent(A[0])}"]`);
      j == null || j.parentElement.appendChild(j);
    });
  }
  function I() {
    let O = F().find((z) => z.getAttribute("aria-disabled") !== "true"), N = O == null ? void 0 : O.getAttribute(pn);
    _.setState("value", N || void 0);
  }
  function H() {
    var O, N, z, A;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let $ = 0;
    for (let j of r.current) {
      let V = (N = (O = o.current.get(j)) == null ? void 0 : O.value) != null ? N : "", Q = (A = (z = o.current.get(j)) == null ? void 0 : z.keywords) != null ? A : [], ne = k(V, Q);
      n.current.filtered.items.set(j, ne), ne > 0 && $++;
    }
    for (let [j, V] of a.current) for (let Q of V) if (n.current.filtered.items.get(Q) > 0) {
      n.current.filtered.groups.add(j);
      break;
    }
    n.current.filtered.count = $;
  }
  function T() {
    var O, N, z;
    let A = W();
    A && (((O = A.parentElement) == null ? void 0 : O.firstChild) === A && ((z = (N = A.closest(Rn)) == null ? void 0 : N.querySelector(L_)) == null || z.scrollIntoView({ block: "nearest" })), A.scrollIntoView({ block: "nearest" }));
  }
  function W() {
    var O;
    return (O = D.current) == null ? void 0 : O.querySelector(`${Ap}[aria-selected="true"]`);
  }
  function F() {
    var O;
    return Array.from(((O = D.current) == null ? void 0 : O.querySelectorAll(Vf)) || []);
  }
  function B(O) {
    let N = F()[O];
    N && _.setState("value", N.getAttribute(pn));
  }
  function L(O) {
    var N;
    let z = W(), A = F(), $ = A.findIndex((V) => V === z), j = A[$ + O];
    (N = s.current) != null && N.loop && (j = $ + O < 0 ? A[A.length - 1] : $ + O === A.length ? A[0] : A[$ + O]), j && _.setState("value", j.getAttribute(pn));
  }
  function q(O) {
    let N = W(), z = N == null ? void 0 : N.closest(Rn), A;
    for (; z && !A; ) z = O > 0 ? G_(z, Rn) : U_(z, Rn), A = z == null ? void 0 : z.querySelector(Vf);
    A ? _.setState("value", A.getAttribute(pn)) : L(O);
  }
  let te = () => B(F().length - 1), ie = (O) => {
    O.preventDefault(), O.metaKey ? te() : O.altKey ? q(1) : L(1);
  }, X = (O) => {
    O.preventDefault(), O.metaKey ? B(0) : O.altKey ? q(-1) : L(-1);
  };
  return M.createElement(Lt.div, { ref: t, tabIndex: -1, ...v, "cmdk-root": "", onKeyDown: (O) => {
    var N;
    (N = v.onKeyDown) == null || N.call(v, O);
    let z = O.nativeEvent.isComposing || O.keyCode === 229;
    if (!(O.defaultPrevented || z)) switch (O.key) {
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
        p && O.ctrlKey && X(O);
        break;
      }
      case "ArrowUp": {
        X(O);
        break;
      }
      case "Home": {
        O.preventDefault(), B(0);
        break;
      }
      case "End": {
        O.preventDefault(), te();
        break;
      }
      case "Enter": {
        O.preventDefault();
        let A = W();
        if (A) {
          let $ = new Event(sl);
          A.dispatchEvent($);
        }
      }
    }
  } }, M.createElement("label", { "cmdk-label": "", htmlFor: R.inputId, id: R.labelId, style: Q_ }, l), ua(e, (O) => M.createElement(Lp.Provider, { value: _ }, M.createElement(zp.Provider, { value: R }, O))));
}), $_ = M.forwardRef((e, t) => {
  var n, r;
  let a = bn(), o = M.useRef(null), i = M.useContext(qp), s = mr(), l = Bp(e), u = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i == null ? void 0 : i.forceMount;
  en(() => {
    if (!u) return s.item(a, i == null ? void 0 : i.id);
  }, [u]);
  let f = jp(a, o, [e.value, e.children, o], e.keywords), c = Kl(), m = At((E) => E.value && E.value === f.current), g = At((E) => u || s.filter() === !1 ? !0 : E.search ? E.filtered.items.get(a) > 0 : !0);
  M.useEffect(() => {
    let E = o.current;
    if (!(!E || e.disabled)) return E.addEventListener(sl, h), () => E.removeEventListener(sl, h);
  }, [g, e.onSelect, e.disabled]);
  function h() {
    var E, _;
    b(), (_ = (E = l.current).onSelect) == null || _.call(E, f.current);
  }
  function b() {
    c.setState("value", f.current, !0);
  }
  if (!g) return null;
  let { disabled: p, value: v, onSelect: y, forceMount: S, keywords: C, ...D } = e;
  return M.createElement(Lt.div, { ref: Vn(o, t), ...D, id: a, "cmdk-item": "", role: "option", "aria-disabled": !!p, "aria-selected": !!m, "data-disabled": !!p, "data-selected": !!m, onPointerMove: p || s.getDisablePointerSelection() ? void 0 : b, onClick: p ? void 0 : h }, e.children);
}), B_ = M.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: a, ...o } = e, i = bn(), s = M.useRef(null), l = M.useRef(null), u = bn(), f = mr(), c = At((g) => a || f.filter() === !1 ? !0 : g.search ? g.filtered.groups.has(i) : !0);
  en(() => f.group(i), []), jp(i, s, [e.value, e.heading, l]);
  let m = M.useMemo(() => ({ id: i, forceMount: a }), [a]);
  return M.createElement(Lt.div, { ref: Vn(s, t), ...o, "cmdk-group": "", role: "presentation", hidden: c ? void 0 : !0 }, n && M.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: u }, n), ua(e, (g) => M.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? u : void 0 }, M.createElement(qp.Provider, { value: m }, g))));
}), j_ = M.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, a = M.useRef(null), o = At((i) => !i.search);
  return !n && !o ? null : M.createElement(Lt.div, { ref: Vn(a, t), ...r, "cmdk-separator": "", role: "separator" });
}), F_ = M.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, a = e.value != null, o = Kl(), i = At((u) => u.search), s = At((u) => u.selectedItemId), l = mr();
  return M.useEffect(() => {
    e.value != null && o.setState("search", e.value);
  }, [e.value]), M.createElement(Lt.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": s, id: l.inputId, type: "text", value: a ? e.value : i, onChange: (u) => {
    a || o.setState("search", u.target.value), n == null || n(u.target.value);
  } });
}), H_ = M.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...a } = e, o = M.useRef(null), i = M.useRef(null), s = At((u) => u.selectedItemId), l = mr();
  return M.useEffect(() => {
    if (i.current && o.current) {
      let u = i.current, f = o.current, c, m = new ResizeObserver(() => {
        c = requestAnimationFrame(() => {
          let g = u.offsetHeight;
          f.style.setProperty("--cmdk-list-height", g.toFixed(1) + "px");
        });
      });
      return m.observe(u), () => {
        cancelAnimationFrame(c), m.unobserve(u);
      };
    }
  }, []), M.createElement(Lt.div, { ref: Vn(o, t), ...a, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: l.listId }, ua(e, (u) => M.createElement("div", { ref: Vn(i, l.listInnerRef), "cmdk-list-sizer": "" }, u)));
}), W_ = M.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: a, contentClassName: o, container: i, ...s } = e;
  return M.createElement(we.Root, { open: n, onOpenChange: r }, M.createElement(we.Portal, { container: i }, M.createElement(we.Overlay, { "cmdk-overlay": "", className: a }), M.createElement(we.Content, { "aria-label": e.label, "cmdk-dialog": "", className: o }, M.createElement($p, { ref: t, ...s }))));
}), Y_ = M.forwardRef((e, t) => At((n) => n.filtered.count === 0) ? M.createElement(Lt.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), V_ = M.forwardRef((e, t) => {
  let { progress: n, children: r, label: a = "Loading...", ...o } = e;
  return M.createElement(Lt.div, { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": a }, ua(e, (i) => M.createElement("div", { "aria-hidden": !0 }, i)));
}), un = Object.assign($p, { List: H_, Item: $_, Input: F_, Group: B_, Separator: j_, Dialog: W_, Empty: Y_, Loading: V_ });
function G_(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function U_(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Bp(e) {
  let t = M.useRef(e);
  return en(() => {
    t.current = e;
  }), t;
}
var en = typeof window > "u" ? M.useEffect : M.useLayoutEffect;
function hn(e) {
  let t = M.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function At(e) {
  let t = Kl(), n = () => e(t.snapshot());
  return M.useSyncExternalStore(t.subscribe, n, n);
}
function jp(e, t, n, r = []) {
  let a = M.useRef(), o = mr();
  return en(() => {
    var i;
    let s = (() => {
      var u;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (u = f.current.textContent) == null ? void 0 : u.trim() : a.current;
      }
    })(), l = r.map((u) => u.trim());
    o.value(e, s, l), (i = t.current) == null || i.setAttribute(pn, s), a.current = s;
  }), a;
}
var K_ = () => {
  let [e, t] = M.useState(), n = hn(() => /* @__PURE__ */ new Map());
  return en(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, a) => {
    n.current.set(r, a), t({});
  };
};
function X_(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function ua({ asChild: e, children: t }, n) {
  return e && M.isValidElement(t) ? M.cloneElement(X_(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var Q_ = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function J_({ ...e }) {
  return /* @__PURE__ */ d(we.Root, { "data-slot": "dialog", ...e });
}
function wE({ ...e }) {
  return /* @__PURE__ */ d(we.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function Z_({ ...e }) {
  return /* @__PURE__ */ d(we.Portal, { "data-slot": "dialog-portal", ...e });
}
function xE({ ...e }) {
  return /* @__PURE__ */ d(we.Close, { "data-slot": "dialog-close", ...e });
}
function eS({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
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
function tS({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(Z_, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ d(eS, {}),
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
            /* @__PURE__ */ d(hm, {}),
            /* @__PURE__ */ d("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function nS({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "dialog-header",
      className: w("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function _E({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "dialog-footer",
      className: w("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function rS({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    we.Title,
    {
      "data-slot": "dialog-title",
      className: w("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function aS({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    we.Description,
    {
      "data-slot": "dialog-description",
      className: w("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function oS({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    un,
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
function SE({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ U(J_, { ...r, children: [
    /* @__PURE__ */ U(nS, { className: "sr-only", children: [
      /* @__PURE__ */ d(rS, { children: e }),
      /* @__PURE__ */ d(aS, { children: t })
    ] }),
    /* @__PURE__ */ d(tS, { className: "overflow-hidden p-0", children: /* @__PURE__ */ d(oS, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n }) })
  ] });
}
function CE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ U("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3", children: [
    /* @__PURE__ */ d(eg, { className: "size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ d(
      un.Input,
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
function PE({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    un.List,
    {
      "data-slot": "command-list",
      className: w("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
      ...t
    }
  );
}
function NE({ ...e }) {
  return /* @__PURE__ */ d(
    un.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function EE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    un.Group,
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
function TE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    un.Separator,
    {
      "data-slot": "command-separator",
      className: w("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function OE({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    un.Item,
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
function ME({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "span",
    {
      "data-slot": "command-shortcut",
      className: w("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function DE({ ...e }) {
  return /* @__PURE__ */ d(qe.Root, { "data-slot": "context-menu", ...e });
}
function kE({
  ...e
}) {
  return /* @__PURE__ */ d(qe.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function RE({ ...e }) {
  return /* @__PURE__ */ d(qe.Group, { "data-slot": "context-menu-group", ...e });
}
function IE({ ...e }) {
  return /* @__PURE__ */ d(qe.Portal, { "data-slot": "context-menu-portal", ...e });
}
function AE({ ...e }) {
  return /* @__PURE__ */ d(qe.Sub, { "data-slot": "context-menu-sub", ...e });
}
function zE({
  ...e
}) {
  return /* @__PURE__ */ d(qe.RadioGroup, { "data-slot": "context-menu-radio-group", ...e });
}
function LE({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ U(
    qe.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: w(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ d(Yr, { className: "ml-auto" })
      ]
    }
  );
}
function qE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    qe.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function $E({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(qe.Portal, { children: /* @__PURE__ */ d(
    qe.Content,
    {
      "data-slot": "context-menu-content",
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...t
    }
  ) });
}
function BE({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ d(
    qe.Item,
    {
      "data-slot": "context-menu-item",
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
function jE({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ U(
    qe.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ d("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d(qe.ItemIndicator, { children: /* @__PURE__ */ d(or, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function FE({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    qe.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ d("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d(qe.ItemIndicator, { children: /* @__PURE__ */ d(Vr, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function HE({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ d(
    qe.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: w("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...n
    }
  );
}
function WE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    qe.Separator,
    {
      "data-slot": "context-menu-separator",
      className: w("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function YE({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: w("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function iS(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Fp = x.createContext({
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
}), pr = () => {
  const e = x.useContext(Fp);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
iS(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function sS() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function lS() {
  return Xl(/^Mac/);
}
function uS() {
  return Xl(/^iPhone/);
}
function Gf() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function cS() {
  return Xl(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  lS() && navigator.maxTouchPoints > 1;
}
function Hp() {
  return uS() || cS();
}
function Xl(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const dS = 24, fS = typeof window < "u" ? gm : st;
function Uf(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const Rs = typeof document < "u" && window.visualViewport;
function Kf(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Wp(e) {
  for (Kf(e) && (e = e.parentElement); e && !Kf(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const mS = /* @__PURE__ */ new Set([
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
let Sr = 0, Is;
function pS(e = {}) {
  let { isDisabled: t } = e;
  fS(() => {
    if (!t)
      return Sr++, Sr === 1 && Hp() && (Is = hS()), () => {
        Sr--, Sr === 0 && (Is == null || Is());
      };
  }, [
    t
  ]);
}
function hS() {
  let e, t = 0, n = (c) => {
    e = Wp(c.target), !(e === document.documentElement && e === document.body) && (t = c.changedTouches[0].pageY);
  }, r = (c) => {
    if (!e || e === document.documentElement || e === document.body) {
      c.preventDefault();
      return;
    }
    let m = c.changedTouches[0].pageY, g = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((g <= 0 && m > t || g >= h && m < t) && c.preventDefault(), t = m);
  }, a = (c) => {
    let m = c.target;
    ll(m) && m !== document.activeElement && (c.preventDefault(), m.style.transform = "translateY(-2000px)", m.focus(), requestAnimationFrame(() => {
      m.style.transform = "";
    }));
  }, o = (c) => {
    let m = c.target;
    ll(m) && (m.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      m.style.transform = "", Rs && (Rs.height < window.innerHeight ? requestAnimationFrame(() => {
        Xf(m);
      }) : Rs.addEventListener("resize", () => Xf(m), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, l = window.pageYOffset, u = Uf(gS(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let f = Uf(In(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), In(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), In(document, "touchend", a, {
    passive: !1,
    capture: !0
  }), In(document, "focus", o, !0), In(window, "scroll", i));
  return () => {
    u(), f(), window.scrollTo(s, l);
  };
}
function gS(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function In(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Xf(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Wp(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, a = e.getBoundingClientRect().top, o = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom + dS;
      o > i && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function ll(e) {
  return e instanceof HTMLInputElement && !mS.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function vS(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function bS(...e) {
  return (t) => e.forEach((n) => vS(n, t));
}
function Yp(...e) {
  return M.useCallback(bS(...e), e);
}
const Vp = /* @__PURE__ */ new WeakMap();
function Re(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([a, o]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, o);
      return;
    }
    r[a] = e.style[a], e.style[a] = o;
  }), !n && Vp.set(e, r);
}
function yS(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Vp.get(e);
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
function Cr(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let a = r.match(/^matrix3d\((.+)\)$/);
  return a ? parseFloat(a[1].split(", ")[ke(t) ? 13 : 12]) : (a = r.match(/^matrix\((.+)\)$/), a ? parseFloat(a[1].split(", ")[ke(t) ? 5 : 4]) : null);
}
function wS(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function As(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function xS(...e) {
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
}, Gp = 0.4, _S = 0.25, SS = 100, Up = 8, Ht = 16, ul = 26, zs = "vaul-dragging";
function Kp(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function CS({ defaultProp: e, onChange: t }) {
  const n = x.useState(e), [r] = n, a = x.useRef(r), o = Kp(t);
  return x.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [
    r,
    a,
    o
  ]), n;
}
function Xp({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = CS({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, i = o ? e : r, s = Kp(n), l = x.useCallback((u) => {
    if (o) {
      const c = typeof u == "function" ? u(e) : u;
      c !== e && s(c);
    } else
      a(u);
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
function PS({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: a, fadeFromIndex: o, onSnapPointChange: i, direction: s = "bottom", container: l, snapToSequentialPoint: u }) {
  const [f, c] = Xp({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [m, g] = x.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  x.useEffect(() => {
    function _() {
      g({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, []);
  const h = x.useMemo(() => f === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    f
  ]), b = x.useMemo(() => {
    var _;
    return (_ = n == null ? void 0 : n.findIndex((R) => R === f)) != null ? _ : null;
  }, [
    n,
    f
  ]), p = n && n.length > 0 && (o || o === 0) && !Number.isNaN(o) && n[o] === f || !n, v = x.useMemo(() => {
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
    return (R = n == null ? void 0 : n.map((k) => {
      const Y = typeof k == "string";
      let I = 0;
      if (Y && (I = parseInt(k, 10)), ke(s)) {
        const T = Y ? I : m ? k * _.height : 0;
        return m ? s === "bottom" ? _.height - T : -_.height + T : T;
      }
      const H = Y ? I : m ? k * _.width : 0;
      return m ? s === "right" ? _.width - H : -_.width + H : H;
    })) != null ? R : [];
  }, [
    n,
    m,
    l
  ]), y = x.useMemo(() => b !== null ? v == null ? void 0 : v[b] : null, [
    v,
    b
  ]), S = x.useCallback((_) => {
    var R;
    const k = (R = v == null ? void 0 : v.findIndex((Y) => Y === _)) != null ? R : null;
    i(k), Re(r.current, {
      transition: `transform ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      transform: ke(s) ? `translate3d(0, ${_}px, 0)` : `translate3d(${_}px, 0, 0)`
    }), v && k !== v.length - 1 && o !== void 0 && k !== o && k < o ? Re(a.current, {
      transition: `opacity ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      opacity: "0"
    }) : Re(a.current, {
      transition: `opacity ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      opacity: "1"
    }), c(n == null ? void 0 : n[Math.max(k, 0)]);
  }, [
    r.current,
    n,
    v,
    o,
    a,
    c
  ]);
  x.useEffect(() => {
    if (f || e) {
      var _;
      const R = (_ = n == null ? void 0 : n.findIndex((k) => k === e || k === f)) != null ? _ : -1;
      v && R !== -1 && typeof v[R] == "number" && S(v[R]);
    }
  }, [
    f,
    e,
    n,
    v,
    S
  ]);
  function C({ draggedDistance: _, closeDrawer: R, velocity: k, dismissible: Y }) {
    if (o === void 0) return;
    const I = s === "bottom" || s === "right" ? (y ?? 0) - _ : (y ?? 0) + _, H = b === o - 1, T = b === 0, W = _ > 0;
    if (H && Re(a.current, {
      transition: `opacity ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`
    }), !u && k > 2 && !W) {
      Y ? R() : S(v[0]);
      return;
    }
    if (!u && k > 2 && W && v && n) {
      S(v[n.length - 1]);
      return;
    }
    const F = v == null ? void 0 : v.reduce((L, q) => typeof L != "number" || typeof q != "number" ? L : Math.abs(q - I) < Math.abs(L - I) ? q : L), B = ke(s) ? window.innerHeight : window.innerWidth;
    if (k > Gp && Math.abs(_) < B * 0.4) {
      const L = W ? 1 : -1;
      if (L > 0 && h && n) {
        S(v[n.length - 1]);
        return;
      }
      if (T && L < 0 && Y && R(), b === null) return;
      S(v[b + L]);
      return;
    }
    S(F);
  }
  function D({ draggedDistance: _ }) {
    if (y === null) return;
    const R = s === "bottom" || s === "right" ? y - _ : y + _;
    (s === "bottom" || s === "right") && R < v[v.length - 1] || (s === "top" || s === "left") && R > v[v.length - 1] || Re(r.current, {
      transform: ke(s) ? `translate3d(0, ${R}px, 0)` : `translate3d(${R}px, 0, 0)`
    });
  }
  function E(_, R) {
    if (!n || typeof b != "number" || !v || o === void 0) return null;
    const k = b === o - 1;
    if (b >= o && R)
      return 0;
    if (k && !R) return 1;
    if (!p && !k) return null;
    const I = k ? b + 1 : b - 1, H = k ? v[I] - v[I - 1] : v[I + 1] - v[I], T = _ / Math.abs(H);
    return k ? 1 - T : T;
  }
  return {
    isLastSnapPoint: h,
    activeSnapPoint: f,
    shouldFade: p,
    getPercentageDragged: E,
    setActiveSnapPoint: c,
    activeSnapPointIndex: b,
    onRelease: C,
    onDrag: D,
    snapPointsOffset: v
  };
}
const NS = () => () => {
};
function ES() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: a } = pr(), o = x.useRef(null), i = bm(() => document.body.style.backgroundColor, []);
  function s() {
    return (window.innerWidth - ul) / window.innerWidth;
  }
  x.useEffect(() => {
    if (t && n) {
      o.current && clearTimeout(o.current);
      const l = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!l) return;
      xS(r && !a ? As(document.body, {
        background: "black"
      }) : NS, As(l, {
        transformOrigin: ke(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Oe.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Oe.EASE.join(",")})`
      }));
      const u = As(l, {
        borderRadius: `${Up}px`,
        overflow: "hidden",
        ...ke(e) ? {
          transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        u(), o.current = window.setTimeout(() => {
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
let An = null;
function TS({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: a, noBodyStyles: o }) {
  const [i, s] = x.useState(() => typeof window < "u" ? window.location.href : ""), l = x.useRef(0), u = x.useCallback(() => {
    if (Gf() && An === null && e && !o) {
      An = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: c, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-l.current}px`,
        left: `${-c}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const g = m - window.innerHeight;
        g && l.current >= m && (document.body.style.top = `${-(l.current + g)}px`);
      }), 300);
    }
  }, [
    e
  ]), f = x.useCallback(() => {
    if (Gf() && An !== null && !o) {
      const c = -parseInt(document.body.style.top, 10), m = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, An), window.requestAnimationFrame(() => {
        if (a && i !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(m, c);
      }), An = null;
    }
  }, [
    i
  ]);
  return x.useEffect(() => {
    function c() {
      l.current = window.scrollY;
    }
    return c(), window.addEventListener("scroll", c), () => {
      window.removeEventListener("scroll", c);
    };
  }, []), x.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || f();
      };
  }, [
    t,
    f
  ]), x.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && u(), t || window.setTimeout(() => {
      f();
    }, 500)) : f());
  }, [
    e,
    r,
    i,
    t,
    n,
    u,
    f
  ]), {
    restorePositionSetting: f
  };
}
function OS({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: a, snapPoints: o, shouldScaleBackground: i = !1, setBackgroundColorOnScale: s = !0, closeThreshold: l = _S, scrollLockTimeout: u = SS, dismissible: f = !0, handleOnly: c = !1, fadeFromIndex: m = o && o.length - 1, activeSnapPoint: g, setActiveSnapPoint: h, fixed: b, modal: p = !0, onClose: v, nested: y, noBodyStyles: S = !1, direction: C = "bottom", defaultOpen: D = !1, disablePreventScroll: E = !0, snapToSequentialPoint: _ = !1, preventScrollRestoration: R = !1, repositionInputs: k = !0, onAnimationEnd: Y, container: I, autoFocus: H = !1 }) {
  var T, W;
  const [F = !1, B] = Xp({
    defaultProp: D,
    prop: e,
    onChange: (J) => {
      t == null || t(J), !J && !y && Ye(), setTimeout(() => {
        Y == null || Y(J);
      }, Oe.DURATION * 1e3), J && !p && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), J || (document.body.style.pointerEvents = "auto");
    }
  }), [L, q] = x.useState(!1), [te, ie] = x.useState(!1), [X, O] = x.useState(!1), N = x.useRef(null), z = x.useRef(null), A = x.useRef(null), $ = x.useRef(null), j = x.useRef(null), V = x.useRef(!1), Q = x.useRef(null), ne = x.useRef(0), ae = x.useRef(!1), G = x.useRef(!D), Z = x.useRef(0), P = x.useRef(null), K = x.useRef(((T = P.current) == null ? void 0 : T.getBoundingClientRect().height) || 0), se = x.useRef(((W = P.current) == null ? void 0 : W.getBoundingClientRect().width) || 0), ce = x.useRef(0), le = x.useCallback((J) => {
    o && J === Pe.length - 1 && (z.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: oe, activeSnapPointIndex: ge, setActiveSnapPoint: De, onRelease: me, snapPointsOffset: Pe, onDrag: je, shouldFade: Fe, getPercentageDragged: ze } = PS({
    snapPoints: o,
    activeSnapPointProp: g,
    setActiveSnapPointProp: h,
    drawerRef: P,
    fadeFromIndex: m,
    overlayRef: N,
    onSnapPointChange: le,
    direction: C,
    container: I,
    snapToSequentialPoint: _
  });
  pS({
    isDisabled: !F || te || !p || X || !L || !k || !E
  });
  const { restorePositionSetting: Ye } = TS({
    isOpen: F,
    modal: p,
    nested: y ?? !1,
    hasBeenOpened: L,
    preventScrollRestoration: R,
    noBodyStyles: S
  });
  function tt() {
    return (window.innerWidth - ul) / window.innerWidth;
  }
  function nt(J) {
    var pe, ve;
    !f && !o || P.current && !P.current.contains(J.target) || (K.current = ((pe = P.current) == null ? void 0 : pe.getBoundingClientRect().height) || 0, se.current = ((ve = P.current) == null ? void 0 : ve.getBoundingClientRect().width) || 0, ie(!0), A.current = /* @__PURE__ */ new Date(), Hp() && window.addEventListener("touchend", () => V.current = !1, {
      once: !0
    }), J.target.setPointerCapture(J.pointerId), ne.current = ke(C) ? J.pageY : J.pageX);
  }
  function Ie(J, pe) {
    var ve;
    let de = J;
    const Se = (ve = window.getSelection()) == null ? void 0 : ve.toString(), ee = P.current ? Cr(P.current, C) : null, fe = /* @__PURE__ */ new Date();
    if (de.tagName === "SELECT" || de.hasAttribute("data-vaul-no-drag") || de.closest("[data-vaul-no-drag]"))
      return !1;
    if (C === "right" || C === "left")
      return !0;
    if (z.current && fe.getTime() - z.current.getTime() < 500)
      return !1;
    if (ee !== null && (C === "bottom" ? ee > 0 : ee < 0))
      return !0;
    if (Se && Se.length > 0)
      return !1;
    if (j.current && fe.getTime() - j.current.getTime() < u && ee === 0 || pe)
      return j.current = fe, !1;
    for (; de; ) {
      if (de.scrollHeight > de.clientHeight) {
        if (de.scrollTop !== 0)
          return j.current = /* @__PURE__ */ new Date(), !1;
        if (de.getAttribute("role") === "dialog")
          return !0;
      }
      de = de.parentNode;
    }
    return !0;
  }
  function gt(J) {
    if (P.current && te) {
      const pe = C === "bottom" || C === "right" ? 1 : -1, ve = (ne.current - (ke(C) ? J.pageY : J.pageX)) * pe, de = ve > 0, Se = o && !f && !de;
      if (Se && ge === 0) return;
      const ee = Math.abs(ve), fe = document.querySelector("[data-vaul-drawer-wrapper]"), _e = C === "bottom" || C === "top" ? K.current : se.current;
      let Ce = ee / _e;
      const rt = ze(ee, de);
      if (rt !== null && (Ce = rt), Se && Ce >= 1 || !V.current && !Ie(J.target, de)) return;
      if (P.current.classList.add(zs), V.current = !0, Re(P.current, {
        transition: "none"
      }), Re(N.current, {
        transition: "none"
      }), o && je({
        draggedDistance: ve
      }), de && !o) {
        const Te = wS(ve), Pt = Math.min(Te * -1, 0) * pe;
        Re(P.current, {
          transform: ke(C) ? `translate3d(0, ${Pt}px, 0)` : `translate3d(${Pt}px, 0, 0)`
        });
        return;
      }
      const Ne = 1 - Ce;
      if ((Fe || m && ge === m - 1) && (r == null || r(J, Ce), Re(N.current, {
        opacity: `${Ne}`,
        transition: "none"
      }, !0)), fe && N.current && i) {
        const Te = Math.min(tt() + Ce * (1 - tt()), 1), Pt = 8 - Ce * 8, Ve = Math.max(0, 14 - Ce * 14);
        Re(fe, {
          borderRadius: `${Pt}px`,
          transform: ke(C) ? `scale(${Te}) translate3d(0, ${Ve}px, 0)` : `scale(${Te}) translate3d(${Ve}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!o) {
        const Te = ee * pe;
        Re(P.current, {
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
      if (ll(ve) || ae.current) {
        var de;
        const Se = ((de = window.visualViewport) == null ? void 0 : de.height) || 0, ee = window.innerHeight;
        let fe = ee - Se;
        const _e = P.current.getBoundingClientRect().height || 0, Ce = _e > ee * 0.8;
        ce.current || (ce.current = _e);
        const rt = P.current.getBoundingClientRect().top;
        if (Math.abs(Z.current - fe) > 60 && (ae.current = !ae.current), o && o.length > 0 && Pe && ge) {
          const Ne = Pe[ge] || 0;
          fe += Ne;
        }
        if (Z.current = fe, _e > Se || ae.current) {
          const Ne = P.current.getBoundingClientRect().height;
          let Te = Ne;
          Ne > Se && (Te = Se - (Ce ? rt : ul)), b ? P.current.style.height = `${Ne - Math.max(fe, 0)}px` : P.current.style.height = `${Math.max(Te, Se - rt)}px`;
        } else sS() || (P.current.style.height = `${ce.current}px`);
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
  function Ae(J) {
    Ct(), v == null || v(), J || B(!1), setTimeout(() => {
      o && De(o[0]);
    }, Oe.DURATION * 1e3);
  }
  function Le() {
    if (!P.current) return;
    const J = document.querySelector("[data-vaul-drawer-wrapper]"), pe = Cr(P.current, C);
    Re(P.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`
    }), Re(N.current, {
      transition: `opacity ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      opacity: "1"
    }), i && pe && pe > 0 && F && Re(J, {
      borderRadius: `${Up}px`,
      overflow: "hidden",
      ...ke(C) ? {
        transform: `scale(${tt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${tt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${Oe.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${Oe.EASE.join(",")})`
    }, !0);
  }
  function Ct() {
    !te || !P.current || (P.current.classList.remove(zs), V.current = !1, ie(!1), $.current = /* @__PURE__ */ new Date());
  }
  function kt(J) {
    if (!te || !P.current) return;
    P.current.classList.remove(zs), V.current = !1, ie(!1), $.current = /* @__PURE__ */ new Date();
    const pe = Cr(P.current, C);
    if (!J || !Ie(J.target, !1) || !pe || Number.isNaN(pe) || A.current === null) return;
    const ve = $.current.getTime() - A.current.getTime(), de = ne.current - (ke(C) ? J.pageY : J.pageX), Se = Math.abs(de) / ve;
    if (Se > 0.05 && (O(!0), setTimeout(() => {
      O(!1);
    }, 200)), o) {
      me({
        draggedDistance: de * (C === "bottom" || C === "right" ? 1 : -1),
        closeDrawer: Ae,
        velocity: Se,
        dismissible: f
      }), a == null || a(J, !0);
      return;
    }
    if (C === "bottom" || C === "right" ? de > 0 : de < 0) {
      Le(), a == null || a(J, !0);
      return;
    }
    if (Se > Gp) {
      Ae(), a == null || a(J, !1);
      return;
    }
    var ee;
    const fe = Math.min((ee = P.current.getBoundingClientRect().height) != null ? ee : 0, window.innerHeight);
    var _e;
    const Ce = Math.min((_e = P.current.getBoundingClientRect().width) != null ? _e : 0, window.innerWidth), rt = C === "left" || C === "right";
    if (Math.abs(pe) >= (rt ? Ce : fe) * l) {
      Ae(), a == null || a(J, !1);
      return;
    }
    a == null || a(J, !0), Le();
  }
  x.useEffect(() => (F && (Re(document.documentElement, {
    scrollBehavior: "auto"
  }), z.current = /* @__PURE__ */ new Date()), () => {
    yS(document.documentElement, "scrollBehavior");
  }), [
    F
  ]);
  function cn(J) {
    const pe = J ? (window.innerWidth - Ht) / window.innerWidth : 1, ve = J ? -Ht : 0;
    Q.current && window.clearTimeout(Q.current), Re(P.current, {
      transition: `transform ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      transform: ke(C) ? `scale(${pe}) translate3d(0, ${ve}px, 0)` : `scale(${pe}) translate3d(${ve}px, 0, 0)`
    }), !J && P.current && (Q.current = setTimeout(() => {
      const de = Cr(P.current, C);
      Re(P.current, {
        transition: "none",
        transform: ke(C) ? `translate3d(0, ${de}px, 0)` : `translate3d(${de}px, 0, 0)`
      });
    }, 500));
  }
  function On(J, pe) {
    if (pe < 0) return;
    const ve = (window.innerWidth - Ht) / window.innerWidth, de = ve + pe * (1 - ve), Se = -Ht + pe * Ht;
    Re(P.current, {
      transform: ke(C) ? `scale(${de}) translate3d(0, ${Se}px, 0)` : `scale(${de}) translate3d(${Se}px, 0, 0)`,
      transition: "none"
    });
  }
  function jt(J, pe) {
    const ve = ke(C) ? window.innerHeight : window.innerWidth, de = pe ? (ve - Ht) / ve : 1, Se = pe ? -Ht : 0;
    pe && Re(P.current, {
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
      !f && !J || (J ? q(!0) : Ae(!0), B(J));
    },
    open: F
  }, /* @__PURE__ */ x.createElement(Fp.Provider, {
    value: {
      activeSnapPoint: oe,
      snapPoints: o,
      setActiveSnapPoint: De,
      drawerRef: P,
      overlayRef: N,
      onOpenChange: t,
      onPress: nt,
      onRelease: kt,
      onDrag: gt,
      dismissible: f,
      shouldAnimate: G,
      handleOnly: c,
      isOpen: F,
      isDragging: te,
      shouldFade: Fe,
      closeDrawer: Ae,
      onNestedDrag: On,
      onNestedOpenChange: cn,
      onNestedRelease: jt,
      keyboardIsOpen: ae,
      modal: p,
      snapPointsOffset: Pe,
      activeSnapPointIndex: ge,
      direction: C,
      shouldScaleBackground: i,
      setBackgroundColorOnScale: s,
      noBodyStyles: S,
      container: I,
      autoFocus: H
    }
  }, n));
}
const Qp = /* @__PURE__ */ x.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: a, shouldFade: o, isOpen: i, modal: s, shouldAnimate: l } = pr(), u = Yp(t, n), f = r && r.length > 0;
  if (!s)
    return null;
  const c = x.useCallback((m) => a(m), [
    a
  ]);
  return /* @__PURE__ */ x.createElement(we.Overlay, {
    onMouseUp: c,
    ref: u,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": i && f ? "true" : "false",
    "data-vaul-snap-points-overlay": i && o ? "true" : "false",
    "data-vaul-animate": l != null && l.current ? "true" : "false",
    ...e
  });
});
Qp.displayName = "Drawer.Overlay";
const Jp = /* @__PURE__ */ x.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, a) {
  const { drawerRef: o, onPress: i, onRelease: s, onDrag: l, keyboardIsOpen: u, snapPointsOffset: f, activeSnapPointIndex: c, modal: m, isOpen: g, direction: h, snapPoints: b, container: p, handleOnly: v, shouldAnimate: y, autoFocus: S } = pr(), [C, D] = x.useState(!1), E = Yp(a, o), _ = x.useRef(null), R = x.useRef(null), k = x.useRef(!1), Y = b && b.length > 0;
  ES();
  const I = (T, W, F = 0) => {
    if (k.current) return !0;
    const B = Math.abs(T.y), L = Math.abs(T.x), q = L > B, te = [
      "bottom",
      "right"
    ].includes(W) ? 1 : -1;
    if (W === "left" || W === "right") {
      if (!(T.x * te < 0) && L >= 0 && L <= F)
        return q;
    } else if (!(T.y * te < 0) && B >= 0 && B <= F)
      return !q;
    return k.current = !0, !0;
  };
  x.useEffect(() => {
    Y && window.requestAnimationFrame(() => {
      D(!0);
    });
  }, []);
  function H(T) {
    _.current = null, k.current = !1, s(T);
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
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[c ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (T) => {
      v || (r.onPointerDown == null || r.onPointerDown.call(r, T), _.current = {
        x: T.pageX,
        y: T.pageY
      }, i(T));
    },
    onOpenAutoFocus: (T) => {
      n == null || n(T), S || T.preventDefault();
    },
    onPointerDownOutside: (T) => {
      if (e == null || e(T), !m || T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      u.current && (u.current = !1);
    },
    onFocusOutside: (T) => {
      if (!m) {
        T.preventDefault();
        return;
      }
    },
    onPointerMove: (T) => {
      if (R.current = T, v || (r.onPointerMove == null || r.onPointerMove.call(r, T), !_.current)) return;
      const W = T.pageY - _.current.y, F = T.pageX - _.current.x, B = T.pointerType === "touch" ? 10 : 2;
      I({
        x: F,
        y: W
      }, h, B) ? l(T) : (Math.abs(F) > B || Math.abs(W) > B) && (_.current = null);
    },
    onPointerUp: (T) => {
      r.onPointerUp == null || r.onPointerUp.call(r, T), _.current = null, k.current = !1, s(T);
    },
    onPointerOut: (T) => {
      r.onPointerOut == null || r.onPointerOut.call(r, T), H(R.current);
    },
    onContextMenu: (T) => {
      r.onContextMenu == null || r.onContextMenu.call(r, T), R.current && H(R.current);
    }
  });
});
Jp.displayName = "Drawer.Content";
const MS = 250, DS = 120, kS = /* @__PURE__ */ x.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: a, isDragging: o, snapPoints: i, activeSnapPoint: s, setActiveSnapPoint: l, dismissible: u, handleOnly: f, isOpen: c, onPress: m, onDrag: g } = pr(), h = x.useRef(null), b = x.useRef(!1);
  function p() {
    if (b.current) {
      S();
      return;
    }
    window.setTimeout(() => {
      v();
    }, DS);
  }
  function v() {
    if (o || e || b.current) {
      S();
      return;
    }
    if (S(), !i || i.length === 0) {
      u || a();
      return;
    }
    if (s === i[i.length - 1] && u) {
      a();
      return;
    }
    const D = i.findIndex((_) => _ === s);
    if (D === -1) return;
    const E = i[D + 1];
    l(E);
  }
  function y() {
    h.current = window.setTimeout(() => {
      b.current = !0;
    }, MS);
  }
  function S() {
    h.current && window.clearTimeout(h.current), b.current = !1;
  }
  return /* @__PURE__ */ x.createElement("div", {
    onClick: p,
    onPointerCancel: S,
    onPointerDown: (C) => {
      f && m(C), y();
    },
    onPointerMove: (C) => {
      f && g(C);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": c ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ x.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
kS.displayName = "Drawer.Handle";
function RS(e) {
  const t = pr(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ x.createElement(we.Portal, {
    container: n,
    ...r
  });
}
const Bt = {
  Root: OS,
  Content: Jp,
  Overlay: Qp,
  Trigger: we.Trigger,
  Portal: RS,
  Close: we.Close,
  Title: we.Title,
  Description: we.Description
};
function VE({ ...e }) {
  return /* @__PURE__ */ d(Bt.Root, { "data-slot": "drawer", ...e });
}
function GE({ ...e }) {
  return /* @__PURE__ */ d(Bt.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function IS({ ...e }) {
  return /* @__PURE__ */ d(Bt.Portal, { "data-slot": "drawer-portal", ...e });
}
function UE({ ...e }) {
  return /* @__PURE__ */ d(Bt.Close, { "data-slot": "drawer-close", ...e });
}
function AS({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    Bt.Overlay,
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
function KE({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(IS, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ d(AS, {}),
    /* @__PURE__ */ U(
      Bt.Content,
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
          /* @__PURE__ */ d("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function XE({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "drawer-header",
      className: w("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function QE({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "drawer-footer",
      className: w("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function JE({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    Bt.Title,
    {
      "data-slot": "drawer-title",
      className: w("text-foreground font-semibold", e),
      ...t
    }
  );
}
function ZE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    Bt.Description,
    {
      "data-slot": "drawer-description",
      className: w("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function eT({ ...e }) {
  return /* @__PURE__ */ d($e.Root, { "data-slot": "dropdown-menu", ...e });
}
function tT({
  ...e
}) {
  return /* @__PURE__ */ d($e.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function nT({
  ...e
}) {
  return /* @__PURE__ */ d($e.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function rT({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ d($e.Portal, { children: /* @__PURE__ */ d(
    $e.Content,
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
function aT({ ...e }) {
  return /* @__PURE__ */ d($e.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function oT({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ d(
    $e.Item,
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
function iT({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ U(
    $e.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ d("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d($e.ItemIndicator, { children: /* @__PURE__ */ d(or, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function sT({
  ...e
}) {
  return /* @__PURE__ */ d($e.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function lT({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    $e.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ d("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d($e.ItemIndicator, { children: /* @__PURE__ */ d(Vr, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function uT({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ d(
    $e.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: w("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...n
    }
  );
}
function cT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    $e.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: w("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function dT({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: w("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function fT({ ...e }) {
  return /* @__PURE__ */ d($e.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function mT({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ U(
    $e.SubTrigger,
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
        /* @__PURE__ */ d(Yr, { className: "ml-auto size-4" })
      ]
    }
  );
}
function pT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    $e.SubContent,
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
var zS = (e) => e.type === "checkbox", LS = (e) => e instanceof Date, Zp = (e) => e == null;
const qS = (e) => typeof e == "object";
var hr = (e) => !Zp(e) && !Array.isArray(e) && qS(e) && !LS(e), $S = (e) => hr(e) && e.target ? zS(e.target) ? e.target.checked : e.target.value : e, BS = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, jS = (e, t) => e.has(BS(t)), FS = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return hr(t) && t.hasOwnProperty("isPrototypeOf");
}, HS = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function eh(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(HS && (e instanceof Blob || r)) && (n || hr(e)))
    if (t = n ? [] : {}, !n && !FS(e))
      t = e;
    else
      for (const a in e)
        e.hasOwnProperty(a) && (t[a] = eh(e[a]));
  else
    return e;
  return t;
}
var th = (e) => Array.isArray(e) ? e.filter(Boolean) : [], cl = (e) => e === void 0, Ue = (e, t, n) => {
  if (!t || !hr(e))
    return n;
  const r = th(t.split(/[,[\].]+?/)).reduce((a, o) => Zp(a) ? a : a[o], e);
  return cl(r) || r === e ? cl(e[t]) ? n : e[t] : r;
}, Ls = (e) => typeof e == "boolean", WS = (e) => /^\w*$/.test(e), YS = (e) => th(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Qf = (e, t, n) => {
  let r = -1;
  const a = WS(t) ? [t] : YS(t), o = a.length, i = o - 1;
  for (; ++r < o; ) {
    const s = a[r];
    let l = n;
    if (r !== i) {
      const u = e[s];
      l = hr(u) || Array.isArray(u) ? u : isNaN(+a[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = l, e = e[s];
  }
};
const Jf = {
  BLUR: "blur",
  CHANGE: "change"
}, Zf = {
  all: "all"
}, nh = x.createContext(null), ca = () => x.useContext(nh), VS = (e) => {
  const { children: t, ...n } = e;
  return x.createElement(nh.Provider, { value: n }, t);
};
var GS = (e, t, n, r = !0) => {
  const a = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(a, o, {
      get: () => {
        const i = o;
        return t._proxyFormState[i] !== Zf.all && (t._proxyFormState[i] = !r || Zf.all), n && (n[i] = !0), e[i];
      }
    });
  return a;
};
function rh(e) {
  const t = ca(), { control: n = t.control, disabled: r, name: a, exact: o } = e || {}, [i, s] = x.useState(n._formState), l = x.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = x.useRef(a);
  return u.current = a, x.useEffect(() => n._subscribe({
    name: u.current,
    formState: l.current,
    exact: o,
    callback: (f) => {
      !r && s({
        ...n._formState,
        ...f
      });
    }
  }), [n, r, o]), x.useEffect(() => {
    l.current.isValid && n._setValid(!0);
  }, [n]), x.useMemo(() => GS(i, n, l.current, !1), [i, n]);
}
var US = (e) => typeof e == "string", KS = (e, t, n, r, a) => US(e) ? Ue(n, e, a) : Array.isArray(e) ? e.map((o) => Ue(n, o)) : n;
function XS(e) {
  const t = ca(), { control: n = t.control, name: r, defaultValue: a, disabled: o, exact: i } = e || {}, s = x.useRef(r), l = x.useRef(a);
  s.current = r, x.useEffect(() => n._subscribe({
    name: s.current,
    formState: {
      values: !0
    },
    exact: i,
    callback: (c) => !o && f(KS(s.current, n._names, c.values || n._formValues, !1, l.current))
  }), [n, o, i]);
  const [u, f] = x.useState(n._getWatch(r, a));
  return x.useEffect(() => n._removeUnmounted()), u;
}
function QS(e) {
  const t = ca(), { name: n, disabled: r, control: a = t.control, shouldUnregister: o } = e, i = jS(a._names.array, n), s = XS({
    control: a,
    name: n,
    defaultValue: Ue(a._formValues, n, Ue(a._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = rh({
    control: a,
    name: n,
    exact: !0
  }), u = x.useRef(e), f = x.useRef(a.register(n, {
    ...e.rules,
    value: s,
    ...Ls(e.disabled) ? { disabled: e.disabled } : {}
  })), c = x.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Ue(l.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Ue(l.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Ue(l.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Ue(l.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => Ue(l.errors, n)
    }
  }), [l, n]), m = x.useCallback((p) => f.current.onChange({
    target: {
      value: $S(p),
      name: n
    },
    type: Jf.CHANGE
  }), [n]), g = x.useCallback(() => f.current.onBlur({
    target: {
      value: Ue(a._formValues, n),
      name: n
    },
    type: Jf.BLUR
  }), [n, a._formValues]), h = x.useCallback((p) => {
    const v = Ue(a._fields, n);
    v && p && (v._f.ref = {
      focus: () => p.focus(),
      select: () => p.select(),
      setCustomValidity: (y) => p.setCustomValidity(y),
      reportValidity: () => p.reportValidity()
    });
  }, [a._fields, n]), b = x.useMemo(() => ({
    name: n,
    value: s,
    ...Ls(r) || l.disabled ? { disabled: l.disabled || r } : {},
    onChange: m,
    onBlur: g,
    ref: h
  }), [n, r, l.disabled, m, g, h, s]);
  return x.useEffect(() => {
    const p = a._options.shouldUnregister || o;
    a.register(n, {
      ...u.current.rules,
      ...Ls(u.current.disabled) ? { disabled: u.current.disabled } : {}
    });
    const v = (y, S) => {
      const C = Ue(a._fields, y);
      C && C._f && (C._f.mount = S);
    };
    if (v(n, !0), p) {
      const y = eh(Ue(a._options.defaultValues, n));
      Qf(a._defaultValues, n, y), cl(Ue(a._formValues, n)) && Qf(a._formValues, n, y);
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
    fieldState: c
  }), [b, l, c]);
}
const JS = (e) => e.render(QS(e));
function ZS({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    cg.Root,
    {
      "data-slot": "label",
      className: w(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const hT = VS, ah = M.createContext({}), gT = ({
  ...e
}) => /* @__PURE__ */ d(ah.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d(JS, { ...e }) }), da = () => {
  const e = M.useContext(ah), t = M.useContext(oh), { getFieldState: n } = ca(), r = rh({ name: e.name }), a = n(e.name, r);
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
}, oh = M.createContext({});
function vT({ className: e, ...t }) {
  const n = M.useId();
  return /* @__PURE__ */ d(oh.Provider, { value: { id: n }, children: /* @__PURE__ */ d("div", { "data-slot": "form-item", className: w("grid gap-2", e), ...t }) });
}
function bT({ className: e, ...t }) {
  const { error: n, formItemId: r } = da();
  return /* @__PURE__ */ d(
    ZS,
    {
      "data-slot": "form-label",
      "data-error": !!n,
      className: w("data-[error=true]:text-destructive", e),
      htmlFor: r,
      ...t
    }
  );
}
function yT({ ...e }) {
  const { error: t, formItemId: n, formDescriptionId: r, formMessageId: a } = da();
  return /* @__PURE__ */ d(
    Mt,
    {
      "data-slot": "form-control",
      id: n,
      "aria-describedby": t ? `${r} ${a}` : `${r}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function wT({ className: e, ...t }) {
  const { formDescriptionId: n } = da();
  return /* @__PURE__ */ d(
    "p",
    {
      "data-slot": "form-description",
      id: n,
      className: w("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function xT({ className: e, ...t }) {
  const { error: n, formMessageId: r } = da(), a = n ? String((n == null ? void 0 : n.message) ?? "") : t.children;
  return a ? /* @__PURE__ */ d(
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
function _T({ ...e }) {
  return /* @__PURE__ */ d(Or.Root, { "data-slot": "hover-card", ...e });
}
function ST({ ...e }) {
  return /* @__PURE__ */ d(Or.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function CT({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ d(Or.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ d(
    Or.Content,
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
var eC = Object.defineProperty, tC = Object.defineProperties, nC = Object.getOwnPropertyDescriptors, jr = Object.getOwnPropertySymbols, ih = Object.prototype.hasOwnProperty, sh = Object.prototype.propertyIsEnumerable, em = (e, t, n) => t in e ? eC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rC = (e, t) => {
  for (var n in t || (t = {})) ih.call(t, n) && em(e, n, t[n]);
  if (jr) for (var n of jr(t)) sh.call(t, n) && em(e, n, t[n]);
  return e;
}, aC = (e, t) => tC(e, nC(t)), oC = (e, t) => {
  var n = {};
  for (var r in e) ih.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && jr) for (var r of jr(e)) t.indexOf(r) < 0 && sh.call(e, r) && (n[r] = e[r]);
  return n;
};
function iC(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function sC(e) {
  let t = M.useRef();
  return M.useEffect(() => {
    t.current = e;
  }), t.current;
}
var lC = 18, lh = 40, uC = `${lh}px`, cC = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function dC({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let [a, o] = M.useState(!1), [i, s] = M.useState(!1), [l, u] = M.useState(!1), f = M.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && a && i, [a, i, n]), c = M.useCallback(() => {
    let m = e.current, g = t.current;
    if (!m || !g || l || n === "none") return;
    let h = m, b = h.getBoundingClientRect().left + h.offsetWidth, p = h.getBoundingClientRect().top + h.offsetHeight / 2, v = b - lC, y = p;
    document.querySelectorAll(cC).length === 0 && document.elementFromPoint(v, y) === m || (o(!0), u(!0));
  }, [e, t, l, n]);
  return M.useEffect(() => {
    let m = e.current;
    if (!m || n === "none") return;
    function g() {
      let b = window.innerWidth - m.getBoundingClientRect().right;
      s(b >= lh);
    }
    g();
    let h = setInterval(g, 1e3);
    return () => {
      clearInterval(h);
    };
  }, [e, n]), M.useEffect(() => {
    let m = r || document.activeElement === t.current;
    if (n === "none" || !m) return;
    let g = setTimeout(c, 0), h = setTimeout(c, 2e3), b = setTimeout(c, 5e3), p = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(g), clearTimeout(h), clearTimeout(b), clearTimeout(p);
    };
  }, [t, r, n, c]), { hasPWMBadge: a, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: uC };
}
var uh = M.createContext({}), ch = M.forwardRef((e, t) => {
  var n = e, { value: r, onChange: a, maxLength: o, textAlign: i = "left", pattern: s, placeholder: l, inputMode: u = "numeric", onComplete: f, pushPasswordManagerStrategy: c = "increase-width", pasteTransformer: m, containerClassName: g, noScriptCSSFallback: h = fC, render: b, children: p } = n, v = oC(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), y, S, C, D, E;
  let [_, R] = M.useState(typeof v.defaultValue == "string" ? v.defaultValue : ""), k = r ?? _, Y = sC(k), I = M.useCallback((P) => {
    a == null || a(P), R(P);
  }, [a]), H = M.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), T = M.useRef(null), W = M.useRef(null), F = M.useRef({ value: k, onChange: I, isIOS: typeof window < "u" && ((S = (y = window == null ? void 0 : window.CSS) == null ? void 0 : y.supports) == null ? void 0 : S.call(y, "-webkit-touch-callout", "none")) }), B = M.useRef({ prev: [(C = T.current) == null ? void 0 : C.selectionStart, (D = T.current) == null ? void 0 : D.selectionEnd, (E = T.current) == null ? void 0 : E.selectionDirection] });
  M.useImperativeHandle(t, () => T.current, []), M.useEffect(() => {
    let P = T.current, K = W.current;
    if (!P || !K) return;
    F.current.value !== P.value && F.current.onChange(P.value), B.current.prev = [P.selectionStart, P.selectionEnd, P.selectionDirection];
    function se() {
      if (document.activeElement !== P) {
        O(null), z(null);
        return;
      }
      let oe = P.selectionStart, ge = P.selectionEnd, De = P.selectionDirection, me = P.maxLength, Pe = P.value, je = B.current.prev, Fe = -1, ze = -1, Ye;
      if (Pe.length !== 0 && oe !== null && ge !== null) {
        let gt = oe === ge, Ae = oe === Pe.length && Pe.length < me;
        if (gt && !Ae) {
          let Le = oe;
          if (Le === 0) Fe = 0, ze = 1, Ye = "forward";
          else if (Le === me) Fe = Le - 1, ze = Le, Ye = "backward";
          else if (me > 1 && Pe.length > 1) {
            let Ct = 0;
            if (je[0] !== null && je[1] !== null) {
              Ye = Le < je[1] ? "backward" : "forward";
              let kt = je[0] === je[1] && je[0] < me;
              Ye === "backward" && !kt && (Ct = -1);
            }
            Fe = Ct + Le, ze = Ct + Le + 1;
          }
        }
        Fe !== -1 && ze !== -1 && Fe !== ze && T.current.setSelectionRange(Fe, ze, Ye);
      }
      let tt = Fe !== -1 ? Fe : oe, nt = ze !== -1 ? ze : ge, Ie = Ye ?? De;
      O(tt), z(nt), B.current.prev = [tt, nt, Ie];
    }
    if (document.addEventListener("selectionchange", se, { capture: !0 }), se(), document.activeElement === P && ie(!0), !document.getElementById("input-otp-style")) {
      let oe = document.createElement("style");
      if (oe.id = "input-otp-style", document.head.appendChild(oe), oe.sheet) {
        let ge = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        zn(oe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), zn(oe.sheet, `[data-input-otp]:autofill { ${ge} }`), zn(oe.sheet, `[data-input-otp]:-webkit-autofill { ${ge} }`), zn(oe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), zn(oe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let ce = () => {
      K && K.style.setProperty("--root-height", `${P.clientHeight}px`);
    };
    ce();
    let le = new ResizeObserver(ce);
    return le.observe(P), () => {
      document.removeEventListener("selectionchange", se, { capture: !0 }), le.disconnect();
    };
  }, []);
  let [L, q] = M.useState(!1), [te, ie] = M.useState(!1), [X, O] = M.useState(null), [N, z] = M.useState(null);
  M.useEffect(() => {
    iC(() => {
      var P, K, se, ce;
      (P = T.current) == null || P.dispatchEvent(new Event("input"));
      let le = (K = T.current) == null ? void 0 : K.selectionStart, oe = (se = T.current) == null ? void 0 : se.selectionEnd, ge = (ce = T.current) == null ? void 0 : ce.selectionDirection;
      le !== null && oe !== null && (O(le), z(oe), B.current.prev = [le, oe, ge]);
    });
  }, [k, te]), M.useEffect(() => {
    Y !== void 0 && k !== Y && Y.length < o && k.length === o && (f == null || f(k));
  }, [o, f, Y, k]);
  let A = dC({ containerRef: W, inputRef: T, pushPasswordManagerStrategy: c, isFocused: te }), $ = M.useCallback((P) => {
    let K = P.currentTarget.value.slice(0, o);
    if (K.length > 0 && H && !H.test(K)) {
      P.preventDefault();
      return;
    }
    typeof Y == "string" && K.length < Y.length && document.dispatchEvent(new Event("selectionchange")), I(K);
  }, [o, I, Y, H]), j = M.useCallback(() => {
    var P;
    if (T.current) {
      let K = Math.min(T.current.value.length, o - 1), se = T.current.value.length;
      (P = T.current) == null || P.setSelectionRange(K, se), O(K), z(se);
    }
    ie(!0);
  }, [o]), V = M.useCallback((P) => {
    var K, se;
    let ce = T.current;
    if (!m && (!F.current.isIOS || !P.clipboardData || !ce)) return;
    let le = P.clipboardData.getData("text/plain"), oe = m ? m(le) : le;
    P.preventDefault();
    let ge = (K = T.current) == null ? void 0 : K.selectionStart, De = (se = T.current) == null ? void 0 : se.selectionEnd, me = (ge !== De ? k.slice(0, ge) + oe + k.slice(De) : k.slice(0, ge) + oe + k.slice(ge)).slice(0, o);
    if (me.length > 0 && H && !H.test(me)) return;
    ce.value = me, I(me);
    let Pe = Math.min(me.length, o - 1), je = me.length;
    ce.setSelectionRange(Pe, je), O(Pe), z(je);
  }, [o, I, H, k]), Q = M.useMemo(() => ({ position: "relative", cursor: v.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [v.disabled]), ne = M.useMemo(() => ({ position: "absolute", inset: 0, width: A.willPushPWMBadge ? `calc(100% + ${A.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: A.willPushPWMBadge ? `inset(0 ${A.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [A.PWM_BADGE_SPACE_WIDTH, A.willPushPWMBadge, i]), ae = M.useMemo(() => M.createElement("input", aC(rC({ autoComplete: v.autoComplete || "one-time-code" }, v), { "data-input-otp": !0, "data-input-otp-placeholder-shown": k.length === 0 || void 0, "data-input-otp-mss": X, "data-input-otp-mse": N, inputMode: u, pattern: H == null ? void 0 : H.source, "aria-placeholder": l, style: ne, maxLength: o, value: k, ref: T, onPaste: (P) => {
    var K;
    V(P), (K = v.onPaste) == null || K.call(v, P);
  }, onChange: $, onMouseOver: (P) => {
    var K;
    q(!0), (K = v.onMouseOver) == null || K.call(v, P);
  }, onMouseLeave: (P) => {
    var K;
    q(!1), (K = v.onMouseLeave) == null || K.call(v, P);
  }, onFocus: (P) => {
    var K;
    j(), (K = v.onFocus) == null || K.call(v, P);
  }, onBlur: (P) => {
    var K;
    ie(!1), (K = v.onBlur) == null || K.call(v, P);
  } })), [$, j, V, u, ne, o, N, X, v, H == null ? void 0 : H.source, k]), G = M.useMemo(() => ({ slots: Array.from({ length: o }).map((P, K) => {
    var se;
    let ce = te && X !== null && N !== null && (X === N && K === X || K >= X && K < N), le = k[K] !== void 0 ? k[K] : null, oe = k[0] !== void 0 ? null : (se = l == null ? void 0 : l[K]) != null ? se : null;
    return { char: le, placeholderChar: oe, isActive: ce, hasFakeCaret: ce && le === null };
  }), isFocused: te, isHovering: !v.disabled && L }), [te, L, o, N, X, v.disabled, k]), Z = M.useMemo(() => b ? b(G) : M.createElement(uh.Provider, { value: G }, p), [p, G, b]);
  return M.createElement(M.Fragment, null, h !== null && M.createElement("noscript", null, M.createElement("style", null, h)), M.createElement("div", { ref: W, "data-input-otp-container": !0, style: Q, className: g }, Z, M.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, ae)));
});
ch.displayName = "Input";
function zn(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var fC = `
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
function PT({
  className: e,
  containerClassName: t,
  ...n
}) {
  return /* @__PURE__ */ d(
    ch,
    {
      "data-slot": "input-otp",
      containerClassName: w("flex items-center gap-2 has-disabled:opacity-50", t),
      className: w("disabled:cursor-not-allowed", e),
      ...n
    }
  );
}
function NT({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "input-otp-group",
      className: w("flex items-center gap-1", e),
      ...t
    }
  );
}
function ET({
  index: e,
  className: t,
  ...n
}) {
  const r = M.useContext(uh), { char: a, hasFakeCaret: o, isActive: i } = (r == null ? void 0 : r.slots[e]) ?? {};
  return /* @__PURE__ */ U(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": i,
      className: w(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm bg-input-background transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        t
      ),
      ...n,
      children: [
        a,
        o && /* @__PURE__ */ d("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ d("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function TT({ ...e }) {
  return /* @__PURE__ */ d("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ d(tg, {}) });
}
function OT({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    Be.Root,
    {
      "data-slot": "menubar",
      className: w(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function MT({ ...e }) {
  return /* @__PURE__ */ d(Be.Menu, { "data-slot": "menubar-menu", ...e });
}
function DT({ ...e }) {
  return /* @__PURE__ */ d(Be.Group, { "data-slot": "menubar-group", ...e });
}
function mC({ ...e }) {
  return /* @__PURE__ */ d(Be.Portal, { "data-slot": "menubar-portal", ...e });
}
function kT({ ...e }) {
  return /* @__PURE__ */ d(Be.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function RT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    Be.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: w(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...t
    }
  );
}
function IT({
  className: e,
  align: t = "start",
  alignOffset: n = -4,
  sideOffset: r = 8,
  ...a
}) {
  return /* @__PURE__ */ d(mC, { children: /* @__PURE__ */ d(
    Be.Content,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...a
    }
  ) });
}
function AT({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ d(
    Be.Item,
    {
      "data-slot": "menubar-item",
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
function zT({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ U(
    Be.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ d("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d(Be.ItemIndicator, { children: /* @__PURE__ */ d(or, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function LT({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    Be.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: w(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ d("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d(Be.ItemIndicator, { children: /* @__PURE__ */ d(Vr, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function qT({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ d(
    Be.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: w("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...n
    }
  );
}
function $T({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    Be.Separator,
    {
      "data-slot": "menubar-separator",
      className: w("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function BT({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: w("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function jT({ ...e }) {
  return /* @__PURE__ */ d(Be.Sub, { "data-slot": "menubar-sub", ...e });
}
function FT({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ U(
    Be.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: w(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ d(Yr, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function HT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    Be.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function WT({
  className: e,
  children: t,
  viewport: n = !0,
  ...r
}) {
  return /* @__PURE__ */ U(
    qt.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      className: w(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ d(hC, {})
      ]
    }
  );
}
function YT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    qt.List,
    {
      "data-slot": "navigation-menu-list",
      className: w("group flex flex-1 list-none items-center justify-center gap-1", e),
      ...t
    }
  );
}
function VT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    qt.Item,
    {
      "data-slot": "navigation-menu-item",
      className: w("relative", e),
      ...t
    }
  );
}
const pC = zt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function GT({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    qt.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: w(pC(), "group", e),
      ...n,
      children: [
        t,
        " ",
        /* @__PURE__ */ d(
          Wr,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function UT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    qt.Content,
    {
      "data-slot": "navigation-menu-content",
      className: w(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function hC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d("div", { className: w("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ d(
    qt.Viewport,
    {
      "data-slot": "navigation-menu-viewport",
      className: w(
        "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
        e
      ),
      ...t
    }
  ) });
}
function KT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    qt.Link,
    {
      "data-slot": "navigation-menu-link",
      className: w(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function XT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    qt.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: w(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function QT({ ...e }) {
  return /* @__PURE__ */ d(Gn.Root, { "data-slot": "popover", ...e });
}
function JT({ ...e }) {
  return /* @__PURE__ */ d(Gn.Trigger, { "data-slot": "popover-trigger", ...e });
}
function ZT({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ d(Gn.Portal, { children: /* @__PURE__ */ d(
    Gn.Content,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: w(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
function eO({ ...e }) {
  return /* @__PURE__ */ d(Gn.Anchor, { "data-slot": "popover-anchor", ...e });
}
function tO({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ d(
    au.Root,
    {
      "data-slot": "progress",
      className: w("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", e),
      ...n,
      children: /* @__PURE__ */ d(
        au.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function nO({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    js.Root,
    {
      "data-slot": "radio-group",
      className: w("grid gap-3", e),
      ...t
    }
  );
}
function rO({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    js.Item,
    {
      "data-slot": "radio-group-item",
      className: w(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d(
        js.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ d(Vr, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
const {
  createElement: Tn,
  createContext: gC,
  forwardRef: dh,
  useCallback: Ge,
  useContext: fh,
  useEffect: Ut,
  useImperativeHandle: mh,
  useLayoutEffect: vC,
  useMemo: bC,
  useRef: Xe,
  useState: wn
} = M, tm = M[`useId${Math.random()}`.slice(0, 5)], yC = vC, fa = gC(null);
fa.displayName = "PanelGroupContext";
const Kt = yC, wC = typeof tm == "function" ? tm : () => null;
let xC = 0;
function Ql(e = null) {
  const t = wC(), n = Xe(e || t || null);
  return n.current === null && (n.current = "" + xC++), e ?? n.current;
}
function ph({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: a,
  forwardedRef: o,
  id: i,
  maxSize: s,
  minSize: l,
  onCollapse: u,
  onExpand: f,
  onResize: c,
  order: m,
  style: g,
  tagName: h = "div",
  ...b
}) {
  const p = fh(fa);
  if (p === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: v,
    expandPanel: y,
    getPanelSize: S,
    getPanelStyle: C,
    groupId: D,
    isPanelCollapsed: E,
    reevaluatePanelConstraints: _,
    registerPanel: R,
    resizePanel: k,
    unregisterPanel: Y
  } = p, I = Ql(i), H = Xe({
    callbacks: {
      onCollapse: u,
      onExpand: f,
      onResize: c
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
  Xe({
    didLogMissingDefaultSizeWarning: !1
  }), Kt(() => {
    const {
      callbacks: W,
      constraints: F
    } = H.current, B = {
      ...F
    };
    H.current.id = I, H.current.idIsFromProps = i !== void 0, H.current.order = m, W.onCollapse = u, W.onExpand = f, W.onResize = c, F.collapsedSize = n, F.collapsible = r, F.defaultSize = a, F.maxSize = s, F.minSize = l, (B.collapsedSize !== F.collapsedSize || B.collapsible !== F.collapsible || B.maxSize !== F.maxSize || B.minSize !== F.minSize) && _(H.current, B);
  }), Kt(() => {
    const W = H.current;
    return R(W), () => {
      Y(W);
    };
  }, [m, I, R, Y]), mh(o, () => ({
    collapse: () => {
      v(H.current);
    },
    expand: (W) => {
      y(H.current, W);
    },
    getId() {
      return I;
    },
    getSize() {
      return S(H.current);
    },
    isCollapsed() {
      return E(H.current);
    },
    isExpanded() {
      return !E(H.current);
    },
    resize: (W) => {
      k(H.current, W);
    }
  }), [v, y, S, E, I, k]);
  const T = C(H.current, a);
  return Tn(h, {
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
const hh = dh((e, t) => Tn(ph, {
  ...e,
  forwardedRef: t
}));
ph.displayName = "Panel";
hh.displayName = "forwardRef(Panel)";
let dl = null, Gt = null;
function _C(e, t) {
  if (t) {
    const n = (t & wh) !== 0, r = (t & xh) !== 0, a = (t & _h) !== 0, o = (t & Sh) !== 0;
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
function SC() {
  Gt !== null && (document.head.removeChild(Gt), dl = null, Gt = null);
}
function qs(e, t) {
  const n = _C(e, t);
  dl !== n && (dl = n, Gt === null && (Gt = document.createElement("style"), document.head.appendChild(Gt)), Gt.innerHTML = `*{cursor: ${n}!important;}`);
}
function gh(e) {
  return e.type === "keydown";
}
function vh(e) {
  return e.type.startsWith("pointer");
}
function bh(e) {
  return e.type.startsWith("mouse");
}
function ma(e) {
  if (vh(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (bh(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function CC() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function PC(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function NC(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: am(e),
    b: am(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  ue(r, "Stacking order can only be calculated for elements with a common ancestor");
  const a = {
    a: rm(nm(n.a)),
    b: rm(nm(n.b))
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
const EC = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function TC(e) {
  var t;
  const n = getComputedStyle((t = yh(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function OC(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || TC(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || EC.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function nm(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (ue(n, "Missing node"), OC(n)) return n;
  }
  return null;
}
function rm(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function am(e) {
  const t = [];
  for (; e; )
    t.push(e), e = yh(e);
  return t;
}
function yh(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const wh = 1, xh = 2, _h = 4, Sh = 8, MC = CC() === "coarse";
let dt = [], xn = !1, It = /* @__PURE__ */ new Map(), pa = /* @__PURE__ */ new Map();
const rr = /* @__PURE__ */ new Set();
function DC(e, t, n, r, a) {
  var o;
  const {
    ownerDocument: i
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: a
  }, l = (o = It.get(i)) !== null && o !== void 0 ? o : 0;
  return It.set(i, l + 1), rr.add(s), Fr(), function() {
    var f;
    pa.delete(e), rr.delete(s);
    const c = (f = It.get(i)) !== null && f !== void 0 ? f : 1;
    if (It.set(i, c - 1), Fr(), c === 1 && It.delete(i), dt.includes(s)) {
      const m = dt.indexOf(s);
      m >= 0 && dt.splice(m, 1), Zl(), a("up", !0, null);
    }
  };
}
function om(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ma(e);
  xn = !0, Jl({
    target: t,
    x: n,
    y: r
  }), Fr(), dt.length > 0 && (Hr("down", e), e.preventDefault(), e.stopPropagation());
}
function Ln(e) {
  const {
    x: t,
    y: n
  } = ma(e);
  if (xn && e.buttons === 0 && (xn = !1, Hr("up", e)), !xn) {
    const {
      target: r
    } = e;
    Jl({
      target: r,
      x: t,
      y: n
    });
  }
  Hr("move", e), Zl(), dt.length > 0 && e.preventDefault();
}
function fn(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ma(e);
  pa.clear(), xn = !1, dt.length > 0 && e.preventDefault(), Hr("up", e), Jl({
    target: t,
    x: n,
    y: r
  }), Zl(), Fr();
}
function Jl({
  target: e,
  x: t,
  y: n
}) {
  dt.splice(0);
  let r = null;
  (e instanceof HTMLElement || e instanceof SVGElement) && (r = e), rr.forEach((a) => {
    const {
      element: o,
      hitAreaMargins: i
    } = a, s = o.getBoundingClientRect(), {
      bottom: l,
      left: u,
      right: f,
      top: c
    } = s, m = MC ? i.coarse : i.fine;
    if (t >= u - m && t <= f + m && n >= c - m && n <= l + m) {
      if (r !== null && document.contains(r) && o !== r && !o.contains(r) && !r.contains(o) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      NC(r, o) > 0) {
        let h = r, b = !1;
        for (; h && !h.contains(o); ) {
          if (PC(h.getBoundingClientRect(), s)) {
            b = !0;
            break;
          }
          h = h.parentElement;
        }
        if (b)
          return;
      }
      dt.push(a);
    }
  });
}
function $s(e, t) {
  pa.set(e, t);
}
function Zl() {
  let e = !1, t = !1;
  dt.forEach((r) => {
    const {
      direction: a
    } = r;
    a === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  pa.forEach((r) => {
    n |= r;
  }), e && t ? qs("intersection", n) : e ? qs("horizontal", n) : t ? qs("vertical", n) : SC();
}
function Fr() {
  It.forEach((e, t) => {
    const {
      body: n
    } = t;
    n.removeEventListener("contextmenu", fn), n.removeEventListener("pointerdown", om), n.removeEventListener("pointerleave", Ln), n.removeEventListener("pointermove", Ln);
  }), window.removeEventListener("pointerup", fn), window.removeEventListener("pointercancel", fn), rr.size > 0 && (xn ? (dt.length > 0 && It.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("contextmenu", fn), n.addEventListener("pointerleave", Ln), n.addEventListener("pointermove", Ln));
  }), window.addEventListener("pointerup", fn), window.addEventListener("pointercancel", fn)) : It.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("pointerdown", om, {
      capture: !0
    }), n.addEventListener("pointermove", Ln));
  }));
}
function Hr(e, t) {
  rr.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, a = dt.includes(n);
    r(e, a, t);
  });
}
function kC() {
  const [e, t] = wn(0);
  return Ge(() => t((n) => n + 1), []);
}
function ue(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
const eu = 10;
function tn(e, t, n = eu) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function Tt(e, t, n = eu) {
  return tn(e, t, n) === 0;
}
function Ze(e, t, n) {
  return tn(e, t, n) === 0;
}
function RC(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const a = e[r], o = t[r];
    if (!Ze(a, o, n))
      return !1;
  }
  return !0;
}
function vn({
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
  if (tn(n, s) < 0)
    if (o) {
      const l = (a + s) / 2;
      tn(n, l) < 0 ? n = a : n = s;
    } else
      n = s;
  return n = Math.min(i, n), n = parseFloat(n.toFixed(eu)), n;
}
function jn({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: a,
  trigger: o
}) {
  if (Ze(e, 0))
    return t;
  const i = [...t], [s, l] = r;
  ue(s != null, "Invalid first pivot index"), ue(l != null, "Invalid second pivot index");
  let u = 0;
  if (o === "keyboard") {
    {
      const c = e < 0 ? l : s, m = n[c];
      ue(m, `Panel constraints not found for index ${c}`);
      const {
        collapsedSize: g = 0,
        collapsible: h,
        minSize: b = 0
      } = m;
      if (h) {
        const p = t[c];
        if (ue(p != null, `Previous layout not found for panel index ${c}`), Ze(p, g)) {
          const v = b - p;
          tn(v, Math.abs(e)) > 0 && (e = e < 0 ? 0 - v : v);
        }
      }
    }
    {
      const c = e < 0 ? s : l, m = n[c];
      ue(m, `No panel constraints found for index ${c}`);
      const {
        collapsedSize: g = 0,
        collapsible: h,
        minSize: b = 0
      } = m;
      if (h) {
        const p = t[c];
        if (ue(p != null, `Previous layout not found for panel index ${c}`), Ze(p, b)) {
          const v = p - g;
          tn(v, Math.abs(e)) > 0 && (e = e < 0 ? 0 - v : v);
        }
      }
    }
  }
  {
    const c = e < 0 ? 1 : -1;
    let m = e < 0 ? l : s, g = 0;
    for (; ; ) {
      const b = t[m];
      ue(b != null, `Previous layout not found for panel index ${m}`);
      const v = vn({
        panelConstraints: n,
        panelIndex: m,
        size: 100
      }) - b;
      if (g += v, m += c, m < 0 || m >= n.length)
        break;
    }
    const h = Math.min(Math.abs(e), Math.abs(g));
    e = e < 0 ? 0 - h : h;
  }
  {
    let m = e < 0 ? s : l;
    for (; m >= 0 && m < n.length; ) {
      const g = Math.abs(e) - Math.abs(u), h = t[m];
      ue(h != null, `Previous layout not found for panel index ${m}`);
      const b = h - g, p = vn({
        panelConstraints: n,
        panelIndex: m,
        size: b
      });
      if (!Ze(h, p) && (u += h - p, i[m] = p, u.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? m-- : m++;
    }
  }
  if (RC(a, i))
    return a;
  {
    const c = e < 0 ? l : s, m = t[c];
    ue(m != null, `Previous layout not found for panel index ${c}`);
    const g = m + u, h = vn({
      panelConstraints: n,
      panelIndex: c,
      size: g
    });
    if (i[c] = h, !Ze(h, g)) {
      let b = g - h, v = e < 0 ? l : s;
      for (; v >= 0 && v < n.length; ) {
        const y = i[v];
        ue(y != null, `Previous layout not found for panel index ${v}`);
        const S = y + b, C = vn({
          panelConstraints: n,
          panelIndex: v,
          size: S
        });
        if (Ze(y, C) || (b -= C - y, i[v] = C), Ze(b, 0))
          break;
        e > 0 ? v-- : v++;
      }
    }
  }
  const f = i.reduce((c, m) => m + c, 0);
  return Ze(f, 100) ? i : a;
}
function IC({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, a = 100, o = 0, i = 0;
  const s = n[0];
  ue(s != null, "No pivot index found"), t.forEach((c, m) => {
    const {
      constraints: g
    } = c, {
      maxSize: h = 100,
      minSize: b = 0
    } = g;
    m === s ? (r = b, a = h) : (o += b, i += h);
  });
  const l = Math.min(a, 100 - o), u = Math.max(r, 100 - i), f = e[s];
  return {
    valueMax: l,
    valueMin: u,
    valueNow: f
  };
}
function ar(e, t = document) {
  return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`));
}
function Ch(e, t, n = document) {
  const a = ar(e, n).findIndex((o) => o.getAttribute("data-panel-resize-handle-id") === t);
  return a ?? null;
}
function Ph(e, t, n) {
  const r = Ch(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function Nh(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function ha(e, t = document) {
  const n = t.querySelector(`[data-panel-resize-handle-id="${e}"]`);
  return n || null;
}
function AC(e, t, n, r = document) {
  var a, o, i, s;
  const l = ha(t, r), u = ar(e, r), f = l ? u.indexOf(l) : -1, c = (a = (o = n[f]) === null || o === void 0 ? void 0 : o.id) !== null && a !== void 0 ? a : null, m = (i = (s = n[f + 1]) === null || s === void 0 ? void 0 : s.id) !== null && i !== void 0 ? i : null;
  return [c, m];
}
function zC({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: a,
  panelGroupElement: o,
  setLayout: i
}) {
  Xe({
    didWarnAboutMissingResizeHandle: !1
  }), Kt(() => {
    if (!o)
      return;
    const s = ar(n, o);
    for (let l = 0; l < a.length - 1; l++) {
      const {
        valueMax: u,
        valueMin: f,
        valueNow: c
      } = IC({
        layout: r,
        panelsArray: a,
        pivotIndices: [l, l + 1]
      }), m = s[l];
      if (m != null) {
        const g = a[l];
        ue(g, `No panel data found for index "${l}"`), m.setAttribute("aria-controls", g.id), m.setAttribute("aria-valuemax", "" + Math.round(u)), m.setAttribute("aria-valuemin", "" + Math.round(f)), m.setAttribute("aria-valuenow", c != null ? "" + Math.round(c) : "");
      }
    }
    return () => {
      s.forEach((l, u) => {
        l.removeAttribute("aria-controls"), l.removeAttribute("aria-valuemax"), l.removeAttribute("aria-valuemin"), l.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, a, o]), Ut(() => {
    if (!o)
      return;
    const s = t.current;
    ue(s, "Eager values not found");
    const {
      panelDataArray: l
    } = s, u = Nh(n, o);
    ue(u != null, `No group found for id "${n}"`);
    const f = ar(n, o);
    ue(f, `No resize handles found for group id "${n}"`);
    const c = f.map((m) => {
      const g = m.getAttribute("data-panel-resize-handle-id");
      ue(g, "Resize handle element has no handle id attribute");
      const [h, b] = AC(n, g, l, o);
      if (h == null || b == null)
        return () => {
        };
      const p = (v) => {
        if (!v.defaultPrevented)
          switch (v.key) {
            case "Enter": {
              v.preventDefault();
              const y = l.findIndex((S) => S.id === h);
              if (y >= 0) {
                const S = l[y];
                ue(S, `No panel data found for index ${y}`);
                const C = r[y], {
                  collapsedSize: D = 0,
                  collapsible: E,
                  minSize: _ = 0
                } = S.constraints;
                if (C != null && E) {
                  const R = jn({
                    delta: Ze(C, D) ? _ - D : D - C,
                    initialLayout: r,
                    panelConstraints: l.map((k) => k.constraints),
                    pivotIndices: Ph(n, g, o),
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
      c.forEach((m) => m());
    };
  }, [o, e, t, n, r, a, i]);
}
function im(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Eh(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: a
  } = ma(t);
  return n ? r : a;
}
function LC(e, t, n, r, a) {
  const o = n === "horizontal", i = ha(t, a);
  ue(i, `No resize handle element found for id "${t}"`);
  const s = i.getAttribute("data-panel-group-id");
  ue(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: l
  } = r;
  const u = Eh(n, e), f = Nh(s, a);
  ue(f, `No group element found for id "${s}"`);
  const c = f.getBoundingClientRect(), m = o ? c.width : c.height;
  return (u - l) / m * 100;
}
function qC(e, t, n, r, a, o) {
  if (gh(e)) {
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
    return r == null ? 0 : LC(e, t, n, r, o);
}
function $C({
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
    const l = e.length - r, u = a / l;
    r++, t[o] = u, a -= u;
  }
  return t;
}
function mn(e, t, n) {
  t.forEach((r, a) => {
    const o = e[a];
    ue(o, `Panel data not found for index ${a}`);
    const {
      callbacks: i,
      constraints: s,
      id: l
    } = o, {
      collapsedSize: u = 0,
      collapsible: f
    } = s, c = n[l];
    if (c == null || r !== c) {
      n[l] = r;
      const {
        onCollapse: m,
        onExpand: g,
        onResize: h
      } = i;
      h && h(r, c), f && (m || g) && (g && (c == null || Tt(c, u)) && !Tt(r, u) && g(), m && (c == null || !Tt(c, u)) && Tt(r, u) && m());
    }
  });
}
function Pr(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function BC({
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
function jC(e, t = 10) {
  let n = null;
  return (...a) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...a);
    }, t);
  };
}
function sm(e) {
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
function Th(e) {
  return `react-resizable-panels:${e}`;
}
function Oh(e) {
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
function Mh(e, t) {
  try {
    const n = Th(e), r = t.getItem(n);
    if (r) {
      const a = JSON.parse(r);
      if (typeof a == "object" && a != null)
        return a;
    }
  } catch {
  }
  return null;
}
function FC(e, t, n) {
  var r, a;
  const o = (r = Mh(e, n)) !== null && r !== void 0 ? r : {}, i = Oh(t);
  return (a = o[i]) !== null && a !== void 0 ? a : null;
}
function HC(e, t, n, r, a) {
  var o;
  const i = Th(e), s = Oh(t), l = (o = Mh(e, a)) !== null && o !== void 0 ? o : {};
  l[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    a.setItem(i, JSON.stringify(l));
  } catch (u) {
    console.error(u);
  }
}
function lm({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((o, i) => o + i, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((o) => `${o}%`).join(", ")}`);
  if (!Ze(r, 100) && n.length > 0)
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
    const s = vn({
      panelConstraints: t,
      panelIndex: o,
      size: i
    });
    i != s && (a += i - s, n[o] = s);
  }
  if (!Ze(a, 0))
    for (let o = 0; o < t.length; o++) {
      const i = n[o];
      ue(i != null, `No layout data found for index ${o}`);
      const s = i + a, l = vn({
        panelConstraints: t,
        panelIndex: o,
        size: s
      });
      if (i !== l && (a -= l - i, n[o] = l, Ze(a, 0)))
        break;
    }
  return n;
}
const WC = 100, Fn = {
  getItem: (e) => (sm(Fn), Fn.getItem(e)),
  setItem: (e, t) => {
    sm(Fn), Fn.setItem(e, t);
  }
}, um = {};
function Dh({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: a,
  id: o = null,
  onLayout: i = null,
  keyboardResizeBy: s = null,
  storage: l = Fn,
  style: u,
  tagName: f = "div",
  ...c
}) {
  const m = Ql(o), g = Xe(null), [h, b] = wn(null), [p, v] = wn([]), y = kC(), S = Xe({}), C = Xe(/* @__PURE__ */ new Map()), D = Xe(0), E = Xe({
    autoSaveId: e,
    direction: r,
    dragState: h,
    id: m,
    keyboardResizeBy: s,
    onLayout: i,
    storage: l
  }), _ = Xe({
    layout: p,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  Xe({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), mh(a, () => ({
    getId: () => E.current.id,
    getLayout: () => {
      const {
        layout: N
      } = _.current;
      return N;
    },
    setLayout: (N) => {
      const {
        onLayout: z
      } = E.current, {
        layout: A,
        panelDataArray: $
      } = _.current, j = lm({
        layout: N,
        panelConstraints: $.map((V) => V.constraints)
      });
      im(A, j) || (v(j), _.current.layout = j, z && z(j), mn($, j, S.current));
    }
  }), []), Kt(() => {
    E.current.autoSaveId = e, E.current.direction = r, E.current.dragState = h, E.current.id = m, E.current.onLayout = i, E.current.storage = l;
  }), zC({
    committedValuesRef: E,
    eagerValuesRef: _,
    groupId: m,
    layout: p,
    panelDataArray: _.current.panelDataArray,
    setLayout: v,
    panelGroupElement: g.current
  }), Ut(() => {
    const {
      panelDataArray: N
    } = _.current;
    if (e) {
      if (p.length === 0 || p.length !== N.length)
        return;
      let z = um[e];
      z == null && (z = jC(HC, WC), um[e] = z);
      const A = [...N], $ = new Map(C.current);
      z(e, A, $, p, l);
    }
  }, [e, p, l]), Ut(() => {
  });
  const R = Ge((N) => {
    const {
      onLayout: z
    } = E.current, {
      layout: A,
      panelDataArray: $
    } = _.current;
    if (N.constraints.collapsible) {
      const j = $.map((ae) => ae.constraints), {
        collapsedSize: V = 0,
        panelSize: Q,
        pivotIndices: ne
      } = Wt($, N, A);
      if (ue(Q != null, `Panel size not found for panel "${N.id}"`), !Tt(Q, V)) {
        C.current.set(N.id, Q);
        const G = gn($, N) === $.length - 1 ? Q - V : V - Q, Z = jn({
          delta: G,
          initialLayout: A,
          panelConstraints: j,
          pivotIndices: ne,
          prevLayout: A,
          trigger: "imperative-api"
        });
        Pr(A, Z) || (v(Z), _.current.layout = Z, z && z(Z), mn($, Z, S.current));
      }
    }
  }, []), k = Ge((N, z) => {
    const {
      onLayout: A
    } = E.current, {
      layout: $,
      panelDataArray: j
    } = _.current;
    if (N.constraints.collapsible) {
      const V = j.map((P) => P.constraints), {
        collapsedSize: Q = 0,
        panelSize: ne = 0,
        minSize: ae = 0,
        pivotIndices: G
      } = Wt(j, N, $), Z = z ?? ae;
      if (Tt(ne, Q)) {
        const P = C.current.get(N.id), K = P != null && P >= Z ? P : Z, ce = gn(j, N) === j.length - 1 ? ne - K : K - ne, le = jn({
          delta: ce,
          initialLayout: $,
          panelConstraints: V,
          pivotIndices: G,
          prevLayout: $,
          trigger: "imperative-api"
        });
        Pr($, le) || (v(le), _.current.layout = le, A && A(le), mn(j, le, S.current));
      }
    }
  }, []), Y = Ge((N) => {
    const {
      layout: z,
      panelDataArray: A
    } = _.current, {
      panelSize: $
    } = Wt(A, N, z);
    return ue($ != null, `Panel size not found for panel "${N.id}"`), $;
  }, []), I = Ge((N, z) => {
    const {
      panelDataArray: A
    } = _.current, $ = gn(A, N);
    return BC({
      defaultSize: z,
      dragState: h,
      layout: p,
      panelData: A,
      panelIndex: $
    });
  }, [h, p]), H = Ge((N) => {
    const {
      layout: z,
      panelDataArray: A
    } = _.current, {
      collapsedSize: $ = 0,
      collapsible: j,
      panelSize: V
    } = Wt(A, N, z);
    return ue(V != null, `Panel size not found for panel "${N.id}"`), j === !0 && Tt(V, $);
  }, []), T = Ge((N) => {
    const {
      layout: z,
      panelDataArray: A
    } = _.current, {
      collapsedSize: $ = 0,
      collapsible: j,
      panelSize: V
    } = Wt(A, N, z);
    return ue(V != null, `Panel size not found for panel "${N.id}"`), !j || tn(V, $) > 0;
  }, []), W = Ge((N) => {
    const {
      panelDataArray: z
    } = _.current;
    z.push(N), z.sort((A, $) => {
      const j = A.order, V = $.order;
      return j == null && V == null ? 0 : j == null ? -1 : V == null ? 1 : j - V;
    }), _.current.panelDataArrayChanged = !0, y();
  }, [y]);
  Kt(() => {
    if (_.current.panelDataArrayChanged) {
      _.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: N,
        onLayout: z,
        storage: A
      } = E.current, {
        layout: $,
        panelDataArray: j
      } = _.current;
      let V = null;
      if (N) {
        const ne = FC(N, j, A);
        ne && (C.current = new Map(Object.entries(ne.expandToSizes)), V = ne.layout);
      }
      V == null && (V = $C({
        panelDataArray: j
      }));
      const Q = lm({
        layout: V,
        panelConstraints: j.map((ne) => ne.constraints)
      });
      im($, Q) || (v(Q), _.current.layout = Q, z && z(Q), mn(j, Q, S.current));
    }
  }), Kt(() => {
    const N = _.current;
    return () => {
      N.layout = [];
    };
  }, []);
  const F = Ge((N) => {
    let z = !1;
    const A = g.current;
    return A && window.getComputedStyle(A, null).getPropertyValue("direction") === "rtl" && (z = !0), function(j) {
      j.preventDefault();
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
        panelDataArray: K
      } = _.current, {
        initialLayout: se
      } = ne ?? {}, ce = Ph(ae, N, V);
      let le = qC(j, N, Q, ne, G, V);
      const oe = Q === "horizontal";
      oe && z && (le = -le);
      const ge = K.map((Pe) => Pe.constraints), De = jn({
        delta: le,
        initialLayout: se ?? P,
        panelConstraints: ge,
        pivotIndices: ce,
        prevLayout: P,
        trigger: gh(j) ? "keyboard" : "mouse-or-touch"
      }), me = !Pr(P, De);
      (vh(j) || bh(j)) && D.current != le && (D.current = le, !me && le !== 0 ? oe ? $s(N, le < 0 ? wh : xh) : $s(N, le < 0 ? _h : Sh) : $s(N, 0)), me && (v(De), _.current.layout = De, Z && Z(De), mn(K, De, S.current));
    };
  }, []), B = Ge((N, z) => {
    const {
      onLayout: A
    } = E.current, {
      layout: $,
      panelDataArray: j
    } = _.current, V = j.map((P) => P.constraints), {
      panelSize: Q,
      pivotIndices: ne
    } = Wt(j, N, $);
    ue(Q != null, `Panel size not found for panel "${N.id}"`);
    const G = gn(j, N) === j.length - 1 ? Q - z : z - Q, Z = jn({
      delta: G,
      initialLayout: $,
      panelConstraints: V,
      pivotIndices: ne,
      prevLayout: $,
      trigger: "imperative-api"
    });
    Pr($, Z) || (v(Z), _.current.layout = Z, A && A(Z), mn(j, Z, S.current));
  }, []), L = Ge((N, z) => {
    const {
      layout: A,
      panelDataArray: $
    } = _.current, {
      collapsedSize: j = 0,
      collapsible: V
    } = z, {
      collapsedSize: Q = 0,
      collapsible: ne,
      maxSize: ae = 100,
      minSize: G = 0
    } = N.constraints, {
      panelSize: Z
    } = Wt($, N, A);
    Z != null && (V && ne && Tt(Z, j) ? Tt(j, Q) || B(N, Q) : Z < G ? B(N, G) : Z > ae && B(N, ae));
  }, [B]), q = Ge((N, z) => {
    const {
      direction: A
    } = E.current, {
      layout: $
    } = _.current;
    if (!g.current)
      return;
    const j = ha(N, g.current);
    ue(j, `Drag handle element not found for id "${N}"`);
    const V = Eh(A, z);
    b({
      dragHandleId: N,
      dragHandleRect: j.getBoundingClientRect(),
      initialCursorPosition: V,
      initialLayout: $
    });
  }, []), te = Ge(() => {
    b(null);
  }, []), ie = Ge((N) => {
    const {
      panelDataArray: z
    } = _.current, A = gn(z, N);
    A >= 0 && (z.splice(A, 1), delete S.current[N.id], _.current.panelDataArrayChanged = !0, y());
  }, [y]), X = bC(() => ({
    collapsePanel: R,
    direction: r,
    dragState: h,
    expandPanel: k,
    getPanelSize: Y,
    getPanelStyle: I,
    groupId: m,
    isPanelCollapsed: H,
    isPanelExpanded: T,
    reevaluatePanelConstraints: L,
    registerPanel: W,
    registerResizeHandle: F,
    resizePanel: B,
    startDragging: q,
    stopDragging: te,
    unregisterPanel: ie,
    panelGroupElement: g.current
  }), [R, h, r, k, Y, I, m, H, T, L, W, F, B, q, te, ie]), O = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return Tn(fa.Provider, {
    value: X
  }, Tn(f, {
    ...c,
    children: t,
    className: n,
    id: o,
    ref: g,
    style: {
      ...O,
      ...u
    },
    // CSS selectors
    "data-panel-group": "",
    "data-panel-group-direction": r,
    "data-panel-group-id": m
  }));
}
const kh = dh((e, t) => Tn(Dh, {
  ...e,
  forwardedRef: t
}));
Dh.displayName = "PanelGroup";
kh.displayName = "forwardRef(PanelGroup)";
function gn(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function Wt(e, t, n) {
  const r = gn(e, t), o = r === e.length - 1 ? [r - 1, r] : [r, r + 1], i = n[r];
  return {
    ...t.constraints,
    panelSize: i,
    pivotIndices: o
  };
}
function YC({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  Ut(() => {
    if (e || n == null || r == null)
      return;
    const a = ha(t, r);
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
            const l = ar(s, r), u = Ch(s, t, r);
            ue(u !== null, `No resize element found for id "${t}"`);
            const f = i.shiftKey ? u > 0 ? u - 1 : l.length - 1 : u + 1 < l.length ? u + 1 : 0;
            l[f].focus();
            break;
          }
        }
    };
    return a.addEventListener("keydown", o), () => {
      a.removeEventListener("keydown", o);
    };
  }, [r, e, t, n]);
}
function Rh({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: a,
  onBlur: o,
  onDragging: i,
  onFocus: s,
  style: l = {},
  tabIndex: u = 0,
  tagName: f = "div",
  ...c
}) {
  var m, g;
  const h = Xe(null), b = Xe({
    onDragging: i
  });
  Ut(() => {
    b.current.onDragging = i;
  });
  const p = fh(fa);
  if (p === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: v,
    groupId: y,
    registerResizeHandle: S,
    startDragging: C,
    stopDragging: D,
    panelGroupElement: E
  } = p, _ = Ql(a), [R, k] = wn("inactive"), [Y, I] = wn(!1), [H, T] = wn(null), W = Xe({
    state: R
  });
  Kt(() => {
    W.current.state = R;
  }), Ut(() => {
    if (n)
      T(null);
    else {
      const q = S(_);
      T(() => q);
    }
  }, [n, _, S]);
  const F = (m = r == null ? void 0 : r.coarse) !== null && m !== void 0 ? m : 15, B = (g = r == null ? void 0 : r.fine) !== null && g !== void 0 ? g : 5;
  return Ut(() => {
    if (n || H == null)
      return;
    const q = h.current;
    return ue(q, "Element ref not attached"), DC(_, q, v, {
      coarse: F,
      fine: B
    }, (ie, X, O) => {
      if (X)
        switch (ie) {
          case "down": {
            k("drag"), ue(O, 'Expected event to be defined for "down" action'), C(_, O);
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
            N !== "drag" && k("hover"), ue(O, 'Expected event to be defined for "move" action'), H(O);
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
  }, [F, v, n, B, S, _, H, C, D]), YC({
    disabled: n,
    handleId: _,
    resizeHandler: H,
    panelGroupElement: E
  }), Tn(f, {
    ...c,
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
    tabIndex: u,
    // CSS selectors
    "data-panel-group-direction": v,
    "data-panel-group-id": y,
    "data-resize-handle": "",
    "data-resize-handle-active": R === "drag" ? "pointer" : Y ? "keyboard" : void 0,
    "data-resize-handle-state": R,
    "data-panel-resize-handle-enabled": !n,
    "data-panel-resize-handle-id": _
  });
}
Rh.displayName = "PanelResizeHandle";
function aO({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    kh,
    {
      "data-slot": "resizable-panel-group",
      className: w("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", e),
      ...t
    }
  );
}
function oO({ ...e }) {
  return /* @__PURE__ */ d(hh, { "data-slot": "resizable-panel", ...e });
}
function iO({
  withHandle: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ d(
    Rh,
    {
      "data-slot": "resizable-handle",
      className: w(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        t
      ),
      ...n,
      children: e && /* @__PURE__ */ d("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ d(ng, { className: "size-2.5" }) })
    }
  );
}
function sO({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    Hn.Root,
    {
      "data-slot": "scroll-area",
      className: w("relative", e),
      ...n,
      children: [
        /* @__PURE__ */ d(
          Hn.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ d(VC, {}),
        /* @__PURE__ */ d(Hn.Corner, {})
      ]
    }
  );
}
function VC({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ d(
    Hn.ScrollAreaScrollbar,
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
      children: /* @__PURE__ */ d(
        Hn.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function GC({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...r
}) {
  return /* @__PURE__ */ d(
    dg.Root,
    {
      "data-slot": "separator-root",
      decorative: n,
      orientation: t,
      className: w(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...r
    }
  );
}
function UC({ ...e }) {
  return /* @__PURE__ */ d(we.Root, { "data-slot": "sheet", ...e });
}
function lO({ ...e }) {
  return /* @__PURE__ */ d(we.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function uO({ ...e }) {
  return /* @__PURE__ */ d(we.Close, { "data-slot": "sheet-close", ...e });
}
function KC({ ...e }) {
  return /* @__PURE__ */ d(we.Portal, { "data-slot": "sheet-portal", ...e });
}
function XC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    we.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: w(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function QC({
  className: e,
  children: t,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ U(KC, { children: [
    /* @__PURE__ */ d(XC, {}),
    /* @__PURE__ */ U(
      we.Content,
      {
        "data-slot": "sheet-content",
        className: w(
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
          /* @__PURE__ */ U(we.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ d(hm, { className: "size-4" }),
            /* @__PURE__ */ d("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function JC({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "sheet-header",
      className: w("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function cO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "sheet-footer",
      className: w("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function ZC({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    we.Title,
    {
      "data-slot": "sheet-title",
      className: w("text-foreground font-semibold", e),
      ...t
    }
  );
}
function eP({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    we.Description,
    {
      "data-slot": "sheet-description",
      className: w("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const Bs = 768;
function tP() {
  const [e, t] = M.useState(void 0);
  return M.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Bs - 1}px)`), r = () => {
      t(window.innerWidth < Bs);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Bs), () => n.removeEventListener("change", r);
  }, []), !!e;
}
function cm({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "skeleton",
      className: w("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
function Ih({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ d(
    yn.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function nP({ ...e }) {
  return /* @__PURE__ */ d(Ih, { children: /* @__PURE__ */ d(yn.Root, { "data-slot": "tooltip", ...e }) });
}
function rP({ ...e }) {
  return /* @__PURE__ */ d(yn.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function aP({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ d(yn.Portal, { children: /* @__PURE__ */ U(
    yn.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: w(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ d(yn.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const oP = "sidebar_state", iP = 3600 * 24 * 7, sP = "16rem", lP = "18rem", uP = "3rem", cP = "b", Ah = M.createContext(null);
function ga() {
  const e = M.useContext(Ah);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function dO({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: r,
  style: a,
  children: o,
  ...i
}) {
  const s = tP(), [l, u] = M.useState(!1), [f, c] = M.useState(e), m = t ?? f, g = M.useCallback(
    (v) => {
      const y = typeof v == "function" ? v(m) : v;
      n ? n(y) : c(y), document.cookie = `${oP}=${y}; path=/; max-age=${iP}`;
    },
    [n, m]
  ), h = M.useCallback(() => s ? u((v) => !v) : g((v) => !v), [s, g, u]);
  M.useEffect(() => {
    const v = (y) => {
      y.key === cP && (y.metaKey || y.ctrlKey) && (y.preventDefault(), h());
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [h]);
  const b = m ? "expanded" : "collapsed", p = M.useMemo(
    () => ({
      state: b,
      open: m,
      setOpen: g,
      isMobile: s,
      openMobile: l,
      setOpenMobile: u,
      toggleSidebar: h
    }),
    [b, m, g, s, l, u, h]
  );
  return /* @__PURE__ */ d(Ah.Provider, { value: p, children: /* @__PURE__ */ d(Ih, { delayDuration: 0, children: /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": sP,
        "--sidebar-width-icon": uP,
        ...a
      },
      className: w(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        r
      ),
      ...i,
      children: o
    }
  ) }) });
}
function fO({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: r,
  children: a,
  ...o
}) {
  const { isMobile: i, state: s, openMobile: l, setOpenMobile: u } = ga();
  return n === "none" ? /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "sidebar",
      className: w(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        r
      ),
      ...o,
      children: a
    }
  ) : i ? /* @__PURE__ */ d(UC, { open: l, onOpenChange: u, ...o, children: /* @__PURE__ */ U(
    QC,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": lP
      },
      side: e,
      children: [
        /* @__PURE__ */ U(JC, { className: "sr-only", children: [
          /* @__PURE__ */ d(ZC, { children: "Sidebar" }),
          /* @__PURE__ */ d(eP, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ d("div", { className: "flex h-full w-full flex-col", children: a })
      ]
    }
  ) }) : /* @__PURE__ */ U(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": s,
      "data-collapsible": s === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ d(
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
        /* @__PURE__ */ d(
          "div",
          {
            "data-slot": "sidebar-container",
            className: w(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              r
            ),
            ...o,
            children: /* @__PURE__ */ d(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: a
              }
            )
          }
        )
      ]
    }
  );
}
function mO({ className: e, onClick: t, ...n }) {
  const { toggleSidebar: r } = ga();
  return /* @__PURE__ */ U(
    Kr,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: w("size-7", e),
      onClick: (a) => {
        t == null || t(a), r();
      },
      ...n,
      children: [
        /* @__PURE__ */ d(rg, {}),
        /* @__PURE__ */ d("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function pO({ className: e, ...t }) {
  const { toggleSidebar: n } = ga();
  return /* @__PURE__ */ d(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: n,
      title: "Toggle Sidebar",
      className: w(
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
function hO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: w(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function gO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    wm,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: w("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function vO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: w("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function bO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: w("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function yO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    GC,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: w("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function wO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: w(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function xO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: w("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function _O({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ d(
    t ? Mt : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: w(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...n
    }
  );
}
function SO({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ d(
    t ? Mt : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: w(
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
function CO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: w("w-full text-sm", e),
      ...t
    }
  );
}
function PO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: w("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function NO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: w("group/menu-item relative", e),
      ...t
    }
  );
}
const dP = zt(
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
function EO({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: r = "default",
  tooltip: a,
  className: o,
  ...i
}) {
  const s = e ? Mt : "button", { isMobile: l, state: u } = ga(), f = /* @__PURE__ */ d(
    s,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: w(dP({ variant: n, size: r }), o),
      ...i
    }
  );
  return a ? (typeof a == "string" && (a = {
    children: a
  }), /* @__PURE__ */ U(nP, { children: [
    /* @__PURE__ */ d(rP, { asChild: !0, children: f }),
    /* @__PURE__ */ d(
      aP,
      {
        side: "right",
        align: "center",
        hidden: u !== "collapsed" || l,
        ...a
      }
    )
  ] })) : f;
}
function TO({
  className: e,
  asChild: t = !1,
  showOnHover: n = !1,
  ...r
}) {
  return /* @__PURE__ */ d(
    t ? Mt : "button",
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
        n && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        e
      ),
      ...r
    }
  );
}
function OO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
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
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function MO({
  className: e,
  showIcon: t = !1,
  ...n
}) {
  const [r, a] = M.useState("70%");
  return M.useEffect(() => {
    a(`${Math.floor(Math.random() * 40) + 50}%`);
  }, []), /* @__PURE__ */ U(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: w("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...n,
      children: [
        t && /* @__PURE__ */ d(cm, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ d(
          cm,
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
function DO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: w(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function kO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: w("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function RO({
  asChild: e = !1,
  size: t = "md",
  isActive: n = !1,
  className: r,
  ...a
}) {
  return /* @__PURE__ */ d(
    e ? Mt : "a",
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
        "group-data-[collapsible=icon]:hidden",
        r
      ),
      ...a
    }
  );
}
function IO({
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
    gr.Root,
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
        /* @__PURE__ */ d(
          gr.Track,
          {
            "data-slot": "slider-track",
            className: w(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ d(
              gr.Range,
              {
                "data-slot": "slider-range",
                className: w(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: i.length }, (s, l) => /* @__PURE__ */ d(
          gr.Thumb,
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
var fP = (e, t, n, r, a, o, i, s) => {
  let l = document.documentElement, u = ["light", "dark"];
  function f(g) {
    (Array.isArray(e) ? e : [e]).forEach((h) => {
      let b = h === "class", p = b && o ? a.map((v) => o[v] || v) : a;
      b ? (l.classList.remove(...p), l.classList.add(o && o[g] ? o[g] : g)) : l.setAttribute(h, g);
    }), c(g);
  }
  function c(g) {
    s && u.includes(g) && (l.style.colorScheme = g);
  }
  function m() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (r) f(r);
  else try {
    let g = localStorage.getItem(t) || n, h = i && g === "system" ? m() : g;
    f(h);
  } catch {
  }
}, mP = M.createContext(void 0), pP = { setTheme: (e) => {
}, themes: [] }, hP = () => {
  var e;
  return (e = M.useContext(mP)) != null ? e : pP;
};
M.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: a, defaultTheme: o, value: i, themes: s, nonce: l, scriptProps: u }) => {
  let f = JSON.stringify([n, t, o, e, s, i, r, a]).slice(1, -1);
  return M.createElement("script", { ...u, suppressHydrationWarning: !0, nonce: typeof window > "u" ? l : "", dangerouslySetInnerHTML: { __html: `(${fP.toString()})(${f})` } });
});
function gP(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const vP = (e) => {
  switch (e) {
    case "success":
      return wP;
    case "info":
      return _P;
    case "warning":
      return xP;
    case "error":
      return SP;
    default:
      return null;
  }
}, bP = Array(12).fill(0), yP = ({ visible: e, className: t }) => /* @__PURE__ */ x.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ x.createElement("div", {
  className: "sonner-spinner"
}, bP.map((n, r) => /* @__PURE__ */ x.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), wP = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ x.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), xP = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ x.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), _P = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ x.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), SP = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ x.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), CP = /* @__PURE__ */ x.createElement("svg", {
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
})), PP = () => {
  const [e, t] = x.useState(document.hidden);
  return x.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let fl = 1;
class NP {
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
      const { message: r, ...a } = t, o = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : fl++, i = this.toasts.find((l) => l.id === o), s = t.dismissible === void 0 ? !0 : t.dismissible;
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
      const s = a.then(async (u) => {
        if (i = [
          "resolve",
          u
        ], x.isValidElement(u))
          o = !1, this.create({
            id: r,
            type: "default",
            message: u
          });
        else if (TP(u) && !u.ok) {
          o = !1;
          const c = typeof n.error == "function" ? await n.error(`HTTP error! status: ${u.status}`) : n.error, m = typeof n.description == "function" ? await n.description(`HTTP error! status: ${u.status}`) : n.description, h = typeof c == "object" && !x.isValidElement(c) ? c : {
            message: c
          };
          this.create({
            id: r,
            type: "error",
            description: m,
            ...h
          });
        } else if (u instanceof Error) {
          o = !1;
          const c = typeof n.error == "function" ? await n.error(u) : n.error, m = typeof n.description == "function" ? await n.description(u) : n.description, h = typeof c == "object" && !x.isValidElement(c) ? c : {
            message: c
          };
          this.create({
            id: r,
            type: "error",
            description: m,
            ...h
          });
        } else if (n.success !== void 0) {
          o = !1;
          const c = typeof n.success == "function" ? await n.success(u) : n.success, m = typeof n.description == "function" ? await n.description(u) : n.description, h = typeof c == "object" && !x.isValidElement(c) ? c : {
            message: c
          };
          this.create({
            id: r,
            type: "success",
            description: m,
            ...h
          });
        }
      }).catch(async (u) => {
        if (i = [
          "reject",
          u
        ], n.error !== void 0) {
          o = !1;
          const f = typeof n.error == "function" ? await n.error(u) : n.error, c = typeof n.description == "function" ? await n.description(u) : n.description, g = typeof f == "object" && !x.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: r,
            type: "error",
            description: c,
            ...g
          });
        }
      }).finally(() => {
        o && (this.dismiss(r), r = void 0), n.finally == null || n.finally.call(n);
      }), l = () => new Promise((u, f) => s.then(() => i[0] === "reject" ? f(i[1]) : u(i[1])).catch(f));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: l
      } : Object.assign(r, {
        unwrap: l
      });
    }, this.custom = (t, n) => {
      const r = (n == null ? void 0 : n.id) || fl++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const Ke = new NP(), EP = (e, t) => {
  const n = (t == null ? void 0 : t.id) || fl++;
  return Ke.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, TP = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", OP = EP, MP = () => Ke.toasts, DP = () => Ke.getActiveToasts();
Object.assign(OP, {
  success: Ke.success,
  info: Ke.info,
  warning: Ke.warning,
  error: Ke.error,
  custom: Ke.custom,
  message: Ke.message,
  promise: Ke.promise,
  dismiss: Ke.dismiss,
  loading: Ke.loading
}, {
  getHistory: MP,
  getToasts: DP
});
gP("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Nr(e) {
  return e.label !== void 0;
}
const kP = 3, RP = "24px", IP = "16px", dm = 4e3, AP = 356, zP = 14, LP = 45, qP = 200;
function vt(...e) {
  return e.filter(Boolean).join(" ");
}
function $P(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const BP = (e) => {
  var t, n, r, a, o, i, s, l, u;
  const { invert: f, toast: c, unstyled: m, interacting: g, setHeights: h, visibleToasts: b, heights: p, index: v, toasts: y, expanded: S, removeToast: C, defaultRichColors: D, closeButton: E, style: _, cancelButtonStyle: R, actionButtonStyle: k, className: Y = "", descriptionClassName: I = "", duration: H, position: T, gap: W, expandByDefault: F, classNames: B, icons: L, closeButtonAriaLabel: q = "Close toast" } = e, [te, ie] = x.useState(null), [X, O] = x.useState(null), [N, z] = x.useState(!1), [A, $] = x.useState(!1), [j, V] = x.useState(!1), [Q, ne] = x.useState(!1), [ae, G] = x.useState(!1), [Z, P] = x.useState(0), [K, se] = x.useState(0), ce = x.useRef(c.duration || H || dm), le = x.useRef(null), oe = x.useRef(null), ge = v === 0, De = v + 1 <= b, me = c.type, Pe = c.dismissible !== !1, je = c.className || "", Fe = c.descriptionClassName || "", ze = x.useMemo(() => p.findIndex((ee) => ee.toastId === c.id) || 0, [
    p,
    c.id
  ]), Ye = x.useMemo(() => {
    var ee;
    return (ee = c.closeButton) != null ? ee : E;
  }, [
    c.closeButton,
    E
  ]), tt = x.useMemo(() => c.duration || H || dm, [
    c.duration,
    H
  ]), nt = x.useRef(0), Ie = x.useRef(0), gt = x.useRef(0), Ae = x.useRef(null), [Le, Ct] = T.split("-"), kt = x.useMemo(() => p.reduce((ee, fe, _e) => _e >= ze ? ee : ee + fe.height, 0), [
    p,
    ze
  ]), cn = PP(), On = c.invert || f, jt = me === "loading";
  Ie.current = x.useMemo(() => ze * W + kt, [
    ze,
    kt
  ]), x.useEffect(() => {
    ce.current = tt;
  }, [
    tt
  ]), x.useEffect(() => {
    z(!0);
  }, []), x.useEffect(() => {
    const ee = oe.current;
    if (ee) {
      const fe = ee.getBoundingClientRect().height;
      return se(fe), h((_e) => [
        {
          toastId: c.id,
          height: fe,
          position: c.position
        },
        ..._e
      ]), () => h((_e) => _e.filter((Ce) => Ce.toastId !== c.id));
    }
  }, [
    h,
    c.id
  ]), x.useLayoutEffect(() => {
    if (!N) return;
    const ee = oe.current, fe = ee.style.height;
    ee.style.height = "auto";
    const _e = ee.getBoundingClientRect().height;
    ee.style.height = fe, se(_e), h((Ce) => Ce.find((Ne) => Ne.toastId === c.id) ? Ce.map((Ne) => Ne.toastId === c.id ? {
      ...Ne,
      height: _e
    } : Ne) : [
      {
        toastId: c.id,
        height: _e,
        position: c.position
      },
      ...Ce
    ]);
  }, [
    N,
    c.title,
    c.description,
    h,
    c.id
  ]);
  const J = x.useCallback(() => {
    $(!0), P(Ie.current), h((ee) => ee.filter((fe) => fe.toastId !== c.id)), setTimeout(() => {
      C(c);
    }, qP);
  }, [
    c,
    C,
    h,
    Ie
  ]);
  x.useEffect(() => {
    if (c.promise && me === "loading" || c.duration === 1 / 0 || c.type === "loading") return;
    let ee;
    return S || g || cn ? (() => {
      if (gt.current < nt.current) {
        const Ce = (/* @__PURE__ */ new Date()).getTime() - nt.current;
        ce.current = ce.current - Ce;
      }
      gt.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      ce.current !== 1 / 0 && (nt.current = (/* @__PURE__ */ new Date()).getTime(), ee = setTimeout(() => {
        c.onAutoClose == null || c.onAutoClose.call(c, c), J();
      }, ce.current));
    })(), () => clearTimeout(ee);
  }, [
    S,
    g,
    c,
    me,
    cn,
    J
  ]), x.useEffect(() => {
    c.delete && J();
  }, [
    J,
    c.delete
  ]);
  function pe() {
    var ee;
    if (L != null && L.loading) {
      var fe;
      return /* @__PURE__ */ x.createElement("div", {
        className: vt(B == null ? void 0 : B.loader, c == null || (fe = c.classNames) == null ? void 0 : fe.loader, "sonner-loader"),
        "data-visible": me === "loading"
      }, L.loading);
    }
    return /* @__PURE__ */ x.createElement(yP, {
      className: vt(B == null ? void 0 : B.loader, c == null || (ee = c.classNames) == null ? void 0 : ee.loader),
      visible: me === "loading"
    });
  }
  const ve = c.icon || (L == null ? void 0 : L[me]) || vP(me);
  var de, Se;
  return /* @__PURE__ */ x.createElement("li", {
    tabIndex: 0,
    ref: oe,
    className: vt(Y, je, B == null ? void 0 : B.toast, c == null || (t = c.classNames) == null ? void 0 : t.toast, B == null ? void 0 : B.default, B == null ? void 0 : B[me], c == null || (n = c.classNames) == null ? void 0 : n[me]),
    "data-sonner-toast": "",
    "data-rich-colors": (de = c.richColors) != null ? de : D,
    "data-styled": !(c.jsx || c.unstyled || m),
    "data-mounted": N,
    "data-promise": !!c.promise,
    "data-swiped": ae,
    "data-removed": A,
    "data-visible": De,
    "data-y-position": Le,
    "data-x-position": Ct,
    "data-index": v,
    "data-front": ge,
    "data-swiping": j,
    "data-dismissible": Pe,
    "data-type": me,
    "data-invert": On,
    "data-swipe-out": Q,
    "data-swipe-direction": X,
    "data-expanded": !!(S || F && N),
    style: {
      "--index": v,
      "--toasts-before": v,
      "--z-index": y.length - v,
      "--offset": `${A ? Z : Ie.current}px`,
      "--initial-height": F ? "auto" : `${K}px`,
      ..._,
      ...c.style
    },
    onDragEnd: () => {
      V(!1), ie(null), Ae.current = null;
    },
    onPointerDown: (ee) => {
      jt || !Pe || (le.current = /* @__PURE__ */ new Date(), P(Ie.current), ee.target.setPointerCapture(ee.pointerId), ee.target.tagName !== "BUTTON" && (V(!0), Ae.current = {
        x: ee.clientX,
        y: ee.clientY
      }));
    },
    onPointerUp: () => {
      var ee, fe, _e;
      if (Q || !Pe) return;
      Ae.current = null;
      const Ce = Number(((ee = oe.current) == null ? void 0 : ee.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), rt = Number(((fe = oe.current) == null ? void 0 : fe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ne = (/* @__PURE__ */ new Date()).getTime() - ((_e = le.current) == null ? void 0 : _e.getTime()), Te = te === "x" ? Ce : rt, Pt = Math.abs(Te) / Ne;
      if (Math.abs(Te) >= LP || Pt > 0.11) {
        P(Ie.current), c.onDismiss == null || c.onDismiss.call(c, c), O(te === "x" ? Ce > 0 ? "right" : "left" : rt > 0 ? "down" : "up"), J(), ne(!0);
        return;
      } else {
        var Ve, lt;
        (Ve = oe.current) == null || Ve.style.setProperty("--swipe-amount-x", "0px"), (lt = oe.current) == null || lt.style.setProperty("--swipe-amount-y", "0px");
      }
      G(!1), V(!1), ie(null);
    },
    onPointerMove: (ee) => {
      var fe, _e, Ce;
      if (!Ae.current || !Pe || ((fe = window.getSelection()) == null ? void 0 : fe.toString().length) > 0) return;
      const Ne = ee.clientY - Ae.current.y, Te = ee.clientX - Ae.current.x;
      var Pt;
      const Ve = (Pt = e.swipeDirections) != null ? Pt : $P(T);
      !te && (Math.abs(Te) > 1 || Math.abs(Ne) > 1) && ie(Math.abs(Te) > Math.abs(Ne) ? "x" : "y");
      let lt = {
        x: 0,
        y: 0
      };
      const tu = (Ft) => 1 / (1.5 + Math.abs(Ft) / 20);
      if (te === "y") {
        if (Ve.includes("top") || Ve.includes("bottom"))
          if (Ve.includes("top") && Ne < 0 || Ve.includes("bottom") && Ne > 0)
            lt.y = Ne;
          else {
            const Ft = Ne * tu(Ne);
            lt.y = Math.abs(Ft) < Math.abs(Ne) ? Ft : Ne;
          }
      } else if (te === "x" && (Ve.includes("left") || Ve.includes("right")))
        if (Ve.includes("left") && Te < 0 || Ve.includes("right") && Te > 0)
          lt.x = Te;
        else {
          const Ft = Te * tu(Te);
          lt.x = Math.abs(Ft) < Math.abs(Te) ? Ft : Te;
        }
      (Math.abs(lt.x) > 0 || Math.abs(lt.y) > 0) && G(!0), (_e = oe.current) == null || _e.style.setProperty("--swipe-amount-x", `${lt.x}px`), (Ce = oe.current) == null || Ce.style.setProperty("--swipe-amount-y", `${lt.y}px`);
    }
  }, Ye && !c.jsx && me !== "loading" ? /* @__PURE__ */ x.createElement("button", {
    "aria-label": q,
    "data-disabled": jt,
    "data-close-button": !0,
    onClick: jt || !Pe ? () => {
    } : () => {
      J(), c.onDismiss == null || c.onDismiss.call(c, c);
    },
    className: vt(B == null ? void 0 : B.closeButton, c == null || (r = c.classNames) == null ? void 0 : r.closeButton)
  }, (Se = L == null ? void 0 : L.close) != null ? Se : CP) : null, (me || c.icon || c.promise) && c.icon !== null && ((L == null ? void 0 : L[me]) !== null || c.icon) ? /* @__PURE__ */ x.createElement("div", {
    "data-icon": "",
    className: vt(B == null ? void 0 : B.icon, c == null || (a = c.classNames) == null ? void 0 : a.icon)
  }, c.promise || c.type === "loading" && !c.icon ? c.icon || pe() : null, c.type !== "loading" ? ve : null) : null, /* @__PURE__ */ x.createElement("div", {
    "data-content": "",
    className: vt(B == null ? void 0 : B.content, c == null || (o = c.classNames) == null ? void 0 : o.content)
  }, /* @__PURE__ */ x.createElement("div", {
    "data-title": "",
    className: vt(B == null ? void 0 : B.title, c == null || (i = c.classNames) == null ? void 0 : i.title)
  }, c.jsx ? c.jsx : typeof c.title == "function" ? c.title() : c.title), c.description ? /* @__PURE__ */ x.createElement("div", {
    "data-description": "",
    className: vt(I, Fe, B == null ? void 0 : B.description, c == null || (s = c.classNames) == null ? void 0 : s.description)
  }, typeof c.description == "function" ? c.description() : c.description) : null), /* @__PURE__ */ x.isValidElement(c.cancel) ? c.cancel : c.cancel && Nr(c.cancel) ? /* @__PURE__ */ x.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: c.cancelButtonStyle || R,
    onClick: (ee) => {
      Nr(c.cancel) && Pe && (c.cancel.onClick == null || c.cancel.onClick.call(c.cancel, ee), J());
    },
    className: vt(B == null ? void 0 : B.cancelButton, c == null || (l = c.classNames) == null ? void 0 : l.cancelButton)
  }, c.cancel.label) : null, /* @__PURE__ */ x.isValidElement(c.action) ? c.action : c.action && Nr(c.action) ? /* @__PURE__ */ x.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: c.actionButtonStyle || k,
    onClick: (ee) => {
      Nr(c.action) && (c.action.onClick == null || c.action.onClick.call(c.action, ee), !ee.defaultPrevented && J());
    },
    className: vt(B == null ? void 0 : B.actionButton, c == null || (u = c.classNames) == null ? void 0 : u.actionButton)
  }, c.action.label) : null);
};
function fm() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function jP(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, a) => {
    const o = a === 1, i = o ? "--mobile-offset" : "--offset", s = o ? IP : RP;
    function l(u) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((f) => {
        n[`${i}-${f}`] = typeof u == "number" ? `${u}px` : u;
      });
    }
    typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((u) => {
      r[u] === void 0 ? n[`${i}-${u}`] = s : n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u];
    }) : l(s);
  }), n;
}
const FP = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const { invert: r, position: a = "bottom-right", hotkey: o = [
    "altKey",
    "KeyT"
  ], expand: i, closeButton: s, className: l, offset: u, mobileOffset: f, theme: c = "light", richColors: m, duration: g, style: h, visibleToasts: b = kP, toastOptions: p, dir: v = fm(), gap: y = zP, icons: S, containerAriaLabel: C = "Notifications" } = t, [D, E] = x.useState([]), _ = x.useMemo(() => Array.from(new Set([
    a
  ].concat(D.filter((X) => X.position).map((X) => X.position)))), [
    D,
    a
  ]), [R, k] = x.useState([]), [Y, I] = x.useState(!1), [H, T] = x.useState(!1), [W, F] = x.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), B = x.useRef(null), L = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), q = x.useRef(null), te = x.useRef(!1), ie = x.useCallback((X) => {
    E((O) => {
      var N;
      return (N = O.find((z) => z.id === X.id)) != null && N.delete || Ke.dismiss(X.id), O.filter(({ id: z }) => z !== X.id);
    });
  }, []);
  return x.useEffect(() => Ke.subscribe((X) => {
    if (X.dismiss) {
      requestAnimationFrame(() => {
        E((O) => O.map((N) => N.id === X.id ? {
          ...N,
          delete: !0
        } : N));
      });
      return;
    }
    setTimeout(() => {
      fg.flushSync(() => {
        E((O) => {
          const N = O.findIndex((z) => z.id === X.id);
          return N !== -1 ? [
            ...O.slice(0, N),
            {
              ...O[N],
              ...X
            },
            ...O.slice(N + 1)
          ] : [
            X,
            ...O
          ];
        });
      });
    });
  }), [
    D
  ]), x.useEffect(() => {
    if (c !== "system") {
      F(c);
      return;
    }
    if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? F("dark") : F("light")), typeof window > "u") return;
    const X = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      X.addEventListener("change", ({ matches: O }) => {
        F(O ? "dark" : "light");
      });
    } catch {
      X.addListener(({ matches: N }) => {
        try {
          F(N ? "dark" : "light");
        } catch (z) {
          console.error(z);
        }
      });
    }
  }, [
    c
  ]), x.useEffect(() => {
    D.length <= 1 && I(!1);
  }, [
    D
  ]), x.useEffect(() => {
    const X = (O) => {
      var N;
      if (o.every(($) => O[$] || O.code === $)) {
        var A;
        I(!0), (A = B.current) == null || A.focus();
      }
      O.code === "Escape" && (document.activeElement === B.current || (N = B.current) != null && N.contains(document.activeElement)) && I(!1);
    };
    return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X);
  }, [
    o
  ]), x.useEffect(() => {
    if (B.current)
      return () => {
        q.current && (q.current.focus({
          preventScroll: !0
        }), q.current = null, te.current = !1);
      };
  }, [
    B.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ x.createElement("section", {
    ref: n,
    "aria-label": `${C} ${L}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, _.map((X, O) => {
    var N;
    const [z, A] = X.split("-");
    return D.length ? /* @__PURE__ */ x.createElement("ol", {
      key: X,
      dir: v === "auto" ? fm() : v,
      tabIndex: -1,
      ref: B,
      className: l,
      "data-sonner-toaster": !0,
      "data-sonner-theme": W,
      "data-y-position": z,
      "data-lifted": Y && D.length > 1 && !i,
      "data-x-position": A,
      style: {
        "--front-toast-height": `${((N = R[0]) == null ? void 0 : N.height) || 0}px`,
        "--width": `${AP}px`,
        "--gap": `${y}px`,
        ...h,
        ...jP(u, f)
      },
      onBlur: ($) => {
        te.current && !$.currentTarget.contains($.relatedTarget) && (te.current = !1, q.current && (q.current.focus({
          preventScroll: !0
        }), q.current = null));
      },
      onFocus: ($) => {
        $.target instanceof HTMLElement && $.target.dataset.dismissible === "false" || te.current || (te.current = !0, q.current = $.relatedTarget);
      },
      onMouseEnter: () => I(!0),
      onMouseMove: () => I(!0),
      onMouseLeave: () => {
        H || I(!1);
      },
      onDragEnd: () => I(!1),
      onPointerDown: ($) => {
        $.target instanceof HTMLElement && $.target.dataset.dismissible === "false" || T(!0);
      },
      onPointerUp: () => T(!1)
    }, D.filter(($) => !$.position && O === 0 || $.position === X).map(($, j) => {
      var V, Q;
      return /* @__PURE__ */ x.createElement(BP, {
        key: $.id,
        icons: S,
        index: j,
        toast: $,
        defaultRichColors: m,
        duration: (V = p == null ? void 0 : p.duration) != null ? V : g,
        className: p == null ? void 0 : p.className,
        descriptionClassName: p == null ? void 0 : p.descriptionClassName,
        invert: r,
        visibleToasts: b,
        closeButton: (Q = p == null ? void 0 : p.closeButton) != null ? Q : s,
        interacting: H,
        position: X,
        style: p == null ? void 0 : p.style,
        unstyled: p == null ? void 0 : p.unstyled,
        classNames: p == null ? void 0 : p.classNames,
        cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
        actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
        closeButtonAriaLabel: p == null ? void 0 : p.closeButtonAriaLabel,
        removeToast: ie,
        toasts: D.filter((ne) => ne.position == $.position),
        heights: R.filter((ne) => ne.position == $.position),
        setHeights: k,
        expandByDefault: i,
        gap: y,
        expanded: Y,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), AO = ({ ...e }) => {
  const { theme: t = "system" } = hP();
  return /* @__PURE__ */ d(
    FP,
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
function zO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    Ur.Root,
    {
      "data-slot": "tabs",
      className: w("flex flex-col gap-2", e),
      ...t
    }
  );
}
function LO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    Ur.List,
    {
      "data-slot": "tabs-list",
      className: w(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",
        e
      ),
      ...t
    }
  );
}
function qO({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    Ur.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: w(
        "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function $O({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    Ur.Content,
    {
      "data-slot": "tabs-content",
      className: w("flex-1 outline-none", e),
      ...t
    }
  );
}
const zh = zt(
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
function BO({
  className: e,
  variant: t,
  size: n,
  ...r
}) {
  return /* @__PURE__ */ d(
    mg.Root,
    {
      "data-slot": "toggle",
      className: w(zh({ variant: t, size: n, className: e })),
      ...r
    }
  );
}
const Lh = M.createContext({
  size: "default",
  variant: "default"
});
function jO({
  className: e,
  variant: t,
  size: n,
  children: r,
  ...a
}) {
  return /* @__PURE__ */ d(
    ym.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": n,
      className: w(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        e
      ),
      ...a,
      children: /* @__PURE__ */ d(Lh.Provider, { value: { variant: t, size: n }, children: r })
    }
  );
}
function FO({
  className: e,
  children: t,
  variant: n,
  size: r,
  ...a
}) {
  const o = M.useContext(Lh);
  return /* @__PURE__ */ d(
    ym.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": o.variant || n,
      "data-size": o.size || r,
      className: w(
        zh({
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
  AN as Accordion,
  qN as AccordionContent,
  zN as AccordionItem,
  LN as AccordionTrigger,
  tN as Alert,
  rN as AlertDescription,
  $N as AlertDialog,
  VN as AlertDialogAction,
  GN as AlertDialogCancel,
  jN as AlertDialogContent,
  YN as AlertDialogDescription,
  HN as AlertDialogFooter,
  FN as AlertDialogHeader,
  zg as AlertDialogOverlay,
  Ag as AlertDialogPortal,
  WN as AlertDialogTitle,
  BN as AlertDialogTrigger,
  nN as AlertTitle,
  UN as AspectRatio,
  KN as Avatar,
  QN as AvatarFallback,
  XN as AvatarImage,
  aN as Badge,
  JN as Breadcrumb,
  aE as BreadcrumbEllipsis,
  eE as BreadcrumbItem,
  tE as BreadcrumbLink,
  ZN as BreadcrumbList,
  nE as BreadcrumbPage,
  rE as BreadcrumbSeparator,
  Kr as Button,
  oE as Calendar,
  oN as Card,
  uN as CardAction,
  cN as CardContent,
  lN as CardDescription,
  dN as CardFooter,
  iN as CardHeader,
  sN as CardTitle,
  iE as Carousel,
  sE as CarouselContent,
  lE as CarouselItem,
  cE as CarouselNext,
  uE as CarouselPrevious,
  dE as ChartContainer,
  pE as ChartLegend,
  hE as ChartLegendContent,
  E_ as ChartStyle,
  fE as ChartTooltip,
  mE as ChartTooltipContent,
  gE as Checkbox,
  vE as Collapsible,
  yE as CollapsibleContent,
  bE as CollapsibleTrigger,
  oS as Command,
  SE as CommandDialog,
  NE as CommandEmpty,
  EE as CommandGroup,
  CE as CommandInput,
  OE as CommandItem,
  PE as CommandList,
  TE as CommandSeparator,
  ME as CommandShortcut,
  Tg as Container,
  DE as ContextMenu,
  jE as ContextMenuCheckboxItem,
  $E as ContextMenuContent,
  RE as ContextMenuGroup,
  BE as ContextMenuItem,
  HE as ContextMenuLabel,
  IE as ContextMenuPortal,
  zE as ContextMenuRadioGroup,
  FE as ContextMenuRadioItem,
  WE as ContextMenuSeparator,
  YE as ContextMenuShortcut,
  AE as ContextMenuSub,
  qE as ContextMenuSubContent,
  LE as ContextMenuSubTrigger,
  kE as ContextMenuTrigger,
  ON as DataTable,
  J_ as Dialog,
  xE as DialogClose,
  tS as DialogContent,
  aS as DialogDescription,
  _E as DialogFooter,
  nS as DialogHeader,
  eS as DialogOverlay,
  Z_ as DialogPortal,
  rS as DialogTitle,
  wE as DialogTrigger,
  VE as Drawer,
  UE as DrawerClose,
  KE as DrawerContent,
  ZE as DrawerDescription,
  QE as DrawerFooter,
  XE as DrawerHeader,
  AS as DrawerOverlay,
  IS as DrawerPortal,
  JE as DrawerTitle,
  GE as DrawerTrigger,
  DN as Dropdown,
  eT as DropdownMenu,
  iT as DropdownMenuCheckboxItem,
  rT as DropdownMenuContent,
  aT as DropdownMenuGroup,
  oT as DropdownMenuItem,
  uT as DropdownMenuLabel,
  tT as DropdownMenuPortal,
  sT as DropdownMenuRadioGroup,
  lT as DropdownMenuRadioItem,
  cT as DropdownMenuSeparator,
  dT as DropdownMenuShortcut,
  fT as DropdownMenuSub,
  pT as DropdownMenuSubContent,
  mT as DropdownMenuSubTrigger,
  nT as DropdownMenuTrigger,
  Og as Flex,
  hT as Form,
  yT as FormControl,
  wT as FormDescription,
  gT as FormField,
  vT as FormItem,
  bT as FormLabel,
  xT as FormMessage,
  xN as FullScreenLoader,
  Mg as Grid,
  _T as HoverCard,
  CT as HoverCardContent,
  ST as HoverCardTrigger,
  wm as Input,
  PT as InputOTP,
  NT as InputOTPGroup,
  TT as InputOTPSeparator,
  ET as InputOTPSlot,
  ZS as Label,
  xm as Loader,
  _N as LoadingOverlay,
  OT as Menubar,
  zT as MenubarCheckboxItem,
  IT as MenubarContent,
  DT as MenubarGroup,
  AT as MenubarItem,
  qT as MenubarLabel,
  MT as MenubarMenu,
  mC as MenubarPortal,
  kT as MenubarRadioGroup,
  LT as MenubarRadioItem,
  $T as MenubarSeparator,
  BT as MenubarShortcut,
  jT as MenubarSub,
  HT as MenubarSubContent,
  FT as MenubarSubTrigger,
  RT as MenubarTrigger,
  Xr as Modal,
  WT as NavigationMenu,
  UT as NavigationMenuContent,
  XT as NavigationMenuIndicator,
  VT as NavigationMenuItem,
  KT as NavigationMenuLink,
  YT as NavigationMenuList,
  GT as NavigationMenuTrigger,
  hC as NavigationMenuViewport,
  Ig as Padded,
  wg as Pagination,
  xg as PaginationContent,
  SN as PaginationEllipsis,
  va as PaginationItem,
  hl as PaginationLink,
  Sg as PaginationNext,
  _g as PaginationPrevious,
  QT as Popover,
  eO as PopoverAnchor,
  ZT as PopoverContent,
  JT as PopoverTrigger,
  tO as Progress,
  nO as RadioGroup,
  rO as RadioGroupItem,
  iO as ResizableHandle,
  oO as ResizablePanel,
  aO as ResizablePanelGroup,
  sO as ScrollArea,
  VC as ScrollBar,
  fN as Select,
  IN as SelectBox,
  gN as SelectContent,
  mN as SelectGroup,
  bN as SelectItem,
  vN as SelectLabel,
  bg as SelectScrollDownButton,
  vg as SelectScrollUpButton,
  yN as SelectSeparator,
  hN as SelectTrigger,
  pN as SelectValue,
  GC as Separator,
  UC as Sheet,
  uO as SheetClose,
  QC as SheetContent,
  eP as SheetDescription,
  cO as SheetFooter,
  JC as SheetHeader,
  ZC as SheetTitle,
  lO as SheetTrigger,
  fO as Sidebar,
  wO as SidebarContent,
  bO as SidebarFooter,
  xO as SidebarGroup,
  SO as SidebarGroupAction,
  CO as SidebarGroupContent,
  _O as SidebarGroupLabel,
  vO as SidebarHeader,
  gO as SidebarInput,
  hO as SidebarInset,
  PO as SidebarMenu,
  TO as SidebarMenuAction,
  OO as SidebarMenuBadge,
  EO as SidebarMenuButton,
  NO as SidebarMenuItem,
  MO as SidebarMenuSkeleton,
  DO as SidebarMenuSub,
  RO as SidebarMenuSubButton,
  kO as SidebarMenuSubItem,
  dO as SidebarProvider,
  pO as SidebarRail,
  yO as SidebarSeparator,
  mO as SidebarTrigger,
  cm as Skeleton,
  IO as Slider,
  RN as StickyFooter,
  kN as StickyHeader,
  wN as Switch,
  Cg as Table,
  Ng as TableBody,
  PN as TableCaption,
  iu as TableCell,
  EN as TableFilter,
  CN as TableFooter,
  Eg as TableHead,
  Pg as TableHeader,
  TN as TablePagination,
  ba as TableRow,
  NN as TableSearch,
  zO as Tabs,
  $O as TabsContent,
  LO as TabsList,
  qO as TabsTrigger,
  MN as Textarea,
  AO as Toaster,
  BO as Toggle,
  jO as ToggleGroup,
  FO as ToggleGroupItem,
  nP as Tooltip,
  aP as TooltipContent,
  Ih as TooltipProvider,
  rP as TooltipTrigger,
  hg as badgeVariants,
  Qt as buttonVariants,
  w as cn,
  yg as loaderVariants,
  pC as navigationMenuTriggerStyle,
  zh as toggleVariants,
  da as useFormField,
  tP as useIsMobile,
  ga as useSidebar
};
