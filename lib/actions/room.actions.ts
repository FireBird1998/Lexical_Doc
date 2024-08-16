'use server'
import { revalidatePath } from 'next/cache'
import { liveblocks } from '../liveblocks'
import { v4 as uuidv4 } from 'uuid'
import { parseStringify } from '../utils'

export const createDocument = async ({
  userId,
  email,
}: CreateDocumentParams) => {
  const roomId = uuidv4()
  try {
    const metadata = {
      creatorId: userId,
      email,
      title: 'Untitled',
    }

    const usersAccesses: RoomAccesses = {
      [email]: ['room:write'],
    }

    const room = await liveblocks.createRoom(roomId, {
      metadata,
      usersAccesses,
      defaultAccesses: ['room:write'],
    })

    revalidatePath(`/`)

    return parseStringify(room)
  } catch (error) {
    console.error(
      `Error creating document from room.actions: ${error}`,
    )
  }
}

export const getDocument = async ({
  roomId,
  userId,
}: {
  roomId: string
  userId: string
}) => {
  try {
    const room = await liveblocks.getRoom(roomId)

    const hasAccess = Object.keys(room.usersAccesses).includes(userId)

    if (!hasAccess) {
      throw new Error('You do not have access to this document')
    }

    return parseStringify(room)
  } catch (error) {
    console.log(`Error happened while getting a room: ${error}`)
  }
}
