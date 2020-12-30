export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return {
        ...state,
        bands: [...state.bands, action.band] 
      }
    default:
      return state;
  }
};

export const addBand = band => {
  return {
    type: 'ADD_BAND', band: band
  }
}
     
    

