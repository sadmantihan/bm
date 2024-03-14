import Hero from "../components/layout/Hero"
import SectionHeaders from "../components/layout/SectionHeaders"
import TeamWork from "../components/layout/TeamWork"
import Link from "next/link";

export default function Home() {
  return (
    <>
        <Hero />
        <TeamWork />
        <section className="text-center my-16">
          <SectionHeaders
            subHeader={'Our story'}
            mainHeader={<Link href="/aboutus">About us</Link>} />

          
        </section>
        <section className="text-center my-8">
        <SectionHeaders
            subHeader={'Don\'t hesitate'}
            mainHeader={'Contact us'} />
            <div className="mt-8">
            <a className="text-4xl underline text-gray-500" href="mailto:buildmaster.reply@gmail.com">buildmaster.reply@gmail.com</a>
            </div>
        </section>
        
    </>
  );
}
