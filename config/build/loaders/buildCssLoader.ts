import MiniCssExtractPlugin from "mini-css-extract-plugin"
export function buildCssLoader(options: { isDev: boolean }) {


    return {
        test: /\.s[ac]ss$/i,
        use: [options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => {
                            return Boolean(resPath.includes('.module.'));
                        },
                        localIdentName: options.isDev ? 
                            '[path][name]__[local]' : '[hash:base64:8]'
                    },

                },
            },
            'sass-loader'
        ],
    }
}