import React from 'react';
import { useState } from 'react';
import { postData } from '../api/Postapi';

const Form = ({data,setData}) => {
    const [formData,setFormData] = useState({
        title :"",
        body: "",
})


const handleChange = (e) =>{
   const name = e.target.name;
   const value = e.target.value;

   setFormData((prev)=>{
    return{
        ...prev,
        [name]:value,
    }
   })
}

const addPostData = async () => {
    const res = await postData(formData);
    console.log("res", res);

    if (res.status === 201) {
      setData([...data, res.data]);
      setFormData({ title: "", body: "" });
    }
  };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData();
      };
   
  return (
    <>
    <form onSubmit={handleFormSubmit}>
        <div>
            <label htmlFor="title"></label>
            <input type="text"
            id='title'
            name='title'
            placeholder='Add Title'
            value={formData.title}
            onChange={handleChange}
             />
        </div>
        <div>
            <label htmlFor="title"></label>
            <input type="text"
            id='body'
            name='body'
            placeholder='Add Body'
            value={formData.body}
            onChange={handleChange}
            />
        </div>
        <div>
            <button type='submit'>ADD</button>
        </div>
    </form>
    </>
  );
};

export default Form;
