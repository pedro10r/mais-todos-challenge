import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '../screens/Dashboard';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }} >
      <Screen
        name="signIn"
        component={SignIn}
      />

      <Screen
        name="dashboard"
        component={Dashboard}
      />
    </Navigator>
  );
}