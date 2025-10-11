
import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { buildCssLoader } from "./loaders/buildCssLoader"
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    const babelLoader = {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
    const cssLoader = buildCssLoader(options);
    return [

        fileLoader,

        svgLoader,
        babelLoader,
        typeScriptLoader,
        cssLoader,
    ]
}