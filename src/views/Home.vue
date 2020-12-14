<template>
  <v-app>
    <v-img src="../assets/background.jpg" :height="isMobile ? '' : '100vh'">
      <v-container class="justify-center align-center fill-height">
        <v-container>
          <v-card max-width="900" class="rounded-xl mx-auto" light>
            <div
              class="d-flex flex-column justify-center align-center"
              style="height: 100%"
            >
              <div
                class="nanum py-10 text-center korean-text"
                :class="isMobile ? 'h6' : 'h4'"
              >
                <span class="font-weight-black"> 영.어. </span>
                <span style="color: #262626" class="font-weight-regular">
                  가 어려운이유 이제 아셔야 합니다.
                </span>
              </div>
              <v-carousel
                :show-arrows="false"
                dark
                :continuous="false"
                touchless
                class="rounded-bl-xl rounded-br-xl"
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
                          @click="carousel = carousel + 1"
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
                          @click="carousel = carousel + 1"
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
              </v-carousel>
            </div>
          </v-card>
        </v-container>
      </v-container>
    </v-img>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      screenWidth: "",
      isMobile: false,
      carousel: null,
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
          question: `<span class="font-weight-bold h5">Q. </span> 동영상 강의, 학원 수강을 해 봤는데 스피킹 실력이 별로 늘지 않은 경험이 있으신가요 ?`,
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
