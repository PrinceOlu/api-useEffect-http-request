import React,{useEffect,useState} from "react"
import axios from 'axios'


const uri = "https://jsonplaceholder.typicode.com/photos"
function Posts() {
  // useState
  const [photos,setPhotos] = useState([])
  // useEffect
  useEffect(()=>{
    axios
    .get(uri)
    .then((photos)=>{
      console.log(photos.data);
      setPhotos(photos.data)
      
    })
    .catch()
  },[])
  return (
    <div>
      <h1>Photos</h1>
          {
            photos.map((photo)=>{
              return (
                <div key={photo.id}>
                  <h2>Photo Id: {photo.albumId}</h2>
                  <h2>Id: {photo.id}</h2>
                  <h2>Photo Title: {photo.title}</h2>
                 <h2>Image</h2> <img src={photo.url} style={{ width: "100px", height: "100px" }} alt="Description" />

                </div>
              )
            })
          }
    </div>
  )
}

export default Posts