import { Button } from 'antd';
import React from 'react';
import './viewCompanyBtn.scss';

interface ViewComapayBtnProps {
    text: string;
    className?: string;
}

const ViewComapayBtn: React.FC<ViewComapayBtnProps> = ({ text, className }) => (
  <div className={className}>
    <Button className="view-company-profile-btn " danger>
      {text}
    </Button>
  </div>
);

export default ViewComapayBtn;
