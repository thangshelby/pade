import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

const Card = ({ text, subText }:{text:string,subText:string}) => {
  const translateY = useRef(new Animated.Value(30)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View 
    style={[styles.card, { opacity, transform: [{ translateY }] }]}>
      <LinearGradient
        colors={['yellow', 'blue','green','purple']}
        style={styles.gradient}
        start={{ x: 0.2, y: 0.2 }}
        end={{ x:0.9, y: 0.9, }}
      >
        <Text style={styles.cardText}>{text}</Text>
        <Text style={styles.cardSubText}>{subText}</Text>
      </LinearGradient>
    </Animated.View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Card text="SO SÁNH GIÁ" subText="Dễ dàng giữa các bãi đỗ" />
      <Card text="ĐẶT LỊCH" subText="Nhanh chóng và tiện lợi" />
      <Card text="TÌM KIẾM BÃI ĐỖ" subText="Ở khắp mọi nơi" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002a5c",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  cardText: {
    fontSize: 18,
    color: "#ffcc00",
    fontWeight: "bold",
  },
  cardSubText: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },

});

export default App;
