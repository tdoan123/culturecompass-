import Image from 'next/image'

export function HeroSection() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <Image
        src="/about-us-hero.svg"
        alt="Indigenous peoples cultural imagery"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
