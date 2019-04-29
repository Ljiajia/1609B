<template>
  <!-- $t is vue-i18n global function to translate lang -->
  <div class="app-container">
    <div>
      <FilenameOption v-model="filename" />
      <AutoWidthOption v-model="autoWidth" />
      <BookTypeOption v-model="bookType" />
      <el-button :loading="downloadLoading" style="margin:0 0 20px 20px;" type="primary" icon="document" @click="handleDownload">
        {{ $t('excel.export') }} Excel
      </el-button>
      <a href="https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html" target="_blank" style="margin-left:15px;">
        <el-tag type="info">Documentation</el-tag>
      </a>
    </div>
    <el-table v-loading="listLoading" :data="list" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label="Id" width="95">
        <template slot-scope="scope">
            {{ scope.$index }}
</template>
      </el-table-column>
      <el-table-column label="Title">
<template slot-scope="scope">
   {{ scope.row.title }}
</template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
<template slot-scope="scope">
  <el-tag>
    {{ scope.row.author }}</el-tag>
</template>
      </el-table-column>
      <el-table-column label="Readings" width="115" align="center">
<template slot-scope="scope">
   {{ scope.row.pageviews }}
</template>
      </el-table-column>
      <el-table-column align="center" label="Date" width="220">
<template slot-scope="scope">
  <i class="el-icon-time" />
  <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {
    fetchList
  } from '@/api/article'
  import {
    parseTime
  } from '@/utils'
  // options components
  import FilenameOption from './components/FilenameOption'
  import AutoWidthOption from './components/AutoWidthOption'
  import BookTypeOption from './components/BookTypeOption'
  export default {
    name: 'ExportExcel',
    components: {
      FilenameOption,
      AutoWidthOption,
      BookTypeOption
    },
    data() {
      return {
        list: null,
        listLoading: true,
        downloadLoading: false,
        filename: '',
        autoWidth: true,
        bookType: 'xlsx'
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        fetchList().then(response => {
          response = {}
          console.log('response...', response);
          response.data = {
            "total": 10,
            "items": [{
                "id": 1,
                "timestamp": 204683198844,
                "author": "Larry",
                "reviewer": "Helen",
                "title": "Hnngv Gfctot Rschix Mxgqpb Kezfcicaw Govqcyj",
                "content_short": "mock data",
                "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 6.62,
                "importance": 1,
                "type": "JP",
                "status": "published",
                "display_time": "1997-06-30 06:19:36",
                "comment_disabled": true,
                "pageviews": 1283,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                  "a-platform"
                ]
              },
              {
                "id": 2,
                "timestamp": 604919183451,
                "author": "George",
                "reviewer": "Timothy",
                "title": "Njpd Fdsvjqe Ktghdnsep Zxoxergbg Vnquwnw Siifgjr",
                "content_short": "mock data",
                "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 9.57,
                "importance": 2,
                "type": "EU",
                "status": "draft",
                "display_time": "2008-04-17 12:23:14",
                "comment_disabled": true,
                "pageviews": 3726,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                  "a-platform"
                ]
              },
              {
                "id": 3,
                "timestamp": 1446357934661,
                "author": "Amy",
                "reviewer": "Robert",
                "title": "Guhwd Zfxqj Spfoxnjuih Vkyebbx Lygfwqjuc Myj Qnd Ovrhiygxz",
                "content_short": "mock data",
                "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 59.26,
                "importance": 3,
                "type": "JP",
                "status": "deleted",
                "display_time": "2018-09-28 04:44:55",
                "comment_disabled": true,
                "pageviews": 2959,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                  "a-platform"
                ]
              },
              {
                "id": 4,
                "timestamp": 892374154453,
                "author": "Donna",
                "reviewer": "Paul",
                "title": "Oxshvb Dbok Imque Cmesglge Tij Qcpeu",
                "content_short": "mock data",
                "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 74.64,
                "importance": 2,
                "type": "CN",
                "status": "published",
                "display_time": "1977-08-20 18:51:51",
                "comment_disabled": true,
                "pageviews": 3951,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                  "a-platform"
                ]
              },
              {
                "id": 5,
                "timestamp": 106507748239,
                "author": "Melissa",
                "reviewer": "Helen",
                "title": "Lcjdxj Esiwv Jbtf Nhra Iioafuodgi",
                "content_short": "mock data",
                "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 24.68,
                "importance": 3,
                "type": "CN",
                "status": "draft",
                "display_time": "1995-04-10 07:10:13",
                "comment_disabled": true,
                "pageviews": 2570,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                  "a-platform"
                ]
              },
              {
                "id": 6,
                "timestamp": 1091000759110,
                "author": "Brian",
                "reviewer": "Carol",
                "title": "Jihgoq Rhxeblqe Vfak Idxsudz Vqssc Uuchgsu",
                "content_short": "mock data",
                "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 36.95,
                "importance": 3,
                "type": "CN",
                "status": "published",
                "display_time": "1993-07-01 19:57:30",
                "comment_disabled": true,
                "pageviews": 849,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                  "a-platform"
                ]
              },
              {
                "id": 7,
                "timestamp": 798299320204,
                "author": "Gary",
                "reviewer": "Eric",
                "title": "Nlwt Gyepj Ljxtf Okwawrqhjk Eusb Uogfni Vpxx Niwbcqz",
                "content_short": "mock data",
                "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 76.83,
                "importance": 2,
                "type": "EU",
                "status": "draft",
                "display_time": "1995-12-27 03:47:51",
                "comment_disabled": true,
                "pageviews": 4909,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                  "a-platform"
                ]
              },
              {
                "id": 8,
                "timestamp": 404410341103,
                "author": "Angela",
                "reviewer": "Charles",
                "title": "Wampcsnwt Lehuxqtz Yubdhi Tjfaybmdc Wovvvt",
                "content_short": "mock data",
                "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 46.65,
                "importance": 1,
                "type": "JP",
                "status": "draft",
                "display_time": "1994-10-02 19:25:39",
                "comment_disabled": true,
                "pageviews": 946,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                  "a-platform"
                ]
              },
              {
                "id": 9,
                "timestamp": 1229732344074,
                "author": "Kevin",
                "reviewer": "Brenda",
                "title": "Pxrlf Vbeil Pstioy Emhc Qswov",
                "content_short": "mock data",
                "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 16.34,
                "importance": 2,
                "type": "EU",
                "status": "draft",
                "display_time": "1993-12-10 01:44:29",
                "comment_disabled": true,
                "pageviews": 4357,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                  "a-platform"
                ]
              },
              {
                "id": 10,
                "timestamp": 1268841948124,
                "author": "Mary",
                "reviewer": "Larry",
                "title": "Exjlpn Tilx Sxsbeir Kbvdxhr Brc Ilfxnwrx Krdbetjxh Gpmy Jyafwubugq Ojots",
                "content_short": "mock data",
                "content": "<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 52.54,
                "importance": 2,
                "type": "CN",
                "status": "draft",
                "display_time": "2001-09-04 21:20:32",
                "comment_disabled": true,
                "pageviews": 1476,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                  "a-platform"
                ]
              }
            ]
          }
          this.list = response.data.items
          this.listLoading = false
        })
      },
      handleDownload() {
        this.downloadLoading = true
        import ('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
          const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
          const list = this.list
          const data = this.formatJson(filterVal, list)
          console.log(tHeader, data);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: this.filename,
            autoWidth: this.autoWidth,
            bookType: this.bookType
          })
          this.downloadLoading = false
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        }))
      }
    }
  }
</script>

<style>
  .radio-label {
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 30px;
  }
</style>
