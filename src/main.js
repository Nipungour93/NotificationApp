/**
 * @format
 * App Main
 */

import * as React from 'react';
import {LogBox} from 'react-native';

import {HomeScreen} from '@app/modules/Home';
import {NotificationServices} from '@app/notification';

LogBox.ignoreLogs(['Warning: ...']);

function MainApp() {
  return (
    <>
      <HomeScreen />
      <NotificationServices/>
    </>
  );
}

export {MainApp};
