import * as React from "react";

import {Opportunity} from "./Opportunity";

export interface OpportunityProps {name: string, description: string}
export interface OpportunityListProps {filter: string, opportunities: OpportunityProps[], onFilterChange: Function}

let filterInput

export const OpportunityList = (props: OpportunityListProps) => (
	<div>
		<form onSubmit={
			(e) => {
				e.preventDefault()
				props.onFilterChange(filterInput.value)
			}
		}>
			Filter: <input ref={node => {filterInput = node}}/>
		</form>
		Searching for "{props.filter}":
		{
			props.opportunities.map(opportunity => (
				<Opportunity name={opportunity.name} description={opportunity.description}/>
			))
		}
	</div>
);
