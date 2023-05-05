import { useState } from "react";
import AddBlog from "./AddBlog";
import Login from "./Login";
import Registration from "./Registration";

const Authorization = (props) => {
    const [loggingIn, setLoggingIn] = useState(false);
    const loggedIn = props.user.id !== "";

    const handleLogin = (userId, name, email) => {
        setLoggingIn(true);
        props.onLogin(userId, name, email);
    }
    const handleLogout = () => {
        setLoggingIn(false);
        props.onLogout();
    }

    return (
        <div>
            {loggingIn || loggedIn ? 
            <>
                <button onClick={handleLogout}>Log Out</button>
                <h1>{props.user.name}</h1>
                <h2>{props.user.email}</h2>
                <AddBlog onSave={props.onBlogSave} />
            </>
            :
            <>
                <Registration />
                <Login onLogin={handleLogin} />
                
            </>
            }
        </div>
    )
}

export default Authorization