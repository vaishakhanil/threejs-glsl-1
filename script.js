let container;
let camera, scene, renderer;
let uniforms;
let material;
let mesh;
init();
animate();

function init() {

    container = document.getElementById( 'container' );

    camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

    scene = new THREE.Scene();

    var geometry = new THREE.PlaneBufferGeometry(2,2,2);

    uniforms = {
        "time": { value: 1.0 },
        "k":{value:1.0}
    };
    
    material = new THREE.ShaderMaterial( {

        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent

    } );

    mesh = new THREE.Mesh( geometry, material );
    scene.background = mesh;
    scene.add( mesh );



    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    container.appendChild( renderer.domElement );

    onWindowResize();

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate( timestamp ) {

    requestAnimationFrame( animate );

    uniforms[ "time" ].value = timestamp / 1000;


    renderer.render( scene, camera );

}