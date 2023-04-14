import { useEffect } from "react"
import Head from "next/head"
import Aos from "aos"
import "aos/dist/aos.css"

import "styles/globals.css"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    })
  })

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
