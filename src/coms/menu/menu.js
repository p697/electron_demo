import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  ClearOutlined,
  BugOutlined,
  ExperimentOutlined,
  DashboardOutlined,
  FileSearchOutlined,
  RightCircleOutlined,
  LeftCircleOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import './menu.scss'

const { SubMenu } = Menu;

export default () => {
  const [close, setClose] = useState(false)

  const trigger = () => {
    setClose(!close)
  }

  const TriggerIcon = () => {
    if (close) {
      console.log(close)
      return (
        <RightCircleOutlined className="menubox-trigger-bottomicon" />
      )
    }
    else {
      return (
        <LeftCircleOutlined className="menubox-trigger-bottomicon" />
      )
    }
  }

  return (
    <div className="menubox">
      <Menu
        mode="inline"
        inlineCollapsed={close}
        defaultOpenKeys={['sub1']}
        style={{ width: close ? 80 : 192 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <BugOutlined />
              <span>数据采集</span>
            </span>
          }
        >
          <Menu.Item key="1"><Link to="/spider">淘宝平台</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/spider">京东平台</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/spider">苏宁平台</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/spider">其他平台</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="sub2">
          <Link to="/wash"></Link>
          <span>
            <ClearOutlined />
            <span>数据清洗</span>
          </span>
        </Menu.Item>
        <Menu.Item key="sub3">
          <Link to="/analyze"></Link>
          <span>
            <ExperimentOutlined />
            <span>数据分析</span>
          </span>
        </Menu.Item>
        <Menu.Item key="sub4">
          <Link to="/result"></Link>
          <span>
            <FileSearchOutlined />
            <span>分析结果</span>
          </span>
        </Menu.Item>
        <Menu.Item key="sub5">
          <Link to="/monitor"></Link>
          <span>
            <DashboardOutlined />
            <span>评论监控</span>
          </span>
        </Menu.Item>

      </Menu>
      <div className="menubox-trigger" onClick={() => trigger()}>
        <TriggerIcon />
      </div>
    </div>
  );
}


