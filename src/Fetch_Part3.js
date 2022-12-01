import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Fetch_Part3() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    const [idButton, setIdButton] = useState(1)
    const handleClick = () => {
        setIdButton(id)
    }

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [idButton])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}> Fetch Ekle</button>
            <div>{post.title}</div>
        </div>
    )
}

export default Fetch_Part3;
