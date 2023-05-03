import React from 'react';
import './Read.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {

    const [data, setdata] = useState([]);

    function getData() {
        axios.get('https://6451df30a2860c9ed4fc94ad.mockapi.io/crud')
            .then((res) => {
                console.log(res.data);
                setdata(res.data);
            });
    }

    const handleDelete = (id) => {
        axios.delete(`https://6451df30a2860c9ed4fc94ad.mockapi.io/crud/${id}`
        ).then(() => {
            getData();
        })
    }

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <div className='header'>
                <h1>Read Form</h1>
            </div>
            <div className="container">

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    {
                        data.map((eachData) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{eachData.id}</td>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>
                                            <Link to="/update">
                                                <button onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email)}>Edit</button>
                                            </Link>

                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(eachData.id)}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })

                    }
                </table>
                <Link to="/">
                    <button style={{ marginTop: '10px' }}>Create Form</button>
                </Link>

            </div>


        </>
    );
};

export default Read;
