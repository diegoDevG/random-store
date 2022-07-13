import { Card, CardMedia, Typography, CardContent, CardActions, Button } from '@mui/material'
import { Props } from '../../types/producType';
import { CartItemType } from '../../types/producType'

import styles from './productItem.module.css'




export const ProductItem: React.FC<Props> = ({ item, handleAddToCart }) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="380"
                image={item.image}
                alt={item.title}
                className={styles.productImg}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    $ {item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small" onClick={() => handleAddToCart(item)}>Add to cart</Button>
            </CardActions>
        </Card>
    )

}

