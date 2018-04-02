import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import ConTab from './ConTab';

const { TabPane } = Tabs;
class ImageHome extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <TabPane tab={<span><Icon type="solution" />会诊列表</span>} key="consultation">
            <ConTab history={this.props.history} />
          </TabPane>
          <TabPane tab={<span><Icon type="contacts" />用户管理</span>} key="user">
            用户管理
          </TabPane>
          <TabPane tab={<span><Icon type="profile" />会诊模板管理</span>} key="template">
            会诊模板管理
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ImageHome;
