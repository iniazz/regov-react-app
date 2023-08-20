import React from 'react';

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
            <button onClick={() => onSelect(type)}>{type}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothingTypeSelector;
