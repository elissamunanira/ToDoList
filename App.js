import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, ScrollView, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = ()=> {
    Keyboard.dismiss();
    // console.log(task);
    setTaskItems([...taskItems, task]);
    setTask(null);
  }
  const completeTask =(index )=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <ScrollView style={styles.container}>

      {/* todays task */}

    <View style ={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's task</Text>

      <View style={styles. item}>
        {/* This is where the task will be go! */}
        {
          taskItems.map((item, index)=>{
            return (
              <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            )
          })
        }
        {/* <Task text ={'Task1'} />
        <Task text ={'Task2'}/> */}
      </View>    
    </View>

      {/* writing a task */}
      <KeyboardAvoidingView 
      behavior={Platform.OS==="ios"? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input}placeholder={"write a task"} value={task} onChangeText={text=>setTask(text)}/>
      
      <TouchableOpacity onPress={()=>handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize:24,
    fintWeight: 'bold',
  },
  item:{
     marginTop: 30,
  },
  writeTaskWrapper:{
    postion: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal :15,
    background: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width:250,
  },
  addWrapper:{
    width:60,
    height: 60,
    backgroundColor: 'aqua',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});