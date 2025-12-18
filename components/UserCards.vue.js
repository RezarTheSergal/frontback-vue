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
var UserCard_vue_1 = require("./UserCard.vue");
var notifications_1 = require("../stores/notifications");
exports.default = {};
var __VLS_ctx = {};
var __VLS_componentsOption = {
    UserCard: UserCard_vue_1.default,
};
var ___VLS_components;
var ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
var __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.UserCard} */
UserCard_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ 'onUserClicked': {} }, { user: (__VLS_ctx.adminUser), isActive: (true) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onUserClicked': {} }, { user: (__VLS_ctx.adminUser), isActive: (true) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ userClicked: {} },
    { onUserClicked: (__VLS_ctx.handleUserClick) });
var __VLS_7 = __VLS_3.slots.default;
{
    var __VLS_8 = __VLS_3.slots.actions;
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.editUser(__VLS_ctx.adminUser);
            // @ts-ignore
            [adminUser, adminUser, handleUserClick, editUser,];
        } }));
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.users)); _i < _a.length; _i++) {
    var user = _a[_i][0];
    var __VLS_9 = void 0;
    /** @ts-ignore @type {typeof ___VLS_components.UserCard} */
    UserCard_vue_1.default;
    // @ts-ignore
    var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(__assign({ 'onUserClicked': {} }, { key: (user.id), user: (user) })));
    var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ 'onUserClicked': {} }, { key: (user.id), user: (user) })], __VLS_functionalComponentArgsRest(__VLS_10), false));
    var __VLS_14 = void 0;
    var __VLS_15 = ({ userClicked: {} },
        { onUserClicked: (__VLS_ctx.handleUserClick) });
    var __VLS_12;
    var __VLS_13;
    // @ts-ignore
    [handleUserClick, users,];
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    components: {
        UserCard: UserCard_vue_1.default,
    },
    setup: function () {
        var notificationsStore = (0, notifications_1.useNotificationsStore)();
        return {
            notificationsStore: notificationsStore,
        };
    },
    data: function () {
        return {
            adminUser: {
                id: 1,
                name: 'Анна Иванова',
                email: 'anna@example.com',
                role: 'admin',
            },
            users: [
                {
                    id: 2,
                    name: 'Петр Сидоров',
                    email: 'petr@example.com',
                    role: 'user',
                },
            ],
        };
    },
    methods: {
        handleUserClick: function (user) {
            this.notificationsStore.addNotification("\u0412\u044B \u0432\u044B\u0431\u0440\u0430\u043B\u0438 ".concat(user.name), 'info', 2000);
        },
        editUser: function (user) {
            this.notificationsStore.addNotification("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 ".concat(user.name), 'info', 2000);
        },
    },
});
