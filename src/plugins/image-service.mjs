import sharpService from "astro/assets/services/sharp";

const isApng = (options) =>
  typeof options.src === "object" && options.src?.format === "apng";

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
  transform(input, options, config) {
    return options.format === "apng"
      ? { data: input, format: "apng" }
      : sharpService.transform(input, options, config);
  },
};
