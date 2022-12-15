let scene;
let camera;
let renderer;
function resizeCanvasToDisplaySize(width, height) {
    const canvas = renderer.domElement;
    // look up the size the canvas is being displayed
  
    // adjust displayBuffer size to match
    if (canvas.width !== width || canvas.height !== height) {
      // you must pass false here or three.js sadly fights the browser
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
  
      // update any render target sizes here
    }
  }
function main()
{
    const canvas = document.querySelector('#c');
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2.5;
    scene.add(camera);  



    renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    // camera.fov = Math.atan(window.innerHeight / 2 / camera.position.z) * 2 * THREE.Math.RAD2DEG;
    // camera.aspect = window.innerWidth / window.innerHeight;
    renderer.set
    renderer.autoClear = false;
    renderer.setClearColor(0x00000, 0.0);

 


    // create earthgeometry

    const earthgeometry = new THREE.SphereGeometry(0.6,32,32);

    const eatrhmaterial = new THREE.MeshPhongMaterial({
        roughness : 1,
        metalness:0,
        map: THREE.ImageUtils.loadTexture('assets/images/world-map.gif'),
        bumpMap: THREE.ImageUtils.loadTexture('assets/images/earthbump.jpg'),
        bumpScale: 0.3,
    });

    const earthmesh = new THREE.Mesh(earthgeometry,eatrhmaterial);
    earthmesh.position.x = 0.6;
    if(window.innerWidth == 414){
         // for 414px;
    earthmesh.position.x = 0;
    earthmesh.position.y = -0.5;
    camera.position.z=5;
    console.log("414px")
    }
    if(window.innerWidth == 360){
        // for 360px;
        earthmesh.position.x = 0;
        earthmesh.position.y = -0.5;
    camera.position.z=4;
    console.log("360px")
    }
    if(window.innerWidth == 768){
        // for 768px;
   earthmesh.position.x = 0;
   earthmesh.position.y = -0.5;
   camera.position.z=4;
   console.log("414px")
   }
   
     scene.add(earthmesh);
   
    // set ambientlight

    const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
    
    scene.add(ambientlight);
   

    // set point light

    const pointerlight =  new THREE.PointLight(0xffffff,0.9);

    // set light position

    pointerlight.position.set(5,3,5);

    scene.add(pointerlight);

    // cloud
    const cloudgeometry =  new THREE.SphereGeometry(0.61,32,32);

    const cloudmaterial = new THREE.MeshPhongMaterial({
        map: THREE.ImageUtils.loadTexture('assets/images/earthCloud.png'),
        transparent: true
    });

    const cloudmesh = new THREE.Mesh(cloudgeometry,cloudmaterial);
    cloudmesh.position.x = 0.6;
    scene.add(cloudmesh);
    if(window.innerWidth == 414){
    // for 414px;
 cloudmesh.position.x = 0;
 cloudmesh.position.y = -0.5;
camera.position.z=5;
}
if(window.innerWidth == 360){
    // for 360px;
 cloudmesh.position.x = 0;
 cloudmesh.position.y = -0.5;
camera.position.z=4;
console.log("360px")
}
if(window.innerWidth == 768){
    // for 768px;
 cloudmesh.position.x = 0;
 cloudmesh.position.y = -0.5;
camera.position.z=4;
console.log("768px")
}


    // star

    const stargeometry =  new THREE.SphereGeometry(80,64,64);

    const starmaterial = new THREE.MeshBasicMaterial({

        map: THREE.ImageUtils.loadTexture('assets/images/galaxy1.png'),
        side: THREE.BackSide,
        transparent: true,
    });

    const starmesh = new THREE.Mesh(stargeometry,starmaterial);
    scene.add(starmesh);
 
    
    //blinking-stars
//     var starTexture = new THREE.TextureLoader().load( "./assets/images/star2.png" );
// var stars = [];

// for (let i = 0; i < 200; i++) {
//   let geometry = new THREE.PlaneGeometry( 0.3, 0.3 );
//   let material = new THREE.MeshBasicMaterial( { 
//     map: starTexture
//  } );
//   let star = new THREE.Mesh( geometry, material );
//   star.position.set( getRandom(), getRandom(), getRandom() );
//   star.material.side = THREE.DoubleSide;
//   stars.push( star );
// }

// for (let j = 0; j < stars.length; j++) {
//   scene.add( stars[j] );
// }

// var lightness = 0;
// var rotSpeed = 0.01;



//letters 

//     const loader = new THREE.FontLoader();

//     loader.load( './assets/helvetiker_regular.typeface.json', function ( font ) {

// 	const geometry = new THREE.TextGeometry( 'Hello three.js!', {
// 		font: font,
// 		size: 80,
// 		height: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelOffset: 0,
// 		bevelSegments: 5
// 	} );
//     const textMesh = new THREE.Mesh(geometry, [
//         new THREE.MeshPhongMaterial({ color: 'blue'}),
//         new THREE.MeshPhongMaterial({ color: 'golden'})
    
//     ])
//     scene.add(textMesh)
// } );

// const lettersTilt = new THREE.Object3D();

// scene.add(lettersTilt);
// lettersTilt.rotation.set(
//    THREE.Math.degToRad(-15),0,
//    THREE.Math.degToRad(-15)
//    );
// const lettersBase = new THREE.Object3D();

// lettersTilt.add(lettersBase);
// {
//   const letterMaterial = new THREE.MeshPhongMaterial({
//     color: '#2E8B57',
//   });  
//   const loader = new THREE.FontLoader();
//   loader.load('./assets/gentilis_regular.typeface (1).json', (font) => {
//     const spaceSize = 0;
//     let totalWidth = 0.1;
//     let maxHeight = 0.1;
//     const letterGeometries = {
//       ' ': { width: spaceSize, height: 0 }, // prepopulate space ' '
//     };
//     const size = new THREE.Vector3();
//     const str = 'the planet';
//     const letterInfos = str.split('').map((letter, ndx) => {
//       if (!letterGeometries[letter]) {
//         const geometry = new THREE.TextBufferGeometry(letter, {
//           font: font,
//           size: 1,
//           height:0,
//         //curveSegments:10,
//           bevelEnabled: true,
//           bevelThickness: 0.1,
//           bevelSize: 0.1,
//           bevelSegments: 1,
//         });
//         geometry.computeBoundingBox();
//         geometry.boundingBox.getSize(size);
//         letterGeometries[letter] = {
//           geometry,
//           width: size.x / 2, 
//           height: size.y,
//         };
//       }
//       const {geometry, width, height} = letterGeometries[letter];
//       const mesh = geometry
//           ? new THREE.Mesh(geometry, letterMaterial)
//           : null;
//       totalWidth += width ;
//       maxHeight = Math.max(maxHeight, height);
//       return {
//         mesh,
//         width,
//       };
//     });
//     let t = 0;
//     const radius = totalWidth / Math.PI;
//     for (const {mesh, width} of letterInfos) {
//       if (mesh) {
//         const offset = new THREE.Object3D();
//         lettersBase.add(offset);
//         offset.add(mesh);
//         offset.rotation.y = t / totalWidth * Math.PI * 2;
//         mesh.position.z = radius;
      
//         mesh.position.y = -maxHeight / 2;
//       }
//       t += width;
//     }
//     camera.position.z = radius * 3;
//   });
// }

    const animate = (time) =>{
        resizeCanvasToDisplaySize(window.innerWidth, window.innerHeight);
                   // Rotate and change saturation lightness of each star
//   for (let k = 0; k < stars.length; k++) {
//     let star = stars[k];
//     star.rotation.x += 0.01;
//     star.rotation.y += 0.0005;
//     lightness > 100 ? lightness = 0 : lightness++;
//     star.material.color = new THREE.Color("hsl(255, 100%, " + lightness + "%)");
//   }
//    // Rotate camera
//     // source: http://mikeheavers.com/tutorials/webgl_circular_camera_rotation_around_a_single_axis_in_threejs/
    // let x = camera.position.x;
    // let z = camera.position.z;
    // //  starmesh.rotation.y += 0.0005;
    // // camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
    // // camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
    // // camera.lookAt(scene.position);

        requestAnimationFrame(animate);
        earthmesh.rotation.y -= 0.0015;
        cloudmesh.rotation.y += 0.0015;
        starmesh.rotation.y += 0.0005;
        // circle.rotation.y += 0.0015;
        // circle.rotation.x += 0.0015;
        // lettersBase.rotation.y = time * -0.0005;


 
 
        render();
    }
    // function getRandom() {
    // //source: https://stackoverflow.com/questions/13455042/random-number-between-negative-and-positive-value
    //     var num = Math.floor(Math.random()*10) + 1; // this will get a number between 1 and x;
    //     num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
    //     return num;
    //   }
    const render = () => {
        
        renderer.render(scene,camera);
    }

    animate();
   
      
   
}

window.onload = main;
