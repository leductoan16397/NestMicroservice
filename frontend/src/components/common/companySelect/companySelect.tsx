/* eslint-disable no-underscore-dangle */
import { Select, Spin } from 'antd';
import { LabeledValue } from 'antd/lib/select';
import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';
import './companySelect.scss';
import { searchCompany } from 'api/admin/api';

interface UserValue {
  label: string;
  value: string;
}
const fetchCompanyList = async (companyName: string): Promise<UserValue[]> => {
  const data = await searchCompany({ companyName });

  const ls: UserValue[] = data.map((item) => ({
    label: item.companyName,
    value: item.id || item._id as string,
  }));
  return ls;
};

interface CompanySelectProps {
  value: string;
  onChange: (val: string) => void;
}
export const CompanySelect: React.FC<CompanySelectProps> = ({ value = '', onChange }) => {
  const [fetching, setFetching] = useState<boolean>(true);
  const [options, setOptions] = React.useState<LabeledValue[]>([]);

  useEffect(() => {
    fetchCompanyList('').then((newOptions) => {
      setOptions(newOptions);
      setFetching(false);
    });
  }, []);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (searchString: string): void => {
      setOptions([]);
      setFetching(true);

      fetchCompanyList(searchString).then((newOptions) => {
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, 500);
  }, []);
  const onChangeSelect = (selectValue: LabeledValue): void => {
    onChange(selectValue.value.toString());
  };

  return (
    <Select<LabeledValue>
      onChange={onChangeSelect}
      value={options.find((item) => item.value === value)}
      showSearch
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      options={options}
    />
  );
};
