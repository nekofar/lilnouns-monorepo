import { PngImage } from '@lilnounsdao/sdk';
import { promises as fs } from 'fs';
import { PNG } from 'pngjs';

/**
 * Read a PNG image file and return a `PngImage` object.
 * @param path The path to the PNG file
 */
export const readPngImage = async (path: string): Promise<PngImage> => {
  try {
    const buffer = await fs.readFile(path);
    const png = PNG.sync.read(buffer);

    return {
      width: png.width,
      height: png.height,
      rgbaAt: (x: number, y: number) => {
        const idx = (png.width * y + x) << 2;
        const [r, g, b, a] = [png.data[idx], png.data[idx + 1], png.data[idx + 2], png.data[idx + 3]];
        return {
          r,
          g,
          b,
          a,
        };
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to read PNG image: ${error.message}`);
    }
    throw new Error('Failed to read PNG image: Unknown error');
  }
};
