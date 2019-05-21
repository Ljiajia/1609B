import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';

import RouterView from '@/router/RouterView'
import RouterConfig from '@/router/router.config.js'
import {HashRouter} from 'react-router-dom'

// 获取store
import { Provider } from 'mobx-react';
import stores from './store';

ReactDOM.render(<Provider {...stores}>
    <HashRouter>
        <RouterView routes={RouterConfig.routes}></RouterView>
    </HashRouter>
</Provider>, document.getElementById('root'));
