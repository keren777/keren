import React from 'react';
import FilterLink from '../containers/FilterLink';
import { Routes } from '../actions';

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter={Routes.HOME}>
            Home
        </FilterLink>
        {', '}
        <FilterLink filter={Routes.CONTACT}>
            Contact
        </FilterLink>
    </p>
);

export default Footer