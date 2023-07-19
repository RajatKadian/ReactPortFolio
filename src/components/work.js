// import React from 'react';
// import './work.css';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const Work = () => (
//   <div className="work-container">
//   <h1>Work Experience</h1>


//     <br>

//     </br>
    
//     <Card sx={{ maxWidth: 1200 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/paramotor.PNG"
//         title="green iguana"
//       />
//       <CardContent>
        
//       </CardContent>
      
//     </Card>
//     <br></br>
//     <Card sx={{ maxWidth: 1200 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/BE.PNG"
//         title="green iguana"
//       />
//       <CardContent>
        
//       </CardContent>
//     </Card>
//     <br>
  
//     </br>
//     <Card sx={{ maxWidth: 1200 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/Mmt.PNG"
//         title="green iguana"
//       />
      
//     </Card>
//     <br></br>

//     <h1>Education</h1>
//     <br></br>
//     <br></br>

//     <Card sx={{ maxWidth: 1200 }}>
//       <CardMedia
//         sx={{ height: 180 }}
//         image="/education.PNG"
//         title="green iguana"
//       />
    
//     </Card>
    
//   </div>
// );

// export default Work;

import React, { useState } from 'react';
import './work.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Work = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="work-container">
      <h1>Work Experience</h1>

      <br />

      <Card
        sx={{ maxWidth: 1200 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={isHovered ? 'card-hovered' : ''}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="/paramotor.PNG"
          title="Paramotor"
        />
        <CardContent></CardContent>
      </Card>
      
      <br />

      <Card
        sx={{ maxWidth: 1200 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // className={isHovered ? 'card-hovered' : ''}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="/BE.PNG"
          title="BE"
        />
        <CardContent></CardContent>
      </Card>
      
      <br />

      <Card
        sx={{ maxWidth: 1200 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={isHovered ? 'card-hovered' : ''}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="/Mmt.PNG"
          title="MMT"
        />
        <CardContent></CardContent>
      </Card>

      <br />
      <h1>Education</h1>
      <br />
      <br />

      <Card
        sx={{ maxWidth: 1200 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={isHovered ? 'card-hovered' : ''}
      >
        <CardMedia
          sx={{ height: 180 }}
          image="/education.PNG"
          title="Education"
        />
      </Card>
    </div>
  );
};

export default Work;
