import re

def html_to_jsx(html):
    # Replace class with className
    html = re.sub(r'\s+class="', ' className="', html)
    # Replace for with htmlFor
    html = re.sub(r'\s+for="', ' htmlFor="', html)
    # Handle self-closing tags
    html = re.sub(r'<(img|input|hr|br|link|meta)([^>]*?)(?<!/)>', r'<\1\2 />', html)
    
    # Remove style="..."
    html = re.sub(r'\s+style="[^"]*"', '', html)
    
    # Also remove href="javascript:;" -> href="#"
    html = html.replace('href="javascript:;"', 'href="#"')
    
    # Remove HTML comments
    html = re.sub(r'<!--.*?-->', '', html, flags=re.DOTALL)
    
    # Fix inline SVG viewBox if needed (often viewBox is fine, but JSX expects camelCase for some attributes)
    # The Metronic SVGs typically just use standard attributes. 
    # But wait, stroke-width -> strokeWidth, stroke-linecap -> strokeLinecap etc
    html = html.replace('stroke-width', 'strokeWidth')
    html = html.replace('stroke-linecap', 'strokeLinecap')
    html = html.replace('stroke-linejoin', 'strokeLinejoin')
    html = html.replace('stroke-dasharray', 'strokeDasharray')
    html = html.replace('stroke-dashoffset', 'strokeDashoffset')
    html = html.replace('data-kt-toggle="true"', 'data-kt-toggle="true"') # just as an example
    
    return html

with open('dashboard.html', 'r', encoding='utf-8') as f:
    html = f.read()

# First, remove custom b- attributes from the whole html so we can easily search
html = re.sub(r'\s+b-[a-zA-Z0-9]+=""', '', html)

start_idx = html.find('<div class="d-flex flex-column flex-root app-root" id="kt_app_root">')
end_idx = html.find('</body>')

if start_idx == -1:
    print("Could not find kt_app_root!")
    exit(1)

app_root_html = html[start_idx:end_idx]

jsx_code = html_to_jsx(app_root_html)

# Replace the kt_app_content_container with {children}
jsx_code = re.sub(r'<div id="kt_app_content_container".*?</div>\s*</div>\s*</div>', 
    r'<div id="kt_app_content_container" className="app-container container-fluid">{children}</div></div></div>', 
    jsx_code, flags=re.DOTALL)

# Insert the EV charger dropdown before "Manage Icons"
ev_charger_menu = """
<div data-kt-menu-trigger="click" className="menu-item menu-accordion">
    <span className="menu-link ev-charger-menu-link">
        <span className="menu-icon">
            <i className="fa-solid fa-charging-station fs-2"></i>
        </span>
        <span className="menu-title">EV Charger</span>
        <span className="menu-arrow"></span>
    </span>
    <div className="menu-sub menu-sub-accordion">
        <div className="menu-item"><a className="menu-link" href="#" onClick={(e)=>{e.preventDefault(); setActiveTab('ev-live');}}><span className="menu-bullet"><span className="bullet bullet-dot"></span></span><span className="menu-title">Live Session</span></a></div>
        <div className="menu-item"><a className="menu-link" href="#" onClick={(e)=>{e.preventDefault(); setActiveTab('ev-find');}}><span className="menu-bullet"><span className="bullet bullet-dot"></span></span><span className="menu-title">Find Charger</span></a></div>
        <div className="menu-item"><a className="menu-link" href="#" onClick={(e)=>{e.preventDefault(); setActiveTab('ev-trip');}}><span className="menu-bullet"><span className="bullet bullet-dot"></span></span><span className="menu-title">Trip Planner</span></a></div>
        <div className="menu-item"><a className="menu-link" href="#" onClick={(e)=>{e.preventDefault(); setActiveTab('ev-stats');}}><span className="menu-bullet"><span className="bullet bullet-dot"></span></span><span className="menu-title">Analytics</span></a></div>
        <div className="menu-item"><a className="menu-link" href="#" onClick={(e)=>{e.preventDefault(); setActiveTab('ev-energy');}}><span className="menu-bullet"><span className="bullet bullet-dot"></span></span><span className="menu-title">Energy Hub</span></a></div>
        <div className="menu-item"><a className="menu-link" href="#" onClick={(e)=>{e.preventDefault(); setActiveTab('ev-v2g');}}><span className="menu-bullet"><span className="bullet bullet-dot"></span></span><span className="menu-title">V2G / Exports</span></a></div>
        <div className="menu-item"><a className="menu-link" href="#" onClick={(e)=>{e.preventDefault(); setActiveTab('ev-ailog');}}><span className="menu-bullet"><span className="bullet bullet-dot"></span></span><span className="menu-title">AI Decision Log</span></a></div>
        <div className="menu-item"><a className="menu-link" href="#" onClick={(e)=>{e.preventDefault(); setActiveTab('ev-fleet');}}><span className="menu-bullet"><span className="bullet bullet-dot"></span></span><span className="menu-title">Fleet</span></a></div>
        <div className="menu-item"><a className="menu-link" href="#" onClick={(e)=>{e.preventDefault(); setActiveTab('ev-profile');}}><span className="menu-bullet"><span className="bullet bullet-dot"></span></span><span className="menu-title">Profile</span></a></div>
    </div>
</div>
"""

jsx_code = jsx_code.replace('<div className="menu-item">\n                                        <a href="/ManageIcons/Index" className="menu-link manage-icon-menu-link">', 
    ev_charger_menu + '\n                                    <div className="menu-item">\n                                        <a href="/ManageIcons/Index" className="menu-link manage-icon-menu-link">')

# Strip out some weird script tags if any
jsx_code = re.sub(r'<script.*?</script>', '', jsx_code, flags=re.DOTALL)

# Add standard React boilerplate
result = f'''import React, {{ useEffect }} from "react";

export default function MetronicLayout({{ children, activeTab, setActiveTab }}) {{
  useEffect(() => {{
    document.body.id = "kt_app_body";
    document.body.className = "app-default";
    document.body.setAttribute("data-kt-app-header-fixed", "true");
    document.body.setAttribute("data-kt-app-header-fixed-mobile", "true");
    document.body.setAttribute("data-kt-app-sidebar-enabled", "true");
    document.body.setAttribute("data-kt-app-sidebar-fixed", "true");
    document.body.setAttribute("data-kt-app-sidebar-hoverable", "true");
    document.body.setAttribute("data-kt-app-sidebar-push-toolbar", "true");
    document.body.setAttribute("data-kt-app-sidebar-push-footer", "true");
    document.body.setAttribute("data-kt-app-aside-enabled", "true");
    document.body.setAttribute("data-kt-app-aside-fixed", "true");
    document.body.setAttribute("data-kt-app-aside-push-toolbar", "true");
    document.body.setAttribute("data-kt-app-aside-push-footer", "true");
  }}, []);

  return (
{jsx_code}
  );
}}
'''

with open('elsaenergy-agritech/Elsaenergy-Agritech-main/src/MetronicLayout.jsx', 'w', encoding='utf-8') as f:
    f.write(result)

print("Generated MetronicLayout.jsx perfectly")
