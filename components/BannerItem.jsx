import Link from "next/link"

export default function BannerItem({ data }) {
  const { env, items } = data
  
  return (
    <div>
      <h1 className="subHeader textGradient">{env}</h1>
      <div className="flex flex-wrap gap-[20px] py-[20px]">
        {items.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border border-black rounded-[10px] py-[10px] px-[20px] cursor-pointer">
              <label className="font-bold text-[20px] cursor-pointer">
                {name}
              </label>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
