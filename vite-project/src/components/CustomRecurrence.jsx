import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const CustomRecurrence = () => {
  const { state, dispatch } = useRecurrence();

  const handleIntervalChange = (e) => {
    dispatch({ type: 'SET_CUSTOM_RECURRENCE', payload: { ...state.customRecurrence, interval: e.target.value } });
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Custom Recurrence</h3>
      <div className="mt-2">
        <label>Repeat every</label>
        <input
          type="number"
          value={state.customRecurrence.interval}
          onChange={handleIntervalChange}
          className="border rounded p-2 w-full"
        />
      </div>
    </div>
  );
};

export default CustomRecurrence;
