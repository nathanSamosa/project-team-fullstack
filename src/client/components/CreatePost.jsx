import { useState } from "react";
import "../styling/createPost.css"

const URL = process.env.REACT_APP_API_URL;
const postEndpoint = "/post/"
const postURL = URL + postEndpoint

const emptyPost = {
    category: "",
    title: "",
    content: ""
}

const userDummyData = {
    id: 1,
    username: "NathanTheSamosa",
    password: "my-secret",
    email: "nathanthesamosa@gmail.com",
    admin: false
}

const CreatePost = () => {

    const [postDetails, setPostDetails] = useState(emptyPost)
    const [userDetails, setUserDetails] = useState(userDummyData)

    const createPost = (url, postDetails) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setPostDetails({
            ...postDetails, [name]: value
        })
    }

    const handleRadio = (e) => {
        const { id } = e.target
        setPostDetails({
            ...postDetails, category: id
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const postToSubmit = { ...postDetails, profileId: userDetails.id }
        createPost(postURL, postToSubmit)
    }

    return (
        <>
            <h1>Create a post</h1>
            <form className="createPostForm" onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    name="title"
                    id="postTitle"
                    placeholder="Title"
                    onChange={(e) => handleChange(e)}
                    value={postDetails.title}
                    required
                />
                <input
                    type="text"
                    name="content"
                    id="postContent"
                    placeholder="Content"
                    onChange={(e) => handleChange(e)}
                    value={postDetails.content}
                    required    
                />
                <div className="categoryRadios">
                    <div className="radioOption">
                        <input
                            type="radio"
                            name="postCategory"
                            id="discussion"
                            onChange={(e) => handleRadio(e)}
                            required
                        />
                        <label htmlFor="discussion">Discussion</label>
                    </div>
                    <div className="radioOption">
                        <input
                            type="radio"
                            name="postCategory"
                            id="rating"
                            onChange={(e) => handleRadio(e)}
                            required
                        />
                        <label htmlFor="rating">Rating</label>
                    </div>
                    <div className="radioOption">
                        <input
                            type="radio"
                            name="postCategory"
                            id="rant"
                            onChange={(e) => handleRadio(e)}
                            required
                        />
                        <label htmlFor="rant">Rant</label>
                    </div>
                    <div className="radioOption">
                        <input
                            type="radio"
                            name="postCategory"
                            id="media"
                            onChange={(e) => handleRadio(e)}
                            required    
                        />
                        <label htmlFor="media">Media</label>
                    </div>
                </div>
                <input type="submit" name="postSubmit" id="postSubmit" value="Post" />
            </form>
        </>
    )
}

export default CreatePost