import { CodesColorScales } from './appEnums';
import { ScalesForColors } from './typesColors';

export type ColorScales = {
  id: CodesColorScales;
  name: string;
  scales: ScalesForColors;
};
