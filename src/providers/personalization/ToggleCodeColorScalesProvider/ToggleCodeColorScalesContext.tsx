import React from 'react';
import { CodesForColorScales } from '../../../types/personalization/enumsPersonalization';

export type ToggleCodeColorScalesContextData = {
  codeColorScalesSelected: CodesForColorScales;
  setCodeColorScalesSelected: React.Dispatch<React.SetStateAction<CodesForColorScales>>;
};

const initialCodeColorScale: ToggleCodeColorScalesContextData = {
  codeColorScalesSelected: CodesForColorScales.atoll,
  setCodeColorScalesSelected: () => {},
};

export const ToggleCodeColorScalesContext = React.createContext(
  initialCodeColorScale,
);
