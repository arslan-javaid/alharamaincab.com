<template>
  <!-- Animated background -->
  <div id="animated-background">
    <!-- Overlay content -->
    <div class="overlay">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <h1 class="display-4">Coming Soon</h1>
            <p class="lead">We are working hard to bring you the best taxi and hotel services for Umrah in Saudi Arabia.</p>
            <img src="media/img/4.png" class="cars"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "ComingSoonPage"
  };
  </script>
  
  <style scoped>
  
    h1 {
      font-size: 4rem;
      color: #fff;
      margin-bottom: 20px;
      animation: text-flicker 2s infinite;
    }

    p {
      font-size: 1.5rem;
      color: #fff;
      animation: text-bounce 2s infinite;
    }

  #animated-background {
      position: relative;
      height: 100%;
      background-image: url("../../../public/media/img/3.jpg");
      background-size: cover;
      overflow: hidden;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .overlay h1 {
      font-size: 4rem;
      color: #fff;
      margin-bottom: 20px;
      animation: text-flicker 2s infinite;
    }

    .overlay p {
      font-size: 1.5rem;
      color: #fff;
      animation: text-bounce 2s infinite;
    }
    .cars {
      width: 700px;
    }

    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes text-flicker {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes text-bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  
  </style>
  