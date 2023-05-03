import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const history = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        axios.post(
            'https://6451df30a2860c9ed4fc94ad.mockapi.io/crud',
            {
                name: name,
                email: email,
                header,
            })

            .then(() => {
                history('/read');
            });


    };


    return (


        <form className='container'>
            <div className='header'>
                <h1>Create Form</h1>
            </div>
            <label htmlFor='name'>
                Name:
                <input type='text' onChange={(e) => setName(e.target.value)} />
            </label>
            <label htmlFor='email'>
                Email:
                <input type='email' onChange={(e) => setEmail(e.target.value)} />
            </label>



            <div className="button-row">
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <Link to="/read">
                    <button type="button">MainPage</button>
                </Link>
            </div>
        </form>

    );
};

export default Create;
