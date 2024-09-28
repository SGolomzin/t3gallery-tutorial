# T3 Gallery

Original [YouTube tutorial link](https://www.youtube.com/watch?v=d5x0JCZbAJs).

## Tech stack
 - [NextJS](https://nextjs.org/) - framework
 - [Vercel](https://vercel.com/) - deployment base
 - [Clerk](https://clerk.com/) - authentication holder
 - [shadcn-ui](https://ui.shadcn.com/) - UI library
 - [UploadThing](https://uploadthing.com/) - files upload
 - [PostHog](https://posthog.com/) - analytics platform
 - [Upstash](https://upstash.com/) - serverless data (ratelimit)

##  TODO

- [x] Make it deploy (vercel)
- [x] Scaffold basic ui with mock data
- [x] Tidy up build process
- [x] Actually set up database (vercel postgres)
- [x] Attach database to UI
- [x] Add authentication (w/ clerk)
- [x] Add image upload
- [x] "taint" (server-only)
- [x] use Next/Image component
- [ ] Error management (w/ Sentry) - can't be implemented in Russia due to sanctions
- [x] Routing/image page (parallel route)
- [x] Update upload button to be less cringe
- [x] ShadUIify (specifically toasts)
- [x] Analytics (posthog)
- [x] Delete button (w/ Server Actions)
- [x] Ratelimiting (upstash)

## Challenges 
 - [ ] fix the page layout for images of different resolutions
 - [ ] "Selecting" images on the gallery page
 - [ ] "Infinite scroll"
 - [ ] Folders (Albums)