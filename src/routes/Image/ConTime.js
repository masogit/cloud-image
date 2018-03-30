import React, { Component } from 'react';
import { Radio } from 'antd';
import History from './History';

const { Button } = Radio;
class ConTime extends Component {
  render() {
    return (
      <Radio.Group defaultValue="2018" size="small">
        <Button value="2018">2018/3 (套餐A)</Button>
        <Button value="2017">2017/5 (套餐B)</Button>
        <Button value="2016">2016/6 (套餐C)</Button>
        <Button value="history"><History /></Button>
      </Radio.Group>
    );
  }
}

export default ConTime;
