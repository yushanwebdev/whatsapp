import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";

dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("Chat", {
          id: chat.id,
          name: chat.user.name,
        });
      }}
    >
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines="1">
            {chat.user.name}
          </Text>
          <Text style={styles.subTitle}>
            {dayjs(chat.lastMessage.createdAt).fromNow(true)}
          </Text>
        </View>
        <Text style={styles.subTitle} numberOfLines="2">
          {chat.lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor: "lightgray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: "row",
  },
  name: {
    flex: 1,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subTitle: {
    color: "gray",
  },
});

export default ChatListItem;
