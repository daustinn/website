/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import Highlight from '~ui/commons/highlight'

export default function GraphqlBusiness({ info }: { info: string }) {
  const [fetching, setFetching] = React.useState(false)
  const [data, setData] = React.useState<any>(null)

  const handleFetch = async () => {
    if (fetching) return
    setFetching(true)
    fetch('https://graphperu.daustinn.com/api/graphql', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        query: `query  {
          business(match: "20100177774") 
            {
              documentID
              name
              resourceOf
            }
        }`
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
      .finally(() => setFetching(false))
  }
  return (
    <Highlight
      action={() => handleFetch()}
      actionChild={fetching ? 'Fetching...' : 'Fetch'}
      info={info}
      language="js"
      code={`fetch('https://graphperu.daustinn.com/api/graphql', {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST',
  body: JSON.stringify({
    query: 'query  {
      business(match: "20100177774") {
        documentID
        name
        resourceOf
      }
    }'
  })
})
.then((res) => res.json())
.then((data) => console.log(data))${
        fetching
          ? `

// Fetching...`
          : data
          ? `
            
// Response
${JSON.stringify(data, null, 2)}`
          : ''
      }`}
    />
  )
}
