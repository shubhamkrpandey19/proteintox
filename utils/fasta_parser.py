import pandas as pd
from utils.feature_generator import FeatureGenerator


def get_df_from_fast(file_path):
    fh = open(file_path, 'r')
    final_list = []
    while True:
        line = fh.readline()
        if not line:
            break
        if '>' not in line:
            raise Exception("Not Valid Fasta")

        data_dic = {"meta_data": line}
        line = fh.readline()
        data_dic.update(FeatureGenerator.get_feature_dic(line))
        final_list.append(data_dic)
    data_df = pd.DataFrame(final_list)
    return data_df
