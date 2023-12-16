import React from 'react';
import { CodesForColorScales } from '../../../types/personalization/enumsPersonalization';
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
  const [codeColorScales, setCodeColorScales] = React.useState(
    CodesForColorScales.atoll,
  );

  const value: ToggleCodeColorScalesContextData = {
    codeColorScales,
    setCodeColorScales,
  };

  return (
    <ToggleCodeColorScalesContext.Provider value={value}>
      {children}
    </ToggleCodeColorScalesContext.Provider>
  );
}
