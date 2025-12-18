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
exports.default = {};
var __VLS_ctx = {};
var ___VLS_components;
var ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['search-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['search-actions']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "search-container" }));
/** @type {__VLS_StyleScopedClasses['search-container']} */ ;
if (__VLS_ctx.label) {
    __VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
    (__VLS_ctx.label);
}
__VLS_asFunctionalElement(__VLS_intrinsics.input)(__assign(__assign(__assign({ onInput: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.$emit('update:modelValue', $event.target.value);
        // @ts-ignore
        [label, label, $emit,];
    } }, { value: (__VLS_ctx.modelValue), placeholder: (__VLS_ctx.placeholder) }), { class: "search-input" }), { type: "text" }));
/** @type {__VLS_StyleScopedClasses['search-input']} */ ;
if (__VLS_ctx.modelValue) {
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.modelValue))
                return;
            __VLS_ctx.$emit('update:modelValue', '');
            // @ts-ignore
            [$emit, modelValue, modelValue, placeholder,];
        } }, { class: "clear-btn" }));
    /** @type {__VLS_StyleScopedClasses['clear-btn']} */ ;
}
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "search-actions" }));
/** @type {__VLS_StyleScopedClasses['search-actions']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.$emit('search');
        // @ts-ignore
        [$emit,];
    } }));
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.$emit('reset');
        // @ts-ignore
        [$emit,];
    } }));
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'SearchInput',
    props: {
        modelValue: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: 'Поиск...',
        },
    },
    emits: ['update:modelValue', 'search', 'reset'],
});
