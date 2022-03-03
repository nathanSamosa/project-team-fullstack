import { useState, useEffect } from "react";
import "../styling/post.css"

import PostComment from "./PostComment"

const postId = 1

const URL = process.env.REACT_APP_API_URL;
const postEndpoint = `/post/${postId}`
const postURL = URL + postEndpoint

const userDummyData = {
    id: 1,
    username: "NathanTheSamosa",
    password: "my-secret",
    email: "nathanthesamosa@gmail.com",
    admin: false
}

const Post = () => {

    const [postData, setPostData] = useState(null)
    const [commentTree, setCommentTree] = useState()
    const [userData, setUserData] = useState(userDummyData)

    const getPost = async () => {
        const res = await fetch(postURL)
        const data = await res.json();
        await setPostData(data.data)
    }

    const appendChild = (child, parent) => {
        return {
            ...parent,
            children: {
                ...parent.children,
                [child.id]: child
            }
        }
    }

    //If the comment we are constructing contains a parentId, search each comment for a parent to append to.
    const determineChildComment = (comment, parent) => {

        for (const child in parent) {
            
            const childIsParentOfComment = comment.parentId == parent[child].id
            //If child is the parent of the comment we are constructing, attach the comment to this child.
            //Otherwise, move on to the next comment.
            if(childIsParentOfComment) {
                parent[child] = appendChild(comment, parent[child])
                return
            }

            const childContainsChildren = parent[child].children
            //If child contains children of its own, go a layer deeper.
            //Otherwise, move onto the next child of parent
            if(childContainsChildren) {  
                determineChildComment(comment, parent[child].children)
            }
        }
    }

    //If the comment we are constructing has no parentId, attach it to the first layer of the construction.
    const createBaseComment = comment => {
        setCommentTree = {...setCommentTree, [comment.id]: comment}
    }

    const init = () => {
        let commentTree = {};
        console.log(postData)
        postData.comment.forEach(comment => {
            if (comment.parentId) determineChildComment(comment, commentTree)
            else createBaseComment(comment)
        })
        
        setCommentTree(commentTree)
    }

    useEffect(() => {
        !postData ? getPost() : init()
    }, [postData])



    console.log("commentTree", commentTree)

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

            {commentArr &&
                <div className="comments">
                    {Object.keys(commentTree).map(comment => {
                        return (
                            <PostComment
                                comment={commentTree[comment]}
                                userData={userData}
                                commentTree={commentTree}
                                postId={postId}
                            />
                        )
                    })}
                </div>
            }
        </main>
    )
}

export default Post
