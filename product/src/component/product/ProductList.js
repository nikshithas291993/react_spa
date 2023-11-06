import React, { Fragment } from "react";
import { Box, Grid, Typography } from '@mui/material'
import ProductItem from "./ProductItem";
const ProductList =({data , featuredpage}) =>{
    return(
        <Box>
            <div>
            <Grid justifyContent={featuredpage?"center": "flex-start"}container padding={1} spacing={2}>
                {data.data.products.map((product) =>(
                    <Grid item  md={3} key={product.productId}>
                        <ProductItem
                            productId={product.productId} 
                            productName={product.productName} 
                            productDescription={product.productDescription} 
                            listPrice={product.listPrice}  
                            slaesPrice = {product.slaesPrice}
                            productImage = {product.productImage}
                            productStock = {product.productStock}
                            productFeatures = {product.productFeatures}
                            currency = {product.currency}
                        />
                    </Grid>
                ))}
            </Grid>

    </div>
        </Box>
        );

};

export default ProductList;