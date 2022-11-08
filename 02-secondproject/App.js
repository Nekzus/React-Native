import { Text, View } from "react-native";

import AddItem from "./components/AddItem";
import List from "./components/list/List";
import ModalItem from "./components/Modal";
import { styles } from "./styles";
import { useState } from "react";

const App = () => {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerChangeItem = (text) => setTextItem(text);
  const onHandlerDelete = (id) => {
    setItemList((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerCancel = () => {
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(itemList.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };
  const addItem = () => {
    if (textItem === "") return;
    setItemList((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: textItem },
    ]);
    setTextItem("");
  };

  return (
    <View style={styles.container}>
      <ModalItem
        visible={modalVisible}
        onDelete={onHandlerDelete.bind(this, itemSelected.id)}
        onCancel={onHandlerCancel}
        item={itemSelected}
      />
      <AddItem
        onChange={onHandlerChangeItem}
        onAddItem={addItem}
        value={textItem}
      />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Todo List</Text>
        <List item={itemList} onModal={onHandlerModal} />
      </View>
    </View>
  );
};

export default App;
