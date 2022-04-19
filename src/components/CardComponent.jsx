import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import {addToCart} from "../redux/actions/productAction";

export default function CardComponent({product}) {

    const dispatch = useDispatch();



    return (
        <Card sx={{ maxWidth: 500, maxHeight: 400 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt="lorem id 40"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                    {product.name}
        </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
        </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=> {
                    dispatch(addToCart(product));
                }}>Add to cart</Button>
            </CardActions>
        </Card>
    )
}
