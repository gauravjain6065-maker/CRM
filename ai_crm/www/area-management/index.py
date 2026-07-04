from ai_crm.utils.auth import require_login

no_cache = 1

template = "templates/pages/area-management.html"

def get_context(context):
    require_login("/area-management")