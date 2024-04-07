const Notification = props => {
  //  Write your code here.
  let {cardbgcontainer, iconlink, iconstyles, messagestyles, message} = props
  return (
    <div className={`cardcontainer ${cardbgcontainer}`}>
      <img src={iconlink} className={iconstyles} />
      <p className={messagestyles}>{message}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Notifications</h1>
    <Notification
      cardbgcontainer='bgprimary'
      iconlink='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      iconstyles='iconstyles'
      messagestyles='messagestyles'
      message='Information Message'
    />

    <Notification
      cardbgcontainer='bgsuccess'
      iconlink='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      iconstyles='iconstyles'
      messagestyles='messagestyles'
      message='Success Message'
    />

    <Notification
      cardbgcontainer='bgwarning'
      iconlink='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      iconstyles='iconstyles'
      messagestyles='messagestyles'
      message='Warning Message'
    />

    <Notification
      cardbgcontainer='bgdanger'
      iconlink='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      iconstyles='iconstyles'
      messagestyles='messagestyles'
      message='Error Message'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
