import Head from "next/head"

import { DATA } from "constants/data"
import Card from "@/components/Card"

export default function Home() {
  return (
    <>
      <Head>
        <title>Linker | Home</title>
      </Head>
      <div className="sectionWidth py-[20px]">
        <div>
          <div className="flex flex-wrap justify-between p-5 gap-5">
            {DATA.map((data, key) => (
              <Card data={data} key={key} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
