
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../assets/css/style';

const ButtonMain = ({text,onPress}) => {
  return (<TouchableOpacity style={styles.buttonMain} onPress={() => onPress()}>
    <Text style={styles.buttonMainText}>{text}</Text>
  </TouchableOpacity>);
}

export default ButtonMain