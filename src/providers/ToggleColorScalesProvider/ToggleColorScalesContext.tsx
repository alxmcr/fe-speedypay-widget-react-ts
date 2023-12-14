import React from 'react';
import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';

export type ToggleColorScalesContextData = {
  codeColorScales: CodesForColorScales;
  setCodeColorScales: React.Dispatch<React.SetStateAction<CodesForColorScales>>;
};

const initialcodeColorScale: ToggleColorScalesContextData = {
  codeColorScales: CodesForColorScales.atoll,
  setCodeColorScales: () => {},
};

export const ToggleColorScalesContext = React.createContext(
  initialcodeColorScale,
);
