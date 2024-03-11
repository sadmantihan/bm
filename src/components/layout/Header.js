import Link from "next/link";
export default function Header(){
    return (
        <header className="flex items-center justify-between" 
        >
      
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
      <Link className="text-primary font-semibold text-2xl" href={'/'}>BUILDMASTER</Link>
        <Link href={'/'}className="bg-black-200 p-4 rounded-lg text-center group hover:bg-gray hover:shadow-md hover:shadow-black/25 transiton-all">Home</Link>
        <Link href={''}className="bg-black-200 p-4 rounded-lg text-center group hover:bg-gray hover:shadow-md hover:shadow-black/25 transiton-all">Team Info</Link>
        <Link href={''}className="bg-black-200 p-4 rounded-lg text-center group hover:bg-gray hover:shadow-md hover:shadow-black/25 transiton-all">Shareholders</Link>
        {/* <Link href={''}className="bg-black-200 p-4 rounded-lg text-center group hover:bg-gray hover:shadow-md hover:shadow-black/25 transiton-all">About</Link>
        <Link href={''}className="bg-black-200 p-4 rounded-lg text-center group hover:bg-gray hover:shadow-md hover:shadow-black/25 transiton-all">Contact</Link> */}
        {/* <Link href={''}className="bg-primary rounded-full text-white px-7 py-4">Login</Link> */}
      </nav>
      
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
      <Link href={'/login'}className="bg-black-200 p-4 rounded-lg text-center group hover:bg-gray hover:shadow-md hover:shadow-black/25 transiton-all">Login</Link>
      <Link href={'/register'}className="bg-primary rounded-full text-white px-7 py-4">Register</Link>

      </nav>
    </header>
    );
}