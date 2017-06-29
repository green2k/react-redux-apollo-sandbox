import {connect} from 'react-redux'
import {setFilter} from '../actions'
import {OpportunityList} from '../components/OpportunityList'

const mapStateToProps = (state) => {
  return {
    filter: state.opportunities.opportunityFilter,
    opportunities: [
      {name: "Opportunity 1", description: "Description 1"},
      {name: "Opportunity 2", description: "Description 2"},
      {name: "This is a sample opportunity", description: "Description 3"},
      {name: "Some another amazing opportunity", description: "Description 2"}, 
    ].filter(o => o.name.indexOf(state.opportunities.opportunityFilter) >= 0)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (filter: string) => {
      dispatch(setFilter(filter))
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(OpportunityList)

export default container
