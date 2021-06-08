import React from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'

export default function App({
  isClient,
  url,
  router,
}: {
  isClient: boolean
  url: URL
  router: { routes: any[] }
}) {
  const baseUrl = isClient ? '' : url.origin

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
        <div className="mt-5 mx-auto text-center opacity-25 text-sm">
          <Switch>
            {router.routes.map((route) => {
              return (
                <Route key={route.path} path={route.path}>
                  <route.component route={route} baseUrl={baseUrl} />
                </Route>
              )
            })}
          </Switch>
        </div>
      </main>

      <Footer />
    </div>
  )
}
