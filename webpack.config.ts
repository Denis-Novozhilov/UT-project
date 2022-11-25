import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

// export default config;
export default (env: BuildEnv) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths, 
        isDev,
        port: PORT,
    });

    return config;
};

// const { watch } = require('fs');

// // Ctrl + C is super duper slow because it has to close a bunch of fs.watch handles. Let's just skip
// // all that.
// // https://github.com/webpack/webpack-dev-server/issues/1479
// process.once('SIGINT', () => {
//     Object.getPrototypeOf(watch('.')).close = () => {};
//     return true;
// });