import React from 'react';
import { CodesForColorScales } from '../../../types/personalization/enumsPersonalization';

export type ToggleCodeColorScalesContextData = {
  codeColorScalesSelected: string;
  setCodeColorScalesSelected: React.Dispatch<React.SetStateAction<string>>;
};

const initialCodeColorScale: ToggleCodeColorScalesContextData = {
  codeColorScalesSelected: CodesForColorScales.atoll,
  setCodeColorScalesSelected: () => {},
};

export const ToggleCodeColorScalesContext = React.createContext(
  initialCodeColorScale,
);
