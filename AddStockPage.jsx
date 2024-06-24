// AddStockPage.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import { BASE_URL } from './config';

const AddStockPage = ({ navigation }) => {
  const [shoeName, setShoeName] = useState('');
  const [shoeColor, setShoeColor] = useState('');
  const [numOfShoes, setNumOfShoes] = useState(0);
  const [error, setError] = useState('');

  const addShoe = () => {
    axios.post(`${BASE_URL}/shoe`, {
      shoe_name: shoeName,
      shoe_color: shoeColor
    })
    .then(response => {
      setShoeName('');
      setShoeColor('');

      //   Success Toast Message
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Shoe Added Successfully✅',
        position: 'bottom',
    });

      navigation.navigate('UserHome');
    })
    .catch(error => {
      console.error(error);

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to Add Shoe. Please Try Again',
        position: 'bottom',
      })
      setError('Failed to add shoe. Please try again.');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Stock Item</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Shoe Name"
        value={shoeName}
        onChangeText={setShoeName}
      />
      <TextInput
        style={styles.input}
        placeholder="Shoe Color"
        value={shoeColor}
        onChangeText={setShoeColor}
      />
      <TextInput
      style={styles.input}
      placeholder="Number Of Shoes"
      value={numOfShoes}
      onChangeText={(value) => setNumOfShoes(value)}
      keyboardType="number-pad"
      />
      <Button title="Add Shoe" onPress={addShoe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
});

export default AddStockPage;
