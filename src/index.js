import './styles.css';

const outline = (body, width = 60, height = 90) =>
  `
    <div style="padding: 2px; margin: 8px; height: ${height}; width: ${width}; display: inline-block;">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${width}" height="${height}" viewBox="0 0 60 90">
        <defs>
          <pattern id="fillPatternRed" x="6" y="6" width="5" height="5" patternUnits="userSpaceOnUse">
            <rect x="2" y="0" width="2" height="2" fill="#ff0000" />
            <rect x="1" y="1" width="2" height="2" fill="#ff0000" />
            <rect x="0" y="2" width="2" height="2" fill="#ff0000" />
          </pattern>
          <pattern id="fillPatternGreen" x="6" y="6" width="5" height="5" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="3" height="6" fill="#007f00" />
          </pattern>
          <pattern id="fillPatternPurple" x="6" y="6" width="5" height="5" patternUnits="userSpaceOnUse">
            <rect x="2" y="0" width="3" height="3" fill="#7f007f" />
          </pattern>
        </defs>
        <g>
          <rect ry="5" rx="5" stroke="#7f7f00" height="90" width="60" y="0" x="0" fill="#ffffdd" />
          ${body}
        </g>
      </svg>
    </div>
  `;

const back = (text = 'SET!') =>
  outline(`
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
      fill="#77bbff"
    />
    <path
      stroke="#000000"
      stroke-opacity="0"
      d="m58.674,47.96453l-21.82368,0.2297l-6.66568,7.48405l-6.82171,-7.34209l-21.82369,0.2297l17.60748,-4.7673l-6.82206,-7.34208l17.70393,4.39577l17.6075,-4.76743l-6.66602,7.48405l17.70393,4.39564l0,-0.00001z"
      fill="#77bbff"
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
    >${text}</text>
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
      fill="#ffffdd"
    >${text}</text>
  `);

const ellipse = (stroke = '#ff0000', fill = '#ff0000', y = 45) => `
  <ellipse
    ry="8"
    rx="20"
    cy="${y}"
    cx="30"
    fill="${fill}"
    stroke="${stroke}"
    stroke-width="2"
  />
`;

const rectangle = (stroke = '#ff0000', fill = '#ff0000', y = 138) => `
  <rect
    fill="${fill}"
    stroke="${stroke}"
    stroke-width="2"
    x="11"
    y="${y}"
    width="38"
    height="14"
  />
`;

const wave = (stroke = '#ff0000', fill = '#ff0000', y = 138) => `
  <path
    d="m11,${y}c12.59556,-8.27143 25.19112,8.27143 37.78668,0l0,14.88858c-12.59556,8.27143 -25.19112,-8.27143 -37.78668,0l0,-14.88858z"
    fill="${fill}"
    stroke="${stroke}"
    stroke-width="2"
  />
`;

const shapes = (y, shape, n = 1, stroke = '#ff0000', fill = '#ff0000') => {
  y -= n * 10;
  let body = '';
  while (n--) {
    body += shape(stroke, fill, y);
    y += 20;
  }
  return body;
};

const parseColor = c =>
  ({
    r: '#ff0000',
    g: '#007f00',
    p: '#7f007f'
  }[c]);

const parseFillPattern = c =>
  ({
    r: 'url(#fillPatternRed)',
    g: 'url(#fillPatternGreen)',
    p: 'url(#fillPatternPurple)'
  }[c]);

const parseFillType = (ft, c) =>
  ({
    e: 'transparent',
    f: parseColor(c),
    h: parseFillPattern(c)
  }[ft]);

function front(code) {
  const [numof, color, shape, fillType] = code.split('');
  const args = {
    e: [55, ellipse],
    r: [48, rectangle],
    w: [48, wave]
  }[shape];
  const stroke = parseColor(color);
  const fill = parseFillType(fillType, color);
  const body = shapes(...args, numof, stroke, fill);
  return outline(body);
}

let stage = document.getElementById('stage');

// number of shapes: 1 2 3
// color of card: g r p
// shape of card: r e w
// fill of shape: e f h

let decks = [];

for (let n of [1, 2, 3]) {
  for (let c of ['g', 'r', 'p']) {
    for (let s of ['r', 'e', 'w']) {
      for (let f of ['e', 'f', 'h']) {
        let card = front(`${n}${c}${s}${f}`);
        const i = parseInt(Math.random() * (decks.length + 1), 10);
        decks.splice(i, 0, card);
      }
    }
  }
}

for (let i = 0; i < 12; i++) {
  let card = decks[i];
  stage.insertAdjacentHTML('beforeend', card);
}

stage.insertAdjacentHTML('beforeend', back());

// outline: 4px dashed #4f4fbf;
