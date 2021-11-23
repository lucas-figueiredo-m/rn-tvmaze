import React from 'react';
import { StatusBar } from 'react-native';
import Router from 'routes';
import { Colors } from 'theme';


const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle='light-content' translucent backgroundColor={Colors.Transparent} />
      <Router />
    </>
  );
};

export default App;
