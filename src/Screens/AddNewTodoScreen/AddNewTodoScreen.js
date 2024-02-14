import React,{useState} from 'react';
import styles from "./style"
import {Pressable, View, Text, TextInput, TouchableOpacity,Image,DatePickerIOS} from "react-native";
import { RadioButton } from 'react-native-paper';
import Task from "../../Components/Categories/Task";
import Event from "../../Components/Categories/Event";
import Goal from "../../Components/Categories/Goal";
import DateTimePicker from '@react-native-community/datetimepicker';

const AddNewTodoScreen = () => {
    const [selectedTask, setSelectedTask] = useState(1);

    const handleTaskSelect = (taskId) => {
        setSelectedTask(taskId === selectedTask ? null : taskId);
    };


    const [notes, setNotes] = useState('');

    const handleNotesChange = (text) => {
        setNotes(text);
    };

    return (
        <View style={styles.container}>


            <View style={styles.header}>
                <Pressable style={styles.CloseButton}>
                    <Text style={styles.CloseButtonText}>+</Text>
                </Pressable>

                <View style={styles.HeaderTextContainer}>
                    <Text style={styles.HeaderText}>Add New Task</Text>
                </View>
            </View>

            <View style={styles.main}>

                <View style={styles.TaskTitleContainer}>

                    <Text style={styles.TaskTitle}>Task Title</Text>

                    <TextInput style={styles.TaskTitleInput} placeholderTextColor={"#1B1B1D"} placeholder={"Task Title"}></TextInput>

                </View>

                <View style={styles.CategoriesContainer}>

                    <Text style={styles.CategoryText}>Category</Text>

                    <View style={styles.CategoryButtonsContainer}>

                        <Task Id={1} selected={selectedTask === 1} onSelect={() => handleTaskSelect(1)} />
                        <Event Id={2} selected={selectedTask === 2} onSelect={() => handleTaskSelect(2)} />
                        <Goal Id={3} selected={selectedTask === 3} onSelect={() => handleTaskSelect(3)} />

                    </View>

                </View>

                <View style={styles.DateAndTimeContainer}>

                    <View style={styles.DateContainer}>
                        <Text style={styles.DateText}>Date</Text>

                    </View>

                    <View style={styles.TimeContainer}>
                        <Text style={styles.TimeText}>Time</Text>
                    </View>

                </View>

                <View style={styles.TaskNotesContainer}>
                    <Text style={styles.NotesText}>Notes</Text>

                    <TextInput
                        style={styles.NotesInput}
                        placeholder="Notes"
                        value={notes}
                        onChangeText={handleNotesChange}
                        autoFocus={true}
                        autoCapitalize="sentences"
                        autoCompleteType="off"
                        autoCorrect={false}
                        multiline={true}
                        numberOfLines={10}
                        maxLength={150}
                        textAlignVertical="top"
                        placeholderTextColor="#999"
                    />
                </View>


            </View>

            <View style={styles.footer}>
                <Pressable style={styles.SaveButton}>
                    <Text style={styles.SaveButtonText}>Save</Text>
                </Pressable>
            </View>

        </View>
    );
};

export default AddNewTodoScreen;