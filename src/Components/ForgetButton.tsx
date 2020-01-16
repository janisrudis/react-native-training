import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {primary, Px14} from '../Style/Style';

export interface MessageItemProps {
  text: string;
  onPress?: () => void;
}

export const ForgetButton: React.FC<MessageItemProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{marginTop: 12, width: '100%'}}>
      <Px14 style={styles.text}>
        {text}
        <Text style={{color: primary, fontSize: 20, fontWeight: 'bold'}}>
          
          ⟶
        </Text>
      </Px14>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'right',
  },
});
