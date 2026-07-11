import type { Metadata } from 'next'
import { generatePageMetadata, RootPage } from '@payloadcms/next/views'

import config from '../../../../payload.config'
import { importMap } from '../importMap.js'

type PageProps = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = async ({ params, searchParams }: PageProps): Promise<Metadata> =>
  generatePageMetadata({
    config: Promise.resolve(config),
    params,
    searchParams,
  })

export default function Page({ params, searchParams }: PageProps) {
  return RootPage({
    config: Promise.resolve(config),
    importMap,
    params: params as Promise<{ segments: string[] }>,
    searchParams: searchParams as Promise<{ [key: string]: string | string[] }>,
  })
}
