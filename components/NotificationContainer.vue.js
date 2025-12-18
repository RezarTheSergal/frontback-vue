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
var vue_1 = require("vue");
var notifications_1 = require("../stores/notifications");
exports.default = {};
var __VLS_ctx = {};
var ___VLS_components;
var ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['notification-success']} */ ;
/** @type {__VLS_StyleScopedClasses['notification-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['notification-error']} */ ;
/** @type {__VLS_StyleScopedClasses['notification-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['notification-warning']} */ ;
/** @type {__VLS_StyleScopedClasses['notification-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['notification-info']} */ ;
/** @type {__VLS_StyleScopedClasses['notification-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['notification-close']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "notification-container" }));
/** @type {__VLS_StyleScopedClasses['notification-container']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.transitionGroup | typeof ___VLS_components.TransitionGroup} */
transitionGroup;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "notification",
    tag: "div",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        name: "notification",
        tag: "div",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5 = __VLS_3.slots.default;
var _loop_1 = function (notification) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ key: (notification.id) }, { class: "notification" }), { class: ("notification-".concat(notification.type)) }));
    /** @type {__VLS_StyleScopedClasses['notification']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "notification-content" }));
    /** @type {__VLS_StyleScopedClasses['notification-content']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "notification-icon" }));
    /** @type {__VLS_StyleScopedClasses['notification-icon']} */ ;
    (__VLS_ctx.getIcon(notification.type));
    __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "notification-message" }));
    /** @type {__VLS_StyleScopedClasses['notification-message']} */ ;
    (notification.message);
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.removeNotification(notification.id);
            // @ts-ignore
            [notifications, getIcon, removeNotification,];
        } }, { class: "notification-close" }), { 'aria-label': "Закрыть уведомление" }));
    /** @type {__VLS_StyleScopedClasses['notification-close']} */ ;
    // @ts-ignore
    [];
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.notifications)); _i < _a.length; _i++) {
    var notification = _a[_i][0];
    _loop_1(notification);
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'NotificationContainer',
    setup: function () {
        var notificationsStore = (0, notifications_1.useNotificationsStore)();
        var notifications = (0, vue_1.computed)(function () { return notificationsStore.notifications; });
        var getIcon = function (type) {
            var icons = {
                success: '✓',
                error: '!',
                warning: '⚠',
                info: 'ℹ',
            };
            return icons[type] || 'ℹ';
        };
        var removeNotification = function (id) {
            notificationsStore.removeNotification(id);
        };
        return {
            notifications: notifications,
            getIcon: getIcon,
            removeNotification: removeNotification,
        };
    },
});
