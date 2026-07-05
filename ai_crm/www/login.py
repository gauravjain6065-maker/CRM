import frappe
from frappe.www.login import get_context as frappe_get_context

no_cache = 1

def get_context(context):
    context = frappe_get_context(context)
    return context
