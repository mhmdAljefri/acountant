import React from 'react'
import * as demo from 'demo/data'
import { Table } from "antd";

export default () => {
  return (
    <div>
      ir
      <Table dataSource={demo.orgs} columns={columns} />
    </div>
  )
}

const columns = [{
  title: 'الاسم',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'العنوان',
  dataIndex: 'type',
  key: 'type',
}, {
  title: 'العمليات',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">حذف</a>
    </span>
  ),
}];
