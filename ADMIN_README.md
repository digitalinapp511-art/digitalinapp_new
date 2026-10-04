
# DigitalInApp Admin Dashboard Update

The admin dashboard has been split into maintainable React files while keeping the existing website and backend intact.

## Admin routes

- `/admin-login`
- `/admin`
- `/admin/projects`
- `/admin/clients`
- `/admin/team`
- `/admin/content`
- `/admin/blogs`
- `/admin/blogList`
- `/admin/security`

All admin pages are protected by `ProtectedAdminRoute`.

## Demo admin login

- Email: `digitalinapp511@gmail.com`
- Password: `digitalinapp@1234`

## Demo data

Projects, clients, team, content/leads and blogs use frontend demo/localStorage data. No backend CRUD changes were made.

When you connect your backend later, replace the demo/localStorage logic in the corresponding admin page with your API calls.

## Netlify SPA routing

`frontend/public/_redirects` contains:

```text
/*    /index.html   200
```

This allows direct browser refreshes on `/admin/...` and other React routes.
