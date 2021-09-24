import './style.scss'
import { debounce} from 'lodash-es'
import cube from './cube.svg'

// import styles from './example.module.css';

console.log(debounce)
console.log(cube)

// <h2 class = "${styles.pik}">A to jest rózowe</h2>

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite! Yes it looks great</h1>
  <h2>A to jest czerwone</h2>
  
  <h4>A to jest SVG import and hashed</h4>

  <img src="${cube}">

  <h4>A to jest SVG dolar z pulic folder </h4>

  <img src="/dolar.svg">
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
