import { useEffect, useState } from "react";
import Record from "./Record";
const Records=()=>{
    const [colls,setColls]=useState([]);
    useEffect(()=>{
        getColls();
        localStorage.clear();
    },[])
    const getColls=async ()=>{
        let result=await fetch("http://localhost:1200/home");
        result=await result.json();
        setColls(result);
        //console.warn(colls+"hello");
    }
    return(
        <div className="records">
            {colls.map((item)=>{
            return <Record key={item} name={item}/>
        })}
        </div>
    )
}
export default Records;