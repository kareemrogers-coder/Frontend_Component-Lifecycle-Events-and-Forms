import React from 'react'
import { useState, useEffect } from 'react'
import ReusableButton from './ReuseableButton'
import axios from 'axios'
import './styles.css'

const ProductList = () => {
  // Initializing the Product state with an empty array
  const [products, setProducts] = useState([])

  // Store the ID of the Product we select 
  const [selectedProduct, setSelectedProduct] = useState(null)

   // Store info about the selected Product 
   const [selectedProductInfo, setSelectedProductInfo] = useState(null)

  const deleteProduct = (index) => {
    const newProducts = products.filter((product, i) => i !== index)
    setProducts(newProducts)
  }

  const selectProduct = (id) => {
    setSelectedProduct(id)
    getProductInfo(id)
  }

  const getProductInfo = (id) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
      console.log(response)
      setSelectedProductInfo(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

// We are going to load products from the fakestoreapi using axios and useEffect
// useEffect makes the request to the fakestoreapi ONE time when the page loads


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/')
    .then(response => {

    // We want to log the response to make sure it works 
    console.log(response)

    setProducts(response.data)

})
.catch(error => {
  console.log(error)
})

  }, [])

  return (
    <div className='mainbody'>
      <h1>List of Products</h1>

      { selectedProduct && 
        <div>
          <h3>Selected product</h3>
          <p>{selectedProduct}</p>
        </div>
      }

{ selectedProductInfo && 
        <div className='card'>
          <h3>Selected Product:</h3>

          {/* card */}
          <p>Name: {selectedProductInfo.title}</p>
          <p>Price: ${selectedProductInfo.price}</p>
          <p>Catacory: {selectedProductInfo.category}</p>
          <p>Description: {selectedProductInfo.description}</p>
          <p>Rating: {selectedProductInfo.rating.rate}/5</p>
          <div className='product-img'><img src={selectedProductInfo.image} alt='#' width={250} height={250}/></div>
        </div>
      }

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
      )}
    </div>
  )
}

export default ProductList