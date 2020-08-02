import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create ({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#f0f0f5',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logon: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 1,
        justifyContent: 'space-between',
        borderColor: '#FF8552',
        borderWidth: 0.8,
    },

    textInput: {
        borderRadius: 8,
        height: 50,
        width: '100%',
        padding: 10,
        borderColor: '#FF8552',
        borderWidth: 0.8,
        marginBottom: 3,
        fontSize: 16,
    },

    actions: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#FF8552',
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    registerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },

    registerButtonText: {
        color: '#FF8552',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});
