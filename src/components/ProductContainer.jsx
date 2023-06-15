import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import ProductContext from '../context/product/ProductContext'
import { getAPI } from '../context/product/ProductAction'

const ProductContainer = () => {

  const { products, dispatch } = useContext(ProductContext)

  const fetchProduct = async () => {

    const data = await getAPI()
    dispatch({
      type: "GET_PRODUCTS",
      payload: data
    })

  }

  useEffect(() => {
    fetchProduct()
  }, [])


  if (!products) {
    return (
      <>
<button class="spinner-btn" type="button" disabled>
  <h1>Loading... </h1>
  <span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
</button>
      </>
    )
  }

  return (
    <>
      <div className='all-products '>
        <h1 className='all-products-title'>All Collections Here</h1>
        {
          products.map(product => <ProductCard key={product.id} product={product} />)
        }

      </div>
    </>
  )
}

export default ProductContainer
