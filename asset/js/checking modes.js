// IMMEDIATE ACTION: Correctly sets color mode on <html> tag to prevent FOUC.
const savedThemeMode = localStorage.getItem('themeMode');
const htmlEl = document.documentElement; // Targets the <html> tag
const lightStyle = document.getElementById('light-style');
const darkStyle = document.getElementById('dark-style');

if (savedThemeMode === 'dark') {
    htmlEl.setAttribute('data-bs-theme', 'dark');
    if (lightStyle) lightStyle.setAttribute('disabled', 'true');
    if (darkStyle) darkStyle.removeAttribute('disabled');
} else {
    htmlEl.setAttribute('data-bs-theme', 'light');
    if (lightStyle) lightStyle.removeAttribute('disabled');
    if (darkStyle) darkStyle.setAttribute('disabled', 'true');
}
// The rest of the settings (sidebar/width) are now handled by the improved app.min.js
