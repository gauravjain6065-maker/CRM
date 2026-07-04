import sys
import os

sys.path.insert(0, '/home/gaurav/frappe-bench/apps/frappe')
os.chdir('/home/gaurav/frappe-bench/sites')

import frappe
from frappe.utils.password import update_password

frappe.init(site='crm.local', sites_path='/home/gaurav/frappe-bench/sites')
frappe.connect()

# Check if user exists
result = frappe.db.sql(
    "SELECT name, username, user_type, enabled FROM `tabUser` WHERE name='tellecaller@saarva.com' OR username='tellecaller'",
    as_dict=True
)
print("=== User Check ===")
print("Found:", result)

if result:
    print("\nUser EXISTS. Resetting password...")
    update_password('tellecaller@saarva.com', 'tellecaller@1234')
    # Make sure user is enabled
    frappe.db.sql("UPDATE `tabUser` SET enabled=1, username='tellecaller' WHERE name='tellecaller@saarva.com'")
    frappe.db.commit()
    print("Password reset done.")
else:
    print("\nUser NOT FOUND. Creating now...")
    frappe.db.sql("""
        INSERT INTO `tabUser`
        (name, email, first_name, last_name, username, user_type, enabled,
         send_welcome_email, new_password, creation, modified, owner, modified_by, docstatus)
        VALUES
        ('tellecaller@saarva.com', 'tellecaller@saarva.com', 'Tele', 'Caller',
         'tellecaller', 'Website User', 1, 0, '', NOW(), NOW(),
         'Administrator', 'Administrator', 0)
    """)
    frappe.db.commit()
    update_password('tellecaller@saarva.com', 'tellecaller@1234')
    frappe.db.commit()
    print("User created successfully!")

# Verify password entry
pwd_check = frappe.db.sql(
    "SELECT name, `user` FROM `__Auth` WHERE `user`='tellecaller@saarva.com' AND `doctype`='User'",
    as_dict=True
)
print("\n=== Password Entry ===")
print("Auth record:", pwd_check)

frappe.destroy()
