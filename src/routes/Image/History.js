import React, { Component } from 'react';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import { Tag } from 'antd';
import NoticeIcon from '../../components/NoticeIcon';

const notices = [
  {
    id: '000000001',
    title: '你收到了 14 份新周报',
    datetime: '2017-08-09',
    type: '通知',
  },
  {
    id: '000000002',
    title: '你推荐的 曲妮妮 已通过第三轮面试',
    datetime: '2017-08-08',
    type: '通知',
  },
  {
    id: '000000010',
    title: '第三方紧急代码变更',
    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
    extra: 'US',
    status: 'urgent',
    type: '待办',
  },
  {
    id: '000000011',
    title: '信息安全考试',
    description: '指派竹尔于 2017-01-09 前完成更新并发布',
    extra: 'MR',
    status: 'doing',
    type: '待办',
  },
  {
    id: '000000012',
    title: 'ABCD 版本发布',
    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
    extra: 'CT',
    status: 'processing',
    type: '待办',
  },
];

function getNoticeData() {
  const newNotices = notices.map(notice => {
    const newNotice = { ...notice };
    if (newNotice.datetime) {
      newNotice.datetime = moment(notice.datetime).fromNow();
    }
    // transform id to item key
    if (newNotice.id) {
      newNotice.key = newNotice.id;
    }
    if (newNotice.extra && newNotice.status) {
      const color = {
        todo: '',
        processing: 'blue',
        urgent: 'red',
        doing: 'gold',
      }[newNotice.status];
      newNotice.extra = (
        <Tag color={color} style={{ marginRight: 0 }}>
          {newNotice.extra}
        </Tag>
      );
    }
    return newNotice;
  });
  return groupBy(newNotices, 'type');
}

const noticeData = getNoticeData();

class History extends Component {
  render() {
    return (
      <NoticeIcon
        icon="clock-circle-o"
        label="所有检查 (5)"
        onItemClick={(item, tabProps) => {
          console.log(item, tabProps); // eslint-disable-line
        }}
        popupAlign={{ offset: [20, -16] }}
      >
        <NoticeIcon.Tab
          list={noticeData['通知']}
          title="未完成的"
          emptyText="无数据"
          emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
        />
        <NoticeIcon.Tab
          list={noticeData['待办']}
          title="历史检查"
          emptyText="无数据"
          emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
        />
      </NoticeIcon>
    );
  }
}

export default History;
