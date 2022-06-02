import React from 'react'

/**
 * 
 * podria ser con props export const GifGridItem =(props) => {
    console.log(props.img) y imrpimiria algo asi{
    "id": "UU2VKeTNOgFFoYiAIp",
    "title": "Sad Season 1 GIF by Rick and Morty",
    "url": "https://media1.giphy.com/media/UU2VKeTNOgFFoYiAIp/giphy.gif?cid=b4da5b16qtoa7w2v8duz0bxfth5qb1ismnsj8gmpjopw5wom&rid=giphy.gif&ct=g"
}
 */

export const GifGridItem =({id, title,url}) => {
    //console.log(id,title,url)
    return (
    <div className="card animate__animated animate__fadeIn ">
    {/**  {img.title}*/}
       <img src={url} alt={title} />
       <p>{title}</p>
    </div>
  )
}
