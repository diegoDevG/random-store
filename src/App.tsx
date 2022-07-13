//Core $ libs
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Grid, Badge, Drawer, Container, Button, IconButton } from '@mui/material';
//Styles
import styles from './App.module.css'
//Components
import { ProductItem } from './components/ProductItem/productItem';
import { CartItemType } from './types/producType';
import { Loader } from './components/Loader/loader';
import { Cart } from './components/Cart/cart';
import { Navbar } from './components/Navbar/navbar';

const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])

  const toggleDrawer = () => {
    setCartOpen((prevState) => !prevState)
  }

  const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json()

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // Item already in cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ))
      }
      // Add new item on cart
      return [...prev, { ...clickedItem, amount: 1 }]
    })
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1 ) {
            return acc;
          }
          return [...acc, {...item, amount: item.amount -1}]
        } else {
          return [...acc, item]
        }
      }, [] as CartItemType[])
    ))
  }

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)

  if (error) { <div>Something went wrong! :(</div> }
  return (
    <Container maxWidth="lg" className={styles.mainContainer}>
      <Navbar cartItems={cartItems} handleOpenCart={setCartOpen} />
      {isLoading && <Loader />}
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>

      <Grid container spacing={3} className={styles.gridContainer}>
        {data?.map(item => (
          <Grid item key={item.id}>
            <ProductItem item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>


    </Container>
  )
}

export default App
