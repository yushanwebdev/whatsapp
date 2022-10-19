import { NavigationContainer } from "@react-navigation/native";
import ChatScreen from "../screens/ChatScreen";

const Navigator = () => {
  return (
    <NavigationContainer>
      <ChatScreen />
    </NavigationContainer>
  );
};

export default Navigator;
