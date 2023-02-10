import HomeLayout from "../layouts/home";
import surahs from "../data/surahs";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="flex flex-wrap -mx-3">
                    {surahs?.map((surah, index) =>(
                        <div className="w-full sm:w-1/2 md:w-1/3 p-3" key={index}>
                           <Link href={"/surah/" + surah.id}>
                               <div className="border p-4" role="button">
                                   <p className="text-gray-700">{surah.no}. {surah.name}</p>
                               </div>
                           </Link>
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

Home.layout = HomeLayout
export default Home