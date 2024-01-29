import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props: {setName: (name: string) => void}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRedirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        const response = fetch("http://localhost:8000/api/login", {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {"Content-Type": "application/json"},
        });

        const content = (await response).json;
        props.setName(content.name);
        setRedirect(true);
    }

    if(isRedirect) navigate("/")
    return (
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required
                onClick={e => {setEmail(e.currentTarget.value)}}
          ></input>

          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required
                onClick={e => setPassword(e.currentTarget.value)}
          ></input>

          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>

        </form>
    );
};

export default Login;