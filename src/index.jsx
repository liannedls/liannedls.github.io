import React from 'react';
import { render } from 'react-dom';
import AppRouter from '../routes/router';

Meteor.startup(() => {
  render(<AppRouter />, document.getElementById('react-target'));
});
