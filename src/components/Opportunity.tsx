import * as React from "react";

export interface OpportunityProps {name: string, description: string}

export const Opportunity = (props: OpportunityProps) => (
	<div>
		<h2>{props.name}</h2>
		{props.description}
	</div>
);
