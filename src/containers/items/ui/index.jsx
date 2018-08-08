import React from 'react'
import * as demo from 'demo/data'
import { Table } from "antd";

export default () => {
  return (
    <div>
      <Table dataSource={demo.items} columns={columns} />
    </div>
  )
}

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'price',
  key: 'price',
}, {
  title: 'Address',
  dataIndex: 'type',
  key: 'type',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];
