// UserHomePage.js
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { BASE_URL } from './config';
import { AuthContext } from './context/AuthContext';

const UserHomePage = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/shoes`)
      .then(response => {
        setShoes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the shoes!', error);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Manager</Text>
      </View>
      {/* mini nav */}
      <View style={styles.quickActions}>
        <View style={styles.logout}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <TouchableOpacity onPress={ () => logout() }>
          <Text style={{color: 'blue'}}>Sign Out</Text>
        </TouchableOpacity>
        </View>
        {/* Review State of Stock */}
        <TouchableOpacity
          style={styles.actionButton}
          // Navigating to Review State of Stock
          onPress={() => navigation.navigate('ReviewStock')}>
          <Text style={styles.buttonText}>Review State of Stock</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('AddStock')}>
          <Text style={styles.buttonText}>Add New Stock Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('TransferStock')}>
          <Text style={styles.buttonText}>Transfer Stock</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('EditStock')}>
          <Text style={styles.buttonText}>Edit Existing Stock</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.shoeList}>
        <Text style={styles.sectionTitle}>Shoes</Text>
        {shoes.map(shoe => (
          <View key={shoe.shoe_id} style={styles.shoeItem}>
            <Text>{shoe.shoe_name} - {shoe.shoe_color}</Text>
          </View>
        ))}
      </View>
      {/* <View style={styles.footer}>
        <Button title="Sign Out" onPress={() => { logout() }} />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 30,
    margin: 20
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  quickActions: {
    marginBottom: 20,
  },
  logout: {
    width: "90%",
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  shoeList: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'pink',
    padding: 10,
  },
  shoeItem: {
    padding: 10,
    backgroundColor: '#e9ecef',
    marginBottom: 10,
    borderRadius: 5,
  },
  footer: {
    marginTop: 20,
  },
});

export default UserHomePage;