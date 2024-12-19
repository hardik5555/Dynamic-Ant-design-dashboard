import React from 'react';
import { Card, Table, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const TableWidget = ({ onRemove }) => {
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      department: 'Sales',
      salary: '$75,000'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Bridge Street',
      department: 'Marketing',
      salary: '$85,000'
    }
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
    }
  ];

  return (
    <Card 
      title="Employee Data" 
      extra={
        <Button 
          type="text" 
          icon={<CloseOutlined />} 
          onClick={onRemove} 
          style={{ color: 'red' }}
        />
      }
      style={{ 
        width: '100%', 
        height: '100%', 
        overflow: 'auto' 
      }}
    >
      <Table 
        dataSource={dataSource} 
        columns={columns} 
        pagination={{
          pageSize: 2,
          size: 'small'
        }}
      />
    </Card>
  );
};

export default TableWidget;