import path from 'path'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import WindiCSS from 'vite-plugin-windicss'
import viteSSR from 'vite-ssr/plugin'
import reactRefresh from '@vitejs/plugin-react-refresh'
import getPageProps from './serverless/api/get-page-props'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    viteSSR(),
    reactRefresh(),
    {
      name: 'API-mock',
      configureServer({ middlewares }) {
        middlewares.use('/api/get-page-props', getPageProps)
      },
    },

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      react: true,
      extensions: ['jsx', 'tsx'],
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: 'prose prose-sm m-auto',
    }),
  ],

  optimizeDeps: {
    include: [],
    exclude: [],
  },
})
