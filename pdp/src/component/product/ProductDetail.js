import { Box, Button, Card, CardMedia, Divider, Grid, List, ListItem, Paper, Skeleton, TableRow, Typography, useTheme } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
const ProductDetails = ({ data  }) =>{
    return(
      <>
      <Grid
        container
        mt={5}
        className='animate__animated animate__fadeIn'
        spacing={3}
      >
        <Grid
          item
          sm={6}
          md={4}
          className='animate__animated animate__fadeInLeft'
        >
          <Card raised>
            <CardMedia component='img' image={data.productImage} alt={data.productName} />
          </Card>
          <Box
            display='flex'
            justifyContent='space-between'
            mt={1}
            alignContent='center'
          >
            
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Typography component='h3' textAlign='center' gutterBottom>
            {data.productName}
          </Typography>
          <Divider />
          
          <Paper elevation={8} sx={{ my: 3 }}>
            <List>
              <Fragment>
                <ListItem>
                  <Typography variant='caption' component='p'>
                      <strong>{data.productDescription}</strong>
                  </Typography>
                </ListItem>
                <Divider variant={'middle'} />
              </Fragment>
            </List>
          </Paper>
          <Typography component='h5' variant='h6' textAlign='center'>
          Best Buy &#8377;{data.slaesPrice}
            </Typography>
            <Typography component='h5' style={{textDecoration: 'line-through'}} variant='h6' textAlign='center'>
          &#8377;{data.listPrice}
            </Typography>
          <Divider sx={{ mb: 2 }} />

          <Box display='flex' justifyContent={'center'} my>
              <Button
                variant='contained'
                color='error'
                startIcon={<AssignmentTurnedInIcon />}
                
              >
                Add To Cart
              </Button>
          </Box>
        </Grid>
      </Grid>
    </>
    );
}

export default ProductDetails;