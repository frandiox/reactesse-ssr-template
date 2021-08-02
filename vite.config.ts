import path from 'path'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import WindiCSS from 'vite-plugin-windicss'
import viteSSR from 'vite-ssr/plugin'
import mdx from 'vite-plugin-mdx'
// @ts-ignore
import remarkPrism from 'remark-prism'
import reactRefresh from '@vitejs/plugin-react-refresh'
// @ts-ignore
import getPageProps from './serverless/api/get-page-props'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    reactRefresh(),
    viteSSR(),
    mdx({
      remarkPlugins: [remarkPrism],
    }),
    {
      name: 'API-mock',
      configureServer({ middlewares }) {
        middlewares.use('/api/get-page-props', getPageProps)
      },
    },

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      react: true,
      extensions: ['jsx', 'tsx', 'mdx'],
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: 'prose prose-sm m-auto',
    }),
  ],

  optimizeDeps: {
    include: ['@mdx-js/react'],
    exclude: [],
  },
})
