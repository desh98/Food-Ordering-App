import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import HomeMenu from '@/components/layout/HomeMenu'
import SectionHeader from '@/components/layout/SectionHeader'


export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <HomeMenu />
    <section>
      <SectionHeader subHeader={'our story'} mainHeader={'About Us'} />
      <div className='text-gray-500 max-w-2xl mx-auto flex flex-col gap-4 text-center'>
        <p>
          Commodo dolor do labore velit ut qui tempor enim ullamco laborum in cillum esse. Do mollit irure fugiat non aliqua consectetur in. Veniam officia excepteur id voluptate ea. Consectetur deserunt velit tempor sint in aliqua. Officia eu magna ea dolor elit.
        </p>
        <p>
          Commodo dolor do labore velit ut qui tempor enim ullamco laborum in cillum esse. Do mollit irure fugiat non aliqua consectetur in. Veniam officia excepteur id voluptate ea. Consectetur deserunt velit tempor sint in aliqua. Officia eu magna ea dolor elit.
        </p>
        <p>
          Commodo dolor do labore velit ut qui tempor enim ullamco laborum in cillum esse. Do mollit irure fugiat non aliqua consectetur in. Veniam officia excepteur id voluptate ea.
        </p>
      </div>
    </section>

    <section className='text-center'>
      <SectionHeader subHeader={'Don\'t hesitate'} mainHeader={'Contact Us'} />
      <a className='text-4xl underline text-gray-500'>
        +94 123 456 789
      </a>
    </section>

    <footer className='border-t p-8 text-center text-gray-500 mt-16'>
      &copy; 2023 All rights reserved
    </footer>
    </>
  )
}
