import { LOGO_ID } from "@/lib/constants";
import domToImage from "dom-to-image";
import { toast } from "sonner";

export const useDownLoad = () => {
  const downloadToPng = async () => {
    const htmlNode = document.getElementById(LOGO_ID);
    const scale = 2;

    if (htmlNode) {
      try {
        const dataUrl = await domToImage.toPng(htmlNode, {
          quality: 1,
          width: htmlNode.clientWidth * scale,
          height: htmlNode.clientHeight * scale,
          style: {
            transform: "scale(" + scale + ")",
            transformOrigin: "center",
          },
        });
        if (dataUrl) {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "logo.png";
          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
        }
      } catch (error) {
        toast.error("Error downloading image", {
          description: "Something went wrong.",
        });
      }
    }
  };

  const downloadToSvg = async () => {
    const htmlNode = document.getElementById(LOGO_ID);

    if (htmlNode) {
      try {
        const dataUrl = await domToImage.toSvg(htmlNode);
        if (dataUrl) {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "logo.svg";
          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
        }
      } catch (error) {
        toast.error("Error downloading image", {
          description: "Something went wrong.",
        });
      }
    }
  };

  return {
    downloadToPng,
    downloadToSvg,
  };
};
