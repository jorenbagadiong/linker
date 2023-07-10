import { useCallback, useEffect, useState } from "react"
import Head from "next/head"
import Notiflix from "notiflix"

import Card from "@/components/Card"
import Modal from "@/components/Modal"

import { DATA } from "constants/data"

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [storedLinkData, setStoredLinkData] = useState(null)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSaveLink = useCallback((title, path) => {
    if (!title) {
      Notiflix.Notify.failure("Title required")
      return undefined
    }

    if (!path) {
      Notiflix.Notify.failure("Path required")
      return undefined
    }

    if (title && path) {
      const storedLinkObject = window.localStorage.getItem("storedLink")
      const storedLinkArray = JSON.parse(storedLinkObject)

      const newLink = {
        name: title,
        path: path,
        onDelete: true,
      }

      storedLinkArray?.[0]?.items?.push(newLink)
      window.localStorage.setItem("storedLink", JSON.stringify(storedLinkArray))
      setStoredLinkData(storedLinkArray)

      handleCloseModal()
      Notiflix.Notify.success("Path successfuly added")
    }
  }, [])

  const handleDeleteLink = useCallback((key) => {
    const storedLinkObject = window.localStorage.getItem("storedLink")
    const storedLinkArray = JSON.parse(storedLinkObject)

    storedLinkArray?.[0]?.items?.splice(key, 1)
    window.localStorage.setItem("storedLink", JSON.stringify(storedLinkArray))
    setStoredLinkData(storedLinkArray)
  }, [])

  useEffect(() => {
    const storedLinkObject = window.localStorage.getItem("storedLink")
    const storedLinkArray = JSON.parse(storedLinkObject)

    if (!storedLinkArray?.[0]?.items) {
      const data = [{ name: "PERSONAL LINK", items: [] }, ...DATA]
      window.localStorage.setItem("storedLink", JSON.stringify(data))
    }

    setStoredLinkData(storedLinkArray)
  }, [])


  return (
    <>
      <Head>
        <title>Linker | Home</title>
      </Head>
      <div className="sectionWidth py-[20px]">
        <button
          className="bg-gradient-to-r from-teal-400 to-blue hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md"
          type="button"
          onClick={handleOpenModal}
        >
          Add Personal Link
        </button>
        <div className="flex">
          <div className="flex flex-wrap justify-between py-3 gap-4">
            {typeof storedLinkData === "object" &&
              storedLinkData?.map((data, key) => (
                <Card data={data} key={key} onDelete={handleDeleteLink} />
              ))}
          </div>
        </div>
      </div>
      {showModal && (
        <Modal onClose={handleCloseModal} onSave={handleSaveLink} />
      )}
    </>
  )
}
