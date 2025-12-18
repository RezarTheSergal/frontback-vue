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
/** @type {__VLS_StyleScopedClasses['text-input']} */ ;
/** @type {__VLS_StyleScopedClasses['text-input']} */ ;
/** @type {__VLS_StyleScopedClasses['controls']} */ ;
/** @type {__VLS_StyleScopedClasses['tech-item']} */ ;
/** @type {__VLS_StyleScopedClasses['tech-item']} */ ;
/** @type {__VLS_StyleScopedClasses['tech-item']} */ ;
/** @type {__VLS_StyleScopedClasses['completed']} */ ;
/** @type {__VLS_StyleScopedClasses['tech-info']} */ ;
/** @type {__VLS_StyleScopedClasses['tech-item']} */ ;
/** @type {__VLS_StyleScopedClasses['completed']} */ ;
/** @type {__VLS_StyleScopedClasses['tech-info']} */ ;
/** @type {__VLS_StyleScopedClasses['complete-button']} */ ;
/** @type {__VLS_StyleScopedClasses['remove-button']} */ ;
/** @type {__VLS_StyleScopedClasses['empty-state']} */ ;
/** @type {__VLS_StyleScopedClasses['stats']} */ ;
/** @type {__VLS_StyleScopedClasses['stats']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "demo-container" }));
/** @type {__VLS_StyleScopedClasses['demo-container']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "add-form" }));
/** @type {__VLS_StyleScopedClasses['add-form']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.input)(__assign(__assign({ onKeyup: (__VLS_ctx.addTechnology) }, { placeholder: "Введите название технологии" }), { class: "text-input" }));
(__VLS_ctx.newTechName);
/** @type {__VLS_StyleScopedClasses['text-input']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.addTechnology) }, { class: "add-button" }));
/** @type {__VLS_StyleScopedClasses['add-button']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "controls" }));
/** @type {__VLS_StyleScopedClasses['controls']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.showCompleted = !__VLS_ctx.showCompleted;
        // @ts-ignore
        [addTechnology, addTechnology, newTechName, showCompleted, showCompleted,];
    } }, { class: "toggle-button" }));
/** @type {__VLS_StyleScopedClasses['toggle-button']} */ ;
(__VLS_ctx.showCompleted ? "Скрыть" : "Показать");
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.sortBy = __VLS_ctx.sortBy === 'name' ? 'date' : 'name';
        // @ts-ignore
        [showCompleted, sortBy, sortBy,];
    } }, { class: "toggle-button" }));
/** @type {__VLS_StyleScopedClasses['toggle-button']} */ ;
(__VLS_ctx.sortBy === "name" ? "названию" : "дате");
if (__VLS_ctx.technologies.length === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "empty-state" }));
    /** @type {__VLS_StyleScopedClasses['empty-state']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "tech-list" }));
    /** @type {__VLS_StyleScopedClasses['tech-list']} */ ;
    var _loop_1 = function (tech) {
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ key: (tech.id) }, { class: "tech-item" }), { class: ({ completed: tech.completed }) }));
        /** @type {__VLS_StyleScopedClasses['tech-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['completed']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "tech-info" }));
        /** @type {__VLS_StyleScopedClasses['tech-info']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
        (tech.name);
        __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "tech-date" }));
        /** @type {__VLS_StyleScopedClasses['tech-date']} */ ;
        (__VLS_ctx.formatDate(tech.createdAt));
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "tech-actions" }));
        /** @type {__VLS_StyleScopedClasses['tech-actions']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!!(__VLS_ctx.technologies.length === 0))
                    return;
                __VLS_ctx.completeTechnology(tech.id);
                // @ts-ignore
                [sortBy, technologies, sortedTechnologies, formatDate, completeTechnology,];
            } }, { class: "complete-button" }));
        __VLS_asFunctionalDirective(___VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (!tech.completed) }), null, null);
        /** @type {__VLS_StyleScopedClasses['complete-button']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!!(__VLS_ctx.technologies.length === 0))
                    return;
                __VLS_ctx.removeTechnology(tech.id);
                // @ts-ignore
                [removeTechnology,];
            } }, { class: "remove-button" }));
        /** @type {__VLS_StyleScopedClasses['remove-button']} */ ;
        // @ts-ignore
        [];
    };
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.sortedTechnologies)); _i < _a.length; _i++) {
        var tech = _a[_i][0];
        _loop_1(tech);
    }
}
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "stats" }));
/** @type {__VLS_StyleScopedClasses['stats']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.technologies.length);
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.activeCount);
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.completedCount);
if (__VLS_ctx.completedCount > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "progress-section" }));
    /** @type {__VLS_StyleScopedClasses['progress-section']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (__VLS_ctx.progressPercentage);
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "progress-bar" }));
    /** @type {__VLS_StyleScopedClasses['progress-bar']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "progress-fill" }, { style: ({ width: __VLS_ctx.progressPercentage + '%' }) }));
    /** @type {__VLS_StyleScopedClasses['progress-fill']} */ ;
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
// @ts-ignore
[technologies, activeCount, completedCount, completedCount, progressPercentage, progressPercentage,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: "ConditionalListDemo",
    setup: function () {
        var notificationsStore = (0, notifications_1.useNotificationsStore)();
        var newTechName = (0, vue_1.ref)("");
        var technologies = (0, vue_1.ref)([]);
        var showCompleted = (0, vue_1.ref)(true);
        var sortBy = (0, vue_1.ref)("date");
        var activeCount = (0, vue_1.computed)(function () { return technologies.value.filter(function (tech) { return !tech.completed; }).length; });
        var completedCount = (0, vue_1.computed)(function () { return technologies.value.filter(function (tech) { return tech.completed; }).length; });
        var progressPercentage = (0, vue_1.computed)(function () {
            if (technologies.value.length === 0)
                return 0;
            return Math.round((completedCount.value / technologies.value.length) * 100);
        });
        var sortedTechnologies = (0, vue_1.computed)(function () {
            var techsToShow = showCompleted.value
                ? technologies.value
                : technologies.value.filter(function (tech) { return !tech.completed; });
            return __spreadArray([], techsToShow, true).sort(function (a, b) {
                if (sortBy.value === "name") {
                    return a.name.localeCompare(b.name);
                }
                else {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                }
            });
        });
        var addTechnology = function () {
            if (!newTechName.value.trim()) {
                notificationsStore.addNotification("Введите название технологии", "warning", 2000);
                return;
            }
            technologies.value.push({
                id: Date.now(),
                name: newTechName.value.trim(),
                completed: false,
                createdAt: new Date().toISOString(),
            });
            notificationsStore.addNotification("\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \"".concat(newTechName.value.trim(), "\" \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430"), "success", 2000);
            newTechName.value = "";
        };
        var removeTechnology = function (id) {
            var tech = technologies.value.find(function (t) { return t.id === id; });
            technologies.value = technologies.value.filter(function (tech) { return tech.id !== id; });
            notificationsStore.addNotification("\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \"".concat(tech === null || tech === void 0 ? void 0 : tech.name, "\" \u0443\u0434\u0430\u043B\u0435\u043D\u0430"), "info", 2000);
        };
        var completeTechnology = function (id) {
            var tech = technologies.value.find(function (tech) { return tech.id === id; });
            if (tech) {
                tech.completed = true;
                notificationsStore.addNotification("\u0412\u044B \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0438 \"".concat(tech.name, "\""), "success", 2000);
            }
        };
        var formatDate = function (dateString) {
            return new Date(dateString).toLocaleDateString("ru-RU");
        };
        return {
            newTechName: newTechName,
            technologies: technologies,
            showCompleted: showCompleted,
            sortBy: sortBy,
            activeCount: activeCount,
            completedCount: completedCount,
            progressPercentage: progressPercentage,
            sortedTechnologies: sortedTechnologies,
            addTechnology: addTechnology,
            removeTechnology: removeTechnology,
            completeTechnology: completeTechnology,
            formatDate: formatDate,
        };
    },
});
