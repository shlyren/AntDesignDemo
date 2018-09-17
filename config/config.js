export default {
    plugins: [
        ['umi-plugin-react', {
          // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
          antd: true,
          dva: true,
        }],
      ],
    routes: [{
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
            {
                path: '/',
                component: 'HelloWorld',
            },{
                path:'/dashboard',
                routes: [
                    {path:'/dashboard/analysis', component:'./Dashboard/Analysis'},
                    {path:'/dashboard/monitor', component:'./Dashboard/Monitor'},
                    {path:'/dashboard/workplace', component:'./Dashboard/Workplace'},
                ]
            }, {
                path: '/puzzlecard',
                component: './puzzlecard'
            }, {
                path: '/list/index',
                component: './List/index'
            }
         ]
    }],
    // 配置代理
    // proxy: {
    //     '/dev': {
    //         target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
    //         changeOrigin: true,
    //     },
    // },
}