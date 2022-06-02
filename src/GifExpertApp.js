import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp= () =>{
   //arreglo de categorias 
    //const categories=['One Punch','Samurai X','Dragon Ball']
// usaremos un hook porque asi com lo teniamos en el arreglo en una const no se podria porque no permita cambios si necesitamos agregar mas categorias

  const [categories, setCategories]=useState (['One Punch'])
  
  //const handleAdd =()=>{
      /**una manera 
       
       * setCategories((c)=> c.concat('HunterXHuntter'));
    console.log(setCategories)
      */

  //  setCategories( cats=>[...cats,'HunterXHuntter'])
    
//} 
    return (
      <>
       <h2>GifExpertApp</h2>
       <AddCategory setCategories = {setCategories} />
       <hr/>

      {/**<button onClick={handleAdd}>Agregar</button>} */} 
      {/**CRear una lista ordenada con el arreglo de categoria para poder redernrizarla */}

       <ul>
          {/**Barrer cada elemtno del arreglo y retornar los quencesito podriamos que pensarque con un for dentro de las { } pero no regresa nada el ciclo for y usaremos el map*/}

          {

                categories.map((category,i)=>( 
                    <GifGrid 
                    key={ category }
                    category={ category }
                     />
                ))
                
          }


       </ul>

       </>
  )

  //asi se puede hacer  categories.map((category,i)=>{   return  <li key={ category }>{ category }</li>ode otra manera como esta: }) 
   
   
}


export default GifExpertApp;