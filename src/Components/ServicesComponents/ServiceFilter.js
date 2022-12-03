
import data from "../../data/data";

import Dental from "./Dental";


const ServicesFilter = () =>{
  
  
    return (
        <div className="dental_cont">
            
        {data.map(dent => <Dental key={dent.id} dent={dent}/>)}
        </div>
    )
}

export default ServicesFilter;