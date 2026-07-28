const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'public', 'plan-pdfs');
fs.mkdirSync(dir, { recursive: true });
const files = [
  ['endowment-plus.pdf', 'Endowment Plus Plan Brochure'],
  ['term-protect.pdf', 'Term Protect Plan Brochure'],
  ['new-jeevan-anand.pdf', 'New Jeevan Anand Plan Brochure'],
];
for (const [name, title] of files) {
  const content = `%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n4 0 obj\n<< /Length 54 >>\nstream\nBT /F1 18 Tf 72 720 (${title}) Tj ET\nendstream\nendobj\n5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\ntrailer\n<< /Root 1 0 R >>\n%%EOF\n`;
  fs.writeFileSync(path.join(dir, name), content);
}
