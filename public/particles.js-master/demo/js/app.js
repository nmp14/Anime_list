/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 95,
        "density": {
          "enable": true,
          "value_area": 1262.6362266116362
        }
      },
      "color": {
        "value": "#18c1e6"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 6,
          "color": "#9236c5"
        },
        "polygon": {
          "nb_sides": 8
        },
      },
      "opacity": {
        "value": 0.5997522076405273,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.23976023976023975,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 14.385614385614385,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 599.7522076405273,
        "color": "#e42ff0",
        "opacity": 0.7575817359669818,
        "width": 0.6313181133058181
      },
      "move": {
        "enable": true,
        "speed": 14.204657549380908,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 473.4885849793636,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
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
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
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

);