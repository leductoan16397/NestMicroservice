import {
  Button, DatePicker, Form, Input, InputNumber, notification, Select, Space,
} from 'antd';
import React from 'react';
import TextEditor from 'components/common/textEditor/textEditor';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { LocationField } from 'components/common/location/location';
import './jobForm.scss';
import { JobSkills } from 'constants/header';
// import { push } from 'connected-react-router';
import { addJob } from 'api/admin/api';
import { Job } from './interface';

const { Option } = Select;

const children: any[] = [];
// eslint-disable-next-line array-callback-return
JobSkills.map((item, index) => {
  children.push(
    <Option key={`job_${index + 1}`} value={item}>
      {item}
    </Option>,
  );
});

const initialValues: Job = {
  jobName: '',
  skill: '',
  locations: [{
    city: 'Hồ Chí Minh',
    district: 'Thành Phố Thủ Đức',
    ward: 'Phường An Khánh',
    address: '',
  }],
  salary: {
    min: 500,
    max: 5000,
  },
  title: [],
  reason: '',
  why: '',
  jobDescription: '',
  endTime: '',
};

const JobForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: Job): Promise<void> => {
    const Success: boolean = await addJob(values);
    if (Success) {
      form.resetFields();
      // push('/admin');
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
        label="Job Name"
        name="jobName"
        rules={[{ required: true, message: 'Please input job name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Title"
        name="title"
        rules={[{
          required: true, message: 'Please input job Title!', type: 'array', min: 1,
        }]}
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
        rules={[{ required: true, message: 'Please input Top 3 Reasons To Join Us!' }]}
      >
        <TextEditor
          value={form.getFieldValue('reason')}
          onChange={(val) => form.setFieldsValue({ reason: val })}
        />
      </Form.Item>

      <Form.Item
        label="Job Description"
        name="jobDescription"
        rules={[{ required: true, message: 'Please input Job Description!' }]}
      >
        <TextEditor
          value={form.getFieldValue('jobDescription')}
          onChange={(val) => form.setFieldsValue({ jobDescription: val })}
        />
      </Form.Item>

      <Form.Item
        label="Skills and Experience "
        name="skill"
        rules={[{ required: true, message: 'Please input Skills and Experience!' }]}
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
              <Button
                type="dashed"
                onClick={() => add({
                  city: 'Hồ Chí Minh',
                  district: 'Thành Phố Thủ Đức',
                  ward: 'Phường An Khánh',
                  address: '',
                })}
                block
                icon={<PlusOutlined />}
              >
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
              rules={[{ required: true, type: 'integer' }]}
            >
              <InputNumber min={1} max={10000} />
            </Form.Item>

          </Space>
          <Space>
            <div className="label">Max:</div>

            <Form.Item
              className="nested-field"
              name={['salary', 'max']}
              rules={[{ required: true, type: 'integer' }]}
            >
              <InputNumber min={1} max={10000} />
            </Form.Item>
          </Space>
        </Space>
      </Space>

      <Form.Item
        label="Why You'll Love Working Here"
        name="why"
        rules={[{ required: true, message: "Please input Why You'll Love Working Here! " }]}
      >
        <TextEditor
          value={form.getFieldValue('why')}
          onChange={(val) => form.setFieldsValue({ why: val })}
        />
      </Form.Item>

      <Form.Item
        label="End Time"
        name="endTime"
        rules={[{ required: true, message: 'Please input End Time!', type: 'date' }]}
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
