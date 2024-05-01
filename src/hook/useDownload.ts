import domtoimage from "dom-to-image-more";

export const useDownLoad = () => {
  const downloadToPng = async (node: HTMLElement | null) => {
    if (!node) return;
    const dataUrl = await domtoimage.toPng(node, {
      bgcolor: "transparent",
    });

    const link = document.createElement("a");
    link.download = "logo.png";
    link.href = dataUrl;
    link.click();
  };

  const downloadToSvg = async (node: HTMLElement | null) => {
    if (!node) return;
    const dataUrl = await domtoimage.toSvg(node, {
      bgcolor: "transparent",
    });

    const link = document.createElement("a");
    link.download = "logo.svg";
    link.href = dataUrl;
    link.click();
  };

  return {
    downloadToPng,
    downloadToSvg,
  };
};
