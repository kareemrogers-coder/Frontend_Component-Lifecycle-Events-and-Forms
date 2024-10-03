### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Lesson 3: Assignments | Component Lifecycle Events and Forms

**1. Mastering React Functional Components and Axios with useEffect**

**Objective:** The objective of this assignment is to develop proficiency in using React functional components, managing side effects with the useEffect hook, and performing HTTP requests using Axios. This hands-on exercise will enhance your skills in building dynamic, data-driven React applications.

**Problem Statement:** Your task is to create a React application that interacts with the Fake Store API. The application should handle asynchronous operations such as fetching data, processing requests, and updating the user interface dynamically using modern JavaScript features.

**Task 1: Fetch and Display Products**

1. Create a functional component ProductList to display a list of products.
2. Use the useEffect hook to fetch character data from the FakeStoreAPI endpoint https://fakestoreapi.com/products using Axios.
3. Display each product's name, price and image
   HINT: Don't forgot to install axios and import it into your component page
   npm install axios
   Expected Outcome:

Successfully fetching and displaying a list of products characters from the API.
Each product should be listed with its name, price and image.

```jsx
<h3>Products:</h3>

      { products.map((product, index) =>
        <div key={index}>
           {/* <p>Id#{product.id}, </p> */}
           <p>Product: {product.title}</p>
           <p>Price: ${product.price}</p>
           <div><img src={product.image} alt='#' width={50} height={50}/></div>

           <br></br>

          <ReusableButton handleClick={() => deleteProduct(index)} title="Delete Product"/>
          <br />
          <ReusableButton handleClick={() => selectProduct(product.id)} title="Select Product"/>

        </div>
```

**Task 2: Implement the Character Detail Feature**

1. Create a functional component ProductDetail to display detailed information about a selected product.
2. Implement a "onClick" event handler to fetch additional product details asynchronously when product is clicked (this can be any method you would like ie. by clicking on the image or a button).
3. Use Axios to send a GET request to the FakeStoreAPI endpoint https://fakestoreapi.com/products/${productID}.
   Note: ${productID} is referring to the id of the product you want to get data for so we can fetch the product details dynamically
   In use, it should be something like https://fakestoreapi.com/products/1 to get data for a product with an ID of 1
4. Display the products name, price, and image, description, category, and rating.

**Expected Outcome:**

- Ability to click on a product (any method) to view detailed information about the product.
- Detailed information should include the product's name, price, and image, - description, category, and rating.

**Make a button**

```jsx
import React from "react";

const ReusableButton = ({
  handleClick,
  title = "click me",
  selectedProductID = "1",
}) => {
  // Let's give the button some styling
  // We can use the style attribute to add inline styling
  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
  };

  // Time for functionality 😎
  const handleClick2 = () => {
    alert("You clicked the button");
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default ReusableButton;
```

**Then create a detail card:**

```jsx
{
  selectedProductInfo && (
    <div className="card">
      <h3>Selected Product:</h3>

      {/* Pretend it is a card */}
      <p>Name: {selectedProductInfo.title}</p>
      <p>Price: ${selectedProductInfo.price}</p>
      <p>Catacory: {selectedProductInfo.category}</p>
      <p>Description: {selectedProductInfo.description}</p>
      <p>Rating: {selectedProductInfo.rating.rate}/5</p>
      <div className="product-img">
        <img src={selectedProductInfo.image} alt="#" width={250} height={250} />
      </div>
    </div>
  );
}
```

**Task 4: Integrating Components and Updating the User Interface**

- In your main App component, integrate ProductList and ProductDetail.
- Ensure that the character detail view updates dynamically when a character thumbnail is clicked.

**Expected Outcome:**

- The ProductDetail component should update and display detailed information about the selected product immediately when a product is clicked.
- Seamless integration of ProductList and ProductDetail in the App component.

**disclimer:** I blended the product and used a button to display the product details.
```jsx
{ selectedProductInfo && 
        <div className='card'>
          <h3>Selected Product:</h3>

          {/* Pretend it is a card */}
          <p>Name: {selectedProductInfo.title}</p>
          <p>Price: ${selectedProductInfo.price}</p>
          <p>Catacory: {selectedProductInfo.category}</p>
          <p>Description: {selectedProductInfo.description}</p>
          <p>Rating: {selectedProductInfo.rating.rate}/5</p>
          <div className='product-img'><img src={selectedProductInfo.image} alt='#' width={250} height={250}/></div>
        </div>
      }



 <ReusableButton handleClick={() => deleteProduct(index)} title="Delete Product"/>
          <br />
<ReusableButton handleClick={() => selectProduct(product.id)} title="Select Product"/>
```
