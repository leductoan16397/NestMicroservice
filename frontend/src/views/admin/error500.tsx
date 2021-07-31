import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';
import React from 'react';

const Error500: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={(
      <Link to="/admin">
        <Button type="primary">Back Home </Button>
      </Link>
    )}
  />
);
export default Error500;
