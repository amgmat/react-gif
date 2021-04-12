import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Puch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () =>{
    //     // categories.push('Hunter');
    //     // setCategories(['HunterXHunter', ...categories]);
    //     setCategories(cats => [...cats, 'Hunter']);
    //     // console.log(categories);
    // }
    return ( 
        <>
        <h2> GifExpert-App </h2> 
        <AddCategory setCategories={setCategories}/>
        <hr/>

        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            {categories.map(category =>
            <GifGrid 
            key={category}
            category = {category}/>)
            }
            {/* {
                categories.map(category =>
                     <li key={category}>{category}</li>
                )
            } */}
            {/* {
                categories.map(category =>{
                    return <li key={category}>{category}</li>
                })
            } */}
        </ol>
        </>
    )
}