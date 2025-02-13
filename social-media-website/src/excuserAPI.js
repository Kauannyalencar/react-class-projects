import Axios from 'axios'
import { useEffect, useState } from "react";

function ExcuserAPI() {
    const [generatedExcuse, setGeneratedExcuse] = useState("");

    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
            setGeneratedExcuse(res.data[0].excuse);

        })
    };

    return (
        <div>
            <h1>Generate An Excuse</h1>
            <button onClick={() => fetchExcuse("party")}> Party</button>
            <button onClick={() => fetchExcuse("family")}> Family</button>
            <button onClick={() => fetchExcuse("office")}>Office</button>
            <h3>{generatedExcuse}</h3>
        </div>
    )
}

export default ExcuserAPI;