'use client';
import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export interface ProductCart {
  name: string | undefined,
  description: string | undefined,
  price: number | undefined,
  currency: string | undefined,
  image: any | undefined;
  price_id: string | undefined;


}

const AddToCart = ({ currency, description, image, name, price, price_id }: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart()
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: image,
    price_id: price_id
  }
  return (
    <Button onClick={() => {
      addItem(product as any),
        handleCartClick()
    }}>Add to Cart</Button>
  )
}

export default AddToCart