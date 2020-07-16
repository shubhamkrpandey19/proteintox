from math import sqrt

import numpy as np
import pandas as pd
from boruta import BorutaPy
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from utils.pickel_helper import save_pickel_obj, load_pickel_obj
from utils import Printer


class NeuroToxic:
    @staticmethod
    def train_and_save_model():
        # load and pre-process data
        Printer.info("load and pre-process data", "Neuro")
        data_sets = pd.read_csv('data/neuro_train_data.csv')
        x_data = data_sets.iloc[:, 1:]
        y_data = data_sets.iloc[:, 0]

        scalar = MinMaxScaler()
        x_train, x_test, y_train, y_test = train_test_split(x_data, y_data, test_size=0.2, random_state=0)
        x_train = scalar.fit_transform(x_train)
        x_test = scalar.transform(x_test)
        Printer.info("saving scalar pickel", "Neuro")
        save_pickel_obj(scalar, 'neuro_scalar.pickel')

        # feature selection and model creation
        Printer.info("feature selection and model creation", "Neuro")
        rfc = RandomForestClassifier()
        boruta_selector = BorutaPy(rfc, n_estimators='auto', verbose=0, max_iter=50, perc=90)
        boruta_selector.fit(np.array(x_data), np.array(y_data))
        save_pickel_obj(boruta_selector, 'neuro_boruta_selector.pickel')

        x_train = boruta_selector.transform(x_train)
        x_test = boruta_selector.transform(x_test)

        clf=RandomForestClassifier(random_state=0, n_estimators=800, max_depth=5)
        Printer.info("Train Model", "Neuro")
        neuro_model = clf.fit(x_train, y_train)
        save_pickel_obj(neuro_model, 'neuro_model.pickel')

        y_pred = neuro_model.predict(x_test)
        # calculation matrix
        Printer.info("Calculation matrix", "Neuro")
        confusion_matrix_neuro = confusion_matrix(y_test, y_pred)
        TP = confusion_matrix_neuro[0][0]
        FN = confusion_matrix_neuro[0][1]
        FP = confusion_matrix_neuro[1][0]
        TN = confusion_matrix_neuro[1][1]
        precision = TP / (TP + FP)
        sensitivity = TP / (TP + FN)
        specificity = TN / (TN + FP)
        accuracy = (TP + TN) / (TP + TN + FP + FN)
        a = ((TP * TN) - (FP * FN))
        b = (TP + FP) * (TP + FN) * (TN + FP) * (TN + FN)
        MCC = (a / sqrt(b))

        print("prediction evaluation on Test set")
        print("Accuracy=", accuracy)
        print("precision=", precision)
        print("sensitivity=", sensitivity)
        print("specificity=", specificity)
        print("F1_Score=", (2 * precision * sensitivity) / (precision + sensitivity))
        print("MCC=", MCC)

    def __init__(self):
        Printer.info("Loading Data", "Neuro")
        self.scalar = load_pickel_obj('neuro_scalar.pickel')
        self.neuro_boruta_selector = load_pickel_obj('neuro_boruta_selector.pickel')
        self.neuro_model = load_pickel_obj('neuro_model.pickel')

    def predict(self, x_predict_df):
        x_predict_scalar = self.scalar.transform(x_predict_df)
        x_selected_feature = self.neuro_boruta_selector.transform(x_predict_scalar)
        y_predict = self.neuro_model.predict(x_selected_feature)
        return y_predict
