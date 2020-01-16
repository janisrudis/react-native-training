import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {primary, textColor, Px14} from '../Style/Style';
import Google from '../Assets/icons/social/google.svg';
import Facebook from '../Assets/icons/social/facebook.svg';

export interface MessageItemProps {
  text: string;
  onPress?: () => void;
}

export const SocialButtons: React.FC<MessageItemProps> = ({text, onPress}) => {
  return (
    <View style={{marginTop: 'auto', marginBottom: 22}}>
      <Px14 style={{textAlign: 'center'}}>{text}</Px14>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 14}}
      >
        <TouchableOpacity onPress={onPress} style={{marginHorizontal: 8}}>
          <View style={styles.socialButton}>
            <Google />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.socialButton}>
            <Facebook />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    width: 92,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
