import * as React from "react"
import { Button, Result } from 'antd';
// import Layout from "../components/layout"
import Seo from "../components/seo"
import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件

const NotFoundPage = () => (
  <div>
    <Seo title="404: Not found" />
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => (window.open("/"))}>回首页</Button>}
    />
  </div>

)

export default NotFoundPage


// <Layout>
//     <Seo title="404: Not found" />
//     <h1>404: Not Found</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </Layout>