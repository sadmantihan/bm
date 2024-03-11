import Hero from "../components/layout/Hero"
import SectionHeaders from "../components/layout/SectionHeaders"
import TeamWork from "../components/layout/TeamWork"
// import Link from "next/link";

export default function Home() {
  return (
    <>
        <Hero />
        <TeamWork />
        <section className="text-center my-16">
          <SectionHeaders
            subHeader={'Our story'}
            mainHeader={'About us'} />
        <div className="text-gray-500 max-w-xl mx-auto mt-4 flex-col gap-4">
        <p>
            Lorem ipsum dolor sit
          </p>
          <p>
            Lorem ipsum
          </p>
        </div>
          
        </section>
        <section className="text-center my-8">
        <SectionHeaders
            subHeader={'Don\'t hesitate'}
            mainHeader={'Contact us'} />
            <div className="mt-8">
            <a className="text-4xl underline text-gray-500" href="tel:+8801704776493">+88 017 0477 6493</a>
            </div>
            <div className="mt-8">
            <a className="text-4xl underline text-gray-500 mt-16" href="tel:+8801883805087">+88 018 8380 5087</a>
            </div>
        </section>
        
    </>
  );
}
