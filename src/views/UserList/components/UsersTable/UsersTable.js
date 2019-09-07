import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button
} from '@material-ui/core';
import {ArrowRight as ArrowRightIcon, ArrowLeft as ArrowLeftIcon} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const UsersTable = props => {
  const { className, users, fetUsers, ...rest } = props;
  
  const classes = useStyles();

  const handleNextButton = (since) => {
    fetUsers(since)
  };

  const redirect = user => {
    const path = `/users/${user.login}`;
    props.history.push(path)
  }

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
                    <TableCell>Login</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.docs.map(user => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={user.id}
                      onClick={() => redirect(user)}
                    >
                      <TableCell >
                        <div className={classes.nameContainer}>
                          <Typography variant="body1">{user.id}</Typography>
                        </div>
                      </TableCell>
                      <TableCell>{user.login}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            color="primary"
            size="small"
            variant="text"
            disabled={users.prev === undefined}
          >
            <ArrowLeftIcon /> Prev
          </Button>
          <Button
            color="primary"
            size="small"
            variant="text"
            disabled={users.next === undefined}
            onClick={() => handleNextButton(users.next.since)}
          >
            Next <ArrowRightIcon />
          </Button>
        </CardActions>
      </Card>
    );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UsersTable;
