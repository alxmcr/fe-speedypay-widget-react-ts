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
  const [codeColorScalesSelected, setCodeColorScalesSelected] = React.useState(
    CodesForColorScales.atoll,
  );

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
