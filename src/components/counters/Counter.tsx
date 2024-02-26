import { useReducer } from 'react';

type State = {
  count: number;
};

enum ActionTypes {
  up,
  down,
  reset,
  upBy,
  downBy,
}

type Action = {
  // type: 'UP' | 'DOWN' | 'RESET' | 'UP_BY';
  type: ActionTypes;
  payload?: number;
};

const initCounter: State = { count: 0 };

function counterReducer(state: State, action: Action): State {
  console.log('action ===', action);

  switch (action.type) {
    case ActionTypes.up:
      return { count: state.count + 1 };
    case ActionTypes.down:
      return { count: state.count - 1 };
    case ActionTypes.reset:
      return initCounter;
    case ActionTypes.upBy:
      if (!action.payload) return state;
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initCounter);

  return (
    <div className='card'>
      <h2>Counter</h2>

      <p style={{ fontSize: '50px', marginBottom: '15px' }}>{state.count}</p>

      <div className='control'>
        <button onClick={() => dispatch({ type: ActionTypes.up })}>Up</button>
        <button onClick={() => dispatch({ type: ActionTypes.down })}>Down</button>
        <button onClick={() => dispatch({ type: ActionTypes.reset })}>Reset</button>
        <button onClick={() => dispatch({ type: ActionTypes.upBy, payload: 5 })}>Up by 5</button>
        <button>Down by 10</button>
      </div>
    </div>
  );
}
