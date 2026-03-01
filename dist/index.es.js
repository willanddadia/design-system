import { jsxs as U, jsx as f, Fragment as yt } from "react/jsx-runtime";
import { XCircle as Ah, AlertCircle as zh, CheckCircle as Lh, Info as qh, CheckIcon as or, ChevronDownIcon as Wr, ChevronUpIcon as $h, ChevronDown as Bh, Check as dm, X as jh, MoreHorizontal as Fh, ChevronRight as fm, ChevronLeft as Hh, ArrowRight as Wh, ArrowLeft as Yh, XIcon as mm, SearchIcon as Vh, CircleIcon as Yr, ChevronRightIcon as Vr, MinusIcon as Gh, MoreHorizontalIcon as Uh, ChevronLeftIcon as Kh, GripVerticalIcon as Xh, PanelLeftIcon as Qh } from "lucide-react";
import { cva as en } from "class-variance-authority";
import Kt, { clsx as Jh } from "clsx";
import { twMerge as Zh } from "tailwind-merge";
import { Slot as Mt } from "@radix-ui/react-slot";
import * as We from "@radix-ui/react-select";
import * as eu from "@radix-ui/react-switch";
import * as M from "react";
import w, { forwardRef as xt, useState as Ot, useRef as xn, useEffect as st, createContext as tn, useContext as nn, useLayoutEffect as pm, useCallback as hm, isValidElement as eg, PureComponent as Gr, useImperativeHandle as tg, useMemo as gm, cloneElement as ng } from "react";
import * as Yn from "@radix-ui/react-accordion";
import * as Dt from "@radix-ui/react-alert-dialog";
import * as rg from "@radix-ui/react-aspect-ratio";
import * as dl from "@radix-ui/react-avatar";
import * as tu from "@radix-ui/react-checkbox";
import * as fl from "@radix-ui/react-collapsible";
import * as we from "@radix-ui/react-dialog";
import { Primitive as zt } from "@radix-ui/react-primitive";
import { useId as vn } from "@radix-ui/react-id";
import { composeRefs as Vn } from "@radix-ui/react-compose-refs";
import * as qe from "@radix-ui/react-context-menu";
import * as $e from "@radix-ui/react-dropdown-menu";
import * as ag from "@radix-ui/react-label";
import * as Or from "@radix-ui/react-hover-card";
import * as Be from "@radix-ui/react-menubar";
import * as Lt from "@radix-ui/react-navigation-menu";
import * as Gn from "@radix-ui/react-popover";
import * as nu from "@radix-ui/react-progress";
import * as $s from "@radix-ui/react-radio-group";
import * as Hn from "@radix-ui/react-scroll-area";
import * as og from "@radix-ui/react-separator";
import * as bn from "@radix-ui/react-tooltip";
import * as gr from "@radix-ui/react-slider";
import ig from "react-dom";
import * as Ur from "@radix-ui/react-tabs";
import * as vm from "@radix-ui/react-toggle-group";
import * as sg from "@radix-ui/react-toggle";
function x(...e) {
  return Zh(Jh(e));
}
const lg = en(
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
), ru = {
  default: qh,
  success: Lh,
  warning: zh,
  destructive: Ah
};
function YP({
  className: e,
  variant: t = "default",
  ...n
}) {
  const r = ru[t] || ru.default;
  return /* @__PURE__ */ U(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: x(lg({ variant: t }), e),
      ...n,
      children: [
        /* @__PURE__ */ f(r, {}),
        n.children
      ]
    }
  );
}
function VP({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert-title",
      className: x("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e),
      ...t
    }
  );
}
function GP({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert-description",
      className: x(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        e
      ),
      ...t
    }
  );
}
const ug = en(
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
function UP({
  className: e,
  variant: t,
  asChild: n = !1,
  ...r
}) {
  return /* @__PURE__ */ f(n ? Mt : "span", { "data-slot": "badge", className: x(ug({ variant: t }), e), ...r });
}
const _n = en(
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
function ml({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  ...a
}) {
  return /* @__PURE__ */ f(
    r ? Mt : "button",
    {
      "data-slot": "button",
      className: x(_n({ variant: t, size: n, className: e })),
      ...a
    }
  );
}
const cg = en("bg-card text-card-foreground flex flex-col gap-6 rounded-xl", {
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
function KP({
  className: e,
  variant: t,
  ...n
}) {
  return /* @__PURE__ */ f("div", { "data-slot": "card", className: x(cg({ variant: t }), e), ...n });
}
function XP({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card-header",
      className: x(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function QP({ className: e, ...t }) {
  return /* @__PURE__ */ f("h4", { "data-slot": "card-title", className: x("leading-none", e), ...t });
}
function JP({ className: e, ...t }) {
  return /* @__PURE__ */ f("p", { "data-slot": "card-description", className: x("text-muted-foreground", e), ...t });
}
function ZP({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card-action",
      className: x("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
      ...t
    }
  );
}
function eE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card-content",
      className: x("px-6 [&:last-child]:pb-6", e),
      ...t
    }
  );
}
function tE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card-footer",
      className: x("flex items-center px-6 pb-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
function dg({
  className: e,
  type: t,
  error: n,
  fieldSize: r = "default",
  ...a
}) {
  return /* @__PURE__ */ f(
    "input",
    {
      type: t,
      "data-slot": "input",
      "data-size": r,
      "aria-invalid": n,
      className: x(
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
function nE({ ...e }) {
  return /* @__PURE__ */ f(We.Root, { "data-slot": "select", ...e });
}
function rE({ ...e }) {
  return /* @__PURE__ */ f(We.Group, { "data-slot": "select-group", ...e });
}
function aE({ ...e }) {
  return /* @__PURE__ */ f(We.Value, { "data-slot": "select-value", ...e });
}
function oE({
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
      className: x(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...a,
      children: [
        r,
        /* @__PURE__ */ f(We.Icon, { asChild: !0, children: /* @__PURE__ */ f(Wr, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function iE({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ f(We.Portal, { children: /* @__PURE__ */ U(
    We.Content,
    {
      "data-slot": "select-content",
      className: x(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ f(fg, {}),
        /* @__PURE__ */ f(
          We.Viewport,
          {
            className: x(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ f(mg, {})
      ]
    }
  ) });
}
function sE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    We.Label,
    {
      "data-slot": "select-label",
      className: x("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function lE({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    We.Item,
    {
      "data-slot": "select-item",
      className: x(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ f("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f(We.ItemIndicator, { children: /* @__PURE__ */ f(or, { className: "size-4" }) }) }),
        /* @__PURE__ */ f(We.ItemText, { children: t })
      ]
    }
  );
}
function uE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    We.Separator,
    {
      "data-slot": "select-separator",
      className: x("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function fg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    We.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: x("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ f($h, { className: "size-4" })
    }
  );
}
function mg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    We.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: x("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ f(Wr, { className: "size-4" })
    }
  );
}
function cE({
  className: e,
  label: t,
  ...n
}) {
  const r = /* @__PURE__ */ f(
    eu.Root,
    {
      "data-slot": "switch",
      className: x(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...n,
      children: /* @__PURE__ */ f(
        eu.Thumb,
        {
          "data-slot": "switch-thumb",
          className: x(
            "bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
  return t ? /* @__PURE__ */ U("label", { className: "flex items-center gap-3 cursor-pointer", children: [
    r,
    t && /* @__PURE__ */ f("span", { className: "text-sm font-medium", children: t })
  ] }) : r;
}
function pg({ className: e, ...t }) {
  return /* @__PURE__ */ f("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ f(
    "table",
    {
      "data-slot": "table",
      className: x("w-full caption-bottom text-sm", e),
      ...t
    }
  ) });
}
function hg({ className: e, ...t }) {
  return /* @__PURE__ */ f("thead", { "data-slot": "table-header", className: x("[&_tr]:border-b", e), ...t });
}
function gg({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "tbody",
    {
      "data-slot": "table-body",
      className: x("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function dE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: x("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
      ...t
    }
  );
}
function ga({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "tr",
    {
      "data-slot": "table-row",
      className: x(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        e
      ),
      ...t
    }
  );
}
function vg({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "th",
    {
      "data-slot": "table-head",
      className: x(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function au({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "td",
    {
      "data-slot": "table-cell",
      className: x(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function fE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "caption",
    {
      "data-slot": "table-caption",
      className: x("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function mE({
  data: e,
  columns: t,
  bordered: n = !0,
  striped: r = !1,
  className: a = "",
  ...o
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: x("w-full overflow-auto rounded-lg", n && "border", a),
      ...o,
      children: /* @__PURE__ */ U(pg, { children: [
        /* @__PURE__ */ f(hg, { className: "bg-muted/50", children: /* @__PURE__ */ f(ga, { children: t.map((i, s) => /* @__PURE__ */ f(vg, { className: x(n && s !== 0 && "border-l"), children: i.header }, i.key)) }) }),
        /* @__PURE__ */ U(gg, { children: [
          e.map((i, s) => /* @__PURE__ */ f(ga, { className: x(r && s % 2 === 1 && "bg-muted/30"), children: t.map((l, u) => /* @__PURE__ */ f(
            au,
            {
              className: x(n && u !== 0 && "border-l"),
              children: l.render ? l.render(i) : i[l.key]
            },
            l.key
          )) }, s)),
          e.length === 0 && /* @__PURE__ */ f(ga, { children: /* @__PURE__ */ f(
            au,
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
function pE({
  className: e,
  error: t,
  fieldSize: n = "default",
  ...r
}) {
  return /* @__PURE__ */ f(
    "textarea",
    {
      "data-slot": "textarea",
      "data-size": n,
      "aria-invalid": t,
      className: x(
        "resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "data-[size=sm]:min-h-20 data-[size=default]:min-h-24 data-[size=md]:min-h-28 data-[size=lg]:min-h-32",
        e
      ),
      ...r
    }
  );
}
const bg = xt(
  ({ margin: e = "none", bordered: t = !1, className: n = "", children: r, ...a }, o) => /* @__PURE__ */ f(
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
bg.displayName = "Container";
function hE({
  options: e,
  value: t,
  onChange: n,
  placeholder: r = "Select an option...",
  error: a = !1,
  disabled: o = !1,
  size: i = "md",
  className: s = ""
}) {
  const [l, u] = Ot(!1), d = xn(null), c = e.find((h) => h.value === t), m = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4",
    lg: "h-14 px-5 text-lg"
  };
  st(() => {
    const h = (b) => {
      d.current && !d.current.contains(b.target) && u(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []);
  const g = (h) => {
    n == null || n(h), u(!1);
  };
  return /* @__PURE__ */ U("div", { ref: d, className: `relative ${s}`, children: [
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
          /* @__PURE__ */ f("span", { children: c ? c.label : r }),
          /* @__PURE__ */ f(Bh, { className: `w-5 h-5 transition-transform ${l ? "rotate-180" : ""}` })
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
          h.value === t && /* @__PURE__ */ f(dm, { className: "w-5 h-5 text-primary" })
        ]
      },
      h.value
    )) })
  ] });
}
const yg = xt(
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
    }, d = {
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
    return /* @__PURE__ */ f(
      "div",
      {
        ref: l,
        className: `flex ${u[e]} ${d[t]} ${c[n]} ${r ? "flex-wrap" : ""} ${m[a]} ${o}`,
        ...s,
        children: i
      }
    );
  }
);
yg.displayName = "Flex";
const wg = xt(
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
    return /* @__PURE__ */ f(
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
wg.displayName = "Grid";
const Kr = xt(
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
          className: `relative ${u[n]} ${d[n]} ${a}`,
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
                  children: /* @__PURE__ */ f(jh, { className: "w-5 h-5" })
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
Kr.displayName = "Modal";
const xg = xt(
  (e, t) => /* @__PURE__ */ f(Kr, { ref: t, variant: "fullscreen", ...e })
);
xg.displayName = "FullscreenModal";
const _g = xt((e, t) => /* @__PURE__ */ f(Kr, { ref: t, variant: "popup", ...e }));
_g.displayName = "PopupModal";
const Sg = xt((e, t) => /* @__PURE__ */ f(Kr, { ref: t, variant: "side", ...e }));
Sg.displayName = "SideModal";
const Cg = xt(
  ({ padding: e = "md", bordered: t = !1, className: n = "", children: r, ...a }, o) => /* @__PURE__ */ f(
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
Cg.displayName = "Padded";
function gE({
  options: e,
  value: t,
  onChange: n,
  multiple: r = !1,
  className: a = ""
}) {
  const o = Array.isArray(t) ? t : t ? [t] : [], i = (l) => {
    if (r) {
      const u = o.includes(l) ? o.filter((d) => d !== l) : [...o, l];
      n == null || n(u);
    } else
      n == null || n(l);
  }, s = (l) => o.includes(l);
  return /* @__PURE__ */ f("div", { className: `space-y-2 ${a}`, children: e.map((l) => {
    const u = s(l.value);
    return /* @__PURE__ */ f(
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
          /* @__PURE__ */ f(
            "div",
            {
              className: `
                w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5
                border-2 transition-colors
                ${u ? "bg-primary border-primary" : "border-border bg-background"}
              `,
              children: u && /* @__PURE__ */ f(dm, { className: "w-3 h-3 text-primary-foreground" })
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
function vE({ ...e }) {
  return /* @__PURE__ */ f(Yn.Root, { "data-slot": "accordion", ...e });
}
function bE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Yn.Item,
    {
      "data-slot": "accordion-item",
      className: x("border-b last:border-b-0", e),
      ...t
    }
  );
}
function yE({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ f(Yn.Header, { className: "flex", children: /* @__PURE__ */ U(
    Yn.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: x(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ f(Wr, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function wE({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    Yn.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...n,
      children: /* @__PURE__ */ f("div", { className: x("pt-0 pb-4", e), children: t })
    }
  );
}
function xE({ ...e }) {
  return /* @__PURE__ */ f(Dt.Root, { "data-slot": "alert-dialog", ...e });
}
function _E({
  ...e
}) {
  return /* @__PURE__ */ f(Dt.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function Pg({ ...e }) {
  return /* @__PURE__ */ f(Dt.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function Eg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Dt.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: x(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function SE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ U(Pg, { children: [
    /* @__PURE__ */ f(Eg, {}),
    /* @__PURE__ */ f(
      Dt.Content,
      {
        "data-slot": "alert-dialog-content",
        className: x(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function CE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: x("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function PE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: x("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function EE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Dt.Title,
    {
      "data-slot": "alert-dialog-title",
      className: x("text-lg font-semibold", e),
      ...t
    }
  );
}
function NE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Dt.Description,
    {
      "data-slot": "alert-dialog-description",
      className: x("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function TE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(Dt.Action, { className: x(_n(), e), ...t });
}
function OE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Dt.Cancel,
    {
      className: x(_n({ variant: "outline" }), e),
      ...t
    }
  );
}
function ME({ ...e }) {
  return /* @__PURE__ */ f(rg.Root, { "data-slot": "aspect-ratio", ...e });
}
function DE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    dl.Root,
    {
      "data-slot": "avatar",
      className: x("relative flex size-10 shrink-0 overflow-hidden rounded-full", e),
      ...t
    }
  );
}
function kE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    dl.Image,
    {
      "data-slot": "avatar-image",
      className: x("aspect-square size-full", e),
      ...t
    }
  );
}
function RE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    dl.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: x("bg-muted flex size-full items-center justify-center rounded-full", e),
      ...t
    }
  );
}
function IE({ ...e }) {
  return /* @__PURE__ */ f("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function AE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: x(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function zE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: x("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function LE({
  asChild: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    e ? Mt : "a",
    {
      "data-slot": "breadcrumb-link",
      className: x("hover:text-foreground transition-colors", t),
      ...n
    }
  );
}
function qE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: x("text-foreground font-normal", e),
      ...t
    }
  );
}
function $E({ children: e, className: t, ...n }) {
  return /* @__PURE__ */ f(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: x("[&>svg]:size-3.5", t),
      ...n,
      children: e ?? /* @__PURE__ */ f(fm, {})
    }
  );
}
function BE({ className: e, ...t }) {
  return /* @__PURE__ */ U(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: x("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ f(Fh, { className: "size-4" }),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "More" })
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
const pl = 6048e5, Ng = 864e5;
let Tg = {};
function ir() {
  return Tg;
}
function wt(e, t) {
  var s, l, u, d;
  const n = ir(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = he(e), o = a.getDay(), i = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function Xt(e) {
  return wt(e, { weekStartsOn: 1 });
}
function bm(e) {
  const t = he(e), n = t.getFullYear(), r = et(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = Xt(r), o = et(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const i = Xt(o);
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
  return Math.round((a - o) / Ng);
}
function Og(e) {
  const t = bm(e), n = et(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Xt(n);
}
function Bs(e, t) {
  const n = t * 7;
  return He(e, n);
}
function Mg(e, t) {
  return ft(e, t * 12);
}
function Dg(e) {
  let t;
  return e.forEach(function(n) {
    const r = he(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function kg(e) {
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
function hl(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Rg(e) {
  if (!hl(e) && typeof e != "number")
    return !1;
  const t = he(e);
  return !isNaN(Number(t));
}
function Un(e, t) {
  const n = he(e), r = he(t), a = n.getFullYear() - r.getFullYear(), o = n.getMonth() - r.getMonth();
  return a * 12 + o;
}
function Ig(e, t, n) {
  const r = wt(e, n), a = wt(t, n), o = +r - Mr(r), i = +a - Mr(a);
  return Math.round((o - i) / pl);
}
function gl(e) {
  const t = he(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Je(e) {
  const t = he(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function ym(e) {
  const t = he(e), n = et(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function vl(e, t) {
  var s, l, u, d;
  const n = ir(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = he(e), o = a.getDay(), i = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
}
function wm(e) {
  return vl(e, { weekStartsOn: 1 });
}
const Ag = {
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
}, zg = (e, t, n) => {
  let r;
  const a = Ag[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function va(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Lg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, qg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, $g = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Bg = {
  date: va({
    formats: Lg,
    defaultWidth: "full"
  }),
  time: va({
    formats: qg,
    defaultWidth: "full"
  }),
  dateTime: va({
    formats: $g,
    defaultWidth: "full"
  })
}, jg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Fg = (e, t, n, r) => jg[e];
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
const Hg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Wg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Yg = {
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
}, Vg = {
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
}, Gg = {
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
}, Ug = {
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
}, Kg = (e, t) => {
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
}, Xg = {
  ordinalNumber: Kg,
  era: Mn({
    values: Hg,
    defaultWidth: "wide"
  }),
  quarter: Mn({
    values: Wg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Mn({
    values: Yg,
    defaultWidth: "wide"
  }),
  day: Mn({
    values: Vg,
    defaultWidth: "wide"
  }),
  dayPeriod: Mn({
    values: Gg,
    defaultWidth: "wide",
    formattingValues: Ug,
    defaultFormattingWidth: "wide"
  })
};
function Dn(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const i = o[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? Jg(s, (c) => c.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Qg(s, (c) => c.test(i))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(u)
    ) : u;
    const d = t.slice(i.length);
    return { value: u, rest: d };
  };
}
function Qg(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Jg(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Zg(e) {
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
const ev = /^(\d+)(th|st|nd|rd)?/i, tv = /\d+/i, nv = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, rv = {
  any: [/^b/i, /^(a|c)/i]
}, av = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ov = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, iv = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, sv = {
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
}, lv = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, uv = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, cv = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, dv = {
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
}, fv = {
  ordinalNumber: Zg({
    matchPattern: ev,
    parsePattern: tv,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Dn({
    matchPatterns: nv,
    defaultMatchWidth: "wide",
    parsePatterns: rv,
    defaultParseWidth: "any"
  }),
  quarter: Dn({
    matchPatterns: av,
    defaultMatchWidth: "wide",
    parsePatterns: ov,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Dn({
    matchPatterns: iv,
    defaultMatchWidth: "wide",
    parsePatterns: sv,
    defaultParseWidth: "any"
  }),
  day: Dn({
    matchPatterns: lv,
    defaultMatchWidth: "wide",
    parsePatterns: uv,
    defaultParseWidth: "any"
  }),
  dayPeriod: Dn({
    matchPatterns: cv,
    defaultMatchWidth: "any",
    parsePatterns: dv,
    defaultParseWidth: "any"
  })
}, xm = {
  code: "en-US",
  formatDistance: zg,
  formatLong: Bg,
  formatRelative: Fg,
  localize: Xg,
  match: fv,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function mv(e) {
  const t = he(e);
  return bt(t, ym(t)) + 1;
}
function _m(e) {
  const t = he(e), n = +Xt(t) - +Og(t);
  return Math.round(n / pl) + 1;
}
function Sm(e, t) {
  var d, c, m, g;
  const n = he(e), r = n.getFullYear(), a = ir(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : c.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((g = (m = a.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = et(e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = wt(i, t), l = et(e, 0);
  l.setFullYear(r, 0, o), l.setHours(0, 0, 0, 0);
  const u = wt(l, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function pv(e, t) {
  var s, l, u, d;
  const n = ir(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, a = Sm(e, t), o = et(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), wt(o, t);
}
function Cm(e, t) {
  const n = he(e), r = +wt(n, t) - +pv(n, t);
  return Math.round(r / pl) + 1;
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
}, cn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ou = {
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
    const a = Sm(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const i = o % 100;
      return xe(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : xe(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = bm(e);
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
    const a = Cm(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : xe(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = _m(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : xe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Rt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = mv(e);
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
    switch (r === 12 ? a = cn.noon : r === 0 ? a = cn.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? a = cn.evening : r >= 12 ? a = cn.afternoon : r >= 4 ? a = cn.morning : a = cn.night, t) {
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
        return su(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Wt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Wt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return su(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Wt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Wt(r, ":");
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
        return "GMT" + iu(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Wt(r, ":");
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
        return "GMT" + iu(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Wt(r, ":");
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
function iu(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + xe(o, 2);
}
function su(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + xe(Math.abs(e) / 60, 2) : Wt(e, t);
}
function Wt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = xe(Math.trunc(r / 60), 2), o = xe(r % 60, 2);
  return n + a + t + o;
}
const lu = (e, t) => {
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
}, Pm = (e, t) => {
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
}, hv = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return lu(e, t);
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
  return o.replace("{{date}}", lu(r, t)).replace("{{time}}", Pm(a, t));
}, gv = {
  p: Pm,
  P: hv
}, vv = /^D+$/, bv = /^Y+$/, yv = ["D", "DD", "YY", "YYYY"];
function wv(e) {
  return vv.test(e);
}
function xv(e) {
  return bv.test(e);
}
function _v(e, t, n) {
  const r = Sv(e, t, n);
  if (console.warn(r), yv.includes(e)) throw new RangeError(r);
}
function Sv(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Cv = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Pv = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ev = /^'([^]*?)'?$/, Nv = /''/g, Tv = /[a-zA-Z]/;
function rn(e, t, n) {
  var d, c, m, g, h, b, p, v;
  const r = ir(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? xm, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((c = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((b = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : b.weekStartsOn) ?? r.weekStartsOn ?? ((v = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : v.weekStartsOn) ?? 0, s = he(e);
  if (!Rg(s))
    throw new RangeError("Invalid time value");
  let l = t.match(Pv).map((y) => {
    const S = y[0];
    if (S === "p" || S === "P") {
      const C = gv[S];
      return C(y, a.formatLong);
    }
    return y;
  }).join("").match(Cv).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const S = y[0];
    if (S === "'")
      return { isToken: !1, value: Ov(y) };
    if (ou[S])
      return { isToken: !0, value: y };
    if (S.match(Tv))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && xv(S) || !(n != null && n.useAdditionalDayOfYearTokens) && wv(S)) && _v(S, t, String(e));
    const C = ou[S[0]];
    return C(s, S, a.localize, u);
  }).join("");
}
function Ov(e) {
  const t = e.match(Ev);
  return t ? t[1].replace(Nv, "'") : e;
}
function Mv(e) {
  const t = he(e), n = t.getFullYear(), r = t.getMonth(), a = et(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Dv(e) {
  return Math.trunc(+he(e) / 1e3);
}
function kv(e) {
  const t = he(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Rv(e, t) {
  return Ig(
    kv(e),
    Je(e),
    t
  ) + 1;
}
function js(e, t) {
  const n = he(e), r = he(t);
  return n.getTime() > r.getTime();
}
function Em(e, t) {
  const n = he(e), r = he(t);
  return +n < +r;
}
function bl(e, t) {
  const n = he(e), r = he(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Iv(e, t) {
  const n = he(e), r = he(t);
  return n.getFullYear() === r.getFullYear();
}
function ba(e, t) {
  return He(e, -t);
}
function ya(e, t) {
  const n = he(e), r = n.getFullYear(), a = n.getDate(), o = et(e, 0);
  o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
  const i = Mv(o);
  return n.setMonth(t, Math.min(a, i)), n;
}
function uu(e, t) {
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
function Av(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Nm(e, t, n) {
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
function Xr(e) {
  return e.mode === "single";
}
var zv = {
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
function Lv(e, t) {
  return rn(e, "LLLL y", t);
}
function qv(e, t) {
  return rn(e, "d", t);
}
function $v(e, t) {
  return rn(e, "LLLL", t);
}
function Bv(e) {
  return "".concat(e);
}
function jv(e, t) {
  return rn(e, "cccccc", t);
}
function Fv(e, t) {
  return rn(e, "yyyy", t);
}
var Hv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Lv,
  formatDay: qv,
  formatMonthCaption: $v,
  formatWeekNumber: Bv,
  formatWeekdayName: jv,
  formatYearCaption: Fv
}), Wv = function(e, t, n) {
  return rn(e, "do MMMM (EEEE)", n);
}, Yv = function() {
  return "Month: ";
}, Vv = function() {
  return "Go to next month";
}, Gv = function() {
  return "Go to previous month";
}, Uv = function(e, t) {
  return rn(e, "cccc", t);
}, Kv = function(e) {
  return "Week n. ".concat(e);
}, Xv = function() {
  return "Year: ";
}, Qv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Wv,
  labelMonthDropdown: Yv,
  labelNext: Vv,
  labelPrevious: Gv,
  labelWeekNumber: Kv,
  labelWeekday: Uv,
  labelYearDropdown: Xv
});
function Jv() {
  var e = "buttons", t = zv, n = xm, r = {}, a = {}, o = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Hv,
    labels: Qv,
    locale: n,
    modifiersClassNames: r,
    modifiers: a,
    numberOfMonths: o,
    styles: i,
    today: s,
    mode: "default"
  };
}
function Zv(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, a = e.toMonth, o = e.fromDate, i = e.toDate;
  return r ? o = Je(r) : t && (o = new Date(t, 0, 1)), a ? i = gl(a) : n && (i = new Date(n, 11, 31)), {
    fromDate: o ? Sn(o) : void 0,
    toDate: i ? Sn(i) : void 0
  };
}
var Tm = tn(void 0);
function eb(e) {
  var t, n = e.initialProps, r = Jv(), a = Zv(n), o = a.fromDate, i = a.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!o || !i) && (s = "buttons");
  var l;
  (Xr(n) || sr(n) || lr(n)) && (l = n.onSelect);
  var u = re(re(re({}, r), n), { captionLayout: s, classNames: re(re({}, r.classNames), n.classNames), components: re({}, n.components), formatters: re(re({}, r.formatters), n.formatters), fromDate: o, labels: re(re({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: re(re({}, r.modifiers), n.modifiers), modifiersClassNames: re(re({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: l, styles: re(re({}, r.styles), n.styles), toDate: i });
  return f(Tm.Provider, { value: u, children: e.children });
}
function Ne() {
  var e = nn(Tm);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Om(e) {
  var t = Ne(), n = t.locale, r = t.classNames, a = t.styles, o = t.formatters.formatCaption;
  return f("div", { className: r.caption_label, style: a.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: o(e.displayMonth, { locale: n }) });
}
function tb(e) {
  return f("svg", re({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: f("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Mm(e) {
  var t, n, r = e.onChange, a = e.value, o = e.children, i = e.caption, s = e.className, l = e.style, u = Ne(), d = (n = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : tb;
  return U("div", { className: s, style: l, children: [f("span", { className: u.classNames.vhidden, children: e["aria-label"] }), f("select", { name: e.name, "aria-label": e["aria-label"], className: u.classNames.dropdown, style: u.styles.dropdown, value: a, onChange: r, children: o }), U("div", { className: u.classNames.caption_label, style: u.styles.caption_label, "aria-hidden": "true", children: [i, f(d, { className: u.classNames.dropdown_icon, style: u.styles.dropdown_icon })] })] });
}
function nb(e) {
  var t, n = Ne(), r = n.fromDate, a = n.toDate, o = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, l = n.classNames, u = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return f(yt, {});
  if (!a)
    return f(yt, {});
  var c = [];
  if (Iv(r, a))
    for (var m = Je(r), g = r.getMonth(); g <= a.getMonth(); g++)
      c.push(ya(m, g));
  else
    for (var m = Je(/* @__PURE__ */ new Date()), g = 0; g <= 11; g++)
      c.push(ya(m, g));
  var h = function(p) {
    var v = Number(p.target.value), y = ya(Je(e.displayMonth), v);
    e.onChange(y);
  }, b = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Mm;
  return f(b, { name: "months", "aria-label": d(), className: l.dropdown_month, style: o.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: c.map(function(p) {
    return f("option", { value: p.getMonth(), children: s(p, { locale: i }) }, p.getMonth());
  }) });
}
function rb(e) {
  var t, n = e.displayMonth, r = Ne(), a = r.fromDate, o = r.toDate, i = r.locale, s = r.styles, l = r.classNames, u = r.components, d = r.formatters.formatYearCaption, c = r.labels.labelYearDropdown, m = [];
  if (!a)
    return f(yt, {});
  if (!o)
    return f(yt, {});
  for (var g = a.getFullYear(), h = o.getFullYear(), b = g; b <= h; b++)
    m.push(uu(ym(/* @__PURE__ */ new Date()), b));
  var p = function(y) {
    var S = uu(Je(n), Number(y.target.value));
    e.onChange(S);
  }, v = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Mm;
  return f(v, { name: "years", "aria-label": c(), className: l.dropdown_year, style: s.dropdown_year, onChange: p, value: n.getFullYear(), caption: d(n, { locale: i }), children: m.map(function(y) {
    return f("option", { value: y.getFullYear(), children: d(y, { locale: i }) }, y.getFullYear());
  }) });
}
function ab(e, t) {
  var n = Ot(e), r = n[0], a = n[1], o = t === void 0 ? r : t;
  return [o, a];
}
function ob(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, a = t || n || r || /* @__PURE__ */ new Date(), o = e.toDate, i = e.fromDate, s = e.numberOfMonths, l = s === void 0 ? 1 : s;
  if (o && Un(o, a) < 0) {
    var u = -1 * (l - 1);
    a = ft(o, u);
  }
  return i && Un(a, i) < 0 && (a = i), Je(a);
}
function ib() {
  var e = Ne(), t = ob(e), n = ab(t, e.month), r = n[0], a = n[1], o = function(i) {
    var s;
    if (!e.disableNavigation) {
      var l = Je(i);
      a(l), (s = e.onMonthChange) === null || s === void 0 || s.call(e, l);
    }
  };
  return [r, o];
}
function sb(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, a = Je(e), o = Je(ft(a, r)), i = Un(o, a), s = [], l = 0; l < i; l++) {
    var u = ft(a, l);
    s.push(u);
  }
  return n && (s = s.reverse()), s;
}
function lb(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, i = r ? o : 1, s = Je(e);
    if (!n)
      return ft(s, i);
    var l = Un(n, e);
    if (!(l < o))
      return ft(s, i);
  }
}
function ub(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, a = t.numberOfMonths, o = a === void 0 ? 1 : a, i = r ? o : 1, s = Je(e);
    if (!n)
      return ft(s, -i);
    var l = Un(s, n);
    if (!(l <= 0))
      return ft(s, -i);
  }
}
var Dm = tn(void 0);
function cb(e) {
  var t = Ne(), n = ib(), r = n[0], a = n[1], o = sb(r, t), i = lb(r, t), s = ub(r, t), l = function(c) {
    return o.some(function(m) {
      return bl(c, m);
    });
  }, u = function(c, m) {
    l(c) || (m && Em(c, m) ? a(ft(c, 1 + t.numberOfMonths * -1)) : a(c));
  }, d = {
    currentMonth: r,
    displayMonths: o,
    goToMonth: a,
    goToDate: u,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: l
  };
  return f(Dm.Provider, { value: d, children: e.children });
}
function ur() {
  var e = nn(Dm);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function cu(e) {
  var t, n = Ne(), r = n.classNames, a = n.styles, o = n.components, i = ur().goToMonth, s = function(d) {
    i(ft(d, e.displayIndex ? -e.displayIndex : 0));
  }, l = (t = o == null ? void 0 : o.CaptionLabel) !== null && t !== void 0 ? t : Om, u = f(l, { id: e.id, displayMonth: e.displayMonth });
  return U("div", { className: r.caption_dropdowns, style: a.caption_dropdowns, children: [f("div", { className: r.vhidden, children: u }), f(nb, { onChange: s, displayMonth: e.displayMonth }), f(rb, { onChange: s, displayMonth: e.displayMonth })] });
}
function db(e) {
  return f("svg", re({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: f("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function fb(e) {
  return f("svg", re({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: f("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Dr = xt(function(e, t) {
  var n = Ne(), r = n.classNames, a = n.styles, o = [r.button_reset, r.button];
  e.className && o.push(e.className);
  var i = o.join(" "), s = re(re({}, a.button_reset), a.button);
  return e.style && Object.assign(s, e.style), f("button", re({}, e, { ref: t, type: "button", className: i, style: s }));
});
function mb(e) {
  var t, n, r = Ne(), a = r.dir, o = r.locale, i = r.classNames, s = r.styles, l = r.labels, u = l.labelPrevious, d = l.labelNext, c = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return f(yt, {});
  var m = u(e.previousMonth, { locale: o }), g = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), h = d(e.nextMonth, { locale: o }), b = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), p = (t = c == null ? void 0 : c.IconRight) !== null && t !== void 0 ? t : fb, v = (n = c == null ? void 0 : c.IconLeft) !== null && n !== void 0 ? n : db;
  return U("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && f(Dr, { name: "previous-month", "aria-label": m, className: g, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: a === "rtl" ? f(p, { className: i.nav_icon, style: s.nav_icon }) : f(v, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && f(Dr, { name: "next-month", "aria-label": h, className: b, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: a === "rtl" ? f(v, { className: i.nav_icon, style: s.nav_icon }) : f(p, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function du(e) {
  var t = Ne().numberOfMonths, n = ur(), r = n.previousMonth, a = n.nextMonth, o = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(h) {
    return bl(e.displayMonth, h);
  }), l = s === 0, u = s === i.length - 1, d = t > 1 && (l || !u), c = t > 1 && (u || !l), m = function() {
    r && o(r);
  }, g = function() {
    a && o(a);
  };
  return f(mb, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: c, nextMonth: a, previousMonth: r, onPreviousClick: m, onNextClick: g });
}
function pb(e) {
  var t, n = Ne(), r = n.classNames, a = n.disableNavigation, o = n.styles, i = n.captionLayout, s = n.components, l = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : Om, u;
  return a ? u = f(l, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? u = f(cu, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? u = U(yt, { children: [f(cu, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), f(du, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : u = U(yt, { children: [f(l, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), f(du, { displayMonth: e.displayMonth, id: e.id })] }), f("div", { className: r.caption, style: o.caption, children: u });
}
function hb(e) {
  var t = Ne(), n = t.footer, r = t.styles, a = t.classNames.tfoot;
  return n ? f("tfoot", { className: a, style: r.tfoot, children: f("tr", { children: f("td", { colSpan: 8, children: n }) }) }) : f(yt, {});
}
function gb(e, t, n) {
  for (var r = n ? Xt(/* @__PURE__ */ new Date()) : wt(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), a = [], o = 0; o < 7; o++) {
    var i = He(r, o);
    a.push(i);
  }
  return a;
}
function vb() {
  var e = Ne(), t = e.classNames, n = e.styles, r = e.showWeekNumber, a = e.locale, o = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, l = e.labels.labelWeekday, u = gb(a, o, i);
  return U("tr", { style: n.head_row, className: t.head_row, children: [r && f("td", { style: n.head_cell, className: t.head_cell }), u.map(function(d, c) {
    return f("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": l(d, { locale: a }), children: s(d, { locale: a }) }, c);
  })] });
}
function bb() {
  var e, t = Ne(), n = t.classNames, r = t.styles, a = t.components, o = (e = a == null ? void 0 : a.HeadRow) !== null && e !== void 0 ? e : vb;
  return f("thead", { style: r.head, className: n.head, children: f(o, {}) });
}
function yb(e) {
  var t = Ne(), n = t.locale, r = t.formatters.formatDay;
  return f(yt, { children: r(e.date, { locale: n }) });
}
var yl = tn(void 0);
function wb(e) {
  if (!sr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return f(yl.Provider, { value: t, children: e.children });
  }
  return f(xb, { initialProps: e.initialProps, children: e.children });
}
function xb(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = t.min, o = t.max, i = function(u, d, c) {
    var m, g;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, u, d, c);
    var h = !!(d.selected && a && (r == null ? void 0 : r.length) === a);
    if (!h) {
      var b = !!(!d.selected && o && (r == null ? void 0 : r.length) === o);
      if (!b) {
        var p = r ? Nm([], r) : [];
        if (d.selected) {
          var v = p.findIndex(function(y) {
            return Qe(u, y);
          });
          p.splice(v, 1);
        } else
          p.push(u);
        (g = t.onSelect) === null || g === void 0 || g.call(t, p, u, d, c);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(u) {
    var d = o && r.length > o - 1, c = r.some(function(m) {
      return Qe(m, u);
    });
    return !!(d && !c);
  });
  var l = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return f(yl.Provider, { value: l, children: n });
}
function wl() {
  var e = nn(yl);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function _b(e, t) {
  var n = t || {}, r = n.from, a = n.to;
  return r && a ? Qe(a, e) && Qe(r, e) ? void 0 : Qe(a, e) ? { from: a, to: void 0 } : Qe(r, e) ? void 0 : js(r, e) ? { from: e, to: a } : { from: r, to: e } : a ? js(e, a) ? { from: a, to: e } : { from: e, to: a } : r ? Em(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var xl = tn(void 0);
function Sb(e) {
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
    return f(xl.Provider, { value: t, children: e.children });
  }
  return f(Cb, { initialProps: e.initialProps, children: e.children });
}
function Cb(e) {
  var t = e.initialProps, n = e.children, r = t.selected, a = r || {}, o = a.from, i = a.to, s = t.min, l = t.max, u = function(g, h, b) {
    var p, v;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, g, h, b);
    var y = _b(g, r);
    (v = t.onSelect) === null || v === void 0 || v.call(t, y, g, h, b);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (o ? (d.range_start = [o], i ? (d.range_end = [i], Qe(o, i) || (d.range_middle = [
    {
      after: o,
      before: i
    }
  ])) : d.range_end = [o]) : i && (d.range_start = [i], d.range_end = [i]), s && (o && !i && d.disabled.push({
    after: ba(o, s - 1),
    before: He(o, s - 1)
  }), o && i && d.disabled.push({
    after: o,
    before: He(o, s - 1)
  }), !o && i && d.disabled.push({
    after: ba(i, s - 1),
    before: He(i, s - 1)
  })), l) {
    if (o && !i && (d.disabled.push({
      before: He(o, -l + 1)
    }), d.disabled.push({
      after: He(o, l - 1)
    })), o && i) {
      var c = bt(i, o) + 1, m = l - c;
      d.disabled.push({
        before: ba(o, m)
      }), d.disabled.push({
        after: He(i, m)
      });
    }
    !o && i && (d.disabled.push({
      before: He(i, -l + 1)
    }), d.disabled.push({
      after: He(i, l - 1)
    }));
  }
  return f(xl.Provider, { value: { selected: r, onDayClick: u, modifiers: d }, children: n });
}
function _l() {
  var e = nn(xl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Nr(e) {
  return Array.isArray(e) ? Nm([], e) : e !== void 0 ? [e] : [];
}
function Pb(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], a = n[1];
    t[r] = Nr(a);
  }), t;
}
var mt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(mt || (mt = {}));
var Eb = mt.Selected, Et = mt.Disabled, Nb = mt.Hidden, Tb = mt.Today, wa = mt.RangeEnd, xa = mt.RangeMiddle, _a = mt.RangeStart, Ob = mt.Outside;
function Mb(e, t, n) {
  var r, a = (r = {}, r[Eb] = Nr(e.selected), r[Et] = Nr(e.disabled), r[Nb] = Nr(e.hidden), r[Tb] = [e.today], r[wa] = [], r[xa] = [], r[_a] = [], r[Ob] = [], r);
  return e.fromDate && a[Et].push({ before: e.fromDate }), e.toDate && a[Et].push({ after: e.toDate }), sr(e) ? a[Et] = a[Et].concat(t.modifiers[Et]) : lr(e) && (a[Et] = a[Et].concat(n.modifiers[Et]), a[_a] = n.modifiers[_a], a[xa] = n.modifiers[xa], a[wa] = n.modifiers[wa]), a;
}
var km = tn(void 0);
function Db(e) {
  var t = Ne(), n = wl(), r = _l(), a = Mb(t, n, r), o = Pb(t.modifiers), i = re(re({}, a), o);
  return f(km.Provider, { value: i, children: e.children });
}
function Rm() {
  var e = nn(km);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function kb(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Rb(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Ib(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Ab(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function zb(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Lb(e, t) {
  var n, r = t.from, a = t.to;
  if (r && a) {
    var o = bt(a, r) < 0;
    o && (n = [a, r], r = n[0], a = n[1]);
    var i = bt(e, r) >= 0 && bt(a, e) >= 0;
    return i;
  }
  return a ? Qe(a, e) : r ? Qe(r, e) : !1;
}
function qb(e) {
  return hl(e);
}
function $b(e) {
  return Array.isArray(e) && e.every(hl);
}
function Bb(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (qb(n))
      return Qe(e, n);
    if ($b(n))
      return n.includes(e);
    if (Rb(n))
      return Lb(e, n);
    if (zb(n))
      return n.dayOfWeek.includes(e.getDay());
    if (kb(n)) {
      var r = bt(n.before, e), a = bt(n.after, e), o = r > 0, i = a < 0, s = js(n.before, n.after);
      return s ? i && o : o || i;
    }
    return Ib(n) ? bt(e, n.after) > 0 : Ab(n) ? bt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Sl(e, t, n) {
  var r = Object.keys(t).reduce(function(o, i) {
    var s = t[i];
    return Bb(e, s) && o.push(i), o;
  }, []), a = {};
  return r.forEach(function(o) {
    return a[o] = !0;
  }), n && !bl(e, n) && (a.outside = !0), a;
}
function jb(e, t) {
  for (var n = Je(e[0]), r = gl(e[e.length - 1]), a, o, i = n; i <= r; ) {
    var s = Sl(i, t), l = !s.disabled && !s.hidden;
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
var Fb = 365;
function Im(e, t) {
  var n = t.moveBy, r = t.direction, a = t.context, o = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, l = a.weekStartsOn, u = a.fromDate, d = a.toDate, c = a.locale, m = {
    day: He,
    week: Bs,
    month: ft,
    year: Mg,
    startOfWeek: function(p) {
      return a.ISOWeek ? Xt(p) : wt(p, { locale: c, weekStartsOn: l });
    },
    endOfWeek: function(p) {
      return a.ISOWeek ? wm(p) : vl(p, { locale: c, weekStartsOn: l });
    }
  }, g = m[n](e, r === "after" ? 1 : -1);
  r === "before" && u ? g = Dg([u, g]) : r === "after" && d && (g = kg([d, g]));
  var h = !0;
  if (o) {
    var b = Sl(g, o);
    h = !b.disabled && !b.hidden;
  }
  return h ? g : s.count > Fb ? s.lastFocused : Im(g, {
    moveBy: n,
    direction: r,
    context: a,
    modifiers: o,
    retry: re(re({}, s), { count: s.count + 1 })
  });
}
var Am = tn(void 0);
function Hb(e) {
  var t = ur(), n = Rm(), r = Ot(), a = r[0], o = r[1], i = Ot(), s = i[0], l = i[1], u = jb(t.displayMonths, n), d = a ?? (s && t.isDateDisplayed(s)) ? s : u, c = function() {
    l(a), o(void 0);
  }, m = function(p) {
    o(p);
  }, g = Ne(), h = function(p, v) {
    if (a) {
      var y = Im(a, {
        moveBy: p,
        direction: v,
        context: g,
        modifiers: n
      });
      Qe(a, y) || (t.goToDate(y, a), m(y));
    }
  }, b = {
    focusedDay: a,
    focusTarget: d,
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
  return f(Am.Provider, { value: b, children: e.children });
}
function Cl() {
  var e = nn(Am);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Wb(e, t) {
  var n = Rm(), r = Sl(e, n, t);
  return r;
}
var Pl = tn(void 0);
function Yb(e) {
  if (!Xr(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return f(Pl.Provider, { value: t, children: e.children });
  }
  return f(Vb, { initialProps: e.initialProps, children: e.children });
}
function Vb(e) {
  var t = e.initialProps, n = e.children, r = function(o, i, s) {
    var l, u, d;
    if ((l = t.onDayClick) === null || l === void 0 || l.call(t, o, i, s), i.selected && !t.required) {
      (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, o, i, s);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, o, o, i, s);
  }, a = {
    selected: t.selected,
    onDayClick: r
  };
  return f(Pl.Provider, { value: a, children: n });
}
function zm() {
  var e = nn(Pl);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function Gb(e, t) {
  var n = Ne(), r = zm(), a = wl(), o = _l(), i = Cl(), s = i.focusDayAfter, l = i.focusDayBefore, u = i.focusWeekAfter, d = i.focusWeekBefore, c = i.blur, m = i.focus, g = i.focusMonthBefore, h = i.focusMonthAfter, b = i.focusYearBefore, p = i.focusYearAfter, v = i.focusStartOfWeek, y = i.focusEndOfWeek, S = function(L) {
    var q, te, ie, X;
    Xr(n) ? (q = r.onDayClick) === null || q === void 0 || q.call(r, e, t, L) : sr(n) ? (te = a.onDayClick) === null || te === void 0 || te.call(a, e, t, L) : lr(n) ? (ie = o.onDayClick) === null || ie === void 0 || ie.call(o, e, t, L) : (X = n.onDayClick) === null || X === void 0 || X.call(n, e, t, L);
  }, C = function(L) {
    var q;
    m(e), (q = n.onDayFocus) === null || q === void 0 || q.call(n, e, t, L);
  }, D = function(L) {
    var q;
    c(), (q = n.onDayBlur) === null || q === void 0 || q.call(n, e, t, L);
  }, N = function(L) {
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
        L.preventDefault(), L.stopPropagation(), d();
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
    onMouseEnter: N,
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
function Ub() {
  var e = Ne(), t = zm(), n = wl(), r = _l(), a = Xr(e) ? t.selected : sr(e) ? n.selected : lr(e) ? r.selected : void 0;
  return a;
}
function Kb(e) {
  return Object.values(mt).includes(e);
}
function Xb(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var a = e.modifiersClassNames[r];
    if (a)
      n.push(a);
    else if (Kb(r)) {
      var o = e.classNames["day_".concat(r)];
      o && n.push(o);
    }
  }), n;
}
function Qb(e, t) {
  var n = re({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var a;
    n = re(re({}, n), (a = e.modifiersStyles) === null || a === void 0 ? void 0 : a[r]);
  }), n;
}
function Jb(e, t, n) {
  var r, a, o, i = Ne(), s = Cl(), l = Wb(e, t), u = Gb(e, l), d = Ub(), c = !!(i.onDayClick || i.mode !== "default");
  st(function() {
    var N;
    l.outside || s.focusedDay && c && Qe(s.focusedDay, e) && ((N = n.current) === null || N === void 0 || N.focus());
  }, [
    s.focusedDay,
    e,
    n,
    c,
    l.outside
  ]);
  var m = Xb(i, l).join(" "), g = Qb(i, l), h = !!(l.outside && !i.showOutsideDays || l.hidden), b = (o = (a = i.components) === null || a === void 0 ? void 0 : a.DayContent) !== null && o !== void 0 ? o : yb, p = f(b, { date: e, displayMonth: t, activeModifiers: l }), v = {
    style: g,
    className: m,
    children: p,
    role: "gridcell"
  }, y = s.focusTarget && Qe(s.focusTarget, e) && !l.outside, S = s.focusedDay && Qe(s.focusedDay, e), C = re(re(re({}, v), (r = { disabled: l.disabled, role: "gridcell" }, r["aria-selected"] = l.selected, r.tabIndex = S || y ? 0 : -1, r)), u), D = {
    isButton: c,
    isHidden: h,
    activeModifiers: l,
    selectedDays: d,
    buttonProps: C,
    divProps: v
  };
  return D;
}
function Zb(e) {
  var t = xn(null), n = Jb(e.date, e.displayMonth, t);
  return n.isHidden ? f("div", { role: "gridcell" }) : n.isButton ? f(Dr, re({ name: "day", ref: t }, n.buttonProps)) : f("div", re({}, n.divProps));
}
function ey(e) {
  var t = e.number, n = e.dates, r = Ne(), a = r.onWeekNumberClick, o = r.styles, i = r.classNames, s = r.locale, l = r.labels.labelWeekNumber, u = r.formatters.formatWeekNumber, d = u(Number(t), { locale: s });
  if (!a)
    return f("span", { className: i.weeknumber, style: o.weeknumber, children: d });
  var c = l(Number(t), { locale: s }), m = function(g) {
    a(t, n, g);
  };
  return f(Dr, { name: "week-number", "aria-label": c, className: i.weeknumber, style: o.weeknumber, onClick: m, children: d });
}
function ty(e) {
  var t, n, r = Ne(), a = r.styles, o = r.classNames, i = r.showWeekNumber, s = r.components, l = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : Zb, u = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : ey, d;
  return i && (d = f("td", { className: o.cell, style: a.cell, children: f(u, { number: e.weekNumber, dates: e.dates }) })), U("tr", { className: o.row, style: a.row, children: [d, e.dates.map(function(c) {
    return f("td", { className: o.cell, style: a.cell, role: "presentation", children: f(l, { displayMonth: e.displayMonth, date: c }) }, Dv(c));
  })] });
}
function fu(e, t, n) {
  for (var r = n != null && n.ISOWeek ? wm(t) : vl(t, n), a = n != null && n.ISOWeek ? Xt(e) : wt(e, n), o = bt(r, a), i = [], s = 0; s <= o; s++)
    i.push(He(a, s));
  var l = i.reduce(function(u, d) {
    var c = n != null && n.ISOWeek ? _m(d) : Cm(d, n), m = u.find(function(g) {
      return g.weekNumber === c;
    });
    return m ? (m.dates.push(d), u) : (u.push({
      weekNumber: c,
      dates: [d]
    }), u);
  }, []);
  return l;
}
function ny(e, t) {
  var n = fu(Je(e), gl(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Rv(e, t);
    if (r < 6) {
      var a = n[n.length - 1], o = a.dates[a.dates.length - 1], i = Bs(o, 6 - r), s = fu(Bs(o, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function ry(e) {
  var t, n, r, a = Ne(), o = a.locale, i = a.classNames, s = a.styles, l = a.hideHead, u = a.fixedWeeks, d = a.components, c = a.weekStartsOn, m = a.firstWeekContainsDate, g = a.ISOWeek, h = ny(e.displayMonth, {
    useFixedWeeks: !!u,
    ISOWeek: g,
    locale: o,
    weekStartsOn: c,
    firstWeekContainsDate: m
  }), b = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : bb, p = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : ty, v = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : hb;
  return U("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!l && f(b, {}), f("tbody", { className: i.tbody, style: s.tbody, children: h.map(function(y) {
    return f(p, { displayMonth: e.displayMonth, dates: y.dates, weekNumber: y.weekNumber }, y.weekNumber);
  }) }), f(v, { displayMonth: e.displayMonth })] });
}
function ay() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var oy = ay() ? pm : st, Sa = !1, iy = 0;
function mu() {
  return "react-day-picker-".concat(++iy);
}
function sy(e) {
  var t, n = e ?? (Sa ? mu() : null), r = Ot(n), a = r[0], o = r[1];
  return oy(function() {
    a === null && o(mu());
  }, []), st(function() {
    Sa === !1 && (Sa = !0);
  }, []), (t = e ?? a) !== null && t !== void 0 ? t : void 0;
}
function ly(e) {
  var t, n, r = Ne(), a = r.dir, o = r.classNames, i = r.styles, s = r.components, l = ur().displayMonths, u = sy(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, c = [o.month], m = i.month, g = e.displayIndex === 0, h = e.displayIndex === l.length - 1, b = !g && !h;
  a === "rtl" && (t = [g, h], h = t[0], g = t[1]), g && (c.push(o.caption_start), m = re(re({}, m), i.caption_start)), h && (c.push(o.caption_end), m = re(re({}, m), i.caption_end)), b && (c.push(o.caption_between), m = re(re({}, m), i.caption_between));
  var p = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : pb;
  return U("div", { className: c.join(" "), style: m, children: [f(p, { id: u, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), f(ry, { id: d, "aria-labelledby": u, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function uy(e) {
  var t = Ne(), n = t.classNames, r = t.styles;
  return f("div", { className: n.months, style: r.months, children: e.children });
}
function cy(e) {
  var t, n, r = e.initialProps, a = Ne(), o = Cl(), i = ur(), s = Ot(!1), l = s[0], u = s[1];
  st(function() {
    a.initialFocus && o.focusTarget && (l || (o.focus(o.focusTarget), u(!0)));
  }, [
    a.initialFocus,
    l,
    o.focus,
    o.focusTarget,
    o
  ]);
  var d = [a.classNames.root, a.className];
  a.numberOfMonths > 1 && d.push(a.classNames.multiple_months), a.showWeekNumber && d.push(a.classNames.with_weeknumber);
  var c = re(re({}, a.styles.root), a.style), m = Object.keys(r).filter(function(h) {
    return h.startsWith("data-");
  }).reduce(function(h, b) {
    var p;
    return re(re({}, h), (p = {}, p[b] = r[b], p));
  }, {}), g = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : uy;
  return f("div", re({ className: d.join(" "), style: c, dir: a.dir, id: a.id, nonce: r.nonce, title: r.title, lang: r.lang }, m, { children: f(g, { children: i.displayMonths.map(function(h, b) {
    return f(ly, { displayIndex: b, displayMonth: h }, b);
  }) }) }));
}
function dy(e) {
  var t = e.children, n = Av(e, ["children"]);
  return f(eb, { initialProps: n, children: f(cb, { children: f(Yb, { initialProps: n, children: f(wb, { initialProps: n, children: f(Sb, { initialProps: n, children: f(Db, { children: f(Hb, { children: t }) }) }) }) }) }) });
}
function fy(e) {
  return f(dy, re({}, e, { children: f(cy, { initialProps: e }) }));
}
function jE({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f(
    fy,
    {
      showOutsideDays: n,
      className: x("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: x(
          _n({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: x(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          r.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: x(
          _n({ variant: "ghost" }),
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
        IconLeft: ({ className: a, ...o }) => /* @__PURE__ */ f(Hh, { className: x("size-4", a), ...o }),
        IconRight: ({ className: a, ...o }) => /* @__PURE__ */ f(fm, { className: x("size-4", a), ...o })
      },
      ...r
    }
  );
}
function my(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function pu(e) {
  return my(e) || Array.isArray(e);
}
function py() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function El(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), o = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== o ? !1 : n.every((i) => {
    const s = e[i], l = t[i];
    return typeof s == "function" ? `${s}` == `${l}` : !pu(s) || !pu(l) ? s === l : El(s, l);
  });
}
function hu(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function hy(e, t) {
  if (e.length !== t.length) return !1;
  const n = hu(e), r = hu(t);
  return n.every((a, o) => {
    const i = r[o];
    return El(a, i);
  });
}
function Nl(e) {
  return typeof e == "number";
}
function Fs(e) {
  return typeof e == "string";
}
function Qr(e) {
  return typeof e == "boolean";
}
function gu(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Me(e) {
  return Math.abs(e);
}
function Tl(e) {
  return Math.sign(e);
}
function Wn(e, t) {
  return Me(e - t);
}
function gy(e, t) {
  if (e === 0 || t === 0 || Me(e) <= Me(t)) return 0;
  const n = Wn(Me(e), Me(t));
  return Me(n / e);
}
function vy(e) {
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
function Ol(e, t) {
  return t === cr(e);
}
function vu(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Xn(e) {
  return Object.keys(e);
}
function Lm(e, t) {
  return [e, t].reduce((n, r) => (Xn(r).forEach((a) => {
    const o = n[a], i = r[a], s = gu(o) && gu(i);
    n[a] = s ? Lm(o, i) : i;
  }), n), {});
}
function Hs(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function by(e, t) {
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
    return Fs(e) ? n[e](l) : e(t, l, u);
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
function yy(e, t, n, r) {
  const a = Qn(), o = 1e3 / 60;
  let i = null, s = 0, l = 0;
  function u() {
    a.add(e, "visibilitychange", () => {
      e.hidden && h();
    });
  }
  function d() {
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
    destroy: d,
    start: m,
    stop: g,
    update: n,
    render: r
  };
}
function wy(e, t) {
  const n = t === "rtl", r = e === "y", a = r ? "y" : "x", o = r ? "x" : "y", i = !r && n ? -1 : 1, s = d(), l = c();
  function u(h) {
    const {
      height: b,
      width: p
    } = h;
    return r ? b : p;
  }
  function d() {
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
function Qt(e = 0, t = 0) {
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
function qm(e, t, n) {
  const {
    constrain: r
  } = Qt(0, e), a = e + 1;
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
    return d().set(s() + m);
  }
  function d() {
    return qm(e, s(), n);
  }
  const c = {
    get: s,
    set: l,
    add: u,
    clone: d
  };
  return c;
}
function xy(e, t, n, r, a, o, i, s, l, u, d, c, m, g, h, b, p, v, y) {
  const {
    cross: S,
    direction: C
  } = e, D = ["INPUT", "SELECT", "TEXTAREA"], N = {
    passive: !1
  }, _ = Qn(), R = Qn(), k = Qt(50, 225).constrain(g.measure(20)), Y = {
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
      (Qr(y) || y(G, K)) && $(K);
    }
    const P = t;
    _.add(P, "dragstart", (K) => K.preventDefault(), N).add(P, "touchmove", () => {
    }, N).add(P, "touchend", () => {
    }).add(P, "touchstart", Z).add(P, "mousedown", Z).add(P, "touchcancel", V).add(P, "contextmenu", V).add(P, "click", Q, !0);
  }
  function X() {
    _.clear(), R.clear();
  }
  function O() {
    const G = te ? n : t;
    R.add(G, "touchmove", j, N).add(G, "touchend", V).add(G, "mousemove", j, N).add(G, "mouseup", V);
  }
  function E(G) {
    const Z = G.nodeName || "";
    return D.includes(Z);
  }
  function z() {
    return (h ? I : Y)[te ? "mouse" : "touch"];
  }
  function A(G, Z) {
    const P = c.add(Tl(G) * -1), K = d.byDistance(G, !h).distance;
    return h || Me(G) < k ? K : p && Z ? K * 0.5 : d.byIndex(P.get(), 0).distance;
  }
  function $(G) {
    const Z = Hs(G, r);
    te = Z, q = h && Z && !G.buttons && T, T = Wn(a.get(), i.get()) >= 2, !(Z && G.button !== 0) && (E(G.target) || (B = !0, o.pointerDown(G), u.useFriction(0).useDuration(0), a.set(i), O(), W = o.readPoint(G), F = o.readPoint(G, S), m.emit("pointerDown")));
  }
  function j(G) {
    if (!Hs(G, r) && G.touches.length >= 2) return V(G);
    const P = o.readPoint(G), K = o.readPoint(G, S), se = Wn(P, W), ce = Wn(K, F);
    if (!L && !te && (!G.cancelable || (L = se > ce, !L)))
      return V(G);
    const le = o.pointerMove(G);
    se > b && (q = !0), u.useFriction(0.3).useDuration(0.75), s.start(), a.add(C(le)), G.preventDefault();
  }
  function V(G) {
    const P = d.byDistance(0, !1).index !== c.get(), K = o.pointerUp(G) * z(), se = A(C(K), P), ce = gy(K, se), le = H - 10 * ce, oe = v + ce / 50;
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
function _y(e, t) {
  let r, a;
  function o(c) {
    return c.timeStamp;
  }
  function i(c, m) {
    const h = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Hs(c, t) ? c : c.touches[0])[h];
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
function Sy() {
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
function Cy(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function Py(e, t, n, r, a, o, i) {
  const s = [e].concat(r);
  let l, u, d = [], c = !1;
  function m(p) {
    return a.measureSize(i.measure(p));
  }
  function g(p) {
    if (!o) return;
    u = m(e), d = r.map(m);
    function v(y) {
      for (const S of y) {
        if (c) return;
        const C = S.target === e, D = r.indexOf(S.target), N = C ? u : d[D], _ = m(C ? e : r[D]);
        if (Me(_ - N) >= 0.5) {
          p.reInit(), t.emit("resize");
          break;
        }
      }
    }
    l = new ResizeObserver((y) => {
      (Qr(o) || o(p, y)) && v(y);
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
function Ey(e, t, n, r, a, o) {
  let i = 0, s = 0, l = a, u = o, d = e.get(), c = 0;
  function m() {
    const N = r.get() - e.get(), _ = !l;
    let R = 0;
    return _ ? (i = 0, n.set(r), e.set(r), R = N) : (n.set(e), i += N / l, i *= u, d += i, e.add(i), R = d - c), s = Tl(R), c = d, D;
  }
  function g() {
    const N = r.get() - t.get();
    return Me(N) < 1e-3;
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
  function S(N) {
    return l = N, D;
  }
  function C(N) {
    return u = N, D;
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
function Ny(e, t, n, r, a) {
  const o = a.measure(10), i = a.measure(50), s = Qt(0.1, 0.99);
  let l = !1;
  function u() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(g) {
    if (!u()) return;
    const h = e.reachedMin(t.get()) ? "min" : "max", b = Me(e[h] - t.get()), p = n.get() - t.get(), v = s.constrain(b / i);
    n.subtract(p * v), !g && Me(p) < o && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function c(g) {
    l = !g;
  }
  return {
    shouldConstrain: u,
    constrain: d,
    toggleActive: c
  };
}
function Ty(e, t, n, r, a) {
  const o = Qt(-t + e, 0), i = c(), s = d(), l = m();
  function u(h, b) {
    return Wn(h, b) <= 1;
  }
  function d() {
    const h = i[0], b = ct(i), p = i.lastIndexOf(h), v = i.indexOf(b) + 1;
    return Qt(p, v);
  }
  function c() {
    return n.map((h, b) => {
      const {
        min: p,
        max: v
      } = o, y = o.constrain(h), S = !b, C = Ol(n, b);
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
function Oy(e, t, n) {
  const r = t[0], a = n ? r - e : ct(t);
  return {
    limit: Qt(a, r)
  };
}
function My(e, t, n, r) {
  const o = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: l
  } = Qt(o, i);
  function u(m) {
    return m === 1 ? l(n.get()) : m === -1 ? s(n.get()) : !1;
  }
  function d(m) {
    if (!u(m)) return;
    const g = e * (m * -1);
    r.forEach((h) => h.add(g));
  }
  return {
    loop: d
  };
}
function Dy(e) {
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
function ky(e, t, n, r, a) {
  const {
    startEdge: o,
    endEdge: i
  } = e, {
    groupSlides: s
  } = a, l = c().map(t.measure), u = m(), d = g();
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
    snapsAligned: d
  };
}
function Ry(e, t, n, r, a, o) {
  const {
    groupSlides: i
  } = a, {
    min: s,
    max: l
  } = r, u = d();
  function d() {
    const m = i(o), g = !e || t === "keepSnaps";
    return n.length === 1 ? [o] : g ? m : m.slice(s, l).map((h, b, p) => {
      const v = !b, y = Ol(p, b);
      if (v) {
        const S = ct(p[0]) + 1;
        return vu(S);
      }
      if (y) {
        const S = cr(o) - ct(p)[0] + 1;
        return vu(S, ct(p)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: u
  };
}
function Iy(e, t, n, r, a) {
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
      diff: d(y - b, 0),
      index: S
    })).sort((y, S) => Me(y.diff) - Me(S.diff)), {
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
    const v = p.filter((y) => Tl(y) === b);
    return v.length ? l(v) : ct(p) - n;
  }
  function c(h, b) {
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
    } = u(p), S = !e && o(p);
    if (!b || S) return {
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
    byIndex: c,
    shortcut: d
  };
}
function Ay(e, t, n, r, a, o, i) {
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
function zy(e, t, n, r, a, o, i, s) {
  const l = {
    passive: !0,
    capture: !0
  };
  let u = 0;
  function d(g) {
    if (!s) return;
    function h(b) {
      if ((/* @__PURE__ */ new Date()).getTime() - u > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const y = n.findIndex((S) => S.includes(b));
      Nl(y) && (a.useDuration(0), r.index(y, 0), i.emit("slideFocus"));
    }
    o.add(document, "keydown", c, !1), t.forEach((b, p) => {
      o.add(b, "focus", (v) => {
        (Qr(s) || s(g, v)) && h(p);
      }, l);
    });
  }
  function c(g) {
    g.code === "Tab" && (u = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: d
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
    return Nl(l) ? l : l.get();
  }
  return {
    get: n,
    set: r,
    add: a,
    subtract: o
  };
}
function $m(e, t) {
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
    const g = vy(e.direction(m));
    g !== a && (r.transform = n(g), a = g);
  }
  function u(m) {
    o = !m;
  }
  function d() {
    o || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: d,
    to: l,
    toggleActive: u
  };
}
function Ly(e, t, n, r, a, o, i, s, l) {
  const d = Kn(a), c = Kn(a).reverse(), m = v().concat(y());
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
        translate: $m(e, l[I]),
        target: () => s.get() > F ? H : T
      };
    });
  }
  function v() {
    const _ = i[0], R = h(c, _);
    return p(R, n, !1);
  }
  function y() {
    const _ = t - i[0] - 1, R = h(d, _);
    return p(R, -n, !0);
  }
  function S() {
    return m.every(({
      index: _
    }) => {
      const R = d.filter((k) => k !== _);
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
function qy(e, t, n) {
  let r, a = !1;
  function o(l) {
    if (!n) return;
    function u(d) {
      for (const c of d)
        if (c.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((d) => {
      a || (Qr(n) || n(l, d)) && u(d);
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
function $y(e, t, n, r) {
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
  function d() {
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
    destroy: d,
    get: m
  };
}
function By(e, t, n, r, a, o) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: l
  } = e, u = n[0] && a, d = h(), c = b(), m = n.map(i), g = p();
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
      const D = !S, N = Ol(C, S);
      return D ? m[S] + d : N ? m[S] + c : C[S + 1][s] - y[s];
    }).map(Me);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: g,
    startGap: d,
    endGap: c
  };
}
function jy(e, t, n, r, a, o, i, s, l) {
  const {
    startEdge: u,
    endEdge: d,
    direction: c
  } = e, m = Nl(n);
  function g(v, y) {
    return Kn(v).filter((S) => S % y === 0).map((S) => v.slice(S, S + y));
  }
  function h(v) {
    return v.length ? Kn(v).reduce((y, S, C) => {
      const D = ct(y) || 0, N = D === 0, _ = S === cr(v), R = a[u] - o[D][u], k = a[u] - o[S][d], Y = !r && N ? c(i) : 0, I = !r && _ ? c(s) : 0, H = Me(k - I - (R + Y));
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
function Fy(e, t, n, r, a, o, i) {
  const {
    align: s,
    axis: l,
    direction: u,
    startIndex: d,
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
    watchFocus: N
  } = o, _ = 2, R = Sy(), k = R.measure(t), Y = n.map(R.measure), I = wy(l, u), H = I.measureSize(k), T = Cy(H), W = by(s, H), F = !c && !!y, B = c || !!y, {
    slideSizes: L,
    slideSizesWithGaps: q,
    startGap: te,
    endGap: ie
  } = By(I, k, Y, n, B, a), X = jy(I, H, p, c, k, Y, te, ie, _), {
    snaps: O,
    snapsAligned: E
  } = ky(I, W, k, Y, X), z = -ct(O) + ct(q), {
    snapsContained: A,
    scrollContainLimit: $
  } = Ty(H, z, E, y, _), j = F ? A : E, {
    limit: V
  } = Oy(z, j, c), Q = qm(cr(j), d, c), ne = Q.clone(), ae = Kn(n), G = ({
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
    slideLooper: un,
    dragHandler: On,
    animation: Bt,
    eventHandler: J,
    scrollBounds: pe,
    options: {
      loop: ve
    }
  }, de) => {
    const Se = Ie.settled(), ee = !pe.shouldConstrain(), fe = ve ? Se : Se && ee, _e = fe && !On.pointerDown();
    _e && Bt.stop();
    const Ce = Ae.get() * de + Ct.get() * (1 - de);
    Le.set(Ce), ve && (kt.loop(Ie.direction()), un.loop()), gt.to(Le.get()), _e && J.emit("settle"), fe || J.emit("scroll");
  }, P = yy(r, a, () => G(nt), (Ie) => Z(nt, Ie)), K = 0.68, se = j[Q.get()], ce = qn(se), le = qn(se), oe = qn(se), ge = qn(se), De = Ey(ce, oe, le, ge, m, K), me = Iy(c, j, z, V, ge), Pe = Ay(P, Q, ne, De, me, ge, i), je = Dy(V), Fe = Qn(), ze = $y(t, n, i, b), {
    slideRegistry: Ye
  } = Ry(F, y, j, $, X, ae), tt = zy(e, n, Ye, Pe, De, Fe, i, N), nt = {
    ownerDocument: r,
    ownerWindow: a,
    eventHandler: i,
    containerRect: k,
    slideRects: Y,
    animation: P,
    axis: I,
    dragHandler: xy(I, e, r, a, ge, _y(I, a), ce, P, Pe, De, me, Q, i, T, g, h, v, K, D),
    eventStore: Fe,
    percentOfView: T,
    index: Q,
    indexPrevious: ne,
    limit: V,
    location: ce,
    offsetLocation: oe,
    previousLocation: le,
    options: o,
    resizeHandler: Py(t, i, a, n, I, S, R),
    scrollBody: De,
    scrollBounds: Ny(V, oe, ge, De, T),
    scrollLooper: My(z, V, oe, [ce, oe, le, ge]),
    scrollProgress: je,
    scrollSnapList: j.map(je.get),
    scrollSnaps: j,
    scrollTarget: me,
    scrollTo: Pe,
    slideLooper: Ly(I, H, z, L, q, O, j, oe, n),
    slideFocus: tt,
    slidesHandler: qy(t, i, C),
    slidesInView: ze,
    slideIndexes: ae,
    slideRegistry: Ye,
    slidesToScroll: X,
    target: ge,
    translate: $m(I, t)
  };
  return nt;
}
function Hy() {
  let e = {}, t;
  function n(u) {
    t = u;
  }
  function r(u) {
    return e[u] || [];
  }
  function a(u) {
    return r(u).forEach((d) => d(t, u)), l;
  }
  function o(u, d) {
    return e[u] = r(u).concat([d]), l;
  }
  function i(u, d) {
    return e[u] = r(u).filter((c) => c !== d), l;
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
const Wy = {
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
function Yy(e) {
  function t(o, i) {
    return Lm(o, i || {});
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
function Vy(e) {
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
  const r = e.ownerDocument, a = r.defaultView, o = Yy(a), i = Vy(o), s = Qn(), l = Hy(), {
    mergeOptions: u,
    optionsAtMedia: d,
    optionsMediaQueries: c
  } = o, {
    on: m,
    off: g,
    emit: h
  } = l, b = I;
  let p = !1, v, y = u(Wy, kr.globalOptions), S = u(y), C = [], D, N, _;
  function R() {
    const {
      container: ae,
      slides: G
    } = S;
    N = (Fs(ae) ? e.querySelector(ae) : ae) || e.children[0];
    const P = Fs(G) ? N.querySelectorAll(G) : G;
    _ = [].slice.call(P || N.children);
  }
  function k(ae) {
    const G = Fy(e, N, _, r, a, ae, l);
    if (ae.loop && !G.slideLooper.canLoop()) {
      const Z = Object.assign({}, ae, {
        loop: !1
      });
      return k(Z);
    }
    return G;
  }
  function Y(ae, G) {
    p || (y = u(y, ae), S = d(y), C = G || C, R(), v = k(S), c([y, ...C.map(({
      options: Z
    }) => Z)]).forEach((Z) => s.add(Z, "change", I)), S.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(ne), v.eventHandler.init(ne), v.resizeHandler.init(ne), v.slidesHandler.init(ne), v.options.loop && v.slideLooper.loop(), N.offsetParent && _.length && v.dragHandler.init(ne), D = i.init(ne, C)));
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
  function E() {
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
    return N;
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
    slidesInView: E,
    slidesNotInView: z
  };
  return Y(t, n), setTimeout(() => l.emit("init"), 0), ne;
}
kr.globalOptions = void 0;
function Ml(e = {}, t = []) {
  const n = xn(e), r = xn(t), [a, o] = Ot(), [i, s] = Ot(), l = hm(() => {
    a && a.reInit(n.current, r.current);
  }, [a]);
  return st(() => {
    El(n.current, e) || (n.current = e, l());
  }, [e, l]), st(() => {
    hy(r.current, t) || (r.current = t, l());
  }, [t, l]), st(() => {
    if (py() && i) {
      kr.globalOptions = Ml.globalOptions;
      const u = kr(i, n.current, r.current);
      return o(u), () => u.destroy();
    } else
      o(void 0);
  }, [i, o]), [s, a];
}
Ml.globalOptions = void 0;
const Bm = M.createContext(null);
function Jr() {
  const e = M.useContext(Bm);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function FE({
  orientation: e = "horizontal",
  opts: t,
  setApi: n,
  plugins: r,
  className: a,
  children: o,
  ...i
}) {
  const [s, l] = Ml(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    r
  ), [u, d] = M.useState(!1), [c, m] = M.useState(!1), g = M.useCallback((v) => {
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
    Bm.Provider,
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
      children: /* @__PURE__ */ f(
        "div",
        {
          onKeyDownCapture: p,
          className: x("relative", a),
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
function HE({ className: e, ...t }) {
  const { carouselRef: n, orientation: r } = Jr();
  return /* @__PURE__ */ f("div", { ref: n, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ f(
    "div",
    {
      className: x("flex", r === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    }
  ) });
}
function WE({ className: e, ...t }) {
  const { orientation: n } = Jr();
  return /* @__PURE__ */ f(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: x(
        "min-w-0 shrink-0 grow-0 basis-full",
        n === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function YE({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...r
}) {
  const { orientation: a, scrollPrev: o, canScrollPrev: i } = Jr();
  return /* @__PURE__ */ U(
    ml,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: n,
      className: x(
        "absolute size-8 rounded-full",
        a === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: o,
      ...r,
      children: [
        /* @__PURE__ */ f(Yh, {}),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function VE({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...r
}) {
  const { orientation: a, scrollNext: o, canScrollNext: i } = Jr();
  return /* @__PURE__ */ U(
    ml,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: n,
      className: x(
        "absolute size-8 rounded-full",
        a === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: o,
      ...r,
      children: [
        /* @__PURE__ */ f(Wh, {}),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
var vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ca, bu;
function pt() {
  if (bu) return Ca;
  bu = 1;
  var e = Array.isArray;
  return Ca = e, Ca;
}
var Pa, yu;
function jm() {
  if (yu) return Pa;
  yu = 1;
  var e = typeof vr == "object" && vr && vr.Object === Object && vr;
  return Pa = e, Pa;
}
var Ea, wu;
function St() {
  if (wu) return Ea;
  wu = 1;
  var e = jm(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Ea = n, Ea;
}
var Na, xu;
function dr() {
  if (xu) return Na;
  xu = 1;
  var e = St(), t = e.Symbol;
  return Na = t, Na;
}
var Ta, _u;
function Gy() {
  if (_u) return Ta;
  _u = 1;
  var e = dr(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, a = e ? e.toStringTag : void 0;
  function o(i) {
    var s = n.call(i, a), l = i[a];
    try {
      i[a] = void 0;
      var u = !0;
    } catch {
    }
    var d = r.call(i);
    return u && (s ? i[a] = l : delete i[a]), d;
  }
  return Ta = o, Ta;
}
var Oa, Su;
function Uy() {
  if (Su) return Oa;
  Su = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return Oa = n, Oa;
}
var Ma, Cu;
function an() {
  if (Cu) return Ma;
  Cu = 1;
  var e = dr(), t = Gy(), n = Uy(), r = "[object Null]", a = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? a : r : o && o in Object(s) ? t(s) : n(s);
  }
  return Ma = i, Ma;
}
var Da, Pu;
function on() {
  if (Pu) return Da;
  Pu = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Da = e, Da;
}
var ka, Eu;
function fr() {
  if (Eu) return ka;
  Eu = 1;
  var e = an(), t = on(), n = "[object Symbol]";
  function r(a) {
    return typeof a == "symbol" || t(a) && e(a) == n;
  }
  return ka = r, ka;
}
var Ra, Nu;
function Dl() {
  if (Nu) return Ra;
  Nu = 1;
  var e = pt(), t = fr(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function a(o, i) {
    if (e(o))
      return !1;
    var s = typeof o;
    return s == "number" || s == "symbol" || s == "boolean" || o == null || t(o) ? !0 : r.test(o) || !n.test(o) || i != null && o in Object(i);
  }
  return Ra = a, Ra;
}
var Ia, Tu;
function qt() {
  if (Tu) return Ia;
  Tu = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Ia = e, Ia;
}
var Aa, Ou;
function kl() {
  if (Ou) return Aa;
  Ou = 1;
  var e = an(), t = qt(), n = "[object AsyncFunction]", r = "[object Function]", a = "[object GeneratorFunction]", o = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var l = e(s);
    return l == r || l == a || l == n || l == o;
  }
  return Aa = i, Aa;
}
var za, Mu;
function Ky() {
  if (Mu) return za;
  Mu = 1;
  var e = St(), t = e["__core-js_shared__"];
  return za = t, za;
}
var La, Du;
function Xy() {
  if (Du) return La;
  Du = 1;
  var e = Ky(), t = (function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!t && t in r;
  }
  return La = n, La;
}
var qa, ku;
function Fm() {
  if (ku) return qa;
  ku = 1;
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
  return qa = n, qa;
}
var $a, Ru;
function Qy() {
  if (Ru) return $a;
  Ru = 1;
  var e = kl(), t = Xy(), n = qt(), r = Fm(), a = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, l = i.toString, u = s.hasOwnProperty, d = RegExp(
    "^" + l.call(u).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function c(m) {
    if (!n(m) || t(m))
      return !1;
    var g = e(m) ? d : o;
    return g.test(r(m));
  }
  return $a = c, $a;
}
var Ba, Iu;
function Jy() {
  if (Iu) return Ba;
  Iu = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return Ba = e, Ba;
}
var ja, Au;
function sn() {
  if (Au) return ja;
  Au = 1;
  var e = Qy(), t = Jy();
  function n(r, a) {
    var o = t(r, a);
    return e(o) ? o : void 0;
  }
  return ja = n, ja;
}
var Fa, zu;
function Zr() {
  if (zu) return Fa;
  zu = 1;
  var e = sn(), t = e(Object, "create");
  return Fa = t, Fa;
}
var Ha, Lu;
function Zy() {
  if (Lu) return Ha;
  Lu = 1;
  var e = Zr();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ha = t, Ha;
}
var Wa, qu;
function e0() {
  if (qu) return Wa;
  qu = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return Wa = e, Wa;
}
var Ya, $u;
function t0() {
  if ($u) return Ya;
  $u = 1;
  var e = Zr(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function a(o) {
    var i = this.__data__;
    if (e) {
      var s = i[o];
      return s === t ? void 0 : s;
    }
    return r.call(i, o) ? i[o] : void 0;
  }
  return Ya = a, Ya;
}
var Va, Bu;
function n0() {
  if (Bu) return Va;
  Bu = 1;
  var e = Zr(), t = Object.prototype, n = t.hasOwnProperty;
  function r(a) {
    var o = this.__data__;
    return e ? o[a] !== void 0 : n.call(o, a);
  }
  return Va = r, Va;
}
var Ga, ju;
function r0() {
  if (ju) return Ga;
  ju = 1;
  var e = Zr(), t = "__lodash_hash_undefined__";
  function n(r, a) {
    var o = this.__data__;
    return this.size += this.has(r) ? 0 : 1, o[r] = e && a === void 0 ? t : a, this;
  }
  return Ga = n, Ga;
}
var Ua, Fu;
function a0() {
  if (Fu) return Ua;
  Fu = 1;
  var e = Zy(), t = e0(), n = t0(), r = n0(), a = r0();
  function o(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var u = i[s];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = a, Ua = o, Ua;
}
var Ka, Hu;
function o0() {
  if (Hu) return Ka;
  Hu = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ka = e, Ka;
}
var Xa, Wu;
function Rl() {
  if (Wu) return Xa;
  Wu = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Xa = e, Xa;
}
var Qa, Yu;
function ea() {
  if (Yu) return Qa;
  Yu = 1;
  var e = Rl();
  function t(n, r) {
    for (var a = n.length; a--; )
      if (e(n[a][0], r))
        return a;
    return -1;
  }
  return Qa = t, Qa;
}
var Ja, Vu;
function i0() {
  if (Vu) return Ja;
  Vu = 1;
  var e = ea(), t = Array.prototype, n = t.splice;
  function r(a) {
    var o = this.__data__, i = e(o, a);
    if (i < 0)
      return !1;
    var s = o.length - 1;
    return i == s ? o.pop() : n.call(o, i, 1), --this.size, !0;
  }
  return Ja = r, Ja;
}
var Za, Gu;
function s0() {
  if (Gu) return Za;
  Gu = 1;
  var e = ea();
  function t(n) {
    var r = this.__data__, a = e(r, n);
    return a < 0 ? void 0 : r[a][1];
  }
  return Za = t, Za;
}
var eo, Uu;
function l0() {
  if (Uu) return eo;
  Uu = 1;
  var e = ea();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return eo = t, eo;
}
var to, Ku;
function u0() {
  if (Ku) return to;
  Ku = 1;
  var e = ea();
  function t(n, r) {
    var a = this.__data__, o = e(a, n);
    return o < 0 ? (++this.size, a.push([n, r])) : a[o][1] = r, this;
  }
  return to = t, to;
}
var no, Xu;
function ta() {
  if (Xu) return no;
  Xu = 1;
  var e = o0(), t = i0(), n = s0(), r = l0(), a = u0();
  function o(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var u = i[s];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = a, no = o, no;
}
var ro, Qu;
function Il() {
  if (Qu) return ro;
  Qu = 1;
  var e = sn(), t = St(), n = e(t, "Map");
  return ro = n, ro;
}
var ao, Ju;
function c0() {
  if (Ju) return ao;
  Ju = 1;
  var e = a0(), t = ta(), n = Il();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return ao = r, ao;
}
var oo, Zu;
function d0() {
  if (Zu) return oo;
  Zu = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return oo = e, oo;
}
var io, ec;
function na() {
  if (ec) return io;
  ec = 1;
  var e = d0();
  function t(n, r) {
    var a = n.__data__;
    return e(r) ? a[typeof r == "string" ? "string" : "hash"] : a.map;
  }
  return io = t, io;
}
var so, tc;
function f0() {
  if (tc) return so;
  tc = 1;
  var e = na();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return so = t, so;
}
var lo, nc;
function m0() {
  if (nc) return lo;
  nc = 1;
  var e = na();
  function t(n) {
    return e(this, n).get(n);
  }
  return lo = t, lo;
}
var uo, rc;
function p0() {
  if (rc) return uo;
  rc = 1;
  var e = na();
  function t(n) {
    return e(this, n).has(n);
  }
  return uo = t, uo;
}
var co, ac;
function h0() {
  if (ac) return co;
  ac = 1;
  var e = na();
  function t(n, r) {
    var a = e(this, n), o = a.size;
    return a.set(n, r), this.size += a.size == o ? 0 : 1, this;
  }
  return co = t, co;
}
var fo, oc;
function Al() {
  if (oc) return fo;
  oc = 1;
  var e = c0(), t = f0(), n = m0(), r = p0(), a = h0();
  function o(i) {
    var s = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++s < l; ) {
      var u = i[s];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = a, fo = o, fo;
}
var mo, ic;
function g0() {
  if (ic) return mo;
  ic = 1;
  var e = Al(), t = "Expected a function";
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
  return n.Cache = e, mo = n, mo;
}
var po, sc;
function v0() {
  if (sc) return po;
  sc = 1;
  var e = g0(), t = 500;
  function n(r) {
    var a = e(r, function(i) {
      return o.size === t && o.clear(), i;
    }), o = a.cache;
    return a;
  }
  return po = n, po;
}
var ho, lc;
function b0() {
  if (lc) return ho;
  lc = 1;
  var e = v0(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(a) {
    var o = [];
    return a.charCodeAt(0) === 46 && o.push(""), a.replace(t, function(i, s, l, u) {
      o.push(l ? u.replace(n, "$1") : s || i);
    }), o;
  });
  return ho = r, ho;
}
var go, uc;
function Hm() {
  if (uc) return go;
  uc = 1;
  function e(t, n) {
    for (var r = -1, a = t == null ? 0 : t.length, o = Array(a); ++r < a; )
      o[r] = n(t[r], r, t);
    return o;
  }
  return go = e, go;
}
var vo, cc;
function y0() {
  if (cc) return vo;
  cc = 1;
  var e = dr(), t = Hm(), n = pt(), r = fr(), a = e ? e.prototype : void 0, o = a ? a.toString : void 0;
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
  return vo = i, vo;
}
var bo, dc;
function Wm() {
  if (dc) return bo;
  dc = 1;
  var e = y0();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return bo = t, bo;
}
var yo, fc;
function Ym() {
  if (fc) return yo;
  fc = 1;
  var e = pt(), t = Dl(), n = b0(), r = Wm();
  function a(o, i) {
    return e(o) ? o : t(o, i) ? [o] : n(r(o));
  }
  return yo = a, yo;
}
var wo, mc;
function ra() {
  if (mc) return wo;
  mc = 1;
  var e = fr();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return wo = t, wo;
}
var xo, pc;
function zl() {
  if (pc) return xo;
  pc = 1;
  var e = Ym(), t = ra();
  function n(r, a) {
    a = e(a, r);
    for (var o = 0, i = a.length; r != null && o < i; )
      r = r[t(a[o++])];
    return o && o == i ? r : void 0;
  }
  return xo = n, xo;
}
var _o, hc;
function Vm() {
  if (hc) return _o;
  hc = 1;
  var e = zl();
  function t(n, r, a) {
    var o = n == null ? void 0 : e(n, r);
    return o === void 0 ? a : o;
  }
  return _o = t, _o;
}
Vm();
var So, gc;
function w0() {
  if (gc) return So;
  gc = 1;
  function e(t) {
    return t == null;
  }
  return So = e, So;
}
var x0 = w0();
const _0 = /* @__PURE__ */ _t(x0);
var Co, vc;
function S0() {
  if (vc) return Co;
  vc = 1;
  var e = an(), t = pt(), n = on(), r = "[object String]";
  function a(o) {
    return typeof o == "string" || !t(o) && n(o) && e(o) == r;
  }
  return Co = a, Co;
}
var C0 = S0();
const Gm = /* @__PURE__ */ _t(C0);
var P0 = kl();
const Rr = /* @__PURE__ */ _t(P0);
var E0 = qt();
const Um = /* @__PURE__ */ _t(E0);
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
var bc;
function N0() {
  if (bc) return be;
  bc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
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
            case d:
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
  return be.ContextConsumer = i, be.ContextProvider = o, be.Element = e, be.ForwardRef = l, be.Fragment = n, be.Lazy = m, be.Memo = c, be.Portal = t, be.Profiler = a, be.StrictMode = r, be.Suspense = u, be.SuspenseList = d, be.isAsyncMode = function() {
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
    return b(p) === d;
  }, be.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === a || p === r || p === u || p === d || p === g || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === c || p.$$typeof === o || p.$$typeof === i || p.$$typeof === l || p.$$typeof === h || p.getModuleId !== void 0);
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
var yc;
function T0() {
  return yc || (yc = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, v = !1, y = !1, S;
    S = Symbol.for("react.module.reference");
    function C(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === a || y || P === r || P === u || P === d || v || P === g || h || b || p || typeof P == "object" && P !== null && (P.$$typeof === m || P.$$typeof === c || P.$$typeof === o || P.$$typeof === i || P.$$typeof === l || // This needs to include all possible module reference object
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
              case d:
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
    var N = i, _ = o, R = e, k = l, Y = n, I = m, H = c, T = t, W = a, F = r, B = u, L = d, q = !1, te = !1;
    function ie(P) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(P) {
      return te || (te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(P) {
      return D(P) === i;
    }
    function E(P) {
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
      return D(P) === d;
    }
    ye.ContextConsumer = N, ye.ContextProvider = _, ye.Element = R, ye.ForwardRef = k, ye.Fragment = Y, ye.Lazy = I, ye.Memo = H, ye.Portal = T, ye.Profiler = W, ye.StrictMode = F, ye.Suspense = B, ye.SuspenseList = L, ye.isAsyncMode = ie, ye.isConcurrentMode = X, ye.isContextConsumer = O, ye.isContextProvider = E, ye.isElement = z, ye.isForwardRef = A, ye.isFragment = $, ye.isLazy = j, ye.isMemo = V, ye.isPortal = Q, ye.isProfiler = ne, ye.isStrictMode = ae, ye.isSuspense = G, ye.isSuspenseList = Z, ye.isValidElementType = C, ye.typeOf = D;
  })()), ye;
}
var wc;
function O0() {
  return wc || (wc = 1, process.env.NODE_ENV === "production" ? br.exports = N0() : br.exports = T0()), br.exports;
}
O0();
var Po, xc;
function Km() {
  if (xc) return Po;
  xc = 1;
  var e = an(), t = on(), n = "[object Number]";
  function r(a) {
    return typeof a == "number" || t(a) && e(a) == n;
  }
  return Po = r, Po;
}
var Eo, _c;
function M0() {
  if (_c) return Eo;
  _c = 1;
  var e = Km();
  function t(n) {
    return e(n) && n != +n;
  }
  return Eo = t, Eo;
}
var D0 = M0();
const k0 = /* @__PURE__ */ _t(D0);
var R0 = Km();
const I0 = /* @__PURE__ */ _t(R0);
var yr = function(t) {
  return Gm(t) && t.indexOf("%") === t.length - 1;
}, ut = function(t) {
  return I0(t) && !k0(t);
}, Ir = function(t) {
  return ut(t) || Gm(t);
};
function Ws(e) {
  "@babel/helpers - typeof";
  return Ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ws(e);
}
var A0 = ["viewBox", "children"], z0 = [
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
], Sc = ["points", "pathLength"], No = {
  svg: A0,
  polygon: Sc,
  polyline: Sc
}, Xm = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], L0 = function(t, n, r) {
  return function(a) {
    return t(n, r, a), null;
  };
}, q0 = function(t, n, r) {
  if (!Um(t) || Ws(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(o) {
    var i = t[o];
    Xm.includes(o) && typeof i == "function" && (a || (a = {}), a[o] = L0(i, n, r));
  }), a;
}, $0 = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, B0 = function(t, n, r, a) {
  var o, i = (o = No == null ? void 0 : No[a]) !== null && o !== void 0 ? o : [];
  return n.startsWith("data-") || !Rr(t) && (a && i.includes(n) || z0.includes(n)) || Xm.includes(n);
}, Qm = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ eg(t) && (a = t.props), !Um(a))
    return null;
  var o = {};
  return Object.keys(a).forEach(function(i) {
    var s;
    B0((s = a) === null || s === void 0 ? void 0 : s[i], i, n, r) && (o[i] = a[i]);
  }), o;
}, j0 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Ys() {
  return Ys = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ys.apply(this, arguments);
}
function F0(e, t) {
  if (e == null) return {};
  var n = H0(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function H0(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function W0(e) {
  var t = e.children, n = e.width, r = e.height, a = e.viewBox, o = e.className, i = e.style, s = e.title, l = e.desc, u = F0(e, j0), d = a || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, c = Kt("recharts-surface", o);
  return /* @__PURE__ */ w.createElement("svg", Ys({}, Qm(u, !0, "svg"), {
    className: c,
    width: n,
    height: r,
    style: i,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ w.createElement("title", null, s), /* @__PURE__ */ w.createElement("desc", null, l), t);
}
var Y0 = process.env.NODE_ENV !== "production", Tr = function(t, n) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    a[o - 2] = arguments[o];
  if (Y0 && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(n.replace(/%s/g, function() {
        return a[i++];
      }));
    }
}, To, Cc;
function V0() {
  if (Cc) return To;
  Cc = 1;
  function e(t, n, r) {
    var a = -1, o = t.length;
    n < 0 && (n = -n > o ? 0 : o + n), r = r > o ? o : r, r < 0 && (r += o), o = n > r ? 0 : r - n >>> 0, n >>>= 0;
    for (var i = Array(o); ++a < o; )
      i[a] = t[a + n];
    return i;
  }
  return To = e, To;
}
var Oo, Pc;
function G0() {
  if (Pc) return Oo;
  Pc = 1;
  var e = V0();
  function t(n, r, a) {
    var o = n.length;
    return a = a === void 0 ? o : a, !r && a >= o ? n : e(n, r, a);
  }
  return Oo = t, Oo;
}
var Mo, Ec;
function Jm() {
  if (Ec) return Mo;
  Ec = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", a = t + n + r, o = "\\ufe0e\\ufe0f", i = "\\u200d", s = RegExp("[" + i + e + a + o + "]");
  function l(u) {
    return s.test(u);
  }
  return Mo = l, Mo;
}
var Do, Nc;
function U0() {
  if (Nc) return Do;
  Nc = 1;
  function e(t) {
    return t.split("");
  }
  return Do = e, Do;
}
var ko, Tc;
function K0() {
  if (Tc) return ko;
  Tc = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", a = t + n + r, o = "\\ufe0e\\ufe0f", i = "[" + e + "]", s = "[" + a + "]", l = "\\ud83c[\\udffb-\\udfff]", u = "(?:" + s + "|" + l + ")", d = "[^" + e + "]", c = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", g = "\\u200d", h = u + "?", b = "[" + o + "]?", p = "(?:" + g + "(?:" + [d, c, m].join("|") + ")" + b + h + ")*", v = b + h + p, y = "(?:" + [d + s + "?", s, c, m, i].join("|") + ")", S = RegExp(l + "(?=" + l + ")|" + y + v, "g");
  function C(D) {
    return D.match(S) || [];
  }
  return ko = C, ko;
}
var Ro, Oc;
function X0() {
  if (Oc) return Ro;
  Oc = 1;
  var e = U0(), t = Jm(), n = K0();
  function r(a) {
    return t(a) ? n(a) : e(a);
  }
  return Ro = r, Ro;
}
var Io, Mc;
function Q0() {
  if (Mc) return Io;
  Mc = 1;
  var e = G0(), t = Jm(), n = X0(), r = Wm();
  function a(o) {
    return function(i) {
      i = r(i);
      var s = t(i) ? n(i) : void 0, l = s ? s[0] : i.charAt(0), u = s ? e(s, 1).join("") : i.slice(1);
      return l[o]() + u;
    };
  }
  return Io = a, Io;
}
var Ao, Dc;
function J0() {
  if (Dc) return Ao;
  Dc = 1;
  var e = Q0(), t = e("toUpperCase");
  return Ao = t, Ao;
}
var Z0 = J0();
const Zm = /* @__PURE__ */ _t(Z0);
function wr(e) {
  return function() {
    return e;
  };
}
const ep = Math.cos, Ar = Math.sin, ht = Math.sqrt, zr = Math.PI, aa = 2 * zr, Vs = Math.PI, Gs = 2 * Vs, Yt = 1e-6, ew = Gs - Yt;
function tp(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function tw(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return tp;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let a = 1, o = r.length; a < o; ++a)
      this._ += Math.round(arguments[a] * n) / n + r[a];
  };
}
class nw {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? tp : tw(t);
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
    let i = this._x1, s = this._y1, l = r - t, u = a - n, d = i - t, c = s - n, m = d * d + c * c;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (m > Yt) if (!(Math.abs(c * l - u * d) > Yt) || !o)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let g = r - i, h = a - s, b = l * l + u * u, p = g * g + h * h, v = Math.sqrt(b), y = Math.sqrt(m), S = o * Math.tan((Vs - Math.acos((b + m - p) / (2 * v * y))) / 2), C = S / y, D = S / v;
      Math.abs(C - 1) > Yt && this._append`L${t + C * d},${n + C * c}`, this._append`A${o},${o},0,0,${+(c * g > d * h)},${this._x1 = t + D * l},${this._y1 = n + D * u}`;
    }
  }
  arc(t, n, r, a, o, i) {
    if (t = +t, n = +n, r = +r, i = !!i, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(a), l = r * Math.sin(a), u = t + s, d = n + l, c = 1 ^ i, m = i ? a - o : o - a;
    this._x1 === null ? this._append`M${u},${d}` : (Math.abs(this._x1 - u) > Yt || Math.abs(this._y1 - d) > Yt) && this._append`L${u},${d}`, r && (m < 0 && (m = m % Gs + Gs), m > ew ? this._append`A${r},${r},0,1,${c},${t - s},${n - l}A${r},${r},0,1,${c},${this._x1 = u},${this._y1 = d}` : m > Yt && this._append`A${r},${r},0,${+(m >= Vs)},${c},${this._x1 = t + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(t, n, r, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+a}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function rw(e) {
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
  }, () => new nw(t);
}
const Ll = {
  draw(e, t) {
    const n = ht(t / zr);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, aa);
  }
}, aw = {
  draw(e, t) {
    const n = ht(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, np = ht(1 / 3), ow = np * 2, iw = {
  draw(e, t) {
    const n = ht(t / ow), r = n * np;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, sw = {
  draw(e, t) {
    const n = ht(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, lw = 0.8908130915292852, rp = Ar(zr / 10) / Ar(7 * zr / 10), uw = Ar(aa / 10) * rp, cw = -ep(aa / 10) * rp, dw = {
  draw(e, t) {
    const n = ht(t * lw), r = uw * n, a = cw * n;
    e.moveTo(0, -n), e.lineTo(r, a);
    for (let o = 1; o < 5; ++o) {
      const i = aa * o / 5, s = ep(i), l = Ar(i);
      e.lineTo(l * n, -s * n), e.lineTo(s * r - l * a, l * r + s * a);
    }
    e.closePath();
  }
}, zo = ht(3), fw = {
  draw(e, t) {
    const n = -ht(t / (zo * 3));
    e.moveTo(0, n * 2), e.lineTo(-zo * n, -n), e.lineTo(zo * n, -n), e.closePath();
  }
}, at = -0.5, ot = ht(3) / 2, Us = 1 / ht(12), mw = (Us / 2 + 1) * 3, pw = {
  draw(e, t) {
    const n = ht(t / mw), r = n / 2, a = n * Us, o = r, i = n * Us + n, s = -o, l = i;
    e.moveTo(r, a), e.lineTo(o, i), e.lineTo(s, l), e.lineTo(at * r - ot * a, ot * r + at * a), e.lineTo(at * o - ot * i, ot * o + at * i), e.lineTo(at * s - ot * l, ot * s + at * l), e.lineTo(at * r + ot * a, at * a - ot * r), e.lineTo(at * o + ot * i, at * i - ot * o), e.lineTo(at * s + ot * l, at * l - ot * s), e.closePath();
  }
};
function hw(e, t) {
  let n = null, r = rw(a);
  e = typeof e == "function" ? e : wr(e || Ll), t = typeof t == "function" ? t : wr(t === void 0 ? 64 : +t);
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
var gw = ["type", "size", "sizeType"];
function Ks() {
  return Ks = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ks.apply(this, arguments);
}
function kc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Rc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kc(Object(n), !0).forEach(function(r) {
      vw(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function vw(e, t, n) {
  return t = bw(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function bw(e) {
  var t = yw(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function yw(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Jn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ww(e, t) {
  if (e == null) return {};
  var n = xw(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function xw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var ap = {
  symbolCircle: Ll,
  symbolCross: aw,
  symbolDiamond: iw,
  symbolSquare: sw,
  symbolStar: dw,
  symbolTriangle: fw,
  symbolWye: pw
}, _w = Math.PI / 180, Sw = function(t) {
  var n = "symbol".concat(Zm(t));
  return ap[n] || Ll;
}, Cw = function(t, n, r) {
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
      var a = 18 * _w;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, Pw = function(t, n) {
  ap["symbol".concat(Zm(t))] = n;
}, op = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, a = t.size, o = a === void 0 ? 64 : a, i = t.sizeType, s = i === void 0 ? "area" : i, l = ww(t, gw), u = Rc(Rc({}, l), {}, {
    type: r,
    size: o,
    sizeType: s
  }), d = function() {
    var p = Sw(r), v = hw().type(p).size(Cw(o, s, r));
    return v();
  }, c = u.className, m = u.cx, g = u.cy, h = Qm(u, !0);
  return m === +m && g === +g && o === +o ? /* @__PURE__ */ w.createElement("path", Ks({}, h, {
    className: Kt("recharts-symbols", c),
    transform: "translate(".concat(m, ", ").concat(g, ")"),
    d: d()
  })) : null;
};
op.registerSymbol = Pw;
function Cn(e) {
  "@babel/helpers - typeof";
  return Cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cn(e);
}
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
function Ew(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ic(Object(n), !0).forEach(function(r) {
      Zn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ic(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Nw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tw(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, sp(r.key), r);
  }
}
function Ow(e, t, n) {
  return t && Tw(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Mw(e, t, n) {
  return t = Lr(t), Dw(e, ip() ? Reflect.construct(t, n || [], Lr(e).constructor) : t.apply(e, n));
}
function Dw(e, t) {
  if (t && (Cn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return kw(e);
}
function kw(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ip() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ip = function() {
    return !!e;
  })();
}
function Lr(e) {
  return Lr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Lr(e);
}
function Rw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Qs(e, t);
}
function Qs(e, t) {
  return Qs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Qs(e, t);
}
function Zn(e, t, n) {
  return t = sp(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function sp(e) {
  var t = Iw(e, "string");
  return Cn(t) == "symbol" ? t : t + "";
}
function Iw(e, t) {
  if (Cn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Cn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var it = 32, ql = /* @__PURE__ */ (function(e) {
  function t() {
    return Nw(this, t), Mw(this, t, arguments);
  }
  return Rw(t, e), Ow(t, [{
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
          return /* @__PURE__ */ w.createElement("line", {
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
          return /* @__PURE__ */ w.createElement("path", {
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
          return /* @__PURE__ */ w.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat(it / 8, "h").concat(it, "v").concat(it * 3 / 4, "h").concat(-it, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ w.isValidElement(r.legendIcon)) {
          var u = Ew({}, r);
          return delete u.legendIcon, /* @__PURE__ */ w.cloneElement(r.legendIcon, u);
        }
        return /* @__PURE__ */ w.createElement(op, {
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
      var r = this, a = this.props, o = a.payload, i = a.iconSize, s = a.layout, l = a.formatter, u = a.inactiveColor, d = {
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
        var b = g.formatter || l, p = Kt(Zn(Zn({
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
        return /* @__PURE__ */ w.createElement("li", Xs({
          className: p,
          style: c,
          key: "legend-item-".concat(h)
        }, q0(r.props, g, h)), /* @__PURE__ */ w.createElement(W0, {
          width: i,
          height: i,
          viewBox: d,
          style: m
        }, r.renderIcon(g)), /* @__PURE__ */ w.createElement("span", {
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
      return /* @__PURE__ */ w.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
})(Gr);
Zn(ql, "displayName", "Legend");
Zn(ql, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Lo, Ac;
function Aw() {
  if (Ac) return Lo;
  Ac = 1;
  var e = ta();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Lo = t, Lo;
}
var qo, zc;
function zw() {
  if (zc) return qo;
  zc = 1;
  function e(t) {
    var n = this.__data__, r = n.delete(t);
    return this.size = n.size, r;
  }
  return qo = e, qo;
}
var $o, Lc;
function Lw() {
  if (Lc) return $o;
  Lc = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return $o = e, $o;
}
var Bo, qc;
function qw() {
  if (qc) return Bo;
  qc = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Bo = e, Bo;
}
var jo, $c;
function $w() {
  if ($c) return jo;
  $c = 1;
  var e = ta(), t = Il(), n = Al(), r = 200;
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
  return jo = a, jo;
}
var Fo, Bc;
function lp() {
  if (Bc) return Fo;
  Bc = 1;
  var e = ta(), t = Aw(), n = zw(), r = Lw(), a = qw(), o = $w();
  function i(s) {
    var l = this.__data__ = new e(s);
    this.size = l.size;
  }
  return i.prototype.clear = t, i.prototype.delete = n, i.prototype.get = r, i.prototype.has = a, i.prototype.set = o, Fo = i, Fo;
}
var Ho, jc;
function Bw() {
  if (jc) return Ho;
  jc = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Ho = t, Ho;
}
var Wo, Fc;
function jw() {
  if (Fc) return Wo;
  Fc = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Wo = e, Wo;
}
var Yo, Hc;
function up() {
  if (Hc) return Yo;
  Hc = 1;
  var e = Al(), t = Bw(), n = jw();
  function r(a) {
    var o = -1, i = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++o < i; )
      this.add(a[o]);
  }
  return r.prototype.add = r.prototype.push = t, r.prototype.has = n, Yo = r, Yo;
}
var Vo, Wc;
function Fw() {
  if (Wc) return Vo;
  Wc = 1;
  function e(t, n) {
    for (var r = -1, a = t == null ? 0 : t.length; ++r < a; )
      if (n(t[r], r, t))
        return !0;
    return !1;
  }
  return Vo = e, Vo;
}
var Go, Yc;
function cp() {
  if (Yc) return Go;
  Yc = 1;
  function e(t, n) {
    return t.has(n);
  }
  return Go = e, Go;
}
var Uo, Vc;
function dp() {
  if (Vc) return Uo;
  Vc = 1;
  var e = up(), t = Fw(), n = cp(), r = 1, a = 2;
  function o(i, s, l, u, d, c) {
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
        var N = m ? u(D, C, v, s, i, c) : u(C, D, v, i, s, c);
      if (N !== void 0) {
        if (N)
          continue;
        y = !1;
        break;
      }
      if (S) {
        if (!t(s, function(_, R) {
          if (!n(S, R) && (C === _ || d(C, _, l, u, c)))
            return S.push(R);
        })) {
          y = !1;
          break;
        }
      } else if (!(C === D || d(C, D, l, u, c))) {
        y = !1;
        break;
      }
    }
    return c.delete(i), c.delete(s), y;
  }
  return Uo = o, Uo;
}
var Ko, Gc;
function Hw() {
  if (Gc) return Ko;
  Gc = 1;
  var e = St(), t = e.Uint8Array;
  return Ko = t, Ko;
}
var Xo, Uc;
function Ww() {
  if (Uc) return Xo;
  Uc = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(a, o) {
      r[++n] = [o, a];
    }), r;
  }
  return Xo = e, Xo;
}
var Qo, Kc;
function $l() {
  if (Kc) return Qo;
  Kc = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(a) {
      r[++n] = a;
    }), r;
  }
  return Qo = e, Qo;
}
var Jo, Xc;
function Yw() {
  if (Xc) return Jo;
  Xc = 1;
  var e = dr(), t = Hw(), n = Rl(), r = dp(), a = Ww(), o = $l(), i = 1, s = 2, l = "[object Boolean]", u = "[object Date]", d = "[object Error]", c = "[object Map]", m = "[object Number]", g = "[object RegExp]", h = "[object Set]", b = "[object String]", p = "[object Symbol]", v = "[object ArrayBuffer]", y = "[object DataView]", S = e ? e.prototype : void 0, C = S ? S.valueOf : void 0;
  function D(N, _, R, k, Y, I, H) {
    switch (R) {
      case y:
        if (N.byteLength != _.byteLength || N.byteOffset != _.byteOffset)
          return !1;
        N = N.buffer, _ = _.buffer;
      case v:
        return !(N.byteLength != _.byteLength || !I(new t(N), new t(_)));
      case l:
      case u:
      case m:
        return n(+N, +_);
      case d:
        return N.name == _.name && N.message == _.message;
      case g:
      case b:
        return N == _ + "";
      case c:
        var T = a;
      case h:
        var W = k & i;
        if (T || (T = o), N.size != _.size && !W)
          return !1;
        var F = H.get(N);
        if (F)
          return F == _;
        k |= s, H.set(N, _);
        var B = r(T(N), T(_), k, Y, I, H);
        return H.delete(N), B;
      case p:
        if (C)
          return C.call(N) == C.call(_);
    }
    return !1;
  }
  return Jo = D, Jo;
}
var Zo, Qc;
function fp() {
  if (Qc) return Zo;
  Qc = 1;
  function e(t, n) {
    for (var r = -1, a = n.length, o = t.length; ++r < a; )
      t[o + r] = n[r];
    return t;
  }
  return Zo = e, Zo;
}
var ei, Jc;
function Vw() {
  if (Jc) return ei;
  Jc = 1;
  var e = fp(), t = pt();
  function n(r, a, o) {
    var i = a(r);
    return t(r) ? i : e(i, o(r));
  }
  return ei = n, ei;
}
var ti, Zc;
function Gw() {
  if (Zc) return ti;
  Zc = 1;
  function e(t, n) {
    for (var r = -1, a = t == null ? 0 : t.length, o = 0, i = []; ++r < a; ) {
      var s = t[r];
      n(s, r, t) && (i[o++] = s);
    }
    return i;
  }
  return ti = e, ti;
}
var ni, ed;
function Uw() {
  if (ed) return ni;
  ed = 1;
  function e() {
    return [];
  }
  return ni = e, ni;
}
var ri, td;
function Kw() {
  if (td) return ri;
  td = 1;
  var e = Gw(), t = Uw(), n = Object.prototype, r = n.propertyIsEnumerable, a = Object.getOwnPropertySymbols, o = a ? function(i) {
    return i == null ? [] : (i = Object(i), e(a(i), function(s) {
      return r.call(i, s);
    }));
  } : t;
  return ri = o, ri;
}
var ai, nd;
function Xw() {
  if (nd) return ai;
  nd = 1;
  function e(t, n) {
    for (var r = -1, a = Array(t); ++r < t; )
      a[r] = n(r);
    return a;
  }
  return ai = e, ai;
}
var oi, rd;
function Qw() {
  if (rd) return oi;
  rd = 1;
  var e = an(), t = on(), n = "[object Arguments]";
  function r(a) {
    return t(a) && e(a) == n;
  }
  return oi = r, oi;
}
var ii, ad;
function Bl() {
  if (ad) return ii;
  ad = 1;
  var e = Qw(), t = on(), n = Object.prototype, r = n.hasOwnProperty, a = n.propertyIsEnumerable, o = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(i) {
    return t(i) && r.call(i, "callee") && !a.call(i, "callee");
  };
  return ii = o, ii;
}
var $n = { exports: {} }, si, od;
function Jw() {
  if (od) return si;
  od = 1;
  function e() {
    return !1;
  }
  return si = e, si;
}
$n.exports;
var id;
function mp() {
  return id || (id = 1, (function(e, t) {
    var n = St(), r = Jw(), a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, i = o && o.exports === a, s = i ? n.Buffer : void 0, l = s ? s.isBuffer : void 0, u = l || r;
    e.exports = u;
  })($n, $n.exports)), $n.exports;
}
var li, sd;
function jl() {
  if (sd) return li;
  sd = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(r, a) {
    var o = typeof r;
    return a = a ?? e, !!a && (o == "number" || o != "symbol" && t.test(r)) && r > -1 && r % 1 == 0 && r < a;
  }
  return li = n, li;
}
var ui, ld;
function Fl() {
  if (ld) return ui;
  ld = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return ui = t, ui;
}
var ci, ud;
function Zw() {
  if (ud) return ci;
  ud = 1;
  var e = an(), t = Fl(), n = on(), r = "[object Arguments]", a = "[object Array]", o = "[object Boolean]", i = "[object Date]", s = "[object Error]", l = "[object Function]", u = "[object Map]", d = "[object Number]", c = "[object Object]", m = "[object RegExp]", g = "[object Set]", h = "[object String]", b = "[object WeakMap]", p = "[object ArrayBuffer]", v = "[object DataView]", y = "[object Float32Array]", S = "[object Float64Array]", C = "[object Int8Array]", D = "[object Int16Array]", N = "[object Int32Array]", _ = "[object Uint8Array]", R = "[object Uint8ClampedArray]", k = "[object Uint16Array]", Y = "[object Uint32Array]", I = {};
  I[y] = I[S] = I[C] = I[D] = I[N] = I[_] = I[R] = I[k] = I[Y] = !0, I[r] = I[a] = I[p] = I[o] = I[v] = I[i] = I[s] = I[l] = I[u] = I[d] = I[c] = I[m] = I[g] = I[h] = I[b] = !1;
  function H(T) {
    return n(T) && t(T.length) && !!I[e(T)];
  }
  return ci = H, ci;
}
var di, cd;
function pp() {
  if (cd) return di;
  cd = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return di = e, di;
}
var Bn = { exports: {} };
Bn.exports;
var dd;
function ex() {
  return dd || (dd = 1, (function(e, t) {
    var n = jm(), r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, o = a && a.exports === r, i = o && n.process, s = (function() {
      try {
        var l = a && a.require && a.require("util").types;
        return l || i && i.binding && i.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(Bn, Bn.exports)), Bn.exports;
}
var fi, fd;
function hp() {
  if (fd) return fi;
  fd = 1;
  var e = Zw(), t = pp(), n = ex(), r = n && n.isTypedArray, a = r ? t(r) : e;
  return fi = a, fi;
}
var mi, md;
function tx() {
  if (md) return mi;
  md = 1;
  var e = Xw(), t = Bl(), n = pt(), r = mp(), a = jl(), o = hp(), i = Object.prototype, s = i.hasOwnProperty;
  function l(u, d) {
    var c = n(u), m = !c && t(u), g = !c && !m && r(u), h = !c && !m && !g && o(u), b = c || m || g || h, p = b ? e(u.length, String) : [], v = p.length;
    for (var y in u)
      (d || s.call(u, y)) && !(b && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      h && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      a(y, v))) && p.push(y);
    return p;
  }
  return mi = l, mi;
}
var pi, pd;
function nx() {
  if (pd) return pi;
  pd = 1;
  var e = Object.prototype;
  function t(n) {
    var r = n && n.constructor, a = typeof r == "function" && r.prototype || e;
    return n === a;
  }
  return pi = t, pi;
}
var hi, hd;
function rx() {
  if (hd) return hi;
  hd = 1;
  function e(t, n) {
    return function(r) {
      return t(n(r));
    };
  }
  return hi = e, hi;
}
var gi, gd;
function ax() {
  if (gd) return gi;
  gd = 1;
  var e = rx(), t = e(Object.keys, Object);
  return gi = t, gi;
}
var vi, vd;
function ox() {
  if (vd) return vi;
  vd = 1;
  var e = nx(), t = ax(), n = Object.prototype, r = n.hasOwnProperty;
  function a(o) {
    if (!e(o))
      return t(o);
    var i = [];
    for (var s in Object(o))
      r.call(o, s) && s != "constructor" && i.push(s);
    return i;
  }
  return vi = a, vi;
}
var bi, bd;
function oa() {
  if (bd) return bi;
  bd = 1;
  var e = kl(), t = Fl();
  function n(r) {
    return r != null && t(r.length) && !e(r);
  }
  return bi = n, bi;
}
var yi, yd;
function Hl() {
  if (yd) return yi;
  yd = 1;
  var e = tx(), t = ox(), n = oa();
  function r(a) {
    return n(a) ? e(a) : t(a);
  }
  return yi = r, yi;
}
var wi, wd;
function ix() {
  if (wd) return wi;
  wd = 1;
  var e = Vw(), t = Kw(), n = Hl();
  function r(a) {
    return e(a, n, t);
  }
  return wi = r, wi;
}
var xi, xd;
function sx() {
  if (xd) return xi;
  xd = 1;
  var e = ix(), t = 1, n = Object.prototype, r = n.hasOwnProperty;
  function a(o, i, s, l, u, d) {
    var c = s & t, m = e(o), g = m.length, h = e(i), b = h.length;
    if (g != b && !c)
      return !1;
    for (var p = g; p--; ) {
      var v = m[p];
      if (!(c ? v in i : r.call(i, v)))
        return !1;
    }
    var y = d.get(o), S = d.get(i);
    if (y && S)
      return y == i && S == o;
    var C = !0;
    d.set(o, i), d.set(i, o);
    for (var D = c; ++p < g; ) {
      v = m[p];
      var N = o[v], _ = i[v];
      if (l)
        var R = c ? l(_, N, v, i, o, d) : l(N, _, v, o, i, d);
      if (!(R === void 0 ? N === _ || u(N, _, s, l, d) : R)) {
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
  return xi = a, xi;
}
var _i, _d;
function lx() {
  if (_d) return _i;
  _d = 1;
  var e = sn(), t = St(), n = e(t, "DataView");
  return _i = n, _i;
}
var Si, Sd;
function ux() {
  if (Sd) return Si;
  Sd = 1;
  var e = sn(), t = St(), n = e(t, "Promise");
  return Si = n, Si;
}
var Ci, Cd;
function gp() {
  if (Cd) return Ci;
  Cd = 1;
  var e = sn(), t = St(), n = e(t, "Set");
  return Ci = n, Ci;
}
var Pi, Pd;
function cx() {
  if (Pd) return Pi;
  Pd = 1;
  var e = sn(), t = St(), n = e(t, "WeakMap");
  return Pi = n, Pi;
}
var Ei, Ed;
function dx() {
  if (Ed) return Ei;
  Ed = 1;
  var e = lx(), t = Il(), n = ux(), r = gp(), a = cx(), o = an(), i = Fm(), s = "[object Map]", l = "[object Object]", u = "[object Promise]", d = "[object Set]", c = "[object WeakMap]", m = "[object DataView]", g = i(e), h = i(t), b = i(n), p = i(r), v = i(a), y = o;
  return (e && y(new e(new ArrayBuffer(1))) != m || t && y(new t()) != s || n && y(n.resolve()) != u || r && y(new r()) != d || a && y(new a()) != c) && (y = function(S) {
    var C = o(S), D = C == l ? S.constructor : void 0, N = D ? i(D) : "";
    if (N)
      switch (N) {
        case g:
          return m;
        case h:
          return s;
        case b:
          return u;
        case p:
          return d;
        case v:
          return c;
      }
    return C;
  }), Ei = y, Ei;
}
var Ni, Nd;
function fx() {
  if (Nd) return Ni;
  Nd = 1;
  var e = lp(), t = dp(), n = Yw(), r = sx(), a = dx(), o = pt(), i = mp(), s = hp(), l = 1, u = "[object Arguments]", d = "[object Array]", c = "[object Object]", m = Object.prototype, g = m.hasOwnProperty;
  function h(b, p, v, y, S, C) {
    var D = o(b), N = o(p), _ = D ? d : a(b), R = N ? d : a(p);
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
  return Ni = h, Ni;
}
var Ti, Td;
function vp() {
  if (Td) return Ti;
  Td = 1;
  var e = fx(), t = on();
  function n(r, a, o, i, s) {
    return r === a ? !0 : r == null || a == null || !t(r) && !t(a) ? r !== r && a !== a : e(r, a, o, i, n, s);
  }
  return Ti = n, Ti;
}
var Oi, Od;
function mx() {
  if (Od) return Oi;
  Od = 1;
  var e = lp(), t = vp(), n = 1, r = 2;
  function a(o, i, s, l) {
    var u = s.length, d = u, c = !l;
    if (o == null)
      return !d;
    for (o = Object(o); u--; ) {
      var m = s[u];
      if (c && m[2] ? m[1] !== o[m[0]] : !(m[0] in o))
        return !1;
    }
    for (; ++u < d; ) {
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
  return Oi = a, Oi;
}
var Mi, Md;
function bp() {
  if (Md) return Mi;
  Md = 1;
  var e = qt();
  function t(n) {
    return n === n && !e(n);
  }
  return Mi = t, Mi;
}
var Di, Dd;
function px() {
  if (Dd) return Di;
  Dd = 1;
  var e = bp(), t = Hl();
  function n(r) {
    for (var a = t(r), o = a.length; o--; ) {
      var i = a[o], s = r[i];
      a[o] = [i, s, e(s)];
    }
    return a;
  }
  return Di = n, Di;
}
var ki, kd;
function yp() {
  if (kd) return ki;
  kd = 1;
  function e(t, n) {
    return function(r) {
      return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r));
    };
  }
  return ki = e, ki;
}
var Ri, Rd;
function hx() {
  if (Rd) return Ri;
  Rd = 1;
  var e = mx(), t = px(), n = yp();
  function r(a) {
    var o = t(a);
    return o.length == 1 && o[0][2] ? n(o[0][0], o[0][1]) : function(i) {
      return i === a || e(i, a, o);
    };
  }
  return Ri = r, Ri;
}
var Ii, Id;
function gx() {
  if (Id) return Ii;
  Id = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return Ii = e, Ii;
}
var Ai, Ad;
function vx() {
  if (Ad) return Ai;
  Ad = 1;
  var e = Ym(), t = Bl(), n = pt(), r = jl(), a = Fl(), o = ra();
  function i(s, l, u) {
    l = e(l, s);
    for (var d = -1, c = l.length, m = !1; ++d < c; ) {
      var g = o(l[d]);
      if (!(m = s != null && u(s, g)))
        break;
      s = s[g];
    }
    return m || ++d != c ? m : (c = s == null ? 0 : s.length, !!c && a(c) && r(g, c) && (n(s) || t(s)));
  }
  return Ai = i, Ai;
}
var zi, zd;
function bx() {
  if (zd) return zi;
  zd = 1;
  var e = gx(), t = vx();
  function n(r, a) {
    return r != null && t(r, a, e);
  }
  return zi = n, zi;
}
var Li, Ld;
function yx() {
  if (Ld) return Li;
  Ld = 1;
  var e = vp(), t = Vm(), n = bx(), r = Dl(), a = bp(), o = yp(), i = ra(), s = 1, l = 2;
  function u(d, c) {
    return r(d) && a(c) ? o(i(d), c) : function(m) {
      var g = t(m, d);
      return g === void 0 && g === c ? n(m, d) : e(c, g, s | l);
    };
  }
  return Li = u, Li;
}
var qi, qd;
function ia() {
  if (qd) return qi;
  qd = 1;
  function e(t) {
    return t;
  }
  return qi = e, qi;
}
var $i, $d;
function wx() {
  if ($d) return $i;
  $d = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return $i = e, $i;
}
var Bi, Bd;
function xx() {
  if (Bd) return Bi;
  Bd = 1;
  var e = zl();
  function t(n) {
    return function(r) {
      return e(r, n);
    };
  }
  return Bi = t, Bi;
}
var ji, jd;
function _x() {
  if (jd) return ji;
  jd = 1;
  var e = wx(), t = xx(), n = Dl(), r = ra();
  function a(o) {
    return n(o) ? e(r(o)) : t(o);
  }
  return ji = a, ji;
}
var Fi, Fd;
function wp() {
  if (Fd) return Fi;
  Fd = 1;
  var e = hx(), t = yx(), n = ia(), r = pt(), a = _x();
  function o(i) {
    return typeof i == "function" ? i : i == null ? n : typeof i == "object" ? r(i) ? t(i[0], i[1]) : e(i) : a(i);
  }
  return Fi = o, Fi;
}
var Hi, Hd;
function Sx() {
  if (Hd) return Hi;
  Hd = 1;
  function e(t, n, r, a) {
    for (var o = t.length, i = r + (a ? 1 : -1); a ? i-- : ++i < o; )
      if (n(t[i], i, t))
        return i;
    return -1;
  }
  return Hi = e, Hi;
}
var Wi, Wd;
function Cx() {
  if (Wd) return Wi;
  Wd = 1;
  function e(t) {
    return t !== t;
  }
  return Wi = e, Wi;
}
var Yi, Yd;
function Px() {
  if (Yd) return Yi;
  Yd = 1;
  function e(t, n, r) {
    for (var a = r - 1, o = t.length; ++a < o; )
      if (t[a] === n)
        return a;
    return -1;
  }
  return Yi = e, Yi;
}
var Vi, Vd;
function Ex() {
  if (Vd) return Vi;
  Vd = 1;
  var e = Sx(), t = Cx(), n = Px();
  function r(a, o, i) {
    return o === o ? n(a, o, i) : e(a, t, i);
  }
  return Vi = r, Vi;
}
var Gi, Gd;
function Nx() {
  if (Gd) return Gi;
  Gd = 1;
  var e = Ex();
  function t(n, r) {
    var a = n == null ? 0 : n.length;
    return !!a && e(n, r, 0) > -1;
  }
  return Gi = t, Gi;
}
var Ui, Ud;
function Tx() {
  if (Ud) return Ui;
  Ud = 1;
  function e(t, n, r) {
    for (var a = -1, o = t == null ? 0 : t.length; ++a < o; )
      if (r(n, t[a]))
        return !0;
    return !1;
  }
  return Ui = e, Ui;
}
var Ki, Kd;
function Ox() {
  if (Kd) return Ki;
  Kd = 1;
  function e() {
  }
  return Ki = e, Ki;
}
var Xi, Xd;
function Mx() {
  if (Xd) return Xi;
  Xd = 1;
  var e = gp(), t = Ox(), n = $l(), r = 1 / 0, a = e && 1 / n(new e([, -0]))[1] == r ? function(o) {
    return new e(o);
  } : t;
  return Xi = a, Xi;
}
var Qi, Qd;
function Dx() {
  if (Qd) return Qi;
  Qd = 1;
  var e = up(), t = Nx(), n = Tx(), r = cp(), a = Mx(), o = $l(), i = 200;
  function s(l, u, d) {
    var c = -1, m = t, g = l.length, h = !0, b = [], p = b;
    if (d)
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
        if (y = d || y !== 0 ? y : 0, h && S === S) {
          for (var C = p.length; C--; )
            if (p[C] === S)
              continue e;
          u && p.push(S), b.push(y);
        } else m(p, S, d) || (p !== b && p.push(S), b.push(y));
      }
    return b;
  }
  return Qi = s, Qi;
}
var Ji, Jd;
function kx() {
  if (Jd) return Ji;
  Jd = 1;
  var e = wp(), t = Dx();
  function n(r, a) {
    return r && r.length ? t(r, e(a, 2)) : [];
  }
  return Ji = n, Ji;
}
var Rx = kx();
const Zd = /* @__PURE__ */ _t(Rx);
function xp(e, t, n) {
  return t === !0 ? Zd(e, n) : Rr(t) ? Zd(e, t) : e;
}
function Pn(e) {
  "@babel/helpers - typeof";
  return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pn(e);
}
var Ix = ["ref"];
function ef(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ef(Object(n), !0).forEach(function(r) {
      sa(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ef(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ax(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Sp(r.key), r);
  }
}
function zx(e, t, n) {
  return t && tf(e.prototype, t), n && tf(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Lx(e, t, n) {
  return t = qr(t), qx(e, _p() ? Reflect.construct(t, n || [], qr(e).constructor) : t.apply(e, n));
}
function qx(e, t) {
  if (t && (Pn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $x(e);
}
function $x(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _p() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_p = function() {
    return !!e;
  })();
}
function qr(e) {
  return qr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, qr(e);
}
function Bx(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Js(e, t);
}
function Js(e, t) {
  return Js = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Js(e, t);
}
function sa(e, t, n) {
  return t = Sp(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Sp(e) {
  var t = jx(e, "string");
  return Pn(t) == "symbol" ? t : t + "";
}
function jx(e, t) {
  if (Pn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Pn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Fx(e, t) {
  if (e == null) return {};
  var n = Hx(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Hx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Wx(e) {
  return e.value;
}
function Yx(e, t) {
  if (/* @__PURE__ */ w.isValidElement(e))
    return /* @__PURE__ */ w.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ w.createElement(e, t);
  t.ref;
  var n = Fx(t, Ix);
  return /* @__PURE__ */ w.createElement(ql, n);
}
var nf = 1, Wl = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    Ax(this, t);
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    return n = Lx(this, t, [].concat(a)), sa(n, "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return Bx(t, e), zx(t, [{
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
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > nf || Math.abs(a.height - this.lastBoundingBox.height) > nf) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, r && r(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Nt({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var a = this.props, o = a.layout, i = a.align, s = a.verticalAlign, l = a.margin, u = a.chartWidth, d = a.chartHeight, c, m;
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
            top: ((d || 0) - h.height) / 2
          };
        } else
          m = s === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return Nt(Nt({}, c), m);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, a = this.props, o = a.content, i = a.width, s = a.height, l = a.wrapperStyle, u = a.payloadUniqBy, d = a.payload, c = Nt(Nt({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ w.createElement("div", {
        className: "recharts-legend-wrapper",
        style: c,
        ref: function(g) {
          r.wrapperNode = g;
        }
      }, Yx(o, Nt(Nt({}, this.props), {}, {
        payload: xp(d, u, Wx)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, a) {
      var o = Nt(Nt({}, this.defaultProps), r.props), i = o.layout;
      return i === "vertical" && ut(r.props.height) ? {
        height: r.props.height
      } : i === "horizontal" ? {
        width: r.props.width || a
      } : null;
    }
  }]);
})(Gr);
sa(Wl, "displayName", "Legend");
sa(Wl, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Zi, rf;
function Vx() {
  if (rf) return Zi;
  rf = 1;
  var e = dr(), t = Bl(), n = pt(), r = e ? e.isConcatSpreadable : void 0;
  function a(o) {
    return n(o) || t(o) || !!(r && o && o[r]);
  }
  return Zi = a, Zi;
}
var es, af;
function Gx() {
  if (af) return es;
  af = 1;
  var e = fp(), t = Vx();
  function n(r, a, o, i, s) {
    var l = -1, u = r.length;
    for (o || (o = t), s || (s = []); ++l < u; ) {
      var d = r[l];
      a > 0 && o(d) ? a > 1 ? n(d, a - 1, o, i, s) : e(s, d) : i || (s[s.length] = d);
    }
    return s;
  }
  return es = n, es;
}
var ts, of;
function Ux() {
  if (of) return ts;
  of = 1;
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
  return ts = e, ts;
}
var ns, sf;
function Kx() {
  if (sf) return ns;
  sf = 1;
  var e = Ux(), t = e();
  return ns = t, ns;
}
var rs, lf;
function Xx() {
  if (lf) return rs;
  lf = 1;
  var e = Kx(), t = Hl();
  function n(r, a) {
    return r && e(r, a, t);
  }
  return rs = n, rs;
}
var as, uf;
function Qx() {
  if (uf) return as;
  uf = 1;
  var e = oa();
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
  return as = t, as;
}
var os, cf;
function Jx() {
  if (cf) return os;
  cf = 1;
  var e = Xx(), t = Qx(), n = t(e);
  return os = n, os;
}
var is, df;
function Zx() {
  if (df) return is;
  df = 1;
  var e = Jx(), t = oa();
  function n(r, a) {
    var o = -1, i = t(r) ? Array(r.length) : [];
    return e(r, function(s, l, u) {
      i[++o] = a(s, l, u);
    }), i;
  }
  return is = n, is;
}
var ss, ff;
function e1() {
  if (ff) return ss;
  ff = 1;
  function e(t, n) {
    var r = t.length;
    for (t.sort(n); r--; )
      t[r] = t[r].value;
    return t;
  }
  return ss = e, ss;
}
var ls, mf;
function t1() {
  if (mf) return ls;
  mf = 1;
  var e = fr();
  function t(n, r) {
    if (n !== r) {
      var a = n !== void 0, o = n === null, i = n === n, s = e(n), l = r !== void 0, u = r === null, d = r === r, c = e(r);
      if (!u && !c && !s && n > r || s && l && d && !u && !c || o && l && d || !a && d || !i)
        return 1;
      if (!o && !s && !c && n < r || c && a && i && !o && !s || u && a && i || !l && i || !d)
        return -1;
    }
    return 0;
  }
  return ls = t, ls;
}
var us, pf;
function n1() {
  if (pf) return us;
  pf = 1;
  var e = t1();
  function t(n, r, a) {
    for (var o = -1, i = n.criteria, s = r.criteria, l = i.length, u = a.length; ++o < l; ) {
      var d = e(i[o], s[o]);
      if (d) {
        if (o >= u)
          return d;
        var c = a[o];
        return d * (c == "desc" ? -1 : 1);
      }
    }
    return n.index - r.index;
  }
  return us = t, us;
}
var cs, hf;
function r1() {
  if (hf) return cs;
  hf = 1;
  var e = Hm(), t = zl(), n = wp(), r = Zx(), a = e1(), o = pp(), i = n1(), s = ia(), l = pt();
  function u(d, c, m) {
    c.length ? c = e(c, function(b) {
      return l(b) ? function(p) {
        return t(p, b.length === 1 ? b[0] : b);
      } : b;
    }) : c = [s];
    var g = -1;
    c = e(c, o(n));
    var h = r(d, function(b, p, v) {
      var y = e(c, function(S) {
        return S(b);
      });
      return { criteria: y, index: ++g, value: b };
    });
    return a(h, function(b, p) {
      return i(b, p, m);
    });
  }
  return cs = u, cs;
}
var ds, gf;
function a1() {
  if (gf) return ds;
  gf = 1;
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
  return ds = e, ds;
}
var fs, vf;
function o1() {
  if (vf) return fs;
  vf = 1;
  var e = a1(), t = Math.max;
  function n(r, a, o) {
    return a = t(a === void 0 ? r.length - 1 : a, 0), function() {
      for (var i = arguments, s = -1, l = t(i.length - a, 0), u = Array(l); ++s < l; )
        u[s] = i[a + s];
      s = -1;
      for (var d = Array(a + 1); ++s < a; )
        d[s] = i[s];
      return d[a] = o(u), e(r, this, d);
    };
  }
  return fs = n, fs;
}
var ms, bf;
function i1() {
  if (bf) return ms;
  bf = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return ms = e, ms;
}
var ps, yf;
function s1() {
  if (yf) return ps;
  yf = 1;
  var e = sn(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return ps = t, ps;
}
var hs, wf;
function l1() {
  if (wf) return hs;
  wf = 1;
  var e = i1(), t = s1(), n = ia(), r = t ? function(a, o) {
    return t(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(o),
      writable: !0
    });
  } : n;
  return hs = r, hs;
}
var gs, xf;
function u1() {
  if (xf) return gs;
  xf = 1;
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
  return gs = r, gs;
}
var vs, _f;
function c1() {
  if (_f) return vs;
  _f = 1;
  var e = l1(), t = u1(), n = t(e);
  return vs = n, vs;
}
var bs, Sf;
function d1() {
  if (Sf) return bs;
  Sf = 1;
  var e = ia(), t = o1(), n = c1();
  function r(a, o) {
    return n(t(a, o, e), a + "");
  }
  return bs = r, bs;
}
var ys, Cf;
function f1() {
  if (Cf) return ys;
  Cf = 1;
  var e = Rl(), t = oa(), n = jl(), r = qt();
  function a(o, i, s) {
    if (!r(s))
      return !1;
    var l = typeof i;
    return (l == "number" ? t(s) && n(i, s.length) : l == "string" && i in s) ? e(s[i], o) : !1;
  }
  return ys = a, ys;
}
var ws, Pf;
function m1() {
  if (Pf) return ws;
  Pf = 1;
  var e = Gx(), t = r1(), n = d1(), r = f1(), a = n(function(o, i) {
    if (o == null)
      return [];
    var s = i.length;
    return s > 1 && r(o, i[0], i[1]) ? i = [] : s > 2 && r(i[0], i[1], i[2]) && (i = [i[0]]), t(o, e(i, 1), []);
  });
  return ws = a, ws;
}
var p1 = m1();
const h1 = /* @__PURE__ */ _t(p1);
function er(e) {
  "@babel/helpers - typeof";
  return er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, er(e);
}
function Zs() {
  return Zs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Zs.apply(this, arguments);
}
function g1(e, t) {
  return w1(e) || y1(e, t) || b1(e, t) || v1();
}
function v1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function b1(e, t) {
  if (e) {
    if (typeof e == "string") return Ef(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ef(e, t);
  }
}
function Ef(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function y1(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, i, s = [], l = !0, u = !1;
    try {
      if (o = (n = n.call(e)).next, t !== 0) for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (d) {
      u = !0, a = d;
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
function w1(e) {
  if (Array.isArray(e)) return e;
}
function Nf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nf(Object(n), !0).forEach(function(r) {
      x1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function x1(e, t, n) {
  return t = _1(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _1(e) {
  var t = S1(e, "string");
  return er(t) == "symbol" ? t : t + "";
}
function S1(e, t) {
  if (er(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (er(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function C1(e) {
  return Array.isArray(e) && Ir(e[0]) && Ir(e[1]) ? e.join(" ~ ") : e;
}
var P1 = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, a = t.contentStyle, o = a === void 0 ? {} : a, i = t.itemStyle, s = i === void 0 ? {} : i, l = t.labelStyle, u = l === void 0 ? {} : l, d = t.payload, c = t.formatter, m = t.itemSorter, g = t.wrapperClassName, h = t.labelClassName, b = t.label, p = t.labelFormatter, v = t.accessibilityLayer, y = v === void 0 ? !1 : v, S = function() {
    if (d && d.length) {
      var H = {
        padding: 0,
        margin: 0
      }, T = (m ? h1(d, m) : d).map(function(W, F) {
        if (W.type === "none")
          return null;
        var B = xs({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: W.color || "#000"
        }, s), L = W.formatter || c || C1, q = W.value, te = W.name, ie = q, X = te;
        if (L && ie != null && X != null) {
          var O = L(q, te, W, F, d);
          if (Array.isArray(O)) {
            var E = g1(O, 2);
            ie = E[0], X = E[1];
          } else
            ie = O;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ w.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(F),
            style: B
          }, Ir(X) ? /* @__PURE__ */ w.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, X) : null, Ir(X) ? /* @__PURE__ */ w.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ w.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, ie), /* @__PURE__ */ w.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, W.unit || ""))
        );
      });
      return /* @__PURE__ */ w.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: H
      }, T);
    }
    return null;
  }, C = xs({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, o), D = xs({
    margin: 0
  }, u), N = !_0(b), _ = N ? b : "", R = Kt("recharts-default-tooltip", g), k = Kt("recharts-tooltip-label", h);
  N && p && d !== void 0 && d !== null && (_ = p(b, d));
  var Y = y ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ w.createElement("div", Zs({
    className: R,
    style: C
  }, Y), /* @__PURE__ */ w.createElement("p", {
    className: k,
    style: D
  }, /* @__PURE__ */ w.isValidElement(_) ? _ : "".concat(_)), S());
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
  return t = E1(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function E1(e) {
  var t = N1(e, "string");
  return tr(t) == "symbol" ? t : t + "";
}
function N1(e, t) {
  if (tr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (tr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kn = "recharts-tooltip-wrapper", T1 = {
  visibility: "hidden"
};
function O1(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return Kt(kn, xr(xr(xr(xr({}, "".concat(kn, "-right"), ut(n) && t && ut(t.x) && n >= t.x), "".concat(kn, "-left"), ut(n) && t && ut(t.x) && n < t.x), "".concat(kn, "-bottom"), ut(r) && t && ut(t.y) && r >= t.y), "".concat(kn, "-top"), ut(r) && t && ut(t.y) && r < t.y));
}
function Tf(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, a = e.offsetTopLeft, o = e.position, i = e.reverseDirection, s = e.tooltipDimension, l = e.viewBox, u = e.viewBoxDimension;
  if (o && ut(o[r]))
    return o[r];
  var d = n[r] - s - a, c = n[r] + a;
  if (t[r])
    return i[r] ? d : c;
  if (i[r]) {
    var m = d, g = l[r];
    return m < g ? Math.max(c, l[r]) : Math.max(d, l[r]);
  }
  var h = c + s, b = l[r] + u;
  return h > b ? Math.max(d, l[r]) : Math.max(c, l[r]);
}
function M1(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function D1(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, a = e.position, o = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, u, d, c;
  return i.height > 0 && i.width > 0 && n ? (d = Tf({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: a,
    reverseDirection: o,
    tooltipDimension: i.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), c = Tf({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: a,
    reverseDirection: o,
    tooltipDimension: i.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), u = M1({
    translateX: d,
    translateY: c,
    useTranslate3d: s
  })) : u = T1, {
    cssProperties: u,
    cssClasses: O1({
      translateX: d,
      translateY: c,
      coordinate: n
    })
  };
}
function En(e) {
  "@babel/helpers - typeof";
  return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, En(e);
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
function Mf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Of(Object(n), !0).forEach(function(r) {
      tl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Of(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function k1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function R1(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Pp(r.key), r);
  }
}
function I1(e, t, n) {
  return t && R1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function A1(e, t, n) {
  return t = $r(t), z1(e, Cp() ? Reflect.construct(t, n || [], $r(e).constructor) : t.apply(e, n));
}
function z1(e, t) {
  if (t && (En(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return L1(e);
}
function L1(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Cp = function() {
    return !!e;
  })();
}
function $r(e) {
  return $r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $r(e);
}
function q1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && el(e, t);
}
function el(e, t) {
  return el = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, el(e, t);
}
function tl(e, t, n) {
  return t = Pp(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Pp(e) {
  var t = $1(e, "string");
  return En(t) == "symbol" ? t : t + "";
}
function $1(e, t) {
  if (En(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (En(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Df = 1, B1 = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    k1(this, t);
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    return n = A1(this, t, [].concat(a)), tl(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), tl(n, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, l, u, d;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (l = n.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && s !== void 0 ? s : 0,
            y: (u = (d = n.props.coordinate) === null || d === void 0 ? void 0 : d.y) !== null && u !== void 0 ? u : 0
          }
        });
      }
    }), n;
  }
  return q1(t, e), I1(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > Df || Math.abs(r.height - this.state.lastBoundingBox.height) > Df) && this.setState({
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
      var r = this, a = this.props, o = a.active, i = a.allowEscapeViewBox, s = a.animationDuration, l = a.animationEasing, u = a.children, d = a.coordinate, c = a.hasPayload, m = a.isAnimationActive, g = a.offset, h = a.position, b = a.reverseDirection, p = a.useTranslate3d, v = a.viewBox, y = a.wrapperStyle, S = D1({
        allowEscapeViewBox: i,
        coordinate: d,
        offsetTopLeft: g,
        position: h,
        reverseDirection: b,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: p,
        viewBox: v
      }), C = S.cssClasses, D = S.cssProperties, N = Mf(Mf({
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
        /* @__PURE__ */ w.createElement("div", {
          tabIndex: -1,
          className: C,
          style: N,
          ref: function(R) {
            r.wrapperNode = R;
          }
        }, u)
      );
    }
  }]);
})(Gr), j1 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, F1 = {
  isSsr: j1()
};
function Nn(e) {
  "@babel/helpers - typeof";
  return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nn(e);
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
function Rf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kf(Object(n), !0).forEach(function(r) {
      Yl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function H1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function W1(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Np(r.key), r);
  }
}
function Y1(e, t, n) {
  return t && W1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function V1(e, t, n) {
  return t = Br(t), G1(e, Ep() ? Reflect.construct(t, n || [], Br(e).constructor) : t.apply(e, n));
}
function G1(e, t) {
  if (t && (Nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return U1(e);
}
function U1(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ep() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ep = function() {
    return !!e;
  })();
}
function Br(e) {
  return Br = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Br(e);
}
function K1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && nl(e, t);
}
function nl(e, t) {
  return nl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, nl(e, t);
}
function Yl(e, t, n) {
  return t = Np(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Np(e) {
  var t = X1(e, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function X1(e, t) {
  if (Nn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Nn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Q1(e) {
  return e.dataKey;
}
function J1(e, t) {
  return /* @__PURE__ */ w.isValidElement(e) ? /* @__PURE__ */ w.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ w.createElement(e, t) : /* @__PURE__ */ w.createElement(P1, t);
}
var Vl = /* @__PURE__ */ (function(e) {
  function t() {
    return H1(this, t), V1(this, t, arguments);
  }
  return K1(t, e), Y1(t, [{
    key: "render",
    value: function() {
      var r = this, a = this.props, o = a.active, i = a.allowEscapeViewBox, s = a.animationDuration, l = a.animationEasing, u = a.content, d = a.coordinate, c = a.filterNull, m = a.isAnimationActive, g = a.offset, h = a.payload, b = a.payloadUniqBy, p = a.position, v = a.reverseDirection, y = a.useTranslate3d, S = a.viewBox, C = a.wrapperStyle, D = h ?? [];
      c && D.length && (D = xp(h.filter(function(_) {
        return _.value != null && (_.hide !== !0 || r.props.includeHidden);
      }), b, Q1));
      var N = D.length > 0;
      return /* @__PURE__ */ w.createElement(B1, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: l,
        isAnimationActive: m,
        active: o,
        coordinate: d,
        hasPayload: N,
        offset: g,
        position: p,
        reverseDirection: v,
        useTranslate3d: y,
        viewBox: S,
        wrapperStyle: C
      }, J1(u, Rf(Rf({}, this.props), {}, {
        payload: D
      })));
    }
  }]);
})(Gr);
Yl(Vl, "displayName", "Tooltip");
Yl(Vl, "defaultProps", {
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
  isAnimationActive: !F1.isSsr,
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
var _s, If;
function Z1() {
  if (If) return _s;
  If = 1;
  var e = St(), t = function() {
    return e.Date.now();
  };
  return _s = t, _s;
}
var Ss, Af;
function e_() {
  if (Af) return Ss;
  Af = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return Ss = t, Ss;
}
var Cs, zf;
function t_() {
  if (zf) return Cs;
  zf = 1;
  var e = e_(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return Cs = n, Cs;
}
var Ps, Lf;
function n_() {
  if (Lf) return Ps;
  Lf = 1;
  var e = t_(), t = qt(), n = fr(), r = NaN, a = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
  function l(u) {
    if (typeof u == "number")
      return u;
    if (n(u))
      return r;
    if (t(u)) {
      var d = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = t(d) ? d + "" : d;
    }
    if (typeof u != "string")
      return u === 0 ? u : +u;
    u = e(u);
    var c = o.test(u);
    return c || i.test(u) ? s(u.slice(2), c ? 2 : 8) : a.test(u) ? r : +u;
  }
  return Ps = l, Ps;
}
var Es, qf;
function r_() {
  if (qf) return Es;
  qf = 1;
  var e = qt(), t = Z1(), n = n_(), r = "Expected a function", a = Math.max, o = Math.min;
  function i(s, l, u) {
    var d, c, m, g, h, b, p = 0, v = !1, y = !1, S = !0;
    if (typeof s != "function")
      throw new TypeError(r);
    l = n(l) || 0, e(u) && (v = !!u.leading, y = "maxWait" in u, m = y ? a(n(u.maxWait) || 0, l) : m, S = "trailing" in u ? !!u.trailing : S);
    function C(T) {
      var W = d, F = c;
      return d = c = void 0, p = T, g = s.apply(F, W), g;
    }
    function D(T) {
      return p = T, h = setTimeout(R, l), v ? C(T) : g;
    }
    function N(T) {
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
      h = setTimeout(R, N(T));
    }
    function k(T) {
      return h = void 0, S && d ? C(T) : (d = c = void 0, g);
    }
    function Y() {
      h !== void 0 && clearTimeout(h), p = 0, d = b = c = h = void 0;
    }
    function I() {
      return h === void 0 ? g : k(t());
    }
    function H() {
      var T = t(), W = _(T);
      if (d = arguments, c = this, b = T, W) {
        if (h === void 0)
          return D(b);
        if (y)
          return clearTimeout(h), h = setTimeout(R, l), C(b);
      }
      return h === void 0 && (h = setTimeout(R, l)), g;
    }
    return H.cancel = Y, H.flush = I, H;
  }
  return Es = i, Es;
}
var Ns, $f;
function a_() {
  if ($f) return Ns;
  $f = 1;
  var e = r_(), t = qt(), n = "Expected a function";
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
  return Ns = r, Ns;
}
var o_ = a_();
const i_ = /* @__PURE__ */ _t(o_);
function nr(e) {
  "@babel/helpers - typeof";
  return nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nr(e);
}
function Bf(e, t) {
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
    t % 2 ? Bf(Object(n), !0).forEach(function(r) {
      s_(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function s_(e, t, n) {
  return t = l_(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function l_(e) {
  var t = u_(e, "string");
  return nr(t) == "symbol" ? t : t + "";
}
function u_(e, t) {
  if (nr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (nr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function c_(e, t) {
  return p_(e) || m_(e, t) || f_(e, t) || d_();
}
function d_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f_(e, t) {
  if (e) {
    if (typeof e == "string") return jf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return jf(e, t);
  }
}
function jf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function m_(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, i, s = [], l = !0, u = !1;
    try {
      if (o = (n = n.call(e)).next, t !== 0) for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (d) {
      u = !0, a = d;
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
function p_(e) {
  if (Array.isArray(e)) return e;
}
var h_ = /* @__PURE__ */ xt(function(e, t) {
  var n = e.aspect, r = e.initialDimension, a = r === void 0 ? {
    width: -1,
    height: -1
  } : r, o = e.width, i = o === void 0 ? "100%" : o, s = e.height, l = s === void 0 ? "100%" : s, u = e.minWidth, d = u === void 0 ? 0 : u, c = e.minHeight, m = e.maxHeight, g = e.children, h = e.debounce, b = h === void 0 ? 0 : h, p = e.id, v = e.className, y = e.onResize, S = e.style, C = S === void 0 ? {} : S, D = xn(null), N = xn();
  N.current = y, tg(t, function() {
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
  }), R = c_(_, 2), k = R[0], Y = R[1], I = hm(function(T, W) {
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
      var ie, X = te[0].contentRect, O = X.width, E = X.height;
      I(O, E), (ie = N.current) === null || ie === void 0 || ie.call(N, O, E);
    };
    b > 0 && (T = i_(T, b, {
      trailing: !0,
      leading: !1
    }));
    var W = new ResizeObserver(T), F = D.current.getBoundingClientRect(), B = F.width, L = F.height;
    return I(B, L), W.observe(D.current), function() {
      W.disconnect();
    };
  }, [I, b]);
  var H = gm(function() {
    var T = k.containerWidth, W = k.containerHeight;
    if (T < 0 || W < 0)
      return null;
    Tr(yr(i) || yr(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, l), Tr(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var F = yr(i) ? T : i, B = yr(l) ? W : l;
    n && n > 0 && (F ? B = F / n : B && (F = B * n), m && B > m && (B = m)), Tr(F > 0 || B > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, F, B, i, l, d, c, n);
    var L = !Array.isArray(g) && $0(g.type).endsWith("Chart");
    return w.Children.map(g, function(q) {
      return /* @__PURE__ */ w.isValidElement(q) ? /* @__PURE__ */ ng(q, _r({
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
  }, [n, g, l, m, c, d, k, i]);
  return /* @__PURE__ */ w.createElement("div", {
    id: p ? "".concat(p) : void 0,
    className: Kt("recharts-responsive-container", v),
    style: _r(_r({}, C), {}, {
      width: i,
      height: l,
      minWidth: d,
      minHeight: c,
      maxHeight: m
    }),
    ref: D
  }, H);
});
const g_ = { light: "", dark: ".dark" }, Tp = M.createContext(null);
function Op() {
  const e = M.useContext(Tp);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function GE({
  id: e,
  className: t,
  children: n,
  config: r,
  ...a
}) {
  const o = M.useId(), i = `chart-${e || o.replace(/:/g, "")}`;
  return /* @__PURE__ */ f(Tp.Provider, { value: { config: r }, children: /* @__PURE__ */ U(
    "div",
    {
      "data-slot": "chart",
      "data-chart": i,
      className: x(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...a,
      children: [
        /* @__PURE__ */ f(v_, { id: i, config: r }),
        /* @__PURE__ */ f(h_, { children: n })
      ]
    }
  ) });
}
const v_ = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(([, r]) => r.theme || r.color);
  return n.length ? /* @__PURE__ */ f(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(g_).map(
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
}, UE = Vl;
function KE({
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
  color: d,
  nameKey: c,
  labelKey: m
}) {
  const { config: g } = Op(), h = M.useMemo(() => {
    var C;
    if (a || !(t != null && t.length))
      return null;
    const [p] = t, v = `${m || (p == null ? void 0 : p.dataKey) || (p == null ? void 0 : p.name) || "value"}`, y = rl(g, p, v), S = !m && typeof i == "string" ? ((C = g[i]) == null ? void 0 : C.label) || i : y == null ? void 0 : y.label;
    return s ? /* @__PURE__ */ f("div", { className: x("font-medium", l), children: s(S, t) }) : S ? /* @__PURE__ */ f("div", { className: x("font-medium", l), children: S }) : null;
  }, [i, s, t, a, l, g, m]);
  if (!e || !(t != null && t.length))
    return null;
  const b = t.length === 1 && r !== "dot";
  return /* @__PURE__ */ U(
    "div",
    {
      className: x(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        n
      ),
      children: [
        b ? null : h,
        /* @__PURE__ */ f("div", { className: "grid gap-1.5", children: t.map((p, v) => {
          const y = `${c || p.name || p.dataKey || "value"}`, S = rl(g, p, y), C = d || p.payload.fill || p.color;
          return /* @__PURE__ */ f(
            "div",
            {
              className: x(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                r === "dot" && "items-center"
              ),
              children: u && (p == null ? void 0 : p.value) !== void 0 && p.name ? u(p.value, p.name, p, v, p.payload) : /* @__PURE__ */ U(yt, { children: [
                S != null && S.icon ? /* @__PURE__ */ f(S.icon, {}) : !o && /* @__PURE__ */ f(
                  "div",
                  {
                    className: x(
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
                    className: x(
                      "flex flex-1 justify-between leading-none",
                      b ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ U("div", { className: "grid gap-1.5", children: [
                        b ? h : null,
                        /* @__PURE__ */ f("span", { className: "text-muted-foreground", children: (S == null ? void 0 : S.label) || p.name })
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
const XE = Wl;
function QE({
  className: e,
  hideIcon: t = !1,
  payload: n,
  verticalAlign: r = "bottom",
  nameKey: a
}) {
  const { config: o } = Op();
  return n != null && n.length ? /* @__PURE__ */ f(
    "div",
    {
      className: x(
        "flex items-center justify-center gap-4",
        r === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: n.map((i) => {
        const s = `${a || i.dataKey || "value"}`, l = rl(o, i, s);
        return /* @__PURE__ */ U(
          "div",
          {
            className: x(
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
function rl(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let a = n;
  return n in t && typeof t[n] == "string" ? a = t[n] : r && n in r && typeof r[n] == "string" && (a = r[n]), a in e ? e[a] : e[n];
}
function JE({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    tu.Root,
    {
      "data-slot": "checkbox",
      className: x(
        "peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ f(
        tu.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ f(or, { className: "size-3.5" })
        }
      )
    }
  );
}
function ZE({ ...e }) {
  return /* @__PURE__ */ f(fl.Root, { "data-slot": "collapsible", ...e });
}
function eN({
  ...e
}) {
  return /* @__PURE__ */ f(fl.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...e });
}
function tN({
  ...e
}) {
  return /* @__PURE__ */ f(fl.CollapsibleContent, { "data-slot": "collapsible-content", ...e });
}
var Ff = 1, b_ = 0.9, y_ = 0.8, w_ = 0.17, Ts = 0.1, Os = 0.999, x_ = 0.9999, __ = 0.99, S_ = /[\\\/_+.#"@\[\(\{&]/, C_ = /[\\\/_+.#"@\[\(\{&]/g, P_ = /[\s-]/, Mp = /[\s-]/g;
function al(e, t, n, r, a, o, i) {
  if (o === t.length) return a === e.length ? Ff : __;
  var s = `${a},${o}`;
  if (i[s] !== void 0) return i[s];
  for (var l = r.charAt(o), u = n.indexOf(l, a), d = 0, c, m, g, h; u >= 0; ) c = al(e, t, n, r, u + 1, o + 1, i), c > d && (u === a ? c *= Ff : S_.test(e.charAt(u - 1)) ? (c *= y_, g = e.slice(a, u - 1).match(C_), g && a > 0 && (c *= Math.pow(Os, g.length))) : P_.test(e.charAt(u - 1)) ? (c *= b_, h = e.slice(a, u - 1).match(Mp), h && a > 0 && (c *= Math.pow(Os, h.length))) : (c *= w_, a > 0 && (c *= Math.pow(Os, u - a))), e.charAt(u) !== t.charAt(o) && (c *= x_)), (c < Ts && n.charAt(u - 1) === r.charAt(o + 1) || r.charAt(o + 1) === r.charAt(o) && n.charAt(u - 1) !== r.charAt(o)) && (m = al(e, t, n, r, u + 1, o + 2, i), m * Ts > c && (c = m * Ts)), c > d && (d = c), u = n.indexOf(l, u + 1);
  return i[s] = d, d;
}
function Hf(e) {
  return e.toLowerCase().replace(Mp, " ");
}
function E_(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, al(e, t, Hf(e), Hf(t), 0, 0, {});
}
var Rn = '[cmdk-group=""]', Ms = '[cmdk-group-items=""]', N_ = '[cmdk-group-heading=""]', Dp = '[cmdk-item=""]', Wf = `${Dp}:not([aria-disabled="true"])`, ol = "cmdk-item-select", mn = "data-value", T_ = (e, t, n) => E_(e, t, n), kp = M.createContext(void 0), mr = () => M.useContext(kp), Rp = M.createContext(void 0), Gl = () => M.useContext(Rp), Ip = M.createContext(void 0), Ap = M.forwardRef((e, t) => {
  let n = pn(() => {
    var O, E;
    return { search: "", value: (E = (O = e.value) != null ? O : e.defaultValue) != null ? E : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = pn(() => /* @__PURE__ */ new Set()), a = pn(() => /* @__PURE__ */ new Map()), o = pn(() => /* @__PURE__ */ new Map()), i = pn(() => /* @__PURE__ */ new Set()), s = zp(e), { label: l, children: u, value: d, onValueChange: c, filter: m, shouldFilter: g, loop: h, disablePointerSelection: b = !1, vimBindings: p = !0, ...v } = e, y = vn(), S = vn(), C = vn(), D = M.useRef(null), N = $_();
  Jt(() => {
    if (d !== void 0) {
      let O = d.trim();
      n.current.value = O, _.emit();
    }
  }, [d]), Jt(() => {
    N(6, T);
  }, []);
  let _ = M.useMemo(() => ({ subscribe: (O) => (i.current.add(O), () => i.current.delete(O)), snapshot: () => n.current, setState: (O, E, z) => {
    var A, $, j, V;
    if (!Object.is(n.current[O], E)) {
      if (n.current[O] = E, O === "search") H(), Y(), N(1, I);
      else if (O === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Q = document.getElementById(C);
          Q ? Q.focus() : (A = document.getElementById(y)) == null || A.focus();
        }
        if (N(7, () => {
          var Q;
          n.current.selectedItemId = (Q = W()) == null ? void 0 : Q.id, _.emit();
        }), z || N(5, T), (($ = s.current) == null ? void 0 : $.value) !== void 0) {
          let Q = E ?? "";
          (V = (j = s.current).onValueChange) == null || V.call(j, Q);
          return;
        }
      }
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((O) => O());
  } }), []), R = M.useMemo(() => ({ value: (O, E, z) => {
    var A;
    E !== ((A = o.current.get(O)) == null ? void 0 : A.value) && (o.current.set(O, { value: E, keywords: z }), n.current.filtered.items.set(O, k(E, z)), N(2, () => {
      Y(), _.emit();
    }));
  }, item: (O, E) => (r.current.add(O), E && (a.current.has(E) ? a.current.get(E).add(O) : a.current.set(E, /* @__PURE__ */ new Set([O]))), N(3, () => {
    H(), Y(), n.current.value || I(), _.emit();
  }), () => {
    o.current.delete(O), r.current.delete(O), n.current.filtered.items.delete(O);
    let z = W();
    N(4, () => {
      H(), (z == null ? void 0 : z.getAttribute("id")) === O && I(), _.emit();
    });
  }), group: (O) => (a.current.has(O) || a.current.set(O, /* @__PURE__ */ new Set()), () => {
    o.current.delete(O), a.current.delete(O);
  }), filter: () => s.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: y, inputId: C, labelId: S, listInnerRef: D }), []);
  function k(O, E) {
    var z, A;
    let $ = (A = (z = s.current) == null ? void 0 : z.filter) != null ? A : T_;
    return O ? $(O, n.current.search, E) : 0;
  }
  function Y() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let O = n.current.filtered.items, E = [];
    n.current.filtered.groups.forEach((A) => {
      let $ = a.current.get(A), j = 0;
      $.forEach((V) => {
        let Q = O.get(V);
        j = Math.max(Q, j);
      }), E.push([A, j]);
    });
    let z = D.current;
    F().sort((A, $) => {
      var j, V;
      let Q = A.getAttribute("id"), ne = $.getAttribute("id");
      return ((j = O.get(ne)) != null ? j : 0) - ((V = O.get(Q)) != null ? V : 0);
    }).forEach((A) => {
      let $ = A.closest(Ms);
      $ ? $.appendChild(A.parentElement === $ ? A : A.closest(`${Ms} > *`)) : z.appendChild(A.parentElement === z ? A : A.closest(`${Ms} > *`));
    }), E.sort((A, $) => $[1] - A[1]).forEach((A) => {
      var $;
      let j = ($ = D.current) == null ? void 0 : $.querySelector(`${Rn}[${mn}="${encodeURIComponent(A[0])}"]`);
      j == null || j.parentElement.appendChild(j);
    });
  }
  function I() {
    let O = F().find((z) => z.getAttribute("aria-disabled") !== "true"), E = O == null ? void 0 : O.getAttribute(mn);
    _.setState("value", E || void 0);
  }
  function H() {
    var O, E, z, A;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let $ = 0;
    for (let j of r.current) {
      let V = (E = (O = o.current.get(j)) == null ? void 0 : O.value) != null ? E : "", Q = (A = (z = o.current.get(j)) == null ? void 0 : z.keywords) != null ? A : [], ne = k(V, Q);
      n.current.filtered.items.set(j, ne), ne > 0 && $++;
    }
    for (let [j, V] of a.current) for (let Q of V) if (n.current.filtered.items.get(Q) > 0) {
      n.current.filtered.groups.add(j);
      break;
    }
    n.current.filtered.count = $;
  }
  function T() {
    var O, E, z;
    let A = W();
    A && (((O = A.parentElement) == null ? void 0 : O.firstChild) === A && ((z = (E = A.closest(Rn)) == null ? void 0 : E.querySelector(N_)) == null || z.scrollIntoView({ block: "nearest" })), A.scrollIntoView({ block: "nearest" }));
  }
  function W() {
    var O;
    return (O = D.current) == null ? void 0 : O.querySelector(`${Dp}[aria-selected="true"]`);
  }
  function F() {
    var O;
    return Array.from(((O = D.current) == null ? void 0 : O.querySelectorAll(Wf)) || []);
  }
  function B(O) {
    let E = F()[O];
    E && _.setState("value", E.getAttribute(mn));
  }
  function L(O) {
    var E;
    let z = W(), A = F(), $ = A.findIndex((V) => V === z), j = A[$ + O];
    (E = s.current) != null && E.loop && (j = $ + O < 0 ? A[A.length - 1] : $ + O === A.length ? A[0] : A[$ + O]), j && _.setState("value", j.getAttribute(mn));
  }
  function q(O) {
    let E = W(), z = E == null ? void 0 : E.closest(Rn), A;
    for (; z && !A; ) z = O > 0 ? L_(z, Rn) : q_(z, Rn), A = z == null ? void 0 : z.querySelector(Wf);
    A ? _.setState("value", A.getAttribute(mn)) : L(O);
  }
  let te = () => B(F().length - 1), ie = (O) => {
    O.preventDefault(), O.metaKey ? te() : O.altKey ? q(1) : L(1);
  }, X = (O) => {
    O.preventDefault(), O.metaKey ? B(0) : O.altKey ? q(-1) : L(-1);
  };
  return M.createElement(zt.div, { ref: t, tabIndex: -1, ...v, "cmdk-root": "", onKeyDown: (O) => {
    var E;
    (E = v.onKeyDown) == null || E.call(v, O);
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
          let $ = new Event(ol);
          A.dispatchEvent($);
        }
      }
    }
  } }, M.createElement("label", { "cmdk-label": "", htmlFor: R.inputId, id: R.labelId, style: j_ }, l), la(e, (O) => M.createElement(Rp.Provider, { value: _ }, M.createElement(kp.Provider, { value: R }, O))));
}), O_ = M.forwardRef((e, t) => {
  var n, r;
  let a = vn(), o = M.useRef(null), i = M.useContext(Ip), s = mr(), l = zp(e), u = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i == null ? void 0 : i.forceMount;
  Jt(() => {
    if (!u) return s.item(a, i == null ? void 0 : i.id);
  }, [u]);
  let d = Lp(a, o, [e.value, e.children, o], e.keywords), c = Gl(), m = At((N) => N.value && N.value === d.current), g = At((N) => u || s.filter() === !1 ? !0 : N.search ? N.filtered.items.get(a) > 0 : !0);
  M.useEffect(() => {
    let N = o.current;
    if (!(!N || e.disabled)) return N.addEventListener(ol, h), () => N.removeEventListener(ol, h);
  }, [g, e.onSelect, e.disabled]);
  function h() {
    var N, _;
    b(), (_ = (N = l.current).onSelect) == null || _.call(N, d.current);
  }
  function b() {
    c.setState("value", d.current, !0);
  }
  if (!g) return null;
  let { disabled: p, value: v, onSelect: y, forceMount: S, keywords: C, ...D } = e;
  return M.createElement(zt.div, { ref: Vn(o, t), ...D, id: a, "cmdk-item": "", role: "option", "aria-disabled": !!p, "aria-selected": !!m, "data-disabled": !!p, "data-selected": !!m, onPointerMove: p || s.getDisablePointerSelection() ? void 0 : b, onClick: p ? void 0 : h }, e.children);
}), M_ = M.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: a, ...o } = e, i = vn(), s = M.useRef(null), l = M.useRef(null), u = vn(), d = mr(), c = At((g) => a || d.filter() === !1 ? !0 : g.search ? g.filtered.groups.has(i) : !0);
  Jt(() => d.group(i), []), Lp(i, s, [e.value, e.heading, l]);
  let m = M.useMemo(() => ({ id: i, forceMount: a }), [a]);
  return M.createElement(zt.div, { ref: Vn(s, t), ...o, "cmdk-group": "", role: "presentation", hidden: c ? void 0 : !0 }, n && M.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: u }, n), la(e, (g) => M.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? u : void 0 }, M.createElement(Ip.Provider, { value: m }, g))));
}), D_ = M.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, a = M.useRef(null), o = At((i) => !i.search);
  return !n && !o ? null : M.createElement(zt.div, { ref: Vn(a, t), ...r, "cmdk-separator": "", role: "separator" });
}), k_ = M.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, a = e.value != null, o = Gl(), i = At((u) => u.search), s = At((u) => u.selectedItemId), l = mr();
  return M.useEffect(() => {
    e.value != null && o.setState("search", e.value);
  }, [e.value]), M.createElement(zt.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": s, id: l.inputId, type: "text", value: a ? e.value : i, onChange: (u) => {
    a || o.setState("search", u.target.value), n == null || n(u.target.value);
  } });
}), R_ = M.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...a } = e, o = M.useRef(null), i = M.useRef(null), s = At((u) => u.selectedItemId), l = mr();
  return M.useEffect(() => {
    if (i.current && o.current) {
      let u = i.current, d = o.current, c, m = new ResizeObserver(() => {
        c = requestAnimationFrame(() => {
          let g = u.offsetHeight;
          d.style.setProperty("--cmdk-list-height", g.toFixed(1) + "px");
        });
      });
      return m.observe(u), () => {
        cancelAnimationFrame(c), m.unobserve(u);
      };
    }
  }, []), M.createElement(zt.div, { ref: Vn(o, t), ...a, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: l.listId }, la(e, (u) => M.createElement("div", { ref: Vn(i, l.listInnerRef), "cmdk-list-sizer": "" }, u)));
}), I_ = M.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: a, contentClassName: o, container: i, ...s } = e;
  return M.createElement(we.Root, { open: n, onOpenChange: r }, M.createElement(we.Portal, { container: i }, M.createElement(we.Overlay, { "cmdk-overlay": "", className: a }), M.createElement(we.Content, { "aria-label": e.label, "cmdk-dialog": "", className: o }, M.createElement(Ap, { ref: t, ...s }))));
}), A_ = M.forwardRef((e, t) => At((n) => n.filtered.count === 0) ? M.createElement(zt.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), z_ = M.forwardRef((e, t) => {
  let { progress: n, children: r, label: a = "Loading...", ...o } = e;
  return M.createElement(zt.div, { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": a }, la(e, (i) => M.createElement("div", { "aria-hidden": !0 }, i)));
}), ln = Object.assign(Ap, { List: R_, Item: O_, Input: k_, Group: M_, Separator: D_, Dialog: I_, Empty: A_, Loading: z_ });
function L_(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function q_(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function zp(e) {
  let t = M.useRef(e);
  return Jt(() => {
    t.current = e;
  }), t;
}
var Jt = typeof window > "u" ? M.useEffect : M.useLayoutEffect;
function pn(e) {
  let t = M.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function At(e) {
  let t = Gl(), n = () => e(t.snapshot());
  return M.useSyncExternalStore(t.subscribe, n, n);
}
function Lp(e, t, n, r = []) {
  let a = M.useRef(), o = mr();
  return Jt(() => {
    var i;
    let s = (() => {
      var u;
      for (let d of n) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (u = d.current.textContent) == null ? void 0 : u.trim() : a.current;
      }
    })(), l = r.map((u) => u.trim());
    o.value(e, s, l), (i = t.current) == null || i.setAttribute(mn, s), a.current = s;
  }), a;
}
var $_ = () => {
  let [e, t] = M.useState(), n = pn(() => /* @__PURE__ */ new Map());
  return Jt(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, a) => {
    n.current.set(r, a), t({});
  };
};
function B_(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function la({ asChild: e, children: t }, n) {
  return e && M.isValidElement(t) ? M.cloneElement(B_(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var j_ = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function F_({ ...e }) {
  return /* @__PURE__ */ f(we.Root, { "data-slot": "dialog", ...e });
}
function nN({ ...e }) {
  return /* @__PURE__ */ f(we.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function H_({ ...e }) {
  return /* @__PURE__ */ f(we.Portal, { "data-slot": "dialog-portal", ...e });
}
function rN({ ...e }) {
  return /* @__PURE__ */ f(we.Close, { "data-slot": "dialog-close", ...e });
}
function W_({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    we.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: x(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Y_({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(H_, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ f(W_, {}),
    /* @__PURE__ */ U(
      we.Content,
      {
        "data-slot": "dialog-content",
        className: x(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...n,
        children: [
          t,
          /* @__PURE__ */ U(we.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ f(mm, {}),
            /* @__PURE__ */ f("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function V_({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "dialog-header",
      className: x("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function aN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "dialog-footer",
      className: x("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function G_({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    we.Title,
    {
      "data-slot": "dialog-title",
      className: x("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function U_({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    we.Description,
    {
      "data-slot": "dialog-description",
      className: x("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function K_({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    ln,
    {
      "data-slot": "command",
      className: x(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...t
    }
  );
}
function oN({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ U(F_, { ...r, children: [
    /* @__PURE__ */ U(V_, { className: "sr-only", children: [
      /* @__PURE__ */ f(G_, { children: e }),
      /* @__PURE__ */ f(U_, { children: t })
    ] }),
    /* @__PURE__ */ f(Y_, { className: "overflow-hidden p-0", children: /* @__PURE__ */ f(K_, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n }) })
  ] });
}
function iN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ U("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3", children: [
    /* @__PURE__ */ f(Vh, { className: "size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ f(
      ln.Input,
      {
        "data-slot": "command-input",
        className: x(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...t
      }
    )
  ] });
}
function sN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    ln.List,
    {
      "data-slot": "command-list",
      className: x("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
      ...t
    }
  );
}
function lN({ ...e }) {
  return /* @__PURE__ */ f(
    ln.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function uN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    ln.Group,
    {
      "data-slot": "command-group",
      className: x(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...t
    }
  );
}
function cN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    ln.Separator,
    {
      "data-slot": "command-separator",
      className: x("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function dN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    ln.Item,
    {
      "data-slot": "command-item",
      className: x(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function fN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "command-shortcut",
      className: x("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function mN({ ...e }) {
  return /* @__PURE__ */ f(qe.Root, { "data-slot": "context-menu", ...e });
}
function pN({
  ...e
}) {
  return /* @__PURE__ */ f(qe.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function hN({ ...e }) {
  return /* @__PURE__ */ f(qe.Group, { "data-slot": "context-menu-group", ...e });
}
function gN({ ...e }) {
  return /* @__PURE__ */ f(qe.Portal, { "data-slot": "context-menu-portal", ...e });
}
function vN({ ...e }) {
  return /* @__PURE__ */ f(qe.Sub, { "data-slot": "context-menu-sub", ...e });
}
function bN({
  ...e
}) {
  return /* @__PURE__ */ f(qe.RadioGroup, { "data-slot": "context-menu-radio-group", ...e });
}
function yN({
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
      className: x(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f(Vr, { className: "ml-auto" })
      ]
    }
  );
}
function wN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    qe.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: x(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function xN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(qe.Portal, { children: /* @__PURE__ */ f(
    qe.Content,
    {
      "data-slot": "context-menu-content",
      className: x(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...t
    }
  ) });
}
function _N({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ f(
    qe.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: x(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function SN({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ U(
    qe.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: x(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ f("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f(qe.ItemIndicator, { children: /* @__PURE__ */ f(or, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function CN({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    qe.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: x(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ f("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f(qe.ItemIndicator, { children: /* @__PURE__ */ f(Yr, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function PN({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    qe.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: x("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...n
    }
  );
}
function EN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    qe.Separator,
    {
      "data-slot": "context-menu-separator",
      className: x("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function NN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: x("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function X_(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const qp = w.createContext({
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
  const e = w.useContext(qp);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
X_(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function Q_() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function J_() {
  return Ul(/^Mac/);
}
function Z_() {
  return Ul(/^iPhone/);
}
function Yf() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function eS() {
  return Ul(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  J_() && navigator.maxTouchPoints > 1;
}
function $p() {
  return Z_() || eS();
}
function Ul(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const tS = 24, nS = typeof window < "u" ? pm : st;
function Vf(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const Ds = typeof document < "u" && window.visualViewport;
function Gf(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Bp(e) {
  for (Gf(e) && (e = e.parentElement); e && !Gf(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const rS = /* @__PURE__ */ new Set([
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
let Sr = 0, ks;
function aS(e = {}) {
  let { isDisabled: t } = e;
  nS(() => {
    if (!t)
      return Sr++, Sr === 1 && $p() && (ks = oS()), () => {
        Sr--, Sr === 0 && (ks == null || ks());
      };
  }, [
    t
  ]);
}
function oS() {
  let e, t = 0, n = (c) => {
    e = Bp(c.target), !(e === document.documentElement && e === document.body) && (t = c.changedTouches[0].pageY);
  }, r = (c) => {
    if (!e || e === document.documentElement || e === document.body) {
      c.preventDefault();
      return;
    }
    let m = c.changedTouches[0].pageY, g = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((g <= 0 && m > t || g >= h && m < t) && c.preventDefault(), t = m);
  }, a = (c) => {
    let m = c.target;
    il(m) && m !== document.activeElement && (c.preventDefault(), m.style.transform = "translateY(-2000px)", m.focus(), requestAnimationFrame(() => {
      m.style.transform = "";
    }));
  }, o = (c) => {
    let m = c.target;
    il(m) && (m.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      m.style.transform = "", Ds && (Ds.height < window.innerHeight ? requestAnimationFrame(() => {
        Uf(m);
      }) : Ds.addEventListener("resize", () => Uf(m), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, l = window.pageYOffset, u = Vf(iS(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = Vf(In(document, "touchstart", n, {
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
    u(), d(), window.scrollTo(s, l);
  };
}
function iS(e, t, n) {
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
function Uf(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Bp(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, a = e.getBoundingClientRect().top, o = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom + tS;
      o > i && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function il(e) {
  return e instanceof HTMLInputElement && !rS.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function sS(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function lS(...e) {
  return (t) => e.forEach((n) => sS(n, t));
}
function jp(...e) {
  return M.useCallback(lS(...e), e);
}
const Fp = /* @__PURE__ */ new WeakMap();
function Re(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([a, o]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, o);
      return;
    }
    r[a] = e.style[a], e.style[a] = o;
  }), !n && Fp.set(e, r);
}
function uS(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Fp.get(e);
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
function cS(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Rs(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function dS(...e) {
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
}, Hp = 0.4, fS = 0.25, mS = 100, Wp = 8, Ft = 16, sl = 26, Is = "vaul-dragging";
function Yp(e) {
  const t = w.useRef(e);
  return w.useEffect(() => {
    t.current = e;
  }), w.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function pS({ defaultProp: e, onChange: t }) {
  const n = w.useState(e), [r] = n, a = w.useRef(r), o = Yp(t);
  return w.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [
    r,
    a,
    o
  ]), n;
}
function Vp({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = pS({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, i = o ? e : r, s = Yp(n), l = w.useCallback((u) => {
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
function hS({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: a, fadeFromIndex: o, onSnapPointChange: i, direction: s = "bottom", container: l, snapToSequentialPoint: u }) {
  const [d, c] = Vp({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [m, g] = w.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  w.useEffect(() => {
    function _() {
      g({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, []);
  const h = w.useMemo(() => d === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    d
  ]), b = w.useMemo(() => {
    var _;
    return (_ = n == null ? void 0 : n.findIndex((R) => R === d)) != null ? _ : null;
  }, [
    n,
    d
  ]), p = n && n.length > 0 && (o || o === 0) && !Number.isNaN(o) && n[o] === d || !n, v = w.useMemo(() => {
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
  ]), y = w.useMemo(() => b !== null ? v == null ? void 0 : v[b] : null, [
    v,
    b
  ]), S = w.useCallback((_) => {
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
  w.useEffect(() => {
    if (d || e) {
      var _;
      const R = (_ = n == null ? void 0 : n.findIndex((k) => k === e || k === d)) != null ? _ : -1;
      v && R !== -1 && typeof v[R] == "number" && S(v[R]);
    }
  }, [
    d,
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
    if (k > Hp && Math.abs(_) < B * 0.4) {
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
  function N(_, R) {
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
    activeSnapPoint: d,
    shouldFade: p,
    getPercentageDragged: N,
    setActiveSnapPoint: c,
    activeSnapPointIndex: b,
    onRelease: C,
    onDrag: D,
    snapPointsOffset: v
  };
}
const gS = () => () => {
};
function vS() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: a } = pr(), o = w.useRef(null), i = gm(() => document.body.style.backgroundColor, []);
  function s() {
    return (window.innerWidth - sl) / window.innerWidth;
  }
  w.useEffect(() => {
    if (t && n) {
      o.current && clearTimeout(o.current);
      const l = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!l) return;
      dS(r && !a ? Rs(document.body, {
        background: "black"
      }) : gS, Rs(l, {
        transformOrigin: ke(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Oe.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Oe.EASE.join(",")})`
      }));
      const u = Rs(l, {
        borderRadius: `${Wp}px`,
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
function bS({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: a, noBodyStyles: o }) {
  const [i, s] = w.useState(() => typeof window < "u" ? window.location.href : ""), l = w.useRef(0), u = w.useCallback(() => {
    if (Yf() && An === null && e && !o) {
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
  ]), d = w.useCallback(() => {
    if (Yf() && An !== null && !o) {
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
  return w.useEffect(() => {
    function c() {
      l.current = window.scrollY;
    }
    return c(), window.addEventListener("scroll", c), () => {
      window.removeEventListener("scroll", c);
    };
  }, []), w.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || d();
      };
  }, [
    t,
    d
  ]), w.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && u(), t || window.setTimeout(() => {
      d();
    }, 500)) : d());
  }, [
    e,
    r,
    i,
    t,
    n,
    u,
    d
  ]), {
    restorePositionSetting: d
  };
}
function yS({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: a, snapPoints: o, shouldScaleBackground: i = !1, setBackgroundColorOnScale: s = !0, closeThreshold: l = fS, scrollLockTimeout: u = mS, dismissible: d = !0, handleOnly: c = !1, fadeFromIndex: m = o && o.length - 1, activeSnapPoint: g, setActiveSnapPoint: h, fixed: b, modal: p = !0, onClose: v, nested: y, noBodyStyles: S = !1, direction: C = "bottom", defaultOpen: D = !1, disablePreventScroll: N = !0, snapToSequentialPoint: _ = !1, preventScrollRestoration: R = !1, repositionInputs: k = !0, onAnimationEnd: Y, container: I, autoFocus: H = !1 }) {
  var T, W;
  const [F = !1, B] = Vp({
    defaultProp: D,
    prop: e,
    onChange: (J) => {
      t == null || t(J), !J && !y && Ye(), setTimeout(() => {
        Y == null || Y(J);
      }, Oe.DURATION * 1e3), J && !p && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), J || (document.body.style.pointerEvents = "auto");
    }
  }), [L, q] = w.useState(!1), [te, ie] = w.useState(!1), [X, O] = w.useState(!1), E = w.useRef(null), z = w.useRef(null), A = w.useRef(null), $ = w.useRef(null), j = w.useRef(null), V = w.useRef(!1), Q = w.useRef(null), ne = w.useRef(0), ae = w.useRef(!1), G = w.useRef(!D), Z = w.useRef(0), P = w.useRef(null), K = w.useRef(((T = P.current) == null ? void 0 : T.getBoundingClientRect().height) || 0), se = w.useRef(((W = P.current) == null ? void 0 : W.getBoundingClientRect().width) || 0), ce = w.useRef(0), le = w.useCallback((J) => {
    o && J === Pe.length - 1 && (z.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: oe, activeSnapPointIndex: ge, setActiveSnapPoint: De, onRelease: me, snapPointsOffset: Pe, onDrag: je, shouldFade: Fe, getPercentageDragged: ze } = hS({
    snapPoints: o,
    activeSnapPointProp: g,
    setActiveSnapPointProp: h,
    drawerRef: P,
    fadeFromIndex: m,
    overlayRef: E,
    onSnapPointChange: le,
    direction: C,
    container: I,
    snapToSequentialPoint: _
  });
  aS({
    isDisabled: !F || te || !p || X || !L || !k || !N
  });
  const { restorePositionSetting: Ye } = bS({
    isOpen: F,
    modal: p,
    nested: y ?? !1,
    hasBeenOpened: L,
    preventScrollRestoration: R,
    noBodyStyles: S
  });
  function tt() {
    return (window.innerWidth - sl) / window.innerWidth;
  }
  function nt(J) {
    var pe, ve;
    !d && !o || P.current && !P.current.contains(J.target) || (K.current = ((pe = P.current) == null ? void 0 : pe.getBoundingClientRect().height) || 0, se.current = ((ve = P.current) == null ? void 0 : ve.getBoundingClientRect().width) || 0, ie(!0), A.current = /* @__PURE__ */ new Date(), $p() && window.addEventListener("touchend", () => V.current = !1, {
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
      const pe = C === "bottom" || C === "right" ? 1 : -1, ve = (ne.current - (ke(C) ? J.pageY : J.pageX)) * pe, de = ve > 0, Se = o && !d && !de;
      if (Se && ge === 0) return;
      const ee = Math.abs(ve), fe = document.querySelector("[data-vaul-drawer-wrapper]"), _e = C === "bottom" || C === "top" ? K.current : se.current;
      let Ce = ee / _e;
      const rt = ze(ee, de);
      if (rt !== null && (Ce = rt), Se && Ce >= 1 || !V.current && !Ie(J.target, de)) return;
      if (P.current.classList.add(Is), V.current = !0, Re(P.current, {
        transition: "none"
      }), Re(E.current, {
        transition: "none"
      }), o && je({
        draggedDistance: ve
      }), de && !o) {
        const Te = cS(ve), Pt = Math.min(Te * -1, 0) * pe;
        Re(P.current, {
          transform: ke(C) ? `translate3d(0, ${Pt}px, 0)` : `translate3d(${Pt}px, 0, 0)`
        });
        return;
      }
      const Ee = 1 - Ce;
      if ((Fe || m && ge === m - 1) && (r == null || r(J, Ce), Re(E.current, {
        opacity: `${Ee}`,
        transition: "none"
      }, !0)), fe && E.current && i) {
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
  w.useEffect(() => {
    window.requestAnimationFrame(() => {
      G.current = !0;
    });
  }, []), w.useEffect(() => {
    var J;
    function pe() {
      if (!P.current || !k) return;
      const ve = document.activeElement;
      if (il(ve) || ae.current) {
        var de;
        const Se = ((de = window.visualViewport) == null ? void 0 : de.height) || 0, ee = window.innerHeight;
        let fe = ee - Se;
        const _e = P.current.getBoundingClientRect().height || 0, Ce = _e > ee * 0.8;
        ce.current || (ce.current = _e);
        const rt = P.current.getBoundingClientRect().top;
        if (Math.abs(Z.current - fe) > 60 && (ae.current = !ae.current), o && o.length > 0 && Pe && ge) {
          const Ee = Pe[ge] || 0;
          fe += Ee;
        }
        if (Z.current = fe, _e > Se || ae.current) {
          const Ee = P.current.getBoundingClientRect().height;
          let Te = Ee;
          Ee > Se && (Te = Se - (Ce ? rt : sl)), b ? P.current.style.height = `${Ee - Math.max(fe, 0)}px` : P.current.style.height = `${Math.max(Te, Se - rt)}px`;
        } else Q_() || (P.current.style.height = `${ce.current}px`);
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
    }), Re(E.current, {
      transition: `opacity ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      opacity: "1"
    }), i && pe && pe > 0 && F && Re(J, {
      borderRadius: `${Wp}px`,
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
    !te || !P.current || (P.current.classList.remove(Is), V.current = !1, ie(!1), $.current = /* @__PURE__ */ new Date());
  }
  function kt(J) {
    if (!te || !P.current) return;
    P.current.classList.remove(Is), V.current = !1, ie(!1), $.current = /* @__PURE__ */ new Date();
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
        dismissible: d
      }), a == null || a(J, !0);
      return;
    }
    if (C === "bottom" || C === "right" ? de > 0 : de < 0) {
      Le(), a == null || a(J, !0);
      return;
    }
    if (Se > Hp) {
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
  w.useEffect(() => (F && (Re(document.documentElement, {
    scrollBehavior: "auto"
  }), z.current = /* @__PURE__ */ new Date()), () => {
    uS(document.documentElement, "scrollBehavior");
  }), [
    F
  ]);
  function un(J) {
    const pe = J ? (window.innerWidth - Ft) / window.innerWidth : 1, ve = J ? -Ft : 0;
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
    const ve = (window.innerWidth - Ft) / window.innerWidth, de = ve + pe * (1 - ve), Se = -Ft + pe * Ft;
    Re(P.current, {
      transform: ke(C) ? `scale(${de}) translate3d(0, ${Se}px, 0)` : `scale(${de}) translate3d(${Se}px, 0, 0)`,
      transition: "none"
    });
  }
  function Bt(J, pe) {
    const ve = ke(C) ? window.innerHeight : window.innerWidth, de = pe ? (ve - Ft) / ve : 1, Se = pe ? -Ft : 0;
    pe && Re(P.current, {
      transition: `transform ${Oe.DURATION}s cubic-bezier(${Oe.EASE.join(",")})`,
      transform: ke(C) ? `scale(${de}) translate3d(0, ${Se}px, 0)` : `scale(${de}) translate3d(${Se}px, 0, 0)`
    });
  }
  return w.useEffect(() => {
    p || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    p
  ]), /* @__PURE__ */ w.createElement(we.Root, {
    defaultOpen: D,
    onOpenChange: (J) => {
      !d && !J || (J ? q(!0) : Ae(!0), B(J));
    },
    open: F
  }, /* @__PURE__ */ w.createElement(qp.Provider, {
    value: {
      activeSnapPoint: oe,
      snapPoints: o,
      setActiveSnapPoint: De,
      drawerRef: P,
      overlayRef: E,
      onOpenChange: t,
      onPress: nt,
      onRelease: kt,
      onDrag: gt,
      dismissible: d,
      shouldAnimate: G,
      handleOnly: c,
      isOpen: F,
      isDragging: te,
      shouldFade: Fe,
      closeDrawer: Ae,
      onNestedDrag: On,
      onNestedOpenChange: un,
      onNestedRelease: Bt,
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
const Gp = /* @__PURE__ */ w.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: a, shouldFade: o, isOpen: i, modal: s, shouldAnimate: l } = pr(), u = jp(t, n), d = r && r.length > 0;
  if (!s)
    return null;
  const c = w.useCallback((m) => a(m), [
    a
  ]);
  return /* @__PURE__ */ w.createElement(we.Overlay, {
    onMouseUp: c,
    ref: u,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": i && d ? "true" : "false",
    "data-vaul-snap-points-overlay": i && o ? "true" : "false",
    "data-vaul-animate": l != null && l.current ? "true" : "false",
    ...e
  });
});
Gp.displayName = "Drawer.Overlay";
const Up = /* @__PURE__ */ w.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, a) {
  const { drawerRef: o, onPress: i, onRelease: s, onDrag: l, keyboardIsOpen: u, snapPointsOffset: d, activeSnapPointIndex: c, modal: m, isOpen: g, direction: h, snapPoints: b, container: p, handleOnly: v, shouldAnimate: y, autoFocus: S } = pr(), [C, D] = w.useState(!1), N = jp(a, o), _ = w.useRef(null), R = w.useRef(null), k = w.useRef(!1), Y = b && b.length > 0;
  vS();
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
  w.useEffect(() => {
    Y && window.requestAnimationFrame(() => {
      D(!0);
    });
  }, []);
  function H(T) {
    _.current = null, k.current = !1, s(T);
  }
  return /* @__PURE__ */ w.createElement(we.Content, {
    "data-vaul-drawer-direction": h,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": C ? "true" : "false",
    "data-vaul-snap-points": g && Y ? "true" : "false",
    "data-vaul-custom-container": p ? "true" : "false",
    "data-vaul-animate": y != null && y.current ? "true" : "false",
    ...r,
    ref: N,
    style: d && d.length > 0 ? {
      "--snap-point-height": `${d[c ?? 0]}px`,
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
Up.displayName = "Drawer.Content";
const wS = 250, xS = 120, _S = /* @__PURE__ */ w.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: a, isDragging: o, snapPoints: i, activeSnapPoint: s, setActiveSnapPoint: l, dismissible: u, handleOnly: d, isOpen: c, onPress: m, onDrag: g } = pr(), h = w.useRef(null), b = w.useRef(!1);
  function p() {
    if (b.current) {
      S();
      return;
    }
    window.setTimeout(() => {
      v();
    }, xS);
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
    const N = i[D + 1];
    l(N);
  }
  function y() {
    h.current = window.setTimeout(() => {
      b.current = !0;
    }, wS);
  }
  function S() {
    h.current && window.clearTimeout(h.current), b.current = !1;
  }
  return /* @__PURE__ */ w.createElement("div", {
    onClick: p,
    onPointerCancel: S,
    onPointerDown: (C) => {
      d && m(C), y();
    },
    onPointerMove: (C) => {
      d && g(C);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": c ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ w.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
_S.displayName = "Drawer.Handle";
function SS(e) {
  const t = pr(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ w.createElement(we.Portal, {
    container: n,
    ...r
  });
}
const $t = {
  Root: yS,
  Content: Up,
  Overlay: Gp,
  Trigger: we.Trigger,
  Portal: SS,
  Close: we.Close,
  Title: we.Title,
  Description: we.Description
};
function TN({ ...e }) {
  return /* @__PURE__ */ f($t.Root, { "data-slot": "drawer", ...e });
}
function ON({ ...e }) {
  return /* @__PURE__ */ f($t.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function CS({ ...e }) {
  return /* @__PURE__ */ f($t.Portal, { "data-slot": "drawer-portal", ...e });
}
function MN({ ...e }) {
  return /* @__PURE__ */ f($t.Close, { "data-slot": "drawer-close", ...e });
}
function PS({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    $t.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: x(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function DN({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(CS, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ f(PS, {}),
    /* @__PURE__ */ U(
      $t.Content,
      {
        "data-slot": "drawer-content",
        className: x(
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
function kN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "drawer-header",
      className: x("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function RN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "drawer-footer",
      className: x("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function IN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    $t.Title,
    {
      "data-slot": "drawer-title",
      className: x("text-foreground font-semibold", e),
      ...t
    }
  );
}
function AN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    $t.Description,
    {
      "data-slot": "drawer-description",
      className: x("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function zN({ ...e }) {
  return /* @__PURE__ */ f($e.Root, { "data-slot": "dropdown-menu", ...e });
}
function LN({
  ...e
}) {
  return /* @__PURE__ */ f($e.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function qN({
  ...e
}) {
  return /* @__PURE__ */ f($e.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function $N({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ f($e.Portal, { children: /* @__PURE__ */ f(
    $e.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: x(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n
    }
  ) });
}
function BN({ ...e }) {
  return /* @__PURE__ */ f($e.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function jN({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ f(
    $e.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: x(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function FN({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ U(
    $e.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: x(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ f("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f($e.ItemIndicator, { children: /* @__PURE__ */ f(or, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function HN({
  ...e
}) {
  return /* @__PURE__ */ f($e.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function WN({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    $e.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: x(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ f("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f($e.ItemIndicator, { children: /* @__PURE__ */ f(Yr, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function YN({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    $e.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: x("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...n
    }
  );
}
function VN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    $e.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: x("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function GN({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: x("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function UN({ ...e }) {
  return /* @__PURE__ */ f($e.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function KN({
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
      className: x(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f(Vr, { className: "ml-auto size-4" })
      ]
    }
  );
}
function XN({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    $e.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: x(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
var ES = (e) => e.type === "checkbox", NS = (e) => e instanceof Date, Kp = (e) => e == null;
const TS = (e) => typeof e == "object";
var hr = (e) => !Kp(e) && !Array.isArray(e) && TS(e) && !NS(e), OS = (e) => hr(e) && e.target ? ES(e.target) ? e.target.checked : e.target.value : e, MS = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, DS = (e, t) => e.has(MS(t)), kS = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return hr(t) && t.hasOwnProperty("isPrototypeOf");
}, RS = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Xp(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(RS && (e instanceof Blob || r)) && (n || hr(e)))
    if (t = n ? [] : {}, !n && !kS(e))
      t = e;
    else
      for (const a in e)
        e.hasOwnProperty(a) && (t[a] = Xp(e[a]));
  else
    return e;
  return t;
}
var Qp = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ll = (e) => e === void 0, Ue = (e, t, n) => {
  if (!t || !hr(e))
    return n;
  const r = Qp(t.split(/[,[\].]+?/)).reduce((a, o) => Kp(a) ? a : a[o], e);
  return ll(r) || r === e ? ll(e[t]) ? n : e[t] : r;
}, As = (e) => typeof e == "boolean", IS = (e) => /^\w*$/.test(e), AS = (e) => Qp(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Kf = (e, t, n) => {
  let r = -1;
  const a = IS(t) ? [t] : AS(t), o = a.length, i = o - 1;
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
const Xf = {
  BLUR: "blur",
  CHANGE: "change"
}, Qf = {
  all: "all"
}, Jp = w.createContext(null), ua = () => w.useContext(Jp), zS = (e) => {
  const { children: t, ...n } = e;
  return w.createElement(Jp.Provider, { value: n }, t);
};
var LS = (e, t, n, r = !0) => {
  const a = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(a, o, {
      get: () => {
        const i = o;
        return t._proxyFormState[i] !== Qf.all && (t._proxyFormState[i] = !r || Qf.all), n && (n[i] = !0), e[i];
      }
    });
  return a;
};
function Zp(e) {
  const t = ua(), { control: n = t.control, disabled: r, name: a, exact: o } = e || {}, [i, s] = w.useState(n._formState), l = w.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = w.useRef(a);
  return u.current = a, w.useEffect(() => n._subscribe({
    name: u.current,
    formState: l.current,
    exact: o,
    callback: (d) => {
      !r && s({
        ...n._formState,
        ...d
      });
    }
  }), [n, r, o]), w.useEffect(() => {
    l.current.isValid && n._setValid(!0);
  }, [n]), w.useMemo(() => LS(i, n, l.current, !1), [i, n]);
}
var qS = (e) => typeof e == "string", $S = (e, t, n, r, a) => qS(e) ? Ue(n, e, a) : Array.isArray(e) ? e.map((o) => Ue(n, o)) : n;
function BS(e) {
  const t = ua(), { control: n = t.control, name: r, defaultValue: a, disabled: o, exact: i } = e || {}, s = w.useRef(r), l = w.useRef(a);
  s.current = r, w.useEffect(() => n._subscribe({
    name: s.current,
    formState: {
      values: !0
    },
    exact: i,
    callback: (c) => !o && d($S(s.current, n._names, c.values || n._formValues, !1, l.current))
  }), [n, o, i]);
  const [u, d] = w.useState(n._getWatch(r, a));
  return w.useEffect(() => n._removeUnmounted()), u;
}
function jS(e) {
  const t = ua(), { name: n, disabled: r, control: a = t.control, shouldUnregister: o } = e, i = DS(a._names.array, n), s = BS({
    control: a,
    name: n,
    defaultValue: Ue(a._formValues, n, Ue(a._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = Zp({
    control: a,
    name: n,
    exact: !0
  }), u = w.useRef(e), d = w.useRef(a.register(n, {
    ...e.rules,
    value: s,
    ...As(e.disabled) ? { disabled: e.disabled } : {}
  })), c = w.useMemo(() => Object.defineProperties({}, {
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
  }), [l, n]), m = w.useCallback((p) => d.current.onChange({
    target: {
      value: OS(p),
      name: n
    },
    type: Xf.CHANGE
  }), [n]), g = w.useCallback(() => d.current.onBlur({
    target: {
      value: Ue(a._formValues, n),
      name: n
    },
    type: Xf.BLUR
  }), [n, a._formValues]), h = w.useCallback((p) => {
    const v = Ue(a._fields, n);
    v && p && (v._f.ref = {
      focus: () => p.focus(),
      select: () => p.select(),
      setCustomValidity: (y) => p.setCustomValidity(y),
      reportValidity: () => p.reportValidity()
    });
  }, [a._fields, n]), b = w.useMemo(() => ({
    name: n,
    value: s,
    ...As(r) || l.disabled ? { disabled: l.disabled || r } : {},
    onChange: m,
    onBlur: g,
    ref: h
  }), [n, r, l.disabled, m, g, h, s]);
  return w.useEffect(() => {
    const p = a._options.shouldUnregister || o;
    a.register(n, {
      ...u.current.rules,
      ...As(u.current.disabled) ? { disabled: u.current.disabled } : {}
    });
    const v = (y, S) => {
      const C = Ue(a._fields, y);
      C && C._f && (C._f.mount = S);
    };
    if (v(n, !0), p) {
      const y = Xp(Ue(a._options.defaultValues, n));
      Kf(a._defaultValues, n, y), ll(Ue(a._formValues, n)) && Kf(a._formValues, n, y);
    }
    return !i && a.register(n), () => {
      (i ? p && !a._state.action : p) ? a.unregister(n) : v(n, !1);
    };
  }, [n, a, i, o]), w.useEffect(() => {
    a._setDisabledField({
      disabled: r,
      name: n
    });
  }, [r, n, a]), w.useMemo(() => ({
    field: b,
    formState: l,
    fieldState: c
  }), [b, l, c]);
}
const FS = (e) => e.render(jS(e));
function HS({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    ag.Root,
    {
      "data-slot": "label",
      className: x(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const QN = zS, eh = M.createContext({}), JN = ({
  ...e
}) => /* @__PURE__ */ f(eh.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f(FS, { ...e }) }), ca = () => {
  const e = M.useContext(eh), t = M.useContext(th), { getFieldState: n } = ua(), r = Zp({ name: e.name }), a = n(e.name, r);
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
}, th = M.createContext({});
function ZN({ className: e, ...t }) {
  const n = M.useId();
  return /* @__PURE__ */ f(th.Provider, { value: { id: n }, children: /* @__PURE__ */ f("div", { "data-slot": "form-item", className: x("grid gap-2", e), ...t }) });
}
function eT({ className: e, ...t }) {
  const { error: n, formItemId: r } = ca();
  return /* @__PURE__ */ f(
    HS,
    {
      "data-slot": "form-label",
      "data-error": !!n,
      className: x("data-[error=true]:text-destructive", e),
      htmlFor: r,
      ...t
    }
  );
}
function tT({ ...e }) {
  const { error: t, formItemId: n, formDescriptionId: r, formMessageId: a } = ca();
  return /* @__PURE__ */ f(
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
function nT({ className: e, ...t }) {
  const { formDescriptionId: n } = ca();
  return /* @__PURE__ */ f(
    "p",
    {
      "data-slot": "form-description",
      id: n,
      className: x("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function rT({ className: e, ...t }) {
  const { error: n, formMessageId: r } = ca(), a = n ? String((n == null ? void 0 : n.message) ?? "") : t.children;
  return a ? /* @__PURE__ */ f(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: x("text-destructive text-sm", e),
      ...t,
      children: a
    }
  ) : null;
}
function aT({ ...e }) {
  return /* @__PURE__ */ f(Or.Root, { "data-slot": "hover-card", ...e });
}
function oT({ ...e }) {
  return /* @__PURE__ */ f(Or.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function iT({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ f(Or.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ f(
    Or.Content,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: n,
      className: x(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
var WS = Object.defineProperty, YS = Object.defineProperties, VS = Object.getOwnPropertyDescriptors, jr = Object.getOwnPropertySymbols, nh = Object.prototype.hasOwnProperty, rh = Object.prototype.propertyIsEnumerable, Jf = (e, t, n) => t in e ? WS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, GS = (e, t) => {
  for (var n in t || (t = {})) nh.call(t, n) && Jf(e, n, t[n]);
  if (jr) for (var n of jr(t)) rh.call(t, n) && Jf(e, n, t[n]);
  return e;
}, US = (e, t) => YS(e, VS(t)), KS = (e, t) => {
  var n = {};
  for (var r in e) nh.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && jr) for (var r of jr(e)) t.indexOf(r) < 0 && rh.call(e, r) && (n[r] = e[r]);
  return n;
};
function XS(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function QS(e) {
  let t = M.useRef();
  return M.useEffect(() => {
    t.current = e;
  }), t.current;
}
var JS = 18, ah = 40, ZS = `${ah}px`, eC = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function tC({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let [a, o] = M.useState(!1), [i, s] = M.useState(!1), [l, u] = M.useState(!1), d = M.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && a && i, [a, i, n]), c = M.useCallback(() => {
    let m = e.current, g = t.current;
    if (!m || !g || l || n === "none") return;
    let h = m, b = h.getBoundingClientRect().left + h.offsetWidth, p = h.getBoundingClientRect().top + h.offsetHeight / 2, v = b - JS, y = p;
    document.querySelectorAll(eC).length === 0 && document.elementFromPoint(v, y) === m || (o(!0), u(!0));
  }, [e, t, l, n]);
  return M.useEffect(() => {
    let m = e.current;
    if (!m || n === "none") return;
    function g() {
      let b = window.innerWidth - m.getBoundingClientRect().right;
      s(b >= ah);
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
  }, [t, r, n, c]), { hasPWMBadge: a, willPushPWMBadge: d, PWM_BADGE_SPACE_WIDTH: ZS };
}
var oh = M.createContext({}), ih = M.forwardRef((e, t) => {
  var n = e, { value: r, onChange: a, maxLength: o, textAlign: i = "left", pattern: s, placeholder: l, inputMode: u = "numeric", onComplete: d, pushPasswordManagerStrategy: c = "increase-width", pasteTransformer: m, containerClassName: g, noScriptCSSFallback: h = nC, render: b, children: p } = n, v = KS(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), y, S, C, D, N;
  let [_, R] = M.useState(typeof v.defaultValue == "string" ? v.defaultValue : ""), k = r ?? _, Y = QS(k), I = M.useCallback((P) => {
    a == null || a(P), R(P);
  }, [a]), H = M.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), T = M.useRef(null), W = M.useRef(null), F = M.useRef({ value: k, onChange: I, isIOS: typeof window < "u" && ((S = (y = window == null ? void 0 : window.CSS) == null ? void 0 : y.supports) == null ? void 0 : S.call(y, "-webkit-touch-callout", "none")) }), B = M.useRef({ prev: [(C = T.current) == null ? void 0 : C.selectionStart, (D = T.current) == null ? void 0 : D.selectionEnd, (N = T.current) == null ? void 0 : N.selectionDirection] });
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
  let [L, q] = M.useState(!1), [te, ie] = M.useState(!1), [X, O] = M.useState(null), [E, z] = M.useState(null);
  M.useEffect(() => {
    XS(() => {
      var P, K, se, ce;
      (P = T.current) == null || P.dispatchEvent(new Event("input"));
      let le = (K = T.current) == null ? void 0 : K.selectionStart, oe = (se = T.current) == null ? void 0 : se.selectionEnd, ge = (ce = T.current) == null ? void 0 : ce.selectionDirection;
      le !== null && oe !== null && (O(le), z(oe), B.current.prev = [le, oe, ge]);
    });
  }, [k, te]), M.useEffect(() => {
    Y !== void 0 && k !== Y && Y.length < o && k.length === o && (d == null || d(k));
  }, [o, d, Y, k]);
  let A = tC({ containerRef: W, inputRef: T, pushPasswordManagerStrategy: c, isFocused: te }), $ = M.useCallback((P) => {
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
  }, [o, I, H, k]), Q = M.useMemo(() => ({ position: "relative", cursor: v.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [v.disabled]), ne = M.useMemo(() => ({ position: "absolute", inset: 0, width: A.willPushPWMBadge ? `calc(100% + ${A.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: A.willPushPWMBadge ? `inset(0 ${A.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [A.PWM_BADGE_SPACE_WIDTH, A.willPushPWMBadge, i]), ae = M.useMemo(() => M.createElement("input", US(GS({ autoComplete: v.autoComplete || "one-time-code" }, v), { "data-input-otp": !0, "data-input-otp-placeholder-shown": k.length === 0 || void 0, "data-input-otp-mss": X, "data-input-otp-mse": E, inputMode: u, pattern: H == null ? void 0 : H.source, "aria-placeholder": l, style: ne, maxLength: o, value: k, ref: T, onPaste: (P) => {
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
  } })), [$, j, V, u, ne, o, E, X, v, H == null ? void 0 : H.source, k]), G = M.useMemo(() => ({ slots: Array.from({ length: o }).map((P, K) => {
    var se;
    let ce = te && X !== null && E !== null && (X === E && K === X || K >= X && K < E), le = k[K] !== void 0 ? k[K] : null, oe = k[0] !== void 0 ? null : (se = l == null ? void 0 : l[K]) != null ? se : null;
    return { char: le, placeholderChar: oe, isActive: ce, hasFakeCaret: ce && le === null };
  }), isFocused: te, isHovering: !v.disabled && L }), [te, L, o, E, X, v.disabled, k]), Z = M.useMemo(() => b ? b(G) : M.createElement(oh.Provider, { value: G }, p), [p, G, b]);
  return M.createElement(M.Fragment, null, h !== null && M.createElement("noscript", null, M.createElement("style", null, h)), M.createElement("div", { ref: W, "data-input-otp-container": !0, style: Q, className: g }, Z, M.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, ae)));
});
ih.displayName = "Input";
function zn(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var nC = `
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
function sT({
  className: e,
  containerClassName: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    ih,
    {
      "data-slot": "input-otp",
      containerClassName: x("flex items-center gap-2 has-disabled:opacity-50", t),
      className: x("disabled:cursor-not-allowed", e),
      ...n
    }
  );
}
function lT({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "input-otp-group",
      className: x("flex items-center gap-1", e),
      ...t
    }
  );
}
function uT({
  index: e,
  className: t,
  ...n
}) {
  const r = M.useContext(oh), { char: a, hasFakeCaret: o, isActive: i } = (r == null ? void 0 : r.slots[e]) ?? {};
  return /* @__PURE__ */ U(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": i,
      className: x(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm bg-input-background transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        t
      ),
      ...n,
      children: [
        a,
        o && /* @__PURE__ */ f("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ f("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function cT({ ...e }) {
  return /* @__PURE__ */ f("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ f(Gh, {}) });
}
function dT({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    Be.Root,
    {
      "data-slot": "menubar",
      className: x(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function fT({ ...e }) {
  return /* @__PURE__ */ f(Be.Menu, { "data-slot": "menubar-menu", ...e });
}
function mT({ ...e }) {
  return /* @__PURE__ */ f(Be.Group, { "data-slot": "menubar-group", ...e });
}
function rC({ ...e }) {
  return /* @__PURE__ */ f(Be.Portal, { "data-slot": "menubar-portal", ...e });
}
function pT({ ...e }) {
  return /* @__PURE__ */ f(Be.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function hT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Be.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: x(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...t
    }
  );
}
function gT({
  className: e,
  align: t = "start",
  alignOffset: n = -4,
  sideOffset: r = 8,
  ...a
}) {
  return /* @__PURE__ */ f(rC, { children: /* @__PURE__ */ f(
    Be.Content,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: x(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...a
    }
  ) });
}
function vT({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ f(
    Be.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": n,
      className: x(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function bT({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ U(
    Be.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: x(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ f("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f(Be.ItemIndicator, { children: /* @__PURE__ */ f(or, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function yT({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    Be.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: x(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ f("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f(Be.ItemIndicator, { children: /* @__PURE__ */ f(Yr, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function wT({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    Be.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: x("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...n
    }
  );
}
function xT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Be.Separator,
    {
      "data-slot": "menubar-separator",
      className: x("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function _T({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: x("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function ST({ ...e }) {
  return /* @__PURE__ */ f(Be.Sub, { "data-slot": "menubar-sub", ...e });
}
function CT({
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
      className: x(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f(Vr, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function PT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Be.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: x(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function ET({
  className: e,
  children: t,
  viewport: n = !0,
  ...r
}) {
  return /* @__PURE__ */ U(
    Lt.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      className: x(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ f(oC, {})
      ]
    }
  );
}
function NT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Lt.List,
    {
      "data-slot": "navigation-menu-list",
      className: x("group flex flex-1 list-none items-center justify-center gap-1", e),
      ...t
    }
  );
}
function TT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Lt.Item,
    {
      "data-slot": "navigation-menu-item",
      className: x("relative", e),
      ...t
    }
  );
}
const aC = en(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function OT({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    Lt.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: x(aC(), "group", e),
      ...n,
      children: [
        t,
        " ",
        /* @__PURE__ */ f(
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
function MT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Lt.Content,
    {
      "data-slot": "navigation-menu-content",
      className: x(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function oC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f("div", { className: x("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ f(
    Lt.Viewport,
    {
      "data-slot": "navigation-menu-viewport",
      className: x(
        "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
        e
      ),
      ...t
    }
  ) });
}
function DT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Lt.Link,
    {
      "data-slot": "navigation-menu-link",
      className: x(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function kT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Lt.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: x(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        e
      ),
      ...t,
      children: /* @__PURE__ */ f("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function RT({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: x("mx-auto flex w-full justify-center", e),
      ...t
    }
  );
}
function IT({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "ul",
    {
      "data-slot": "pagination-content",
      className: x("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function AT({ ...e }) {
  return /* @__PURE__ */ f("li", { "data-slot": "pagination-item", ...e });
}
function sh({ className: e, isActive: t, size: n = "icon", ...r }) {
  return /* @__PURE__ */ f(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: x(
        _n({
          variant: t ? "outline" : "ghost",
          size: n
        }),
        e
      ),
      ...r
    }
  );
}
function zT({ className: e, ...t }) {
  return /* @__PURE__ */ U(
    sh,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: x("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ f(Kh, {}),
        /* @__PURE__ */ f("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function LT({ className: e, ...t }) {
  return /* @__PURE__ */ U(
    sh,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: x("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ f("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ f(Vr, {})
      ]
    }
  );
}
function qT({ className: e, ...t }) {
  return /* @__PURE__ */ U(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: x("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ f(Uh, { className: "size-4" }),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function $T({ ...e }) {
  return /* @__PURE__ */ f(Gn.Root, { "data-slot": "popover", ...e });
}
function BT({ ...e }) {
  return /* @__PURE__ */ f(Gn.Trigger, { "data-slot": "popover-trigger", ...e });
}
function jT({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ f(Gn.Portal, { children: /* @__PURE__ */ f(
    Gn.Content,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: x(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
function FT({ ...e }) {
  return /* @__PURE__ */ f(Gn.Anchor, { "data-slot": "popover-anchor", ...e });
}
function HT({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    nu.Root,
    {
      "data-slot": "progress",
      className: x("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", e),
      ...n,
      children: /* @__PURE__ */ f(
        nu.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function WT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    $s.Root,
    {
      "data-slot": "radio-group",
      className: x("grid gap-3", e),
      ...t
    }
  );
}
function YT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    $s.Item,
    {
      "data-slot": "radio-group-item",
      className: x(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ f(
        $s.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ f(Yr, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
const {
  createElement: Tn,
  createContext: iC,
  forwardRef: lh,
  useCallback: Ge,
  useContext: uh,
  useEffect: Gt,
  useImperativeHandle: ch,
  useLayoutEffect: sC,
  useMemo: lC,
  useRef: Xe,
  useState: yn
} = M, Zf = M[`useId${Math.random()}`.slice(0, 5)], uC = sC, da = iC(null);
da.displayName = "PanelGroupContext";
const Ut = uC, cC = typeof Zf == "function" ? Zf : () => null;
let dC = 0;
function Kl(e = null) {
  const t = cC(), n = Xe(e || t || null);
  return n.current === null && (n.current = "" + dC++), e ?? n.current;
}
function dh({
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
  onExpand: d,
  onResize: c,
  order: m,
  style: g,
  tagName: h = "div",
  ...b
}) {
  const p = uh(da);
  if (p === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: v,
    expandPanel: y,
    getPanelSize: S,
    getPanelStyle: C,
    groupId: D,
    isPanelCollapsed: N,
    reevaluatePanelConstraints: _,
    registerPanel: R,
    resizePanel: k,
    unregisterPanel: Y
  } = p, I = Kl(i), H = Xe({
    callbacks: {
      onCollapse: u,
      onExpand: d,
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
  }), Ut(() => {
    const {
      callbacks: W,
      constraints: F
    } = H.current, B = {
      ...F
    };
    H.current.id = I, H.current.idIsFromProps = i !== void 0, H.current.order = m, W.onCollapse = u, W.onExpand = d, W.onResize = c, F.collapsedSize = n, F.collapsible = r, F.defaultSize = a, F.maxSize = s, F.minSize = l, (B.collapsedSize !== F.collapsedSize || B.collapsible !== F.collapsible || B.maxSize !== F.maxSize || B.minSize !== F.minSize) && _(H.current, B);
  }), Ut(() => {
    const W = H.current;
    return R(W), () => {
      Y(W);
    };
  }, [m, I, R, Y]), ch(o, () => ({
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
      return N(H.current);
    },
    isExpanded() {
      return !N(H.current);
    },
    resize: (W) => {
      k(H.current, W);
    }
  }), [v, y, S, N, I, k]);
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
const fh = lh((e, t) => Tn(dh, {
  ...e,
  forwardedRef: t
}));
dh.displayName = "Panel";
fh.displayName = "forwardRef(Panel)";
let ul = null, Vt = null;
function fC(e, t) {
  if (t) {
    const n = (t & vh) !== 0, r = (t & bh) !== 0, a = (t & yh) !== 0, o = (t & wh) !== 0;
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
function mC() {
  Vt !== null && (document.head.removeChild(Vt), ul = null, Vt = null);
}
function zs(e, t) {
  const n = fC(e, t);
  ul !== n && (ul = n, Vt === null && (Vt = document.createElement("style"), document.head.appendChild(Vt)), Vt.innerHTML = `*{cursor: ${n}!important;}`);
}
function mh(e) {
  return e.type === "keydown";
}
function ph(e) {
  return e.type.startsWith("pointer");
}
function hh(e) {
  return e.type.startsWith("mouse");
}
function fa(e) {
  if (ph(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (hh(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function pC() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function hC(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function gC(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: nm(e),
    b: nm(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  ue(r, "Stacking order can only be calculated for elements with a common ancestor");
  const a = {
    a: tm(em(n.a)),
    b: tm(em(n.b))
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
const vC = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function bC(e) {
  var t;
  const n = getComputedStyle((t = gh(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function yC(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || bC(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || vC.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function em(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (ue(n, "Missing node"), yC(n)) return n;
  }
  return null;
}
function tm(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function nm(e) {
  const t = [];
  for (; e; )
    t.push(e), e = gh(e);
  return t;
}
function gh(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const vh = 1, bh = 2, yh = 4, wh = 8, wC = pC() === "coarse";
let dt = [], wn = !1, It = /* @__PURE__ */ new Map(), ma = /* @__PURE__ */ new Map();
const rr = /* @__PURE__ */ new Set();
function xC(e, t, n, r, a) {
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
    var d;
    ma.delete(e), rr.delete(s);
    const c = (d = It.get(i)) !== null && d !== void 0 ? d : 1;
    if (It.set(i, c - 1), Fr(), c === 1 && It.delete(i), dt.includes(s)) {
      const m = dt.indexOf(s);
      m >= 0 && dt.splice(m, 1), Ql(), a("up", !0, null);
    }
  };
}
function rm(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = fa(e);
  wn = !0, Xl({
    target: t,
    x: n,
    y: r
  }), Fr(), dt.length > 0 && (Hr("down", e), e.preventDefault(), e.stopPropagation());
}
function Ln(e) {
  const {
    x: t,
    y: n
  } = fa(e);
  if (wn && e.buttons === 0 && (wn = !1, Hr("up", e)), !wn) {
    const {
      target: r
    } = e;
    Xl({
      target: r,
      x: t,
      y: n
    });
  }
  Hr("move", e), Ql(), dt.length > 0 && e.preventDefault();
}
function dn(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = fa(e);
  ma.clear(), wn = !1, dt.length > 0 && e.preventDefault(), Hr("up", e), Xl({
    target: t,
    x: n,
    y: r
  }), Ql(), Fr();
}
function Xl({
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
      right: d,
      top: c
    } = s, m = wC ? i.coarse : i.fine;
    if (t >= u - m && t <= d + m && n >= c - m && n <= l + m) {
      if (r !== null && document.contains(r) && o !== r && !o.contains(r) && !r.contains(o) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      gC(r, o) > 0) {
        let h = r, b = !1;
        for (; h && !h.contains(o); ) {
          if (hC(h.getBoundingClientRect(), s)) {
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
function Ls(e, t) {
  ma.set(e, t);
}
function Ql() {
  let e = !1, t = !1;
  dt.forEach((r) => {
    const {
      direction: a
    } = r;
    a === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  ma.forEach((r) => {
    n |= r;
  }), e && t ? zs("intersection", n) : e ? zs("horizontal", n) : t ? zs("vertical", n) : mC();
}
function Fr() {
  It.forEach((e, t) => {
    const {
      body: n
    } = t;
    n.removeEventListener("contextmenu", dn), n.removeEventListener("pointerdown", rm), n.removeEventListener("pointerleave", Ln), n.removeEventListener("pointermove", Ln);
  }), window.removeEventListener("pointerup", dn), window.removeEventListener("pointercancel", dn), rr.size > 0 && (wn ? (dt.length > 0 && It.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("contextmenu", dn), n.addEventListener("pointerleave", Ln), n.addEventListener("pointermove", Ln));
  }), window.addEventListener("pointerup", dn), window.addEventListener("pointercancel", dn)) : It.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("pointerdown", rm, {
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
function _C() {
  const [e, t] = yn(0);
  return Ge(() => t((n) => n + 1), []);
}
function ue(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
const Jl = 10;
function Zt(e, t, n = Jl) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function Tt(e, t, n = Jl) {
  return Zt(e, t, n) === 0;
}
function Ze(e, t, n) {
  return Zt(e, t, n) === 0;
}
function SC(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const a = e[r], o = t[r];
    if (!Ze(a, o, n))
      return !1;
  }
  return !0;
}
function gn({
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
  if (Zt(n, s) < 0)
    if (o) {
      const l = (a + s) / 2;
      Zt(n, l) < 0 ? n = a : n = s;
    } else
      n = s;
  return n = Math.min(i, n), n = parseFloat(n.toFixed(Jl)), n;
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
          Zt(v, Math.abs(e)) > 0 && (e = e < 0 ? 0 - v : v);
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
          Zt(v, Math.abs(e)) > 0 && (e = e < 0 ? 0 - v : v);
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
      const v = gn({
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
      const b = h - g, p = gn({
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
  if (SC(a, i))
    return a;
  {
    const c = e < 0 ? l : s, m = t[c];
    ue(m != null, `Previous layout not found for panel index ${c}`);
    const g = m + u, h = gn({
      panelConstraints: n,
      panelIndex: c,
      size: g
    });
    if (i[c] = h, !Ze(h, g)) {
      let b = g - h, v = e < 0 ? l : s;
      for (; v >= 0 && v < n.length; ) {
        const y = i[v];
        ue(y != null, `Previous layout not found for panel index ${v}`);
        const S = y + b, C = gn({
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
  const d = i.reduce((c, m) => m + c, 0);
  return Ze(d, 100) ? i : a;
}
function CC({
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
  const l = Math.min(a, 100 - o), u = Math.max(r, 100 - i), d = e[s];
  return {
    valueMax: l,
    valueMin: u,
    valueNow: d
  };
}
function ar(e, t = document) {
  return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`));
}
function xh(e, t, n = document) {
  const a = ar(e, n).findIndex((o) => o.getAttribute("data-panel-resize-handle-id") === t);
  return a ?? null;
}
function _h(e, t, n) {
  const r = xh(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function Sh(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function pa(e, t = document) {
  const n = t.querySelector(`[data-panel-resize-handle-id="${e}"]`);
  return n || null;
}
function PC(e, t, n, r = document) {
  var a, o, i, s;
  const l = pa(t, r), u = ar(e, r), d = l ? u.indexOf(l) : -1, c = (a = (o = n[d]) === null || o === void 0 ? void 0 : o.id) !== null && a !== void 0 ? a : null, m = (i = (s = n[d + 1]) === null || s === void 0 ? void 0 : s.id) !== null && i !== void 0 ? i : null;
  return [c, m];
}
function EC({
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
  }), Ut(() => {
    if (!o)
      return;
    const s = ar(n, o);
    for (let l = 0; l < a.length - 1; l++) {
      const {
        valueMax: u,
        valueMin: d,
        valueNow: c
      } = CC({
        layout: r,
        panelsArray: a,
        pivotIndices: [l, l + 1]
      }), m = s[l];
      if (m != null) {
        const g = a[l];
        ue(g, `No panel data found for index "${l}"`), m.setAttribute("aria-controls", g.id), m.setAttribute("aria-valuemax", "" + Math.round(u)), m.setAttribute("aria-valuemin", "" + Math.round(d)), m.setAttribute("aria-valuenow", c != null ? "" + Math.round(c) : "");
      }
    }
    return () => {
      s.forEach((l, u) => {
        l.removeAttribute("aria-controls"), l.removeAttribute("aria-valuemax"), l.removeAttribute("aria-valuemin"), l.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, a, o]), Gt(() => {
    if (!o)
      return;
    const s = t.current;
    ue(s, "Eager values not found");
    const {
      panelDataArray: l
    } = s, u = Sh(n, o);
    ue(u != null, `No group found for id "${n}"`);
    const d = ar(n, o);
    ue(d, `No resize handles found for group id "${n}"`);
    const c = d.map((m) => {
      const g = m.getAttribute("data-panel-resize-handle-id");
      ue(g, "Resize handle element has no handle id attribute");
      const [h, b] = PC(n, g, l, o);
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
                  collapsible: N,
                  minSize: _ = 0
                } = S.constraints;
                if (C != null && N) {
                  const R = jn({
                    delta: Ze(C, D) ? _ - D : D - C,
                    initialLayout: r,
                    panelConstraints: l.map((k) => k.constraints),
                    pivotIndices: _h(n, g, o),
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
function am(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Ch(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: a
  } = fa(t);
  return n ? r : a;
}
function NC(e, t, n, r, a) {
  const o = n === "horizontal", i = pa(t, a);
  ue(i, `No resize handle element found for id "${t}"`);
  const s = i.getAttribute("data-panel-group-id");
  ue(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: l
  } = r;
  const u = Ch(n, e), d = Sh(s, a);
  ue(d, `No group element found for id "${s}"`);
  const c = d.getBoundingClientRect(), m = o ? c.width : c.height;
  return (u - l) / m * 100;
}
function TC(e, t, n, r, a, o) {
  if (mh(e)) {
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
    return r == null ? 0 : NC(e, t, n, r, o);
}
function OC({
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
function fn(e, t, n) {
  t.forEach((r, a) => {
    const o = e[a];
    ue(o, `Panel data not found for index ${a}`);
    const {
      callbacks: i,
      constraints: s,
      id: l
    } = o, {
      collapsedSize: u = 0,
      collapsible: d
    } = s, c = n[l];
    if (c == null || r !== c) {
      n[l] = r;
      const {
        onCollapse: m,
        onExpand: g,
        onResize: h
      } = i;
      h && h(r, c), d && (m || g) && (g && (c == null || Tt(c, u)) && !Tt(r, u) && g(), m && (c == null || !Tt(c, u)) && Tt(r, u) && m());
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
function MC({
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
function DC(e, t = 10) {
  let n = null;
  return (...a) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...a);
    }, t);
  };
}
function om(e) {
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
function Ph(e) {
  return `react-resizable-panels:${e}`;
}
function Eh(e) {
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
function Nh(e, t) {
  try {
    const n = Ph(e), r = t.getItem(n);
    if (r) {
      const a = JSON.parse(r);
      if (typeof a == "object" && a != null)
        return a;
    }
  } catch {
  }
  return null;
}
function kC(e, t, n) {
  var r, a;
  const o = (r = Nh(e, n)) !== null && r !== void 0 ? r : {}, i = Eh(t);
  return (a = o[i]) !== null && a !== void 0 ? a : null;
}
function RC(e, t, n, r, a) {
  var o;
  const i = Ph(e), s = Eh(t), l = (o = Nh(e, a)) !== null && o !== void 0 ? o : {};
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
function im({
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
    const s = gn({
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
      const s = i + a, l = gn({
        panelConstraints: t,
        panelIndex: o,
        size: s
      });
      if (i !== l && (a -= l - i, n[o] = l, Ze(a, 0)))
        break;
    }
  return n;
}
const IC = 100, Fn = {
  getItem: (e) => (om(Fn), Fn.getItem(e)),
  setItem: (e, t) => {
    om(Fn), Fn.setItem(e, t);
  }
}, sm = {};
function Th({
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
  tagName: d = "div",
  ...c
}) {
  const m = Kl(o), g = Xe(null), [h, b] = yn(null), [p, v] = yn([]), y = _C(), S = Xe({}), C = Xe(/* @__PURE__ */ new Map()), D = Xe(0), N = Xe({
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
  }), ch(a, () => ({
    getId: () => N.current.id,
    getLayout: () => {
      const {
        layout: E
      } = _.current;
      return E;
    },
    setLayout: (E) => {
      const {
        onLayout: z
      } = N.current, {
        layout: A,
        panelDataArray: $
      } = _.current, j = im({
        layout: E,
        panelConstraints: $.map((V) => V.constraints)
      });
      am(A, j) || (v(j), _.current.layout = j, z && z(j), fn($, j, S.current));
    }
  }), []), Ut(() => {
    N.current.autoSaveId = e, N.current.direction = r, N.current.dragState = h, N.current.id = m, N.current.onLayout = i, N.current.storage = l;
  }), EC({
    committedValuesRef: N,
    eagerValuesRef: _,
    groupId: m,
    layout: p,
    panelDataArray: _.current.panelDataArray,
    setLayout: v,
    panelGroupElement: g.current
  }), Gt(() => {
    const {
      panelDataArray: E
    } = _.current;
    if (e) {
      if (p.length === 0 || p.length !== E.length)
        return;
      let z = sm[e];
      z == null && (z = DC(RC, IC), sm[e] = z);
      const A = [...E], $ = new Map(C.current);
      z(e, A, $, p, l);
    }
  }, [e, p, l]), Gt(() => {
  });
  const R = Ge((E) => {
    const {
      onLayout: z
    } = N.current, {
      layout: A,
      panelDataArray: $
    } = _.current;
    if (E.constraints.collapsible) {
      const j = $.map((ae) => ae.constraints), {
        collapsedSize: V = 0,
        panelSize: Q,
        pivotIndices: ne
      } = Ht($, E, A);
      if (ue(Q != null, `Panel size not found for panel "${E.id}"`), !Tt(Q, V)) {
        C.current.set(E.id, Q);
        const G = hn($, E) === $.length - 1 ? Q - V : V - Q, Z = jn({
          delta: G,
          initialLayout: A,
          panelConstraints: j,
          pivotIndices: ne,
          prevLayout: A,
          trigger: "imperative-api"
        });
        Pr(A, Z) || (v(Z), _.current.layout = Z, z && z(Z), fn($, Z, S.current));
      }
    }
  }, []), k = Ge((E, z) => {
    const {
      onLayout: A
    } = N.current, {
      layout: $,
      panelDataArray: j
    } = _.current;
    if (E.constraints.collapsible) {
      const V = j.map((P) => P.constraints), {
        collapsedSize: Q = 0,
        panelSize: ne = 0,
        minSize: ae = 0,
        pivotIndices: G
      } = Ht(j, E, $), Z = z ?? ae;
      if (Tt(ne, Q)) {
        const P = C.current.get(E.id), K = P != null && P >= Z ? P : Z, ce = hn(j, E) === j.length - 1 ? ne - K : K - ne, le = jn({
          delta: ce,
          initialLayout: $,
          panelConstraints: V,
          pivotIndices: G,
          prevLayout: $,
          trigger: "imperative-api"
        });
        Pr($, le) || (v(le), _.current.layout = le, A && A(le), fn(j, le, S.current));
      }
    }
  }, []), Y = Ge((E) => {
    const {
      layout: z,
      panelDataArray: A
    } = _.current, {
      panelSize: $
    } = Ht(A, E, z);
    return ue($ != null, `Panel size not found for panel "${E.id}"`), $;
  }, []), I = Ge((E, z) => {
    const {
      panelDataArray: A
    } = _.current, $ = hn(A, E);
    return MC({
      defaultSize: z,
      dragState: h,
      layout: p,
      panelData: A,
      panelIndex: $
    });
  }, [h, p]), H = Ge((E) => {
    const {
      layout: z,
      panelDataArray: A
    } = _.current, {
      collapsedSize: $ = 0,
      collapsible: j,
      panelSize: V
    } = Ht(A, E, z);
    return ue(V != null, `Panel size not found for panel "${E.id}"`), j === !0 && Tt(V, $);
  }, []), T = Ge((E) => {
    const {
      layout: z,
      panelDataArray: A
    } = _.current, {
      collapsedSize: $ = 0,
      collapsible: j,
      panelSize: V
    } = Ht(A, E, z);
    return ue(V != null, `Panel size not found for panel "${E.id}"`), !j || Zt(V, $) > 0;
  }, []), W = Ge((E) => {
    const {
      panelDataArray: z
    } = _.current;
    z.push(E), z.sort((A, $) => {
      const j = A.order, V = $.order;
      return j == null && V == null ? 0 : j == null ? -1 : V == null ? 1 : j - V;
    }), _.current.panelDataArrayChanged = !0, y();
  }, [y]);
  Ut(() => {
    if (_.current.panelDataArrayChanged) {
      _.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: E,
        onLayout: z,
        storage: A
      } = N.current, {
        layout: $,
        panelDataArray: j
      } = _.current;
      let V = null;
      if (E) {
        const ne = kC(E, j, A);
        ne && (C.current = new Map(Object.entries(ne.expandToSizes)), V = ne.layout);
      }
      V == null && (V = OC({
        panelDataArray: j
      }));
      const Q = im({
        layout: V,
        panelConstraints: j.map((ne) => ne.constraints)
      });
      am($, Q) || (v(Q), _.current.layout = Q, z && z(Q), fn(j, Q, S.current));
    }
  }), Ut(() => {
    const E = _.current;
    return () => {
      E.layout = [];
    };
  }, []);
  const F = Ge((E) => {
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
      } = N.current, {
        layout: P,
        panelDataArray: K
      } = _.current, {
        initialLayout: se
      } = ne ?? {}, ce = _h(ae, E, V);
      let le = TC(j, E, Q, ne, G, V);
      const oe = Q === "horizontal";
      oe && z && (le = -le);
      const ge = K.map((Pe) => Pe.constraints), De = jn({
        delta: le,
        initialLayout: se ?? P,
        panelConstraints: ge,
        pivotIndices: ce,
        prevLayout: P,
        trigger: mh(j) ? "keyboard" : "mouse-or-touch"
      }), me = !Pr(P, De);
      (ph(j) || hh(j)) && D.current != le && (D.current = le, !me && le !== 0 ? oe ? Ls(E, le < 0 ? vh : bh) : Ls(E, le < 0 ? yh : wh) : Ls(E, 0)), me && (v(De), _.current.layout = De, Z && Z(De), fn(K, De, S.current));
    };
  }, []), B = Ge((E, z) => {
    const {
      onLayout: A
    } = N.current, {
      layout: $,
      panelDataArray: j
    } = _.current, V = j.map((P) => P.constraints), {
      panelSize: Q,
      pivotIndices: ne
    } = Ht(j, E, $);
    ue(Q != null, `Panel size not found for panel "${E.id}"`);
    const G = hn(j, E) === j.length - 1 ? Q - z : z - Q, Z = jn({
      delta: G,
      initialLayout: $,
      panelConstraints: V,
      pivotIndices: ne,
      prevLayout: $,
      trigger: "imperative-api"
    });
    Pr($, Z) || (v(Z), _.current.layout = Z, A && A(Z), fn(j, Z, S.current));
  }, []), L = Ge((E, z) => {
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
    } = E.constraints, {
      panelSize: Z
    } = Ht($, E, A);
    Z != null && (V && ne && Tt(Z, j) ? Tt(j, Q) || B(E, Q) : Z < G ? B(E, G) : Z > ae && B(E, ae));
  }, [B]), q = Ge((E, z) => {
    const {
      direction: A
    } = N.current, {
      layout: $
    } = _.current;
    if (!g.current)
      return;
    const j = pa(E, g.current);
    ue(j, `Drag handle element not found for id "${E}"`);
    const V = Ch(A, z);
    b({
      dragHandleId: E,
      dragHandleRect: j.getBoundingClientRect(),
      initialCursorPosition: V,
      initialLayout: $
    });
  }, []), te = Ge(() => {
    b(null);
  }, []), ie = Ge((E) => {
    const {
      panelDataArray: z
    } = _.current, A = hn(z, E);
    A >= 0 && (z.splice(A, 1), delete S.current[E.id], _.current.panelDataArrayChanged = !0, y());
  }, [y]), X = lC(() => ({
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
  return Tn(da.Provider, {
    value: X
  }, Tn(d, {
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
const Oh = lh((e, t) => Tn(Th, {
  ...e,
  forwardedRef: t
}));
Th.displayName = "PanelGroup";
Oh.displayName = "forwardRef(PanelGroup)";
function hn(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function Ht(e, t, n) {
  const r = hn(e, t), o = r === e.length - 1 ? [r - 1, r] : [r, r + 1], i = n[r];
  return {
    ...t.constraints,
    panelSize: i,
    pivotIndices: o
  };
}
function AC({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  Gt(() => {
    if (e || n == null || r == null)
      return;
    const a = pa(t, r);
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
            const l = ar(s, r), u = xh(s, t, r);
            ue(u !== null, `No resize element found for id "${t}"`);
            const d = i.shiftKey ? u > 0 ? u - 1 : l.length - 1 : u + 1 < l.length ? u + 1 : 0;
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
function Mh({
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
  tagName: d = "div",
  ...c
}) {
  var m, g;
  const h = Xe(null), b = Xe({
    onDragging: i
  });
  Gt(() => {
    b.current.onDragging = i;
  });
  const p = uh(da);
  if (p === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: v,
    groupId: y,
    registerResizeHandle: S,
    startDragging: C,
    stopDragging: D,
    panelGroupElement: N
  } = p, _ = Kl(a), [R, k] = yn("inactive"), [Y, I] = yn(!1), [H, T] = yn(null), W = Xe({
    state: R
  });
  Ut(() => {
    W.current.state = R;
  }), Gt(() => {
    if (n)
      T(null);
    else {
      const q = S(_);
      T(() => q);
    }
  }, [n, _, S]);
  const F = (m = r == null ? void 0 : r.coarse) !== null && m !== void 0 ? m : 15, B = (g = r == null ? void 0 : r.fine) !== null && g !== void 0 ? g : 5;
  return Gt(() => {
    if (n || H == null)
      return;
    const q = h.current;
    return ue(q, "Element ref not attached"), xC(_, q, v, {
      coarse: F,
      fine: B
    }, (ie, X, O) => {
      if (X)
        switch (ie) {
          case "down": {
            k("drag"), ue(O, 'Expected event to be defined for "down" action'), C(_, O);
            const {
              onDragging: E
            } = b.current;
            E && E(!0);
            break;
          }
          case "move": {
            const {
              state: E
            } = W.current;
            E !== "drag" && k("hover"), ue(O, 'Expected event to be defined for "move" action'), H(O);
            break;
          }
          case "up": {
            k("hover"), D();
            const {
              onDragging: E
            } = b.current;
            E && E(!1);
            break;
          }
        }
      else
        k("inactive");
    });
  }, [F, v, n, B, S, _, H, C, D]), AC({
    disabled: n,
    handleId: _,
    resizeHandler: H,
    panelGroupElement: N
  }), Tn(d, {
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
Mh.displayName = "PanelResizeHandle";
function VT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Oh,
    {
      "data-slot": "resizable-panel-group",
      className: x("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", e),
      ...t
    }
  );
}
function GT({ ...e }) {
  return /* @__PURE__ */ f(fh, { "data-slot": "resizable-panel", ...e });
}
function UT({
  withHandle: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    Mh,
    {
      "data-slot": "resizable-handle",
      className: x(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        t
      ),
      ...n,
      children: e && /* @__PURE__ */ f("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ f(Xh, { className: "size-2.5" }) })
    }
  );
}
function KT({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U(
    Hn.Root,
    {
      "data-slot": "scroll-area",
      className: x("relative", e),
      ...n,
      children: [
        /* @__PURE__ */ f(
          Hn.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ f(zC, {}),
        /* @__PURE__ */ f(Hn.Corner, {})
      ]
    }
  );
}
function zC({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ f(
    Hn.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: x(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...n,
      children: /* @__PURE__ */ f(
        Hn.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function LC({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f(
    og.Root,
    {
      "data-slot": "separator-root",
      decorative: n,
      orientation: t,
      className: x(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...r
    }
  );
}
function qC({ ...e }) {
  return /* @__PURE__ */ f(we.Root, { "data-slot": "sheet", ...e });
}
function XT({ ...e }) {
  return /* @__PURE__ */ f(we.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function QT({ ...e }) {
  return /* @__PURE__ */ f(we.Close, { "data-slot": "sheet-close", ...e });
}
function $C({ ...e }) {
  return /* @__PURE__ */ f(we.Portal, { "data-slot": "sheet-portal", ...e });
}
function BC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    we.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: x(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function jC({
  className: e,
  children: t,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ U($C, { children: [
    /* @__PURE__ */ f(BC, {}),
    /* @__PURE__ */ U(
      we.Content,
      {
        "data-slot": "sheet-content",
        className: x(
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
            /* @__PURE__ */ f(mm, { className: "size-4" }),
            /* @__PURE__ */ f("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function FC({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sheet-header",
      className: x("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function JT({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sheet-footer",
      className: x("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function HC({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    we.Title,
    {
      "data-slot": "sheet-title",
      className: x("text-foreground font-semibold", e),
      ...t
    }
  );
}
function WC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    we.Description,
    {
      "data-slot": "sheet-description",
      className: x("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const qs = 768;
function YC() {
  const [e, t] = M.useState(void 0);
  return M.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${qs - 1}px)`), r = () => {
      t(window.innerWidth < qs);
    };
    return n.addEventListener("change", r), t(window.innerWidth < qs), () => n.removeEventListener("change", r);
  }, []), !!e;
}
function lm({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "skeleton",
      className: x("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
function Dh({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ f(
    bn.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function VC({ ...e }) {
  return /* @__PURE__ */ f(Dh, { children: /* @__PURE__ */ f(bn.Root, { "data-slot": "tooltip", ...e }) });
}
function GC({ ...e }) {
  return /* @__PURE__ */ f(bn.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function UC({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ f(bn.Portal, { children: /* @__PURE__ */ U(
    bn.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: x(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f(bn.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const KC = "sidebar_state", XC = 3600 * 24 * 7, QC = "16rem", JC = "18rem", ZC = "3rem", eP = "b", kh = M.createContext(null);
function ha() {
  const e = M.useContext(kh);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function ZT({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: r,
  style: a,
  children: o,
  ...i
}) {
  const s = YC(), [l, u] = M.useState(!1), [d, c] = M.useState(e), m = t ?? d, g = M.useCallback(
    (v) => {
      const y = typeof v == "function" ? v(m) : v;
      n ? n(y) : c(y), document.cookie = `${KC}=${y}; path=/; max-age=${XC}`;
    },
    [n, m]
  ), h = M.useCallback(() => s ? u((v) => !v) : g((v) => !v), [s, g, u]);
  M.useEffect(() => {
    const v = (y) => {
      y.key === eP && (y.metaKey || y.ctrlKey) && (y.preventDefault(), h());
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
  return /* @__PURE__ */ f(kh.Provider, { value: p, children: /* @__PURE__ */ f(Dh, { delayDuration: 0, children: /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": QC,
        "--sidebar-width-icon": ZC,
        ...a
      },
      className: x(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        r
      ),
      ...i,
      children: o
    }
  ) }) });
}
function eO({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: r,
  children: a,
  ...o
}) {
  const { isMobile: i, state: s, openMobile: l, setOpenMobile: u } = ha();
  return n === "none" ? /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar",
      className: x(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        r
      ),
      ...o,
      children: a
    }
  ) : i ? /* @__PURE__ */ f(qC, { open: l, onOpenChange: u, ...o, children: /* @__PURE__ */ U(
    jC,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": JC
      },
      side: e,
      children: [
        /* @__PURE__ */ U(FC, { className: "sr-only", children: [
          /* @__PURE__ */ f(HC, { children: "Sidebar" }),
          /* @__PURE__ */ f(WC, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ f("div", { className: "flex h-full w-full flex-col", children: a })
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
        /* @__PURE__ */ f(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: x(
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
            className: x(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              r
            ),
            ...o,
            children: /* @__PURE__ */ f(
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
function tO({ className: e, onClick: t, ...n }) {
  const { toggleSidebar: r } = ha();
  return /* @__PURE__ */ U(
    ml,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: x("size-7", e),
      onClick: (a) => {
        t == null || t(a), r();
      },
      ...n,
      children: [
        /* @__PURE__ */ f(Qh, {}),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function nO({ className: e, ...t }) {
  const { toggleSidebar: n } = ha();
  return /* @__PURE__ */ f(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: n,
      title: "Toggle Sidebar",
      className: x(
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
function rO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: x(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function aO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    dg,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: x("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function oO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: x("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function iO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: x("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function sO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    LC,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: x("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function lO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: x(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function uO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: x("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function cO({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ f(
    t ? Mt : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: x(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...n
    }
  );
}
function dO({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ f(
    t ? Mt : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: x(
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
function fO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: x("w-full text-sm", e),
      ...t
    }
  );
}
function mO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: x("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function pO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: x("group/menu-item relative", e),
      ...t
    }
  );
}
const tP = en(
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
function hO({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: r = "default",
  tooltip: a,
  className: o,
  ...i
}) {
  const s = e ? Mt : "button", { isMobile: l, state: u } = ha(), d = /* @__PURE__ */ f(
    s,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: x(tP({ variant: n, size: r }), o),
      ...i
    }
  );
  return a ? (typeof a == "string" && (a = {
    children: a
  }), /* @__PURE__ */ U(VC, { children: [
    /* @__PURE__ */ f(GC, { asChild: !0, children: d }),
    /* @__PURE__ */ f(
      UC,
      {
        side: "right",
        align: "center",
        hidden: u !== "collapsed" || l,
        ...a
      }
    )
  ] })) : d;
}
function gO({
  className: e,
  asChild: t = !1,
  showOnHover: n = !1,
  ...r
}) {
  return /* @__PURE__ */ f(
    t ? Mt : "button",
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: x(
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
function vO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: x(
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
function bO({
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
      className: x("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...n,
      children: [
        t && /* @__PURE__ */ f(lm, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ f(
          lm,
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
function yO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: x(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function wO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: x("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function xO({
  asChild: e = !1,
  size: t = "md",
  isActive: n = !1,
  className: r,
  ...a
}) {
  return /* @__PURE__ */ f(
    e ? Mt : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": n,
      className: x(
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
function _O({
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
      className: x(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ f(
          gr.Track,
          {
            "data-slot": "slider-track",
            className: x(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ f(
              gr.Range,
              {
                "data-slot": "slider-range",
                className: x(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: i.length }, (s, l) => /* @__PURE__ */ f(
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
var nP = (e, t, n, r, a, o, i, s) => {
  let l = document.documentElement, u = ["light", "dark"];
  function d(g) {
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
  if (r) d(r);
  else try {
    let g = localStorage.getItem(t) || n, h = i && g === "system" ? m() : g;
    d(h);
  } catch {
  }
}, rP = M.createContext(void 0), aP = { setTheme: (e) => {
}, themes: [] }, oP = () => {
  var e;
  return (e = M.useContext(rP)) != null ? e : aP;
};
M.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: a, defaultTheme: o, value: i, themes: s, nonce: l, scriptProps: u }) => {
  let d = JSON.stringify([n, t, o, e, s, i, r, a]).slice(1, -1);
  return M.createElement("script", { ...u, suppressHydrationWarning: !0, nonce: typeof window > "u" ? l : "", dangerouslySetInnerHTML: { __html: `(${nP.toString()})(${d})` } });
});
function iP(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const sP = (e) => {
  switch (e) {
    case "success":
      return cP;
    case "info":
      return fP;
    case "warning":
      return dP;
    case "error":
      return mP;
    default:
      return null;
  }
}, lP = Array(12).fill(0), uP = ({ visible: e, className: t }) => /* @__PURE__ */ w.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ w.createElement("div", {
  className: "sonner-spinner"
}, lP.map((n, r) => /* @__PURE__ */ w.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), cP = /* @__PURE__ */ w.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ w.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), dP = /* @__PURE__ */ w.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ w.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), fP = /* @__PURE__ */ w.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ w.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), mP = /* @__PURE__ */ w.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ w.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), pP = /* @__PURE__ */ w.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ w.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ w.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), hP = () => {
  const [e, t] = w.useState(document.hidden);
  return w.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let cl = 1;
class gP {
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
      const { message: r, ...a } = t, o = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : cl++, i = this.toasts.find((l) => l.id === o), s = t.dismissible === void 0 ? !0 : t.dismissible;
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
        ], w.isValidElement(u))
          o = !1, this.create({
            id: r,
            type: "default",
            message: u
          });
        else if (bP(u) && !u.ok) {
          o = !1;
          const c = typeof n.error == "function" ? await n.error(`HTTP error! status: ${u.status}`) : n.error, m = typeof n.description == "function" ? await n.description(`HTTP error! status: ${u.status}`) : n.description, h = typeof c == "object" && !w.isValidElement(c) ? c : {
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
          const c = typeof n.error == "function" ? await n.error(u) : n.error, m = typeof n.description == "function" ? await n.description(u) : n.description, h = typeof c == "object" && !w.isValidElement(c) ? c : {
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
          const c = typeof n.success == "function" ? await n.success(u) : n.success, m = typeof n.description == "function" ? await n.description(u) : n.description, h = typeof c == "object" && !w.isValidElement(c) ? c : {
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
          const d = typeof n.error == "function" ? await n.error(u) : n.error, c = typeof n.description == "function" ? await n.description(u) : n.description, g = typeof d == "object" && !w.isValidElement(d) ? d : {
            message: d
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
      }), l = () => new Promise((u, d) => s.then(() => i[0] === "reject" ? d(i[1]) : u(i[1])).catch(d));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: l
      } : Object.assign(r, {
        unwrap: l
      });
    }, this.custom = (t, n) => {
      const r = (n == null ? void 0 : n.id) || cl++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const Ke = new gP(), vP = (e, t) => {
  const n = (t == null ? void 0 : t.id) || cl++;
  return Ke.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, bP = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", yP = vP, wP = () => Ke.toasts, xP = () => Ke.getActiveToasts();
Object.assign(yP, {
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
  getHistory: wP,
  getToasts: xP
});
iP("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Er(e) {
  return e.label !== void 0;
}
const _P = 3, SP = "24px", CP = "16px", um = 4e3, PP = 356, EP = 14, NP = 45, TP = 200;
function vt(...e) {
  return e.filter(Boolean).join(" ");
}
function OP(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const MP = (e) => {
  var t, n, r, a, o, i, s, l, u;
  const { invert: d, toast: c, unstyled: m, interacting: g, setHeights: h, visibleToasts: b, heights: p, index: v, toasts: y, expanded: S, removeToast: C, defaultRichColors: D, closeButton: N, style: _, cancelButtonStyle: R, actionButtonStyle: k, className: Y = "", descriptionClassName: I = "", duration: H, position: T, gap: W, expandByDefault: F, classNames: B, icons: L, closeButtonAriaLabel: q = "Close toast" } = e, [te, ie] = w.useState(null), [X, O] = w.useState(null), [E, z] = w.useState(!1), [A, $] = w.useState(!1), [j, V] = w.useState(!1), [Q, ne] = w.useState(!1), [ae, G] = w.useState(!1), [Z, P] = w.useState(0), [K, se] = w.useState(0), ce = w.useRef(c.duration || H || um), le = w.useRef(null), oe = w.useRef(null), ge = v === 0, De = v + 1 <= b, me = c.type, Pe = c.dismissible !== !1, je = c.className || "", Fe = c.descriptionClassName || "", ze = w.useMemo(() => p.findIndex((ee) => ee.toastId === c.id) || 0, [
    p,
    c.id
  ]), Ye = w.useMemo(() => {
    var ee;
    return (ee = c.closeButton) != null ? ee : N;
  }, [
    c.closeButton,
    N
  ]), tt = w.useMemo(() => c.duration || H || um, [
    c.duration,
    H
  ]), nt = w.useRef(0), Ie = w.useRef(0), gt = w.useRef(0), Ae = w.useRef(null), [Le, Ct] = T.split("-"), kt = w.useMemo(() => p.reduce((ee, fe, _e) => _e >= ze ? ee : ee + fe.height, 0), [
    p,
    ze
  ]), un = hP(), On = c.invert || d, Bt = me === "loading";
  Ie.current = w.useMemo(() => ze * W + kt, [
    ze,
    kt
  ]), w.useEffect(() => {
    ce.current = tt;
  }, [
    tt
  ]), w.useEffect(() => {
    z(!0);
  }, []), w.useEffect(() => {
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
  ]), w.useLayoutEffect(() => {
    if (!E) return;
    const ee = oe.current, fe = ee.style.height;
    ee.style.height = "auto";
    const _e = ee.getBoundingClientRect().height;
    ee.style.height = fe, se(_e), h((Ce) => Ce.find((Ee) => Ee.toastId === c.id) ? Ce.map((Ee) => Ee.toastId === c.id ? {
      ...Ee,
      height: _e
    } : Ee) : [
      {
        toastId: c.id,
        height: _e,
        position: c.position
      },
      ...Ce
    ]);
  }, [
    E,
    c.title,
    c.description,
    h,
    c.id
  ]);
  const J = w.useCallback(() => {
    $(!0), P(Ie.current), h((ee) => ee.filter((fe) => fe.toastId !== c.id)), setTimeout(() => {
      C(c);
    }, TP);
  }, [
    c,
    C,
    h,
    Ie
  ]);
  w.useEffect(() => {
    if (c.promise && me === "loading" || c.duration === 1 / 0 || c.type === "loading") return;
    let ee;
    return S || g || un ? (() => {
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
    un,
    J
  ]), w.useEffect(() => {
    c.delete && J();
  }, [
    J,
    c.delete
  ]);
  function pe() {
    var ee;
    if (L != null && L.loading) {
      var fe;
      return /* @__PURE__ */ w.createElement("div", {
        className: vt(B == null ? void 0 : B.loader, c == null || (fe = c.classNames) == null ? void 0 : fe.loader, "sonner-loader"),
        "data-visible": me === "loading"
      }, L.loading);
    }
    return /* @__PURE__ */ w.createElement(uP, {
      className: vt(B == null ? void 0 : B.loader, c == null || (ee = c.classNames) == null ? void 0 : ee.loader),
      visible: me === "loading"
    });
  }
  const ve = c.icon || (L == null ? void 0 : L[me]) || sP(me);
  var de, Se;
  return /* @__PURE__ */ w.createElement("li", {
    tabIndex: 0,
    ref: oe,
    className: vt(Y, je, B == null ? void 0 : B.toast, c == null || (t = c.classNames) == null ? void 0 : t.toast, B == null ? void 0 : B.default, B == null ? void 0 : B[me], c == null || (n = c.classNames) == null ? void 0 : n[me]),
    "data-sonner-toast": "",
    "data-rich-colors": (de = c.richColors) != null ? de : D,
    "data-styled": !(c.jsx || c.unstyled || m),
    "data-mounted": E,
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
    "data-expanded": !!(S || F && E),
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
      Bt || !Pe || (le.current = /* @__PURE__ */ new Date(), P(Ie.current), ee.target.setPointerCapture(ee.pointerId), ee.target.tagName !== "BUTTON" && (V(!0), Ae.current = {
        x: ee.clientX,
        y: ee.clientY
      }));
    },
    onPointerUp: () => {
      var ee, fe, _e;
      if (Q || !Pe) return;
      Ae.current = null;
      const Ce = Number(((ee = oe.current) == null ? void 0 : ee.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), rt = Number(((fe = oe.current) == null ? void 0 : fe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ee = (/* @__PURE__ */ new Date()).getTime() - ((_e = le.current) == null ? void 0 : _e.getTime()), Te = te === "x" ? Ce : rt, Pt = Math.abs(Te) / Ee;
      if (Math.abs(Te) >= NP || Pt > 0.11) {
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
      const Ee = ee.clientY - Ae.current.y, Te = ee.clientX - Ae.current.x;
      var Pt;
      const Ve = (Pt = e.swipeDirections) != null ? Pt : OP(T);
      !te && (Math.abs(Te) > 1 || Math.abs(Ee) > 1) && ie(Math.abs(Te) > Math.abs(Ee) ? "x" : "y");
      let lt = {
        x: 0,
        y: 0
      };
      const Zl = (jt) => 1 / (1.5 + Math.abs(jt) / 20);
      if (te === "y") {
        if (Ve.includes("top") || Ve.includes("bottom"))
          if (Ve.includes("top") && Ee < 0 || Ve.includes("bottom") && Ee > 0)
            lt.y = Ee;
          else {
            const jt = Ee * Zl(Ee);
            lt.y = Math.abs(jt) < Math.abs(Ee) ? jt : Ee;
          }
      } else if (te === "x" && (Ve.includes("left") || Ve.includes("right")))
        if (Ve.includes("left") && Te < 0 || Ve.includes("right") && Te > 0)
          lt.x = Te;
        else {
          const jt = Te * Zl(Te);
          lt.x = Math.abs(jt) < Math.abs(Te) ? jt : Te;
        }
      (Math.abs(lt.x) > 0 || Math.abs(lt.y) > 0) && G(!0), (_e = oe.current) == null || _e.style.setProperty("--swipe-amount-x", `${lt.x}px`), (Ce = oe.current) == null || Ce.style.setProperty("--swipe-amount-y", `${lt.y}px`);
    }
  }, Ye && !c.jsx && me !== "loading" ? /* @__PURE__ */ w.createElement("button", {
    "aria-label": q,
    "data-disabled": Bt,
    "data-close-button": !0,
    onClick: Bt || !Pe ? () => {
    } : () => {
      J(), c.onDismiss == null || c.onDismiss.call(c, c);
    },
    className: vt(B == null ? void 0 : B.closeButton, c == null || (r = c.classNames) == null ? void 0 : r.closeButton)
  }, (Se = L == null ? void 0 : L.close) != null ? Se : pP) : null, (me || c.icon || c.promise) && c.icon !== null && ((L == null ? void 0 : L[me]) !== null || c.icon) ? /* @__PURE__ */ w.createElement("div", {
    "data-icon": "",
    className: vt(B == null ? void 0 : B.icon, c == null || (a = c.classNames) == null ? void 0 : a.icon)
  }, c.promise || c.type === "loading" && !c.icon ? c.icon || pe() : null, c.type !== "loading" ? ve : null) : null, /* @__PURE__ */ w.createElement("div", {
    "data-content": "",
    className: vt(B == null ? void 0 : B.content, c == null || (o = c.classNames) == null ? void 0 : o.content)
  }, /* @__PURE__ */ w.createElement("div", {
    "data-title": "",
    className: vt(B == null ? void 0 : B.title, c == null || (i = c.classNames) == null ? void 0 : i.title)
  }, c.jsx ? c.jsx : typeof c.title == "function" ? c.title() : c.title), c.description ? /* @__PURE__ */ w.createElement("div", {
    "data-description": "",
    className: vt(I, Fe, B == null ? void 0 : B.description, c == null || (s = c.classNames) == null ? void 0 : s.description)
  }, typeof c.description == "function" ? c.description() : c.description) : null), /* @__PURE__ */ w.isValidElement(c.cancel) ? c.cancel : c.cancel && Er(c.cancel) ? /* @__PURE__ */ w.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: c.cancelButtonStyle || R,
    onClick: (ee) => {
      Er(c.cancel) && Pe && (c.cancel.onClick == null || c.cancel.onClick.call(c.cancel, ee), J());
    },
    className: vt(B == null ? void 0 : B.cancelButton, c == null || (l = c.classNames) == null ? void 0 : l.cancelButton)
  }, c.cancel.label) : null, /* @__PURE__ */ w.isValidElement(c.action) ? c.action : c.action && Er(c.action) ? /* @__PURE__ */ w.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: c.actionButtonStyle || k,
    onClick: (ee) => {
      Er(c.action) && (c.action.onClick == null || c.action.onClick.call(c.action, ee), !ee.defaultPrevented && J());
    },
    className: vt(B == null ? void 0 : B.actionButton, c == null || (u = c.classNames) == null ? void 0 : u.actionButton)
  }, c.action.label) : null);
};
function cm() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function DP(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, a) => {
    const o = a === 1, i = o ? "--mobile-offset" : "--offset", s = o ? CP : SP;
    function l(u) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((d) => {
        n[`${i}-${d}`] = typeof u == "number" ? `${u}px` : u;
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
const kP = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const { invert: r, position: a = "bottom-right", hotkey: o = [
    "altKey",
    "KeyT"
  ], expand: i, closeButton: s, className: l, offset: u, mobileOffset: d, theme: c = "light", richColors: m, duration: g, style: h, visibleToasts: b = _P, toastOptions: p, dir: v = cm(), gap: y = EP, icons: S, containerAriaLabel: C = "Notifications" } = t, [D, N] = w.useState([]), _ = w.useMemo(() => Array.from(new Set([
    a
  ].concat(D.filter((X) => X.position).map((X) => X.position)))), [
    D,
    a
  ]), [R, k] = w.useState([]), [Y, I] = w.useState(!1), [H, T] = w.useState(!1), [W, F] = w.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), B = w.useRef(null), L = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), q = w.useRef(null), te = w.useRef(!1), ie = w.useCallback((X) => {
    N((O) => {
      var E;
      return (E = O.find((z) => z.id === X.id)) != null && E.delete || Ke.dismiss(X.id), O.filter(({ id: z }) => z !== X.id);
    });
  }, []);
  return w.useEffect(() => Ke.subscribe((X) => {
    if (X.dismiss) {
      requestAnimationFrame(() => {
        N((O) => O.map((E) => E.id === X.id ? {
          ...E,
          delete: !0
        } : E));
      });
      return;
    }
    setTimeout(() => {
      ig.flushSync(() => {
        N((O) => {
          const E = O.findIndex((z) => z.id === X.id);
          return E !== -1 ? [
            ...O.slice(0, E),
            {
              ...O[E],
              ...X
            },
            ...O.slice(E + 1)
          ] : [
            X,
            ...O
          ];
        });
      });
    });
  }), [
    D
  ]), w.useEffect(() => {
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
      X.addListener(({ matches: E }) => {
        try {
          F(E ? "dark" : "light");
        } catch (z) {
          console.error(z);
        }
      });
    }
  }, [
    c
  ]), w.useEffect(() => {
    D.length <= 1 && I(!1);
  }, [
    D
  ]), w.useEffect(() => {
    const X = (O) => {
      var E;
      if (o.every(($) => O[$] || O.code === $)) {
        var A;
        I(!0), (A = B.current) == null || A.focus();
      }
      O.code === "Escape" && (document.activeElement === B.current || (E = B.current) != null && E.contains(document.activeElement)) && I(!1);
    };
    return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X);
  }, [
    o
  ]), w.useEffect(() => {
    if (B.current)
      return () => {
        q.current && (q.current.focus({
          preventScroll: !0
        }), q.current = null, te.current = !1);
      };
  }, [
    B.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ w.createElement("section", {
    ref: n,
    "aria-label": `${C} ${L}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, _.map((X, O) => {
    var E;
    const [z, A] = X.split("-");
    return D.length ? /* @__PURE__ */ w.createElement("ol", {
      key: X,
      dir: v === "auto" ? cm() : v,
      tabIndex: -1,
      ref: B,
      className: l,
      "data-sonner-toaster": !0,
      "data-sonner-theme": W,
      "data-y-position": z,
      "data-lifted": Y && D.length > 1 && !i,
      "data-x-position": A,
      style: {
        "--front-toast-height": `${((E = R[0]) == null ? void 0 : E.height) || 0}px`,
        "--width": `${PP}px`,
        "--gap": `${y}px`,
        ...h,
        ...DP(u, d)
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
      return /* @__PURE__ */ w.createElement(MP, {
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
}), SO = ({ ...e }) => {
  const { theme: t = "system" } = oP();
  return /* @__PURE__ */ f(
    kP,
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
function CO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    Ur.Root,
    {
      "data-slot": "tabs",
      className: x("flex flex-col gap-2", e),
      ...t
    }
  );
}
function PO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    Ur.List,
    {
      "data-slot": "tabs-list",
      className: x(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",
        e
      ),
      ...t
    }
  );
}
function EO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    Ur.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: x(
        "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function NO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    Ur.Content,
    {
      "data-slot": "tabs-content",
      className: x("flex-1 outline-none", e),
      ...t
    }
  );
}
const Rh = en(
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
function TO({
  className: e,
  variant: t,
  size: n,
  ...r
}) {
  return /* @__PURE__ */ f(
    sg.Root,
    {
      "data-slot": "toggle",
      className: x(Rh({ variant: t, size: n, className: e })),
      ...r
    }
  );
}
const Ih = M.createContext({
  size: "default",
  variant: "default"
});
function OO({
  className: e,
  variant: t,
  size: n,
  children: r,
  ...a
}) {
  return /* @__PURE__ */ f(
    vm.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": n,
      className: x(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        e
      ),
      ...a,
      children: /* @__PURE__ */ f(Ih.Provider, { value: { variant: t, size: n }, children: r })
    }
  );
}
function MO({
  className: e,
  children: t,
  variant: n,
  size: r,
  ...a
}) {
  const o = M.useContext(Ih);
  return /* @__PURE__ */ f(
    vm.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": o.variant || n,
      "data-size": o.size || r,
      className: x(
        Rh({
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
  vE as Accordion,
  wE as AccordionContent,
  bE as AccordionItem,
  yE as AccordionTrigger,
  YP as Alert,
  GP as AlertDescription,
  xE as AlertDialog,
  TE as AlertDialogAction,
  OE as AlertDialogCancel,
  SE as AlertDialogContent,
  NE as AlertDialogDescription,
  PE as AlertDialogFooter,
  CE as AlertDialogHeader,
  Eg as AlertDialogOverlay,
  Pg as AlertDialogPortal,
  EE as AlertDialogTitle,
  _E as AlertDialogTrigger,
  VP as AlertTitle,
  ME as AspectRatio,
  DE as Avatar,
  RE as AvatarFallback,
  kE as AvatarImage,
  UP as Badge,
  IE as Breadcrumb,
  BE as BreadcrumbEllipsis,
  zE as BreadcrumbItem,
  LE as BreadcrumbLink,
  AE as BreadcrumbList,
  qE as BreadcrumbPage,
  $E as BreadcrumbSeparator,
  ml as Button,
  jE as Calendar,
  KP as Card,
  ZP as CardAction,
  eE as CardContent,
  JP as CardDescription,
  tE as CardFooter,
  XP as CardHeader,
  QP as CardTitle,
  FE as Carousel,
  HE as CarouselContent,
  WE as CarouselItem,
  VE as CarouselNext,
  YE as CarouselPrevious,
  GE as ChartContainer,
  XE as ChartLegend,
  QE as ChartLegendContent,
  v_ as ChartStyle,
  UE as ChartTooltip,
  KE as ChartTooltipContent,
  JE as Checkbox,
  ZE as Collapsible,
  tN as CollapsibleContent,
  eN as CollapsibleTrigger,
  K_ as Command,
  oN as CommandDialog,
  lN as CommandEmpty,
  uN as CommandGroup,
  iN as CommandInput,
  dN as CommandItem,
  sN as CommandList,
  cN as CommandSeparator,
  fN as CommandShortcut,
  bg as Container,
  mN as ContextMenu,
  SN as ContextMenuCheckboxItem,
  xN as ContextMenuContent,
  hN as ContextMenuGroup,
  _N as ContextMenuItem,
  PN as ContextMenuLabel,
  gN as ContextMenuPortal,
  bN as ContextMenuRadioGroup,
  CN as ContextMenuRadioItem,
  EN as ContextMenuSeparator,
  NN as ContextMenuShortcut,
  vN as ContextMenuSub,
  wN as ContextMenuSubContent,
  yN as ContextMenuSubTrigger,
  pN as ContextMenuTrigger,
  mE as DataTable,
  F_ as Dialog,
  rN as DialogClose,
  Y_ as DialogContent,
  U_ as DialogDescription,
  aN as DialogFooter,
  V_ as DialogHeader,
  W_ as DialogOverlay,
  H_ as DialogPortal,
  G_ as DialogTitle,
  nN as DialogTrigger,
  TN as Drawer,
  MN as DrawerClose,
  DN as DrawerContent,
  AN as DrawerDescription,
  RN as DrawerFooter,
  kN as DrawerHeader,
  PS as DrawerOverlay,
  CS as DrawerPortal,
  IN as DrawerTitle,
  ON as DrawerTrigger,
  hE as Dropdown,
  zN as DropdownMenu,
  FN as DropdownMenuCheckboxItem,
  $N as DropdownMenuContent,
  BN as DropdownMenuGroup,
  jN as DropdownMenuItem,
  YN as DropdownMenuLabel,
  LN as DropdownMenuPortal,
  HN as DropdownMenuRadioGroup,
  WN as DropdownMenuRadioItem,
  VN as DropdownMenuSeparator,
  GN as DropdownMenuShortcut,
  UN as DropdownMenuSub,
  XN as DropdownMenuSubContent,
  KN as DropdownMenuSubTrigger,
  qN as DropdownMenuTrigger,
  yg as Flex,
  QN as Form,
  tT as FormControl,
  nT as FormDescription,
  JN as FormField,
  ZN as FormItem,
  eT as FormLabel,
  rT as FormMessage,
  wg as Grid,
  aT as HoverCard,
  iT as HoverCardContent,
  oT as HoverCardTrigger,
  dg as Input,
  sT as InputOTP,
  lT as InputOTPGroup,
  cT as InputOTPSeparator,
  uT as InputOTPSlot,
  HS as Label,
  dT as Menubar,
  bT as MenubarCheckboxItem,
  gT as MenubarContent,
  mT as MenubarGroup,
  vT as MenubarItem,
  wT as MenubarLabel,
  fT as MenubarMenu,
  rC as MenubarPortal,
  pT as MenubarRadioGroup,
  yT as MenubarRadioItem,
  xT as MenubarSeparator,
  _T as MenubarShortcut,
  ST as MenubarSub,
  PT as MenubarSubContent,
  CT as MenubarSubTrigger,
  hT as MenubarTrigger,
  Kr as Modal,
  ET as NavigationMenu,
  MT as NavigationMenuContent,
  kT as NavigationMenuIndicator,
  TT as NavigationMenuItem,
  DT as NavigationMenuLink,
  NT as NavigationMenuList,
  OT as NavigationMenuTrigger,
  oC as NavigationMenuViewport,
  Cg as Padded,
  RT as Pagination,
  IT as PaginationContent,
  qT as PaginationEllipsis,
  AT as PaginationItem,
  sh as PaginationLink,
  LT as PaginationNext,
  zT as PaginationPrevious,
  $T as Popover,
  FT as PopoverAnchor,
  jT as PopoverContent,
  BT as PopoverTrigger,
  HT as Progress,
  WT as RadioGroup,
  YT as RadioGroupItem,
  UT as ResizableHandle,
  GT as ResizablePanel,
  VT as ResizablePanelGroup,
  KT as ScrollArea,
  zC as ScrollBar,
  nE as Select,
  gE as SelectBox,
  iE as SelectContent,
  rE as SelectGroup,
  lE as SelectItem,
  sE as SelectLabel,
  mg as SelectScrollDownButton,
  fg as SelectScrollUpButton,
  uE as SelectSeparator,
  oE as SelectTrigger,
  aE as SelectValue,
  LC as Separator,
  qC as Sheet,
  QT as SheetClose,
  jC as SheetContent,
  WC as SheetDescription,
  JT as SheetFooter,
  FC as SheetHeader,
  HC as SheetTitle,
  XT as SheetTrigger,
  eO as Sidebar,
  lO as SidebarContent,
  iO as SidebarFooter,
  uO as SidebarGroup,
  dO as SidebarGroupAction,
  fO as SidebarGroupContent,
  cO as SidebarGroupLabel,
  oO as SidebarHeader,
  aO as SidebarInput,
  rO as SidebarInset,
  mO as SidebarMenu,
  gO as SidebarMenuAction,
  vO as SidebarMenuBadge,
  hO as SidebarMenuButton,
  pO as SidebarMenuItem,
  bO as SidebarMenuSkeleton,
  yO as SidebarMenuSub,
  xO as SidebarMenuSubButton,
  wO as SidebarMenuSubItem,
  ZT as SidebarProvider,
  nO as SidebarRail,
  sO as SidebarSeparator,
  tO as SidebarTrigger,
  lm as Skeleton,
  _O as Slider,
  cE as Switch,
  pg as Table,
  gg as TableBody,
  fE as TableCaption,
  au as TableCell,
  dE as TableFooter,
  vg as TableHead,
  hg as TableHeader,
  ga as TableRow,
  CO as Tabs,
  NO as TabsContent,
  PO as TabsList,
  EO as TabsTrigger,
  pE as Textarea,
  SO as Toaster,
  TO as Toggle,
  OO as ToggleGroup,
  MO as ToggleGroupItem,
  VC as Tooltip,
  UC as TooltipContent,
  Dh as TooltipProvider,
  GC as TooltipTrigger,
  ug as badgeVariants,
  _n as buttonVariants,
  x as cn,
  aC as navigationMenuTriggerStyle,
  Rh as toggleVariants,
  ca as useFormField,
  YC as useIsMobile,
  ha as useSidebar
};
