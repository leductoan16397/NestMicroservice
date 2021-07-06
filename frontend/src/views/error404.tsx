import { Link, RouteComponentProps } from 'react-router-dom';
import { Result, Button } from 'antd';
import { HomePath } from 'constants/path';
import React from 'react';

const Error404: React.FC<RouteComponentProps> = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to={`/${HomePath}`}><Button type="primary">Back Home </Button></Link>}
  />
);
export default Error404;
