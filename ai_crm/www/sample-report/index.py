# template = "templates/pages/sample-report.html"

# def get_context(context):
#     context.no_cache = 1
import frappe
def get_context(context):
      if frappe.session.user == "Guest":
        frappe.local.flags.redirect_location = "/login?redirect-to=/area-management"
        raise frappe.Redirect