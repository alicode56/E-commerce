import React, { useState } from 'react';
import { View, Text, Modal, Alert, ActivityIndicator } from 'react-native'; // Import Modal and Alert from react-native

const Loader = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    width: 100,
                    height: 100,
                    margin: 20,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                }}>

                    <ActivityIndicator size={'large'} />
                </View>
            </View>
        </Modal>
    );
}

export default Loader;















