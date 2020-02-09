import './styles.css';

function outline(body, width = 60, height = 90) {
  return `
    <svg viewBox="0 0 60 90" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <rect ry="5" rx="5" stroke="#7f7f00" height="90" width="60" y="0" x="0" fill="#ffffdd" />
        ${body}
      </g>
    </svg>
  `;
}

function back() {
  return outline(`
    <path
      d="M6,5 l5,10 l-5,10 l5,10 l-5,10 l5,10 l-5,10 l5,10 l-5,10 l8,-5 l8,5 l8,-5 l8,5 l8,-5 l8,5 l-5,-10 l5,-10 l-5,-10 l5,-10 l-5,-10 l5,-10 l-5,-10 l5,-10 l-8,5 l-8,-5 l-8,5 l-8,-5 l-8,5 Z"
      fill="#0080d0"
    />
    <path
      stroke="#000000"
      stroke-opacity="0"
      d="m1.64141,43.06632l21.81705,-0.58527l6.54283,-7.59167l6.94045,7.22996l21.81705,-0.58527l-17.52746,5.05358l6.94079,7.22995l-17.77321,-4.10671l-17.52747,5.0537l6.54318,-7.59167l-17.7732,-4.10659l-0.00001,-0.00001z"
      fill="#00007f"
    />
    <path
      stroke="#000000"
      stroke-opacity="0"
      d="m58.98176,48.67148l-21.82368,0.2297l-6.66568,7.48405l-6.82171,-7.34209l-21.82369,0.2297l17.60748,-4.7673l-6.82206,-7.34208l17.70393,4.39577l17.6075,-4.76743l-6.66602,7.48405l17.70393,4.39564l0,-0.00001z"
      fill="#00007f"
    />
    <path
      stroke="#000000"
      stroke-opacity="0"
      d="m1.33365,42.35937l21.81705,-0.58527l6.54283,-7.59167l6.94045,7.22996l21.81705,-0.58527l-17.52746,5.05358l6.94079,7.22995l-17.77321,-4.10671l-17.52747,5.0537l6.54318,-7.59167l-17.7732,-4.10659l-0.00001,-0.00001z"
      fill="#00ffff"
    />
    <path
      stroke="#000000"
      stroke-opacity="0"
      d="m58.674,47.96453l-21.82368,0.2297l-6.66568,7.48405l-6.82171,-7.34209l-21.82369,0.2297l17.60748,-4.7673l-6.82206,-7.34208l17.70393,4.39577l17.6075,-4.76743l-6.66602,7.48405l17.70393,4.39564l0,-0.00001z"
      fill="#00ffff"
    />
    <text
      font-weight="bold"
      stroke="#000000"
      transform="rotate(-5.945642948150635 30.315853118896463,45.7335662841797) matrix(0.5865176098302768,0,0,0.44080606730387684,44.56289700016748,27.616638349079327) "
      xml:space="preserve"
      text-anchor="middle"
      font-family="Fantasy"
      font-size="24"
      y="50.7071"
      x="-24.2949"
      stroke-width="0"
      fill="#00007f"
    >SET!</text>
    <text
      font-weight="bold"
      stroke="#000000"
      transform="rotate(-5.945642948150635 29.75718116760253,45.18938827514646) matrix(0.5865176098302768,0,0,0.44080606730387684,44.56289700016748,27.616638349079327) "
      xml:space="preserve"
      text-anchor="middle"
      font-family="Fantasy"
      font-size="24"
      id="svg_9"
      y="49.47203"
      x="-25.24512"
      stroke-width="0"
      fill="#ffffff"
    >SET!</text>
  `);
}

function front(code) {
  return outline(`
    <rect ry="5" rx="5" stroke="#7f7f00" height="90" width="60" y="0" x="0" fill="#ffffdd" id="svg_1" />
  `);
}

let card = back('abcd');
let stage = document.getElementById('stage');
stage.innerHTML = card;

console.log('hi2');

document.getElementById('app').innerHTML = `
<h1>Set Game!</h1>
<div>
  Under construction...
</div>
`;
