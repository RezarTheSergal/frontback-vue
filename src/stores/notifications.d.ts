export interface Notification {
    id: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
}
export declare const useNotificationsStore: import("pinia").StoreDefinition<"notifications", Pick<{
    notifications: import("vue").Ref<{
        id: string;
        message: string;
        type: "success" | "error" | "warning" | "info";
        duration?: number;
    }[], Notification[] | {
        id: string;
        message: string;
        type: "success" | "error" | "warning" | "info";
        duration?: number;
    }[]>;
    addNotification: (message: string, type?: "success" | "error" | "warning" | "info", duration?: number) => string;
    removeNotification: (id: string) => void;
    clearAll: () => void;
}, "notifications">, Pick<{
    notifications: import("vue").Ref<{
        id: string;
        message: string;
        type: "success" | "error" | "warning" | "info";
        duration?: number;
    }[], Notification[] | {
        id: string;
        message: string;
        type: "success" | "error" | "warning" | "info";
        duration?: number;
    }[]>;
    addNotification: (message: string, type?: "success" | "error" | "warning" | "info", duration?: number) => string;
    removeNotification: (id: string) => void;
    clearAll: () => void;
}, never>, Pick<{
    notifications: import("vue").Ref<{
        id: string;
        message: string;
        type: "success" | "error" | "warning" | "info";
        duration?: number;
    }[], Notification[] | {
        id: string;
        message: string;
        type: "success" | "error" | "warning" | "info";
        duration?: number;
    }[]>;
    addNotification: (message: string, type?: "success" | "error" | "warning" | "info", duration?: number) => string;
    removeNotification: (id: string) => void;
    clearAll: () => void;
}, "removeNotification" | "addNotification" | "clearAll">>;
