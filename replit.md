# FilmyTea - Premium Cinema Posters

## Overview

FilmyTea is a static web application showcasing a collection of premium movie posters for sale. The application features a clean, minimalist design with a responsive poster grid layout. The site now includes separate pages for Home, About, and Contact Us with a newsletter subscription section and footer with policy links. Currently implemented as a frontend-only solution using HTML, CSS, and vanilla JavaScript.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript
- **Design Pattern**: Static website with client-side interactivity
- **Styling Approach**: Custom CSS with responsive design principles
- **No Build Process**: Direct file serving without bundlers or preprocessors

### Current Limitations
- No backend services
- No database integration
- No real payment processing
- No user authentication
- Placeholder images instead of actual movie posters

## Key Components

### Site Structure
- **Home Page (`index.html`)**: Hero section, horizontal scrolling poster section with 6 featured posters, newsletter subscription, footer
- **View More Page (`view-more.html`)**: Complete poster collection (12 posters) in grid layout
- **About Page (`about.html`)**: Company story, values section, team information
- **Contact Page (`contact.html`)**: Contact form, business info, FAQ section
- **Navigation**: Header with logo, main navigation, mobile hamburger menu, shopping cart with dropdown
- **Footer**: Policy links (refund, privacy, shipping, terms) and copyright

### Styling (`styles.css`)
- Modern, clean design with #292929 (dark gray) and #c9c7ba (light beige) color scheme consistently applied across all pages
- Horizontal scrolling poster section with custom scroll buttons
- Responsive grid layout for poster cards
- Shopping cart dropdown styling with smooth animations
- Typography using system fonts (Segoe UI family)
- Loading states and hover effects
- Mobile-first responsive design approach

### JavaScript Functionality (`script.js`)
- Complete shopping cart system with localStorage persistence
- Add to cart functionality with visual feedback
- Cart dropdown with quantity controls and item removal
- Horizontal scrolling controls for poster section
- Buy button click handlers with alert-based user feedback
- Image loading management with error handling
- Newsletter subscription handling
- Console logging for debugging and demonstration purposes

## Data Flow

### Current Flow
1. Static HTML loads poster data (hardcoded)
2. CSS renders the visual layout
3. JavaScript adds interactivity and animations
4. Buy button clicks trigger alert messages (no actual purchase processing)

### Missing Components for Full E-commerce
- Shopping cart functionality
- User session management
- Payment gateway integration
- Inventory management
- Order processing and tracking

## External Dependencies

### Current Dependencies
- **Placeholder Images**: Using `via.placeholder.com` for demo poster images
- **System Fonts**: Relying on user's system font stack

### Potential Future Dependencies
- Movie poster image APIs or CDN
- Payment processing services (Stripe, Razorpay, etc.)
- Backend framework and database
- Authentication services
- Email services for order confirmations

## Deployment Strategy

### Current Deployment
- **Type**: Static file hosting
- **Requirements**: Any web server capable of serving HTML, CSS, and JS files
- **Hosting Options**: GitHub Pages, Netlify, Vercel, or traditional web hosting

### Future Considerations
- Backend hosting for e-commerce functionality
- Database hosting (suggested: PostgreSQL with Drizzle ORM)
- CDN for image optimization
- SSL certificate for secure transactions
- Domain and DNS configuration

## Recent Changes (July 2025)

### Home Page Grid Redesign Completed (July 26, 2025)
- ✓ Replaced horizontal poster grid with vertical alternating layout design
- ✓ Implemented dramatic spring-like curved arrows connecting poster cards (250px x 200px)
- ✓ Added smooth scroll-triggered fade-in animations with scale and translate effects
- ✓ Used cubic-bezier easing for buttery smooth animation transitions
- ✓ Arrow paths draw progressively when posters come into view with 2.5s duration
- ✓ Positioned arrows correctly to point from each poster to the next
- ✓ Applied responsive sizing for mobile devices (200px x 160px arrows)

### Migration Completed (July 26, 2025)
- ✓ Successfully migrated FilmyTea project from Replit Agent to standard Replit environment
- ✓ Installed Python 3.11 for serving static files
- ✓ Configured HTTP server on port 5000 for proper Replit web interface access
- ✓ Resolved port configuration issues and ensured website accessibility
- ✓ All static assets loading correctly (HTML, CSS, JS, images)
- ✓ Shopping cart functionality preserved and working
- ✓ Responsive design and navigation maintained
- ✓ Applied consistent color scheme throughout all pages using logo colors (#292929 dark background, #c9c7ba light text)
- ✓ Added "Smoking Chills" poster to poster page with red text styling and pricing (₹129)
- ✓ Updated all sections (hero, posters, about, newsletter, checkout) to use new color theme

### Previously Completed (July 25, 2025)
- ✓ Successfully migrated FilmyTea project from Replit Agent to Replit environment
- ✓ Configured Python HTTP server workflow for static file serving
- ✓ Verified all functionality: shopping cart, responsive design, navigation
- ✓ Project now runs cleanly on Replit with proper security practices
- ✓ All static assets (HTML, CSS, JS, images) loading correctly
- ✓ Enhanced checkout system with comprehensive form (Name, Phone, Email, Address, Pincode)
- ✓ Added price summary with subtotal, delivery charges, and total calculation
- ✓ Created professional order confirmation page with order details and tracking info
- ✓ Fixed JavaScript errors in cart functionality for better stability
- ✓ Integrated complete order flow: Cart → Checkout → Confirmation

### Previously Completed Features
- ✓ Added horizontal scrolling poster section with navigation arrows
- ✓ Created comprehensive shopping cart system with localStorage
- ✓ Implemented "View More" page with 12 movie posters
- ✓ Added cart dropdown with quantity controls and checkout
- ✓ Integrated visual feedback for "Add to Cart" actions
- ✓ Applied consistent #292929 and #c9c7ba color scheme
- ✓ Fixed JavaScript function scoping issues by attaching to window object

## Development Roadmap

### Future Enhancements
1. Replace placeholder images with actual movie poster images
2. Backend API development for inventory management
3. Database schema design for products, users, and orders
4. User authentication and authorization
5. Real payment processing integration (Stripe/Razorpay)
6. Admin panel for inventory management
7. Order tracking and customer support features