import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

function Reports() {
    return (
    <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <h1>Reports</h1>
        </div>
    </Content>
    )
}

export default Reports