class knoot_routers(object):

    def db_for_read(self,model,**hints):
        if model._meta.app_label=='knoot':
            return 'default'
        return None

    def db_for_write(self,model,**hints):
        if model._meta.app_label=='knoot':
            return 'default'
        return None

    def allow_relation(self,obj1,obj2,**hints):
        if obj1._meta.app_label == 'knoot' or obj2._meta.app_label == 'knoot':
            return True
        return None

    def allow_migrate(self,db, app_label, model_name=None,**hints):
        if app_label == 'default':
            return db=='mongo'
        return None