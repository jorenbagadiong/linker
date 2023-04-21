import { useState } from "react"
import Head from "next/head"
import Image from "next/image"

import { APP } from "constants/home"
import Banner from "/components/Banner"

export default function Home() {
  const [data, setData] = useState(APP[0]?.data)
  const [title, setTitle] = useState("Dev Portal")

  const selectApp = (title, data) => {
    setData(data)
    setTitle(title)
  }

  return (
    <>
      <Head>
        <title>Linker | Home</title>
      </Head>
      <div className="sectionWidth py-[50px]">
        <div className="flex h-full rounded-[10px] border border-white">
          <div className="w-1/4 border-r border-white flex flex-col p-[10px]">
            <div className="flex justify-center items-center gap-[10px]">
              <Image src="./logo.svg" alt="logo" width={30} height={30} />
              <h1 className="header textGradient">Linker</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              {APP.map(({ name, data }) => (
                <label
                  className={`${
                    name === title && "text-white"
                  } cursor-pointer text-[20px] font-bold py-[10px]`}
                  key={name}
                  onClick={() => selectApp(name, data)}
                >
                  {name}
                </label>
              ))}
            </div>
          </div>
          <div className="w-3/4 p-[10px] overflow-y-auto">
            <Banner title={title} data={data} />
          </div>
        </div>
      </div>
    </>
  )
}
