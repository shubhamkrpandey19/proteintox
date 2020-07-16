from models.cardiotoxic import CardioToxic
from models.enterotoxic import EnteroToxic
from models.neurotoxic import NeuroToxic
from utils.fasta_parser import get_df_from_fast
import pandas as pd


def run():

    CardioToxic.train_and_save_model()
    EnteroToxic.train_and_save_model()
    NeuroToxic.train_and_save_model()
  


if __name__ == "__main__":
    run()
