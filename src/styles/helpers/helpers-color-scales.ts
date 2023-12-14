import {
  ATOLL_COLOR_SCALES,
  IRON_COLOR_SCALES,
  LIME_COLOR_SCALES,
  SEA_BUCKTHORN_COLOR_SCALES,
  VALHALLA_COLOR_SCALES,
  WINE_BERRY_COLOR_SCALES,
} from '../colors-scales';

export const getColorScalesByCode = (codeColorScale = '') => {
  switch (codeColorScale) {
    case 'atoll':
      return ATOLL_COLOR_SCALES;
    case 'valhalla':
      return VALHALLA_COLOR_SCALES;
    case 'wine_berry':
      return WINE_BERRY_COLOR_SCALES;
    case 'lime':
      return LIME_COLOR_SCALES;
    case 'sea_buckthorn':
      return SEA_BUCKTHORN_COLOR_SCALES;
  }

  return IRON_COLOR_SCALES;
};
