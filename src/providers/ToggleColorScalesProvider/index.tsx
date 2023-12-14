import React from 'react';
import { ThemeModes } from '../../types/personalization/typesThemes';
import {
  ToggleColorScalesContext,
  ToggleColorScalesContextData,
} from './ToggleColorScalesContext';
import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';

type ToggleColorScalesProviderProps = {
  children: React.ReactNode;
};

export default function ToggleColorScalesProvider({
  children,
}: ToggleColorScalesProviderProps) {
  const [codeColorScales, setCodeColorScales] = React.useState(
    CodesForColorScales.atoll,
  );

  const value: ToggleColorScalesContextData = {
    codeColorScales,
    setCodeColorScales,
  };

  return (
    <ToggleColorScalesContext.Provider value={value}>
      {children}
    </ToggleColorScalesContext.Provider>
  );
}
