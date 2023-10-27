import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles, setTheme } from './src/components/styles'

import Calculadora from './src/pages/Calculadora';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{cardStyle: styles.body}}>
        <Stack.Screen name="Calculadora" component={Calculadora} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

