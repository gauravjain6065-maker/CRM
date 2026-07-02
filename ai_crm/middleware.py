import frappe

# All protected routes — guests will be redirected to login
PROTECTED_ROUTES = [
    "/area-management",
    "/caller-replacement",
    "/crm-dashboard",
    "/lead-import",
    "/lead-management",
    "/lead-source",
    "/price-config",
    "/sample-report",
    "/user-management",
]


def check_guest_access():
    """
    Middleware that runs before every request.
    Redirects Guest users to /login if they try to access a protected page.
    Registered in hooks.py as: before_request = ["ai_crm.middleware.check_guest_access"]
    """
    if frappe.session.user != "Guest":
        return  # logged-in user, allow through

    try:
        path = frappe.local.request.path.rstrip("/")
    except Exception:
        return

    if path in PROTECTED_ROUTES:
        frappe.local.response["type"] = "redirect"
        frappe.local.response["location"] = f"/login?redirect-to={path}"
