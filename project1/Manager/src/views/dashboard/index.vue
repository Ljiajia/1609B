<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './defineSteps'
import { setTimeout } from 'timers';

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapState({
      identity_text: state=>state.user.userInfo.identity_text
    })
  },
  created() {
    console.log('this.identity_text...', this.identity_text);
    if (this.identity_text === '管理员') {
      this.currentRole = 'editorDashboard'
    }
    setTimeout(()=>{
      // 首次进入的用户显示引导页
      let isDriver = window.localStorage.getItem('isDriver');
      console.log('isDriver...', isDriver, steps);
      if (!isDriver){
        // 开始引导
        this.driver = new Driver()
        this.driver.defineSteps(steps)
        this.driver.start()
        // 设置本地存储
        // window.localStorage.setItem('isDriver', 'true');
      }
    }, 3000);
  }
}
</script>
