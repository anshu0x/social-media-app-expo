import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Feed from "./Feed";
import Article from "./Article";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
