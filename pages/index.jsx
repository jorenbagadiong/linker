import { useCallback, useEffect, useState } from "react"
import Head from "next/head"
import Notiflix from "notiflix"

import Card from "@/components/Card"
import CardItem from "@/components/CardItem"
import Modal from "@/components/Modal"

import { DATA } from "constants/data"

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [storedLinkData, setStoredLinkData] = useState(undefined)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSaveLink = (title, path) => {
    const storedLinkObject = window.localStorage.getItem("storedLink")
    const storedLinkArray = JSON.parse(storedLinkObject)

    if (!title) {
      Notiflix.Notify.failure("Title required")
      return undefined
    }

    if (!path) {
      Notiflix.Notify.failure("Path required")
      return undefined
    }

    if (title && path) {
      const newLink = {
        name: title,
        path: path,
      }

      storedLinkArray.push(newLink)
      window.localStorage.setItem("storedLink", JSON.stringify(storedLinkArray))

      handleCloseModal()
      Notiflix.Notify.success("Path successfuly added")
    }
  }

  useEffect(() => {
    const storedLinkObject = window.localStorage.getItem("storedLink")
    const storedLinkArray = JSON.parse(storedLinkObject)

    if (!storedLinkArray) {
      const data = []
      window.localStorage.setItem("storedLink", JSON.stringify(data))
      return
    }

    setStoredLinkData(storedLinkArray)
  }, [storedLinkData])

  return (
    <>
      <Head>
        <title>Linker | Home</title>
      </Head>
      <div className="sectionWidth py-[20px]">
        <div className="flex">
          <div className="w-3/4 flex flex-wrap justify-between p-3 gap-4">
            {DATA.map((data, key) => (
              <Card data={data} key={key} />
            ))}
          </div>
          <div className="w-1/4 p-3 flex justify-center">
            <div className="flex flex-col gap-3">
              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-teal-400 to-blue hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md"
                  type="button"
                  onClick={handleOpenModal}
                >
                  Add Personal Link
                </button>
              </div>
              {storedLinkData?.length !== 0 && (
                <div className="w-[300px] min-h-[300px] p-3 border border-white rounded-[10px] flex flex-col gap-5 glass">
                  <CardItem items={storedLinkData} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal onClose={handleCloseModal} onSave={handleSaveLink} />
      )}
    </>
  )
}
