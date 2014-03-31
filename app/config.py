import os.path

class Config(object):
    DEBUG = False
    TESTING = False
    PROJECT_PATH = os.path.dirname(os.path.abspath(__file__))
    APP_DATA_PATH = os.path.join(PROJECT_PATH, 'App_Data')
    VERSION = '0.1'

class ProductionConfig(Config):
    DEBUG = False

class DevelopmentConfig(Config):
    DEBUG = True

