'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScroll } from '@/context/ScrollContext'

export default function NavBarLinks() {
  const pathname = usePathname()
  const { setScrollAction } = useScroll()

  const handleClick = (section: string): void => {
    setScrollAction({ section, timestamp: Date.now() })
  }

  return (
    <nav
      className={`${pathname === '/' ? 'block' : 'hidden'} ml-auto flex gap-4 sm:gap-6`}
    >
      <div
        onClick={() => handleClick('features')}
        className="cursor-pointer text-sm font-medium hover:underline underline-offset-4 max-sm:text-xs"
      >
        Features
      </div>
      <div
        onClick={() => handleClick('testimonials')}
        className="cursor-pointer text-sm font-medium hover:underline underline-offset-4 max-sm:text-xs"
      >
        Testimonials
      </div>
      <Link
        href="/chat"
        className="text-sm font-medium hover:underline underline-offset-4 max-sm:text-xs"
        prefetch={false}
      >
        Chat Now
      </Link>
      <Link
        href="#"
        className="text-sm font-medium hover:underline underline-offset-4 max-sm:hidden"
        prefetch={false}
      >
        Contact
      </Link>
    </nav>
  )
}
