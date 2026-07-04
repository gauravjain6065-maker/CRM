import sys
import os
import hashlib

os.chdir('/home/gaurav/frappe-bench/sites')
sys.path.insert(0, '/home/gaurav/frappe-bench/apps/frappe')

import frappe
from frappe.utils.password import update_password

frappe.init(site='crm.local', sites_path='/home/gaurav/frappe-bench/sites')
frappe.connect()

email = 'tellecaller@saarva.com'

# Check if user exists
exists = frappe.db.sql("SELECT name FROM `tabUser` WHERE name=%s", (email,))

if exists:
    print("User exists, resetting password...")
    # Update username
    frappe.db.sql("UPDATE `tabUser` SET username='tellecaller' WHERE name=%s", (email,))
    # Set password using Frappe's method (bypasses queue)
    update_password(email, 'tellecaller@1234')
    frappe.db.commit()
    print("Password reset to tellecaller@1234")
else:
    # Insert user directly via SQL
    frappe.db.sql("""
        INSERT INTO `tabUser`
            (name, email, first_name, last_name, username, user_type,
             enabled, send_welcome_email, creation, modified, owner, modified_by)
        VALUES
            (%s, %s, 'Tele', 'Caller', 'tellecaller', 'Website User',
             1, 0, NOW(), NOW(), 'Administrator', 'Administrator')
    """, (email, email))
    frappe.db.commit()

    # Set password
    update_password(email, 'tellecaller@1234')
    frappe.db.commit()
    print("SUCCESS: Telecaller user created!")
    print("  Email   : tellecaller@saarva.com")
    print("  Username: tellecaller")
    print("  Password: tellecaller@1234")

frappe.destroy()
