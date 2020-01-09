import Mock from 'mockjs';

export default ({ mock }) => {
    if (!mock) return;

    // 获取部门List
    Mock.mock('/api/blade-system/dept/list?current=1&size=10', 'get', () => {
        console.log('获取部门List ===================================');

        let list = [];

        for (let i = 0; i < 5; i++) {
            list.push(
                Mock.mock({
                    id: '@increment',
                    tenantCode: 'tenantCode',
                    parentId: 0,
                    deptName: 'deptName',
                    fullName: 'fullName',
                    sort: 0,
                    remark: 'remark',
                })
            );
        }

        return {
            data: list,
        };
    });

    // 获取部门Tree
    Mock.mock('/api/blade-system/dept/tree', 'get', () => {
        console.log('获取部门List ===================================');

        let list = [];

        for (let i = 0; i < 5; i++) {
            list.push(
                Mock.mock({
                    id: '@increment',
                    tenantCode: 'tenantCode',
                    parentId: 0,
                    deptName: 'deptName',
                    fullName: 'fullName',
                    sort: 0,
                    remark: 'remark',
                })
            );
        }

        return {
            data: list,
        };
    });
};
