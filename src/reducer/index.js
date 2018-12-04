const initialState = {
    counterSum: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "SUM":{
      console.log("Get into SUM")
    return { counterSum: state.counterSum + payload}
}

  default:
    return state
  }
}
