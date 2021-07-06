import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';
import { HomePath } from 'constants/path';
import React from 'react';

const Unauthorized: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Link to={`/${HomePath}`}><Button type="primary">Back Home </Button></Link>}
  />
);
export default Unauthorized;
