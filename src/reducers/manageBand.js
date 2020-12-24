export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

    return {name: state.name.concat(action.payload.text)}
    
    default:
      return state;
  }
};
