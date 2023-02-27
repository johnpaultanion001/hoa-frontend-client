const webpack = require("webpack");

module.exports = {
    configureWebpack: {
        devServer: {
            compress: true,
            host: "127.0.0.1",
            port: 8080,
            public: "test.localhost:8080",
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                Popper: ["popper.js", "default"],
                // In case you imported plugins individually, you must also require them here:
                Util: "exports-loader?Util!bootstrap/js/dist/util",
                Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
                // ...~
            }),
            // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        ],
    },

    pluginOptions: {},
};
