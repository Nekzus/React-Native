import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";
import { useState } from "react";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const onHandlerChangeItem = (t) => setTextItem(t);

  const onHandlerDelete = () => null;

  const addItem = () => {
    setItemList((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: textItem },
    ]);
    setTextItem("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Input todo"
          onChangeText={onHandlerChangeItem}
          value={textItem}
          style={styles.input}
        />
        <Button title="Add" color="#9a848f" onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Todo List</Text>
        <FlatList
          data={itemList}
          renderItem={(data) => (
            <TouchableOpacity
              onPress={onHandlerDelete.bind(this, data.item.id)}
            >
              <View style={styles.listItemContainer}>
                <Text style={styles.listItem}>{data.item.value}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
