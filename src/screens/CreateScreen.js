import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context);

    return (
        <BlogPostForm onSubmit = { (title, content) => { 
            addBlogPost(title, content, () => navigation.navigate('Index'));
        }} />
    );
};

const styles = StyleSheet.create ({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 20,
        marginHorizontal: 20,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 15

    },  
    btStyle: {
        fontSize: 20,
        backgroundColor: 'black'
    },
    container: {
        alignItems: "center",
        backgroundColor: 'white',
        marginHorizontal: 100,
        marginTop: 40,
        borderRadius: 10,
    },
});

export default CreateScreen;