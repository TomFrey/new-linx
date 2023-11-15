# VITE Starter 


## Server starten:
yarn dev
(Server läuft unter: http://localhost:5173/)


## Build starten (dist wird erstellt):
yarn build


## Server starten mit dem Inhalt vom dist Ordner:
yarn preview 



## Neues VITE Projekt aufsetzen:
yarn create vite



## SASS installieren:
- npm add -D sass
- Im File main.js den Pfad von css auf scss ändern (z.B. import './scss/main.scss')


## Notizen
- Alles was im public Ordner liegt, wird beim builden in den dist Ordner geschrieben. 
  Also z.B. zusätzliche .html Files

- 


## Mit dem VITE Starter Kit starten
- Zip von GitHub downloaden und entpacken
- yarn install (node_modules Folder wird anhand der dependencies in package.json gebildet)
- yarn dev (Server starten)
- neues Repo auf GitHub erstellen (Achtung ohne readme File, nicht initialieren)
- git init
- git add .
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/TomFrey/NEUESREPO.git
- git push -u origin main
