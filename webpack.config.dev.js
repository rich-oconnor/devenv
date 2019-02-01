import path from "path";
//console.log(__dirname);
export default {
    mode: "development",
    devtool: "inline-source-map",
    //noInfo: false,
    entry: [
        path.resolve(__dirname, "src/index")
    ],
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
    plugins: [],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]},
            {test: /\.css$/, loaders: ["style-loader","css-loader"]}
        ]
    }
}
