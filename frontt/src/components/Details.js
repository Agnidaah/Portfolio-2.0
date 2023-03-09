import { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
const Details=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            navigate('/home');
        }
    })
    if(localStorage.getItem("user")){
    return(<div className="details">
        {
            JSON.parse(localStorage.getItem("user")).map((item)=>{let f=item._id;
                delete item._id;
                return <ul className="item" key={f}>{
                    Object.keys(item).map(function(key) {
                        return {key: key, value: item[key]};
                      }).map((itm)=>{
                        return <li key={itm.key}><b>{itm.key}</b> : <b>{Array.isArray(itm.value)?<ol >{itm.value.map((ite)=>{return <li key={ite}>{ite}</li>})}</ol>:itm.key==="Link"?<Link to={itm.value}>See Code</Link>:itm.value}</b></li>
                      })
                }</ul>
            })
        }
    </div>)}
    else{
        return (<h2>No Data Found</h2>)
    }
}
export default Details;