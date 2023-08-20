import React, { useState } from 'react';

interface MeasurementFormProps {
  clothingType: string;
  onSubmit: (data: any) => void;
}

const MeasurementForm: React.FC<MeasurementFormProps> = ({ clothingType, onSubmit }) => {
  const [measurementValues, setMeasurementValues] = useState<any>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMeasurementValues((prevValues: any) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(measurementValues);
  };

  return (
    <div>
      <h3>Enter {clothingType} Measurements</h3>
      <form onSubmit={handleSubmit}>
        <label>Chest:</label>
        <input type="text" name="chest" value={measurementValues.chest || ''} onChange={handleInputChange} />
        <button type="submit">Submit Measurements</button>
      </form>
    </div>
  );
};

export default MeasurementForm;
