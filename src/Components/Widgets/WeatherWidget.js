import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { 
  CloudOutlined, 
  CloudSyncOutlined, 
  ClockCircleOutlined,
  CloseOutlined
} from '@ant-design/icons';

const WeatherWidget = ({ onRemove }) => {
  // Weather data can be static or fetched from an API
  const weatherData = {
    city: 'New York',
    temperature: 22,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    icon: <CloudSyncOutlined />
  };

  return (
    <Card 
      title="Weather Information" 
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
      <Row gutter={16}>
        <Col span={12}>
          <div style={{ marginBottom: '10px' }}>
            <CloudOutlined style={{ marginRight: '8px' }} />
            City: {weatherData.city}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <ClockCircleOutlined style={{ marginRight: '8px' }} />
            Temperature: {weatherData.temperature}°C
          </div>
        </Col>
        <Col span={12}>
          <div style={{ marginBottom: '10px' }}>
            <CloudSyncOutlined style={{ marginRight: '8px' }} />
            Condition: {weatherData.condition}
          </div>
          <div style={{ marginBottom: '10px' }}>
            Humidity: {weatherData.humidity}%
          </div>
          <div>
            Wind Speed: {weatherData.windSpeed} km/h
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default WeatherWidget;