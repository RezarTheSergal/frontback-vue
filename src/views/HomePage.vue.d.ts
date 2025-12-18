declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<{}, {
    currentDemo: import("vue").Ref<string, string>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    ReactiveDemo: import("vue").DefineComponent<{}, {
        userName: import("vue").Ref<string, string>;
        userBio: import("vue").Ref<string, string>;
        selectedTech: import("vue").Ref<string, string>;
        isSubscribed: import("vue").Ref<boolean, boolean>;
        experienceLevel: import("vue").Ref<string, string>;
        getTechName: (tech: any) => any;
        getExperienceText: (level: any) => any;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ConditionalListDemo: import("vue").DefineComponent<{}, {
        newTechName: import("vue").Ref<string, string>;
        technologies: import("vue").Ref<any[], any[]>;
        showCompleted: import("vue").Ref<boolean, boolean>;
        sortBy: import("vue").Ref<string, string>;
        activeCount: import("vue").ComputedRef<number>;
        completedCount: import("vue").ComputedRef<number>;
        progressPercentage: import("vue").ComputedRef<number>;
        sortedTechnologies: import("vue").ComputedRef<any[]>;
        addTechnology: () => void;
        removeTechnology: (id: any) => void;
        completeTechnology: (id: any) => void;
        formatDate: (dateString: any) => string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    EventComputedDemo: import("vue").DefineComponent<{}, {
        elapsedTime: import("vue").Ref<number, number>;
        isRunning: import("vue").Ref<boolean, boolean>;
        studySessions: import("vue").Ref<any[], any[]>;
        totalSessions: import("vue").ComputedRef<number>;
        totalStudyTime: import("vue").ComputedRef<any>;
        averageSessionTime: import("vue").ComputedRef<number>;
        sortedSessions: import("vue").ComputedRef<any[]>;
        startTimer: () => void;
        pauseTimer: () => void;
        resetTimer: () => void;
        removeSession: (sessionId: any) => void;
        addQuickSession: (minutes: any) => void;
        addOneTimeSession: () => void;
        formatTime: (seconds: any) => string;
        formatDate: (dateString: any) => string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    UserCards: import("vue").DefineComponent<{}, {
        notificationsStore: import("pinia").Store<"notifications", Pick<{
            notifications: import("vue").Ref<{
                id: string;
                message: string;
                type: "success" | "error" | "warning" | "info";
                duration?: number;
            }[], import("../stores/notifications.js").Notification[] | {
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
            }[], import("../stores/notifications.js").Notification[] | {
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
            }[], import("../stores/notifications.js").Notification[] | {
                id: string;
                message: string;
                type: "success" | "error" | "warning" | "info";
                duration?: number;
            }[]>;
            addNotification: (message: string, type?: "success" | "error" | "warning" | "info", duration?: number) => string;
            removeNotification: (id: string) => void;
            clearAll: () => void;
        }, "removeNotification" | "addNotification" | "clearAll">>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
