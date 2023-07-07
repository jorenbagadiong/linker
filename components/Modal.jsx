import { useCallback, useState } from "react"

export default function Modal({ onClose, onSave }) {
  const [title, setTitle] = useState(null)
  const [path, setPath] = useState(null)

  const handleSaveLink = useCallback(() => {
    onSave(title, path)
  }, [title, path, onSave])

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-5">
        <div className="relative my-6 mx-auto max-w-3xl w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-[24px] font-semibold">Add new link</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-gray float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="bg-transparent text-gray h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray focus:border-gray block w-full p-2.5"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="link"
                  className="block mb-2 text-sm font-medium text-gray"
                >
                  Path
                </label>
                <input
                  type="text"
                  id="path"
                  className="bg-transparent border border-gray text-gray text-sm rounded-lg focus:ring-gray focus:border-bgray block w-full p-2.5"
                  placeholder="path"
                  onChange={(e) => setPath(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-end p-6 rounded-b">
              <button
                className="bg-gradient-to-r from-teal-400 to-blue hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md"
                type="button"
                onClick={handleSaveLink}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
