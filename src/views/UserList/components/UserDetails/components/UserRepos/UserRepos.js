import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 500,
    maxHeight: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const UserRepos = props => {
  const { className, users, repos =[ ], ...rest } = props;

  const classes = useStyles();
  
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            < Table>
              <TableHead>
                <TableRow >
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Url</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {repos.map(repo => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={repo.id}
                  >
                    <TableCell >
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{repo.id}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{repo.name}</TableCell>
                    <TableCell>{repo.url}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

UserRepos.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UserRepos;
