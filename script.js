var panorama,
  viewer,
  container,
  infospot,
  infospot2,
  controlButton,
  videoButton;
var pointsEarned = 0;
var controlIndex = PANOLENS.CONTROLS.ORBIT;
var modeIndex = 0;
var videoPlaying = false;

var infospots = [];

container = document.querySelector("#container");
controlButton = document.querySelector("#controlButton");
videoButton = document.querySelector("#videoButton");

panorama = new PANOLENS.ImagePanorama("./equirectangular.jpg");

// infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
// infospot.position.set(0, -2000, -5000);

// infospot2 = new PANOLENS.Infospot(
//   500,
//   "https://images-na.ssl-images-amazon.com/images/I/61mtx+420hL._AC_US436_QL65_.jpg"
// );
// infospot2.position.set(0, -1000, -5000);

// panorama.add(infospot, infospot2);

viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);

// infospot.addEventListener("click", function () {
//   pointsEarned = pointsEarned + 10;
//   infospot2.material.opacity = 0;

//   document.getElementById("points").className = "points pop-outin";
//   document.getElementById("pointsEarned").innerHTML = pointsEarned;
//   document.getElementById("confeti").style.display = "block";

//   setTimeout(() => {
//     document.getElementById("confeti").style.display = "none";
//     document.getElementById("points").className = "points";
//   }, 2000);
// });

// infospot2.addEventListener("click", function () {
//   pointsEarned = pointsEarned + 10;
//   console.log(pointsEarned);

//   document.getElementById("points").className = "points pop-outin";
//   document.getElementById("pointsEarned").innerHTML = pointsEarned;
//   document.getElementById("confeti").style.display = "block";

//   setTimeout(() => {
//     document.getElementById("confeti").style.display = "none";
//     document.getElementById("points").className = "points";
//   }, 2000);
// });

// Method to trigger control
// controlButton.addEventListener("click", function () {
//   controlIndex = controlIndex >= 1 ? 0 : controlIndex + 1;
//   switch (controlIndex) {
//     case 0:
//       viewer.enableControl(PANOLENS.CONTROLS.ORBIT);
//       break;
//     case 1:
//       viewer.enableControl(PANOLENS.CONTROLS.DEVICEORIENTATION);
//       break;
//     default:
//       break;
//   }
// });

function show1() {
  document.getElementById("c").hidden = true;
  document.getElementById("i").hidden = false;

  pointsEarned = pointsEarned + 10;
  document.getElementById("pointsEarned").innerHTML = pointsEarned;
}

function show2() {
  document.getElementById("i").hidden = true;
  document.getElementById("r").hidden = false;

  pointsEarned = pointsEarned + 10;
  document.getElementById("pointsEarned").innerHTML = pointsEarned;
}

function show3() {
  document.getElementById("r").hidden = true;
  document.getElementById("cc").hidden = false;

  pointsEarned = pointsEarned + 10;
  document.getElementById("pointsEarned").innerHTML = pointsEarned;
}

function show4() {
  document.getElementById("cc").hidden = true;
  document.getElementById("l").hidden = false;
  pointsEarned = pointsEarned + 10;
  document.getElementById("pointsEarned").innerHTML = pointsEarned;
}

function show5() {
  document.getElementById("l").hidden = true;
  document.getElementById("e").hidden = false;

  pointsEarned = pointsEarned + 10;
  document.getElementById("pointsEarned").innerHTML = pointsEarned;
}

function show6() {
  document.getElementById("e").hidden = true;
  document.getElementById("c").hidden = false;

  pointsEarned = pointsEarned + 10;
  document.getElementById("pointsEarned").innerHTML = pointsEarned;
}
