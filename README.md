# Agency Management System (AMS)

A comprehensive Next.js application for managing insurance agency operations, including policies, claims, clients, agents, and administrative functions.

## Features

- **User Management**: Role-based access control with authentication
- **Policy Management**: Create, update, and manage insurance policies
- **Client Management**: Store and manage client information
- **Claims Processing**: Track and process insurance claims
- **Agent Management**: Manage insurance agents and their assignments
- **Document Management**: Upload and organize documents
- **Audit Logging**: Comprehensive audit trail of system activities
- **Dashboard**: Visual overview of agency operations

## Technology Stack

- **Frontend**: React, Next.js 14 (App Router), Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MySQL
- **Authentication**: JWT with role-based permissions
- **Styling**: Tailwind CSS with responsive design

## Getting Started

### Prerequisites

- Node.js 18+ 
- MySQL database

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/hani-esdi/AMS.git
   cd AMS
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with the following variables:
   ```
   DATABASE_HOST=localhost
   DATABASE_USER=your_db_user
   DATABASE_PASSWORD=your_db_password
   DATABASE_NAME=your_db_name
   JWT_SECRET=your_jwt_secret
   ```

4. Initialize the database:
   ```
   npm run create-db
   npm run init-db
   npm run setup-admin
   ```

5. Run the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Log in with the admin account created during setup
- Navigate through the dashboard to access different modules:
  - Policies
  - Claims
  - Clients
  - Agents
  - Documents
  - User Management (Admin only)
  - Audit Logs (Admin only)

## License

This project is licensed under the MIT License.