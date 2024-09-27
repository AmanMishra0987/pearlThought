// src/tests/RecurrenceOptions.test.jsx
import { render, screen } from '@testing-library/react';
import RecurrenceOptions from '../components/RecurrenceOptions';
import { DatePickerProvider } from '../context/DatePickerContext';

test('renders RecurrenceOptions component', () => {
  render(
    <DatePickerProvider>
      <RecurrenceOptions />
    </DatePickerProvider>
  );

  const selectElement = screen.getByLabelText(/Recurrence/i);
  expect(selectElement).toBeInTheDocument();
});
