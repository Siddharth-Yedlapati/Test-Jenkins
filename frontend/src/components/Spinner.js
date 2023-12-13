import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react';

const Spinner = ({path = "login"}) => {
    const [count,setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);
        },1000);
        count === 0 && navigate(`/${path}`, {
            state: location.pathname
        });
        return() => clearInterval(interval);
    }, [count, navigate, location, path]);

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "90vh" }}>
                <h1 className='Text-center'>Redirecting you to login in {count} seconds</h1>
                <div class="spinner-grow text-dark" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner