// Write your code here

import './index.css'

const EventItem = props => {
  const {eventData, setActiveEventId} = props
  const {id, name, imageUrl, location} = eventData

  const onClickImg = () => {
    setActiveEventId(id)
  }

  return (
    <li>
      <button type="button" className="img-btn" onClick={onClickImg}>
        <img src={imageUrl} alt="event" className="img" />
      </button>

      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}
export default EventItem
