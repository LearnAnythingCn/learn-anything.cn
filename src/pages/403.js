import * as React from "react"
import { Button, Result } from 'antd';
// import Layout from "../components/layout"
import Seo from "../components/seo"
import 'antd/dist/antd.compact.css';// 引入官方提供的「紧凑样式」入口文件

const AuthorizationError = () => (
  <div>
    <Seo title="403: Sorry, you are not authorized to access this page." />
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary" onClick={() => (window.open("/"))}>回首页</Button>}
    />
  </div>

)

export default AuthorizationError


// <Layout>
//     <Seo title="404: Not found" />
//     <h1>404: Not Found</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </Layout>