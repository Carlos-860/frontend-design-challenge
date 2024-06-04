export default function SectionTitle({ title, subTitle }) {
    return (
        <>
            <h2 className="text-[22px] font-bold leading-8 xl:text-2xl xl:leading-9">{title}</h2>
            <p className="text-sm font-normal leading-5 mb-4.5">{subTitle}</p>
        </>
    )
}