import Head from 'next/head'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { Services } from '../components/Services'
import { Works } from '../components/Works'
import { HowItWorks } from '../components/HowItWorks'
import { Pricing } from '../components/Pricing'
import { Features } from '../components/Features'
import { Feedback } from '../components/Feedback'
import { Footer } from '../components/Footer'
import { FAQ } from '../components/FAQ'

export default function Home() {
  return (
    <div>
      <Head>
        <title>UNIK Creatives - Design Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navbar />
      <Header />
      <Services />
      <Works />
      <HowItWorks />
      <Pricing />
      <Features />
      <Feedback />
      <FAQ />
      <Footer />

    </div>
  )
}
