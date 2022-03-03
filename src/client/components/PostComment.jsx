export default function PostComment({comment, currentIteration = 0, userData, commentTree, postId}) {

    const URL = process.env.REACT_APP_API_URL;
    const commentEndpoint = `/post/comment`
    const commentURL = URL + commentEndpoint

    const postComment = async(newComment) => {
        console.log("postComment")
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        }

        const res = await fetch(commentURL, fetchOptions)
        const data = await res.json()
        console.log(data)
    }

    const handleCommentReply = (comment) => {

        const newComment = {
            profileId: userData.id,
            postId: postId,
            parentId: comment.id,
            content: "Test!"
        }
        postComment(newComment)
    }


    return currentIteration == 5 ? null : (

        <div className="commentChild">

            <p className="commentUsername">{comment.profile.user.username}</p>
            <p className="commentDateTime">{comment.createdAt}</p>
            <p className="commentContent">{comment.content}</p>
            <div className="commentInteract">
                <button className="commentReply" onClick={() => handleCommentReply(comment)}>Reply</button>
                {(comment.profile.user.id == userData.id || userData.admin) && (
                    <button className="commentDelete">Delete</button>
                )}
            </div>

            {comment.children &&
                Object.keys(comment.children).map(reply => {

                    console.log(comment.children[reply])
                    return (
                            
                        <PostComment
                            comment={comment.children[reply]}
                            currentIteration={++currentIteration}
                            userData={userData}
                            commentTree={commentTree}
                            postId={postId}
                        />

                    )
                })
            }
        </div>





        
    )
}
