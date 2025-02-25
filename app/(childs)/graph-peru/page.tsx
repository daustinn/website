import dynamic from 'next/dynamic'
import React from 'react'
import { getLocale } from 'next-intl/server'

const getMDXComponent = async () => {
  const locale = await getLocale()
  const file = locale.startsWith('es') ? 'es' : 'en'
  return import(`./${file}.mdx`)
}

export const metadata = async () => {
  const locale = await getLocale()
  if (locale.startsWith('es')) {
    return {
      title:
        'Graph Peru | API gratuita para consultar información de personas y empresas en Perú',
      description:
        'API gratuita para consultar información de personas y empresas en Perú.',
      keywords:
        'api, peru, dni, ruc, sunat, reniec, graphql, rest, json, apisunat, apireniec, miwally, graphperu'
    }
  }
  return {
    title:
      'Graph Peru | Free API to consult information about people and companies in Peru',
    description:
      'Free API to consult information about people and companies in Peru.',
    keywords:
      'api, peru, dni, ruc, sunat, reniec, graphql, rest, json, apisunat, apireniec, miwally, graphperu'
  }
}

export default async function AnniPage() {
  const MDXContent = dynamic(() => getMDXComponent())

  return <MDXContent />
}
