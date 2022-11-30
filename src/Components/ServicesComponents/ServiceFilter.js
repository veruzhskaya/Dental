import data from "../../data/data";
import Dental from "./Dental";

const ServicesFilter = () =>{
    return (
        <div>  
        {data.map(dent => <Dental dent={dent}/>)}
        </div>
    )
}

export default ServicesFilter;