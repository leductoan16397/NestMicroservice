/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {
  Button, Form, Input, notification, Select,
} from 'antd';
import React from 'react';
import './recruiterManagerForm.scss';
import { CompanySelect } from 'components/common/companySelect/companySelect';
import { push } from 'connected-react-router';
import { addCecruiterManager } from 'api/admin/api';
import { RecruiterManagerInterface } from './interface';

const { Option } = Select;

const children: any[] = [];
for (let i = 10; i < 36; i += 1) {
  children.push(
    <Option key={i.toString(36) + i} value={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>,
  );
}
const initialValues:RecruiterManagerInterface = {
  email: '',
  company: '',
};

const RecruiterManagerForm: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = async (values: RecruiterManagerInterface): Promise<void> => {
    const Success: boolean = await addCecruiterManager(values);
    if (Success) {
      form.resetFields();
      push('/admin');
    }
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
        <CompanySelect
          value={form.getFieldValue('company')}
          onChange={(val) => form.setFieldsValue({ company: val })}
        />
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
