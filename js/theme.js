'use strict';

const ThemeManager = {
  storageKey: 'rfa-theme',

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  },

  getSavedTheme() {
    return localStorage.getItem(this.storageKey);
  },

  getEffectiveTheme() {
    const saved = this.getSavedTheme();
    return (saved && saved !== 'auto') ? saved : this.getSystemTheme();
  },

  apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
    this._updateButton(theme);
  },

  _updateButton(theme) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (!icon) return;
    if (theme === 'dark') {
      icon.className = 'bi bi-sun';
      btn.setAttribute('title', 'Switch to light mode');
      btn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      icon.className = 'bi bi-moon';
      btn.setAttribute('title', 'Switch to dark mode');
      btn.setAttribute('aria-label', 'Switch to dark mode');
    }
  },

  toggle() {
    const next = this.getEffectiveTheme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem(this.storageKey, next);
    this.apply(next);
  },

  init() {
    this.apply(this.getEffectiveTheme());

    // Re-apply when the system preference changes (only if no manual override)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getSavedTheme() || this.getSavedTheme() === 'auto') {
        this.apply(e.matches ? 'dark' : 'light');
      }
    });

    // Wire up the toggle button once the DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
      const btn = document.getElementById('theme-toggle');
      if (btn) btn.addEventListener('click', () => this.toggle());
      this._updateButton(this.getEffectiveTheme());
    });
  }
};

// Apply theme immediately (before DOMContentLoaded) to prevent FOUC
ThemeManager.init();
