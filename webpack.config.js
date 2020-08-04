var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
   entry: {
       app: './src/index.jsx'
   },
   output: {
       path: path.resolve(__dirname, 'dist'),
       filename: '[name].js'
   },
   mode:'development',
   module: {
       rules: [
        //    {
        //        test: /\.scss$/,
        //        use: ExtractTextPlugin.extract({
        //            fallback: 'style-loader',
        //            use: ['css-loader','sass-loader'],
        //            publicPath: 'dist'
        //        })
        //    },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
                ],
            },
           {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               use: {loader:'babel-loader'}
           },
        //    {
        //        test: /\.(jpe?g|png|gif|svg)$/i,
        //        use: [
        //            'file-loader?name=[name].[ext]&outputPath=images/&publicPath=http://localhost:8080/WP-React/wp-content/themes/ShaysWP-React/dist/images',
        //            'image-webpack-loader'
        //        ]
        //    },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]?[hash]',
                            publicPath:'/'
                        }
                    },
                ],
            },
           { test:
               /\.(woff2?|svg)$/,
               loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
           },
           {
               test: /\.(ttf|eot)$/,
               loader: 'file-loader?name=fonts/[name].[ext]'
           }
       ]
   },
   resolve: {
       extensions: ['.js', '.jsx']
   },
   plugins: [
       new ExtractTextPlugin({
           filename: "style.css",
           allChunks: true
       })
   ]
}