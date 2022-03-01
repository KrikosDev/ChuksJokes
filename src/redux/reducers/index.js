const initial = {
  joke: [],
};

export default function reducer(state = initial, action) {
  switch (action.type) {
    case 'SET_JOKE': {
      localStorage.setItem(
        'jokes',
        JSON.stringify({joke: [...state.joke, action.payload]})
      );

      return {
        ...state,
        joke: [...state.joke, action.payload],
      };
    }
    case 'GET_JOKES': {
      return { joke: [...action.payload] };
    }
    default:
      return state;
  }
}
