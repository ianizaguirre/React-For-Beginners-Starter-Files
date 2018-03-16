import React from 'react';
import { render } from 'react-dom';
import './css/style.css';

import Router from './components/Router';

const renderApp = () => {
	render(<Router />, document.querySelector('#main'));
};

renderApp();
