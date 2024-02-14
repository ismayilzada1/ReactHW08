import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const Event = ({ Id, selected, onSelect }) => {
    return (
        <TouchableOpacity style={[styles.radioButton, selected && styles.selected]} onPress={onSelect}>
            <Image source={require('../../../assets/Categories/table.png')} style={styles.image} />
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    radioButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E7E2F3',
    },
    image: {
        width: 30,
        height: 30,
    },
    selected: {
        borderColor: '#4A3780',
    },
});

export default Event;
