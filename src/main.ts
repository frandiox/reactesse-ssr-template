import 'windi.css'
import './styles/main.css'
import viteSSR from 'vite-ssr/react'
import routes from 'virtual:generated-pages'
import App from './App'
import { PropsProvider } from './api'

import { installI18n, extractLocaleFromPath, DEFAULT_LOCALE } from './i18n'

routes.forEach((route) => {
  const { path } = route
  route.name =
    path
      .replace(/^\//, '')
      .replace(/:/, '')
      .replace(/\//, '-')
      .replace('all(.*)', 'not-found') || 'home'

  route.path = route.path.includes('*') ? '*' : route.path
})

// https://github.com/frandiox/vite-ssr
export default viteSSR(
  App,
  {
    routes,
    PropsProvider,
    // Use Router's base for i18n routes
    base: ({ url }) => {
      const locale = extractLocaleFromPath(url.pathname)
      return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`
    },
  },
  async (ctx) => {
    const { url, initialState } = ctx

    // Load language asyncrhonously to avoid bundling all languages
    await installI18n(extractLocaleFromPath(url.pathname))

    // Freely modify initialState and it will be serialized later
    if (import.meta.env.SSR) {
      initialState.test = 'This should appear in page-view-source'
      // This object can be passed to a store
    } else {
      // In browser, initialState will be hydrated with data from SSR
      console.log('Initial state:', initialState)
    }
  }
)
