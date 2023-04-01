import Image from "next/image";
import Link from "next/link";
import bg from '../public/bg.jpg'

export default function Home(){
    return(
        <section className="sm:p-16">
            <h1 className="text-black mx-10 font-bold">Select Profile</h1>
        <div className="container w-full h-auto py-16 flex flex-col md:flex-row">
		<div className="split basis-1/2 text-center text-4xl px-5 py-5">
        <div className="hover:scale-110">
        <Link href={'/endodontist'}>
            <Image src={'/endo.jpg'} height={'500'} width={'350'} className={'rounded-3xl'} alt={'Dr Shahid Islam'}></Image>
             Consultant Endodontist
             </Link>
             </div>
        </div>
		<div className="split basis-1/2 text-center text-4xl px-5 py-10">
        <div className="hover:scale-110">
        <Link href={'/web-developer'}>
        <Image src={'/web.jpg'} height={'500'} width={'380'} className={'rounded-3xl'} alt={'Dr Shahid Islam'}></Image>
             IT Professional
             </Link>
            </div>
            </div>
        </div>
        </section>
        
    )
}
