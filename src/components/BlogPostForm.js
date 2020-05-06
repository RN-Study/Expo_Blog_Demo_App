import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {

    const[ title, setTitle ] = useState(initialValues.title);
    const[ content, setContent ] = useState(initialValues.content);

    return (
        <View>
        <Text style = {styles.label} > Enter Title: </Text>
        <TextInput 
            style = {styles.textfield}
            value = {title}
            onChangeText = {(text) => setTitle(text)}
        />
        <Text style = {styles.label} > Enter Content: </Text>
        <TextInput
            style = {styles.textfield}
            value = {content}
            onChangeText = { (text) => setContent(text) }
        />
        <View style = {styles.container}  >
            <Button 
                style = { styles.btStyle }
                title = " Save Blog Post "
                onPress = { () => onSubmit(title, content)}
            />
        </View>
    </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
};

const styles = StyleSheet.create ({
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 15
    },
    textfield: {
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 20,
        marginHorizontal: 20,
        padding: 5
    },
    container: {
        alignItems: "center",
        backgroundColor: 'white',
        marginHorizontal: 100,
        marginTop: 40,
        borderRadius: 10,
    },
    btStyle: {
        fontSize: 20,
        backgroundColor: 'black'
    },
});

export default BlogPostForm;