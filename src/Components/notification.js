import React from 'react';
import { Button, notification, Space } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

const Context = React.createContext({ notificationMessage: 'Default' });

const UserNotification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = placement => {
    api.info({
      message: `Notification`,
      description: <Context.Consumer>{({ notificationMessage }) => `Hello, ${notificationMessage}!`}</Context.Consumer>,
      placement,
    });
  };

  return (
    <Context.Provider value={{ notificationMessage: 'You have got New Message' }}>
      {contextHolder}
      <Space>
        <Button type="default" onClick={() => openNotification('topRight')} shape="circle" icon={<NotificationOutlined />} />
      </Space>
    </Context.Provider>
  );
};

export default UserNotification;