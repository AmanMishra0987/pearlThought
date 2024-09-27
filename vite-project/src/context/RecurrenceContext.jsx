import { createContext, useContext, useReducer } from 'react';

const RecurrenceContext = createContext();

const recurrenceReducer = (state, action) => {
  switch (action.type) {
    case 'SET_START_DATE':
      return { ...state, startDate: action.payload };
    case 'SET_END_DATE':
      return { ...state, endDate: action.payload };
    case 'SET_RECURRENCE_TYPE':
      return { ...state, recurrenceType: action.payload };
    case 'SET_CUSTOM_RECURRENCE':
      return { ...state, customRecurrence: action.payload };
    case 'SET_NOTE':
        return { ...state, note: action.payload };
    default:
      return state;
  }
};

const RecurrenceProvider = ({ children }) => {
  const initialState = {
    startDate: null,
    endDate: null,
    recurrenceType: 'daily',
    customRecurrence: { interval: 1, days: [], nthDay: 1 },
    note: '',
  };
  const [state, dispatch] = useReducer(recurrenceReducer, initialState);

  return (
    <RecurrenceContext.Provider value={{ state, dispatch }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
export { RecurrenceProvider };
