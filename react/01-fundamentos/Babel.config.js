module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript", // Corrigido o nome do preset
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // Configuração para o novo JSX runtime do React 17+
      },
    ],
  ],
};