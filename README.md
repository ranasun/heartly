# Heartly

A machine learning web application that predicts a person's risk of developing heart disease based on their demographics, lifestyle, health status, and pre-existing disease.

![screenshot](./screenshot.png)

[Live Demo](https://heartly.randya.dev)

## Getting Started

### Prerequisites

-   [Anaconda](https://www.anaconda.com/)

### Installation

```
pip3 install -r requirements.txt
```

## Usage

A live version of this app is available [here](https://heartly.randya.dev)

### Development

1. In terminal, type <code>FLASK_ENV=development flask run --port=4000</code>
2. Go to http://localhost:4000/heartly

### Docker

1. Download and install Docker Desktop from this [website](https://www.docker.com/get-started/)
2. Open a terminal window
3. To build the image, type <code>docker build -t heartly .</code>
4. To run the container, type <code>docker run -p 4000:4000 heartly</code>
5. Go to http://localhost:4000/heartly

## Built with

-   [Flask](https://flask.palletsprojects.com/)
-   [Vue.js](https://vuejs.org/)
-   [Vuetify](https://vuetifyjs.com/en/)
-   [Plotly](https://plotly.com/javascript/)
-   [Axios](https://axios-http.com/docs/intro)
-   [Docker](https://www.docker.com/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
