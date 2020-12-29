const Friend = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Name: {props.friend.name}</h2>
      <h4>Health: {props.friend.hp}</h4>
      <h4>Types: </h4>
      <ul>
        {props.friend.types ? (
          props.friend.types.map((e, index) => <li key={index}>{e}</li>)
        ) : (
          <div></div>
        )}
      </ul>
      <button onClick={() => props.deleteFriend(props.friend.id)}>DELETE</button>
      {/* <ul>
        {props.friend.types && props.friend.types.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Friend
