import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function goalInputHandler(enteredText) {
    setText(enteredText);
  }

  function addGoalHandler() {
    setText("");
    handleModalChange();
    setData((prev) => [...prev, { text, id: Math.random() }]);
  }

  function handleDeleteGoals(id) {
    setData((prev) => {
      return data.filter((newArr) => newArr.id != id);
    });
  }

  function handleModalChange() {
    setIsModalOpen((prev) => !prev);
    setText("");
  }

  return (
    <>
    <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color={"#5e0acc"}
          onPress={handleModalChange}
        />

        <GoalInput
          isModalOpen={isModalOpen}
          text={text}
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          handleModalChange={handleModalChange}
        />
        <View style={styles.goalsContainer}>
          {/* I have added view on top of scrollView bcs scrollView take the space from it's parent div */}

          {/* Over here the data has a key property which the flatlist takes by itself as key  */}
          {/* If we want some other property as key we can pass a prop called keyExtractor is a Arrow function it has item and index as params  */}
          {/*  */}
          <FlatList
            data={data}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  handleDeleteGoals={handleDeleteGoals}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
          {/* over here i am using View so that borderRadius works on both android and apple , bcs borderRadius does not work on Text on apple devices */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "blue",
  },
  goalsContainer: {
    flex: 4,
  },
});

// {/* <ScrollView >
// {/* over here i am using View so that borderRadius works on both android and apple , bcs borderRadius does not work on Text on apple devices */}
// {data.map((item,index)=>{
// return <View style={styles.goalItem} key={index}><Text style={styles.goalText}>{item}</Text></View>
// })}
// </ScrollView> */}
