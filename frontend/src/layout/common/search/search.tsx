/* eslint-disable array-callback-return */
import {
  Button, Col, Row, Select, Tag,
} from 'antd';
import React, { ReactElement } from 'react';
import './search.scss';
import { JobSkills, Locations } from 'constants/header';
import { FormattedMessage, useIntl } from 'react-intl';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  selectJobTitle, selectCity, clearTitle, addTitle, changeCity,
} from 'features/search/searchSlice';

const { Option } = Select;

const children: any[] = [];
JobSkills.map((item, index) => {
  children.push(
    <Option key={`job_${index + 1}`} value={item}>
      {item}
    </Option>,
  );
});

function tagRender(props: any): ReactElement {
  const {
    label, closable, onClose,
  } = props;

  const onPreventMouseDown = (event: any): void => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color="cyan"
      closable={closable}
      onClose={onClose}
      onMouseDown={onPreventMouseDown}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

export const SearchJob: React.FC = () => {
  const intl = useIntl();
  const jobTitle = useAppSelector(selectJobTitle);
  const city = useAppSelector(selectCity);
  const dispatch = useAppDispatch();
  const handleChange = (value: string): void => {
    dispatch(changeCity(value));
  };
  const onClearJobTitle = (): void => {
    dispatch(clearTitle());
  };

  const onChangeJob = (value: string[]): void => {
    dispatch(addTitle(value));
  };

  return (
    <Row justify="space-around" className="search-rows">
      <Col>
        <Select
          mode="tags"
          className="search-input"
          value={jobTitle}
          size="middle"
          onClear={onClearJobTitle}
          onChange={onChangeJob}
          tagRender={tagRender}
          placeholder={intl.formatMessage({ id: 'header.SearchJobPlaceholder' })}
          style={{ width: '100%' }}
          allowClear
        >
          {children}
        </Select>
      </Col>
      <Col>
        <Select value={city} style={{ width: 120 }} onChange={handleChange}>
          {Locations.map((item, index) => (
            <Select.Option key={`searchLocation${index + 1}`} value={item.value}>
              {intl.formatMessage({ id: `header.${item.id}` })}
            </Select.Option>
          ))}
        </Select>
      </Col>
      <Col>
        <Button type="primary">
          <FormattedMessage id="header.Search" />
        </Button>
      </Col>
    </Row>
  );
};
export const SearchCompany: React.FC = () => <h5>search company</h5>;
