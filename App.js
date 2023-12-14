import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './component/SignUp';
import SignInScreen from './component/signIn';

import Detail from './component/Detail';
import Intro from './component/Intro';
import BottomNavigator from './component/bottom/bottomNavigator';
import Cart from './component/Cart';

const Stack = createStackNavigator(); // Add this line to create a stack navigator

  export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="Signin" component={SignInScreen} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="Cart" component={Cart} />

      </Stack.Navigator>
      </NavigationContainer>
    );
  }

