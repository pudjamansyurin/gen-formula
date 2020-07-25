const production = process.env.NODE_ENV === "production";

export default {
    APP_NAME: process.env.MIX_APP_NAME,
    APP_URL: production
        ? process.env.MIX_APP_PROD_URL
        : process.env.MIX_APP_URL,
    ENV_PRODUCTION: production,
    DEBUG: process.env.MIX_APP_DEBUG === "true"
};
