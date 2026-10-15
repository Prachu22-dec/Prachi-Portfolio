@echo off
title Prachi Barpete Portfolio Launcher
echo ========================================================
echo   Launching Prachi Barpete Portfolio
echo ========================================================
echo.
echo Opening portfolio directly in browser...
start "" "%~dp0index.html"

echo.
echo Starting Local Web Server on Port 3000 (No password needed)...
echo Press Ctrl+C in this window to stop the server.
echo.
python -m http.server 3000
pause
