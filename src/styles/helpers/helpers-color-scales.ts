import { ATOLL_COLOR_SCALES } from '../colors-scales';

export const getScalesForColorsByCode = (codeColorScale = '') => {
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
