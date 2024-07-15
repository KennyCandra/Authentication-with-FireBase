import { useEffect, useState } from "react"
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth"


function AuthDetails() {
    const [user , setUser] = useState(null)


    useEffect(() => {
        const listen = onAuthStateChanged(auth ,(authUser) => {
            if (authUser) {
                setUser(authUser)
                console.log(authUser.email)
                const container = document.getElementById('container')
                container.classList.add('right-panel-active')
            } else {
                setUser(null)
            }
        })
        return listen()
    }, [])

    const signOut = () => {
        auth.signOut()
    }

  return (
    <h1 style={{marginTop : "100px"}}>{user ? <>Signed In as {user.email} <button onClick={signOut}>Sign Out</button></> : <>Signed Out</>}</h1>
  )
}

export default AuthDetails