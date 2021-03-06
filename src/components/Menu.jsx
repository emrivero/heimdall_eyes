import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  root: {
    width: '400px',
    position: 'absolute',
    top: 0,
  },
  right: {
    right: 0,
  },
  center: {
    right: '40%'
  }
}));

export default function Menu(props) {
  const classes = useStyles();

  const { anchor } = props;

  let rootClass = classes.root;
  if (anchor === 'right') {
    rootClass = classNames(classes.root, classes.right);
  }

  if (anchor === 'center') {
    rootClass = classNames(classes.root, classes.center);
  }

  return (
    <div className={rootClass}>
      {props.children}
    </div>
  );
}
