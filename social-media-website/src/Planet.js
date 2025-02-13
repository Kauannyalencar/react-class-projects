
const Planet = (props) =>{
    return (
        <div> 
            {/* {props.gas ? props.name : ''} */}
            {props.gas && <h1> {props.name}</h1>}
        </div>
    )
  }

  export default Planet;