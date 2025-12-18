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
exports.default = {};
var __VLS_ctx = {};
var ___VLS_components;
var ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['settings-header']} */ ;
/** @type {__VLS_StyleScopedClasses['settings-header']} */ ;
/** @type {__VLS_StyleScopedClasses['tab']} */ ;
/** @type {__VLS_StyleScopedClasses['tab']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "user-settings" }));
/** @type {__VLS_StyleScopedClasses['user-settings']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "settings-header" }));
/** @type {__VLS_StyleScopedClasses['settings-header']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "settings-container" }));
/** @type {__VLS_StyleScopedClasses['settings-container']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "settings-tabs" }));
/** @type {__VLS_StyleScopedClasses['settings-tabs']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.routerLink | typeof ___VLS_components.RouterLink} */
routerLink;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ to: "/settings/general" }, { class: "tab" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ to: "/settings/general" }, { class: "tab" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
/** @type {__VLS_StyleScopedClasses['tab']} */ ;
var __VLS_5 = __VLS_3.slots.default;
var __VLS_3;
var __VLS_6;
/** @ts-ignore @type {typeof ___VLS_components.routerLink | typeof ___VLS_components.RouterLink} */
routerLink;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign({ to: "/settings/security" }, { class: "tab" })));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ to: "/settings/security" }, { class: "tab" })], __VLS_functionalComponentArgsRest(__VLS_7), false));
/** @type {__VLS_StyleScopedClasses['tab']} */ ;
var __VLS_11 = __VLS_9.slots.default;
var __VLS_9;
var __VLS_12;
/** @ts-ignore @type {typeof ___VLS_components.routerLink | typeof ___VLS_components.RouterLink} */
routerLink;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ to: "/settings/notifications" }, { class: "tab" })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ to: "/settings/notifications" }, { class: "tab" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
/** @type {__VLS_StyleScopedClasses['tab']} */ ;
var __VLS_17 = __VLS_15.slots.default;
var __VLS_15;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "settings-content" }));
/** @type {__VLS_StyleScopedClasses['settings-content']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.currentTab);
var __VLS_18;
/** @ts-ignore @type {typeof ___VLS_components.routerView | typeof ___VLS_components.RouterView} */
routerView;
// @ts-ignore
var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
    currentTab: (__VLS_ctx.currentTab),
}));
var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([{
        currentTab: (__VLS_ctx.currentTab),
    }], __VLS_functionalComponentArgsRest(__VLS_19), false));
// @ts-ignore
[currentTab, currentTab,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'UserSettings',
    props: {
        tab: {
            type: String,
            default: 'general',
        },
    },
    computed: {
        currentTab: function () {
            return this.tab || 'general';
        },
    },
});
