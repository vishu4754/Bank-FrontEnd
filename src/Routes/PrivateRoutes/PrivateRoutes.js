import React from 'react';
import proptypes from 'prop-types';
import { Route } from 'react-router-dom';
import { PrivateLayout } from '../../Layout';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <PrivateLayout>
        <Component {...matchProps} />
      </PrivateLayout>
    )}
  />
)
export default PrivateRoute;

PrivateRoute.propTypes = {
  children: proptypes.element.isRequired,
}
