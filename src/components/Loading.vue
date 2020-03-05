<template>
  <div class="loading">
    <div class="loading__content">
      <span>L</span>
      <span>o</span>
      <span>a</span>
      <span>d</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class UsersList extends Vue {}
</script>

<style>
.loading {
  position: fixed;
  /* background-color: #e2e2e2c7; */
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
}

.loading__content {
  font-family: Arial, Tahoma;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 10;

  display: flex;

  box-pack: center;
  -o-box-pack: center;
  -ms-box-pack: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  justify-content: center;
  -o-justify-content: center;
  -ms-justify-content: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  box-align: center;
  -o-box-align: center;
  -ms-box-align: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  align-items: center;
  -o-align-items: center;
  -ms-align-items: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  perspective: 500px;
  -o-perspective: 500px;
  -ms-perspective: 500px;
  -webkit-perspective: 500px;
  -moz-perspective: 500px;
  overflow: hidden;
  animation: wobble 5s ease-in-out infinite;
  -o-animation: wobble 5s ease-in-out infinite;
  -ms-animation: wobble 5s ease-in-out infinite;
  -webkit-animation: wobble 5s ease-in-out infinite;
  -moz-animation: wobble 5s ease-in-out infinite;
  padding-bottom: 2em;
}

.cssload-preloader > span {
  font-size: 50px;
  animation: 5s ease-in-out infinite;
  -o-animation: 5s ease-in-out infinite;
  -ms-animation: 5s ease-in-out infinite;
  -webkit-animation: 5s ease-in-out infinite;
  -moz-animation: 5s ease-in-out infinite;
  color: transparent;
  text-shadow: 0 0 0px #000;
}
span:nth-child(-n + 3) {
  animation-delay: -2.5s;
  -o-animation-delay: -2.5s;
  -ms-animation-delay: -2.5s;
  -webkit-animation-delay: -2.5s;
  -moz-animation-delay: -2.5s;
}

span:nth-child(1),
span:nth-last-child(1) {
  animation-name: blur-1;
  -o-animation-name: blur-1;
  -ms-animation-name: blur-1;
  -webkit-animation-name: blur-1;
  -moz-animation-name: blur-1;
}

span:nth-child(2),
span:nth-last-child(2) {
  animation-name: blur-2;
  -o-animation-name: blur-2;
  -ms-animation-name: blur-2;
  -webkit-animation-name: blur-2;
  -moz-animation-name: blur-2;
}

span:nth-child(3),
span:nth-last-child(3) {
  animation-name: blur-3;
  -o-animation-name: blur-3;
  -ms-animation-name: blur-3;
  -webkit-animation-name: blur-3;
  -moz-animation-name: blur-3;
}

@keyframes blur-1 {
  50% {
    text-shadow: 0 0 0.15em #000;
  }
}

@-o-keyframes blur-1 {
  50% {
    text-shadow: 0 0 0.15em #000;
  }
}

@-ms-keyframes blur-1 {
  50% {
    text-shadow: 0 0 0.15em #000;
  }
}

@-webkit-keyframes blur-1 {
  50% {
    text-shadow: 0 0 0.15em #000;
  }
}

@-moz-keyframes blur-1 {
  50% {
    text-shadow: 0 0 0.15em #000;
  }
}

@keyframes blur-2 {
  50% {
    text-shadow: 0 0 0.075em #000;
  }
}

@-o-keyframes blur-2 {
  50% {
    text-shadow: 0 0 0.075em #000;
  }
}

@-ms-keyframes blur-2 {
  50% {
    text-shadow: 0 0 0.075em #000;
  }
}

@-webkit-keyframes blur-2 {
  50% {
    text-shadow: 0 0 0.075em #000;
  }
}

@-moz-keyframes blur-2 {
  50% {
    text-shadow: 0 0 0.075em #000;
  }
}

@keyframes blur-3 {
  50% {
    text-shadow: 0 0 0.05em #000;
  }
}

@-o-keyframes blur-3 {
  50% {
    text-shadow: 0 0 0.05em #000;
  }
}

@-ms-keyframes blur-3 {
  50% {
    text-shadow: 0 0 0.05em #000;
  }
}

@-webkit-keyframes blur-3 {
  50% {
    text-shadow: 0 0 0.05em #000;
  }
}

@-moz-keyframes blur-3 {
  50% {
    text-shadow: 0 0 0.05em #000;
  }
}

@keyframes wobble {
  from,
  to {
    transform: rotateY(-45deg);
  }
  50% {
    transform: rotateY(45deg);
  }
}

@-o-keyframes wobble {
  from,
  to {
    -o-transform: rotateY(-45deg);
  }
  50% {
    -o-transform: rotateY(45deg);
  }
}

@-ms-keyframes wobble {
  from,
  to {
    -ms-transform: rotateY(-45deg);
  }
  50% {
    -ms-transform: rotateY(45deg);
  }
}

@-webkit-keyframes wobble {
  from,
  to {
    -webkit-transform: rotateY(-45deg);
  }
  50% {
    -webkit-transform: rotateY(45deg);
  }
}

@-moz-keyframes wobble {
  from,
  to {
    -moz-transform: rotateY(-45deg);
  }
  50% {
    -moz-transform: rotateY(45deg);
  }
}
</style>
