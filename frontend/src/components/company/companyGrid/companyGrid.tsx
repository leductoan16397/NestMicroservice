import Card from 'antd/lib/card';
import React from 'react';
import './companyGrd.scss';
import CompanyCard from '../companyCard/companyCard';

interface CompanyGridProps {
  companies: number[];
}
const CompanyGrid: React.FC<CompanyGridProps> = ({ companies }) => (
  <Card title={(<h1>1000 companies</h1>)} className="company-grid-card">
    {companies.map((item, index) => (
      <Card.Grid key={`company_${index + 1}`} className="company-card-item" hoverable={false}>
        <CompanyCard />
      </Card.Grid>
    ))}
  </Card>
);

export default CompanyGrid;
