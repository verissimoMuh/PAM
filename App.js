import React, {userState} from 'react' ; //importa react e hook usestate
import {View, TextInput, Button, StyleSheet} from 'react-native';

// Função principal do aplicativo
const App = () => {
//Estados para armazenar o nome de usuário a senha

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

// Função que é chamada quando o botão de login é pressionado
const handleLogin = () =>{
// Aqui, você poderia adicionar lógica para autenticar o usuário

alert('Usuário: ${username}\nsenha: ${password}' ); 
};

return(
// Contêiner principal que centraliza o conteúdo
<View style={styles.container}>
<Text style={styles.title}>Tela de Login</Text>
<TextInput
style={styles.input}
placeHolder="Nome de Usuario"
value={username}
onChargeText={setUserName} //atualiza o estado do nome de usuario
/>
<TextInput
  style={styles.input}
  placeholder="senha"
  secureTextEntry={true} //esconde o texto digitado
  value={password}
  onChangeText={setPassword} //Atualiza o estado da senha
  />
  <Button title="Entar" onPress={handleLogin} /> {/* Botão de login */}
  </View>
  );
};
//deficao de style
const styles = StuleSheet.create({
  container: {
    flex:1, //ocupar toda a altura da tela
    justifyContent :'center', //cenytraliza os itens verticalmente
    alignItems: 'center' , // centraliza itens horizontalmente
    backgroundColor: '#f5f5f5' , // cor de fundo cinza claro 
    },
  title:{
    fontSize: 24, //tamanho fonte titulo
    fontWeight : 'bold', // texto em negrito
    marginBottom: 20, // Espaço abaixo do título
  },
input:{
height: 40, // Altura do campo de entrada
borderColor: '#ccc', // Cor da borda do campo de entrada
porderWidth: 1, // Largura da borda
marginBottom: 15, // Espaço abaixo do campo de entrada
paddingHorizontal: 10, // Espaçamento interno do camne
width: '80%', // Largura do campo de entrada
  },
});  
 export default App;

