# 上课网

## 启动项目
- 使用 vscode 打开项目
- 新建终端(Ctrl + Shift + `)
- cd service
> 开启后端
- node app.js
- 新建终端(Ctrl + Shift + `)
> 开启前端
- npm run dev

## 目录结构
├─service           //  后端
└─src
    ├─assets        //  资源
    ├─components    //  头部, 内容, 尾部组件
    ├─router        //  路由
    ├─stores        //  公共store
    └─views         //  一级路由页面, 应用到头部, 内容, 尾部组件
        └─content   //  二级子路由, 渲染在`VContent`组件的`<router-view><router-view/>`中
