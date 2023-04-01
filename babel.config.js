module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
          root: ["."],
          alias: {
            "@components": "./src/components",
            "@config": "./src/config",
            "@database": "./src/database",
            "@contexts": "./src/contexts",
            "@graphql": "./src/graphql",
            "@hooks": "./src/hooks",
            "@i18n": "./src/i18n",
            "@navigators": "./src/navigators",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@styles": "./src/styles",
            "@types": "./src/types",
            "@utils": "./src/utils",
          },
        },
      ],
      'babel-plugin-transform-typescript-metadata',
    ],
  };
};
