/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {
  Button, Form, Input, Select,
} from 'antd';
import React from 'react';
import parse from 'html-react-parser';
import { countries } from 'constants/country';
import { OptionProp } from 'components/customField/interface';
import {
  onFinishFailedHandler, onFinishHandler, RecruiterInterface,
} from './interface';
import './recruiterForm.scss';

const { Option } = Select;

const children: any[] = [];
for (let i = 10; i < 36; i += 1) {
  children.push(
    <Option key={i.toString(36) + i} value={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>,
  );
}

interface RecruiterFormPropos {
  initialValues: RecruiterInterface;
  onFinish: onFinishHandler;
  onFinishFailed?: onFinishFailedHandler;
}

const options: OptionProp[] = [{
  value: true, label: 'Yes',
}, {
  value: false, label: 'No',
}];

console.log(options);

const RecruiterForm: React.FC<RecruiterFormPropos> = ({ initialValues, onFinish, onFinishFailed }) => {
  const [form] = Form.useForm();

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
        label="Roles"
        name="roles"
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
export default RecruiterForm;
