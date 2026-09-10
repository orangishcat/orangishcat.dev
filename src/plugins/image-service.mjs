import sharpService from "astro/assets/services/sharp";

const isApng = (options) =>
  typeof options.src === "object" && options.src?.format === "apng";

function isAnimatedAvif(input) {
  const bytes = Buffer.from(input);
  if (bytes.length < 16 || bytes.toString("ascii", 4, 8) !== "ftyp") {
    return false;
  }

  const boxSize = bytes.readUInt32BE(0);
  if (boxSize < 16 || boxSize > bytes.length) return false;

  // `avis` identifies an AVIF sequence, as a major or compatible brand.
  if (bytes.toString("ascii", 8, 12) === "avis") return true;
  for (let offset = 16; offset + 4 <= boxSize; offset += 4) {
    if (bytes.toString("ascii", offset, offset + 4) === "avis") return true;
  }
  return false;
}

// sharp hates apngs
export default {
  ...sharpService,
  validateOptions(options, config) {
    return isApng(options)
      ? { ...options, format: "apng" }
      : sharpService.validateOptions(options, config);
  },
  getURL(options, config) {
    return isApng(options)
      ? options.src.src
      : sharpService.getURL(options, config);
  },
  getSrcSet(options, config) {
    return isApng(options) ? [] : sharpService.getSrcSet(options, config);
  },
  transform(input, options, config, logger) {
    if (isAnimatedAvif(input)) {
      return { data: input, format: "avif" };
    }
    return options.format === "apng"
      ? { data: input, format: "apng" }
      : sharpService.transform(input, options, config, logger);
  },
};
