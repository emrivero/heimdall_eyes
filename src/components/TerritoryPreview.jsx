import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    opacity: 1,
    backgroundColor: '#000',
    border: '2px solid #eee',
    padding: '2px',
    borderRadius: '5px',
    display: 'flex',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    opacity: 0,
    width: '100%',
  },
  img: {
    borderRadius: '3px',
    width: '100%',
    height: '150px%'
  }
}));

/**
 * @class
 */
function TerritoryPreview(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography align="center" variant="h4">{props.id}</Typography>
      </div>
      <img src={props.src} onClick={() => props.onClick(props.number)} alt="territory" className={classes.img} />
    </div>
  );
}

export default TerritoryPreview;