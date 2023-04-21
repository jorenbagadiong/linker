import Link from "next/link"

export default function BannerItem({ data }) {
  const { env, items } = data

  return (
    <div>
      <h1 className="subHeader textGradient">{env}</h1>
      <div className="flex flex-wrap gap-[10px] py-[10px]">
        {items.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border border-white rounded-[5px] py-[5px] px-[10px] cursor-pointer">
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
