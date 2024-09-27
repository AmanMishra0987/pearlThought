import { RecurrenceProvider } from './context/RecurrenceContext';
import DateSelector from './components/DatePicker';
import PreviewPage from './components/PreviewPage';
import RecurrenceOptions from './components/RecurrenceOptions';
import CustomRecurrence from './components/CustomRecurrence';
import MiniCalendarPreview from './components/MiniCalendarPreview';
import './styles.css';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <RecurrenceProvider>  
      <div className="container mx-auto">  
        <div className="box">
          <h1 className="text-2xl font-bold mb-4">Date Picker with Recurrence</h1>
          <Routes>
            <Route path="/" element={<DateSelector />} />
            <Route path="/preview" element={<PreviewPage />} />   
          </Routes>
          <RecurrenceOptions />
          <CustomRecurrence />
          <MiniCalendarPreview />
        </div>
      </div>
    </RecurrenceProvider>
  );
};

export default App;
