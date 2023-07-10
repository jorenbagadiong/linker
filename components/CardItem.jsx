import Link from "next/link"

export default function CardItem({ items, onDelete }) {
  return (
    <div className="flex flex-col gap-2">
      {items?.map((item, key) => (
        <Link
          key={key}
          href={item?.path}
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border border-white rounded-[5px] py-[5px] px-[10px] cursor-pointer hover:scale-[1.1] hover:font-bold flex justify-between items-center">
            <label className="text-[16px] cursor-pointer text-white">
              {item?.name}
            </label>
            {item?.onDelete && (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  onDelete(key)
                }}
                className="bg-transparent border-0 text-white hover:text-crimson text-3xl leading-none font-semibold outline-none focus:outline-none"
              >
                <span className="bg-transparent text-white hover:text-crimson text-[24px] block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
