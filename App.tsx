/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {FlatList, LayoutRectangle, SafeAreaView, View} from 'react-native';

type RGB = {
  r: number;
  g: number;
  b: number;
};

function App(): JSX.Element {
  const [data] = useState(() => {
    const colors: RGB[] = [];
    for (let i = 0; i < 5; i++) {
      colors.push({
        r: Math.floor(255 * Math.random()),
        g: Math.floor(255 * Math.random()),
        b: Math.floor(255 * Math.random()),
      });
    }
    return colors;
  });
  const [layout, setLayout] = useState<LayoutRectangle>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        onLayout={event => setLayout(event.nativeEvent.layout)}
        horizontal={true}
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              width: layout?.width,
              height: layout?.height,
              backgroundColor: `rgba(${item.r}, ${item.g}, ${item.b}, 1)`,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: 'white',
              }}></View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default App;
