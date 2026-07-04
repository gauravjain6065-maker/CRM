from ai_crm.utils.auth import require_login

no_cache = 1

template = "templates/pages/telecaller-fresh.html"

def get_context(context):
    require_login("/telecaller-fresh")
