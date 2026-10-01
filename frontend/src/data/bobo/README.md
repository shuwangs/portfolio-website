# Bobo album

The album lives at `/bobo/album`. No server or database is needed.

## Add a photo

1. Put a web-sized JPG, PNG, or WebP in `frontend/public/image/bobo/`.
2. Add an entry to `photos.js` in this directory:

```js
{
  id: 'keyboard-supervisor', // Unique, stable ID.
  src: '/image/bobo/keyboard-supervisor.jpg',
  alt: 'Bobo sitting beside a laptop', // Describe the actual photo.
  caption: 'Keeping an eye on the code.',
  date: '2026-10-01', // Optional actual photo date; use '' to omit.
},
```

Photos appear in the order listed. Cards crop to 4:5; the viewer shows the full
photo. With two or more photos, the viewer automatically enables previous/next
buttons and Left/Right arrow keys. Escape closes the viewer.

Use reasonably compressed images (ideally under 500 KB) to keep loading fast.
Run `npm run build` from `frontend` after editing to verify the build.
