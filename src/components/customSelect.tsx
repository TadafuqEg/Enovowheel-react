import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Option {
  id: string;
  label: string;
  image: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  onSelect: (option: Option) => void;
  placeholder?: string;
}

export function CustomSelect({ options, onSelect, placeholder = 'Select an option' }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Set first option as default when component mounts
  useEffect(() => {
    if (options.length > 0 && !selectedOption) {
      const defaultOption = options[0];
      setSelectedOption(defaultOption);
      onSelect(defaultOption);
    }
  }, [options, onSelect]);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative w-full max-w-xs" ref={dropdownRef}>
      <button
        className="w-full px-4 py-2 flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? (
          <div className="flex items-center">
            <img
              src={selectedOption.image}
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        ) : (
          <span className="text-gray-500">{placeholder}</span>
        )}
        <ChevronDown
          className={`zzz transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 border border-gray-300 rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option.id}
              className="px-4 py-2 flex items-center transition-colors"
              onClick={() => handleSelect(option)}
            >
              <img
                src={option.image}  
                className="w-8 h-8 rounded-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}