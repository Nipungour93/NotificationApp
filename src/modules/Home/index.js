/**
 * Setting Screen
 * @format
 */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Config from 'react-native-config';


import {getStyle} from './styles';

const HomeScreen = () => {
  const styles = getStyle();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{'Push Notification Test'}</Text>
      <Text style={styles.label}>{Config.ENV_NAME}</Text>
    </View>
  );
};

export {HomeScreen};
