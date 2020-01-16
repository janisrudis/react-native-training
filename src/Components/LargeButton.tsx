import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {primary, textColor, Px14} from '../Style/Style';

export interface MessageItemProps {
  text: string;
  onPress?: () => void;
}

export const LargeButton: React.FC<MessageItemProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{marginTop: 'auto', width: '100%'}}
    >
      <View style={styles.message}>
        <Px14 style={{textTransform: 'uppercase'}}>{text}</Px14>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  message: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primary,
    borderRadius: 30,
    paddingVertical: 14,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
});
