import React, { useState } from 'react';
import { useRef } from 'react';


const Addproduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const nameRef = useRef(null);
    const priceRef = useRef(null);
    const categoryRef = useRef(null);
    const companyRef = useRef(null);

    const addProduct = async()=>{
        console.warn(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId);
        let result = await fetch("http://localhost:4000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = await result.json()
        console.warn(result);
    }
    return (
        <div className='product' >
            <h1>Add Products</h1>
            <input type="text" className="inputBox" placeholder='Enter product name' onChange={(e) => setName(e.target.value)} ref={nameRef}/>
            <input type="text" className="inputBox" placeholder='Enter price' onChange={(e) => setPrice(e.target.value)} ref={priceRef} />
            <input type="text" className="inputBox" placeholder='Enter category name'  onChange={(e) => setCategory(e.target.value)} ref={categoryRef}/>
            <input type="text" className="inputBox" placeholder='Enter product name' onChange={(e) => setCompany(e.target.value)} ref={companyRef} />
            <button onClick={addProduct} className="appButton" type="button">Add Product</button>
        </div>
    )
}
export default Addproduct