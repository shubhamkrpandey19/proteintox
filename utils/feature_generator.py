import pandas as pd


class FeatureGenerator:
    @staticmethod
    def get_letters():
        letters = ["A", "R", "N", "D", "C", "E", "Q", "G", "H", "I", "L", "K", "M", "F", "P", "S", "T", "W", "Y", "V"]
        return letters

    @staticmethod
    def get_peptide_composition(protein_sequence):
        length_sequence = len(protein_sequence)
        result = {}
        for i in FeatureGenerator.get_letters():
            result[i] = round(float(protein_sequence.count(i)) / length_sequence * 100, 3)
        return result

    @staticmethod
    def get_di_peptide_composition(protein_sequence):
        length_sequence = len(protein_sequence)
        result = {}
        for i in FeatureGenerator.get_letters():
            for j in FeatureGenerator.get_letters():
                di_peptide = i + j
                result[di_peptide] = round(float(protein_sequence.count(di_peptide)) / (length_sequence - 1) * 100, 3)
        return result

    @staticmethod
    def get_tri_peptide_composition(protein_sequence):
        length_sequence = len(protein_sequence)
        result = {}
        for i in FeatureGenerator.get_letters():
            for j in FeatureGenerator.get_letters():
                for k in FeatureGenerator.get_letters():
                    tri_peptide = i + j + k
                    result[tri_peptide] = round(float(protein_sequence.count(tri_peptide)) / (length_sequence - 2) * 100, 3)
        return result

    @staticmethod
    def get_feature_df(protein_sequence):
        protein_sequence = protein_sequence.upper()
        features_dic = {"meta_data": protein_sequence}
        features_dic.update(FeatureGenerator.get_feature_dic(protein_sequence))
        features_df = pd.DataFrame(features_dic, index=[0])
        return features_df

    @staticmethod
    def get_feature_dic(protein_sequence):
        features_dic = FeatureGenerator.get_peptide_composition(protein_sequence)
        features_dic.update(FeatureGenerator.get_di_peptide_composition(protein_sequence))
        features_dic.update(FeatureGenerator.get_tri_peptide_composition(protein_sequence))
        return features_dic
