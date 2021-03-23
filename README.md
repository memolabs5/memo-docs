<!--
 * @Author: wudi(max24@vip.qq.com)
 * @Date: 2021-02-22 16:12:29
 * @Description: 
-->
# MEMO Docs
此项目采用的VuePress([Github](https://github.com/vuejs/vuepress)、[官方文档](https://v1.vuepress.vuejs.org/))

## 环境要求
- Node.js 10+
- Yarn

## 项目配置
> 项目的主要配置文件是`/memo-docs/src/.vuepress/config.js`,具体配置项可以参考[官方文档](https://v1.vuepress.vuejs.org/config/#dest)

## 开发与部署
### 开发环境
```shell
# 进入项目目录
cd memo-docs
# 下载项目依赖
yarn install 
# 运行
npm run dev
```

### 部署
1.打包
```shell
# 构建打包
npm run build
```
2.上传包内容到nginx
> 将打的包(`/memo-docs/src/.vuepress/dist`)目录下的内容上传到nginx根目录下的/docs目录（不一定要叫`docs`,但必须跟`/memo-docs/src/.vuepress/config.js`中`base`字段配置的一致）
