import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, SunOutlined , BarChartOutlined, HeartOutlined, BulbOutlined } from '@ant-design/icons';
const { Sider } = Layout;

const AntSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed} 
      onCollapse={toggleCollapsed}
      width={250}
      theme="light"
      className="h-screen shadow-md"
    >
      <div className="flex justify-end p-2 border-b">
        <Button 
          type="text" 
          onClick={toggleCollapsed} 
          style={{ 
            color: 'rgba(0,0,0,0.65)',
            marginBottom: 16 
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <SunOutlined />,
            
          },
          {
            key: '2',
            icon: <BarChartOutlined />,
           
          },
          {
            key: '3',
            icon: <BulbOutlined />,
            
          },
          {
            key: '4',
            icon: <HeartOutlined />,
            
          }
        ]}
      />
    </Sider>
  );
};

export default AntSidebar;