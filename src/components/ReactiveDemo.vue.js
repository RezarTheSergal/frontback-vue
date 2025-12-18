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
var vue_1 = require("vue");
exports.default = {};
var __VLS_ctx = {};
var ___VLS_components;
var ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['text-input']} */ ;
/** @type {__VLS_StyleScopedClasses['text-area']} */ ;
/** @type {__VLS_StyleScopedClasses['select-input']} */ ;
/** @type {__VLS_StyleScopedClasses['text-input']} */ ;
/** @type {__VLS_StyleScopedClasses['text-area']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['debug-info']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "demo-container" }));
/** @type {__VLS_StyleScopedClasses['demo-container']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "input-group" }));
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.input)(__assign({ placeholder: "Например: Иван" }, { class: "text-input" }));
(__VLS_ctx.userName);
/** @type {__VLS_StyleScopedClasses['text-input']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
(__VLS_ctx.userName);
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "input-group" }));
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.textarea, __VLS_intrinsics.textarea)(__assign(__assign({ value: (__VLS_ctx.userBio), placeholder: "Расскажите о себе..." }, { class: "text-area" }), { rows: "3" }));
/** @type {__VLS_StyleScopedClasses['text-area']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.userBio.length);
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "input-group" }));
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.select, __VLS_intrinsics.select)(__assign({ value: (__VLS_ctx.selectedTech) }, { class: "select-input" }));
/** @type {__VLS_StyleScopedClasses['select-input']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "vue",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "react",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "css",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "js",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "html",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "unity",
});
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.getTechName(__VLS_ctx.selectedTech));
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "input-group" }));
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    type: "checkbox",
});
(__VLS_ctx.isSubscribed);
if (__VLS_ctx.isSubscribed) {
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "input-group" }));
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    type: "radio",
    value: "beginner",
});
(__VLS_ctx.experienceLevel);
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    type: "radio",
    value: "intermediate",
});
(__VLS_ctx.experienceLevel);
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    type: "radio",
    value: "advanced",
});
(__VLS_ctx.experienceLevel);
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.getExperienceText(__VLS_ctx.experienceLevel));
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "debug-info" }));
/** @type {__VLS_StyleScopedClasses['debug-info']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsics.pre, __VLS_intrinsics.pre)({});
(JSON.stringify({
    userName: __VLS_ctx.userName,
    userBio: __VLS_ctx.userBio,
    selectedTech: __VLS_ctx.selectedTech,
    isSubscribed: __VLS_ctx.isSubscribed,
    experienceLevel: __VLS_ctx.experienceLevel,
}, null, 2));
// @ts-ignore
[userName, userName, userName, userBio, userBio, userBio, selectedTech, selectedTech, selectedTech, getTechName, isSubscribed, isSubscribed, isSubscribed, experienceLevel, experienceLevel, experienceLevel, experienceLevel, experienceLevel, getExperienceText,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'ReactiveDemo',
    setup: function () {
        var userName = (0, vue_1.ref)('');
        var userBio = (0, vue_1.ref)('');
        var selectedTech = (0, vue_1.ref)('vue');
        var isSubscribed = (0, vue_1.ref)(false);
        var experienceLevel = (0, vue_1.ref)('beginner');
        var getTechName = function (tech) {
            var techMap = {
                vue: 'Vue.js',
                react: 'React',
                angular: 'Angular',
            };
            return techMap[tech] || tech;
        };
        var getExperienceText = function (level) {
            var levelMap = {
                beginner: 'Начинающий разработчик',
                intermediate: 'Разработчик со средним опытом',
                advanced: 'Опытный разработчик',
            };
            return levelMap[level] || level;
        };
        return {
            userName: userName,
            userBio: userBio,
            selectedTech: selectedTech,
            isSubscribed: isSubscribed,
            experienceLevel: experienceLevel,
            getTechName: getTechName,
            getExperienceText: getExperienceText,
        };
    },
});
