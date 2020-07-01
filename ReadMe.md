# THREEJS + GLSL
> Playing with Fragment Shaders!

Black + White | MultiColor | Blue + Yellow
------------ | ------------- | ------------- 
![Black/White](/gifs/1.gif) | ![multicolor](/gifs/2.gif) | ![Blue/Yellow](/gifs/3.gif)

### Fragment Shader & Vertex Shader
> Fragment Shader from Lewis Lepton Shader Series [Shader](https://www.youtube.com/watch?v=aW_GW5uwWRM)

Vertex Shader | Fragment Shader 
------------ | ------------- 
`varying vec2 vUv;` |   `varying vec2 vUv;`
`void main()`   |   ` uniform float time;`
`{` |   `uniform float k;`
    `vUv = uv;` |   `  void main()	{`
    `gl_Position = vec4( position, 1.0 );`  |   `vec2 container = - 1.0 + 8.0 * vUv;`
`}` |   ` float a = time * 40.0;`
| `for(int n=1;n<6;n++){`
| `float i = float(n);`
| ` container += vec2(0.7/i*sin(i*container.y+time+0.3*i)*1.8,0.4/i*sin(container.x+time+0.3*i)*3.6);`
| `}`
| `vec3 color = vec3(sin(container.x+container.y)+0.5,sin(container.x+container.y)+0.5,sin(container.x+container.y)+0.5);`
| `gl_FragColor = vec4(color,1.0);`
| `}`
  
