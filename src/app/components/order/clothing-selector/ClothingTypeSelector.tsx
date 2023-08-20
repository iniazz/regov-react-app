import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

interface ClothingTypeSelectorProps {
  onSelect: (clothingType: string) => void;
}

const ClothingTypeSelector: React.FC<ClothingTypeSelectorProps> = ({ onSelect }) => {
  const clothingTypes = ['Shirt', 'Dress', 'Trouser'];

  return (
    <div>
      <h3>Select Clothing Type</h3>
      <ul>
        {clothingTypes.map((type) => (
          <li key={type}>
            <MDBBtn onClick={() => onSelect(type)}>{type}</MDBBtn>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothingTypeSelector;
