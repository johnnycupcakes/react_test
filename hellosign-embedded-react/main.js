import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import HelloSignEmbedded from './HelloSignEmbedded';

ReactDOM.render(
    <HelloSignEmbedded 
        clientId="CLIENT_ID"
        uxVersion={2}
        url="URL"
        inContainer={true} 
    />,
    document.getElementById('root')
);