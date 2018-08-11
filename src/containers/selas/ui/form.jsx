import React from 'react'
import { Form, FormItem, Input, InputNumber, Icon, Button, Select } from 'antd';
import * as demo from 'demo/data'

const Option = Select.Option

export default class SaleForm extends React.Component {
  state = {
    price: {},
    total: {},
    count: {},
    times: {},
    items: [0],
    full_total: 0
  }

  handleChange = (price, item) => {
    let allPrices = this.state.price
    allPrices[item] = price
    
    this.setState({ price: allPrices })
    let total = this.state.total, full_total =  0
    total[item] = price * (this.state.count[item] || 1) 
    let adding = 0
    Object.values(total).filter( item => full_total = full_total + item )    
    this.setState({ total, full_total })
    
  }

  setTotal = (count, item) => {
    let total = this.state.total, full_total = 0;
    total[item]= this.state.price[item] * count
    Object.values(total).filter( item => full_total = full_total + item )
    this.setState({ total, full_total })
  }

  addItem = () => {
    const { items } = this.state
    const newItem = items.length
    items.push(newItem)
    this.setState({ items })
  }


  render() {
    return (
      <div>
        <div>
        <span>نوع الفاتورة</span>
        <Select
          showSearch
          style={{ width: 200, margin: 10 }}
          placeholder="Select a item"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
        {['أجل', 'نقد'].map(item => 
          <Option value={item}>{item}</Option>
        )}
        </Select>
        </div>

        <div>
        <span>أسم العميل</span>
        <Select
          showSearch
          style={{ width: 200, margin: 10 }}
          placeholder="Select a item"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
        {demo.customers.map(item => 
          <Option value={item.price}>{item.name}</Option>
        )}
        </Select>
        </div>

        {this.state.items.map((item) =>
          <SalesForm _this={this} key={item} item={item} />
        )}
        <Button onClick={this.addItem}>أضافة سلعة</Button>
        <p>
          ألاجمالي الكلي:
          {this.state.full_total}
        </p>
        <div>
          <Button>طباعة
            <Icon title='eye' name="print" />
          </Button>
        </div>
      </div>
    )
  }
}

const SalesForm = ({_this, item}) =>
<Form layout='inline' dir="rtl">
  <span style={{padding: '0 5px'}}>السلعة:</span>        
  <Select
    showSearch
    style={{ width: 200, margin: 10 }}
    placeholder="Select a item"
    optionFilterProp="children"
    onChange={v => _this.handleChange(v, item)}
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
  {demo.items.map(item => 
    <Option value={item.price}>{item.name}</Option>
  )}
  </Select>
  {_this.state.price[item] && <span>
      <span style={{padding: '0 5px'}}>السعر:</span>
      <Input style={{ width: 200 }} disabled value={_this.state.price[item]}/>
    </span>}
  <span style={{padding: '0 5px'}}>الكمية:</span>
  <InputNumber disabled={!_this.state.price[item]} min={1} max={10} onChange={ v => _this.setTotal(v, item)} defaultValue={1}  />
  {_this.state.total[item] && <span>
    <span style={{padding: '0 5px'}}>الاجمالي :</span>
    <Input style={{ width: 200 }} disabled value={_this.state.total[item]}/>
  </span>}
</Form>