import { Button } from 'antd';
import React from 'react';
import './viewCompanyBtn.scss';

interface ViewCompanyBtnProps {
    text: string;
    className?: string;
}

const ViewCompanyBtn: React.FC<ViewCompanyBtnProps> = ({ text, className }) => (
  <div className={className}>
    <Button className="view-company-profile-btn " danger>
      {text}
    </Button>
  </div>
);

export default ViewCompanyBtn;
