import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [password, updatePassword] = useState('');
  let uppercaseError;
  if(password.toUpperCase() === password){
    uppercaseError = <Text style={styles.error}>Password requires at least one Lowercase Letter.</Text>
  }
  let lowercaseError;
  if(password.toLowerCase() === password){
    lowercaseError = <Text style={styles.error}>Password requires at least one Capital Letter.</Text>
  }
  let numbersError;
  if(password.replace(/[0-9]/g, '') === password){
    numbersError = <Text style={styles.error}>Password requires at least one Number.</Text>
  }
  let speicalError;
  if(password.replace(/[0-9A-Za-z]/g, '') === password){
    speicalError = <Text style={styles.error}>Password requires at least one character, which is neither a letter nor a number.</Text>
  }
  let LengthError;
  if(password.length <= 8){
    LengthError = <Text style={styles.error}>Password must be at least 9 characters long.</Text>
  }
  let errorsView = <View>{uppercaseError}{lowercaseError}{numbersError}{speicalError}{LengthError}</View>;

  return (
    <View style={styles.container}>
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={updatePassword} style={styles.formBox} secureTextEntry={true} textContentType={'password'} maxLength={25}/>
      {errorsView}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    marginHorizontal: '2%'
  },
  formBox:{
    borderColor: 'black',
    borderWidth: 2,
    width: '100%',
    fontSize: 20,
    justifyContent: 'center',
    padding: 5,
    borderRadius: 10
  },
  error:{
    color: 'red',
    borderBottomColor: 'black',
    borderBottomWidth: 2
  }
});
