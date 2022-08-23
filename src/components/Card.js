import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const CardComponent = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: 380, width: { xs: "100vw", sm: 300 }}}>
        <CardMedia
          component="img"
          height="140"
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          alt="react course card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Learn React by Building great projects that you can add on your
            resume. You will learn States and Props extensively. You will also
            learn Context..
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Share
          </Button>
          <Button size="small" variant="contained">
            Visit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardComponent;
