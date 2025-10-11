import webpack from "webpack"
import path from "path"
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";


export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths ={
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname,'..','..','src'),
    }
    
    config.resolve = config.resolve || {};
    config.resolve.modules = config.resolve.modules || [];
    config.resolve.modules.push(paths.src);
    config.resolve.extensions = config.resolve.extensions || [];
    config.resolve.extensions.push('.ts', '.tsx');
    
    config.module ??= {};
    config.module.rules ??= [];
    config.module.rules.push(buildCssLoader({ isDev: true }));
    return config;
}