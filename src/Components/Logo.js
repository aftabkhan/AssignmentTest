import React from 'react';
import { Layout } from 'antd';
import Title from 'antd/lib/typography/Title';

const { Header } = Layout;


function Logo() {
  return (
    <Header style={{ padding: "16px", background:"#0050b3" }}>          
      <div className="logo">
        <Title level={4}>User Dashboard</Title>
      </div>
    </Header>
  )
}

export default Logo