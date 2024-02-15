import React,{useState} from 'react';
import styles from "./style"
import {
    Pressable,
    View,
    Text,
    TextInput,
    Platform,
    Image,
    KeyboardAvoidingView,
    Button,
    TouchableOpacity
} from "react-native";
import { RadioButton } from 'react-native-paper';
import Task from "../../Components/Categories/Task";
import Event from "../../Components/Categories/Event";
import Goal from "../../Components/Categories/Goal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {useNavigation} from "@react-navigation/native";


const AddNewTodoScreen = ({route}) => {
    const { handleAddTodo } = route.params;


    const [selectedTask, setSelectedTask] = useState(1);
    const handleTaskSelect = (taskId) => {
        setSelectedTask(taskId === selectedTask ? null : taskId);
    };

    const [notes, setNotes] = useState('');
    const handleNotesChange = (text) => {
        setNotes(text);
    };

    const [title, setTitle] = useState('');
    const handleTitleChange = (text) => {
        setTitle(text);
    };



    const handleSaveTodo = () => {
        const newTodo = {
            id: Math.floor(Math.random() * 10000000000000) + 1,
            categoryId:selectedTask,
            title:title,
            description:notes,
            completed: false,
        };
        handleAddTodo(newTodo);
        navigation.goBack();
    };



    const navigation = useNavigation();
    const handleBackButton = () => {
        navigation.goBack();
    };








    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleDateConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setSelectedDate(date);
        hideDatePicker();
    };



    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimeConfirm = (time) => {
        console.warn("A Time has been picked: ", time);
        setSelectedTime(time);
        hideTimePicker();
    };


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >

        <View style={styles.container}>


            <View style={styles.header}>
                <TouchableOpacity style={styles.CloseButton} onPress={handleBackButton}>
                    <Text style={styles.CloseButtonText}>+</Text>
                </TouchableOpacity>

                <View style={styles.HeaderTextContainer}>
                    <Text style={styles.HeaderText}>Add New Task</Text>
                </View>
            </View>

            <View style={styles.main}>

                <View style={styles.TaskTitleContainer}>

                    <Text style={styles.TaskTitle}>Task Title</Text>

                    <TextInput style={styles.TaskTitleInput} onChangeText={handleTitleChange} placeholderTextColor={"#1B1B1D"} placeholder={"Task Title"}></TextInput>

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

                        <View style={{marginTop:-10,marginHorizontal:5}}>
                            <View style={styles.FakeInput}>
                                <Text style={styles.FakeInputText}>{selectedDate}</Text>

                                <TouchableOpacity style={styles.dateIcon} onPress={showDatePicker}>
                                    <Image style={{ width: 20, height: 20 }} source={require('../../../assets/DateTime/calendar.png')} />
                                </TouchableOpacity>
                            </View>

                            {/*<TextInput*/}
                            {/*        style={{ borderWidth: 1, borderColor: 'gray',padding:8 }}*/}
                            {/*        editable={false}*/}
                            {/*        value={selectedDate}*/}
                            {/*/>*/}

                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleDateConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>

                    </View>

                    <View style={styles.TimeContainer}>
                        <Text style={styles.TimeText}>Time</Text>

                        <View style={{marginTop:-10,marginHorizontal:5}}>

                            <View style={styles.FakeInput}>
                                <Text style={styles.FakeInputText}>{selectedTime}</Text>

                                <TouchableOpacity style={styles.dateIcon} onPress={showDatePicker}>
                                    <Image style={{ width: 20, height: 20 }} source={require('../../../assets/DateTime/time.png')} />
                                </TouchableOpacity>
                            </View>


                            <DateTimePickerModal
                                isVisible={isTimePickerVisible}
                                mode="time"
                                onConfirm={handleTimeConfirm}
                                onCancel={hideTimePicker}
                            />
                        </View>
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
                <Pressable style={styles.SaveButton} onPress={handleSaveTodo}>
                    <Text style={styles.SaveButtonText}>Save</Text>
                </Pressable>
            </View>

        </View>

        </KeyboardAvoidingView>
    );
};

export default AddNewTodoScreen;