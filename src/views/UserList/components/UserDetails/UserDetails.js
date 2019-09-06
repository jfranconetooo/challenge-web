import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { fetchAllUserRepos, fetchUserByUsername } from 'actions/users';
import { UserInfo, UserRepos } from './components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Load from 'views/Load'

const styles = theme => ({
    root: {
        padding: theme.spacing(4)
    }
});

class UserDetails extends PureComponent {

    componentWillMount() {
        const { username } = this.props.match.params
        this.props.fetchAllUserRepos(username);
        this.props.fetchUserByUsername(username)
    }

    render() {

        const { classes, fetchedUser, fetchedUserRepos } = this.props

        return (
            <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                    item
                    lg={5}
                    md={6}
                    xl={12}
                    xs={12}
                    >
                    {fetchedUser ? <UserInfo user={fetchedUser}/> : <Load />}
                    </Grid>
                    <Grid
                    item
                    lg={7}
                    md={6}
                    xl={12}
                    xs={12}
                    >
                    {fetchedUserRepos ? <UserRepos repos={fetchedUserRepos}/> : <Load />}
                    </Grid>
                </Grid>
            </div>
        );
    }

}

UserDetails.propTypes = {
    fetchAllUserRepos: PropTypes.func.isRequired,
    fetchUserByUsername: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }),
    fetchedUser: PropTypes.object,
    fetchedUserRepos: PropTypes.array
};

const mapStateToProps = state => ({
    fetchedUser: state.users.fetchedUser,
    fetchedUserRepos: state.users.fetchedUserRepos
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchAllUserRepos,
        fetchUserByUsername
    }, dispatch);

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails)));