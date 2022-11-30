const Dental = ({dent}) =>{
    return (
        <div>
            <p>{dent.serviceName}</p>
            <p>{dent.price}</p>
            <button>+-</button>
            <button>add</button>
        </div>
    )
}

export default Dental;