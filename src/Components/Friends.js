import Friend from './Friend'

const Friends = (props) => {
  return (
    <div>
      <h1>Friends</h1>
      <div>
        {props.friends.map((element, index) => {
        return <Friend key={index} friend={element} deleteFriend={props.deleteFriend} />
        })}
      </div>
      <h1>End of Friends</h1>
    </div>
  )
}

export default Friends
