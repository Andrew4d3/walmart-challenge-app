# Walmart Challenge Web Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements
- Node JS 12.8.3
- Docker (for deployment)

## Run for development

First, install dependencies:

```bash
npm install
```

Create an `.env.local` file with the API URL. Example:

```
NEXT_PUBLIC_API=http://localhost:8080
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

Just run:

```bash
npm run test
```

## Run with Docker

Build the image:

```bash
npm run docker-build
```

The image `walmart-challenge-app` would be ready to be deployed. You can also run the container locally by entering:
(Remember to have your .env.local file put in place)

```bash
npm run docker-start
```

## Live demo in Heroku

https://nameless-dusk-14988.herokuapp.com/
