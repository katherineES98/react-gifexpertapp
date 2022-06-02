import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


//le pasamos category a useFectchGifs ya que este se lo pasamos a componente que esta en gifgrid

export const useFetchGifs =(category)=>{
//estado inicial sera un objeto que tendra un objeto que es un arreglo sera una data 
//cuando seuse porprimera ves el useFetchGifs tendremos este estado que estara cargando por defecto 
   const [state,setState] =useState({
          data:[],
          loading:true,
   })
 
  useEffect (()=>{
    getGifs(category)
       .then(imgs =>{
           
                console.log(imgs)
                setState({
                    data:imgs,
                    loading:false
                   })
         

               
       })
  },[category]) //arreglo vacio para ejecutarlo una ves


  
   return state; //retornaremos el state es decir la data quees un arreglo el state osea esto { data:[],loading: true, el state le podriamosponer otro nombre si queremos el stae es la informacion que contiene del useFecthgifs
 }
