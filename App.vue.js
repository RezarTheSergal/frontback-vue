"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationContainer_vue_1 = require("./components/NotificationContainer.vue");
exports.default = {};
var __VLS_ctx = {};
var __VLS_componentsOption = {
    NotificationContainer: NotificationContainer_vue_1.default,
};
var ___VLS_components;
var ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['app-footer']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "app",
});
__VLS_asFunctionalElement(__VLS_intrinsics.nav, __VLS_intrinsics.nav)(__assign({ class: "main-nav" }));
/** @type {__VLS_StyleScopedClasses['main-nav']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.routerLink | typeof ___VLS_components.RouterLink} */
routerLink;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ to: "/" }, { class: "nav-link" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ to: "/" }, { class: "nav-link" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
var __VLS_5 = __VLS_3.slots.default;
var __VLS_3;
var __VLS_6;
/** @ts-ignore @type {typeof ___VLS_components.routerLink | typeof ___VLS_components.RouterLink} */
routerLink;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign({ to: "/palette" }, { class: "nav-link" })));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ to: "/palette" }, { class: "nav-link" })], __VLS_functionalComponentArgsRest(__VLS_7), false));
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
var __VLS_11 = __VLS_9.slots.default;
var __VLS_9;
var __VLS_12;
/** @ts-ignore @type {typeof ___VLS_components.routerLink | typeof ___VLS_components.RouterLink} */
routerLink;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ to: "/profile" }, { class: "nav-link" })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ to: "/profile" }, { class: "nav-link" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
var __VLS_17 = __VLS_15.slots.default;
var __VLS_15;
var __VLS_18;
/** @ts-ignore @type {typeof ___VLS_components.routerLink | typeof ___VLS_components.RouterLink} */
routerLink;
// @ts-ignore
var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18(__assign({ to: "/settings" }, { class: "nav-link" })));
var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([__assign({ to: "/settings" }, { class: "nav-link" })], __VLS_functionalComponentArgsRest(__VLS_19), false));
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
var __VLS_23 = __VLS_21.slots.default;
var __VLS_21;
__VLS_asFunctionalElement(__VLS_intrinsics.main, __VLS_intrinsics.main)(__assign({ class: "main-content" }));
/** @type {__VLS_StyleScopedClasses['main-content']} */ ;
var __VLS_24;
/** @ts-ignore @type {typeof ___VLS_components.routerView | typeof ___VLS_components.RouterView} */
routerView;
// @ts-ignore
var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_25), false));
__VLS_asFunctionalElement(__VLS_intrinsics.footer, __VLS_intrinsics.footer)(__assign({ class: "app-footer" }));
/** @type {__VLS_StyleScopedClasses['app-footer']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
var __VLS_29;
/** @ts-ignore @type {typeof ___VLS_components.NotificationContainer} */
NotificationContainer_vue_1.default;
// @ts-ignore
var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_30), false));
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'App',
    components: {
        NotificationContainer: NotificationContainer_vue_1.default,
    },
});
