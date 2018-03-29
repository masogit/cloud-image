import React, { Component } from 'react';
import { Tabs } from 'antd';
import Filter from './Filter';
import ConTable from './ConTable';

const { TabPane } = Tabs;
class ConTab extends Component {
  render() {
    return (
      <div>
        <Tabs tabPosition="left" tabBarStyle={{ paddingTop: '50px' }}>
          <TabPane tab="待会诊" key="1">
            <Filter />
            <ConTable />
          </TabPane>
          <TabPane tab="未完成" key="2">
            Content of tab 2
          </TabPane>
          <TabPane tab="查历史" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ConTab;
