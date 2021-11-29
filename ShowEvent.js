import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import EventComponent from '../components/EventComponent';

export default class ShowEvent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        events: [
        {id: 1, name: 'Event1'},
        {id: 2, name: 'Event2'},
        {id: 3, name: 'Event3'},
        {id: 4, name: 'Event4'}
        ]
      };
    }
  
    render() {
      const { events } = this.state;
      return (
            <ScrollView>
                {events.map(event => (
                    <EventComponent key = {event.id} event = {event} />
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