const initialState = {
    counterSum: 0,
    counters: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "SUM":{
      console.log("Get into SUM")
    return { counterSum: state.counterSum + payload}
    }
  case "GENERATE_COUNTERS":{
      return {
        counters:  new Array(parseInt(payload)).fill(0).map(() => {
        return { number: 0, id: new Date().getTime + Math.random() };
      })}
  }

  default:
    return state
  }
}
