mkdir -p ./frontend
rm -rf ./frontend/*
cd ./frontend || exit
rm -rf ./dist
ls
npm install
npm run build
zip -r -j frontend.zip ./dist/frontend/. -x "*.DS_Store"
mv frontend.zip ../build/frontend
cd ../build/frontend || exit
unzip frontend.zip
rm -f frontend.zip