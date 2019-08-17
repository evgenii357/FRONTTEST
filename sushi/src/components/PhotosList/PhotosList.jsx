import React from 'react';
import WrappedPhotoCard from '../PhotoCard/PhotoCard';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: '100%',
    maxWidth: 1000,
    height: 'auto'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}));

export default function PhotosList({ images }) {
  const classes = useStyles();

  return (
    <div>
      {images.length > 0 ? (
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            {images.map(image => (
              <WrappedPhotoCard
                key={image.title + Math.random()}
                image={image}
              />
            ))}
          </GridList>
        </div>
      ) : (
        <div>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              className={classes.title}
              gutterBottom
            >
              Пустая галерея
            </Typography>
          </Container>
        </div>
      )}
    </div>
  );
}
