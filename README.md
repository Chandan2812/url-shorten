# URL Shortening Service

This project implements a URL-shortening service that allows users to shorten long URLs into shorter.

## Deployed link

- https://urlshorten-rzcr.onrender.com/

## Project Structure

The `url-shorten` folder contains the following files and directories:

- `index.js`: Entry point for the URL shortening service.
- `models/`: Directory containing data models for the application.
  - `url.model.js`: Defines the data model for URLs.
- `route/`: Directory containing route definitions.
  - `url.route.js`: Defines the API routes for the URL shortening service.
- `config/`: Directory containing configuration files.
  - `db.js`: Configuration file for connecting to the database.

## Setup

To set up and run the URL shortening service locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <url-shorten-repo-url>

2. Navigate to the repository:
   ```bash
   cd url-shorten

3. Install dependencies:
   ```bash
   npm install

4. Set up environment variables:
   ```bash
   PORT: 8000
   
5.Start the server
  ```bash
  node index.js
  ```

## API Documentation

### Shorten URL

- **Endpoint:** `/shorten`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "originalUrl": "https://example.com"
  }
- **Response:**
  ```json
  {
  "shortUrl": "https://shortened-url.com/abc123"
  }


