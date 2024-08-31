import React from "react";
import { Button, StyleSheet, TextInput,Image, View, Modal } from "react-native";

const GoalInput = ({ text, isModalOpen, goalInputHandler, addGoalHandler ,handleModalChange}) => {
  return (
    <Modal
      visible={isModalOpen}
      animationType="slide"
     
    >
    <View  style={styles.inputContainer}>
    <Image style={styles.image} source={require("../assets/images/adaptive-icon.png")}/>
      <TextInput
        value={text}
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="Your Course Goals!"
      />
      {/* we can't have style on Button  */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>

        <View style={styles.button}>
          <Button onPress={handleModalChange} title="cancel" />
        </View>
      </View>
    </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    padding: 16,
    backgroundColor: "#5e0acc",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    marginHorizontal: 8,
    width: 100,
  },
});
