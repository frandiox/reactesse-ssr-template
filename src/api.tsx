import React from 'react'
import { useContext } from 'vite-ssr/react'

function getPageProps({ baseUrl, name, path }: any = {}) {
  // Get our page props from our custom API:
  return fetch(
    `${baseUrl}/api/get-page-props?path=${encodeURIComponent(
      path
    )}&name=${name}&client=${typeof window !== 'undefined'}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json())
}

export function PropsProvider({ to: route, children: Page }: any) {
  const { url, isClient } = useContext()
  const baseUrl = isClient ? '' : url.origin

  if (!route.meta.state) {
    const promise = getPageProps({ baseUrl, ...route }).then((state) => {
      // This will be merged in `initialState` automatically
      route.meta.state = state
    })

    // Will be suspended until resolved
    throw promise
  }

  return <Page {...route.meta.state} />
}
