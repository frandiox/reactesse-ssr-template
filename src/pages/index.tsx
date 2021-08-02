import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaCampground } from 'react-icons/fa'

export default function Home({ message }: any) {
  const [name = '', setName] = useState<string>()

  const history = useHistory()
  const go = () => {
    history.push(`/hi/${encodeURIComponent(name)}`)
  }

  return (
    <div>
      <p className="text-4xl">
        <FaCampground className="inline-block" />
      </p>
      <p>
        <a
          rel="noreferrer"
          href="https://github.com/frandiox/reactesse-ssr-template"
          target="_blank"
        >
          Reactesse SSR
        </a>
      </p>
      <p>
        <em className="text-sm opacity-75">Something</em>
      </p>
      <div className="py-4" />
      <input
        id="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="what's your name"
        aria-label="what's your name"
        type="text"
        autoComplete="false"
        className="px-4 py-2 text-sm text-center bg-transparent border border-gray-200 rounded outline-none active:outline-none dark:border-gray-700"
        style={{ width: '250px' }}
      />
      <label className="hidden" htmlFor="input">
        SomethingElse
      </label>
      <div>
        <button className="m-3 text-sm btn" disabled={!name} onClick={go}>
          Go
        </button>
      </div>
      Message from API: {message}
    </div>
  )
}
