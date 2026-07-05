import sys
import os

os.chdir('/home/gaurav/frappe-bench/sites')
sys.path.insert(0, '/home/gaurav/frappe-bench/apps/frappe')

import frappe
frappe.init(site='crm.local', sites_path='/home/gaurav/frappe-bench/sites')

print('APP PATH:', frappe.get_app_path('ai_crm'))
frappe.destroy()
