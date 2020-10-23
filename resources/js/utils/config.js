const production = process.env.NODE_ENV === "production";

export const config = {
    APP_NAME: process.env.MIX_APP_NAME,
    APP_URL: production
        ? process.env.MIX_APP_PROD_URL
        : process.env.MIX_APP_URL,
    DEBUG: !production
    // DEBUG: process.env.MIX_APP_DEBUG === "true"
};

export const tableOptions = {
    page: 1,
    itemsPerPage: 10,
    multiSort: false,
    mustSort: true,
    groupBy: [],
    groupDesc: [],
    sortBy: ["updated_at"],
    sortDesc: [true],
    search: "",
    mine: false
};
