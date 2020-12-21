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
            data-aos="fade-down"
          >
            <span class="font-weight-black" style="font-size: larger">
              영.어.
            </span>
            <span style="color: #d6d6d6" class="font-weight-regular">
              가 어려운이유 이제 아셔야 합니다.
            </span>
          </div>
          <v-card
            class="d-flex flex-column pa-5 my-auto mx-auto rounded-xl"
            color="#FFFFFF2D"
            flat
          >
            <div
              class="d-flex align-center justify-center mb-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="h4 white--text mr-3">Q</div>
              <v-card color="blue" class="rounded-lg">
                <v-card-text class="h6 white--text korean-text">
                  장기 수강을 했는데도 실력이 늘지 않으셨나요 ?
                </v-card-text>
              </v-card>
            </div>
            <div
              class="d-flex align-center justify-center mb-5"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div class="h4 white--text mr-3">Q</div>
              <v-card color="blue" class="rounded-lg">
                <v-card-text class="h6 white--text korean-text">
                  광고를 보고 유명 사이트에서 수강을
                  <br v-if="!isMobile" />
                  했지만 얼마 못 가 포기하셨나요 ?
                </v-card-text>
              </v-card>
            </div>
            <div
              class="d-flex align-center justify-center mb-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
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
            <div class="h4 nanum font-weight-black" data-aos="flip-down">
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
        <div
          class="text-center white--text mb-10 korean-text"
          data-aos="fade-up"
        >
          <div class="h4 nanum font-weight-black">스피킹 안 되는 이유</div>
          <div class="h5 nanum font-weight-thin">
            메가토킹에서 알려드립니다.
          </div>
        </div>
        <v-container class="my-auto">
          <v-row>
            <v-col cols="12" md="4" class="mb-10 mb-md-5">
              <v-card
                color="blue"
                height="200"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <v-card
                  color="white"
                  class="h6 nanum pa-2 rounded-pill text-center font-weight-black"
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
                    <div class="font-weight-bold">외현기억</div>
                    <div>
                      필기시험을 치를 때 기억을 끄집어 내는 기억의 방식입니다.
                    </div>
                    <div class="mt-3 font-weight-bold">암묵기억</div>
                    <div>
                      운전, 악기연주와 같이 몸에 배인 기억의 방식입니다.
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" class="mb-10 mb-md-5">
              <v-card
                color="blue"
                height="200"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <v-card
                  color="white"
                  class="h6 nanum pa-2 rounded-pill text-center font-weight-black"
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
            <v-col cols="12" md="4" class="mb-10 mb-md-5">
              <v-card
                color="blue"
                height="200"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <v-card
                  color="white"
                  class="h6 nanum pa-2 rounded-pill text-center font-weight-black"
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
          <v-card class="pa-5 pa-md-10" color="#000000DF" flat height="100%">
            <div data-aos="fade-up">
              <div
                class="text-center font-weight-bold white--text"
                :class="isMobile ? 'h5' : 'h3'"
              >
                스피킹!
              </div>
              <div
                class="text-center h3 font-weight-bold white--text mb-10"
                :class="isMobile ? 'h5' : 'h3'"
              >
                어떻게 잘 할 수 있을까요 ?
              </div>
            </div>
            <div class="pa-0 pa-md-10">
              <div
                class="font-weight-bold white--text mb-3 mb-md-5"
                :class="isMobile ? 'h5' : 'h3'"
                data-aos="fade-right"
              >
                첫째,
              </div>
              <div
                class="font-weight-bold blue--text korean-text mb-10 mb-md-15 nanum text-center"
                :class="isMobile ? 'h6' : 'h4'"
                data-aos="zoom-in"
              >
                영어를 모국어로 사용하는 외국인과의 지속적인 스피킹 연습이
                필요합니다.
              </div>
              <div
                class="font-weight-bold white--text mb-3 mb-md-5"
                :class="isMobile ? 'h5' : 'h3'"
                data-aos="fade-right"
              >
                둘째,
              </div>
              <div
                class="font-weight-bold blue--text korean-text mb-10 mb-md-15 nanum text-center"
                :class="isMobile ? 'h6' : 'h4'"
                data-aos="zoom-in"
              >
                흥미로운 컨텐츠와 커리큘럼으로 살아있는 학습이 되도록 해야
                합니다.
              </div>
              <div
                class="font-weight-bold white--text mb-3 mb-md-5"
                :class="isMobile ? 'h5' : 'h3'"
                data-aos="fade-right"
              >
                셋째,
              </div>
              <div
                class="font-weight-bold blue--text korean-text mb-10 mb-md-15 nanum text-center"
                :class="isMobile ? 'h6' : 'h4'"
                data-aos="zoom-in"
              >
                지속적인 피드백을 받으며 잘못된 표현과 발음을 교정해 나가야
                합니다.
              </div>
              <div
                class="font-weight-bold white--text mb-3 mb-md-5"
                :class="isMobile ? 'h5' : 'h3'"
                data-aos="fade-right"
              >
                넷째,
              </div>
              <div
                class="font-weight-bold blue--text korean-text mb-10 nanum text-center"
                :class="isMobile ? 'h6' : 'h4'"
                data-aos="zoom-in"
              >
                오랜 기간 동안 검증되고 노하우가 있는 사이트를 이용해야 합니다.
              </div>
            </div>
          </v-card>
        </v-img>
        <v-img src="../assets/education.jpg">
          <v-card
            height="100%"
            color="#2282ceCF"
            class="pa-5 pa-md-10 d-flex flex-column"
          >
            <div data-aos="fade-up">
              <div
                class="text-center white--text font-weight-bold"
                :class="isMobile ? 'h5' : 'h3'"
              >
                최고의 강사!
              </div>
              <div
                class="text-center white--text font-weight-bold"
                :class="isMobile ? 'h5' : 'h3'"
              >
                메가토킹 선생님은 다릅니다.
              </div>
            </div>
            <v-container class="my-auto">
              <v-row>
                <v-col cols="12" md="4">
                  <div
                    class="d-flex flex-column justify-center align-center"
                    data-aos="zoom-in"
                    data-aos-duration="1400"
                  >
                    <v-img
                      src="../assets/abc-icon.png"
                      width="175"
                      class="mb-3"
                    ></v-img>
                    <div class="text-center h6">
                      TESOL 이수 <br />
                      <v-icon color="white">fas fa-arrow-right</v-icon> (
                      회사지원 프로그램 )
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="4">
                  <div
                    class="d-flex flex-column justify-center align-center"
                    data-aos="zoom-in"
                    data-aos-duration="1700"
                  >
                    <v-img
                      src="../assets/hands-icon.png"
                      width="175"
                      class="mb-3"
                    ></v-img>
                    <div class="white--text text-center h6 korean-text">
                      사회보장제도가입 <br />
                      건강보험, 주택기금가입 <br />
                      주치의제도 <br />
                      업계최고수준대우 <br />
                      노동청 규정준수
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="4">
                  <div
                    class="d-flex flex-column justify-center align-center"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <v-img
                      src="../assets/openbook-icon.png"
                      width="175"
                      class="mb-3"
                    ></v-img>
                    <div class="text-center h6">
                      훈련생 제도 <br />
                      신입 / 기존 <br />
                      강사교육 프로그램 <br />
                      재교육프로그램
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" sm="4">
                  <v-img
                    src="../assets/graphic.png"
                    width="400"
                    data-aos="zoom-in"
                    class="mx-auto"
                  >
                  </v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-img>
        <v-img src="../assets/training.jpg">
          <v-card
            height="100%"
            color="#2282ceDF"
            class="pa-5 pa-md-10 d-flex flex-column"
          >
            <div
              class="text-center white--text font-weight-bold korean-text nanum"
              :class="isMobile ? 'h5' : 'h3'"
            >
              편리한 학습현황!
            </div>
            <div
              class="text-center white--text font-weight-bold korean-text nanum mb-10"
              :class="isMobile ? 'h6' : 'h4'"
            >
              담당 강사로부터 수업녹음파일, 평가서 등을 보고 받을 수 있습니다.
            </div>
            <v-container class="my-auto">
              <v-row justify="center">
                <v-col cols="7">
                  <div class="d-flex flex-column flex-md-row">
                    <v-img
                      src="../assets/analyze-icon.png"
                      class="mr-md-5 mx-auto"
                      width="200"
                      :data-aos="isMobile ? 'zoom-in' : 'fade-right'"
                      data-aos-duration="1400"
                      contain
                    ></v-img>
                    <div
                      class="text-center text-md-left"
                      :data-aos="isMobile ? 'zoom-in' : 'fade-left'"
                      data-aos-duration="1400"
                    >
                      <div
                        class="korean-text mb-3 nanum font-weight-bold white--text"
                        :class="isMobile ? 'h6' : 'h4'"
                      >
                        디테일한 수강 정보
                      </div>
                      <div
                        class="white--text korean-text"
                        :class="isMobile ? '' : 'h6'"
                        :data-aos="isMobile ? 'zoom-in' : 'fade-left'"
                        data-aos-duration="1400"
                      >
                        학습자의 학습과정, 기간, 담당강사, 수업스케줄 및
                        교재정보 등을 보고하며 학습자는 수업홀드기능을 이용할 수
                        있습니다.
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col cols="7">
                  <div class="d-flex flex-column flex-md-row justify-center">
                    <v-img
                      src="../assets/abc2-icon.png"
                      width="200"
                      class="mr-md-5 mx-auto"
                      :data-aos="isMobile ? 'zoom-in' : 'fade-right'"
                      data-aos-duration="1400"
                      contain
                    ></v-img>
                    <div class="text-center text-md-left">
                      <div
                        class="korean-text mb-3 nanum font-weight-bold white--text"
                        :class="isMobile ? 'h6' : 'h4'"
                        :data-aos="isMobile ? 'zoom-in' : 'fade-left'"
                        data-aos-duration="1400"
                      >
                        다양한 컨텐츠
                      </div>
                      <div
                        class="white--text korean-text"
                        :class="isMobile ? '' : 'h6'"
                        :data-aos="isMobile ? 'zoom-in' : 'fade-left'"
                        data-aos-duration="1400"
                      >
                        별도의 교재구입 없이 자체 제공되는 교재를 이용하여
                        수업할 수 있으며 교재는 전자책 형태로 이용할 수
                        있습니다.
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col cols="7">
                  <div class="d-flex flex-column flex-md-row justify-center">
                    <v-img
                      src="../assets/calendar-icon.png"
                      width="200"
                      class="mr-md-5 mx-auto"
                      :data-aos="isMobile ? 'zoom-in' : 'fade-right'"
                      data-aos-duration="1400"
                      contain
                    ></v-img>
                    <div class="text-center text-md-left">
                      <div
                        class="korean-text mb-3 nanum font-weight-bold white--text"
                        :class="isMobile ? 'h6' : 'h4'"
                        :data-aos="isMobile ? 'zoom-in' : 'fade-left'"
                        data-aos-duration="1400"
                      >
                        수강 캘린더
                      </div>
                      <div
                        class="white--text korean-text"
                        :class="isMobile ? '' : 'h6'"
                        :data-aos="isMobile ? 'zoom-in' : 'fade-left'"
                        data-aos-duration="1400"
                      >
                        수강캘린더를 통해 학습자의 출석여부, 수업평가서를
                        확인하실 수 있습니다. 또한, 수업직후 업로드 되는
                        수업녹음파일을 실시간으로 확인하실 수 있습니다.
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-img>
        <v-img src="../assets/book.jpg">
          <v-card
            height="100%"
            color="#2196f3CF"
            class="pa-5 pa-md-10 d-flex flex-column"
          >
            <div
              class="text-center white--text font-weight-bold korean-text nanum"
              :class="isMobile ? 'h5' : 'h3'"
            >
              지금부터 외국인 선생님과 <br v-if="!isMobile" />
              즐거운 변화를 시작하세요.
            </div>
            <div class="text-center white--text h6 my-10">월 52,000원 부터</div>
            <div style="height: 100%">
              <iframe
                src="https://phone.megatalking.com/m_leveltest_add.htm"
                frameborder="0"
                width="100%"
                height="900"
              ></iframe>
            </div>
          </v-card>
        </v-img>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src

import AOS from "aos";
import "aos/dist/aos.css";

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
    AOS.init();
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
