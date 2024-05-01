// import { HeroSection } from "@/components/home/hero";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="min-h-screen px-16">
//       <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
//         <div className="fixed left-0 top-0 flex justify-between items-center w-full border-b border-gray-300 px-8 pb-6 pt-8 bg-white">
//           <Link href="/" className="text-3xl font-bold">
//             Ticketopia
//           </Link>
//           <nav className="flex items-center  gap-8">
//             <Link href="/">Home </Link>
//             <Link href="/">Explore events </Link>
//             <Link href="/">Create event </Link>
//             <Link href="/">About us </Link>
//             <w3m-button />
//           </nav>
//         </div>
//       </div>

//       <HeroSection />


//     </main>


//   );
// }



import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Page() {
  return (
   
      <main className="min-h-[100dvh]">
        <section className="w-full py-12 md:py-20 bg-gradient-to-r from-[#6366F1] to-[#9333EA]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {/* Secure, Decentralized Ticketing */}
                    Discover top events near you
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Ticketopia is the leading web3 platform for event ticketing. Enjoy secure, decentralized ticketing
                    and resale capabilities.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#6366F1] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="/create-event"
                  >
                    Create Event
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white  bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-[#6366F1] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="/events"
                  >
                    Upcoming Events
                  </Link>
                </div>
              </div>
              <Image
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/hero-concert.jpg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-[#6366F1]">
                    Key Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Blockchain-Powered</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Ticketopia leverages blockchain technology to provide secure, decentralized ticketing. Enjoy
                    features like secure ticket storage, easy resale, and fraud prevention.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#6366F1]" />
                    Secure blockchain-based ticketing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#6366F1]" />
                    Decentralized ticketing platform
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#6366F1]" />
                    Easy ticket resale capabilities
                  </li>
                </ul>
              </div>
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/image-concert.jpg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
              <div>
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-[#6366F1]">
                    Upcoming Events
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Don&apos;t Miss Out</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Check out the latest events on the Ticketopia platform and secure your tickets today.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="flex items-center justify-between pt-4">
                    <div>
                      <h3 className="text-lg font-semibold">Coachella 2023</h3>
                      <p className="text-gray-500 dark:text-gray-400">April 14-16, 2023</p>
                    </div>
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md bg-[#6366F1] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#4F46E5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6366F1] disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      Buy Tickets
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center justify-between pt-4">
                    <div>
                      <h3 className="text-lg font-semibold">Lollapalooza 2023</h3>
                      <p className="text-gray-500 dark:text-gray-400">July 27-30, 2023</p>
                    </div>
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md bg-[#6366F1] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#4F46E5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6366F1] disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      Buy Tickets
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center justify-between pt-4">
                    <div>
                      <h3 className="text-lg font-semibold">Bonnaroo 2023</h3>
                      <p className="text-gray-500 dark:text-gray-400">June 15-18, 2023</p>
                    </div>
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md bg-[#6366F1] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#4F46E5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6366F1] disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      Buy Tickets
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}