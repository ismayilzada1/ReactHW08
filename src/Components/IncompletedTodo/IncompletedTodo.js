// IncompletedTodo.js
import React, { useState } from 'react';
import {Text, View, Image, Pressable} from "react-native";
import Checkbox from 'expo-checkbox';
import styles from "./style";

const IncompletedTodo = ({ id, categoryId = 1, title, description, isFirst, isLast, onToggleCompletion }) => {
    const [isChecked, setChecked] = useState(false);

    let borderTopRadius = 0;
    let borderBottomRadius = 0;
    let borderBottomWidth = 0;

    let backgroundColor = '#E7E2F3';
    let ImageComponent = null;
    switch (categoryId) {
        case 1:
            backgroundColor = '#DBECF6';
            ImageComponent = require('../../../assets/Categories/notes.png');
            break;
        case 2:
            backgroundColor = '#E7E2F3';
            ImageComponent = require('../../../assets/Categories/table.png');
            break;
        case 3:
            backgroundColor = '#FEF5D3';
            ImageComponent = require('../../../assets/Categories/cup.png');
            break;
    }

    if (isFirst) {
        borderTopRadius = 15;
    }
    if (isLast) {
        borderBottomRadius = 15;
    } else {
        borderBottomWidth = 2;
    }

    const handleToggle = () => {
        setChecked(!isChecked);
        onToggleCompletion(id, !isChecked);
    };

    return (
        <View style={[styles.container, { borderTopLeftRadius: borderTopRadius, borderTopRightRadius: borderTopRadius, borderBottomLeftRadius: borderBottomRadius, borderBottomRightRadius: borderBottomRadius, borderBottomWidth: borderBottomWidth }]}>
            <View style={styles.IconContainer}>
                <View style={[styles.Icon, { backgroundColor }]}>
                    <Image source={ImageComponent} style={styles.image} />
                </View>
            </View>

            <View style={styles.TitleContainer}>
                <Text style={styles.firstTitle}>{title}</Text>
                <Text style={styles.secondTitle}>{description}</Text>
            </View>

            <View style={styles.CheckboxContainer}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={handleToggle}
                    color={isChecked ? '#4A3780' : "#4A3780"}
                />
            </View>
        </View>
    );
};

export default IncompletedTodo;