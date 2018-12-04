const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "SUM":
    return { counterSum: state.counterSum + payload}

  default:
    return state
  }
}
