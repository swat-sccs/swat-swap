import { Container, Typography, Grid, Card, CardContent, CardActionArea, Button } from '@mui/material';;
export default function Create() {
    return (   
        <Container style={{ 
            backgroundColor: 'lightGray', 
            height: '50vh', 
            width: '90vw', 
            margin: 'auto', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Button>Create</Button>
          </Container>
    );
    
}