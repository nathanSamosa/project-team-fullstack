import { useState, useEffect } from "react";

const URL = process.env.REACT_APP_API_URL;
const postEndpoint = "/post";
const postURL = URL + postEndpoint;

const HomePosts = () => {
  const [postArr, setPostArr] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = e => {
      setSearch(e.target.value);
  }

  const changeDate = oldDate => {
      const tIndex = oldDate.indexOf("T");
      const dayMonthYear = oldDate.slice(0, tIndex);
      const pointIndex = oldDate.indexOf(".");
      const time = oldDate.slice(tIndex + 1, pointIndex)
      const newDate = `${dayMonthYear}, ${time}`
      return newDate;
  }

  const getPosts = async () => {
    fetch(postURL)
      .then((res) => res.json())
      .then((data) => {
        setPostArr(data.data);
        console.log(data.data);
      });
    // console.log(postArr);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="postContainer">
      <div className="postHeader">
        <h2>Posts</h2>
        <input 
          type="text" 
          className="searchPost" 
          placeholder="Search Posts" 
          value={search} 
          onChange={e => handleSearch(e)}/>
        <button>New Post</button>
      </div>
      {postArr && 
        postArr.filter(post => 
          {return post.content.toLowerCase().includes(search)}
        ).map((post, index) => {
            return (
                <div className="post" key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <div className="postInfoContainer">
                    <div className="postAuthor">
                        <p>{post.profile.user.username}</p>
                    </div>
                    <div className="postDate">
                        <p>{changeDate(post.createdAt)}</p>
                    </div>
                    </div>
                </div>

            )
        })}
    </div>
  );
};

export default HomePosts;
