<template>
  <v-app>
    <v-container class="py-0 px-0" :fluid="isMobile">
      <v-img src="../assets/bg1.jpg" :height="isMobile ? '' : '100vh'" contain>
        <v-card
          flat
          color="#000000CD"
          class="pa-5 pa-md-10 d-flex flex-column"
          :height="isMobile ? '' : '100vh'"
          tile
        >
          <div
            class="nanum py-10 text-center korean-text white--text"
            :class="isMobile ? 'h6' : 'h4'"
          >
            <span class="font-weight-black"> 영.어. </span>
            <span style="color: #d6d6d6" class="font-weight-regular">
              가 어려운이유 이제 아셔야 합니다.
            </span>
          </div>
          <v-card
            class="d-flex flex-column pa-5 my-auto mx-auto rounded-xl"
            color="#FFFFFF2D"
            flat
          >
            <div class="d-flex align-center justify-center mb-5">
              <div class="h4 white--text mr-3">Q</div>
              <v-card color="blue" class="rounded-lg">
                <v-card-text class="h6 white--text korean-text">
                  장기 수강을 했는데도 실력이 늘지 않으셨나요 ?
                </v-card-text>
              </v-card>
            </div>
            <div class="d-flex align-center justify-center mb-5">
              <div class="h4 white--text mr-3">Q</div>
              <v-card color="blue" class="rounded-lg">
                <v-card-text class="h6 white--text korean-text">
                  광고를 보고 유명 사이트에서 수강을
                  <br v-if="!isMobile" />
                  했지만 얼마 못 가 포기하셨나요 ?
                </v-card-text>
              </v-card>
            </div>
            <div class="d-flex align-center justify-center mb-5">
              <div class="h4 white--text mr-3">Q</div>
              <v-card color="blue" class="rounded-lg">
                <v-card-text class="h6 white--text korean-text">
                  일대일 수강을 하고 싶지만 <br v-if="!isMobile" />
                  너무 가격이 부담되셨나요?
                </v-card-text>
              </v-card>
            </div>
          </v-card>
          <div class="text-center mt-16 white--text korean-text">
            <div class="h4 nanum font-weight-black">
              왜? 스피킹 실력은 <br />
              잘 늘지 않을까요?
            </div>
          </div>
        </v-card>
      </v-img>
      <v-card
        color="blue"
        tile
        class="pt-10 d-flex flex-column"
        :height="!isMobile ? '700px' : ''"
      >
        <div class="text-center white--text mb-10 korean-text">
          <div class="h4 nanum font-weight-black">스피킹 안 되는 이유</div>
          <div class="h5 nanum font-weight-thin">
            메가토킹에서 알려드립니다.
          </div>
        </div>
        <v-container class="my-auto">
          <v-row>
            <v-col cols="12" md="4" class="mb-5">
              <v-card color="blue" height="200">
                <v-card
                  color="white"
                  class="h6 nanum pa-2 rounded-pill text-center"
                  style="
                    position: absolute;
                    top: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 70%;
                  "
                  >외현기억 VS 암묵기억
                </v-card>
                <div
                  style="border: 3px solid white; height: 100%"
                  class="pa-5 korean-text d-flex flex-column"
                >
                  <div class="my-auto">
                    <div class="font-weight-bold">다릅니다</div>
                    <div>의식할 순 없지만 내가 실력이 늘어나는 것</div>
                    <div class="mt-3 font-weight-bold">암묵기억</div>
                    <div>
                      운전, 악기연주와 같이 몸에 배인 기억의 방식입니다.
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" class="mb-5">
              <v-card color="blue" height="200">
                <v-card
                  color="white"
                  class="h6 nanum pa-2 rounded-pill text-center"
                  style="
                    position: absolute;
                    top: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 70%;
                  "
                >
                  스피킹은 ?
                </v-card>
                <div
                  style="border: 3px solid white; height: 100%"
                  class="pa-5 korean-text d-flex flex-column"
                >
                  <div class="my-auto text-center">
                    <div class="font-weight-bold">
                      영어를 온전히 구사하기 위해서는 영어자체가
                    </div>
                    <div class="mt-3">
                      <span class="font-weight-black" style="font-size: larger"
                        >암묵기억</span
                      >
                      으로 각인되어 있어야 합니다
                    </div>
                    <div>
                      필기시험을 잘 보더라도 스피킹이 잘 안 되는 이유입니다.
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" class="mb-5">
              <v-card color="blue" height="200">
                <v-card
                  color="white"
                  class="h6 nanum pa-2 rounded-pill text-center"
                  style="
                    position: absolute;
                    top: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 70%;
                  "
                >
                  왜 ?
                </v-card>
                <div
                  style="border: 3px solid white; height: 100%"
                  class="pa-5 korean-text d-flex flex-column"
                >
                  <div class="my-auto text-center">
                    <div class="font-weight-bold">
                      왜? 스피킹 실력이 좀처럼 늘지 않을까요?
                      <div class="mt-3">
                        <v-icon>fas fa-arrow-right</v-icon>
                        몸에 배이도록 하는
                      </div>
                      <div>효과적인 연습이 필요합니다</div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card tile>
        <v-img src="../assets/bg3.jpg">
          <v-card color="#000000CD" flat height="100%"> </v-card>
        </v-img>
      </v-card>
    </v-container>
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
