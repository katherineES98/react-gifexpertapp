import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //const [count, setCount]=useState(0);
    //const[images,setImages]= useState([]);
    //este componente hace que cuando se cargeu el componete por primera vez hace la peticion para obtener los gif y los coloca en la siguiente imagenes 
   // useEffect(()=>{
        //getGifs(); ya no es una funcion si no hay queimportarlo
         //retorna una promesa por el cual puedo poner el then donde tendriamos las imagenes 
        //llamo al setimages y mando la simagenes que es imgs como le puse la llamar la funcion del flecha
    
       // getGifs(category)
        //es lo mism con solo poner then( setImages)
     //   .then(  setImages )
   // },[category])
// el state es el resultado de custom hook
  //renombrar en laretructuracion sera en data images no data

    const {data:images, loading} =  useFetchGifs(category);
    //destructuraremos este objeto state es ves de const state le pondremos cost {data,loading}
    console.log(loading)

    
    //getGifs();
    return (
      <>
    <h3 className='animate__animated animate__fadeIn' >{ category }</h3>
    {/**   //hare algo cuando este cargando usare el operador ternario si es verdader cargando..... si es lo contrario fin.. */}
 
    {loading&& <p className='animate__animated animate__flash'>Loading</p>}
    {/*cargando me mostrara esto porque en ningun lugar estoy cambiado el loading por false*/} 
    <div className="card-grid">
  
    {
       
      images.map( img  =>(
           
            <GifGridItem 
            key={ img.id }
            { ...img }
            
            />
 
          ))
       }
       
      
     
     
     </div>
    </>
  )
}
