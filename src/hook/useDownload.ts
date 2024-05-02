import { LOGO_ID } from "@/lib/constants";
import domToImage from "dom-to-image";
import { toast } from "sonner";
import { saveAs } from "file-saver";
import JSZip from "jszip";

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

  const downloadToFavicon = async () => {
    const htmlNode = document.getElementById(LOGO_ID);
    const sizes = [64, 128, 512, 1024];

    if (htmlNode) {
      try {
        const dataUrl = await domToImage.toPng(htmlNode);
        const img = new Image();
        img.src = dataUrl;

        img.onload = async function () {
          const zip = new JSZip();

          for (const size of sizes) {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = size;
            canvas.height = size;
            ctx?.drawImage(img, 0, 0, size, size);
            const blob = await new Promise<Blob | null>((resolve) =>
              canvas.toBlob(resolve),
            );
            if (blob) {
              zip.file(`favicon${size}x${size}.ico`, blob);
            }
          }

          try {
            const content = await zip.generateAsync({ type: "blob" });
            saveAs(content, "favicons.zip");
          } catch (error) {
            toast.error("Error downloading image", {
              description: "Something went wrong.",
            });
          }
        };
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
    downloadToFavicon,
  };
};
