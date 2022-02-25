

const HomePosts = () => {
    return (
        <div className="postContainer">
        <div className="postHeader">
          <h2>Posts</h2>
          <input
            type="text"
            className="searchPost"
            placeholder="Search Posts"
          />
          <button>New Post</button>
        </div>
        <div className="post">
          <h3>What's your favorite Pokemon?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
            rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
            Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla
            consectetur id nec massa. Aliquam erat volutpat.
          </p>
          <div className="postInfoContainer">
            <div className="postAuthor">
              <p>"Other" Nathan</p>
            </div>
            <div className="postDate">
              <p>21:23, 21 December 2022</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HomePosts;