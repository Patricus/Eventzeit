import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import "./authForm.css";

const LoginForm = ({ setShowLogin }) => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onLogin = async e => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        } else {
            setShowLogin(false);
        }
    };

    const updateEmail = e => {
        setEmail(e.target.value);
    };

    const updatePassword = e => {
        setPassword(e.target.value);
    };

    if (user) {
        return <Redirect to="/events" />;
    }

    return (
        <form onSubmit={onLogin}>
            <div className="modal-title">
                <h2>Log In</h2>
            </div>
            {errors.length > 0 && (
                <div className="error-container">
                    <ul>
                        {errors.map((error, ind) => (
                            <li key={ind}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="modal-items-container">
                <div className="modal-items">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={updateEmail}
                    />
                </div>
                <div className="modal-items">
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={updatePassword}
                    />
                    <button type="submit">Login</button>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
