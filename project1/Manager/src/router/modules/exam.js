/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/quetions',
  component: Layout,
  redirect: 'noredirect',
  name: 'Exam',
  meta: {
    title: 'quetions',
    icon: 'chart'
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/questions/add'),
      name: 'KeyboardChart',
      meta: { title: 'addQuestions', noCache: true }
    },
    {
      path: 'type',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'quetionTypes', noCache: true }
    },
    {
      path: 'view',
      component: () => import('@/views/charts/mixChart'),
      name: 'MixChart',
      meta: { title: 'viewQuestions', noCache: true }
    }
  ]
}

export default examsRouter
