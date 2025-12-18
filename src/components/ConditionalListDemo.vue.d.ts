declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<{}, {
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
