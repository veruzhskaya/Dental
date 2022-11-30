import { useState } from 'react';
import ServicesFilter from "./ServiceFilter";

const Service = ({service}) => {
    const [collapse, setCollapse] = useState (false)
  
    return(
       <div>
          <div>
            <img className="vector" src={`./${service.img}.jpg`} alt="services"/>
            <span className='collapse' onClick={() => setCollapse(!collapse)}><h3>{collapse? "свернуть": service.name}</h3></span>
        </div>
        { 
        collapse ? <div>
        <ServicesFilter/>
      
    </div>: null
        }
       

    </div>
    )
} 

export default Service;