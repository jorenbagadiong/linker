import Head from "next/head"
import Image from "next/image"

import { DEV_PORTAL, DEMO_APP,BACKOFFICE } from "constants/home"
import Banner from "components/Banner"

export default function Home() {
  return (
    <>
      <Head>
        <title>Linker | Home</title>
      </Head>
      <div className="sectionWidth pb-[200px]">
        <div className="flex justify-center items-center p-[20px] gap-[10px]">
          <Image src="./logo.svg" alt="logo" width={30} height={30} />
          <h1 className="header textGradient">Linker</h1>
        </div>
        <div className="flex flex-col gap-[20px]">

        <Banner title="Dev Portal" data={DEV_PORTAL} />
        <Banner title="Demo App" data={DEMO_APP} />
        <Banner title="Backoffice" data={BACKOFFICE} />
        </div>
      </div>
    </>
  )
}
