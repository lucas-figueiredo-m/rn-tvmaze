import React from 'react';
import { Text, View } from 'react-native';

import Config from 'react-native-config';
import { FontFamilies } from 'theme';
const App: React.FC = () => {

  return (
    <View>
      <Text style={{ fontFamily: FontFamilies.Bold}}>{Config.ENV}</Text>
    </View>
  );
};

export default App;
