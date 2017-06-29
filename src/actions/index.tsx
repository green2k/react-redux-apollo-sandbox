/*
 * Action creators
 */

export const setFilter = (text: string) => {
  return {
    type: 'SET_FILTER',
    text
  }
}
