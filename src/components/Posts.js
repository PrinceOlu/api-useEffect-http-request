import axios from 'axios'
import React,{useEffect} from 'react'
import { useState } from 'react'


const URl = "https://jsonplaceholder.typicode.com/albums"
function Posts() {
  // useState
  const [posts,setPosts] = useState([]);
  // useEffect
  useEffect(()=>{
      axios
      .get(URl)
      .then((post)=>{
     console.log(post);
    setPosts(post.data)
  }).catch((error)=>{
    console.log(error);
    
  })
  },[])
  return (
    <div>
      <h1>Albums Lists</h1>
      
      {
       posts.map((post)=>{
          return (
            <div key={post.id}>
                 <h2>UserId: {post.userId}</h2>
                 <h2>id: {post.id}</h2>
                 <h2>title: {post.title}</h2>

            </div>
           
          );
       })
        
      }
    
    
    </div>
  )
}

export default Posts