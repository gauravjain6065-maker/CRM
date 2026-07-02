# import frappe

#    def get_context(context):
#        if frappe.session.user == "Guest":
#            frappe.local.flags.redirect_location = "/login?redirect-to=/area-management"
#            raise frappe.Redirect
import frappe
def get_context(context):
      if frappe.session.user == "Guest":
        frappe.local.flags.redirect_location = "/login?redirect-to=/area-management"
        raise frappe.Redirect