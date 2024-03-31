# 使用 Node.js 官方提供的 Node.js 14 镜像作为基础镜像
FROM node:14-alpine

# 设置工作目录为 /app
WORKDIR /app

# 拷贝 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 拷贝应用程序代码到工作目录
COPY . .

# 构建生产环境代码
RUN npm run build

# 暴露应用程序的端口（如果有需要）
# EXPOSE 3000

# 定义容器启动命令
CMD ["npm", "start"]




