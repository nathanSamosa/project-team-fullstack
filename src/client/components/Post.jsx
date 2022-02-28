import "../styling/post.css"

const Post = () => {
    return (
        <main className="postPage">
            <div className="post">
                <p className="postUsername">Username</p>
                <p className="postDateTime">28/02/2022 1:18pm</p>
                <p className="postContent">
                    Okay so some YouTubers have pointed the star icon in the Japanese titles for the games and how said icons always hint at the new game gimmick mechanic.

                    And the only thing that comes to my mind involving stars are constellations which in turn makes me think of Saint Seiya/Knights of the Zodiac, which is a series about warriors donning armor based on constellations.

                    So my theory is that certain Pokemon will be able to evolve or form change similar to Zamazenta and Zacian, wearing 'armor' made of some kind. OR it's a total form change, acquiring a new typing.

                    But that's my theory. What are you guys' theories.
                </p>
                <div className="postInteract">
                    <p>Reply</p>
                    <p>Delete (Conditional)</p>
                </div>
            </div>
            <div className="comments">
                <div className="comment">
                    <div className="commentUsername">
                        <p>Markus</p>
                    </div>
                    <div className="commentDateTime">
                        <p>28/02/2022 1:22pm</p>
                    </div>
                    <div className="commentContent">
                        <p>
                            Lol ok buddy
                        </p>
                    </div>
                    <div className="commentInteract">
                        <p>Reply</p>
                        <p>Delete (Conditional)</p>
                    </div>
                </div>
                <div className="comment">
                    <div className="commentUsername">
                        <p>Juno</p>
                    </div>
                    <div className="commentDateTime">
                        <p>28/02/2022 1:21pm</p>
                    </div>
                    <div className="commentContent">
                        <p>
                            That's pretty cool
                        </p>
                    </div>
                    <div className="commentInteract">
                        <p>Reply</p>
                        <p>Delete (Conditional)</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Post