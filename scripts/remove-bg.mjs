import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath  = join(__dirname, "../public/bo.png");
const outputPath = join(__dirname, "../public/bo.png");

// Umbral: cuán "blanco" debe ser un píxel para volverse transparente
const THRESHOLD = 240;

const { data, info } = await sharp(inputPath)
  .ensureAlpha()          // garantiza canal alpha
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info; // channels = 4 (RGBA)
const buf = Buffer.from(data);

for (let i = 0; i < buf.length; i += channels) {
  const r = buf[i];
  const g = buf[i + 1];
  const b = buf[i + 2];

  // Si el píxel es casi blanco → transparente
  if (r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD) {
    buf[i + 3] = 0; // alpha = 0
  }
}

await sharp(buf, { raw: { width, height, channels } })
  .png()
  .toFile(outputPath);

console.log(`✅ Fondo blanco eliminado → ${outputPath}`);
