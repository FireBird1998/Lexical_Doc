'use client'
import {
  ClientSideSuspense,
  RoomProvider,
} from '@liveblocks/react/suspense'
import React from 'react'
import Loader from './Loader'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import ActiveCollaborator from './ActiveCollaborators'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header>
            <div className="flex items-center justify-center w-fit gap-2">
              <p className="document-title">This is a title</p>
            </div>
            <div className="flex flex-1 w-full justify-end gap-2 sm:gap-3">
              <ActiveCollaborator />
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom
