import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    opacity: 1,
    '&:hover title': {

    }
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    opacity: 0,
    width: '100%',
  }
}));

/**
 * @class
 */
function TerritoryPreview(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography align="center" variant="h4">{props.id}</Typography>
        </div>
        <img src={props.src} onClick={() => props.onClick(props.name)} alt="territory" width="100%" />
      </div>
    </React.Fragment>
  );
}

export default TerritoryPreview;