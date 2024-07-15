import './OverlayContainer.css'

function OverlayContainer() {
  const handleSignInClick = () => {
    const container = document.getElementById('container')
    container.classList.remove('right-panel-active')
  }

  const handleSignUpClick = () => {
    const container = document.getElementById('container')
    container.classList.add('right-panel-active')
  }
  return (
    <div className='overlay-container'>
        <div className="overlay">
            <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default OverlayContainer