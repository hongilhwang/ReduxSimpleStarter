var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    // entry부터 시작하여 의존성 모듈을 호출한다.
    entry: ['react-hot-loader/patch', './src/index.js'],

    //결과를 저장한다.
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    //개발서버 설정
    devServer: {
        hot: true,//파일이 변경이 있으면 재리로딩을 한다.
        inline: true,//hot리로딩이 필요한 파일을 bundle에 같이 넣어준다.
        host: '0.0.0.0', //서버를 리로딩할 주소 default = localhost
        port: 4000,
        contentBase: __dirname + '/public/',//index file의 위치
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-1', 'react'],
                    plugins: ["react-hot-loader/babel"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    }, // END MODULE

    plugins: [
        new webpack.HotModuleReplacementPlugin() //hot리로딩의 플러그인
    ]
};



