import React, { Component, useState } from 'react'
import { Alert, View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardTypeOptions } from 'react-native';
import { InputActive, dark, textColor, gray } from '../Style/Style';


export interface Input {
    type?: KeyboardTypeOptions;
    placeholder: string;
    caretHidden?: boolean;
    image?: string;
    onFocus?: any;
    validation?: boolean;
    textContentType?: any;
    inputActive?: boolean;
    onChangeText: (text: string) => void;
    onBlur?: () => void;
  }
  
  export const LoginInput: React.FC<Input> = ({
    type,
    placeholder,
    onFocus,
    validation,
    onChangeText,
    textContentType,
    onBlur,
    inputActive,
  }) => {
    // const [pwIcon, setPwIcon] = useState(false);
  
     return (
      <View
        style={[
          styles.searchSection,
          {borderColor: validation ? '#E1E1E1' : '#F45353'},
        ]}
      >
        {inputActive ? (
          <InputActive style={{color: validation ? '#9E9E9E' : '#F45353'}}>
            {placeholder}
          </InputActive>
        ) : null}

        <TextInput
          style={[styles.input]}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          keyboardType={type}
          textContentType={textContentType}
          secureTextEntry={textContentType === "password"}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChangeText}
          placeholderTextColor={gray} 
        />



      </View>
    );
  };


const styles = StyleSheet.create({
    icon: {

    },
    searchSection: {
backgroundColor: dark,
borderRadius: 4,
color: "red",
paddingVertical: 8,
paddingHorizontal: 15,
marginVertical: 4,
    },
    input: {
color: textColor,
    },
  });