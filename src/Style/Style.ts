import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

// ${}

// App color palette.
export const background = '#1E1F28';
export const white = '#F6F6F6';
export const gray = '#ABB4BD';
export const primary = '#EF3651';
export const dark = '#2A2C36';
export const hot = '#FF3E3E';
export const error = '#FF2424';
export const success = '#55D85A';
export const textColor = '#F5F5F5';

// Sizes

export const menuTabMargin = 48
export const menuTabRounding = 12
export const menuTabHeight = 60
export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height

//Font styles

export const H1 = styled.Text`
  color: ${white};
  font-size: 34px;
  font-weight: 700;
  line-height: 34px;
  /* font-family: Metropolis; */
`;
export const H2 = styled.Text`
  color: ${white};
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  /* font-family: Metropolis; */
`;
export const H3 = styled.Text`
  color: ${white};
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  /* font-family: Metropolis; */
`;
export const Px16 = styled.Text`
  color: ${white};
  font-size: 20px;
  font-weight: bold;
  /* font-family: Metropolis; */
`;
export const Px16r = styled.Text`
  color: ${white};
  line-height: 20px;
  font-size: 20px;
  /* font-family: Metropolis; */
`;

export const Px14 = styled.Text`
  color: ${white};
  font-size: 18px;
  /* font-weight: bold; */
  line-height: 20px;
  /* font-family: Metropolis; */
`;
export const Description = styled.Text`
  color: ${white};
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.15px;
  /* font-family: Metropolis; */
`;
export const Px11 = styled.Text`
  color: ${gray};
  font-size: 15px;
  line-height: 15px;
  /* font-family: Metropolis; */
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${background};
  padding: 0 16px 0 16px;
`;

export const Flex = styled.View`
  flex: 1;
`;

export const FlexBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.Image`
       position: absolute;     
        width: 100%;
        height: 100%;
`;

export const InputActive = styled.Text`
  color: ${gray};
  font-size: 11px;
  line-height: 11px;
  position: absolute;
  top: 12px;
  left: 20px;
  z-index: 1;
`;
