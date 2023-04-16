import {useEffect, useState} from "react";
import HomeLayout from "../layouts/home";
import axios from "axios";

const Words = () => {
    const [alphabet, setAlphabet] = useState(null)
    const [data, setData] = useState(null)

    const [search, setSearch] = useState('')

    let words = ["a", "b", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "q",
        "r", "s", "t", "u", "w", "y", "z"]


    useEffect(() => {
        if(!!alphabet) {
            (async () => {
                let {data} = await axios.get('/words/' + alphabet + '.json')
                setData(data)
            })()
        }
    }, [alphabet])

    const filter = data => {
        if(!search) {
            return true;
        }
        if(data.p.replaceAll(/[^a-z]/g, "").toLowerCase().includes(search.toLowerCase())) {
            return true;
        }
        if(data.b.includes(search)) {
            return true;
        }
        return data.a.includes(search);

    }

    return (
        <div className="container">
            <div className="flex flex-wrap -mx-2 mt-4">
                {words.map((word, index) => (
                    <div
                        key={index}
                        className={`px-4 py-2 mb-2 border rounded uppercase mx-2 ${alphabet === word ? 'bg-blue-600 text-white' : ''}`}
                        role="button"
                        onClick={() => setAlphabet(word)}>
                        {word}
                    </div>
                ))}
            </div>

            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full border px-4 py-2 rounded my-4"
                placeholder="Search"/>

            {data?.filter(filter).map((word, index) => (
                <div key={index} className="border rounded flex justify-between p-4 mb-2">
                   <span className="md:text-2xl text-gray-700">{word.p} - {word.b} ({word.c})</span>
                   <span className="text-4xl md:text-5xl text-gray-700 pl-8">{word.a} </span>
                </div>
            ))}

        </div>
    )
}

Words.layout = HomeLayout
export default Words