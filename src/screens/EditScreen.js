import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find (
        blogPost => blogPost.id === navigation.getParam('id')
    );

    return (
        <BlogPostForm 
            initialValues = {{ title: blogPost.title, content: blogPost.content }}
            onSubmit = {(title, content) => {
                editBlogPost(id, title, content, () => navigation.pop()); 
            }} 
        />
    );
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
    }
});

export default EditScreen;