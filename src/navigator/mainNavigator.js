import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps217773Navigator from '../features/Maps217773/navigator';
import Additem217772Navigator from '../features/Additem217772/navigator';
import Maps217768Navigator from '../features/Maps217768/navigator';
import UserProfile217764Navigator from '../features/UserProfile217764/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps217773: { screen: Maps217773Navigator },
Additem217772: { screen: Additem217772Navigator },
Maps217768: { screen: Maps217768Navigator },
UserProfile217764: { screen: UserProfile217764Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
