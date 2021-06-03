const webpack = require("webpack");
const path = require('path');
const { styles } = require("@ckeditor/ckeditor5-dev-utils");

module.exports = {
    module: {
        rules: [
            {
                test: /ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/,
                use: ['babel-loader']
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: ["raw-loader"]
            },
            {
                test: /ckeditor5-[^/\\]+[/\\].+\.css$/,
                use: [{
                    loader: 'style-loader',
                    options: {
                      singleton: true
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: styles.getPostCssConfig( {
                      themeImporter: {
                        themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
                      },
                      minify: true
                    } )
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false
                    }
                }]
            }
        ]
    },

    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            '~': path.resolve('resources'),
        },
    },

    plugins: [
        new webpack.ProvidePlugin({
          cash: "cash-dom",
          Popper: "@popperjs/core"
        })
    ]
};
