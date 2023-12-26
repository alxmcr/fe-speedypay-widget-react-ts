import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';
import { ColorScales } from '../../types/personalization/typesColorsScales';
import {
  ATOLL,
  IRON,
  LIGHT,
  LIME,
  SEA_BUCKTHORN,
  VALHALLA,
  WINE_BERRY,
} from '../colors';

export const IRON_COLOR_SCALES: ColorScales = {
  id: CodesForColorScales.iron,
  name: 'iron',
  scales: IRON,
};

export const ATOLL_COLOR_SCALES: ColorScales = {
  id: CodesForColorScales.atoll,
  name: 'Atoll',
  scales: ATOLL,
};

export const VALHALLA_COLOR_SCALES: ColorScales = {
  id: CodesForColorScales.valhalla,
  name: 'Valhalla',
  scales: VALHALLA,
};

export const WINE_BERRY_COLOR_SCALES: ColorScales = {
  id: CodesForColorScales.wineBerry,
  name: 'Wine Berry',
  scales: WINE_BERRY,
};

export const LIME_COLOR_SCALES: ColorScales = {
  id: CodesForColorScales.lime,
  name: 'Lime',
  scales: LIME,
};

export const SEA_BUCKTHORN_COLOR_SCALES: ColorScales = {
  id: CodesForColorScales.sea_buckthorn,
  name: 'Sea Buckthorn',
  scales: SEA_BUCKTHORN,
};

export const LIGHT_COLOR_SCALES: ColorScales = {
  id: CodesForColorScales.light,
  name: 'Sea Buckthorn',
  scales: LIGHT,
};
