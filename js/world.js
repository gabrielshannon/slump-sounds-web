var camera, scene, renderer;
var isUserInteracting = false,
    lon = 0,
    lat = 0,
    phi = 0,
    theta = 0,
    distance = 500,
    onPointerDownPointerX = 0,
    onPointerDownPointerY = 0,
    onPointerDownLon = 0,
    onPointerDownLat = 0;

var cube;

init();
animate();

function init() {

    /// 3D BACKGROUND CODE 
    var container, mesh;
    container = document.getElementById('container');

    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 2000);
    scene = new THREE.Scene();
    var geometry = new THREE.SphereBufferGeometry(500, 60, 40).toNonIndexed();
    // invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale(-1, 1, 1);
    // Remap UVs
    var normals = geometry.attributes.normal.array;
    var uvs = geometry.attributes.uv.array;
    for (var i = 0, l = normals.length / 3; i < l; i++) {
        var x = normals[i * 3 + 0];
        var y = normals[i * 3 + 1];
        var z = normals[i * 3 + 2];
        if (i < l / 2) {
            var correction = (x == 0 && z == 0) ? 1 : (Math.acos(y) / Math.sqrt(x * x + z * z)) * (2 / Math.PI);
            uvs[i * 2 + 0] = x * (404 / 1920) * correction + (447 / 1920);
            uvs[i * 2 + 1] = z * (404 / 1080) * correction + (582 / 1080);
        } else {
            var correction = (x == 0 && z == 0) ? 1 : (Math.acos(-y) / Math.sqrt(x * x + z * z)) * (2 / Math.PI);
            uvs[i * 2 + 0] = -x * (404 / 1920) * correction + (1460 / 1920);
            uvs[i * 2 + 1] = z * (404 / 1080) * correction + (582 / 1080);
        }
    }
    geometry.rotateY(-Math.PI / 2);
    geometry.rotateZ(-Math.PI / 2);
    // geometry.rotateY(-Math.PI / 2);
    //
    var texture = new THREE.TextureLoader().load('images/newpic2.jpg');
    texture.minFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    var material = new THREE.MeshBasicMaterial({
        map: texture
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    // document.addEventListener('mousedown', onDocumentMouseDown, false);
    // document.addEventListener('mousemove', onDocumentMouseMove, false);
    // document.addEventListener('mouseup', onDocumentMouseUp, false);
    // document.addEventListener('wheel', onDocumentMouseWheel, false);

    container.addEventListener('mousedown', onDocumentMouseDown, false);
    container.addEventListener('mousemove', onDocumentMouseMove, false);
    container.addEventListener('mouseup', onDocumentMouseUp, false);
    // container.addEventListener('wheel', onDocumentMouseWheel, false);
    //
    window.addEventListener('resize', onWindowResize, false);

    /// CUBE / OBJECT CODE

    var cubeGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
    var cubeMaterial = new THREE.MeshLambertMaterial({
        color: 'rgb(255,0,0)',
        emissive: 0x200000
    });
    var geometry = new THREE.BoxGeometry(100, 100, 100);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    var cube = new THREE.Mesh(geometry, material);
    //  scene.add(cube);

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseDown(event) {
    event.preventDefault();
    isUserInteracting = true;
    onPointerDownPointerX = event.clientX;
    onPointerDownPointerY = event.clientY;
    onPointerDownLon = lon;
    onPointerDownLat = lat;
}

function onDocumentMouseMove(event) {
    if (isUserInteracting === true) {
        lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
        lat = (onPointerDownPointerY - event.clientY) * 0.1 + onPointerDownLat;
    }
}

function onDocumentMouseUp() {
    isUserInteracting = false;
}

// function onDocumentMouseWheel(event) {
//     distance += event.deltaY * 0.10;
//     distance = THREE.Math.clamp(distance, 400, 1000);
// }

function animate() {
    requestAnimationFrame(animate);
    update();
}

function update() {
    if (isUserInteracting === false) {
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
}


var newText = $("p").text().split(" ").join("</span> <span>");
newText = "<span>" + newText + "</span>";

$("p")
    .html(newText)
    .find("span")
    .hover(function() {
        $(this).addClass("hilite");
    }, function() {
        $(this).removeClass("hilite");
    })
    .end()
    .find(":contains('your')")
    .css({
        "font-style": "italic",
        "font-weight": "bolder"
    });


$(document).on('click', 'select', function(e) {
    previous = $(this).find('option:selected').attr('value');
}).on('change', 'select', function() {
    var dataUrl = $(this).find('option:selected').attr('data-target');
    window.open(dataUrl);
});