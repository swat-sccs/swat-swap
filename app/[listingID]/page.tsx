import { Container, Typography, Grid } from '@mui/material';
import style from './Product.module.css';
import Image from 'next/image';

export default function ListingID() {
  return (
    <Container style={{
      width: "75%",
      height: "auto",
      display: "flex",
      flexDirection: "column", 
      margin: "auto",
      marginTop: "20pt",
      paddingBottom: "20pt",
      backgroundColor: "#f1f1f1"  
    }}>
      <Grid container spacing={2} style={{ margin: '8px' }}>
        
        <Grid item xs={12} md={6} >
          <Image
          src="/static/images/cards/maxwell1.jpg" 
          alt="image"
          width={400}  
          height={400} 
          />
        </Grid>
        
        <Grid item xs={12} md={6} >
          <Typography variant="h5">
            Product Title
          </Typography>
          <Typography 
            fontSize={"20px"}
            fontWeight={"bold"}>
            $69.00
          </Typography>
          <Typography fontSize={"18px"}>
            Bottom text Bottom textBottom textBottom 
            textBottom textBottom textBottom text Bottom 
            textBottom textBottom textBottom textBottom 
            text
          </Typography>

          <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
            <Typography 
              fontSize={"18px"} 
              fontWeight={"bold"}>
              Contact:
            </Typography>
            <Typography 
              fontSize={"18px"} 
              style={{ marginLeft: "8px" }}>
              Alina Vykliuk
            </Typography>
          </div>
          <Typography fontSize={"18px"}>
              +38(068)6969696
            </Typography>
          <Typography fontSize={"18px"}>
            avykliu1@swarthmore.edu
          </Typography>
          <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
            <Typography 
              fontSize={"18px"} 
              fontWeight={"bold"}>
              Posted on:
            </Typography>
            <Typography 
              fontSize={"18px"} 
              style={{ marginLeft: "8px" }}>
              Feb 18, 2024
            </Typography>
          </div>
        </Grid>
      </Grid>

    </Container>
  );
}


