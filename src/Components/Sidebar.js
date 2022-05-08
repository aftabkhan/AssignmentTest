import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import useLocalStorage from '../hooks/useLocalStorage';
import { Layout, Menu, Avatar, Button, Typography } from 'antd';
import { UserOutlined, AppstoreOutlined, FundOutlined , FireOutlined } from '@ant-design/icons';
import axios from 'axios';
import Logo from './Logo';

const { Sider } = Layout;
const { Text } = Typography;

function getItem(label, key, icon, children) {
  return {key, icon, children, label};
}

const sideNav = [
  getItem(<Link to='/'>Dashboard</Link>, '/dashboard', <AppstoreOutlined />),
  getItem(<Link to='/reports'>Reports</Link>, '/reports', <FundOutlined />),
];

function Sidebar() {

    const [users, setUsers] = useLocalStorage("setUsers", []);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
            console.log(response.data);
        })
        .catch((error) => {
                console.log(error)
            }) ;        
    }, [setUsers]);

  return (
    
    <Sider 
        id='components-layout-demo-responsive' 
        breakpoint="lg" 
        collapsedWidth="0" 
        onBreakpoint={broken => { console.log(broken);}} 
        onCollapse={(collapsed, type) => { console.log(collapsed, type);}} 
        >
        
        {/* Logo Component*/}
        <Logo />

        {users.filter(user => user.id === 1).map((user) => (
            <div className='user-details' key={user.id}>
                <Avatar size={64} icon={<UserOutlined />} />
                <Text type="secondary">Hello, <br /><b>{user.name}</b></Text>
                <Button type="primary" size="small"><FireOutlined /> Live Metrics</Button>
            </div>
        ))}

        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={sideNav} />

    </Sider>
  )
}

export default Sidebar