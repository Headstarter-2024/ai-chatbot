import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export function Chat() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#f0f4ff] text-[#4b5563]">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BrainIcon className="h-6 w-6 text-[#6366f1]" />
          <span className="sr-only">Mindful AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            FAQs
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#f0f4ff] text-[#4b5563]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Personal Mental Health AI Companion
                  </h1>
                  <p className="max-w-[600px] text-[#6b7280] md:text-xl">
                    Get personalized support and evidence-based techniques to improve your mental well-being, 24/7.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#6366f1] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#4f46e5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Chat Now
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="flex-1 flex flex-col">
          <div className="container px-4 md:px-6 flex-1 flex flex-col">
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Chat with Mindful AI</h2>
                <Button variant="outline">End Chat</Button>
              </div>
              <div className="flex-1 overflow-auto p-4 bg-[#f0f4ff] rounded-lg">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="shrink-0">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="bg-white rounded-lg p-4 max-w-[80%]">
                      <p>Hello! How can I assist you today?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-end">
                    <div className="bg-[#6366f1] text-white rounded-lg p-4 max-w-[80%]">
                      <p>I'm feeling a bit anxious today. Can you help me with some techniques to manage my anxiety?</p>
                    </div>
                    <Avatar className="shrink-0">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>YO</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-start gap-4">
                    <Avatar className="shrink-0">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="bg-white rounded-lg p-4 max-w-[80%]">
                      <p>Certainly! Here are some evidence-based techniques that can help manage anxiety:</p>
                      <ul className="list-disc pl-4 mt-2">
                        <li>Deep breathing exercises</li>
                        <li>Mindfulness meditation</li>
                        <li>Cognitive-behavioral therapy (CBT) techniques</li>
                        <li>Relaxation exercises like progressive muscle relaxation</li>
                      </ul>
                      <p className="mt-2">Let me know if you'd like me to walk you through any of these techniques.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Textarea
                  placeholder="Type your message..."
                  className="w-full rounded-lg p-2 border border-[#e5e7eb]"
                />
                <div className="flex justify-end mt-2">
                  <Button>Send</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#f0f4ff] p-6 md:py-12 w-full text-[#4b5563]">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Product</h3>
            <Link href="#" prefetch={false}>
              Features
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Integrations
            </Link>
            <Link href="#" prefetch={false}>
              Roadmap
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" prefetch={false}>
              Help Center
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BrainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
