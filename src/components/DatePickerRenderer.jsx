// DatePickerRenderer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerRenderer = ({ data, handleChange }) => {
  const handleDateChange = (date) => {
    handleChange('dueDate', date.toISOString()); // Convert to ISO format or adjust as needed
  };

  return (
    <DatePicker
      selected={data ? new Date(data) : null}
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd" // Adjust the date format as needed
    />
  );
};

DatePickerRenderer.propTypes = {
  data: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default DatePickerRenderer;
