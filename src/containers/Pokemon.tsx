import * as React from "react";
import {gql, graphql} from 'react-apollo';
import {connect} from 'react-redux';

// GraphQL will pass the result of the query to the wrapped component in a `data` prop
const Pokemon = ({error, dataStatus, isLoading, pokemon}) => (
  <div>
    <h2>Pokemon component</h2>
    <div>Loading pokemon? ({isLoading ? "Yes" : "No"})</div>
    <div>Pokemon name: "{!isLoading && pokemon ? pokemon.name : "n/a"}"</div>
    <div>GraphQL status: {dataStatus ? dataStatus : 'n/a'}</div>
  </div>
);

const QUERY = gql`
  query PokemonQuery($pokemonId: Int!) {
    pokemon(number: $pokemonId) {
      id,
      created, 
      name, 
      attack, 
      defense
    }
  }
`

const PokemonWithData = graphql<any, any>(QUERY, {
  skip: (ownProps) => (!ownProps.pokemonId),
  options: ({ pokemonId }) => ({ variables: {pokemonId} }),
  props: ({ ownProps, data: {error, networkStatus, loading, pokemon} }) => ({
    isLoading: loading, 
    pokemon, 
    dataStatus: networkStatus
  })
})(Pokemon)

const PokemonWithDataAndState = connect(
  (state) => ({
    pokemonId: state.opportunities.opportunityFilter
  }), 
  (dispatch) => ({})
)(PokemonWithData)

export default PokemonWithDataAndState
