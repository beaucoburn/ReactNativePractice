import React, { useReducer } from "react";
import { Text, View, Button } from "react-native";

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_increase":
      return { ...state, counter: state.counter + action.payload };
    case "change_decrease":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "change_increase", payload: COUNTER_INCREMENT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({
            type: "change_decrease",
            payload: -1 * COUNTER_INCREMENT,
          });
        }}
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

export default CounterScreen;

//const styles = StyleSheet.create({});
