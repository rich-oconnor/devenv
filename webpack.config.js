import path from "path";

export default {
    mode: "development",
    //debug: true,
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
        noInfo: false
    },
    plugins: [],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]},
            {test: /\.css$/, loaders: ["style","css"]}
        ]
    }
}
