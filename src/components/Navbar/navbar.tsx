import { AppBar, Badge, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './navbar.module.css'
import { CartItemType } from "../../types/producType"



type Props = {
    cartItems: CartItemType[],
    // addToCart: (clickedItem: CartItemType) => void;
    // removeFromCart: (id: number) => void;
    handleOpenCart: (value: boolean) => void;
}


export const Navbar: React.FC<Props> = ({cartItems, handleOpenCart}) => {

    const getTotalItems = (item: CartItemType[]) => {
        return item.reduce((acc: number, item) => acc + item.amount, 0)
    }
    
    return (
        <Box sx={{ display: 'flex' }}>
           <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The random store
          </Typography>
          <IconButton className={styles.cartButton} aria-label="cart" onClick={() => handleOpenCart(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color="secondary">
            <ShoppingCartIcon />
            </Badge>
        </IconButton>

        </Toolbar>
      </AppBar>
      </Box>
    )
}