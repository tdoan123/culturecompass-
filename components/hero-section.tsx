import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="w-full bg-[#e8e6e1] relative">
      <div className="container mx-auto px-6 py-12">
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/hero-indigenous-person.png"
            alt="Indigenous person in traditional clothing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="absolute left-8 top-1/2 -translate-y-1/2 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance leading-tight">
              Connect the world, one compass at a time....
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
