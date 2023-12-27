import React from 'react';
import {
  ToggleCodeColorScalesContext,
  ToggleCodeColorScalesContextData,
} from './ToggleCodeColorScalesContext';

type ToggleCodeColorScalesProviderProps = {
  children: React.ReactNode;
};

export default function ToggleCodeColorScalesProvider({
  children,
}: ToggleCodeColorScalesProviderProps) {
  const [codeColorScalesSelected, setCodeColorScalesSelected] =
    React.useState('atoll');

  const value: ToggleCodeColorScalesContextData = {
    codeColorScalesSelected,
    setCodeColorScalesSelected,
  };

  return (
    <ToggleCodeColorScalesContext.Provider value={value}>
      {children}
    </ToggleCodeColorScalesContext.Provider>
  );
}
