import './styles/main.scss';

let container, scene, camera, renderer, controls, stats, mesh;

init();
animate();

function init() {
  // SCENE
  scene = new THREE.Scene();

  // CAMERA
  const {innerWidth, innerHeight} = window;
  const VIEW_ANGLE = 45;
  const ASPECT = innerWidth / innerHeight;
  const NEAR = 0.1;
  const FAR = 20000;

  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  scene.add(camera);
  camera.position.set(0, 75, 500);
  camera.lookAt(scene.position);

  // RENDERER
  if (Detector.webgl) {
    renderer = new THREE.WebGLRenderer({antialias: true});
  } else {
    renderer = new THREE.CanvasRenderer();
  }

  renderer.setSize(innerWidth, innerHeight);
  container = document.getElementById('threejs-container');
  container.appendChild(renderer.domElement);

  // EVENTS
  THREEx.WindowResize(renderer, camera);
  THREEx.FullScreen.bindKey({charCode: 'm'.charCodeAt(0)});

  // CONTROLS
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  // STATS
  stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.bottom = '0px';
  stats.domElement.style.zIndex = 100;
  container.appendChild(stats.domElement);

  // LIGHT
  const light = new THREE.PointLight(0xffffff);
  light.position.set(100, 100, 300);
  scene.add(light);

  // SKYBOX
  const imagePrefix = 'static/img/skybox-';
  const directions = ['xpos', 'xneg', 'ypos', 'yneg', 'zpos', 'zneg'];
  const imageSuffix = '.png';
  const skyGeometry = new THREE.CubeGeometry(5000, 5000, 5000);

  const materialArray = [];
  for (let i = 0; i < 6; i++) {
    materialArray.push(new THREE.MeshBasicMaterial({
      map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
      side: THREE.BackSide,
    }));
  }

  const skyMaterial = new THREE.MeshFaceMaterial(materialArray);
  const skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
  scene.add(skyBox);

  const geometry = new THREE.SphereGeometry(30, 32, 16);

  const material = new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture(
      'static/img/lol.png',
      THREE.SphericalRefractionMapping
    ),
  });
  mesh = new THREE.Mesh(geometry, material);
  mesh.scale.set(2, 2, 2);
  mesh.position.set(0, 10, 0);
  scene.add(mesh);

  // SUPER SIMPLE GLOW EFFECT
  // use sprite because it appears the same from all angles
  const spriteMaterial = new THREE.SpriteMaterial({
    map: new THREE.ImageUtils.loadTexture('static/img/glow.png'),
    useScreenCoordinates: false,
    alignment: THREE.SpriteAlignment.center,
    color: 0xFFFFCC,
    transparent: false,
    blending: THREE.AdditiveBlending,
  });

  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(200, 200, 1.0);
  mesh.add(sprite); // this centers the glow at the mesh
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x = (23.5 / 180) * Math.PI;
  mesh.rotation.y = Date.now() * 0.001;

  render();
  update();
}

function update() {
  controls.update();
  stats.update();
}

function render() {
  renderer.render(scene, camera);
}
