"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import type { Core } from '@strapi/strapi';
const bootstrap_1 = require("./bootstrap");
exports.default = {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register( /* { strapi }: { strapi: Core.Strapi } */) { },
    /**
     * An asynchronous bootstrap function that runs before
     * your application gets started.
     *
     * This gives you an opportunity to set up your data model,
     * run jobs, or perform some special logic.
     */
    bootstrap: bootstrap_1.bootstrap,
};
