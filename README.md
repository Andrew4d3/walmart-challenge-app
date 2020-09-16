# Walmart Challenge Web Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run for development

First, run the development server:

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

First create an `.env.local` file with the API URL. Example:

```
NEXT_PUBLIC_API=http://localhost:8080
```

Then, build the image:

```bash
npm run docker-build
```

The image `walmart-challenge-app` would be ready to be deployed. You can also run the container locally by entering:

```bash
npm run docker-start
```

## Live demo in Heroku

https://nameless-dusk-14988.herokuapp.com/
