/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: 'noredirect',
  name: 'User',
  meta: {
    title: 'quetions',
    icon: 'chart'
  },
  children: [
    {
      path: 'update',
      component: () => import('@/views/user/update'),
      name: 'KeyboardChart',
      meta: { title: 'updateUser', noCache: true, view_id: 'main-addQuestions' }
    }
  ]
}

export default userRouter
