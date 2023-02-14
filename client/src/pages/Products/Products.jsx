import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import "./Products.scss";   
import main from "/Users/abdursmac/Desktop/dev/website/client/src/images/main.gif"

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [sort,setSort] = useState(null); 
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  
  const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
  const handleChange =  (e)=>{
  const value = e.target.value;
  const isChecked = e.target.checked;

  setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value)
  );
  };

  return (
    <div className='Products'>
      <div className="left">
        <div className="filteritem">

          <h2>Product Categories</h2>
          {data?.map((item)=>(
          <div className="inputitems" key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
            <label htmlFor={item.id} >{item.attributes.title}</label>
          </div>
          ))}
        </div>

        <div className="filteritem">
         <h2> Filter by price</h2>
         <div className="inputitems">
          <span>₹10000</span>
          <input type="range" min={10000} max={50000} onChange={(e)=>setMaxPrice(e.target.value)}/>
          <span>{maxPrice}</span>
         </div>
        </div>
        <div className="filteritem">

          <h2>Sort by</h2>
          <div className="inputitems">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e) =>setSort("asc")} />
            <label htmlFor="asc">Price (Lowest First) </label>
          </div>
          <div className="inputitems">
            <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort("desc")}/>
            <label htmlFor="desc">Price (Highest First) </label>
          </div>
        </div>

      </div>
      <div className="right">
        <img className="catImg" src={main} alt="" />
        <List catId ={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>



    </div>
  );
};

export default Products;
