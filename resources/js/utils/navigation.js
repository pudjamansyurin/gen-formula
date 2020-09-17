export const navigations = [
    { heading: "DASHBOARD" },
    // {
    //     icon: "mdi-chart-areaspline",
    //     text: "Report",
    //     to: "report",
    //     bottomNav: true
    // },
    {
        text: "Formula",
        to: "formula",
        icon: "mdi-microsoft-excel",
        bottomNav: true
    },
    {
        text: "Materials",
        model: false,
        icon: "mdi-package-variant-closed",
        children: [
            { text: "Material", to: "material", icon: "mdi-package" },
            {
                text: "Matter",
                to: "matter",
                icon: "mdi-package-variant"
            }
        ]
    },
    // {
    //     text: "Material",
    //     to: "material",
    //     icon: "mdi-package",
    //     bottomNav: true
    // },
    // {
    //     text: "Matter",
    //     to: "matter",
    //     icon: "mdi-package-variant",
    //     bottomNav: true
    // },
    { text: "User", to: "user", icon: "mdi-account-group" }
    // { icon: "mdi-currency-usd", text: "Price", to: "price", bottomNav: true },
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
