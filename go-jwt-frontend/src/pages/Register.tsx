import React, { SyntheticEvent, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRedirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        await fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                password
            }),
            headers: {"Content-Type": "application/json"},
        });

        setRedirect(true);
    }

    if(isRedirect) navigate("/login")

    return(
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please Register</h1>

            <input type="name" className="form-control" id="floatingInput" placeholder="John Doe" required 
                onClick={e => setName(e.currentTarget.value)}
            ></input>

            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required
                onClick={e => setEmail(e.currentTarget.value)}
            ></input>

            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required
                onClick={e => setPassword(e.currentTarget.value)}
            ></input>

            <button className="btn btn-primary w-100 py-2" type="submit">Register</button>

        </form>
    );
};

export default Register;