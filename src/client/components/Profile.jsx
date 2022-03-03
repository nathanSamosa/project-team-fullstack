import { use } from "bcrypt/promises";
import { useState, useEffect } from "react";

const userDummyData = {
    id: 1,
    username: "NathanTheSamosa",
    password: "my-secret",
    email: "nathanthesamosa@gmail.com",
    admin: false
}

const userDummyId = userDummyData.id

const URL = process.env.REACT_APP_API_URL;
const postEndpoint = `/post/user/${userDummyId}`;
const postURL = URL + postEndpoint;




const Profile = () => {

    const [posts, setPosts] = useState(null)

    const getPosts = async () => {
        fetch(postURL)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.data);
            });
    };

    const deletePost = async (url) => {
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    const handleDelete = (e, post) => {
        const deletePostId = post.id
        const deletePostEndpoint = `/post/${deletePostId}`
        const deletePostURL = URL + deletePostEndpoint
        deletePost(deletePostURL)
        getPosts()
    }

    useEffect(() => {
        console.log(userDummyData)
        getPosts();
        
    }, []);

    return (
        <div className="profileContainer">
            <h1>Profile</h1>
            {posts &&
                posts.map((post, index) => {
                    return (
                        <div className="post" key={index}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <div className="postInfoContainer">
                                <div className="postAuthor">
                                    <p>{post.profile.user.username}</p>
                                </div>
                                <div className="postDate">
                                    <p>{post.createdAt}</p>
                                </div>
                            </div>
                            <button className="deletePost" onClick={(e) => handleDelete(e, post)}>Delete Post</button>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Profile