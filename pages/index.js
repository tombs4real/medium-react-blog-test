import Head from 'next/head'
import SideBarLeft from '@components/SideBarLeft'
import SideBarRight from '@components/SideBarRight'
import AlertMessage from '@components/AlertMessage'
import Article from '@components/Article'
import MobileHeader from '@components/MobileHeader'


export default function Home() {
  return (
    <div className="flex-row flex-nowrap justify-center align-stretch mx-auto w-full relative lg:flex">
      <Head>
        <title>React Test Blog for Spencer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileHeader />
      <SideBarLeft />
      <main className='flex-auto mx-12 py-6 min-h-screen lg:mx-32 lg:max-w-3xl'>
        <AlertMessage />
        <Article />
      </main>
      <SideBarRight />
    </div>
  )
}
