$(document).ready(function () {
  const particlesJSON = {
    "particles": {
      "number": {
        "value": 336,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.1
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

  particlesJS("particles-js", particlesJSON);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function startTimeSalam() {
    var ucapanSalam = "";
    var todaySalam = new Date();
    var hSalam = todaySalam.getHours();
    var mSalam = todaySalam.getMinutes();
    var sSalam = todaySalam.getSeconds();
    mSalam = checkTime(mSalam);
    sSalam = checkTime(sSalam);
    if (hSalam < 4) {
      ucapanSalam = "Good Night Sayang"
      kata1 = "Awas kalo masih melek";
      kata2 = "Semoga mimpi indah";
      kata3 = "Nite bby! ❤";
    } else {
      if (hSalam < 10) {
        ucapanSalam = "Morn Sayangku~"
        kata1 = "Jgn lupa sarapan yh";
        kata2 = "Smgt yh buat kegiatan today";
        kata3 = "Smg harimu menyenangkan, ehe!";
      } else {
        if (hSalam < 14) {
          ucapanSalam = "Selamat Siang Sayangkohh"
          kata1 = "Jgn lupa mkn siang";
          kata2 = "Makan yang banyakkk yh";
          kata3 = "Biar ttp smgt meneruskan ½ hari ini";
        } else {
          if (hSalam < 18) {
            ucapanSalam = "Selamat Sore y Beb"
            kata1 = "Sdh waktunya rehat n beberes nih";
            kata2 = "Kuharap km gk kecapekan yh";
            kata3 = "Take care dimanapun km berada! 🤗";
          } else {
            if (hSalam < 24) {
              ucapanSalam = "Malem Sayangkyu!"
              kata1 = "Tidur yg cukup, 8 jam lah y";
              kata2 = "Jangan terlalu larut malam";
              kata3 = "Janji lho yh, Nite! ❤";
            }
          }
        }
      }
    }
    // $(".salam").html(ucapanSalam);
    var typed = new Typed('h2', {
      strings: [ucapanSalam, kata1, kata2, kata3],
      smartBackspace: true,
      showCursor: 0,
      typeSpeed: 100,
    });
  }

  window.onload = startTimeSalam();
})
