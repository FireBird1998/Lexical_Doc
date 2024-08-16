'use client'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { createDocument } from '@/lib/actions/room.actions'
import { useRouter } from 'next/navigation'

const AddDocsBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter()

  const addDocHandler = async () => {
    try {
      console.log('userId', userId)
      const room = await createDocument({ userId, email })
      if (room) {
        router.push(`/document/${room.id}`)
      }
    } catch (error) {
      console.error(
        `Error creating document from AddDocsBtn: ${error}`,
      )
    }
  }
  return (
    <Button
      type="submit"
      onClick={addDocHandler}
      className="gradient-blue flex gap-1 shadow-sm"
    >
      <Image
        src="/assets/icons/add.svg"
        alt="Add Document"
        width={24}
        height={24}
      />
      <p className="hidden sm:block">Create New Document</p>
    </Button>
  )
}

export default AddDocsBtn
