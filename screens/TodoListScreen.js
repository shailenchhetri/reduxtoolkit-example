import React, { useState } from 'react';

import { View, Text, TextInput, Button, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, deleteTodo } from '../store/todoSlice'; // Assuming todoSlice.js is in the same directory
import { addTodoAsync, deleteTodo } from '../store/toDoWithThunkslice'; // Assuming todoSlice.js is in the same directory

const TodoListScreen = () => {
    // useSelector and useDispatch are hooks provided by react-redux
    const tasks = useSelector(state => state.todo.tasks);
    const dispatch = useDispatch();

    const [inputText, setInputText] = useState('');

    const handleAddTodo = () => {
        if (inputText.trim() !== '') {
            dispatch(addTodoAsync(inputText));
            setInputText('');
        }
    };

    const handleDeleteTodo = (taskId) => {
        dispatch(deleteTodo(taskId));
    };

    const renderTodoItem = ({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <Text>{item.text}</Text>
            <Button title="Delete" onPress={() => handleDeleteTodo(item.id)} />
        </View>
    );

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Todo List</Text>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <TextInput
                    style={{ flex: 1, borderWidth: 1, borderColor: 'gray', marginRight: 10, padding: 5 }}
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                />
                <Button title="Add Todo" onPress={handleAddTodo} />
            </View>
            <FlatList
                data={tasks}
                renderItem={renderTodoItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default TodoListScreen;