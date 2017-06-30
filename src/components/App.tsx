import * as React from "react";

import {Header} from "./Header";
import OpportunityList from "../containers/OpportunityList";
import Pokemon from '../containers/Pokemon'

export const App = () => (
	<div>
		<Header numUsers="1000s" />
		<OpportunityList />
		<Pokemon />
	</div>
);
