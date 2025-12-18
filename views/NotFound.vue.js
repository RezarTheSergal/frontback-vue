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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
exports.default = {};
var __VLS_ctx = {};
var ___VLS_components;
var ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['not-found']} */ ;
/** @type {__VLS_StyleScopedClasses['not-found']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['debug-info']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "not-found" }));
/** @type {__VLS_StyleScopedClasses['not-found']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.goHome) }, { class: "btn" }));
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "debug-info" }));
/** @type {__VLS_StyleScopedClasses['debug-info']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.$route.path);
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.$route.params);
// @ts-ignore
[goHome, $route, $route,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'NotFound',
    setup: function () {
        var router = (0, vue_router_1.useRouter)();
        var goHome = function () {
            router.push('/');
        };
        return {
            goHome: goHome,
        };
    },
});
