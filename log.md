git init
npm init -y
npm install -D tslint typescript
npm install -S @types/google-apps-script
npm install -D @google/clasp

npx clasp login
mkdir src
npx clasp create --type sheets --title clasp-test --rootDir ./src

npx tslint --init


code src/main.ts
npx clasp push -P src
npx clasp open -P src
