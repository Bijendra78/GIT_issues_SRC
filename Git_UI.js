import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


export default function Git_UI() {
    
    const [Data, setData] = useState("");
    
    const [page, Setpage] = useState(0);

    useEffect(() => {
        const url = "https://api.github.com/repositories/1296269/issues?page=$%7BpageNumberHere%7D&per_page=5"
        axios.get(url)
            .then((res) => {
                
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            })
            .finally(() => {

            })
    }, [])

    return <div id="main">
        
        {Data !== "" ? Data.map((item, index) => {
            if (index === page) {
                return <div>
                    <ol id="ol_tag">
                        <li id="list" key={index}>{item.title}</li>
                    </ol>
                </div>
            }
        }) : <p id="Data_none">No Any Data To Show</p>}
        
        <button id="load_next" className="btn" onClick={() => {
            if (page < 4) {
                Setpage(page + 1)
            }
        }}>Next</button>
        <button className="btn" id="load_prev" onClick={() => {
            if (page > 0) {
                Setpage(page - 1);
            }
        }}>Previous</button>
        <div  id="page_number"> {`Page No. ${page + 1}`}  </div>
    </div>

}