const fs = require('fs');
const svgContent = fs.readFileSync('src/components/TrionsLabLogo.jsx', 'utf8');
const dMatch = svgContent.match(/d="([^"]+)"/);

if (dMatch) {
  const d = dMatch[1];
  const componentContent = `export default function TrionsLabBackgroundPattern({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1500 1500"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <path fill="currentColor" fillOpacity="1" fillRule="evenodd" d="${d}" />
    </svg>
  );
}
`;
  fs.writeFileSync('src/components/TrionsLabBackgroundPattern.jsx', componentContent);
  console.log('Created patterned background component!');
}
