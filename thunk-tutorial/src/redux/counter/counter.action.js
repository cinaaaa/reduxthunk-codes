export const increaser = () => dispatch => {
  setTimeout(() => {
    dispatch({
        type: 'INCREASE'
    })
  }, 1000);
}

export const decreaser = () => dispatch => {
  setTimeout(() => {
    dispatch({
        type: 'DECREASE'
    })
  }, 1000);
}
