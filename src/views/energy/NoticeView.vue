<template>
  <div class="page-sub">
    <div class="page-header pb-4">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </div>
    <div class="page-bg border-top h-100">
      <div class="page-container">
        <v-container>
          <v-row>
            <v-col>
              <div class="table-energy table-view">
                <div class="view-header">
                  <div class="view-title">
                    {{ noticedata.title }}
                  </div>
                  <div class="view-date">{{ noticedata.createdAt }}</div>
                </div>
                <div class="view-body">
                  <v-img
                    :src="noticedata.imageUrl"
                    contain
                    max-width="500"
                  ></v-img>
                  <p v-for="(c, index) in descriptionList" :key="`item-${index}`">
                      {{ c }} <br />
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-right">
              <v-btn
                outlined
                class="btn-outline-solid btn-secondary"
                to="energynotice"
              >
                목록
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: "NoticeView",
  components: {},
  data: () => ({
    noticedata: {
      title: "",
      description: "",
      createdAt: "",
      imageUrl:"",
    },
    descriptionList: [],
    
    breadcrumbs: [
      {
        text: "home",
        disabled: false,
        href: "main",
      },
      {
        text: "참여와소통",
        disabled: false,
        href: "energynotice",
      },
      {
        text: "복지 소식",
        disabled: true,
        href: "energynotice",
      },
    ],
  }),
  created() {
    this.init();
  },

  methods: {
    init(){
      try{
        axios.get('/api/notice/getSingle?id='+ this.$route.query.id)
          .then(response => {
            //console.log(response.data);
            this.noticedata = response.data;
            //console.log(this.noticedata.title);
            //this.noticedata.description = this.noticedata.description.replace("\n", "<br />");
            this.descriptionList = this.noticedata.description.split('\n');
          });
      } catch(err){
        console.log(err);
      }
    }
  },
};
</script>

<style lang="scss"></style>
