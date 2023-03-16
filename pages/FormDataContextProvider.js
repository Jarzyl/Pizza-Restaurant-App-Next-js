import { useState } from 'react';
import { FormDataContext } from './FormDataContext';

export default function FormDataContextProvider({ children }) {
  const [formData, setFormData] = useState({});

  const updateFormData = (key, value) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [key]: value,
      };
    });
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}
