export declare const validateRegistrationInput: (body: unknown, errorMessage?: string | undefined) => Promise<import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    registrationToken: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    userInfo: any;
}>>>;
export declare const validateRegistrationInfoQuery: (body: unknown, errorMessage?: string | undefined) => Promise<any>;
export declare const validateAdminRegistrationInput: (body: unknown, errorMessage?: string | undefined) => Promise<any>;
declare const _default: {
    validateRegistrationInput: (body: unknown, errorMessage?: string | undefined) => Promise<import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
        registrationToken: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        userInfo: any;
    }>>>;
    validateRegistrationInfoQuery: (body: unknown, errorMessage?: string | undefined) => Promise<any>;
    validateAdminRegistrationInput: (body: unknown, errorMessage?: string | undefined) => Promise<any>;
};
export default _default;
//# sourceMappingURL=register.d.ts.map