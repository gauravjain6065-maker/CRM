from ai_crm.utils.auth import require_login

no_cache = 1

template = "templates/pages/crm-dashboard.html"

def get_context(context):
    require_login("/crm-dashboard")