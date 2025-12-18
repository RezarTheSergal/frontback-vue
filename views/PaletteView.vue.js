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
var PaletteGenerator_vue_1 = require("../components/PaletteGenerator.vue");
exports.default = {};
var __VLS_ctx = {};
var __VLS_componentsOption = {
    PaletteGenerator: PaletteGenerator_vue_1.default,
};
var ___VLS_components;
var ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['palette-header']} */ ;
/** @type {__VLS_StyleScopedClasses['palette-header']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "palette-view" }));
/** @type {__VLS_StyleScopedClasses['palette-view']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "palette-header" }));
/** @type {__VLS_StyleScopedClasses['palette-header']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
var __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.PaletteGenerator} */
PaletteGenerator_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'PaletteView',
    components: {
        PaletteGenerator: PaletteGenerator_vue_1.default,
    },
});
