var panorama, viewer, container, infospot, controlButton, videoButton;
var pointsEarned = 0;
var controlIndex = PANOLENS.CONTROLS.ORBIT;
var modeIndex = 0;
var videoPlaying = false;

container = document.querySelector("#container");
controlButton = document.querySelector("#controlButton");
videoButton = document.querySelector("#videoButton");

panorama = new PANOLENS.ImagePanorama("./equirectangular.jpg");

infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);

infospot.addEventListener("click", function () {
	pointsEarned = pointsEarned + 10;
	console.log(pointsEarned);

  document.getElementById("points").className = "points pop-outin"
	document.getElementById("pointsEarned").innerHTML = pointsEarned;
	document.getElementById("confeti").style.display = "block";
	
  setTimeout(() => {
		document.getElementById("confeti").style.display = "none";
    document.getElementById("points").className = "points"
	}, 2000);
});

panorama.add(infospot);

viewer = new PANOLENS.Viewer({container: container});
viewer.add(panorama);

// Method to trigger control
controlButton.addEventListener("click", function () {
	controlIndex = controlIndex >= 1 ? 0 : controlIndex + 1;
	switch (controlIndex) {
		case 0:
			viewer.enableControl(PANOLENS.CONTROLS.ORBIT);
			break;
		case 1:
			viewer.enableControl(PANOLENS.CONTROLS.DEVICEORIENTATION);
			break;
		default:
			break;
	}
});
