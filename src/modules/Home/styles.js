/**
 * @format
 * Home Style
 */

import {ScaledSheet} from 'react-native-size-matters';
import Config from 'react-native-config';

import {Colors} from '@app/styles';

export const getStyle = () => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Config.TEXT_COLOR,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      color: Config.LABEL_COLOR,
    },
  });
};
