import React, { Component } from 'react';
import DescriptionList from '../../components/DescriptionList';

const { Description } = DescriptionList;
class Info extends Component {
  render() {
    return (
      <DescriptionList size="small" col="4">
        <Description term="患者ID">0000002</Description>
        <Description term="患者姓名"><b>李四</b></Description>
        <Description term="性别">男</Description>
        <Description term="电话">190000002</Description>
        <Description term="级别">特需</Description>
        <Description term="临床结论"><i>盆腔静脉淤血</i></Description>
        <Description term="会诊状态">待处理</Description>
        <Description term="会诊时间">2017-11-11</Description>
      </DescriptionList>
    );
  }
}

export default Info;
