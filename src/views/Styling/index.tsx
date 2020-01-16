import React from 'react';
import {
  H1,
  Container,
  H2,
  Description,
  Px14,
  error,
  white,
  gray,
  primary,
  dark,
  hot,
  success,
  H3,
  Px16,
  Px16r,
  Px11,
} from '../../Style/Style';
import {View, StyleSheet, Text} from 'react-native';

const colors = [white, gray, primary, dark, hot, error, success];

const Style: React.FC = () => {
  const sampleSize = 40;

  return (
    <Container>
    <View style={{height: 16}}/>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <H1>Headline</H1>
        <H2>Headline2</H2>
        <H3>Headline3</H3>
        <Px16>Subhead</Px16>
        <Px16r>TextField</Px16r>
        <Px14>Descriptive</Px14>
        <Description>Description</Description>
        <Px11>Helper</Px11>
      </View>

      <Text style={styles.comment}> //Color pallette</Text>

      <View
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}
      >
        {colors.map(col => (
          <View key={col}>
            <View
              style={{
                width: sampleSize,
                height: sampleSize,
                borderRadius: sampleSize,
                backgroundColor: col,
              }}
            />
          </View>
        ))}
      </View>
    </Container>
  );
};

export default Style;

const styles = StyleSheet.create({
  comment: {
    fontStyle: "italic",
    color: "#777c86",
    marginTop: 430,
    marginBottom: 10,
  },
});
