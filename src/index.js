import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './containers/App'

ReactDom.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));
