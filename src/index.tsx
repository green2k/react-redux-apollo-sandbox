import * as React from "react"
import * as ReactDOM from "react-dom"
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {ApolloClient, createNetworkInterface, ApolloProvider} from "react-apollo"

import reducers from './reducers'
import opportunityReducer from './reducers/opportunities'
import {App} from './components/App'

let client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'https://pokeapi-graphiql.herokuapp.com'
	})
})
let store = createStore(
	combineReducers({
		opportunities: opportunityReducer, 
		apollo: client.reducer()
	}), 
	{}, // Initial state
	compose(
		applyMiddleware(client.middleware())
	)
);

ReactDOM.render(
	<ApolloProvider store={store} client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
