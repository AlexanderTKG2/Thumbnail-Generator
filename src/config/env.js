require("dotenv").config();
require("process");

const env = {
  api: {
    port: process.env.PORT,
    host: process.env.HOST,
    host_url: process.env.HOST_URL,
    protocol: process.env.PROTOCOL,
    api_root: process.env.API_ROOT,
    environment: process.env.ENVIRONMENT,
  },
  linkedin: {
    app_name: process.env.APP_NAME,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    callback_url: process.env.CALLBACK_URL,
  },
  azure: {
    blob_storage: {
      connection_string: process.env.AZURE_STORAGE_CONNECTION_STRING,
      files_container: process.env.FILES_CONTAINER,
    },
  },
  ffmpeg: {
    video_directory: process.env.LOCAL_VIDEO_TEMP_DIRECTORY,
    thumbnail_directory: process.env.GENERATED_THUMBNAIL_TEMP_DIRECTORY,
  },
  thumbnails: {
    small: {
      height: process.env.SMALL_HEIGHT_PX,
      width: process.env.SMALL_WIDTH_PX,
    },
    medium: {
      height: process.env.MEDIUM_HEIGHT_PX,
      width: process.env.MEDIUM_WIDTH_PX,
    },
    large: {
      height: process.env.LARGE_HEIGHT_PX,
      width: process.env.LARGE_WIDTH_PX,
    },
  },
};

module.exports = env;
