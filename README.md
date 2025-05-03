# Restapify template for Railway

Template to deploy your restapify mocked API on the [Railway](https://railway.app/) platform.

## Getting started

Open a new terminal and serve the mocked API:

```bash
yarn restapify serve api/
```

Then go to the dashboard by adding `/restapify` to the browser url.

This example serve the routes:

```
GET    /api/me
GET    /api/posts
GET    /api/users
GET    /api/users/[userid]
POST   /api/users/[userid]
DELETE /api/users/[userid]
GET    /api/users/[userid]/comments
```

[Documentation](https://restapify.vercel.app/docs)
