import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ButtonProps = { title: string, clickEvent: () => void }

const PrimaryButton = ({ title, clickEvent }: ButtonProps) => {
    return (
        <Pressable style={styles.button} onPress={clickEvent}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 24,
        marginTop: 24,
        paddingVertical: 12,
        borderRadius: 16,
        backgroundColor: '#202020',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700'
    }
});

export default PrimaryButton;