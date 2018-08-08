import React from 'react'
import { Form, FormItem, Input, InputNumber, Icon, Button, Select } from 'antd';
import * as demo from 'demo/data'

const Option = Select.Option

export default class SaleForm extends React.Component {
  state = {
    price: false,
    total: false,
    count: 1,
    times: 1,
  }

  handleChange = price => {
    this.setState({ price })
    let total = price * this.state.count
    this.setState({ total })
    
  }

  setTotal = count => {
    let total = this.state.price * count

    this.setState({ total, count })
  }

  render() {
    return (
      <div>
        <Form layout='inline'>
          <span style={{padding: '0 5px'}}>Item:</span>        
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a item"
            optionFilterProp="children"
            onChange={this.handleChange}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
          {demo.items.map(item => 
            <Option value={item.price}>{item.name}</Option>
          )}
          </Select>
          {this.state.price && <span>
              <span style={{padding: '0 5px'}}>Price:</span>
              <Input style={{ width: 200 }} disabled value={this.state.price}/>
            </span>}
          <span style={{padding: '0 5px'}}>Quantity:</span>
          <InputNumber disabled={!this.state.price} min={1} max={10} onChange={this.setTotal} defaultValue={1}  />
         {this.state.total && <span>
            <span style={{padding: '0 5px'}}>Total:</span>
            <Input style={{ width: 200 }} disabled value={this.state.total}/>
           </span>}
        </Form>
      </div>
    )
  }
}
