@echo off
:loop
set /p command="pakku>"
java -jar pakku.jar %command%
goto loop
pause