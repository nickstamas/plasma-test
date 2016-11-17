/* eslint-disable */

import React, { Component } from 'react';
import {
  Button,
  Loader,
} from '@wework-dev/plasma';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoadingPrimary: false,
      isLoadingSecondary: false,
    };
    this.handleClickPrimary = this.handleClickPrimary.bind(this);
    this.handleClickSecondary = this.handleClickSecondary.bind(this);
    this.handleClickTertiary = this.handleClickTertiary.bind(this);
  }

  handleClickPrimary() {
    this.setState({ isLoadingPrimary: true });
    setTimeout(() => { this.setState({ isLoadingPrimary: false })}, 4000);
  }

  handleClickSecondary() {
    this.setState({ isLoadingSecondary: true });
    setTimeout(() => { this.setState({ isLoadingSecondary: false })}, 3000);
  }

  handleClickTertiary() {
    this.setState({ isLoadingTertiary: true });
    setTimeout(() => { this.setState({ isLoadingTertiary: false })}, 2000);
  }

  render() {
    return (
      <div className="App">
        <div style={{ margin: 100 }}>
          <Button
            label='Help me'
            loading={this.state.isLoadingPrimary}
            onClick={this.handleClickPrimary}
            style={{ width: 150, marginBottom: 5 }}
          />
          <Button
            // label='Act quickly'
            type='secondary'
            loading={this.state.isLoadingSecondary}
            onClick={this.handleClickSecondary}
            style={{ width: 150, marginBottom: 5 }}
          >Come soon</Button>
          <Button
            label='Act quickly'
            type='tertiary'
            loading={this.state.isLoadingTertiary}
            onClick={this.handleClickTertiary}
            style={{ width: 150, marginBottom: 5 }}
          />
          <Button
            label='Act quickly'
            type='primary'
            disabled
            style={{ width: 150, marginBottom: 5 }}
          />
          <Button
            label='Act quickly'
            type='secondary'
            disabled
            style={{ width: 150, marginBottom: 5 }}
          />
          <Button
            label='Act quickly'
            type='tertiary'
            disabled
            style={{ width: 150, marginBottom: 5 }}
          />
        </div>
      </div>
    );
  }
}

export default App;
