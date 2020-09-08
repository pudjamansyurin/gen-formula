const mix = require("laravel-mix");
const homedir = require("os").homedir();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.config.webpackConfig.output = {
    chunkFilename: "js/[name].js?id=[chunkhash]",
    publicPath: "/"
};

mix.js("resources/js/app.js", "public/js");
mix.sass("resources/sass/app.scss", "public/css");

mix.version();

if (mix.inProduction()) {
    // mix.version();
} else {
    mix.sourceMaps();

    const domain = "gen-formula.test";
    mix.browserSync({
        proxy: "https://" + domain,
        host: domain,
        open: "external",
        port: 3000,
        https: {
            key: homedir + "/.valet/Certificates/" + domain + ".key",
            cert: homedir + "/.valet/Certificates/" + domain + ".crt"
        }
    });
}
