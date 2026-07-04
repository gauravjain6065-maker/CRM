import frappe

template = "templates/pages/sample-report.html"

def get_context(context):
    context.no_cache = 1
    
    # Restrict to CRM Admin / Administrator
    user = frappe.session.user
    roles = frappe.get_roles(user)
    if "CRM Admin" not in roles and user != "Administrator":
        frappe.local.flags.redirect_location = "/lead-management"
        raise frappe.Redirect
