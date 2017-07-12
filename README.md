Web Application
=========
Overview
----------
This web application demonstrates calling the [Google Maps Distance Matrix API](https://developers.google.com/maps/documentation/distance-matrix/start) from ASP.NET MVC.

Description
-------------
The code that calls the Google Maps Distance Matrix API is in the `MeController` class, which provides a GET method through which to call the API.  `index.html` and `main.js` provider the user interface to this method.

Running and Deploying
-------------
Running and deploying this application requires Visual Studio 2015 or higher.  (The [Community Edition](https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=Community&rel=15) is acceptable.)

To run the application, open the `WebApplication.csproj` project in Visual Studio and run Debug > Run Application.  To deploy the application, use Debug > Start Debugging.