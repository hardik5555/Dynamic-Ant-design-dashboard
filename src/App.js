import React, { useState, useEffect } from 'react';
import { Card, Layout } from 'antd';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import 'antd/dist/reset.css';
import AntSidebar from './Components/Sidebar';  // Import the updated AntSidebar
import { BarChartOutlined, CloudOutlined, TableOutlined } from '@ant-design/icons';
import {ConfigProvider} from 'antd'



// Mock data for widgets
const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'June', value: 199},
  { name: 'July', value: 219},
  { name: 'August', value: 299},

];

const tableData = [
  { id: 1, name: 'Harry', age: 32, city: 'Gurugram' },
  { id: 2, name: 'Manoj', age: 28, city: 'Ghaziabad' },
  { id: 3, name: 'Rajeev', age: 45, city: 'Noida' },
  { id: 4, name: 'shekhar', age: 21, city: 'Himachal' },
];

const weatherData = {
  city: 'Gurgaon',
  temperature: 68,
  condition: 'Partly Cloudy',
  humidity: 12,
  windSpeed: 15

};

// Widget components
const ChartWidget = () => (
  <Card title="Sales Chart" extra={<BarChartOutlined />} className="h-full">
    <div className="text-center">
      {chartData.map(item => (
        <div key={item.name} className="flex justify-between mb-2">
          <span>{item.name}</span>
          <div
            className="bg-blue-500"
            style={{ width: `${item.value / 4}%`, height: '20px' }}
          />
        </div>
      ))}
    </div>
  </Card>
);

const TableWidget = () => (
  <Card title="User List" extra={<TableOutlined />} className="h-full overflow-auto">
    <table className="w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>city</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(row => (
          <tr key={row.id} className="border-b">
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Card>
);

const WeattherWidget = () => (
  <Card title="Weather Info" extra={<CloudOutlined />} className="h-full">
    <div className="text-center">
      <h2 className="text-2xl">{weatherData.city}</h2>
      <p className="text-4xl font-bold">{weatherData.temperature}°F</p>
      <p>{weatherData.condition}</p>
      <div className="flex justify-around mt-4">
        <div>
          <strong>Humidity</strong>
          <p>{weatherData.humidity}%</p>
        </div>
        <div>
          <strong>Wind</strong>
          <p>{weatherData.windSpeed} mph</p>
        </div>
      </div>
    </div>
  </Card>
);

const ResponsiveGridLayout = WidthProvider(Responsive);

const DynamicDashboard = () => {

  const [layouts, setLayouts] = useState({
    lg: [
      { i: 'chart', x: 0, y: 0, w: 4, h: 3 },
      { i: 'table', x: 4, y: 0, w: 4, h: 3 },
      { i: 'weather', x: 8, y: 0, w: 4, h: 3 }
    ]
  });

  const [availableWidgets, setAvailableWidgets] = useState([
    { key: 'chart', title: 'Chart', component: ChartWidget },
    { key: 'table', title: 'Table', component: TableWidget },
    { key: 'weather', title: 'Weather', component: WeattherWidget }
  ]);

  const [currentWidgets, setCurrentWidgets] = useState([
    { key: 'chart', component: ChartWidget },
    { key: 'table', component: TableWidget },
    { key: 'weather', component: WeattherWidget }
  ]);

  // Save layout to localStorage
  useEffect(() => {
    localStorage.setItem('dashboardLayout', JSON.stringify(layouts));
  }, [layouts]);

  const handleLayoutChange = (layout) => {
    setLayouts({ lg: layout });
  };

  const resetDashboard = () => { 
    setCurrentWidgets([]);
    setLayouts({ lg: [] });
  };

  const addWidget = (widget) => {
    if (!currentWidgets.find(w => w.key === widget.key)) {
      setCurrentWidgets([...currentWidgets, widget]);
      setLayouts(prev => ({
        lg: [
          ...prev.lg,
          { i: widget.key, x: 0, y: 0, w: 4, h: 3 }
        ]
      }));
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
    {/* Sidebar */}
    <AntSidebar />
    
    <Layout className="site-layout">
      <Layout.Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
          onLayoutChange={handleLayoutChange}
          isDraggable={true}
          isResizable={true}
        >
          {currentWidgets.map(widget => (
            <div
              key={widget.key}
              data-grid={{
                ...(layouts.lg.find(l => l.i === widget.key) || { w: 4, h: 3, x: 0, y: 0 })
              }}
              className="bg-white shadow-md rounded"
            >
              <widget.component />
            </div>
          ))}
        </ResponsiveGridLayout>
      </Layout.Content>
    </Layout>
  </Layout>
 );
};

export default DynamicDashboard;