import React, { Component } from 'react';
import { Form, Input, Select } from 'antd';

const { Item } = Form;
const { TextArea } = Input;
const { Option } = Select;
const owners = [
  {
    id: 'wzj',
    name: '我自己',
  },
  {
    id: 'wjh',
    name: '王医生',
  },
  {
    id: 'zxx',
    name: '赵医生',
  },
  {
    id: 'zly',
    name: '刘医生',
  },
  {
    id: 'ym',
    name: '叶医生',
  },
];

class ConForm extends Component {
  render() {
    return (
      <div style={{ paddingBottom: '12px' }}>
        <Form>
          <Item label="会诊所见">
            <TextArea placeholder="请输入你的会诊所见" rows={6} />
          </Item>
          <Item label="会诊结论">
            <TextArea placeholder="请输入你的会诊结论" rows={4} />
          </Item>
          <Item label="会诊医生" mode="multiple">
            <Select mode="multiple" defaultValue={['wjh', 'zxx']}>
              {owners.map(owner => (
                <Option key={owner.id} value={owner.id}>
                  {owner.name}
                </Option>
              ))}
            </Select>
          </Item>
        </Form>
      </div>
    );
  }
}

export default ConForm;
