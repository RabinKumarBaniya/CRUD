import React from 'react';
import './Read.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Read = () => {

    const [data, setdata] = useState([]);

    function getData() {
        axios.get('https://6451df30a2860c9ed4fc94ad.mockapi.io/crud')
            .then((res) => {
                console.log(res.data);
                setdata(res.data);
            });
    }

    function handleDelete(id) {
        axios.delete(`https://6451df30a2860c9ed4fc94ad.mockapi.io/crud/${id}`
        ).then(() => {
            getData();
        })
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
                                            <button>Edit</button>
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
                <button style={{ marginTop: '10px' }}>Create Form</button>

            </div>


        </>
    );
};

export default Read;
