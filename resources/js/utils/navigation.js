export const navs = [
    { divider: true },
    { heading: "DASHBOARD" },
    {
        icon: "mdi-chart-areaspline",
        text: "Report",
        to: "report",
        bottomNav: true
    },
    {
        icon: "mdi-microsoft-excel",
        text: "Formula",
        to: "formula",
        bottomNav: true
    },
    {
        icon: "mdi-package-variant-closed",
        text: "Product",
        to: "product",
        bottomNav: true
    },
    { icon: "mdi-currency-usd", text: "Price", to: "price", bottomNav: true },
    { divider: true },
    { heading: "CONFIGURATION" },
    { icon: "mdi-account-group", text: "User", to: "user" },
    { icon: "mdi-account-cog", text: "Profile", to: "profile" }
    // { icon: "mdi-cogs", text: "Setting", to: "setting" }
    //     { icon: "mdi-content-copy", text: "Duplicates" }
    // {
    //     icon: "mdi-chevron-up",
    //     "icon-alt": "mdi-chevron-down",
    //     text: "Labels",
    //     model: true,
    //     children: [{ icon: "mdi-plus", text: "Create label" }]
    // },
    // {
    //     icon: "mdi-chevron-up",
    //     "icon-alt": "mdi-chevron-down",
    //     text: "More",
    //     model: false,
    //     children: [
    //         { text: "Import" },
    //         { text: "Export" },
    //         { text: "Print" },
    //         { text: "Undo changes" },
    //         { text: "Other contacts" }
    //     ]
    // }
];
