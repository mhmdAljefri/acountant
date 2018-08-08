import React from 'react'
import * as demo from 'demo/data'
import { Table } from "antd";

export default () => {
  return (
    <div>
      <h4>Customers</h4>
      <Table dataSource={demo.customers} columns={columns} />
    </div>
  )
}

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
}, {
  title: 'Mobile',
  dataIndex: 'mobile',
  key: 'mobile',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];
