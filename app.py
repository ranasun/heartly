from flask import Flask, render_template, request
from joblib import load
import json

app = Flask(__name__)

@app.route("/heartly")
def main():
    return render_template('index.html')

@app.route("/heartly/predict", methods=["POST"])
def predict():
    payload = request.get_json()
    input = payload['input']
    model = load('model.joblib')
    pred = model.predict_proba([input])
    return json.dumps(pred.tolist()[0])

if __name__ == '__main__':
   app.run(host='0.0.0.0', port=4000)