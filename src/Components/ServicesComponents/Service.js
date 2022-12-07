import { useState } from 'react';
import Dental from "./Dental";


const Service = ({service}) => {
    const [collapse, setCollapse] = useState (false);
 
    return(
       <div>
     
          <div>
            <img className="vector" src={`./${service.img}.jpg`} alt="services"/>
            <span className='collapse' onClick={() => setCollapse(!collapse) }><h3>{collapse? "свернуть": service.name}</h3></span>
        </div>
        { 
        collapse ? <div>
        {
        service.services.map(dent => <Dental key={dent.id} dent={dent}/>)
        }
    </div>: null
        }
       

    </div>
    )
} 

export default Service;