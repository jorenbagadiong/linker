import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>Linker | Home</title>
      </Head>
      <div className="sectionWidth px-[10px] sm:px-0">
        <div className="flex justify-center items-center p-[20px] gap-[20px">
          <Image src="./logo.svg" alt="logo" width={50} height={50} />
          <h1 class="text-4xl font-extrabold textGradient">Linker</h1>
        </div>
      </div>
    </>
  )
}
