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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.default = {};
var __VLS_ctx = {};
var ___VLS_components;
var ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['palette-name-input']} */ ;
/** @type {__VLS_StyleScopedClasses['palette-tags-input']} */ ;
/** @type {__VLS_StyleScopedClasses['tool-button']} */ ;
/** @type {__VLS_StyleScopedClasses['tool-button']} */ ;
/** @type {__VLS_StyleScopedClasses['tool-button']} */ ;
/** @type {__VLS_StyleScopedClasses['tool-button']} */ ;
/** @type {__VLS_StyleScopedClasses['save']} */ ;
/** @type {__VLS_StyleScopedClasses['tool-button']} */ ;
/** @type {__VLS_StyleScopedClasses['tool-button']} */ ;
/** @type {__VLS_StyleScopedClasses['tool-button']} */ ;
/** @type {__VLS_StyleScopedClasses['favorite']} */ ;
/** @type {__VLS_StyleScopedClasses['search-input']} */ ;
/** @type {__VLS_StyleScopedClasses['export-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['export-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['copy-css-button']} */ ;
/** @type {__VLS_StyleScopedClasses['control-group']} */ ;
/** @type {__VLS_StyleScopedClasses['count-button']} */ ;
/** @type {__VLS_StyleScopedClasses['format-button']} */ ;
/** @type {__VLS_StyleScopedClasses['count-button']} */ ;
/** @type {__VLS_StyleScopedClasses['format-button']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['palette-type-select']} */ ;
/** @type {__VLS_StyleScopedClasses['mood-select']} */ ;
/** @type {__VLS_StyleScopedClasses['palette-type-select']} */ ;
/** @type {__VLS_StyleScopedClasses['mood-select']} */ ;
/** @type {__VLS_StyleScopedClasses['generate-button']} */ ;
/** @type {__VLS_StyleScopedClasses['generate-button']} */ ;
/** @type {__VLS_StyleScopedClasses['generate-button']} */ ;
/** @type {__VLS_StyleScopedClasses['secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['color-picker']} */ ;
/** @type {__VLS_StyleScopedClasses['color-input']} */ ;
/** @type {__VLS_StyleScopedClasses['generate-base-button']} */ ;
/** @type {__VLS_StyleScopedClasses['color-card']} */ ;
/** @type {__VLS_StyleScopedClasses['color-card']} */ ;
/** @type {__VLS_StyleScopedClasses['color-card']} */ ;
/** @type {__VLS_StyleScopedClasses['color-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['pin-button']} */ ;
/** @type {__VLS_StyleScopedClasses['edit-button']} */ ;
/** @type {__VLS_StyleScopedClasses['color-wheel-container']} */ ;
/** @type {__VLS_StyleScopedClasses['saved-palette-item']} */ ;
/** @type {__VLS_StyleScopedClasses['saved-palette-item']} */ ;
/** @type {__VLS_StyleScopedClasses['favorite']} */ ;
/** @type {__VLS_StyleScopedClasses['favorite-button']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['mini-color']} */ ;
/** @type {__VLS_StyleScopedClasses['mini-button']} */ ;
/** @type {__VLS_StyleScopedClasses['mini-button']} */ ;
/** @type {__VLS_StyleScopedClasses['mini-button']} */ ;
/** @type {__VLS_StyleScopedClasses['edit']} */ ;
/** @type {__VLS_StyleScopedClasses['mini-button']} */ ;
/** @type {__VLS_StyleScopedClasses['mini-button']} */ ;
/** @type {__VLS_StyleScopedClasses['delete']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-content']} */ ;
/** @type {__VLS_StyleScopedClasses['color-edit-form']} */ ;
/** @type {__VLS_StyleScopedClasses['color-picker-large']} */ ;
/** @type {__VLS_StyleScopedClasses['color-input-large']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['palette-generator']} */ ;
/** @type {__VLS_StyleScopedClasses['controls-section']} */ ;
/** @type {__VLS_StyleScopedClasses['palette-display']} */ ;
/** @type {__VLS_StyleScopedClasses['base-color-section']} */ ;
/** @type {__VLS_StyleScopedClasses['color-picker-group']} */ ;
/** @type {__VLS_StyleScopedClasses['generate-base-button']} */ ;
/** @type {__VLS_StyleScopedClasses['action-buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['generate-button']} */ ;
/** @type {__VLS_StyleScopedClasses['color-wheel-container']} */ ;
/** @type {__VLS_StyleScopedClasses['save-palette-form']} */ ;
/** @type {__VLS_StyleScopedClasses['tool-group']} */ ;
/** @type {__VLS_StyleScopedClasses['tool-button']} */ ;
/** @type {__VLS_StyleScopedClasses['palette-list']} */ ;
/** @type {__VLS_StyleScopedClasses['export-buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['export-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-content']} */ ;
/** @type {__VLS_StyleScopedClasses['palette-display']} */ ;
/** @type {__VLS_StyleScopedClasses['color-value']} */ ;
/** @type {__VLS_StyleScopedClasses['pin-button']} */ ;
/** @type {__VLS_StyleScopedClasses['edit-button']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "palette-generator" }));
/** @type {__VLS_StyleScopedClasses['palette-generator']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "controls-section" }));
/** @type {__VLS_StyleScopedClasses['controls-section']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "control-group" }));
/** @type {__VLS_StyleScopedClasses['control-group']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "button-group" }));
/** @type {__VLS_StyleScopedClasses['button-group']} */ ;
var _loop_1 = function (num) {
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.colorCount = num;
            // @ts-ignore
            [colorCount,];
        } }, { key: (num) }), { class: ({ active: __VLS_ctx.colorCount === num }) }), { class: "count-button" }));
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    /** @type {__VLS_StyleScopedClasses['count-button']} */ ;
    (num);
    // @ts-ignore
    [colorCount,];
};
for (var _i = 0, _l = __VLS_getVForSourceType(([3, 5, 7])); _i < _l.length; _i++) {
    var num = _l[_i][0];
    _loop_1(num);
}
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "control-group" }));
/** @type {__VLS_StyleScopedClasses['control-group']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.select, __VLS_intrinsics.select)(__assign({ value: (__VLS_ctx.paletteType) }, { class: "palette-type-select" }));
/** @type {__VLS_StyleScopedClasses['palette-type-select']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "harmonious",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "monochromatic",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "analogous",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "complementary",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "triadic",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "tetradic",
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "control-group" }));
/** @type {__VLS_StyleScopedClasses['control-group']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.select, __VLS_intrinsics.select)(__assign({ value: (__VLS_ctx.moodType) }, { class: "mood-select" }));
/** @type {__VLS_StyleScopedClasses['mood-select']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "none",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "calm",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "energetic",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "professional",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "playful",
});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "control-group" }));
/** @type {__VLS_StyleScopedClasses['control-group']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "button-group" }));
/** @type {__VLS_StyleScopedClasses['button-group']} */ ;
var _loop_2 = function (format) {
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.displayFormat = format;
            // @ts-ignore
            [paletteType, moodType, displayFormat,];
        } }, { key: (format) }), { class: ({ active: __VLS_ctx.displayFormat === format }) }), { class: "format-button" }));
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    /** @type {__VLS_StyleScopedClasses['format-button']} */ ;
    (format);
    // @ts-ignore
    [displayFormat,];
};
for (var _m = 0, _o = __VLS_getVForSourceType((['HEX', 'RGB', 'HSL'])); _m < _o.length; _m++) {
    var format = _o[_m][0];
    _loop_2(format);
}
__VLS_asFunctionalElement(__VLS_intrinsics.small, __VLS_intrinsics.small)(__assign({ class: "format-hint" }));
/** @type {__VLS_StyleScopedClasses['format-hint']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "base-color-section" }));
/** @type {__VLS_StyleScopedClasses['base-color-section']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "control-group" }));
/** @type {__VLS_StyleScopedClasses['control-group']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "color-picker-group" }));
/** @type {__VLS_StyleScopedClasses['color-picker-group']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.input)(__assign(__assign({ onInput: (__VLS_ctx.updateBaseColor) }, { type: "color" }), { class: "color-picker" }));
(__VLS_ctx.baseColor);
/** @type {__VLS_StyleScopedClasses['color-picker']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.input)(__assign(__assign(__assign({ onInput: (__VLS_ctx.updateBaseColor) }, { type: "text", value: (__VLS_ctx.baseColor) }), { class: "color-input" }), { placeholder: "#FF6B6B" }));
/** @type {__VLS_StyleScopedClasses['color-input']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.generateFromBase) }, { class: "generate-base-button" }));
/** @type {__VLS_StyleScopedClasses['generate-base-button']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "action-buttons" }));
/** @type {__VLS_StyleScopedClasses['action-buttons']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.generatePalette) }, { class: "generate-button" }));
/** @type {__VLS_StyleScopedClasses['generate-button']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.generateFromBase) }, { class: "generate-button secondary" }));
/** @type {__VLS_StyleScopedClasses['generate-button']} */ ;
/** @type {__VLS_StyleScopedClasses['secondary']} */ ;
if (__VLS_ctx.palette.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "palette-display" }));
    /** @type {__VLS_StyleScopedClasses['palette-display']} */ ;
    var _loop_3 = function (color, index) {
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.palette.length > 0))
                    return;
                __VLS_ctx.copyToClipboard(color.hex);
                // @ts-ignore
                [updateBaseColor, updateBaseColor, baseColor, baseColor, generateFromBase, generateFromBase, generatePalette, palette, palette, copyToClipboard,];
            } }, { key: (index) }), { class: "color-card" }), { style: ({ backgroundColor: color.hex }) }), { class: ({ pinned: __VLS_ctx.pinnedColors.has(index) }) }));
        /** @type {__VLS_StyleScopedClasses['color-card']} */ ;
        /** @type {__VLS_StyleScopedClasses['pinned']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "color-overlay" }));
        /** @type {__VLS_StyleScopedClasses['color-overlay']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "color-value" }));
        /** @type {__VLS_StyleScopedClasses['color-value']} */ ;
        (__VLS_ctx.getColorValue(color));
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "color-actions" }));
        /** @type {__VLS_StyleScopedClasses['color-actions']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.palette.length > 0))
                    return;
                __VLS_ctx.togglePin(index);
                // @ts-ignore
                [pinnedColors, getColorValue, togglePin,];
            } }, { class: ({ pinned: __VLS_ctx.pinnedColors.has(index) }) }), { class: "pin-button" }), { title: (__VLS_ctx.pinnedColors.has(index) ? 'Открепить цвет' : 'Закрепить цвет') }));
        /** @type {__VLS_StyleScopedClasses['pinned']} */ ;
        /** @type {__VLS_StyleScopedClasses['pin-button']} */ ;
        (__VLS_ctx.pinnedColors.has(index) ? 'P' : 'O');
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.palette.length > 0))
                    return;
                __VLS_ctx.editColor(index);
                // @ts-ignore
                [pinnedColors, pinnedColors, pinnedColors, editColor,];
            } }, { class: "edit-button" }), { title: "Редактировать цвет" }));
        /** @type {__VLS_StyleScopedClasses['edit-button']} */ ;
        // @ts-ignore
        [];
    };
    for (var _p = 0, _q = __VLS_getVForSourceType((__VLS_ctx.palette)); _p < _q.length; _p++) {
        var _r = _q[_p], color = _r[0], index = _r[1];
        _loop_3(color, index);
    }
}
if (__VLS_ctx.showColorWheel) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "color-wheel-section" }));
    /** @type {__VLS_StyleScopedClasses['color-wheel-section']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "color-wheel-container" }));
    /** @type {__VLS_StyleScopedClasses['color-wheel-container']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.canvas, __VLS_intrinsics.canvas)({
        ref: "colorWheelCanvas",
        width: "300",
        height: "300",
    });
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "color-wheel-info" }));
    /** @type {__VLS_StyleScopedClasses['color-wheel-info']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
if (__VLS_ctx.palette.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "accessibility-section" }));
    /** @type {__VLS_StyleScopedClasses['accessibility-section']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "contrast-grid" }));
    /** @type {__VLS_StyleScopedClasses['contrast-grid']} */ ;
    for (var _s = 0, _t = __VLS_getVForSourceType((__VLS_ctx.contrastCombinations)); _s < _t.length; _s++) {
        var _u = _t[_s], combo = _u[0], idx = _u[1];
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (idx) }, { class: "contrast-item" }));
        /** @type {__VLS_StyleScopedClasses['contrast-item']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "contrast-preview" }));
        /** @type {__VLS_StyleScopedClasses['contrast-preview']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "contrast-sample" }, { style: ({
                backgroundColor: combo.bg,
                color: combo.fg,
            }) }));
        /** @type {__VLS_StyleScopedClasses['contrast-sample']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "contrast-info" }));
        /** @type {__VLS_StyleScopedClasses['contrast-info']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "contrast-colors" }));
        /** @type {__VLS_StyleScopedClasses['contrast-colors']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "color-dot" }, { style: ({ backgroundColor: combo.fg }) }));
        /** @type {__VLS_StyleScopedClasses['color-dot']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "color-dot" }, { style: ({ backgroundColor: combo.bg }) }));
        /** @type {__VLS_StyleScopedClasses['color-dot']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "contrast-ratio" }));
        /** @type {__VLS_StyleScopedClasses['contrast-ratio']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
        (combo.ratio);
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "contrast-badges" }));
        /** @type {__VLS_StyleScopedClasses['contrast-badges']} */ ;
        if (combo.levelAA) {
            __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "badge badge-success" }, { title: "WCAG AA для обычного текста" }));
            /** @type {__VLS_StyleScopedClasses['badge']} */ ;
            /** @type {__VLS_StyleScopedClasses['badge-success']} */ ;
        }
        else {
            __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "badge badge-fail" }, { title: "Не соответствует WCAG AA" }));
            /** @type {__VLS_StyleScopedClasses['badge']} */ ;
            /** @type {__VLS_StyleScopedClasses['badge-fail']} */ ;
        }
        if (combo.levelAAA) {
            __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "badge badge-success" }, { title: "WCAG AAA для обычного текста" }));
            /** @type {__VLS_StyleScopedClasses['badge']} */ ;
            /** @type {__VLS_StyleScopedClasses['badge-success']} */ ;
        }
        else {
            __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "badge badge-fail" }, { title: "Не соответствует WCAG AAA" }));
            /** @type {__VLS_StyleScopedClasses['badge']} */ ;
            /** @type {__VLS_StyleScopedClasses['badge-fail']} */ ;
        }
        // @ts-ignore
        [palette, showColorWheel, contrastCombinations,];
    }
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "accent-suggestions" }));
    /** @type {__VLS_StyleScopedClasses['accent-suggestions']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "accent-colors" }));
    /** @type {__VLS_StyleScopedClasses['accent-colors']} */ ;
    var _loop_4 = function (accent, idx) {
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.palette.length > 0))
                    return;
                __VLS_ctx.addAccentToPalette(accent);
                // @ts-ignore
                [suggestedAccents, addAccentToPalette,];
            } }, { key: (idx) }), { class: "accent-color" }), { style: ({ backgroundColor: accent }) }), { title: ("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ".concat(accent, " \u0432 \u043F\u0430\u043B\u0438\u0442\u0440\u0443")) }));
        /** @type {__VLS_StyleScopedClasses['accent-color']} */ ;
        (accent);
        // @ts-ignore
        [];
    };
    for (var _v = 0, _w = __VLS_getVForSourceType((__VLS_ctx.suggestedAccents)); _v < _w.length; _v++) {
        var _x = _w[_v], accent = _x[0], idx = _x[1];
        _loop_4(accent, idx);
    }
}
var __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.transition | typeof ___VLS_components.Transition} */
transition;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "notification",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        name: "notification",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5 = __VLS_3.slots.default;
if (__VLS_ctx.showCopyNotification) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "notification" }));
    /** @type {__VLS_StyleScopedClasses['notification']} */ ;
}
// @ts-ignore
[showCopyNotification,];
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "preview-section" }));
/** @type {__VLS_StyleScopedClasses['preview-section']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "preview-container" }));
/** @type {__VLS_StyleScopedClasses['preview-container']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "preview-light" }));
/** @type {__VLS_StyleScopedClasses['preview-light']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ style: ({
        backgroundColor: (_a = __VLS_ctx.palette[0]) === null || _a === void 0 ? void 0 : _a.hex,
        color: (_b = __VLS_ctx.palette[4]) === null || _b === void 0 ? void 0 : _b.hex,
    }) }));
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ style: ({
        backgroundColor: (_c = __VLS_ctx.palette[1]) === null || _c === void 0 ? void 0 : _c.hex,
        color: (_d = __VLS_ctx.palette[4]) === null || _d === void 0 ? void 0 : _d.hex,
    }) }, { class: "preview-card" }));
/** @type {__VLS_StyleScopedClasses['preview-card']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h5, __VLS_intrinsics.h5)(__assign({ style: ({ color: (_e = __VLS_ctx.palette[2]) === null || _e === void 0 ? void 0 : _e.hex }) }));
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ style: ({ color: (_f = __VLS_ctx.palette[3]) === null || _f === void 0 ? void 0 : _f.hex }) }));
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "preview-dark" }));
/** @type {__VLS_StyleScopedClasses['preview-dark']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ style: ({ backgroundColor: (_g = __VLS_ctx.palette[0]) === null || _g === void 0 ? void 0 : _g.hex, color: '#fff' }) }));
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ style: ({ backgroundColor: (_h = __VLS_ctx.palette[1]) === null || _h === void 0 ? void 0 : _h.hex, color: '#fff' }) }, { class: "preview-card" }));
/** @type {__VLS_StyleScopedClasses['preview-card']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h5, __VLS_intrinsics.h5)(__assign({ style: ({ color: (_j = __VLS_ctx.palette[2]) === null || _j === void 0 ? void 0 : _j.hex }) }));
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ style: ({ color: (_k = __VLS_ctx.palette[3]) === null || _k === void 0 ? void 0 : _k.hex }) }));
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "tools-section" }));
/** @type {__VLS_StyleScopedClasses['tools-section']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "save-palette-form" }));
/** @type {__VLS_StyleScopedClasses['save-palette-form']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.input)(__assign({ value: (__VLS_ctx.paletteName), type: "text", placeholder: "Название палитры" }, { class: "palette-name-input" }));
/** @type {__VLS_StyleScopedClasses['palette-name-input']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.input)(__assign({ value: (__VLS_ctx.paletteTags), type: "text", placeholder: "Теги (через запятую)" }, { class: "palette-tags-input" }));
/** @type {__VLS_StyleScopedClasses['palette-tags-input']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.savePalette) }, { class: "tool-button save" }));
/** @type {__VLS_StyleScopedClasses['tool-button']} */ ;
/** @type {__VLS_StyleScopedClasses['save']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "tool-group" }));
/** @type {__VLS_StyleScopedClasses['tool-group']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.loadPalette) }, { class: "tool-button load" }));
/** @type {__VLS_StyleScopedClasses['tool-button']} */ ;
/** @type {__VLS_StyleScopedClasses['load']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.toggleFavorites) }, { class: "tool-button favorite" }));
/** @type {__VLS_StyleScopedClasses['tool-button']} */ ;
/** @type {__VLS_StyleScopedClasses['favorite']} */ ;
(__VLS_ctx.showOnlyFavorites ? 'Все палитры' : 'Избранное');
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.showColorWheel = !__VLS_ctx.showColorWheel;
        // @ts-ignore
        [palette, palette, palette, palette, palette, palette, palette, palette, palette, palette, showColorWheel, showColorWheel, paletteName, paletteTags, savePalette, loadPalette, toggleFavorites, showOnlyFavorites,];
    } }, { class: "tool-button" }));
/** @type {__VLS_StyleScopedClasses['tool-button']} */ ;
if (__VLS_ctx.savedPalettes.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "search-section" }));
    /** @type {__VLS_StyleScopedClasses['search-section']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.input)(__assign({ value: (__VLS_ctx.searchQuery), type: "text", placeholder: "Поиск по названию или тегам..." }, { class: "search-input" }));
    /** @type {__VLS_StyleScopedClasses['search-input']} */ ;
}
if (__VLS_ctx.filteredPalettes.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "saved-palettes" }));
    /** @type {__VLS_StyleScopedClasses['saved-palettes']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
    (__VLS_ctx.filteredPalettes.length);
    (__VLS_ctx.savedPalettes.length);
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "palette-list" }));
    /** @type {__VLS_StyleScopedClasses['palette-list']} */ ;
    var _loop_5 = function (saved, idx) {
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ key: (saved.id) }, { class: "saved-palette-item" }), { class: ({ favorite: saved.favorite }) }));
        /** @type {__VLS_StyleScopedClasses['saved-palette-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['favorite']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "saved-palette-header" }));
        /** @type {__VLS_StyleScopedClasses['saved-palette-header']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
        (saved.name || "\u041F\u0430\u043B\u0438\u0442\u0440\u0430 ".concat(idx + 1));
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.filteredPalettes.length > 0))
                    return;
                __VLS_ctx.toggleFavorite(saved.id);
                // @ts-ignore
                [savedPalettes, savedPalettes, searchQuery, filteredPalettes, filteredPalettes, filteredPalettes, toggleFavorite,];
            } }, { class: "favorite-button" }), { title: (saved.favorite ? 'Убрать из избранного' : 'В избранное') }));
        /** @type {__VLS_StyleScopedClasses['favorite-button']} */ ;
        (saved.favorite ? '*' : 'o');
        if (saved.tags && saved.tags.length) {
            __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "palette-tags" }));
            /** @type {__VLS_StyleScopedClasses['palette-tags']} */ ;
            var _loop_6 = function (tag) {
                __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign(__assign({ onClick: function () {
                        var _a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _a[_i] = arguments[_i];
                        }
                        var $event = _a[0];
                        if (!(__VLS_ctx.filteredPalettes.length > 0))
                            return;
                        if (!(saved.tags && saved.tags.length))
                            return;
                        __VLS_ctx.searchQuery = tag;
                        // @ts-ignore
                        [searchQuery,];
                    } }, { key: (tag) }), { class: "tag" }));
                /** @type {__VLS_StyleScopedClasses['tag']} */ ;
                (tag);
                // @ts-ignore
                [];
            };
            for (var _1 = 0, _2 = __VLS_getVForSourceType((saved.tags)); _1 < _2.length; _1++) {
                var tag = _2[_1][0];
                _loop_6(tag);
            }
        }
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "saved-palette-colors" }));
        /** @type {__VLS_StyleScopedClasses['saved-palette-colors']} */ ;
        for (var _3 = 0, _4 = __VLS_getVForSourceType((saved.colors)); _3 < _4.length; _3++) {
            var _5 = _4[_3], color = _5[0], colorIdx = _5[1];
            __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign(__assign({ key: (colorIdx) }, { class: "mini-color" }), { style: ({ backgroundColor: color.hex }) }), { title: (color.hex) }));
            /** @type {__VLS_StyleScopedClasses['mini-color']} */ ;
            // @ts-ignore
            [];
        }
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "saved-palette-actions" }));
        /** @type {__VLS_StyleScopedClasses['saved-palette-actions']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.filteredPalettes.length > 0))
                    return;
                __VLS_ctx.applyPalette(saved);
                // @ts-ignore
                [applyPalette,];
            } }, { class: "mini-button" }));
        /** @type {__VLS_StyleScopedClasses['mini-button']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.filteredPalettes.length > 0))
                    return;
                __VLS_ctx.editSavedPalette(saved);
                // @ts-ignore
                [editSavedPalette,];
            } }, { class: "mini-button edit" }));
        /** @type {__VLS_StyleScopedClasses['mini-button']} */ ;
        /** @type {__VLS_StyleScopedClasses['edit']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.filteredPalettes.length > 0))
                    return;
                __VLS_ctx.removeSavedPalette(saved.id);
                // @ts-ignore
                [removeSavedPalette,];
            } }, { class: "mini-button delete" }));
        /** @type {__VLS_StyleScopedClasses['mini-button']} */ ;
        /** @type {__VLS_StyleScopedClasses['delete']} */ ;
        // @ts-ignore
        [];
    };
    for (var _y = 0, _z = __VLS_getVForSourceType((__VLS_ctx.filteredPalettes)); _y < _z.length; _y++) {
        var _0 = _z[_y], saved = _0[0], idx = _0[1];
        _loop_5(saved, idx);
    }
}
else if (__VLS_ctx.savedPalettes.length > 0 && __VLS_ctx.filteredPalettes.length === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "no-results" }));
    /** @type {__VLS_StyleScopedClasses['no-results']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (__VLS_ctx.searchQuery);
}
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "export-section" }));
/** @type {__VLS_StyleScopedClasses['export-section']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "export-buttons" }));
/** @type {__VLS_StyleScopedClasses['export-buttons']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.exportFormat = 'css';
        // @ts-ignore
        [savedPalettes, searchQuery, filteredPalettes, exportFormat,];
    } }, { class: "export-btn" }));
/** @type {__VLS_StyleScopedClasses['export-btn']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.exportFormat = 'scss';
        // @ts-ignore
        [exportFormat,];
    } }, { class: "export-btn" }));
/** @type {__VLS_StyleScopedClasses['export-btn']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.exportFormat = 'tailwind';
        // @ts-ignore
        [exportFormat,];
    } }, { class: "export-btn" }));
/** @type {__VLS_StyleScopedClasses['export-btn']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.exportFormat = 'json';
        // @ts-ignore
        [exportFormat,];
    } }, { class: "export-btn" }));
/** @type {__VLS_StyleScopedClasses['export-btn']} */ ;
if (__VLS_ctx.exportFormat) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "css-export" }));
    /** @type {__VLS_StyleScopedClasses['css-export']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
    (__VLS_ctx.exportTitles[__VLS_ctx.exportFormat]);
    __VLS_asFunctionalElement(__VLS_intrinsics.pre, __VLS_intrinsics.pre)(__assign({ class: "code-block" }));
    /** @type {__VLS_StyleScopedClasses['code-block']} */ ;
    (__VLS_ctx.exportedCode);
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.copyCodeToClipboard) }, { class: "copy-css-button" }));
    /** @type {__VLS_StyleScopedClasses['copy-css-button']} */ ;
}
if (__VLS_ctx.editingColorIndex !== null) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ onClick: (__VLS_ctx.closeEdit) }, { class: "modal-overlay" }));
    /** @type {__VLS_StyleScopedClasses['modal-overlay']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ onClick: function () { } }, { class: "modal-content" }));
    /** @type {__VLS_StyleScopedClasses['modal-content']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "color-edit-form" }));
    /** @type {__VLS_StyleScopedClasses['color-edit-form']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.input)(__assign({ type: "color" }, { class: "color-picker-large" }));
    (__VLS_ctx.editingColor);
    /** @type {__VLS_StyleScopedClasses['color-picker-large']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsics.input)(__assign({ type: "text", value: (__VLS_ctx.editingColor) }, { class: "color-input-large" }));
    /** @type {__VLS_StyleScopedClasses['color-input-large']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "modal-actions" }));
    /** @type {__VLS_StyleScopedClasses['modal-actions']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.saveEditedColor) }, { class: "btn-primary" }));
    /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.closeEdit) }, { class: "btn-secondary" }));
    /** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
}
// @ts-ignore
[exportFormat, exportFormat, exportTitles, exportedCode, copyCodeToClipboard, editingColorIndex, closeEdit, closeEdit, editingColor, editingColor, saveEditedColor,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'PaletteGenerator',
    setup: function () {
        var _this = this;
        var palette = (0, vue_1.ref)([]);
        var colorCount = (0, vue_1.ref)(5);
        var displayFormat = (0, vue_1.ref)('HEX');
        var pinnedColors = (0, vue_1.ref)(new Set());
        var showCopyNotification = (0, vue_1.ref)(false);
        var paletteType = (0, vue_1.ref)('harmonious');
        var moodType = (0, vue_1.ref)('none');
        var baseColor = (0, vue_1.ref)('#667EEA');
        var savedPalettes = (0, vue_1.ref)([]);
        var paletteName = (0, vue_1.ref)('');
        var paletteTags = (0, vue_1.ref)('');
        var searchQuery = (0, vue_1.ref)('');
        var showOnlyFavorites = (0, vue_1.ref)(false);
        var exportFormat = (0, vue_1.ref)('');
        var exportTitles = {
            css: 'CSS Variables',
            scss: 'SCSS Variables',
            tailwind: 'Tailwind Config',
            json: 'JSON',
        };
        var showColorWheel = (0, vue_1.ref)(false);
        var colorWheelCanvas = (0, vue_1.ref)(null);
        var editingColorIndex = (0, vue_1.ref)(null);
        var editingColor = (0, vue_1.ref)('');
        var hslToHex = function (h, s, l) {
            s /= 100;
            l /= 100;
            var c = (1 - Math.abs(2 * l - 1)) * s;
            var x = c * (1 - Math.abs(((h / 60) % 2) - 1));
            var m = l - c / 2;
            var r = 0, g = 0, b = 0;
            if (h >= 0 && h < 60) {
                r = c;
                g = x;
                b = 0;
            }
            else if (h >= 60 && h < 120) {
                r = x;
                g = c;
                b = 0;
            }
            else if (h >= 120 && h < 180) {
                r = 0;
                g = c;
                b = x;
            }
            else if (h >= 180 && h < 240) {
                r = 0;
                g = x;
                b = c;
            }
            else if (h >= 240 && h < 300) {
                r = x;
                g = 0;
                b = c;
            }
            else if (h >= 300 && h < 360) {
                r = c;
                g = 0;
                b = x;
            }
            var toHex = function (value) {
                var hex = Math.round((value + m) * 255).toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            };
            return "#".concat(toHex(r)).concat(toHex(g)).concat(toHex(b)).toUpperCase();
        };
        var hexToRgb = function (hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            if (result) {
                var r = parseInt(result[1], 16);
                var g = parseInt(result[2], 16);
                var b = parseInt(result[3], 16);
                return { r: r, g: g, b: b, string: "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") };
            }
            return null;
        };
        var hexToHsl = function (hex) {
            var rgb = hexToRgb(hex);
            if (!rgb)
                return { h: 0, s: 0, l: 0, string: 'hsl(0, 0%, 0%)' };
            var r = rgb.r / 255;
            var g = rgb.g / 255;
            var b = rgb.b / 255;
            var max = Math.max(r, g, b);
            var min = Math.min(r, g, b);
            var h = 0, s = 0;
            var l = (max + min) / 2;
            if (max !== min) {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
                        break;
                    case g:
                        h = ((b - r) / d + 2) / 6;
                        break;
                    case b:
                        h = ((r - g) / d + 4) / 6;
                        break;
                }
            }
            h = Math.round(h * 360);
            s = Math.round(s * 100);
            var lPercent = Math.round(l * 100);
            return { h: h, s: s, l: lPercent, string: "hsl(".concat(h, ", ").concat(s, "%, ").concat(lPercent, "%)") };
        };
        var applyMood = function (h, s, l) {
            switch (moodType.value) {
                case 'calm':
                    return { h: h, s: s * 0.6, l: l + 10 };
                case 'energetic':
                    return { h: h, s: Math.min(100, s * 1.2), l: l - 5 };
                case 'professional':
                    return { h: (h + 200) % 360, s: s * 0.7, l: l - 10 };
                case 'playful':
                    return {
                        h: (h + Math.random() * 60 - 30) % 360,
                        s: Math.min(100, s * 1.1),
                        l: l,
                    };
                default:
                    return { h: h, s: s, l: l };
            }
        };
        var generatePaletteByType = function (baseHue) {
            var colors = [];
            for (var i = 0; i < colorCount.value; i++) {
                if (pinnedColors.value.has(i) && palette.value[i]) {
                    colors.push(palette.value[i]);
                    continue;
                }
                var h = void 0, s = void 0, l = void 0;
                switch (paletteType.value) {
                    case 'monochromatic':
                        h = baseHue;
                        s = 70 - i * 15;
                        l = 30 + i * 15;
                        break;
                    case 'analogous':
                        h = (baseHue + i * 30 - 60) % 360;
                        s = 65 + Math.random() * 20;
                        l = 50 + Math.random() * 20;
                        break;
                    case 'complementary':
                        h = i % 2 === 0 ? baseHue : (baseHue + 180) % 360;
                        s = 70 + Math.random() * 20;
                        l = 45 + Math.random() * 20;
                        break;
                    case 'triadic':
                        h = (baseHue + i * 120) % 360;
                        s = 70 + Math.random() * 15;
                        l = 50 + Math.random() * 15;
                        break;
                    case 'tetradic':
                        h = (baseHue + i * 90) % 360;
                        s = 65 + Math.random() * 20;
                        l = 48 + Math.random() * 18;
                        break;
                    default:
                        h = (baseHue + (360 / colorCount.value) * i) % 360;
                        s = 70 - ((i * 5) % 30);
                        l = 45 + ((i * 10) % 25);
                }
                var adjusted = applyMood(h, s, l);
                var hex = hslToHex(adjusted.h, adjusted.s, adjusted.l);
                var rgb = hexToRgb(hex);
                var hsl = hexToHsl(hex);
                colors.push({ hex: hex, rgb: rgb.string, hsl: hsl.string });
            }
            palette.value = colors;
            savePaletteToLocalStorage();
        };
        var generatePalette = function () {
            var baseHue = Math.random() * 360;
            generatePaletteByType(baseHue);
        };
        var generateFromBase = function () {
            var hsl = hexToHsl(baseColor.value);
            generatePaletteByType(hsl.h);
        };
        var updateBaseColor = function () {
            if (baseColor.value.match(/^#[0-9A-F]{6}$/i)) {
                generateFromBase();
            }
        };
        var getLuminance = function (hex) {
            var rgb = hexToRgb(hex);
            if (!rgb)
                return 0;
            var rsRGB = rgb.r / 255;
            var gsRGB = rgb.g / 255;
            var bsRGB = rgb.b / 255;
            var r = rsRGB <= 0.03928
                ? rsRGB / 12.92
                : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
            var g = gsRGB <= 0.03928
                ? gsRGB / 12.92
                : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
            var b = bsRGB <= 0.03928
                ? bsRGB / 12.92
                : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        };
        var getContrastRatio = function (hex1, hex2) {
            var lum1 = getLuminance(hex1);
            var lum2 = getLuminance(hex2);
            var lighter = Math.max(lum1, lum2);
            var darker = Math.min(lum1, lum2);
            return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
        };
        var contrastCombinations = (0, vue_1.computed)(function () {
            var combinations = [];
            for (var i = 0; i < palette.value.length; i++) {
                for (var j = i + 1; j < palette.value.length; j++) {
                    var ratio = getContrastRatio(palette.value[i].hex, palette.value[j].hex);
                    combinations.push({
                        fg: palette.value[i].hex,
                        bg: palette.value[j].hex,
                        ratio: ratio,
                        levelAA: ratio >= 4.5,
                        levelAAA: ratio >= 7,
                    });
                }
            }
            return combinations.sort(function (a, b) { return b.ratio - a.ratio; }).slice(0, 6);
        });
        var suggestedAccents = (0, vue_1.computed)(function () {
            if (palette.value.length === 0)
                return [];
            var baseHsl = hexToHsl(palette.value[0].hex);
            var accents = [];
            accents.push(hslToHex((baseHsl.h + 180) % 360, baseHsl.s, baseHsl.l));
            accents.push(hslToHex((baseHsl.h + 120) % 360, baseHsl.s, baseHsl.l));
            accents.push(hslToHex((baseHsl.h + 240) % 360, baseHsl.s, baseHsl.l));
            return accents;
        });
        var addAccentToPalette = function (accent) {
            var rgb = hexToRgb(accent);
            var hsl = hexToHsl(accent);
            palette.value.push({ hex: accent, rgb: rgb.string, hsl: hsl.string });
        };
        var getColorValue = function (color) {
            switch (displayFormat.value) {
                case 'RGB':
                    return color.rgb;
                case 'HSL':
                    return color.hsl;
                default:
                    return color.hex;
            }
        };
        var copyToClipboard = function (text) { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, navigator.clipboard.writeText(text)];
                    case 1:
                        _a.sent();
                        showCopyNotification.value = true;
                        setTimeout(function () {
                            showCopyNotification.value = false;
                        }, 2000);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error('Ошибка копирования:', err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        var togglePin = function (index) {
            if (pinnedColors.value.has(index)) {
                pinnedColors.value.delete(index);
            }
            else {
                pinnedColors.value.add(index);
            }
        };
        var editColor = function (index) {
            editingColorIndex.value = index;
            editingColor.value = palette.value[index].hex;
        };
        var saveEditedColor = function () {
            if (editingColorIndex.value !== null) {
                var hex = editingColor.value;
                var rgb = hexToRgb(hex);
                var hsl = hexToHsl(hex);
                palette.value[editingColorIndex.value] = {
                    hex: hex,
                    rgb: rgb.string,
                    hsl: hsl.string,
                };
                closeEdit();
                savePaletteToLocalStorage();
            }
        };
        var closeEdit = function () {
            editingColorIndex.value = null;
            editingColor.value = '';
        };
        var savePaletteToLocalStorage = function () {
            localStorage.setItem('currentPalette', JSON.stringify(palette.value));
        };
        var savePalette = function () {
            var tags = paletteTags.value
                .split(',')
                .map(function (t) { return t.trim(); })
                .filter(function (t) { return t; });
            var newSavedPalette = {
                id: Date.now(),
                name: paletteName.value || "\u041F\u0430\u043B\u0438\u0442\u0440\u0430 ".concat(savedPalettes.value.length + 1),
                colors: JSON.parse(JSON.stringify(palette.value)),
                tags: tags,
                favorite: false,
                timestamp: new Date().toISOString(),
            };
            savedPalettes.value.unshift(newSavedPalette);
            localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes.value));
            paletteName.value = '';
            paletteTags.value = '';
            alert('Палитра сохранена!');
        };
        var loadPalette = function () {
            var saved = localStorage.getItem('currentPalette');
            if (saved) {
                palette.value = JSON.parse(saved);
                pinnedColors.value.clear();
                alert('Палитра загружена!');
            }
        };
        var applyPalette = function (saved) {
            palette.value = JSON.parse(JSON.stringify(saved.colors));
            colorCount.value = saved.colors.length;
            pinnedColors.value.clear();
        };
        var editSavedPalette = function (saved) {
            paletteName.value = saved.name;
            paletteTags.value = saved.tags ? saved.tags.join(', ') : '';
            applyPalette(saved);
            removeSavedPalette(saved.id);
        };
        var removeSavedPalette = function (id) {
            savedPalettes.value = savedPalettes.value.filter(function (p) { return p.id !== id; });
            localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes.value));
        };
        var toggleFavorite = function (id) {
            var palette = savedPalettes.value.find(function (p) { return p.id === id; });
            if (palette) {
                palette.favorite = !palette.favorite;
                localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes.value));
            }
        };
        var toggleFavorites = function () {
            showOnlyFavorites.value = !showOnlyFavorites.value;
        };
        var filteredPalettes = (0, vue_1.computed)(function () {
            var result = savedPalettes.value;
            if (showOnlyFavorites.value) {
                result = result.filter(function (p) { return p.favorite; });
            }
            if (searchQuery.value) {
                var query_1 = searchQuery.value.toLowerCase();
                result = result.filter(function (p) {
                    var nameMatch = p.name.toLowerCase().includes(query_1);
                    var tagsMatch = p.tags && p.tags.some(function (t) { return t.toLowerCase().includes(query_1); });
                    return nameMatch || tagsMatch;
                });
            }
            return result;
        });
        var exportedCode = (0, vue_1.computed)(function () {
            if (!exportFormat.value)
                return '';
            switch (exportFormat.value) {
                case 'css':
                    return ":root {\n".concat(palette.value
                        .map(function (c, i) { return "  --color-".concat(i + 1, ": ").concat(c.hex, ";"); })
                        .join('\n'), "\n}");
                case 'scss':
                    return palette.value
                        .map(function (c, i) { return "$color-".concat(i + 1, ": ").concat(c.hex, ";"); })
                        .join('\n');
                case 'tailwind':
                    var colors = palette.value.reduce(function (acc, c, i) {
                        acc["custom-".concat(i + 1)] = c.hex;
                        return acc;
                    }, {});
                    return "module.exports = {\n  theme: {\n    extend: {\n      colors: ".concat(JSON.stringify(colors, null, 8), "\n    }\n  }\n}");
                case 'json':
                    return JSON.stringify(palette.value.map(function (c, i) { return ({
                        name: "color-".concat(i + 1),
                        hex: c.hex,
                        rgb: c.rgb,
                        hsl: c.hsl,
                    }); }), null, 2);
                default:
                    return '';
            }
        });
        var copyCodeToClipboard = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, copyToClipboard(exportedCode.value)];
                    case 1:
                        _a.sent();
                        alert('Код скопирован в буфер обмена!');
                        return [2 /*return*/];
                }
            });
        }); };
        (0, vue_1.watch)(colorCount, function () {
            if (palette.value.length > 0) {
                generatePalette();
            }
        });
        (0, vue_1.watch)(paletteType, function () {
            if (palette.value.length > 0) {
                generatePalette();
            }
        });
        (0, vue_1.watch)(moodType, function () {
            if (palette.value.length > 0 && moodType.value !== 'none') {
                generatePalette();
            }
        });
        var drawColorWheel = function () {
            if (!colorWheelCanvas.value)
                return;
            var canvas = colorWheelCanvas.value;
            var ctx = canvas.getContext('2d');
            var centerX = canvas.width / 2;
            var centerY = canvas.height / 2;
            var radius = 140;
            // Clear canvas
            ctx.fillStyle = 'rgba(20, 34, 71, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Draw color wheel
            for (var angle = 0; angle < 360; angle += 1) {
                var hue = angle;
                var saturation = 100;
                var lightness = 50;
                // Convert HSL to RGB
                var h = hue / 60;
                var c = (1 - Math.abs(2 * (lightness / 100) - 1)) * (saturation / 100);
                var x = c * (1 - Math.abs((h % 2) - 1));
                var r = void 0, g = void 0, b = 0;
                if (h >= 0 && h < 1) {
                    r = c;
                    g = x;
                    b = 0;
                }
                else if (h >= 1 && h < 2) {
                    r = x;
                    g = c;
                    b = 0;
                }
                else if (h >= 2 && h < 3) {
                    r = 0;
                    g = c;
                    b = x;
                }
                else if (h >= 3 && h < 4) {
                    r = 0;
                    g = x;
                    b = c;
                }
                else if (h >= 4 && h < 5) {
                    r = x;
                    g = 0;
                    b = c;
                }
                else {
                    r = c;
                    g = 0;
                    b = x;
                }
                var m = lightness / 100 - c / 2;
                r = Math.round((r + m) * 255);
                g = Math.round((g + m) * 255);
                b = Math.round((b + m) * 255);
                ctx.fillStyle = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
                ctx.beginPath();
                var rad = (angle * Math.PI) / 180;
                var x1 = centerX + radius * Math.cos(rad);
                var y1 = centerY + radius * Math.sin(rad);
                var rad2 = ((angle + 1) * Math.PI) / 180;
                var x2 = centerX + radius * Math.cos(rad2);
                var y2 = centerY + radius * Math.sin(rad2);
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(x1, y1);
                ctx.arc(centerX, centerY, radius, rad, rad2);
                ctx.lineTo(centerX, centerY);
                ctx.fill();
            }
            // Draw center circle
            ctx.fillStyle = '#050812';
            ctx.beginPath();
            ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
            ctx.fill();
            // Draw border
            ctx.strokeStyle = 'rgba(68, 196, 255, 0.5)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.stroke();
        };
        (0, vue_1.watch)(showColorWheel, function (newVal) {
            if (newVal) {
                setTimeout(function () {
                    drawColorWheel();
                }, 50);
            }
        });
        var loadSavedPalettes = function () {
            var saved = localStorage.getItem('savedPalettes');
            if (saved) {
                savedPalettes.value = JSON.parse(saved);
            }
        };
        (0, vue_1.onMounted)(function () {
            generatePalette();
            loadSavedPalettes();
        });
        return {
            palette: palette,
            colorCount: colorCount,
            displayFormat: displayFormat,
            pinnedColors: pinnedColors,
            showCopyNotification: showCopyNotification,
            paletteType: paletteType,
            moodType: moodType,
            baseColor: baseColor,
            savedPalettes: savedPalettes,
            paletteName: paletteName,
            paletteTags: paletteTags,
            searchQuery: searchQuery,
            showOnlyFavorites: showOnlyFavorites,
            exportFormat: exportFormat,
            exportTitles: exportTitles,
            exportedCode: exportedCode,
            showColorWheel: showColorWheel,
            colorWheelCanvas: colorWheelCanvas,
            editingColorIndex: editingColorIndex,
            editingColor: editingColor,
            contrastCombinations: contrastCombinations,
            suggestedAccents: suggestedAccents,
            filteredPalettes: filteredPalettes,
            generatePalette: generatePalette,
            generateFromBase: generateFromBase,
            updateBaseColor: updateBaseColor,
            getColorValue: getColorValue,
            copyToClipboard: copyToClipboard,
            togglePin: togglePin,
            editColor: editColor,
            saveEditedColor: saveEditedColor,
            closeEdit: closeEdit,
            savePalette: savePalette,
            loadPalette: loadPalette,
            applyPalette: applyPalette,
            editSavedPalette: editSavedPalette,
            removeSavedPalette: removeSavedPalette,
            toggleFavorite: toggleFavorite,
            toggleFavorites: toggleFavorites,
            addAccentToPalette: addAccentToPalette,
            copyCodeToClipboard: copyCodeToClipboard,
            drawColorWheel: drawColorWheel,
        };
    },
});
