import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';
import { useNavigate } from 'react-router-dom';

const PreviewPage = () => {
  const { state } = useRecurrence();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <div className="preview-page">
      <h3 className="text-lg font-semibold">Preview of Selected Recurrence Data</h3>
      <div className="formatted-date">
        <strong>Start Date: </strong> {state.startDate ? `${state.startDate.toLocaleDateString()}` : '-'}
      </div>
      <div className="formatted-date mt-4">
        <strong>End Date: </strong> {state.endDate ? `${state.endDate.toLocaleDateString()}` : '-'}
      </div>
      <div className="formatted-date mt-4">
        <strong>Recurrence Pattern: </strong> {state.recurrenceType || '-'}
      </div>
      {state.customRecurrence.interval && (
        <div className="formatted-date mt-4">
          <strong>Custom Recurrence: </strong> Every {state.customRecurrence.interval} {state.recurrenceType}
        </div>
      )}
      <div className="formatted-date mt-4">
        <strong>Notes: </strong> {state.note || '-'}
      </div>
      <div className="mt-4">
        <button onClick={handleGoBack} className="px-4 py-2 bg-blue-500 text-white rounded">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PreviewPage;
