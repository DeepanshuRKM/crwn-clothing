const INITIAL_STATE = {
    xIsNext: true,
    stepNumber: 0,
    history: [
        {squares: Array(9).fill(null)}
    ]
}

const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default gameReducer;