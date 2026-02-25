// import fs from "fs"; // Import file system module
// import path from "path"; // Import path module

// export async function GET(req, context) {

//   const { videoId } = await context.params; // Get videoId from dynamic route

//   // Create full path of video file
//   const videoPath =  path.join(process.cwd(), "src", "videos", `${videoId}.mp4`);

//   // Check if video file exists
//   if (!fs.existsSync(videoPath)) {
//     return new Response("Video not found", { status: 404 });
//   }

//   const stat = fs.statSync(videoPath); // Get file details
//   const fileSize = stat.size; // Get total file size
//   const range = req.headers.get("range"); // Get range header from request

//   // If range header is missing return error
//   if (!range) {
//     return new Response("Range header required", { status: 400 });
//   }

//   // Extract start and end bytes from range header
//   const parts = range.replace(/bytes=/, "").split("-");
//   const start = parseInt(parts[0], 10);
//   const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

//   const chunkSize = end - start + 1; // Calculate chunk size

//   // Create read stream for requested byte range
//   const fileStream = fs.createReadStream(videoPath, { start, end });

//   // Return partial content response (206)
//   return new Response(fileStream, {
//     status: 206,
//     headers: {
//       "Content-Range": `bytes ${start}-${end}/${fileSize}`,  
//       "Accept-Ranges": "bytes",  
//       "Content-Length": chunkSize.toString(),  
//       "Content-Type": "video/mp4", 
//     },
//   });
// }


import fs from "fs"; // Import file system module
import path from "path"; // Import path module

export async function GET(req, context) {

  const { videoId } = await context.params; // Get videoId from dynamic route

  // Create full path of video file
  const videoPath = path.join(process.cwd(), "src", "videos", `${videoId}.mp4`);

  // Check if video file exists
  if (!fs.existsSync(videoPath)) {
    return new Response("Video not found", { status: 404 });
  }

  const stat = fs.statSync(videoPath); // Get file details
  const fileSize = stat.size; // Get total file size
  const range = req.headers.get("range"); // Get range header

  // If range header is missing return error
  if (!range) {
    return new Response("Range header required", { status: 400 });
  }

  // Extract start and end from range header
  const parts = range.replace(/bytes=/, "").split("-");
  const start = parseInt(parts[0], 10);
  let end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

  // Prevent invalid range (start beyond file size)
  if (start >= fileSize) {
    return new Response("Requested range not satisfiable", {
      status: 416,
      headers: {
        "Content-Range": `bytes */${fileSize}`,
      },
    });
  }

  // Ensure end never exceeds file size
  end = Math.min(end, fileSize - 1);

  const chunkSize = end - start + 1; // Calculate valid chunk size

  // Create read stream safely
  const fileStream = fs.createReadStream(videoPath, { start, end });

  // Return partial content response (206)
  return new Response(fileStream, {
    status: 206,
    headers: {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`, // Inform browser about range
      "Accept-Ranges": "bytes", // Allow byte requests
      "Content-Length": chunkSize.toString(), // Size of this chunk
      "Content-Type": "video/mp4", // Video type
    },
  });
}