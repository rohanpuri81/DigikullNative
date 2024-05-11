import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Text
        onPress={() => {
          navigation.dispatch(StackActions.replace('Login'));
        }}>
        Navigate to Login
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
