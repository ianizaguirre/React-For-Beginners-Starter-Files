import React from 'react';
import { render } from 'react-dom';
import "./css/style.css";

import StorePicker from './components/StorePicker';

const renderApp = () => {
	render(<StorePicker />, document.querySelector('#main'));
};

renderApp();