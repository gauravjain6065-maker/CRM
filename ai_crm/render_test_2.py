import sys
import os

os.chdir('/home/gaurav/frappe-bench/sites')
sys.path.insert(0, '/home/gaurav/frappe-bench/apps/frappe')

import frappe
from frappe.website.page_renderers.template_page import TemplatePage

frappe.init(site='crm.local', sites_path='/home/gaurav/frappe-bench/sites')
frappe.connect()

frappe.local.session = frappe._dict(user='tellecaller@saarva.com', sid='dummy')
frappe.local.session.user = 'tellecaller@saarva.com'

# Render directly
page = TemplatePage('telecaller-home')
response = page.render()
html = response.get_data(as_text=True)

print('HTML LEN:', len(html))

with open('/home/gaurav/frappe-bench/apps/ai_crm/ai_crm/rendered_telecaller_home_2.html', 'w') as f:
    f.write(html)

print('Rendered html saved.')
frappe.destroy()
