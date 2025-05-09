import React from 'react'

const Blog = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
    next:{revalidate:3600}
  }

  );
  const posts = await res.json();
  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {
          posts.map((post:any)=>(
            <li key={post.id}>
              <h1>{post.title}</h1>
              {/* <p>{post.body}</p> */}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Blog