class Printer:

    @staticmethod
    def info(msg, module_name="main"):
        print('[ INFO ] -- {} - {}'.format(module_name, msg))

    @staticmethod
    def error(msg, module_name="main"):
        print('[ ERROR ] -- {} - {}'.format(module_name, msg))

    @staticmethod
    def warn(msg, module_name="main"):
        print('[ WARNING ] -- {} - {}'.format(module_name, msg))
