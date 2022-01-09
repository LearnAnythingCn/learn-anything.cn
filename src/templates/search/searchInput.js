import React from "react"
import { Row, Input } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import logo from "../../images/learn-anything.webp"

const { Search } = Input;

const SearchInput = () => {

    return (
        <div style={{ margin: "10px 10px 0 10px", backgroundColor: 'white', border: 'solid 1px #ddd', borderRadius: 10 }}>
            <div style={{ height: '40px', borderBottom: 'solid 1px #f0f0f0' }}>
                <a href="/">
                    <img src={logo} alt="logo" style={{ height: 22, width:142, margin: '9px 0 0 10px' }} />
                </a>
                <a href="/about" target="_blank" rel="noreferrer">
                    <QuestionCircleOutlined style={{ float: 'right', lineHeight: '40px', fontSize: 15, color: '#0089e1', marginRight: 15 }} />
                </a>
            </div>

            <Row style={{ padding: 10 }}>
                {
                    <Search
                        placeholder="输入查询内容..."
                        allowClear
                        enterButton
                        size="large"
                        style={{ left: 0, right: 0, width: 300, margin: 'auto' }}
                        onSearch={(text) => {
                            if (text.trim() !== "") {
                                window.open("/search?input=" + text)
                            }
                            return;
                        }}
                    />
                }
            </Row>
        </div>
    )
}

export default SearchInput