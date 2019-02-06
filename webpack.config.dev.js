import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

//console.log(__dirname);
export default {
    mode: "development",
    devtool: "inline-source-map",
    //noInfo: false,
    entry: {
        main: path.resolve(__dirname, "src/index")
    },
    target: "web",
    output: {
        path: path.resolve(__dirname, "src"),
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        debug: true,
        noInfo: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            injext: true
        })
    ],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]},
            {test: /\.css$/, loaders: ["style-loader","css-loader"]},
            {
                test: /\.(scss)$/,
                use: [
                        {
                            // Adds CSS to the DOM by injecting a `<style>` tag
                            loader: 'style-loader'
                        },
                        {
                            // Interprets `@import` and `url()` like `import/require()` and will resolve them
                            loader: 'css-loader'
                        },
                        {
                            // Loader for webpack to process CSS with PostCSS
                            loader: 'postcss-loader',
                            options: {
                            plugins: function () {
                                return [
                                require('autoprefixer')
                                ];
                            }
                        }
                        },
                        {
                            // Loads a SASS/SCSS file and compiles it to CSS
                            loader: 'sass-loader'
                        }
                    ]
            }
        ]
    }
}
