import React, { Component } from 'react';
import { render } from 'react-dom';

import StorePicker from './components/StorePicker';

const renderApp = () => {
	render(<StorePicker />, document.querySelector('#main'));
};

renderApp();