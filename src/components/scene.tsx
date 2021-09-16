// import React, { Component } from 'react'
import React, {useCallback, useEffect} from 'react';
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import './App.css';
import {Grid} from "./grid-test.tsx";
import newpic from'./images/newpic2.jpg';



// @ts-ignore
// declare var THREE;

let camera: any;
let scene: any;
let renderer: any;
let isUserInteracting = false,
	lon = 0,
	lat = 0,
	phi = 0,
	theta = 0;
const distance = 500;
let onPointerDownPointerX = 0,
	onPointerDownPointerY = 0,
	onPointerDownLon = 0,
	onPointerDownLat = 0;

function Scene() {

	const onDocumentMouseDown = useCallback((event) => {
		event.preventDefault();
		isUserInteracting = true;
		onPointerDownPointerX = event.clientX;
		onPointerDownPointerY = event.clientY;
		onPointerDownLon = lon;
		onPointerDownLat = lat;
	}, []);

		const onWindowResize = useCallback((event) => {
   		camera.aspect = window.innerWidth / window.innerHeight;
    	camera.updateProjectionMatrix();
    	renderer.setSize(window.innerWidth, window.innerHeight);
	}, []);

	const onDocumentMouseMove = useCallback((event) => {
		if (isUserInteracting) {
			lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
			lat = (onPointerDownPointerY - event.clientY) * 0.1 + onPointerDownLat;
		}
	}, []);

	const onDocumentMouseUp = useCallback(() => {
		isUserInteracting = false;
	}, []);

	const init = useCallback(() => {
		console.log('init');
		/// 3D BACKGROUND CODE
		let container, mesh;
		container = document.getElementById('container');
		if (!container) {
			throw new Error('container div missing');
		}

		camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 2000);
		scene = new THREE.Scene();
		const geometry = new THREE.SphereBufferGeometry(500, 60, 40).toNonIndexed();
		// invert the geometry on the x-axis so that all of the faces point inward
		geometry.scale(-1, 1, 1);
		// Remap UVs
		const normals = geometry.attributes.normal.array;
		const uvs = geometry.attributes.uv.array;
		let i = 0;
		const l = normals.length / 3;
		for (; i < l; i++) {
			const x = normals[i * 3 + 0];
			const y = normals[i * 3 + 1];
			const z = normals[i * 3 + 2];
			let correction;
			if (i < l / 2) {
				correction = (x === 0 && z === 0) ? 1 : (Math.acos(y) / Math.sqrt(x * x + z * z)) * (2 / Math.PI);
				uvs[i * 2 + 0] = x * (404 / 1920) * correction + (447 / 1920);
				uvs[i * 2 + 1] = z * (404 / 1080) * correction + (582 / 1080);
			} else {
				correction = (x === 0 && z === 0) ? 1 : (Math.acos(-y) / Math.sqrt(x * x + z * z)) * (2 / Math.PI);
				uvs[i * 2 + 0] = -x * (404 / 1920) * correction + (1460 / 1920);
				uvs[i * 2 + 1] = z * (404 / 1080) * correction + (582 / 1080);
			}
		}
		geometry.rotateY(-Math.PI / 2);
		geometry.rotateZ(-Math.PI / 2);
		// geometry.rotateY(-Math.PI / 2);
		//
		const texture = new THREE.TextureLoader().load(newpic);
		texture.minFilter = THREE.LinearFilter;
		texture.format = THREE.RGBFormat;
		const material = new THREE.MeshBasicMaterial({
			map: texture
		});
		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);
		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);
		document.addEventListener('mousedown', onDocumentMouseDown, false);
		document.addEventListener('mousemove', onDocumentMouseMove, false);
		document.addEventListener('mouseup', onDocumentMouseUp, false);

		window.addEventListener('resize', onWindowResize, false);
		// document.addEventListener('wheel', onDocumentMouseWheel, false);

		// container.addEventListener('mousedown', onDocumentMouseDown, false);
		// container.addEventListener('mousemove', onDocumentMouseMove, false);
		// container.addEventListener('mouseup', onDocumentMouseUp, false);
		// container.addEventListener('wheel', onDocumentMouseWheel, false);
		//
		// window.addEventListener('resize', onWindowResize, false);

		/// CUBE / OBJECT CODE

		// var cubeGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
		// var cubeMaterial = new THREE.MeshLambertMaterial({
		// 	color: 'rgb(255,0,0)',
		// 	emissive: 0x200000
		// });
		// var geometry2 = new THREE.BoxGeometry(100, 100, 100);
		// var material2 = new THREE.MeshBasicMaterial({
		// 	color: 0x00ff00
		// });
		// var cube = new THREE.Mesh(geometry2, material2);
		//  scene.add(cube);
	}, []);

	

	const update = useCallback(() => {
		if (!isUserInteracting) {
			lon += 0.1;
		}

		lat = Math.max(-85, Math.min(85, lat));
		phi = THREE.Math.degToRad(90 - lat);
		theta = THREE.Math.degToRad(lon - 180);
		camera.position.x = distance * Math.sin(phi) * Math.cos(theta);
		camera.position.y = distance * Math.cos(phi);
		camera.position.z = distance * Math.sin(phi) * Math.sin(theta);
		camera.lookAt(scene.position);
		renderer.render(scene, camera);
	}, []);

	const animate = useCallback(() => {
		requestAnimationFrame(animate);
		update();
	}, [update]);

	useEffect(() => {
		init();
		animate();
	}, [init, animate]);

	return (
		<div className="App">
			<div id="container">
				<Grid/>
			</div>
		</div>
	);
}

export default Scene;



// class Scene extends Component {
//   constructor(props) {
//     super(props)

//     this.start = this.start.bind(this)
//     this.stop = this.stop.bind(this)
//     this.animate = this.animate.bind(this)
//   }

//   componentDidMount() {
      
//     const width = this.mount.clientWidth
//     const height = this.mount.clientHeight

//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(75, width / height,0.1, 1000)
//     const renderer = new THREE.WebGLRenderer({ antialias: true })
//     const geometry = new THREE.BoxGeometry(1, 1, 1)
//     const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
//     const cube = new THREE.Mesh(geometry, material)
    

//     camera.position.z = 4
//     scene.add(cube)
//     renderer.setClearColor('#000000')
//     renderer.setSize(width, height)

//     this.scene = scene
//     this.camera = camera
//     this.renderer = renderer
//     this.material = material
//     this.cube = cube
//     this.controls = new OrbitControls(this.camera, renderer.domElement);

//     this.mount.appendChild(this.renderer.domElement)
//     this.start()
//   }

//   componentWillUnmount() {
//     this.stop()
//     this.mount.removeChild(this.renderer.domElement)
//   }

//   start() {
//     if (!this.frameId) {
//       this.frameId = requestAnimationFrame(this.animate)
//     }
//   }

//   stop() {
//     cancelAnimationFrame(this.frameId)
//   }

//   animate() {
//     this.cube.rotation.x += 0.01
//     this.cube.rotation.y += 0.01

//     this.renderScene()
//     this.frameId = window.requestAnimationFrame(this.animate)
//   }

//   renderScene() {
//     this.renderer.render(this.scene, this.camera)
//   }

//   render() {
//     return (
//       <div
//         style={{ width: '100%', height: '100vh'}}
//         ref={(mount) => { this.mount = mount }}
//       />
//     )
//   }
// }

// export default Scene









// import React, { Component } from 'react'
// import * as THREE from 'three'
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


// class Scene extends Component {
//   constructor(props) {
//     super(props)

//     this.start = this.start.bind(this)
//     this.stop = this.stop.bind(this)
//     this.animate = this.animate.bind(this)
//   }

//   componentDidMount() {
      
//     const width = this.mount.clientWidth
//     const height = this.mount.clientHeight

//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(75, width / height,0.1, 1000)
//     const renderer = new THREE.WebGLRenderer({ antialias: true })
//     const geometry = new THREE.BoxGeometry(1, 1, 1)
//     const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
//     const cube = new THREE.Mesh(geometry, material)
    

//     camera.position.z = 4
//     scene.add(cube)
//     renderer.setClearColor('#000000')
//     renderer.setSize(width, height)

//     this.scene = scene
//     this.camera = camera
//     this.renderer = renderer
//     this.material = material
//     this.cube = cube
//     this.controls = new OrbitControls(this.camera, renderer.domElement);

//     this.mount.appendChild(this.renderer.domElement)
//     this.start()
//   }

//   componentWillUnmount() {
//     this.stop()
//     this.mount.removeChild(this.renderer.domElement)
//   }

//   start() {
//     if (!this.frameId) {
//       this.frameId = requestAnimationFrame(this.animate)
//     }
//   }

//   stop() {
//     cancelAnimationFrame(this.frameId)
//   }

//   animate() {
//     this.cube.rotation.x += 0.01
//     this.cube.rotation.y += 0.01

//     this.renderScene()
//     this.frameId = window.requestAnimationFrame(this.animate)
//   }

//   renderScene() {
//     this.renderer.render(this.scene, this.camera)
//   }

//   render() {
//     return (
//       <div
//         style={{ width: '100%', height: '100vh'}}
//         ref={(mount) => { this.mount = mount }}
//       />
//     )
//   }
// }

// export default Scene