import Head from 'next/head'
import Nav from '@/components/nav/Nav'

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
    </>
  )
}
