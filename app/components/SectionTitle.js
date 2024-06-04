export default function SectionTitle({ title, subTitle }) {
    return (
        <>
            <h2 className="text-[22px] font-bold leading-[32.45px] xl:text-[24px] xl:leading-[35px]">{title}</h2>
            <p className="text-sm font-normal leading-[19.6px] mb-[18px]">{subTitle}</p>
        </>
    )
}