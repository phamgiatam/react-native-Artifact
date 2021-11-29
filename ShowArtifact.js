import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryList from '../components/CategoryList';

export default class HienVat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
      {id: 1, name: 'Đường cách mạng'},
      {id: 2, name: 'Bia đá quốc tử giám'},
      {id: 3, name: 'Trống đồng Cảnh Thịnh'},
      {id: 4, name: 'Bản Thảo lời kêu gọi toàn nước kháng chiến'}
      ]
    };
  }

  render() {
    const { categories } = this.state;
    return (
          <FlatList
            data ={categories}
            renderItem={({ item })=> <CategoryList category = {item} />}
            keyExtractor={(item =>item.id)}/>
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fbcf8d',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
