import AboutMe from "../components/about-me-webDeveloper";
import ProfessionalExperience from "../components/professional-experience";
import { webDeveloperData } from "@/data/page-data";
import Link from "next/link";

export default function web(){
    return(
        <div>
            <div className="p-8">
        <AboutMe/>
        <ProfessionalExperience data={webDeveloperData} />
        <div className="flex justify-center">
            <button className="bg-slate-200 rounded-xl p-2 hover:bg-slate-400 hover:scale-105 duration-300">
            <Link href={'/'}>back to HOME</Link>
            </button>
        </div>
        </div>
        </div>
    )
}