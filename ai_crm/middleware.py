import frappe

# All protected routes — guests will be redirected to login
PROTECTED_ROUTES = [
    "/area-management",
    "/caller-replacement",
    "/crm-dashboard",
    "/disposition-codes",
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
    Uses raise frappe.Redirect to STOP further request processing immediately.
    """
    if frappe.session.user != "Guest":
        return  # logged-in user, allow through

    try:
        path = frappe.local.request.path.rstrip("/")
    except Exception:
        return

    if path in PROTECTED_ROUTES:
        frappe.local.flags.redirect_location = f"/login?redirect-to={path}"
        raise frappe.Redirect  # ← This STOPS the request and forces a redirect
