'use client'
import Link from 'next/link'
import { BrainIcon } from './ui/icons'
import { useScroll } from '@/context/ScrollContext'

export default function NavBarIcon() {
  const { setScrollAction } = useScroll()
  const handleClick = () => {
    setScrollAction(null)
  }
  return (
    <Link onClick={handleClick} href="/" rel="nofollow">
      <BrainIcon className="h-6 w-6 text-[#6366f1]" />
    </Link>
  )
}
