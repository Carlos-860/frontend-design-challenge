import Image from "next/image";
import Link from "next/link";

export default function HomeCard({ src, alt, link }) {
    return (
        <>
            <Link href={`#`} className="group min-w-[230px] lg:w-full xl:w-[314px]">
                <Image src={src} width={230} height={230} alt={alt} className="w-full group-hover:opacity-90" loading="lazy" />
                {link && (
                    <div className="hidden lg:inline">
                        <button className="text-sm font-semibold leading-[26px] underline mt-[9px]">Shop Now</button>
                    </div>
                )}
            </Link>
        </>
    )
}