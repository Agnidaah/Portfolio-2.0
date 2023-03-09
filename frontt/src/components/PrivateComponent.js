import {Navigate,Outlet} from 'react-router-dom';

const PrivateComponent=()=>{
    const auth=localStorage.getItem('detail');
    return(auth?<Outlet/>:<Navigate to="/home"></Navigate>)
}
export default PrivateComponent;