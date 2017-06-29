import * as React from "react";

import {Header} from "./Header";
import OpportunityList from "../containers/OpportunityList";

export const App = () => (
	<div>
		<Header numUsers="1000s" />
		<OpportunityList />
	</div>
);
