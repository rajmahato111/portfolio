# Portfolio Website

A modern, responsive portfolio website showcasing my work as an AI Software Engineer, featuring projects in LLM systems, RAG pipelines, and production-ready applications.

**Live Site:** [https://rajmahato111.github.io/portfolio/](https://rajmahato111.github.io/portfolio/)

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark Theme** - Modern dark UI with smooth animations
- **Interactive Components** - Project cards with modal details, skills showcase, timeline views
- **Contact Form** - EmailJS integration for direct email sending
- **Smooth Scrolling** - Single-page application with anchor navigation
- **Project Filtering** - Filter projects by category (Latest Project)
- **Typewriter Effect** - Dynamic role display in hero section

## 🛠️ Tech Stack

- **Frontend:** React 18.3
- **Styling:** Styled Components, Material-UI
- **Email Service:** EmailJS
- **Icons:** React Icons, Material-UI Icons
- **Animations:** Typewriter Effect
- **Deployment:** GitHub Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajmahato111/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS (Optional but Recommended)**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_SERVICE_ID=your_service_id
   REACT_APP_TEMPLATE_ID=your_template_id
   REACT_APP_PUBLIC_KEY=your_public_key
   ```
   
   See the [EmailJS Configuration](#emailjs-configuration) section below for detailed setup.

4. **Start the development server**
   ```bash
   npm start
   ```
   
   The app will open at [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized for production with minified files and performance enhancements.

### `npm run deploy`
Builds the app and deploys it to GitHub Pages using the `gh-pages` package.

### `npm test`
Launches the test runner in interactive watch mode.

## 🔧 EmailJS Configuration

The contact form uses EmailJS for sending emails. Here's how to set it up:

### Step 1: Create EmailJS Account
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Verify your email address

### Step 2: Create Email Service
1. Go to **Email Services** in the dashboard
2. Add a service (Gmail, Outlook, etc.)
3. Follow the setup instructions for your email provider
4. Note your **Service ID** (e.g., `service_oiw7krh`)

### Step 3: Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Use this template:

   **Subject:** `{{subject}} - Portfolio Contact Form`
   
   **Template Content:**
   ```
   Hi Raj,
   
   You have received a new message from your portfolio website:
   
   From: {{from_name}}
   Email: {{from_email_id}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   This email was sent from your portfolio contact form.
   ```

3. **Template Settings (Important):**
   - **To Email:** Your recipient email
   - **From Name:** `{{from_name}}` (must match exactly)
   - **Reply To:** `{{from_email_id}}` (must match exactly)
   - **Subject:** `{{subject}} - Portfolio Contact Form`

4. Save and note your **Template ID** (e.g., `template_lh3aud6`)

### Step 4: Get Public Key
1. Go to **Account** → **General** → **API Keys**
2. Copy your **Public Key**

### Step 5: Configure Environment Variables
Create a `.env` file in the project root:
```env
REACT_APP_SERVICE_ID=service_oiw7krh
REACT_APP_TEMPLATE_ID=template_lh3aud6
REACT_APP_PUBLIC_KEY=your_public_key_here
```

### Step 6: Restart Development Server
After updating `.env`, restart your dev server:
```bash
npm start
```

**Note:** If EmailJS is not configured, the form will use a `mailto:` fallback that opens the user's email client.

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```
   
   This creates a production build in the `build/` folder with environment variables embedded.

2. **Deploy**
   ```bash
   npm run deploy
   ```
   
   This will automatically:
   - Build the project
   - Deploy to the `gh-pages` branch
   - Make it available at `https://username.github.io/portfolio/`

### Important Notes for Deployment

- **Environment variables are embedded at BUILD TIME**, not runtime
- The `.env` file is ignored by git (in `.gitignore`) for security
- Make sure your `.env` file is configured before running `npm run build`
- After deployment, EmailJS will work in production because the credentials are baked into the build

## 📁 Project Structure

```
portfolio/
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   │   ├── Contact/       # Contact form component
│   │   ├── HeroSection/   # Hero section with bio
│   │   ├── Projects/      # Projects showcase
│   │   ├── Skills/         # Skills display
│   │   ├── Experience/    # Work experience timeline
│   │   ├── Education/     # Education timeline
│   │   └── ...
│   ├── data/
│   │   └── constants.js   # Portfolio data (bio, projects, skills, etc.)
│   ├── images/            # Image assets
│   ├── themes/            # Theme configuration
│   └── utils/             # Utility functions
├── .env                   # Environment variables (not in git)
└── package.json
```

## 🎨 Customization

To customize the portfolio for your own use:

1. **Update Personal Information**
   - Edit `src/data/constants.js`
   - Update `Bio` object with your details
   - Update `skills`, `experiences`, `education`, and `projects` arrays

2. **Update Images**
   - Replace `src/images/RajImage.jpeg` with your own photo
   - Update project images in the `projects` array

3. **Customize Colors/Theme**
   - Edit `src/utils/Themes.js` to change color scheme
   - Modify styled components in individual component files

## 📄 License

This project is open source and available for personal and commercial use.

## 📧 Contact

For questions or opportunities, reach out via:
- **Email:** rajmahato111@gmail.com
- **LinkedIn:** [linkedin.com/in/rajmahato111](https://www.linkedin.com/in/rajmahato111/)
- **GitHub:** [github.com/rajmahato111](https://github.com/rajmahato111)

---

**Built with React and deployed on GitHub Pages**
