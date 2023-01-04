import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


const AllProductsCard = ({ products }) => {
    const {name, img, price, category,_id} = products;
    return (
        <Link to={`/product/${_id}`}>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price:{price}BDT
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* <Link><button className='bg-black text-white px-3 py-2 font-bold text-lg mt-5 rounded-lg'>Add To Cart</button></Link> */}
                </CardActions>
            </Card>
        </Link>
        
    );
};

export default AllProductsCard;