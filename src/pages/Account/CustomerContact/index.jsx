import React, { Component } from 'react'
import { Table } from 'antd';
import { connect } from 'react-redux'

const columns = [
  {
    title: '编号',
    dataIndex: 'id',
    sorter: true,
    width: '20%',
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: '20%',
    sorter: (a, b) => a.title.length - b.title.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '内容',
    dataIndex: 'body',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Leanne Graham', 
  }),
};

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
};

export class CustomerContact extends Component {

  state = {
    loading: false,
  }

  componentDidMount() {
    this.props.asyncGetTableData(() => {
      this.setState({ loading: true });
    }).then((res) => {
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <Table
        rowSelection={rowSelection}
        columns={columns}
        rowKey={record => record.id}
        dataSource={this.props.dataList}
        onChange={onChange}
        loading={this.state.loading}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataList: state.customerContact.dataList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    asyncGetTableData: dispatch.customerContact.asyncGetTableData
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(CustomerContact);