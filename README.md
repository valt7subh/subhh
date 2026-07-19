# Terminal Portfolio for Subh

A customized terminal-style portfolio template based on the original Terminal Portfolio by Prithvi Yewale. This version has been tailored for "subh" with a clean black terminal aesthetic and reduced features.

## 🎨 Features

- **Pure Black Terminal**: Classic retro terminal look with bright green text on black background
- **Interactive Commands**: Type `help` in the terminal to see all available commands
- **Available Commands**:
  - `aboutme` - Learn about Subh
  - `projects` - View coding projects
  - `email` - Send an email
  - `history` - View command history
  - `help` - Display help message
  - `snake` - Play a quick Snake game
  - `clear` - Clear the terminal
  - `exit` - Close the terminal
  - `github` - Open GitHub profile

## ✨ What Was Removed

- ❌ Spotify widget functionality
- ❌ Cursor-following cat animation
- ❌ Background images
- ❌ Multiple theme switching
- ❌ Social media links section (watermark-like)
- ❌ Original creator watermarks

## 📝 How to Customize

### Update Your Information

1. **Edit `js/commands.js`**:
   - Change the email address: `var email = "mailto:your-email@example.com"`
   - Update your GitHub profile: `var github = "https://github.com/your-username"`
   - Modify the `aboutme` section with your bio and skills
   - Update the `projects` array with your actual projects

### Personalize Content

**In `aboutme` array**:
```javascript
let aboutme = [
  "<br>",
  `<div id="aboutme-section">`,
  `<span class='underline'>Hey, I'm Your Name! 👋</span>`,
  "<br>",
  `<li>Your bio line 1</li>`,
  `<li>Your bio line 2</li>`,
  // ... more content
];
```

**In `projects` array**:
```javascript
let projects = [
  "<br>",
  `<a href="your-project-link" target="_blank"><span class='underline'>Your Project Name</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Description of your project.
Built With:
- Technology 1
- Technology 2
</pre>`,
  // ... more projects
];
```

### Styling

**Colors** (in `styles.css` `:root` section):
```css
--color-primary: #00ff00;        /* Main green text */
--color-accent: #ff00ff;         /* Magenta accents */
--color-danger: #ff0000;         /* Red for errors */
--color-background: #000000;     /* Black background */
```

**Terminal Prompt** (in `styles.css`):
```css
#liner::before {
  content: "[subh@terminal]~$";  /* Change your username here */
}
```

## 🚀 How to Use

1. Open `index.html` in your web browser
2. Click in the terminal area
3. Start typing commands
4. Use Tab to autocomplete commands
5. Use arrow keys (up/down) to navigate command history

## 📦 File Structure

```
.
├── index.html        # Main HTML file
├── styles.css        # All styling
├── js/
│   ├── commands.js   # Command definitions and content
│   ├── main.js       # Main terminal logic
│   ├── caret.js      # Cursor/caret functionality
│   └── theme.js      # Theme initialization
└── assets/
    ├── favicon.png
    └── fonts/
        └── fantasquesansmonoregular.woff
```

## 🎮 Tips

- Type incomplete commands and press **Tab** to autocomplete
- Press **↑/↓** arrow keys to navigate command history
- Use **Ctrl+R** to reverse search through command history
- Try the **snake** command for a fun break!

## 📜 License

Original Template: Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)

Feel free to modify and use this template for your own portfolio!

## 🔗 Original Source

Based on [Terminal Portfolio](https://github.com/cosmicwanderer7/Terminal-Portfolio) by [Prithvi Yewale](https://github.com/cosmicwanderer7)
