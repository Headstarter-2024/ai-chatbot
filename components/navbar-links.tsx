'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarLinks() {
    const pathname = usePathname();
    return (<nav className={`${pathname === '/' ? 'block' : 'hidden'} ml-auto flex gap-4 sm:gap-6`}>
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            FAQs
          </Link>
          <Link href="/chat" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Chat Now
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
      </nav>)
}