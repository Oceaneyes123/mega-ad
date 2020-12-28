<template>
  <v-app>
    <v-card dark flat tile height="100%">
      <v-card height="60px" color="#3089FF"></v-card>
      <v-container class="justify-center align-center px-0" fluid>
        <div class="d-flex flex-column justify-center align-center" width="100%" style="height:200px;">
            <div
              class="nanum text-center korean-text"
              :class="isMobile ? 'h5' : 'h4'"
              v-if="carousel == 0"
            >
              <span class="font-weight-black" style="font-size: larger">
                영.어.
              </span>
              <span class="font-weight-regular grey--text text--lighten-1">
                어려운 이유
              </span>
              <br>
              <span class="font-weight-regular grey--text text--lighten-1">이제 아셔야 합니다.</span>
            </div>
            <div
              class="nanum py-10 text-center korean-text"
              :class="isMobile ? 'h5' : 'h4'"
              v-if="carousel == 1"

            >
              <span class="font-weight-black" style="font-size: larger">
                스피킹!
              </span>
              <span class="font-weight-regular grey--text text--lighten-1">잘못된 방법으로</span>
              <br>
              <span class="font-weight-regular grey--text text--lighten-1">
                공부하시지 않으셨나요?
              </span>
            </div>
            <div
              class="nanum py-10 text-center korean-text"
              :class="isMobile ? 'h5' : 'h4'"
              v-if="carousel == 2"

            >
              <span class="font-weight-black" style="font-size: larger">
                스피킹
              </span>
              <span class="font-weight-regular grey--text text--lighten-1">실력이</span>
              <br>
              <span class="font-weight-regular grey--text text--lighten-1">
                좀처럼 늘지 않으시나요?
              </span>
            </div>
            <div v-else>

            </div>
        </div>

        <v-container class="px-0">
          <v-card max-width="900" class="mx-auto" :class="{'rounded-xl':!isMobile}" light>
            <div
              class="d-flex flex-column justify-center align-center"
              style="height: 100%"
            >
                <v-card-text class="d-flex justify-center align-center" style="height:400px; background:#3089FF">
                    <div style="color: #d6d6d6" height="100%" v-for="(item, i) in survey" :key="i">
                      <div v-if="carousel==i">
                        <div
                          :class="isMobile ? 'h6' : 'h5'"
                          class="text-center nanum mb-10 korean-text font-weight-light white--text"
                          style="height:60px"
                          v-html="item.question"

                        ></div>
                        <div class="d-flex justify-center">
                          <div
                            class="mr-7 d-flex flex-column"
                            @click="
                              carousel == 2
                                ? $router.push('/advertisement')
                                : (carousel = carousel + 1)
                            "
                          >
                            <v-hover v-slot="{ hover }">
                              <v-icon
                                color="white"
                                style="font-size: 60px"
                                :class="{ 'on-hover': hover }"
                                >{{
                                  hover
                                    ? "fas fa-check-circle"
                                    : "far fa-check-circle"
                                }}</v-icon
                              >
                            </v-hover>
                            <div class="mt-3 white--text text-center">{{ item.answer1 }}</div>
                          </div>
                          <div
                            class="ml-7 d-flex flex-column"
                            @click="
                              carousel == 2
                                ? $router.push('/advertisement')
                                : (carousel = carousel + 1)
                            "
                          >
                            <v-hover v-slot="{ hover }">
                              <v-icon
                                color="white"
                                style="font-size: 60px"
                                :class="{ 'on-hover': hover }"
                                >{{
                                  hover
                                    ? "fas fa-check-circle"
                                    : "far fa-check-circle"
                                }}</v-icon
                              >
                            </v-hover>
                            <div class="mt-3 white--text text-center">{{ item.answer2 }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                </v-card-text>

              <!-- <v-carousel
                :show-arrows="false"
                dark
                :continuous="false"
                touchless
                :class="{'rounded-xl':!isMobile}"
                v-model="carousel"
              >
                <v-carousel-item v-for="(item, i) in survey" :key="i">
                  <v-card
                    color="blue darken-1"
                    height="100%"
                    class="d-flex justify-center align-center"
                    tile
                  >
                    <div style="color: #d6d6d6">
                      <div
                        :class="isMobile ? '' : 'h5'"
                        class="text-center nanum mb-10 korean-text font-weight-light"
                        v-html="item.question"
                      ></div>
                      <div class="d-flex justify-center">
                        <div
                          class="mr-7 d-flex flex-column"
                          @click="
                            carousel == 2
                              ? $router.push('/advertisement')
                              : (carousel = carousel + 1)
                          "
                        >
                          <v-hover v-slot="{ hover }">
                            <v-icon
                              color="white"
                              style="font-size: 60px"
                              :class="{ 'on-hover': hover }"
                              >{{
                                hover
                                  ? "fas fa-check-circle"
                                  : "far fa-check-circle"
                              }}</v-icon
                            >
                          </v-hover>
                          <div class="mt-3 white--text">{{ item.answer1 }}</div>
                        </div>
                        <div
                          class="ml-7 d-flex flex-column"
                          @click="
                            carousel == 2
                              ? $router.push('/advertisement')
                              : (carousel = carousel + 1)
                          "
                        >
                          <v-hover v-slot="{ hover }">
                            <v-icon
                              color="white"
                              style="font-size: 60px"
                              :class="{ 'on-hover': hover }"
                              >{{
                                hover
                                  ? "fas fa-check-circle"
                                  : "far fa-check-circle"
                              }}</v-icon
                            >
                          </v-hover>
                          <div class="mt-3 white--text">{{ item.answer2 }}</div>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-carousel-item>
              </v-carousel> -->

            </div>
          </v-card>
        </v-container>
      </v-container>
      <div style="
          position: fixed;
          bottom: 0;
          width: 100%;
          text-align: center;"
          class="pb-2"
      >
        <div
         class="pa-2 blue blue rounded-circle d-inline-block"
          v-for="item in [0,1,2]"
          :key="item"
          :class="{'mr-2': item!=2, 'lighten-3': carousel != item }"
        ></div>
      </div>

    </v-card>
  </v-app>
</template>

<script>
// import AOS from "aos";
// import "aos/dist/aos.css";

export default {
  data() {
    return {
      screenWidth: "",
      isMobile: false,
      carousel: 0,
      survey: [
        {
          question: `<span class="font-weight-bold h5">Q. </span>동영상 강의, 학원 수강을 해 봤는데 스피킹 실력이 별로 늘지 않은 경험이 있으신가요 ?`,
          answer1: "그렇다",
          answer2: "그런 적 없다"
        },
        {
          question: `<span class="font-weight-bold h5">Q. </span> 스피킹은 <span class="font-weight-bold white--text headline" >암묵기억</span>에 의존한다는 사실을  아시나요 ?`,
          answer1: "그렇다",
          answer2: "그렇지 않다"
        },
        {
          question: `<span class="font-weight-bold h5">Q. </span> 읽기, 쓰기, 듣기는 어느 정도 되는데 말하기가 잘 안되시나요?`,
          answer1: "그렇다",
          answer2: "그렇지 않다"
        }
      ]
    };
  },

  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;

  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    }
  }
};
</script>

<style>
#app {
  /* font-family: "Nanum Gothic", sans-serif; */
  font-family: "NanumSquare", sans-serif;
}
/* #app {
  font-family: "NanumSquare";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */

.text-purple {
  color: #5a55a1;
}

.text-dark-purple {
  color: #475ba4;
}

.icon-large {
  font-size: 48px;
}

.shadow {
  box-shadow: 0 4px 5px -2px rgba(179, 203, 240, 0.2),
    0 7px 10px 1px rgba(0, 0, 0, -0.86), 0 2px 16px 1px rgba(0, 0, 0, 0.12) !important;
}

.h1 {
  font-weight: 300;
  font-size: 6rem;
  letter-spacing: -0.09375rem;
}
.h2 {
  font-weight: 300;
  font-size: 3.75rem;
  letter-spacing: -0.03125rem;
}
.h3 {
  font-family: "GmarketSansGmarketSansBoldLight", sans-serif;
  font-weight: 400;
  font-size: 3rem;
  letter-spacing: normal;
}
.h4 {
  font-family: "GmarketSansBold", sans-serif;
  font-weight: 400;
  font-size: 2.125rem;
  letter-spacing: -0.015625remm;
}
.h5 {
  font-family: "GmarketSansBold", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: normal;
  line-break: strict;
  word-break: keep-all;
}
.h6 {
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0.009375rem;
}

.subtitle-text-1 {
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.009375rem;
}

.regular {
  font-weight: 400 !important;
}

.v-application .caption {
  font-family: unset;
}

.caption-text {
  font-family: "NanumSquare", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.025rem;
}

.nanum {
  font-family: "NanumSquare", sans-serif !important;
}

.gmarket {
  font-family: "GmarketSansBold", sans-serif !important;
}

.korean-text {
  word-break: keep-all;
  line-break: strict;
}

@font-face {
  font-family: "GmarketSansBold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
</style>
