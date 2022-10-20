import './index.css'

const EventItem = props => {
  const {details, onClickEvent, activeBorder} = props
  const {imageUrl, name, location} = details

  const onUpdateEvent = () => {
    onClickEvent(details)
  }

  const activeStyle = activeBorder
    ? 'event-act-btn-style'
    : 'event-nr-btn-style'

  return (
    <li className="list-container">
      <button type="button" className={activeStyle} onClick={onUpdateEvent}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
