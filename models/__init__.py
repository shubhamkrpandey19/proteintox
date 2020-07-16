from models.cardiotoxic import CardioToxic
from models.enterotoxic import EnteroToxic
from models.neurotoxic import NeuroToxic
from utils.fasta_parser import get_df_from_fast
from utils.feature_generator import FeatureGenerator
from utils import Printer

cardio_toxic_model = CardioToxic()
entero_toxic_model = EnteroToxic()
neuro_toxic_model = NeuroToxic()


def predict_from_file(file_name):
    data_df = None
    try:
        data_df = get_df_from_fast(file_name)
    except Exception as ex:
        Printer.error("File Format Invalid", "Utils")
        return {
                   "message": "invalid file data"
               }, 400
    try:
        input_df = data_df.iloc[:, 1:]
        data_df['cardio_result'] = cardio_toxic_model.predict(input_df)
        data_df['entero_result'] = entero_toxic_model.predict(input_df)
        data_df['neuro_result'] = neuro_toxic_model.predict(input_df)
        result_df = data_df[['meta_data', 'cardio_result', 'entero_result', 'neuro_result']]
        return result_df.to_json(orient='records')
    except Exception as ex:
        Printer.error("File Format Invalid", "Utils")
        return {
                   "message": "Fail to process data"
               }, 500


def predict_from_sequence(sequence):
    data_df = None
    try:
        data_df = FeatureGenerator.get_feature_df(sequence)
    except Exception as ex:
        Printer.error("File Format Invalid", "Utils")
        return {
                   "message": "invalid file data"
               }, 400
    try:
        input_df = data_df.iloc[:, 1:]
        data_df['cardio_result'] = cardio_toxic_model.predict(input_df)
        data_df['entero_result'] = entero_toxic_model.predict(input_df)
        data_df['neuro_result'] = neuro_toxic_model.predict(input_df)
        result_df = data_df[['meta_data', 'cardio_result', 'entero_result', 'neuro_result']]
        return result_df.to_json(orient='records')
    except Exception as ex:
        Printer.error("File Format Invalid", "Utils")
        return {
                   "message": "Fail to process data"
               }, 500

