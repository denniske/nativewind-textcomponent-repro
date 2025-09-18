module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
        plugins: [
            '@babel/plugin-proposal-export-namespace-from', // for reanimated web
            // actually this is added by default in babel-preset-expo
            // https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/#react-native-community-cli
            // 'react-native-worklets/plugin',
        ],
    };
};