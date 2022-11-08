const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


let camera_pivot = new THREE.Object3D();


//Axis of Rotation
let Y_AXIS = new THREE.Vector3(0, 1, 0);
let X_AXIS = new THREE.Vector3(1, 0, 0);
let Z_AXIS = new THREE.Vector3(0, 0, 1);


scene.add(camera_pivot);
camera_pivot.add(camera);


//For testing
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
let axesHelpOn = true;
/////



const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xD3D3D3, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


camera.position.z = 5;








//lighting
var light = new THREE.DirectionalLight(0x404040, 3);
light.position.z = 4.9;
scene.add(light);
camera_pivot.add(light);




//Key Commands
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37: //Left Key

      camera_pivot.rotateOnAxis(Y_AXIS, -0.05);

      break;
    case 38:// Up Key

      camera_pivot.rotateOnAxis(X_AXIS, 0.05);

      break;

    case 39: // Right Key

      camera_pivot.rotateOnAxis(Y_AXIS, 0.05);

      break;


    case 40: // Down Key

      camera_pivot.rotateOnAxis(X_AXIS, -0.05);

      break;

    case 65: // "a"
      if (axesHelpOn == true) {
        scene.remove(axesHelper);
        axesHelpOn = false;

      }
      else {
        scene.add(axesHelper);
        axesHelpOn = true;

      }
      break;


    case 69: // "e"

      camera_pivot.rotateOnAxis(Z_AXIS, -0.05);

      break;

    case 82: // "r"

      camera_pivot.rotateOnAxis(Z_AXIS, 0.05);

  }


};




function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  animate();
}


addEventListener('resize', (event) => {

  onWindowResize();
});


//Renders the scene

function animate() {
  requestAnimationFrame(animate);


  renderer.render(scene, camera, light);
};
animate();
