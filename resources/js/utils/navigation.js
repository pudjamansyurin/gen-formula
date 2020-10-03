export const navigations = [
    { heading: "DASHBOARD" },
    // {
    //     icon: "mdi-chart-areaspline",
    //     text: "Report",
    //     to: "report",
    //     bottomNav: true
    // },
    {
        text: "Sale",
        to: "sale",
        icon: "mdi-currency-usd",
        bottomNav: true
    },
    {
        text: "Formula",
        to: "formula",
        icon: "mdi-microsoft-excel",
        bottomNav: true
    },
    {
        text: "Materials",
        model: false,
        icon: "mdi-palette",
        children: [
            { text: "Material", to: "material", icon: "mdi-format-color-fill" },
            {
                text: "Matter",
                to: "matter",
                icon: "mdi-spray"
            }
        ]
    },
    {
        text: "Packages",
        model: false,
        icon: "mdi-package",
        children: [
            {
                text: "Package",
                to: "package",
                icon: "mdi-package-variant-closed"
            },
            {
                text: "Packer",
                to: "packer",
                icon: "mdi-package-variant"
            },
            {
                text: "Pack",
                to: "pack",
                icon: "mdi-paper-cut-vertical"
            }
        ]
    },
    { text: "User", to: "user", icon: "mdi-account-group" }
    // { icon: "mdi-account-cog", text: "Profile", to: "profile" }
    // { icon: "mdi-cogs", text: "Setting", to: "setting" }
    //     { icon: "mdi-content-copy", text: "Duplicates" }
    // {
    //     icon: "mdi-chevron-up",
    //     "icon-alt": "mdi-chevron-down",
    //     text: "Labels",
    //     model: true,
    //     children: [{ icon: "mdi-plus", text: "Create label" }]
    // },
];
