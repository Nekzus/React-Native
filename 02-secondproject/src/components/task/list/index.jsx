import { FlatList } from "react-native";
import ItemList from "../item";
import React from "react";

const List = (props) => {
  const { item, onModal } = props;
  const renderItem = (data) => <ItemList data={data} onModal={onModal} />;
  return (
    <FlatList
      data={item}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;
