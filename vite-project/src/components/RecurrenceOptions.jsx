import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const RecurrenceOptions = () => {
  const { state, dispatch } = useRecurrence();

  const handleRecurrenceChange = (e) => {
    dispatch({ type: 'SET_RECURRENCE_TYPE', payload: e.target.value });
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Recurrence Pattern</h3>
      <select
        value={state.recurrenceType}
        onChange={handleRecurrenceChange}
        className="border rounded p-2 w-full"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
