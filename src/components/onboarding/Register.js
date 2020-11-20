import React from 'react';

const Register = ({ credentials, onFormChange }) => {
    return (
        <div>
            <input
                name="email"
                placeholder="enter email"
                value={credentials.email}
                onChange={(e) => onFormChange(e)}>
            </input>
            <input
                name="password"
                type="password"
                placeholder="enter password"
                value={credentials.password}
                onChange={(e) => onFormChange(e)}>
            </input>
        </div>
    );
};

export default Register;