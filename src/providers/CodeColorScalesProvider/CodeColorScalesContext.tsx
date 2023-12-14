import React from 'react';
import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';

export type CodeColorScalesContextData = {
  codeColorScale: string;
  setCodeColorScale: React.Dispatch<React.SetStateAction<string>>;
};

const initialCodeColorScales: CodeColorScalesContextData = {
  codeColorScale: CodesForColorScales.atoll,
  setCodeColorScale: () => {},
};

export const CodeColorScalesContext = React.createContext(
  initialCodeColorScales,
);
