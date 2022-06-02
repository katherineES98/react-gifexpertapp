import React, { useState } from 'react'
import PropTypes from 'prop-types'

//de esa forma tambien se puede exportar en ves de ponerexport default y la funcion 
export const AddCategory = ({setCategories}) => {
  //esa  input tiene que tener algun tipo de estado porque quiero saber que es lo que esta escribiendo la persona 
   const [inputValue,setInputValue] =useState('') // si lo dejamosvcio el useState()  sera undefinido por consecuencia podria marcar ese warning y s queremos que nuestri estao sea algo pongamolo un string vacio  
   //cambiando el estado al poder escribir en el input
   const handleInputChange = ( e ) =>{
       //console.log(e.target.value)
       //lamar a setinputVlue y pasarle esp de e.target.value
        setInputValue(e.target.value); //y asi seremos capaces de que ya podamos escribir en el input
   
    }

    //lo que haremos que al escribir alfo el input al darle enter se dispare algo
    const handleSubmit =(e) =>{
// controlar el recargo por defecto del formulario es 

     e.preventDefault();
     //console.log('submit hecho');
     if(inputValue.trim().length > 2){
        setCategories( cats=>[ inputValue, ...cats])//hacer la insercion que no sea vacia

        setInputValue('');//doble posteo
    }
    
    }
   
   return (
    <>
      <form onSubmit={ handleSubmit }>
       {/**<h1>{inputValue}</h1> */} {/**conestopodemosver que al escribir en el input se puede redenrizar lo que estamos escribiendo interesante, VALOR ACTUALZADO DE LOULTIM QUE LAPERSONA ESCRIBIO */}
     <input 
     type='text'
     value={inputValue}
     onChange={ handleInputChange }
    />
        </form>
     
    
    </>
  )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
 }
