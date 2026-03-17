import { v2 as cloudinary } from "cloudinary";
import { readdirSync } from "fs";
import { join, relative, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

cloudinary.config({
  cloud_name: "dwvx7bzki",
  api_key: "818165498746296",
  api_secret: "u1_OnI49uia23vHfyFuweR32Q3c",
});

const publicDir = join(__dirname, "../public");

function getFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => {
    const full = join(dir, e.name);
    return e.isDirectory() ? getFiles(full) : [full];
  });
}

const files = getFiles(join(publicDir, "images"));

console.log(`Uploading ${files.length} images…\n`);

for (const file of files) {
  const rel = relative(publicDir, file).replace(/\\/g, "/"); // e.g. images/Weddings/DSC05718.JPG
  const publicId = rel.replace(/\.[^.]+$/, "");              // strip extension

  try {
    await cloudinary.uploader.upload(file, {
      public_id: publicId,
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      resource_type: "image",
    });
    console.log(`✓ ${rel}`);
  } catch (err) {
    console.error(`✗ ${rel}:`, err);
  }
}

console.log("\nDone.");
