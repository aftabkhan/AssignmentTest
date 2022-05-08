import React from 'react';
import { Layout } from 'antd';
import UserNotification from './notification'

const { Header } = Layout;

function GlobalHeader() {
  return (
    <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
      <div className='top-nav'>
        <UserNotification />
      </div>
    </Header>
  )
}

export default GlobalHeader