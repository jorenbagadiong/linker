import Head from "next/head"
import Image from "next/image"

import { DEV_PORTAL } from "constants/home"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Linker | Home</title>
      </Head>
      <div className="sectionWidth px-[10px] sm:px-0">
        <div className="flex justify-center items-center p-[20px] gap-[10px]">
          <Image src="./logo.svg" alt="logo" width={30} height={30} />
          <h1 className="heading textGradient">Linker</h1>
        </div>
        <div className="p-[20px]">
          <h1 className="heading textGradient">DEV PORTAL</h1>
          <div className="flex flex-wrap gap-[20px] py-[20px]">
            {DEV_PORTAL.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border border-black rounded-[10px] py-[10px] px-[20px] cursor-pointer">
                  <label className="font-bold text-[20px]">{name}</label>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
