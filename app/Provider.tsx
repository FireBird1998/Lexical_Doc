'use client'
import Loader from '@/components/Loader'
import { getClerkUser } from '@/lib/actions/user.actions'
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from '@liveblocks/react/suspense'

import React from 'react'

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LiveblocksProvider
      authEndpoint={`/api/liveblocks-auth`}
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUser({ userIds })
        return users
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  )
}

export default Provider
