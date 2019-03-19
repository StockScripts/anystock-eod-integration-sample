[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://www.anychart.com)
# AnyStock - EOD Historical Data integration demo
This demo shows how to use AnyStock charts with EOD Historical Data vendor.

## Overview
AnyStock offers a large set of features, that allow you to build your online financial portal and one of the most exciting features is the ability to draw/display on the chart so called drawing tools or, as they are called in our [documentation](https://docs.anychart.com/) and settings, annotations.

EOD Historical Data provides FUNDAMENTAL data, REAL-TIME and DAILY historical stock prices for stocks, ETFs and Mutual Funds all around the world. Market coverage is more than 60+ stock exchanges and more than 120 000+ symbols all over the world. We also support 120+ CRYPTO currencies and 150+ FOREX pairs.

## Running

To use this sample you must have package manager for Node.js - NPM installed. If not please visit [NodeJS official site](https://nodejs.org/en/).

**To start this example run commands listed below.**
Clone the repository from github.com:
```bash
git clone git@github.com:anychart-integrations/anystock-eod-integration-sample.git
```

Navigate to the demo folder:
```bash
cd anystock-eod-integration-sample
```

Install dependencies:
```bash
npm install
```

Run the nodejs server with `{PORT}` argument to start a NodeJS server on the required port. The default port is 8080. The server executes a request to EOD server and forwards received data to the client side.
```bash
npm run start {PORT}
```
For example, launch command with a 8088 port is the following:
```bash
npm run start 8088
```

Open browser at `http://localhost:{PORT}/`.
For example, for a 8088 port: `http://localhost:8088/`.

Please, keep in mind that receiving data from the EOD server may take a few seconds.

## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://www.anychart.com/support)
* [EOD Historical Data](https://eodhistoricaldata.com)
* [EOD Knowledge Base](https://eodhistoricaldata.com/knowledgebase)

## License
AnyStock - EOD Historical Data integration demo includes two parts:
- Code of the demo that allows to use Javascript library (in this case, AnyChart) with WebSocket protocol. You can use, edit, modify it, use it with other Javascript libraries without any restrictions. It is released under [Apache 2.0 License](https://github.com/anychart-integrations/python-django-mysql-template/blob/master/LICENSE).
- AnyChart JavaScript library. It is released under Commercial license. You can test this plugin with the trial version of AnyChart. Our trial version is not limited by time and doesn't contain any feature limitations. Check details [here](https://www.anychart.com/buy/).

If you have any questions regarding licensing - please contact us. <sales@anychart.com>
