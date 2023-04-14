import BannerItem from "./BannerItem"

export default function Banner({ title, data }) {
  return (
    <div
      className="p-[30px] border border-black rounded-[10px]"
      data-aos="fade-up"
      data-aos-offset="500"
    >
      <h1 className="header textGradient">{title}</h1>
      {data.map((items, key) => (
        <BannerItem data={items} key={key} />
      ))}
    </div>
  )
}
