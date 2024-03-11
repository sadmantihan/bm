import SectionHeaders from "./SectionHeaders";

export default function TeamWork() {
    const teamWorks = [
      "Project Coordination",
      "Site Supervision and Construction",
      "Interior Design and Architecture",
      "System Analysis and Network",
      "Electrical and Mechanical Tasks",
      "Safety Assurance",
      "Administrative Work and Inventory Management",
      "Budget and Financial Management",
      "Marketing and Branding",
      "Quality Assurance",
    ];
  
    return (
      <section className="flex flex-col items-center justify-center bg-gray-100 py-10">
        <div className="text-center mb-8">
          <SectionHeaders
            subHeader={'check out'}
            mainHeader={'Team Works'} />
        </div>
        {/* <div className="flex flex-wrap justify-center max-w-4xl"> */}
        <div className="bg-primary-200 p-4 rounded-lg text-center">
          {teamWorks.map((work, index) => (
             <button key={index} className="p-4 mx-2 my-2 rounded-full bg-white shadow-md focus:outline-none bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transiton-all">
              <p className="text-center">{work}</p>
            </button>
          ))}
        </div>
      </section>
    );
  }
  