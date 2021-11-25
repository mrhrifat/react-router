import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Post() {
    const par = useParams()
    const navigate = useNavigate()
    const goBack = () => {
        // navigate('/posts')
        navigate(-1)
        // navigate(-2)
    }
    return (
        <div>
            <small>My Post Id is {par.postId}</small>
            <br />
            <button type='button' onClick={goBack}>Back</button>
        </div>
    )
}

export default Post
