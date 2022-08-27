const blobStorageService = require("./BlobStorageService");

class ThumbnailGeneratorService {
  ThumbnailSizes = Object.freeze({
    Small: "small",
    Medium: "medium",
    Large: "large",
  });

  async generateFileThumbnail(
    fileId,
    thumbnailSize = this.ThumbnailSizes.Small
  ) {
    try {
      console.log("Unimplemented");
      const fileMetadata = blobStorageService.getFileBlobProperties(fileId);
      const MimeType = fileMetadata.contentType;

      switch (MimeType) {
        case "image/jpeg":
          break;
        case "image/png":
          break;
        case "image/gif":
          break;
        case "video/mp4":
          break;
        case "video/mpeg":
          break;
        default:
          throw new Error("Unsupported File Format");
      }
    } catch (error) {
      console.error("ThumbnailGeneratorService: Error generating thumbnail");
      console.error(error.message);
      throw error;
    }
  }

  async generateStaticImageThumbnail() {
    console.log("Not Implemented");
  }

  async generateVideoThumbnail() {
    console.log("Not Implemented");
  }
}

const thumbnailGeneratorService = new ThumbnailGeneratorService();

module.exports = thumbnailGeneratorService;
