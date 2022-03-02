export default function PostComment({comment, currentIteration = 0, userData}) {

    console.log("RECURSIVE", comment)

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

                    console.log(reply)
                    return (
                            
                        <PostComment
                            comment={comment.children[reply]}
                            currentIteration={++currentIteration}
                            userData={userData}
                        />

                    )
                })
            }
        </div>





        
    )
}