/* eslint-disable no-unused-vars */
import {
  Button, DatePicker, Form, Input, Select, Space,
} from 'antd';
import React from 'react';
import TextEditor from 'components/common/textEditor/textEditor';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Job, onFinishFailedHandler, onFinishHandler } from './interface';

const { Option } = Select;

const children: any[] = [];
for (let i = 10; i < 36; i += 1) {
  children.push(
    <Option key={i.toString(36) + i} value={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>,
  );
}

interface JobFormPropos {
  initialValues: Job;
  onFinish: onFinishHandler;
  onFinishFailed?: onFinishFailedHandler;
}

const JobForm: React.FC<JobFormPropos> = ({ initialValues, onFinish, onFinishFailed }) => (
  <Form
    name="job-info"
    layout="vertical"
    initialValues={initialValues}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    scrollToFirstError
  >
    <Form.Item
      label="Job Name"
      name="jobName"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Skills and Experience "
      name="skill"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      {/* eslint-disable @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <TextEditor />
    </Form.Item>

    <Form.List name="locations">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({
            key, name, fieldKey, ...restField
          }) => (
            <Space key={key} align="baseline" className="w-100 nested-group">
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
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add location
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>

    <Space className="w-100" direction="vertical">
      <div className="label">Salary:</div>
      <Space size={20} className="nested-group">
        <Space>
          <div className="label">Min:</div>
          <Form.Item
            className="nested-field"
            name={['salary', 'min']}
          >
            <Input />
          </Form.Item>

        </Space>
        <Space>
          <div className="label">Max:</div>

          <Form.Item
            className="nested-field"
            name={['salary', 'max']}
          >
            <Input />
          </Form.Item>
        </Space>
      </Space>
    </Space>

    <Form.Item
      label="Title"
      name="title"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Select
        mode="tags"
        size="middle"
        placeholder="Please select"
        style={{ width: '100%' }}
        allowClear
      >
        {children}
      </Select>
    </Form.Item>

    <Form.Item
      label="Top 3 Reasons To Join Us"
      name="reason"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      {/* eslint-disable @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <TextEditor />
    </Form.Item>

    <Form.Item
      label="Why You'll Love Working Here"
      name="why"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      {/* eslint-disable @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <TextEditor />
    </Form.Item>

    <Form.Item
      label="Job Description"
      name="jobDescription"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      {/* eslint-disable @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <TextEditor />
    </Form.Item>

    <Form.Item
      label="End Time"
      name="endTime"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <DatePicker inputReadOnly />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 11, span: 4 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default JobForm;
