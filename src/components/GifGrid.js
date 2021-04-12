import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React, {useState, useEffect} from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export default function GifGrid({category}) {

    // const [count, setCount] = useState(0);

    // const [images, setImages]= useState([])

    const {data:images, loading} = useFetchGifs(category);
    // const state = useFetchGifs();
    console.log(images, loading);
    // console.log(state);

    // useEffect(()=>{
    //     getGifs(category).then(
    //         setImages
    //         // imgs=>setImages(imgs)
    //     )
    // },[category])

    // const getGifs = async() => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Cv4gqggsi56QnHrdU26SYn34S4GTVrAa`;
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();

    //     const gifs = data.map( img=>{
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     // console.log(data);
    //     console.log(gifs);
    //     setImages(gifs);
    // }
    
    // getGifs();


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            {/* {loading ? 'Cargando...': 'Data cargada'} */}
        <div className="card-grid">
            {
                images.map(img=>(
                    <GifGridItem 
                    key={img.id}
                    {...img}/>
                    ))
                }
        </div>
        </>
    )
}

// <ol>
//     {images.map(({id, title}) => (
    //         <li key={id}>{title}</li>
    //     ))}
    //     {/* {images.map(img => (
        //         <li key={img.id}>{img.title}</li>
    //     ))} */}
    // </ol>

    // {/* <h3>{count}</h3> */}
    // {/* <button onClick={()=> setCount(count + 1)}></button> */}