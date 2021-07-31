import { Input } from 'antd';
import Form from 'antd/lib/form';
import Space from 'antd/lib/space';
import React from 'react';
import './location.scss';

interface LocationProps {
    name: number;
    fieldKey: number;
    restField: any;
}

const Location: React.FC<LocationProps> = ({ name, fieldKey, restField }) => (
  <>
    <Space>
      <div className="label">City:</div>
      <Form.Item
        className="nested-field"
        {...restField}
        name={[name, 'city']}
        fieldKey={[fieldKey, 'city']}
        rules={[{ required: true, message: 'Missing first name' }]}
      >
        <Input placeholder="First Name" />
      </Form.Item>
    </Space>
    <Space>
      <div className="label">District:</div>
      <Form.Item
        className="nested-field"
        {...restField}
        name={[name, 'district']}
        fieldKey={[fieldKey, 'district']}
        rules={[{ required: true, message: 'Missing first name' }]}
      >
        <Input placeholder="First Name" />
      </Form.Item>
    </Space>
    <Space>
      <div className="label">Ward:</div>
      <Form.Item
        className="nested-field"
        {...restField}
        name={[name, 'ward']}
        fieldKey={[fieldKey, 'ward']}
        rules={[{ required: true, message: 'Missing first name' }]}
      >
        <Input placeholder="First Name" />
      </Form.Item>
    </Space>
    <Space>
      <div className="label">Address:</div>
      <Form.Item
        className="nested-field"
        {...restField}
        name={[name, 'address']}
        fieldKey={[fieldKey, 'address']}
        rules={[{ required: true, message: 'Missing first name' }]}
      >
        <Input placeholder="First Name" />
      </Form.Item>
    </Space>
  </>
);

export default Location;
