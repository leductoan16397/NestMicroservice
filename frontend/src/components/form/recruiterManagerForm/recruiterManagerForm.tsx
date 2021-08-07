/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {
  Button, Form, Input, notification, Select,
} from 'antd';
import React from 'react';
import parse from 'html-react-parser';
import { countries } from 'constants/country';
import './recruiterManagerForm.scss';

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
  email: '',
  company: '',
};

const RecruiterManagerForm: React.FC = () => {
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
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Company"
        name="company"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Select
          showSearch
          placeholder="Select a country"
          optionFilterProp="children"
        >
          {countries.map((item, index) => (
            <Option key={`country_${index + 1}`} value={item.name}>
              {parse(item.flag)}
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 11, span: 4 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RecruiterManagerForm;
