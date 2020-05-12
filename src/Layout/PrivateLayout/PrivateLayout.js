import React from 'react';
import propTypes from 'prop-types';

const PrivateLayout = ({ children, ...rest }) => (
    <>
        <div>
            {children}
        </div>
    </>
);
export default PrivateLayout;
PrivateLayout.propTypes = {
    children: propTypes.element.isRequired,
};
