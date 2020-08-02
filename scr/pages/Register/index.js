import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/rocket2.png';
import styles from './styles';

export default function Register () {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPWD] = useState('');

    async function handleRegister (e) {
        e.preventDefault();

        const data = {
            name,
            email,
            pwd,
        };

        try {
            await api.post('user', data);

            ToastAndroid.show("Registro realizado com sucesso!", ToastAndroid.SHORT);

            navigation.goBack(); // volta pra pagina de Login

        } catch (err) {
            ToastAndroid.show("Erro no cadastro, tente novamente.", ToastAndroid.SHORT);
        }
    }

    function navigateBack () {
        navigation.goBack(); // volta pra pagina de Login
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={30} color="#FF8552" />
                </TouchableOpacity>
            </View>

            <View style={styles.logon}>
                <TextInput placeholder = "Nome"
                           defaultValue={name}
                           onChangeText={name => setName(name)}
                           style={styles.textInput}/>
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
                    <TouchableOpacity style={styles.action} onPress={handleRegister}>
                        <Text style={styles.actionText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
