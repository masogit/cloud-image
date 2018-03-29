import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Icon, Divider } from 'antd';
import Info from './Info';
import ItemTable from './ItemTable';
import ConForm from './ConForm';

class ConEdit extends Component {
  render() {
    return (
      <div>
        <Row style={{ padding: '20px 0' }}>
          <Card bordered={false}>
            <Info />
          </Card>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Card
              title={
                <span>
                  <Icon type="bars" /> 检查
                </span>
              }
              bordered={false}
            >
              <ItemTable />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              title={
                <span>
                  <Icon type="profile" /> 报告
                </span>
              }
              bordered={false}
              extra={
                <Fragment>
                  <a href="">
                    <Icon type="save" /> 保存
                  </a>
                  <Divider type="vertical" />
                  <a href="">
                    <Icon type="check-circle-o" /> 递交
                  </a>
                  <Divider type="vertical" />
                  <a href="">
                    <Icon type="printer" /> 打印
                  </a>
                </Fragment>
              }
            >
              <ConForm />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ConEdit;
