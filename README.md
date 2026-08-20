# 上海朋友聚会选择器｜公网部署版

这是一个可部署到 Vercel 的公网版本，包含静态前端和 Serverless API 后端代理。

## 功能

前端提供上海区域选择、场景化 TOP10 推荐、多人勾选和结果统计。后端 API 通过 `AMAP_WEB_SERVICE_KEY` 调用高德 Web 服务接口，Key 只在服务端环境变量中读取，不会进入浏览器或分享链接。

## 部署到 Vercel

1. 将本目录上传到 GitHub 仓库，或用 Vercel CLI 直接部署。
2. 在 Vercel 创建 Project，Root Directory 选择本目录。
3. 进入 Project Settings → Environment Variables，添加：

```text
AMAP_WEB_SERVICE_KEY = 你的高德 Web 服务 Key
