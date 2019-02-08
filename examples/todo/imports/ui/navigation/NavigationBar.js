import React from 'react';
import {BottomNavigation, BottomNavigationAction, Paper} from '@material-ui/core';
import {default as ViewList} from '@material-ui/icons';
import {default as Add} from '@material-ui/icons';

import {Link} from 'react-router-dom';

const handleEffectClick = ({pathname}) =>
    // eslint-disable-next-line no-nested-ternary
    pathname === '/' || pathname === '/add' ? (pathname === '/' ? 0 : 1) : null;

export const NavigationBar = ({classes, location}) => (
    <Paper elevation={10}>
        <BottomNavigation
            value={handleEffectClick(location)}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                label="Tasks"
                icon={<ViewList/>}
                component={Link}
                to="/"
            />
            <BottomNavigationAction
                label="Add"
                icon={<Add/>}
                component={Link}
                to="/add"
            />
        </BottomNavigation>
    </Paper>
);
