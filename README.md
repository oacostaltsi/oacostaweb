# Oscar Acosta - Professional Academic Website

A multilingual professional academic website for Dr. Oscar Acosta, Full Professor at Université de Rennes, showcasing research in Biomedical Engineering and Medical Imaging.

## 🌍 Features

- **Multilingual Support**: English, French, and Spanish with localStorage persistence
- **Responsive Design**: Mobile-first approach for all devices
- **Professional Aesthetic**: Clean, minimal academic design
- **Performance Optimized**: Fast load times and smooth interactions
- **Accessibility**: Semantic HTML and WCAG-compliant design
- **Interactive Elements**: Mobile menu, smooth scrolling, scroll animations

## 📁 Project Structure

```
ProfessionalWebPage/
├── index.html              # Main HTML file with i18n attributes
├── assets/
│   ├── css/
│   │   └── style.css       # Professional styling with responsive design
│   ├── js/
│   │   ├── i18n.js         # Multilingual translation system
│   │   └── script.js       # Interactive features and animations
│   └── images/             # Project logos and images (optional)
└── README.md               # This file
```

## 🚀 Quick Start

### Local Development

1. **Open the website locally**:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (with http-server)
   http-server
   ```

2. **Access in browser**: `http://localhost:8000`

3. **Test language switching**: Use the language buttons (EN, FR, ES) in the top-right corner

### Deployment to GitHub Pages

1. **Initialize git repository** (if not already done):
   ```bash
   cd ProfessionalWebPage
   git init
   git add .
   git commit -m "Initial commit: Professional website"
   ```

2. **Create GitHub repository** on GitHub.com and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/professional-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose `main` branch as source
   - Save

4. **Access your live site**: `https://YOUR_USERNAME.github.io/professional-website/`

## 🌐 Multilingual System

The website uses a custom i18n (internationalization) system:

- **Language files**: All translations are in `assets/js/i18n.js`
- **Implementation**: HTML elements use `data-i18n` attributes
- **Persistence**: Selected language is saved to localStorage
- **Default**: English (en) is the default language

### Adding New Translations

1. Open `assets/js/i18n.js`
2. Add new keys to the `translations` object for each language:
   ```javascript
   'unique.key': 'English text',  // en
   'unique.key': 'Texte français', // fr
   'unique.key': 'Texto español',  // es
   ```
3. Use the key in HTML: `<element data-i18n="unique.key"></element>`

## 🎨 Customization

### Colors
Edit the CSS custom properties in `assets/css/style.css`:
```css
:root {
    --primary-color: #1a3a52;
    --secondary-color: #2d5a7b;
    --accent-color: #0066cc;
    /* ... */
}
```

### Content
Edit `index.html` to change:
- Bio and introduction
- Research areas
- Project descriptions
- Contact information
- Social links

### Styling
Modify `assets/css/style.css` for:
- Fonts and typography
- Layout and spacing
- Colors and gradients
- Responsive breakpoints

## 📊 Sections

1. **Navigation Bar**: Sticky navigation with language switcher
2. **Hero Section**: Eye-catching introduction and call-to-action
3. **About**: Professional background and expertise
4. **Research Areas**: 6 key research focus areas
5. **Current Projects**: 6 active funded research projects
6. **Publications**: Links to Google Scholar, ORCID, LinkedIn
7. **Contact**: Multiple contact methods
8. **Footer**: Quick links and social media

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels where appropriate
- High contrast colors (WCAG AA compliant)
- Keyboard navigation support
- Mobile responsive design

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

- **Desktop**: Full layout with multi-column grids
- **Tablet** (768px and below): Adjusted layouts
- **Mobile** (480px and below): Single column, optimized touch targets

## 🎯 SEO Optimization

- Semantic HTML structure
- Meta tags for description and open graph
- Optimized heading hierarchy
- Fast load times
- Mobile responsive design

## 📝 Content Information

**Oscar Acosta Profile:**
- Full Professor at Université de Rennes
- LTSI INSERM U1099
- Research: Biomedical Engineering, Medical Imaging, Radiotherapy
- Publications: 216+
- Funded Projects: 8
- Experience: 25+ years

## 🔒 Privacy

- No analytics tracking (unless configured separately)
- No cookies set (except localStorage for language preference)
- External links open in new tabs

## 🚀 Performance Features

- Lightweight CSS and JavaScript
- Smooth animations and transitions
- Optimized for fast load times
- Lazy loading ready (can be added)
- Mobile-first approach

## 📞 Support & Maintenance

### Common Tasks

**Update Profile Information:**
1. Edit text in `index.html`
2. Update publication links
3. Modify project descriptions

**Change Theme Colors:**
1. Edit CSS variables in `assets/css/style.css`
2. Update `--primary-color`, `--secondary-color`, `--accent-color`

**Add New Projects:**
1. Duplicate a project card in the projects section
2. Update project title, dates, and description
3. Add translations in `assets/js/i18n.js`

## 📄 License

© 2026 Oscar Acosta. All rights reserved.

## 🔗 External Links

- [Google Scholar](https://scholar.google.com/citations?hl=en&user=rHHitXEAAAAJ&view_op=list_works&sortby=pubdate)
- [ORCID Profile](https://orcid.org/0000-0002-5447-1479)
- [LinkedIn](https://www.linkedin.com/in/oscar-acosta-355438169/)
- [LTSI Laboratory](https://www.ltsi.univ-rennes1.fr/)

---

**Last Updated**: 2026
**Version**: 1.0
