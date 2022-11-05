import { FlatList } from "react-native";
import ItemList from "./ListItem";

const List = (props) => {
  const { item, onModal } = props;
  return (
    <FlatList
      data={item}
      renderItem={(data) => <ItemList data={data} onModal={onModal} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;
