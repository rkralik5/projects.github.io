# Portfolio Website - Style Guide & Documentation

## 🎨 **How to Maintain Consistent Styling Across All Pages**

This portfolio uses a modular approach to maintain consistent styling across all pages. Here's how it works:

### **📁 File Structure**
```
portfolio/
├── index.html          # Main homepage
├── about.html           # Example sub-page
├── page-template.html   # Template for new pages
├── styles.css           # Main stylesheet (shared across all pages)
├── scripts.js           # Main JavaScript file (shared across all pages)
└── README-styles.md     # This documentation file
```

### **🔗 Linking External Files**

Every page should include these two lines in the `<head>` section:
```html
<!-- External CSS file for consistent styling -->
<link rel="stylesheet" href="styles.css">
```

And this line before the closing `</body>` tag:
```html
<!-- External JavaScript file for interactive functionality -->
<script src="scripts.js"></script>
```

### **🎨 Available CSS Classes & Components**

#### **Layout Classes**
- `.section` - Main content sections with proper spacing
- `.content-card` - White cards with shadow and rounded corners
- `.hero` - Large header sections with gradient background

#### **Navigation**
- `header` and `nav` - Fixed navigation bar
- `.logo` - Brand/logo styling
- `.nav-menu` - Navigation menu items
- `.menu-toggle` - Mobile hamburger menu

#### **Buttons**
- `.btn` - Primary button (green)
- `.btn-secondary` - Secondary button (lighter green)
- `.cta-button` - Call-to-action button with animation

#### **Cards & Content**
- `.project-card` - Cards for projects or content items
- `.projects-grid` - Grid layout for cards (responsive)
- `.project-links` - Links within cards

#### **Utility Classes**
- `.text-center`, `.text-left`, `.text-right` - Text alignment
- `.mb-1`, `.mb-2`, `.mb-3` - Margin bottom (1rem, 2rem, 3rem)
- `.mt-1`, `.mt-2`, `.mt-3` - Margin top (1rem, 2rem, 3rem)
- `.p-1`, `.p-2`, `.p-3` - Padding (1rem, 2rem, 3rem)

### **🎨 CSS Variables (Nature Green Theme)**

The website uses CSS variables for consistent theming. You can use these in your custom styles:

```css
:root {
    --primary-green: #2d5016;      /* Dark forest green */
    --secondary-green: #4a7c59;    /* Medium green */
    --light-green: #8fbc8f;        /* Light green */
    --pale-green: #f0f8f0;         /* Very light green */
    --white: #ffffff;              /* Pure white */
    --text-dark: #2c3e2c;          /* Dark green text */
    --text-light: #ffffff;         /* White text */
    --shadow: rgba(45, 80, 22, 0.1); /* Green-tinted shadow */
    --transition: all 0.3s ease;   /* Smooth transitions */
}
```

### **📝 Creating New Pages**

1. **Copy the template**: Start with `page-template.html`
2. **Update meta tags**: Change title, description, etc.
3. **Add your content**: Use the existing classes for consistency
4. **Update navigation**: Make sure the current page is marked as active

#### **Example Navigation Update**
```html
<ul class="nav-menu" id="nav-menu">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html" class="active">About Me</a></li>  <!-- Active page -->
    <li><a href="projects.html">Projects</a></li>
    <li><a href="contact.html">Contact</a></li>
</ul>
```

### **🎯 Best Practices**

#### **1. Use Existing Classes First**
Before writing custom CSS, check if there's already a class that does what you need.

#### **2. Follow the Color Scheme**
Always use the CSS variables for colors to maintain consistency:
```css
/* Good */
.my-custom-element {
    background-color: var(--light-green);
    color: var(--text-dark);
}

/* Avoid */
.my-custom-element {
    background-color: #8fbc8f;
    color: #2c3e2c;
}
```

#### **3. Maintain Responsive Design**
The existing styles are mobile-first. If you add custom styles, make sure they work on all screen sizes.

#### **4. Use Semantic HTML**
Follow the existing pattern of using semantic HTML elements:
```html
<main>
    <section class="section">
        <div class="content-card">
            <h2>Section Heading</h2>
            <p>Content goes here...</p>
        </div>
    </section>
</main>
```

### **🔧 Customizing Individual Pages**

If you need page-specific styles, add them in a `<style>` block in the page's head:

```html
<head>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Page-specific styles */
        .special-section {
            background-color: var(--pale-green);
            border-left: 4px solid var(--primary-green);
        }
    </style>
</head>
```

### **📱 Mobile Responsiveness**

The styles include responsive breakpoints:
- **Mobile**: `@media (max-width: 768px)`
- **Tablet**: `@media (max-width: 1024px)`

All existing components are already responsive. If you add custom elements, test them on different screen sizes.

### **🚀 Adding Interactive Features**

The `scripts.js` file contains shared functionality:
- Mobile menu toggle
- Smooth scrolling
- Scroll animations
- Form validation
- Accessibility features

For page-specific JavaScript, add it in a separate `<script>` tag after including `scripts.js`.

### **📚 Examples**

Check out these files for examples:
- `index.html` - Homepage with hero section and project grid
- `about.html` - Sub-page with content cards and skills grid
- `page-template.html` - Template showing all available components

### **🔄 Updating Shared Styles**

To change the theme or add new shared components:
1. Edit `styles.css` for styling changes
2. Edit `scripts.js` for functionality changes
3. All pages will automatically use the updated styles

This approach ensures that when you update your theme or add new features, all pages stay consistent without having to edit each page individually!

---

## 🎨 **Quick Reference**

### **Common Patterns**
```html
<!-- Content section -->
<section class="section">
    <div class="content-card">
        <h2>Heading</h2>
        <p>Content...</p>
    </div>
</section>

<!-- Button -->
<a href="#" class="btn">Click Me</a>

<!-- Card grid -->
<div class="projects-grid">
    <div class="project-card">
        <div class="project-card-content">
            <h3>Title</h3>
            <p>Description</p>
        </div>
    </div>
</div>
```

This modular approach makes it easy to maintain consistency while allowing flexibility for individual page customization! 🎯
