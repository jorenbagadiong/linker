import Image from "next/image"
import CardItem from "./CardItem"

export default function Card({ data, onDelete }) {
  const { name, logo, items } = data

  return (
    items?.length > 0 && (
      <div className="w-full sm:w-[295px] p-3 border border-white rounded-[10px] flex flex-col gap-5 glass">
        <div className="flex justify-between items-center">
          <label className="font-bold text-[20px] text-white">{name}</label>
          {logo && (
            <Image
              src={logo}
              height={30}
              width={30}
              alt={name}
              style={{ width: 30, height: 30, maxWidth: 30, maxHeight: 30 }}
            />
          )}
        </div>
        <CardItem items={items} onDelete={onDelete} />
      </div>
    )
  )
}
