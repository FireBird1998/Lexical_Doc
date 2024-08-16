import AddDocsBtn from '@/components/AddDocsBtn'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function Home() {
  const clerkUser = await currentUser()
  if (!clerkUser) {
    return redirect('/signIn')
  }
  const docs = []
  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notification
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      {docs.length > 0 ? (
        <div></div>
      ) : (
        <div className="document-list-empty">
          <Image
            src={`/assets/icons/doc.svg`}
            alt="Document Icon"
            width={40}
            height={40}
            className="mx-auto"
          />
          <AddDocsBtn
            userId={clerkUser.id}
            email={clerkUser.emailAddresses[0].emailAddress}
          />
        </div>
      )}
    </main>
  )
}
