import React from 'react';
import { Container, Typography, Grid, Button, TextField, MenuItem, Select, Input } from '@mui/material';

export default function Create() {
  return (   
    <Container style={{ 
      backgroundColor: 'lightGray', 
      height: '75vh', 
      width: '40%', 
      margin: 'auto', 
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'flex-start', 
    }}>
      <Grid container justifyContent="flex-start" alignItems="flex-start" style={{ paddingTop: '20px' }}>
        <Button style={{ marginRight: '10px' }}>Selling</Button>
        <Button style={{ marginRight: '10px' }}>Buying</Button>
        <Button>Service</Button>
      </Grid>
      <Typography variant="subtitle1" style={{ marginTop: '20px' }}>Listing Title</Typography>
      <TextField 
        style={{ marginTop: '10px' }}
        InputProps={{
          style: { background: 'white' },
        }}
      />
      <Typography variant="subtitle1" style={{ marginTop: '20px' }}>Listing Images</Typography>
      <Typography variant="subtitle1" style={{ marginTop: '20px' }}>Listing Title</Typography>
      <TextField 
        style={{ marginTop: '10px' }}
        InputProps={{
          style: { background: 'white' },
        }}
      />
      <Typography variant="subtitle1" style={{ marginTop: '20px' }}>Select Category</Typography>
      <Select
  label="Category"
  style={{ marginTop: '10px', width: '40%' }}
>
  <MenuItem value="cats">Cats</MenuItem>
  <MenuItem value="black-cats">Black Cats</MenuItem>
  <MenuItem value="awesome-cats">Awesome Cats</MenuItem>
</Select>
    </Container>
  );
}




