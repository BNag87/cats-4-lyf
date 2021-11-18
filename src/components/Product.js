import React from "react";
import { useEffect, useState } from "react";
import "./Product.css";
var faker = require('faker');

const Product = ({bket, sbket}) => {
  const [productItem, setProductItem] = useState([]);
  const apiKey = "ca70e52c-2990-4050-a666-5e2e97cb5784";

  useEffect(() => {
    GetProduct();
  }, []);

  const GetProduct = async () => {
    console.log("Running the getProduct function in Product.js...");
    await fetch("https://api.thecatapi.com/v1/images/search?limit=10", {
      headers: {
        "x-api-key": apiKey,
      },
    })
      .then((res) => res.json())
      .then((cats) => {
        for (let i = 0; i < cats.length; i++) {
          const cat = cats[i];
          cat.price = faker.commerce.price();
          cat.name = faker.animal.cat();
        }
        setProductItem(cats);
        console.log(cats);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  
  const basketHandler = (cat) => {
    console.log("In 'basketHandler', cat parameter is: "+ cat)
    let tempArr = bket;
    tempArr.push(cat);
    console.log("In 'basketHandler', cat was pushed into tempArr, It is now: "+ tempArr)
    sbket(tempArr) //shorthand calls from app
    
  };

  return (
    // This displays cat cars with randomly generated images, names and prices
    <div className="display-board">
      
      {productItem.map((product, price) => (
        <div className="product-container">
          <div className="image-container">
            <img src={product.url} alt={product.name} />
          </div>
          <div className="product-content">
            <>
              <div className="product.Name">{product.name}</div>
              <div className="product.Price">{product.price}</div>
            </>
          </div>
          <div className="btn">
            <button onClick={() => basketHandler(product)}>Add to Basket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
