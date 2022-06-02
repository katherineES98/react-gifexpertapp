export const getGifs = async (category) =>{
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=6FKLM2FPrInZZ2bBWfLFc3N6PCgWQPlZ`
    const resp= await fetch(url);
    const {data} =await resp.json();
     const gifs = data.map(img=>{
        return{
           id: img.id,
           title:img.title,
           url:img.images?.downsized_medium.url

        }
      
     })
   // console.log(gifs)
   // setImages(gifs)
   //no tenemos el setImages entonces ese sera que retorne la funcion el herlper el gifs

     return gifs;

   }