import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import registerNNPushToken from "native-notify";

import Home from "./src/screens/Home";
import ChoosenTask from "./src/screens/ChoosenTask";

const Stack = createNativeStackNavigator();

export default function App() {
  // push notification
  registerNNPushToken(5266, "HFcsYuNHtWoDcEXbDoq3rI");

  // globalstate management
  const [toDoList, setToDoList] = useState([
    { id: 1, task: "brush you teeth properply" },
  ]);
  const [task, setTask] = useState("");
  const [choosenTask, setChoosenTask] = useState("");

  const GlobalState = {
    toDoList,
    setToDoList,
    task,
    setTask,
    choosenTask,
    setChoosenTask,
  };

  // navigation
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="ChoosenTask" options={{ headerShown: false }}>
          {(props) => <ChoosenTask {...props} GlobalState={GlobalState} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
