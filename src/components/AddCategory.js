import React ,{useState} from 'react';
import PropTypes from 'prop-types';

export default function AddCategory({ setCategories }) {

    const [inputValue, setInputValue] = useState('')
    // const [inputValue, setInputValue] = useState('Hola Mundo')
    
    const handleInputChange = (e)=>{
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Submit hecho');

        if(inputValue.trim().length>2){
            setCategories(cats=> [inputValue, ...cats]);
            // setCategories(cats=> [...cats, inputValue]);

            setInputValue('');

        }

    }

    return ( 
    // <>
    //     <h3>{inputValue}</h3>
    //     <input 
    //     type="text"
    //     value={inputValue}
    //     onChange = {handleInputChange}
    //     />
    // </>
    <form action="" onSubmit = { handleSubmit}>
        <h3>{inputValue}</h3>
        <input 
        type="text"
        value={inputValue}
        onChange = {handleInputChange}
        />
    </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}