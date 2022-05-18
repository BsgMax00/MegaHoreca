const withImages = require("next-images");
module.exports = withImages({
    reactStrictMode: true,
    experimental: {
        reactRefresh: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [
            'picsum.photos',
            'uc82b3fb6939cae5881e9e0faea8.previews.dropboxusercontent.com',
            'ucb739242fb48b39c57bb5535970.previews.dropboxusercontent.com',
            'uc69807d1dd8bd3f386c38efdf6d.previews.dropboxusercontent.com',
            "uca6267e7646f032061ea0316468.previews.dropboxusercontent.com",
            "ucf2cef1dbc347709e58bfb77b51.previews.dropboxusercontent.com",
            "uc9d1ac3491fb217165363a1ce09.previews.dropboxusercontent.com",
            "uc6a76bf9351700626a88c248223.previews.dropboxusercontent.com",
            "ucf2fc173c65c0cf4a945ec41813.previews.dropboxusercontent.com",
            "ucc7f97cf0077e02a0972c11f040.previews.dropboxusercontent.com",
            "ucfe2694c49d501f813dcca3763c.previews.dropboxusercontent.com",
            "ucf5cd5e6cb1680874a938eb76bd.previews.dropboxusercontent.com",
            "ucef29dcf53193da83ebb1c33f18.previews.dropboxusercontent.com",
            "ucdadf96d16150ff922fb34dcee2.previews.dropboxusercontent.com",
            "ucc6a4ddb6cd3911c53b1461d340.previews.dropboxusercontent.com",
            "uc44e78b6f618c2c75633492afe6.previews.dropboxusercontent.com",
            "uc99650893f7f44dfb30faf2133b.previews.dropboxusercontent.com",
            "uca88a38076cbdbae66a9d37be87.previews.dropboxusercontent.com",
            "uc07a66f1ecbe1338fe78090808f.previews.dropboxusercontent.com",
            "ucf1c88fc0c42a60ec0a3a6c0583.previews.dropboxusercontent.com",
            "uc2b802e906dbb694927bd26962c.previews.dropboxusercontent.com",
            "uc488989ec85725b0b4aa5110e20.previews.dropboxusercontent.com",
            "uc1f5dc9da34105153234b343901.previews.dropboxusercontent.com",
            "uca1976b1005f158ab9853500d89.previews.dropboxusercontent.com",
            "uc6a32f7544669b878a60426d73b.previews.dropboxusercontent.com",
            "uca6fbe52a4e5d636f04e985cbea.previews.dropboxusercontent.com",
            "uc0b76c9ed29ea0d3c983bb04f65.previews.dropboxusercontent.com",
            "uc67a2b00e5a77ae3367e02d2723.previews.dropboxusercontent.com",
            "uc9003b2602120dbcdf1c1798e27.previews.dropboxusercontent.com",
            "ucaf8b091f8ef091aef0c2faa151.previews.dropboxusercontent.com/"
        ],
        disableStaticImages: true
    }
});
