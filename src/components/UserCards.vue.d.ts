declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<{}, {
    notificationsStore: import("pinia").Store<"notifications", Pick<{
        notifications: import("vue").Ref<{
            id: string;
            message: string;
            type: "success" | "error" | "warning" | "info";
            duration?: number;
        }[], import("../stores/notifications").Notification[] | {
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
        }[], import("../stores/notifications").Notification[] | {
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
        }[], import("../stores/notifications").Notification[] | {
            id: string;
            message: string;
            type: "success" | "error" | "warning" | "info";
            duration?: number;
        }[]>;
        addNotification: (message: string, type?: "success" | "error" | "warning" | "info", duration?: number) => string;
        removeNotification: (id: string) => void;
        clearAll: () => void;
    }, "addNotification" | "removeNotification" | "clearAll">>;
}, {
    adminUser: {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    users: {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
}, {}, {
    handleUserClick(user: any): void;
    editUser(user: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    UserCard: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        user: {
            type: ObjectConstructor;
            required: true;
            validator: (value: unknown) => any;
        };
        isActive: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {}, {
        localClicks: number;
    }, {}, {
        handleClick(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        user: {
            type: ObjectConstructor;
            required: true;
            validator: (value: unknown) => any;
        };
        isActive: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        isActive: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
