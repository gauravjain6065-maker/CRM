import frappe


def require_login(page_path):
    """
    Check if the current user is logged in.
    If not, redirect them to the login page and bring them back
    to `page_path` after successful login.

    Usage in any www page's index.py:
        from ai_crm.utils.auth import require_login

        def get_context(context):
            require_login("/your-page-name")
    """
    if frappe.session.user == "Guest":
        frappe.local.flags.redirect_location = f"/login?redirect-to={page_path}"
        raise frappe.Redirect
