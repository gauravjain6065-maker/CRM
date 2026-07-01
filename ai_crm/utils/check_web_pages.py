import frappe

def run():
    pages = frappe.db.get_all('Web Page', fields=['name', 'route'])
    print("=== Web Page Documents in DB ===")
    for p in pages:
        print(f"Name: {p.name} | Route: {p.route}")
