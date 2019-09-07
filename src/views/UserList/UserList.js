import React, { PureComponent } from 'react';
import {   withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { UsersTable } from './components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchAllUsers} from 'actions/users';
import { bindActionCreators } from 'redux';
import Load from 'views/Load'
import { isNil } from 'lodash'

const styles = theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
});

class UserList extends PureComponent {

  componentWillMount() {
    this.props.fetchAllUsers(0,this.props);
  }

  fetUsers = since => {
    this.props.fetchAllUsers(since, this.props);
  }

  render() {
    const { users, classes, ...rest } = this.props;
    if (!isNil(users)) {
      return (
        <div className={classes.root}>
          <div className={classes.content}>
            <UsersTable {...rest} users={users} fetUsers={this.fetUsers}/>
          </div>
        </div>
      );
    } return (<Load />)
  }
}

UserList.propTypes = {
  fetchAllUsers: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.users.list
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchAllUsers }, dispatch);


export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList)));

