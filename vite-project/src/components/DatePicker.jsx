import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecurrence } from '../context/RecurrenceContext';
import { format } from 'date-fns';
import Modal from './Modal';
import {useNavigate} from 'react-router-dom';

const DateSelector = () => {
  const { state, dispatch } = useRecurrence();
  const [showModal, setShowModal] = useState(false);
  const [showTextArea, setShowTextArea] = useState(false);
  const [note, setNote] = useState('');
  const navigate = useNavigate();

  const handleStartDateChange = (date) => {
    dispatch({ type: 'SET_START_DATE', payload: date });
  };

  const handleEndDateChange = (date) => {
    dispatch({ type: 'SET_END_DATE', payload: date });
  };

  const formatDate = (date) => {
    if (date) {
      return `${format(date, 'EEEE')}, ${format(date, 'MMMM dd, yyyy')}`;
    }
    return '-';
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowTextArea(false);
    setNote('');
  };

  const handleShowTextArea = () => {
    setShowTextArea(true);
  };

  const handleOkClick = () => {
    
    dispatch({ type: 'SET_NOTE', payload: note });
    navigate('/preview'); 
  };

  return (
    <div className="date-selector-box">
      <div className="date-picker-container">
        <h3 className="text-lg font-semibold">Select Start Date</h3>
        <DatePicker
          selected={state.startDate}
          onChange={handleStartDateChange}
          className="border rounded p-2"
        />
        <h3 className="text-lg font-semibold mt-4">Select End Date</h3>
        <DatePicker
          selected={state.endDate}
          onChange={handleEndDateChange}
          className="border rounded p-2"
          isClearable
        />
      </div>

      <div className="date-display-box ml-8">
        <div className="formatted-date">
          <strong>Start Date: </strong>
          {formatDate(state.startDate)}
        </div>
        <div className="formatted-date mt-4">
          <strong>End Date: </strong>
          {formatDate(state.endDate)}
        </div>
        <div className="formatted-date mt-4">
          <strong>Recurrence Pattern: </strong>
          {state.recurrenceType ? state.recurrenceType.charAt(0).toUpperCase() + state.recurrenceType.slice(1) : '-'}
        </div>
        {state.customRecurrence.interval && (
          <div className="formatted-date mt-4">
            <strong>Custom Recurrence: </strong>
            Every {state.customRecurrence.interval} {state.recurrenceType}
          </div>
        )}
      </div>

      <div className="mt-4">
        <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </div>

      <Modal showModal={showModal} handleClose={handleCloseModal}>
        <h3 className="text-lg font-semibold">Selected Recurrence Data</h3>
        <div className="formatted-date">
          <strong>Start Date: </strong> {formatDate(state.startDate)}
        </div>
        <div className="formatted-date mt-4">
          <strong>End Date: </strong> {formatDate(state.endDate)}
        </div>
        <div className="formatted-date mt-4">
          <strong>Recurrence Pattern: </strong> {state.recurrenceType || '-'}
        </div>
        {state.customRecurrence.interval && (
          <div className="formatted-date mt-4">
            <strong>Custom Recurrence: </strong> Every {state.customRecurrence.interval} {state.recurrenceType}
          </div>
        )}
        <div className="mt-4">
          <button onClick={handleShowTextArea} className="px-4 py-2 bg-green-500 text-white rounded">
            Add Notes for This Date
          </button>
          {showTextArea && (
            <div className="mt-4">
              <textarea
                rows="4"
                className="border rounded p-2 w-full"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write your notes or tasks here..."
              />
              <div className="mt-4">
                <button onClick={handleOkClick} className="px-4 py-2 bg-yellow-500 text-white rounded">
                  OK
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default DateSelector;
