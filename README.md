<h1>Currency Converter</h1>

<br/><br/>
<h3>
About The App
</h3>

<p> 
The App can be accessed using two ways:
1. Accessing without the help of any backend API
2. Accessing using the API (using Exchange Rates API: https://exchangeratesapi.io/)

Tech Stack:
1. React Native 
2. Backend API: https://exchangeratesapi.io/ 
3. Testing: Jest
4. Other Dependencies are available in package.json file.
5. Postman to extract the dump(Curencies, Conversion rates
(considering USD as base currency)).
</p>

<br/><br/><br/>
<h3>
Access the app: without any modifications
</h3>
1. Clone the repo
2. Run the command to install all the dependencies: 
```
$ npm i
```
or
```
$ npm install
```

3. Download EXPO GO on the device 
(This code is tested using Android Device only)

4. Run the command to start the app:
```
$ npx expo start
``` 

5. Scan the QR using Expo Go App, Android Bundling will start
6. After the Android Bundling is complete, access the app

<br/><br/><br/><br/>
<h3>
Access the app: using the API
</h3>


1. Clone the repo
2. Run the command to install all the dependencies: 
```
$ npm i
```
or
```
$ npm install
```

3.Access the API:
1. Create a free account, where you can hit an API for 250times/month
2. You will be assigned an API key, Go to
```
env-config.js -> add the API_Key
```
3. Uncomment and comment out the lines of the files:
```
1.source\CurrencyList\useCurrencyCountry.js
2.source\BaseCurrencyList\useConversion.js
```

4. Download EXPO GO on the device 
(This code is tested using Android Device only)

5. Run the command to start the app:
```
$ npx expo start
``` 

6. Scan the QR using Expo Go App, Android Bundling will start
7. After the Android Bundling is complete, access the app
