import '@payloadcms/next/css'
import './admin-theme.css'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'

import config from '../../payload.config'
import { importMap } from './admin/importMap.js'

async function serverFunction(args: { args: Record<string, unknown>; name: string }) {
  'use server'

  return handleServerFunctions({
    ...args,
    config: Promise.resolve(config),
    importMap,
  })
}

export default function PayloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return RootLayout({
    children,
    config: Promise.resolve(config),
    importMap,
    serverFunction,
  })
}
