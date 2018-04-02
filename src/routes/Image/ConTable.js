import React, { Component } from 'react';
import { Table, Badge, Modal, Icon } from 'antd';
import { Images, Conclusion } from './Reports';

const sorter = (a, b) => a.date - b.date;
const expandedRowRender = () => {
  const columns = [
    { title: '检查时间', dataIndex: 'date', key: 'date', sorter },
    {
      title: '检查类型',
      dataIndex: 'category',
      key: 'category',
      filters: [{ text: 'CT', value: 'CT' }, { text: 'MRI', value: 'MRI' }],
    },
    { title: '检查项目', dataIndex: 'name', key: 'name' },
    {
      title: '检查状态',
      filters: [{ text: '已审核', value: '已审核' }, { text: '已通过', value: '已通过' }],
      key: 'state',
      render: () => (
        <span>
          <Badge status="success" />已审核
        </span>
      ),
    },
    { title: '来源', dataIndex: 'from', key: 'from' },
    { title: '主治医师', dataIndex: 'doctor', key: 'doctor' },
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

  const data = [];
  for (let i = 0; i < 5; i += 1) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: '腹部MR平扫',
      category: 'MRI',
      from: '体检中心',
      doctor: '王医生',
    });
  }
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

const data = [];
for (let i = 0; i < 8; i += 1) {
  data.push({
    key: i,
    id: 'C000003',
    patientId: '0000002',
    patient: '张三',
    age: 50,
    sex: '男',
    createdAt: '2014-12-24 23:12:00',
    level: '3',
    behavior: '盆腔静脉淤血',
    doctor: '王医生',
  });
}

class ConTable extends Component {
  getColumns() {
    return [
      { title: '会诊ID', dataIndex: 'id', key: 'id', sorter },
      { title: '患者ID', dataIndex: 'patientId', key: 'patientId', sorter },
      { title: '患者姓名', dataIndex: 'patient', key: 'patient', sorter },
      { title: '年龄', dataIndex: 'age', key: 'age', sorter },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        filters: [{ text: '男', value: '男' }, { text: '女', value: '女' }],
      },
      { title: '患者级别', dataIndex: 'level', key: 'level' },
      { title: '临床表现', dataIndex: 'behavior', key: 'behavior' },
      { title: '主治医师', dataIndex: 'doctor', key: 'doctor' },
      {
        title: '',
        key: 'operation',
        render: () => (
          <a
            href=""
            onClick={e => {
              e.preventDefault();
              this.props.history.push('/image/con-edit')
              // location.href = '#/image/con-edit';
            }}
          >
            会诊
          </a>
        ),
      },
    ];
  }
  render() {
    return (
      <div style={{ paddingTop: '20px' }}>
        <Table
          columns={this.getColumns()}
          expandRowByClick
          expandedRowRender={expandedRowRender}
          dataSource={data}
        />
      </div>
    );
  }
}

export default ConTable;
