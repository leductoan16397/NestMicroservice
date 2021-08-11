import {
  Button, DatePicker, Form, Input, notification, Select, Space,
} from 'antd';
import React from 'react';
import TextEditor from 'components/common/textEditor/textEditor';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { LocationField } from 'components/common/location/location';
import './jobForm.scss';

const { Option } = Select;

const children: any[] = [];
for (let i = 10; i < 36; i += 1) {
  children.push(
    <Option key={i.toString(36) + i} value={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>,
  );
}

const initialValues = {
  jobName: 'toan le',
  skill: 'toan le duc',
  locations: [{
    city: 'xcz',
    district: 'ava',
    ward: '1312',
    address: '123',
  }],
  salary: {
    min: 0,
    max: 0,
  },
  title: ['cacac'],
  reason: 'zxvv',
  why: 'wqq',
  jobDescription: 'rr',
  endTime: '',
};

const JobForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any): void => {
    console.log('Success:', values);
  };

  const onFinishFailed = (): void => {
    notification.error({
      message: 'Validation Failed',
    });
  };

  return (
    <Form
      form={form}
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
        <TextEditor
          value={form.getFieldValue('skill')}
          onChange={(val) => form.setFieldsValue({ skill: val })}
        />
      </Form.Item>

      <Form.List name="locations">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({
              key, name, fieldKey, ...restField
            }) => (
              <Space key={key} align="baseline" className="w-100 nested-group">
                <LocationField
                  locations={form.getFieldValue('locations')}
                  form={form}
                  name={name}
                  fieldKey={fieldKey}
                  restField={restField}
                />
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
        <TextEditor
          value={form.getFieldValue('reason')}
          onChange={(val) => form.setFieldsValue({ reason: val })}
        />
      </Form.Item>

      <Form.Item
        label="Why You'll Love Working Here"
        name="why"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <TextEditor
          value={form.getFieldValue('why')}
          onChange={(val) => form.setFieldsValue({ why: val })}
        />
      </Form.Item>

      <Form.Item
        label="Job Description"
        name="jobDescription"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <TextEditor
          value={form.getFieldValue('jobDescription')}
          onChange={(val) => form.setFieldsValue({ jobDescription: val })}
        />
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
};

export default JobForm;
