/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  plugins: ['@snowpack/plugin-sass', '@snowpack/plugin-typescript'],
  mount: {
    src: '/',
  },
}
