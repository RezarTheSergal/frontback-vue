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
var ReactiveDemo_vue_1 = require("../components/ReactiveDemo.vue");
var ConditionalListDemo_vue_1 = require("../components/ConditionalListDemo.vue");
var EventComputedDemo_vue_1 = require("../components/EventComputedDemo.vue");
var UserCards_vue_1 = require("../components/UserCards.vue");
var vue_1 = require("vue");
exports.default = {};
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ReactiveDemo: ReactiveDemo_vue_1.default,
    ConditionalListDemo: ConditionalListDemo_vue_1.default,
    EventComputedDemo: EventComputedDemo_vue_1.default,
    UserCards: UserCards_vue_1.default,
};
var ___VLS_components;
var ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['welcome-section']} */ ;
/** @type {__VLS_StyleScopedClasses['welcome-section']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-button']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-button']} */ ;
/** @type {__VLS_StyleScopedClasses['welcome-message']} */ ;
/** @type {__VLS_StyleScopedClasses['welcome-message']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-page" }));
/** @type {__VLS_StyleScopedClasses['home-page']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "welcome-section" }));
/** @type {__VLS_StyleScopedClasses['welcome-section']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsics.nav, __VLS_intrinsics.nav)(__assign({ class: "examples-navigation" }));
/** @type {__VLS_StyleScopedClasses['examples-navigation']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.currentDemo = 'reactive';
        // @ts-ignore
        [currentDemo,];
    } }, { class: ({ active: __VLS_ctx.currentDemo === 'reactive' }) }), { class: "nav-button" }));
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-button']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.currentDemo = 'conditional';
        // @ts-ignore
        [currentDemo, currentDemo,];
    } }, { class: ({ active: __VLS_ctx.currentDemo === 'conditional' }) }), { class: "nav-button" }));
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-button']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.currentDemo = 'events';
        // @ts-ignore
        [currentDemo, currentDemo,];
    } }, { class: ({ active: __VLS_ctx.currentDemo === 'events' }) }), { class: "nav-button" }));
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-button']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.currentDemo = 'usercards';
        // @ts-ignore
        [currentDemo, currentDemo,];
    } }, { class: ({ active: __VLS_ctx.currentDemo === 'usercards' }) }), { class: "nav-button" }));
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-button']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.main, __VLS_intrinsics.main)(__assign({ class: "demo-content" }));
/** @type {__VLS_StyleScopedClasses['demo-content']} */ ;
if (__VLS_ctx.currentDemo === 'reactive') {
    var __VLS_0 = void 0;
    /** @ts-ignore @type {typeof ___VLS_components.ReactiveDemo} */
    ReactiveDemo_vue_1.default;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
}
else if (__VLS_ctx.currentDemo === 'conditional') {
    var __VLS_5 = void 0;
    /** @ts-ignore @type {typeof ___VLS_components.ConditionalListDemo} */
    ConditionalListDemo_vue_1.default;
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_6), false));
}
else if (__VLS_ctx.currentDemo === 'events') {
    var __VLS_10 = void 0;
    /** @ts-ignore @type {typeof ___VLS_components.EventComputedDemo} */
    EventComputedDemo_vue_1.default;
    // @ts-ignore
    var __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({}));
    var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_11), false));
}
else if (__VLS_ctx.currentDemo === 'usercards') {
    var __VLS_15 = void 0;
    /** @ts-ignore @type {typeof ___VLS_components.UserCards} */
    UserCards_vue_1.default;
    // @ts-ignore
    var __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({}));
    var __VLS_17 = __VLS_16.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_16), false));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "welcome-message" }));
    /** @type {__VLS_StyleScopedClasses['welcome-message']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
// @ts-ignore
[currentDemo, currentDemo, currentDemo, currentDemo, currentDemo,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'HomePage',
    components: {
        ReactiveDemo: ReactiveDemo_vue_1.default,
        ConditionalListDemo: ConditionalListDemo_vue_1.default,
        EventComputedDemo: EventComputedDemo_vue_1.default,
        UserCards: UserCards_vue_1.default,
    },
    setup: function () {
        var currentDemo = (0, vue_1.ref)('reactive');
        return {
            currentDemo: currentDemo,
        };
    },
});
