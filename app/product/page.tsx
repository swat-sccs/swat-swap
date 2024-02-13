import { Box, Typography } from '@mui/material';
import style from './Product.module.css';

export default function Product() {
  return (
    <Box className={style.mainContainer}>

      <Box>
        <Typography variant="h4">Home &gt; C1 &gt; C2</Typography>
      </Box>

      <Box>
        <Typography variant="h5">Image</Typography>
      </Box>

      <Box>
        <Typography variant="h5">Product Name</Typography>
      </Box>

      <Box>
        <Typography variant="h5">Price</Typography>
      </Box>

      <Box>
        <Typography variant="h5">Product Description</Typography>
      </Box>

      <Box>
        <Typography variant="h5">Contact Details</Typography>
      </Box>

      <Box>
        <Typography variant="h5">Post date</Typography>
      </Box>

      {/* <div className={style.subText}>Home &gt; C1 &gt; C2</div>
      <div>Image</div>
      <div>Product Name</div>
      <div>Price</div>
      <div>Product Description</div>
      <div>Contact Details</div>
      <div>Post date</div> */}

    </Box >
  );
}
