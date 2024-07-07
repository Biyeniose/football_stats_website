# Football Stats Web App

Follow instructions below to run the web app on `http:localhost:3000`

## Development flow

- Make sure you have Docker installed
- Clone or download the project then cd into it: `cd football_stats_website`
- Run the container for the app with : `docker compose up`
- Press `W` to enable Watch Mode or run `docker compose watch` in another Terminal
- Code changes on your machine should now sync with the code in the container

## Other uses

- To stop the container, kill the Terminal and run: `docker-compose down`
- (IMPORTANT) Remove all unused images: `docker image prune -a`
- Run with Watch Mode enabled: `docker compose up --watch`

### Details

| Service  | Path        | Tools                                                                                                                                                                                                                                                                             |
| -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend | `/frontend` | [![TypeScript](https://img.shields.io/badge/TypeScript-blue.svg)](https://www.typescriptlang.org/) [![Next](https://img.shields.io/badge/Next.js-black.svg)](https://nextjs.org/) [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC.svg)](https://tailwindcss.com/) |
| Backend  | `/api`      | [![TypeScript](https://img.shields.io/badge/TypeScript-blue.svg)](https://www.typescriptlang.org/) [![Express](https://img.shields.io/badge/Express.js-black.svg)](https://expressjs.com/) [![Supabase](https://img.shields.io/badge/Supabase-3ECF8E.svg)](https://supabase.io/)  |
