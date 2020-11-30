import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import  SQLite from 'expo-sqlite';
import {Picker} from '@react-native-community/picker';

export default function Home() {
  //data çekilirken kullanılacak state'ler
  const [lessons, setLessons] = useState([]);
  const [department, setDepartment] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.pickerView}>
        <Picker style={styles.pickerStyle}>
          <Picker.Item color="#fff" label="Bölüm Seçiniz" />
        </Picker>
      </View>
      <View style={styles.pickerView}>
        <Picker style={styles.pickerStyle}>
          <Picker.Item color="#fff" label="Ders Seçiniz" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {justifyContent: 'center', flex: 1, backgroundColor: '#fff'},
  pickerView: {
    margin: 20,
    borderRadius: 10,
    margin: 20,
    overflow: 'hidden',
  },
  pickerStyle: {
    backgroundColor: '#E16E6E',
  },
});
