import Image from "next/image";
import Link from "next/link";

// Images
import {
  train,
  golf,
  run,
  accessories,
  promo1,
  promo2,
  promo3,
  promo4,
  uaTheme2Desktop,
  uaTheme2Mobile,
  igimage2Mobile,
  igimage3Mobile,
  igimage5Desktop,
  igimage4Mobile
} from "./images";

// Components
import HomeCard from "./components/HomeCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";

export function HeroSection() {
  return (
    <section className="mb-10 relative">
      <video width="393" height="360" loop autoPlay className="w-full h-full laptop-1080px:hidden">
        <source src="/videos/UA_Theme_1_MB.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video width="1920" height="700" autoPlay loop className="w-full h-full hidden laptop-1080px:block">
        <source src="/videos/UA_Theme_1_DT.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="pl-3.5 pr-[23px] space-y-5 mt-5 laptop-1080px:pl-0 laptop-1080px:pr-0 laptop-1080px:mt-0 laptop-1080px:absolute laptop-1080px:top-1/2 laptop-1080px:-translate-y-1/2 laptop-1080px:right-[calc(100vw-78%)] xl:right-[calc(100vw-78%)] 2xl:right-[calc(100vw-75%)] 2xl:space-y-6 2xl:-translate-y-[51%]">
        <h2 className="uppercase text-5xl font-extrabold leading-[43px] laptop-1080px:text-5xl laptop-1080px:leading-12 xl:text-[68px] xl:leading-17 2xl:text-[104px] 2xl:leading-23.5">Check<br className="hidden laptop-1080px:block" /> out our<br /> latest<br className="hidden laptop-1080px:block" /> gear</h2>
        <p className="text-sm leading-5.5 text-primary max-w-86.5 lg:leading-3.5 laptop-1080px:max-w-59.5 xl:max-w-[274px]">Advanced tech, superior comfort and all performance is what our latest UA gear is all about. Built to go further, push hard and break your boundaries.</p>
        <Link
          href={`#`}
          className="block"
        >
          <button className="text-sm font-normal leading-5 text-white bg-black pt-2.5 px-[35px] pb-[15px] w-full laptop-1080px:max-w-64.5 hover:bg-opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-black">Shop UA New Arrivals</button>
        </Link>
      </div>
    </section>

  )
}

export function CallToActionSection() {
  return (
    <section className="py-10 lg:py-15 mx-auto max-w-[1290px] relative">
      <Image
        src={uaTheme2Mobile}
        alt="ua Theme 2 Mobile"
        width={393}
        className="w-full lg:hidden"
      />
      <Image
        src={uaTheme2Desktop}
        alt="ua Theme 2 Desktop"
        width={1290}
        className="hidden lg:block"
      />

      <div className="lg:absolute lg:top-1/2 lg:right-4 xl:right-[55px] lg:-translate-y-1/2 pl-3.5 pr-[23px] lg:pr-0 space-y-5 lg:space-y-3 xl:space-y-5 mt-5 lg:mt-3 xl:mt-5">
        <p className="leading-5 font-bold text-primary lg:text-white">Project Rock</p>
        <h2 className="uppercase text-5xl font-extrabold lg:text-white xl:text-[64px]">Every Side<br className="sm:hidden lg:block" /> of Strong</h2>
        <p className="text-sm leading-5.5 text-primary max-w-86.5 lg:max-w-75 xl:max-w-[343px] lg:text-white md:leading-4">The Underground collection is inspired by the idea of a Project Rock fight club. A place where we push each other harder to make each other stronger. A drop dedicated to you and your crew. The neon colourways are a reflection of the energy we bring to every rep, every set and every challenge.</p>
        <Link
          href={`#`}
          className="block"
        >
          <button className="text-sm font-normal leading-5 text-white bg-black pt-2.5 px-[35px] pb-[15px] w-full lg:bg-transparent lg:border lg:border-white lg:rounded-sm lg:max-w-[213px] lg:w-full lg:hover:bg-white lg:hover:bg-opacity-5 lg:focus:ring-1 lg:focus:ring-offset-2 lg:focus:ring-white">Shop Project Rock</button>
        </Link>
      </div>
    </section>
  )
}

export function InstgramBentoGrid() {
  return (
    <section className="pb-5 lg:pb-0 px-4 mx-auto max-w-323">
      <SectionTitle
        title={`What's happening on Instagram`}
        subTitle={`Don't miss out on the latest news and updates from Under Armour.`}
      />

      <div className="grid grid-cols-2 gap-y-1 gap-x-1.5 lg:grid-cols-[595px_1fr_1fr]">
        <div className="col-span-2 mb-1 lg:mb-0 lg:col-span-1 lg:row-span-2">
          <Link
            href={`#`}
            className="hover:opacity-90"
            aria-label="Read more about what's happening on Instagram"
          >
            <video width="320" height="240" autoPlay="" loop className="w-full h-full">
              <source src="/videos/ig_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>
        </div>

        <Link
          href={`#`}
          className="hover:opacity-90"
        >
          <Image
            src={igimage2Mobile}
            width={178}
            height={194}
            alt="IG Image 2"
            className="w-full h-full lg:object-cover lg:object-right"
          />
        </Link>

        <Link
          href={`#`}
          className="hover:opacity-90"
        >
          <Image
            src={igimage3Mobile}
            width={178}
            height={194}
            alt="IG Image 3"
            className="w-full h-full lg:object-cover lg:object-right"
          />
        </Link>


        <Link
          href={`#`}
          className="hover:opacity-90"
        >
          <Image
            src={igimage4Mobile}
            width={178}
            height={194}
            alt="IG Image 4"
            className="w-full h-full lg:object-cover lg:object-right"
          />
        </Link>


        <Link
          href={`#`}
          className="hover:opacity-90"
        >
          <Image
            src={igimage5Desktop}
            width={178}
            height={194}
            alt="IG Image 5"
            className="w-full h-full lg:object-cover lg:object-right"
          />
        </Link>
      </div>
    </section >
  )
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <section className="pl-3 xl:pl-0 mx-auto max-w-323">
          <SectionTitle
            title={`Out best gear`}
            subTitle={`Unlock your potential with best UA Gear`}
          />

          <div className="no-scrollbar flex overflow-x-scroll relative -ml-3 pl-3 pr-3 space-x-[9px] object-cover">
            <HomeCard
              src={train}
              alt="Train"
              link={true}
            />

            <HomeCard
              src={run}
              alt="Run"
              link={true}
            />

            <HomeCard
              src={golf}
              alt="Golf"
              link={true}
            />

            <HomeCard
              src={accessories}
              alt="Accessories"
              link={true}
            />
          </div>
        </section>

        <CallToActionSection />

        <section className="pb-10 lg:pb-15 pl-3 mx-auto max-w-323">
          <SectionTitle
            title={`Discover our latest promotions`}
            subTitle={`Get the best deals on the best gear.`}
          />

          <div className="no-scrollbar flex overflow-x-scroll relative -ml-3 pl-3 pr-3 space-x-[9px] object-cover">
            <HomeCard
              src={promo1}
              alt="Promo 1"
              link={false}
            />

            <HomeCard
              src={promo2}
              alt="Promo 2"
              link={false}
            />

            <HomeCard
              src={promo3}
              alt="Promo 3"
              link={false}
            />

            <HomeCard
              src={promo4}
              alt="Promo 4"
              link={false}
            />
          </div>
        </section>

        <InstgramBentoGrid />
      </main>

      <Footer />
    </>
  );
}