require('dotenv').config({ path: '.env' });
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');


module.exports = withPlugins(
    [
        [withImages, {}]
    ],
    {
        serverRuntimeConfig: {
            // Will only be available on the server side
            mySecret: 'secret',
            secondSecret: process.env.SECOND_SECRET, // Pass through env variables
        },
        publicRuntimeConfig: {
            // Will be available on both server and client
            API_ENDPOINT_LOCAL: process.env.REACT_APP_NODEJS,
            API_ENDPOINT_HEROKU: process.env.REACT_APP_HEROKU,
            API_ENDPOINT_PROGFY: process.env.REACT_APP_PROGFY
        },
        useFileSystemPublicRoutes: false,
        webpack(config, options) {
            config.module.rules.push({
              test: /\.zip$/,
              use: {
                loader: 'file-loader',
              },
            });
            return config;
          }
    }
);

// withImages({
//     serverRuntimeConfig: {
//         // Will only be available on the server side
//         mySecret: 'secret',
//         secondSecret: process.env.SECOND_SECRET, // Pass through env variables
//     },
//     publicRuntimeConfig: {
//         // Will be available on both server and client
//         API_ENDPOINT_LOCAL: process.env.REACT_APP_NODEJS,
//         API_ENDPOINT_HEROKU: process.env.REACT_APP_HEROKU,
//         API_ENDPOINT_PROGFY: process.env.REACT_APP_PROGFY
//     },
//     useFileSystemPublicRoutes: false
// });
