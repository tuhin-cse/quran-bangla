import HomeLayout from "../../layouts/home";
import surahs from "../../data/surahs";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {AiOutlineUnorderedList} from "react-icons/ai";
import {Modal} from "antd";

const Surah = ({surah}) => {
    const [data, setData] = useState({})
    const [verse, setVerse] = useState()
    const lastRef = useRef()

    let [page, setPage] = useState(0)
    const [loaded, setLoaded] = useState(0)

    const [update, setUpdate] = useState(false)

    const getData = async page  => {
        let {data} = await axios.get(surah.files[page])
        setData(acc => ({...acc, [page]: data}))
        setPage(page + 1)
    }

    useEffect(() => {
        (async () => {
            await getData(0)
        })()
        window.onscroll = e => {
            if(lastRef.current?.offsetTop - window.innerHeight -200 < window.scrollY) {
                setUpdate(update => !update)
            }
        }

    }, [])

    useEffect(() => {
        if(page > loaded && page < surah.files.length) {
            setLoaded(page)
            getData(page).then(() => {})
        }

    }, [update])

    return (
        <div className="container">
            <h2 className="text-2xl font-medium text-gray-700 my-4">{surah?.no}. {surah?.name}</h2>
            {Object.values(data).map((group, index) => (
                <div className="" key={index}>
                    {group?.map((verse, index2) =>(
                        <div className="card" key={index2}>
                            <div className="text-4xl text-gray-600">
                                {index * 10 + index2 + 1}
                            </div>
                            <p className="text-right text-gray-700 text-5xl mb-3 leading-[80px]">
                                {verse?.words?.reduce((acc, d) => acc + `${!!acc ? " " : ""}${d.a}`, "")}
                            </p>
                            <div className="flex flex-wrap -mx-2">
                                {verse?.words?.map((word, index) => (
                                    <div className="px-2 pb-2" key={index}>
                                        <p className="text-xs text-gray-500">{word.p}</p>
                                        <p className="text-xs text-gray-500">{word.b}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-700">{verse?.translation}</p>
                        </div>
                    ))}
                </div>
            ))}
            <div ref={lastRef}>

            </div>
            <Modal open={!!verse} onCancel={() => setVerse(undefined)} title="Words" footer={null}>
                {verse?.words?.map((word, index) => (
                   <div className="card" key={index}>
                       <p className="text-right text-5xl text-gray-700 mb-2">{word.a}</p>
                       <p className="text-right">{word.p}</p>
                       <p>{word.b}</p>
                   </div>
                ))}
            </Modal>
        </div>
    )
}
Surah.layout = HomeLayout
export default Surah

export async function getStaticProps({params: {id}}) {
    const surah = surahs?.find(surah => surah.id === +id)
    return {
        props: {
            surah
        }
    };
}

export async function getStaticPaths() {
    const paths = surahs.map((c) => {
        return {params: {id: c.id.toString()}}; // Route is something like "this-is-my-post"
    });

    return {
        paths,
        fallback: true,
    };
}