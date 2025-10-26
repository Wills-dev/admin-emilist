# Emilist Admin

Emilist Admin is an admin dashboard used to manage Emilist project management platform. This dashboard is built with Next.js 15 (App Router), Redux, Tanstank query and TypeScript, enabling admins to monitor and manage jobs, projects, materials and verify users, businesses and certificates. The application is optimized for performance, and accessibility, using Tailwind CSS and Shadcn/UI for styling, Axios for external API requests, and Atomic Design for modular UI components.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [License](#license)

## Features

Emilist Admin offers a robust set of features within a dashboard :

- **Jobs**: View and manage jobs (Direct, Regular, Biddable, Reoccurring). View all jobs, user-applied jobs, user-uploaded jobs, and saved jobs.
- **Projects**: Manage projects created when a user is accepted for a job. View all projects or by ID.
- **Materials**: View and manage materials. View all materials or user-uploaded materials.
- **Services**: View and Manage services.
- **Users**: View and manage users.
- **Custom UI**: Reusable Modal, Containner, Tooltip, and InfoCard components styled with Tailwind, Shadcn/UI.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn/UI,
- **API Requests**: Axios, Tanstack query
- **Component Architecture**: Atomic Design (Atoms, Molecules, Organisms, Templates)
- **Global State Management**: Redux Tooltip
- **Fonts**: Google Fonts (Inter and exo)
- **Formatting**: Prettier

## Project Structure

The project is organized for modularity, scalability, and maintainability, with `src` folder:

<pre lang="markdown"> ```bash
project/
├── src/
│ ├── app/
│ │ ├── [...page].tsx # Dynamic routes for pages
│ │ ├── layout.tsx # Root layout for the app
│ │ ├── page.tsx # Home page
│ │ └── [feature]/ # Feature-specific pages (e.g., jobs/, projects/)
│ │     └── page.tsx
│ ├── anim/
│ │ └── _.ts # Reusable animation functions
│ ├── components/
│ │ ├── atoms/ # Smallest UI components (e.g., Button, Input)
│ │ │ └── _.tsx
│ │ ├── molecules/ # Combinations of atoms (e.g., FormField, NavLink)
│ │ │ └── _.tsx
│ │ ├── organisms/ # Complex UI components (e.g., Navbar, JobCard)
│ │ │ └── _.tsx
│ │ └── templates/ # Page-level layouts combining organisms
│ │     └── _.tsx
│ ├── features/
│ │ ├── auth/
│ │ │ ├── api/ # API calls for authentication
│ │ │ ├── components/ # Feature-specific components
│ │ │ ├── constants/ # Auth-specific constants
│ │ │ ├── hooks/ # Auth-specific hooks
│ │ │ ├── types/ # Auth-specific TypeScript types
│ │ │ └── helpers/ # Auth-specific helper functions
│ │ ├── jobs/
│ │ │ ├── api/
│ │ │ ├── components/
│ │ │ ├── constants/
│ │ │ ├── hooks/
│ │ │ ├── types/
│ │ │ └── helpers/
│ │ ├── projects/
│ │ │ ├── api/
│ │ │ ├── components/
│ │ │ ├── constants/
│ │ │ ├── hooks/
│ │ │ ├── types/
│ │ │ └── helpers/
│ │ ├── materials/
│ │ │ ├── api/
│ │ │ ├── components/
│ │ │ ├── constants/
│ │ │ ├── hooks/
│ │ │ ├── types/
│ │ │ └── helpers/
│ │ ├── reports/
│ │ │ ├── api/
│ │ │ ├── components/
│ │ │ ├── constants/
│ │ │ ├── hooks/
│ │ │ ├── types/
│ │ │ └── helpers/
│ │ ├── services/
│ │ │ ├── api/
│ │ │ ├── components/
│ │ │ ├── constants/
│ │ │ ├── hooks/
│ │ │ ├── types/
│ │ │ └── helpers/
│ │ ├── transactions/
│ │ │ ├── api/
│ │ │ ├── components/
│ │ │ ├── constants/
│ │ │ ├── hooks/
│ │ │ ├── types/
│ │ │ └── helpers/
│ │ ├── user/
│ │ │ ├── api/
│ │ │ ├── components/
│ │ │ ├── constants/
│ │ │ ├── hooks/
│ │ │ ├── types/
│ │ │ └── helpers/
│ ├── lib/
│ │ ├── constants/ # Global constants reusable across the app
│ │ ├── helpers/ # General helper functions
│ │ ├── hooks/ # Reusable hooks for cross-feature logic
│ │ └── utils.ts # Miscellaneous utility functions
│ ├── styles/
│ │ └── global.css # Global CSS styles (Tailwind CSS)
│ ├── types/
│ │ └── _.ts # General TypeScript type definitions
├── public/
│ ├── dummyImages/ # Temporary images to be deleted later
│ ├── icons/ # Icon assets
│ ├── images/ # Permanent image assets
│ └── favicon.ico # App favicon
├── middleware.ts # Next.js middleware for request handling
├── next.config.js # Next.js configuration
├── package.json # Project dependencies and scripts
├── package-lock.json # Lock file for dependency versions
├── README.md # Project documentation
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration
``` </pre>

## Getting Started

This is a Next.js TypeScript application built with a modular architecture, utilizing Atomic Design principles for UI components and a feature-based structure for domain logic. The project includes features like authentication, cart, jobs, projects, and more, styled with Tailwind CSS and enhanced with reusable animation functions. Follow the steps below to set up and run the project locally.
