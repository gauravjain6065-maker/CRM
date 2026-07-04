import sys
import os

os.chdir('/home/gaurav/frappe-bench/sites')
sys.path.insert(0, '/home/gaurav/frappe-bench/apps/frappe')

import frappe
from frappe.website.serve import get_response

frappe.init(site='crm.local', sites_path='/home/gaurav/frappe-bench/sites')
frappe.connect()

# Set up request context as logged in user
frappe.local.request = frappe._dict(path='/telecaller-home', method='GET')
frappe.local.session = frappe._dict(user='tellecaller@saarva.com', sid='dummy')
frappe.local.session.user = 'tellecaller@saarva.com'

response = get_response('telecaller-home')
print('STATUS:', response.status_code)
html = response.get_data(as_text=True)
print('HTML LEN:', len(html))

# Write rendered HTML to a temp file so we can view it
with open('/home/gaurav/frappe-bench/apps/ai_crm/ai_crm/rendered_telecaller_home.html', 'w') as f:
    f.write(html)

print('Rended HTML saved to apps/ai_crm/ai_crm/rendered_telecaller_home.html')
frappe.destroy()
