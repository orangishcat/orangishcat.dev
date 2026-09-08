import path from "node:path";

const OBSIDIAN_IMAGE = /!\[\[([^\]|\n]+?)(?:\|(\d+))?\]\]/g;

function imageNode(target, width) {
  const alt = path.basename(target, path.extname(target));
  const image = {
    type: "image",
    url: target,
    alt,
    title: null,
  };

  if (width) {
    image.data = {
      hProperties: {
        width: Number(width),
      },
    };
  }

  return image;
}

function transformChildren(parent) {
  if (!Array.isArray(parent.children)) return;

  parent.children = parent.children.flatMap((child) => {
    if (child.type !== "text") {
      transformChildren(child);
      return child;
    }

    const replacements = [];
    let cursor = 0;

    for (const match of child.value.matchAll(OBSIDIAN_IMAGE)) {
      if (match.index > cursor) {
        replacements.push({
          type: "text",
          value: child.value.slice(cursor, match.index),
        });
      }

      replacements.push(imageNode(match[1].trim(), match[2]));
      cursor = match.index + match[0].length;
    }

    if (cursor === 0) return child;

    if (cursor < child.value.length) {
      replacements.push({
        type: "text",
        value: child.value.slice(cursor),
      });
    }

    return replacements;
  });
}

export default function remarkObsidianImages() {
  return transformChildren;
}

function setAvifFormat(parent) {
  if (!Array.isArray(parent.children)) return;

  for (const child of parent.children) {
    if (child.type === "element" && child.tagName === "img") {
      child.properties ??= {};
      const src = String(child.properties.src ?? "").split(/[?#]/, 1)[0];
      // don't process apngs
      if (!/\.(apng|gif|svg)$/i.test(src)) {
        child.properties.format = "avif";
      }
    }

    setAvifFormat(child);
  }
}

export function rehypeImagesAvif() {
  return setAvifFormat;
}
