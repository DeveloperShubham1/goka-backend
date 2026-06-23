# Goka Feed Backend

Backend API for the Goka Feed Employee Management & Field Force Automation System.

## Overview

This project is a scalable Employee Management and Field Force Automation platform designed for organizations with multiple reporting hierarchies and field employees.

The system supports:

- Dynamic Role Management
- Role-Based Access Control (RBAC)
- Employee Hierarchy Management
- Attendance Tracking
- Live GPS Tracking
- Customer Management
- Visit Management
- Route Planning
- Leave Management
- Notifications
- Reports & Analytics
- Activity Logs
- Promotion & Demotion History
- One Device Login Restriction
- Mobile & Web Applications

---

## Technology Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication

- JWT Authentication
- Bcrypt Password Hashing

### Validation

- Joi

### Storage

- AWS S3

### Notifications

- Firebase Cloud Messaging (FCM)

### Realtime Services

- Socket.io

### Caching & Queues

- Redis
- BullMQ

---

## Project Structure

```text
backend/
│
├── config/
├── controller/
├── helpers/
├── middleware/
├── models/
├── routes/
├── services/
├── sockets/
├── utils/
├── validations/
├── seeds/
│
├── .env
├── app.js
├── db.js
├── package.json
```

---

## User Roles

Current Roles:

- Admin
- Senior Coordinator
- Coordinator
- Zonal Sales Head
- Regional Sales Officer
- Deputy Area Sales Manager
- Area Sales Manager
- Senior Sales Officer
- Sales Officer
- Field Officer

The system supports dynamic role creation and future hierarchy changes without code modifications.

---

## Features

### Authentication

- Login
- JWT Authentication
- Password Encryption
- One Device Login Restriction

### User Management

- Create Users
- Update Users
- Delete Users
- Role Assignment
- Reporting Manager Assignment

### Attendance

- Check In
- Check Out
- GPS Location Capture

### Tracking

- Live Employee Tracking
- Route Monitoring
- Travel History

### Customer Management

- Customer Assignment
- Customer Tracking

### Visit Management

- Visit Logs
- Visit Notes
- Visit History

### Reports

- Attendance Reports
- Visit Reports
- Employee Reports
- Route Reports

### Notifications

- Push Notifications
- Attendance Alerts
- Visit Alerts

---

## Environment Variables

Create a .env file inside the root directory.

Example:

```env
PORT=5000

NODE_ENV=development

MONGO_URI=

JWT_SECRET=
JWT_EXPIRE=7d

BCRYPT_SALT=10

REDIS_URL=

AWS_ACCESS_KEY=
AWS_SECRET_KEY=
AWS_REGION=
AWS_BUCKET_NAME=

FCM_PROJECT_ID=
FCM_CLIENT_EMAIL=
FCM_PRIVATE_KEY=
```

---

## Installation

Clone Repository

```bash
git clone https://github.com/DeveloperShubham1/goka-backend.git
```

Navigate into project

```bash
cd goka-backend
```

Install dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

## Run Production Server

```bash
npm start
```

---

## Database

MongoDB is used as the primary database.

Recommended:

- MongoDB Atlas
- MongoDB Replica Set
- Proper Indexing

---

## Security Features

- JWT Authentication
- Password Hashing
- Helmet Security
- CORS Protection
- Input Validation
- Role-Based Authorization
- Device Restriction Login

---

## Future Enhancements

- Dynamic Forms
- Dynamic Reports
- Approval Workflows
- Audit Dashboard
- Advanced Analytics
- Geofencing
- AI-Based Insights

---

## License

Private Project

© iART Technologies Pvt. Ltd.
