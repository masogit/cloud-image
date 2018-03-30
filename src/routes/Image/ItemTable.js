import React, { Component } from 'react';
import { Table, Icon, Modal } from 'antd';
import { Images, Conclusion } from './Reports';
import DescriptionList from '../../components/DescriptionList';

const { Description } = DescriptionList;
const columns = [
  {
    title: '检查时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '检查类型',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '检查项目',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '检查结果',
    align: 'center',
    dataIndex: 'links',
    key: 'links',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Icon
          type="picture"
          style={{ fontSize: '18px' }}
          onClick={() => Modal.info({ title: '扫描图像', content: <Images />, width: '70%' })}
        />
        <Icon
          type="profile"
          style={{ fontSize: '18px' }}
          onClick={() => Modal.info({ content: <Conclusion />, width: '70%' })}
        />
      </div>
    ),
  },
];

const searchData = [];
for (let i = 0; i < 5; i += 1) {
  searchData.push({
    index: i + 1,
    time: '2017-11-11',
    category: '体检套餐A',
    name: 'CT',
    status: '已通过',
  });
}

class ItemTable extends Component {
  render() {
    return (
      <div>
        <Table
          size="small"
          columns={columns}
          dataSource={searchData}
          pagination={false}
          rowSelection={{ type: 'radio' }}
        />
        <br />
        <DescriptionList size="small" col="1">
          <Description term="报告所见">
            <Flex>
              <p>
                患者因突起右侧肢体活动不利、失语20天入院。入院前曾在外院住院治疗15天，5天前入住我科。20天前头部CT示“左侧颞顶叶大面积脑梗塞”。
                <br />
                <br />
                入院后给予中医辨证治疗，病情好转。现患者生命体征稳定，神志清楚，言语含糊不清，右侧鼻唇沟变浅，口角稍左歪，两肺呼吸音清；心率89次/分，律齐，心音可；肝脾未扪及。
                <br />
                <br />
                右上下肢肌力均Ⅱ级，肌张力稍高，右侧膝反射亢进、Babinski征阳性；脑膜刺激征阴性。患者同意配合针灸治疗，特申请贵科会诊协助针灸治疗。
              </p>
              <a href="">
                <Icon type="plus-circle-o" />
              </a>
            </Flex>
          </Description>
          <Description term="报告结论">
            <Flex>
              <b>未见异常</b>
              <a href="">
                <Icon type="plus-circle-o" />
              </a>
            </Flex>
          </Description>
        </DescriptionList>
      </div>
    );
  }
}

const Flex = props => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>{props.children}</div>
);
export default ItemTable;
