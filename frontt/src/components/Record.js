import {useNavigate } from 'react-router-dom';
const Record=(props)=>{
    const navigate = useNavigate();
    const askColl=async(coll)=>{
        //console.warn(coll);
        let result=await fetch(`https://agn-datath.onrender.com/home/${coll}`);
        result=await result.json();
        //console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
        //const auth=localStorage.getItem("user");
        //console.warn(typeof JSON.parse(auth));
        navigate('/details');
    }
    return( 
        <div className="record">
            <button type="button" onClick={()=>{askColl(props.name)}}><span>{props.name}</span></button>
        </div>
    )
}
export default Record;