
import Link from "next/link";
import Right from "../icons/Right";
export default function Hero() {
    return (
        <section className="hero mt-4">
            <div className="py-6">
            <h1 className="text-4xl font-semibold">Build<br/> your dream here</h1>
            <p className="my-6 text-gray-500 text-sm">X Company Ltd.</p>
            <div className="flex gap-4 text-sm">
             <button className="bg-primary flex-items-center gap-2 text-white px-4 py-2 rounded-full">
                <Link href="/sharedoc">Be a Shareholder</Link>
                    {/* < Right /> */ }
                </button> 
            </div>
            </div>
        </section>
    );
}