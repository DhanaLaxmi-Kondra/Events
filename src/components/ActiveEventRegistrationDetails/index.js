// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {getRegistartionStatus} = props

  let content

  switch (getRegistartionStatus) {
    case 'YET_TO_REGISTER':
      content = (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="text-img"
          />
          <p className="text">
            A live performance brings so much to your relationship with dance
          </p>
          <button type="button" className="btn">
            Register Here
          </button>
        </>
      )
      break
    case 'REGISTERED':
      content = (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="text-img"
          />
          <h1 className="text">You have already registered for the event</h1>
        </>
      )
      break
    case 'REGISTRATIONS_CLOSED':
      content = (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="text-img"
          />
          <h1 className="text">Registrations Are Closed Now!</h1>
          <p className="text">Stay tuned. We will reopen</p>
          <p className="text">The registrations soon!</p>
        </>
      )
      break
    default:
      content = (
        <>
          <p className="text">
            Click on an event, to view its registration details
          </p>
        </>
      )
      break
  }

  return <div className="register-msg">{content}</div>
}
export default ActiveEventRegistrationDetails
