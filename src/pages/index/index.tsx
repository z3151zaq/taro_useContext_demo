import { useContext } from 'react'
import { View } from '@tarojs/components'

import './index.less'
import { TestContext } from '../../app'

 function Index() {
  const state = useContext(TestContext)
  return (
    <View className='index'>
      {state}
    </View>
  )
}


export default Index
