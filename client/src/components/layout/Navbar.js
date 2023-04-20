import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const item = {
        projurl: 'https://64308984f3fded00bfd150d4--cosmic-sfogliatella-064c0c.netlify.app/lobby.html'
      }
      
    const authLinks = (
        <ul>
        <l1>
        <a href={item.projurl} target="_blank" rel="noopener noreferrer">Video Call</a>
        </l1>
            <li>
                <Link to='/profiles'>
                    <span>Developers</span>
                </Link>
            </li>
            <li>
                <Link to='/posts'>
                    <span>Posts</span>
                </Link>
            </li>
            <li>
                <Link to='/dashboard'>
                    <i className='fa fa-user'></i>{' '}
                    <span className='hide-sm'>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link onClick={logout} to='#!'>
                    <i className='fas fa-sign-out-alt'></i>{' '}
                    <span className='hide-sm'>Logout</span>
                </Link>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to='/profiles'>
                    <span>Developers</span>
                </Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    );

    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className='fa fa-code'></i> DevUnite
                </Link>
            </h1>
            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
