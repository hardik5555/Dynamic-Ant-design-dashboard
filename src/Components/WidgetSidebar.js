import React from 'react';
import { Card } from 'antd';
import { 
  ChartOutlined, 
  TableOutlined, 
  CloudOutlined 
} from '@ant-design/icons';

const WidgetSidebar = () => {
  const widgetTypes = [
    { 
      type: 'chart', 
      title: 'Sales Chart', 
      icon: <ChartOutlined />,
      description: 'Visualise sales data'
    },
    { 
      type: 'table', 
      title: 'User List', 
      icon: <TableOutlined />,
      description: 'Display user information'
    },
    { 
      type: 'weather', 
      title: 'Weather Info', 
      icon: <CloudOutlined />,
      description: 'Show current weather'
    }
  ];

  const handleDragStart = (type) => (event) => {
    event.dataTransfer.setData('widgetType', type);
  };

  return (
    <div 
      className="widget-sidebar"
      style={{ 
        padding: '15px', 
        background: '#f0f2f5', 
        height: '100%' 
      }}
    >
      <h3 style={{ marginBottom: '15px' }}>Drag Widgets</h3>
      {widgetTypes.map((widget) => (
        <Card 
          key={widget.type}
          draggable
          onDragStart={handleDragStart(widget.type)}
          style={{ 
            marginBottom: '10px', 
            cursor: 'move'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '10px' }}>{widget.icon}</div>
            <div>
              <div style={{ fontWeight: 'bold' }}>{widget.title}</div>
              <div style={{ color: '#666', fontSize: '12px' }}>
                {widget.description}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default WidgetSidebar;