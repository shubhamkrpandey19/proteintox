from flask import Flask, request, redirect, url_for
import time
from models import predict_from_file, predict_from_sequence
from flask_cors import CORS
import re
app = Flask(__name__, static_url_path="", static_folder="static")
CORS(app)

@app.route('/')
def load_root():
    return app.send_static_file('index.html')
    


@app.route('/api/sequence', methods=['POST'])
def predict_sequence():
    if request.method == 'POST':
        #try:
        print(request.json)
        sequence = request.json['sequence']
        x=re.search('[BXZbxz0123456789]', sequence)
        if x:
            return {"message": "something went wrong, please ensure sequence should not contain non standard amino acids and try again!"}, 400
        else:
            return predict_from_sequence(sequence)
            

@app.route('/api/fasta', methods=['POST'])
def predict_file():
    if request.method == 'POST':
        try:
            f = request.files['file']
            ts = time.time()
            file_name = "upload/data_{}.fasta".format(ts)
            f.save(file_name)
            return predict_from_file(file_name)
        except Exception as ex:
            return {"message": "something went wrong, please ensure file should be in fasta format only and try again!"}, 400

    
if __name__ == '__main__':
    app.run(debug=True)
