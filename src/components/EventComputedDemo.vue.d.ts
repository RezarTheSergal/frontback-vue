declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<{}, {
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
