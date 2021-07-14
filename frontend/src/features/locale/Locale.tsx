/* eslint-disable no-unused-vars */
import { Switch } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useState } from 'react';
import './Locale.module.scss';
import { selectLocale, Locale, switchLocale } from './localeSlice';

const SwitchLocale: React.FC = () => {
  const locale = useAppSelector(selectLocale);
  const [isChecked, setIsChecked] = useState(locale === Locale.VI);
  const dispatch = useAppDispatch();

  const onChange = (checked: boolean): void => {
    setIsChecked(checked);
    dispatch(switchLocale(checked ? Locale.VI : Locale.EN));
  };
  return (
    <Switch
      onChange={onChange}
      className="language-switch"
      checkedChildren="EN"
      unCheckedChildren="VN"
      defaultChecked={isChecked}
    />
  );
};

export default SwitchLocale;
