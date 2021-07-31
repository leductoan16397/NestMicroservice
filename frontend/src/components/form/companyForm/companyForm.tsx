import {
  Button, Form, Input, Select, Space,
} from 'antd';
import React from 'react';
import parse from 'html-react-parser';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
  CustomSelect, DaySelect, PicturesWall,
} from 'components/customField/costomFilelds';
import { countries } from 'constants/country';
import { OptionProp } from 'components/customField/interface';
import {
  CompanyInterface, onFinishFailedHandler, onFinishHandler,
} from './interface';
import './companyForm.scss';
import Location from '../common/location/location';

const { Option } = Select;

const children: any[] = [];
for (let i = 10; i < 36; i += 1) {
  children.push(
    <Option key={i.toString(36) + i} value={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>,
  );
}

interface CompanyFormPropos {
  initialValues: CompanyInterface;
  onFinish: onFinishHandler;
  onFinishFailed?: onFinishFailedHandler;
}

const options: OptionProp[] = [{
  value: true, label: 'Yes',
}, {
  value: false, label: 'No',
}];

const CompanyForm: React.FC<CompanyFormPropos> = ({ initialValues, onFinish, onFinishFailed }) => {
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
        label="Company Name"
        name="companyName"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Descriptioin"
        name="descriptioin"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Origin Country"
        name="originCountry"
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
      <Form.Item
        label="Avatar"
        name="avatar"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <PicturesWall maxCount={1} />
      </Form.Item>
      <Form.Item
        label="Images"
        name="images"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <PicturesWall multiple />
      </Form.Item>
      <Form.Item
        label="OT"
        name="ot"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <CustomSelect
          value={form.getFieldValue('ot')}
          onChange={(val) => form.setFieldsValue({ ot: val })}
          options={options}
        />
      </Form.Item>

      <Form.List name="locations">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({
              key, name, fieldKey, ...restField
            }) => (
              <Space key={key} align="baseline" className="w-100 nested-group">
                <Location name={name} fieldKey={fieldKey} restField={restField} />
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
        <div className="label">Working Time:</div>
        <Space size={20} className="nested-group">
          <Space>
            <div className="label">From:</div>
            <Form.Item
              className="nested-field"
              name={['workTime', 'from']}
            >
              <DaySelect
                value={form.getFieldValue(['workTime', 'from'])}
                onChange={(val) => form.setFieldsValue({ workTime: { from: val } })}
                options={options}
              />
            </Form.Item>

          </Space>
          <Space>
            <div className="label">To:</div>

            <Form.Item
              className="nested-field"
              name={['workTime', 'to']}
            >
              <DaySelect
                value={form.getFieldValue(['workTime', 'from'])}
                onChange={(val) => form.setFieldsValue({ workTime: { to: val } })}
                options={options}
              />
            </Form.Item>
          </Space>
        </Space>
      </Space>

      <Space className="w-100" direction="vertical">
        <div className="label">Company Size:</div>
        <Space size={20} className="nested-group">
          <Space>
            <div className="label">Min:</div>
            <Form.Item
              className="nested-field"
              name={['companySize', 'min']}
            >
              <Input />
            </Form.Item>

          </Space>
          <Space>
            <div className="label">Max:</div>

            <Form.Item
              className="nested-field"
              name={['companySize', 'max']}
            >
              <Input />
            </Form.Item>
          </Space>
        </Space>
      </Space>

      <Form.Item wrapperCol={{ offset: 11, span: 4 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CompanyForm;
