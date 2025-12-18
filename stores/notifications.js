"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNotificationsStore = void 0;
var pinia_1 = require("pinia");
var vue_1 = require("vue");
exports.useNotificationsStore = (0, pinia_1.defineStore)('notifications', function () {
    var notifications = (0, vue_1.ref)([]);
    var notificationId = 0;
    var addNotification = function (message, type, duration) {
        if (type === void 0) { type = 'info'; }
        if (duration === void 0) { duration = 3000; }
        var id = "notification-".concat(++notificationId);
        var notification = {
            id: id,
            message: message,
            type: type,
            duration: duration,
        };
        notifications.value.push(notification);
        if (duration > 0) {
            setTimeout(function () {
                removeNotification(id);
            }, duration);
        }
        return id;
    };
    var removeNotification = function (id) {
        var index = notifications.value.findIndex(function (n) { return n.id === id; });
        if (index > -1) {
            notifications.value.splice(index, 1);
        }
    };
    var clearAll = function () {
        notifications.value = [];
    };
    return {
        notifications: notifications,
        addNotification: addNotification,
        removeNotification: removeNotification,
        clearAll: clearAll,
    };
});
