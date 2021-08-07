import {
  Button, Form, Input, InputNumber, notification, Select, Space,
} from 'antd';
import React from 'react';
import parse from 'html-react-parser';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
  CustomSelect, DaySelect, PicturesWall,
} from 'components/customField/costomFilelds';
import { countries } from 'constants/country';
import { OptionProp } from 'components/customField/interface';
import { LocationField } from 'components/form/common/location/location';
import { addCompany } from 'api/admin/api';
import { useHistory } from 'react-router-dom';
import {
  CompanyInterface, DayOfWeek,
} from './interface';
import './companyForm.scss';

const { Option } = Select;

const children: any[] = [];
for (let i = 10; i < 36; i += 1) {
  children.push(
    <Option key={i.toString(36) + i} value={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>,
  );
}

const options: OptionProp[] = [{
  value: true, label: 'Yes',
}, {
  value: false, label: 'No',
}];

const initialValues: CompanyInterface = {
  companyName: '',
  locations: [{
    city: 'Hồ Chí Minh',
    district: 'Thành Phố Thủ Đức',
    ward: 'Phường An Khánh',
    address: '',
  }],
  workTime: {
    from: DayOfWeek.MONDAY,
    to: DayOfWeek.FRIDAY,
  },
  companySize: {
    min: 1,
    max: 50,
  },
  originCountry: 'Việt Nam',

  descriptioin: '',
  ot: true,
};

const CompanyForm: React.FC = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const onFinish = async (values: CompanyInterface): Promise<void> => {
    const Success: boolean = await addCompany(values);
    if (Success) {
      form.resetFields();
      // push('/admin');
      history.push('/admin');
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
        label="Company Name"
        name="companyName"
        rules={[{ required: true, message: 'Please input your Company Name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Descriptioin"
        name="descriptioin"
        rules={[{ required: true, message: 'Please input your Company Descriptioin!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Origin Country"
        name="originCountry"
        rules={[{ required: true, message: 'Please input your Origin Country!' }]}
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
        rules={[{ required: true, message: 'Please input Avatar!' }]}
      >
        <PicturesWall
          maxCount={1}
          onChange={(val) => form.setFieldsValue({ avatar: val[0] })}
        />
      </Form.Item>
      <Form.Item
        label="Images"
        name="images"
        rules={[{ required: true, message: 'Please input images!' }]}
      >
        <PicturesWall
          multiple
          onChange={(val) => form.setFieldsValue({ images: val })}
        />
      </Form.Item>
      <Form.Item
        label="OT"
        name="ot"
        rules={[{ required: true, message: 'Please input OT!' }]}
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
              <InputNumber min={1} max={10000} />
            </Form.Item>
          </Space>
          <Space>
            <div className="label">Max:</div>

            <Form.Item
              className="nested-field"
              name={['companySize', 'max']}
            >
              <InputNumber min={1} max={1000} />
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
