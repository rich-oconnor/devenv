import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

//console.log(__dirname);
export default {
    mode: "development",
    devtool: "inline-source-map",
    //noInfo: false,
    entry: {
        fontawesome: path.resolve(__dirname, "src/fontawesome"),
        bootstrap: path.resolve(__dirname, "src/bootstrap"),
        vendor: path.resolve(__dirname, "src/vendor"),
        main: path.resolve(__dirname, "src/index")
    },
    optimization: {
        splitChunks: {
          chunks: "all"
        }
    },
    target: "web",
    output: {
        path: path.resolve(__dirname, "bin"),
        publicPath: "/",
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        debug: true,
        noInfo: false
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            injext: true
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
