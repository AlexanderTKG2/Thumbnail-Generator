const env = require("../config/env");
const { BlobServiceClient } = require("@azure/storage-blob");
const _ = require("lodash");

class BlobStorageService {
  blobServiceClient = null;
  filesContainer = env.azure.blob_storage.files_container;
  connectionString = env.azure.blob_storage.connection_string;

  constructor() {
    this.blobServiceClient = BlobServiceClient.fromConnectionString(
      this.connectionString
    );
  }

  async getFileBufferData(fileId, startBytes = 0, endBytes = 0) {
    try {
      const container = this.filesContainer;

      if (!fileId) {
        throw new Error("BlobStorageFile: File ID not provided");
      }

      const containerClient =
        this.blobServiceClient.getContainerClient(container);
      const blockBlobClient = await containerClient.getBlockBlobClient(fileId);

      if (
        _.isNumber(startBytes) &&
        _.isNumber(endBytes) &&
        endBytes > startBytes
      ) {
        const offset = startBytes;
        const count = endBytes - startBytes;

        const remoteBlobProperties = await blockBlobClient.getProperties();

        if (
          remoteBlobProperties.contentLength &&
          endBytes > remoteBlobProperties.contentLength
        ) {
          throw `Invalid chunk size range. startBytes: ${startBytes}  -  endBytes: ${endBytes}`;
        }

        return await blockBlobClient.downloadToBuffer(offset, count);
      }

      const fileBufferData = await blockBlobClient.downloadToBuffer();

      return fileBufferData;
    } catch (error) {
      throw error.message;
    }
  }

  async getFileBlobProperties(fileId) {
    const _fileId = fileId;
    const container = this.filesContainer;
    const containerClient =
      this.blobServiceClient.getContainerClient(container);

    const blockBlobClient = await containerClient.getBlockBlobClient(_fileId);

    if (!_fileId) {
      throw new Error("No valid file Id provided");
    }

    if (!blockBlobClient.exists()) {
      throw new Error("Requested blob does not exist in container");
    }

    const blobProperties = await blockBlobClient.getProperties();

    return blobProperties;
  }
}

const blobStorageService = new BlobStorageService();

module.exports = blobStorageService;
