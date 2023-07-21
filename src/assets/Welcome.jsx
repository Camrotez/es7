import Age from "./Age"
function Welcome(props) {
  return (
    <div>
      <p>Welcome {props.name}</p>
      {props.age >=18? <Age age2 = {props.age}/> :null}
    </div>
  )
}

export default Welcome

