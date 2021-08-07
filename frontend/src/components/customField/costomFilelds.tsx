/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-vars */
import './customFields.scss';
import React, { useReducer, useState, useEffect } from 'react';
import { Modal, Select, Upload } from 'antd';
import { dayOfWeek } from 'components/form/companyForm/interface';
import ImgCrop from 'antd-img-crop';
import { UploadFile } from 'antd/lib/upload/interface';
import { PlusOutlined, SyncOutlined } from '@ant-design/icons';
import {
  ActionKind, CustomSelectProps, PicturesWallProps,
} from './interface';
import { previewReducer } from './reducer';
import { getBase64 } from './Utils';
import { onUpload } from './upload';

export const CustomSelect: React.FC<CustomSelectProps> = ({
  value, multiple, options, onChange, size = 'middle',
}) => {
  const handleChange = (val: string | string[]): void => {
    onChange(val);
  };

  return (
    <Select
      mode={multiple ? 'multiple' : undefined}
      size={size}
      value={value}
      onChange={handleChange}
    >
      {options.map((item, index) => (
        <Select.Option
          key={`select_${index + 1}`}
          value={item.value as string | number}
        >
          {item.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export const DaySelect: React.FC<CustomSelectProps> = ({
  value, multiple, onChange, size = 'middle',
}) => {
  const handleChange = (val: string | string[]): void => {
    onChange(val);
  };

  return (
    <Select
      mode={multiple ? 'multiple' : undefined}
      size={size}
      value={value}
      onChange={handleChange}
    >
      {dayOfWeek.map((item, index) => (
        <Select.Option key={`day_${index + 1}`} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
};

export const UploadImage: React.FC = () => {
  const [preview, dispatch] = useReducer(previewReducer, {
    previewTitle: '', previewImage: '', previewVisible: false,
  });
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange = ({ fileList }: any) => setFileList(fileList);

  const handlePreview = async (file: any) => {
    dispatch({ type: ActionKind.PREVIEWHANDLE, payload: file });
  };

  const handleCancel = () => dispatch({ type: ActionKind.CANCELPREVIEW });

  return (
    <>
      <ImgCrop rotate>
        <Upload
          maxCount={1}
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length === 0 ? uploadButton : replaceButton}
        </Upload>
        <Modal
          visible={preview.previewVisible}
          title={preview.previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={preview.previewImage} />
        </Modal>
      </ImgCrop>
    </>
  );
};

export const PicturesWall: React.FC<PicturesWallProps> = ({
  maxCount = 10, multiple, onChange,
}) => {
  const [preview, dispatch] = useReducer(previewReducer, {
    previewTitle: '', previewImage: '', previewVisible: false,
  });
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => dispatch({ type: ActionKind.CANCELPREVIEW });

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    dispatch({ type: ActionKind.PREVIEWHANDLE, payload: file });
  };

  const handleChange = ({ fileList }: any) => {
    setFileList(fileList);
  };

  useEffect(() => {
    if (fileList.length > 0) {
      const images: UploadFile[] = fileList.filter((item) => item.status === 'done').map((item) => ({
        url: item.response,
        uid: item.uid,
        name: item.name,
      }));
      if (images.length > 0) {
        onChange(images);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileList]);

  return (
    <>
      <Upload
        maxCount={maxCount}
        multiple={multiple}
        listType="picture-card"
        fileList={fileList}
        customRequest={onUpload}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {maxCount === 1 ? (fileList.length === 0 ? uploadButton : replaceButton)
          : (fileList.length >= maxCount ? null : uploadButton)}
      </Upload>
      <Modal
        visible={preview.previewVisible}
        title={preview.previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={preview.previewImage} />
      </Modal>
    </>
  );
};

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);

const replaceButton = (
  <div>
    <SyncOutlined />
    <div style={{ marginTop: 8 }}>Replace</div>
  </div>
);
