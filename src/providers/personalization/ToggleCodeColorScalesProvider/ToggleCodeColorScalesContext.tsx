import React from 'react';
import { CodesForColorScales } from '../../../types/personalization/enumsPersonalization';

export type ToggleCodeColorScalesContextData = {
  codeColorScales: CodesForColorScales;
  setCodeColorScales: React.Dispatch<React.SetStateAction<CodesForColorScales>>;
};

const initialCodeColorScale: ToggleCodeColorScalesContextData = {
  codeColorScales: CodesForColorScales.atoll,
  setCodeColorScales: () => {},
};

export const ToggleCodeColorScalesContext = React.createContext(
  initialCodeColorScale,
);
