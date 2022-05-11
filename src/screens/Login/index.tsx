/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect } from 'react'
import { Text, View} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import styles from './index.styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = StackScreenProps<any, any>

export function MainScreen ({ navigation }: Props): any {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      headerShown: false
    })
  }, [])
  
  return (
    <View style={styles.body}>
      <Text style={{color: 'black', fontSize: 24}}>
        Hola webong
      </Text>
      <TouchableOpacity style={{marginTop: 10}}>
        <View style={{backgroundColor: 'blue', borderRadius: 8, width: '100%', height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 24}}>Tocame</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
