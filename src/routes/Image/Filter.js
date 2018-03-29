import React, { Component } from 'react';
import { Input } from 'antd';
import DescriptionList from '../../components/DescriptionList';

const { Description } = DescriptionList;
class Filter extends Component {
  render() {
    return (
      <DescriptionList size="small" col="4">
        <Description term="会诊ID">
          <Input placeholder="请输入" />
        </Description>
        <Description term="患者ID">
          <Input placeholder="请输入" />
        </Description>
        <Description term="患者姓名">
          <Input placeholder="请输入" />
        </Description>
        <Description term="主治医师">
          <Input placeholder="请输入" />
        </Description>
      </DescriptionList>
    );
  }
}

export default Filter;
