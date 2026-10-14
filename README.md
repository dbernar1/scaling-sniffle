# Notes

A simple notes app backed by a (flaky) async API. It works when the network is happy.

## Getting Started

```bash
npm install
npm run dev
```

The app is a single monolithic component in `src/NotesApp.jsx`. It includes a fake
async API that simulates network latency and fails randomly about 30% of the time.

## Your Tasks

### Task 1 — Break it apart

Refactor this into smaller, focused components and separate the data layer (the
fake `api`) from the UI. Aim for a structure you'd be comfortable maintaining.

### Task 2 — Optimistic updates

Add optimistic updates so the UI responds immediately when a note is added or
deleted, with proper rollback when the underlying request fails.

### Task 3 — Resilience

Make the app resilient: handle loading states, surface errors when the API
fails, and prevent duplicate submissions (for example, rapid double-clicks on
"Add").
