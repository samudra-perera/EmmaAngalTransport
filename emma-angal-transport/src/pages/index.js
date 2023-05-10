import Head from 'next/head'
import Nav from '@/components/nav/Nav'
import Landing from '@/components/Landing/Landing'
import Services from '@/components/Services/Services'
import Testimonials from '@/components/Testimonials/Testimonials'
import FAQ from '@/components/FAQ/FAQ'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>EmmaAngal Tranportation</title>
        <meta name="description" content="EmmaAngal Transportation Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Landing />
      <Services/>
      <Testimonials />
      <FAQ/>
      <Footer />
    </>
  )
}
