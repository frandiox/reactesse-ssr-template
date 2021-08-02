import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { FaRegHandSpock } from 'react-icons/fa'

export default function Hi({ message }: any) {
  const { name } = useParams() as any

  const history = useHistory()

  return (
    <div>
      <p className="text-4xl">
        <FaRegHandSpock className="inline-block" />
      </p>
      <p>Hello {name}</p>
      <p className="text-sm opacity-50">
        <em>Dynamic route</em>
      </p>
      <div>
        <button
          className="btn m-3 text-sm mt-8"
          onClick={() => history.goBack()}
        >
          Back
        </button>
      </div>
      Message from API: {message}
    </div>
  )
}
