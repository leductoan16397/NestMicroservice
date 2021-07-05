import { Breadcrumb } from 'antd';
import { useRouteMatch } from 'react-router-dom';
import './breadcrumb.scss';

const IBreadcrumb = () => {
  const match = useRouteMatch();
  console.log(match);

  return (
    <Breadcrumb style={{ margin: '10px 0' }}>
      <Breadcrumb.Item href="/">Home </Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default IBreadcrumb;
