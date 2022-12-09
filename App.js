import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeScreen = require("./screens/HomeScreen");
const TPScreen = require("./screens/TPScreen");

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:"#99ff33"
          }
        }}
      >
        <Menu.Screen name="Home" component={HomeScreen}/>
        <Menu.Screen name="Chuck Norris" component={TPScreen}/>
      </Menu.Navigator>
    </NavigationContainer>
  );
}
