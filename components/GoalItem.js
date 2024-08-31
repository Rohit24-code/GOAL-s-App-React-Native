import {StyleSheet, Text, View,Pressable} from 'react-native'

function GoalItem({itemData,handleDeleteGoals}){
   return  <Pressable android_ripple={{color:"pink"}} onPress={()=>handleDeleteGoals(itemData.item.id)}>
   <View style={styles.goalItem} >
    <Text style={styles.goalText}>{itemData.item.text}</Text>
  </View>
  </Pressable>
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    
        
      },
      goalText: {
        color: "white",
        padding: 6,
      }
})