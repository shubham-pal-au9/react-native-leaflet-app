import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  LogBox,
  Image,
} from "react-native";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { LinearGradient } from "expo-linear-gradient";
export default function Home({ navigation, GlobalState }) {
  const {
    toDoList,
    setToDoList,
    task,
    setTask,
    setChoosenTask,
    gradient,
    setGradient,
    count,
    setCount,
  } = GlobalState;

  useEffect(() => {
    setToDoList((prevState) => [...prevState, { id: 2, task: "go to bed" }]);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.task}
        onPress={() => handleChooseTask(item)}
      >
        <Text>{item.task}</Text>
      </TouchableOpacity>
    );
  };

  const handleSaveTask = () => {
    const index = toDoList.length + 1;

    setToDoList((prevState) => [...prevState, { id: index, task: task }]);

    setTask("");
  };

  const handleChangeGradient = () => {
    console.log("Handle Situation:", gradient, count);

    if (count == 0) {
      setCount(count + 1);
      setGradient("pink");
    } else if (count == 1) {
      setCount(count + 1);
      setGradient("brown");
    } else if (count == 2) {
      setCount(count + 1);
      setGradient("yellow");
    } else if (count == 3) {
      setCount(count + 1);
      setGradient("green");
    } else if (count == 4) {
      setCount(count + 1);
      setGradient("red");
    } else if (count == 5) {
      setCount(count + 1);
      setGradient("gray");
    } else {
      setGradient("blue");
      setCount(0);
    }

    console.log("Check Count", count);
  };

  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.body}>
        <LinearGradient
          // Background Linear Gradient
          colors={[gradient, "transparent"]}
          style={styles.body}
        >
          <Image
            source={require("../images/text-font.png")}
            style={styles.text}
          />
          <TouchableOpacity onPress={() => handleChangeGradient()}>
            <Image
              source={require("../images/circle.png")}
              style={styles.circle}
            />
          </TouchableOpacity>

          <Image
            source={require("../images/sticker.png")}
            style={styles.sticker}
          />
          <Image
            source={require("../images/pencil.png")}
            style={styles.pencil}
          />
          <Image
            source={require("../images/calendar.png")}
            style={styles.calendar}
          />
          <Image
            source={require("../images/download.png")}
            style={styles.download}
          />
        </LinearGradient>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  body: {
    flex: 8,
    width: "98%",
    marginRight: 125,
    marginLeft: 50,
    marginTop: 0,
    paddingTop: 20,
    paddingBottom: 20,
    //backgroundColor: "#68a0cf",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
  text: {
    marginTop: 50,
    width: 70,
    height: 65,
    fontSize: 15,
    alignSelf: "flex-end",
    marginRight: 60,
    marginBottom: 70,
    /* borderRadius: 50,
    borderWidth: 5, */
    //borderColor: "#fff",
  },
  circle: {
    width: 70,
    height: 70,
    fontSize: 15,
    alignSelf: "flex-end",
    marginRight: 60,
    marginBottom: 65,
    //cursor: "pointer",
  },
  sticker: {
    width: 70,
    height: 70,
    fontSize: 15,
    alignSelf: "flex-end",
    marginRight: 60,
    marginBottom: 65,
  },
  pencil: {
    width: 70,
    height: 70,
    fontSize: 15,
    alignSelf: "flex-end",
    marginRight: 60,
    marginBottom: 65,
  },
  calendar: {
    width: 70,
    height: 70,
    fontSize: 15,
    alignSelf: "flex-end",
    marginRight: 60,
    marginBottom: 65,
  },
  download: {
    width: 70,
    height: 70,
    fontSize: 15,
    alignSelf: "flex-end",
    marginRight: 60,
    marginBottom: 65,
  },
});
