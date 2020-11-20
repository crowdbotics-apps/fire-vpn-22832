import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings176356Navigator from '../features/Settings176356/navigator';
import UserProfile176349Navigator from '../features/UserProfile176349/navigator';
import Settings176348Navigator from '../features/Settings176348/navigator';
import Settings176346Navigator from '../features/Settings176346/navigator';
import SignIn2176344Navigator from '../features/SignIn2176344/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings176356: { screen: Settings176356Navigator },
UserProfile176349: { screen: UserProfile176349Navigator },
Settings176348: { screen: Settings176348Navigator },
Settings176346: { screen: Settings176346Navigator },
SignIn2176344: { screen: SignIn2176344Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
