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
var SearchInput_vue_1 = require("./SearchInput.vue");
var vue_1 = require("vue");
exports.default = {};
var __VLS_ctx = {};
var __VLS_componentsOption = {
    SearchInput: SearchInput_vue_1.default,
};
var ___VLS_components;
var ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
var __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.SearchInput} */
SearchInput_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ 'onSearch': {} }, { 'onReset': {} }), { modelValue: (__VLS_ctx.searchQuery), label: "Поиск по имени:", placeholder: "Введите имя пользователя..." })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onSearch': {} }, { 'onReset': {} }), { modelValue: (__VLS_ctx.searchQuery), label: "Поиск по имени:", placeholder: "Введите имя пользователя..." })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ search: {} },
    { onSearch: (__VLS_ctx.performSearch) });
var __VLS_7 = ({ reset: {} },
    { onReset: (__VLS_ctx.resetSearch) });
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.searchQuery);
if (__VLS_ctx.searchResults.length) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.searchResults)); _i < _a.length; _i++) {
        var user = _a[_i][0];
        __VLS_asFunctionalElement(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (user.id),
        });
        (user.name);
        (user.email);
        // @ts-ignore
        [searchQuery, searchQuery, performSearch, resetSearch, searchResults, searchResults,];
    }
}
else if (__VLS_ctx.searchQuery) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
// @ts-ignore
[searchQuery,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    components: {
        SearchInput: SearchInput_vue_1.default,
    },
    setup: function () {
        var searchQuery = (0, vue_1.ref)('');
        var users = (0, vue_1.ref)([
            { id: 1, name: 'Анна', email: 'anna@test.com' },
            { id: 2, name: 'Борис', email: 'boris@test.com' },
            { id: 3, name: 'Виктор', email: 'victor@test.com' },
        ]);
        var searchResults = (0, vue_1.computed)(function () {
            if (!searchQuery.value)
                return [];
            return users.value.filter(function (user) {
                return user.name.toLowerCase().includes(searchQuery.value.toLowerCase());
            });
        });
        var performSearch = function () {
            console.log('Выполняем поиск:', searchQuery.value);
        };
        var resetSearch = function () {
            searchQuery.value = '';
        };
        return {
            searchQuery: searchQuery,
            searchResults: searchResults,
            performSearch: performSearch,
            resetSearch: resetSearch,
        };
    },
});
