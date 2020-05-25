const path = require('path'); //módulo do próprio nodejs, ja que o node que o rodará

module.exports = {
    //primeiro arquivo a ser carregado, onde estará
    entry: path.resolve(__dirname, 'src', 'index.js'),
    //o que sairá e onde
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    //regras, qual loaders usará em cada tipo de arquivo
    module: {
        rules: [
            //cada objeto abaixo é um loader
            {
                //com expressão regular $ -> terminada em .js e não apenas que possuem .js
                test: /\.js$/,
                //se não tiver na pasta node-moduler
                exclude: /node_modules/,
                //neste caso use babel-loader para  fazer a conversão
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /.*\.(png|gif|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}