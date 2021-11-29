import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import artifactComponent from '../components/artifactComponent';

export default class ShowArtifact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artifacts: [
      {id: 1, name: 'Đường cách mạng'},
      {id: 2, name: 'Bia đá quốc tử giám'},
      {id: 3, name: 'Trống đồng Cảnh Thịnh'},
      {id: 4, name: 'Bản Thảo lời kêu gọi toàn nước kháng chiến'}
      ]
    };
  }

  render() {
    const { artifacts } = this.state;
    return (
      <ScrollView>
      {artifacts.map(artifact => (
          <EventComponent key = {artifact.id} artifact = {artifacts} />
      ))}
      </ScrollView>
      
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
