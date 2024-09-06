"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const strapiAdmin = require("@strapi/admin/strapi-admin");
const designSystem = require("@strapi/design-system");
const icons = require("@strapi/icons");
const symbols = require("@strapi/icons/symbols");
const reactIntl = require("react-intl");
const PurchaseContentReleases = () => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsx(strapiAdmin.Layouts.Root, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      strapiAdmin.Layouts.Header,
      {
        title: formatMessage({
          id: "content-releases.pages.Releases.title",
          defaultMessage: "Releases"
        }),
        subtitle: formatMessage({
          id: "content-releases.pages.PurchaseRelease.subTitle",
          defaultMessage: "Manage content updates and releases."
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 10, paddingRight: 10, children: /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.EmptyStateLayout,
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(symbols.EmptyPermissions, { width: "16rem" }),
        content: formatMessage({
          id: "content-releases.pages.PurchaseRelease.not-available",
          defaultMessage: "Releases is only available as part of a paid plan. Upgrade to create and manage releases."
        }),
        action: /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.LinkButton,
          {
            variant: "default",
            endIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.ExternalLink, {}),
            href: "https://strapi.io/pricing-self-hosted?utm_campaign=Growth-Experiments&utm_source=In-Product&utm_medium=Releases",
            isExternal: true,
            target: "_blank",
            children: formatMessage({
              id: "global.learn-more",
              defaultMessage: "Learn more"
            })
          }
        )
      }
    ) })
  ] }) });
};
exports.PurchaseContentReleases = PurchaseContentReleases;
//# sourceMappingURL=PurchaseContentReleases-Be3acS2L.js.map
