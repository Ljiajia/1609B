import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';

// 获取store
import { Provider } from 'mobx-react';
import stores from './store';

ReactDOM.render(<Provider {...stores}><App /></Provider>, document.getElementById('root'));
