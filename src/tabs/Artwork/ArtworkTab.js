import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ArtworkInfo from "zaila/src/tabs/Artwork/components/ArtworkInfo";

const ArtworkStack = createStackNavigator();

const ArtworkTab = () => {
  return (
    <ArtworkStack.Navigator>
      <ArtworkStack.Screen name="ArtworkInfo" component={ArtworkInfo} />
    </ArtworkStack.Navigator>
  );
};

export default ArtworkTab;