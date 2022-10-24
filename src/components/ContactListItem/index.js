import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const ContactListItem = ({ user }) => {
  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <Image
        source={{
          uri: user.image,
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines="1">
          {user.name}
        </Text>

        <Text style={styles.subTitle} numberOfLines="1">
          {user.status}
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
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {},
  subTitle: {
    color: "gray",
  },
});

export default ContactListItem;
