const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "hidden-source-map",
    output: {
        publicPath: "http://localhost:3002/",
        clean: true,
    },
    resolve: {
        extensions: [
            ".jsx",
            ".js",
            ".json",
            ".css",
            ".scss",
            ".jpg",
            "jpeg",
            "png",
        ],
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: "url-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app2",
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/App.jsx",
            },
        }
        ),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};