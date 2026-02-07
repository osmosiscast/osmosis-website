(function () {
  var STORAGE_KEY = "theme";
  var stored = localStorage.getItem(STORAGE_KEY);
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var mode = stored || (prefersDark ? "dark" : "light");
  document.documentElement.className = mode;

  window.toggleTheme = function () {
    mode = mode === "dark" ? "light" : "dark";
    document.documentElement.className = mode;
    localStorage.setItem(STORAGE_KEY, mode);
  };
})();
