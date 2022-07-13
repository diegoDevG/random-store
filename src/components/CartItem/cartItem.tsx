import { StarPurple500Sharp } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { CartItemType } from '../../types/producType'
import styles from './cartItem.module.css'


type Props = {
    item: CartItemType,
    addToCart: (clicledItem: CartItemType) => void,
    removeFromCart: (id: number) => void,
}

export const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
    return (
        <Box className={styles.cartItem}>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt={item.title} variant='rounded' src={item.image} />
                    </ListItemAvatar>
                    <ListItemText primary={item.title} secondary={`$ ${item.price}`} />
                    <div className={styles.quantityControls}>

                         <p>Quantity: {item.amount}</p>
                    <ButtonGroup disableElevation variant="contained">
                        <Button onClick={() => removeFromCart(item.id)}>-</Button>
                        <Button onClick={() => addToCart(item)}>+</Button>
                    </ButtonGroup>
                    </div>

                </ListItem>
                <div className={styles.information}>
                    <p>Total for this item: ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <Divider variant="inset" component="li" />
            </List>
        </Box>
    )
}
