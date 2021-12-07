import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const RoomsCard = ({ shuttle, onClick }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
        alt="space guy"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {shuttle.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shuttle.description}
        </Typography>
        <Typography variant="body3" color="text.secondary">
          {shuttle.active}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" onClick={onClick}>
        Update
      </Button>
    </CardActions>
  </Card>
);
export default RoomsCard;
