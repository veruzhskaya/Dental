import { useState } from 'react';
import ServicesFilter from "./ServiceFilter";
import data from '../../data/data'

const Service = ({service}) => {
    const [collapse, setCollapse] = useState (false);
   const [dataDent, setDataDent] = useState(data)
    const filterDent = (serviceCategory) => {
        const newDent = dataDent.filter(dentItem => dentItem.serviceCategory === serviceCategory);
        setDataDent(newDent)
    }
    return(
       <div>
     
          <div>
            <img className="vector" src={`./${service.img}.jpg`} alt="services"/>
            <span className='collapse' onClick={() => {setCollapse(!collapse); filterDent(service.category)} }><h3>{collapse? "свернуть": service.name}</h3></span>
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