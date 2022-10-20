import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeEvent} = props
  const {registrationStatus} = activeEvent

  let eventStatus = ''

  switch (registrationStatus) {
    case 'YET_TO_REGISTER':
      eventStatus = (
        <div className="active-event-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="event-details-img"
          />
          <p className="active-details-para">
            A live performance brings so much to your relationship with
            dance.Seeing dance live can often make you fall totally in love with
            this beautiful art form.
          </p>
          <button type="button" className="btn-style">
            Register Here
          </button>
        </div>
      )
      break

    case 'REGISTERED':
      eventStatus = (
        <div className="active-event-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt=" registered"
            className="event-details-img"
          />
          <h1 className="active-details-heading">
            You have already registered for the event
          </h1>
        </div>
      )
      break

    default:
      eventStatus = (
        <div className="active-event-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="event-details-img"
          />
          <h1 className="active-details-heading">
            Registrations Are Closed Now!
          </h1>
          <p className="active-details-para">
            Stay Tuned. We will reopen the registrations soon!
          </p>
        </div>
      )
  }
  return eventStatus
}

export default ActiveEventRegistrationDetails
