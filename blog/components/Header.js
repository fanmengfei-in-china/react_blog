import React from 'react'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, BookOutlined, HighlightOutlined } from '@ant-design/icons';

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center" align="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className="header-logo">fanmengfei</span>
        <span className="header-txt">fine,thank you,and you?</span>
      </Col>
      <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>首页</Menu.Item>
          <Menu.Item key="blog" icon={<BookOutlined />}>博客</Menu.Item>
          <Menu.Item key="edit" icon={<HighlightOutlined />}>随笔</Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)
export default Header