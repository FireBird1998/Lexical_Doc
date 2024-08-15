import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

const Header = () => {
	return (
		<div>
			<Link href="/">
				<Image
					src="assets/icons/logo.svg"
					alt="logo with name"
					width={120}
					height={32}
					className="hidden md:block"
				/>
				<Image
					src="assets/icons/logo-icon.svg"
					alt="logo"
					width={32}
					height={32}
					className="mr-2 md:hidden"
				/>
			</Link>
		</div>
	)
}

export default Header
