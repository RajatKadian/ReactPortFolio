import React from 'react';
import './work.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Contact = () => (
  <div className="contact-container">
     <Card sx={{ maxWidth: 1245 }}>
      <CardMedia
        sx={{ height: 450 }}
        image="/RajatKadianVirtualID.PNG"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rajat Kadian
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: rajat.kadian123@gmail.com<br />
          GitHub: <a href="http://github.com">https://github.com/RajatKadian</a><br />
          LinkedIn: <a href="https://linkedin.com">https://www.linkedin.com/in/rajat-kadian/</a><br />
          Phone number: 2365167604<br></br>
          Email: rajat.kadian123@gmail.com<br />
          <br />
        </Typography>
      </CardContent>
    </Card>
    

  </div>
);

export default Contact;