import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Anchor, Drawer, Button } from "antd";
const { Link } = Anchor;

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: "CloudDevops",
      key: "1",
    },
    {
      label: "Dropdown2",
      key: "2",
    },
    {
      label: "Dropdown3",
      key: "3",
    },
  ];
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);

  const onClose = () => setVisible(false);

  return (
    <div className="container-fluid Header">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="/">AccelGrowth Tech</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="/" title="Home" />
            <Link href="about" title="About" />
            <Link href="CloudDevops" title="CloudDevops" />

            <Dropdown
              menu={{
                items,
                onClick: handleMenuClick,
              }}
              onOpenChange={handleOpenChange}
              open={open}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Features
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Link href="faq" title="FAQ" />
            <Link href="pricing" title="Pricing" />
            <Link href="ContactUs" title="ContactUs" />
            <Link href="Career" title="Career" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="/" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="ContactUs" title="ContactUs" />
              <Link href="#Career" title="Career" />
              <Link href="CloudDevops" title="CloudDevops" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
