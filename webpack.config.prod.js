import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackMd5Hash from "webpack-md5-hash";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

//import webpack from "webpack";

//console.log(__dirname);
export default {
    mode: "production",
    devtool: "source-map",
    //noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, "src/vendor"),
        main: path.resolve(__dirname, "src/index")
    },
    target: "web",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        debug: true,
        noInfo: false
    },
    optimization: {
        splitChunks: {
          chunks: "all"
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          }),
        // Hash the files using MD5 so that their names change when the content changes.
        new WebpackMd5Hash(),

        new HtmlWebpackPlugin({
            template: "src/index.html",
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true
            },
            injext: true,

        })
    ],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]},
            {test: /\.css$/, use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
              ]}
        ]
    }
}
