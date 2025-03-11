import { useState } from "react";

const Login = () =>{
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = (e) => {
       
        // Put login auth logic later
        console.log(e)
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={pass}
                    onChange={(e)=>setEmail(e.target.value)}
                    
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;