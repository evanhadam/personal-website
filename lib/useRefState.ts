import React from 'react';

export default function useRefState<T>(
  initialState: T,
): [React.RefObject<T>, React.Dispatch<React.SetStateAction<T>>] {
  const [internalState, setInternalState] = React.useState<T>(initialState);

  const state = React.useRef<T>(internalState);

  const setState = (newState: React.SetStateAction<T>) => {
    if (newState instanceof Function) {
      state.current = newState(state.current);
    } else {
      state.current = newState;
    }

    setInternalState(state.current);
  };

  return [state, setState];
}