import DefaultTheme from "vitepress/theme";
import BeansUI from "../../../components/packages/index.js"
import "vitepress-theme-demoblock/theme/styles/index.css"
import { registerComponents } from './register-components'

export default {
  ...DefaultTheme,
  enhanceApp: async ({app, router, siteData, isServer}) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    registerComponents(app)
    app.use(BeansUI)
  },
};
