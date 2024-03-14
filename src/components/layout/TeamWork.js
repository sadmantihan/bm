import SectionHeaders from "./SectionHeaders";
import Link from "next/link";
import AdministrativeWork from "../../components/works/AdministrativeWork"; // Updated import path
import ElectricalMechanicalTasks from "../../components/works/ElectricalMechanicalTasks";
import InteriorDesign from "../../components/works/InteriorDesign";
import ProjectCoordination from "../../components/works/ProjectCoordination";
import SiteSupervision from "../../components/works/SiteSupervision";
import SystemNetwork from "../../components/works/SystemNetwork";
export default function TeamWork() {
  return(
    <section className="">
      <div className="text-center mb-4">
        <h3 className="uppercase text-gray-500 font-semibold leading-4">Check out</h3>
        <h2 className="text-primary font-bold text-4xl">Team Works</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
       <AdministrativeWork />
       <ProjectCoordination />
       <ElectricalMechanicalTasks />
       <SystemNetwork />
       <SiteSupervision />
       <InteriorDesign />
      </div>
    </section>
  );
}
