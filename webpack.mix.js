const mix = require("laravel-mix");
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
// mix.babelConfig({
//     plugins: ["@babel/plugin-syntax-dynamic-import"] // important to install -D
// });

mix.config.webpackConfig.output = {
    chunkFilename: "js/[name].js?id=[chunkhash]",
    publicPath: "/"
};

mix.js("resources/js/app.js", "public/js");
// .extract(["vue"]);
// .webpackConfig({
//     resolve: {
//         alias: {
//             "@": path.resolve("resources/js/") // just to use relative path properly
//         }
//     }
// });
// mix.webpackConfig({
//     resolve: {
//         extensions: [".js", ".vue"],
//         alias: { "@": __dirname + "/resources/js/" }
//     }
// });
mix.sass("resources/sass/app.scss", "public/css");

if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps();
    mix.browserSync({
        proxy: "gen-formula.test",
        port: 8080
        // open: "external"
    });
}
