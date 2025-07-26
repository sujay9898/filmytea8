const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = process.env.PORT || 5000;

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.txt': 'text/plain',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url);
  let filePath = '.' + parsedUrl.pathname;
  
  // Default to index.html for root path
  if (filePath === './') {
    filePath = './index.html';
  }
  
  // Security check - prevent directory traversal
  if (filePath.includes('..')) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('<h1>403 - Forbidden</h1>', 'utf-8');
    return;
  }
  
  // Get file extension
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeType = mimeTypes[extname] || 'application/octet-stream';
  
  // Add CORS headers for development
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found
      console.log(`File not found: ${filePath}`);
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>404 - File Not Found</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            h1 { color: #e74c3c; }
            p { color: #666; }
            a { color: #3498db; text-decoration: none; }
          </style>
        </head>
        <body>
          <h1>404 - File Not Found</h1>
          <p>The requested file <code>${filePath}</code> was not found.</p>
          <p><a href="/">← Back to Home</a></p>
        </body>
        </html>
      `, 'utf-8');
      return;
    }
    
    // Read and serve the file
    fs.readFile(filePath, (error, content) => {
      if (error) {
        console.error(`Error reading file ${filePath}:`, error);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>500 - Server Error</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
              h1 { color: #e74c3c; }
              p { color: #666; }
              a { color: #3498db; text-decoration: none; }
            </style>
          </head>
          <body>
            <h1>500 - Server Error</h1>
            <p>An error occurred while reading the file.</p>
            <p><a href="/">← Back to Home</a></p>
          </body>
          </html>
        `, 'utf-8');
      } else {
        // Success - serve the file
        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(content, 'utf-8');
        console.log(`Served: ${filePath} (${mimeType})`);
      }
    });
  });
});

server.listen(port, () => {
  console.log(`🚀 FilmyTea server running at http://localhost:${port}/`);
  console.log(`📁 Serving files from: ${__dirname}`);
  console.log(`🌐 Open your browser and navigate to the URL above`);
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});