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
    title: '2014-11-11 (C0000001)',
    description: <div><b>结论</b>未见异常</div>,
    extra: '体检套装A',
    status: 'todo',
    type: '待办',
  },
  {
    id: '000000011',
    title: '2013-11-11 (C0000002)',
    description: <div><b>结论</b>未见异常</div>,
    extra: '体检套装B',
    status: 'todo',
    type: '待办',
  },
  {
    id: '000000012',
    title: '2012-11-11 (C0000003)',
    description: <div><b>结论</b>未见异常</div>,
    extra: '体检套装B',
    status: 'todo',
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
        icon="ellipsis"
        onItemClick={(item, tabProps) => {
          console.log(item, tabProps); // eslint-disable-line
        }}
        popupAlign={{ offset: [20, -16] }}
      >
        <NoticeIcon.Tab
          list={noticeData['待办']}
          title="历史会诊"
          emptyText="无数据"
          emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
        />
      </NoticeIcon>
    );
  }
}

export default History;
