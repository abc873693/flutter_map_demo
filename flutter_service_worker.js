'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "75611cdc7cd32de4b8af4b9c8ccdd03f",
"index.html": "430fbecb0bb2dd58834ca56677190629",
"/": "430fbecb0bb2dd58834ca56677190629",
"main.dart.js": "a6061020f46a3004d72eae109edab666",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "15f73b7e8a8209c2206210b3ac8dea1b",
"assets/AssetManifest.json": "8cc00a4428e2d5152322acec6df3c63d",
"assets/NOTICES": "944d572d5178b27276b6445171c8b7c5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/map/anholt_osmbright/12/2181/1259.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2181/1262.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2181/1260.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2181/1261.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2180/1259.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2180/1262.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2180/1260.png": "47d6c594114b93b1f648cd1a7a21220b",
"assets/assets/map/anholt_osmbright/12/2180/1261.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2178/1259.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2178/1262.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2178/1260.png": "6df0c1ce4c283deed68e3accf8ad6d6c",
"assets/assets/map/anholt_osmbright/12/2178/1261.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2177/1259.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2177/1262.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2177/1260.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2177/1261.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2179/1259.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2179/1262.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/12/2179/1260.png": "88ac2c227e4aec4a7d5e0ff8f81eae22",
"assets/assets/map/anholt_osmbright/12/2179/1261.png": "d15669090d4b38089824e12ba2dd08aa",
"assets/assets/map/anholt_osmbright/13/4356/2519.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4356/2518.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4356/2524.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4356/2523.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4356/2522.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4356/2520.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4356/2521.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4360/2519.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4360/2518.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4360/2524.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4360/2523.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4360/2522.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4360/2520.png": "998e6b358871e53cca6e51c99b38b917",
"assets/assets/map/anholt_osmbright/13/4360/2521.png": "be631a493b3f98164a8b925d6fe5e022",
"assets/assets/map/anholt_osmbright/13/4358/2519.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4358/2518.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4358/2524.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4358/2523.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4358/2522.png": "27d4c7e9a3f10cbff0e525c99a11eb31",
"assets/assets/map/anholt_osmbright/13/4358/2520.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4358/2521.png": "b111deeb9d1071fa01e4d8d16a6cd5d1",
"assets/assets/map/anholt_osmbright/13/4359/2519.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4359/2518.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4359/2524.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4359/2523.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4359/2522.png": "0a42aec907fc062e62d9c746902c62a1",
"assets/assets/map/anholt_osmbright/13/4359/2520.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4359/2521.png": "59fe8d7bf4475deed459ffad0b2b7571",
"assets/assets/map/anholt_osmbright/13/4361/2519.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4361/2518.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4361/2524.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4361/2523.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4361/2522.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4361/2520.png": "a5a2d7d340feb520e707ab6e10b98d5f",
"assets/assets/map/anholt_osmbright/13/4361/2521.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4357/2519.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4357/2518.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4357/2524.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4357/2523.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4357/2522.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4357/2520.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4357/2521.png": "25e7fbfa62d6c8d9a83b0dd809577e3f",
"assets/assets/map/anholt_osmbright/13/4355/2519.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4355/2518.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4355/2524.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4355/2523.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4355/2522.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4355/2520.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4355/2521.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4363/2519.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4363/2518.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4363/2524.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4363/2523.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4363/2522.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4363/2520.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4363/2521.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4362/2519.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4362/2518.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4362/2524.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4362/2523.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4362/2522.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4362/2520.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4362/2521.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4354/2519.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4354/2518.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4354/2524.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4354/2523.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4354/2522.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4354/2520.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/13/4354/2521.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5042.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8724/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5042.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8723/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8715/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8715/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8715/5042.png": "71ded1c1d9ca7b5ae82264057d7e894b",
"assets/assets/map/anholt_osmbright/14/8715/5043.png": "ebd86f5ec307949ce496c0de74a4f89a",
"assets/assets/map/anholt_osmbright/14/8715/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8715/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8715/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8715/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8715/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8715/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8715/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8715/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8715/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8715/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5042.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8712/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5042.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8713/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5042.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8714/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5041.png": "111641709c20f9408bceaea9ac5e77c0",
"assets/assets/map/anholt_osmbright/14/8722/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5042.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8722/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5042.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8725/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5042.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8709/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8720/5041.png": "ceb5efd315fd5a984d4cb87afc83182b",
"assets/assets/map/anholt_osmbright/14/8720/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8720/5042.png": "f73b3910fe51a21d317235463ffee9b3",
"assets/assets/map/anholt_osmbright/14/8720/5043.png": "4470bc110b4b88b3935aa44e37ac8245",
"assets/assets/map/anholt_osmbright/14/8720/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8720/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8720/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8720/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8720/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8720/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8720/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8720/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8720/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8720/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8718/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8718/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8718/5042.png": "180983ad697b6a58f3dfa50ace517ed8",
"assets/assets/map/anholt_osmbright/14/8718/5043.png": "de4eb8536f2da479ec9dbbb66ce0266a",
"assets/assets/map/anholt_osmbright/14/8718/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8718/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8718/5044.png": "21aaf27bf5def4fd30e148e4e3991359",
"assets/assets/map/anholt_osmbright/14/8718/5045.png": "a151601193f79e07e09d9e6ffa05093b",
"assets/assets/map/anholt_osmbright/14/8718/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8718/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8718/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8718/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8718/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8718/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5042.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8727/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5042.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8711/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8716/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8716/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8716/5042.png": "c4d62cced99160c123114d5538cdbdd0",
"assets/assets/map/anholt_osmbright/14/8716/5043.png": "3078f4fc87775a9106cd12bf0a8ba7d7",
"assets/assets/map/anholt_osmbright/14/8716/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8716/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8716/5044.png": "dd4b44af4ab7e5b02ad865540a010134",
"assets/assets/map/anholt_osmbright/14/8716/5045.png": "286a5f2521c24d25015f1e1eca37fefc",
"assets/assets/map/anholt_osmbright/14/8716/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8716/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8716/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8716/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8716/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8716/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8717/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8717/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8717/5042.png": "8d90ed6b2e47c4a12b374410fcbdc7bc",
"assets/assets/map/anholt_osmbright/14/8717/5043.png": "70e9dff0ba31d8cd499b6102e8d26f38",
"assets/assets/map/anholt_osmbright/14/8717/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8717/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8717/5044.png": "60c00b30afa92f89eb6ab8ad604da89e",
"assets/assets/map/anholt_osmbright/14/8717/5045.png": "448022c20286ee6846758c3418af7a41",
"assets/assets/map/anholt_osmbright/14/8717/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8717/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8717/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8717/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8717/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8717/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5042.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8710/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8719/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8719/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8719/5042.png": "8b2e52065435c485f1ca0d5616bbad03",
"assets/assets/map/anholt_osmbright/14/8719/5043.png": "8ee0457b86525358f47448c32720abb1",
"assets/assets/map/anholt_osmbright/14/8719/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8719/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8719/5044.png": "9ea100e460a623e8f6a4d3a3fb2ccbdb",
"assets/assets/map/anholt_osmbright/14/8719/5045.png": "09b763735b92c540379ac2a0c3583b51",
"assets/assets/map/anholt_osmbright/14/8719/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8719/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8719/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8719/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8719/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8719/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5041.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5042.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8726/5049.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8721/5041.png": "b613429f6036cace9c68060492c9a4dd",
"assets/assets/map/anholt_osmbright/14/8721/5040.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8721/5042.png": "e9fabc153e1d240ed78c8c2d0f1a197a",
"assets/assets/map/anholt_osmbright/14/8721/5043.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8721/5047.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8721/5046.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8721/5044.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8721/5045.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8721/5036.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8721/5037.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8721/5039.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8721/5038.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8721/5048.png": "d71bfe47ad0d520d6f06ef8186f70719",
"assets/assets/map/anholt_osmbright/14/8721/5049.png": "d71bfe47ad0d520d6f06ef8186f70719"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
