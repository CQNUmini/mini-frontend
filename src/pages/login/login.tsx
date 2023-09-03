import { View, Text, Image, Button } from "@tarojs/components"
import Taro from "@tarojs/taro"

import useStore from "@/store/store"
import useAppInfo from "@/store/appInfo"
import useRequest from "@/store/request"

import './login.css'

import loginImg from '../../static/login/discover.png'

export default function login() {

    const statusBarHeight = useStore((state) => state.statusBarHeight)
    
    const app_id = useAppInfo((state) => state.app_id)
    const app_secret = useAppInfo((state) => state.app_secret)

    const requestUrl = useRequest((state) => state.requestUrl) // 后端 url

    async function handleLogin() {
        try {
            // 获取登录校验凭证
            const loginRes = await Taro.login()
            const code = loginRes.code

            // 向后端发送 app_id / app_secret / code 
            const toBackendRes = await Taro.request({
                method: 'POST',
                url: `${requestUrl}/v1/users/login`,
                data: {
                    app_id: app_id,
                    app_secret: app_secret,
                    code: code
                }
            });

            // 处理用户第一次登录，自动跳转注册页面
            if (toBackendRes.data.message === 'newUser') {
                Taro.navigateTo({
                    url: '/pages/register/register?openid=' + toBackendRes.data.data.openid
                });
            };
            
            
            // 用户登录成功，将 token 存入本地


        } catch (err) {
            console.log(err);
        }

    }

    return (
        <View className="login-wrapper" style={{ paddingTop: statusBarHeight + 'px' }}>
            <View className="login-header">
                <View className="login-header-back" onClick={() => { Taro.navigateBack() }}></View>
                <Text>登录</Text>
            </View>
            <View className="login-content">
                <Image src={loginImg} mode="widthFix"></Image>
                <Text>系统将在第一次登录时自动为您注册账号</Text>
                <Button onClick={handleLogin}>登录</Button>
            </View>
        </View>
    )
}
