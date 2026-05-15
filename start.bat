@echo off
title Запуск npm run start (админ)

:: Проверка наличия прав администратора
openfiles >nul 2>&1
if %errorlevel%==0 goto :run

:: Нет прав — создаём временный VBS-скрипт для вызова через UAC
set "vbs=%temp%\~getadmin_%random%.vbs"
(
echo Set UAC = CreateObject("Shell.Application"^)
echo UAC.ShellExecute "%~s0", "", "", "runas", 1
echo WScript.Quit
) > "%vbs%"

:: Запускаем VBS и удаляем его
cscript //nologo "%vbs%"
del "%vbs%" 2>nul
exit /b

:run
:: Здесь мы уже с правами администратора
cd /d "%~dp0"
echo Запуск npm run start...
npm run start
pause