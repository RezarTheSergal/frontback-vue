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
;
var __VLS_ctx = {};
var ___VLS_components;
var ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['timer-button']} */ ;
/** @type {__VLS_StyleScopedClasses['timer-button']} */ ;
/** @type {__VLS_StyleScopedClasses['timer-button']} */ ;
/** @type {__VLS_StyleScopedClasses['start']} */ ;
/** @type {__VLS_StyleScopedClasses['timer-button']} */ ;
/** @type {__VLS_StyleScopedClasses['timer-button']} */ ;
/** @type {__VLS_StyleScopedClasses['pause']} */ ;
/** @type {__VLS_StyleScopedClasses['timer-button']} */ ;
/** @type {__VLS_StyleScopedClasses['timer-button']} */ ;
/** @type {__VLS_StyleScopedClasses['reset']} */ ;
/** @type {__VLS_StyleScopedClasses['session-item']} */ ;
/** @type {__VLS_StyleScopedClasses['delete-session']} */ ;
/** @type {__VLS_StyleScopedClasses['sessions-stats']} */ ;
/** @type {__VLS_StyleScopedClasses['quick-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['action-button']} */ ;
/** @type {__VLS_StyleScopedClasses['action-button']} */ ;
/** @type {__VLS_StyleScopedClasses['action-button']} */ ;
/** @type {__VLS_StyleScopedClasses['special']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "demo-container" }));
/** @type {__VLS_StyleScopedClasses['demo-container']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "timer-section" }));
/** @type {__VLS_StyleScopedClasses['timer-section']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "timer-display" }));
/** @type {__VLS_StyleScopedClasses['timer-display']} */ ;
(__VLS_ctx.formatTime(__VLS_ctx.elapsedTime));
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "timer-controls" }));
/** @type {__VLS_StyleScopedClasses['timer-controls']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign({ onClick: (__VLS_ctx.startTimer) }, { disabled: (__VLS_ctx.isRunning) }), { class: "timer-button start" }));
/** @type {__VLS_StyleScopedClasses['timer-button']} */ ;
/** @type {__VLS_StyleScopedClasses['start']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign({ onClick: (__VLS_ctx.pauseTimer) }, { disabled: (!__VLS_ctx.isRunning) }), { class: "timer-button pause" }));
/** @type {__VLS_StyleScopedClasses['timer-button']} */ ;
/** @type {__VLS_StyleScopedClasses['pause']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.resetTimer) }, { class: "timer-button reset" }));
/** @type {__VLS_StyleScopedClasses['timer-button']} */ ;
/** @type {__VLS_StyleScopedClasses['reset']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sessions-section" }));
/** @type {__VLS_StyleScopedClasses['sessions-section']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
if (__VLS_ctx.studySessions.length === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "no-sessions" }));
    /** @type {__VLS_StyleScopedClasses['no-sessions']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sessions-list" }));
    /** @type {__VLS_StyleScopedClasses['sessions-list']} */ ;
    var _loop_1 = function (session) {
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (session.id) }, { class: "session-item" }));
        /** @type {__VLS_StyleScopedClasses['session-item']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "session-info" }));
        /** @type {__VLS_StyleScopedClasses['session-info']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "session-date" }));
        /** @type {__VLS_StyleScopedClasses['session-date']} */ ;
        (__VLS_ctx.formatDate(session.date));
        __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "session-duration" }));
        /** @type {__VLS_StyleScopedClasses['session-duration']} */ ;
        (__VLS_ctx.formatTime(session.duration));
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!!(__VLS_ctx.studySessions.length === 0))
                    return;
                __VLS_ctx.removeSession(session.id);
                // @ts-ignore
                [formatTime, formatTime, elapsedTime, startTimer, isRunning, isRunning, pauseTimer, resetTimer, studySessions, sortedSessions, formatDate, removeSession,];
            } }, { class: "delete-session" }));
        /** @type {__VLS_StyleScopedClasses['delete-session']} */ ;
        // @ts-ignore
        [];
    };
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.sortedSessions)); _i < _a.length; _i++) {
        var session = _a[_i][0];
        _loop_1(session);
    }
}
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sessions-stats" }));
/** @type {__VLS_StyleScopedClasses['sessions-stats']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.totalSessions);
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.formatTime(__VLS_ctx.totalStudyTime));
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.formatTime(__VLS_ctx.averageSessionTime));
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "quick-actions" }));
/** @type {__VLS_StyleScopedClasses['quick-actions']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "action-buttons" }));
/** @type {__VLS_StyleScopedClasses['action-buttons']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.addQuickSession(30);
        // @ts-ignore
        [formatTime, formatTime, totalSessions, totalStudyTime, averageSessionTime, addQuickSession,];
    } }, { class: "action-button" }));
/** @type {__VLS_StyleScopedClasses['action-button']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.addQuickSession(60);
        // @ts-ignore
        [addQuickSession,];
    } }, { class: "action-button" }));
/** @type {__VLS_StyleScopedClasses['action-button']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.addOneTimeSession) }, { class: "action-button special" }));
/** @type {__VLS_StyleScopedClasses['action-button']} */ ;
/** @type {__VLS_StyleScopedClasses['special']} */ ;
// @ts-ignore
[addOneTimeSession,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: "EventComputedDemo",
    setup: function () {
        var notificationsStore = (0, notifications_1.useNotificationsStore)();
        var elapsedTime = (0, vue_1.ref)(0);
        var isRunning = (0, vue_1.ref)(false);
        var timerInterval = null;
        var studySessions = (0, vue_1.ref)([]);
        var totalSessions = (0, vue_1.computed)(function () { return studySessions.value.length; });
        var totalStudyTime = (0, vue_1.computed)(function () {
            return studySessions.value.reduce(function (total, session) { return total + session.duration; }, 0);
        });
        var averageSessionTime = (0, vue_1.computed)(function () {
            if (totalSessions.value === 0)
                return 0;
            return Math.round(totalStudyTime.value / totalSessions.value);
        });
        var sortedSessions = (0, vue_1.computed)(function () {
            return __spreadArray([], studySessions.value, true).sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
        });
        var startTimer = function () {
            isRunning.value = true;
            notificationsStore.addNotification("Таймер запущен", "success", 2000);
            timerInterval = setInterval(function () {
                elapsedTime.value += 1;
            }, 1000);
        };
        var pauseTimer = function () {
            isRunning.value = false;
            notificationsStore.addNotification("Таймер приостановлен", "warning", 2000);
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
        };
        var resetTimer = function () {
            pauseTimer();
            if (elapsedTime.value >= 30) {
                studySessions.value.push({
                    id: Date.now(),
                    date: new Date().toISOString(),
                    duration: elapsedTime.value,
                });
                notificationsStore.addNotification("\u0421\u0435\u0441\u0441\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430 (".concat(Math.floor(elapsedTime.value / 60), " \u043C\u0438\u043D)"), "success", 2000);
            }
            elapsedTime.value = 0;
        };
        var removeSession = function (sessionId) {
            studySessions.value = studySessions.value.filter(function (session) { return session.id !== sessionId; });
            notificationsStore.addNotification("Сессия удалена", "info", 2000);
        };
        var addQuickSession = function (minutes) {
            var duration = minutes * 60;
            studySessions.value.push({
                id: Date.now(),
                date: new Date().toISOString(),
                duration: duration,
            });
            notificationsStore.addNotification("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0441\u0435\u0441\u0441\u0438\u044F ".concat(minutes, " \u043C\u0438\u043D\u0443\u0442"), "success", 2000);
        };
        var addOneTimeSession = function () {
            addQuickSession(45);
            notificationsStore.addNotification("Одноразовая сессия добавлена! Эта кнопка больше не сработает.", "info", 3000);
        };
        var formatTime = function (seconds) {
            var mins = Math.floor(seconds / 60);
            var secs = seconds % 60;
            return "".concat(mins.toString().padStart(2, "0"), ":").concat(secs.toString().padStart(2, "0"));
        };
        var formatDate = function (dateString) {
            return new Date(dateString).toLocaleString("ru-RU");
        };
        (0, vue_1.onUnmounted)(function () {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        });
        return {
            elapsedTime: elapsedTime,
            isRunning: isRunning,
            studySessions: studySessions,
            totalSessions: totalSessions,
            totalStudyTime: totalStudyTime,
            averageSessionTime: averageSessionTime,
            sortedSessions: sortedSessions,
            startTimer: startTimer,
            pauseTimer: pauseTimer,
            resetTimer: resetTimer,
            removeSession: removeSession,
            addQuickSession: addQuickSession,
            addOneTimeSession: addOneTimeSession,
            formatTime: formatTime,
            formatDate: formatDate,
        };
    },
});
