import './App.css'
import LoginContainer from './LoginContainer/LoginContainer'
import SignUpContainer from './SignUpConainter/SignUpContainer'
import OverlayContainer from './OverlayContainer/OverlayContainer'
import AuthDetails from './AuthDetails/AuthDetails'

function App() {

  return (
    <>
    <div className ='container' id='container'>
    <LoginContainer />
    <SignUpContainer />
    <OverlayContainer />
    </div>
    <AuthDetails />
    </>
  )
}

export default App
