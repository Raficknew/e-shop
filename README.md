## Why this or that?

1. I decided to create also pages for cart and product details page. This approach i used a lot in my projects, thats how i would structure it when i would move further with this project
2. I decided for simple CSS Modules because they are easy to read, scoped by default, have zero runtime cost and don't require any extra setup. CSS-in-JS would also work well for this type of project but taking the scope into consideration i went for modules because of simplicity
3. Normally i would store header in one place in layout.tsx to have it in every page but i needed to fetch logo from the REST API. Layouts persist across navigations and shouldn't make API calls, so the header is rendered by the page that owns the data
4. Context is quite handy here instead of global state (thats probably what i would be using in production environment). The cart uses a fake async request to simulate real API behavior with loading states rather than just incrementing a counter synchronously
5. I asked AI for the fallback image to not create my own for the wrongly fetched images. ProductImage is a separate client component to isolate the onError fallback logic so ProductCard doesn't need "use client"
6. I added basic error handling for page and requests
7. I wanted to do a mock fetch API request to be a lot similar to what REST API would look like, but in production i would use some library to fetch from external APIs - probably axios or react-query
8. Components are organized using atomic design (atoms, molecules, organisms, features) to keep responsibilities clear and components reusable - my common approach and components releated to features are stored under the feature folder

## How to run locally

1. Install dependencies:

```bash
pnpm install
```

2. Create a `.env` file based on the template:

```bash
cp .env.template .env
```

3. Add your API key to `.env`:

```
API_KEY=your_api_key_here
```

4. Run the development server:

```bash
pnpm dev
```
