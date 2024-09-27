import React from 'react';
import { format } from 'date-fns';
import { useRecurrence } from '../context/RecurrenceContext';

const MiniCalendarPreview = () => {
  const { state } = useRecurrence();
  const selectedDates = [];
  
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Preview</h3>
      <div className="grid grid-cols-7 gap-1">
        {selectedDates.map((date, idx) => (
          <div key={idx} className="p-2 border rounded text-center">
            {format(date, 'dd MMM')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendarPreview;
