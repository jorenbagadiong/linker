import Link from "next/link"

export default function CardItem({ items }) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        {items &&
          items.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border border-white rounded-[5px] py-[5px] px-[10px] cursor-pointer hover:scale-[1.1] hover:font-bold">
                <label className="text-[16px] cursor-pointer text-white">
                  {name}
                </label>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
