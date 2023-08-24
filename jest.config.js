// module.exports = {
//     preset: '@vue/cli-plugin-unit-jest',
//     transform: {
//       '^.+\\.vue$': 'vue-jest'
//     }
//   }

module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    collectCoverage: true,
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        "\\.[jt]sx?$": "babel-jest",

      },
      verbose: true,
      moduleNameMapper: {
        axios: 'axios/dist/node/axios.cjs',
    },
      
  }