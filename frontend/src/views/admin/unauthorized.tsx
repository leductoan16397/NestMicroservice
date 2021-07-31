import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';
import React from 'react';

const Unauthorized: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={(
      <Link to="/admin">
        <Button type="primary">Back Home </Button>
      </Link>
    )}
  />
);
export default Unauthorized;
