# NestJS TypeScript Project

<p align="center">
  <img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" />
</p>

## Overview

A modern NestJS application with TypeScript that demonstrates best practices for building scalable and maintainable Node.js applications. This project provides a health endpoint and environment variable configuration.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- Health check endpoint with system information
- Environment configuration using dotenv
- Complete unit and e2e test coverage
- NestJS modules architecture
- TypeScript for type safety

## Tech Stack

- [NestJS](https://nestjs.com/) - A progressive Node.js framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at scale
- [Jest](https://jestjs.io/) - JavaScript testing framework
- [Supertest](https://github.com/visionmedia/supertest) - HTTP assertions library

## Project Structure

```
nest-ts-project/
├── src/                    # Source code
│   ├── app.module.ts       # Main application module
│   ├── main.ts             # Application entry point
│   └── health/             # Health module
│       ├── health.controller.ts
│       ├── health.module.ts
│       └── health.service.ts
├── test/                   # Test files
│   ├── e2e/                # End-to-end tests
│   └── health/             # Health module tests
├── .env                    # Environment variables
├── jest-e2e.json          # Jest e2e config
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [npm](https://www.npmjs.com/) (v6.0.0 or later)

### Installation

```bash
# Clone the repository
$ git clone <repository-url>
$ cd nest-ts-project

# Install dependencies
$ npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
PORT=3004              # Application port
NODE_ENV=development   # Environment (development, production, test)
```

## Running the Application

```bash
# Development mode
$ npm run start

# Watch mode (recommended for development)
$ npm run start:dev

# Production mode
$ npm run start:prod
```

Once the server is running, you can access it at: `http://localhost:3004`

## Testing

```bash
# Run unit tests
$ npm run test

# Run end-to-end tests
$ npm run test:e2e

# Generate test coverage report
$ npm run test:cov
```

## API Documentation

### Health Endpoint

Returns the health status of the application along with system information.

- **URL:** `/health`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "status": "ok",
      "pid": 12345,
      "hostname": "your-hostname"
    }
    ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
