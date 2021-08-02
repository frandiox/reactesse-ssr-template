import React from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from './components/Footer'
import { renderRoutes } from 'react-router-config'
import { Context } from 'vite-ssr/react'

export default function App({ router }: Context) {
  const title = 'Reactesse SSR'
  const description = 'Opinionated SSR Vite Starter Template for React'

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta
          name="og:image"
          content="https://repository-images.githubusercontent.com/341177866/d42c1300-7633-11eb-84fd-ec68894d4fc9"
        />
      </Helmet>

      <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        {renderRoutes(router.routes)}

        <Footer />
      </main>
    </div>
  )
}
