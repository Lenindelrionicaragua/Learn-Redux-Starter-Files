// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
  // Changed parameter name to 'action'
  console.log(state, action); // Changed 'actions' to 'action'
  return state;
}

export default posts;
