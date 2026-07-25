# Local Testing Guide

This sandbox that built this project cannot reach your MongoDB Atlas cluster
(it has no outbound network access to it), so every backend change has been
verified for correctness — syntax-checked, response shapes cross-checked
against the actual controller code, boot-tested — but not proven end-to-end
against real data. Run through this checklist once locally before handing
off to your client.

## 1. Start the backend

```
cd backend
npm install
npm run dev
```

Watch the terminal output:
- `Server running on port 5000` — good, Express started.
- If you see a MongoDB connection error, double check `MONGODB_URI` in
  `backend/.env` and that your Atlas cluster's network access allows your
  current IP.

Quick sanity check in a browser or `curl`:
```
curl http://localhost:5000/api/health
```
Should return `{"status":"ok"}` immediately (this doesn't touch the
database, so it working just confirms the server itself is up).

Then check a database-backed route:
```
curl http://localhost:5000/api/products?limit=2
```
If this hangs for ~10 seconds and then returns a timeout error, that's a
MongoDB connection issue, not an application bug — recheck `MONGODB_URI`
and Atlas network access rules.

## 2. Start the frontend

```
cd frontend
cp .env.example .env
npm install
npm run dev
```

Open `http://localhost:5173`.

## 3. Storefront checklist

- [ ] Homepage loads products (not blank, not stuck loading)
- [ ] Register a new customer account, then log in with it
- [ ] Add a product to the cart, refresh the page — cart should still show
      the item (confirms it's persisting to the backend, not just local state)
- [ ] Add a product to the wishlist, refresh — same check
- [ ] Go through checkout with a test address and place an order — note the
      order number it gives you
- [ ] Use "Track Order" with that order number + the email you checked out
      with — it should show the real order status

## 4. Admin panel checklist

You'll need an existing admin account. If you don't have one yet, check
whether `backend/seedAdmin.js` is meant to be run once:
```
cd backend
node seedAdmin.js
```
(Only do this if you don't already have an admin login — check with
whoever set up the original database first, since it may create a
duplicate or conflict with an existing account.)

- [ ] Log in at `http://localhost:5173/admin/login`
- [ ] Dashboard loads with real numbers (not all zeros, unless your store
      genuinely has no orders/products yet)
- [ ] Products page lists your real catalog; try adding a test product
      with an image
- [ ] Orders page shows the test order you placed in step 3; try changing
      its status
- [ ] CMS > Home Page, About Us, Banners, FAQs, Team Members — try adding
      one of each
- [ ] CMS > Website Settings and SEO — confirm the fields show your real
      existing settings, not blanks (blank fields would mean the field
      names don't match — flag this if you see it)
- [ ] Logs page shows your test actions with your admin name attached (not
      blank/undefined) — this confirms the audit-trail fix is working

## 5. If something doesn't match

If any admin screen shows blank/zero data that you know should be
populated, it usually means one specific field name doesn't match between
what the frontend expects and what your database actually has (e.g. a
custom field added to a model after this integration was built). That's
a quick, targeted fix — check the browser console/network tab for the
actual API response and compare it to what the page expects.
