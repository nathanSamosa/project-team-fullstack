import { useState, useEffect } from "react";
import "../styling/post.css"

const URL = process.env.REACT_APP_API_URL;
const postEndpoint = "/post/1"
const commentEndpoint = "/comment/1"
const postURL = URL + postEndpoint
const commentURL = URL + commentEndpoint

const Post = () => {

    const userDummyData = {
        id: 1,
        username: "NathanTheSamosa",
        password: "my-secret",
        email: "nathanthesamosa@gmail.com",
        admin: false
    }

    const [postData, setPostData] = useState(null)
    const [commentArr, setCommentArr] = useState([])
    const [userData, setUserData] = useState(userDummyData)

    const getPost = async () => {
        const res = await fetch(postURL)
        const data = await res.json();
        console.log(data)
        setPostData(data.data)
        setCommentArr(data.data.comment)
    }

    useEffect(() => {
        getPost()
    }, [])

    const handleCommentReply = (comment) => {
        const commentData = {...comment}
        commentData.form = true
        console.log(commentData)
    }

    return (
        <main className="postPage">
            {postData &&
                <div className="post">
                    <p className="postUsername">{postData.profile.user.username}</p>
                    <p className="postDateTime">{postData.createdAt}</p>
                    <p className="postTitle">{postData.title}</p>
                    <p className="postContent">{postData.content}</p>
                    <div className="postInteract">
                        <button className="postReply">Reply</button>
                        {userData.admin && (
                            <button className="postDelete">Delete</button>
                        )}
                    </div>
                </div>
            }
            <div className="comments">
                {commentArr &&
                    commentArr.map((comment, index) => {
                        return (
                            <div className="comment">
                                <div className="individualComment">
                                    <p className="commentUsername">{comment.profile.user.username}</p>
                                    <p className="commentDateTime">{comment.createdAt}</p>
                                    <p className="commentContent">{comment.content}</p>
                                    <div className="commentInteract">
                                        <button className="commentReply" onClick={handleCommentReply(comment)}>Reply</button>
                                        {userData.admin && (
                                            <button className="commentDelete">Delete</button>
                                        )}
                                    </div>
                                </div>
                                {comment.children &&
                                    comment.children.map((child, index) => {
                                        return (
                                            <div className="commentChild">
                                                <p className="childUsername">{child.profile.user.username}</p>
                                                <p className="childDateTime">{child.createdAt}</p>
                                                <p className="childContent">{child.content}</p>
                                                <div className="childInteract">
                                                    <button className="childReply" onClick={handleCommentReply(child)}>Reply</button>
                                                    {userData.admin && (
                                                        <button className="childDelete">Delete</button>
                                                    )}
                                                </div>
                                                {child.children &&
                                                    child.children.map((child, index) => {
                                                        return (
                                                            <div className="commentChild">
                                                                <p className="childUsername">{child.profile.user.username}</p>
                                                                <p className="childDateTime">{child.createdAt}</p>
                                                                <p className="childContent">{child.content}</p>
                                                                <div className="childInteract">
                                                                    <button className="childReply" onClick={handleCommentReply(child)}>Reply</button>
                                                                    {userData.admin && (
                                                                        <button className="childDelete">Delete</button>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                {/*<div className="comment">
                    <p className="commentUsername">Markus</p>
                    <p className="commentDateTime">28/02/2022 1:22pm</p>
                    <p className="commentContent">
                        Lol ok buddy
                    </p>
                    <div className="commentInteract">
                        <button className="commentReply">Reply</button>
                        <button className="commentDelete">Delete (Conditional)</button>
                    </div>
                </div>
                <div className="comment">
                    <p className="commentUsername">Juno</p>
                    <p className="commentDateTime">28/02/2022 1:21pm</p>
                    <p className="commentContent">
                        That's pretty cool
                    </p>
                    <div className="commentInteract">
                        <button className="commentReply">Reply</button>
                        <button className="commentDelete">Delete (Conditional)</button>
                    </div>
                </div>*/}
            </div>
        </main>
    )
}

export default Post