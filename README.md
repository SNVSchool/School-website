# Sri Nehru Lower Primary Convent School Website

A responsive website with a built-in Principal CMS designed for schools aiming for excellence in Navodaya Vidyalaya (JNV), Morarji Desai Residential School, and board entrance exams.

## Key Features

1. **Hall of Fame (Navodaya & Morarji Selections)**
   - Filter by Entrance Exam Category (Navodaya, Morarji Desai, Kittur/Sainik).
   - Filter by Batch/Academic Year (2025-2026, 2024-2025, 2023-2024).
   - Real-time search by student name or admitted school.
   - Laurel achievement cards with student photo, scores, and honor badges.

2. **Principal's Desk & Leadership Address**
   - High-resolution profile with designation, qualifications, and welcome message.

3. **Live Notice Board & Urgent Circular Ticker**
   - Ticker across the header for urgent announcements.
   - Categorized circulars (Admissions, Exams, Events, General) with quick view modals.

4. **Events & Multimedia Gallery**
   - Category filtering (Independence Day, Republic Day, Sports Meet, Annual Day, Science Fair).
   - Interactive Lightbox for high-resolution photos.
   - Embedded video player support for YouTube videos.

5. **No-Code Principal Admin Portal (CMS)**
   - Secured by administrative PIN (`principal123`).
   - Add new achievers, upload photos directly from phone or PC, set marks and admitted schools.
   - Publish urgent or general circulars.
   - Add gallery photos or YouTube videos.
   - Update school contact information, principal profile, and stats.
   - **Zero Database Dependency:** Persists automatically in browser local storage.
   - **One-Click Backup & Restore:** Export complete school data to a `.json` backup file or restore anytime.

6. **Admissions & Contact Inquiry**
   - Direct phone, email, and campus address.
   - Inquiry form for prospective parents.

---

## Deployment Options (Step-by-Step)

### Option 1: Netlify (Recommended - 100% Free & Fastest)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `school_website` folder or `school_website.zip`.
3. Your website goes live instantly on a free `.netlify.app` domain with free SSL (HTTPS).
4. (Optional) Connect your custom school domain (e.g., `vidyadhama.edu.in` or `.org`).

### Option 2: Vercel (Free)
1. Install Vercel CLI via terminal: `npm i -g vercel` or upload to GitHub.
2. In the folder, run `vercel` and press enter to accept defaults.
3. Your site is live globally on Vercel's high-speed CDN.

### Option 3: GitHub Pages (Free)
1. Create a new GitHub repository (e.g., `school-website`).
2. Push the files `index.html`, `styles.css`, and `app.js` to the `main` branch.
3. Go to **Settings** > **Pages** > Select `main` branch and click **Save**.
4. The site will be published at `https://<your-username>.github.io/school-website/`.

### Option 4: Shared Web Hosting (Hostinger / cPanel / GoDaddy)
1. Log into your hosting cPanel or Hostinger hPanel.
2. Open **File Manager** and navigate to `public_html`.
3. Upload `index.html`, `styles.css`, and `app.js`.
4. Your school website is immediately live on your domain.
