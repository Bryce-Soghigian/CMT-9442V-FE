import React,{useRef,useEffect} from 'react'
import * as THREE from 'three'
import {SecretIMG} from '../assets/images/Secret.jpeg'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js'
import {GlitchPass} from 'three/examples/jsm/postprocessing/GlitchPass.js'
import fontJSON from '../ThreeEffects/fonts/fontJSON.json'

export default function Secret() {
    const ref = useRef()
    useEffect(() => {
        var camera, scene, renderer, composer;
        console.log()
        var object, light;
        var glitchPass;
       
        init();
        animate();
        var wildGlitch = document.getElementById( 'wildGlitch' );
            glitchPass.goWild = wildGlitch.checked;
        function updateOptions() {
            var wildGlitch = document.getElementById( 'wildGlitch' );
            glitchPass.goWild = wildGlitch.checked;
        }
        function init() {
        renderer = new THREE.WebGLRenderer();
            
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            //
            camera = new THREE.PerspectiveCamera( 150, window.innerWidth / window.innerHeight, 1, 1000 );
            camera.position.z = 400;
            scene = new THREE.Scene();
            scene.fog = new THREE.Fog( 0x000000, 1, 1000 );
            object = new THREE.Object3D();
            scene.add( object );
            //===============Background Loader=======================//
            let loader = new THREE.TextureLoader();
            const bgTexture = loader.load(SecretIMG)
            scene.background = bgTexture;

    
            //============Font Geometry=================//
    
        loader = new THREE.FontLoader();
            var font =loader.parse(fontJSON)
            var geometry = new THREE.TextGeometry("You have saved yourself",{font:font, size: 130, height: 10, material: 0, bevelThickness: 1, extrudeMaterial:10})
            var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );
            var mesh = new THREE.Mesh(geometry,material)
            object.add(mesh)
            scene.add( new THREE.AmbientLight( 0x222222 ) );
            light = new THREE.DirectionalLight( 0xffffff );
            light.position.set( 1, 1, 1 );
            scene.add( light );
            // postprocessing
            composer = new EffectComposer( renderer );
            composer.addPass( new RenderPass( scene, camera ) );
            glitchPass = new GlitchPass();
            composer.addPass( glitchPass );
            //
            window.addEventListener( 'resize', onWindowResize, false );
            var wildGlitchOption = document.getElementById( 'wildGlitch' );
            wildGlitchOption.addEventListener( 'change', updateOptions );
            updateOptions();
        }
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
            composer.setSize( window.innerWidth, window.innerHeight );
        }
    function animate() {
        requestAnimationFrame( animate );
        composer.render();
    }
    return () => {
        document.body.removeChild( renderer.domElement );
    };
    }, [ref])
    return (
        <div>
            <div ref={ref} id="wildGlitch"></div>
        </div>
    )
}
