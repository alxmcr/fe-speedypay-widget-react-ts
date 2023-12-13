import { CodesColorScales } from '../../types/enumsApp';
import { ColorScales } from '../../types/personalization/typesColors';
import {
  ATOLL,
  IRON,
  LIME,
  SEA_BUCKTHORN,
  VALHALLA,
  WINE_BERRY,
} from '../colors';

export const IRON_COLOR_SCALES: ColorScales = {
  id: CodesColorScales.iron,
  name: 'iron',
  scales: IRON,
};

export const ATOLL_COLOR_SCALES: ColorScales = {
  id: CodesColorScales.atoll,
  name: 'Atoll',
  scales: ATOLL,
};

export const VALHALLA_COLOR_SCALES: ColorScales = {
  id: CodesColorScales.valhalla,
  name: 'Valhalla',
  scales: VALHALLA,
};

export const WINE_BERRY_COLOR_SCALES: ColorScales = {
  id: CodesColorScales.wineBerry,
  name: 'Wine Berry',
  scales: WINE_BERRY,
};

export const LIME_COLOR_SCALES: ColorScales = {
  id: CodesColorScales.lime,
  name: 'Lime',
  scales: LIME,
};

export const SEA_BUCKTHORN_COLOR_SCALES: ColorScales = {
  id: CodesColorScales.sea_buckthorn,
  name: 'Sea Buckthorn',
  scales: SEA_BUCKTHORN,
};
