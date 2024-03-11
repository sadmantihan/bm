import Right from "../icons/Right";
export default function Hero() {
    return (
        <section className="hero mt-4">
            <div className="py-6">
            <h1 className="text-4xl font-semibold">Build<br/> your dream here</h1>
            <p className="my-6 text-gray-500 text-sm">X Company Ltd.</p>
            <div className="flex gap-4 text-sm">
                <button className="bg-primary flex items-center gap-2 text-white px-8 py-2 rounded-full">
                    Be a shareholder
                    <Right />
                    </button>
                <button className="flex gap-2 px-5 py-2 font-semibold bg-black-200 p-4 rounded-lg text-center group hover:shadow-md hover:shadow-black/25">
                    Learn more
                    {/* < Right /> */}
                </button>
            </div>
            </div>
        </section>
    );
}