import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Taro from '@tarojs/taro'

import useUser from '@/store/userInfo'

import './mine.css'

import chatImg from '../../static/mine/chat.png'
import profileImg from '../../static/mine/profile.png'
import logoutImg from '../../static/mine/logout.png'
import loginImg from '../../static/mine/login.png'

export default function Mine() {

  const userInfo = useUser((state) => state)

  useLoad(() => {
    if (!userInfo.isLogin) {
      Taro.navigateTo({
        url: '/pages/login/login'
      })
    }
  })

  const postInfo = {
    postNum: 0,
    collectedNum: 0,
    recentView: 0
  }

  return (
    <View className='mine-wrapper'>
      <View className='mine-topBackground'></View>
      <View className='mine-content'>
        <View className='mine-userInfo'>
          <View className='mine-basicInfo'>
            <Image src='#' className='mine-avatar' onClick={userInfo.toLoginPage}></Image>
            <Text className='mine-nickname'>{userInfo.isLogin ? userInfo.nick_name : '请登录'}</Text>
            <Text className='mine-schoolID'>{userInfo.student_id}</Text>
            <View className='mine-moreInfo'>
              <View className='mine-moreInfo-item'>Lv.{userInfo.user_level}</View>
              <View className='mine-moreInfo-item'>{userInfo.grade}</View>
              <View className='mine-moreInfo-item'>{userInfo.college}</View>
            </View>
          </View>
          <View className='mine-postInfo'>
            <View className='mine-postInfo-item'>
              <Text className='mine-postInfo-item-num'>{postInfo.postNum}</Text>
              <Text className='mine-postInfo-item-text'>发帖</Text>
            </View>
            <View className='mine-postInfo-item'>
              <Text className='mine-postInfo-item-num'>{postInfo.collectedNum}</Text>
              <Text className='mine-postInfo-item-text'>收藏</Text>
            </View>
            <View className='mine-postInfo-item'>
              <Text className='mine-postInfo-item-num'>{postInfo.recentView}</Text>
              <Text className='mine-postInfo-item-text'>最近浏览</Text>
            </View>
          </View>
        </View>
        {userInfo.isLogin ?
          <View className='mine-functions'>
            <View className='mine-function mine-contactUs'>
              <Image src={chatImg}></Image>
              联系我们
            </View>
            <View className='mine-function mine-contactUs'>
              <Image src={profileImg}></Image>
              身份认证
            </View>
            <View className='mine-function mine-contactUs'>
              <Image src={logoutImg}></Image>
              退出登录
            </View>
          </View> :
          <View className='mine-functions'>
            <View className='mine-function mine-login' onClick={userInfo.toLoginPage}>
              <Image src={loginImg}></Image>
              登录
            </View>
          </View>}
      </View>
    </View>
  )
}
