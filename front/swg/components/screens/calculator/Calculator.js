import React, {Fragment} from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';

import Display from './Display'
import Buttons from './Buttons'
import colors from './colors';

export default class CalculatorScreen extends React.Component {

  state = {
    display: '',
    result: ''
  }

  handleOperation = operation => {
    if (operation === 'C') {
      this.setState({
        display: '',
        result: ''
      })
    }
    else if(operation === '=') {
      this.setState({
        display: this.state.result,
        result: ''
      })
    }
    else {
      const display = this.state.display + operation
      let result = this.state.result
      try {

        let fixedOperation = display.split('×').join('*')
        fixedOperation = fixedOperation.split('÷').join('/')
        fixedOperation = fixedOperation.split(',').join('.')

        result = new String(eval(fixedOperation)).toString()

      }catch(e) {}
      this.setState({
        display,
        result
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Display state={this.state} />
        <Buttons operation={this.handleOperation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.darker,
  },
});