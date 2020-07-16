import pickle


def save_pickel_obj(obj, file_name):
    out_file = open('pickels/{}'.format(file_name), 'wb')
    pickle.dump(obj, out_file)
    out_file.close()
    return True


def load_pickel_obj(file_name):
    in_file = open('pickels/{}'.format(file_name), 'rb')
    obj = pickle.load(in_file)
    in_file.close()
    return obj
