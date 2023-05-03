
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {

        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(
            `https://6451df30a2860c9ed4fc94ad.mockapi.io/crud/${id}`,
            {
                name: name,
                email: email,
            }
        ).then(() => {
            navigate("/read");
        })
    };

    return (
        <>
            <div className='header'>
                <h1>Update Form</h1>
            </div>
            <form className='container'>

                <label htmlFor='name'>
                    Name:
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label htmlFor='email'>
                    Email:
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>



                <div className="button-row">
                    <button type="submit" onClick={handleUpdate}>Submit</button>
                    <Link to="/read">
                        <button type="button">Back</button>
                    </Link>
                </div>
            </form>
        </>
    )
}

export default Update;