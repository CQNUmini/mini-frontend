import { create } from "zustand";

type State = {
    requestUrl: string,
    OSSUrl: string,
}

type Action = {
    setRequestUrl: (requestUrl: Partial<State>) => void // 使用Partial，可以部分更新用户信息
}

// 创建zustand store
const useRequest = create<State & Action>((set) => ({
    requestUrl: 'http://127.0.0.1:3000/api',
    OSSUrl: 'https://cqnu-user-avatars.oss-cn-chengdu.aliyuncs.com',
    // 定义setUserInfo操作，它将用户信息合并到当前状态
    setRequestUrl: (url) => set((state) => ({ ...state, ...url }))
}))

export default useRequest;
