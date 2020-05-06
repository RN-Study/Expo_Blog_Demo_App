import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import ShowScreen from '../screens/ShowScreen';

const IndexScreen = ( { navigation } ) => {
    
    const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect( () => {
        getBlogPosts();
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });
        return () => {
            listener.remove();
        };
    }, [ ] );

    return (
        <View>
            {/* <Text> Index Screen </Text> */}
            {/* <Button 
                title = " Add Post " 
                onPress = { () => addBlogPost()}
            /> */}
            <FlatList 
                data = {state}
                keyExtractor = { (blogPost) => blogPost.title}
                renderItem = { ( {item} ) => {
                    return (
                        <TouchableOpacity 
                            onPress = { () => navigation.navigate( 'Show',{ id: item.id } ) }
                        >
                            <View style = { styles.row }>
                            <Text style = { styles.title }> {item.title} - {item.id} </Text>
                            <TouchableOpacity onPress = { () => deleteBlogPost(item.id) }>
                                <Feather style = {styles.icon} name = "trash-2" />
                            </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return{
        headerRight: () => <TouchableOpacity onPress = {() => navigation.navigate('Create')}>
                <Feather name = "plus" size = {30} />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create ({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderTopWidth: 1,
        // borderBottomWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
        marginRight: 10,
    }
});

export default IndexScreen;