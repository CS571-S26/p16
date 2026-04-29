# 🗽 NYC Travel Guide

A React web application for exploring New York City neighborhoods and experiences. Users can build a personal bucket list, track visited places, and plan their trip.

**Live Site:** [https://cs571-s26.github.io/p16](https://cs571-s26.github.io/p16)

---

## Features

- **Browse Experiences** — Explore 6 hand-picked NYC experiences with search and category filtering
- **Neighborhoods** — Discover 6 NYC neighborhoods with highlights and vibes
- **Bucket List** — Add and remove places, persisted with localStorage
- **Visited Tracker** — Mark places as visited with a progress bar on your list
- **Plan Your Trip** — Fill out a trip planning form with validation (dates, email, traveler count, interests)

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero banner, experience cards, search & filter |
| Neighborhoods | `/neighborhoods` | 6 neighborhood cards with highlights |
| My List | `/my-list` | Bucket list with visited/to-visit split and progress bar |
| Plan Trip | `/plan-trip` | Accessible trip planning form |

## Components

`NavigationBar` · `Footer` · `Header` · `HeroSection` · `ExperienceCard` · `NeighborhoodCard` · `BucketList` · `BucketListItem` · `EmptyState` · `SearchBar` · `FilterButtons` · `Home` · `Neighborhoods` · `MyList` · `PlanTrip`

## Tech Stack

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/) (HashRouter for GitHub Pages)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap 5](https://getbootstrap.com/)

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

## Deployment

This project is deployed via GitHub Pages using `gh-pages`.

```bash
npm run deploy
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Run locally in development mode |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `npm run deploy` | Build and deploy to GitHub Pages |
