import React, {useState} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/logo2.png';
import styles from './styles';

export default function Login () {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pwd, setPWD] = useState('');

    async function createSession (e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { email, pwd });
            const userId = response.data.id;
            const userName = response.data.name;

            setEmail(''); // initializes state
            setPWD('');   // initializes state

            ToastAndroid.show("Bem vindo " + userName + "  :)", ToastAndroid.SHORT);
            
            navigation.navigate('Doc', {userId}); // apos realizar logon, navega para a pagina de documentos
        }
        catch (err) {
            ToastAndroid.show("Falha no login, tente novamente.", ToastAndroid.SHORT);
        }
    }

    function navigateToRegister () {
        navigation.navigate('Register'); // navega para a pagina de registro do Usuário
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>

            <View style={styles.logon}>
                <TextInput placeholder = "E-mail"
                           defaultValue={email}
                           onChangeText={email => setEmail(email)}
                           style={styles.textInput}/>
                <TextInput placeholder = "Senha"
                           defaultValue={pwd}
                           onChangeText={pwd => setPWD(pwd)}
                           secureTextEntry={true}
                           style={styles.textInput}/>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={createSession}>
                        <Text style={styles.actionText}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.registerButton} onPress={() => navigateToRegister()}>
                    <FontAwesome name="plus-circle" size={20} color="#FF8552" />
                    <Text style={styles.registerButtonText}>
                        Cadastrar-se
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
