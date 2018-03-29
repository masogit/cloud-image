import React from 'react';
import { Row, Col, Card } from 'antd';
import CTMR from '../../assets/ctmr.jpg';
import Info from './Info';

export const Images = () => <img src={CTMR} alt="" />;
export const Conclusion = () => (
  <Row gutter={24}>
    <Card bordered={false}><Info /></Card>
    <Col span={10}>
      <Card title="报告所见" bordered={false}>
        <p>
          患者因突起右侧肢体活动不利、失语20天入院。入院前曾在外院住院治疗15天，5天前入住我科。20天前头部CT示“左侧颞顶叶大面积脑梗塞”。
          <br />
          <br />
          入院后给予中医辨证治疗，病情好转。现患者生命体征稳定，神志清楚，言语含糊不清，右侧鼻唇沟变浅，口角稍左歪，两肺呼吸音清；心率89次/分，律齐，心音可；肝脾未扪及。
          <br />
          <br />
          右上下肢肌力均Ⅱ级，肌张力稍高，右侧膝反射亢进、Babinski征阳性；脑膜刺激征阴性。患者同意配合针灸治疗，特申请贵科会诊协助针灸治疗。
        </p>
      </Card>
    </Col>
    <Col span={10}>
      <Card title="报告结论" bordered={false}>
        <p>
          未见异常.
        </p>
      </Card>
    </Col>
  </Row>
);
