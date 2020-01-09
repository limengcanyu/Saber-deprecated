import Mock from 'mockjs';

export default ({ mock }) => {
    if (!mock) return;

    // 用户登录
    Mock.mock('/user/login', 'post', {
        data: new Date().getTime() + '',
    });

    //用户退出
    Mock.mock('/user/logout', 'get', {
        data: true,
    });

    //刷新token
    Mock.mock('/user/refesh', 'post', {
        data: new Date().getTime() + '',
    });

    //获取表格数据
    Mock.mock('/user/getTable', 'get', () => {
        let list = [];
        for (let i = 0; i < 5; i++) {
            list.push(
                Mock.mock({
                    id: '@increment',
                    name: Mock.mock('@cname'),
                    username: Mock.mock('@last'),
                    type: [0, 2],
                    checkbox: [0, 1],
                    'number|0-100': 0,
                    datetime: 1532932422071,
                    'sex|0-1': 0,
                    moreselect: [0, 1],
                    grade: 0,
                    address: Mock.mock('@cparagraph(1, 3)'),
                    check: [1, 3, 4],
                })
            );
        }

        return {
            data: {
                total: 11,
                pageSize: 10,
                tableData: list,
            },
        };
    });

    Mock.mock('/api/blade-system/menu/routes', 'get', () => {
        console.log('mock user menu =========================================');

        let list = [];

        list.push(
            Mock.mock({
                name: '系统管理',
                path: '/system',
                source: 'iconfont iconicon_setting',
                children: [
                    {name: '用户管理', path: '/system/user', source: 'iconfont iconicon_principal',},
                    { name: '部门管理', path: '/system/dept', source: 'iconfont iconicon_group' },
                    { name: '字典管理', path: '/system/dict', source: 'iconfont iconicon_addresslist' },
                    { name: '菜单管理', path: '/system/menu', source: 'iconfont iconicon_subordinate' },
                    { name: '角色管理', path: '/system/role', source: 'iconfont iconicon_boss' },
                    { name: '参数管理', path: '/system/param', source: 'iconfont iconicon_community_line' },
                    { name: '租户管理', path: '/system/tenant', source: 'iconfont icon-quanxian' },
                    { name: '应用管理', path: '/system/client', source: 'iconfont iconicon_mobilephone' },
                ],
            })
        );

        return {
            data: list,
        };
    });

    Mock.mock('/api/blade-user/list', 'get', () => {
        console.log('mock user get list =================================');

        let list = [];

        list.push(
            Mock.mock({
                name: '系统管理',
                path: '/system',
                source: 'iconfont iconicon_setting',
                children: [
                    { name: '用户管理', path: '/system/user', source: 'iconfont iconicon_principal' },
                    { name: '部门管理', path: '/system/dept', source: 'iconfont iconicon_group' },
                    { name: '字典管理', path: '/system/dict', source: 'iconfont iconicon_addresslist' },
                    { name: '菜单管理', path: '/system/menu', source: 'iconfont iconicon_subordinate' },
                    { name: '角色管理', path: '/system/role', source: 'iconfont iconicon_boss' },
                    { name: '参数管理', path: '/system/param', source: 'iconfont iconicon_community_line' },
                    { name: '租户管理', path: '/system/tenant', source: 'iconfont icon-quanxian' },
                    { name: '应用管理', path: '/system/client', source: 'iconfont iconicon_mobilephone' },
                ],
            })
        );

        return {
            data: list,
        };
    });
};
