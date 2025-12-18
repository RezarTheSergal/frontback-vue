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
/** @type {__VLS_StyleScopedClasses['profile-header']} */ ;
/** @type {__VLS_StyleScopedClasses['profile-header']} */ ;
/** @type {__VLS_StyleScopedClasses['current-user']} */ ;
/** @type {__VLS_StyleScopedClasses['user-info']} */ ;
/** @type {__VLS_StyleScopedClasses['current-user']} */ ;
/** @type {__VLS_StyleScopedClasses['user-info']} */ ;
/** @type {__VLS_StyleScopedClasses['tab']} */ ;
/** @type {__VLS_StyleScopedClasses['tab']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "user-profile" }));
/** @type {__VLS_StyleScopedClasses['user-profile']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "profile-header" }));
/** @type {__VLS_StyleScopedClasses['profile-header']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "profile-content" }));
/** @type {__VLS_StyleScopedClasses['profile-content']} */ ;
if (__VLS_ctx.$route.params.id) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "user-info" }));
    /** @type {__VLS_StyleScopedClasses['user-info']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
    (__VLS_ctx.$route.params.id);
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "current-user" }));
    /** @type {__VLS_StyleScopedClasses['current-user']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "navigation-buttons" }));
/** @type {__VLS_StyleScopedClasses['navigation-buttons']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.goBack) }, { class: "btn" }));
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.goHome) }, { class: "btn" }));
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.goToSettings) }, { class: "btn" }));
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
// @ts-ignore
[$route, $route, goBack, goHome, goToSettings,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'UserProfile',
    setup: function () {
        var router = (0, vue_router_1.useRouter)();
        var goBack = function () {
            router.back();
        };
        var goHome = function () {
            router.push('/');
        };
        var goToSettings = function () {
            router.push('/settings');
        };
        return {
            goBack: goBack,
            goHome: goHome,
            goToSettings: goToSettings,
        };
    },
    beforeRouteEnter: function (to, from, next) {
        console.log('Заходим в профиль пользователя');
        next();
    },
    beforeRouteUpdate: function (to, from, next) {
        console.log('Обновляем параметры маршрута профиля');
        next();
    },
});
